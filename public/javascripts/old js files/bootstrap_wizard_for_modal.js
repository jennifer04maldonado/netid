//This plugin is used to create the click function for the modal when you create a new persona on the dashboard
$(document).ready(function() {
    $('.rootwizard').bootstrapWizard({
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('.rootwizard').find('.bar').css({
                width: $percent + '%'
            });

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $('.rootwizard').find('.pager .next').hide();
                $('.rootwizard').find('.pager .finish').show();
                $('.rootwizard').find('.pager .finish').removeClass('disabled');
            } else {
                $('.rootwizard').find('.pager .next').show();
                $('.rootwizard').find('.pager .finish').hide();
            }
        }
    });
    $('.rootwizard .finish').click(function() {
        $('.rootwizard').find("a[href*='tab1']").trigger('click');
    });
    $('.selectpicker').selectpicker();
});
