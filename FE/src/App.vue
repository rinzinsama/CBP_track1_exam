<template>
  <div id="app">
     Select Type <br>
      <select v-model="select_type">
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
    </select>
    <br><br>

      <Fruits v-if="select_type == 'Fruits'"/>
      <Vegetables v-if="select_type == 'Vegetables'"/>
  </div>
</template>

<script>
import Fruits from './components/Fruits.vue'
import Vegetables from './components/Vegetables.vue'

export default {
  name: 'app',
  components: {
    Fruits,
    Vegetables
  },
  data (){
    return {
          select_type : ""
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
