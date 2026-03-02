(function() {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    const unlocked = getCookie("quizPassed") === "true" || getCookie("quizOverride") === "true";

    if (!unlocked) {
        window.location.href = "/quiz.html";
    }
})();
