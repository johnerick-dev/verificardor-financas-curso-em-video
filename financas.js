function clicar () {   
    var tn1 = document.querySelector('input.txt1')
    var tn2 = document.querySelector('input.txt2')
    var tn3 = document.querySelector('input.txt3')
    var tn4 = document.querySelector('input.txt4')
    var tn5 = document.querySelector('input.txt5')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var n5 = Number(tn5.value)
    var s = n1 + n2 + n3 + n4 + n5;  

    document.querySelector("div#receita-total").innerHTML = `${s}`;
}
function clicar2 () {
    var tn6 = document.querySelector('input.txt6')
    var tn7 = document.querySelector('input.txt7')
    var tn8 = document.querySelector('input.txt8')
    var tn9 = document.querySelector('input.txt9')
    var tn0 = document.querySelector('input.txt0')
    var n6 = Number(tn6.value)
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var n9 = Number(tn9.value)
    var n0 = Number(tn0.value)
    var res = n6 + n7 + n8 + n9 + n0 
      
    document.querySelector("div#despesa-total").innerHTML = `${res}`;
}
function resultado(){
    var tn1 = document.querySelector('input.txt1')
    var tn2 = document.querySelector('input.txt2')
    var tn3 = document.querySelector('input.txt3')
    var tn4 = document.querySelector('input.txt4')
    var tn5 = document.querySelector('input.txt5')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var n5 = Number(tn5.value)
    var s = n1 + n2 + n3 + n4 + n5;  

    var tn6 = document.querySelector('input.txt6')
    var tn7 = document.querySelector('input.txt7')
    var tn8 = document.querySelector('input.txt8')
    var tn9 = document.querySelector('input.txt9')
    var tn0 = document.querySelector('input.txt0')
    var n6 = Number(tn6.value)
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var n9 = Number(tn9.value)
    var n0 = Number(tn0.value)
    var res = n6 + n7 + n8 + n9 + n0 
    var resultado = s - res

    var pes = document.querySelector('input#name');
    var p = String(pes.value)
    var fin = p
   
    if (resultado > 0) {
        nome.innerHTML = `Olá ${fin}, você está de parabéns!`
        msg.innerHTML = `Suas finanças estão positivas com um saldo de R$ ${resultado}`
        document.getElementById('resultado').style.backgroundColor='rgb(10, 245, 61)';
        document.getElementById('resultado').style.boxShadow = '5px 5px 5px black';
       
    } else {
        nome.innerHTML = `Olá ${fin}, não temos uma boa notícia`
        msg.innerHTML = `Infelizmente você está com um saldo negativo de R$ ${resultado}`
        document.getElementById('resultado').style.backgroundColor ='rgb(251, 104, 104)';
        document.getElementById('resultado').style.boxShadow = '5px 5px 5px black';
    }
}
