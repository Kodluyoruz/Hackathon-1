<template>
<div class="container mt-4">
  <div class="row">
    <div class="col-6 offset-3 text-center">
      <h2>Sık Sorulan Sorular</h2>
    </div>
    <div class="col-8 offset-2">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left text-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Backend gibi herhangi bir teknoloji kullanabilir miyim?
              </button>
            </h2>
          </div>

          <div id="collapseOne" class="collapse show text-dark" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              Evet. Her bir takım için backend veya herhangi bir teknoloji kullanmaları tamamen serbest olup puanlamada ek olarak avantaj sağlayacağından emin olabilirsiniz. Fakat backend veya web frameworklerinin olmaması takımınızı bu etkinlikte elemez.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
              <button class="btn btn-link btn-block text-left collapsed text-dark" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Siteye yukarıda belirtilmeyen fakat eklenmesi gerektiğini düşündüğüm bazı detayları ekleyebilir miyim?
              </button>
            </h2>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              Tabii ki. Kodluyoruz Hackathon tamamen yeni fikirlere ve ayrıcalıklara özen gösteren ve herkesin aklında olanları kodlara dökmek için tamamen serbest olduğu bir etkinliktir.
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

