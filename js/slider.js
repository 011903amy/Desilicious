var slider = tns({
  container: ".hometesTimonial__slider",
  items: 3,
  speed: 200,
  gutter: 100,
  slideBy: "page",
  autoplay: true,
  navPosition: "bottom",
  containerControls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  responsive:{
    1250:{
      items:3,
    },
    200: {
      items:1,
    },
  }
});

const toggleMenu =document.querySelector(".header__toggleMenu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () =>{
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
})