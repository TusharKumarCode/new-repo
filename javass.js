let opbtn=document.getElementById("open");
let clbtn=document.getElementById("close");
let box=document.getElementById("list");
opbtn.addEventListener('click',function(){
             box.setAttribute('class',"md:flex flex justify-evenly items-center md:my-7 md:w-[1100px] w-full h-full md:h-auto absolute top-0 left-0 md:static flex-col md:flex-row bg-orange-400 md:bg-inherit")
});

clbtn.addEventListener('click',function(){
    box.setAttribute('class',"md:flex flex justify-evenly items-center md:my-7 md:w-[1100px] w-full  md:h-auto absolute top-0 left-0 md:static flex-col md:flex-row bg-orange-400 md:bg-inherit hidden")
});

let sibtn=document.getElementById("sign");
let sipage=document.getElementById("page");
sibtn.addEventListener('click',function(){
        sipage.setAttribute('class','bg-[rgba(0,0,0,0.6)] h-screen absolute top-0 w-full');
});

let closebtn=document.getElementById('cross');
closebtn.addEventListener('click',function(){
         sipage.setAttribute('class','bg-[rgba(0,0,0,0.6)] h-screen absolute top-[-700px] w-full')
})