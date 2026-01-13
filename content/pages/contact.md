---
title: Contact
description: Use my contact form to get in touch with me.
---

Holler at me if you have any questions or comments. I try to reply to everyone who reaches out. Unless you come across spammy. 🐷

<form id="contact-form" class="contact-form stack" action="https://api.web3forms.com/submit" method="POST">
	<div class="form-group stack gap-xs">
		<label for="name">Name</label>
		<input type="text" id="name" name="name" maxlength="30" required />
	</div>
	<div class="form-group stack gap-xs">
		<label for="contact-email">Email</label>
		<input type="email" id="contact-email" name="email" maxlength="40" required />
	</div>
	<div class="form-group stack gap-xs">
		<label for="subject">Subject</label>
		<input type="text" id="subject" name="subject" maxlength="50" required />
	</div>
	<div class="form-group stack gap-xs">
		<label for="message">Message</label>
		<textarea id="message" name="message" rows="5" required></textarea>
	</div>
	<button type="submit" class="button" data-variant="primary">
		Send Message
	</button>
	<input type="hidden" name="access_key" value="1c1a8615-20bb-4f9b-b17b-bb3d944e3969">
  <input type="hidden" id="from_name" name="from_name" value="Alex Tran">
  <input type="checkbox" name="botcheck" hidden>
  <input type="hidden" name="redirect" value="https://www.alextran.org/contact-success/">

  <div class="h-captcha" data-captcha="true"></div>
</form>

<script>
  (function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        return;
      }

      const name = document.getElementById('name').value.trim();
      document.getElementById('from_name').value = name;

      const subject = document.getElementById('subject');
      subject.value = "[alextran.org] " + subject.value;
    });
  })();
</script>
