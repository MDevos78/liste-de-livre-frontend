<template>
  <v-app class="content">
    <NavBar class= "nav"/>
    <SideNav />
    <v-main >
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SideNav from './components/SideNav.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    SideNav,
  },
};
</script>

<style>

.nav{
  margin-left: 200px;
}
/* Tu peux retirer les styles qui étaient ici et utiliser ceux de Vuetify */
.content {
  margin-left: 200px;
  padding: 40px 10px 10px 10px;
}
@media screen and (max-width: 600px) {
  
  .nav {
    /* Sur mobile, la SideNav passe en haut et n'a plus de largeur, on annule le décalage */
    margin-left: 0;
  }
  .content {
    margin-left: 0;
    padding-top: 80px;
  }
}
</style>