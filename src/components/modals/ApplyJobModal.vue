<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal-apply">
        <div class="head-mod">
          <h2> Accepted! </h2>
        </div>
        <div class="cont-mod">
          <h3>Wait for contact, please.</h3>
          <p> For inquiries: best.company.fake@gmail.com</p>
          <button type="button" class="btn-close btn-search " aria-label="Close modal" @click="$emit('close')">
            Ok
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script>
export default {
  name: "ApplyJobModal",
  props: {
    filterValueLocation: {
      type: String,
      required: true,
    },
    showOnlyFulltimeJobs: {
      type: Boolean,
      required: true,
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

hr {
  color: black !important;
}

.modal-apply {
  background-color: white;
  width: 30vw;
  height: 40vh;
  border-radius: 7px;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}

.head-mod {
  border-bottom: 1px solid rgb(192, 192, 192);
  height: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.cont-mod {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.modal-apply h3 {
  color: #19202D !important;
  margin-top: 2rem;
}

.modal-apply h2 {
  font-size: 24px;
  color: #19202D;
}

.modal-apply p {
  color: gray;
  margin: 0.7rem 0;
}

.btn-close {
  color: white;
  background-color: #5964e0;
  width: 40%;
  border-radius: 7px;
  margin: 2rem 0;
  cursor: pointer;
  font-size: 18px;
  height: 17%;
}

.btn-close:hover {
  background-color: #6972da;
}
</style>
  