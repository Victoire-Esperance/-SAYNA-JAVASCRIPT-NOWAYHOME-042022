
//jquery
$(document).ready(function () {

//boutton2 hover******************************************************
  $(".button2").hover(function () {
    $(this).css({
      "background-color": "#ffffff",
      "color": "#b11313",
      "box-shadow": "0 10px 5px 0 #ffffff"
    });
  }, function () {
    $(this).css({
      "background-color": "rgba(0,0,0,0)",
      "color": "#ffffff",
      "box-shadow": "none"
    });
  });

//boutton1 hover*******************************************************
  $(".button1").hover(function () {
    $(this).css({
      "background-color": "rgba(0,0,0,0)",
      "color": "#ffffff",
      "border": "2px solid #ffffff"
    });
  }, function () {
    $(this).css({
      "background-color": "#ffffff",
      "color":"#b11313"
    });

  });
//spiderman1****************************************************************
    $(".card-text").hide();
    $(".card-text").nextUntil(".button1").hide()
    $(".sary1").on({
mouseenter:function(){
  $(".texte1").fadeTo(2000,1)
},
mouseleave:function(){
  $(".texte1").hide(2000)
}
})
//spiderman2------------------------------------------------------------------
$(".sary2").on({
mouseenter:function(){
  $(".texte2").fadeTo(2000,1)
},
mouseleave:function(){
  $(".texte2 ").hide(2000)
}
})
//spiderman3-----------------------------------------------------------------------------
$(".sary3").on({
  mouseenter:function(){
    $(".texte3").fadeTo(2000,1)
    $(".card-text").nextUntil(".button1").fadeTo(2000)
  },
  mouseleave:function(){
    $(".texte3").hide(2000)
    $(".card-text").nextUntil(".button1").hide()
  }
  })

//bouton envoyer-------------------------------------------------------------------------
    $(".form-button").hover(function () {
      $(this).css({
        "background-color": "rgba(0,0,0,0)",
        "color": "#ffffff",
        "border": "2px solid #ffffff"
      });
    }, function () {
      $(this).css({
        "background-color": "#ffffff",
        "color":"#b11313"
      });
  
    });
//fade in far from home--------------------------------------------------------

  $(".aho").fadeIn(7000);
;

//hover de l'icone au footer////////////////////////////////////////////////////////////////
$(".iconehover").hover(function () {
  $(this).css({   
    "color": "#ffffff",
  });
}, function () {
  $(this).css({
    "color": "black",
  });
});

})
//popup premier partie++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let pop =document.querySelector("#Popup")
let table =document.querySelector(".button3")
let table1 = document.querySelectorAll(".spiderman2")
const popo =document.getElementById("popo1")
let phrase=document.getElementById("phrase")

popo.addEventListener("submit", function(e) {
e.preventDefault();
for(let i=0; i<table1.length; i++){
  if(table1[i].value==''){
    pop.style.display='block'
phrase.innerText='veuillez remplir les champs svp!'
    return(false)
  }
  else{
    pop.style.display='block'
phrase.innerText="MERCI, vous recevez ton propre costume FELICITATION! "
  }

}
})

table.addEventListener('click', ()=>{
  pop.style.display='none'
})
//popup  partie two++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let pap =document.querySelector("#Popup2")
// let bota4 =document.querySelector(".button4")
// let bota5 = document.querySelectorAll(".form-newsletter")
// const popo =document.getElementById("popo3")
// let phrase=document.getElementById("phrase")

// popo.addEventListener("submit", function(e) {
// e.preventDefault();
// for(let i=0; i<table1.length; i++){
//   if(bota5[i].value==''){
//     pap.style.display='block'
// phrase.innerText='veuiller'
//     return(false)
//   }
//   else{
//     pap.style.display='block'
// phrase.innerText='vita tompoko§'
//   }

// }
// })

// bota4.addEventListener('click', ()=>{
//   pap.style.display='none'
// })




//MUSIC PLAYER--------------------------------------------------------

// const playButton = document.querySelector('#play');
//     const prevButton = document.querySelector('#prev');
//     const nextButton = document.querySelector('#next');
//     const status = document.querySelector('.status');
//     const title = document.querySelector('.title');
//     const audio = document.querySelector('#audio');
//     const cover = document.querySelector('#cover');
//     const progress = document.querySelector('.progress');
//     const progressContainer = document.querySelector('.progress-container');
//     const songs = ['What\'s up danger'];
//     const couvertures = ['cover']
//     let songIndex = 0;
//     let couvertureIndex = 0;
//     loadSong(songs[songIndex])
                                          
    // function loadSong(song, couverture) {
    //     title.innerText = song
    //     audio.src = /assets/audio/audio.mp3;
    //     cover.src =img/spidermanvaovao.png;
    //  }

    // function playSong() {
    //     playButton.innerHTML = '<i class="fa-solid fa-play"></i>'
    //     status.innerHTML = ''
    //     audio.pause()
    // }

    // function pauseSong() {
    //     playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
    //     status.innerHTML = 'Now Playing'
    //     audio.play()
    // }

    // playButton.addEventListener('click', () => {
    //     const nowPlaying = playButton.innerHTML == '<i class="fa-solid fa-play"></i>';


    //     if (nowPlaying) {
    //         pauseSong()
    //     } else {
    //         playSong()

    //     }
    // })
    // prevButton.addEventListener('click', prevSong)
    // nextButton.addEventListener('click', nextSong)

    // function prevSong() {
    //     songIndex--
    //     if (songIndex < 0) {
    //         songIndex = songs.length - 1
    //     }
    //     loadSong(songs[songIndex])
    //     playSong()
    // }

    // function nextSong() {
    //     songIndex++
    //     if (songIndex > songs.length - 1) {
    //         songIndex = 0
    //     }
    //     loadSong(songs[songIndex])
    //     playSong()
    // }
//     audio.addEventListener('timeupdate', updateProgress)

//     function updateProgress(e) {
//         const { duration, currentTime } = e.srcElement;
//         const progressPercent = (currentTime / duration) * 100;
//         progress.style.width = ${progressPercent}%;
//     }
//     progressContainer.addEventListener('click', setProgress)

//     function setProgress(e) {
//         const width = this.clientWidth
//         const clickX = e.offsetX
//         const duration = audio.duration
//         audio.currentTime = (clickX / width) * duration

//     }
// let heart = document.getElementById('heart');
//     heart.addEventListener('click', myFav);

//     function myFav() {
//         if (heart.innerHTML == '<i class="fa-regular fa-heart"></i>') {
//             heart.innerHTML = '<i class="fa-solid fa-heart">'
//         } else { heart.innerHTML = '<i class="fa-regular fa-heart"></i>' }

//     }





