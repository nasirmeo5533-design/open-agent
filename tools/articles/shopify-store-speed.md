---
title: Shopify Speed Optimization: Why Your Store Is Slow and What Fixes It
meta_title: Shopify Speed Optimization: What Fixes It | OpenAgent
description: Why Shopify stores slow down, how to read Shopify's speed report, and the fixes that matter most: apps, images, theme code and third-party scripts.
keyword: shopify speed optimization
service: shopify-development
category: Shopify Development
image_alt: Clothing store owner working on her Shopify store on a laptop in her shop
---
Shopify hosts your store on a fast global network, so a slow Shopify store is rarely a server problem. It is almost always something added on top: apps, oversized images, heavy theme features and third-party scripts. The good news is that **Shopify speed optimization** usually means removing and tidying, not rebuilding.

This guide explains how to measure your store's speed properly, what typically slows stores down, and which fixes are worth your time first.

**Short answer:** most slow Shopify stores are slowed by app scripts that load on every page, large uncompressed images, sliders and video in the first screen, and leftover code from apps you already uninstalled. Fix those, then check real-user data in Shopify's Web Performance report rather than chasing a single test score.

## How to measure Shopify speed properly

Shopify's admin includes a Web Performance dashboard (under Online Store) based on **Core Web Vitals**, the measures Google uses for page experience:

- **Largest Contentful Paint (LCP):** how quickly the main content appears. Google's "good" threshold is 2.5 seconds or less.
- **Interaction to Next Paint (INP):** how quickly the page responds when someone taps or clicks. Good is 200 milliseconds or less.
- **Cumulative Layout Shift (CLS):** how much the layout jumps while loading. Good is 0.1 or less.

These thresholds come from Google's [Core Web Vitals documentation](https://web.dev/articles/vitals). The important point: Shopify's report uses data from real visitors, so it reflects actual phones and networks. A lab test like PageSpeed Insights is useful for finding causes, but its score changes from run to run and is not what customers experience.

Measure your product pages and collection pages too, not just the home page. They often carry more apps and more images.

## The usual causes of a slow Shopify store

### 1. Too many apps loading on every page

Each app that adds a feature to your storefront (reviews, upsells, pop-ups, chat, wishlists, currency converters) usually loads its own JavaScript and CSS. Many load on every page, even where the feature is not used. Ten apps can mean dozens of extra files before the page becomes usable.

### 2. Leftover code from uninstalled apps

Older apps often inserted code snippets directly into theme files. Uninstalling the app does not always remove them. The store keeps loading scripts for features that no longer exist.

### 3. Oversized images and the first screen

Product photos uploaded straight from a camera can be several megabytes each. Shopify serves resized versions when the theme uses its image filters correctly, but older or customised themes sometimes load full-size images, or lazy-load the hero image (which delays LCP instead of helping it).

### 4. Sliders, autoplay video and heavy hero sections

A rotating slider with five large images, or a background video in the first screen, is one of the most common reasons for a poor LCP on the home page. It also rarely helps conversion: most visitors never see slide three.

### 5. Third-party tracking and marketing scripts

Analytics, ad pixels, heatmaps, chat widgets and review carousels all add requests. Some are essential. Others were added for a test two years ago and never removed.

### 6. An outdated or heavily customised theme

Shopify's current themes (Online Store 2.0) are built with performance in mind. A theme bought years ago, or one with many custom edits, may load features the store no longer uses.

## Shopify speed optimization fixes, in order

| Fix | Effort | Typical impact |
|---|---|---|
| Remove apps you don't need | Low | Often the biggest single gain |
| Clean leftover app code from the theme | Medium | Removes hidden scripts |
| Replace slider or video hero with one static image | Low | Faster main content on home page |
| Don't lazy-load the first-screen image | Low | Better LCP |
| Compress and correctly size images | Low to medium | Faster pages everywhere |
| Audit third-party scripts and pixels | Medium | Faster and more responsive pages |
| Move to a current, well-built theme | High | Large, lasting improvement |

### Start with an app audit

List every app in your admin and ask three questions: Do we use it? Does it make money or save real time? Could the theme or Shopify do this natively? Many features that once needed an app (product reviews display options, basic upsells, filters, metafield content) can now be handled by the theme or Shopify itself.

Duplicate the theme before removing anything, test the copy, then publish it.

### Clean the theme code

After removing apps, check the theme files for snippets that still reference them. This needs care: deleting the wrong file can break a page. If you are not comfortable editing Liquid files, this is the step to hand to a developer.

### Fix the first screen

The first screen decides LCP on most pages. Use one well-compressed image, sized for the device, loaded eagerly. Keep the message, the product and the call to action visible without waiting for scripts.

### Treat images as a system

Upload images at sensible dimensions (very large originals are rarely needed), use the theme's responsive image settings, and keep file sizes small. Consistent product photo dimensions also prevent layout jumps, which helps CLS.

## What not to worry about

- **Every suggestion from a speed-test tool.** Shopify already compresses images and serves modern formats where browsers support them, and its help center notes that many third-party recommendations are already handled by the platform or don't apply to Shopify stores ([Shopify Help Center](https://help.shopify.com/en/manual/online-store/web-performance/improving-web-performance)).
- **"Speed booster" apps.** An app that promises a faster store still loads its own code. Removing what you don't need usually beats adding another app.
- **Chasing 100/100 in PageSpeed Insights.** A store with real visitors in the "good" range for Core Web Vitals is in a strong position. A perfect lab score is not a sales metric.
- **Shopify's own checkout scripts.** These are part of the platform and are not something you can or should remove.
- **One bad test run.** Lab scores vary. Look at trends in real-user data over weeks.

## Why speed matters for sales and SEO

A faster store reduces the number of visitors who give up before the page loads, especially on mobile data. It also helps ads: you pay for every click from Meta or Google, whether the page loads in two seconds or eight. Google uses page experience signals as part of its ranking systems, though relevance and content still matter more. Speed is rarely the only reason a store ranks or converts, but a slow store makes every other channel work harder.

## Conclusion

Most Shopify speed problems come from things added over time, so Shopify speed optimization is mostly careful removal. Measure with real-user data, remove apps and scripts that do not earn their place, simplify the first screen, and keep images under control. Then measure again.

If you would rather have someone do the audit and the cleanup, our [Shopify development service](../services/shopify-development.html) covers speed fixes, app cleanup and theme work. If your product pages also need to rank, see our guide to [ecommerce category page SEO](ecommerce-category-page-seo.html).

## Frequently asked questions

### Why is my Shopify store so slow?

Usually because of what has been added to it: apps that load scripts on every page, leftover code from removed apps, large images, sliders or video in the first screen, and tracking scripts. Shopify's hosting itself is fast. Start by removing apps you don't use and simplifying the home page hero.

### Do Shopify apps slow down my store?

Many do, because storefront apps usually add their own JavaScript and CSS, often on every page. The effect depends on how well each app is built. Apps that only work in the admin (for example, accounting or inventory tools) usually have no effect on storefront speed.

### What is a good speed score for a Shopify store?

Focus on Core Web Vitals rather than a single score. Google's "good" thresholds are LCP of 2.5 seconds or less, INP of 200 milliseconds or less, and CLS of 0.1 or less. Shopify's Web Performance report shows these from real visitors, which is more reliable than one lab test.

### Does changing my Shopify theme improve speed?

It can, especially if your current theme is old or heavily customised. Shopify's current themes are built with performance in mind. But a new theme loaded with the same apps and scripts will be slow again, so do the app and script audit at the same time.

### Does store speed affect Google rankings?

Page experience, including Core Web Vitals, is one of many signals Google uses. It rarely outweighs relevance and content quality, but a slow store can hold back pages that are otherwise competitive, and it lowers conversion from every traffic source.

### How often should I check my store's speed?

Check after every new app, theme change or major campaign, and review the Web Performance report monthly. Speed problems usually creep in gradually as features are added, so regular checks are easier than a big cleanup once a year. Keep a simple log of changes so you can link a slowdown to its cause.
