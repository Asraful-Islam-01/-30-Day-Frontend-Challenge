//simple function to toggle theme

function toggleTheme() {
    const body = document.body;
    const themeName = document.getElementById("theme-name");

    if (body.classList.contains("dark")) {
        //switch to light mode
        body.classList.remove("dark");
        themeName.textContent = "Light Mode";
    } else {
        //switch to dark mode
        body.classList.add("dark");
        themeName.textContent = "Dark Mode";
    }
}

