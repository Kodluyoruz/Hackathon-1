
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
    $anasayfa = $db->prepare("SELECT * FROM anasayfa WHERE id=:id");
    $anasayfa->execute(["id"=>1]);

    $row = $anasayfa->fetch(PDO::FETCH_OBJ);
    ?>

    <!-- Main content -->
    <section class="content">
        <div class="col-md-12">
            <div class="row">
                <div class="box">
                    <div class="box-header">
                        Anasayfa Ayarları
                </div>
                <!-- /.col -->
                <div class="box-body">
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



                    <form action="" method="post">
                    <div class="form-group">
                        <label>Yazı başlık</label>
                        <textarea  name="yazi1" class="form-control"><?= $row->yazi1; ?></textarea>
                        
                    </div> 
                    <div class="form-group">
                        <label>Yazı Açıklama</label>
                        <textarea  name="yazi2" class="form-control"><?= $row->yazi2; ?></textarea>
            
                    </div>   
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Kaydet</button>
                    </div>
  

                    </form>
                    
                </div>

                    </div>
                </div>
            </div>
        </div>

    </section>

    <?php 
    if ($_POST){
        $guncelle = $db->prepare("UPDATE anasayfa SET yazi1=:yazi1, yazi2=:yazi2 WHERE id=:id");
        $guncelle->execute([
         "yazi1" =>$_POST["yazi1"],
         "yazi2" =>$_POST["yazi2"],   
        "id" => 1
        ]);
    

        if ($guncelle) {
            header("location=anasayfa.php?durum=ok");
            }else{
            header("location=anasayfa.php?durum=no");
        }
    }
    ?>
    <!-- /.content -->
<?php include 'include/footer.php'; ?>
