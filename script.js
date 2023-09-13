const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


    //  for first page animation -  page elements load slowly with gsap animation 
function firstPageAnimation(){
   var tl = gsap.timeline();

   tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
   })
        .to(".boundingelem",{
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            stagger: .2,
            delay: -1
        })
        
        .from("#headingfooter",{
            y: '-10',
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInOut,
            delay: -1
       })
    }
    //  mouse follow -  mouse cursor ke piche piche ata hey esko transform say bhi kar sakte hey and left top value dekar bhi kar sakt hey 
function circleMouseFollower(){
    var cmf = document.querySelector("#minicircle")
    var main = document.querySelector("#main")
    main.addEventListener("mousemove", function(dets){
       cmf.style.transform = `translate(
            ${dets.clientX}px, ${dets.clientY}px)`

    })
}

circleMouseFollower()

firstPageAnimation()

document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mousemove", function(dets) { 
          
         var diff = dets.clientY - elem.getBoundingClientRect().top;

        elem.querySelector("img").style.opacity=1
        elem.querySelector("img").style.left= dets.clientX+"px"


        // gsap.from(elem.querySelector("img"), {
        //     opacity: 1,
        //     ease: Power1,
        //     top: diff,
        //     left: dets.clientX
        //  })
})
})

document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mouseleave", function(dets) { 

        elem.querySelector("img").style.opacity=0

    })
})

