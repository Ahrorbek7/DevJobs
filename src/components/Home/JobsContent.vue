<template>
    <div v-if="filteredCards.length > 0"
      class="card-container p-0 w-full h-auto min-h-50vh flex items-center justify-center">
      <CardContainer :cards="filteredCards" :dark-theme="darkTheme" />
    </div>
    <div v-else class="fallback-container w-full">
      <img class="my-16 mx-auto" src="../assets/img/no-results.png" alt="No results found" />
      <h2 class="no-jobs-found__text" :class="{ 'no-jobs-found__text--dark': darkTheme }">No jobs found !</h2>
    </div>
  </template>
  
  <script>
  import CardContainer from "./CardContainer.vue";
  
  export default {
    name: "JobsContent",
    props: {
      filteredCards: Array,
      darkTheme: Boolean
    },
    components: {
      CardContainer
    }
  };
  </script>