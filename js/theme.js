const switchEls = [
    document.body, document.querySelector('header'),
    document.querySelector("footer"),
    document.querySelector(".itemsContainer"),
    document.querySelector(".cartContainer")
]

let darkmode = false;

export function toggleTheme() {
    switchEls.forEach(el=>{
        el.classList.toggle('dark');
    })
    darkmode = !darkmode;
    

    if (darkmode) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

export function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme == 'dark') {
        switchEls.forEach(el=>{
            el.classList.toggle('dark');
        })
        darkmode = true;
    }
}