Ecwid.OnAPILoaded.add(function (page) {
  // console.log("Ecwid storefront JS API has loaded");

  // // Product details page is opened
  // // Change value of select in DOM
  // document.getElementById("form-control__radio---340967026").value = 'XLarge';

  // // At this moment the value was changed, but Ecwid doesn't know about it. So the changes are not applied yet
  // // Send 'change' event to Ecwid to record the change
  // document.getElementById("form-control__radio---340967026").dispatchEvent(new Event('change'));

  // // Now if a customer adds this product to cart, it will be added with this user selection  
  // el.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));

  // Ecwid.OnPageLoaded.add(function (page) {
  //   if (page.type == 'PRODUCT') {
  //     console.log("Current page is of type: " + page.type);
  //   }
  // });
  

  // var element = jQuery("div[class = form-control__select ]");
  // console.log(element);

  console.log("testing");
  console.log(page);
  console.log(page.type);
  console.log("Current page is of type: " + page.type);


});

// ______________________________________________________________

//   window.ec = window.ec || Object();
//   window.ec.storefront = window.ec.storefront || Object();
//   window.ec.storefront.product_details_show_product_name = false; 
//   Ecwid.refreshConfig();

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
