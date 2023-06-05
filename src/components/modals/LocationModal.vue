<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header" id="modalTitle">
          <i class="bi bi-geo-alt-fill"></i>
          <input
            class="modal-input-filter"
            type="text"
            :value="localFilterValueLocation"
            @input="$emit('update:filter-value-location', $event.target.value)"
            placeholder="Filter by location..."
          />
        </header>

        <footer class="modal-footer">
          <div class="input-field__full-time  full-modal">
            <input class="cursor-pointer" type="checkbox" :checked="showOnlyFulltimeJobs" @change="$emit('update:show-only-fulltime-jobs', $event.target.checked)">
            <label for="">
              <h3 class="full-time-text" :class="{ 'full-text-dark': darkTheme }">Full Time only</h3>
            </label>
            <button type="button" class="btn-close btn-search" aria-label="Close modal" @click="$emit('close')"> Close
            </button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>
  
<script>
export default {
  name: "LocationModal",
  props: {
    filterValueLocation: {
      type: String,
      required: true,
    },
    showOnlyFulltimeJobs: {
      type: Boolean,
      required: true,
    },
    darkTheme: { 
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localFilterValueLocation: this.filterValueLocation,
    };
  },
  watch: {
    filterValueLocation(newValue) {
      this.localFilterValueLocation = newValue;
    },
  },
};
</script>
  
<style>
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-header input {
  width: 80% !important;
  height: 60%;
  color: black;
}

.modal-footer {
  height: 60% !important;
}

.full-modal {
  border-top: 1px solid rgb(180, 180, 180);
  height: 105%;
}

.modal-backdrop {
  z-index: 4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  top: 35vh;
  left: 25vw;
  position: absolute;
  width: 85vw;
  height: 34vh;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
}

.modal-header {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-close {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
  