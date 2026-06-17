export interface Lesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string; // Markdown formatted educational content
}

export interface Course {
  id: string;
  title: string;
  description: string;
  badge: string;
  lessons: Lesson[];
}

export const COURSES_DATA: Course[] = [
  {
    id: "virtual-assistant",
    title: "Virtual Assistant & Data Entry",
    description: "Learn to manage calendars, format spreadsheet records, configure inventories, and execute support tasks.",
    badge: "Operations",
    lessons: [
      {
        id: "va-intro",
        title: "Introduction to Virtual Assistance",
        duration: "30 mins",
        summary: "Mindset, operations, and core software tools.",
        content: `### 1. The Virtual Assistant Mindset
A Virtual Assistant (VA) provides administrative, creative, or technical support to business clients remotely. To succeed, you must possess strong communication skills, time management, and a high degree of reliability.

### 2. Core Operational Toolkit
Most remote clients expect you to be comfortable with:
* **Communication**: Slack, Microsoft Teams, WhatsApp Business.
* **Coordination**: Google Calendar, Calendly (scheduling discovery calls).
* **Document Management**: Google Workspace (Docs, Sheets, Slides), Dropbox.
* **Task Management**: Trello, Asana, ClickUp.

### 3. Setup Practice
Before bidding, ensure you have a dedicated distraction-free workspace. Your speed of response on communication channels is the number one metric clients evaluate during your trial period.`
      },
      {
        id: "va-data",
        title: "Spreadsheet Management & Data Cleaning",
        duration: "45 mins",
        summary: "Sorting, parsing, and cleaning data tables.",
        content: `### 1. Data Sanitization Basics
Spreadsheets are often messy. Clients will hire you to clean up lead lists, inventory logs, or email lists. Your core operations include:
* **Removing Duplicates**: Highlight column -> Data -> Remove Duplicates.
* **Trimming Whitespace**: Use the \`=TRIM(text)\` formula to remove unwanted spaces.
* **Proper Case Formatting**: Use \`=PROPER(text)\` to clean up name fields (e.g. converting "onyango michael" to "Onyango Michael").

### 2. Splitting and Merging Columns
* **Text to Columns**: Use to split full names into First Name and Last Name columns using space as a delimiter.
* **Concatenation**: Combine columns (e.g., merging code and phone numbers) using \`=A2 & " " & B2\` or \`=CONCATENATE(A2, B2)\`.

### 3. VLookup & Filters
Mastering \`=VLOOKUP\` or \`=XLOOKUP\` and applying column sorting filters is essential for quick data lookups.`
      },
      {
        id: "va-shopify",
        title: "E-Commerce Store Administration (Shopify)",
        duration: "1 hour",
        summary: "Uploading products, description tags, and orders.",
        content: `### 1. Shopify Dashboard Navigation
E-commerce store owners hire VAs to run their daily logistics. The main tabs in Shopify are:
* **Products**: Where you upload new listings, adjust prices, and manage variants (colors, sizes).
* **Orders**: Where you verify paid entries, coordinate fulfillment, and update tracking numbers.
* **Customers**: Management of customer account profiles and tags.

### 2. Product Upload Workflow
When listing a new item, ensure:
* **High-Quality Titles**: Clear, keyword-rich names.
* **SEO Descriptions**: Outline features, sizing, and materials clearly.
* **Variant Settings**: Set correct SKUs, price tags, and inventory counts.
* **Tags**: Add category and collection tags so the item lists in correct collections.

### 3. Order Processing
VAs match orders with dropshipping sources (e.g. CJ Dropshipping, Zendrop) and input order details to trigger shipping.`
      },
      {
        id: "va-comms",
        title: "Client Email & Ticket Management",
        duration: "45 mins",
        summary: "Customer service structures and template libraries.",
        content: `### 1. Customer Support Platforms
Large e-commerce stores use helpdesk platforms to handle inquiries. Familiarize yourself with:
* **Zendesk / Gorgias / Freshdesk**: Centralized ticket centers.
* **Email / Live Chat**: Handling real-time customer questions.

### 2. Essential Response Guidelines
* **Tone**: Polite, solution-oriented, and professional.
* **Speed**: Aim for under 12-hour responses.
* **Clarity**: Write simple, clear sentences. Avoid long technical jargon.

### 3. Support Templates
Always customize templates before sending. For a delayed order, use:
*"Hello [Name], thank you for reaching out. We apologize for the delay. Your tracking details show the shipment is currently at [Location] and is estimated to arrive on [Date]. Let us know if you need any further assistance!"*`
      }
    ]
  },
  {
    id: "transcription",
    title: "Transcription & Subtitling",
    description: "Learn audio transcription rules, verbatim styling, formatting benchmarks, and caption sync methods.",
    badge: "Audio & Text",
    lessons: [
      {
        id: "tr-verbatim",
        title: "Verbatim Guidelines: Clean vs. Full",
        duration: "35 mins",
        summary: "Understanding the difference between text styles.",
        content: `### 1. Verbatim Definitions
Transcription platforms split work into two core verbatim styles:
* **Clean Verbatim (Most Common)**: Transcribing speech by removing stutters, filler words (e.g., "uh", "um", "like", "you know"), and false starts. You edit the speech slightly to make it readable while preserving the exact meaning.
* **Full Verbatim**: Transcribing *every single sound* exactly as spoken. Includes stutters ("I-I went"), filler words, false starts, and emotional markers (laughter, sighing).

### 2. Basic Transcription Rules
* **Numbers**: Spell out numbers zero through nine. Use digits for 10 and above (unless platform guidelines specify otherwise).
* **Capitalization**: Capitalize proper nouns, starts of sentences, and official titles.
* **Punctuation**: Use natural punctuation. Avoid run-on sentences.

### 3. Practice Check
Listen to an audio clip. Write it in Clean Verbatim first, then Full Verbatim. Notice how stutters are dropped in clean format.`
      },
      {
        id: "tr-software",
        title: "Transcription Software & Playback Controls",
        duration: "40 mins",
        summary: "Configuring hotkeys and speed controls.",
        content: `### 1. Transcription Applications
Do not transcribe by manually pausing audio in standard players. Use dedicated transcription tools:
* **Express Scribe**: Desktop app with hotkey controls.
* **oTranscribe**: Web-based free player that combines audio and text editor.
* **Otter.ai / Descript**: AI-assisted draft transcribers (often used to generate drafts, which you then manually correct).

### 2. Keyboard Hotkey Configuration
Map your keyboard to control playback without lifting your hands from typing:
* **F7**: Rewind 3 seconds.
* **F8**: Play / Pause audio.
* **F9**: Fast forward 3 seconds.
* **Speed Control**: Set playback speed to 0.8x or 0.9x when dealing with fast speakers.

### 3. Audio Improvement
Use tools like **Audacity** to reduce background static noise or boost volume before transcribing.`
      },
      {
        id: "tr-timestamps",
        title: "Time-Stamping & Speaker Labeling",
        duration: "30 mins",
        summary: "Syntax for formatting dialogues and sync marks.",
        content: `### 1. Formatting Speaker Labels
When dealing with multi-speaker audio, label each speaker clearly:
* Use proper speaker names if known (e.g., **Dr. Teresa:** or **Onyango:**).
* Use generic labels if names are unknown (e.g., **Speaker 1:**, **Speaker 2:**).
* Labels must be bolded and followed by a colon.

### 2. Time-Stamping Rules
Timestamps are used to align text with audio. They are inserted at regular intervals (every 2 minutes) or when speaker change occurs.
* Format: **[HH:MM:SS]** or **[MM:SS]**. Example: **[00:04:12]**.
* Always place the timestamp exactly where the speech starts.

### 3. Inaudible Audio
If a word cannot be understood due to background noise or accent, use the standard tag: **[inaudible 00:03:15]** specifying the timestamp.`
      },
      {
        id: "tr-exam",
        title: "Passing Platform Exams (TranscribeMe/Rev)",
        duration: "50 mins",
        summary: "Common tricks in entrance guidelines.",
        content: `### 1. The Onboarding Barrier
To get paid on global transcription portals, you must pass a strict guidelines test. Most students fail due to minor formatting errors, not spelling mistakes.

### 2. Crucial Test Gotchas
* **Stutters**: In clean verbatim, do not write stutters.
* **Contractions**: Write exactly what is spoken. If they say "gonna", but the style guide requires correcting to "going to", follow the guide.
* **Tags**: Ensure tags like [laughter] or [music] are spelled exactly as specified in the manual.
* **Capitalization**: Pay close attention to capitalized brand names (e.g., iPad, Safaricom).

### 3. Practice Strategy
Download the official Style Guide PDF. Open the test practice page, transcribe the mock files, and verify word-for-word before submitting.`
      }
    ]
  },
  {
    id: "copywriting",
    title: "Content & SEO Copywriting",
    description: "Learn web content outlines, keyword research, headline hierarchies, and pitch creation.",
    badge: "Writing",
    lessons: [
      {
        id: "cw-basics",
        title: "Web Copy vs. Academic Writing",
        duration: "30 mins",
        summary: "Structuring short, highly readable text.",
        content: `### 1. Readability is King
Web users do not read word-for-word; they scan. Academic essays (long paragraphs, complex vocabulary) do not work on websites.
* **Paragraph Length**: Keep paragraphs to 2-3 sentences max.
* **Sentences**: Write clear, active-voice sentences.
* **Visual Breaks**: Use lists, bold key points, and H2/H3 subheadings.

### 2. Writing for Action (Copywriting)
Copywriting is writing designed to prompt action (e.g. buying a product, signing up).
* Focus on benefits, not just features (e.g., instead of "This laptop has a 10-hour battery", write "Work from anywhere in Kisii without worrying about power cuts").

### 3. Practice Editing
Take a dry, academic paragraph and rewrite it as a snappy blog introduction.`
      },
      {
        id: "cw-seo",
        title: "SEO Foundations & Headline Hierarchy",
        duration: "45 mins",
        summary: "Integrating search keywords and structures.",
        content: `### 1. Search Engine Optimization (SEO)
SEO content is written to rank high on search engines (Google). Key terms:
* **Primary Keyword**: The main phrase people search (e.g., "best transcription tools").
* **Keyword Density**: Integrate your keyword naturally (aim for 1-2% of total word count).

### 2. Headline Hierarchy (HTML Tags)
Proper heading structure helps Google read your content:
* **H1**: The main title (Only one per page).
* **H2**: Core sub-topics.
* **H3**: Sub-points under H2s.
* Always integrate keywords in at least one H2.

### 3. Meta Descriptions
Write a compelling 150-character summary that appears on search results, encouraging users to click.`
      },
      {
        id: "cw-blog",
        title: "Structuring Blog Articles & Reviews",
        duration: "45 mins",
        summary: "Outlining standard outline flows.",
        content: `### 1. The Standard Blog Structure
* **Introduction**: Catchy hook, outline the problem, state the solution.
* **Body Sections (H2/H3)**: Provide value, tips, steps, or features.
* **Conclusion (H2)**: Summarize the article.
* **Call to Action (CTA)**: Prompt the reader (e.g. leave a comment, register for a class).

### 2. Listicles (Lists Articles)
List articles (e.g. "Top 5 Data Entry Skills") are highly clickable. Ensure every list item has an H3 heading and clear spacing.

### 3. Proofreading
Use free tools like **Grammarly** or **Hemingway Editor** to check readability scores and eliminate spelling errors.`
      },
      {
        id: "cw-proposal",
        title: "Proposal Writing & Pitching Gigs",
        duration: "45 mins",
        summary: "Drafting winning pitches on freelance boards.",
        content: `### 1. The Anatomy of a Winning Proposal
Do not copy-paste generic pitches. Clients see hundreds of applications. A premium proposal includes:
* **The Hook**: Acknowledge the client's problem in the first sentence.
* **The Solution**: Explain how your skills solve their specific problem.
* **Vetted Samples**: Attach 2 links to real relevant articles.
* **Call to Action**: End with a question (e.g., "Are you available for a quick chat to discuss the formatting?").

### 2. Proposal Example
*"Hello, I see you are looking for an SEO writer to write blog articles about dropshipping. I have written 3 articles in the e-commerce space (links attached). I can deliver clean, Hemingway-optimized posts within your timeline. What is the target length for these posts?"*`
      }
    ]
  },
  {
    id: "web-design",
    title: "Web Design & Digital Commerce",
    description: "Learn WordPress setups, Shopify customizations, responsive layouts, and Vercel hosting.",
    badge: "Design",
    lessons: [
      {
        id: "wd-wordpress",
        title: "WordPress Layouts with Elementor",
        duration: "45 mins",
        summary: "Branding, themes, and page builder basics.",
        content: `### 1. WordPress Ecosystem
WordPress powers over 40% of websites. Clients frequently hire VAs to design or edit blogs.
* **Themes**: Use lightweight themes (Astra, Hello Elementor).
* **Plugins**: Extensions that add functions (e.g. contact forms, speed boosters).

### 2. Page Building with Elementor
Elementor allows visual drag-and-drop design:
* **Sections/Rows**: Structuring grid spaces.
* **Widgets**: Adding headers, text blocks, image carousels, and buttons.
* Ensure padding and margin values are uniform (e.g. 20px padding on cards) to maintain a premium look.

### 3. Responsiveness
Always check mobile responsiveness toggles in Elementor to align columns for phone displays.`
      },
      {
        id: "wd-shopify",
        title: "Shopify Theme Customization",
        duration: "45 mins",
        summary: "Store setup, header branding, and checkouts.",
        content: `### 1. Customizing Dawn Theme
The Dawn theme is Shopify's default standard.
* Navigate to **Online Store -> Themes -> Customize**.
* Set up clear global style schemes (colors, premium typography).

### 2. Header and Navigation Setup
* **Main Menu**: Links to Home, Shop, Collections, About, and Contact.
* **Announcements Bar**: Display discount codes or shipping alerts.
* **Logo**: Position the store branding correctly in the header grid.

### 3. Payment Gateway Testing
Set up test gateways to check the checkout process. Ensure shipping rates calculate correctly before delivery.`
      },
      {
        id: "wd-layouts",
        title: "Responsive Grids with HTML & CSS",
        duration: "50 mins",
        summary: "CSS Flexbox and grid positioning.",
        content: `### 1. Flexbox vs. CSS Grid
* **Flexbox**: Best for one-dimensional layouts (e.g. a row of buttons, navbar items).
* **CSS Grid**: Best for two-dimensional structures (e.g. card grids, gallery masonry).

### 2. Code Practice
Create a clean grid wrapper:
\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
\`\`\`

### 3. Breakpoints
Use relative font sizes (\`rem\`, \`em\`) and standard media query breakpoints to maintain styling scale across mobile and desktop.`
      },
      {
        id: "wd-vercel",
        title: "Hosting, Domains & Client Handovers",
        duration: "40 mins",
        summary: "DNS configurations and file delivery.",
        content: `### 1. Web Hosting Platforms
Learn where to host code files:
* **Vercel / Netlify / GitHub Pages**: Free, premium hosting for static React/HTML sites.
* **cPanel / Namecheap**: Hosting for traditional WordPress installations.

### 2. Domain Connection (DNS)
To connect a custom domain (e.g. \`clientdomain.com\`):
* Go to the domain registrar (Namecheap, GoDaddy).
* Configure DNS Records: Add **A Record** pointing to Vercel's IP address, or **CNAME** pointing to Vercel's domain target.

### 3. Site Handover Files
Provide the client with a zip file containing source codes, assets, login credentials, and a README document detailing administration steps.`
      }
    ]
  }
];
