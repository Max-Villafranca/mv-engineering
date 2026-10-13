document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  const closeMenu = () => { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
}
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
const form = document.querySelector('#contact-form');
if (form) {
  const submit = form.querySelector('button[type="submit"]');
  const status = document.querySelector('#form-status');
  submit.disabled = false;
  const endpoint = 'https://n8n.max-villafranca.dev/webhook/4ba494af-19c6-4290-9a91-477bdfea761f';
  let sending = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    const fields = new FormData(form);
    if (fields.get('website')) return;
    const service = String(fields.get('service') || 'Not sure yet');
    const payload = { name: String(fields.get('name') || '').trim(), email: String(fields.get('email') || '').trim(), message: `Service: ${service}\n\n${String(fields.get('message') || '').trim()}` };
    sending = true;
    submit.disabled = true;
    submit.textContent = 'Sending…';
    status.classList.remove('error');
    status.textContent = 'Sending your message…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: controller.signal });
      if (!response.ok) throw new Error('Message delivery failed');
      form.reset();
      status.textContent = 'Thank you. Your message was sent. We’ll be in touch by email.';
    } catch {
      status.classList.add('error');
      status.textContent = 'We couldn’t confirm delivery. Your details are still here. Please try again, or call (945) 403-1403.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      submit.disabled = false;
      submit.textContent = 'Send message ↗';
    }
  });
}
