<template>
    <div>
        <index-header :city="$store.state.local"></index-header>
        <div id="demo">
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
    </div>
</template>

<script>

    import IndexHeader from '@/page/index/header.vue'
    export default {
        name: 'index',
        components: {
            IndexHeader,

        },
        data () {
            return {
                show:true
            }
        },
        computed : {

        },
        methods: {

        },
        created () {

            console.log("创建时执行")
        },
        watch : {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
