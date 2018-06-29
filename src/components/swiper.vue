<template>
    <div class="slide-con">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="slide-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'index-swiper',
        props : {
            list : Array
        },
        data () {
            return {
                swiperOption: {
                    loop: true,
                    autoplay: 2000,
                    pagination: '.swiper-pagination'
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    @import "../assets/stylus/variable.styl"

    .swiper-pagination > > >
    .swiper-pagination-bullet-active /*深入到子组件*/
        background $bgColor

    .slide-con
        overflow hidden
        height 0
        padding-bottom 26.66%

    .slide-img
        width 100%

</style>
