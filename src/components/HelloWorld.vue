<template>
    <div>
        <index-header :city="city"></index-header>
        <index-swiper :list="swiperList"></index-swiper>
        <index-icons :list="iconsList"></index-icons>
        <index-sights></index-sights>
    </div>
</template>

<script>

    import IndexHeader from '@/page/index/header.vue'
    import IndexSights from '@/page/index/sights.vue'
    import IndexSwiper from './swiper.vue'
    import IndexIcons from './icons.vue'
    import axios from 'axios'
    export default {
        name: 'index',
        components: {
            IndexHeader,
            IndexSwiper,
            IndexIcons,
            IndexSights
        },
        data () {
            return {
                city : '',
                swiperList : [],
                iconsList : [],
                msg : "helloWorld Mr  wang"
            }
        },
        methods: {
            getIndexData () {
                const city = localStorage.city ? localStorage.city : '北京'
                axios.get('/api/index.json?city='  + city)
                     .then(this.handleGetDataSucc.bind(this))
                     .catch(this.handleGetDataErr.bind(this))
            },
            handleGetDataSucc (res) {
                const data = res.data.data
                console.log(data)
                this.swiperList = data.swiperList;
                this.iconsList = data.iconsList;
                this.city = data.city
                localStorage.city = data.city
                console.log(this.city)
                //bus  为公用的存储的区域
//                this.$bus.staticData = {
//                    city: data.city
//                }
//                console.log(res)
            },
            handleGetDataErr () {
                console.log('error')
            },
            bindEvents () {
                this.$bus.$on("change",this.handleCityChange.bind(this))

            },
            handleCityChange (value) {
                this.city = value;
                localStorage.city = value
                console.log(this.city)
            }
        },
        created () {
            this.getIndexData()
            this.bindEvents()
            console.log("创建时执行")
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
