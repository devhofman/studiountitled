<template>
  <div class="home container-fluid">
    <div class="row intro">
      <div class="col-12 d-flex justify-content-center align-items-center flex-column intro-label">
        <div class="box-title d-flex flex-column text-center">
          <span class="title mb-3">studio_UNTITLED</span>
          <span class="sub mb-5">photo and graphic design</span>
        </div>
        <div class="text-center">
          <span class="text-white">
              <a href="#about" class="pf-option">about me</a>
            </span>
        </div>
      </div>
    </div>
    <div class="row fixed-top">
      <div class="col-4 text-right">
        <div class="container">
          <div class="col-12 ml-3">
            <div class="row pt-5">
            <span class="pf-option mb-5 bg-black">
              check my projects_here
            </span>
          </div>
            <div class="row">
            <span class="text-white">
              <router-link to="/szeptycover" class="pf-option">Szepty | music cover</router-link>
            </span>
          </div>
          <div class="row">
            <span class="text-white">
              <router-link to="/wimd" class="pf-option">where_is_my_mind | photo</router-link>
            </span>
          </div>
          <div class="row">
            <span class="text-white">
              <router-link to="/itbinvest" class="pf-option">Itb invest | landing page</router-link>
            </span>
          </div>
          <div class="row">
            <span class="text-white">
              <router-link to="/magic" class="pf-option">Magic | photography</router-link>
            </span>
          </div>
          <div class="row">
            <span class="text-white">
              <router-link to="/foo" class="pf-option">School notebooks | illustrations </router-link>
            </span>
          </div>
          <div class="row">
            <span class="text-white">
              <router-link to="/portraits" class="pf-option">street portraits | photography</router-link>
            </span>
          </div>                </div>
        </div>
      </div>
    </div>
    <div class="row aboutme container-fluid" id="about">
      <div class="col-12 col-md-6 img_me">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/me.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/me.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/me.jpg" alt="Third slide">
    </div>
  </div>
</div>
      </div>
      <div class="col-12 col-md-6 about-content bg-white text-black">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-left align-items-center">
              <span class="text-dark title p-5">
                Dominik Hofman
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center">
              <span class="text-dark desc-about p-5">
                A graduate of Wrocław School of Photography. In love with photography and graphic design. In his work tries to find a golden mean between art and usability. He gained his first experiences as web designer in AD Awards Media Agency (Legnica) and as photographer on teenage camps organized by the Tourism Office Kompas (Gdańsk).
He loves new challenges and look for original solutions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes start {
  0% {
    height: 0;
  }

  100% {
    height: 100%;
  }
}

.about-content {
  z-index: 10;
}

.home {
  width: 100vw;
  color: white;
  background-color: black;
  animation: .5s start;
}

.bg-black {
  background-color: black;
}

.aboutme {
  width: 100vw; height: 100vh;
}

.intro {
  width: 100vw; height: 100vh;
}

.img_me {
  width: 100%;
  background-image: url('../assets/me.jpg');
  background-size: cover;
}

.about-content {
  width: 100vw; height: 100vh;
}

.pf-option, .title {
  font-family: Antonio-Reg;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.desc-about {
  font-family: Antonio-Reg;
  font-size: 1rem;
}

.pf-option:hover {
  border: 3px white solid;
  color: white;
}

.title {
  font-size: 3.5rem;
}

.sub {
  font-family: Montserrat-Reg;
  font-size: 1rem;
}
</style>

<script>

</script>
