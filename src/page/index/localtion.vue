<template>
    <div>
        您的位置:<router-link to="/helloWorld1?id=123" class="local">{{local}}</router-link>
        <div>getter（计算属性）==》》{{$store.getters.doubleCity}}</div>
    </div>
</template>
<script>
    export default {
        name: 'index-local',
        props:['local']
    }
</script>
<style lang="stylus" scoped="">
    .local
        display block
        width 1rem
        height .5rem
        background red
        color #ffffff
        text-align center
        line-height .5rem
</style>