let nav=document.getElementById("fixit");
window.addEventListener('scroll',function(){
         if(window.scrollY>150){
             nav.setAttribute("id","navg")
         }else if(window.scrollY<150){
                nav.setAttribute("id","fixit")
         }
         
})

const dropdn=document.querySelector("#hov");
const list=document.querySelector("#setpos");
dropdn.addEventListener('mouseover',function(){
               list.setAttribute('class','d-flex justify-content-between align-items-center border border-0 rounded-3 d-block')
})

dropdn.addEventListener('mouseout',function(){
    list.setAttribute('class','d-flex justify-content-between align-items-center border border-0 rounded-3 d-none')
})

list.addEventListener('mouseover',function(){
    list.setAttribute('class','d-flex justify-content-between align-items-center border border-0 rounded-3 d-block')
})

list.addEventListener('mouseout',function(){
    list.setAttribute('class','d-flex justify-content-between align-items-center border border-0 rounded-3 d-none')
});


let vtn=document.getElementById('btnclk');
let container=document.getElementById('colps');
let num=0;
vtn.addEventListener("click",function(){
          if(num==0){
              container.setAttribute('class','row d-visible')
              num=1;
              vtn.innerHTML="close";
          }else{
              container.setAttribute('class','row d-none')
              num=0;
              vtn.innerHTML="browse all service";
          }
});
