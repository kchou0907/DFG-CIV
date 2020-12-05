<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Community Sanitation Support System | <?= $title ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <link rel="stylesheet" href="<?= base_url('assets/css/zocial.css') ?>">
        <link rel="stylesheet" href="<?= base_url('assets/css/bootstrap.min.css') ?>">
        <link rel="stylesheet" href="<?= base_url('assets/css/csss.css') ?>"> 
        <link rel="icon" type="image/x-icon" href="<?= base_url('favicon.ico') ?>">
    </head>
    <body>
        <header>   
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-4 col-sm-12">
                        <?= anchor('', img(array('src' => "images/csss-logo.png", 'class' => "logo", 'alt' => "Logo CSSS"))) ?>
                        <h1>Community<br>Sanitation<br>Support<br>System</h1> 
                    </div>                    
                    <div class="col-md-4 col-sm-12">
                        <div class="sponsors">
                            <?= img(array('src' => "images/gates-logo.jpg", 'alt' => "Logo GATES FUNDATION")) ?>
                            <?= img(array('src' => "images/care-logo.jpg", 'alt' => "Logo CARE")) ?>
                            <a class="bouton float-left" href="http://dashboard.csss-ci.com/login">
                                Connexion
                            </a> 
                        </div>
                    </div>
                </div>
            </div>         
        </header>
        <nav class="navbar  navbar-expand-lg  navbar-dark bg-csss">
            <a class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="container">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <?= anchor('sanitations', "Accueil", array('class' => $active == 'home' ? "nav-link active" : "nav-link")) ?>
                        </li>
                        <li class="nav-item">
                            <?= anchor('sanitations/about', "Qui sommes-nous ?", array('class' => $active == 'about' ? "nav-link active" : "nav-link")) ?>
                        </li>
                        <li class="nav-item">
                            <?= anchor('sanitations/project', "Le Projet", array('class' => $active == 'project' ? "nav-link active" : "nav-link")) ?>
                        </li>
                        <li class="nav-item">
                            <?= anchor('sanitations/sanitation', "Assainissement", array('class' => $active == 'sanitation' ? "nav-link active" : "nav-link")) ?>
                        </li>
                        <li class="nav-item">
                            <?= anchor('sanitations/households', "Ménages", array('class' => $active == 'households' ? "nav-link active" : "nav-link")) ?>
                        </li>
                        <li class="nav-item">
                            <?= anchor('sanitations/townhalls', "Mairies", array('class' => $active == 'townhalls' ? "nav-link active" : "nav-link")) ?>
                        </li>

                        <li class="nav-item">
                            <?= anchor('sanitations/banks', "Banques", array('class' => $active == 'banks' ? "nav-link active" : "nav-link")) ?>
                        </li>

                        <!-- <li class="nav-item">
                        <?= anchor('sanitations/suppliers', "Fournisseurs", array('class' => $active == 'suppliers' ? "nav-link active" : "nav-link")) ?>
                         </li>-->

                        <li class="nav-item">
                            <?= anchor('sanitations/contact', "Nous contacter", array('class' => $active == 'contact' ? "nav-link active" : "nav-link")) ?>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>        
        <?= $contents ?>
        <footer>
            <div class="container">
                <div class="copyright">
                    &copy; Community Sanitation Support System 2020 - Tous les droits reservés<br>
                    Un projet <a href="https://www.care-international.org/" >CARE International Côte D'Ivoire</a><br>
                    Fièrement propulsé par <a href="" >WicSoft</a><br><br>
                    <a href="https://www.facebook.com/csssci" class="zocial icon facebook">Facebook</a>
                    <a href="#" class="zocial icon youtube">Youtube</a>
                    <a href="#" class="zocial icon twitter">Twitter</a>
                </div>
            </div>

        </footer>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="<?= base_url('assets/js/bootstrap.min.js') ?>"></script>    
    </body>
</html>
