<template>
  <div id="app" class="main">
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom-5">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mr-auto">
      <li class="nav-item">
        <a class="nav-link link_proj" href="/">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link_proj" href="/contact">Contact</a>
      </li>
      <li class="nav-item dropdown my-2 my-lg-0">
        <a class="nav-link link_proj" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Check my projects
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/szeptycover">Szepty | music_cover</a>
          <a class="dropdown-item" href="/itbinvest">itb invest | web_design</a>
          <a class="dropdown-item" href="/portraits">street portraits | photography</a>
          <a class="dropdown-item" href="#">itb invest | web_design</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
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

.dropdown-item {
  font-family: Antonio-Reg;
  font-size: 1.25rem;
}

.link_proj {
  text-transform: uppercase;
  color: black;
  font-size: 1.5rem;
  font-family: Antonio-Reg;
}
</style>
