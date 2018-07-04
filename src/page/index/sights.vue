<template>
    <div class="sights">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
        </ul>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'index-sights',
        props: {
            list: Array,
            default:[]
        },
        data:{
            return:{

            }
        },
        mounted () {
            new BScroll('.sights')
        }
    }
</script>
<style lang="stylus" scoped="">
    .sights{
        height 2rem
        background green
        overflow hidden
    }
</style>