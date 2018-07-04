<template>
    <div>
        <div class="city-title" @click="handlerClick">
            南京
        </div>
        <div class="city-title" @click="handlerClick">
            重庆
        </div>
    </div>
</template>
<script>
    export default {
        name: 'city-choose',
        methods:{
            handlerClick(e) {
                const city  = e.target.innerHTML
//                console.log(city);
                this.$bus.$emit("change",city)
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang="stylus" scoped="">
    .city-title
        background red
        color #ffffff
</style>