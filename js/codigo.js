
//variables valores de ataque parte 1
var valorDeJugadaUno = 0;
var valorDeJugadaDos = 0;
var valorDeJugadaTres = 0;
var valorDeJugadaCuatro = 0;
var valorDeJugadaCinco = 0;
var valorDeJugadaSeis = 0;
var valorDeJugadaSiete = 0;

//funciones botones de sumar y restar parte 1
    function sumarv1() {
        valorDeJugadaUno = valorDeJugadaUno + 1;
      document.getElementById("valor1").textContent = valorDeJugadaUno;
    }

    function restarv1() {
        valorDeJugadaUno = valorDeJugadaUno - 1;
      document.getElementById("valor1").textContent = valorDeJugadaUno;
    }

    function sumarv2() {
        valorDeJugadaDos = valorDeJugadaDos + 1;
      document.getElementById("valor2").textContent = valorDeJugadaDos;
    }

    function restarv2() {
        valorDeJugadaDos = valorDeJugadaDos - 1;
      document.getElementById("valor2").textContent = valorDeJugadaDos;
    }

    function sumarv3() {
        valorDeJugadaTres = valorDeJugadaTres + 1;
      document.getElementById("valor3").textContent = valorDeJugadaTres;
    }

    function restarv3() {
        valorDeJugadaTres = valorDeJugadaTres - 1;
      document.getElementById("valor3").textContent = valorDeJugadaTres;
    }
    
    function sumarv4() {
      valorDeJugadaCuatro = valorDeJugadaCuatro + 1;
    document.getElementById("valor4").textContent = valorDeJugadaCuatro;
  }

  function restarv4() {
      valorDeJugadaCuatro = valorDeJugadaCuatro - 1;
    document.getElementById("valor4").textContent = valorDeJugadaCuatro;
  }

  function sumarv5() {
    valorDeJugadaCinco = valorDeJugadaCinco + 1;
  document.getElementById("valor5").textContent = valorDeJugadaCinco;
}

function restarv5() {
    valorDeJugadaCinco = valorDeJugadaCinco - 1;
  document.getElementById("valor5").textContent = valorDeJugadaCinco;
}

function sumarv6() {
  valorDeJugadaSeis = valorDeJugadaSeis + 1;
document.getElementById("valor6").textContent = valorDeJugadaSeis;
}

function restarv6() {
  valorDeJugadaSeis = valorDeJugadaSeis - 1;
document.getElementById("valor6").textContent = valorDeJugadaSeis;
}
  
function sumarv7() {
  valorDeJugadaSiete = valorDeJugadaSiete + 1;
document.getElementById("valor7").textContent = valorDeJugadaSiete;
}

function restarv7() {
  valorDeJugadaSiete = valorDeJugadaSiete - 1;
document.getElementById("valor7").textContent = valorDeJugadaSiete;
}
 
//variables valores de ataque parte 2

   var valorposte = 0;
   var valortriples = 0;
   var valortiroslibres = 0;
   var valorpickandroll = 0;
   var valorlateral = 0;
   var valorcentral = 0;
   var valoralfondo = 0;
   var valorotrotipodepick = 0;
   var valorrompimientos = 0;
   var valorrebotesofensivos = 0;
   var valorcontraataque = 0;
   var valorsalidafondo = 0;
   var valorsalidalateral = 0;
   var valorotros = 0;


//variables valores de defensa

          var defvalorposte = 0;
          var defvalortriples = 0;
          var defvalortiroslibres = 0;
          var defvalorcentral = 0;
          var defvalorotros = 0;
          var defvalorrompimientos = 0;
          var defvalorrebotesofensivos = 0;
          var defvalorcontraataque = 0;
          var defvalorsal = 0;
          var defvalorlateral = 0;
          var defvaloralfondo = 0;
          var defvalorotrotipodepick = 0;
          var defvalorindirectas = 0;
          var defvalormanoenmano = 0;
          var defvalor1v1 = 0;

//funcion para calcular total parte 1, 2 y 3
function calcular(){
try {
    var a = valorDeJugadaUno || 0,
    b = valorDeJugadaDos || 0,
    c = valorDeJugadaTres || 0,
    d = valorDeJugadaCuatro || 0,
    e = valorDeJugadaCinco || 0,
    f = valorDeJugadaSeis || 0,
    g = valorDeJugadaSiete || 0;


    document.getElementById("valortotal").textContent = a + b + c + d + e + f + g;

  } catch (e) {}
}
   


  function calcular2(){
    try {
        var a = valorposte || 0,
        b = valortriples || 0,
        c = valortiroslibres || 0,
        d = valorcentral || 0,
        e = valorotros || 0,
        f = valorrompimientos || 0,
        g = valorrebotesofensivos || 0;
        h = valorcontraataque || 0;
        i = valorsalidafondo || 0;
        j = valorsalidalateral || 0;
        k = valorlateral || 0;
        l = valoralfondo || 0;
        m = valorotrotipodepick || 0;
        
    
    
        document.getElementById("valortotaltiposdejugada").textContent = a + b + c + d + e + f + g + h + i + j + k + l + m;
    
      } catch (e) {}
    }
   
    function calcular3(){
      try {
          var a = defvalorposte || 0,
          b = defvalortriples || 0,
          c = defvalortiroslibres || 0,
          d = defvalorcentral || 0,
          e = defvalorotros || 0,
          f = defvalorrompimientos || 0,
          g = defvalorrebotesofensivos || 0;
          h = defvalorcontraataque || 0;
          i = defvalorsal || 0;
          j = defvalor1v1 || 0;
          k = defvalorlateral || 0;
          l = defvaloralfondo || 0;
          m = defvalorotrotipodepick || 0;
          n = defvalorindirectas || 0;
          o = defvalormanoenmano || 0;
          
      
      
          document.getElementById("valortotaltiposdejugada2").textContent = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o;
      
        } catch (e) {}
      }
   
   
   //funcion para boton de borrar todo parte 1, 2 y 3
    function borrartodo1() {
      valorDeJugadaUno = 0;
      valorDeJugadaDos = 0;
      valorDeJugadaTres = 0;
      valorDeJugadaCuatro = 0;
      valorDeJugadaCinco = 0;
      valorDeJugadaSeis = 0;
      valorDeJugadaSiete = 0;
      valortotal = 0;
        document.getElementById("valortotal").textContent = valortotal;
        document.getElementById("valor1").textContent = 0;
        document.getElementById("valor2").textContent = 0;
        document.getElementById("valor3").textContent = 0;
        document.getElementById("valor4").textContent = 0;
        document.getElementById("valor5").textContent = 0;
        document.getElementById("valor6").textContent = 0;
        document.getElementById("valor7").textContent = 0;
        
    }
    
    function borrartodo2() {
    valorposte = 0;
    valortriples = 0;
    valortiroslibres = 0;
    valorpickandroll = 0;
    valorlateral = 0;
    valorcentral = 0;
    valoralfondo = 0;
    valorotrotipodepick = 0;
    valorrompimientos = 0;
    valorrebotesofensivos = 0;
    valorcontraataque = 0;
    valorsalidafondo = 0;
    valorsalidalateral = 0;
    valorotros = 0;
    valortotaltiposdejugada = 0;
        document.getElementById("valortotaltiposdejugada").textContent = valortotaltiposdejugada;
        document.getElementById("valorposte").textContent = 0;
        document.getElementById("valortriples").textContent = 0;
        document.getElementById("valortiroslibres").textContent = 0;
        document.getElementById("valorpickandroll").textContent = 0;
        document.getElementById("valorlateral").textContent = 0;
        document.getElementById("valorcentral").textContent = 0;
        document.getElementById("valoralfondo").textContent = 0;
        document.getElementById("valorotrotipodepick").textContent = 0;
        document.getElementById("valorrompimientos").textContent = 0;
        document.getElementById("valorrebotesofensivos").textContent = 0;
        document.getElementById("valorcontraataque").textContent = 0;
        document.getElementById("valorsalidafondo").textContent = 0;
        document.getElementById("valorsalidalateral").textContent = 0;
        document.getElementById("valorotros").textContent = 0;

        
    }

    function borrartodo3() {
      defvalorposte = 0;
      defvalortriples = 0;
      defvalortiroslibres = 0;
      defvalorpickandroll = 0;
      defvalorlateral = 0;
      defvalorcentral = 0;
      defvaloralfondo = 0;
      defvalorotrotipodepick = 0;
      defvalorrompimientos = 0;
      defvalorrebotesofensivos = 0;
      defvalorcontraataque = 0;
      defvalorsal = 0;
      defvalorsalidalateral = 0;
      defvalorotros = 0;
      defvalorindirectas = 0;
      defvalormanoenmano = 0;
      defvalor1v1 = 0;
      valortotaltiposdejugada2 = 0;

          document.getElementById("valortotaltiposdejugada2").textContent = valortotaltiposdejugada2;
          document.getElementById("defvalorposte").textContent = 0;
          document.getElementById("defvalortriples").textContent = 0;
          document.getElementById("defvalortiroslibres").textContent = 0;
          document.getElementById("defvalorpickandroll").textContent = 0;
          document.getElementById("defvalorlateral").textContent = 0;
          document.getElementById("defvalorcentral").textContent = 0;
          document.getElementById("defvaloralfondo").textContent = 0;
          document.getElementById("defvalorotrotipodepick").textContent = 0;
          document.getElementById("defvalorrompimientos").textContent = 0;
          document.getElementById("defvalorrebotesofensivos").textContent = 0;
          document.getElementById("defvalorcontraataque").textContent = 0;
          document.getElementById("defvalorsal").textContent = 0;
          document.getElementById("defvalorsal").textContent = 0;
          document.getElementById("defvalorotros").textContent = 0;
          document.getElementById("defvalorindirectas").textContent = 0;
          document.getElementById("defvalormanoenmano").textContent = 0;
          document.getElementById("defvalor1v1").textContent = 0;
  
          
      }
     
     
      
    
     

   //funciones botones de sumar y restar parte 2.1
    function sumart1() {
      valorposte = valorposte + 1;
    document.getElementById("valorposte").textContent = valorposte;
  }

  function restart1() {
      valorposte = valorposte - 1;
    document.getElementById("valorposte").textContent = valorposte;
  }

  function sumart2() {
    valortriples = valortriples + 3;
  document.getElementById("valortriples").textContent = valortriples;
}

function restart2() {
    valortriples = valortriples - 3;
  document.getElementById("valortriples").textContent = valortriples;
}

function sumart3() {
  valortiroslibres = valortiroslibres + 1;
document.getElementById("valortiroslibres").textContent = valortiroslibres;
}

function restart3() {
  valortiroslibres = valortiroslibres - 1;
document.getElementById("valortiroslibres").textContent = valortiroslibres;
}
 //funcion de calcular el valor total de pick and roll 
function calcularpick(){
  
      document.getElementById("valorpickandroll").textContent = valorlateral + valorotrotipodepick + valoralfondo + valorcentral;
  
    }

//funciones botones de sumar y restar parte 2.2
function sumart5() {
  valorlateral = valorlateral + 1;
document.getElementById("valorlateral").textContent = valorlateral;
}

function restart5() {
  valorlateral = valorlateral - 1;
document.getElementById("valorlateral").textContent = valorlateral;
}

function sumart6() {
  valorcentral = valorcentral + 1;
document.getElementById("valorcentral").textContent = valorcentral;
}

function restart6() {
  valorcentral = valorcentral - 1;
document.getElementById("valorcentral").textContent = valorcentral;
}

function sumart7() {
  valoralfondo = valoralfondo + 1;
document.getElementById("valoralfondo").textContent = valoralfondo;
}

function restart7() {
  valoralfondo = valoralfondo - 1;
document.getElementById("valoralfondo").textContent = valoralfondo;
}

function sumart8() {
  valorotrotipodepick = valorotrotipodepick + 1;
document.getElementById("valorotrotipodepick").textContent = valorotrotipodepick;
}

function restart8() {
  valorotrotipodepick = valorotrotipodepick - 1;
document.getElementById("valorotrotipodepick").textContent = valorotrotipodepick;
}

function sumart9() {
  valorrompimientos = valorrompimientos + 1;
document.getElementById("valorrompimientos").textContent = valorrompimientos;
}

function restart9() {
  valorrompimientos = valorrompimientos - 1;
document.getElementById("valorrompimientos").textContent = valorrompimientos;
}

function sumart10() {
  valorrebotesofensivos = valorrebotesofensivos + 1;
document.getElementById("valorrebotesofensivos").textContent = valorrebotesofensivos;
}

function restart10() {
  valorrebotesofensivos = valorrebotesofensivos - 1;
document.getElementById("valorrebotesofensivos").textContent = valorrebotesofensivos;
}

function sumart11() {
  valorcontraataque = valorcontraataque + 1;
document.getElementById("valorcontraataque").textContent = valorcontraataque;
}

function restart11() {
  valorcontraataque = valorcontraataque - 1;
document.getElementById("valorcontraataque").textContent = valorcontraataque;
}

function sumart12() {
  valorsalidafondo = valorsalidafondo + 1;
document.getElementById("valorsalidafondo").textContent = valorsalidafondo;
}

function restart12() {
  valorsalidafondo = valorsalidafondo - 1;
document.getElementById("valorsalidafondo").textContent = valorsalidafondo;
}

function sumart13() {
  valorsalidalateral = valorsalidalateral + 1;
document.getElementById("valorsalidalateral").textContent = valorsalidalateral;
}

function restart13() {
  valorsalidalateral = valorsalidalateral - 1;
document.getElementById("valorsalidalateral").textContent = valorsalidalateral;
}

function sumart14() {
  valorotros = valorotros + 1;
document.getElementById("valorotros").textContent = valorotros;
}

function restart14() {
  valorotros = valorotros - 1;
document.getElementById("valorotros").textContent = valorotros;
}
//arrancan los botones de defensa de sumar y restar
function sumart15() {
  defvalorposte = defvalorposte + 1;
document.getElementById("defvalorposte").textContent = defvalorposte;
}

function restart15() {
  defvalorposte = defvalorposte - 1;
document.getElementById("defvalorposte").textContent = defvalorposte;
}

function sumart16() {
  defvalortriples = defvalortriples + 3;
document.getElementById("defvalortriples").textContent = defvalortriples;
}

function restart16() {
  defvalortriples = defvalortriples - 3;
document.getElementById("defvalortriples").textContent = defvalortriples;
}

function sumart17() {
  defvalortiroslibres = defvalortiroslibres + 1;
document.getElementById("defvalortiroslibres").textContent = defvalortiroslibres;
}

function restart17() {
  defvalortiroslibres = defvalortiroslibres - 1;
document.getElementById("defvalortiroslibres").textContent = defvalortiroslibres;
}

function sumart18() {
  defvalorlateral = defvalorlateral + 1;
document.getElementById("defvalorlateral").textContent = defvalorlateral;
}

function restart18() {
  defvalorlateral = defvalorlateral - 1;
document.getElementById("defvalorlateral").textContent = defvalorlateral;
}


function sumart19() {
  defvalorcentral = defvalorcentral + 1;
document.getElementById("defvalorcentral").textContent = defvalorcentral;
}

function restart19() {
  defvalorcentral = defvalorcentral - 1;
document.getElementById("defvalorcentral").textContent = defvalorcentral;
}

function sumart20() {
  defvaloralfondo = defvaloralfondo + 1;
document.getElementById("defvaloralfondo").textContent = defvaloralfondo;
}

function restart20() {
  defvaloralfondo = defvaloralfondo - 1;
document.getElementById("defvaloralfondo").textContent = defvaloralfondo;
} 

function sumart21() {
  defvalorotrotipodepick = defvalorotrotipodepick + 1;
document.getElementById("defvalorotrotipodepick").textContent = defvalorotrotipodepick;
}

function restart21() {
  defvalorotrotipodepick = defvalorotrotipodepick - 1;
document.getElementById("defvalorotrotipodepick").textContent = defvalorotrotipodepick;
} 

function sumart22() {
  defvalorrompimientos = defvalorrompimientos + 1;
document.getElementById("defvalorrompimientos").textContent = defvalorrompimientos;
}

function restart22() {
  defvalorrompimientos = defvalorrompimientos - 1;
document.getElementById("defvalorrompimientos").textContent = defvalorrompimientos;
} 

function sumart23() {
  defvalorrebotesofensivos = defvalorrebotesofensivos + 1;
document.getElementById("defvalorrebotesofensivos").textContent = defvalorrebotesofensivos;
}

function restart23() {
  defvalorrebotesofensivos = defvalorrebotesofensivos - 1;
document.getElementById("defvalorrebotesofensivos").textContent = defvalorrebotesofensivos;
} 
 
function sumart24() {
  defvalorcontraataque = defvalorcontraataque + 1;
document.getElementById("defvalorcontraataque").textContent = defvalorcontraataque;
}

function restart24() {
  defvalorcontraataque = defvalorcontraataque - 1;
document.getElementById("defvalorcontraataque").textContent = defvalorcontraataque;
} 

function sumart25() {
  defvalor1v1 = defvalor1v1 + 1;
document.getElementById("defvalor1v1").textContent = defvalor1v1;
}

function restart25() {
  defvalor1v1 = defvalor1v1 - 1;
document.getElementById("defvalor1v1").textContent = defvalor1v1;
} 

function sumart26() {
  defvalorindirectas = defvalorindirectas + 1;
document.getElementById("defvalorindirectas").textContent = defvalorindirectas;
}

function restart26() {
  defvalorindirectas = defvalorindirectas - 1;
document.getElementById("defvalorindirectas").textContent = defvalorindirectas;
}

function sumart27() {
  defvalormanoenmano = defvalormanoenmano + 1;
document.getElementById("defvalormanoenmano").textContent = defvalormanoenmano;
}

function restart27() {
  defvalormanoenmano = defvalormanoenmano - 1;
document.getElementById("defvalormanoenmano").textContent = defvalormanoenmano;
}

function sumart28() {
  defvalorotros = defvalorotros + 1;
document.getElementById("defvalorotros").textContent = defvalorotros;
}

function restart28() {
  defvalorotros = defvalorotros - 1;
document.getElementById("defvalorotros").textContent = defvalorotros;
}

function sumart29() {
  defvalorsal = defvalorsal + 1;
document.getElementById("defvalorsal").textContent = defvalorsal;
}

function restart29() {
  defvalorsal = defvalorsal - 1;
document.getElementById("defvalorsal").textContent = defvalorsal;
}
        
//sumar pick and roll defensa
function calcularpick2(){
  
  document.getElementById("defvalorpickandroll").textContent = defvalorlateral + defvalorotrotipodepick + defvaloralfondo + defvalorcentral;

}   
        
      
       
         
  








//cambiar color de fondo parte 1 y parte 2.
function cambiarcolordefondo() {
  let colordefondo = document.getElementById("btncolor").value;

document.getElementById("body").style.background = colordefondo;
}

function cambiarcolordefondo2() { 
  let colordefondo2 = document.getElementById("btncolor2").value;

document.getElementById("containerhijo").style.backgroundColor = colordefondo2;

}
//ocultar botones
function ocultar1() {
    let estadovisible = document.getElementById("cocultar1").style.visibility;
    if (estadovisible !== 'hidden') {document.getElementById("cocultar1").style.visibility = 'hidden';}
  
    else {document.getElementById("cocultar1").style.visibility = 'visible';}
}

function ocultar2() {
  let estadovisible = document.getElementById("cocultar2").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar2").style.visibility = 'hidden';}

  else {document.getElementById("cocultar2").style.visibility = 'visible';}
}

function ocultar3() {
  let estadovisible = document.getElementById("cocultar3").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar3").style.visibility = 'hidden';}

  else {document.getElementById("cocultar3").style.visibility = 'visible';}
}
function ocultar4() {
  let estadovisible = document.getElementById("cocultar4").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar4").style.visibility = 'hidden';}

  else {document.getElementById("cocultar4").style.visibility = 'visible';}
}
function ocultar5() {
  let estadovisible = document.getElementById("cocultar5").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar5").style.visibility = 'hidden';}

  else {document.getElementById("cocultar5").style.visibility = 'visible';}
}
function ocultar6() {
  let estadovisible = document.getElementById("cocultar6").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar6").style.visibility = 'hidden';}

  else {document.getElementById("cocultar6").style.visibility = 'visible';}
}
function ocultar7() {
  let estadovisible = document.getElementById("cocultar7").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar7").style.visibility = 'hidden';}

  else {document.getElementById("cocultar7").style.visibility = 'visible';}
}
function ocultar8() {
  let estadovisible = document.getElementById("cocultar8").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar8").style.visibility = 'hidden';}

  else {document.getElementById("cocultar8").style.visibility = 'visible';}
}
function ocultar9() {
  let estadovisible = document.getElementById("cocultar9").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar9").style.visibility = 'hidden';}

  else {document.getElementById("cocultar9").style.visibility = 'visible';}
}
function ocultar10() {
  let estadovisible = document.getElementById("cocultar10").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar10").style.visibility = 'hidden';}

  else {document.getElementById("cocultar10").style.visibility = 'visible';}
}

function ocultar11() {
  let estadovisible = document.getElementById("cocultar11").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar11").style.visibility = 'hidden';}

  else {document.getElementById("cocultar11").style.visibility = 'visible';}
}
function ocultar12() {
  let estadovisible = document.getElementById("cocultar12").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar12").style.visibility = 'hidden';}

  else {document.getElementById("cocultar12").style.visibility = 'visible';}
}
function ocultar13() {
  let estadovisible = document.getElementById("cocultar13").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar13").style.visibility = 'hidden';}

  else {document.getElementById("cocultar13").style.visibility = 'visible';}
}
function ocultar14() {
  let estadovisible = document.getElementById("cocultar14").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar14").style.visibility = 'hidden';}

  else {document.getElementById("cocultar14").style.visibility = 'visible';}
}
function ocultar15() {
  let estadovisible = document.getElementById("cocultar15").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar15").style.visibility = 'hidden';}

  else {document.getElementById("cocultar15").style.visibility = 'visible';}
}
function ocultar16() {
  let estadovisible = document.getElementById("cocultar16").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar16").style.visibility = 'hidden';}

  else {document.getElementById("cocultar16").style.visibility = 'visible';}
}
function ocultar17() {
  let estadovisible = document.getElementById("cocultar17").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar17").style.visibility = 'hidden';}

  else {document.getElementById("cocultar17").style.visibility = 'visible';}
}
function ocultar18() {
  let estadovisible = document.getElementById("cocultar18").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar18").style.visibility = 'hidden';}

  else {document.getElementById("cocultar18").style.visibility = 'visible';}
}
function ocultar19() {
  let estadovisible = document.getElementById("cocultar19").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar19").style.visibility = 'hidden';}

  else {document.getElementById("cocultar19").style.visibility = 'visible';}
}
function ocultar20() {
  let estadovisible = document.getElementById("cocultar20").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar20").style.visibility = 'hidden';}

  else {document.getElementById("cocultar20").style.visibility = 'visible';}
}
function ocultar21() {
  let estadovisible = document.getElementById("cocultar21").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar21").style.visibility = 'hidden';}

  else {document.getElementById("cocultar21").style.visibility = 'visible';}
}
function ocultar22() {
  let estadovisible = document.getElementById("cocultar22").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar22").style.visibility = 'hidden';}

  else {document.getElementById("cocultar22").style.visibility = 'visible';}
}
function ocultar23() {
  let estadovisible = document.getElementById("cocultar23").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar23").style.visibility = 'hidden';}

  else {document.getElementById("cocultar23").style.visibility = 'visible';}
}
function ocultar24() {
  let estadovisible = document.getElementById("cocultar24").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar24").style.visibility = 'hidden';}

  else {document.getElementById("cocultar24").style.visibility = 'visible';}
}
function ocultar25() {
  let estadovisible = document.getElementById("cocultar25").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar25").style.visibility = 'hidden';}

  else {document.getElementById("cocultar25").style.visibility = 'visible';}
}
function ocultar26() {
  let estadovisible = document.getElementById("cocultar26").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar26").style.visibility = 'hidden';}

  else {document.getElementById("cocultar26").style.visibility = 'visible';}
}
function ocultar26() {
  let estadovisible = document.getElementById("cocultar26").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar26").style.visibility = 'hidden';}

  else {document.getElementById("cocultar26").style.visibility = 'visible';}
}
function ocultar27() {
  let estadovisible = document.getElementById("cocultar27").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar27").style.visibility = 'hidden';}

  else {document.getElementById("cocultar27").style.visibility = 'visible';}
}
function ocultar28() {
  let estadovisible = document.getElementById("cocultar28").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar28").style.visibility = 'hidden';}

  else {document.getElementById("cocultar28").style.visibility = 'visible';}
}
function ocultar29() {
  let estadovisible = document.getElementById("cocultar29").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar29").style.visibility = 'hidden';}

  else {document.getElementById("cocultar29").style.visibility = 'visible';}
}
function ocultar30() {
  let estadovisible = document.getElementById("cocultar30").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar30").style.visibility = 'hidden';}

  else {document.getElementById("cocultar30").style.visibility = 'visible';}
}
function ocultar31() {
  let estadovisible = document.getElementById("cocultar31").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar31").style.visibility = 'hidden';}

  else {document.getElementById("cocultar31").style.visibility = 'visible';}
}
function ocultar32() {
  let estadovisible = document.getElementById("cocultar32").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar32").style.visibility = 'hidden';}

  else {document.getElementById("cocultar32").style.visibility = 'visible';}
}
function ocultar33() {
  let estadovisible = document.getElementById("cocultar33").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar33").style.visibility = 'hidden';}

  else {document.getElementById("cocultar33").style.visibility = 'visible';}
}
function ocultar34() {
  let estadovisible = document.getElementById("cocultar34").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar34").style.visibility = 'hidden';}

  else {document.getElementById("cocultar34").style.visibility = 'visible';}
}
function ocultar35() {
  let estadovisible = document.getElementById("cocultar35").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar35").style.visibility = 'hidden';}

  else {document.getElementById("cocultar35").style.visibility = 'visible';}
}
function ocultar36() {
  let estadovisible = document.getElementById("cocultar36").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar36").style.visibility = 'hidden';}

  else {document.getElementById("cocultar36").style.visibility = 'visible';}
}
function ocultar37() {
  let estadovisible = document.getElementById("cocultar37").style.visibility;
  if (estadovisible !== 'hidden') {document.getElementById("cocultar37").style.visibility = 'hidden';}

  else {document.getElementById("cocultar37").style.visibility = 'visible';}
}



//hacer responsive el fondo.


