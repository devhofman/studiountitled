<template>
  <div class="home container-fluid">
    <div class="row intro">
      <div class="col-12 d-flex justify-content-center align-items-center flex-column intro-label">
        <div class="box-title d-flex flex-column text-center">
          <span class="title mb-3">studio_UNTITLED</span>
          <span class="sub mb-5">photo and graphic design</span>
        </div>
        <button type="button" class="btn bg-black text-white btn_intro">welcome</button>
      </div>
    </div>
    <div class="row aboutme container-fluid" id="about">
      <div class="col-12 col-md-12 col-lg-6 img_me">
      </div>
      <div class="col-12 col-md-12 col-lg-6 about-content bg-white text-black">
        <div class="container">
          <div class="row">
            <div class="col-12">
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
          <div class="row">
            <div class="col-12">
              <div class="row">
            <div class="col-12 d-flex justify-content-left align-items-center">
              <span class="text-dark title p-5">
                experience/education
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex justify-content-center flex-column">
              <span class="text-dark desc-about p-5">
                <ul>
                  <li><b>2019</b> | AD Awards Media Agency - web designer</li>
                  <li><b>2017 - 2018</b> | Tourism Office Kompas BTA - photographer</li>
                </ul>
              </span>
              <span class="text-dark desc-about p-5">
                <ul>
                  <li><b>2017 - 2020</b> | AFA Wroclaw School of Photography</li>
                  <li><b>2017 - 2021</b> | The Legnica State University of Applied Sciences - web developing</li>
                </ul>
              </span>
            </div>
          </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="row">
            <div class="col-12 d-flex justify-content-left align-items-center">
              <span class="text-dark title p-5">
                skills
              </span>
            </div>
          </div>
          <div class="row pb-5">
            <div class="col-12 d-flex justify-content-center align-items-center flex-column">
              <span class="text-dark desc-about p-5">
                <ul>
                  <li>Adobe Photoshop - Premiere Pro - After Effects - Illustrator</li>
                  <li>Basic knowledge of HTML, CSS and JavaScript</li>
                  <li>Basics of photography and film making</li>
                  <li>Creativity, communication and joy of work :)</li>
                </ul>
              </span>
            </div>
          </div>
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

@media (min-width: 1024px) {
  .check_mobile {
    display: none;
  }
}

@media (max-width: 1024px) {
  .nav-desktop {
    visibility: hidden;
  }
}

.btn_intro, .btn_about {
  background-color: black;
  font-family: Antonio-Reg;
  font-size: 1.25rem;
  transition: .5s;
  border-radius: 0;
}

.btn_intro:hover {
  border: 3px solid white;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: rgb(0, 0, 0, 0);
}

.carousel_pf {
  width: 100%;
}

.about-content::-webkit-scrollbar-thumb {
  background: black;
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
  position: static;
  overflow: hidden;
}

.about-content {
  width: 100vw; height: 100vh;
  overflow: scroll;
}

.pf-option, .title {
  font-family: Antonio-Reg;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.desc-about {
  font-family: Montserrat-Reg;
  font-size: 1.3rem;
  line-height: 2.25rem;
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

.modal_menu {
  border: white 2px solid;
}
</style>

<script>

</script>
