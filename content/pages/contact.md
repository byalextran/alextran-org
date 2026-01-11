---
title: Contact
description: Use my contact form to get in touch with me.
---

Holler at me if you have any questions or comments. I try to reply to everyone who reaches out. Unless you come across spammy. 🐷

<form class="contact-form stack">
	<div class="form-group stack gap-xs">
		<label for="name">Name</label>
		<input type="text" id="name" name="name" required />
	</div>
	<div class="form-group stack gap-xs">
		<label for="contact-email">Email</label>
		<input type="email" id="contact-email" name="email" required />
	</div>
	<div class="form-group stack gap-xs">
		<label for="subject">Subject</label>
		<input type="text" id="subject" name="subject" required />
	</div>
	<div class="form-group stack gap-xs">
		<label for="message">Message</label>
		<textarea id="message" name="message" rows="5" required></textarea>
	</div>
	<button type="submit" class="button" data-variant="primary">
		Send Message
	</button>
</form>
