<template>

  <div class="form-group">

    <input type="text" class="form-control" v-model="response"/>

    <button class="btn btn-default" v-on:click="addResponse">
      Add Response
    </button>

  </div>

</template>

<script>
export default {

  data: function() {
    return {
      response: ''
    }
  },

  methods: {

    addResponse: function() {
      this.$emit('addResponse', this.response);
    }

  }
}
</script>
