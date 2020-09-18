
var outMSJ = "";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       
       var jsonText = JSON.parse(this.responseText);
       //console.log(jsonText);
        
       for (let i = 0; i < jsonText.personas.length; i++) {
            outMSJ += "<i class='peopleTag'>"+(i+1)+") "+jsonText.personas[i].name+"'s say: "+jsonText.personas[i].comment+"</i><br><br>";
        }
       document.getElementById("people").innerHTML = outMSJ;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
