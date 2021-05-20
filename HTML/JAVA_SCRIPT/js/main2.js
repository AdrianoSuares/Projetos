function fatorial(){
  var a=parseInt(document.getElementById('a').value);
  var totalFat=document.getElementById('totalFat');
  var total=1;

  for(var i=1;i<=a; i++)
   total *=i;

  totalFat.innerHTML =total;
} 