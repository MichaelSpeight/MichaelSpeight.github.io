
// Array of images and player names
 var imgName = [
["img/JL.png", "Jono Lewis"],
["img/RH.png", "Richard Hall"],
["img/DJ.png", "Daniel Johnson"]
];



// Generates random number 0 < length of imgName array



// Uses random number to find corresponding player name
var upper = imgName.length;
var randomImg = Math.floor(Math.random()* upper);
var name = imgName[randomImg][1];




// Generates random image from the randomly generated number function getRandomImg
function retrieveImg(indexPos){



var photo = imgName[indexPos][0];
console.log(photo);
console.log(name);




  for(var i = 0; i <= imgName.length; i += 1){

    $(document).ready(function() {
$('.contact-photo').attr('src', photo);
});


   setTimeout(function(){
var guess = prompt('Can you guess the name of the player in the picture?');

if(guess === name){ alert('Well done, that is correct!')

 $(document).ready(function() {
$('.contact-photo').attr('src', imgName[randomImg1][0]);

});
} else {
  alert("Sorry that is incorrect");
  var randomImg1 = Math.floor(Math.random()* upper);
  $(document).ready(function() {
$('.contact-photo').attr('src', imgName[randomImg1][0]);
});
}
}, 1000);
}




}
retrieveImg(randomImg);



// Time delay on prompt to allow img to load ( find out why prompt loads faster than image?)




