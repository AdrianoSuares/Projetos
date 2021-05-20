function conta(description, price) {
    this.description = description;
    this.price = price;
}

function registraConta(){
	var descricao = document.getElementById("descricao").value;
	var preco = document.getElementById("preco").value;
	var novaConta = new conta(descricao, preco);
    
   /* while conta != null {
     
      var itensList[]=conta; */ 
    document.getElementById("resposta").innerHTML = "Descrição: " + novaConta.description + "    " + 
		 "Preço: " + novaConta.price + "<br>";     
    }
  
    
 


var mostrar = document.getElementById("mostrar");

mostrar.addEventListener("click", registraConta);

