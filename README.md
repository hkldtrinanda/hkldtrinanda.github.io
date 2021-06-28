<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--  -->
    <link rel="stylesheet" href="style/tailwind.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="style/build.css">
    <link rel="icon" href="img/icon.png">
    <link rel="stylesheet" href="dist/aos.css" />
    <script src="js/tailwind.config.js"></script>
    <style>
        @font-face {
            font-family: myFirstFont;
            src: url(font/ArimoSemiBold.ttf);
        }

        .font1 {
            font-family: myFirstFont;
        }

        @font-face {
            font-family: mysecondFont;
            src: url(font/Quantum.otf);
        }

        .font2 {
            font-family: mysecondFont;
        }

        @font-face {
            font-family: mythirdFont;
            src: url(font/MavenProMedium.ttf);
        }

        .font3 {
            font-family: mythirdFont;
        }

        @font-face {
            font-family: myfourthFont;
            src: url(font/Montserrat-Bold.otf);
        }

        .font4 {
            font-family: myfourthFont;
        }

        .nav-link:hover {
            border-bottom: 3px solid #34D399;
        }

        .animated {
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
        }

        .pattern {
            background-image: url("img/background.png");
            height: 110%;
            width: auto;
            position: relative;
            background-size: cover;
        }

        .svg {
            z-index: 2;
            position: absolute;
        }
        .grad {
            background-image: linear-gradient(to bottom right, #343434 , #1D1D1D);
        }

        .grad1 {
            background-image: linear-gradient(to right, #343434 , #1D1D1D);
        }

    </style>
    <title>Haikal Danung Trinanda</title>


</head>

<body>

    <!-- Nav -->
    <header>
         <script
            src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer>
            </script>
            <div class="w-full text-white fixed z-50 ">
                <div x-data="{ open: false }"
                    class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div class="p-4 flex flex-row items-center justify-between">
                        <a href="#"
                            class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                            <img class="w-auto h-7" src="img/header.png" alt="" /></a>
                        <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
                            @click="open = !open">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                <path x-show="!open" fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                                <path x-show="open" fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav :class="{'flex': open, 'hidden': !open}"
                        class="flex-col flex-grow pb-2 md:pb-0 hidden md:flex md:justify-end md:flex-row">

                        <a class="px-4 py-2 mt-2 text-lg font-semibold  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="index.html">Home</a>
                        <a class="px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#profil">About Me</a>
                        <a class="px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#kerjaan">My Work</a>
                        <a class="px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            href="#kontak">Contact</a>
                </div>
            </div>
        </nav>
    </header>

    <!-- Content -->
    <section class="h-full flex items-center pattern">
        <div
            class="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            </div>
            <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 class="text-5xl font-bold leading-none sm:text-6xl text-right text-white font4">HELLO THERE!</h1>
                <h1 class="text-5xl font-bold leading-none sm:text-4xl text-right text-white font4">NICE TO MEET YOU
                </h1>
                <p class="mt-6 mb-8 text-lg sm:mb-12 text-right text-white font3">I`M HAIKAL DANUNG TRINANDA
                    <br class="hidden md:inline lg:hidden text-right font3 text-white"><br>Indonesian Modder, Designer,
                    Game<br>Developer, And Photographer
                </p>
            </div>
        </div>
        <span
            class="p-20 animate__animated animated bounce animate__bounce absolute w-full bottom-10 flex items-center justify-center svg">
            <a href="#profil">
                <img src="img/arrow.png" alt="" class="h-5">
            </a>
        </span>
    </section>

    <!-- Profile  -->
    <div class="grad" id="profil">
        <div
            class="px-4 pt-4 pb-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-1 ">
            <h2
                class="max-w-lg mb-2 font-sans text-8xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none font4 ">
                Who Am I?
            </h2>
            <p class="text-base text-white md:text-lg font3">
                here you can recognize me
            </p>
        </div>
        <div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
            <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div class="flex flex-col justify-center">
                    <div class="max-w-xl mb-6">
                        <br>
                        <h2
                            class="max-w-lg mb-3 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none font4 ">
                            Do with desire.
                        </h2>
                        <p class="text-base text-white md:text-sm font3 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet scelerisque
                            fermentum.
                            Nulla nunc est, efficitur sed laoreet sed, fringilla vel velit. Praesent<br>tempus
                            condimentum ligula eu efficitur.
                            Praesent consequat quam eget magna<br>viverra ornare. Mauris sapien felis, convallis ut
                            eleifend sed, eleifend in odio.
                        </p>
                    </div>
                    <div
                        class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a href="#"
                            class="px-8 py-3 text-lg font-semibold rounded-full shadow-2xl bg-green-600 hover:bg-white text-white hover:text-green-600">My
                            CV</a>
                        <a href="#"
                            class="px-8 py-3 text-lg font-semibold rounded-full shadow-2xl bg-yellow-600 hover:bg-white text-white hover:text-yellow-600">My
                            Resume</a>
                    </div>
                </div>
                <div>
                    <img class="ml-28 object-cover animate__animated animate__bounceInRight" src="img/Parpol.png"
                        alt="" />
                </div>
            </div>
        </div>
    </div>

    <!-- Divide -->
    <div class="px-28 gap-13 grad1">
        <div class="grid grid-cols-1 divide-y-4 divide-white">
            <div></div>
            <div>
                <br><br><br>
            </div>
        </div>
    </div>


    <!-- Gallery -->
    <section class=" grad text-white" id="kerjaan">
        <div class="container p-6 mx-auto space-y-8 py-16   ">
            <div class="space-y-2 text-right">
                <h2 class="text-5xl font-bold font4 animate__fadeInDown animate__animated">My Work</h2>
                <p class="font-serif text-sm  font3">Here is the work I have done before, I hope
                    you enjoy it</p><br>
            </div>
            <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/pv1.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Game Technology Student
                            Association</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Front End
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                UI/UX Design
                            </div>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/pv2.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Game Technology Study Program</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Front End
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                UI/UX Design
                            </div>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/pv3.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">The Assassin`s: The Journey</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">BETA TEST / DISCONTINUED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Back End
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                UI/UX Design
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Game Designer
                            </div>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/pv8.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Ngebook</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Front End
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                UI/UX Design
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/pv4.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Kidnapper</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                DOP
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Editor
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Sound Design
                            </div>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/pv5.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Chocola</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Editor
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                DOP
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Visual Effect Artist
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Sound Design
                            </div>
                        </div>
                    </div>
                </article>
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/Pv7.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Trailer Game Technology Anniversary 1st</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Editor
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Sound Designer
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Visual Effect Artist
                            </div>
                        </div>
                    </div>
                </article>
               
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/Pv7.png">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Game Technology Anniversary 1st</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Operator
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                UI/UX Design
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Switcher
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                <article class="flex flex-col d">
                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" class="object-cover w-full h-52" src="img/pv6.jpg">
                    </a>
                    <div class="flex flex-col flex-1 p-6">
                        <p class="text-xs tracking-wider uppercase ">Flatcar by PT.Inka for Trainz Simulator</p>
                        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">FINISHED</h3>
                        <div class="flex flex-wrap justify-start text-xs ">
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                3D Model Artist
                            </div>
                            <div
                                class=" border rounded-bl-lg bg-green-600 border-transparent text-white text-sm p-1 border-gray-900">
                                Animator
                            </div>
                        </div>
                    </div>
                </article>
            </div>
    </section>


    <!-- Footer -->
    <footer class="flex justify-center px-4 text-white grad1" id="kontak ">
        <div class="container py-6">
            <h1 class="text-lg font-bold text-center lg:text-2xl font3">
                Interested in communicating with me?
            </h1>
            <p class="text-sm text-center">Interested in working with me? Need help on your project? <br>Or just wanna say hi? I’d love to hear you about that.</p>
            <h3 class="text-center font-bold font3">Hit me up on my social media :</h3>


            <hr class="h-px mt-6 border-white ">

            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">

                <div class="flex flex-col mt-4 md:m-0 ">
                    <div class="flex-wrap justify-start flex">
                        <a href="#"
                            class="px-2"><img alt="" class="object-contain h-8 hover:opacity-75" src="img/linkedin_icon.png"></a>
                            <a href="#"
                            class="px-2"><img alt="" class="object-contain h-8 hover:opacity-75" src="img/insta_icon.png"></a>
                            <a href=" "
                            class="px-2"><img alt="" class="object-contain h-8  hover:opacity-75" src="img/mail_icon.png"></a>
                    </div>
                </div>
                <div>
                    <a href="#"
                        class="text-xl font-bold text-white hover:text-gray-700 font2">He</a>
                </div>

            </div>
        </div>
    </footer>
    <!--  -->
</body>

</html>
