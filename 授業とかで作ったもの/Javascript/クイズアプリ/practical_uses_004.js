
const ques_arrey = ["最初のプログラム言語として知られる古典的なプログラミング言語は何ですか？",
    "「アラビアンナイト」の物語で、アリババが盗賊の洞窟で見つけた秘宝は何ですか？",
    "天文学で、黒い穴（ブラックホール）の事象の地平線を何と呼びますか？",
    "ノーベル文学賞を最も多く受賞した国はどこですか？", "日本の戦国時代に活躍した武将、上杉謙信の本名は何ですか？",
    "ピアノの88の鍵のうち、最も低音の鍵は何ですか？",
    "古代ギリシャ神話で、冥府の王であるハデスが支配する領域は何ですか？",
    "有名な物理学者アルベルト・アインシュタインの一般相対性理論は何年に発表されましたか？",
    "ルイ14世のフランス宮廷で、愛人として知られた女性は誰ですか？",
    "量子力学の基本原則である不確定性原理を提唱した物理学者は誰ですか？"
]
const select_arrey_1 = ["COBOL", "魔法のランプ", " スカラー場", " アメリカ合衆国", "上杉景虎", "C1", " オリンポス山", "1905年", "ジャンヌ・アンティノワット", "マックス・プランク"]
const select_arrey_2 = ["Fortran", " 魔法の絨毯", "シュワルツシルト半径", "フランス", " 上杉幸村", "A0", "エリュシオンの野", "1915年", "マリー・アントワネット", " ニールス・ボーア"]
const select_arrey_3 = ["Assembly言語", "40人の盗賊", "クエーサー", " スウェーデン", "上杉晴朝", "E1", "タルタロス", " 1927年", "マリーズ・アンリエット・ド・カスティーユ", "ヴェルナー・ハイゼンベルク"]
const select_arrey_4 = [" Lisp", "黄金のコイン", "ホーキング放射線", "イギリス", "上杉定正", "F0", " アカデメイア", "1933年", "マリー・マンシーニ", "アルベルト・アインシュタイン"]
const answer_array = ["Fortran", "魔法のランプ", "シュワルツシルト半径", " スウェーデン", "上杉景虎", "A0", "タルタロス", "1915年", "ジャンヌ・アンティノワット", "ヴェルナー・ハイゼンベルク"]
const answer_no = ["2", "1", "2", "3", "1", "2", "3", "2", "1", "3"]
const sum_qus = [select_arrey_1, select_arrey_2, select_arrey_3, select_arrey_4]

const ques_area = document.querySelector("#ques_area")
const res = document.querySelector("#res")
const ans_tx = document.querySelector("#ans_tx")
const timer_tx = document.querySelector("#timer")

const ok_bt = document.querySelector("#ok")
const next_bt = document.querySelector("#next")
const score = document.querySelector("#score")

score.style.visibility ="hidden"

let i = 0
let ans_sum = 0;

function enter() {
    clearTimeout()
    clearInterval()
    ok_bt.style.visibility = "hidden"
    next_bt.style.visibility = "visible"
    const radioButtons = document.getElementsByName('ques');

    // ラジオボタンの値を取得
    let selectedValue;
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            break; // 最初にチェックされているものが見つかったらループを終了
        }
    }
    if (selectedValue == answer_no[i]) {
        clearTimeout(timer)
        res.innerHTML = "正解！"
        i++
        ans_sum++

    } else {
        clearTimeout(timer)
        res.innerHTML = "不正解！"
        ans_tx.innerHTML = "正解は「<span style='color :#ff0000;'>" + answer_array[i] + "</span>」"
        i++
    }
    ok_bt.style.visibility = "hidden"
    if (i === 10) {
        score.style.visibility ="visible"
        document.querySelector("#num").innerHTML = ans_sum
        next_bt.style.visibility = "hidden"
    }
}
// const next = document.querySelector("#ok")
// next.addEventListener('click', function () {

// })



function visible() {
    document.querySelector("#ques_area").style.visibility = "visible"
}
function first_ques() {
    next_bt.style.visibility = "hidden"
    document.querySelector("#ques_tx").innerHTML = ques_arrey[i]

    document.querySelector("#ques_tx1").innerHTML = select_arrey_1[i]
    document.querySelector("#ques_tx2").innerHTML = select_arrey_2[i]
    document.querySelector("#ques_tx3").innerHTML = select_arrey_3[i]
    document.querySelector("#ques_tx4").innerHTML = select_arrey_4[i]
    document.querySelector("#st_bt").style.display = "none"
    startTimer()
}
function next() {
    ok_bt.style.visibility = "visible"
    res.innerHTML = ""
    ans_tx.innerHTML = ""
    document.querySelector("#ques_tx").innerHTML = ques_arrey[i]

    document.querySelector("#ques_tx1").innerHTML = select_arrey_1[i]
    document.querySelector("#ques_tx2").innerHTML = select_arrey_2[i]
    document.querySelector("#ques_tx3").innerHTML = select_arrey_3[i]
    document.querySelector("#ques_tx4").innerHTML = select_arrey_4[i]
    next_bt.style.visibility = "hidden"
    timeRemaining = 30
    startTimer()
}

timeRemaining = 30
//タイマーを格納する変数
let timer
// タイマーを更新する関数
function updateTimer() {
    const timerElement = document.querySelector("#second")
    timerElement.textContent = timeRemaining

    if (timeRemaining === 0) {
        enter()
    } else {
        timeRemaining--
        timer = setTimeout(updateTimer, 1000);
    }
}
// タイマーを開始する関数
function startTimer() {
    updateTimer();
}
