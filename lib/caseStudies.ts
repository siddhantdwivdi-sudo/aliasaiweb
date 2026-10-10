export type CaseStudyService = "Outbound" | "LinkedIn" | "SEO & GEO" | "Newsletter";

export type CaseStudyMetric = { value: string; label: string };

export type CaseStudySolution = {
  title: string;
  strategy: string;
  execution: string;
  outcome: string;
};

export type CaseStudy = {
  slug: string;
  /** Anonymised client description. */
  client: string;
  industry: string;
  services: CaseStudyService[];
  /** The case study headline; also the card title. */
  summary: string;
  /** Headline numbers shown on the card and the detail page. */
  metrics: CaseStudyMetric[];
  isSample: boolean;
  about: string;
  challenges: { title: string; body: string }[];
  solutionsIntro: string;
  solutions: CaseStudySolution[];
  results: string[];
  /** Optional closing line under the results. */
  resultsNote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "naas-provider-inquiry-to-meeting",
    client: "NaaS provider",
    industry: "Network-as-a-Service",
    services: ["LinkedIn", "SEO & GEO", "Newsletter"],
    summary:
      "How We Took a NaaS Provider’s Inquiry-to-Meeting Conversion from 3% to 8% in 4 Months",
    metrics: [
      { value: "3% → 8%", label: "Inquiry-to-meeting conversion" },
      { value: "4 months", label: "Time to result" },
    ],
    isSample: false,
    about:
      "Our client is a B2B provider of Network-as-a-Service (NaaS), selling managed networking to businesses. Their technology was strong, but their marketing wasn’t explaining it well enough to turn interest into meetings.",
    challenges: [
      {
        title: "Inconsistent leads",
        body: "The pipeline swung between busy and empty. The business was constantly reacting to the next slow month instead of planning for growth.",
      },
      {
        title: "Hard-to-explain use cases",
        body: "NaaS is technical, and prospects often didn’t understand what the products did or how they’d use them.",
      },
      {
        title: "Wrong language",
        body: "Their pitch described the product the way the company sees it, not the way their buyers describe their own problems.",
      },
      {
        title: "Low visibility in search",
        body: "Buyers researching networking options on Google and AI search weren’t finding them.",
      },
    ],
    solutionsIntro:
      "We fixed the message first, then built the content and presence that carried it to the right people.",
    solutions: [
      {
        title: "Buyer-Language Research and Messaging",
        strategy: "Make every piece of communication sound like the buyer, not the vendor.",
        execution:
          "We researched how their ideal customers talk about networking problems, priorities, and buying decisions. From that we built a messaging framework covering the words to use, the points to lead with, and the ones to avoid.",
        outcome:
          "One clear, consistent way to explain the business, used across every channel that followed.",
      },
      {
        title: "LinkedIn Newsletter",
        strategy: "Build trust with decision-makers before any sales conversation starts.",
        execution:
          "We launched a LinkedIn newsletter that turned complex networking topics into clear, practical reading, written for the people who make buying decisions.",
        outcome:
          "The right audience saw the depth of the company’s expertise before ever speaking to them.",
      },
      {
        title: "SEO and GEO Blogs",
        strategy: "Be the answer when buyers search, both on Google and in AI tools like ChatGPT.",
        execution:
          "We researched the questions their buyers ask, then wrote blogs built to rank on Google and structured so AI search engines can understand and cite them. The newsletter topics were adapted into SEO-optimized versions so each piece of research worked in more than one place.",
        outcome:
          "Content that ranked in search and brought in prospects who were already looking for what the client offers.",
      },
      {
        title: "Web Content",
        strategy:
          "Make sure visitors who arrive understand the offer and know what to do next.",
        execution:
          "We rewrote the website’s key pages in buyer language, with each service and use case explained plainly and tied to a clear next step.",
        outcome:
          "A site that explains the business well and moves visitors toward a conversation.",
      },
      {
        title: "LinkedIn Profile Optimization",
        strategy:
          "Give anyone who checks the profile after reading the content a clear answer fast.",
        execution:
          "We rewrote the profile so a visitor immediately understood who the company helps, what problem it solves, and why it’s credible.",
        outcome: "More of the people who found the content continued into real conversations.",
      },
      {
        title: "Use-Case Writing and Pitch Materials",
        strategy: "Make the offer understandable in minutes.",
        execution:
          "We wrote out each product and use case in plain, concrete terms and supported them with clean graphics and presentations.",
        outcome:
          "Prospects could see how the service applied to their own situation, which made meetings easier to win.",
      },
      {
        title: "Branding",
        strategy: "Make every touchpoint look and sound like one company.",
        execution:
          "We aligned the visuals and messaging across content, profiles, the website, and sales materials.",
        outcome: "A more consistent, credible presence at every point a prospect meets the brand.",
      },
    ],
    results: [
      "Inquiry-to-meeting conversion rose from 3% to 8% in 4 months.",
      "SEO and GEO content ranked on Google, adding a steady source of search-driven interest.",
      "A repeatable messaging system the sales team now uses in conversations and decks.",
    ],
    resultsNote:
      "Taken together, clearer language, consistent content, and better presentation gave the business a pipeline that didn’t depend on luck.",
  },
  {
    slug: "social-media-agency-outbound",
    client: "Social media services company",
    industry: "Social Media Services",
    services: ["Outbound"],
    summary:
      "How We Booked 119 Leads in 3 Months and Lifted a Social Media Agency’s Reply Rate from 2.3% to 8%",
    metrics: [
      { value: "119", label: "Leads in 3 months" },
      { value: "2.3% → 8%", label: "Reply rate" },
    ],
    isSample: false,
    about:
      "Our client is a social media services company working in one of the most crowded markets there is. They had a capable team and real results for their own customers, but their outbound wasn’t standing out in a flooded inbox.",
    challenges: [
      {
        title: "A saturated market",
        body: "Dozens of agencies offered similar services, so prospects had little reason to pick them over anyone else.",
      },
      {
        title: "An offer and voice that blended in",
        body: "Their outreach sounded like every other agency’s, so it was easy to ignore.",
      },
      {
        title: "A low reply rate of 2.3%",
        body: "Most of their emails went unanswered, so outbound wasn’t producing enough qualified conversations.",
      },
    ],
    solutionsIntro:
      "We fixed who they were targeting and what they were offering first, then built an outbound system that kept improving month over month.",
    solutions: [
      {
        title: "ICP Definition and Segmentation",
        strategy: "Send fewer, better-aimed emails to the buyers most likely to say yes.",
        execution:
          "We defined their ideal customer profile and segmented the market, so each group received messaging written for its situation.",
        outcome: "Outreach aimed at the right people, with copy that spoke to their specific needs.",
      },
      {
        title: "Voice and Offer Development",
        strategy: "Give prospects a clear, recognizable reason to reply.",
        execution:
          "We defined the company’s voice and built a strong, specific offer around what they do best.",
        outcome:
          "An offer prospects could understand quickly and a voice that didn’t sound like every other agency.",
      },
      {
        title: "Unique Positioning",
        strategy: "Stand out in a market where everyone sounds the same.",
        execution:
          "We worked out what set them apart and positioned them around it, so every email made the difference clear.",
        outcome:
          "A distinct place in a crowded space, which made their emails more memorable and easier to reply to.",
      },
      {
        title: "Original, Personalized Copywriting",
        strategy: "Earn the reply by showing each email was written for that person.",
        execution: "We wrote unique copy for each segment and personalized every email.",
        outcome:
          "Emails that read like a message from a person, not a template, which lifted replies.",
      },
      {
        title: "Monthly Testing and Optimization",
        strategy: "Let the data decide what works and keep improving it.",
        execution:
          "We ran multiple campaigns at once. Each month we dropped the copy that underperformed, built new versions of the winners, and tested those.",
        outcome:
          "Each month’s campaigns were stronger than the last, and the reply rate climbed steadily.",
      },
      {
        title: "Fast Reply Handling",
        strategy: "Catch prospects while interest is highest.",
        execution:
          "We monitored replies closely and booked every meeting within an hour of a positive response.",
        outcome:
          "Interested prospects went straight from reply to calendar before their attention moved on.",
      },
    ],
    results: [
      "119 leads generated in 3 months",
      "Reply rate up from 2.3% to 8%",
      "92 calls booked",
    ],
  },
  {
    slug: "ai-governance-startup-marketing-engine",
    client: "AI governance startup",
    industry: "AI Governance",
    services: ["LinkedIn", "Outbound"],
    summary:
      "How We Built an AI Governance Startup’s Brand and Marketing Engine from Scratch in 105 days",
    metrics: [
      { value: "105 days", label: "From zero to marketing engine" },
      { value: "4", label: "Strategic partnerships" },
      { value: "23", label: "Enterprise leads" },
    ],
    isSample: false,
    about:
      "Our client is building an AI governance product: an added layer that helps enterprises control and oversee how AI is used across their business. When we started, the product was still in development, with no brand, no market presence, and no marketing in place.",
    challenges: [
      {
        title: "No starting point",
        body: "The team had a product in the works but didn’t know where to begin in the market.",
      },
      {
        title: "No brand or positioning",
        body: "They hadn’t yet defined how to brand, position, and describe a new product to the enterprise buyers who would need it.",
      },
      {
        title: "No marketing system",
        body: "There was no funnel, no content, and no outreach in place to turn the product into conversations ahead of its beta launch.",
      },
    ],
    solutionsIntro:
      "We built everything from the ground up, starting with the brand and strategy, then ran every channel together so each supported the others.",
    solutions: [
      {
        title: "Brand Identity and Positioning",
        strategy:
          "Give a new product a clear identity and a clear place in the market before anything goes public.",
        execution:
          "We created the brand from scratch, defining how the product is described, who it’s for, and what sets it apart from other approaches to AI governance.",
        outcome:
          "A consistent brand and message that every later piece of content and outreach built on.",
      },
      {
        title: "Funnel and Marketing Strategy",
        strategy: "Map the whole route from a stranger to a conversation to a beta user.",
        execution:
          "We designed the complete funnel and marketing strategy, deciding which channels to use, in what order, and with what message.",
        outcome: "A clear plan the team could execute instead of guessing where to start.",
      },
      {
        title: "Website Content",
        strategy: "Make sure visitors understand a new product quickly.",
        execution:
          "We wrote the website’s content, explaining what the product does and why enterprises need it in plain, buyer-focused language.",
        outcome:
          "A site that explained the product clearly and gave visitors a reason to engage.",
      },
      {
        title: "LinkedIn Content",
        strategy: "Be visible to enterprise decision-makers before the product launches.",
        execution:
          "We built a steady LinkedIn presence with content that explained the problem and the team’s point of view.",
        outcome: "A growing, relevant audience that knew the brand before the beta opened.",
      },
      {
        title: "LinkedIn Outreach and Email Campaigns",
        strategy:
          "Start conversations with the right people directly instead of waiting for them to find the product.",
        execution:
          "We ran targeted LinkedIn outreach and email campaigns to the buyers and partners who mattered most.",
        outcome: "A steady flow of conversations with relevant prospects and potential partners.",
      },
      {
        title: "Intentional DM Conversations",
        strategy: "Go deep with the right people instead of broad with everyone.",
        execution:
          "We doubled down on direct-message conversations, focusing on genuine, purposeful exchanges with prospects and potential partners.",
        outcome:
          "Stronger relationships and the right partnerships, started through real conversations.",
      },
    ],
    results: [
      "Brand identity, offer, funnel, and content engine built from scratch",
      "4 strategic partnerships formed through intentional DM conversations",
      "23 leads with enterprise prospects across LinkedIn and email campaigns",
    ],
  },
  {
    slug: "b2b-saas-demo-calls",
    client: "B2B SaaS company",
    industry: "B2B SaaS",
    services: ["Outbound", "LinkedIn"],
    summary: "How We Booked 53 Demo Calls in 70 Days for a B2B SaaS Company",
    metrics: [
      { value: "53", label: "Demo calls in 70 days" },
      { value: "20+", label: "Demos a month, up from 6-7" },
    ],
    isSample: false,
    about:
      "Our client is a B2B SaaS company that was already booking demo calls but wanted to scale. They needed a system that could produce more calls, more consistently, without results falling off as volume went up.",
    challenges: [
      {
        title: "No consistent pipeline",
        body: "Demo bookings came in uneven waves, so it was hard to plan sales capacity or forecast growth.",
      },
      {
        title: "Difficulty scaling volume",
        body: "What worked at a small scale didn’t hold up when they tried to send more outreach, so growth stalled.",
      },
      {
        title: "Too much friction between “yes” and a booked call",
        body: "After a positive reply, it took at least four rounds of back-and-forth to get a demo on the calendar, and interested prospects dropped off along the way.",
      },
      {
        title: "Prospects felt the risk",
        body: "Nothing made it clear that taking a call came with no commitment, which made people hesitate.",
      },
    ],
    solutionsIntro:
      "We tightened the offer and the audience first, then removed friction from the booking process and ran fast testing cycles across two channels.",
    solutions: [
      {
        title: "Offer Re-Strategy",
        strategy: "Give prospects a stronger, clearer reason to book a demo.",
        execution:
          "We reworked how the offer was framed, focusing on the problems that mattered most to buyers and making the value of a demo obvious in the first few lines.",
        outcome:
          "A sharper offer that gave prospects a reason to say yes, and a foundation that held up as volume increased.",
      },
      {
        title: "Hyper-Specific ICP Segmentation",
        strategy: "Scale by being more precise, not just by sending more.",
        execution:
          "We broke the market into narrow, specific segments based on who their best buyers were, and wrote messaging for each one.",
        outcome:
          "Every message reached a buyer who recognized their own situation, which kept relevance and conversion high at higher volume.",
      },
      {
        title: "Natural Personalization at Scale",
        strategy:
          "Make every email feel written for that person, without sounding like a template.",
        execution:
          "We used our research and automation systems to gather detailed information on each prospect, then worked it into the flow of the message itself instead of tacking it on as a forced personalized opener.",
        outcome:
          "Emails that read like a genuine note from a person, which earned more replies.",
      },
      {
        title: "Email Campaigns and Multi-Account LinkedIn Outreach",
        strategy: "Reach qualified buyers directly, on the channels where they already are.",
        execution:
          "We ran targeted email campaigns for each segment and LinkedIn outreach across multiple accounts, using the same segments and offer so both channels reinforced each other.",
        outcome:
          "A steady stream of conversations with the right prospects, and higher volume without losing targeting.",
      },
      {
        title: "Booking Friction Removal",
        strategy:
          "Make the step from a positive reply to a booked demo as short as possible.",
        execution:
          "Before, there were at least four rounds of messages between a positive reply and a booked call. We removed every unnecessary step, gave the prospect the booking link straight away, and cut anything that slowed them down, leaving a one-step gap between a positive reply and a booked demo.",
        outcome:
          "Interested prospects went straight from reply to calendar, so far fewer fell away in between.",
      },
      {
        title: "Risk Reversal",
        strategy: "Take the risk off the prospect and put it on us.",
        execution:
          "We made it clear in the conversation that the demo was no commitment, and that if the prospect didn’t find the call useful, there was nothing further to do.",
        outcome:
          "Prospects felt safe saying yes, which raised the share of positive replies that became booked demos.",
      },
      {
        title: "Fast Testing and Iteration",
        strategy: "Find what works quickly and put more behind it.",
        execution:
          "We ran multiple campaign variations at once and reviewed results every two to three weeks, dropping what underperformed and building on what worked.",
        outcome:
          "Reply rates and booked calls improved steadily, with each cycle stronger than the last.",
      },
    ],
    results: [
      "Booked demo calls rose from 6-7 a month to 20+ a month",
      "53 demo calls booked in 70 days",
      "A one-step gap between a positive reply and a booked demo, down from four or more rounds of back-and-forth",
      "A repeatable, scalable pipeline built on a sharper offer and hyper-specific targeting",
    ],
  },
  {
    slug: "defi-ai-platform-network-growth",
    client: "DeFi AI platform",
    industry: "DeFi and AI",
    services: ["Outbound"],
    summary:
      "How We Grew a DeFi AI Platform’s Network of Developers and Partners by 40% in 5 Months",
    metrics: [
      { value: "40%", label: "Network growth" },
      { value: "5 months", label: "Time to result" },
    ],
    isSample: false,
    about:
      "Our client is a multi-chain AI agent platform in the DeFi space, built on decentralized technology and serving developers, partners, and a community of users.",
    challenges: [
      {
        title: "They needed growth",
        body: "The team wanted to scale, with a bigger network of developers and partners around the platform.",
      },
      {
        title: "Their brand didn’t stand out",
        body: "In a market where many projects look and sound alike, they needed a more distinct brand identity and clearer messaging.",
      },
    ],
    solutionsIntro:
      "We started by understanding the market, then built the brand and the channels around what we found.",
    solutions: [
      {
        title: "DeFi Market Analysis and Research",
        strategy: "Find the gap before designing anything.",
        execution:
          "We analyzed the DeFi market in depth, looking at how competing projects presented themselves visually and in their messaging.",
        outcome:
          "A clear picture of where the brand could stand out, both in how it looked and in what it said.",
      },
      {
        title: "Distinct Brand Messaging and Identity",
        strategy: "Give the brand a look and a voice that people recognize and remember.",
        execution:
          "Based on the gaps we found, we built a straightforward, transparent brand message and a distinct visual identity.",
        outcome: "A brand that was easy to understand and different from the others in its space.",
      },
      {
        title: "Overall Strategy for the DeFi Market",
        strategy: "Make sure growth efforts pointed in one direction.",
        execution:
          "We built a strategy for how the brand should show up in the DeFi market, tying the messaging, channels, and outreach together.",
        outcome: "Every activity supported the same positioning instead of working in isolation.",
      },
      {
        title: "Community Strategy on Telegram and Twitter",
        strategy: "Build a direct connection with customers where they already spend time.",
        execution:
          "We ran strategies on Telegram and Twitter to engage the community and communicate the brand consistently.",
        outcome: "A stronger, more direct connection between the brand and its customers.",
      },
      {
        title: "Outreach to Developers and Partners",
        strategy: "Grow the network that the platform depends on.",
        execution:
          "We reached out strategically to developers and potential partners, choosing the ones that mattered most to the platform.",
        outcome: "A larger, more relevant network around the product.",
      },
    ],
    results: [
      "Network of developers and partners grew by 40% in 5 months",
      "A unique brand identity established, improving brand recall",
      "A stronger connection with customers and the community through consistent, strategic presence on Telegram and Twitter",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
