// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Check if device supports hover (desktop) vs touch (mobile)
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    // Custom Cursor - only for non-touch devices
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!isTouchDevice && cursor && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1
            });
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3
            });
        });

        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, .product-card, .collection-item, .video-card, .brand-logo');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 2, duration: 0.3 });
                gsap.to(cursorFollower, { scale: 1.5, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, duration: 0.3 });
                gsap.to(cursorFollower, { scale: 1, duration: 0.3 });
            });
        });
    }

    // Magnetic effect for logo and sock images - only for non-touch devices
    const magneticLogo = document.getElementById('magneticLogo');
    const hero = document.querySelector('.hero');
    const sockImages = document.querySelectorAll('.sock-float');

    if (magneticLogo && hero && !isTouchDevice) {
        hero.addEventListener('mousemove', (e) => {
            const rect = magneticLogo.getBoundingClientRect();
            const logoX = rect.left + rect.width / 2;
            const logoY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const deltaX = (mouseX - logoX) * 0.15;
            const deltaY = (mouseY - logoY) * 0.15;
            
            // Magnetic effect on logo
            gsap.to(magneticLogo, {
                x: deltaX,
                y: deltaY,
                duration: 0.5,
                ease: 'power2.out'
            });

            // Magnetic effect on sock images - they follow cursor but repel from center
            sockImages.forEach((sock, index) => {
                const sockRect = sock.getBoundingClientRect();
                const sockX = sockRect.left + sockRect.width / 2;
                const sockY = sockRect.top + sockRect.height / 2;
                
                const distanceX = mouseX - sockX;
                const distanceY = mouseY - sockY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                
                // Attraction to cursor
                const attractionStrength = 0.08;
                const moveX = distanceX * attractionStrength;
                const moveY = distanceY * attractionStrength;
                
                // Add some variation based on index
                const variation = (index % 2 === 0 ? 1 : -1) * 0.5;
                
                gsap.to(sock, {
                    x: moveX + variation * 10,
                    y: moveY + variation * 10,
                    rotation: distanceX * 0.02,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            });
        });

        hero.addEventListener('mouseleave', () => {
            // Reset logo position
            gsap.to(magneticLogo, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)'
            });

            // Reset sock images
            sockImages.forEach(sock => {
                gsap.to(sock, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    duration: 1,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });
    }

    // Hero animations - enhanced with stagger and bounce
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .fromTo('.brand-logo', 
            {
                y: -100,
                opacity: 0,
                scale: 0.5,
                rotation: -10
            },
            {
                duration: 1.5,
                y: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                ease: 'elastic.out(1, 0.6)',
                delay: 0.3
            }
        )
        .fromTo('.tagline',
            {
                y: 50,
                opacity: 0,
                scale: 0.8
            },
            {
                duration: 1,
                y: 0,
                opacity: 1,
                scale: 1,
                ease: 'back.out(1.7)'
            }, '-=0.8'
        )
        .fromTo('.cta-button',
            {
                scale: 0,
                opacity: 0,
                rotation: 180
            },
            {
                duration: 0.8,
                scale: 1,
                opacity: 1,
                rotation: 0,
                ease: 'back.out(2)'
            }, '-=0.4'
        );

    // Animate sock images on hover with slight delay
    gsap.utils.toArray('.sock-float').forEach((sock, index) => {
        // Add subtle floating animation
        gsap.to(sock, {
            y: '+=20',
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2
        });
    });


    // Floating shapes animation - more dynamic
    gsap.to('.shape1', {
        y: -80,
        x: 50,
        rotation: 360,
        scale: 1.3,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape2', {
        y: 60,
        x: -60,
        rotation: -360,
        scale: 1.2,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape3', {
        y: -40,
        x: -30,
        rotation: 360,
        scale: 1.4,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Section title animations - ensure text is always visible
    gsap.utils.toArray('.section-title').forEach(title => {
        // Make sure text is visible first
        gsap.set(title, { opacity: 1, visibility: 'visible' });
        
        // Simple scroll-triggered animation without splitting text
        gsap.fromTo(title, 
            {
                y: 80,
                opacity: 0.3,
                scale: 0.9
            },
            {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                onStart: function() {
                    title.style.opacity = '1';
                    title.style.visibility = 'visible';
                },
                onComplete: function() {
                    title.style.opacity = '1';
                    title.style.visibility = 'visible';
                }
            }
        );
    });

    // Product cards - enhanced stagger with rotation
    gsap.fromTo('.product-card', 
        {
            y: 150,
            opacity: 0,
            scale: 0.5,
            rotation: -15
        },
        {
            scrollTrigger: {
                trigger: '.products-grid',
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: {
                amount: 0.8,
                from: 'start',
                ease: 'power2.inOut'
            },
            duration: 1,
            ease: 'back.out(1.4)'
        }
    );

    // Product card parallax on scroll
    gsap.utils.toArray('.product-card').forEach((card, index) => {
        const image = card.querySelector('.product-image');
        const info = card.querySelector('.product-info');
        
        // Image parallax
        gsap.to(image, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -30,
            ease: 'none'
        });

        // Info slide up on scroll
        gsap.fromTo(info,
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.1
            }
        );
    });

    // Collection items - 3D flip effect
    gsap.utils.toArray('.collection-item').forEach((item, index) => {
        const image = item.querySelector('.collection-image');
        const overlay = item.querySelector('.collection-overlay');
        
        gsap.fromTo(item,
            {
                scale: 0.8,
                opacity: 0,
                y: 50
            },
            {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                delay: index * 0.1
            }
        );

        // Parallax effect on image - faster
        gsap.to(image, {
            scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5
            },
            y: -40,
            scale: 1.15,
            ease: 'none'
        });

        // Overlay fade in - faster
        gsap.fromTo(overlay,
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 75%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.2 + index * 0.08
            }
        );
    });

    // Video cards - explosive entrance
    gsap.fromTo('.video-card',
        {
            scale: 0,
            opacity: 0,
            rotation: 360
        },
        {
            scrollTrigger: {
                trigger: '.video-grid',
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            scale: 1,
            opacity: 1,
            rotation: 0,
            stagger: {
                amount: 1,
                from: 'random',
                ease: 'power2.out'
            },
            duration: 1,
            ease: 'elastic.out(1, 0.6)'
        }
    );

    // Video card hover animations
    document.querySelectorAll('.video-card').forEach(card => {
        const video = card.querySelector('video');
        
        // Set volume to 30% for all videos
        if (video) {
            video.volume = 0.3;
        }
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.08,
                rotation: -1,
                duration: 0.4,
                ease: 'power2.out'
            });
            if (video) {
                video.volume = 0.3; // Ensure volume is set before playing
                video.play();
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
            if (video) video.pause();
        });
    });
    
    // Set volume for all videos on page load
    document.querySelectorAll('video').forEach(video => {
        video.volume = 0.3;
        video.addEventListener('loadedmetadata', () => {
            video.volume = 0.3;
        });
    });

    // Footer animation - bounce in
    gsap.fromTo('.footer-logo',
        {
            scale: 0,
            rotation: 720,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)'
        }
    );

    gsap.fromTo('.footer-text',
        {
            y: 50,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.3
        }
    );

    gsap.fromTo('.social-link',
        {
            scale: 0,
            opacity: 0,
            rotation: 180
        },
        {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 1,
            opacity: 1,
            rotation: 0,
            stagger: 0.15,
            duration: 0.6,
            delay: 0.5,
            ease: 'back.out(2)'
        }
    );

    // Social links continuous animation
    gsap.to('.social-link', {
        y: -5,
        duration: 1,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#featured');
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 0
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    }

    // Add parallax effect to hero content
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        },
        y: 300,
        opacity: 0,
        scale: 0.8,
        ease: 'none'
    });

    // Product card magnetic effect - only for non-touch devices
    if (!isTouchDevice) {
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(card, {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        });
    }

    // Scroll-based color transitions
    ScrollTrigger.create({
        trigger: '.featured',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            gsap.to('body', {
                backgroundColor: '#811844',
                duration: 1,
                ease: 'power2.inOut'
            });
        },
        onLeaveBack: () => {
            gsap.to('body', {
                backgroundColor: '#561530',
                duration: 1,
                ease: 'power2.inOut'
            });
        }
    });

    ScrollTrigger.create({
        trigger: '.collections',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            gsap.to('body', {
                backgroundColor: '#9E1C60',
                duration: 1,
                ease: 'power2.inOut'
            });
        },
        onLeaveBack: () => {
            gsap.to('body', {
                backgroundColor: '#811844',
                duration: 1,
                ease: 'power2.inOut'
            });
        }
    });

    ScrollTrigger.create({
        trigger: '.reviews',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            gsap.to('body', {
                backgroundColor: '#561530',
                duration: 1,
                ease: 'power2.inOut'
            });
        },
        onLeaveBack: () => {
            gsap.to('body', {
                backgroundColor: '#9E1C60',
                duration: 1,
                ease: 'power2.inOut'
            });
        }
    });

    // Scroll progress indicator
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            onUpdate: (self) => {
                const progress = self.progress;
                document.body.style.setProperty('--scroll-progress', progress);
            }
        }
    });

    // Add GSAP ScrollTo plugin for smooth scrolling
    gsap.registerPlugin(ScrollToPlugin);

}); // End of DOMContentLoaded
