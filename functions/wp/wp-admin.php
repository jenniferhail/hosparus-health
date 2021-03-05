<?php
    function fontawesome_icons() {
        echo '<script src="https://kit.fontawesome.com/18e4650c23.js"></script>';
    }

    function admin_styles() {
        echo '
            <style>
                #adminmenu #menu-posts-events .wp-menu-image:before {
                    content: "\f073";
                    font-family: "Font Awesome 5 Pro" !important;
                    font-size: 18px !important;
                    font-weight: 900;
                }

                #adminmenu #menu-posts-products .wp-menu-image:before {
                    content: "\f7a1";
                    font-family: "Font Awesome 5 Pro" !important;
                    font-size: 18px !important;
                    font-weight: 900;
                }

                #adminmenu #menu-posts-recipes .wp-menu-image:before {
                    content: "\f561";
                    font-family: "Font Awesome 5 Pro" !important;
                    font-size: 18px !important;
                    font-weight: 900;
                }
            </style>
        ';
    }
