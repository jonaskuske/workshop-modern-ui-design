<?php
$DEBUG = false;
$self_mail = 'Modern UI Design <workshop@modern-ui.design>';

set_exception_handler(function ($error) {
  global $DEBUG;

  $message = $error->getMessage();
  respond('Internal Server Error' . ($DEBUG ? ": $message" : ''), 500);
});

// Allow CORS
header('Access-Control-Allow-Origin: https://modern-ui.design');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Requested-With');

$req_method = $_SERVER['REQUEST_METHOD'];
$content_type = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';

$accept = isset($_SERVER['HTTP_ACCEPT']) ? trim($_SERVER['HTTP_ACCEPT']) : '';
$accepts_html = strpos($accept, 'text/html') !== false;
$accepts_json = strpos($accept, 'application/json') !== false;

$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : false;

// Allow all OPTIONS (especially CORS Preflight) requests
if (strcasecmp($req_method, 'OPTIONS') == 0) {
  respond(null, 200);
}

// Only accept text/html and application/json as requested response content type
if (!$accepts_html && !$accepts_json) {
  respond('Endpoint can only respond with text/html or application/json as Content-Type.', 406);
}

// Only accept POST requests
if (strcasecmp($req_method, 'POST') != 0) {
  respond('Endpoint only accepts POST requests.', 405);
}

$user = [];

// Get user from POST data if Content-Type is URL encoded or JSON
if (strcasecmp($content_type, 'application/x-www-form-urlencoded') == 0) {
  $user['name'] = $_POST['name'];
  $user['email'] = $_POST['email'];
  $user['semester'] = $_POST['semester'];
} elseif (strcasecmp($content_type, 'application/json') == 0) {
  $raw = trim(file_get_contents('php://input'));
  $json = json_decode($raw, true);

  if (!is_array($json)) {
    respond('Received invalid JSON.', 400);
  }

  $user['name'] = $json['name'];
  $user['email'] = $json['email'];
  $user['semester'] = strval($json['semester']);
} else {
  respond('Unsupported Content-Type.', 400);
}

// Ensure all required parameters exist
if (!isset($user['name']) || !isset($user['email']) || !isset($user['semester'])) {
  respond("Bad request: \"name\", \"email\" and \"semester\" are required parameters.", 400);
}

// Ensure parameters are valid
if (
  strlen(trim($user['name'])) == 0 ||
  strlen(trim($user['semester'])) == 0 ||
  filter_var($user['email'], FILTER_VALIDATE_EMAIL) == false
) {
  respond('Invalid or missing data.', 400);
}

/**
 *
 *
 *
 *
 *
 */

send_notice($user);

try {
  send_confirmation($user);
} catch (Exception $error) {
  $msg = $error->getMessage();
  error_log("Fehler beim Senden der Bestätigung an {$user['name']} <{$user['email']}>: $msg");
}

respond('Anmeldung erfolgreich!', 200, $user);

/**
 *
 *
 *
 *
 *
 */

function respond($message, $code, $data = null)
{
  global $accepts_html, $accepts_json, $referer, $DEBUG;
  $is_error = $code >= 300;

  if ($accepts_html) {
    if ($referer) {
      $url = preg_replace('/\?.*/', '', $referer);
      $query = '?' . ($is_error ? '❌' : '☑');
      if ($DEBUG && $is_error) {
        $query .= "&code=$code&msg=$message";
      }
      header('Location: ' . $url . $query . '#anmelden');
    } else {
      header('Content-Type: text/html');
      http_response_code($code);
      echo '<p>' . ($is_error ? "<b>$code</b>: " : '') . "$message</p>";
    }
  } elseif ($accepts_json) {
    http_response_code($code);
    echo json_encode(is_null($data) ? ['message' => $message] : $data);
  } else {
    http_response_code($code);
    echo $message;
  }

  die();
}

function send_notice($user)
{
  global $self_mail;

  $subject = 'Neue Anmeldung zum Workshop';
  $message = "Hallo Rieke und Jonas,

hier ist euer PHP Script. Wie geht's?
Es gibt eine neue Anmeldung zu eurem Workshop:

Name: {$user['name']}
Semester: {$user['semester']}
Mail-Adresse: {$user['email']}

Juhu!

Liebe Grüße,
euer PHP Script :-)";

  return send_mail($self_mail, $subject, $message);
}

function send_confirmation($user)
{
  $first_name = explode(' ', trim($user['name']))[0];
  $subject = 'Deine Anmeldung zum Workshop';
  $message = "Hallo $first_name,

vielen Dank für deine Anmeldung zu unserem Workshop.
Hier noch einmal alle Termine im Überblick:

Workshop 1: 28.10.2019
Workshop 2: 11.11.2019
Workshop 3: 25.11.2019
Workshop 4: 09.12.2019

Einige Tage vor den Workshops erinnern wir dich nochmal per E-Mail.

Wir freuen uns auf dich!

Liebe Grüße
Rieke & Jonas";

  return send_mail($user['email'], $subject, $message);
}

function send_mail($to, $subject, $message)
{
  global $self_mail;

  $headers = [
    'From' => $self_mail,
    'Reply-To' => $self_mail,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=utf-8',
    'X-Mailer' => 'PHP/' . phpversion(),
  ];

  $success = mail($to, '=?utf-8?B?' . base64_encode($subject) . '?=', $message, $headers);

  if (!$success) {
    throw new Exception('mail() errored, please check mail.log');
  }

  return $success;
}
