<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/dynamic/155">Dynamic</router-link>
    </div>
    <router-view class="container" />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}

.container {
  flex-grow: 1;
}

#nav {
  display: flex;
  flex-direction: column;
  background-color: #000000;

  a {
    color: white;
    padding: 20px 5px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      transition: 0 2s box-shadow ease-in;
      filter: brightness(0.5);
      -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
      -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    }

    &.router-link-exact-active {
      -moz-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
      -webkit-box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
