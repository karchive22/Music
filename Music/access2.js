// access.js — cookie check + new‑tab/direct URL protection

(function () {

    // --- COOKIE CHECK ---
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    }

    const unlocked =
        getCookie("quizPassed") === "true" ||
        getCookie("quizOverride") === "true";

    // If not unlocked → ALWAYS redirect to quiz
    if (!unlocked) {
        window.location.href = "../quiz.html";
        return;
    }

    // --- NEW TAB / DIRECT URL CHECK ---
    const cameFromIndex =
        document.referrer.includes("/Music/index.html") ||
        document.referrer.endsWith("/Music/");

    // If opened in new tab, typed URL, or came from outside:
    if (!cameFromIndex) {
        window.location.href = "/Music/index.html";
        return;
    }

})();
