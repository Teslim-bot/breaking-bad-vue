<template>
    <div class='search'>
      <form>
        <input
          type='text'        
          placeholder='Search characters'
          id="search-character"
          
        />
      </form>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .search {
    height: 100px;
    }

    input[type='text'] {
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    outline: none;
    }
</style>