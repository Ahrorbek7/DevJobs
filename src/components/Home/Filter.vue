<template>
  <div
    class="input-field px-4 bg-white rounded-md mx-auto -mt-8 flex items-center justify-center"
    :class="{ 'input-field-dark': darkTheme }"
  >
    <i class="bi bi-search"></i>
    <input
      class="border-r border-gray-300 font-normal text-sm h-90p py-2"
      :class="{ 'filter-title-dark': darkTheme }"
      type="text"
      placeholder="Filter by title, companies, expertise..."
      :value="filterValueTitle"
      @input="$emit('update:filterValueTitle', $event.target.value)"
      id="filter-title"
    />
    <i class="bi bi-geo-alt-fill bicha"></i>
    <input
      class="border-r border-gray-300 font-normal text-sm h-90p py-2"
      :class="{ 'filter-location-dark': darkTheme }"
      type="text"
      placeholder="Filter by location..."
      :value="filterValueLocation"
      @input="$emit('update:filterValueLocation', $event.target.value)"
      id="filter-loaction"
    />
    <div id="add-location">
      <button
        type="button"
        class="btn hidden w-40px h-40px border-none bg-transparent"
        @click="showModal"
      >
        <i class="bi bi-plus-lg"></i>
      </button>

      <LocationModal
        v-show="isModalVisible"
        :filter-value-location="filterValueLocation"
        :show-only-fulltime-jobs="showOnlyFulltimeJobs"
        @update:filter-value-location="
          $emit('update:filterValueLocation', $event)
        "
        @update:show-only-fulltime-jobs="
          $emit('update:showOnlyFulltimeJobs', $event)
        "
        @close="$emit('closeModal')"
      />
    </div>
    <div
      class="input-field__full-time full-time-none flex items-center justify-evenly h-90p"
      :class="{ 'full-time-dark': darkTheme }"
    >
      <input
        class="check-fulltime cursor-pointer bg-brand-purple-lighter"
        type="checkbox"
        :checked="showOnlyFulltimeJobs"
        @input="$emit('update:showOnlyFulltimeJobs', $event.target.checked)"
      />
      <label for="">
        <h3
          class="full-time-text font-bold"
          :class="{ 'full-time-text--dark': darkTheme }"
        >
          Full Time only
        </h3>
      </label>
      <button
        class="btn-search bg-brand-blue-darker text-white font-medium text-sm rounded-md w-40 h-12 inline-flex items-center justify-center cursor-pointer"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import LocationModal from "../modals/LocationModal.vue";

export default {
  name: "Filter",
  components: {
    LocationModal,
  },
  props: {
    filterValueTitle: String,
    filterValueLocation: String,
    showOnlyFulltimeJobs: Boolean,
    isModalVisible: Boolean,
    darkTheme: Boolean,
  },
  methods: {
    showModal() {
      this.$emit("showModal");
    },
  },
};
</script>

<style></style>
