Ecwid.OnPageLoaded.add(function (page) {

  //alles dat hierin staat ziet Ecwid.OnProductOptionsChanged niet.

  // Hide alles op het begin
  document.getElementsByClassName("details-product-option--Tekst-Luxe-kaartje002a")[0].style.display = 'none';
  document.getElementsByClassName("details-product-option--Tekst-op-rouwlint-1002a")[0].style.display = 'none';
  document.getElementsByClassName("details-product-option--Tekst-op-rouwlint-2002a")[0].style.display = 'none';
  document.getElementsByClassName("details-product-option--Tekst-op-rouwlint-3002a")[0].style.display = 'none';
  document.getElementsByClassName("details-product-option--Kleuren-Luxe-rouwlint002a")[0].style.display = 'none';

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
  classname_kleurenrouwlint = "details-product-option--Kleuren-Luxe-rouwlint002a";



  // #################### MAIN #################### //

  // In time out van 100ms anders wordt verkeerde select waarde gelezen
  setTimeout(function () {

    // check of rouwkaartjes/lintje gewild is
    var extra = document.querySelector('[aria-label="Luxe kaartje / Rouwlint*"]');

    if (extra.value == "Geen") {
      hide(classname_luxekaartje);
      hide(classname_rouwlint_1);
      hide(classname_rouwlint_2);
      hide(classname_rouwlint_3);
      hide(classname_kleurenrouwlint);
    }

    if (extra.value == "Luxe kaartje (+€3.50)") {
      show(classname_luxekaartje);
      hide(classname_rouwlint_1);
      hide(classname_rouwlint_2);
      hide(classname_rouwlint_3);
      hide(classname_kleurenrouwlint);
    }

    if (extra.value == "Luxe rouwlint [2 stuks] (+€17.50)") {
      hide(classname_luxekaartje);
      show(classname_rouwlint_1);
      show(classname_rouwlint_2);
      hide(classname_rouwlint_3);
      show(classname_kleurenrouwlint);
    }

    if (extra.value == "Luxe rouwlint [3 stuks] (+€26.25)") {
      hide(classname_luxekaartje);
      show(classname_rouwlint_1);
      show(classname_rouwlint_2);
      show(classname_rouwlint_3);
      show(classname_kleurenrouwlint);
    }
  }, 100);

});