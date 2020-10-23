<div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <?= img(array('src' => "images/slides/s1.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
        <div class="carousel-item">
            <?= img(array('src' => "images/slides/s2.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
        <div class="carousel-item">
            <?= img(array('src' => "images/slides/s3.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Précédent</span>
    </a>
    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Suivant</span>
    </a>
</div>
<section class="">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">
                <h1>Prenons contact</h1>
                <div class="row justify-content-between">
                    <div class="col-md-6 col-sm-12">                
                        Près de la Polyclinique des II Plateaux - ENA<br>
                        Cocody - 05 BP 3141 Abidjan 05<br>
                        Abidjan - Côte d’Ivoire             
                    </div>   
                    <div class="col-md-4 col-sm-12">              
                        Tel. :(+225) 22 40 97 25<br>
                        Fax :(+225)22 40 97 19                
                    </div>  
                </div> 
            </div> 
        </div>
    </div>  
</section>

<section>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">
          
                <?= form_open('sanitations/contact') ?>
                <?php $this->load->view('includes/notification'); ?>
                <div class="form-group">
                    <input name="name" class="form-control" type="text" placeholder="NOM ET PRÉNOMS">
                </div>
                <div class="form-group">
                    <input name="email" class="form-control" type="email" placeholder="ADRESSE E-MAIL">
                </div>
                <div class="form-group">
                    <input name="object" class="form-control" type="text" placeholder="OBJET">
                </div>
                <div class="form-group">
                    <textarea name="message" class="form-control" placeholder="VOTRE MESSAGE ICI !"></textarea>                   
                </div>
                <div class="form-group">
                    <button type="submit">ENVOYER MON MESSAGE</button>
                </div>
                <?= form_close() ?>
            </div>                   
        </div>
    </div>  
</section>


