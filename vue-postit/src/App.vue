<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="logo"></div>
        <ul>
          <li>
            <RouterLink to="/">Note list</RouterLink>
          </li>
          <li>
            <RouterLink to="/createNote">Add Note</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />

</template>
<script>
// import { RouterLink, RouterView } from 'vue-router'
// import DetailsNote from './components/Details.vue'
// import CreateNote from './components/CreateNote.vue'
export default {
  name: 'App',
  data() {
    return {
      notes: []
    }
  }
}
</script>

<style scoped>
div.logo {
  height: 50px;
  width: 50px;
  border: 1px solid #000;
  background: url('@/assets/LOGO.com.png') no-repeat;
  background-size: cover;
}
nav {
  height: 70px;
  /* border: 1px solid #000; */
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 0 25px;
}
nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: end;
}
</style>
