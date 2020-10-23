<div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
        <li data-target="#carouselIndicators" data-slide-to="3"></li>
        <li data-target="#carouselIndicators" data-slide-to="4"></li>
        <li data-target="#carouselIndicators" data-slide-to="5"></li>
    </ol>
    <div class="carousel-inner">       
        <div class="carousel-item active">
            <?= img(array('src' => "images/slides/s6.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
         <div class="carousel-item">
            <?= img(array('src' => "images/slides/s5.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
        <div class="carousel-item">
            <?= img(array('src' => "images/slides/s1.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
        <div class="carousel-item">
            <?= img(array('src' => "images/slides/s2.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
        <div class="carousel-item">
            <?= img(array('src' => "images/slides/s3.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
        </div>
        <div class="carousel-item">
            <?= img(array('src' => "images/slides/s4.jpg", 'alt' => "Slide", 'class' => "d-block w-100")) ?>
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

<section class="contexte marginTopBottom40">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">
                <h1>
                    <strong>CSSS</strong>
                    Pour un cadre de vie sain
                </h1>
                <p>
                    Les dix années de crise qu’a connue la Cote d’Ivoire ont largement 
                    entamé sa composition démographique avec une très forte densité constatée 
                    dans certaines localités eues égard à la forte pression exercée par un 
                    afflux massif de populations fuyant les zones de combats.<br>
                    Bien évidemment compte tenu de la situation, la panification du développement démographique 
                    n’a pas pu être menée convenablement. Ce qui a entraîné des installations 
                    anarchiques et la création de nouvelles cités-bidonvilles entraînant non 
                    seulement l’accroissement de la pauvreté mais surtout l’insuffisance 
                    d’infrastructures sanitaire. On note à cet effet que :            
                </p><br>

                <ul>
                    <li>60% de la population n’a pas accès à des installations </li>
                    <li>20% Défèquent à l'air </li>
                    <li>85% n’a pas accès aux services financiers</li>
                </ul>
            </div>                   
        </div>
    </div>  
</section>

<section>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-sm-12">
                <h1 class="text-center">Les grands projets réalisés</h1>
                <div class="sensibilisation">
                    <?= img(array('src' => "images/poubelle-sensibilisation.jpg", 'alt' => "Sensibilisation poubelle")) ?>
                    <h4>Sensibilisation à l'usage de la poubelle</h4>
                </div>
            </div>                   
        </div>
    </div>  
</section>

<?php $this->load->view('includes/partners'); ?>



