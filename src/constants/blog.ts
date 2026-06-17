export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

export const MOCK_POSTS: BlogPost[] = [
  {
    slug: "pass-transcribeme-2026",
    title: "How to Pass the TranscribeMe Exam in 2026: Swahili-English Tips",
    excerpt:
      "A comprehensive guide for Kisii University students detailing clean verbatim rules, tag syntax, and Swahili-English transcription shortcuts.",
    date: "May 28, 2026",
    author: "Denis Kiplagat (SecGen)",
    readTime: "6 min read",
    category: "Transcription",
  },
  {
    slug: "chrome-extensions-va",
    title: "Top 5 Chrome Extensions for Remote Virtual Assistants",
    excerpt:
      "Optimize your workflow. Boost spreadsheet productivity and email speeds with these vetted browser utilities.",
    date: "Jun 12, 2026",
    author: "Onyango Michael (Chairperson)",
    readTime: "4 min read",
    category: "Virtual Assistant",
  },
  {
    slug: "upwork-payments-safety",
    title: "Escrow and Client Safety: Navigating Payments in Kenya",
    excerpt:
      "Avoid contract risks. Learn how to verify client profiles, secure hourly trackers, and link M-Pesa channels cleanly.",
    date: "Apr 02, 2026",
    author: "Ann Muchiri (Treasurer)",
    readTime: "8 min read",
    category: "Freelancing",
  },
];
