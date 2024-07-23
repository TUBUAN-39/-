<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.8.0.min.css" />
    <link rel="stylesheet" href="../form.css" />
    <title>登録フォーム</title>
</head>

<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'assignment');

    if ($conn->connect_error) {
        die();
        $formText = '接続に失敗しました: ' . $conn->connect_error;
    }

    $stmt = $conn->prepare('SELECT id, password FROM users WHERE username = ?');
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION['username'] = $username;
            // リダイレクト先のURL
            $url = 'dashboard.php';

            // リダイレクトを実行
            header('Location: ' . $url);
            exit;
            //    $formText = 'ログイン成功';
            //    $backText ='ログアウト';
        } else {
            $formText = 'ユーザー名またはパスワードが違います';
            $backText = '戻る';
        }
    } else {
        $formText = 'ユーザー名またはパスワードが違います';
        $backText = '戻る';
    }

    $stmt->close();
    $conn->close();
}
?>

<body>
    <div id="main">
        <div id="formBox">
            <div id="stText"><?php echo $formText; ?></div>
            <a href="sessionDestroy.php">
                <div id="registerLink"><?php echo $backText; ?></div>
            </a>
        </div>
        <div id="quote">used&nbsp;by&nbsp;<a href="https://yegor256.github.io/tacit/">tacit</a></div>
    </div>
</body>

</html>