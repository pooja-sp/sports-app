<template>
  <div id="app">
    <div id="nav">
      <div class="nav-menu">
      <router-link to="/">Members</router-link>  | 
      <router-link to="/about">Sports</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #7ECEF6;
}

.nav-menu{
  float: right;
}
</style>
