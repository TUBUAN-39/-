<?php
session_start();
session_destroy();
// リダイレクト先のURL
$url = '../loginForm.html';

// リダイレクトを実行
header('Location: ' . $url);
exit;
?>
