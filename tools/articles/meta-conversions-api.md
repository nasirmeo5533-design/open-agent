---
title: Meta Conversions API: What It Is and Why Your Facebook Ads Need It
meta_title: Meta Conversions API Explained for Advertisers | OpenAgent
description: What the Meta Conversions API does, why the pixel alone misses conversions, how deduplication and Event Match Quality work, and how to set it up.
keyword: meta conversions api
service: meta-ads
category: Meta Ads
image_alt: Hand holding a phone below a large social media like notification, representing ad conversions
---
If your Facebook and Instagram ads report fewer sales than your store actually made, you are not alone. Browser privacy settings, ad blockers and app tracking rules all stop some conversions from reaching Meta through the pixel. The **Meta Conversions API** (often called CAPI) closes much of that gap by sending conversion events from your server as well.

This guide explains what the Conversions API does, why it matters for ad performance, how to avoid double-counting, and the easiest ways to set it up on common platforms.

**Short answer:** the Meta Conversions API sends events like purchases and leads directly from your website's server or platform to Meta, alongside the browser pixel. Meta then matches and deduplicates them. Better data means more accurate reporting and better optimisation, because Meta's delivery system learns from the conversions it can see.

## Why the pixel alone isn't enough anymore

The Meta pixel runs in the visitor's browser. That makes it vulnerable to:

- **Ad blockers and privacy extensions** that block tracking scripts.
- **Browser protections** that limit cookies and tracking, such as those in Safari.
- **App Tracking Transparency on iPhone,** which lets users opt out of tracking across apps.
- **Pages that close or redirect** before the pixel fires.

When conversions go missing, two things happen. Your reports under-count results, so campaigns look worse than they are. And Meta's delivery system optimises on less data, so it finds fewer of the right people.

## What the Meta Conversions API does

The Conversions API is a server-to-server connection. When someone buys or submits a lead form, your server (or your platform, such as Shopify) sends that event to Meta directly, with customer information that helps Meta match it to an account. Meta's documentation recommends using the Conversions API together with the pixel rather than replacing it ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/best-practices)).

Using both gives Meta two chances to receive each event, which is why deduplication matters.

## Deduplication: avoiding double-counted conversions

If the pixel and the Conversions API both send the same purchase, Meta needs to know it is one purchase, not two. According to Meta's documentation, it treats events as identical when they have the **same event name** and the **same event ID** ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events)). So the pixel's eventID and the server's event_id must match for every event sent through both.

Events Manager shows whether deduplication is working. If you see a warning about low deduplication, or purchase counts roughly double what your store shows, the event IDs are not matching.

## Event Match Quality: the number to watch

Event Match Quality (EMQ) is a score from 1 to 10 that shows how well the customer information you send can be matched to Meta accounts. Meta's guidance is to aim for 6.0 or higher where possible ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/conversions-api/best-practices)).

You improve EMQ by sending more matching parameters, hashed where required:

- Email address and phone number (hashed).
- First name, last name, city and postcode, where you collect them.
- External ID (your own customer ID).
- Click ID (fbc) and browser ID (fbp) values.
- Client IP address and user agent.

Only send data you are allowed to collect and share under your privacy policy and local law. In the EU and UK, that means respecting the visitor's consent choices.

## Ways to set up the Conversions API

| Method | Best for | Notes |
|---|---|---|
| Platform integration (Shopify, WooCommerce, Wix and others) | Most small and medium stores | Often a few clicks; check which events and parameters it sends |
| Conversions API Gateway | Sites without a supported integration, minimal coding | Meta-provided setup, usually hosted on a cloud account |
| Server-side tag manager (for example server-side Google Tag Manager) | Businesses already using tag management | More control, more setup and hosting cost |
| Direct API integration | Custom sites, apps and CRMs | Most flexible; needs a developer |

For Shopify, the Facebook and Instagram sales channel app offers a data-sharing setting that includes server-side events. Set it to the highest level your consent setup allows, then check Events Manager.

## Don't forget offline and CRM conversions

If your sales happen after a lead form, on WhatsApp or over the phone, the website pixel never sees the sale. You can send those later outcomes (qualified lead, booked call, closed sale) back to Meta through the Conversions API from your CRM. That teaches Meta to find people who become customers, not just people who fill in forms.

## Common Conversions API setup mistakes

- **Two integrations sending the same events.** For example a platform app and a tag manager both sending Purchase, which doubles counts.
- **Event names that don't match.** The pixel sends one name and the server another, so deduplication fails.
- **Missing value and currency** on purchase events, which weakens value-based optimisation and reporting.
- **Ignoring consent.** Sending personal data for visitors who declined tracking where consent is required.
- **Leaving test events on** after setup, which adds noise to live data.

## How to check your setup is working

1. Open **Events Manager** and select your dataset.
2. Check that key events (Purchase, Lead, Add to Cart) show both **Browser** and **Server** as sources.
3. Look at the **deduplication** status for events sent both ways.
4. Check **Event Match Quality** for each event and work on the lowest.
5. Use the **Test Events** tool to fire a test purchase or lead and confirm it arrives once.
6. Compare Meta's purchase count with your store's orders over the same period. They will rarely match exactly, but they should be close.

## Conclusion

The Meta Conversions API is no longer an advanced extra. It is the standard way to keep conversion data reliable as browser tracking weakens. Run it alongside the pixel, deduplicate with matching event IDs, improve Event Match Quality, and send offline outcomes where your sales happen after the click.

Our [Meta Ads management service](../services/meta-ads.html) includes Conversions API setup and checks as part of every campaign. If you are still deciding which platform to start with, read [Meta Ads vs Google Ads](meta-vs-google-ads.html).

## Frequently asked questions

### Do I still need the Meta pixel if I use the Conversions API?

Yes. Meta recommends using both. The pixel captures browser events and on-site behaviour, while the Conversions API sends events from your server that the browser might miss. With matching event IDs, Meta combines them and removes duplicates. Running both also gives you a backup if one of the two connections stops working.

### Is the Conversions API free?

The API itself is free to use. Costs come from setup and hosting: platform integrations are usually free, while the Conversions API Gateway, server-side tag managers or custom integrations may involve cloud hosting fees and developer time. Most small stores on Shopify or WooCommerce can start with the free platform integration.

### What is a good Event Match Quality score?

Meta's guidance is to aim for 6.0 or higher out of 10 where possible. Purchase and lead events usually reach higher scores because customers enter an email or phone number. Send more customer parameters, hashed where required, to improve the score.

### Why are my Meta conversions double-counted?

Usually because the pixel and the Conversions API send the same event without matching event IDs, or with different event names. Meta only deduplicates events with the same name and ID. Check the deduplication status in Events Manager and fix the event ID setup.

### Does the Conversions API work with consent rules in Europe?

It can, but you must respect consent. Only send personal data for visitors who have agreed where consent is required, and make sure your privacy policy explains server-side tracking. Server-side sending is not a way around consent requirements. Many platform integrations let you connect your consent settings so events follow each visitor's choice.

### Can I send WhatsApp or phone sales to Meta?

Yes. If you record leads in a CRM or spreadsheet, you can send later outcomes, such as a qualified lead or a closed sale, to Meta through the Conversions API. This helps Meta optimise for real customers rather than just form submissions.
