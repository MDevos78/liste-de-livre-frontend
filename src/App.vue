<template>
  <div id="app">
    <header>
      <h1>Ma bibliothèque</h1>
    </header>
    <SideNav />
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue';

export default {
  name: 'App',
  components: {
    SideNav,
  },
}
</script>

<style>
body{
  margin: 0;
  background-color: #D9FFF5;
}
h1{
  margin-left: 200px;
  margin-bottom: 50px;
}
h2{
  padding-top: 20px;
  padding-bottom: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1D1E18;
}
.content {
  margin-left: 200px; /* Taille de la barre latérale */
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #AAD2BA
}

</style>
