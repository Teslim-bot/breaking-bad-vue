<template>
    <div>
        <Search v-model="searchCharacter"/>
        <div v-if="!loading" class="cards">
            <CharacterCard v-for="character in filteredCharacters" :key="character.name" :character="character"/>
        </div>
        <div class="loading" v-else>
            <p>Fetching data fom api; please wait</p>
            <img :src="loadingImage" alt="">
        </div>
    </div>    
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue'
import Search from '../components/Search.vue'
import CharacterService from '../services/CharacterService'
export default {
  name: "Characters",
  components: {
    CharacterCard,
    Search
  },
  data(){
      return{
          characters:[],
          searchCharacter: '',
          loading:true,
          loadingImage: require('../assets/loader.gif')
      }
  },
  created(){
      CharacterService.getCharacters()
      .then(response =>{
          this.characters = response.data;
      })
      .catch(error =>{
          console.log(error.response);
      })

      this.loading = false
  },

  computed: {
      filteredCharacters() {
        let newCharacters = this.characters;
        if (this.searchCharacter != '' && this.searchCharacter) {
            newCharacters = newCharacters.filter((item) => {
                return item.name
                    .toUpperCase()
                    .includes(this.searchCharacter.toUpperCase())
                });
        };
        console.log(newCharacters);
        return newCharacters;
      }
  }
}
</script>

<style scoped>
    .cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 4em;
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
    }
    .loading{                 
        text-align: center;                                      
        color: white;
        font-size: 2rem;
    }
    .loading p{
        margin-bottom: 2rem;
        text-transform: uppercase;
    }
    .loading img{
        width: 300px;
        height: 300px;
        margin: auto;
    }

</style>