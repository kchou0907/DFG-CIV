<div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <?= img(array('src' => "images/slides/s1.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
</div>
<section class="">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">
                <h1>Ménage, enregistrez-vous</h1>
                <p class="text-center">
                    Les Association Villageoises d’Epargne 
                    et Crédits de ménages comme outil de mise 
                    en œuvre pour une communauté solidaire et 
                    responsable de son bien-être. Seul nous pouvons 
                    aller très vite mais ensemble nous allons loin.
                </p>
            </div> 
        </div>
    </div>  
</section>

<section>
    <div class="container">
        <div class="row justify-content-center">

            <div class="col-md-7 col-sm-12">           
                <?= form_open('', array('class' => "needs-validation", "novalidate")) ?>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label for="nom">Nom de la famille</label>
                        <input type="text" name="nom" class="form-control form-control-lg form-control-sm" id="nom" placeholder="Nom de famille" required>
                    </div>
                    <div class="form-group col-md-7">
                        <label for="prenom">Prénoms</label>
                        <input type="text" name="prenom" class="form-control form-control-lg form-control-sm" id="prenom" placeholder="Vos prénoms"required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="taille">Taille de la famille</label>
                        <input type="number" name="taille" class="form-control form-control-lg form-control-sm" id="taille" placeholder="0"required>
                    </div>

                    <div class="form-group col-md-8">
                        <label for="propriétaire">Êtes-vous propriétaire ?</label>
                        <select name="proprietaire" class="form-control form-control-sm form-control-lg" id="proprietaire" required>
                            <option value="">Choisir votre statut</option>
                            <option value="1">Propriétaire</option>            
                            <option value="0">Locataire</option> 
                        </select> 
                    </div>                   
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                        <label for="lieuHabitation">Adresse/Lieu d'habitation</label>
                        <input type="text" name="lieuHabitation" class="form-control form-control-lg form-control-sm" id="lieuHabitation" required placeholder="Quartier, rue, ...">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="telephone">Téléphone mobile</label>
                        <input type="tel" name="telephone" class="form-control form-control-lg form-control-sm" id="telephone" required placeholder="">
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit">ENREGISTRER</button>
                </div>
                <?= form_close() ?>
            </div>                   

            <div class="col-md-3 col-sm-12">
                <div class="cote-right">
                    <h4>Poser une plainte ou appreciation</h4>
                    <p>
                        Vous êtes déjà enregistrer, vous souhaitez
                        poser une plainte ou faire une appréciation<br>
                        <?= anchor('households', "Cliquez ici", array('class' => "bouton-block")) ?>
                    </p> 
                </div>
            </div>
        </div>
    </div>  
</section>


