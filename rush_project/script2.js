const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const menuLink = document.querySelector('.nav-link[href="#' + id + '"]');
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link.active').forEach(n => n.classList.remove('active'));
      if (menuLink) menuLink.classList.add('active');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));
