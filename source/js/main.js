'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var navigation = document.querySelector('.page-header__navigation');

  pageHeader.classList.remove('page-header--nojs');

  function openCloseMenu(header, nav) {
    if (header.classList.contains('page-header--closed')) {
      header.classList.remove('page-header--closed');
      header.classList.add('page-header--opened');
      nav.classList.add('page-header__menu-show');

    } else {
      header.classList.add('page-header--closed');
      header.classList.remove('page-header--opened');
      nav.classList.remove('page-header__menu-show');
    }
  }

  function onOpenMenu() {
    openCloseMenu(pageHeader, navigation);
  }

  headerToggle.addEventListener('click', onOpenMenu);

})();
