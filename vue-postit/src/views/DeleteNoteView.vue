<template>
  <div class="container">
    <div class="modal">
      <div class="modal__header">
        <span class="modal__title">ADD Note</span
        ><button class="button button--icon">
          <svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            ></path>
          </svg>
        </button>
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
        <button  class="button button--primary">Create</button>
      </div>
    </RouterLink>
      <RouterLink to="/">
        <div class="modal">
          <button class="button button--primary">Cancel</button>
        </div></RouterLink
      >
    </div>
  </div>
</template>
<script>
</script>
<style>
.button {
  font: inherit;
  border: none;
  background: none;
  cursor: pointer;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 0 15px 30px 0 rgba(0, 125, 171, 0.15);
  border-radius: 10px;
}

.modal__header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal__body {
  padding: 1rem 1rem;
}

.modal__footer {
  padding: 0 1.5rem 1.5rem;
}

.modal__title {
  font-weight: 700;
  font-size: 1.25rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s ease;
}

.button--icon {
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border-radius: 0.25rem;
}

.button--icon:focus,
.button--icon:hover {
  background-color: #ededed;
}

.button--primary {
  background-color: #007dab;
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: 500;
  font-size: 0.875rem;
}

.button--primary:hover {
  background-color: #006489;
}

.input {
  display: flex;
  flex-direction: column;
}

.input + .input {
  margin-top: 1.75rem;
}

.input__label {
  font-weight: 700;
  font-size: 0.875rem;
}

.input__field {
  display: block;
  margin-top: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 0.75rem 0.75rem;
  transition: 0.15s ease;
}

.input__field:focus {
  outline: none;
  border-color: #007dab;
  box-shadow:
    0 0 0 1px #007dab,
    0 0 0 4px rgba(0, 125, 171, 0.25);
}

.input__field--textarea {
  min-height: 100px;
  max-width: 100%;
}

.input__description {
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #8d8d8d;
}
</style>
