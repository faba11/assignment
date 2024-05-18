// auto typing
/**
 * Class to handle typing animation
 * @param {HTMLElement} el - element to render the typing animation
 * @param {Array<string>} toRotate - array of text to type
 * @param {number} period - duration of the typing animation
 */
class TxtType {
  /**
   * Constructor
   * @param {HTMLElement} el - element to render the typing animation
   * @param {Array<string>} toRotate - array of text to type
   * @param {number} period - duration of the typing animation
   */
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }

  /**
   * tick method to update the typing animation
   */
  tick() {
    // get the current index
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    // check if we are deleting text
    if (this.isDeleting) {
      // delete one character at a time
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add one character at a time
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // update the html of the element
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    // calculate the delay
    var that = this;
    var delta = 200 - Math.random() * 100;

    // adjust the delay if we are deleting
    if (this.isDeleting) {
      delta /= 2;
    }

    // reset the animation if we reached the end of the text
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    // call the method again after the delay
    setTimeout(function () {
      that.tick();
    }, delta);
  }
}

/**
 * Main function to initialize the typing animation
 */
window.onload = function () {
  // get all elements with class typewrite
  var elements = document.getElementsByClassName("typewrite");

  // iterate over the elements
  for (var i = 0; i < elements.length; i++) {
    // get the toRotate and period attributes
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");

    // create a new instance of the text type class
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  // inject css to style the animation
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
