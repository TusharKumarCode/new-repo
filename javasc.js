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

btn="";
str=document.querySelector('#st');
for(let i=1 ; i<=100; i++){
    btn+='<button type="button" class="btn btn-primary w-25 mx-5 my-5 fs-2">ok</button>'
}
str.innerHTML=btn;
