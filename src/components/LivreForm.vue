<template>
  <div>
    <h2>Ajouter un nouveau livre</h2>
    <div class="livre-form">
      <form @submit.prevent="submitLivre">
        <input type="text" v-model="livre.titre" placeholder="Titre" required />
        <input type="text" v-model="livre.auteur" placeholder="Auteur" required />
        <input type="number" v-model="livre.anneePublication" placeholder="Année de publication" />
        
        <select v-model="livre.genre" required>
          <option value="" disabled selected>Sélectionnez un genre</option>
          <option value="roman">Roman</option>
          <option value="science-fiction">Science-Fiction</option>
          <option value="bande dessinée">Bande dessinée</option>
          <option value="jeunesse">Jeunesse</option>
          <option value="horreur">Horreur</option>
          <option value="biographie">Biographie</option>
          <option value="polar">Polar</option>
          <option value="essai">Essai</option>
        </select>
        <div class="bouton">
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LivreForm',
  data() {
    return {
      livre: {
        titre: '',
        auteur: '',
        anneePublication: null,
        genre: ''
      }
    };
  },
  methods: {
    async submitLivre() {
      try {
        const token = localStorage.getItem('jwtToken');

        if (!token) {
          console.error('Jeton JWT non trouvé. Veuillez vous connecter.');
          // Vous pouvez aussi afficher un message d'erreur à l'utilisateur ou le rediriger
          return;
        }

        await axios.post(
          'https://liste-de-livre-backend.onrender.com/api/livres',
          this.livre,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        this.resetForm();
        this.$emit('livre-added');
      } catch (error) {
        console.error('Erreur lors de l\'ajout du livre:', error);
      }
    },
    resetForm() {
      this.livre = {
        titre: '',
        auteur: '',
        anneePublication: null,
        genre: ''
      };
    }
  }
};
</script>

<style scoped>
.livre-form {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 300px;
  padding-right: 300px;
  background-color: #AAD2BA;
}
input, select {
  display: block;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  background-color: #ffffff;
}
.bouton{
  margin: 10px;
}
button{
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 50px;
  width: 200px;
  color: #1D1E18;
  background-color: #6B8F71;
}
</style>