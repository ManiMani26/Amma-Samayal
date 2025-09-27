const form = document.getElementById('orderForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  const subject = encodeURIComponent('New Order');
  const body = encodeURIComponent(
    `Hello,\n\nYou have received a new order:\n\nName: ${name}\nEmail: ${email}\nAddress: ${address}\n\nThank you!`
  );

  window.location.href = `mailto:manikandan26052000@gmail.com?subject=${subject}&body=${body}`;
});
