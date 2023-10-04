const st = document.querySelector('#st_btn')
const pre = document.querySelector('#pre_btn')
const ta = document.querySelector('#ta')
let me = document.querySelector('#message')
let hit_me = document.querySelector("#hit_message")
let blows_me = document.querySelector("#blows_message")
let num_me = document.querySelector('#num_message')
st.addEventListener('click',() => {
    st.style.visibility ="hidden"
    //comの数字
    var min = 100 ;
    var max = 999 ;
    var c_num = Math.floor( Math.random() * (max + 1 - min) ) + min
    console.log("デバッグ用（答え） :"+c_num)
    pre.style.visibility ="visible"
    ta.style.visibility ="visible"
    var cou =0
    pre.addEventListener('click',() => {
        var tx = prompt("任意の100~999までの数字を入力してください")
       var num =parseInt(tx)
       
        if(num <100){
            alert("100以上を入力してください")
        }else if(num > 999){
            alert("999以下にしてください")
        }else if(isNaN(num)){
            alert("数値を入力してください")
        }else{
        cou++
        if (c_num == num){
        hit_me.textContent =""
        blows_me.textContent =""
        me.textContent = "おめでとう！正解です！（スコア :"+cou+"）"
        num_me.textContent ="予想した数字 :"+num
        me.style.color = "#c71585"
        pre.style.visibility ="hidden"
        // table要素を取得
        var tableElem = document.getElementById('ta')
        // tbody要素にtr要素（行）を最後に追加
        var trElem = tableElem.tBodies[0].insertRow(-1);
 
        // td要素を追加
        var cellElem = trElem.insertCell(0);
 
        // td要素にテキストを追加
         cellElem.appendChild(document.createTextNode(num+"（正解！）"));
            }else{
                //文字列に変換し、各位を配列に入れる
                let c_numDigits = c_num.toString().split("")
                let numDigits = num.toString().split("")
                let hits = 0;
                let blows = 0;
                for (let i = 0; i < c_numDigits.length; i++){
                    if(c_numDigits[i] == numDigits[i]){
                        hits++
                    }else if(c_numDigits.includes(numDigits[i])){
                        blows++
                    }
                }
                num_me.textContent ="予想した数字 :"+num
                hit_me.textContent ="ヒット :"+hits
                hit_me.style.color ="#ff0000"
                blows_me.textContent ="ブロー :"+blows
                blows_me.style.color ="#0000ff"
                 // table要素を取得
                var tableElem = document.getElementById('ta');

                // tbody要素にtr要素（行）を最後に追加
                var trElem = tableElem.tBodies[0].insertRow(-1);

                // td要素を追加
                var cellElem = trElem.insertCell(0);

                // td要素にテキストを追加
                cellElem.appendChild(document.createTextNode(num+"_ヒット :"+hits+"_ブロー:"+blows));
                
            }
        }
        
        
    })
})
