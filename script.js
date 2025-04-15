// Main script for Sushanth's website
// Added Apr 2025

// Track page visits and clicks
let clickCount = 0;
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);

document.addEventListener('DOMContentLoaded', function() {
   // Ensure the page starts at the top when reloaded
   window.scrollTo(0, 0);
   
   // Create that cool cursor effect that follows your mouse
   const cursorGlow = document.createElement('div');
   cursorGlow.classList.add('cursor-glow');
   document.body.appendChild(cursorGlow);

   // Get nav and content elements
   const navItems = document.querySelectorAll('.nav-item');
   const contentBlocks = document.querySelectorAll('.content-block');
   const profilePicture = document.querySelector('.profile-picture-container');
   
   document.getElementById('visitCount').textContent = `Visits: ${visitCount}`;
   
   /* Shows the selected section and hides others */
   function showSection(sectionId) {
       // Hide everything first
       contentBlocks.forEach(block => {
           block.classList.remove('active-section');
       });
       
       // Remove active class from all menu items
       navItems.forEach(item => {
           item.classList.remove('active');
       });
       
       // Show just the one we want
       const targetSection = document.getElementById(sectionId);
       if (targetSection) {
           targetSection.classList.add('active-section');
           
           // Highlight the nav item too
           const targetNavItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
           if (targetNavItem) {
               targetNavItem.classList.add('active');
           }
           
           // Need my pic to always show up
           if (profilePicture) {
               profilePicture.style.display = 'flex';
               profilePicture.classList.add('profile-picture-visible');
               profilePicture.classList.remove('profile-picture-hidden');
           }
       }
   }
   
   // Make the menu items clickable
   navItems.forEach(item => {
       item.addEventListener('click', function(e) {
           e.preventDefault();
           const sectionId = this.getAttribute('data-section');
           showSection(sectionId);
           
           // Add that cool glow when clicked
           this.style.animation = 'glowPulse 0.8s';
           setTimeout(() => {
               this.style.animation = '';
           }, 800);
       });
   });

   // Start with about section showing
   showSection('about');

   // For the cursor glow effect that follows mouse
   document.addEventListener('mousemove', function(e) {
       // Move the glow to cursor position
       cursorGlow.style.left = e.clientX + 'px';
       cursorGlow.style.top = e.clientY + 'px';
       
       // Figure out what we're hovering over
       const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
       
       // Different elements get different glow styles
       if (hoveredElement) {
           // nav menu items
           if (hoveredElement.closest('.nav-item')) {
               cursorGlow.style.width = '300px';
               cursorGlow.style.height = '300px';
               cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.25) 0%, rgba(0, 0, 0, 0) 70%)';
           } 
           // my name at the top
           else if (hoveredElement.closest('.name')) {
               cursorGlow.style.width = '350px';
               cursorGlow.style.height = '350px';
               cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.3) 0%, rgba(0, 0, 0, 0) 70%)';
           }
           // social media icons
           else if (hoveredElement.closest('.social-icon')) {
               cursorGlow.style.width = '200px';
               cursorGlow.style.height = '200px';
               cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.3) 0%, rgba(0, 0, 0, 0) 60%)';
           }
           // skills items
           else if (hoveredElement.closest('.skills-list li')) {
               cursorGlow.style.width = '200px';
               cursorGlow.style.height = '200px';
               cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.2) 0%, rgba(0, 0, 0, 0) 70%)';
           }
           // any div elements
           else if (hoveredElement.closest('div')) {
               const divElement = hoveredElement.closest('div');
               
               // change glow based on what section we're in
               if (divElement.classList.contains('content-block')) {
                   cursorGlow.style.width = '300px';
                   cursorGlow.style.height = '300px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.2) 0%, rgba(0, 0, 0, 0) 70%)';
               } 
               else if (divElement.classList.contains('container')) {
                   cursorGlow.style.width = '350px';
                   cursorGlow.style.height = '350px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.18) 0%, rgba(0, 0, 0, 0) 70%)';
               }
               else if (divElement.classList.contains('results')) {
                   cursorGlow.style.width = '280px';
                   cursorGlow.style.height = '280px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.22) 0%, rgba(0, 0, 0, 0) 70%)';
               }
               else if (divElement.classList.contains('analysis-section')) {
                   cursorGlow.style.width = '320px';
                   cursorGlow.style.height = '320px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.25) 0%, rgba(0, 0, 0, 0) 75%)';
               }
               else if (divElement.classList.contains('footer-content')) {
                   cursorGlow.style.width = '270px';
                   cursorGlow.style.height = '270px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.23) 0%, rgba(0, 0, 0, 0) 70%)';
               }
               else if (divElement.classList.contains('images')) {
                   cursorGlow.style.width = '280px';
                   cursorGlow.style.height = '280px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.28) 0%, rgba(0, 0, 0, 0) 70%)';
               }
               else if (divElement.classList.contains('cv-link-container')) {
                   cursorGlow.style.width = '300px';
                   cursorGlow.style.height = '300px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.3) 0%, rgba(0, 0, 0, 0) 70%)';
               }
               // default for other divs
               else {
                   cursorGlow.style.width = '270px';
                   cursorGlow.style.height = '270px';
                   cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.15) 0%, rgba(0, 0, 0, 0) 70%)';
               }
           }
           // anything else just gets default glow
           else {
               cursorGlow.style.width = '250px';
               cursorGlow.style.height = '250px';
               cursorGlow.style.background = 'radial-gradient(circle, rgba(246, 74, 74, 0.1) 0%, rgba(0, 0, 0, 0) 70%)';
           }
       }
   });

   // make the glow effect change when scrolling
   let scrollTimeout;
   window.addEventListener('scroll', function() {
       cursorGlow.style.opacity = '0.3';
       
       clearTimeout(scrollTimeout);
       scrollTimeout = setTimeout(function() {
           cursorGlow.style.opacity = '1';
       }, 100);
   });

   // add cool effects when sections come into view
   const sections = document.querySelectorAll('.content-block');
   
   function checkSections() {
       const triggerBottom = window.innerHeight * 0.8;
       
       sections.forEach(section => {
           const sectionTop = section.getBoundingClientRect().top;
           
           if (sectionTop < triggerBottom && section.classList.contains('active-section')) {
               section.style.animation = 'pulse 1s';
               setTimeout(() => {
                   section.style.animation = '';
               }, 1000);
           }
       });
   }
   
   // run it once when page loads
   checkSections();
   
   // add glow to social links
   const socialIcons = document.querySelectorAll('.social-icon');
   socialIcons.forEach(icon => {
       icon.addEventListener('mouseenter', function() {
           this.style.textShadow = '0 0 10px rgba(246, 74, 74, 0.8)';
       });
       
       icon.addEventListener('mouseleave', function() {
           this.style.textShadow = 'none';
       });
   });
   
   // make my name look cool on hover
   const nameHeading = document.querySelector('.name');
   nameHeading.addEventListener('mouseenter', function() {
       this.style.textShadow = '0 0 10px rgba(246, 74, 74, 0.5), 0 0 20px rgba(246, 74, 74, 0.3), 0 0 30px rgba(246, 74, 74, 0.1)';
   });
   
   nameHeading.addEventListener('mouseleave', function() {
       this.style.textShadow = 'none';
   });
   
   // Enhanced Event Tracking System 
   setupEventTracking();
   setupCustomCursor();
   setupScrollButton();
   setupTextAnalysis();
   setupRickRoll();
});

// Text analyzer function
function processText() {
    // Get the text from the textarea
    const text = document.getElementById('textInput').value;
    
    // Count the words properly
    const words = text.trim().split(/\s+/).filter(word => word && !/^\s+$/.test(word));
    
    // Check if text has at least 10,000 words
    if (words.length < 10000) {
        alert("Please enter at least 10,000 words for accurate analysis!");
        return;
    }

    // Count stuff
    const numLetters = (text.match(/[A-Za-z]/g) || []).length;
    const numWords = words.length;
    const numSpaces = (text.match(/ /g) || []).length;
    const numNewlines = (text.match(/\n/g) || []).length;
    const numSpecial = (text.match(/[^A-Za-z0-9\s]/g) || []).length;

    // Big list of pronouns to check
    const pronouns = [
        // Subject pronouns
        'i', 'we', 'you', 'he', 'she', 'it', 'they',
        
        // Object pronouns
        'me', 'us', 'her', 'him', 'them',
        
        // Possessive pronouns
        'mine', 'ours', 'yours', 'hers', 'his', 'theirs',
        
        // Possessive adjectives
        'my', 'our', 'your', 'her', 'his', 'their', 'attackhelicopter', 'gay', 'urmom', // lol these aren't pronouns but whatever
        
        // Reflexive pronouns
        'myself', 'yourself', 'herself', 'himself', 'itself', 'ourselves', 'yourselves', 'themselves',
        
        // Indefinite pronouns
        'all', 'another', 'any', 'anybody', 'anyone', 'anything', 'both', 'each', 'either', 
        'everybody', 'everyone', 'everything', 'few', 'many', 'most', 'neither', 'nobody', 
        'none', 'no one', 'nothing', 'one', 'other', 'others', 'several', 'some', 'somebody', 
        'someone', 'something', 'such',
        
        // Demonstrative pronouns
        'that', 'these', 'this', 'those',
        
        // Interrogative pronouns
        'what', 'whatever', 'which', 'whichever', 'who', 'whoever', 'whom', 'whomever', 'whose',
        
        // Relative pronouns
        'as', 'that', 'what', 'whatever', 'which', 'whichever', 'who', 'whoever', 'whom', 
        'whomever', 'whose',
        
        // Old timey pronouns
        'thou', 'thee', 'thy', 'thine', 'ye',
        
        // other weird ones
        'aught', 'each other', 'idem', 'naught', 'nought', 'one another', 'ought', 'ourself',
        'suchlike', 'there', 'theirself', 'theirselves', 'themself', 'whatnot', 'whatsoever',
        'whence', 'where', 'whereby', 'wherefrom', 'wherein', 'whereinto', 'whereof', 'whereon',
        'wherever', 'wheresoever', 'whereto', 'whereunto', 'wherewith', 'wherewithal', 'whether',
        'whichsoever', 'whomso', 'whosesoever', 'whoso', 'whosoever', 'yon', 'yonder'
    ];
    
    // Lists for prepositions and articles
    const prepositions = ['about','above','across','after','against','along','among','around','at','before','behind','below','beneath','beside','between','beyond','by','despite','down','during','except','for','from','in','inside','into','like','near','of','off','on','onto','out','outside','over','past','round','since','through','throughout','to','toward','under','underneath','until','up','upon','with','within','without'];
    const articles = ['a','an'];

    // Keep track of counts
    let pronounCounts = {};
    let prepositionCounts = {};
    let articleCounts = {};

    // Initialize all counts to zero
    pronouns.forEach(p => pronounCounts[p] = 0);
    prepositions.forEach(p => prepositionCounts[p] = 0);
    articles.forEach(a => articleCounts[a] = 0);

    // Split text into words and count stuff
    const tokens = text.toLowerCase().split(/\s+/).filter(word => word && !/^\s+$/.test(word));
    tokens.forEach(word => {
        const cleanWord = word.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()"]/g,"");
        if (!cleanWord) return;
        
        if(pronounCounts.hasOwnProperty(cleanWord)) {
            pronounCounts[cleanWord]++;
        }
        if(prepositionCounts.hasOwnProperty(cleanWord)) {
            prepositionCounts[cleanWord]++;
        }
        if(articleCounts.hasOwnProperty(cleanWord)) {
            articleCounts[cleanWord]++;
        }
    });

    // Only display words that were actually found
    let filteredPronounCounts = {};
    for (const pronoun in pronounCounts) {
        if (pronounCounts[pronoun] > 0) {
            filteredPronounCounts[pronoun] = pronounCounts[pronoun];
        }
    }

    let filteredPrepositionCounts = {};
    for (const preposition in prepositionCounts) {
        if (prepositionCounts[preposition] > 0) {
            filteredPrepositionCounts[preposition] = prepositionCounts[preposition];
        }
    }

    let filteredArticleCounts = {};
    for (const article in articleCounts) {
        if (articleCounts[article] > 0) {
            filteredArticleCounts[article] = articleCounts[article];
        }
    }

    // Show the results
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <p><strong>Letters</strong>: ${numLetters}</p>
        <p><strong>Words</strong>: ${numWords}</p>
        <p><strong>Spaces</strong>: ${numSpaces}</p>
        <p><strong>Newlines</strong>: ${numNewlines}</p>
        <p><strong>Special Symbols</strong>: ${numSpecial}</p>
        <h3>Pronouns Count (only those present in text)</h3>
        <pre>${JSON.stringify(filteredPronounCounts, null, 2)}</pre>
        <h3>Prepositions Count (only those present in text)</h3>
        <pre>${JSON.stringify(filteredPrepositionCounts, null, 2)}</pre>
        <h3>Indefinite Articles Count (only those present in text)</h3>
        <pre>${JSON.stringify(filteredArticleCounts, null, 2)}</pre>
    `;
}

// Enhanced Event Tracking System
function setupEventTracking() {
  // Track page load
  document.addEventListener('DOMContentLoaded', function() {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}, view, page-load`);
    
    // Track initial visible elements
    trackVisibleElements();
  });

  // Track all clicks with detailed element information
  document.addEventListener('click', function(e) {
    // Ignore clicks on the custom cursor
    if (e.target.classList.contains('custom-cursor')) return;
    
    const target = e.target;
    const trackableElement = target.closest('.trackable');
    
    if (trackableElement) {
      clickCount++;
      document.getElementById('clickCount').textContent = `Clicks: ${clickCount}`;
      
      const timestamp = new Date().toISOString();
      let elementType = getDetailedElementType(target);
      
      console.log(`${timestamp}, click, ${elementType}`);
    }
  }, true);
  
  // Track element views using IntersectionObserver
  function trackVisibleElements() {
    const observer = new IntersectionObserver((entries) => {
      const timestamp = new Date().toISOString();
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elementType = getDetailedElementType(entry.target);
          console.log(`${timestamp}, view, ${elementType}`);
        }
      });
    }, { threshold: 0.5 });

    // Observe all trackable elements and elements with IDs
    document.querySelectorAll('.trackable, [id]').forEach(el => {
      observer.observe(el);
    });
  }

  // Debounced scroll handler to track newly visible elements
  let lastScrollTime = 0;
  window.addEventListener('scroll', function() {
    const now = Date.now();
    if (now - lastScrollTime > 1000) {
      lastScrollTime = now;
      trackVisibleElements();
    }
  });

  // Helper function to get detailed element type
  function getDetailedElementType(element) {
    let elementType = element.tagName.toLowerCase();
    
    // Add class information if available
    if (element.classList.length > 0) {
      elementType += '.' + Array.from(element.classList).join('.');
    }
    
    // Add ID if available
    if (element.id) {
      elementType += '#' + element.id;
    }
    
    // Special handling for specific element types
    switch(element.tagName) {
      case 'A': 
        elementType = 'link' + (element.id ? '#' + element.id : '');
        break;
      case 'IMG': 
        elementType = 'image' + (element.id ? '#' + element.id : '');
        break;
      case 'BUTTON': 
        elementType = 'button' + (element.id ? '#' + element.id : '');
        break;
      case 'P': 
        elementType = 'paragraph' + (element.id ? '#' + element.id : '');
        break;
      case 'LI': 
        elementType = 'list-item' + (element.id ? '#' + element.id : '');
        break;
      case 'DIV': 
        elementType = 'container' + (element.id ? '#' + element.id : '');
        break;
      case 'SECTION': 
        elementType = 'section' + (element.id ? '#' + element.id : '');
        break;
    }
    
    return elementType;
  }
}

// Custom cursor implementation
function setupCustomCursor() {
  // Function disabled to remove the cursor-following blue ball
  return;
}

// Scroll to top button
function setupScrollButton() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (!scrollBtn) return;

  window.addEventListener('scroll', function() {
    scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
  });

  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Text Analysis Functions
function setupTextAnalysis() {
  const analyzeBtn = document.getElementById('analyzeBtn');
  if (!analyzeBtn) return;

  analyzeBtn.addEventListener('click', function() {
    processText();
  });
}

function setupRickRoll() {
  const rickRollItem = document.getElementById('rickroll-item');
  if (rickRollItem) {
    const link = rickRollItem.querySelector('a');
    if (link) {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        window.open(this.href, '_blank'); // Still open the link in new tab
        
        // Change the text after a short delay
        setTimeout(() => {
          rickRollItem.innerHTML = 'Successfully Rick-Rolling an ISS TA';
          rickRollItem.style.color = '#00ff00';
          rickRollItem.style.fontWeight = 'bold';
        }, 500);
      });
    }
  }
}