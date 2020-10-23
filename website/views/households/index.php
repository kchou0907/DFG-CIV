<section class="">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">

                <h1>Ménage, connectez-vous </h1>

            </div>
        </div>
    </div>
</section>

<section  class="align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5 col-sm-12">
                <?php $this->load->view('includes/notification'); ?>
                <?= form_open('households') ?>
                <div class="form-group">
                    <input type="tel" name="phone" id="phone" class="form-control" placeholder="NUMÉRO DE TÉLÉPHONE">
              
                    <button type="submit">CONNEXION</button>
                </div>
                <?= form_close() ?>
            </div>

        </div>
    </div>
</section>

