---
layout: page
title: Contact
permalink: /contact/
---

{% css "local" %}
  {% include "css/forms.css" %}
{% endcss %}

<form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
  <input type="text" id="name" name="name" placeholder="Name:" maxlength="30" required>
  <input type="email" id="email" name="email" placeholder="Email:" maxlength="40" required>
  <input type="text" id="subject" name="subject" placeholder="Subject:" maxlength="50" required>
  <textarea id="message" name="message" placeholder="Message:" required></textarea>

  <button type="submit" class="button" data-ghost-button>Send Message</button>

  <input type="hidden" name="access_key" value="1c1a8615-20bb-4f9b-b17b-bb3d944e3969">
  <input type="hidden" id="from_name" name="from_name" value="Alex Tran">
  <input class="hidden" type="checkbox" name="botcheck" style="display: none;">
  <input type="hidden" name="redirect" value="https://www.alextran.org/contact/success/">

  <div class="h-captcha" data-captcha="true"></div>
</form>

<script>
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
</script>
