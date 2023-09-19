
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener("click", scrollToSection);
    }
    
    function scrollToSection(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offset = targetSection.offsetTop;
            const duration = 1000; // Adjust the duration in milliseconds (e.g., 1000ms = 1 second)
            const startingY = window.scrollY;
            const diff = offset - startingY;
            let start;
            
            // Animation function
            function step(timestamp) {
                if (!start) start = timestamp;
                const timeElapsed = timestamp - start;
                const scrollAmount = Math.easeInOutQuad(timeElapsed, startingY, diff, duration);
                window.scrollTo(0, scrollAmount);
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(step);
                }
            }
            
            // Easing function (quadratic ease in/out)
            Math.easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };
            
            // Start the animation
            requestAnimationFrame(step);
        }
    }
});
