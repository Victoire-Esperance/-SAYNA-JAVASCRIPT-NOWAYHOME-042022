//hover footer++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(".iconehover").hover(function () {
    $(this).css({   
      "color": "#ffffff",
    });
  }, function () {
    $(this).css({
      "color": "black",
    });
  });

  
  // hover media**************************************************
  $(".media1").hover(function () {
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
  //popup********************************************
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
phrase.innerText='veuiller'
    return(false)
  }
  else{
    pop.style.display='block'
phrase.innerText='vita tompoko§'
  }

}
})

table.addEventListener('click', ()=>{
  pop.style.display='none'
})