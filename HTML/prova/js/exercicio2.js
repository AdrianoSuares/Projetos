function venda(brand, model, ageM, ageF, priceIn, pmtQtd, pmt, descPer, entrance, priceOut, date) {
    
    this.brand = brand;
    this.model = model;
    this.ageM = ageM;
    this.ageF = ageF;
    this.priceIn = priceIn;
    this.pmtQtd = pmtQtd;
    this.pmt = pmt;
    this.descPer = descPer;
    this.entrance = entrance;
    this.priceOut = priceOut;
    this.date = date;
}

function mostrarDados() {
  // cria referência aos elementos da página
    
  var inMarca = document.getElementById("inMarca");
  var inModelo = document.getElementById("inModelo");
  var inAnoModelo = document.getElementById("inAnoModelo");
  var inAnoFab = document.getElementById("inAnoFab");
  var inPreco = document.getElementById("inPreco");
  var inQtdPar = document.getElementById("inQtdPar");
  var inDesc = document.getElementById("inDesc");
  var inEnt = document.getElementById("inEnt");
  var inDate = document.getElementById("inDate");

  var marca = inMarca.value;
  var modelo = inModelo.value;
  var anoModelo = Number(inAnoModelo.value); 
  var anoFab = Number(inAnoFab.value);  
  var preco = Number(inPreco.value);
  var qtdPar = Number(inQtdPar.value);
  var desconto = Number(inDesc.value);
  var entrada = Number(inEnt.value);
  var data = inDate.value;
  var saldo = preco - desconto;  
  var parcela = saldo / pmtQtdPar;
  
    
  var novaVenda = new venda(marca, modelo, anoModelo, anoFab, preco, qtdPar, parcela, desconto, entrada, data );     
    
    

documento.getElementById("resposta").innerHTML= "Dados da Venda  :" +"<br>" + "Marca:" + novaVenda.brand + "<br>" + "Modelo: " + novaVenda.model + "<br>" + "Ano Modelo: " + novaVenda.ageM + "Ano Fabricação: " + novaVenda.ageF + "<br"> + "Valor da venda: " + novaVenda.priceIn + "<br>" "Condição de pagamento: " + novaVenda.pmtQtd + "vez(es) de R$:" + novaVenda.pmt + "<br>" + "Desconto de: -R$ " + novaVenda.descPer + "<br>" + "Entrada de -R$: " + novaVenda.entrance + "Saldo Final R$: " + novaVenda.priceOut + "br" + "Data da Venda" + novaVenda.date;
 
    
    
}
  var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados);

/*
    function classificarVeiculo(qtdPar) {
      if (qtdPar==1){
          classificacao ="a vista";
      }else{ 
          classificacao = "a prazo";
      }      
    return classificacao;
     }

  function calcularSaldo(preco, classificacao) {
      if (classificacao == "a vista"){
          saldo = preco-desconto;
  }else{
          saldo = preco-entrada}
    return saldo;
          }

   funtion calcularParcela(saldo, qtdPar){       
           parcela=saldo/qtdPar;
       return parcela;
   }   
   */
        
 