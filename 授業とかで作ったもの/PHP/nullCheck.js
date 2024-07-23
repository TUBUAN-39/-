function nullCheck() {

    var flag = 0;

    if (document.getElementById("field1").value == "" && document.getElementById("field2").value == "") {

        flag = 3;

    }

     if (document.getElementById("field1").value == "") {

        flag = 1;

    }
     if (document.getElementById("field2").value == "") {

        flag = 2;

    }
     if (document.getElementById("field3").value == "") {

        flag = 2;

    }

    if (flag == 3) {
        window.alert("「ユーザー名」と「パスワード」が未入力です");
        return false; // 送信を中止

    }
    else if (flag == 1) {

        window.alert('「ユーザー名」が未入力です');
        return false; // 送信を中止

    }
    else if (flag == 2) {
        window.alert('「パスワード」が未入力です');
        return false; // 送信を中止
    }
    else {
        return true; // 送信を実行

    }

}