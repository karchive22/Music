(function() {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    const unlocked = getCookie("quizPassed") === "true" || getCookie("quizOverride") === "true";

    if (!unlocked) {
        // Works locally AND on GitHub Pages
        window.location.href = window.location.origin + window.location.pathname.replace(/\/Music\/.*/, "/Music/quiz.html");
    }
})();
