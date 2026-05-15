document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
    const mySkills = [
        { name: "HTML", img: "html.png" },
        { name: "CSS", img: "CSS.png" },
        { name: "C", img: "C.png" },
        { name: "Javascript", img: "JS.png" }
    ];

    const skillsContainer = document.querySelector('.skills-content .row');
    
    if (skillsContainer) {
        
        skillsContainer.innerHTML = ''; 
        
        mySkills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'item';
            skillDiv.innerHTML = `
                <img src="${skill.img}" alt="${skill.name}">
                <p>${skill.name}</p>
            `;
            skillsContainer.appendChild(skillDiv);
        });
    }

   
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.innerText;

            
            const name = document.getElementById('Name').value;
            const email = document.getElementById('Email').value;
            const message = document.getElementById('Message').value;

           
            submitBtn.innerText = "Envoi en cours...";
            submitBtn.disabled = true;

            try {
                
                await new Promise((resolve) => setTimeout(resolve, 2000));

                alert(`Message envoyé avec succès ! Merci ${name}.`);
                form.reset(); 
            } catch (error) {
                alert("Oups ! Une erreur est survenue.");
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }

   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});