
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
    $calismadetay = $db->prepare("SELECT * FROM calismalar WHERE id=:gelenid");
    $calismadetay->execute(["gelenid" => $_GET["id"]]);

    $row = $calismadetay->fetch(PDO::FETCH_OBJ);
    ?>
    

    <!-- Main content -->
    <section class="content">
        <div class="col-md-12">
            <div class="row">
                <div class="box">
                    <div class="box-header">
                        Proje Ekle
                </div>
                <!-- /.col -->
                <div class="box-body">
                    <form action="" method="post" enctype="multipart/form-data">

                    <div class="form-group">
                        <label>Başlık</label>
                        <input type="text" name="baslik" class="form-control" placeholder="Başlık Giriniz" value="<?= $row->baslik ?>" />
                    </div>
                    <div class="form-group">
                        <label>resim</label>
                        <input type="file" name="resim" />
                    </div>
                    <div class="form-group">
                        <label>açıklama</label>
                       <textarea name="aciklama" class="form-control" placeholder="Açıklama Giriniz"><?= $row->aciklama ?></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Güncelle</button>
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

    if ($_POST){
        if ($_FILES["resim"]["name"]) {

          $resimAdi = $_FILES["resim"]["name"];

        $resimyolu = "../assets/upload/".$resimAdi;

        if(move_uploaded_file($_FILES["resim"]["tmp_name"],$resimyolu)){
            $ekle = $db->prepare("UPDATE calismalar SET
                baslik =:baslik,
                resim =:resim,
                aciklama =:aciklama
                WHERE id=:id");
            $ekle ->execute([
                "baslik"   => $_POST["baslik"],
                "resim"    => $resimAdi,
                "aciklama" =>$_POST["aciklama"],
                "id"       => $_GET["id"] 
                 
              ]);
            if ($ekle) {
                echo "ekleme Başarılı";
            }else{
                echo "başarısız";
            }
        }

        }
        else{ $ekle = $db->prepare("UPDATE calismalar SET
                baslik =:baslik,
                
                aciklama =:aciklama
                WHERE id=:id"
                                   );
            $ekle ->execute([
                "baslik"   => $_POST["baslik"],
              
                "aciklama" =>$_POST["aciklama"],
                "id"       => $_GET["id"] 
                
              ]);
            if ($ekle) {
                echo "ekleme Başarılı";
            }else{
                echo "başarısız";
            }

        }
    }
    ?>
    <!-- /.content -->
<?php include 'include/footer.php'; ?>
