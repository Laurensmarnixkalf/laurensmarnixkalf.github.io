Ecwid.OnPageLoaded.add(function (page) {

  //alles dat hierin staat ziet Ecwid.OnProductOptionsChanged niet.

});

Ecwid.OnProductOptionsChanged.add(function (productid) {



  // #################### FUNCTIES #################### //

  function hide(classname) {
    //gegeven een classname, hide het element
    document.getElementsByClassName(classname)[0].style.display = 'none';
  }

  function show(classname) {
    //gegeven een classname, show het element
    document.getElementsByClassName(classname)[0].style.display = 'block';
  }



  // #################### SET-UP #################### //

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



  // #################### MAIN #################### //

  setTimeout(function () {
    // check of rouwkaartjes/lintje gewild is
    var extra = document.querySelector('[aria-label="Luxe kaartje / Rouwlint*"]');

    console.log("extra value = " + extra.value);

    if (extra.value == "Geen") {
      console.log("Geen");
      hide(classname_luxekaartje);
      hide(classname_rouwlint_1);
      hide(classname_rouwlint_2);
      hide(classname_rouwlint_3);
    }

    if (extra.value == "Luxe kaartje (+€3.50)") {
      console.log("Rouwkaartje");
      show(classname_luxekaartje);
      hide(classname_rouwlint_1);
      hide(classname_rouwlint_2);
      hide(classname_rouwlint_3);
    }

    if (extra.value == "Luxe rouwlint [2 stuks] (+€17.50)") {
      console.log("Luxe rouwlint 2 stuks");
      hide(classname_luxekaartje);
      show(classname_rouwlint_1);
      show(classname_rouwlint_2);
      hide(classname_rouwlint_3);
    }

    if (extra.value == "Luxe rouwlint [3 stuks] (+€26.25)") {
      console.log("Luxe rouwlint 3 stuks");
      hide(classname_luxekaartje);
      show(classname_rouwlint_1);
      show(classname_rouwlint_2);
      show(classname_rouwlint_3);
    }
  }, 500);



});