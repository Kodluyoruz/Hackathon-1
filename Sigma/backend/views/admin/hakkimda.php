
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
    $hakkimizda = $db->prepare("SELECT * FROM hakkimizda WHERE id=:id");
    $hakkimizda->execute(["id"=>1]);

    $row = $hakkimizda->fetch(PDO::FETCH_OBJ);
    ?>

    <!-- Main content -->
    <section class="content">
        <div class="col-md-12">
            <div class="row">
                <div class="box">
                    <div class="box-header">
                        Hakkımızda Bölümü
                        
                </div>
                <!-- /.col -->
                <div class="box-body">
                    <form action="" method="post" enctype="multipart/form-data">
                        <?php 
                    if (@$_GET["durum"] == "ok")
                    {
                    ?>
                    <div class="alert alert-success">
                        Güncellendi
                    </div>
                    <?php
                    }

                    if (@$_GET["durum"] == "no"){
                        ?>
                    <div class="alert alert-danger">
                        Güncelleme İşlemi Başarısız
                    </div>
                    <?php
                    }


                    ?>

                   
                    <div class="form-group">
                        <label>Resim</label>
                        <input type="file" name="resim"/>
            
                    </div>  
                     <div class="form-group">
                        <label>Hakkımızda Yazısı</label>
                        <textarea  name="yazi" class="form-control"><?= $row->yazi; ?></textarea>
                        
                    </div>  
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Kaydet</button>
                    </div>
  

                    </form>
                    <img src="../assets/upload/<?= $row->resim ?>" alt="" height="200">
                    
                </div>

                    </div>
                </div>
            </div>
        </div>

    </section>

  <?php
  if ($_POST) {
    if ($_FILES["resim"]["name"]){
        $resimadi = $_FILES["resim"]["name"];
    $resimyolu = "../assets/upload/". $resimadi;

    if(move_uploaded_file($_FILES["resim"]["tmp_name"],$resimyolu)){
        $guncelle = $db->prepare("UPDATE hakkimizda SET 
            resim =:resim,
            yazi =:yazi
            WHERE id=:id");
        $guncelle->execute([
            "resim" => $resimadi,
            "yazi"  => $_POST["yazi"],
            "id"    => 1
            ]); 
    if ($guncelle) {
          header("Location:hakkimda.php?durum=ok");
      }else{
        header("Location:hakkimda.php?durum=ok");
      }  
   }
    }else{


   
        $guncelle = $db->prepare("UPDATE hakkimizda SET 
            
            yazi =:yazi
            WHERE id=:id");
        $guncelle->execute([
           
            "yazi"  => $_POST["yazi"],
            "id"    => 1
            ]); 
    if ($guncelle) {
          header("Location:hakkimda.php?durum=ok");
      }else{
        header("Location:hakkimda.php?durum=ok");
      }  
   }
}
  
   ?>

    <!-- /.content -->
<?php include 'include/footer.php'; ?>
