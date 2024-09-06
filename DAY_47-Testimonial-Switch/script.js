const testimonials = [
    {
        text: "Ce produit a changé ma vie ! Grâce à lui, j'ai pu améliorer ma productivité et atteindre mes objectifs professionnels. Je ne peux que recommander ce service à tout le monde qui cherche à optimiser son temps et ses efforts.",
        image: "https://via.placeholder.com/60/FF5733/FFFFFF?text=J",
        name: "Jean Dupont",
        profession: "Développeur Web"
    },
    {
        text: "Un service exceptionnel et rapide. L'équipe a été très réactive à mes demandes et m'a fourni des solutions sur mesure. Je suis vraiment impressionnée par la qualité du support client et je me sens soutenue dans mes projets.",
        image: "https://via.placeholder.com/60/33FF57/FFFFFF?text=A",
        name: "Alice Martin",
        profession: "Designer"
    },
    {
        text: "Je suis très satisfait de mon achat. Le produit a dépassé mes attentes et a réellement apporté une valeur ajoutée à mon quotidien. Je n'hésiterai pas à revenir pour d'autres achats à l'avenir.",
        image: "https://via.placeholder.com/60/3357FF/FFFFFF?text=M",
        name: "Marc Petit",
        profession: "Entrepreneur"
    }
];


let currentIndex = 0;
const testimonialText = document.getElementById("testimonial-text");
const testimonialImage = document.getElementById("testimonial-image");
const testimonialName = document.getElementById("testimonial-name");
const testimonialProfession = document.getElementById("testimonial-profession");
const progress = document.getElementById("progress");



function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    testimonialText.innerText = testimonial.text;
    testimonialImage.src = testimonial.image;
    testimonialName.innerText = testimonial.name;
    testimonialProfession.innerText = testimonial.profession;

    currentIndex = (currentIndex + 1) % testimonials.length;
}

let width = 0;

setInterval(() => {
    if (width >= 100) {
        width = 0;
        updateTestimonial();
    } else {
        width++;
        progress.style.width = width + '%';
    }
}, 100); // Change testimonial every 10 seconds