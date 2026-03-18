(function () {
  var KEY = 'lang';

  function apply(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'ja';
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (!el.dataset.ja) el.dataset.ja = el.innerHTML;
      el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.ja;
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    // メニュー内リンクをタップしたら閉じる
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  function init() {
    var lang = localStorage.getItem(KEY) || 'ja';
    apply(lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        localStorage.setItem(KEY, btn.dataset.lang);
        apply(btn.dataset.lang);
      });
    });
    initNav();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
