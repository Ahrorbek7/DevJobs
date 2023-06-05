<template>
    <div class="detail-container flex-col justify-evenly h-auto py-3 bg-white rounded-md"
      :class="{ 'dt-cn-dark': darkTheme }">
      <div class="main-detail-part">
        <div class="main-detail-header flex justify-between py-4 px-1">
          <div class="main-detail-header__text">
            <p>{{ job.postedIn }} {{ job.type }}</p>
            <h1>{{ job.title }}</h1>
            <h3 class="my-1 mx-0" :class="{ 'dark-place': darkTheme }">
              {{ job.place }}
            </h3>
          </div>
          <a href="https://react-cv-app-cva.netlify.app/">
          <button type="button" class="apply-btn text-base h-12 cursor-pointer font-bold text-white rounded-md">
            Apply Now
          </button>
          </a>
        </div>
        <div class="main-detail-header__text">
          <p>{{ job.description }}</p>
        </div>
      </div>
      <ApplyJobModal v-show="isModalVisible" @close="closeModal" :filter-value-location="filterValueLocation"
        :show-only-fulltime-jobs="showOnlyFulltimeJobs" />
      <div class="requirements h-auto flex flex-col justify-between my-6 mx-auto">
        <h4 class="requir" :class="{ 'requir-dark': darkTheme }">
          Requirements
        </h4>
        <div>
          <p>{{ job.requirements }}</p>
        </div>
        <div class="requirement-list">
          <ul>
            <li v-for="(requirement, index) in job.requirementList" :key="index">
              {{ requirement }}
            </li>
          </ul>
        </div>
      </div>
      <div class="what-will-do h-auto flex flex-col justify-between">
        <h3 class="what-will-do__text" :class="{ 'what-will-do__text--dark': darkTheme }">
          What You Will Do
        </h3>
        <div class="my-3 mx-0">
          <p>{{ job.whatYouWillDo }}</p>
        </div>
        <ol class="list">
          <li v-for="(task, index) in job.taskList" :key="index">
            {{ task }}
          </li>
        </ol>
      </div>
    </div>
</template>
<script>
export default {
  name: "DetailContainer",
  props: ["job", "darkTheme"],
};
</script>