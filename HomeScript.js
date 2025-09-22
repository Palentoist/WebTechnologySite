const caption = document.createElement('span');
  caption.id = 'logoCaption';
  caption.textContent = "Shaw's Mode";

  document.getElementById('LogoContainer').appendChild(caption);

document.getElementById('year').textContent = new Date().getFullYear();