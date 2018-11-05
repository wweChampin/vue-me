<template>
    <div>
        <index-header :city="$store.state.local"></index-header>
        <index-swiper :list="swiperList"></index-swiper>
        <index-icons :list="iconsList"></index-icons>
        <index-sights></index-sights>
        <index-local :local="$store.state.local"></index-local>
    </div>
</template>

<script>

    import IndexHeader from '@/page/index/header.vue'
    import IndexSights from '@/page/index/sights.vue'
    import IndexLocal from '@/page/index/localtion.vue'
    import IndexSwiper from './swiper.vue'
    import IndexIcons from './icons.vue'
    import axios from 'axios'
    // 在单独构建的版本中辅助函数为 Vuex.mapState  { mapState }  意位  mapState = vuex.mapState
    import { mapState,mapActions } from 'vuex'
    export default {
        name: 'index',
        components: {
            IndexHeader,
            IndexSwiper,
            IndexIcons,
            IndexSights,
            IndexLocal
        },
        data () {
            return {
                swiperList : [],
                iconsList : [],
                msg : "helloWorld Mr  wang"
            }
        },
        computed : {
            //... 展开运算符
            ...mapState({
                local:'local'
                        })
        },
        methods: {
            ...mapActions ({
                delayCity: 'changeLocalDelayFiveSeconds'
            }),
            getIndexData () {
                const city = localStorage.city ? localStorage.city : '北京'
                axios.get('/api/index.json?city='  + this.local)
                     .then(this.handleGetDataSucc.bind(this))
                     .catch(this.handleGetDataErr.bind(this))
            },
            handleGetDataSucc (res) {
                const data = res.data.data
                console.log(data)
                this.swiperList = data.swiperList;
                this.iconsList = data.iconsList;
//                this.city = data.city
//                localStorage.city = data.city
//                console.log(this.city)
//                console.log(this.$store.state.local)

                //同步vuex
//                if(!this.$store.state.local){
//                    this.$store.commit('changeLocal',data.city)
//                    console.log(this.$store.state.local)
//                }
//                异步vuex
                if(!this.local){
                    this.delayCity(data.city)
                    console.log(this.$store.state.local)
                }
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
//            this.bindEvents()
            console.log("创建时执行")
        },
        watch : {
            'local' () {
                this.getIndexData()
                console.log("keep-alive后 请求只请求一次，所以想要再次请求接口需要，监听数据的变化来，执行请求接口的函数")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
