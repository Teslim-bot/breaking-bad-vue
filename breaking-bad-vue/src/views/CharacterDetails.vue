<template>
  <div v-if="character" class="card">
    <img :src="character.img" class="card-img" alt="" />
    <p class="card-name">
      Name: <span>{{ character.name }}</span>
    </p>
    <p class="card-name">
      Actor: <span>{{ character.portrayed }}</span>
    </p>
    <p class="card-name">
      Status: <span>{{ character.status }}</span>
    </p>
  </div>
</template>

<script>
import CharacterService from "../services/CharacterService";
export default {
  props: ["id"],
  data() {
    return {
      character: null,
    };
  },
  created() {
    console.log("ID IS ==> ", this.id);
    CharacterService.getCharacter(this.id)
      .then((response) => {
        console.log(response);

        this.character = response.data[0];
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>

<style scoped>
.card {
  background-color: white;
  width: 400px;
  padding-bottom: 10px;
  text-align: center;
  transition: all ease 0.3s;
  margin: auto;
}
.card-name {
  font-size: 24px;
  font-weight: 700;
}
@media (min-width: 481px) and (max-width: 768px) {
  .card {
    width: 300px;
  }
  .card-name {
    font-size: 20px;
  }
}
@media (max-width: 480px) {
  .card {
    width: 300px;
  }
  .card-name {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
