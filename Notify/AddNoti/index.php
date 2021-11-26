<?php
session_start();
//if (!isset($_SESSION["isAdmin"]) || !($_SESSION["isAdmin"])) header("location: ../Home")

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
  <link rel="stylesheet" href="Home.css">
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
              <a class="dropdown-item" aria-current="page" href="../">Thông báo</a>
              <a class="dropdown-item" aria-current="page" href="../Request">Đơn xin</a>
              <?php if(isset($_SESSION['is_login'])):?>
                <a class="dropdown-item" aria-current="page" href="../account/index.php">Trang cá nhân</a>
              <?php endif ?>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="../Home">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="../Employee">Nhân viên</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../">Thông báo</a>
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
  
  <div class = "container">
      <div class="mb-3 col-md-12">
        <label for="formGroupExampleInput" class="form-label">Tiêu đề:</label>
        <input type="text" id="title" size="30" class="form-control" placeholder="Nhập tiêu đề" >
      </div>
      <div class="mb-3 col-md-12">
        <label for="formGroupExampleInput" class="form-label">Ngày tạo:</label>
        <input type="text" id="date" size="25" class="form-control" value = 
          <?php 
            echo date("Y-m-d");
          ?>
        >
      </div>
      <div class="mb-3 col-md-12">
        <label for="formGroupExampleInput2" class="form-label">Nội dung</label>
        <textarea id="content" id="content" class = 'form-control' rows="10"></textarea>
      </div>
      <div class="mb-3 col-md-6">
        <label for="formGroupExampleInput" class="form-label">Địa chỉ:</label>
        <input type="text" id="address" size="25" class="form-control" value = 
          <?php 
            echo "'68, Lý Thường Kiệt, quận 10, TPHCM'";
          ?>
        >
      </div>
      <div class="mb-3 col-md-6">
        <label for="formGroupExampleInput" class="form-label">email:</label>
        <input type="text" id="email" size="25" class="form-control"  value = 
          <?php 
            echo "hr@big4.com";
          ?>
        >
      </div>
      <div class="mb-3 col-md-6">
        <label for="formGroupExampleInput" class="form-label">Số điện thoại:</label>
        <input type="text" id="telephone" size="25" class="form-control" value = 
          <?php 
            echo "0987654321";
          ?>
        >
      </div>
      <div class="mb-3 col-md-6">
        <label for="date">Loại thông báo:</label>
        <input type="text" id="type" size="25" class="form-control"  value = 
          <?php 
            echo "1";
          ?>
        >
      </div>
      <div class="mb-3 col-md-12">
        <button id = "submitBtn" onClick = "AddDocument_CustomID()">Tạo Thông Báo</button>
      </div>

  </div>



<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="https://daniellaharel.com/raindrops/js/raindrops.js"></script>

<script> jQuery('#waterdrop').raindrops({color:'#1c1f2f', canvasHeight:150, density: 0.1, frequency: 20});
</script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<script type = 'module' src = './script.js'></script>

</body>
</html>
