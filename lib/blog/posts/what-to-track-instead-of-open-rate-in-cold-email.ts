import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "what-to-track-instead-of-open-rate-in-cold-email",
  title: "What Should You Track Instead of Open Rate in Cold Email?",
  metaTitle: "Cold Email Metrics to Track Instead of Open Rate | Alias AI",
  metaDescription:
    "Open rate is unreliable. These cold email metrics replace it: reply rate, meetings booked, bounces, spam complaints and opt-outs, and how to read each one.",
  tldr: "The cold email metrics to track instead of open rate are reply rate on emails sent, positive replies and meetings booked, bounce rate, spam complaint rate and opt-outs. Check the denominator before comparing any benchmark. Keep spam complaints below 0.10%. Count a reply as positive only when the person shows interest.",
  publishedAt: "2026-11-11",
  author: { name: "Alias AI" },
  category: "Email Outreach",
  tags: ["cold email", "email metrics", "reply rate", "deliverability"],
  primaryKeyword: "cold email metrics",
  body: [
    {
      type: "p",
      text: "Open rate stopped being a reliable count of readers once email apps began loading images on their own. We explain why in [is open rate still a relevant cold email metric](/blog/is-open-rate-still-a-relevant-cold-email-metric). This post answers the next question: which cold email metrics should you track instead?",
    },

    { type: "h2", text: "Which cold email metrics should you track instead of open rate?" },
    {
      type: "p",
      text: "Five numbers cover most of what open rate was supposed to tell you. Two show whether people care. Three show whether your list and your sending are healthy.",
    },
    {
      type: "table",
      headers: ["Metric", "What it is", "What it tells you"],
      rows: [
        ["Reply rate", "Replies from real people divided by emails sent, without auto-replies", "Whether your message and your list fit"],
        ["Positive replies and meetings booked", "Replies that show interest, and calls that actually happen", "Whether the right people care"],
        ["Bounce rate", "The share of emails that could not be delivered", "How clean your list is. If messages start bouncing, cut your sending volume"],
        ["Spam complaint rate", "The share of readers who mark you as spam", "Whether people want your email. Keep it below 0.10% and never let it reach 0.30%"],
        ["Opt-outs", "People who ask to stop receiving your emails", "A rise means the message or the list is wrong. Remove people within 48 hours"],
      ],
    },
    {
      type: "p",
      text: "The first two are your scoreboard. The last three are your warning lights. If a warning light comes on, fix it before you send more, because a damaged sender reputation lowers every campaign you run after it.",
    },

    { type: "h2", text: "Why do cold email reply rate benchmarks disagree so much?" },
    {
      type: "p",
      text: "Because they divide by different numbers. The number you divide by is called the denominator. A [2025 study of 7,530,489 cold emails](https://belkins.io/blog/cold-email-response-rates), run by an outreach agency on its own campaigns, found an average reply rate of 0.45%. That counted unique replies divided by emails sent, left out auto-replies and bounce notices, and had open tracking turned off. The same agency's earlier studies measured replies against the people who opened, which gives far bigger numbers. A 5% reply rate against openers and a 0.45% reply rate against total sends can describe the same campaign.",
    },
    {
      type: "p",
      text: "So never compare your reply rate with a benchmark until you know its denominator. We calculate reply rate on emails sent. That number does not change when an Apple server loads an image.",
    },

    { type: "h2", text: "What counts as a positive reply?" },
    {
      type: "p",
      text: "A reply is not the same as interest. “Remove me from your list” is a reply. So is “not the right person.” What matters for revenue is the count of interested replies and of meetings that actually happen.",
    },
    {
      type: "p",
      text: "We tag every reply as interested, not interested or neutral, and count a meeting only when the call takes place. Then read the funnel from the bottom. Plenty of replies but few interested ones usually means the list or the offer is off. Few replies of any kind point to the message, the list or inbox placement, so check those next.",
    },

    { type: "h2", text: "What does this look like in a real project?" },
    {
      type: "p",
      text: "For a social media services company, the numbers we tracked were reply rate, leads and calls booked. Reply rate went from 2.3% to 8%, with 119 leads in 3 months and 92 calls booked. Each month we dropped the copy that did worse, built new versions of the winners and tested those. We booked every meeting within an hour of a positive reply. [Read the case study](/case-studies/social-media-agency-outbound).",
    },
    {
      type: "p",
      text: "If you want these numbers set up and read for you, our [email and outbound](/services/email-outbound) work starts with an audit of what you send, who you send it to and what you measure. Metrics are also only one part of a plan. For who you sell to and what a customer costs to win, see our guide to [GTM for an AI startup](/blog/gtm-for-an-ai-startup).",
    },
  ],
  faqs: [
    {
      q: "What cold email metrics should I track instead of open rate?",
      a: "Track reply rate on emails sent, positive replies and meetings booked, bounce rate, spam complaint rate and opt-outs. Replies and meetings show whether people care. Bounces, spam complaints and opt-outs show whether your list and sending are healthy.",
    },
    {
      q: "What is a good cold email reply rate?",
      a: "It depends on the denominator and the list. A 2025 study of 7,530,489 cold emails found an average of 0.45%, counting unique replies divided by emails sent. Older studies measured replies against openers, which gives much higher numbers. Compare only against the same denominator.",
    },
    {
      q: "What spam complaint rate is too high?",
      a: "Keep it below 0.10% and never let it reach 0.30% or higher. Above 0.1% already hurts inbox delivery for bulk senders, who send close to 5,000 messages a day to personal Gmail. You can see the rate in Google Postmaster Tools.",
    },
    {
      q: "What counts as a positive reply in cold email?",
      a: "A reply that shows real interest, such as a yes, a question about the offer or a request for a call. Opt-outs, auto-replies and “wrong person” replies are not positive. Count a meeting only when the call actually happens.",
    },
    {
      q: "What is the denominator in reply rate?",
      a: "It is the number you divide replies by. Dividing by emails sent gives a lower, more honest figure than dividing by people who opened, because opens include machine loads. Always check which one a benchmark uses.",
    },
  ],
  sources: [
    {
      title: "Belkins: B2B Cold Email Response Rates, 2026 Study",
      url: "https://belkins.io/blog/cold-email-response-rates",
    },
    {
      title: "Google: Email sender guidelines",
      url: "https://support.google.com/a/answer/81126?hl=en",
    },
    {
      title: "Google: Email sender guidelines FAQ",
      url: "https://support.google.com/a/answer/14229414?hl=en",
    },
  ],
};
