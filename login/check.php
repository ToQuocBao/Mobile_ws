<?php
session_start();
if(isset($_POST['login'])){

    if($_POST['username'] == null){
        $_SESSION["error"] = "Chưa nhập đủ thông tin";
        header("Location: ./index.php");
    }
    else $tk = $_POST['username'];

    if($_POST['password'] == null){
        $_SESSION["error"] = "Chưa nhập đủ thông tin";
        header("Location: ./index.php");
    }
    else $mk = $_POST['password'];
    print($_SESSION.toString());
    if($tk && $mk){
        if (!isset($_SESSION['is_login'])) {
            $_SESSION["error"] = "Thông tin đăng nhập không chính xác";
            //header("location: ../login/");
        }
        else {
            $_SESSION['is_login'] = true;
            header("location: ../Home/");
        }
    }
    
}
?>