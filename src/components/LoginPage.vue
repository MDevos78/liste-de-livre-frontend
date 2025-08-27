<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-5">
          <v-card-title class="text-center">{{ isLogin ? 'Connexion' : 'Création de compte' }}</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="username"
                label="Nom d'utilisateur"
                required
                prepend-icon="mdi-account"
              ></v-text-field>
              <v-text-field
                v-if="!isLogin"
                v-model="email"
                label="Email"
                type="email"
                required
                prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Mot de passe"
                type="password"
                required
                prepend-icon="mdi-lock"
              ></v-text-field>
              <v-btn
                type="submit"
                color="primary"
                class="mt-4"
                block
              >
                {{ isLogin ? 'Se connecter' : 'Créer un compte' }}
              </v-btn>
            </v-form>
            <div class="text-center mt-3">
              <a @click="isLogin = !isLogin">{{ isLogin ? 'Créer un compte' : 'Se connecter' }}</a>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isLogin: true,
      username: '',
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        if (this.isLogin) {
          const response = await axios.post('http://localhost:8081/api/auth/login', {
            username: this.username,
            password: this.password
          });
          // Store the JWT token
          localStorage.setItem('jwtToken', response.data.token);
          this.$router.push('../'); // Redirect to the books list
        } else {
          await axios.post('http://localhost:8081/api/auth/register', {
            username: this.username,
            email: this.email,
            password: this.password
          });
          this.isLogin = true;
          alert('Compte créé avec succès ! Connectez-vous.');
        }
      } catch (error) {
        this.errorMessage = error.response.data || 'Une erreur est survenue.';
        alert(this.errorMessage);
      }
    }
  }
};
</script>