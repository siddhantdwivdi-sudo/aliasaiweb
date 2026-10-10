import type { FaqItem } from "./services";

export type MarqueeItem = { label: string; href: string };

export const marqueeItems: MarqueeItem[] = [
  { label: "LinkedIn Strategy", href: "/services/linkedin" },
  { label: "SEO & GEO", href: "/services/seo-geo" },
  { label: "Newsletters", href: "/#services" },
  { label: "Email Campaign", href: "/services/email-outbound" },
  { label: "Outbound Strategy", href: "/services/email-outbound" },
  { label: "Personal Branding", href: "/services/linkedin" },
  { label: "Web Content", href: "/services/seo-geo" },
  { label: "Blogs", href: "/services/seo-geo" },
  { label: "Lead Generation", href: "/#services" },
];

export const whyUsCards = [
  {
    title: "Unpredictable Pipeline",
    body: "Revenue depends on referrals and good months. Without a repeatable system that puts your offer in front of qualified buyers, your pipeline is hard to forecast and harder to grow.",
  },
  {
    title: "Outbound That Doesn’t Convert",
    body: "Generic sequences, poor deliverability, and weak targeting mean emails never reach decision-makers, and the replies that come in rarely turn into meetings.",
  },
  {
    title: "No Owned Channel to Nurture Demand",
    body: "Most of your prospects aren’t ready to buy yet. Without email and newsletters keeping you in front of them, you lose to whoever they remember when the budget opens up.",
  },
  {
    title: "Invisible to Buyers Researching Online",
    body: "Your buyers research on Google and in ChatGPT, Gemini, and Perplexity before they ever contact a vendor. If you aren’t ranking or being cited, you’re cut from the shortlist before the conversation starts.",
  },
  {
    title: "A Brand That Doesn’t Reflect Your Business",
    body: "Your LinkedIn presence is often the first place a prospect checks. If it doesn’t clearly show what you stand for and who you serve, it undermines every email you send and every meeting you book.",
  },
];

export const serviceCards = [
  {
    title: ["LinkedIn", "Personal Branding"],
    body: "LinkedIn content, targeted engagement, and intent-based outreach, managed end to end to grow your personal brand, attract inbounds, and position you as industry authority.",
    href: "/services/linkedin",
  },
  {
    title: ["SEO & GEO"],
    body: "SEO & GEO optimized blogs, website content, and newsletters built to improve Google rankings and increase visibility across AI search engines (ChatGPT, Gemini, Claude and other LLMs).",
    href: "/services/seo-geo",
  },
  {
    title: ["Email Marketing & Outbound"],
    body: "Email marketing, and cold email outreach built to generate qualified leads and booked meetings, putting your offer in front of the right decision-makers and turning inboxes into pipeline.",
    href: "/services/email-outbound",
  },
];

export const outcomes = [
  {
    title: "Step 1: Audit",
    body: "We review your marketing, positioning, offer, and current funnel to find what’s working, what’s leaking, and where your fastest return is - in your niche.",
  },
  {
    title: "Step 2: Position",
    body: "We define and segment your ICP, then sharpen your offer and positioning where needed, so every message speaks to a specific buyer.",
  },
  {
    title: "Step 3: Strategize",
    body: "We map the plan: which channels, messaging, and campaigns will return the most for your business, with clear targets and timelines.",
  },
  {
    title: "Step 4: Execute",
    body: "We launch and run LinkedIn, SEO & GEO, and email outbound, then track, test, and optimize every month toward qualified leads and booked meetings.",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    q: "Who is Alias AI for?",
    a: "B2B founders, consultants, agencies, and service companies that want a steady flow of qualified conversations without building an in-house marketing and sales team. If your buyers research you before replying, and you sell to decision-makers, we’re a fit.",
  },
  {
    q: "Should I invest in inbound or outbound lead generation?",
    a: "Most businesses need both. Outbound (cold email, LinkedIn outreach) starts conversations quickly, while inbound (LinkedIn content, SEO and GEO) builds trust and demand over time. We start with the one your business needs most right now, then add the other.",
  },
  {
    q: "Do I need LinkedIn, SEO, and email, or can I start with one?",
    a: "You can start with one. We begin with an audit to find which channel will return the most for your niche and offer, and we expand from there. The channels work better together, because each supports the others.",
  },
  {
    q: "How much does a B2B lead generation agency cost?",
    a: "It depends on the scope: which channels, how much volume, and how much setup is needed. We scope each engagement after a strategy call, so you see a specific plan and price before committing to anything.",
  },
  {
    q: "How much of my time do you need?",
    a: "Very little. After an onboarding session to capture your voice, goals, and audience, most clients spend a few minutes on approvals. We handle the writing, setup, outreach, and reporting.",
  },
  {
    q: "How do I know it’s working?",
    a: "We report on outcomes, not activity: qualified conversations, meetings booked, inbound inquiries, and your visibility in Google and AI search. You get a monthly review of what’s producing results and what we’re changing.",
  },
];

export type Review = { quote: string; name: string; role?: string };

export const reviews: Review[] = [
  {
    quote:
      "“Alias AI writes technical content with depth, which is rare. Their newsletters and web content helped us with SEO and AI search.”",
    name: "WeRoute",
  },
  {
    quote:
      "“Ankita’s team built our LinkedIn presence in the AI governance space and turned it into strategic conversations with the right people.”",
    name: "Qusure",
  },
  {
    quote:
      "“Alias AI designed and tested multiple email campaigns to reach subnet builders & compute providers, and the ones that worked put qualified meetings on our calendar.”",
    name: "Bittensor (Tao)",
  },
  {
    quote:
      "“Ankita has the right eye for positioning. She cleared up doubts we had about our messaging, and then her team wrote killer email campaigns that got people replying.”",
    name: "SocialMined AI",
  },
  {
    quote: "“Ankita is very meticulous and helped us grow our network strategically.”",
    name: "PaLM AI",
  },
];

export type Stat = { value: number; prefix?: string; suffix: string; decimals?: number; label: string };

export const stats: Stat[] = [
  { value: 8000, suffix: "+", label: "Leads Generated" },
  { value: 37, suffix: "+", label: "Clients Served" },
  { value: 1.4, prefix: "$", suffix: "M+", decimals: 1, label: "Revenue Generated" },
];
