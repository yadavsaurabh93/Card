// Vibrant Full-Screen Theme Gradients (Matching the Hot Pink reference style!)
var themePresets = {
  orange: {
    gradient: 'linear-gradient(135deg, #0b0c10 0%, #1a1c29 50%, #050508 100%)',
    accentGlow: 'rgba(59, 130, 246, 0.35)',
    watermark: 'RBC CORE'
  },
  green: {
    gradient: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
    accentGlow: 'rgba(5, 150, 105, 0.4)',
    watermark: 'RBC LOGISTICS'
  },
  blue: {
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
    accentGlow: 'rgba(29, 78, 216, 0.4)',
    watermark: 'RBC NETWORK'
  },
  purple: {
    gradient: 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)',
    accentGlow: 'rgba(109, 40, 217, 0.4)',
    watermark: 'RBC DIRECT'
  },
  pink: {
    gradient: 'linear-gradient(135deg, #db2777 0%, #9d174d 100%)',
    accentGlow: 'rgba(219, 39, 119, 0.4)',
    watermark: 'RBC CONNECT'
  },
  gold: {
    gradient: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)',
    accentGlow: 'rgba(217, 119, 6, 0.4)',
    watermark: 'RBC GATEWAY'
  }
};

// Icons definitions in central Orb
var platformIcons = {
  default: '\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <circle cx="18" cy="5" r="3"></circle>\n      <circle cx="6" cy="12" r="3"></circle>\n      <circle cx="18" cy="19" r="3"></circle>\n      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>\n      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>\n    </svg>\n  ',
  whatsapp: '\n    <svg viewBox="0 0 24 24" fill="currentColor">\n      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.779 1.218h.004c5.502 0 9.987-4.479 9.988-9.985a9.979 9.979 0 0 0-2.928-7.06A9.929 9.929 0 0 0 12.012 2zm5.835 14.12c-.256.726-1.5 1.332-2.046 1.402-.497.068-1.147.124-3.27-.71-2.713-1.07-4.462-3.853-4.597-4.037-.137-.184-1.095-1.46-1.095-2.785 0-1.323.684-1.973.957-2.247.273-.274.615-.342.82-.342.204 0 .41.003.58.01.183.008.43-.072.673.513.25.599.854 2.083.928 2.235.074.152.124.33.023.533-.1.201-.15.33-.298.502-.148.173-.313.387-.447.519-.148.147-.303.308-.13.606.172.296.768 1.267 1.65 2.057.941.843 1.733 1.107 2.037 1.242.304.135.483.113.665-.098.183-.21.785-.915.99-1.23.204-.317.41-.264.69-.162.28.103 1.776.84 2.083.993.306.152.51.229.586.36.076.13.076.757-.18 1.485z"/>\n    </svg>\n  ',
  email: '\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>\n    </svg>\n  ',
  x: '\n    <svg viewBox="0 0 24 24" fill="currentColor">\n      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>\n    </svg>\n  ',
  instagram: '\n    <svg viewBox="0 0 24 24" fill="currentColor">\n      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>\n    </svg>\n  ',
  linkedin: '\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>\n    </svg>\n  ',
  facebook: '\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>\n    </svg>\n  '
};

var root = document.documentElement;
var coreOrb = document.getElementById('coreOrb');
var gatewayStatus = document.getElementById('gatewayStatus');
var watermark = document.getElementById('watermark');

// 2. Card Hover Portal Morpher Logic + Interactive Glow Follow
var cards = document.querySelectorAll('.card');

for (var k = 0; k < cards.length; k++) {
  (function(card) {
    var platform = card.getAttribute('data-platform');
    var statusMsg = card.getAttribute('data-status');
    var url = card.getAttribute('data-url');

    // Cursor tracking glow coordinates
    card.addEventListener('mousemove', function(e) {
      try {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', (x / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
      } catch (err) {}
    });

    card.addEventListener('mouseenter', function() {
      // Core orb glowing expansion feedback
      if (coreOrb) {
        coreOrb.style.transform = 'scale(1.08)';
        coreOrb.style.background = 'rgba(255, 255, 255, 0.3)';
        coreOrb.style.boxShadow = '0 0 45px rgba(255, 255, 255, 0.8), 0 0 25px var(--accent-glow)';
        coreOrb.innerHTML = platformIcons[platform] || platformIcons.default;
      }

      // Status text lights up
      if (gatewayStatus) {
        gatewayStatus.textContent = statusMsg;
        gatewayStatus.classList.add('active');
      }
    });

    card.addEventListener('mouseleave', function() {
      // Reset portal state
      if (coreOrb) {
        coreOrb.style.transform = 'scale(1)';
        coreOrb.style.background = 'rgba(255, 255, 255, 0.15)';
        coreOrb.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.4)';
        coreOrb.innerHTML = platformIcons.default;
      }

      if (gatewayStatus) {
        gatewayStatus.textContent = "SELECT PORTAL TO INITIATE CONNECTION";
        gatewayStatus.classList.remove('active');
      }
    });

    // Navigate to platform link on card click
    card.addEventListener('click', function() {
      window.open(url, '_blank');
    });
  })(cards[k]);
}

// 3. 3D Background Parallax Effect
document.addEventListener('mousemove', function(e) {
  try {
    if (watermark) {
      var moveX = (e.clientX - window.innerWidth / 2) * -0.02;
      var moveY = (e.clientY - window.innerHeight / 2) * -0.02;
      watermark.style.transform = 'translate(calc(-50% + ' + moveX + 'px), calc(-50% + ' + moveY + 'px))';
    }
  } catch (err) {}
});

// Premium Realistic Multilingual Typewriter/Writing Effect for Founder & CEO's signature quote
function triggerQuoteTyping() {
  try {
    var quoteEl = document.getElementById('ceoQuoteText');
    if (!quoteEl) return;
    
    var container = quoteEl.closest('.ceo-quote-container');
    if (container) {
      // Measure and lock the height and width to prevent any layout shifts or jumping!
      var currentHeight = container.offsetHeight;
      var currentWidth = container.offsetWidth;
      container.style.minHeight = currentHeight + 'px';
      container.style.minWidth = currentWidth + 'px';
    }

    // Read target text and reset content
    var text = quoteEl.innerText || quoteEl.textContent || "वसुधैव कुटुम्बकम के संस्कारो से तपाकर बनते है कलयुग के महाधनुर्धारी अर्जुन ।";
    quoteEl.textContent = ''; 
    quoteEl.style.opacity = 1;
    
    // Apply blinking typewriter cursor class
    quoteEl.classList.add('typing-cursor');
    
    var index = 0;
    function typeChar() {
      if (index < text.length) {
        quoteEl.textContent += text.charAt(index);
        index++;
        // Natural humanoid variance delays (between 35ms and 80ms)
        setTimeout(typeChar, 35 + Math.random() * 45);
      } else {
        // Retain blinking cursor for 1.5 seconds after completion, then fade it out cleanly
        setTimeout(function() {
          quoteEl.classList.remove('typing-cursor');
          if (container) {
            // Remove the locked styles so it remains fluid and responsive on resize!
            container.style.minHeight = '';
            container.style.minWidth = '';
          }
        }, 1500);
      }
    }
    
    // Start the realistic writing animation
    setTimeout(typeChar, 400); // 400ms delay to feel perfect as the card finishes entering
  } catch (err) {}
}

// 4. HIGH-PERFORMANCE INTERSECTION OBSERVER FOR STAGGERED ELEVATION
var zigzagRows = document.querySelectorAll('.zigzag-row');

if (typeof IntersectionObserver === 'function') {
  var observerOptions = {
    threshold: 0.15, // Triggers when 15% of the row is visible in viewport
    rootMargin: "0px 0px -40px 0px"
  };

  var scrollObserver = new IntersectionObserver(function(entries, observer) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.id === 'row0') {
          triggerQuoteTyping();
        }
        observer.unobserve(entry.target);
      }
    }
  }, observerOptions);

  for (var i = 0; i < zigzagRows.length; i++) {
    scrollObserver.observe(zigzagRows[i]);
  }
} else {
  // Fallback: If IntersectionObserver is not supported, display all rows instantly
  for (var m = 0; m < zigzagRows.length; m++) {
    zigzagRows[m].classList.add('visible');
  }
  triggerQuoteTyping();
}

// 5. Clipboard copy action trigger with full execCommand fallback
function copyLink(url, btn, event) {
  if (event) event.stopPropagation(); // Stop card click launch

  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    navigator.clipboard.writeText(url).then(function() {
      triggerCopyFeedback(btn);
    })['catch'](function() {
      fallbackCopy(url, btn);
    });
  } else {
    fallbackCopy(url, btn);
  }
}

function triggerCopyFeedback(btn) {
  var textSpan = btn.querySelector('span');
  var originalText = textSpan.textContent;

  btn.classList.add('success');
  textSpan.textContent = "Copied!";
  btn.querySelector('.copy-svg').innerHTML = '\n      <polyline points="20 6 9 17 4 12"></polyline>\n    ';

  setTimeout(function() {
    btn.classList.remove('success');
    textSpan.textContent = originalText;
    btn.querySelector('.copy-svg').innerHTML = '\n        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>\n        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>\n      ';
  }, 2000);
}

function fallbackCopy(url, btn) {
  var textArea = document.createElement("textarea");
  textArea.value = url;
  // Place in the top-left corner of screen regardless of scroll position
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = '0';
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    if (successful) {
      triggerCopyFeedback(btn);
    }
  } catch (err) {
    console.log('Fallback: Unable to copy', err);
  }

  document.body.removeChild(textArea);
}

// Toggle Mr. Prakash's (CEO) interactive sub-navigation list
function togglePrakashSubNav() {
  var subNav = document.querySelector('#row0 .partner-sub-nav');
  if (subNav) {
    subNav.classList.toggle('active');
    
    // Smoothly redraw serpentine road as height changes
    setTimeout(function() {
      if (typeof drawSerpentineRoad === 'function') drawSerpentineRoad();
      if (typeof updateSerpentineOpacityOnScroll === 'function') updateSerpentineOpacityOnScroll();
    }, 150);
  }
}

// Toggle Kunal Pawar's interactive board members sub-navigation list
function toggleKunalSubNav() {
  var subNav = document.querySelector('#row1 .partner-sub-nav');
  if (subNav) {
    subNav.classList.toggle('active');
    
    // Smoothly redraw serpentine road as height changes
    setTimeout(function() {
      if (typeof drawSerpentineRoad === 'function') drawSerpentineRoad();
      if (typeof updateSerpentineOpacityOnScroll === 'function') updateSerpentineOpacityOnScroll();
    }, 150);
  }
}

// Navigate between partners with smooth scroll controls
function navigatePartner(direction) {
  // Check if Roy Daksh is currently active
  var royRow = document.getElementById('row2');
  var isRoyActive = royRow && royRow.classList.contains('active-partner');

  if (isRoyActive) {
    if (direction === 'prev') {
      closeRoyDaksh();
      return;
    } else if (direction === 'next') {
      closeRoyDaksh();
      return;
    }
  }

  // The custom visible order of profiles:
  var orderedIds = ['row0', 'row1', 'row4', 'row9', 'row6', 'row5', 'row3', 'row7', 'row8'];
  var totalRows = orderedIds.length;

  // Find the row currently closest to the center of the viewport
  var currentActive = null;
  var minDistance = Infinity;
  var viewportCenter = window.innerHeight / 2;

  for (var i = 0; i < orderedIds.length; i++) {
    var id = orderedIds[i];
    var row = document.getElementById(id);
    if (row) {
      var rect = row.getBoundingClientRect();
      var rowCenter = rect.top + rect.height / 2;
      var distance = Math.abs(rowCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        currentActive = row;
      }
    }
  }

  if (!currentActive) return;

  var currentId = currentActive.id;
  var currentIndex = orderedIds.indexOf(currentId);

  // If at Mr. Prakash (row0 - index 0) and clicking next, open Roy Daksh!
  if (currentId === 'row0' && direction === 'next') {
    if (typeof showPartnerDetails === 'function') showPartnerDetails('chinaMember1');
    return;
  }

  var targetIndex;
  if (direction === 'next') {
    targetIndex = (currentIndex + 1) % totalRows;
  } else if (direction === 'prev') {
    if (typeof showPartnerDetails === 'function') showPartnerDetails('row0');
    return;
  }

  if (typeof showPartnerDetails === 'function') showPartnerDetails(orderedIds[targetIndex]);
}

// Close the China operations branch and scroll back to Prakash (Row 0)
function closeRoyDaksh() {
  var chinaRowContainer = document.getElementById('row2');
  if (chinaRowContainer) {
    // Hide all China rows
    chinaRowContainer.style.display = 'none';
    chinaRowContainer.classList.remove('visible');
    
    var chinaRows = chinaRowContainer.querySelectorAll('.zigzag-row');
    for (var i = 0; i < chinaRows.length; i++) {
      var row = chinaRows[i];
      row.style.display = 'none';
      row.classList.remove('visible');
      var subNav = row.querySelector('.partner-sub-nav');
      if (subNav) subNav.classList.remove('active');
    }
  }
  
  if (typeof showPartnerDetails === 'function') showPartnerDetails('row0');
  
  setTimeout(function() {
    if (typeof drawSerpentineRoad === 'function') drawSerpentineRoad();
    if (typeof updateSerpentineOpacityOnScroll === 'function') updateSerpentineOpacityOnScroll();
  }, 100);
}

// Legacy navigation stubs for absolute safety
function closeRoyDakshToPrakash() {
  closeRoyDaksh();
}
function closeRoyDakshToAditya() {
  closeRoyDaksh();
}

// Global scroll event listener to detect first-time scroll interaction
window.addEventListener('scroll', function() {
  document.body.classList.add('has-scrolled');
}, { once: true });

// Dynamic scroll-drawing and self-erasing controller for the cyan ribbon (for both paths)
function updateSerpentineOpacityOnScroll() {
  var container = document.querySelector('.zigzag-container');
  var paths = document.querySelectorAll('.serpentine-svg path.serpentine-path');
  var glowPaths = document.querySelectorAll('.serpentine-svg path.serpentine-glow-path');
  if (!container || (paths.length === 0 && glowPaths.length === 0)) return;

  var rect = container.getBoundingClientRect();
  var viewportHeight = window.innerHeight;
  
  // Calculate how much of the container is scrolled past the viewport top
  var visibleTop = Math.max(0, -rect.top);
  var totalScrollableHeight = rect.height - viewportHeight;
  
  if (totalScrollableHeight > 0) {
    var scrollPercent = Math.min(1, Math.max(0, visibleTop / totalScrollableHeight));
    
    // Dynamically draw/erase the main paths
    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      if (path && path.dataset.length) {
        var length = parseFloat(path.dataset.length);
        var drawOffset = length * (1 - scrollPercent);
        path.style.strokeDashoffset = drawOffset.toFixed(2);
      }
    }
    
    // Dynamically draw/erase the backdrop glowing paths in perfect sync
    for (var j = 0; j < glowPaths.length; j++) {
      var glowPath = glowPaths[j];
      if (glowPath && glowPath.dataset.length) {
        var glowLength = parseFloat(glowPath.dataset.length);
        var glowDrawOffset = glowLength * (1 - scrollPercent);
        glowPath.style.strokeDashoffset = glowDrawOffset.toFixed(2);
      }
    }
  }
}

// Generate S-curve cubic bezier commands for a set of coordinates
function generateBezierPath(points) {
  if (points.length < 2) return '';
  
  var d = 'M ' + points[0].x + ' ' + points[0].y;
  for (var i = 0; i < points.length - 1; i++) {
    var p0 = points[i];
    var p1 = points[i + 1];
    
    var midY = (p0.y + p1.y) / 2;
    var cp1x = p0.x;
    var cp1y = midY;
    var cp2x = p1.x;
    var cp2y = midY;
    
    d += ' C ' + cp1x + ' ' + cp1y + ', ' + cp2x + ' ' + cp2y + ', ' + p1.x + ' ' + p1.y;
  }
  return d;
}

// Dynamically calculate and draw two independent smooth serpentine lines (India and China branches!)
function drawSerpentineRoad() {
  var container = document.querySelector('.zigzag-container');
  if (!container) return;

  var containerRect = container.getBoundingClientRect();
  
  // Get Mr. Prakash (row0) center coordinate
  var rootPoint = null;
  var rootRow = document.getElementById('row0');
  if (rootRow) {
    var img = rootRow.querySelector('.zigzag-img-frame');
    if (img) {
      var rect = img.getBoundingClientRect();
      rootPoint = {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top
      };
    }
  }
  if (!rootPoint) return;
  
  // 1. Compute India Branch Points
  var indiaIds = ['row1', 'row4', 'row9', 'row6', 'row5', 'row3', 'row7', 'row8'];
  var indiaPoints = [rootPoint];
  
  for (var i = 0; i < indiaIds.length; i++) {
    var id = indiaIds[i];
    var row = document.getElementById(id);
    if (row && row.style.display !== 'none' && !row.style.display.includes('none')) {
      var img = row.querySelector('.zigzag-img-frame');
      if (img) {
        var rect = img.getBoundingClientRect();
        indiaPoints.push({
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        });
      }
    }
  }
  
  // 2. Compute China Branch Points
  var chinaIds = ['chinaMember1', 'chinaMember2', 'chinaMember3', 'chinaMember4'];
  var chinaPoints = [rootPoint];
  
  var chinaRowContainer = document.getElementById('row2');
  if (chinaRowContainer && chinaRowContainer.style.display !== 'none') {
    for (var j = 0; j < chinaIds.length; j++) {
      var id = chinaIds[j];
      var row = document.getElementById(id);
      if (row && row.style.display !== 'none' && !row.style.display.includes('none')) {
        var img = row.querySelector('.zigzag-img-frame');
        if (img) {
          var rect = img.getBoundingClientRect();
          chinaPoints.push({
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top
          });
        }
      }
    }
  }
  
  // 3. Render India Path
  var pathIndia = document.querySelector('.serpentine-path-india');
  var glowIndia = document.querySelector('.serpentine-glow-path-india');
  var dIndia = generateBezierPath(indiaPoints);
  
  if (pathIndia) {
    if (dIndia) {
      pathIndia.setAttribute('d', dIndia);
      try {
        var length = pathIndia.getTotalLength() || 0;
        pathIndia.style.strokeDasharray = length;
        pathIndia.dataset.length = length;
      } catch (e) {
        pathIndia.style.strokeDasharray = 'none';
        pathIndia.dataset.length = '0';
      }
    } else {
      pathIndia.setAttribute('d', '');
      pathIndia.style.strokeDasharray = 'none';
      pathIndia.dataset.length = '0';
    }
  }
  if (glowIndia) {
    if (dIndia) {
      glowIndia.setAttribute('d', dIndia);
      try {
        var length = glowIndia.getTotalLength() || 0;
        glowIndia.style.strokeDasharray = length;
        glowIndia.dataset.length = length;
      } catch (e) {
        glowIndia.style.strokeDasharray = 'none';
        glowIndia.dataset.length = '0';
      }
    } else {
      glowIndia.setAttribute('d', '');
      glowIndia.style.strokeDasharray = 'none';
      glowIndia.dataset.length = '0';
    }
  }
  
  // 4. Render China Path
  var pathChina = document.querySelector('.serpentine-path-china');
  var glowChina = document.querySelector('.serpentine-glow-path-china');
  var dChina = generateBezierPath(chinaPoints);
  
  if (pathChina) {
    if (dChina) {
      pathChina.setAttribute('d', dChina);
      try {
        var length = pathChina.getTotalLength() || 0;
        pathChina.style.strokeDasharray = length;
        pathChina.dataset.length = length;
      } catch (e) {
        pathChina.style.strokeDasharray = 'none';
        pathChina.dataset.length = '0';
      }
    } else {
      pathChina.setAttribute('d', '');
      pathChina.style.strokeDasharray = 'none';
      pathChina.dataset.length = '0';
    }
  }
  if (glowChina) {
    if (dChina) {
      glowChina.setAttribute('d', dChina);
      try {
        var length = glowChina.getTotalLength() || 0;
        glowChina.style.strokeDasharray = length;
        glowChina.dataset.length = length;
      } catch (e) {
        glowChina.style.strokeDasharray = 'none';
        glowChina.dataset.length = '0';
      }
    } else {
      glowChina.setAttribute('d', '');
      glowChina.style.strokeDasharray = 'none';
      glowChina.dataset.length = '0';
    }
  }

  // 5. Clip top to prevent S-curve overflow above CEO portrait center
  var svgEl = document.querySelector('.serpentine-svg');
  if (svgEl && rootPoint) {
    svgEl.style.clipPath = 'inset(' + rootPoint.y + 'px 0 0 0)';
  }
}

// Call on load and window resize to maintain perfect responsive snapping
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (typeof drawSerpentineRoad === 'function') drawSerpentineRoad();
    if (typeof updateSerpentineOpacityOnScroll === 'function') updateSerpentineOpacityOnScroll();
  }, 400);
});
window.addEventListener('load', function() {
  if (typeof drawSerpentineRoad === 'function') drawSerpentineRoad();
  if (typeof updateSerpentineOpacityOnScroll === 'function') updateSerpentineOpacityOnScroll();
});
window.addEventListener('resize', function() {
  if (typeof drawSerpentineRoad === 'function') drawSerpentineRoad();
  if (typeof updateSerpentineOpacityOnScroll === 'function') updateSerpentineOpacityOnScroll();
});
window.addEventListener('scroll', function() {
  if (typeof updateSerpentineOpacityOnScroll === 'function') updateSerpentineOpacityOnScroll();
});
