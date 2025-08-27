<template>
  <v-app-bar app color="#6B8F71" dense>
    <v-toolbar-title class="pl-4 app-title">Ma bibliothèque</v-toolbar-title>
    
    <v-btn text v-if="!isLoggedIn" @click="goToLogin">Connexion</v-btn>
    
    <v-btn text v-if="isLoggedIn" @click="logout">Déconnexion</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isLoggedIn() {
      // ⭐ Check for the existence of the JWT token
      return !!localStorage.getItem('jwtToken');
    }
  },
  methods: {
    goToLogin() {
      // ⭐ Redirect to the login page
      this.$router.push('/login');
    },
    logout() {
      // ⭐ Clear the JWT token and redirect to login
      localStorage.removeItem('jwtToken');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.app-title {
  font-size: 2rem; 
  color: #1D1E18; 
  max-width: 70%;
}
</style>