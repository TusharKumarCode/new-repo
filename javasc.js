let fix=document.querySelector("nav")
           window.addEventListener('scroll',function(){
                       if(window.pageYOffset>50){
                           fix.setAttribute("id","navg")
                           
                       }else if(window.pageYOffset<50){
                             fix.setAttribute("id","navigate")
                       }       
           });

           let btn=document.querySelector("#ius");
           let slt=document.querySelector(".dropdown-menu");

           btn.addEventListener("mouseover",function(){
                          slt.style.display="block"
           });

           slt.addEventListener("mouseover",function(){
                         slt.style.display="block"
           });

           slt.addEventListener("mouseout",function(){
                         slt.style.display="none"
           });

           let st=document.querySelector("#hov");
           let str=document.querySelector("#dis");
           
           st.addEventListener("mouseover",function(){
                        str.setAttribute("class","d-flex justify-content-evenly align-items-center bg-light position-absolute top-100 w-75 h-100 d-block")
           })

           str.addEventListener("mouseout",function(){
                    str.setAttribute("class","d-flex justify-content-evenly align-items-center bg-light position-absolute top-100 w-75 h-100 d-none")
           })

           str.addEventListener("mouseover",function(){
                    str.setAttribute("class","d-flex justify-content-evenly align-items-center bg-light position-absolute top-100 w-75 h-100 d-block")
           })


          let sot=document.querySelector("#bt");
          let sghtf=document.querySelector("#st");
          let vl=0;

          sot.addEventListener("click",function(){
                       if(vl==0){
                        sghtf.setAttribute("class","border border-3 d-flex justify-content-evenly bg-light position-absolute top-50 d-block")
                        vl=1;
                       }else{
                        sghtf.setAttribute("class","border border-3 d-flex justify-content-evenly bg-light position-absolute top-50 d-none")
                        vl=0;
                       }
          })