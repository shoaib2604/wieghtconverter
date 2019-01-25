document.getElementById('output').style.visibility='hidden';
var kginput=document.querySelector('#kginput')
kginput.addEventListener('input',function(){
  document.querySelector('#output').style.visibility='visible';
  let kg=event.target.value;
  document.querySelector('#gramsoutput').innerHTML=kg*1000;
  document.querySelector('#lbsoutput').innerHTML=kg*2.2;

});
