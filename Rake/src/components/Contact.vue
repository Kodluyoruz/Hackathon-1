<template>
<div class="container mt-4 border p-3">
  <div class="row">
    <div class="col-12 text-center">
      <h1>İletişim</h1>
    </div>
    <div class="col-8 offset-2">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Ad Soyad</label>
          <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Mesajınız</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-orange">Submit</button>
      </form>
    </div>
    <div class="col-6 text-right mt-4">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6019.774373934914!2d28.972274000000002!3d41.027724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1609c6e2b7154d9f!2zxLBCQiBaZW1pbiDEsHN0YW5idWw!5e0!3m2!1sen!2sus!4v1609000454623!5m2!1sen!2sus" width="400" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div class="col-6 mt-4">
      <p><strong>E-posta:</strong> info@kodluyoruz.org</p>

      <p>
        <strong>Adres:</strong> Zemin İstanbul

      Şahkulu, Şişhane Metro Durağı, Meşrutiyet Cd. No:125, 34421 Beyoğlu/İstanbul
      </p>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  .btn-orange{
    background-color: #FF8A4C;
    color:white;
  }
</style>