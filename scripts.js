document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Testimonial carousel
  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  if (testimonialCarousel) {
    const testimonials = testimonialCarousel.querySelectorAll('.testimonial-card');
    const dots = testimonialCarousel.querySelectorAll('.dot');
    const prevBtn = testimonialCarousel.querySelector('.prev-btn');
    const nextBtn = testimonialCarousel.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Function to show testimonial by index
    function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }
    
    // Event listeners for control buttons
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= testimonials.length) {
          nextIndex = 