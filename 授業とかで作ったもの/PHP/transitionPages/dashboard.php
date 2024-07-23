<?php
session_start();

// ログインチェック
// if (!isset($_SESSION['username'])) {
//     header('Location: ../login.html');
//     exit;
// }

// ユーザー名を取得
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html>

<head>
    <title>ダッシュボード</title>
    <link rel="stylesheet" href="../form.css" />
</head>

<body>
    <div id="dashDiv">
        <h1>ようこそ！&nbsp;<?php echo $username; ?></h1>
        <p>ここはあなたのページです。</p>
    </div>
    <a href="sessionDestroy.php">
        <div id="registerLink">ログアウト</div>
    </a>
</body>

</html>