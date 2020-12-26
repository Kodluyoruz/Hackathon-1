
<?php include 'include/header.php'; ?>
    <section class="content-header">
        <h1>
            Dashboard
            <small>Version 2.0</small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
        </ol>
    </section>
    
<?php 
  if ($_GET["id"]) {
    $mesaj = $db->prepare("SELECT * FROM iletisim WHERE id=:id");
    $mesaj ->execute(["id" => $_GET["id"]]);

    $row = $mesaj->fetch(PDO::FETCH_OBJ);


    $guncelle = $db->prepare("UPDATE iletisim SET durum=:durum WHERE id=:id");
    $guncelle->execute(["durum" => 1,"id"=> $_GET["id"]]);

  }
?>
    <!-- Main content -->
    <section class="content">
        
                    <div class="row">
                    <div class="box">
                        <div class="box-header">
                          <?= $row->isim ?> Kişiden Gelen Mesaj
                       </div>
                       <div class="box-body">
                        <table class="table">
                          <tr>
                            <td>Ad Soyad</td>
                            <td><?= $row->isim ?></td>
                          </tr>
                          <tr>
                            <td>E-mail</td>
                            <td><?= $row->email ?></td>
                          </tr>
                          <tr>
                            <td>esaj</td>
                            <td><?= $row->mesaj ?></td>
                          </tr>
                           
                       </div>
                    </div>
                    </div>

                </div>

                    </div>
                </div>
            </div>
        </div>


    </section>
    <?php
    if (@$_GET["sil"]) {
        $sil = $db->prepare("DELETE FROM iletisim WHERE id=:silinecekid");
        $sil->execute(["silinecekid" => $_GET["sil"]]);

        if ($sil) {
            header("Location:iletisim.php");
        }
        # code...
    }
    ?>




   </div>
<!-- /.content-wrapper -->




</div>
<!-- ./wrapper -->

<!-- jQuery 3 -->
<script src="assets/js/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="assets/js/bootstrap.min.js"></script>
<!-- FastClick -->
<!-- AdminLTE App -->
<script src="assets/js/adminlte.min.js"></script>
<!-- SlimScroll -->
<script src="assets/js/jquery.slimscroll.min.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="assets/js/dashboard2.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="assets/js/demo.js"></script>


<script src="assets/js/bootstrap-datepicker.min.js"></script>
<script src="assets/js/jquery.inputmask.js"></script>
<script src="assets/js/jquery.inputmask.extensions.js"></script>
<script src="assets/js/jquery.inputmask.phone.extensions.js"></script>
<script src="assets/js/jquery.inputmask.date.extensions.js"></script>
<script src="assets/js/select2.full.min.js"></script>
</body>
</html>
