
export const lazyLoading = () => {

    const lazyImages = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver(entries => {
        console.log(entries);
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    })
}