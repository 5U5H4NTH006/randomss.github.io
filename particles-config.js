/* particles.js configuration */
document.addEventListener("DOMContentLoaded", function() {
  // Particle configuration object
  const particleConfig = {
    "particles": {
      "number": {
        "value": 199,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f64a4a"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#f64a4a",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 10,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1,
            "color": "#f64a4a"
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  // Initialize particles
  function initParticles() {
    particlesJS("particles-js", particleConfig);
  }

  // Make sure particles.js is loaded
  setTimeout(function() {
    if (typeof particlesJS !== 'undefined') {
      initParticles();
      console.log("Particles.js initialized successfully");
    } else {
      console.error("Particles.js not loaded");
      // Try to load it again
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = function() {
        console.log("Particles.js loaded dynamically");
        initParticles();
      };
      document.head.appendChild(script);
    }
  }, 500); // Added delay to ensure DOM is fully loaded
});