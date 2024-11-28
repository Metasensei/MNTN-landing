document.addEventListener('DOMContentLoaded', () => {
    // Navigation modal data
    const navModalData = {
        'equipment': {
            title: 'Hiking Equipment Guide',
            content: `
                <h3>Essential Hiking Equipment</h3>
                <div class="equipment-categories">
                    <div class="equipment-category">
                        <h4>Basic Equipment</h4>
                        <ul>
                            <li><strong>Backpack:</strong> 20-35L for day hikes</li>
                            <li><strong>Footwear:</strong> Hiking boots or sturdy shoes</li>
                            <li><strong>Navigation:</strong> Map, compass, or GPS device</li>
                            <li><strong>Water:</strong> Water bottles or hydration system</li>
                            <li><strong>Food:</strong> Snacks and emergency supplies</li>
                        </ul>
                    </div>
                    <div class="equipment-category">
                        <h4>Safety Equipment</h4>
                        <ul>
                            <li><strong>First Aid Kit:</strong> Basic medical supplies</li>
                            <li><strong>Emergency Shelter:</strong> Light tarp or emergency blanket</li>
                            <li><strong>Light:</strong> Headlamp or flashlight with extra batteries</li>
                            <li><strong>Fire:</strong> Matches in waterproof container</li>
                            <li><strong>Multi-tool:</strong> Basic repair and emergency use</li>
                        </ul>
                    </div>
                    <div class="equipment-category">
                        <h4>Clothing</h4>
                        <ul>
                            <li><strong>Base Layer:</strong> Moisture-wicking materials</li>
                            <li><strong>Insulation:</strong> Fleece or wool mid-layer</li>
                            <li><strong>Shell:</strong> Waterproof/windproof outer layer</li>
                            <li><strong>Hat:</strong> Sun protection and warmth</li>
                            <li><strong>Gloves:</strong> Based on weather conditions</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'about': {
            title: 'About MNTN',
            content: `
                <h3>Our Story</h3>
                <p>MNTN was founded by a group of passionate hikers who believed that everyone should have access to quality hiking information and guidance. Our mission is to make hiking accessible, safe, and enjoyable for everyone, from beginners to experienced mountaineers.</p>
                
                <h3>Our Team</h3>
                <p>Our team consists of experienced hikers, certified mountain guides, and outdoor enthusiasts who are dedicated to sharing their knowledge and expertise with the hiking community.</p>
                
                <h3>Our Values</h3>
                <ul>
                    <li><strong>Safety First:</strong> We prioritize safety in all our guides and recommendations</li>
                    <li><strong>Environmental Responsibility:</strong> We promote Leave No Trace principles</li>
                    <li><strong>Community:</strong> We foster a supportive hiking community</li>
                    <li><strong>Education:</strong> We believe in continuous learning and improvement</li>
                </ul>
            `
        },
        'blog': {
            title: 'Latest Blog Posts',
            content: `
                <div class="blog-posts">
                    <article class="blog-post">
                        <h3>Best Spring Hiking Destinations</h3>
                        <p>Discover the most beautiful trails that come alive during spring...</p>
                        <a href="#" class="read-more">Read full article</a>
                    </article>
                    
                    <article class="blog-post">
                        <h3>Essential Safety Tips for Solo Hikers</h3>
                        <p>Planning to hit the trails alone? Here's what you need to know...</p>
                        <a href="#" class="read-more">Read full article</a>
                    </article>
                    
                    <article class="blog-post">
                        <h3>Hiking with Dogs: A Complete Guide</h3>
                        <p>Everything you need to know about hiking with your four-legged friend...</p>
                        <a href="#" class="read-more">Read full article</a>
                    </article>
                </div>
            `
        }
    };

    // Create and add modal container if it doesn't exist
    let modalContainer = document.getElementById('modalContainer');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'modalContainer';
        document.body.appendChild(modalContainer);
    }

    // Create auth modal HTML
    const authModalHTML = `
        <div class="modal auth-modal" id="authModal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="auth-tabs">
                    <button class="auth-tab active" data-tab="login">Login</button>
                    <button class="auth-tab" data-tab="register">Register</button>
                </div>
                <form id="loginForm" class="auth-form active">
                    <h2>Welcome Back</h2>
                    <div class="form-group">
                        <input type="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" required>
                    </div>
                    <div class="remember-forgot">
                        <label>
                            <input type="checkbox"> Remember me
                        </label>
                        <a href="#" class="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" class="auth-button">Login</button>
                </form>
                <form id="registerForm" class="auth-form">
                    <h2>Create Account</h2>
                    <div class="form-group">
                        <input type="text" placeholder="Full Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" required>
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Confirm Password" required>
                    </div>
                    <button type="submit" class="auth-button">Register</button>
                </form>
            </div>
        </div>
    `;

    // Add auth modal to container
    modalContainer.insertAdjacentHTML('beforeend', authModalHTML);

    // Universal modal creation function
    function createModal(id, title, content) {
        return `
            <div class="modal" id="${id}">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2 class="modal-title">${title}</h2>
                    <div class="modal-body">${content}</div>
                </div>
            </div>
        `;
    }

    // Universal modal handler
    function handleModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        window.onclick = (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Setup navigation modals
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkText = link.textContent.toLowerCase().trim();
        const modalData = navModalData[linkText];
        
        if (modalData) {
            // Create modal if it doesn't exist
            const modalId = `${linkText}Modal`;
            if (!document.getElementById(modalId)) {
                modalContainer.insertAdjacentHTML('beforeend', 
                    createModal(modalId, modalData.title, modalData.content)
                );
            }

            // Add click handler
            link.addEventListener('click', (e) => {
                e.preventDefault();
                handleModal(modalId);
            });
        }
    });

    // Handle auth modal
    const accountLink = document.querySelector('.account');
    if (accountLink) {
        accountLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleModal('authModal');
        });
    }

    // Auth modal tab switching
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetForm = tab.dataset.tab;

            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show target form
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${targetForm}Form`) {
                    form.classList.add('active');
                }
            });
        });
    });

    // Scroll animations
    const sections = document.querySelectorAll('.content-section, .contact-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'  // Trigger animation slightly before element comes into view
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY <= window.innerHeight) {
            const translateY = currentScrollY * 0.5;
            const opacity = 1 - (currentScrollY / window.innerHeight);
            
            hero.style.transform = `translateY(${translateY}px)`;
            hero.style.opacity = opacity;
        }

        lastScrollY = currentScrollY;
    });

    // Form handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formId = form.id;
            let message = '';

            switch(formId) {
                case 'contactForm':
                    message = 'Thank you for your message! We will get back to you soon.';
                    break;
                case 'loginForm':
                    message = 'Login functionality will be implemented soon.';
                    break;
                case 'registerForm':
                    message = 'Registration functionality will be implemented soon.';
                    break;
                default:
                    message = 'Form submitted successfully!';
            }

            alert(message);
            form.reset();
        });
    });
});