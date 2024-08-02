let opbtn=document.getElementById("open");
let clbtn=document.getElementById("close");
let box=document.getElementById("list");
opbtn.addEventListener('click',function(){
             box.setAttribute('class',"md:flex flex justify-evenly items-center md:my-7 md:w-[1100px] w-full h-full md:h-auto absolute top-0 left-0 z-50 md:static flex-col md:flex-row bg-orange-400 md:bg-inherit")
});

clbtn.addEventListener('click',function(){
    box.setAttribute('class',"md:flex flex justify-evenly items-center md:my-7 md:w-[1100px] w-full  md:h-auto absolute top-0 left-0 md:static flex-col md:flex-row bg-orange-400 md:bg-inherit hidden")
});

let sibtn=document.getElementById("sign");
let sipage=document.getElementById("page");
sibtn.addEventListener('click',function(){
        sipage.setAttribute('class','bg-[rgba(0,0,0,0.6)] h-screen absolute top-0 left-0 w-full z-50');
});

let closebtn=document.getElementById('cross');
closebtn.addEventListener('click',function(){
         sipage.setAttribute('class','bg-[rgba(0,0,0,0.6)] h-screen absolute left-[-2000px] w-full')
});

gsap.from(".text-white.inline-block",{
        y:-100,
        duration:0.7,
        delay:0.6,
        opacity:0,
        stagger:0.5,
})

gsap.from("#wel",{
        y:100,
        duration:0.8,
        delay:0.6,
        opacity:0,
})

gsap.from("#com",{
        y:100,
        duration:1,
        delay:0.7,
        opacity:0,
})

gsap.from("#logoan",{
        opacity:0,
        duration:1.6,
        x:-500,
});

let navigate=document.querySelector("#sticky")
window.addEventListener('scroll',function(){
           if(window.scrollY>110){
                 navigate.style.position='fixed'
                 navigate.style.backgroundColor="rgb(150,50,50)"
                 navigate.style.top='0'
                 navigate.style.width='100%'
                 navigate.style.height='10%'
                 navigate.style.zIndex='20'
                 navigate.style.marginTop='0'
           }else if(window.scrollY<110){
                navigate.style.position='static'
                navigate.style.backgroundColor=""
                navigate.style.marginTop='32px'
                navigate.style.width='91.666667%'
                navigate.style.height=''
           }
})