let bticon=document.getElementById("bar");
let closebtn=document.getElementById("cross");
let slt=document.getElementById("colps");
let remo=document.getElementById("btmo");

bticon.addEventListener('click', function(){
           slt.setAttribute("class","flex justify-evenly md:w-3/4 items-center md:static absolute top-0 left-0 flex-col md:flex-row md:bg-inherit bg-orange-300 w-full h-full");
           remo.setAttribute('class','md:w-64 md:mr-2 flex justify-evenly md:static absolute top-4 left-0 w-full')
});

closebtn.addEventListener("click",function(){
    slt.setAttribute("class","flex justify-evenly md:w-3/4 items-center md:static absolute top-0 left-full flex-col md:flex-row md:bg-inherit bg-orange-300 w-full h-full");
    remo.setAttribute('class','md:w-64 md:mr-2 flex justify-evenly md:static absolute top-4 left-full w-full')
})
