
//表示と内部の計算を変える
let area_num =0
let judge =0
let area_tx ="0"

//数字
let se =document.querySelector("#se")
let ei =document.querySelector("#ei")
let ni =document.querySelector("#ni")
let fo =document.querySelector("#fo")
let fi =document.querySelector("#fi")
let si =document.querySelector("#si")
let on =document.querySelector("#on")
let tw =document.querySelector("#tw")
let thr =document.querySelector("#thr")
let ze =document.querySelector("#ze")
let double_ze =document.querySelector("#double_ze")
let deci =document.querySelector("#deci")

//その他
let cle =document.querySelector("#cle")
let onecle =document.querySelector("#onecle")

//演算子
let pl =document.querySelector("#pl")
let mi =document.querySelector("#mi")
let ti =document.querySelector("#ti")
let di =document.querySelector("#di")
let pe =document.querySelector("#pe")
let sq =document.querySelector("#sq")

//メソッド
let num =0;
let func_tx =""
function met (func,tx){
    if(judge===1){//+
        area_num=parseInt(area_tx)
        area_num=area_num+func
        area_tx =String(area_num)
        area.textContent=area_tx
        judge=0
    }else if(judge===2){//-
        area_num=parseInt(area_tx)
        area_num=area_num-func
        area_tx =String(area_num)
        area.textContent=area_tx
        judge=0
    }else if(judge===3){//×
        area_num=parseInt(area_tx)
        area_num=area_num*func
        area_tx =String(area_num)
        area.textContent=area_tx
        judge=0
    }else if(judge===4){//÷
        area_num=parseInt(area_tx)
        area_num=area_num/func
        area_tx =String(area_num)
        area.textContent=area_tx
        judge=0
    }else if(judge===5){//%
        area_num=parseInt(area_tx)
        area_num=area_num%func
        area_tx =String(area_num)
        area.textContent=area_tx
        judge=0
    }
    else{
        if(area_tx==="0"){
        area_tx =tx
        area.textContent =area_tx
        }else{
            area_tx =area_tx+tx
            area.textContent =area_tx
        }
        
    }
}

let area=document.querySelector("#area")
    se.addEventListener('click',()=>{
        num =7
        func_tx ="7"
       met(num,func_tx)
    })
    ei.addEventListener('click',()=>{
        num =8
        func_tx ="8"
       met(num,func_tx)
    })
    ni.addEventListener('click',()=>{
        num =9
        func_tx ="9"
       met(num,func_tx)
    })
    fo.addEventListener('click',()=>{
        num =4
        func_tx ="4"
       met(num,func_tx)
    })
    fi.addEventListener('click',()=>{
        num =5
        func_tx ="5"
       met(num,func_tx)
    })
    si.addEventListener('click',()=>{
        num =6
        func_tx ="6"
       met(num,func_tx)
    })
    on.addEventListener('click',()=>{
        num =1
        func_tx ="1"
       met(num,func_tx)
    })
    tw.addEventListener('click',()=>{
        num =2
        func_tx ="2"
       met(num,func_tx)
    })
    thr.addEventListener('click',()=>{
        num =3
        func_tx ="3"
       met(num,func_tx)
    })
    ze.addEventListener('click',()=>{
            if(area_tx==="0"){
            area_tx ="0"
            area.textContent =area_tx
            }else{
                area_tx =area_tx+"0"
                area.textContent =area_tx
            }
            
        })
    double_ze.addEventListener('click',()=>{
        if(area_tx==="0"){
        area_tx ="00"
        area.textContent =area_tx
        }else{
            area_tx =area_tx+"00"
            area.textContent =area_tx
        }
        
    })
    deci.addEventListener('click',()=>{
        if(area_tx!="0"){
            area_tx =area_tx+"."
            area.textContent =area_tx
        }
        
    })
    cle.addEventListener('click',()=>{
        area_tx ="0"
        area.textContent =area_tx
    })
    onecle.addEventListener('click',()=>{
       if(area_tx!="0"){
        area_tx =area_tx.slice(0,-1)
        area.textContent =area_tx
       }if(area_tx===""){
        area.textContent ="0"
       }
    })
    pl.addEventListener('click',()=>{//1
       judge=1;
    })
    mi.addEventListener('click',()=>{//2
        judge=2;
     })
     ti.addEventListener('click',()=>{//3
        judge=3;
     })
     di.addEventListener('click',()=>{//4
        judge=4;
     })
     pe.addEventListener('click',()=>{//5
        judge=5;
     })
     sq.addEventListener('click',()=>{//2乗
        area_num=parseInt(area_tx)
        area_num=area_num*area_num
        area_tx =String(area_num)
        area.textContent=area_tx
        
     })