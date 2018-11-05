<template>
  <div>
      <input v-model="inputValue"/>
      <button @click="handleSub">提交</button>
      <ul>
          <todo-item
              v-for="(item,index) of list"
              :key="index"
              :content="item"
              :index="index"
              @delete="handleDelete"
          ></todo-item>
      </ul>
  </div>
</template>

<script>
import Todoitem from './components/Todoitem'
export default {
    components:{
        'todo-item':Todoitem
    },
    data () {
        return {
            inputValue:'',
            list:[]
        }
    },
    methods:{
        handleSub () {
            this.list.push(this.inputValue);
            this.inputValue = ""
        },
        handleDelete (index) {
            this.list.splice(index,1);
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
