export type FaqItem = { q: string; a: string };

export type HeadingPart = { text: string; italic?: boolean } | { br: true };

export type Service = {
  slug: "linkedin" | "seo-geo" | "email-outbound";
  metaTitle: string;
  metaDescription: string;
  heroHeading: HeadingPart[];
  heroSub: string;
  overview: string[];
  included: string[];
  process: string[];
  whoFor: string;
  cta: string;
  faqs: FaqItem[];
};

export const services: Service[] = [
  {
    slug: "linkedin",
    metaTitle: "LinkedIn Personal Branding · Alias AI",
    metaDescription:
      "Content, engagement, and intent tracking, run end to end, so the right buyers know you, trust you, and reach out.",
    heroHeading: [{ text: "Turn LinkedIn into a source of qualified conversations." }],
    heroSub:
      "Content, engagement, and intent tracking, run end to end, so the right buyers - know you, trust you, and reach out.",
    overview: [
      "Most founders and executives treat LinkedIn as a place to post and hope. The ones who get real business from it treat it as a channel: a clear position, consistent content, and a system for turning attention into conversations. B2B buyers trust people more than logos, and they usually form a view of you long before they book a call.",
      "We run that system for you. We write in your voice, engage with the people you want to reach, track who is showing interest, and manage your account day to day. Depending on your goals, we then build inbound (the right people come to you), outbound (we reach out to warm prospects), or both. The result is a profile that works like a sales asset, not a content hobby.",
    ],
    included: [
      "Positioning and voice: A clear message on who you help and why you’re the credible choice, plus a written voice guide so every post sounds like you.",
      "LinkedIn content copywriting: Posts and carousels that are briefed individually, written around your goals and audience, and delivered on a content calendar before anything goes live.",
      "Targeted engagement: Daily, relevant engagement with your ideal customers, partners, and industry voices, so you stay visible to the people who matter.",
      "Intent signal tracking: We monitor profile views, post interactions, and other buying signals to find warm prospects and decide who to engage first.",
      "Account management: Profile optimization, posting schedule, community management, and monthly performance reporting, handled for you.",
      "Inbound and outbound pathways: Warm interest is turned into conversations through DMs and outreach, based on your goals and how your business sells.",
    ],
    process: [
      "We start with a detailed onboarding to learn how you speak, who you sell to, and what success means for you: leads, calls, partnerships, or authority in a specific niche. From that we build your positioning, voice guide, and content strategy, with a calendar you approve before anything is published. Every post gets its own brief, and every draft is checked against your voice before it reaches you. You get one round of revisions per post.",
      "Once live, we handle the daily work: publishing, engaging with your target audience, and tracking intent signals. When someone shows interest, we move them toward a conversation in the way that fits your goals. Each month we review what’s working and adjust, so the strategy gets sharper over time.",
    ],
    whoFor:
      "Founders, consultants, and executives who sell to other businesses and want LinkedIn to produce real conversations, but don’t have the time to run it themselves. Best for people whose buyers check them out online before replying to anything.",
    cta: "Ready to turn LinkedIn into a pipeline channel? Let’s map your positioning.",
    faqs: [
      {
        q: "How do I get more inbound leads from LinkedIn as a founder?",
        a: "By being specific and consistent. Clear positioning, regular content aimed at your ideal buyer, and active engagement with that audience are what make people reach out. Random posting rarely does.",
      },
      {
        q: "How often should I post on LinkedIn to build a personal brand?",
        a: "Consistency matters more than volume. A steady cadence your audience can rely on, such as a few posts a week, beats bursts followed by silence.",
      },
      {
        q: "How long does it take to see results from LinkedIn personal branding?",
        a: "You can usually expect more engagement and profile views within the first 4 to 8 weeks. Warm inbound conversations typically build over 3 to 6 months of consistent execution. It compounds rather than spikes, and no one can honestly guarantee specific leads.",
      },
      {
        q: "What is intent signal tracking on LinkedIn?",
        a: "It means watching for signs that someone is interested, such as viewing your profile or repeatedly engaging with your posts. We use these signals to prioritize who to engage with, so effort goes to warm prospects first.",
      },
      {
        q: "Will the content actually sound like me?",
        a: "Yes. We map your voice at onboarding and check every draft against it. You review and approve before anything is published.",
      },
      {
        q: "What’s the difference between a LinkedIn ghostwriter and a personal branding agency?",
        a: "A ghostwriter writes posts. We also run engagement, track intent signals, and turn interest into conversations, so the work is tied to outcomes and not just to a posting schedule.",
      },
    ],
  },
  {
    slug: "seo-geo",
    metaTitle: "SEO & GEO Content — Alias AI",
    metaDescription:
      "Done-for-you SEO and GEO content built on real keyword research, structured for Google rankings and AI citation engines like ChatGPT, Perplexity, and Google AI Overviews.",
    heroHeading: [{ text: "Written to rank on Google. Built to get cited by AI." }],
    heroSub:
      "SEO gets you found. GEO gets you cited by the AI tools your buyers are already using instead of search bars.",
    overview: [
      "Search changed. People still Google things, but they also ask ChatGPT, Perplexity, and every other AI assistant directly, and those tools answer using a much smaller set of sources than a traditional search results page. Getting found today means showing up in both places: ranking on Google and getting referenced by the AI engines that are quietly becoming the new front door to the internet.",
      "We do both. SEO gets you found. GEO, Generative Engine Optimization, gets you cited, quoted, and recommended by the AI tools your prospects are already using instead of search bars. We handle the technical foundation, the keyword strategy, and the actual writing, so nothing gets lost in the handoff between what to write about and whether it reads like it was written by a person who actually knows the subject.",
    ],
    included: [
      "Technical SEO: site structure, meta, schema markup, everything the crawlers and AI engines need to actually read your site correctly",
      "Keyword research and mapping across search engines and AI platforms, verified across multiple tools before anything gets locked",
      "A content strategy built around what your buyers are actually searching, not vanity keywords",
      "Individually briefed blog posts and web pages, written with strategy and a point of view, not templated filler",
      "Schema markup and structured formatting so AI engines can parse and cite your content accurately",
      "A monthly content cadence, agreed upfront, delivered on schedule",
    ],
    process: [
      "We start with keyword research, cross-checked across multiple tools so we’re not locking a strategy into one algorithm’s opinion of what matters. Once keywords are verified, we build a content strategy and brief every piece individually, so each page has a specific job: rank for a term, answer a question, get cited by an AI engine, or all three.",
      "On the technical side, we handle meta, schema markup, and site structure so the content is actually readable by crawlers and AI models, not just humans. Then we write, with strategy behind every page, but also with personality, because content built purely for algorithms reads like it, and both Google and AI engines increasingly reward the opposite.",
    ],
    whoFor:
      "B2B companies, service providers, and founders who need to be found: by people searching Google and by the AI tools now answering those searches on their behalf. Especially useful for anyone whose buyers research extensively before reaching out.",
    cta: "Want to show up where your buyers are actually looking, search bar or AI chat? Let’s talk keywords.",
    faqs: [
      {
        q: "What is GEO (Generative Engine Optimization) and how is it different from SEO?",
        a: "SEO optimizes content to rank in traditional search results. GEO optimizes content to be understood, trusted, and cited by AI engines like ChatGPT and Perplexity when they generate answers directly. The two overlap but aren’t identical: GEO leans more heavily on clear structure, verifiable claims, and content that’s easy for a model to extract and quote.",
      },
      {
        q: "How do I get my brand mentioned by ChatGPT or AI search engines?",
        a: "Consistently, by publishing well-structured, factually solid content around the specific questions your buyers are asking, formatted in a way AI models can parse cleanly: clear headers, direct answers, and schema markup that supports it.",
      },
      {
        q: "How many blog posts do I need per month for SEO to work?",
        a: "There’s no universal number. What matters more is consistency and whether each piece is targeting a verified, relevant keyword rather than publishing volume for its own sake.",
      },
      {
        q: "What is schema markup and do I need it?",
        a: "Schema markup is structured code that tells search engines and AI models exactly what your content is about. It’s increasingly important for GEO specifically, since AI engines rely on it to extract accurate information.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "Typically a few months for early movement, longer for competitive terms. GEO visibility can sometimes shift faster since AI engines update their sourcing more frequently than search rankings.",
      },
      {
        q: "Can one agency handle both technical SEO and content writing?",
        a: "It should, ideally. Technical SEO without strong content underperforms, and good content without technical SEO often never gets found in the first place. The two need to be built together, not handed off between teams.",
      },
    ],
  },
  {
    slug: "email-outbound",
    metaTitle: "Email Marketing & Outbound · Alias AI",
    metaDescription:
      "Cold email and email marketing, built and run for you, so decision-makers hear from you before they ever search for a vendor.",
    heroHeading: [{ text: "Fill your calendar with qualified meetings." }],
    heroSub:
      "Cold email and email marketing, built and run for you, so decision-makers hear from you before they ever search for a vendor.",
    overview: [
      "Most B2B revenue depends on referrals and good months. Outbound email fixes that by putting your offer in front of the right decision-makers on a schedule you control. But it only works when the basics are in place: the right list, an offer worth replying to, and email infrastructure that actually reaches the inbox. Most failed campaigns break at one of those three points, not at the copy.",
      "We build and run all of it. Cold email brings in new conversations, and email marketing (newsletters and nurture sequences) keeps prospects warm until they’re ready to buy. We manage the setup, the writing, the replies, and the reporting, and we measure success by meetings booked and pipeline created, not opens or send volume.",
    ],
    included: [
      "Targeting: ICP review, offer sharpening, and verified lists of decision-makers who fit your best customers.",
      "Email infrastructure: Dedicated sending domains, authentication (SPF, DKIM, DMARC), inbox warm-up, and ongoing deliverability monitoring, so your main domain stays protected.",
      "Copy and sequences: Short, relevant cold emails and follow-ups written for your buyer, with A/B testing to find what works.",
      "Reply handling and booking: We manage the inbox, qualify positive replies, and book meetings directly onto your calendar.",
      "Newsletters and nurture: Regular email content and automated sequences that keep prospects engaged until the timing is right.",
      "Reporting: Clear numbers on deliverability, positive replies, meetings booked, and pipeline, not vanity metrics.",
    ],
    process: [
      "We start by reviewing your offer, audience, and current outreach, then define your ICP and build a verified prospect list. Before a single email goes out, we set up dedicated sending domains, authenticate them, and warm them up, which usually takes two to three weeks. Sending without this step is the most common reason campaigns fail. While that runs, we write your sequences and agree on the offer and messaging with you.",
      "Then we launch, starting small and scaling as deliverability holds. We handle every reply, qualify the interested ones, and book meetings to your calendar. Each week we test subject lines, angles, and targeting, and each month we report on what’s producing meetings. Newsletters and nurture sequences run alongside, so prospects who aren’t ready yet stay in touch with you.",
    ],
    whoFor:
      "B2B companies, agencies, and service providers who want a steady flow of qualified meetings without hiring an SDR team or managing email infrastructure themselves. Best for businesses with a clear offer and a defined buyer, selling to decision-makers.",
    cta: "Want a steady flow of qualified meetings? Let’s map your outbound system.",
    faqs: [
      {
        q: "Does cold email still work in 2026?",
        a: "Yes, when it’s targeted and technically sound. Generic, high-volume email has stopped working. Relevant messages to a well-defined list, sent from healthy infrastructure, still book meetings.",
      },
      {
        q: "How long until I start getting meetings?",
        a: "After a two to three week warm-up, first replies usually arrive within days of launch, and meetings follow in the first month or two. Expect a three-month runway to test angles and improve results.",
      },
      {
        q: "What is email deliverability and why does it matter?",
        a: "It’s whether your emails reach the inbox instead of spam. If they don’t land, nothing else matters, so we set up and monitor authentication, warm-up, and sending health before and during every campaign.",
      },
      {
        q: "Will cold email damage my company’s domain?",
        a: "Not when it’s done properly. We send from separate, dedicated domains and keep your primary domain isolated, so your day-to-day business email is never at risk.",
      },
      {
        q: "What’s the difference between cold email and email marketing?",
        a: "Cold email reaches people who don’t know you yet, to start a conversation. Email marketing, such as newsletters and nurture sequences, keeps people who do know you engaged until they’re ready to buy. They work best together.",
      },
      {
        q: "Is cold email compliant with GDPR and CAN-SPAM?",
        a: "B2B outreach is permitted in both the US and most of Europe when done correctly: clear sender identity, relevant targeting, and an easy opt-out. Rules vary by country, so we adapt campaigns to the markets you target. This isn’t legal advice, and we recommend confirming specifics for your region.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
