
function soma(){
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  var totalSoma = document.getElementById('totalSoma');
  var total;
  total = a + b;

  totalSoma.innerHTML=total;
}
