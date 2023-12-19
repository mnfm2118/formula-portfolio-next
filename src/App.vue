<script setup>

import TabmenuView from './views/TabmenuView.vue';

</script>

<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
        <TabmenuView />
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>