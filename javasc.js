let nav=document.getElementById("fixit");
window.addEventListener('scroll',function(){
         if(window.scrollY>150){
             nav.setAttribute("id","navg")
         }else if(window.scrollY<150){
                nav.setAttribute("id","fixit")
         }
         
})