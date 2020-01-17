<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom-5">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
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
          <a class="dropdown-item" href="/dachy">dachy-lca | web_design</a>
          <a class="dropdown-item" href="/wimd">where_is_my_mind | photography</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<style>
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
