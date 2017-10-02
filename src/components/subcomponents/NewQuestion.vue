<template>
  <div class="form-group">

    <label class="h2">Question Name</label>
    <input type="text" class="form-control underlined medium" v-model="name"
      placeholder="Ex: what's your favorite color?"/>

    <response-input v-on:addResponse="addResponse"></response-input>

  </div>
</template>

<script>
import ResponseInput from 'components/subcomponents/ResponseInput.vue';
export default {

  components: { ResponseInput },

  data: function() {
    return {
      name: ''
    }
  },

  methods: {

    addResponse: function(payload) {
      // Do something with the event
    }

  }
}
</script>
