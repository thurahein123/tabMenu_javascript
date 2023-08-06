const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const tabs = ["home", "login", "services", "contact us", "about us"];

const moveSlider = (event) => {
    const liTagId = event.target.id;
    const liTag = document.getElementById(liTagId);
    sliderTag.style.width = liTag.offsetWidth + "px";
    sliderTag.style.transform = `translateX(${liTag.offsetLeft}px)`;
}

for (let i=0; i<tabs.length;i++) {
    const liTag = document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click", moveSlider);
    ulTag.append(liTag);
    if (i === 0){
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
}