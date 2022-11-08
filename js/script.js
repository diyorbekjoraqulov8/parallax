const clouds = document.querySelectorAll(".cloud"),
  boat = document.querySelector(".boat");

window.addEventListener("scroll", () => {
  clouds.forEach((cloud) => {
    let speed = cloud.getAttribute("speed");
    cloud.style = `transform:translateX(${window.scrollY * speed}px)`;
  });
  boat.style = `transform:translateX(${window.scrollY}px)`;
});

const images = document.querySelectorAll(".img"),
  div = document.querySelector(".div");
div.addEventListener("mousemove", (e) => {
  images.forEach((img) => {
    let speed = img.getAttribute("speed");
    img.style.transform = `translate(${(e.clientX * speed) / 10}px,${(e.clientY * speed) / 5
      }px)`;
  });
});

const times = document.querySelectorAll(".time"),
  box = document.querySelector(".box");

window.addEventListener("scroll", function scroll() {
  if (window.scrollY + box.clientHeight * 2 > box.offsetTop) {
    times.forEach((time) => {
      let count = +time.getAttribute("count");
      function num(i = 0) {
        time.innerHTML = i++;
        if (time.innerHTML < count) {
          setTimeout(() => {
            num(i);
          }, 50);
        }
      }
      num();
    });
    window.removeEventListener("scroll", scroll);
  }
});

const title = document.querySelector(".title");
let text = title.innerHTML;
title.innerHTML = "";
window.addEventListener("scroll", function typ() {

  if (window.scrollY > title.offsetTop - 800) {
    function typing(i = 0) {
      title.innerHTML += text[i];
      i++;
      if (i < text.length) {
        setTimeout(() => {
          typing(i);
        }, 200);
      }
    }
    typing();
    window.removeEventListener("scroll", typ);
  }

});

const btns = document.querySelectorAll('.btn'),
root = document.querySelector(':root');
document.documentElement.style.setProperty("--color",localStorage.getItem("salom"))
btns.forEach(btn => { 
  window.addEventListener("mousemove",(e)=>{
    let x= e.pageX - btn.offsetLeft
    let y= e.pageY - btn.offsetTop
    btn.style.setProperty("--x",`${x}px`)
    btn.style.setProperty("--y",`${y}px`)
  })
  btn.onclick = ()=>{
    root.style.setProperty("--color","indigo")
    localStorage.setItem("salom","indigo")
  }
  btn.addEventListener("dblclick",()=>{
    root.style.setProperty("--color","hotpink")
    localStorage.setItem("salom","hotpink")
  })
})


const cards = document.querySelectorAll('.info__card');
cards.forEach(card=>{
  card.addEventListener("mousemove",(e)=>{
    let half = card.clientHeight/2
    let x = e.offsetX - half
    let y = e.offsetY - half
    card.style.transform = `rotateX(${-y/4}deg) rotateY(${x/4}deg)`
  })
  card.onmouseout = ()=>  card.style.transform = "rotate(0)"
})