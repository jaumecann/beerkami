/*document.getElementById("butt-id").onclick = function(){
    alert ("clicked but");
};
*/

var doSearch = document.getElementById("butt-id");

doSearch.onclick = function(){

var userinput = document.getElementById("search-id").value;

if (userinput.length < 4){
    alert ("too short!");
} else {
    alert ("it works");
}
}

//  validacio search bar --> https://jsfiddle.net/ssenkus/wWZ5e/


//input.addEventListener('submit', evt => {}