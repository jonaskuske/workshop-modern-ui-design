<template>
  <main>
    <h1>Profil</h1>
    <p>
      <img src="https://modern-ui.design/assets/images/jonas.jpg" alt="" />
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, laboriosam nulla. Culpa
        possimus distinctio, reprehenderit cumque totam repellendus enim adipisci exercitationem
        reiciendis laudantium est. Perspiciatis facilis iusto distinctio ullam! Expedita.
      </span>
      <br />
      <br />
      <span>
        Fugiat expedita recusandae officia quis a deserunt accusantium voluptates ea, illo labore?
        Dolore soluta expedita quod labore, recusandae sint voluptatem sapiente voluptas aliquid
        maiores non voluptatum quam quas! Repellendus, dolores.
      </span>
    </p>

    <footer>
      <RouterLink to="/profil/bearbeiten" tag="BaseButton">Bearbeiten</RouterLink>
      <BaseButton>Abmelden</BaseButton>
    </footer>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  float: right;
  width: 150px;
  border-radius: 50%;
  margin: 0 0 1rem 1rem;
}

footer {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
}
</style>
