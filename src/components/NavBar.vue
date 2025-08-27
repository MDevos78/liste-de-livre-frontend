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
  data() {
    return {
      // ⭐ Ajoute une variable de réactivité pour forcer la mise à jour
      authStatus: !!localStorage.getItem('jwtToken')
    };
  },
  computed: {
    isLoggedIn() {
      // ⭐ Dépend maintenant de la variable réactive
      return this.authStatus;
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
    logout() {
      localStorage.removeItem('jwtToken');
      // ⭐ Met à jour la variable réactive lors de la déconnexion
      this.authStatus = false;
      this.$router.push('/login');
    }
  },
  // ⭐ Crée un "watcher" pour écouter les changements de route
  watch: {
    '$route.path': function(newPath, oldPath) {
      // Si la route change vers un endroit qui implique une connexion (par exemple, de /login à /),
      // vérifie l'état d'authentification et met à jour
      if (oldPath === '/login' && newPath !== '/login') {
        this.authStatus = !!localStorage.getItem('jwtToken');
      }
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