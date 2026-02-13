// Fade animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// GOOGLE SHEETS INTEGRATION
const scriptURL = "https://script.google.com/macros/s/AKfycbz27knXWj-VSVIaebfjqa6yrP0p_B72zvQfZXffs2JXe8T9vWE9s5aOOirUZ7uRYNzh/exec";

document.getElementById("deliveryForm").addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(e.target)})
    .then(response => alert("Delivery request submitted successfully!"))
    .catch(error => alert("Error! Please try again."));
});
