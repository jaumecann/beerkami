/*document.getElementById("butt-id").onclick = function(){
    alert ("clicked but");
};
*/

// VALIDACIÓ DE LA CAIXA DE CERCA

var form = document.getElementById('buscador')
var userinput = document.getElementById('search-id');

form.addEventListener("submit", function (event){
if (userinput.value.length == 0){
userinput.required = "false";
} else if (userinput.value.length < 4) {
userinput.style.color = "red";
userinput.value = "mínimo 4 caracteres"
event.preventDefault();
}

});

form.addEventListener("input", function(){
userinput.style.color = "black";    
})

userinput.addEventListener("click", function () {
      userinput.value = "";
    
    });
