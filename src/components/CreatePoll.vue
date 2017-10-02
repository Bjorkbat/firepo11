<template>
  <div>

    <h1>Create Poll</h1>

    <hr />

    <form v-on:submit.prevent="createPoll">

      <section>
        <div class="form-group">
          <label class="h2">Poll Name</label>
          <p class="lead">A good poll deserves a name.  Give it one here.</p>
          <input type="text" class="form-control underlined big" v-model="name"
            placeholder="Give your poll a fancy name or title here">
        </div>
      </section>

    </form>

  </div>
</template>

<script>
export default {

  data: function() {
    return {
      name: ''
    }
  }

  methods: {

    createPoll: function() {

    }

  }
}
</script>
