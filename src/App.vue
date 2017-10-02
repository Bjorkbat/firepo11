<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

form {

  max-width: 900px;
  margin: 0 auto;

  input.form-control.underlined {
    border: none;
    border-bottom: 1px solid #2c3e50;
    border-radius: 0;
  }

  input.big, input.medium {
    text-align: center;
    font-weight: bold;
  }

  input.big {
    font-size: 32px;
  }

  input.medium {
    font-size:18px;
  }

}

section {
  border: 2px dashed #FF2E00;
  border-radius: 10px;
  padding: 10px;
  margin: 25px auto;
}

</style>
