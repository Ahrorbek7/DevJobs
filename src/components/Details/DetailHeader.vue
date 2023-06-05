<template>
    <div class="detail-header flex rounded-md p-2 justify-between bg-white" :class="{ 'header-dark': darkTheme }">
      <div class="company-logo h-full w-1/2 items-center flex justify-between">
        <img :src="job.imgSrc" alt="company-logo" class="cv-img" />
        <div class="h-1/2 w-1/2 flex flex-col justify-between">
          <h3 class="company-name" :class="{ 'header-txt': darkTheme }">
            {{ job.company }}
          </h3>
          <p class="company-web">{{ job.website }}</p>
        </div>
      </div>
      <a href="https://www.devnetjobs.org/">
        <button class="h-12 text-base curson-pointer m-8 rounded-md" :class="{ 'com-btn-dark': darkTheme }">
          Company Site
        </button>
      </a>
    </div>
</template>
<script>
export default {
  name: "DetailHeader",
  props: ["job", "darkTheme"],
};
</script>