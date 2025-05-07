---
title: WP-Hive versus Virtual Multiblog
authors:
  - name: Alex Tran
    url: https://www.alextran.org/author/admin/
    avatarUrl: >-
      https://secure.gravatar.com/avatar/160350d1746dcb08dec37b6593784690a19070924036c81a1956b374016c83ce?s=96&d=identicon&r=g
date: 2009-02-12T09:35:27.000Z
metadata:
  uuid: 11ty/import::wordpress::http://alextran.org/?p=366
  type: wordpress
  url: https://www.alextran.org/wp-hive-versus-virtual-multiblog/
---
As of WordPress 3.0, this functionality is built-in without the use of plugins. These plugins are no longer necessary.

There’s a new kid on the blog when it comes to allowing a single [WordPress](http://wordpress.org/) install to be used for multiple blogs.  I used to use [Virtual Multiblog](http://striderweb.com/nerdaphernalia/features/virtual-multiblog/) but just recently switched to [WP-Hive](http://wp-hive.com/).

The main reason?

WP-Hive supports separate `sitemap.xml` files (and `robots.txt`, `favicon.ico`) for each blog without jumping through lots of hoops.

I recommend you check both of them out though. My needs are relatively basic so WP-Hive is wonderful, but VMB has served me well up until this point.

### WP-Hive

##### Pros

-   Installs like any other plugin.
-   Super easy to add new blogs.
-   Supports separate `sitemap.xml`, `robots.txt` and `favicon.ico` files for each blog. Hoping this will expand to other, more generic files in the future.

##### Cons

-   Does not allow a separate `wp-config.php` file for each blog. That means all blogs have to be installed to the same database with the same database login and no ability to _easily_ customize the table prefix.
-   Does not support installing additional blogs to a directory (e.g. domain.com/blog2). It has to be either a top-level domain (e.g. domain.com) or a subdomain (e.g. blog2.domain.com).

### Virtual Multiblog

##### Pros

-   Allows each blog to maintain its own `wp-config.php` file.
-   Supports additional blogs installed in directories (e.g. domain.com/blog2).
-   Once initially setup, it’s easy to add new blogs (assuming you are using the “Easy Setup”). The “Advanced Setup” requires a little more work.

##### Cons

-   Semi-complicated installation (even for the “Easy Setup”).
-   Does not support `sitemap.xml` and other special files that need to be unique per blog.

For other alternatives to WP-Hive and VMB, check out the [Installing Multiple Blogs](http://codex.wordpress.org/Installing_Multiple_Blogs) page.