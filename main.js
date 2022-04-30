const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(e) {
  const clickedButtonValue = e.target.value;

  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      try {
        display.value = eval(display.value);
        
      } catch {
        alert("Error");
      }
    }
    } 
    else if (clickedButtonValue === "C") {
      display.value = "";
      console.log('=')
    } 
    else {
      display.value += clickedButtonValue;
    }
  
}
