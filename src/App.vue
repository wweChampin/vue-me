<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <keep-alive>
            <router-view/>
        </keep-alive>
        <!--当前路径下的内容-->
    </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>

</style>
