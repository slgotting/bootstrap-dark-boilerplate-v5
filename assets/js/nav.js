
function toggleDarkMode() {
    var element = document.documentElement;
    element.classList.toggle("dark");
    changeDarkModeIcon((element.classList.contains("dark")) ? "dark" : "light");
}

// function to change the icon of the dark mode button
function changeDarkModeIcon(mode="dark") {
    var element = document.getElementById("dark-mode-toggle");
    element.innerHTML = `
        <svg class="bi" width="24" height="24">
            <use xlink:href="/static/bootstrap/node_modules/bootstrap-icons/bootstrap-icons.svg#${(mode == 'dark') ? 'cloud-moon-fill' : 'brightness-high'}"/>
        </svg>
    `;
}

document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);