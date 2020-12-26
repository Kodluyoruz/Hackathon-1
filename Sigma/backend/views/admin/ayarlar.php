
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
    $ayarlar = $db->prepare("SELECT * FROM ayarlar WHERE id=:id");
    $ayarlar->execute(["id"=>0]);

    $row = $ayarlar->fetch(PDO::FETCH_OBJ);
    ?>

    <!-- Main content -->
    <section class="content">
        <div class="col-md-12">
            <div class="row">
                <div class="box">
                    <div class="box-header">
                        Ayarlar
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
                        <label>Site Başlık</label>
                        <textarea  name="sitebaslik" class="form-control"><?= $row->sitebaslik; ?></textarea>
                        
                    </div> 
                    <div class="form-group">
                        <label>Site Keywords</label>
                        <textarea  name="sitekeywords" class="form-control"><?= $row->sitekeywords; ?></textarea>
            
                    </div>
                    <div class="form-group">
                        <label>Site Description</label>
                        <textarea  name="sitedescription" class="form-control"><?= $row->sitedescription; ?></textarea>
                        
                    </div>
                    
                    <div class="form-group">
                        <label>Github</label>
                        <textarea  name="sitegithub" class="form-control"><?= $row->sitegithub; ?></textarea>
                        
                    </div>
                    <div class="form-group">
                        <label>İnstagram</label>
                        <textarea  name="siteinstagram" class="form-control"><?= $row->siteinstagram; ?></textarea>
                        
                    </div>
                    <div class="form-group">
                        <label>Mail</label>
                        <textarea  name="sitemail" class="form-control"><?= $row->sitemail; ?></textarea>
                        
                    </div>
                    <div class="form-group col-md-6">
                        <label>Ad Soyad</label>
                        <textarea  name="siteadsoyad" class="form-control"><?= $row->siteadsoyad; ?></textarea>
                        
                    </div>   
                    <div class="form-group col-md-6">
                        <label>Meslek</label>
                        <textarea  name="sitemeslek" class="form-control"><?= $row->sitemeslek; ?></textarea>
                        
                    </div>
                    <div class="form-group col-md-6">
                        <label>Kullanıcı adı</label>
                        <textarea  name="siteuser" class="form-control"><?= $row->siteuser; ?></textarea>
                        
                    </div>
                    <div class="form-group col-md-6">
                        <label>Password</label>
                        <textarea  name="sitepass" class="form-control"><?= $row->sitepass; ?></textarea>
                        
                    <div class="form-group col-md-12">
                        <label>Resim</label>
                        <input type="file" name="resim"/>

            
                    </div> 
                    <div class="form-group col-md-12">
                        <label>Site durum</label>
                        <select class="form-control" name="sitedurum">
                        <option value="1">Açık</option>
                        <option value="0">Kapalı</option>
                        </select>
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
  if ($_POST) {
    if ($_FILES["resim"]["name"]){
        $resimadi = $_FILES["resim"]["name"];
    $resimyolu = "../assets/upload/". $resimadi;

    if(move_uploaded_file($_FILES["resim"]["tmp_name"],$resimyolu)){
       $guncelle = $db->prepare("UPDATE ayarlar SET sitebaslik=:sitebaslik,sitekeywords=:sitekeywords,sitedescription=:sitedescription,sitedurum=:sitedurum,siteadsoyad=:siteadsoyad,sitemeslek=:sitemeslek,sitegithub=:sitegithub,siteinstagram=:siteinstagram,sitemail=:sitemail,siteuser=:siteuser,sitepass=:sitepass,siteresim=:siteresim WHERE id=:id");
        $guncelle->execute([
         "sitebaslik" =>$_POST["sitebaslik"],
         "sitekeywords" =>$_POST["sitekeywords"], 
         "sitedescription" =>$_POST["sitedescription"],
         "sitedurum" =>$_POST["sitedurum"],  
         "siteadsoyad" =>$_POST["siteadsoyad"],
         "sitemeslek" =>$_POST["sitemeslek"], 
         "sitegithub" =>$_POST["sitegithub"],
         "siteinstagram" =>$_POST["siteinstagram"], 
         "sitemail" =>$_POST["sitemail"],
         "siteuser" =>$_POST["siteuser"],
         "sitepass" =>$_POST["sitepass"], 
         "siteresim" =>$resimadi,
          
        "id" => 0
        ]);


         if ($guncelle) {
          header("Location:ayarlar.php?durum=ok");
      }else{
        header("Location:ayarlar.php?durum=ok");
      }
   }
    }else{


   
       $guncelle = $db->prepare("UPDATE ayarlar SET sitebaslik=:sitebaslik,sitekeywords=:sitekeywords,sitedescription=:sitedescription,sitedurum=:sitedurum,siteadsoyad=:siteadsoyad,sitemeslek=:sitemeslek,sitegithub=:sitegithub,siteinstagram=:siteinstagram,sitemail=:sitemail,siteuser=:siteuser,sitepass=:sitepass WHERE id=:id");
        $guncelle->execute([
         "sitebaslik" =>$_POST["sitebaslik"],
         "sitekeywords" =>$_POST["sitekeywords"], 
         "sitedescription" =>$_POST["sitedescription"],
         "sitedurum" =>$_POST["sitedurum"],  
         "siteadsoyad" =>$_POST["siteadsoyad"],
         "sitemeslek" =>$_POST["sitemeslek"], 
         "sitegithub" =>$_POST["sitegithub"],
         "siteinstagram" =>$_POST["siteinstagram"], 
         "sitemail" =>$_POST["sitemail"],
         "siteuser" =>$_POST["siteuser"],
         "sitepass" =>$_POST["sitepass"], 
         
          
        "id" => 0
        ]);


         if ($guncelle) {
          header("Location:ayarlar.php?durum=ok");
      }else{
        header("Location:ayarlar.php?durum=ok");
      }  
}
 } 
   ?>


    <!-- /.content -->
<?php include 'include/footer.php'; ?>
