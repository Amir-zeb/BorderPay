let go_back=document.querySelector(".back-btn")
if(go_back){
    go_back.addEventListener("click",()=>{
        window.history.go(-1)
    })
}

let color_tag = document.querySelectorAll('.toggle-color')
let legend = document.querySelectorAll('.legend')
if( color_tag || legend){
    for (i = 0; i < color_tag.length; i++) {
        let x=legend[i]
        color_tag[i].addEventListener('focusin', () => {
            x.classList.add('blue')
        })
        color_tag[i].addEventListener('focusout', () => {
            x.classList.remove('blue')
        })
    }
}

let eye = document.querySelectorAll(".eye-wrapper")
let input = document.querySelectorAll(".pass-input")
if( eye || input){
    for (let i = 0; i < eye.length; i++) {
        let x = input[i]
        eye[i].addEventListener('click', () => {
            eye[i].classList.toggle('see')
            if (eye[i].classList.contains('see')) {
                x.type = "text";
            } else {
                x.type = "password";
            }
        })
    }
}

const selectedAll = document.querySelectorAll(".selected");
if(selectedAll){
    selectedAll.forEach((selected) => {
        const optionsContainer = selected.previousElementSibling;
        const optionsList = optionsContainer.querySelectorAll(".option");
        selected.addEventListener("click", () => {
            if (optionsContainer.classList.contains("active")) {
                optionsContainer.classList.remove("active");
            } else {
                let currentActive = document.querySelector(".options-container.active");
                if (currentActive) {
                    currentActive.classList.remove("active");
                }
                optionsContainer.classList.add("active");
            }
        });
        optionsList.forEach((o) => {
            o.addEventListener("click", () => {
                selected.innerHTML = o.querySelector("label").innerHTML;
                if(o.classList.contains('bg-pink')){
                    selected.classList.add('bg-pink')
                    selected.classList.remove('bg-light-green')
                    selected.classList.remove('bg-yellow')
                }
                else if(o.classList.contains('bg-yellow')){
                    selected.classList.add('bg-yellow')
                    selected.classList.remove('bg-light-green')
                    selected.classList.remove('bg-pink')
                }
                else if(o.classList.contains('bg-light-green')){
                    selected.classList.add('bg-light-green')
                    selected.classList.remove('bg-yellow')
                    selected.classList.remove('bg-pink')
                }
                optionsContainer.classList.remove("active");
            });
        });
    });
}


const td_collapse_p = document.querySelector("#td-collapse-p");
const td_collapse_parent = document.querySelector(".full-width-td");
if(td_collapse_p){
    td_collapse_p.addEventListener('click',()=>{
        if(td_collapse_p.getAttribute("aria-expanded")=="true"){
            td_collapse_parent.classList.add('active')
        }else{
            td_collapse_parent.classList.remove('active')
        }
    })
}


