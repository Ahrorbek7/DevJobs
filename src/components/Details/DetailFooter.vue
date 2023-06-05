    <template>
    <div class="detail-footer w-full bg-white bottom-0 flex justify-around items-center fixed"
      :class="{ 'dark-detail-footer': darkTheme }">
      <div class="footer-text h-4/5 flex flex-col justify-evenly">
        <h2 :class="{ 'footer-detail-title': darkTheme }">{{ job.title }}</h2>
        <p>{{ job.company }}</p>
      </div>
      <a href="https://react-cv-app-cva.netlify.app/">
      <button class="apply-footer cursor-pointer text-white rounded-md">
        Apply Now
      </button>
     </a>
    </div>
</template>
<script>
export default {
  name: "DetailFooter",
  props: ["job", "darkTheme"],
};
</script>