---
layout: page
title: Contact Me
permalink: /contact/success/
eleventyExcludeFromCollections: true
---

### Yee-haw! 🤠

Thanks for shooting me a message. I'll get back to you as quickly as I can!

<h3>Get Email Updates</h3>

<p>I write about a hodgepodge of things. Much of it will be what God’s teaching me—hopefully it encourages you too. I also enjoy digging into topics like product recommendations, reviews, and other random but useful nuggets.</p>

<form id="subscribe-form">
  <input type="email" id="email" name="email" placeholder="Enter your email address" required />
  <button type="submit" class="button" data-ghost-button>Subscribe</button>
</form>
<div id="response-message">Hello, world!</div>

<script>
  document.getElementById('subscribe-form').addEventListener('submit', async function (e) {
    const email = document.getElementById('email').value;

    const res = await fetch('https://www.alextran.org/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    document.getElementById('response-message').textContent = data.message;
  });
</script>
