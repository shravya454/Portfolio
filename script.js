function showContact(type) {
  const contactPlaceholder = document.getElementById('contact-info-placeholder');
  let contactBox = document.getElementById('contact-info-box');
  if (!contactBox) {
    contactBox = document.createElement('div');
    contactBox.id = 'contact-info-box';
    contactBox.className = 'contact-info';
    contactBox.innerHTML = '<h2>Contact</h2>';
    contactPlaceholder.appendChild(contactBox);
  }
  if (type === 'mail' && !document.getElementById('contact-mail')) {
    const mailP = document.createElement('p');
    mailP.id = 'contact-mail';
    mailP.innerHTML = 'Email: <b>shrv93995@gmail.com</b>';
    contactBox.appendChild(mailP);
  }
  if (type === 'linkedin' && !document.getElementById('contact-linkedin')) {
    const linkedinP = document.createElement('p');
    linkedinP.id = 'contact-linkedin';
    linkedinP.innerHTML = 'LinkedIn: <a href="https://www.linkedin.com/in/shravya-k-v-6849a52a7" target="_blank">linkedin.com/in/shravyakv</a>';
    contactBox.appendChild(linkedinP);
  }
}
