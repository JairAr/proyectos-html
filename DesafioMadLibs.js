<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Challenge: Mad Libs</title>
 </head>
 <body>
 
    <h1>Mad Libs</h1>
     
    <ul>
      <li>Noun: <input type="text" id="noun"></li>
      <li>Adjective: <input type="text" id="adjective"></li>
      <li>Someone's Name: <input type="text" id="person"></li>
    </ul>
     
    <button id="lib-button">Lib it!</button>
      
    <p>Generated story: 
    <span id="story"></span>
    </p>
 
    <script>
        var libButton = document.getElementById('lib-button');
        var libIt = function() {
            var storyDiv = document.getElementById("story");
            var sustantivo=document.getElementById("noun").value;
            var adjetivo=document.getElementById("adjective").value;
            var name=document.getElementById("person").value;
            storyDiv.innerHTML = name +" que es "+adjetivo+" hizo "+sustantivo;
        };
        libButton.addEventListener('click', libIt);
        
    </script>
  
 </body>
</html>