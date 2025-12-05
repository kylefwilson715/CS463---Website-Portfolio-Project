const projects = [
    {
        name: "Project One",
        description: "Description of your first project. Explain what it does and the technologies used.",
        image: "images/project1.jpg",
        github: "https://github.com/yourusername/project1",
        demo: "https://yourusername.github.io/project1",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Project Two",
        description: "Description of your second project. Explain what it does and the technologies used.",
        image: "images/project2.jpg",
        github: "https://github.com/yourusername/project2",
        demo: "https://yourusername.github.io/project2",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        name: "Project Three",
        description: "Description of your third project. Explain what it does and the technologies used.",
        image: "images/project3.jpg",
        github: "https://github.com/yourusername/project3",
        demo: "https://yourusername.github.io/project3",
        technologies: ["Python", "Flask", "PostgreSQL"]
    }
];

function displayProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) {
        return;
    }
    
    projectsContainer.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-4 project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        const techBadges = project.technologies.map(tech => 
            `<span class="badge bg-secondary me-1">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="card h-100">
                <img src="${project.image}" class="card-img-top" alt="${project.name}" onerror="this.src='https://via.placeholder.com/400x200?text=${project.name}'">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="mb-3">
                        ${techBadges}
                    </div>
                    <div class="mt-auto">
                        <a href="${project.github}" class="btn btn-outline-primary btn-sm me-2" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="${project.demo}" class="btn btn-outline-success btn-sm" target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = document.getElementById('subject')?.value.trim() || '';
    
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields.', 'danger');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'danger');
        return;
    }
    
    if (message.length < 10) {
        showMessage('Message must be at least 10 characters long.', 'danger');
        return;
    }
    
    console.log('Form submitted:', { name, email, subject, message });
    
    showMessage('Thank you for your message! I will get back to you soon.', 'success');
    
    document.getElementById('contact-form').reset();
    
    setTimeout(() => {
        const messageDiv = document.getElementById('form-message');
        if (messageDiv) {
            messageDiv.innerHTML = '';
        }
    }, 5000);
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('form-message');
    if (!messageDiv) return;
    
    messageDiv.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${text}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.project-card, .experience-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    setActiveNavLink();
    
    handleNavbarScroll();
    
    initializeAnimations();
    
    console.log('Portfolio website initialized successfully!');
});
```

## .gitignore
```
# OS Files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log

# Temporary files
tmp/
temp/