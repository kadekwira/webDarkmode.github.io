const body = document.body;
const darkBtn = document.querySelector(".dark");
const image = darkBtn.querySelector("img");
const p = darkBtn.querySelector("p");
const navbarA = document.querySelectorAll("#navbar > a");
const instagram = document.querySelector(".instagram img");
const github = document.querySelector(".github img");
const email = document.querySelector(".email img");

function navbarDark(){
    for (let i = 0; i < navbarA.length; i++){
        navbarA[i].style.color="white";
    }
}
function navbarLight(){
    for (let i = 0; i < navbarA.length; i++){
        navbarA[i].style.color="rgb(23, 23, 23)";
    }
}


for (let i = 0; i < navbarA.length; i++){
    navbarA[i].addEventListener("mouseover",function(){
        navbarA[i].classList.add("aHoverLight");
        navbarA[i].style.color="white";
    })
    navbarA[i].addEventListener("mouseout",function(){
        navbarA[i].classList.remove("aHoverLight");
        navbarA[i].style.color="black";
    })
}


function aHoverDark(){
    for (let i = 0; i < navbarA.length; i++){
        navbarA[i].addEventListener("mouseover",function(){
            navbarA[i].classList.add("aHoverDark");
            navbarA[i].style.color="black";
        })
        navbarA[i].addEventListener("mouseout",function(){
            navbarA[i].classList.remove("aHoverDark");
            navbarA[i].style.color="white";
        })
    }
}

function aHoverLight(){
    for (let i = 0; i < navbarA.length; i++){
        navbarA[i].addEventListener("mouseover",function(){
            navbarA[i].classList.remove("aHoverDark");
            navbarA[i].style.color="white";
        })
        navbarA[i].addEventListener("mouseout",function(){
            navbarA[i].classList.remove("aHoverLight");
            navbarA[i].style.color="black";
        })
    }
}


darkBtn.addEventListener("mouseover",function(){
    darkBtn.classList.add("darkHover");
    image.src="assets/image/moon-light.png"
})
darkBtn.addEventListener("mouseout",function(){
    darkBtn.classList.remove("darkHover");
    image.src="assets/image/moon-dark.png";
})

function darkBtnHover(){
    darkBtn.addEventListener("mouseover",function(){
        darkBtn.classList.add("darkModeHover");
        image.src="assets/image/sun-dark.png";
        p.style.color="black";
    })
    darkBtn.addEventListener("mouseout",function(){
        darkBtn.classList.remove("darkModeHover");
        image.src="assets/image/sun-light.png";
        p.style.color="white";
    })
}

function lightBtnHover(){
    darkBtn.addEventListener("mouseover",function(){
        darkBtn.classList.remove("darkModeHover");
        image.src="assets/image/moon-light.png";
        p.style.color="white";
    })
    darkBtn.addEventListener("mouseout",function(){
        darkBtn.classList.add("darkModeHover");
        image.src="assets/image/moon-dark.png";
        p.style.color="black";
    })
}


darkBtn.addEventListener("click",function(){
    body.classList.toggle("darkmode")
    if(body.classList=="darkmode"){
        navbarDark();
        darkBtn.classList.remove("dark");
        darkBtn.classList.add("light");
        image.src="assets/image/sun-light.png";
        darkBtnHover();
        p.innerHTML="Light";
        p.style.color="white";
        instagram.src="assets/image/instagram.png";
        github.src="assets/image/github (1).png";
        email.src="assets/image/email.png";
        aHoverDark();
        
    }
    else{
        navbarLight();
        darkBtn.classList.remove("light");
        darkBtn.classList.add("dark");
        image.src="assets/image/moon-dark.png";
        lightBtnHover();
        p.innerHTML="Dark";
        p.style.color="rgb(23, 23, 23)";
        instagram.src="assets/image/instagram-dark.png";
        github.src="assets/image/github-dark.png";
        email.src="assets/image/email-dark.png";
        aHoverLight();
    }
});
