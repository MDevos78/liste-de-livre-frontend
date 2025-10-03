<template>
  <div>
    <h2>Liste des livres</h2>
    <v-card flat color="#AAD2BA">
      <v-card-title class="d-flex align-center pe-2 v-card">
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Rechercher"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card-title>
      
      <v-data-table
          :headers="headers"
          :items="livres"
          :search="search"
          density="compact"
          :items-per-page="10"
      >
          <template v-slot:headers="{ columns }">
              <tr>
                  <th v-for="column in columns" :key="column.key" class="text-left">
                      {{ column.title }}
                  </th>
                  <th class="text-left">Actions</th> </tr>
          </template>
          
          <template v-slot:item="{ item, index }">
              <tr :class="{ 'even-row': index % 2 === 0, 'odd-row': index % 2 !== 0 }">
                  <td class="text-left">{{ item.titre }}</td>
                  <td class="text-left">{{ item.auteur }}</td>
                  <td class="text-left">{{ item.genre }}</td>
                  <td class="text-left">{{ item.anneePublication }}</td>
                  
                  <td class="text-left">
                      <v-btn 
                          icon 
                          size="small" 
                          color="red"
                          @click="deleteLivre(item.id)" >
                          <v-icon>mdi-delete</v-icon>
                      </v-btn>
                  </td>
              </tr>
          </template>
      </v-data-table>
    </v-card>
  </div>
</template>


<script>
import axios from 'axios';
import { VDataTable } from 'vuetify/components/VDataTable';

export default {
  name: 'ListeLivres',
  components: {
    VDataTable,
  },
  data() {
  return {
    search: '',
    livres: [],
    headers: [
      { title: 'Titre', key: 'titre', headerProps: { align: 'center' } },
      { title: 'Auteur', key: 'auteur', headerProps: { align: 'center' } },
      { title: 'Genre', key: 'genre', headerProps: { align: 'center' } },
      { title: 'Année de publication', key: 'anneePublication', headerProps: { align: 'center' } },
    ],
  };
},
  mounted() {
    this.fetchLivres();
  },
  methods: {
    async fetchLivres() {
      try {
        const apiUrl = process.env.VUE_APP_API_URL;
        const response = await axios.get(`${apiUrl}/api/livres`);
        this.livres = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    },
    async deleteLivre(livreId) {
        if (!confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
            return;
        }

        try {
            const token = localStorage.getItem('jwtToken');
            
            await axios.delete(
                `https://liste-de-livre-backend.onrender.com/api/livres/${livreId}`, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            
            // Recharger la liste des livres pour mettre à jour l'affichage
            this.fetchLivres(); 
            
        } catch (error) {
            console.error('Erreur lors de la suppression du livre:', error);
            // Affiche une alerte si la suppression échoue (ex: erreur 403)
            alert('Erreur lors de la suppression. Vous n\'êtes peut-être pas le propriétaire.'); 
        }
    },
  },
};
</script>

<style scoped>
.v-card{
  margin-top: 10px;
}
.even-row {
  background-color: #AAD2BA;
}

.odd-row {
  background-color: #ffffff;
}

:deep(.v-data-table-footer) {
  background-color: #AAD2BA;
}

:deep(table) {
  border-collapse: collapse !important;
}

:deep(th), :deep(td) {
  border: 1px solid #e0e0e0 !important;
}
</style>