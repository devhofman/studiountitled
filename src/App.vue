<template>
  <div id="app" class="main">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom-5">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mr-auto">
      <li class="nav-item">
        <router-link class="nav-link link_proj" to="/">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link link_proj" to="/contact">Contact</router-link>
      </li>
      <li class="nav-item dropdown my-2 my-lg-0">
        <a class="nav-link link_proj" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Check my projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/szeptycover">Szepty | music_cover</router-link>
          <router-link class="dropdown-item" to="/itbinvest">itb invest | web_design</router-link>
          <router-link class="dropdown-item" to="/portraits">street portraits | photography</router-link>
          <router-link class="dropdown-item" to="/dachy">dachy-lca | web_design</router-link>
          <router-link class="dropdown-item" to="/wimd">where_is_my_mind | photography</router-link>
        </div>
      </li>
    </ul>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  width: 100vw;
  overflow-x: hidden;
}

</style>
