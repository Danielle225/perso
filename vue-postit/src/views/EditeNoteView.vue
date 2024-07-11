<template>
  <div class="container">
    <div class="modal">
      <div class="modal__header">
        <span class="modal__title">EDIT Note</span>
        <RouterLink to="/">
          <button class="button button--icon">
            <svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              ></path>
            </svg>
          </button>
        </RouterLink>
      </div>
      <div class="modal__body">
        <div class="input">
          <label class="input__label">Title</label>
          <input class="input__field" type="text" v-model="this.noteTitle" />
        </div>
        <div class="input">
          <label class="input__label">Content</label>
          <textarea
            class="input__field input__field--textarea"
            v-model="this.noteContent"
          ></textarea>
        </div>
      </div>
      <RouterLink to="/">
        <div class="modal">
          <button @click="EditNote" class="button button--primary">Edit</button>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mdf: this.$route.params.id,
      noteTitle: '',
      noteContent: '',
      note: []
    }
  },
  mounted() {
    fetch(`https://post-it.epi-bluelock.bj/notes/${this.mdf}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        ;(this.noteTitle = data.title), (this.noteContent = data.content)
        console.log(this.noteContent)
      })
  },
  methods: {
    async EditNote() {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.noteTitle,
          content: [this.noteContent]
        })
      }
      await fetch(`https://post-it.epi-bluelock.bj/notes/${this.mdf}`, requestOptions)
        .then((response) => response.json())
        .then((data) => (this.postId = data.id))
        .catch((err) => console.log(err.message))
    }
  }
}
</script>
<style></style>
