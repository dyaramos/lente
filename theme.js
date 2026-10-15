/* ==================================================
   THEME MANAGER — LENTE
   Handles Light/Dark Mode across all pages.
   Reads from localStorage and applies to body.
================================================== */

(function() {
    const THEME_KEY = 'lente_theme';

    /* ===== Get saved theme ===== */
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || 'light';
    }

    /* ===== Apply theme to body ===== */
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('theme-dark');
        } else {
            document.body.classList.remove('theme-dark');
        }
    }

    /* ===== Set theme (para sa toggle buttons) ===== */
    function setTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
    }

    /* ===== Apply agad kapag may body na ===== */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyTheme(getSavedTheme());
        });
    } else {
        applyTheme(getSavedTheme());
    }

    /* ===== Expose sa global scope ===== */
    window.lenteTheme = {
        get: getSavedTheme,
        set: setTheme,
        apply: applyTheme
    };
})();