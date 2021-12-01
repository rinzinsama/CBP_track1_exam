<template>
<div>
   Select Vegetable <br>
   <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="item in veggies" :key="item">
        {{ item }}
      </option>
  </select>
   <br>
  <button v-on:click="submit">Submit</button>
  <br><br>

    {{ passData}}
  </div>
   
</template>

<script>
export default {
  name: 'Vegetables',
  props: {
    msg: String,
  
  },
  data (){
    return {
        veggies:["Broccoli", "Lettuce", "Carrot", "Potato", "Cabbage"],
        selected:"",
       passData:""

          
    }
  },
  methods:{
     submit (){
       this.passData = this.selected;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
