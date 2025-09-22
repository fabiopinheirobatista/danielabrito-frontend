type Project = { title: string, img: string };
const projects: Project[] = [
  { title: 'Casa Módulo 17', img: '/images/photo_2024-03-03_16-37-15.jpg' },
  { title: 'Edifício Splendor', img: '/images/photo_2024-03-03_16-37-59.jpg' },
  { title: 'All Time', img: '/images/photo_2024-03-03_16-38-29.jpg' }
];

function renderGallery() {
  const g = document.getElementById('gallery')!;
  projects.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}" style="width:100%;height:170px;object-fit:cover">
      <div style="padding:10px"><strong>${p.title}</strong></div>`;
    g.appendChild(div);
  });
}

document.getElementById('contactForm')!.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const fd = new FormData(form);
  const msg = document.getElementById('formMsg')!;
  if (!fd.get('nome') || !fd.get('email') || !fd.get('mensagem')) {
    msg.textContent = 'Preencha os campos obrigatórios.';
    return;
  }
  msg.textContent = 'Mensagem enviada (simulada).';
  form.reset();
});

renderGallery();
