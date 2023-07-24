let photo1 = document.querySelector("#page8 .photo1") 
let photo2 = document.querySelector("#page8 .photo2") 
let photo3 = document.querySelector("#page8 .photo3") 
let photo4 = document.querySelector("#page8 .photo4") 
let photo5 = document.querySelector("#page8 .photo5")

let photo1i = document.querySelector("#page8 .photo1 i") 
let photo2i = document.querySelector("#page8 .photo2 i") 
let photo3i = document.querySelector("#page8 .photo3 i") 
let photo4i = document.querySelector("#page8 .photo4 i") 
let photo5i = document.querySelector("#page8 .photo5 i")

let photo1h4 = document.querySelector("#page8 .photo1 h4") 
let photo2h4 = document.querySelector("#page8 .photo2 h4") 
let photo3h4 = document.querySelector("#page8 .photo3 h4") 
let photo4h4 = document.querySelector("#page8 .photo4 h4") 
let photo5h4 = document.querySelector("#page8 .photo5 h4")

let photo1h3 = document.querySelector("#page8 .photo1 h3") 
let photo2h3 = document.querySelector("#page8 .photo2 h3") 
let photo3h3 = document.querySelector("#page8 .photo3 h3") 
let photo4h3 = document.querySelector("#page8 .photo4 h3") 
let photo5h3 = document.querySelector("#page8 .photo5 h3")



photo1.addEventListener("mouseenter",function(){
    photo1h3.style.display = "block"
    photo1h4.style.display = "block"
    photo1i.style.display = "block"
    photo1.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)"
})

photo1.addEventListener("mouseleave",function(){ 
    photo1h3.style.display = "none"
    photo1h4.style.display = "none"
    photo1i.style.display = "none"
    photo1.style.backgroundImage = "url(https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)"
})

photo2.addEventListener("mouseenter",function(){
    photo2h3.style.display = "block"
    photo2h4.style.display = "block"
    photo2i.style.display = "block"
    photo2.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80)"
})

photo2.addEventListener("mouseleave",function(){
    photo2h3.style.display = "none"
    photo2h4.style.display = "none" 
    photo2i.style.display = "none"
    photo2.style.backgroundImage = "url(https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80)"
})

photo3.addEventListener("mouseenter",function(){
    photo3h3.style.display = "block"
    photo3h4.style.display = "block"
    photo3i.style.display = "block"
    photo3.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://www.westend61.de/images/0001348314pw/portrait-of-beautiful-woman-against-white-background-EYF01660.jpg)"
})

photo3.addEventListener("mouseleave",function(){
    photo3h3.style.display = "none"
    photo3h4.style.display = "none" 
    photo3i.style.display = "none"
    photo3.style.backgroundImage = "url(https://www.westend61.de/images/0001348314pw/portrait-of-beautiful-woman-against-white-background-EYF01660.jpg)"
})

photo4.addEventListener("mouseenter",function(){
    photo4h3.style.display = "block"
    photo4h4.style.display = "block"
    photo4i.style.display = "block"
    photo4.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://st3.depositphotos.com/34639946/36190/i/600/depositphotos_361909184-stock-photo-portrait-of-handsome-doctor-or.jpg)"
})

photo4.addEventListener("mouseleave",function(){ 
    photo4h3.style.display = "none"
    photo4h4.style.display = "none"
    photo4i.style.display = "none"
    photo4.style.backgroundImage = "url(https://st3.depositphotos.com/34639946/36190/i/600/depositphotos_361909184-stock-photo-portrait-of-handsome-doctor-or.jpg)"
})

photo5.addEventListener("mouseenter",function(){
    photo5h3.style.display = "block"
    photo5h4.style.display = "block"
    photo5i.style.display = "block"
    photo5.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://img.freepik.com/premium-photo/serious-young-man-smiling-standing-against-white-background_262388-7213.jpg?w=2000)"
})

photo5.addEventListener("mouseleave",function(){
    photo5h3.style.display = "none"
    photo5h4.style.display = "none" 
    photo5i.style.display = "none"
    photo5.style.backgroundImage = "url(https://img.freepik.com/premium-photo/serious-young-man-smiling-standing-against-white-background_262388-7213.jpg?w=2000)"
})