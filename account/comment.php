<?php
session_start();
if(isset($_POST['subcomment'])){

    if($_POST['username'] == null){
        $_SESSION["error"] = "Bạn chưa viết comment mà";
        header("Location: http://localhost/WEB-ASSIGNMENT_1-main/login/index.php");
    }
    else $tk = $_POST['username'];

    if($tk && $mk){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "Quét mã QR";
        $check = $_SESSION["is_login"] = false;

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM user";
        $result = $conn->query($sql);
        

        if ($result->num_rows > 0) {
        // output data of each row
            while($row = $result->fetch_assoc()) {
                if ($row["Username"] == $tk && $row["Password"] == $mk){
                    $check = true;
                    $_SESSION["is_login"] = true;
                    $_SESSION["id"] = $row["ID"];
                    $_SESSION["tk"] = $row["Username"];
                    $_SESSION["mk"] = $row["Password"];
                    $_SESSION["name"] = $row["Fullname"];
                    $_SESSION["sdt"] = $row["PhoneNum"];
                    $_SESSION["email"] = $row["Email"];
                    $_SESSION["error"] = "Đăng nhập thành công";
                    header("Location: http://localhost/WEB-ASSIGNMENT_1-main/account/index.php");
                    break;
                }
                else {
                    $_SESSION["is_login"] = false;
                    $_SESSION["error"] = "Nhập sai thông tin";
                    header("Location: http://localhost/WEB-ASSIGNMENT_1-main/login/index.php");
                }
            }
        } else {
            $_SESSION["error"] = "Chưa có tài khoản nào";
            header("Location: http://localhost/WEB-ASSIGNMENT_1-main/login/index.php");
        }
        $conn->close();
    }
}
?>