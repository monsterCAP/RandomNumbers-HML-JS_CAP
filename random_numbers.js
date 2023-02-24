//Procedimiento para Números Aleatorios:
function random(){
    var num1, num2, num3, num4, num5, sbal, iterac
    iterac=document.getElementById("iterac").value    
    document.getElementById("num_1").value=iterac
    console.log(iterac)
    for(let i=0;i<=iterac;i++){
        num1=Math.ceil(Math.random()*43)
        num2=Math.ceil(Math.random()*43)
        num3=Math.ceil(Math.random()*43)
        num4=Math.ceil(Math.random()*43)
        num5=Math.ceil(Math.random()*43)
        sbal=Math.ceil(Math.random()*16)

            while(num2==num1){
                num2=Math.ceil(Math.random()*43)                
            }

            while(num3==num1||num3==num2){
                num3=Math.ceil(Math.random()*43)                
            }

            while(num4==num1||num4==num2||num4==num3){
                num4=Math.ceil(Math.random()*43)                
            }

            while(num5==num1||num5==num2||num5==num3||num5==num4){
                num5=Math.ceil(Math.random()*43)                
            }

            document.getElementById("num_1").value=num1
            document.getElementById("num_2").value=num2
            document.getElementById("num_3").value=num3
            document.getElementById("num_4").value=num4
            document.getElementById("num_5").value=num5
            document.getElementById("sbal").value=sbal
            console.log(num1)
            console.log(num2)
            console.log(num3)
            console.log(num4)
            console.log(num5)
            console.log(sbal)
        }
}

function clear_random(){
    console.clear()
    document.getElementById("iterac").value=""
    document.getElementById("num_1").value=""
    document.getElementById("num_2").value=""
    document.getElementById("num_3").value=""
    document.getElementById("num_4").value=""
    document.getElementById("num_5").value=""
    document.getElementById("sbal").value=""  
    document.getElementById("iterac").focus()
}