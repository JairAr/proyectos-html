<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Challenge: Stopwatch</title>
    </head>
    <body>
        
        <button id="stop-button" type="button">Stop</button>
        <p>
            <span id="seconds">0</span> seconds have gone by!
        </p>
        <script>
            // Make it count up on a timer, calling this function
            var seconds = document.getElementById("seconds");
            var countUp = function() {
               seconds.textContent = parseFloat(seconds.textContent) + 1;  
            };
            
            // How can you make it stop counting?
            var timer = window.setInterval(countUp, 1000);
            var stopCountUp = function() {
                window.clearInterval(timer);
            };
            var stopButton = document.getElementById("stop-button");
            stopButton.addEventListener("click", stopCountUp);
            
            
        </script>
    </body>
</html>