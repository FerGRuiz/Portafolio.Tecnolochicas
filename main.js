let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a123a2;">Desarrollo sitios web y diseño de paginas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
