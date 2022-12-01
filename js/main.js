let nav= document.querySelector(".navbar")
let links=document.querySelectorAll(".nav-link")
let logo = document.querySelector(".navbar-brand")


window.addEventListener("scroll",()=>{

   if(scrollY>200 && scrollY<410){
      nav.style.opaciy="0"
      nav.style.zIndex="-1"
      
   }else{
      nav.style.zIndex="1000"
      nav.style.opaciy="1"
   }

   if(window.scrollY>=410){
      nav.style.background="white"
      for (let i = 0; i < links.length -1; i++) {
         setStyle(links[i] ,"color" , "hsl(236, 57%, 28%)")
      }
      setStyle(logo ,"color", "hsl(236, 57%, 28%)")
      setStyle(document.querySelector(".fa-bars") , "color" , "hsl(236, 57%, 28%)")
      setStyle(document.querySelector(".navbar-toggler") , "border" , "1px solid hsl(236, 57%, 28%)")
   }else{
      links.forEach(link=>link.style.color="white")
      setStyle(document.querySelector(".fa-bars") , "color" , "white")
      // nav.style.background="transparent"
      setStyle(nav ,"background-image"," linear-gradient(90deg,hsl(231, 68%, 21%) 0,hsl(275, 54%, 33%) 51%,hsl(231, 68%, 21%) )")

      setStyle(logo, "color" , "white")
      setStyle(document.querySelector(".navbar-toggler") , "border" , "1px solid white")
   }
})

function setStyle(el , property,color){
   el.setAttribute( 'style', `${property}:${color} !important` )
}

let navBtn = document.querySelector(".navbar-toggler")

navBtn.addEventListener("click", (e)=>{
   setStyle(e.target.parentNode.parentNode ,"background-image"," linear-gradient(90deg,hsl(231, 68%, 21%) 0,hsl(275, 54%, 33%) 51%,hsl(231, 68%, 21%) )")
})  
