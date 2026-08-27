const hello = document.getElementById("tekst")
const knapp = document.getElementById("knapp")
let alarmOn = false

knapp.addEventListener("click", function(){
    if (!alarmOn){
        hello.className = "alarm"
        alarmOn = true
    }
    else{
        hello.className = ""
        alarmOn = false
    }
    
})

