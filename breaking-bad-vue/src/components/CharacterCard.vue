<template>
    <div class="card">
        <img :src=character.img class="card-img" alt="">
        <p class="card-name">Name: <span>{{character.name}}</span></p>
        <p class="card-name">Actor: <span>{{character.portrayed}}</span></p>
        <p class="card-name">Status: <span>{{character.status}}</span></p>   
    </div>
</template>

<script>
export default {
    name:'CharacterCard',
    props: {
        character:Object
    }
}
</script>
<style scoped>
    .card{
        background-color: white;
        width: 250px;
        height: 420px;
        text-align: center;
        transition: all ease .3s;
        margin: auto;
    }
    @media (max-width: 500px) {
    .card {
        width: 215px;
        text-align: center;
        }
    }
    .card:hover{
        transform:  translateY(-2px);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    }
    .card p {
        text-align: left;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 0.9em;
        font-weight: 700;
        color: black;
        padding: 10px 0 0 10px;
    }
    .card img {
        width: 100%;
        height: 300px;
    }
    
</style>