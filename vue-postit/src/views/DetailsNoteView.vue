<template>
  <body>
    <div class="card">
      <h3 class="card__title">{{ note.title }}</h3>
      <p class="card__content">{{ note.content[0] }}</p>
      <div class="card__arrow">
        <button @click="DeleteNote(note._id)" class="btn">
          <svg
            viewBox="0 0 15 17.5"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
          >
            <path
              d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
              id="Fill"
            ></path>
          </svg>
        </button>
      </div>
      <RouterLink :to="{ name: 'Edit', params: { id: note._id } }">
        <button class="edit-button">
          <svg class="edit-svgIcon" viewBox="0 0 512 512">
            <path
              transform="translate(-2.5 -1.25)"
              d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
            ></path>
          </svg>
        </button>
      </RouterLink>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      supp: this.$route.params.id,

      ddab: this.$route.params.id,
      note: {
        title: '',
        content: []
      }
    }
  },
  mounted() {
    fetch('https://post-it.epi-bluelock.bj/' + this.ddab)
      .then((response) => response.json())
      .then((data) => {
        this.note = data
        console.log(data)
      })

      .catch((err) => console.log(err.message))
  },
  methods: {
    async DeleteNote(supp) {
      const doDelete = confirm('Êtes-vous sûr de vouloir supprimer cette note?')
      if (doDelete) {
        const requestOptions = {
          method: 'Delete',
          headers: { 'Content-Type': 'application/json' }
        }

        try {
          const response = await fetch(`https://post-it.epi-bluelock.bj/${supp}`, requestOptions)
          const data = await response.json()
          this.postId = data.id
          this.$router.push('/')
        } catch (error) {
          console.error(error.message)
        }
      }
    }
  }
}
</script>

<style>
.edit-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  text-decoration: none !important;
}

.edit-svgIcon {
  width: 17px;
  transition-duration: 0.3s;
}

.edit-svgIcon path {
  fill: white;
}

.edit-button:hover {
  width: 120px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(255, 69, 69);
  align-items: center;
}

.edit-button:hover .edit-svgIcon {
  width: 20px;
  transition-duration: 0.3s;
  transform: translateY(60%);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.edit-button::before {
  display: none;
  content: 'Edit';
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}

.edit-button:hover::before {
  display: block;
  padding-right: 10px;
  font-size: 13px;
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 0.3s;
}
</style>
