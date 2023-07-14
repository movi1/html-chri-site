document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            'https://source.unsplash.com/1600x900/?beach',
            'https://source.unsplash.com/1600x900/?cat',
            'https://source.unsplash.com/1600x900/?dog',
            'https://source.unsplash.com/1600x900/?lego',
            'https://source.unsplash.com/1600x900/?textures&patterns'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length){
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
})
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("text-yellow-500");
  }
});




