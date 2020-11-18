'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = document.querySelector('.page-header__toggle');
  var navigation = document.querySelector('.page-header__navigation');

  pageHeader.classList.remove('page-header--nojs');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
      navigation.classList.add('page-header__menu-show');
      // navigation.classList.remove('page-header__menu-close');

    } else {
      pageHeader.classList.add('page-header--closed');
      pageHeader.classList.remove('page-header--opened');
      navigation.classList.remove('page-header__menu-show');
      // navigation.classList.add('page-header__menu-close');
    }
  });
})();
