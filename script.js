const chapters = document.querySelectorAll(".chapter");

window.addEventListener("scroll", () => {
  chapters.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});