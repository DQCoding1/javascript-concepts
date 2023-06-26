const item1 = document.querySelector(".item1")
const item2 = document.querySelector(".item2")
const item3 = document.querySelector(".item3")



const showElement = (entries, observer)=>{
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add("visible")
    } else {
      el.target.classList.remove("visible")
    }
  })    
};

const observer = new IntersectionObserver(showElement, {
  root: null, //viewport
  rootMargin: "0px",
  threshold: 0.5 //tamaño minimo que tiene que observar el observer para estar intersecting
});

observer.observe(item2)
observer.observe(item3)