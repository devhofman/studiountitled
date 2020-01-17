<template>
  <div class="magic container-fluid">
    <div class="row">
      <div class="col-12 flex-row d-flex">
        <img src="../assets/szepty/here/front.jpg" alt="" srcset="" class="covers px-5">
        <img src="../assets/szepty/here/pic_szepty_1.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/szepty/here/back_color.jpg" alt="" srcset="" class="covers px-3">
        <img src="../assets/szepty/here/pic_szepty_2.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/szepty/here/pic_szepty_12.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/szepty/here/mockup_fronty_1.jpg" alt="" srcset="" class="img_portraits px-3">
        <img src="../assets/szepty/here/mockup_mid_2.jpg" alt="" srcset="" class="img_portraits px-3">
      </div>
    </div>
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
  transform: scale(.8);
}

.covers {
  height: 100vh;
  transform: scale(.8);
}

.intro-szepty {
  width: 60vw;
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
