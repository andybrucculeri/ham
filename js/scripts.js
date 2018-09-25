console.log ('scripts loaded');

var burger = document.getElementById('burger');
var mobilenav = document.getElementById('offscreennav');
var closebutton = document.getElementById('closebutton');
var content = document.getElementById('content');
var moreinfotext = document.getElementById('moreinfo');
var tooltip = document.getElementById('tooltip');

burger.addEventListener('click', function(){
  console.log('button clicked');
  mobilenav.style.width = '50%';
  mobilenav.style.transition = '0.5s ease';
  content.style.opacity ='0.1';
});

closebutton.addEventListener('click', function(){
  mobilenav.style.width = '0';
  mobilenav.style.transition = '0.5s ease';
  content.style.opacity ='1';
});

moreinfotext.addEventListener('mouseenter', function(event){
  tooltip.style.opacity= '1';
  var x = event.pagex;
  var y = event.pagey;

  console.log(y);
  tooltip.style.top = y + 'px';
  tooltip.style.right = x + 'px';
});

moreinfotext.addEventListener('mouseleave', function(event){
  tooltip.style.opacity= '0';
});
