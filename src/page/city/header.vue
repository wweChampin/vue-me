<template>
    <div class="header">
        <div class="back iconfont" @click="handlerCityClick">
            &#xe624;
        </div>
        <div class="search">
            <span class="iconfont search-icon">&#xe632;</span>
            请输入搜索内容

        </div>
        <div class="city">
            <!--路径形式-->
            <!--<router-link to="/helloWorld1/123">乌鲁木齐</router-link>   -->
            <!--传参形式-->
            <router-link to="/helloWorld2?id=456">{{city}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handlerCityClick () {
                this.$router.push('/helloWorld?name=wang')
            },
        },
        props:['city'],
        created () {
            console.log("创建时执行")
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    @import "../../assets/stylus/variable.styl"
    /*引入变量*/
    .header
        display flex
        height .88rem
        line-height .88rem
        background $bgColor
        color #ffffff

    .back
        width .58rem
        text-align center
        font-size .4rem
        font-weight bold

    .search
        flex 1
        height .6rem
        line-height .6rem
        margin .14rem .2rem
        padding-left .4rem
        background #ffffff
        border-radius .1rem
        color #ccc
        .search-icon
            position relative
            top .02rem
            padding-right .04rem
    .city
        padding-right .6rem
        position relative
        &:before
            position absolute
            top .34rem
            right  .2rem
            content "\0020"
            width 0
            height 0
            border-left .14rem solid transparent
            border-right .14rem solid transparent
            border-top .14rem solid #ffffff
</style>
