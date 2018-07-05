<template>
    <div>
        <index-header :city="city"></index-header>
        <index-swiper :list="swiperList"></index-swiper>
        <index-icons :list="iconsList"></index-icons>
        <div v-for="item in list">
            {{item}}
        </div>
        <div>bus+webStorage方式:</div>
        <city-choose></city-choose>
        <div>Vuex方式</div>
        <city-choose></city-choose>
        <city-local :local="$store.state.local"></city-local>
    </div>
</template>

<script>

    import IndexHeader from '@/page/city/header.vue'
    import CityChoose from '@/page/city/cityChoose.vue'
    import CityLocal from '@/page/city/localtion.vue'
    import IndexSwiper from './swiper.vue'
    import IndexIcons from './icons.vue'
    import axios from 'axios'
    export default {
        name: 'index',
        components: {
            IndexHeader,
            IndexSwiper,
            IndexIcons,
            CityChoose,
            CityLocal
        },
        data () {
            return {
                city : localStorage.city ? localStorage.city : '北京',
                swiperList : [],
                iconsList : [],
                list : []
            }
        },
        methods: {
            getIndexData () {
                axios.get('/api/index.json')
                     .then(this.handleGetDataSucc.bind(this))
                     .catch(this.handleGetDataErr.bind(this))
            },
            handleGetDataSucc (res) {
                const data = res.data.data
                console.log(data)
                this.swiperList = data.swiperList;
                this.iconsList = data.iconsList;
//                this.city = data.city
                localStorage.city = data.city
//                this.$bus.staticData = {
//                    city: data.city
//                }
//                console.log(res)
            },
            handleGetDataErr () {
                console.log('error')
            },
            getDayTripInfo () {
                axios.get('/api/daytrip.json?id=' + this.$route.query.id)
                     .then(this.handleGetDayTripSucc.bind(this))
                     .catch(this.handleGetDayTripErr.bind(this))
            },
            handleGetDayTripSucc (res) {
                this.list = res.data.data.list
                console.log(res)
                console.log(this.$store.state.local)
            },
            handleGetDayTripErr () {
                console.log('error')
            }
        },
        created () {
            this.getIndexData()
            console.log("创建时执行")
            this.getDayTripInfo();
            console.log(this.$route.params.id)
        },
        watch: {
//            监听路由数据变化
            "$route" () {
                this.getDayTripInfo()
                console.log(this.$route.params.id)
            }
        },
        activated () {
            this.city = localStorage.city ? localStorage.city : '北京'
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
