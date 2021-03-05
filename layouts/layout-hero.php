<?php
    $hero_style = get_sub_field('hero_style');
    $image_1 = get_sub_field('image_1');
    $image_2 = get_sub_field('image_2');
    $content = get_sub_field('content');

    $link_1 = get_sub_field('link_1');
    $link_2 = get_sub_field('link_2');

    $classes = 'layout hero ' . $hero_style;
?>

<section id="<?php echo $layout_index; ?>" class="<?php echo $classes; ?>">
    <?php
        switch ($hero_style) {
            case 'style-1':
                require('styles/hero-style-1.php');
                break;
            case 'style-2':
                require('styles/hero-style-2.php');
                break;
            case 'style-3':
                require('styles/hero-style-3.php');
                break;
            case 'style-4':
                require('styles/hero-style-4.php');
                break;
            default:
                // code...
                break;
        }
    ?>
</section>
