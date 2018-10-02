beforeEach(function () {
  jasmine.addMatchers({
    toTraduzir: function(){
      return {
        compare: function(actual, expected) {
          return {
            pass:actual === expected,
            message: "Operador traduzido incorretamente, era esperado "+expected+", mas retornou "+actual
          }
        }
      }
    },
    toOperar: function () {
      return {
        compare: function (actual, num1, num2, operador) {
          var expected, operacao;
          switch (operador) {
            case '+':
              expected = num1+num2;
              operacao = "SOMOU";
              break;
            case '-':
              expected = num1-num2;
              operacao = "SUBTRAIU";
              break;
            case '*':
              expected = num1*num2;
              operacao = "MULTIPLICOU";
              break;
            case '/':
              expected = num1/num2;
              operacao = "DIVIDIU";
              break;
            
            default:
              break;
          }
          return {
            pass: actual === expected,
            message: "A função não "+operacao+" corretamente, "+
            "era esperado o resultado '"+(expected)+"' para os números "+num1+" e "+
            num2+", mas retornou '"+actual+"'."
          };
        }
      };
    },
  });
});
