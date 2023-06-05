<template>
  <div class="card-container p-0 w-full h-auto min-h-50vh flex items-center justify-center">
    <div v-for="card in cards" :key="card.id"
      class="card-container__card-item rounded-md cursor-pointer bg-white m-4 p-4 shadow-md"
      :class="{ 'card-dark': darkTheme }">
      <router-link class="details-link" :to="{ name: 'JobDetails', params: { jobId: card.id } }">
        <img class="rounded-xl" :src="card.imgSrc" alt="" />
        <div class="card-item__card-text my-0 mx-auto w-94 flex-col flex justify-around">
          <p>{{ card.postedIn }}</p>
          <h4 class="company-title-text" :class="{ 'company-title-text--dark': darkTheme }">
            {{ card.title }}
          </h4>
          <p>{{ card.company }}</p>
          <h6>{{ card.place }}</h6>
        </div>
      </router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'CardContainer',
  props: {
  cards: {
    type: Array,
    required: true,
  },
  'dark-theme': {
    type: Boolean,
    required: false,
    default: false,
  },
},
  created() {
    console.log(this.darkTheme);
  }
}
</script>
