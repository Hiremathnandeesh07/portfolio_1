// Set page year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Animate all buttons and links
document.querySelectorAll('a, button').forEach(btn => {
  btn.style.transition = 'all 0.25s ease';
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.06) translateY(-2px)';
    btn.style.boxShadow = '0 6px 14px rgba(0,0,0,0.15)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1) translateY(0)';
    btn.style.boxShadow = 'none';
  });
});

// Animate project cards
document.querySelectorAll('#projects .border').forEach(card => {
  card.style.transition = 'all 0.3s ease';
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.03)';
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});

// Animate skill boxes (no-op if selector not present)
document.querySelectorAll('#skillsBox .skill').forEach(skill => {
  skill.style.transition = 'all 0.25s ease';
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.05)';
    skill.style.backgroundColor = '#f3f4f6';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
    skill.style.backgroundColor = 'white';
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isHidden = mainNav.classList.toggle('hidden');
    navToggle.setAttribute('aria-expanded', (!isHidden).toString());
  });
}
