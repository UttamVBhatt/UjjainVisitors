'use strict';

////////////////////////////////////////////////////////////////////
////////////////////////INITIALIZING  VARIABLES ///////////////////
//////////////////////////////////////////////////////////////////


let cards = document.querySelector('.cards');
let overlay = document.querySelector('.overlay');
let cross = document.querySelector(".cross");
let mainPlay = document.querySelectorAll(".mainPlay");
let gif = document.querySelector(".gif");
let audio1 = document.querySelector(".audio1");
let cardsContainer = document.querySelector(".cardsContainer");
let cardBackward = document.querySelector(".fa-backward");
let cardForward = document.querySelector(".fa-forward");
let cardImage = document.querySelector(".cardImageImage");
let cardSongName = document.querySelector(".cardSongName");
let authorName = document.querySelector(".authorName");
let cardPlay = document.querySelector(".card-play");
let songList = document.querySelectorAll(".songs-div");
let range = document.querySelector(".range");
let index = 0;
let isplaying;


/////////////////////////////////////////////////////////////////////
///////////////////////// SONG ARRAY ///////////////////////////////
///////////////////////////////////////////////////////////////////

let songs = [
    {
        songName: "Adiyogi",
        authorName: "Kailash Kher",
        image: "./images/image1.jpg",
        audio: "./Songs/Adiyogi.mp3.mp3"
    },
    {
        songName: "Baba Teri Maya",
        authorName: "Hansraj Raghuvanshi",
        image: "./images/image2.jpg",
        audio: "./Songs/Baba Teri Maya.mp3.mp3"
    },
    {
        songName: "Bam Bam Bol Raha he Kashi",
        authorName: "Niraj Singh",
        image: "./images/image3.webp",
        audio: "./Songs/Bam Bam Bol Raha Hai Kashi.mp3.mp3"
    },
    {
        songName: "Bam Lahiri",
        authorName: "Kailash Kher",
        image: "./images/image4.jpg",
        audio: "./Songs/Bam Lahiri.mp3.mp3"
    },
    {
        songName: "Bam Bholle",
        authorName: "Viruss",
        image: "./images/image5.jpg",
        audio: "./Songs/BamBholle.mp3.mp3"
    },
    {
        songName: "Bhola Nyu Matke",
        authorName: "Rajesh Singhpuria",
        image: "./images/image6.jpg",
        audio: "./Songs/Bhola Nyu Matke.mp3.mp3"
    },
    {
        songName: "Bholenath Ki Shadi",
        authorName: "Hansraj Raghuvanshi",
        image: "./images/image7.jpg",
        audio: "./Songs/Bholenath-Ki-Shadi.mp3.mp3"
    },
    {
        songName: "Damru Bajaya",
        authorName: "Hansraj Raghuvanshi",
        image: "./images/image8.jpg",
        audio: "./Songs/Damru-Bajaya.mp3.mp3"
    },
    {
        songName: "Hanuman Chalisa",
        authorName: "Gulshan Kumar",
        image: "./images/image9.jpg",
        audio: "./Songs/Hanuman Chalisa.mp3.mp3"
    },
    {
        songName: "Har Har Mahadev",
        authorName: "Vikram Montrose",
        image: "./images/image10.jpg",
        audio: "./Songs/Har Har Mahadev Omg 2.mp3.mp3"
    },
    {
        songName: "Kyu Khadi Khadi Tu",
        authorName: "Foji Karambi and Dolly",
        image: "./images/image11.jpg",
        audio: "./Songs/Kyu Khadi Khadi Tu Hale Gora.mp3.mp3"
    },
    {
        songName: "Laagi Lagan Shankara",
        authorName: "Hansraj Raghuvanshi",
        image: "./images/image12.jpg",
        audio: "./Songs/Laagi Lagan Shankara.mp3.mp3"
    },
    {
        songName: "Lo Sambhalo Bhole Apni Kanwar",
        authorName: "Lakhbir Singh Lakkha",
        image: "./images/image13.jpg",
        audio: "./Songs/Lo Sambhalo Bhole Apni Kanwar.mp3.mp3"
    },
    {
        songName: "Mahakal Sarkar",
        authorName: "Sunny Albela",
        image: "./images/image14.jpg",
        audio: "./Songs/Mahakal Sarkar.mp3.mp3"
    },
    {
        songName: "Mahakal Ki Gulami",
        authorName: "Kishan Bhagat",
        image: "./images/image15.jpg",
        audio: "./Songs/Mahakal-Ki-Gulami.mp3.mp3"
    },
    {
        songName: "Mera Bhola Hai Bhandari",
        authorName: "Hansraj Raghuvanshi",
        image: "./images/image16.jpg",
        audio: "./Songs/Mera Bhola Hai Bhandari.mp3.mp3"
    },
    {
        songName: "Namo Namo Ji Shankara",
        authorName: "Amit Trivedi",
        image: "./images/image17.jpg",
        audio: "./Songs/Namo-Namo-Ji-Shankara.mp3.mp3"
    },
    {
        songName: "Om-Namah-Shivay",
        authorName: "Udit Narayana",
        image: "./images/image18.jpg",
        audio: "./Songs/Om-Namah-Shivay.mp3.mp3"
    },
    {
        songName: "Shiv Sama Rahe Mujhme",
        authorName: "Hansraj Raghuvanshi",
        image: "./images/image19.jpg",
        audio: "./Songs/Shiv-Sama-Rahe-Mujhme.mp3.mp3"
    },
    {
        songName: "Taqdeer Mujhe Le Chal",
        authorName: "Shahnaaz Akhtar",
        image: "./images/image20.jpg",
        audio: "./Songs/Taqdeer Mujhe Le Chal Mahakal Ki Basti Main.mp3.mp3"
    },
    {
        songName: "Teri Hove Jay Jaykar",
        authorName: "Kishan Bhagat",
        image: "./images/image21.jpg",
        audio: "./Songs/Teri hove jay jaykar.mp3.mp3"
    },
    {
        songName: "Ujjain Ke Raja",
        authorName: "Kishan Bhagat",
        image: "./images/image22.jpg",
        audio: "./Songs/Ujjain Ke Raja.mp3.mp3"
    },
    {
        songName: "Unchi Unchi Vaadi",
        authorName: "Hansraj Raghuvanshi",
        image: "./images/image23.jpg",
        audio: "./Songs/Unchi Unchi Vaadi Mein Baste Hai Bhole Shankar.mp3.mp3"
    }
]

function mainPlayPause() {
    mainPlay.forEach(element => {
        element.classList.replace("fa-pause", "fa-play");
    })
}

////////////////////////////////////////////////////////////////////////
////////////////////// PLAY MUSIC FROM SONGLIST ///////////////////////
//////////////////////////////////////////////////////////////////////

for (let i = 0; i < mainPlay.length; i++) {
    mainPlay[i].addEventListener("click", () => {
        if (mainPlay[i].classList.contains("fa-play")) {
            let newSongIndex = Number(mainPlay[i].dataset.set);
            change_music(newSongIndex);
        } else {
            mainPlay[i].classList.replace("fa-pause", "fa-play");
            audio1.pause();
            audio1.currentTime = 0;
        }
    })
}

////////////////////////////////////////////////////////////////////////
///////////////// OVERLAY AND CROSS BUTTON HIDDEN FUNCTION /////////////
////////////////////////////////////////////////////////////////////////

function cardDisplayNone() {
    cards.style.display = "none"
    overlay.style.display = "none"
    cardsContainer.style.display = "none";
}

cross.addEventListener("click", cardDisplayNone);
overlay.addEventListener("click", cardDisplayNone);

////////////////////////////////////////////////////////////////////////
//////////////////////// PLAY AND PAUSE FOR CARD ///////////////////////
////////////////////////////////////////////////////////////////////////

const playMusic = () => {
    isplaying = true;
    audio1.play();
    cardPlay.classList.replace("fa-play", "fa-pause");
    cardImage.classList.add("anime");
    gif.style.display = "block";
    gif.classList.add("newAnime");
}

const pauseMusic = () => {
    isplaying = false;
    audio1.pause();
    cardPlay.classList.replace("fa-pause", "fa-play");
    cardImage.classList.remove("anime");
    gif.style.display = "none";
}

cardPlay.addEventListener("click", () => {
    isplaying ? pauseMusic() : playMusic();
})

////////////////////////////////////////////////////////////////////////
/////////// CHANGE MUSIC FROM FORWARD AND BACKWARD BUTTO N ////////////
//////////////////////////////////////////////////////////////////////

function change_index(i) {
    index += i;
    change_music(index);
}

function change_music(i) {
    index = i;
    if (index < 0) {
        index = mainPlay.length - 1;
    }
    if (index > mainPlay.length - 1) {
        index = 0;
    }
    mainPlayPause();
    audio1.currentTime = 0;
    cardPlay.classList.replace("fa-play", "fa-pause");
    cardImage.src = songs[index].image;
    cardSongName.textContent = songs[index].songName;
    authorName.textContent = songs[index].authorName;
    cardsContainer.style.display = "flex";
    gif.style.display = "block";
    gif.classList.add("newAnime");
    cardImage.classList.add("anime");
    mainPlay[index].classList.replace("fa-play", "fa-pause");
    cards.style.display = "flex";
    overlay.style.display = "block";
    cards.classList.add("modalView");
    overlay.classList.add("modalView");
    audio1.src = songs[index].audio;
    audio1.play();
}
////////////////////////////////////////////////////////////////////////
/////////// TIME UPDATE IN RANGE FROM AUDIO AND VICE-VERSA ////////////
//////////////////////////////////////////////////////////////////////

audio1.addEventListener("timeupdate", () => {
    let progress = Math.trunc((audio1.currentTime / audio1.duration) * 100);
    range.value = progress;
    if (range.value == 100) {
        change_index(1);
    }
});

range.addEventListener("change", () => {
    audio1.currentTime = (range.value * audio1.duration) / 100;
})

/////////// NAV --- BAR ///////////

var menuUl = document.querySelector('.menu');
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    menuUl.classList.toggle('active');
    hamburger.classList.toggle('newHamburger');
});



let gifDiv = document.querySelector(".gif");
let gifImage = document.querySelector(".gif img");

window.addEventListener("DOMContentLoaded", () => {
    gifDiv.style.display = "none";
    gifImage.style.display = "none";
})