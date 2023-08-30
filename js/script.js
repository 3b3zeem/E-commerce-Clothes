const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    console.log(scrollValue);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#088178 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

$(document).ready(function () {
    $(".cont").each(function () {
        var $topElement = $(this).find(".top");
        var $botElement = $(this).find(".bot");

        $topElement.click(function () {
            $botElement.slideToggle("slow");
        });
    });
});
