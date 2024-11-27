document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for content sections
    const sections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
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

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Modal data for each card
    const modalData = {
        '01': {
            title: 'Hiking Levels Guide',
            content: `
                <h3>Hiking Levels:</h3>
                <ul>
                    <li><strong>Beginner:</strong> Flat terrain, well-marked trails, 1-5 miles</li>
                    <li><strong>Intermediate:</strong> Some elevation, varied terrain, 5-10 miles</li>
                    <li><strong>Advanced:</strong> Significant elevation, challenging terrain, 10+ miles</li>
                    <li><strong>Expert:</strong> Technical climbing, extreme conditions, multi-day treks</li>
                </ul>
                <p>Choose trails that match your fitness level and gradually increase difficulty as you gain experience.</p>
            `
        },
        '02': {
            title: 'Essential Hiking Gear',
            content: `
                <h3>Must-Have Items:</h3>
                <ul>
                    <li><strong>Navigation:</strong> Map, compass, or GPS device</li>
                    <li><strong>Weather Protection:</strong> Waterproof jacket, hat, sunscreen</li>
                    <li><strong>Safety:</strong> First aid kit, flashlight, whistle</li>
                    <li><strong>Hydration:</strong> Water bottles or hydration system</li>
                    <li><strong>Nutrition:</strong> Trail snacks and emergency food</li>
                </ul>
                <p>Always pack according to weather conditions and trip duration.</p>
            `
        },
        '03': {
            title: 'Map Reading & Trail Timing',
            content: `
                <h3>Navigation Tips:</h3>
                <ul>
                    <li><strong>Plan Ahead:</strong> Study your route before starting</li>
                    <li><strong>Time Management:</strong> Allow 30 minutes per mile, plus 30 minutes per 1000 ft elevation gain</li>
                    <li><strong>Key Markers:</strong> Identify major landmarks and trail intersections</li>
                    <li><strong>Safety:</strong> Always inform someone about your planned route and return time</li>
                </ul>
                <p>Remember to account for rest breaks and photo opportunities in your timing.</p>
            `
        }
    };

    // Create modal HTML
    const modalHTML = `
        <div class="modal" id="infoModal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2 class="modal-title"></h2>
                <div class="modal-body"></div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get modal elements
    const modal = document.getElementById('infoModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close-modal');

    // Add click event to all read more buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const section = button.closest('.content-section');
            const dataIndex = section.getAttribute('data-index');
            const data = modalData[dataIndex];

            if (data) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = data.content;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Original scroll animations code...
    const sections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
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
});

// Add this to your existing JavaScript code

// Auth modal HTML
const authModalHTML = `
    <div class="modal auth-modal" id="authModal">
        <div class="modal-content auth-content">
            <span class="close-modal">&times;</span>
            <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login">Login</button>
                <button class="auth-tab" data-tab="register">Register</button>
            </div>
            
            <!-- Login Form -->
            <form id="loginForm" class="auth-form active">
                <h2>Welcome Back</h2>
                <div class="form-group">
                    <input type="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Password" required>
                </div>
                <div class="form-group remember-forgot">
                    <label>
                        <input type="checkbox"> Remember me
                    </label>
                    <a href="#" class="forgot-password">Forgot Password?</a>
                </div>
                <button type="submit" class="auth-button">Login</button>
            </form>

            <!-- Register Form -->
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
                <div class="form-group">
                    <label>
                        <input type="checkbox" required> I agree to the Terms & Conditions
                    </label>
                </div>
                <button type="submit" class="auth-button">Register</button>
            </form>
        </div>
    </div>
`;

// Add auth modal to body
document.body.insertAdjacentHTML('beforeend', authModalHTML);

// Auth Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const accountBtn = document.querySelector('.account');
    const authModal = document.getElementById('authModal');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    const closeAuthModal = authModal.querySelector('.close-modal');

    // Open auth modal when clicking account button
    accountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        authModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Tab switching functionality
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and forms
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked tab and corresponding form
            tab.classList.add('active');
            const formId = tab.dataset.tab + 'Form';
            document.getElementById(formId).classList.add('active');
        });
    });

    // Close modal functionality
    closeAuthModal.addEventListener('click', () => {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission handling
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your login logic here
        alert('Login functionality will be implemented here');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your registration logic here
        alert('Registration functionality will be implemented here');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Modal data for each card
    const modalData = {
        '01': {
            title: 'Hiking Levels Guide',
            content: `
                <h3>Hiking Levels:</h3>
                <ul>
                    <li><strong>Beginner:</strong> Flat terrain, well-marked trails, 1-5 miles</li>
                    <li><strong>Intermediate:</strong> Some elevation, varied terrain, 5-10 miles</li>
                    <li><strong>Advanced:</strong> Significant elevation, challenging terrain, 10+ miles</li>
                    <li><strong>Expert:</strong> Technical climbing, extreme conditions, multi-day treks</li>
                </ul>
                <p>Choose trails that match your fitness level and gradually increase difficulty as you gain experience.</p>
            `
        },
        '02': {
            title: 'Essential Hiking Gear',
            content: `
                <h3>Must-Have Items:</h3>
                <ul>
                    <li><strong>Navigation:</strong> Map, compass, or GPS device</li>
                    <li><strong>Weather Protection:</strong> Waterproof jacket, hat, sunscreen</li>
                    <li><strong>Safety:</strong> First aid kit, flashlight, whistle</li>
                    <li><strong>Hydration:</strong> Water bottles or hydration system</li>
                    <li><strong>Nutrition:</strong> Trail snacks and emergency food</li>
                </ul>
                <p>Always pack according to weather conditions and trip duration.</p>
            `
        },
        '03': {
            title: 'Map Reading & Trail Timing',
            content: `
                <h3>Navigation Tips:</h3>
                <ul>
                    <li><strong>Plan Ahead:</strong> Study your route before starting</li>
                    <li><strong>Time Management:</strong> Allow 30 minutes per mile, plus 30 minutes per 1000 ft elevation gain</li>
                    <li><strong>Key Markers:</strong> Identify major landmarks and trail intersections</li>
                    <li><strong>Safety:</strong> Always inform someone about your planned route and return time</li>
                </ul>
                <p>Remember to account for rest breaks and photo opportunities in your timing.</p>
            `
        }
    };

    // Create modal HTML
    const modalHTML = `
        <div class="modal" id="infoModal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2 class="modal-title"></h2>
                <div class="modal-body"></div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get modal elements
    const modal = document.getElementById('infoModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close-modal');

    // Add click event to all read more buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const section = button.closest('.content-section');
            const dataIndex = section.getAttribute('data-index');
            const data = modalData[dataIndex];

            if (data) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = data.content;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Original scroll animations code...
    const sections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
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


    // Auth modal HTML
    const authModalHTML = `
        <div class="modal auth-modal" id="authModal">
            <div class="modal-content auth-content">
                <span class="close-modal">&times;</span>
                <div class="auth-tabs">
                    <button class="auth-tab active" data-tab="login">Login</button>
                    <button class="auth-tab" data-tab="register">Register</button>
                </div>
                
                <!-- Login Form -->
                <form id="loginForm" class="auth-form active">
                    <h2>Welcome Back</h2>
                    <div class="form-group">
                        <input type="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="Password" required>
                    </div>
                    <div class="form-group remember-forgot">
                        <label>
                            <input type="checkbox"> Remember me
                        </label>
                        <a href="#" class="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit" class="auth-button">Login</button>
                </form>

                <!-- Register Form -->
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
                    <div class="form-group">
                        <label>
                            <input type="checkbox" required> I agree to the Terms & Conditions
                        </label>
                    </div>
                    <button type="submit" class="auth-button">Register</button>
                </form>
            </div>
        </div>
    `;

    // Add auth modal to body
    document.body.insertAdjacentHTML('beforeend', authModalHTML);

    // Auth Modal Functionality
    const accountBtn = document.querySelector('.account');
    const authModal = document.getElementById('authModal');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    const closeAuthModal = authModal.querySelector('.close-modal');

    // Open auth modal when clicking account button
    accountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        authModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Tab switching functionality
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and forms
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked tab and corresponding form
            tab.classList.add('active');
            const formId = tab.dataset.tab + 'Form';
            document.getElementById(formId).classList.add('active');
        });
    });

    // Close modal functionality
    closeAuthModal.addEventListener('click', () => {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission handling
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your login logic here
        alert('Login functionality will be implemented here');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your registration logic here
        alert('Registration functionality will be implemented here');
    });
});
// Contact form handling
const contactForm = document.getElementById('contactForm');
const contactSection = document.querySelector('.contact-section');

// Add contact section to intersection observer
observer.observe(contactSection);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});