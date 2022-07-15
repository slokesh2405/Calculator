let display=document.getElementById("display"); 
let mybtn=document.querySelectorAll("button"); // target a tag via querySelector 
let currentdisplay="";
let temp="";
 for(let item of mybtn){
     item.addEventListener("click",(e)=>{
     mybtntext=e.target.innerText;
     console.log(mybtntext)
      
     if(mybtntext=="C"){
         currentdisplay="";
         display.value=currentdisplay;
    }
     else if(mybtntext == "="){
         temp=eval(currentdisplay);
         display.value=temp;
    }
     
     else if(mybtntext=="ln"){
          display.value=Math.log(currentdisplay);
    }

    else if(mybtntext=="e^x"){
        display.value=Math.exp(currentdisplay);
    }
  
    else if(mybtntext=="log10"){
    display.value=Math.log10(currentdisplay);
    }

    else if(mybtntext=="√"){
        display.value=Math.sqrt(currentdisplay);
    }
     
     else{
         currentdisplay = currentdisplay + mybtntext;
         display.value = currentdisplay;
     }
   })
 }
