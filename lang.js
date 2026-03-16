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

  function init() {
    var lang = localStorage.getItem(KEY) || 'ja';
    apply(lang);
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        localStorage.setItem(KEY, btn.dataset.lang);
        apply(btn.dataset.lang);
      });
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
