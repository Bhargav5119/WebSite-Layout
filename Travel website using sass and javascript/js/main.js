let menu_btn = document.getElementById("menu_btn"),
    navBar = document.querySelector(".navbar"),
    closeBtn = document.getElementById("nav_close"),
    search_Btn = document.querySelector("#search_btn"),
    close_search = document.getElementById("close_search"),
    search_form = document.querySelector(".search_form");



menu_btn.onclick = () => {
    navBar.classList.add("active")
}
closeBtn.onclick = () => {
    navBar.classList.remove("active")
}

window.onscroll = () => {
    navBar.classList.remove("active")
    search_form.classList.remove("active")

    if(window.scrollY > 10){
        document.querySelector(".header").classList.add("active")
    }else{
        {
            document.querySelector(".header").classList.remove("active")
        }
    }
}

window.onload = () => {
    navBar.classList.remove("active")
    search_form.classList.remove("active")

    if(window.scrollY > 10){
        document.querySelector(".header").classList.add("active")
    }else{
        {
            document.querySelector(".header").classList.remove("active")
        }
    }
}
search_Btn.onclick = () => {
    search_form.classList.add("active")
}
close_search.onclick = () => {
    search_form.classList.remove("active")
}

