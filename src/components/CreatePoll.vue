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

      <section>

        <h2>Add Some Questions</h2>
        <p class="lead">Polls need questions, obviously.</p>

        <new-question></new-question>

      </section>

    </form>

  </div>
</template>

<script>
import NewQuestion from 'components/subcomponents/NewQuestion.vue';
export default {

  components: { NewQuestion },

  data: function() {
    return {
      name: ''
    }
  },

  methods: {

    createPoll: function() {

    }

  }
}
</script>
