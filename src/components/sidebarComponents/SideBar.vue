<script setup>
import NavItem from './NavItem.vue'
</script>

<template>
  <div class="sidebar-container">
    <div class="header">
      <h5>WES</h5>
      <!-- <button>toggle</button> -->
    </div>
    <nav>
      <NavItem :path="'/'" :label="'Home'" />
      <NavItem :path="'/about'" :label="'About'" />
    </nav>
    <div class="footer">
      <button class="btn btn-outline-secondary w-100"><i class="bi bi-box-arrow-right"></i></button>
      <!-- <LogoutOutlined /> -->
    </div>
  </div>
</template>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  background-color: #11212d;
  border: 1px solid #8f8f8f;
  border-radius: 15px;
  color: #dbdbdb;
  width: 230px;
  height: 100%;
}

.sidebar-container .header {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #8f8f8f;
}

.sidebar-container .header h5 {
  font-size: 30px;
  font-weight: 700;
  margin: 0;
}

.sidebar-container nav {
  padding: 10px;
  flex-grow: 1;
  overflow: auto;
}

.sidebar-container .footer {
  display: flex;
  justify-content: center;
  padding: 10px;
  /* border-top: 1px solid #8f8f8f; */
}
</style>
