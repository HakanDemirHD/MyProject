gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".container");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
});

const h1 = document.getElementById("h1"),
  banner = document.getElementById("banner"),
  button = document.getElementById("button");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 150) {
    banner.style.backgroundSize = "100%";
    h1.style.opacity = 0;
    h1.style.translate = "0 -50px";
    h1.style.scale = "0.9";
    button.style.opacity = 0;
    button.style.translate = "0 -50px";
    button.style.scale = "0.8";
  } else {
    banner.style.backgroundSize = "200%";
    h1.style.opacity = 1;
    h1.style.translate = 0;
    h1.style.scale = 1;
    button.style.opacity = 1;
    button.style.translate = 0;
    button.style.scale = 1;
  }
};

document.addEventListener("scroll", onScroll);

