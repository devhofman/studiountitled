<template>
    <div class="home container-fluid">
        <div class="row">
            <div class="col-12 col-lg-6 info_contact d-flex flex-column justify-content-center align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                            <span class="text-white pt-3 name_contact">Dominik Hofman</span>
                            <span class="text-white pt-5">dhofman.studio@gmail.com</span>
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                            <span class="text-white mb-3">You can find me here:</span>
                            <a href="https://www.instagram.com/untitled_studio.24/" class="link-social">instagram.com/untitled_studio.24</a>
                            <a href="https://www.facebook.com/untitled.grafika/" class="link-social">facebook.com/untitled.grafika</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 bg_contact">
            </div>
        </div>
    </div>
</template>

<style>
.home {
    width: 100vw; height: 100vh;
}

.info_contact {
    height: 100vh; width: 100%;
}

.bg_contact {
    width: 100%; height: 100vh;
    background-image: url('../assets/profilowe.jpg');
    background-size: cover;
}

.name_contact {
    font-size: 2rem;
    font-family: Antonio-Reg;
}

.link-social {
    color: white;
    font-size: 1.2rem;
    text-decoration: underline;
}
</style>
