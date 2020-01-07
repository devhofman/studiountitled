<template>
  <div class="magic container-fluid">
    <div class="row">
      <div class="col-12 flex-row d-flex">
        <img src="../assets/streetportraits/portraits03.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/streetportraits/portraits04.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/streetportraits/portraits01.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/streetportraits/portraits02.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/streetportraits/portraits05.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/streetportraits/portraits06.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/streetportraits/portraits07.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/streetportraits/portraits08.jpg" alt="" srcset="" class="img_portraits px-3">
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
.magic {
  width: 100vw;
  height: 100vh;
  color: black;
  background-color: white;
  overflow-y: hidden;
}

.img_portraits {
  height: 100vh;
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
