document.addEventListener('DOMContentLoaded', function() {
  console.log(document.getElementById('form-control__radio---340967026').innerText);
});

console.log("Hoi Fab, we kunnen aan de slag!");


// <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
// <script type="text/javascript">
/* An HTML/Javascript code snippet for Ecwid to show/hide product options depending on a trigger(expander) option */
// if (typeof(Ecwid) == 'object') {
//   Ecwid.OnAPILoaded.add(function() {

//     var expanderOptionName = "Do_you_want_extra_options";
//     var expanderOptionFlagValue = "Yes";

//     function checkExpandableOptions() {
//       // Detect the current selection of the 'expander' option
//       var expanderOptionCurrentValue = jQuery("div[class *= ecwid-productoption-" + expanderOptionName + "] input:checked + label > span").text();

//       // Show or hide product options depending on the 'expander' option value
//       if (expanderOptionCurrentValue == expanderOptionFlagValue) {
//         // Show all options
//         jQuery('div.ecwid-productBrowser-details-optionPanel').show();

//       } else {
//         // Hide all options
//         jQuery('div.ecwid-productBrowser-details-optionPanel').hide();

//         // Show expander option
//         jQuery("div[class *= ecwid-productoption-" + expanderOptionName + "]").show();        
//       }
//     }

//     Ecwid.OnPageLoaded.add(function(page) {
//       if ('PRODUCT' == page.type) {
//         checkExpandableOptions();
       
//         // Attach a handler to the 'expander' option
//         jQuery("div[class *= ecwid-productoption-" + expanderOptionName + "] input[type=radio]").click(function() {
//           checkExpandableOptions();
//         });
//       }
//     });
//   });
// }




// </script>

// function to load jQuery
// function loadjQuery(){
//     var jq = document.createElement('script'); jq.type = 'text/javascript';
//     jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
//     document.getElementsByTagName('head')[0].appendChild(jq);
//   }
  
//   if (typeof jQuery == 'undefined') {  
//     loadjQuery();
//   } else {}

// To test most basic console output
// var publicToken = Ecwid.getAppPublicToken('my-cool-app');

// console.log(publicToken);
