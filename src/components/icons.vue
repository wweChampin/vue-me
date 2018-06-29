<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide  v-for="(page,index) of pageList" :key="index">
                <div class="arae-con">
                    <div class="arae-item"  v-for="item of page" :key="item.id">
                        <img class="arae-image" :src="item.imgUrl" alt="">
                        <p class="arae-deac">{{item.title}}</p>
                    </div>
                </div>
            </swiper-slide>
            <!--<swiper-slide>-->
            <!--<div>2</div>-->
            <!--</swiper-slide>-->
            <!--<swiper-slide>-->
            <!--<div>3</div>-->
            <!--</swiper-slide>-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>
<script>
    export default {
        name: 'index-icons',
        props:{
            list: Array
        },
        data () {
            return {
                swiperOption: {
                    loop: true,
//                    autoplay: 2000,
                    pagination: '.swiper-pagination'
                }
            }
        },
        computed: {
            pageList () {
                const pages = []
                this.list.forEach((value,index) => {
                    const page = Math.floor(index / 8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(value)
                })
                return pages
            }
        }
    }
</script>
<style lang="stylus" scoped="">
    .icons
        overflow hidden
        height 3.8rem
        .arae-con
            display flex
            flex-wrap wrap
            .arae-item
                width 25%
                height 1.9rem
                .arae-image
                    display block
                    margin  .3rem auto .2rem auto
                    width .9rem
                    height .9rem
                .arae-deac
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    line-height .4rem
                    text-align center
                

</style>