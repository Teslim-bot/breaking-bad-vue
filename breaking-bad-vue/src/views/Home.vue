<template>
  <div class="container">
    <Header/>
    <Characters/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Characters from '../components/Characters.vue'

export default {
  name: "Home",
  components: {
    Header,
    Characters,
  },
};
</script>

<style scoped>
 .container {
  margin: auto;
  padding: 0 20px;
}
</style>
