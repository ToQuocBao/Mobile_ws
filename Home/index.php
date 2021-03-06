<?php
session_start();
?>
<!DOCTYPE html>
<html lang="vi">
<head>
  <title>Quét mã QR</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="../image/logo.png" />
  <link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">  
  <link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">  
  <link rel="stylesheet" href="../Css/Home.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

  <div class=header-background>
    <div id="nav" class="sticky-nav">
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="../Home">
            Quét mã QR
          </a>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-bars"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" aria-current="page" href="../Home">Trang chủ</a>
              <a class="dropdown-item" aria-current="page" href="../Employee">Nhân viên</a>
              <a class="dropdown-item" aria-current="page" href="../Notify">Thông báo</a>
              <a class="dropdown-item" aria-current="page" href="../Request">Đơn xin</a>
              <?php if(isset($_SESSION['is_login'])):?>
                <a class="dropdown-item" aria-current="page" href="../account/index.php">Trang cá nhân</a>
              <?php endif ?>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../Home">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="../Employee">Nhân viên</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="../Notify">Thông báo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="../Request">Đơn xin</a>
              </li>
            </ul>
          </div>
            
        </div>
      </nav>
    </div>
  </div>
  



  <div class ="my-display container">
    <table class = "table ">
      <thead>
        <th>Ngày làm</th>
        <th>Nhân viên</th>
        <th>Bắt đầu</th>
        <th>Kết thúc</th>
        <th>Giờ làm</th>
        <th>Giờ làm cần thiết</th>
        <th>Đúng giờ</th>
        <th>Tăng ca</th>
      </thead>
      <tbody id='tbody'>
              
      </tbody>
    </table>
    <br>
  </div>




<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="https://daniellaharel.com/raindrops/js/raindrops.js"></script>

<script> jQuery('#waterdrop').raindrops({color:'#1c1f2f', canvasHeight:150, density: 0.1, frequency: 20});
</script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<script type = 'module' src="./script.js"></script>

</body>
</html>
<?php 
  //if (!isset($_SESSION["isAdmin"])) echo '<script>$(".dropdown").hide(); $(".navbar-nav").hide()</script>';
?>