<template>
    <DetailHeader :job="job" :dark-theme="darkTheme" />
    <DetailContainer :job="job" :dark-theme="darkTheme" />
    <DetailFooter :job="job" :dark-theme="darkTheme" />
</template>

<script>
import ApplyJobModal from "../components/modals/ApplyJobModal.vue";
import router from "../router/index.js";
import cardsData from "../database/jobs.json";
import DetailHeader from "../components/Details/DetailHeader.vue";
import DetailContainer from "../components/Details/DetailContainer.vue";
import DetailFooter from '../components/Details/DetailFooter.vue'

export default {
  name: "JobDetails",
  props: ["jobId", "darkTheme"],
  data() {
    return {
      isModalVisible: false,
      job: null,
    };
  },
  components: {
    DetailHeader,
    DetailContainer,
    DetailFooter,
    ApplyJobModal,
    router
  },
  created() {
    this.job = cardsData.cards.find(
      (job) => job.id === parseInt(this.$route.params.jobId)
    );
  },
  methods: {
    hideJob() {
      this.$emit("back");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>