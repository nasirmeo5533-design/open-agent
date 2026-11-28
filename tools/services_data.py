# Service catalogue for OpenAgent service pages.
# Edit copy here, then run:  python tools/build_services.py
# Copy is original (written for OpenAgent). Do not paste competitor text here.

GENERIC_WHY = [
    ("fa-user-check", "You talk to the person doing the work", "No account managers in between. The person who plans {short} is the person who answers your messages."),
    ("fa-file-signature", "Scope in writing before anything starts", "Deliverables, timeline, price and reporting are agreed in writing first, so there are no surprises later."),
    ("fa-chart-simple", "Plain-language reporting", "You get the numbers that matter for {short}, what they mean, and what changes next. No vanity metrics."),
    ("fa-shield-halved", "Honest about what's realistic", "No guaranteed rankings, sales or overnight results. You get a clear plan and real effort, not empty promises."),
]

SERVICES = [
    {
        "slug": "website-development",
        "name": "Website Development & Optimization",
        "short": "your website",
        "nav": "Website Development",
        "icon": "fa-solid fa-laptop-code",
        "title": "Website Development Services & Web Design | OpenAgent",
        "desc": "Website development and web design for businesses in the US, UK, Canada, Australia and Europe: fast, mobile-first sites and landing pages that rank.",
        "h1": "Website Development <strong>That Turns Visitors Into Customers.</strong>",
        "kicker": "Fast, mobile-first and built to convert",
        "lede": "A website is often the first real conversation a customer has with your business. I build and improve websites and landing pages that load fast, read clearly on a phone and make the next step obvious.",
        "problem_h": "Is Your Website Losing You Customers?",
        "problem_sub": "Slow pages and unclear messages quietly cost you enquiries every day.",
        "problem_p": "Many business websites look fine but don't do their job. Pages take too long to load, the offer is buried, the contact form breaks on mobile and nobody knows which pages actually bring leads. I fix the foundations first, then improve the pages that matter most.",
        "issues": ["Slow loading on mobile", "Visitors leave without contacting you", "Outdated design that hurts trust", "No tracking of forms, calls or sales", "Hard to update without a developer"],
        "promise": "Every site I build is planned around one question: what should a visitor do next? Speed, structure, copy and tracking all support that answer.",
        "core_h": "From First Wireframe to a Website That Works",
        "core_p": "Whether you need a new site, a redesign or a few high-impact fixes, the work is scoped around your goals and the pages your customers actually use.",
        "core": [
            ("Business Websites", "Clean, professional sites for service businesses, brands and B2B companies."),
            ("Landing Pages for Ads", "Focused pages that match your Meta or Google Ads offer."),
            ("WordPress & Webflow Builds", "Sites you can update yourself without touching code."),
            ("Speed & Core Web Vitals", "Image, code and hosting fixes so pages load fast."),
            ("Conversion Improvements", "Clearer offers, better forms and stronger calls to action."),
            ("Technical SEO Setup", "Clean structure, metadata and schema from day one."),
            ("Tracking & Analytics", "GA4, form and call tracking so you can see what works."),
            ("Ongoing Care", "Updates, backups and small changes when you need them."),
        ],
        "industries": ["Local Service Businesses", "E-commerce Brands", "B2B & Professional Services", "Clinics & Wellness", "Real Estate & Property", "Startups & New Launches"],
        "faq": [
            ("How long does a new website take?", "A focused business site usually takes 2 to 6 weeks depending on pages, content and revisions. You get a timeline in writing before work starts."),
            ("Can you improve my existing site instead of rebuilding it?", "Yes. Often a set of targeted fixes to speed, structure and key pages is the better first step. I'll tell you honestly which option makes sense."),
            ("Will I be able to edit the site myself?", "Yes. Sites are built on platforms like WordPress or Webflow so you can update text and images without a developer."),
            ("Do you guarantee more leads?", "No one can honestly guarantee that. What I do is remove the obvious blockers, track results properly and keep improving based on real data."),
        ],
    },
    {
        "slug": "shopify-development",
        "name": "Shopify Development",
        "short": "your Shopify store",
        "nav": "Shopify Development",
        "icon": "fa-brands fa-shopify",
        "title": "Shopify Development Services & Shopify Expert | OpenAgent",
        "desc": "Shopify expert for brands in the US, UK, Canada, Australia and Europe: store setup, theme customization, speed fixes and app cleanup.",
        "h1": "Shopify Development <strong>That Makes Buying Easy.</strong>",
        "kicker": "Store setup, themes, speed and apps",
        "lede": "A Shopify store earns money when shoppers find the right product and get through checkout without friction. I set up, customize and fix Shopify stores for brands in the US, UK, Canada, Australia and Europe, from a first launch to a store that already sells and needs to sell better.",
        "problem_h": "Getting Visits but Not Enough Sales?",
        "problem_sub": "Small problems in a store add up to abandoned carts.",
        "problem_p": "Many Shopify stores run on a theme that was never fully set up. Product pages load slowly, collections are hard to browse, apps conflict with each other and nobody is sure the tracking is right. I fix the store's foundations first, then improve the pages that lead to a sale.",
        "issues": ["Slow product and collection pages", "Too many apps slowing the store down", "A theme that breaks when you change it", "Shipping and checkout settings that confuse buyers", "No reliable tracking from add-to-cart to purchase"],
        "promise": "Every change is judged by one test: does it make it easier for a shopper to find a product and buy it?",
        "core_h": "From Store Setup to a Store That Sells",
        "core_p": "Launching a new store, moving from another platform or fixing one that already runs: the work is scoped around your products and the way your customers shop.",
        "core": [
            ("New Store Setup", "Theme, products, collections, payments, shipping and taxes set up properly."),
            ("Theme Customization", "Sections and templates shaped to your brand, without hacks that break on updates."),
            ("Product & Collection Pages", "Layouts, filters and content that help shoppers choose."),
            ("Speed Optimization", "Image, app and theme fixes so pages load fast on phones."),
            ("App Setup & Cleanup", "The apps you need set up correctly, and the ones you don't removed."),
            ("Store Migration", "Products, customers and orders moved from WooCommerce or other platforms."),
            ("Tracking & Pixels", "GA4, Meta pixel and purchase events checked from product view to order."),
            ("Ongoing Support", "Monthly fixes, updates and small improvements when you need them."),
        ],
        "industries": ["Fashion & Apparel", "Beauty & Skincare", "Home & Lifestyle", "Health & Supplements", "Food & Beverage", "New Brand Launches"],
        "faq": [
            ("Do I need a Shopify plan before we start?", "Yes. The store and its subscription stay in your name, so you own everything. I can help you choose a plan that fits your size."),
            ("Can you work on my existing theme?", "Yes. Improving the theme you already have is often better than starting over. I'll tell you honestly if a new theme makes more sense."),
            ("Can you move my store from WooCommerce?", "Yes. Products, collections, customers and order history can usually be moved, and old URLs redirected so you keep your search traffic."),
            ("Do you guarantee more sales?", "No. Sales depend on your products, prices and traffic. What I do is remove what gets in the shopper's way and track results properly."),
        ],
    },
    {
        "slug": "search-engine-optimization",
        "name": "Search Engine Optimization",
        "short": "your SEO",
        "nav": "Search Engine Optimization",
        "icon": "fa-solid fa-magnifying-glass-chart",
        "title": "SEO Services & SEO Consultant for Businesses | OpenAgent",
        "desc": "SEO services for businesses in the US, UK, Canada, Australia and Europe: technical SEO, on-page optimization, content and local SEO.",
        "h1": "SEO Services <strong>That Bring the Right Visitors.</strong>",
        "kicker": "Technical, on-page, content and local SEO",
        "lede": "When customers search for what you sell, your business should be easy to find. I improve the technical health, content and local presence of your site so it earns visibility for searches that actually lead to customers.",
        "problem_h": "Struggling to Show Up on Google?",
        "problem_sub": "If customers can't find you, they find a competitor instead.",
        "problem_p": "Many businesses have a website that barely appears in search. Pages aren't indexed properly, content doesn't match what people search for and the Google Business Profile is incomplete. SEO fixes those foundations and builds steady visibility over time.",
        "issues": ["Pages not showing up in Google", "Traffic that never turns into leads", "Technical errors and slow pages", "Weak or missing local listings", "Content that targets the wrong keywords"],
        "promise": "SEO is a long-term channel. I focus on the fixes and content most likely to move the needle for your business, and report progress in plain language every month.",
        "core_h": "Complete SEO, From Audit to Growth",
        "core_p": "Every engagement starts with an audit, then a prioritized plan so the most valuable work happens first.",
        "core": [
            ("SEO Audit", "A clear list of technical, content and authority issues to fix."),
            ("Keyword Research", "Find the searches your best customers actually use."),
            ("Technical SEO", "Indexing, speed, structure, schema and crawl fixes."),
            ("On-Page Optimization", "Titles, headings, content and internal links done properly."),
            ("Content Strategy", "Pages and articles that answer real customer questions."),
            ("Local SEO", "Google Business Profile and local citations for nearby customers."),
            ("Link Building", "Earning relevant, quality mentions from other sites."),
            ("Monthly Reporting", "Rankings, traffic and leads explained in plain language."),
        ],
        "industries": ["Local Service Businesses", "E-commerce Stores", "B2B & SaaS Companies", "Clinics & Healthcare", "Legal & Professional Services", "Home Services & Trades"],
        "faq": [
            ("How long does SEO take to work?", "Most sites see early movement in 3 to 6 months, with stronger results building over time. It depends on competition and where your site starts."),
            ("Do you guarantee first-page rankings?", "No. Nobody controls Google's rankings, and guarantees are a red flag. I focus on the work most likely to improve visibility and report honestly on progress."),
            ("Do you do local SEO?", "Yes. Google Business Profile optimization and local citations are included where local customers matter to your business."),
            ("What do I need to provide?", "Access to your website, Google Search Console and Analytics, plus a short conversation about your customers and services."),
        ],
    },
    {
        "slug": "social-media-marketing",
        "name": "Social Media Marketing",
        "short": "your social media",
        "nav": "Social Media Marketing",
        "icon": "fa-solid fa-share-nodes",
        "title": "Social Media Marketing & Management Services | OpenAgent",
        "desc": "Social media marketing and management for businesses in the US, UK, Canada, Australia and Europe: strategy, content calendars and publishing.",
        "h1": "Social Media Marketing <strong>That Keeps Your Brand Visible.</strong>",
        "kicker": "Strategy, content, publishing and community",
        "lede": "Consistent, on-brand social media builds trust long before a customer contacts you. I plan, create and publish content for your platforms every month, and keep your community engaged in between.",
        "problem_h": "Posting Without a Plan?",
        "problem_sub": "Random posts and long silences make a brand easy to forget.",
        "problem_p": "Most businesses post in bursts, then go quiet when things get busy. Content doesn't match the platform, nobody replies to comments and there's no way to tell what's working. A simple monthly system fixes that.",
        "issues": ["Inconsistent posting", "Low engagement and reach", "Content that looks generic", "Comments and messages left unanswered", "No idea which posts bring customers"],
        "promise": "You get a monthly content calendar approved before the month starts, content made for each platform and a short report on what happened and what's next.",
        "core_h": "Everything Your Social Channels Need",
        "core_p": "Social media marketing covers the planning, the content and the daily care that keeps a brand active and believable.",
        "core": [
            ("Social Media Strategy", "Platforms, audience, tone and goals defined clearly."),
            ("Monthly Content Calendar", "Every post planned and approved before the month starts."),
            ("AI-Assisted Content Creation", "Graphics, captions, carousels and short videos, human-reviewed."),
            ("Reels & Short-Form Video", "Vertical video made for Instagram, Facebook and TikTok."),
            ("Publishing & Scheduling", "Content goes out on time, every week."),
            ("Community Management", "Comments and messages handled within the agreed scope."),
            ("Profile Optimization", "Bios, highlights and links set up to convert visitors."),
            ("Monthly Reporting", "Reach, engagement and follower growth explained simply."),
        ],
        "industries": ["E-commerce & Retail Brands", "Restaurants & Hospitality", "Clinics, Spas & Wellness", "Real Estate", "B2B & Professional Services", "Local Service Businesses"],
        "faq": [
            ("Which platforms do you manage?", "Usually Instagram, Facebook, LinkedIn and TikTok. We pick the ones where your customers actually spend time instead of trying to be everywhere."),
            ("How many posts per month?", "It depends on your package. Most businesses do best with a steady schedule they can sustain, typically 8 to 20 posts a month."),
            ("Do I approve content before it goes live?", "Yes. The monthly calendar and content are shared for approval before publishing."),
            ("Is social media marketing the same as paid ads?", "No. This is organic content and community. Paid campaigns are covered by Meta Ads or TikTok Marketing, and they work well together."),
        ],
    },
    {
        "slug": "google-ads",
        "name": "Google Ads Services",
        "short": "your Google Ads",
        "nav": "Google Ads Services",
        "icon": "fa-brands fa-google",
        "title": "Google Ads Management Services & PPC Consultant | OpenAgent",
        "desc": "Google Ads and PPC management for businesses in the US, UK, Canada, Australia and Europe: Search, Performance Max, Shopping and YouTube.",
        "h1": "Google Ads Management <strong>That Catches Ready-to-Buy Customers.</strong>",
        "kicker": "Search, Performance Max, Shopping and YouTube",
        "lede": "Google Ads puts your business in front of people who are already searching for what you sell. I plan, build and manage campaigns around one clear objective, whether that's calls, leads or sales.",
        "problem_h": "Spending on Google Ads Without Results?",
        "problem_sub": "Wasted clicks add up fast when campaigns aren't set up properly.",
        "problem_p": "Common problems include broad keywords that attract the wrong searches, no conversion tracking, ads sending people to a weak page and nobody reviewing search terms. Fixing the structure usually matters more than raising the budget.",
        "issues": ["High cost per click, few leads", "Ads showing for irrelevant searches", "No conversion tracking", "Landing pages that don't match the ad", "No clear reporting on what you get"],
        "promise": "Every campaign has one stated objective, proper tracking and a review schedule. You see what's spent, what came back and what changes next.",
        "core_h": "Google Ads Built Around Your Goal",
        "core_p": "From a first campaign to restructuring an existing account, the work is scoped around your offer, budget and the customers you want.",
        "core": [
            ("Account Audit", "Find wasted spend and missed opportunities in existing campaigns."),
            ("Keyword & Intent Research", "Target searches from people ready to act."),
            ("Search Campaigns", "Tightly themed ad groups with relevant ads."),
            ("Performance Max & Shopping", "Product and catalog campaigns for e-commerce."),
            ("YouTube & Display", "Awareness and remarketing across Google's network."),
            ("Conversion Tracking", "Calls, forms and purchases tracked properly in GA4 and Ads."),
            ("Ongoing Optimization", "Search terms, bids, ads and budgets reviewed regularly."),
            ("Clear Reporting", "Spend, leads and cost per result in plain language."),
        ],
        "industries": ["Home Services & Trades", "E-commerce Stores", "Legal & Professional Services", "Clinics & Healthcare", "B2B & SaaS Companies", "Local Businesses"],
        "faq": [
            ("What budget do I need for Google Ads?", "It depends on your market and what a customer is worth to you. After one conversation I'll suggest a realistic starting range. Ad spend is paid directly to Google."),
            ("How soon will I see results?", "Search campaigns can bring traffic within days, but most need a few weeks of data before they're properly optimized."),
            ("Do you guarantee leads or sales?", "No. Results depend on your offer, market, budget and website. I set up campaigns properly, track everything and report honestly."),
            ("Can you fix my existing account?", "Yes. An audit of your current account is often the best first step."),
        ],
    },
    {
        "slug": "ecommerce-seo",
        "name": "Ecommerce SEO Services",
        "short": "your store's SEO",
        "nav": "Ecommerce SEO",
        "icon": "fa-solid fa-cart-shopping",
        "title": "Ecommerce SEO Services for Shopify & WooCommerce | OpenAgent",
        "desc": "Ecommerce SEO for online stores in the US, UK, Canada, Australia and Europe: Shopify and WooCommerce SEO, product pages and technical fixes.",
        "h1": "Ecommerce SEO <strong>That Grows Organic Sales.</strong>",
        "kicker": "Shopify, WooCommerce and custom stores",
        "lede": "Organic search can become one of your most profitable sales channels. I optimize product pages, category pages and the technical setup of your store so shoppers find your products without paying for every click.",
        "problem_h": "Is Your Store Invisible in Search?",
        "problem_sub": "Relying only on paid ads makes every sale more expensive.",
        "problem_p": "Online stores often have thin product descriptions, duplicate pages, weak category pages and technical issues that stop Google from understanding the catalog. Fixing them builds traffic that keeps working without ad spend.",
        "issues": ["Product pages not ranking", "Duplicate and thin content", "Slow store and poor mobile speed", "Weak category pages", "Too much dependence on paid ads"],
        "promise": "The work focuses on the pages closest to revenue first: categories and best-selling products, then content that supports them.",
        "core_h": "SEO Built for Online Stores",
        "core_p": "Ecommerce SEO has its own challenges, from large catalogs to faceted navigation. Each plan is built around your platform and product range.",
        "core": [
            ("Store SEO Audit", "Technical, content and structure issues ranked by impact."),
            ("Product Page Optimization", "Titles, descriptions and images that help products rank."),
            ("Category Page SEO", "Strong category pages that target high-intent searches."),
            ("Technical Fixes", "Duplicate content, canonicals, speed and indexing."),
            ("Product Schema", "Rich results with price, stock and review data."),
            ("Shopify & WooCommerce SEO", "Platform-specific setup and fixes."),
            ("Content & Buying Guides", "Articles that bring shoppers into your categories."),
            ("Sales-Focused Reporting", "Organic traffic, revenue and top pages tracked monthly."),
        ],
        "industries": ["Fashion & Apparel", "Beauty & Skincare", "Home & Furniture", "Health & Supplements", "Electronics & Accessories", "Niche & Specialty Stores"],
        "faq": [
            ("Which platforms do you work with?", "Shopify, WooCommerce and most other major platforms. The approach adapts to what your platform allows."),
            ("How long until organic sales grow?", "Usually 3 to 6 months for meaningful movement, depending on competition, catalog size and your starting point."),
            ("Do you write product descriptions?", "Yes, where the scope includes it. Priority goes to best-sellers and high-potential products first."),
            ("Can SEO replace my paid ads?", "Over time it can reduce dependence on them. Most stores do best with both working together."),
        ],
    },
    {
        "slug": "meta-ads",
        "name": "Meta Ads Management",
        "short": "your Meta Ads",
        "nav": "Meta Ads Management",
        "icon": "fa-brands fa-meta",
        "title": "Meta Ads Agency: Facebook & Instagram Ads | OpenAgent",
        "desc": "Facebook and Instagram ads management for businesses in the US, UK, Canada, Australia and Europe: funnels, creative, Conversions API and reporting.",
        "h1": "Meta Ads Management <strong>For Facebook &amp; Instagram Growth.</strong>",
        "kicker": "Facebook and Instagram ads with a clear objective",
        "lede": "Meta Ads create demand by putting your offer in front of the right people before they start searching. I plan, create and manage Facebook and Instagram campaigns built around leads, sales or booked calls.",
        "problem_h": "Struggling With High Ad Costs and Low Returns?",
        "problem_sub": "Boosting posts and hoping for the best rarely works.",
        "problem_p": "If you're spending on Facebook or Instagram ads that don't convert, you're not alone. Common causes are the wrong audience, tired creatives, broken tracking and no follow-up on leads. I fix the system, not just the ad.",
        "issues": ["Ads shown to the wrong audience", "Creatives that don't stop the scroll", "High costs and low conversions", "No pixel or conversion tracking", "Leads that never get followed up"],
        "promise": "Each campaign has one stated objective, proper tracking with Pixel and Conversions API, and a regular review of what's working and what's changing.",
        "core_h": "From Creative to Conversion: Everything Your Meta Ads Need",
        "core_p": "Whether you want more leads, more online sales or more booked calls, the work covers strategy, creative, tracking and optimization.",
        "core": [
            ("Funnel Strategy & Campaign Planning", "Map the customer journey so ads reach people at the right moment."),
            ("Scroll-Stopping Creatives", "Reels, carousels and image ads made for each placement."),
            ("Lead Generation Campaigns", "Instant forms and landing pages that capture real interest."),
            ("E-commerce & Catalog Ads", "Dynamic product ads and offers for online stores."),
            ("Retargeting & Lookalikes", "Bring back warm visitors and find people like your best customers."),
            ("Pixel, Events & CAPI", "Accurate tracking so you know what's really working."),
            ("WhatsApp & CRM Follow-Up", "Fast lead follow-up so enquiries don't go cold."),
            ("Clear Reporting", "Spend, results and cost per result explained simply."),
        ],
        "industries": ["E-commerce & Product Brands", "Real Estate & Property", "Clinics, Spas & Aesthetics", "Travel & Hospitality", "Coaches & Course Creators", "Local Service Businesses"],
        "faq": [
            ("How much should I spend on Meta Ads?", "There's no fixed number. It depends on your offer and market. I'll suggest a realistic starting budget after one conversation. Ad spend is paid directly to Meta."),
            ("Do you create the ad creatives?", "Yes. Images, carousels and short-form video ads can be included in the scope."),
            ("How quickly will I see results?", "Campaigns need a learning period, usually 1 to 3 weeks, before performance stabilizes and optimization becomes meaningful."),
            ("Do you guarantee results?", "No. Performance depends on your offer, creative, budget and market. You get proper setup, honest reporting and continuous improvement."),
        ],
    },
    {
        "slug": "tiktok-marketing",
        "name": "TikTok Marketing",
        "short": "your TikTok",
        "nav": "TikTok Marketing",
        "icon": "fa-brands fa-tiktok",
        "title": "TikTok Marketing Agency & TikTok Ads Management | OpenAgent",
        "desc": "TikTok marketing for brands in the US, UK, Canada, Australia and Europe: organic content, short-form video, TikTok Ads and TikTok Shop support.",
        "h1": "TikTok Marketing <strong>That Gets Your Brand Seen.</strong>",
        "kicker": "Organic content, TikTok Ads and TikTok Shop",
        "lede": "TikTok rewards brands that feel native to the platform. I help businesses in the US, UK, Canada, Australia and Europe plan short-form content, run TikTok Ads and turn attention into followers, traffic and sales.",
        "problem_h": "Not Sure How to Make TikTok Work?",
        "problem_sub": "Repurposed ads and polished videos often fall flat on TikTok.",
        "problem_p": "Many brands post content that looks like an ad, get little reach and give up. TikTok needs hooks in the first seconds, native-feeling videos and a consistent rhythm. With the right approach it can reach new audiences fast.",
        "issues": ["Low views and reach", "Content that feels like an ad", "No clear posting strategy", "Ads that burn budget quickly", "No link between views and sales"],
        "promise": "You get a content plan built for TikTok, videos with strong hooks and, where it fits, ad campaigns tracked back to real results.",
        "core_h": "Organic and Paid TikTok, Under One Plan",
        "core_p": "TikTok works best when organic content and paid campaigns support each other.",
        "core": [
            ("TikTok Content Strategy", "Content pillars, formats and posting rhythm for your brand."),
            ("Short-Form Video Production", "AI-assisted, human-edited videos with strong hooks."),
            ("Trend & Hook Research", "Ideas grounded in what's working on the platform now."),
            ("TikTok Ads Campaigns", "In-feed ads, Spark Ads and conversion campaigns."),
            ("TikTok Shop Support", "Product listings and promotion for TikTok Shop sellers."),
            ("Creator & UGC Coordination", "Content from creators that feels authentic."),
            ("Pixel & Events Setup", "Tracking so ads optimize for real actions."),
            ("Performance Reporting", "Views, engagement and conversions explained clearly."),
        ],
        "industries": ["Fashion & Beauty Brands", "E-commerce Products", "Food & Restaurants", "Fitness & Wellness", "Apps & Consumer Tech", "Entertainment & Events"],
        "faq": [
            ("Is TikTok right for my business?", "If your customers are on TikTok and your product can be shown visually, it's often worth testing. I'll tell you honestly if it isn't a fit."),
            ("Do you make the videos?", "Yes. Video production can be included, and I can also work with footage you or creators provide."),
            ("Do you run TikTok Ads?", "Yes, including Spark Ads and conversion campaigns, with Pixel tracking set up properly."),
            ("Can you guarantee viral videos?", "No one can. The focus is on consistent, platform-native content that builds reach over time."),
        ],
    },
    {
        "slug": "chatgpt-ads",
        "name": "ChatGPT Ads Management",
        "short": "your ChatGPT Ads",
        "nav": "ChatGPT Ads Management",
        "icon": "fa-solid fa-robot",
        "title": "ChatGPT Ads & AI Search Optimization (GEO) | OpenAgent",
        "desc": "ChatGPT Ads and AI search optimization for businesses in the US, UK, Canada, Australia and Europe, so AI assistants understand and recommend you.",
        "h1": "ChatGPT Ads Management <strong>For the New AI Search Era.</strong>",
        "kicker": "AI assistant ads and AI search visibility",
        "lede": "More customers now ask AI assistants what to buy and who to hire. I help businesses in the US, UK, Canada, Australia and Europe get ready for advertising inside ChatGPT where it's available, and make their brand easier for AI tools to understand and recommend.",
        "problem_h": "Is Your Brand Missing From AI Answers?",
        "problem_sub": "Search behaviour is shifting from search boxes to conversations.",
        "problem_p": "When someone asks an AI assistant for a recommendation, brands with clear, well-structured information are easier to surface. Most business websites aren't built for this yet, and AI advertising is still new and changing fast.",
        "issues": ["Brand not mentioned by AI assistants", "Website content AI tools can't parse", "Unsure how ChatGPT ads work", "No way to measure AI-driven traffic", "Competitors moving first"],
        "promise": "You get practical, honest guidance on a channel that's still evolving: what's available now, what to test and how to measure it.",
        "core_h": "Get Ready for AI-Driven Discovery",
        "core_p": "This service combines ad management on AI platforms, where available, with the content and technical work that improves AI visibility.",
        "core": [
            ("ChatGPT Ads Setup", "Campaign setup and management as the ad platform becomes available."),
            ("AI Visibility Audit", "How AI assistants currently describe your brand and competitors."),
            ("AI-Friendly Content", "Clear, factual pages that answer the questions customers ask."),
            ("Structured Data & llms.txt", "Technical signals that help AI tools understand your site."),
            ("Brand Mention Strategy", "Earn mentions on sources AI assistants rely on."),
            ("Offer & Message Testing", "Find the messages that work in conversational contexts."),
            ("Traffic & Lead Tracking", "Measure visits and enquiries coming from AI platforms."),
            ("Monthly Insights", "What changed in AI search and what to do next."),
        ],
        "industries": ["SaaS & Tech Companies", "Professional Services", "E-commerce Brands", "Education & Courses", "Health & Wellness", "B2B Service Providers"],
        "faq": [
            ("Are ChatGPT ads available now?", "Advertising inside ChatGPT is new and access is still rolling out. I'll explain what's available for your business today and help you prepare for what's coming."),
            ("What is AI search visibility?", "It's how easily AI assistants can find, understand and mention your business when users ask for recommendations."),
            ("Can you guarantee my brand gets mentioned?", "No. AI answers can't be controlled. The work improves the signals AI tools use, which raises your chances over time."),
            ("Does this replace SEO?", "No. Strong SEO and clear content are the foundation of AI visibility. They work together."),
        ],
    },
    {
        "slug": "saas-marketing",
        "name": "SaaS Digital Marketing",
        "short": "your SaaS marketing",
        "nav": "SaaS Digital Marketing",
        "icon": "fa-solid fa-cloud",
        "title": "SaaS Marketing Agency for B2B Software Companies | OpenAgent",
        "desc": "SaaS marketing for software companies in the US, UK, Canada, Australia and Europe: positioning, paid acquisition, content and demo funnels.",
        "h1": "SaaS Digital Marketing <strong>Built Around Trials, Demos and MRR.</strong>",
        "kicker": "Acquisition, activation and growth for software",
        "lede": "SaaS marketing is about more than clicks. I help software companies attract the right users, turn them into trials and demos, and measure everything against pipeline and recurring revenue.",
        "problem_h": "Signups That Never Turn Into Customers?",
        "problem_sub": "Cheap clicks and vanity metrics don't pay for a SaaS business.",
        "problem_p": "Many SaaS teams run ads and publish content without a clear funnel. Trials don't activate, demos don't convert and nobody can say which channel brings paying customers. A connected strategy fixes that.",
        "issues": ["High cost per trial or demo", "Low trial-to-paid conversion", "Unclear positioning against competitors", "Content that doesn't drive signups", "No attribution to revenue"],
        "promise": "Every recommendation is tied to the metrics that matter for SaaS: qualified signups, activation, pipeline and MRR.",
        "core_h": "A Full-Funnel Plan for Software Companies",
        "core_p": "From early-stage startups to growing SaaS teams, the work is scoped around your stage, budget and sales model.",
        "core": [
            ("Positioning & Messaging", "Make your product's value clear in seconds."),
            ("Paid Acquisition", "Google, Meta and LinkedIn campaigns for trials and demos."),
            ("Landing Pages", "High-converting pages for each campaign and audience."),
            ("Content Marketing", "Articles and guides that attract your ideal users."),
            ("Free Trial & Demo Funnels", "Remove friction between first visit and signup."),
            ("Email Nurture & Onboarding", "Sequences that help trial users find value faster."),
            ("Retargeting", "Bring back visitors who didn't sign up the first time."),
            ("SaaS Metrics Reporting", "CAC, conversion rates and pipeline in one view."),
        ],
        "industries": ["B2B SaaS", "Productivity & Collaboration Tools", "Marketing & Sales Software", "Fintech & HR Tech", "Developer Tools", "Vertical SaaS"],
        "faq": [
            ("Do you work with early-stage startups?", "Yes. The scope is sized to your stage, often starting with positioning, a landing page and one acquisition channel."),
            ("Which channels work best for SaaS?", "It depends on your audience and price point. Google Search, LinkedIn and content usually lead for B2B, but I'll recommend based on your situation."),
            ("Can you work with our in-house team?", "Yes. I can run specific channels or support your team with strategy and execution."),
            ("Do you guarantee a CAC target?", "No. I set realistic benchmarks, test properly and report honestly against them."),
        ],
    },
    {
        "slug": "saas-seo",
        "name": "SaaS SEO",
        "short": "your SaaS SEO",
        "nav": "SaaS SEO",
        "icon": "fa-solid fa-chart-line",
        "title": "SaaS SEO Agency: Content & Technical SEO | OpenAgent",
        "desc": "SaaS SEO for software companies in the US, UK, Canada, Australia and Europe: product-led content, comparison pages and technical SEO for signups.",
        "h1": "SaaS SEO <strong>That Turns Searches Into Signups.</strong>",
        "kicker": "Product-led content and technical SEO for software",
        "lede": "The best SaaS SEO brings in people actively looking for a solution like yours. I build content and technical foundations that attract qualified searchers and guide them toward a trial or demo.",
        "problem_h": "Blog Traffic That Never Converts?",
        "problem_sub": "Ranking for the wrong keywords looks good on a chart and does nothing for revenue.",
        "problem_p": "Many SaaS blogs target broad topics that attract readers who will never buy. Meanwhile, high-intent searches like comparisons, alternatives and use cases go to competitors. SaaS SEO should start where buying intent is highest.",
        "issues": ["Traffic that doesn't convert", "Competitors own comparison searches", "Thin feature and use-case pages", "Technical issues on JS-heavy sites", "No link between SEO and pipeline"],
        "promise": "Content is prioritized by buying intent: bottom-of-funnel pages first, then supporting content that builds topical authority.",
        "core_h": "SEO Built for Software Products",
        "core_p": "Each plan maps keywords to your funnel so every page has a clear job.",
        "core": [
            ("SaaS SEO Audit", "Technical health, content gaps and quick wins."),
            ("Intent-Led Keyword Mapping", "Keywords grouped by funnel stage and value."),
            ("Comparison & Alternative Pages", "Win searches from buyers comparing tools."),
            ("Use-Case & Feature Pages", "Pages that match how customers describe their problem."),
            ("Product-Led Content", "Articles that show your product solving real problems."),
            ("Technical SEO for SaaS", "Rendering, site structure, speed and indexing."),
            ("Link Earning", "Mentions from relevant industry sites and publications."),
            ("Signup-Focused Reporting", "Organic traffic tied to trials and demos."),
        ],
        "industries": ["B2B SaaS", "Marketing & Sales Tools", "HR & Recruiting Software", "Fintech Platforms", "Developer Tools", "Healthcare & Vertical SaaS"],
        "faq": [
            ("How is SaaS SEO different from normal SEO?", "It focuses on product-led and comparison content, longer sales cycles and measuring success in trials, demos and pipeline rather than just traffic."),
            ("How long until we see signups from SEO?", "Bottom-of-funnel pages can start contributing in a few months; broader authority builds over 6 to 12 months."),
            ("Do you write the content?", "Yes, with input from your team on product details so the content is accurate."),
            ("Do you guarantee rankings?", "No. I focus on the work most likely to improve visibility for valuable searches and report progress honestly."),
        ],
    },
    {
        "slug": "lead-generation",
        "name": "Lead Generation",
        "short": "your lead generation",
        "nav": "Lead Generation",
        "icon": "fa-solid fa-filter",
        "title": "B2B Lead Generation Services & Lead Funnels | OpenAgent",
        "desc": "Lead generation for businesses in the US, UK, Canada, Australia and Europe: paid campaigns, landing pages, lead magnets and fast follow-up.",
        "h1": "Lead Generation <strong>That Fills Your Pipeline With Real Enquiries.</strong>",
        "kicker": "Campaigns, landing pages and fast follow-up",
        "lede": "More leads only help if they're the right leads and someone follows up quickly. I build lead generation systems that combine targeted campaigns, focused landing pages and fast follow-up.",
        "problem_h": "Getting Leads That Go Nowhere?",
        "problem_sub": "Low-quality leads and slow follow-up waste most marketing budgets.",
        "problem_p": "Businesses often get form fills from people who never answer the phone, or good leads that wait days for a reply. Lead generation works when targeting, qualification and follow-up are designed together.",
        "issues": ["Too few enquiries", "Leads that don't qualify", "Slow follow-up and lost deals", "No idea which source brings sales", "High cost per lead"],
        "promise": "The goal is qualified enquiries, not just form fills. Every system includes tracking from first click to booked call where the scope covers it.",
        "core_h": "A Complete Lead Generation System",
        "core_p": "Each system is built around your offer, your ideal customer and how your team handles enquiries.",
        "core": [
            ("Offer & Audience Strategy", "Define who you want and what will make them enquire."),
            ("Paid Lead Campaigns", "Meta, Google and LinkedIn campaigns built for leads."),
            ("Landing Pages & Forms", "Focused pages with forms that qualify as they capture."),
            ("Lead Magnets", "Guides, checklists and offers that attract the right people."),
            ("Instant Follow-Up", "WhatsApp, SMS and email replies within minutes."),
            ("CRM Integration", "Every lead lands in one place with its source attached."),
            ("Lead Qualification", "Questions and scoring that filter out poor fits."),
            ("Cost-Per-Lead Reporting", "Leads, quality and cost by channel, every month."),
        ],
        "industries": ["Home Services & Contractors", "Real Estate & Mortgage", "Clinics & Healthcare", "Legal & Financial Services", "B2B Service Companies", "Education & Coaching"],
        "faq": [
            ("How many leads will I get?", "It depends on your market, offer and budget. I'll give you a realistic estimate after reviewing your situation, not a promised number."),
            ("Which channels do you use?", "Usually Meta Ads, Google Ads or LinkedIn, chosen based on where your customers are and how they buy."),
            ("Can you connect leads to my CRM?", "Yes. Leads can be sent to most CRMs, such as HubSpot, Zoho or Pipedrive."),
            ("What makes a lead 'qualified'?", "We define it together, based on budget, location, need and timing, so you only pay attention to the right enquiries."),
        ],
    },
]

# Old URLs -> new slug (redirect stubs)
REDIRECTS = {
    "ai-content-images-videos": "social-media-marketing",
    "social-media-management": "social-media-marketing",
    "performance-marketing": "meta-ads",
    "ai-agent-development": "social-media-marketing",
    "ai-automation": "social-media-marketing",
    "full-stack-development": "website-development",
    "meta-google-ads": "meta-ads",
    "app-development": "website-development",
    "gohighlevel": "lead-generation",
}

# --- Photos ---
# assets/images/services/<slug>-<slot>.webp. Stock photos from Unsplash (Unsplash License:
# free for commercial use, no attribution required). Replace a file with your own photo
# (same name) and update the alt text and size here, then rebuild. Optional "pos" sets
# the CSS object-position when the frame crops the photo.
IMAGES = {
    "website-development": {
        "hero": {
            "alt": "Laptop showing code on a bright desk",
            "w": 1200,
            "h": 799
        },
        "problem": {
            "alt": "Hands typing on a laptop",
            "w": 1200,
            "h": 799
        },
        "core": {
            "alt": "Laptop with a glowing screen on a dark desk",
            "w": 1200,
            "h": 849
        }
    },
    "shopify-development": {
        "hero": {
            "alt": "Store owner working on a laptop among clothing racks",
            "w": 1200,
            "h": 675
        },
        "problem": {
            "alt": "Shopper holding a card while buying on a laptop",
            "w": 1200,
            "h": 675
        },
        "core": {
            "alt": "Laptop showing an online store on a white table",
            "w": 1200,
            "h": 793
        }
    },
    "search-engine-optimization": {
        "hero": {
            "alt": "Analytics graphs on a laptop screen",
            "w": 1200,
            "h": 855
        },
        "problem": {
            "alt": "Performance dashboard on a laptop",
            "w": 1200,
            "h": 800
        },
        "core": {
            "alt": "Person reviewing a search report on a laptop",
            "w": 1200,
            "h": 904
        }
    },
    "social-media-marketing": {
        "hero": {
            "alt": "Person using a laptop and a phone together",
            "w": 1200,
            "h": 800
        },
        "problem": {
            "alt": "Hands holding a phone with a social media feed",
            "w": 1200,
            "h": 1800
        },
        "core": {
            "alt": "Person working on a laptop at a desk",
            "w": 1200,
            "h": 800
        }
    },
    "google-ads": {
        "hero": {
            "alt": "Person reviewing an analytics dashboard on a laptop",
            "w": 1200,
            "h": 800
        },
        "problem": {
            "alt": "Close-up of campaign performance charts on a screen",
            "w": 1200,
            "h": 864
        },
        "core": {
            "alt": "Laptop on a table outdoors",
            "w": 1200,
            "h": 822
        }
    },
    "ecommerce-seo": {
        "hero": {
            "alt": "Online seller checking an order with boxes beside her",
            "w": 1200,
            "h": 800
        },
        "problem": {
            "alt": "Keyboard with a Buy key",
            "w": 1200,
            "h": 797
        },
        "core": {
            "alt": "Search performance report on a monitor",
            "w": 1200,
            "h": 732
        }
    },
    "meta-ads": {
        "hero": {
            "alt": "Hand holding a phone under a large like icon",
            "pos": "50% 32%",
            "w": 1200,
            "h": 1797
        },
        "problem": {
            "alt": "Person scrolling a social profile on a phone",
            "w": 1200,
            "h": 1500
        },
        "core": {
            "alt": "Laptop with code on a desk among plants",
            "w": 1200,
            "h": 800
        }
    },
    "tiktok-marketing": {
        "hero": {
            "alt": "Phone mounted on a tripod, ready to film",
            "w": 1200,
            "h": 1800
        },
        "problem": {
            "alt": "Creator filming himself on a phone",
            "w": 1200,
            "h": 679
        },
        "core": {
            "alt": "Woman photographing food with her phone",
            "w": 1200,
            "h": 1800
        }
    },
    "chatgpt-ads": {
        "hero": {
            "alt": "Robot and human hands reaching toward the letters AI",
            "w": 1200,
            "h": 675
        },
        "problem": {
            "alt": "Chat bubbles on a translucent screen",
            "w": 1200,
            "h": 675
        },
        "core": {
            "alt": "3D letters AI on a dark digital background",
            "w": 1200,
            "h": 675
        }
    },
    "saas-marketing": {
        "hero": {
            "alt": "Team working together on laptops",
            "w": 1200,
            "h": 801
        },
        "problem": {
            "alt": "Team meeting around a table with laptops",
            "w": 1200,
            "h": 822
        },
        "core": {
            "alt": "Team discussing a plan in a meeting room",
            "w": 1200,
            "h": 1799
        }
    },
    "saas-seo": {
        "hero": {
            "alt": "Analytics data on a computer screen",
            "w": 1200,
            "h": 800
        },
        "problem": {
            "alt": "Open-plan software company office",
            "w": 1200,
            "h": 900
        },
        "core": {
            "alt": "Rising line chart on a screen",
            "w": 1200,
            "h": 800
        }
    },
    "lead-generation": {
        "hero": {
            "alt": "Smiling support agent wearing a headset",
            "w": 1200,
            "h": 801
        },
        "problem": {
            "alt": "Man on a phone call at his desk",
            "w": 1200,
            "h": 675
        },
        "core": {
            "alt": "Headset next to a laptop",
            "w": 1200,
            "h": 800
        }
    }
}
