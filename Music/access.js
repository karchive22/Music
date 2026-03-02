// GLOBAL ACCESS CHECK — prevents URL bypass
(function() {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    const unlocked = getCookie("quizPassed") === "true" || getCookie("quizOverride") === "true";

    // Pages that NEVER require quiz
    const allowedPages = [
        "/",
        "/index.html",
        "/quiz.html",
        "/Music/SecretCode/index.html",
        "/style.css",
        "/favicon.png"
    ];

    const current = window.location.pathname;

    // If user tries to open ANY Music/ page directly → redirect
    if (!unlocked && current.startsWith("/Music/") && !allowedPages.includes(current)) {
        window.location.href = "/quiz.html";
    }
})();
