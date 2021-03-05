<?php
    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    require_once dirname(__FILE__) . '/functions/helpers.php';

    // =========================================================================
    // WORDPRESS HOOKS AND FUNCTIONS
    // =========================================================================
    require_once dirname(__FILE__) . '/functions/wp/base.php';
    require_once dirname(__FILE__) . '/functions/wp-hooks.php';

    // =========================================================================
    // CUSTOM TAXONOMIES
    // =========================================================================
    require_once dirname(__FILE__) . '/functions/taxonomies/taxonomy-event-categories.php';
    require_once dirname(__FILE__) . '/functions/taxonomies/taxonomy-event-locations.php';
    require_once dirname(__FILE__) . '/functions/taxonomies/taxonomy-faq-topics.php';
    require_once dirname(__FILE__) . '/functions/taxonomies/taxonomy-positions.php';

    // =========================================================================
    // CUSTOM POST TYPES
    // =========================================================================
    // Pushing changes.
    // require_once dirname(__FILE__) . '/functions/custom-post-types/cpt-careers.php';
    require_once dirname(__FILE__) . '/functions/custom-post-types/cpt-events.php';
    require_once dirname(__FILE__) . '/functions/custom-post-types/cpt-faqs.php';
    require_once dirname(__FILE__) . '/functions/custom-post-types/cpt-locations.php';
    require_once dirname(__FILE__) . '/functions/custom-post-types/cpt-people.php';
