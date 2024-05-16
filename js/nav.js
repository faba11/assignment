// toggle mode
/**
 * Toggle color mode.
 * @param {boolean} checked - whether the color mode checkbox is checked or not
 */
function toggle(checked) {
  // Get the checkbox element
  var checkbox = document.getElementById("color_mode");

  // If the checkbox is not checked, click it
  if (checked !== checkbox.checked) {
    checkbox.click();
  }
}

/**
 * Add event listener to the color mode checkbox.
 * When the checkbox is checked or unchecked, update the CSS variables.
 */
document.addEventListener("DOMContentLoaded", function () {
  /**
   * Get the color mode checkbox element.
   * @type {HTMLInputElement}
   */
  var colorModeInput = document.getElementById("color_mode");

  /**
   * Add event listener to the color mode checkbox.
   * When the checkbox is checked or unchecked, update the CSS variables.
   */
  colorModeInput.addEventListener("change", function () {
    // If the checkbox is checked, set the background color to white and text color to black
    if (colorModeInput.checked) {
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(0, 0%, 0%)"
      );
    } else {
      // If the checkbox is not checked, set the background color to a dark blue and text color to light blue
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(221, 41%, 7%)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(221, 14%, 71%)"
      );
    }
  });
});


// date function
function dateFunction() {
  let d = new Date();
  let currentDate = d.toLocaleDateString();

  document.querySelector("#date").textContent = currentDate;
}
dateFunction();

// nav
function myFunction() {
  var x = document.getElementById("my-topnav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}
