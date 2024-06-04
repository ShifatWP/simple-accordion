// jQuery(document).ready(function($) {
//     //BEGIN
//     $(".accordion__title").on("click", function(e) {
//         e.preventDefault();
//         var $this = $(this);

//         if (!$this.hasClass("accordion-active")) {
//             $(".accordion__content").slideUp(400);
//             $(".accordion__title").removeClass("accordion-active");
//             $('.accordion__arrow').removeClass('accordion__rotate');
//         }

//         $this.toggleClass("accordion-active");
//         $this.next().slideToggle();
//         $('.accordion__arrow', this).toggleClass('accordion__rotate');
//     });
//     //END
// });
(function($) {
    $(document).ready(function() {
        // Function to handle accordion functionality
        function handleAccordion() {
            $(".accordion__title").off("click").on("click", function(e) {
                e.preventDefault();
                var $this = $(this);

                if (!$this.hasClass("accordion-active")) {
                    $(".accordion__content").slideUp(400);
                    $(".accordion__title").removeClass("accordion-active");
                    $('.accordion__arrow').removeClass('accordion__rotate');
                }

                $this.toggleClass("accordion-active");
                $this.next().slideToggle();
                $('.accordion__arrow', this).toggleClass('accordion__rotate');
            });
        }

        // Run on initial load
        handleAccordion();

        // Hook into block editor to handle dynamic content
        if (typeof wp !== 'undefined' && wp.domReady) {
            wp.domReady(function() {
                // Run handleAccordion on initial load and after each block update
                handleAccordion();

                // Detect block updates
                const { subscribe } = wp.data;

                subscribe(() => {
                    const blocks = wp.data.select('core/block-editor').getBlocks();
                    handleAccordion();
                });
            });
        }
    });
})(jQuery);
