/**
*   @preserve jquery.outofplace.js
*   HTML5 placeholders for all browsers
*   Copyright (c) 2010 timmy willison
*   Dual licensed under the MIT and GPL licenses.
*   http://timmywillison.com/licence/
*/

// *Version: 1.1, Last updated: 11/9/2010*
// 
// Demo         - http://timmywillison.com/samples/outofplace/
// GitHub       - http://github.com/timmywil/html5placeholders
// Source       - http://github.com/timmywil/requiredfields/raw/master/jquery.outofplace.js (3.2kb)
// (Minified)   - http://github.com/timmywil/requiredfields/raw/master/jquery.outofplace.min.js (820b)
// 
// License
// 
// Copyright (c) 2010 timmy willison
// Dual licensed under the MIT and GPL licenses.
// http://timmywillison.com/licence/
// 
// Support and Testing
// 
// Versions of jQuery and browsers this was tested on.
// 
// jQuery Versions - 1.3.0-1.4.4
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.7, Safari 3-5,
//                   Chrome 4-7, Opera 9.6-10.5.
// 
// Release History
//
// 1.1   - (11/9/2010) Checks for browser autofill to accomodate placeholder class
// 1.0   - (9/27/2010) Initial release
// 
// See README for usage

;(function ($) {
    
    // Use the HTML5 placeholder attribute at all times.
    // Validation will check that the placeholder is not
    // still the value sent if field is required
    $.fn.outOfPlace = function (opts) {

        opts = $.extend({

            // Gives you control over the submit function if needed
            // The default function removes the placeholder before
            // submitting the form in case the field is not required client-side
            submit: function () {
                $(this).find('input, textarea').each(function () {
                    var $input = $(this);
                    if( $input.val() === $input.data('placeholder') ) {
                        $input.val('');
                    }
                });
                return true;
            },

            // The placeholder class for setting
            // placeholder styles in your own css
            // e.g. input.place { color: #666666; }
            // This creates a lot more flexibility for you and
            // keeps the js lightweight
            placeClass: 'place'
        }, opts);

        /** Checks for browser autofill */
        function check_autofill ( $input ) {
            setTimeout(function() { 
                var v = $input.val();
                if ( v === $input.data('placeholder') ) {
                    $input.addClass( opts.placeClass );
                } else {
                    $input.removeClass( opts.placeClass );
                }
            }, 300);
        }
        
        return this.each(function () {
            var $input      = $(this),
                defaultText = $input.attr('placeholder') || '';

            // Set the placeholder data for future reference
            $input.data('placeholder', defaultText);

            // Attribute no longer needed
            $input.removeAttr('placeholder');

            // Focus and blurs, notice the class added and removed
            $input.focus(function () {
                if ( $input.val() === defaultText ) {
                    $input.val('').removeClass( opts.placeClass );
                }
            }).blur(function () {
                if ( $.trim($input.val()) === '' ) {
                    $input.val( defaultText ).addClass( opts.placeClass );
                }
            }).blur()
            // Bind the submit function
            .closest('form').submit( opts.submit );
            
            check_autofill( $input );
        });
    };
})(jQuery);