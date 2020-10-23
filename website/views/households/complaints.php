<section>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">
                <h1>Bienvenue <?= $this->session->userdata('name') ?></h1>
                <p class="text-center">
                    Veuillez saisir votre plainte ou appréciation
                </p>           
            </div>                   
        </div>
    </div>
</section>
<section  class="align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6 col-sm-12">
                <?php $this->load->view('includes/notification'); ?>
                <?= form_open('') ?>
                <input type="hidden" name="householdId" value="<?= $this->session->userdata('id') ?>">
                <div class="form-group">
                    <textarea name="complaint" id="complaint" class="form-control" placeholder="Votre plainte ou appréciation ici"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit">Enrégistrer</button>
                </div>
                <?= form_close() ?>
            </div>

        </div>
    </div>
</section>