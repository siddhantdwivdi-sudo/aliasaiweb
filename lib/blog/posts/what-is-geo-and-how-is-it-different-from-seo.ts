import type { BlogPost } from "@/lib/blog/types";

export const post: BlogPost = {
  slug: "what-is-geo-and-how-is-it-different-from-seo",
  title: "What Is GEO and How Is It Different From SEO?",
  metaTitle: "What Is GEO and How Is It Different From SEO? | Alias AI",
  metaDescription:
    "GEO is the work of getting cited in AI answers. See how it differs from SEO in goal and measurement, what stays the same, and what Google says to ignore.",
  tldr: "GEO, or generative engine optimization, is making your content easy for AI tools like ChatGPT, Perplexity, Gemini and Google AI Overviews to find, trust and cite. Most of the work is still SEO. What changes is the goal, being named inside an answer instead of ranked, and how you measure it.",
  publishedAt: "2026-11-14",
  author: { name: "Alias AI" },
  category: "SEO & GEO",
  tags: ["GEO", "SEO", "generative engine optimization", "AI search"],
  primaryKeyword: "what is GEO",
  body: [
    {
      type: "p",
      text: "GEO sounds like a new job. Part of it is, and a larger part is the old one. This post answers one question: what is GEO, and how is it different from SEO? We cover what carries over from SEO, what really changes, and what to ignore.",
    },

    { type: "h2", text: "What is GEO?" },
    {
      type: "p",
      text: "GEO stands for generative engine optimization. It means making your content easy for AI answer tools, such as ChatGPT, Perplexity, Gemini and Google's AI Overviews, to find, trust and use in their answers. The term comes from a [2024 research paper](https://arxiv.org/abs/2311.09735) that tested whether changes to content raised its visibility in AI answers. In that paper's own tests, some changes lifted visibility by up to 40%, and the results varied by topic.",
    },
    {
      type: "p",
      text: "You will also see AEO, which stands for answer engine optimization. Both labels point at the same work, so we use GEO for both.",
    },

    { type: "h2", text: "How does an AI answer pick its sources?" },
    {
      type: "p",
      text: "[Google's own account](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) of its AI features has two steps. First, the system retrieves pages from the normal search index. Then the model writes one answer from those pages and links to them. Before the first step, it often splits your question into several searches at once, which Google calls query fan-out. Ask how to fix a lawn full of weeds and it may also search for the best herbicides, weed removal without chemicals and how to prevent weeds. We describe Google's system here because it is the one Google documents.",
    },
    {
      type: "p",
      text: "That has a clear effect on who gets cited. A [March 2026 Ahrefs study](https://ahrefs.com/blog/ai-overview-citations-top-10/) of 863,000 searches found that only 37.9% of the pages cited in Google's AI Overviews also ranked in the top 10 for that search. Another 31.2% ranked between 11 and 100, and 31.0% ranked outside the top 100. The same study found about 76% in July 2025. Ahrefs improved how it reads citations in between, so part of the drop may be measurement, but it points to the fan-out searches supplying many of the sources. Ranking well for your main keyword is no longer enough. Your page also has to answer the questions around it.",
    },

    { type: "h2", text: "What stays the same between GEO and SEO?" },
    {
      type: "p",
      text: "More than most GEO vendors admit. Google says its AI features rely on the same core ranking and quality systems as normal search. To appear in them, a page must be indexed and eligible to show with a snippet in regular Google Search. So a page Google cannot index is out of the running, whatever else you do. What carries over:",
    },
    {
      type: "ul",
      items: [
        "**Pages Google can crawl and index.** This is the entry ticket.",
        "**Original content with a point of view.** Google says unique, non-commodity content will likely matter more than any other tip in its guide. A summary of what is already online adds nothing for an AI to quote.",
        "**Clear headings and sections.** They help readers first and machines second.",
        "**A good page experience on every device.**",
      ],
    },

    { type: "h2", text: "How is GEO different from SEO?" },
    {
      type: "table",
      headers: ["", "SEO", "GEO"],
      rows: [
        ["Goal", "A high rank for a keyword", "Being named or linked inside an answer"],
        ["What you compete for", "One position on a results page", "One of several sources behind an answer"],
        ["Typical query", "Short keywords", "Detailed questions that fan out into several searches"],
        ["Result stability", "A ranking you can check", "Answers shift with the prompt and the model, so no stable ranking exists"],
        ["What a win brings", "Clicks to your site", "Awareness, with fewer clicks"],
      ],
    },
    {
      type: "p",
      text: "The traffic gap is real. A [randomized experiment](https://www.searchenginejournal.com/ai-overviews-cut-organic-clicks-38-field-study-finds/573145/) run in January and February 2026 with 1,065 U.S. Chrome users found that AI Overviews, which appeared on 42% of queries, cut outbound organic clicks by 38% on the queries where they showed. Searches that ended with no click rose from 54% to 72%. It is a working paper that has not been peer-reviewed, and it covers desktop users only. Being cited builds awareness more than it sends visitors, so judge GEO on whether the right buyers know your name, not only on sessions.",
    },
    {
      type: "p",
      text: "Measurement is the biggest practical difference. Google launched Search Generative AI performance reports in Search Console in June 2026 and says they reached all websites worldwide by August 31. They show how often your pages appeared in AI Overviews and AI Mode, by page, country and date. Third-party AI visibility tools claim to cover other assistants too, but [many of them](https://digiday.com/media/geo-hype-busted-experts-call-it-more-seo-than-new-discipline/) work backward from simulated prompts instead of real user prompts, so treat their numbers as directional. No outside tool has access to Google's internal ranking systems.",
    },

    { type: "h2", text: "What GEO advice should you ignore?" },
    {
      type: "p",
      text: "Google lists several popular tactics it says you do not need for its AI features:",
    },
    {
      type: "ul",
      items: [
        "**llms.txt files.** Google Search does not use them. Having one neither helps nor harms your rankings.",
        "**Chopping content into tiny chunks.** Google says its systems can pick the relevant piece from a page that covers several topics.",
        "**Rewriting content just for AI.** AI systems understand synonyms, so you do not need every long-tail variation.",
        "**Buying or faking mentions.** Google says inauthentic mentions are not as helpful as they seem.",
        "**Special markup.** No schema.org markup is required for AI features, though structured data still helps with normal rich results.",
      ],
    },
    {
      type: "p",
      text: "We keep an llms.txt on our own site, because Google says it is fine to maintain one for other services that read it. We do not expect it to move Google rankings.",
    },

    { type: "h2", text: "Do you need GEO as a separate job?" },
    {
      type: "p",
      text: "Treat it as SEO plus three extras. These are our own rules of thumb, not a standard.",
    },
    {
      type: "ul",
      items: [
        "**Answer the neighbouring questions.** AI tools split a question into several searches, so a page that answers the main question and the obvious follow-ups has more chances to be used. Do not write a separate page for every variation. Google treats doing that to manipulate results as scaled content abuse.",
        "**Show up where AI looks.** In the Ahrefs data, YouTube is the most cited domain in AI Overviews, and among cited pages that ranked nowhere in the top 100 for the search, 18.2% were YouTube videos. Real, useful presence on the sites and formats your buyers use, video included, beats fake mentions.",
        "**Check a fixed set of buyer questions every month.** Ask the same ten questions in each assistant and note whether you are named. It is a rough check, because answers vary.",
      ],
    },
    {
      type: "p",
      text: "In our work for a Network-as-a-Service provider, SEO and GEO blogs were one of seven workstreams. That content ranked on Google and brought in search-driven interest. The case study does not claim AI citations. [Read the case study](/case-studies/naas-provider-inquiry-to-meeting).",
    },
    {
      type: "p",
      text: "If you want to know whether your site clears the SEO basics before you spend on GEO, our [SEO and GEO service](/services/seo-geo) starts with an audit of what is indexed, what answers your buyers' questions and where you appear today. GEO is also one channel among several. To decide which channels deserve your budget, see our guide to [GTM for an AI startup](/blog/gtm-for-an-ai-startup).",
    },
  ],
  faqs: [
    {
      q: "What does GEO stand for?",
      a: "GEO stands for generative engine optimization. It means making content easy for AI answer tools such as ChatGPT, Perplexity, Gemini and Google AI Overviews to find, trust and cite. The term comes from a 2024 research paper. AEO, answer engine optimization, is a similar label for the same work.",
    },
    {
      q: "Is GEO the same as SEO?",
      a: "The foundation is the same. Google says its AI features rely on its core ranking and quality systems, so crawlable, original, helpful pages matter for both. The differences are the goal, being named in an answer instead of ranked, and how you measure results.",
    },
    {
      q: "Does GEO replace SEO?",
      a: "No. A page must be indexed and eligible to show in Google Search before it can appear in Google's AI features, so SEO comes first. GEO adds work on answering follow-up questions, being present where AI pulls sources and tracking whether you are named.",
    },
    {
      q: "How do you measure GEO?",
      a: "For Google's AI features, use the Search Generative AI performance reports in Search Console, which show how often your pages appeared in AI Overviews and AI Mode. Third-party tools simulate prompts for other assistants, and many cannot see real user prompts, so treat them as directional. You can also check a fixed list of buyer questions each month.",
    },
    {
      q: "Do you need llms.txt for GEO?",
      a: "Not for Google. Google says Search does not use llms.txt files, and having one neither helps nor harms rankings. Other services may read them, so keeping one is harmless, but do not count on it to win citations.",
    },
    {
      q: "Does GEO send much traffic?",
      a: "Less than regular results. A randomized experiment in early 2026 found AI Overviews cut outbound organic clicks by 38% on the queries where they appeared. It is a working paper, not yet peer-reviewed. The value is more about the right buyers knowing your name.",
    },
  ],
  sources: [
    {
      title: "Google Search Central: Optimizing for generative AI features on Google Search",
      url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    },
    {
      title: "Aggarwal et al.: GEO: Generative Engine Optimization (KDD 2024)",
      url: "https://arxiv.org/abs/2311.09735",
    },
    {
      title: "Google Search Central Blog: Introducing Search Generative AI performance reports in Search Console (June 2026)",
      url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
    },
    {
      title: "Ahrefs: Update: 38% of AI Overview Citations Pull From The Top 10 (March 2026)",
      url: "https://ahrefs.com/blog/ai-overview-citations-top-10/",
    },
    {
      title: "Search Engine Journal: Study Confirms Google AI Overviews Cut Organic Clicks 38% (2026)",
      url: "https://www.searchenginejournal.com/ai-overviews-cut-organic-clicks-38-field-study-finds/573145/",
    },
    {
      title: "Digiday: Many GEO tactics are not that different from search optimization",
      url: "https://digiday.com/media/geo-hype-busted-experts-call-it-more-seo-than-new-discipline/",
    },
  ],
};
