var btn =document.getElementById("btn");
var  numV =document.getElementById("member");
var yearV =document.getElementById("year");
var classV =document.getElementById("class");
btn.addEventListener('click',() => {
    var num = numV.value;
    var year = yearV.value;
    var classNum = classV.value;
    
    if(num<145){
        //クラス1
        if(classNum==1){
            document.write("<table>")
            document.write("<tr></tr>")
            document.write("<td>")

            document.write("<table border='1'>")
            document.write("<tr><th>1組</th></tr>")
            for(let i=1; i<=num; i++){
                if(i==49){
                    break;
                }
                document.write("<tr><td>")
                if(i<10){
                    document.write("x"+year+"z00"+i)
                }else{
                    document.write("x"+year+"z0"+i)
                }
                document.write("</td></tr>")
            }
            document.write("</table>")
            document.write("</td>")//外側のテーブル
        }
        //クラス2
        else if(classNum==2){
            document.write("<table>")//外テーブル
            document.write("<tr></tr>")
            document.write("<td>")
            //1
            document.write("<table border='1'>")
            document.write("<tr><th>1組</th></tr>")
            for(let i=1; i<=num; i++){
                if(i==49){
                    break;
                }
                if(i%2!=0){
                    document.write("<tr><td>")
                    if(i<10){
                        document.write("x"+year+"z00"+i)
                    }else{
                        document.write("x"+year+"z0"+i)
                    }
                    document.write("</td></tr>")
                }
            }
            document.write("</table>")
            document.write("</td>")//外側のテーブル
            //2
            document.write("<td>")
            document.write("<table border='1'>")
            document.write("<tr><th>2組</th></tr>")
            for(let i=1; i<=num; i++){
                if(i==49){
                    break;
                }
                if(i%2==0){
                    document.write("<tr><td>")
                    if(i<10){
                        document.write("x"+year+"z00"+i)
                    }else{
                        document.write("x"+year+"z0"+i)
                    }
                    document.write("</td></tr>")
                }
            }
            document.write("</table>")
            document.write("</td>")//外側のテーブル
        }
        //クラス3
        else{
            const groups = [[], [], []];
            const quotient = Math.floor(num / 3); // 3で割った商
            const remainder = num % 3; // 3で割った余り
    
            // 各グループに均等に分割
            for (let i = 0; i < quotient; i++) {
                groups[0].push(i * 3 + 1);
                groups[1].push(i * 3 + 2);
                groups[2].push(i * 3 + 3);
            }
    
            // 余りを均等に分配
            for (let i = 0; i < remainder; i++) {
                groups[i].push(quotient * 3 + i + 1);
            }
        
        //出力
        document.write("<table>")
        document.write("<tr></tr>")
        document.write("<td>")
        document.write("<table border='1'>")
        document.write("<tr><th>1組</th></tr>")
       //1組
       for(let i =0; i<groups[0].length; i++){
        if(i==49){
            break;
        }
        document.write("<tr></tr>")
        document.write("<td>")
        if(groups[0][i]<10){
            document.write("x"+year+"z00"+groups[0][i])
        }else if(groups[0][i]<100){
            document.write("x"+year+"z0"+groups[0][i])
        }else{
            document.write("x"+year+"z"+groups[0][i])
        }
        document.write("</td>")
       }
       document.write("</table>")
       document.write("</td>")
    
       //2組
        document.write("<td>")
        document.write("<table border='1'>")
        document.write("<tr><th>2組</th></tr>")
        for(let i =0; i<groups[1].length; i++){
            if(i==49){
                break;
            }
            document.write("<tr></tr>")
            document.write("<td>")
            if(groups[1][i]<10){
                document.write("x"+year+"z00"+groups[1][i])
            }else if(groups[1][i]<100){
                document.write("x"+year+"z0"+groups[1][i])
            }else{
                document.write("x"+year+"z"+groups[1][i])
            }
            document.write("</td>")
           }
           document.write("</table>")
           document.write("</td>")
    
        //3組
        document.write("<td>")
        document.write("<table border='1'>")
        document.write("<tr><th>3組</th></tr>")
        for(let i =0; i<groups[2].length; i++){
            if(i==49){
                break;
            }
            document.write("<tr></tr>")
            document.write("<td>")
            if(groups[2][i]<10){
                document.write("x"+year+"z00"+groups[2][i])
            }else if(groups[2][i]<100){
                document.write("x"+year+"z0"+groups[2][i])
            }else{
                document.write("x"+year+"z"+groups[2][i])
            }
            document.write("</td>")
           }
           document.write("</table>")
           document.write("</td>")
           document.write("</table>")
        }
        document.write("</table>")
    }else{
        alert("数を144以下にしてください")
    }
});