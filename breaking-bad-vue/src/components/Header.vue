<template>
  <header>
    <div class="main">
      <div class="img-holder">
        <img class="logo-img" src="../assets/teslim-bot.png" alt="" />

        <img src="../assets/breaking-bad.png" class="img" alt="" />
      </div>
      <p>
        API from
        <a target="_blank" href="https://breakingbadapi.com/"
          >https://breakingbadapi.com/</a
        >
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  text-align: center;
  padding: 20px;
  color: white;
  font-size: 40px;
  margin-bottom: 3rem;
}
.img-holder {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}
.logo-img {
  height: 10rem;
}
.img {
  margin: auto;
}
.main p {
  font-size: 19px;
}
.main a {
  color: #8f8fe3;
  text-decoration: none;
}
.main a:focus {
  color: black;
}
.main a:hover {
  color: #a5a5e0;
}
</style>
