<template>
    <div>
        <index-header></index-header>
        <index-swiper :list="swiperList"></index-swiper>
        <index-icons :list="iconsList"></index-icons>
    </div>
</template>

<script>

    import IndexHeader from '@/page/index/header.vue'
    import IndexSwiper from './swiper.vue'
    import IndexIcons from './icons.vue'
    import axios from 'axios'
    export default {
        name: 'index',
        components: {
            IndexHeader,
            IndexSwiper,
            IndexIcons
        },
        data () {
            return {
                swiperList : [],
                iconsList : []
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
//                console.log(res)
            },
            handleGetDataErr () {
                console.log('error')
            }
        },
        created () {
            this.getIndexData()
            console.log("创建时执行")
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
