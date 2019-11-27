var container = document.getElementById("superbotwoman-rss-embed");
if (container) {
    var css = document.createElement('link');
    css.href = "https://superbotwoman.com/assets/css/main.css";
    css.rel = "stylesheet"
    document.getElementsByTagName('head')[0].appendChild(css);
    var script = document.createElement('script');
    script.src = "https://www.superbotwoman.com/assets/js/superbotwoman-rss-embed.js";
    document.getElementsByTagName('body')[0].appendChild(script);
}
