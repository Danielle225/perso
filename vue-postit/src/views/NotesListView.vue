<template>
  <div>
    <div class="grid-container">
      <div v-for="note in paginatedNotes" :key="note._id" class="card">
        <h3 class="card__title">{{ note.title.slice(0,20)}}</h3>
        <p class="card__content">{{ note.content[0].slice(0,100) }}</p>
        <RouterLink :to="{ name: 'detail', params: { id: note._id } }">
          <div class="card__arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="15"
              width="15"
            >
              <path
                fill="#fff"
                d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
              ></path>
            </svg>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="Page === 1">Previous</button>
      <span>Page {{ Page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="Page === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
      Page: 1,
      pageSize: 10,
      refreshInterval: null,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.notes.length / this.pageSize);
    },
    paginatedNotes() {
      const start = (this.Page - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.notes.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      if (this.Page < this.totalPages) {
        this.Page++;
      }
    },
    prevPage() {
      if (this.Page > 1) {
        this.Page--;
      }
    },
    fetchNotes() {
      fetch('http://62.72.5.95:1999/notes')
        .then((response) => response.json())
        .then((data) => {
          this.notes = data.notes;
        })
        .catch((err) => console.log(err.message));
    },
    startAutoRefresh() {
      this.refreshInterval = setInterval(this.fetchNotes, 1000);
    },
    stopAutoRefresh() {
      if (this.refreshInterval) {
        clearInterval(this.refreshInterval);
      }
    }
  },
  mounted() {
    this.fetchNotes();
    this.startAutoRefresh();
  },
  before() {
    this.stopAutoRefresh();
  }
};
</script>

<style>
/* existing styles */
.grid-container {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  --border-radius: 0.75rem;
  --primary-color: #7257fa;
  --secondary-color: #3c3852;
  width: 210px;
  font-family: 'Arial';
  padding: 1rem;
  margin: 10px;
  cursor: pointer;
  border-radius: var(--border-radius);
  background: #f1f1f3;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
  position: relative;
}
.card p {
  overflow-wrap: break-word;
}
.card h3 {
  overflow-wrap: break-word;
}
.card > * + * {
  margin-top: 1.1em;
}
.card .card__content {
  color: var(--secondary-color);
  font-size: 0.86rem;
}
.card .card__title {
  padding: 0;
  font-size: 1.3rem;
  font-weight: bold;
}
.card .card__date {
  color: #6e6b80;
  font-size: 0.8rem;
}
.card .card__arrow {
  position: absolute;
  background: var(--primary-color);
  padding: 0.4rem;
  border-top-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  bottom: 0;
  right: 0;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card svg {
  transition: 0.2s;
}
.card:hover .card__title {
  color: var(--primary-color);
  text-decoration: underline;
}
.card:hover .card__arrow {
  background: #111;
}
.card:hover .card__arrow svg {
  transform: translateX(3px);
}
.btn {
  background-color: transparent;
  position: relative;
  border: none;
}
.btn::after {
  content: 'delete';
  position: absolute;
  top: -130%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background-color: rgb(168, 7, 7);
  padding: 4px 8px;
  border-radius: 5px;
  transition: 0.2s linear;
  transition-delay: 0.2s;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
}
.icon {
  transform: scale(1.2);
  transition: 0.2s linear;
}
.btn:hover > .icon {
  transform: scale(1.5);
}
.btn:hover > .icon path {
  fill: rgb(168, 7, 7);
}
.btn:hover::after {
  visibility: visible;
  opacity: 1;
  top: -160%;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.pagination button {
  background-color: #7257fa;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
}
.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
