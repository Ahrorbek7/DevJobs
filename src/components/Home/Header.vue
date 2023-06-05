<template>
  <div class="header w-full flex justify-between items-center text-white bg-blue-600">
    <router-link class="home-link" to="/">
      <h2 class="header__title text-3xl font-bold">devjobs</h2>
    </router-link>
    <div class="delta delta--1 absolute w-300 h-250 bg-white opacity-8 rounded-41"></div>
    <div class="delta delta--2 absolute w-400 h-200 bg-white opacity-8 rounded-41"></div>
    <div class="header__checkers h-7vh flex justify-around items-center">
      <i class="bi bi-brightness-high-fill header__icon text-white text-lg"></i>
      <label
        class="header__switch switch relative flex items-center cursor-pointer w-16 h-6"
      >
        <input
          class="hidden"
          type="checkbox"
          :checked="darkTheme"
          @change="toggleTheme"
        />
        <span
          class="slider round header__slider bg-white cursor-pointer transition duration-400 absolute top-0 left-0 right-0 bottom-0 cursor-pointer"
        ></span>
      </label>
      <i class="bi bi-moon-fill header__icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    darkTheme: Boolean,
  },
  methods: {
    toggleTheme() {
      this.$emit('update:darkTheme', !this.darkTheme);
    },
  },
};
</script>