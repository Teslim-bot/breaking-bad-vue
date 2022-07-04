<template>
  <header>
    <div class="main">
      <div class="img-holder">
        <p class="logo-holder">
          <img class="logo-img" src="../assets/teslim-bot.png" alt="" />
        </p>
        <p><img class="bb-img" src="../assets/breaking-bad.png" alt="" /></p>
        <p class="empty">&nbsp;</p>
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
  justify-content: space-between;
  margin-bottom: 2rem;
}

.logo-holder {
  flex: 1;
}
.empty {
  flex: 1;
}
.logo-img {
  height: 10rem;
}
.bb-img {
  width: 100%;
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
@media (max-width: 500px) {
  .img-holder {
    flex-direction: column;
  }
  .logo-img,
  .bb-img {
    height: 7rem;
  }
}
</style>
