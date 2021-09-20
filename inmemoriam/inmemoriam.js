Ecwid.OnPageLoaded.add(function (page) {

  function hide(classname) {
    //gegeven een classname, hide het element
    document.getElementsByClassName(classname)[0].style.display = 'none';
  }

  function show(classname) {
    //gegeven een classname, show het element
    document.getElementsByClassName(classname)[0].style.display = 'block';
  }

  function logic() {
    console.log("in event listener loop");

    // check of rouwkaartjes/lintje gewild is
    var extra = document.querySelector('[aria-label="Luxe kaartje / Rouwlint*"]');

    if (extra.value == "Geen") {
      console.log("Geen");
      hide(classname_luxekaartje);
      hide(classname_rouwlint_1);
      hide(classname_rouwlint_2);
      hide(classname_rouwlint_3);
    }

    if (extra.value == "Luxe kaartje") {
      console.log("Rouwkaartje");
      show(classname_luxekaartje);
      hide(classname_rouwlint_1);
      hide(classname_rouwlint_2);
      hide(classname_rouwlint_3);
    }

    if (extra.value == "Luxe rouwlint [2 stuks]") {
      hide(classname_luxekaartje);
      show(classname_rouwlint_1);
      show(classname_rouwlint_2);
      hide(classname_rouwlint_3);
    }

    if (extra.value == "Luxe rouwlint [3 stuks]") {
      hide(classname_luxekaartje);
      show(classname_rouwlint_1);
      show(classname_rouwlint_2);
      show(classname_rouwlint_3);
    }
  }

  // if (page.type == "PRODUCT") {

  //   console.log("in product loop");

  //   //classnames van de <div> elementen die zowel Label als Select/Text bevatten van opties
  //   classname_luxekaartje = "details-product-option--Tekst-Luxe-kaartje002a";
  //   classname_rouwlint_1 = "details-product-option--Tekst-op-rouwlint-1002a";
  //   classname_rouwlint_2 = "details-product-option--Tekst-op-rouwlint-2002a";
  //   classname_rouwlint_3 = "details-product-option--Tekst-op-rouwlint-3002a";

  //   //hide alles op het begin iig (straks eigenlijk netjes in de CSS doen, maar voor nu dit)
  //   hide(classname_luxekaartje);
  //   hide(classname_rouwlint_1);
  //   hide(classname_rouwlint_2);
  //   hide(classname_rouwlint_3);

  //   document.querySelector('[aria-label="Luxe kaartje / Rouwlint*"]').addEventListener("change", logic);

  //   // Testing functioning of eventlistener
  //   // Only fires ONCE? because OnPageLoaded only does so once? does it overwrite what's done here?
  //   document.addEventListener("click", console.log("you clicked"));
  // }
});

Ecwid.OnProductOptionsChanged.add(function () {

  console.log("onproductoptionschanged has fired");

  function hide(classname) {
    //gegeven een classname, hide het element
    document.getElementsByClassName(classname)[0].style.display = 'none';
  }

  function show(classname) {
    //gegeven een classname, show het element
    document.getElementsByClassName(classname)[0].style.display = 'block';
  }

  //classnames van de <div> elementen die zowel Label als Select/Text bevatten van opties
  classname_luxekaartje = "details-product-option--Tekst-Luxe-kaartje002a";
  classname_rouwlint_1 = "details-product-option--Tekst-op-rouwlint-1002a";
  classname_rouwlint_2 = "details-product-option--Tekst-op-rouwlint-2002a";
  classname_rouwlint_3 = "details-product-option--Tekst-op-rouwlint-3002a";

  //hide alles op het begin iig (straks eigenlijk netjes in de CSS doen, maar voor nu dit)
  hide(classname_luxekaartje);
  hide(classname_rouwlint_1);
  hide(classname_rouwlint_2);
  hide(classname_rouwlint_3);

  // check of rouwkaartjes/lintje gewild is
  var extra = document.querySelector('[aria-label="Luxe kaartje / Rouwlint*"]');

  console.log("extra value = " + extra.value);

  if (extra.value == "Geen") {
    console.log("Geen");
    hide(classname_luxekaartje);
    hide(classname_rouwlint_1);
    hide(classname_rouwlint_2);
    hide(classname_rouwlint_3);
  } else if (extra.value == "Luxe kaartje") {
    console.log("Rouwkaartje");
    show(classname_luxekaartje);
    hide(classname_rouwlint_1);
    hide(classname_rouwlint_2);
    hide(classname_rouwlint_3);
  } else if (extra.value == "Luxe rouwlint [2 stuks]") {
    hide(classname_luxekaartje);
    show(classname_rouwlint_1);
    show(classname_rouwlint_2);
    hide(classname_rouwlint_3);
  } else if (extra.value == "Luxe rouwlint [3 stuks]") {
    hide(classname_luxekaartje);
    show(classname_rouwlint_1);
    show(classname_rouwlint_2);
    show(classname_rouwlint_3);
  }
});


  // // Product details page is opened
  // // Change value of select in DOM
  // document.getElementById("form-control__radio---340967026").value = 'XLarge';

  // // At this moment the value was changed, but Ecwid doesn't know about it. So the changes are not applied yet
  // // Send 'change' event to Ecwid to record the change
  // document.getElementById("form-control__radio---340967026").dispatchEvent(new Event('change'));

  // // Now if a customer adds this product to cart, it will be added with this user selection  
  // el.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));




//   console.log("testing inside loop");
//   console.log(document);
//   console.log(document.querySelector('[aria-label="Luxe kaartje / Rouwlint*"]'));
// });






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
