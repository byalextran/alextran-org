---
title: How to upgrade WordPress in less than a minute
date: 2008-07-26T03:34:00.000Z
permalink: /how-to-upgrade-wordpress-in-less-than-a-minute/
---
If you can satisfy two reasonable requirements, upgrading [WordPress](http://wordpress.org/) can be ridiculously easy using [Subversion](http://subversion.tigris.org/).  If you’ve ever attempted to manually upgrade WordPress using the “[Three Step Upgrade](http://codex.wordpress.org/Upgrading_WordPress),” you know how much of a pain it can be.  Three steps is false advertisement.  It’s more like a gazillion.  ;)

The two requirements?

1.  You need command-line (shell) access to the web server with WordPress installed.
2.  Your web server needs to have a Subversion client installed.

I venture most web hosts will support both requirements (I host with [Site5](http://www.site5.com/in.php?id=43221) and they do).

Assuming you meet the requirements, you just need a single command.

`svn sw http://svn.automattic.com/tags/2.6/ .`

Just replace `2.6` with the current stable version.  It’s like magic.  Updating WordPress went from a tedious, hour long task to a walk in the park.

More specific instructions can be found in the [WordPress Codex](http://codex.wordpress.org/Installing/Updating_WordPress_with_Subversion).

**UPDATE (08-28-2008)**: I should mention the above command works out-of-the-box only if you’ve already got your WordPress install setup with Subversion.  If you initially installed WordPress without using Subversion, please follow [these instructions](http://codex.wordpress.org/Installing/Updating_WordPress_with_Subversion#Converting_a_.22Traditional.22_WordPress_Blog_to_a_Subversion_Checkout) to get Subversion working with your existing installation.  Once you do that, you will be able to use the above command for future updates.