document.addEventListener('DOMContentLoaded', function() {
    const languageSwitcher = document.querySelector('.language-switcher');
    const currentLang = document.documentElement.lang;

    languageSwitcher.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            const targetLang = e.target.getAttribute('data-lang');
            if (targetLang !== currentLang) {
                // Switch to the other language version
                if (targetLang === 'en') {
                    window.location.href = 'index-en.html';
                } else if (targetLang === 'es') {
                    window.location.href = 'index.html';
                }
            }
        }
    });
});
