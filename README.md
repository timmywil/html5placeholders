*Version: 1.0, Last updated: 9/27/2010*

Demo         - <a href="http://timmywillison.com/samples/outofplace/">http://timmywillison.com/samples/outofplace/</a><br/>
GitHub       - <a href="http://github.com/timmywil/html5placeholders">http://github.com/timmywil/html5placeholders</a><br/>
Source       - <a href="http://github.com/timmywil/html5placeholders/raw/master/jquery.outofplace.js">http://github.com/timmywil/html5placeholders/raw/master/jquery.outofplace.js</a> (3.2kb)<br/>
(Minified)   - <a href="http://github.com/timmywil/html5placeholders/raw/master/jquery.outofplace.min.js">http://github.com/timmywil/html5placeholders/raw/master/jquery.outofplace.min.js</a> (820b)</br/>

License

Copyright (c) 2010 timmy willison<br/>
Dual licensed under the MIT and GPL licenses.<br/>
<a href="http://timmywillison.com/license/">http://timmywillison.com/license/</a>

Support and Testing

Versions of jQuery and browsers this was tested on.

jQuery Versions - 1.3.0-1.4.2
Browsers Tested - Internet Explorer 6-8, Firefox 2-3.7, Safari 3-5,<br/>
Chrome 4-5, Opera 9.6-10.5.

Release History

1.0   - (9/27/2010) Initial release

*HTML5 placeholders across all browsers*

<h1>ABOUT OUT OF PLACE</h1>

The purpose of this plugin is to be able to put your placeholders in the HTML5 placeholder attribute and have it work in IE6.  There are several advantages to this.  First, you get to use HTML5.  Second, you can insert values (perhaps you already know what the value of a field should be) into the value attribute without it getting treated like a placeholder by some function you wrote to fake placeholders.  Third, this plugin has even more functionality than the default HTML5 placeholder attribute.  It gives you a class to add placeholder styles.  By default, Safari and Firefox have different default colors for placeholders.  With this plugin, you simply put what color you want placeholder text to be in your own css without worrying about browser-specific selectors.  Plus, you can add other styles when that class is present (which is when the field is blurred).

<h1>PLUGIN USAGE</h1>

Javascript

<pre>
$('input[placeholder], textarea[placeholder]').outOfPlace();
</pre>

Then, your HTML for all browsers will look like this:
<pre>
&lt;input type=&quot;text&quot; placeholder=&quot;Name&quot;/&gt;
</pre>

Your CSS will look something like this:
<pre>
.place {
    color: #666;
}
</pre>

<h3>Available options</h3>

<pre>
$('input[placeholder], textarea[placeholder]').outOfPlace({
    
    // Gives you control over the submit function if needed
    // The default function removes the placeholder before
    // submitting the form in case the field is not required client-side
    // This takes care of interfering with any server validation
    submit: function () {
        $(this).find('input, textarea').each(function () {
            var $input = $(this);
            if($input.val() == $input.data('placeholder'))
                $input.val('');
        });
        return true;
    },

    // The placeholder class for setting
    // placeholder styles in your own css
    // e.g. input.place { color: #666666; }
    placeholderClass: 'place'
});
</pre>