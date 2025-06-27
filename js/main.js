alert("hello"); // Ek popup aayega jab page load hoga

let modebtn = document.querySelector(".mode"); 
// Yeh HTML ka wo button hai jisko class="mode" diya gaya hai

let currtmode = "light"; 
// Pehle hum maan rahe hain ki mode 'light' hai

modebtn.addEventListener("click", function () {
  // Jab button par click hoga, ye function chalega

  if (currtmode === "light") {
    // Agar mode abhi 'light' hai to...
    currtmode = "dark"; 
    // Mode ko 'dark' kar do
    document.body.style.backgroundColor = "black"; // Background black
    document.body.style.color = "white"; // Text white
    console.log("Dark Mode ON");
  } else {
    // Agar light mode nahi hai to matlab dark hi hoga
    currtmode = "light";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    console.log("Light Mode ON");
  }
});
