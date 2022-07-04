<template>
  <div>
    <div class="search">
      <input
        type="text"
        placeholder="Search characters"
        id="search-character"
        v-model="searchCharacter"
      />
    </div>
    <div v-if="!loading" class="cards">
      <CharacterCard
        v-for="character in filteredCharacters"
        :key="character.char_id"
        :character="character"
      />
    </div>
    <div class="loading" v-else>
      <p>Fetching data fom api; please wait</p>
      <img :src="loadingImage" alt="" />
    </div>
  </div>
</template>

<script>
import CharacterCard from "../components/CharacterCard.vue";
import CharacterService from "../services/CharacterService";
export default {
  name: "Characters",
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: null,
      searchCharacter: "",
      loading: true,
      loadingImage: require("../assets/loader.gif"),
    };
  },
  created() {
    CharacterService.getCharacters()
      .then((response) => {
        this.characters = response.data;
        console.log(this.characters);
      })
      .catch((error) => {
        console.log(error.response);
      });

    this.loading = false;
  },

  computed: {
    filteredCharacters() {
      let newCharacters = this.characters;
      if (this.searchCharacter != "" && this.searchCharacter) {
        newCharacters = newCharacters.filter((item) => {
          return item.name
            .toUpperCase()
            .includes(this.searchCharacter.toUpperCase());
        });
      }
      return newCharacters;
    },
  },
};
</script>

<style scoped>
.search {
  height: 100px;
}

input[type="text"] {
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  outline: none;
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4em;
}
.loading {
  text-align: center;
  color: white;
  font-size: 2rem;
}
.loading p {
  margin-bottom: 2rem;
  text-transform: uppercase;
}
.loading img {
  width: 300px;
  height: 300px;
  margin: auto;
}
@media (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }
  input[type="text"] {
    width: 100%;
  }
}
</style>
