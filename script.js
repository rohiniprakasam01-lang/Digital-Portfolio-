// Contact form submission (demo)

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("formMessage").innerText = 

    `Thanks, ${name}! Your message has been received.`;

  this.reset();

});