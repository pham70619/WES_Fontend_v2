<script setup>
import { RouterLink } from 'vue-router'

// define props
const props = defineProps({
  path: { type: String, default: '' },
  icon: { type: String, default: '<i class="bi bi-circle"></i>' },
  label: { type: String, default: '' },
})
</script>

<template>
  <RouterLink class="navItem" :to="path">
    <div class="icon" v-html="icon"></div>
    <span>{{ label }}</span>
  </RouterLink>
</template>

<style scoped>
.navItem {
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 10px;
  padding: 6px;
  margin: 12px 0;
  align-items: center;
  justify-content: flex-start;
  transition: 0.4s ease;
}

.navItem:hover,
.router-link-exact-active.navItem {
  background: #dfdfdf;
  color: #4b4b4b;
}
</style>
