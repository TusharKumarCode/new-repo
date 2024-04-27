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
               list.setAttribute('class','d-flex justify-content-between align-items-center bg-secondary border border-0 rounded-3 d-block')
})

dropdn.addEventListener('mouseout',function(){
    list.setAttribute('class','d-flex justify-content-between align-items-center bg-secondary border border-0 rounded-3 d-none')
})

list.addEventListener('mouseover',function(){
    list.setAttribute('class','d-flex justify-content-between align-items-center bg-secondary border border-0 rounded-3 d-block')
})

list.addEventListener('mouseout',function(){
    list.setAttribute('class','d-flex justify-content-between align-items-center bg-secondary border border-0 rounded-3 d-none')
})