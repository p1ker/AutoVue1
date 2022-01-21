<template>
    <div class="wrapper">
        <img :src="imageSrc" :alt="imageAlt">
        <div class="discription">
            <h1>{{title}}</h1>
            <p>{{description}}</p>
            <p style="margin-top: 30px">{{price}}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "Model",
    props:{
        title: String,
        description: String,
        imageSrc: String,
        imageAlt: String,
        price: String
    }
}
</script>
<style>
    .wrapper{
        display: flex;
        flex-direction: row;
        background-color: white;
        margin: 0 auto;
    }

    .wrapper img{
        margin-left: 0;
        flex-direction: row;
    }

    .discription {
        font-size: 20px;
        margin-left: 10px;
    }
</style>

