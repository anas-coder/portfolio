

  window.addEventListener("scroll", function () {
    var header = document.getElementById("head");
    header.classList.toggle("sticky", window.scrollY > 0);
  })


  var i = 0;
  var txt = 'Powerful Digita Solutions With';
  var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    window.type_right.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


typeWriter()

// Home

function homes() {
  window.home.style.color =  "#ffc451";
  window.about.style.color =  "#fff";
  window.services.style.color =  "#fff";
  window.portfolio.style.color =  "#fff";
  window.contact.style.color =  "#fff";
  window.team.style.color =  "#fff";
}

// Services

function servicess() {
  window.home.style.color =  "#fff";
  window.about.style.color =  "#fff";
  window.services.style.color =  "#ffc451";
  window.portfolio.style.color =  "#fff";
  window.contact.style.color =  "#fff";
  window.team.style.color =  "#fff";
}

// About

function abouts() {
  window.home.style.color =  "#fff";
  window.about.style.color =  "#ffc451";
  window.services.style.color =  "#fff";
  window.portfolio.style.color =  "#fff";
  window.contact.style.color =  "#fff";
  window.team.style.color =  "#fff";
}

// Portfolio

function portfolios() {
  window.home.style.color =  "#fff";
  window.about.style.color =  "#fff";
  window.services.style.color =  "#fff";
  window.portfolio.style.color =  "#ffc451";
  window.contact.style.color =  "#fff";
  window.team.style.color =  "#fff";
}

// Team

function teams() {
  window.home.style.color =  "#fff";
  window.about.style.color =  "#fff";
  window.services.style.color =  "#fff";
  window.portfolio.style.color =  "#fff";
  window.contact.style.color =  "#fff";
  window.team.style.color =  "#ffc451";
}

// Contact

function contacts() {
  window.home.style.color =  "#fff";
  window.about.style.color =  "#fff";
  window.services.style.color =  "#fff";
  window.portfolio.style.color =  "#fff";
  window.contact.style.color =  "#ffc451";
  window.team.style.color =  "#fff";
}



var click = document.getElementById("all");

function openDiv() {
    click.style.transform = "scale(1)";
}

function closeDiv() {  
    click.style.transform = "scale(0)";
}
