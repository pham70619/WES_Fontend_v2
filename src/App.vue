<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/sidebarComponents/SideBar.vue'
import Header from './components/Header.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <div class="main-layout">
    <div class="sidebar">
      <SideBar />
    </div>
    <div class="content">
      <div class="header">
        <Header />
      </div>
      <div class="main-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  overflow: hidden;
}

.sidebar {
  height: 100%;
  transition: 0.4s ease;
}

.main-layout .content {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 10px;
}

.main-layout .content .header {
  width: 100%;
  height: 60px;
  border: 1px solid #8f8f8f;
  border-radius: 15px;
}

.main-layout .content .main-content {
  border: 1px solid #8f8f8f;
  border-radius: 15px;
  flex-grow: 1;
  overflow: auto;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
