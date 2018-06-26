<template>
    <li @click="handleDelete">{{content}}{{index}}</li>
</template>

<script>
export default {
    props:['content','index'],
    methods:{
      handleDelete (){
//          alert(this.index)
          this.$emit("delete",this.index)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
