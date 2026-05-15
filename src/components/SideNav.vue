<template>
  <aside class="sidenav">
    <nav nav class="sidenav-nav">
      <router-link to="/">Liste des livres</router-link>
      <router-link to="/ajouter">Ajouter un livre</router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SideNav',
}
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #6B8F71;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #1D1E18;
  display: block;
}
.sidenav a:hover {
  color: #f1f1f1;
}
@media screen and (max-width: 600px) {
  .sidenav {
    /* 1. La barre devient une barre de navigation supérieure */
    width: 100%; /* Occupe toute la largeur */
    height: auto; /* Sa hauteur s'adapte à son contenu */
    position: relative; /* N'est plus fixe, mais dans le flux */
    padding-top: 0;
  }
  
  .sidenav-nav {
    /* La navigation est en mode flex pour aligner les liens horizontalement */
    display: flex;
    justify-content: space-around; /* Distribue l'espace entre les liens */
    padding: 10px 0; /* Un peu d'espacement vertical */
  }

  .sidenav a {
    /* 2. Les liens sont compactés */
    font-size: 16px; /* Taille de police plus petite */
    padding: 5px 10px;
    text-align: center;
  }
}
</style>