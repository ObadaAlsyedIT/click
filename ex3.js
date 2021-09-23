{//function = () =>//نفس الشيء
    // document.querySelectorAll("button").forEach((button) =>{
    //    button.onclick = () =>{
    //       document.querySelector("h1").style.color = button.dataset.color;//اسم بالتاج نفس
    //    }
    
    // })
    // document.querySelector("select").onchange =  function(){
    //    document.querySelector("h1").style.color = this.value;

    // };
    // document.querySelector("form").onsubmit = function(){
    //    var menu = document.querySelector("#tasks");
    //    menu.innerHTML += "<li>obada</li>";
    // }  
    
    
   /* document.querySelector("form").onsubmit = function(){//on kiy up
       var task = document.querySelector("#task");
      
       
       var li = document.createElement("li");
       
       li.innerHTML = task.value;
       
       var list = document.querySelector("#tasks");
       
       list.append(li);
       document.querySelector("#task").value = "";

       return false;
     
    }*/
    
    document.addEventListener("DOMContentLoaded" , function(){
        var sub = document.querySelector("#submit");
        sub.disabled = true;
        sub.style.border = '2px solid red';
        document.querySelector("#task").style.outline = 'none';
        document.querySelector("#task").style.marginLeft = '600px';

}
    )};
    
    function myfun(){
        var x = document.querySelector("#submit");
        var y =document.querySelector("#task")
        x.disabled = false;
        x.style.border = '2px solid green';
        x.style.borderRadius = '25px';
        y.style.border = '2px solid green ';
        y.style.borderRadius = '25px';
      




    }
  
 
