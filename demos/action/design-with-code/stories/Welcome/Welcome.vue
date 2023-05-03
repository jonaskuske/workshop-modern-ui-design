<template>
  <div :style="main">
    <h1>Welcome to Storybook!</h1>
    <p>This is a UI component dev environment for your app.</p>
    <p>
      A story is a single state of one or more UI components. You can have as many stories as you
      want. <br />(Basically a story is like a visual test case.)
    </p>
    <p>
      Just like that, you can add your own components as stories.<br />
      You can also edit those components and see changes right away.
    </p>
    <p>
      This is just one thing you can do with Storybook.<br />
      Have a look at the
      <a
        :style="link"
        href="https://github.com/storybookjs/storybook"
        target="_blank"
        rel="noopener noreferrer"
      >
        Storybook
      </a>
      repo for more information.
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    main: {
      padding: 15,
      lineHeight: 1.4,
      fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
      backgroundColor: '#ffffff',
    },

    link: {
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2,
    },

    code: {
      fontSize: 15,
      fontWeight: 600,
      padding: '2px 5px',
      border: '1px solid #eae9e9',
      borderRadius: 4,
      backgroundColor: '#f3f2f2',
      color: '#3a3a3a',
    },
  }),
}
</script>
