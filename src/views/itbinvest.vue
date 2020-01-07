<template>
  <div class="about container-fluid">
    <div class="row intro-proj">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <div class="box-title d-flex flex-column text-center">
          <span class="text-dark title mb-3">itb_invest</span>
          <span class="sub mb-5">web design - one page - business card</span>
        </div>
      </div>
    </div>
    <div class="row pic_1">
    </div>
    <div class="row cover d-flex justify-content-center align-items-center">
      <img src="../assets/szepty/front.jpg" alt="" class="front">
    </div>
    <div class="row pic_2">
    </div>
    <div class="row cover d-flex justify-content-center align-items-center">
      <div class="col-12">
        <div class="container-fluid">
          <div class="row mt-5">
            <div class="col-12 text-center">
              <span>2019 | all rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row fixed-top">
      <div class="col-3 text-right">
        <div class="container">
          <div class="col-12 ml-3">
            <div class="row">
            <span class="text-white">
              <router-link to="/" class="pf-option bg-black p-2">back</router-link>
            </span>
          </div>
          </div></div></div></div>
  </div>
</template>

<style>
.about {
  width: 100vw;
  height: 100vh;
  color: black;
  background-color: white;
}

.cover, .intro-proj {
  width: 100vw;
  height: 90vh;
}

.pic_1 {
  width: 100vw; height: 100vh;
  background-image: url('../assets/szepty/pic_szepty_1.jpg'); background-image: cover;
}

.pic_2 {
  width: 100vw; height: 100vh;
  background-image: url('../assets/szepty/pic_szepty_12.jpg'); background-image: cover;
}

.pic_3 {
  width: 100vw; height: 100vh;
  background-image: url('../assets/szepty/pic_szepty_2.jpg'); background-image: cover;
}

.pf-option, .title {
  font-family: Antonio-Reg;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.title {
  font-size: 3.5rem;
}

.sub {
  font-family: Montserrat-Reg;
  font-size: 1rem;
}

.front {
  width: 30vw;
  border: 3px solid black;
}

.mockup {
  width: 100%;
  border: 3px solid black;
}

</style>

<script>

</script>
