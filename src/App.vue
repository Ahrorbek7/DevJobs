<template>
    <div class="container" :class="{ 'job-details-container--dark': darkTheme }">
        <Header :dark-theme="darkTheme" @update:dark-theme="toggleTheme" />
        <router-view :dark-theme="darkTheme" />
    </div>
  </template>
  
  <script>
  import Header from './components/Home/Header.vue';
  import router from './router/index.js';
  
  export default {
      name: "App",
      router,
      components: { Header },
      data() {
          return {
              darkTheme: false,
          }
      },
      methods: {
          toggleTheme() {
              this.darkTheme = !this.darkTheme;
          }
      }
  };
  </script >