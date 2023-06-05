<template>
    <Filter :filterValueTitle="filterValueTitle" :filterValueLocation="filterValueLocation"
      :showOnlyFulltimeJobs="showOnlyFulltimeJobs" :isModalVisible="isModalVisible" :dark-theme="darkTheme"
      @update:filterValueTitle="filterValueTitle = $event" @update:filterValueLocation="filterValueLocation = $event"
      @update:showOnlyFulltimeJobs="showOnlyFulltimeJobs = $event" @showModal="showModal" @closeModal="closeModal" />
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
import cardsData from "../database/jobs.json";
import CardContainer from "../components/Home/CardContainer.vue";
import Filter from "../components/Home/Filter.vue";

export default {
  name: "JobsContainer",
  components: {
    CardContainer,
    Filter
  },
  props: {
    darkTheme: Boolean
  },
  data() {
    return {
      cards: cardsData.cards,
      filterValueTitle: "",
      filterValueLocation: "",
      showOnlyFulltimeJobs: false,
      isModalVisible: false
    };
  },
  created() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      this.$emit('update:darkTheme', true);
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    filteredCardsByTitle() {
      if (this.filterValueTitle === "") {
        return this.cards;
      } else {
        const filterLowerCase = this.filterValueTitle.toLowerCase();
        return this.cards.filter((card) => {
          return (
            card.title.toLowerCase().includes(filterLowerCase) ||
            card.company.toLowerCase().includes(filterLowerCase)
          );
        });
      }
    },
    filteredCardsByLocation() {
      if (this.filterValueLocation === "") {
        return this.cards;
      } else {
        const filterLowerCase = this.filterValueLocation.toLowerCase();
        return this.cards.filter((card) => {
          return card.place.toLowerCase().includes(filterLowerCase);
        });
      }
    },
    filteredCards() {
      let filtered = [];
      if (this.showOnlyFulltimeJobs) {
        filtered = this.cards.filter((card) => {
          return card.postedIn.includes("Full Time");
        });
      } else {
        filtered = this.cards;
      }
      filtered = filtered.filter((card) => {
        const titleLowerCase = card.title.toLowerCase();
        const companyLowerCase = card.company.toLowerCase();
        const placeLowerCase = card.place.toLowerCase();
        const filterLowerCase = this.filterValueTitle.toLowerCase();
        const filterLocationLowerCase = this.filterValueLocation.toLowerCase();
        return (
          (titleLowerCase.includes(filterLowerCase) ||
            companyLowerCase.includes(filterLowerCase)) &&
          placeLowerCase.includes(filterLocationLowerCase)
        );
      });
      return filtered;
    },
  },
};
</script>