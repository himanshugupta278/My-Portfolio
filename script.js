document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Year
  document.getElementById("year").textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll(".section");
  const projectCards = document.querySelectorAll(".project-card");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetID = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetID);
      if(!targetSection) return;

      // Remove active from all sections
      sections.forEach(sec => sec.classList.remove("active"));
      targetSection.classList.add("active");

      // Show section content animation
      const content = targetSection.querySelector(".section-content");
      if(content){
        content.classList.remove("show");
        setTimeout(()=>{content.classList.add("show");},50);
      }

      // Projects cards animation
      if(targetID === "projects"){
  const projectCards = targetSection.querySelectorAll(".project-card");
  projectCards.forEach(card => card.classList.remove("show"));
  projectCards.forEach((card,index)=>{
    setTimeout(()=>{ card.classList.add("show"); }, index*200);
  });
}


      // Skills icons animation
      if(targetID === "skills"){
        const skillItems = targetSection.querySelectorAll(".skill-item");
        skillItems.forEach(item => item.classList.remove("show"));
        skillItems.forEach((item,index)=>{
          setTimeout(()=>{ item.classList.add("show"); }, index*150);
        });
      }
    });
  });
});


// === Scroll Animation ===
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
