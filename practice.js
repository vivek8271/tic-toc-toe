 let call=document.querySelectorAll("#box");
let reSet=document.querySelector("#reset");

 let newcall;
 newcall="x";
 call.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(newcall=="x"){
            box.innerText="x";
            newcall="o";

        }else{
            box.innerText="o";
            newcall="x";
        }
        box.disabled=true;
        check();
    })   
 });    
 const hame=[
    [0,1,2],[0,4,8],[0,3,6],
    [3,4,5],[6,7,8],[2,5,8],
    [1,4,7],[2,4,6]];


let para=document.querySelector("#demo");
let para1=document.querySelector("#demo1");
const check=()=>{
     for(let hello of hame){
        let pstn1=call[hello[0]].innerText;
        let pstn2=call[hello[1]].innerText;
        let pstn3=call[hello[2]].innerText;
        
        if(pstn1!="" && pstn2!="" && pstn3!=""){
            
            if(pstn1==pstn2 && pstn2==pstn3){   
              
                document.getElementById("demo").innerText="congratulation , " + pstn1 + " " + "is winner";
                document.getElementById("demo1").innerText="OOps! " + newcall + " " + "is looser";
                reSet.hidden=true;
                boxdisabled();
                return;
               
            }
            
        }
        else if ([...call].every(box => box.innerText !== "")) {
            para.hidden = false;
            para.innerText = "It's a draw!";
        }
        
    } 
  
}

const boxdisabled=()=>{
    let playbtn=document.querySelector("#againPlay");
    let para=document.querySelector("#demo");
    for(let box of call){
        box.disabled=true;
        playbtn.hidden=false;
        para.hidden=false;
        para1.hidden=false;
    }
}

reSet.addEventListener("click",()=>{
    reset();
})
const reset=()=>{
    for(let btn of call){
        btn.innerHTML=" ";
        btn.disabled=false;
        let playbtn=document.querySelector("#againPlay");
        let para=document.querySelector("#demo");
        playbtn.hidden=true;
        para.hidden=true;
        para1.hidden=true;
    }
}
// const draw=()=>{
//     if(call.forEach(box=>box.innerText!=="")){
//             para.hidden=false;
//             para.innerText="draw";
//         }
//     }   
    
// const call1=document.querySelectorAll("#box");
// const draw=()=>{
//     if (call1.every(box => box.innerText !== "")) {
//         para.innerText = "Draw";
//     }
// };
let againplay=document.querySelector("#againPlay");
againplay.addEventListener("click",()=>{
    for(let btn of call){
        btn.innerText=" ";
        againplay.hidden=true;
        btn.disabled=false;
        para.hidden=true;
        para1.hidden=true;
        reSet.hidden=false;
    }    
})   
