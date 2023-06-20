export const darkMode = () => {
    if (localStorage.getItem('vipp-theme') == 'light-mode') {
        document.body.classList.add('light-mode');
    }

    document.querySelectorAll('#theme-toggle').forEach( btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                return localStorage.setItem('vipp-theme', 'light-mode');
            }
            localStorage.removeItem('vipp-theme');
        })
    })
}