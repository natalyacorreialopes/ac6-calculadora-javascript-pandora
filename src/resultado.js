$("button.operacao").each(function(){

  $(this).click(function(){
    let atual = $("#resultado").val();
    let operacao = $(this).text();

    if(atual.length > 0 && atual.indexOf("/") === -1
     && atual.indexOf("*") === -1 && atual.indexOf("+") === -1 && atual.indexOf("-") === -1){
      $("#resultado").val(atual+operacao);
    }
  });

});