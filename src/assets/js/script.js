document.addEventListener('DOMContentLoaded', function() {
        moveNavBar();
        applyDottedBorder();
        updateStyles();
        scaleDivs();
        adjustGap();
        updateGradientTransparency();
        checkDarkboxVisibility()

window.addEventListener('resize', onResize);

function onResize() {
    moveNavBar();    // Function to move the nav bar
    updateStyles(); // Function to change featured background gradient on small screens
    applyDottedBorder(); // The function to apply/animate dotted border
    scaleDivs(); // Function to make sure event divs retain proportions
    adjustGap(); // Functiion to make sure event div spacing remains consistent
    updateGradientTransparency(); // Change gradient visibility on sides for wide screens
    checkDarkboxVisibility()
}

// ----- DARKBOX CONTROLS

        var darkbox = document.querySelector('.darkbox-overlay');
        var openBtn = document.getElementById('opendarkbox');
        var closeBtn = document.getElementById('closedarkbox');
        var iframe = darkbox.querySelector('.darkbox-iframe');


        function showdarkbox(iframeSrc) {
            iframe.src = iframeSrc;
            darkbox.style.visibility = 'visible';
            darkbox.style.opacity = '1';
            document.body.style.overflow = 'hidden';
        }
    
        // Function to hide the darkbox
        function hidedarkbox() {
            darkbox.style.visibility = 'hidden';
            darkbox.style.opacity = '0';
            document.body.style.overflow = 'auto';
            iframe.src = ''; // Reset iframe source
        }
    
        // Event listener for darkbox triggers
        document.querySelectorAll('[data-darkbox-src]').forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                var iframeSrc = this.getAttribute('data-darkbox-src');
                showdarkbox(iframeSrc);
            });
        });
    
        // Event listener for closing the darkbox
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            hidedarkbox();
        });

        // Ensure correct overflow status for main window

        function checkDarkboxVisibility() {
            var darkbox = document.querySelector('.darkbox-overlay');
            if (darkbox.style.visibility === 'visible' || darkbox.style.opacity === '100%') {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

// ----- TO MOVE NAV BAR BASED ON SCREEN SIZE/ORIENTATION

function moveNavBar() {
    var navBar = document.querySelector('.main-nav');
    var placeholder = document.getElementById('nav-placeholder');
    var isLandscape = window.matchMedia("(orientation: landscape)").matches;
    var isWideScreen = window.innerWidth >= 850;

    // Move nav bar to header if screen is wide or device is in landscape orientation
    if (isWideScreen || (isLandscape && !isWideScreen)) {
        console.log("Moving nav bar to header");
        if (placeholder) {
            placeholder.appendChild(navBar);
        }
    } else {
        console.log("Moving nav bar back to original position");
        var headerContainer = document.querySelector('.siteheader-container');
        if (headerContainer) {
            document.body.insertBefore(navBar, headerContainer.nextSibling);
        }
    }
}

// ----- TO APPLY AND ANIMATE DOTTED BORDERS AROUND EVENTS


    // Start the animation
    setInterval(moveDots, 500); // Adjust speed as needed
    });

    //Dotted border
    function applyDottedBorder(alternateColors = false) {
    const elements = document.querySelectorAll('.event');

    elements.forEach(element => {
        const dotRadius = 5; // Radius of the dots
        const dotDiameter = dotRadius * 2;
        const dotColor = "#ffd900"; // Original color of the dots
        const alternateColor = "#746520"; // Alternate color (black)

        // The dimensions of the element
        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;

        // Calculate the optimal number of dots and spacing for each side
        const xDots = Math.round(elementWidth / (dotDiameter + dotRadius)) - 1;
        const yDots = Math.round(elementHeight / (dotDiameter + dotRadius)) - 1;

        // Calculate the spacing needed to fit the dots perfectly, including the corner dots
        const xSpacing = (elementWidth - dotDiameter * (xDots + 1)) / xDots;
        const ySpacing = (elementHeight - dotDiameter * (yDots + 1)) / yDots;

        // Generate the SVG with the dots
        let svg = `<svg width="${elementWidth}" height="${elementHeight}" xmlns="http://www.w3.org/2000/svg">`;

        // Function to add a single dot, with color alternating
        const addDot = (x, y, index) => {
            let currentColor = (index % 2 === 0) !== alternateColors ? dotColor : alternateColor;
            svg += `<circle cx="${x}" cy="${y}" r="${dotRadius}" fill="${currentColor}" />`;
        };

        // Add dots along the top and bottom
        for (let i = 0; i <= xDots; i++) {
            addDot(dotRadius + (i * (dotDiameter + xSpacing)), dotRadius, i);
            addDot(dotRadius + (i * (dotDiameter + xSpacing)), elementHeight - dotRadius, i);
        }

        // Add dots along the left and right, adjusting for the corner dots already added
        for (let i = 1; i < yDots; i++) {
            addDot(dotRadius, dotRadius + (i * (dotDiameter + ySpacing)), i + xDots);
            addDot(elementWidth - dotRadius, dotRadius + (i * (dotDiameter + ySpacing)), i + xDots + yDots);
        }

        // Close the SVG string
        svg += `</svg>`;

        // Convert SVG to a data URL and set it as the background image
        const dataUrl = "url('data:image/svg+xml;base64," + btoa(svg) + "')";
        element.style.backgroundImage = dataUrl;
        element.style.border = 'none'; // Remove the CSS border
        
    });
}

// Set an interval to swap colors every second
setInterval(() => {
    applyDottedBorder(true); // Apply with alternate colors
    setTimeout(() => applyDottedBorder(), 200); // Revert to original colors after 1 second
}, 400); // The entire cycle repeats every 2 seconds

// ----- TO CHANGE GRADIENT ON BACKGROUND PICTURE OF FEATURED ON SMALL SCREENS


function updateStyles() {
    var element = document.querySelector('.section-featured-image-perspective');
    if (!element) return;

    var windowWidth = window.innerWidth;
    var minWidth = 360; // Minimum window width
    var maxWidth = 600; // Maximum window width

    // Ensure windowWidth is within the bounds
    windowWidth = Math.max(minWidth, Math.min(maxWidth, windowWidth));

    // Calculate the interpolation factor (0 at minWidth, 1 at maxWidth)
    var factor = (windowWidth - minWidth) / (maxWidth - minWidth);

    // Interpolate the right property from -60px to 0px
    var rightValue = -60 + factor * 60; // -60px at minWidth, 0px at maxWidth

    // Interpolate the opacity in the mask-image
    var opacityStart = 0 + factor; // 0% (transparent) at minWidth, 100% at maxWidth
    var opacityEnd = 70 + (30 * factor); // 70% at minWidth, 100% at maxWidth

    // Interpolate the overall opacity from 80% to 100%
    var overallOpacity = 0.8 + (0.2 * factor); // 80% at minWidth, 100% at maxWidth

    // Apply the interpolated styles
    element.style.right = rightValue + 'px';
    element.style.maskImage = `linear-gradient(to right, transparent 0%, black ${opacityStart}%, black ${opacityEnd}%, transparent 100%)`;
    element.style.opacity = overallOpacity;
}

// ----- TO SCALE EVENTS AND RETAIN THEIR SPACING WHEN SCALED

function scaleDivs() {
    var divs = document.querySelectorAll('div'); // Select all div elements
    var maxWidth = 430; // Maximum width threshold
    var scaleRatio = window.innerWidth / maxWidth;

    // Ensure the scale ratio does not exceed 1
    if (scaleRatio > 1) {
        scaleRatio = 1;
    }

    divs.forEach(function(div) {
        var style = getComputedStyle(div);
        var isScalable = style.getPropertyValue('--custom-scalable').trim();

        // Check if the --custom-scalable variable is set to 1
        if (isScalable === '1') {
            div.style.transform = 'scale(' + scaleRatio + ')';
        }
    });
}

function adjustGap() {
    var minWidth = 350; // Minimum width threshold
    var maxWidth = 430; // Maximum width threshold
    var currentWidth = window.innerWidth;

    // Clamp currentWidth between minWidth and maxWidth
    currentWidth = Math.max(minWidth, Math.min(currentWidth, maxWidth));

    // Interpolate gap size based on currentWidth
    var gapSize = 30 * (currentWidth - minWidth) / (maxWidth - minWidth);

    // Apply the interpolated gap size to elements with the .events-container class
    document.querySelectorAll('.events-container').forEach(function(container) {
        container.style.gap = gapSize + 'px';
    });

// ----- FOR WIDESCREEN GRADIENTS ON SIDES OF SCREEN

}

    function updateGradientTransparency() {
    var screenWidth = window.innerWidth;
    var opacity;

    if (screenWidth <= 1100) {
        opacity = 0;
    } else if (screenWidth > 1100 && screenWidth <= 1400) {
        // Linear interpolation between 0 opacity at 1000px and 0.25 opacity at 1200px
        opacity = 0.25 * (screenWidth - 1100) / (1400 - 1100);
    } else {
        opacity = 0.25;
    }

    var elements = document.querySelectorAll('.widescreen-gradient');
    elements.forEach(function(element) {
        element.style.background = `linear-gradient(to right, rgba(0, 0, 0, ${opacity}), transparent 20%, transparent 80%, rgba(0, 0, 0, ${opacity}))`;
    });
}