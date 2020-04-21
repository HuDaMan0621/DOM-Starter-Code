
    const myButton = document.getElementById("clickMe");
    const noun1 = document.getElementById("noun1");
    const noun2Input = document.getElementById("noun2Input");
    const noun3Input = document.getElementById("noun3Input");

    myButton.addEventListener('click', function (e) {

        e.preventDefault();

        noun1.textContent = noun1Input.value;
        noun2.innerHTML = noun2Input.value;
        noun3.innerHTML = noun3Input.value;
    });

    function myFunction() {
        document.getElementById("magic").innerHTML = "Magic!";
      }

//     <!DOCTYPE html>
// <html>
// <head>
// <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }
// </script>
// </head>
// <body>

// <h2>JavaScript in Head</h2>

// <p id="demo">A Paragraph.</p>

// <button type="button" onclick="myFunction()">Try it</button>

// </body>
// </html> 
