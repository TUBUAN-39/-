<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.8.0.min.css" />
    <link rel="stylesheet" href="../form.css" />
    <title>登録フォーム</title>
</head>

<body>

    <?php
    try {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $username = $_POST['username'];
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $confirm_password = $_POST['password'];
            $confirm_password_2 = $_POST['confirm_password'];
            // $confirm_password = $_POST['confirm_password'];
            $conn = new mysqli('localhost', 'root', '', 'assignment');

            if ($conn->connect_error) {
                // die('Connection failed: ' . $conn->connect_error);
                throw new Exception('接続に失敗しました: ' . $conn->connect_error);
            }
            // パスワードと確認パスワードが一致するかを確認
            if ($confirm_password !== $confirm_password_2) {
                throw new Exception('パスワードが違います');
            }
            $stmt = $conn->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
            $stmt->bind_param('ss', $username, $password);

            if ($stmt->execute()) {
                $formText = "登録が完了しました";
                // echo 'Registration successful!';
            } else {
                $formText = 'エラー: ' . $stmt->error;
                // echo 'Error: ' . $stmt->error;
            }

            $stmt->close();
            $conn->close();
        }
    } catch (Exception $e) {
        $formText = 'エラー: ' .  $e->getMessage() . "\n";
    }
    ?>
    <div id="main">
        <div id="formBox">
            <div id="stText"><?php echo $formText; ?></div>
            <a href="../loginForm.html">
                <div id="registerLink">戻る</div>
            </a>
        </div>
        <div id="quote">used&nbsp;by&nbsp;<a href="https://yegor256.github.io/tacit/">tacit</a></div>
    </div>
</body>

</html>