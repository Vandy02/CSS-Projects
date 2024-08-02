const testimonial = [
    {
        name: "Cherise G",
        photoUrl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:  "I have been a loyal customer of Apple for many years now and I must say, their products are simply amazing. From their sleek and innovative designs to their user-friendly interfaces, Apple never fails to impress me. I highly recommend Apple to anyone looking for the best technology on the market.Thank you, Apple, for continuously exceeding my expectations."
    },
    {
        name: "Matthew Ben",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:  "I have been a loyal customer of Apple for many years now and I must say, their products are simply unbelievable. From their sleek and innovative designs to their cutting-edge technology, Apple never fails to impress me."
    },
    {
        name: "Tony Stark",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:  "I highly recommend apple to anyone looking for high-quality and cutting-edge technology. Thank you, apple, for continuously raising the bar and making our lives easier and more enjoyable."
    }
]
const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;
updateTestimonial() 

function updateTestimonial(){
    const{name, photoUrl, text} = testimonial[idx]
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++
    if(idx === testimonial.length){
        idx = 0;
    }
    setTimeout(() =>{
        updateTestimonial()
    }, 5000)

}