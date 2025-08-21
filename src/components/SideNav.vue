<template>
  <aside class="sidenav">
    <nav>
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
</style>