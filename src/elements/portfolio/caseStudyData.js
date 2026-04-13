export const caseStudies = [
    {
        slug: 'ss-e-data-pipeline',
        image: 'image-1',
        category: 'Data Engineering',
        title: 'SS&E Data Integration Pipeline',
        client: 'Higher Education Institution',
        industry: 'Education Technology',
        duration: '6 weeks',
        result: 'Built end-to-end Jenzabar → SQL → Python → Canvas/Watermark pipeline enabling automated student success analytics',
        overview:
            'A higher-education client needed to unify fragmented institutional data across multiple systems to power their Student Success & Engagement (SS&E) program. Manual exports, inconsistent schemas, and siloed platforms were causing reporting delays and preventing timely intervention for at-risk students.',
        challenge:
            'The institution managed student records in Jenzabar ERP, course data in Canvas LMS, and engagement metrics in Watermark — three systems with no native integration. Staff were spending hours weekly on manual CSV exports and reconciliation, and analytics were always 5–7 days behind.',
        approach: [
            "Reverse-engineered Jenzabar's SQL schema to extract normalized student, enrollment, and financial records",
            'Built a Python orchestration layer to transform and validate data before loading into downstream platforms',
            "Integrated Canvas REST API and Watermark's data import spec to push synchronized records on a scheduled cadence",
            'Implemented data quality checks and alerting to catch schema drift or upstream anomalies before they corrupted reports',
        ],
        results: [
            'Reduced reporting lag from 5–7 days to near real-time (overnight refresh)',
            'Eliminated ~12 hours/week of manual data work for the analytics team',
            'Enabled proactive outreach to at-risk students by surfacing engagement signals automatically',
            'Zero data loss incidents post-launch across 3 full academic terms',
        ],
        techStack: ['Python', 'SQL Server', 'Jenzabar ERP', 'Canvas LMS API', 'Watermark', 'Pandas', 'Scheduled Tasks / Cron'],
    },
    {
        slug: 'canvas-enrollment-sync',
        image: 'image-2',
        category: 'Systems Integration',
        title: 'Canvas Enrollment & Term Sync Engine',
        client: 'Higher Education Institution',
        industry: 'Education Technology',
        duration: '3 weeks',
        result: 'Automated course/term overrides via Canvas API resolving data mismatches and improving evaluation accuracy',
        overview:
            "Persistent data mismatches between the institution's SIS and Canvas LMS were causing students to appear enrolled in the wrong terms, triggering incorrect faculty evaluations and skewing course analytics. A reliable sync mechanism was needed to keep both systems consistently aligned.",
        challenge:
            'Canvas term and enrollment records were drifting out of sync with the SIS after every registration cycle. Existing manual correction processes were error-prone, slow, and required Canvas admin intervention for every edge case — causing downstream failures in student evaluations and grade reporting.',
        approach: [
            'Audited the full enrollment and term-override lifecycle across Canvas API and the SIS data model',
            'Wrote a reconciliation engine that detected mismatches between SIS enrollment state and Canvas enrollment records',
            'Automated course override submissions via Canvas REST API for affected enrollments',
            'Added idempotency controls so re-runs were safe and duplicate overrides were never created',
        ],
        results: [
            'Resolved 100% of existing mismatched enrollment records within the first automated run',
            'Prevented recurrence across subsequent registration cycles with zero manual overrides needed',
            'Improved faculty evaluation accuracy, removing a major source of data complaints from academic affairs',
            'System operated reliably across multiple term transitions with no reported regressions',
        ],
        techStack: ['Python', 'Canvas LMS REST API', 'SQL Server', 'Jenzabar SIS', 'REST / JSON', 'Cron Scheduling'],
    },
    {
        slug: 'ai-content-automation',
        image: 'image-3',
        category: 'AI / Automation',
        title: 'AI Content Automation System (n8n)',
        client: 'E-commerce Brand',
        industry: 'Retail / Digital Marketing',
        duration: '4 weeks',
        result: 'Designed pipeline generating, reviewing, and publishing social content using OpenAI, Baserow, and Meta APIs',
        overview:
            'A growing e-commerce brand was struggling to maintain a consistent social media presence at scale. Content creation was bottlenecked by a small team, resulting in inconsistent posting cadence and generic copy that underperformed against competitors with dedicated content teams.',
        challenge:
            'The brand had a large product catalog but no scalable way to turn product data into engaging, on-brand social content. Every post required manual writing, design briefing, and approval — a process that couldn\'t keep up with the promotional calendar or trend-driven opportunities.',
        approach: [
            'Built an n8n automation workflow that pulls scheduled product and campaign data from Baserow',
            'Integrated OpenAI GPT to generate draft captions, hooks, and hashtag sets tailored to brand voice guidelines',
            'Added a human-in-the-loop Telegram approval gate before any content reached the publishing queue',
            'Connected Meta Graph API for automated scheduling and publishing to Instagram and Facebook upon approval',
        ],
        results: [
            'Reduced content production time per post by over 80%, from ~45 minutes to under 8 minutes',
            'Enabled the team to scale from 3–4 posts/week to 14+ posts/week without adding headcount',
            'Maintained brand voice consistency across all AI-generated content via structured prompt engineering',
            'Zero unauthorized posts — every piece of content passed through human review before going live',
        ],
        techStack: ['n8n', 'OpenAI API (GPT-4)', 'Baserow', 'Meta Graph API', 'Telegram Bot API', 'Webhooks', 'JSON'],
    },
    {
        slug: 'shopify-meta-ads-engine',
        image: 'image-4',
        category: 'E-commerce / Growth',
        title: 'Shopify → Meta Ads Optimization Engine',
        client: 'D2C E-commerce Brand',
        industry: 'Direct-to-Consumer Retail',
        duration: '5 weeks',
        result: 'Built data-driven ad system with product feeds, event tracking, and creative automation to scale catalog performance',
        overview:
            'A direct-to-consumer brand was running Meta Ads manually with static creatives and a poorly structured product catalog. Ad performance was volatile, ROAS was declining, and the team had no reliable data loop connecting purchase events back to ad decisions.',
        challenge:
            'The client\'s Shopify store was not properly connected to Meta\'s Conversions API, causing significant event loss (~40%) in the ad platform\'s attribution model. Their product feed was stale, their catalog campaigns were underperforming, and there was no automation to refresh creatives or pause low-performers.',
        approach: [
            'Implemented Meta Conversions API (CAPI) server-side event tracking to recover lost signal and deduplicate events',
            'Rebuilt the product catalog feed pipeline with dynamic updates synced directly from Shopify inventory',
            'Built creative automation logic to generate variant ad sets from product images using template-based generation',
            'Created a performance monitoring layer that flagged underperforming ad sets for automated budget reallocation',
        ],
        results: [
            'Recovered 35–40% of previously lost conversion events, dramatically improving Meta\'s bidding model accuracy',
            'Catalog campaign ROAS improved by 2.3x within the first 30 days post-launch',
            'Creative refresh cycle dropped from weekly manual updates to automated daily generation',
            'Ad spend efficiency increased significantly, with waste reduced on low-performing product segments',
        ],
        techStack: ['Meta Conversions API (CAPI)', 'Shopify API', 'Python', 'Meta Business Manager', 'Product Catalog XML/JSON', 'Webhooks'],
    },
    {
        slug: 'mongodb-product-normalization',
        image: 'image-5',
        category: 'Data Engineering',
        title: 'MongoDB Product Normalization Layer',
        client: 'Multi-Channel Retailer',
        industry: 'Retail / E-commerce',
        duration: '4 weeks',
        result: 'Created centralized product data model powering AI workflows, reporting, and multi-channel distribution',
        overview:
            'A retailer operating across multiple sales channels (marketplace, DTC, wholesale) had product data scattered across incompatible systems with no single source of truth. Inconsistent attributes, naming conventions, and missing fields were causing failures in AI enrichment workflows and channel syndication.',
        challenge:
            'Product records from different sources had conflicting schemas — some fields were strings where numbers were expected, categories were inconsistently labeled, and critical attributes like dimensions and weight were missing for a large portion of the catalog. This prevented reliable automation and reporting downstream.',
        approach: [
            'Audited the full product catalog across all source systems and mapped field-level inconsistencies',
            'Designed a normalized MongoDB schema with enforced types, required fields, and category taxonomy',
            'Built ETL pipelines to ingest, clean, and validate records from each source system into the normalized model',
            'Created a data quality scoring system to flag incomplete or low-confidence records for manual review',
        ],
        results: [
            'Unified 100% of product records into a single normalized data model within the migration window',
            'Reduced downstream AI enrichment failures from ~30% to under 3% of catalog records',
            'Enabled reliable multi-channel product syndication for the first time across all sales channels',
            'Reporting queries went from ad-hoc SQL workarounds to clean, consistent aggregations',
        ],
        techStack: ['MongoDB', 'Python', 'Pandas', 'ETL Pipelines', 'JSON Schema Validation', 'REST APIs'],
    },
    {
        slug: 'telegram-approval-workflow',
        image: 'image-6',
        category: 'Automation / UX',
        title: 'Telegram Approval Workflow System',
        client: 'Digital Media Agency',
        industry: 'Content & Media',
        duration: '2 weeks',
        result: 'Implemented human-in-the-loop content approval system with dynamic state updates for AI-generated media',
        overview:
            'An agency running high-volume AI-generated content needed a lightweight review and approval mechanism that fit into their existing communication tools. Emailing content drafts for approval was causing bottlenecks, lost messages, and confusion about which version was current.',
        challenge:
            'The team needed a way to review AI-generated image and video content, make approve/reject/revision decisions, and have the outcome automatically trigger the next step in the production pipeline — all without leaving Telegram, which was already their primary communication channel.',
        approach: [
            'Built a Telegram bot that receives content previews (images, captions, metadata) directly from the n8n automation pipeline',
            'Implemented inline keyboard buttons for approve, reject, and request-revision actions directly on each message',
            'Wired approval state back to the pipeline via webhook callbacks, triggering publish or revision flows automatically',
            'Added message threading and status labels so the team always knew which content was pending, approved, or rejected',
        ],
        results: [
            'Approval cycle time dropped from 2–3 hours (email) to under 15 minutes on average',
            'Zero content published without explicit human approval across the full rollout period',
            'The team adopted the workflow immediately with no training required — it felt native to Telegram',
            'Revision requests were automatically routed back to the generation pipeline, eliminating manual re-queuing',
        ],
        techStack: ['Telegram Bot API', 'n8n', 'Webhooks', 'Python', 'State Machine Logic', 'REST APIs'],
    },
    {
        slug: 'student-financial-aggregation',
        image: 'image-7',
        category: 'Data Engineering',
        title: 'SQL-Based Student Financial Aggregation',
        client: 'Higher Education Institution',
        industry: 'Education Technology',
        duration: '3 weeks',
        result: 'Engineered financial aggregation logic (balanceDue, transactions) for SS&E feeds ensuring data completeness and accuracy',
        overview:
            'As part of the broader SS&E data platform, the institution needed accurate, real-time student financial data surfaced within the engagement platform. Existing balance-due calculations were unreliable, leading to incorrect flags for financial holds and missed outreach to students with outstanding balances.',
        challenge:
            'Financial data in Jenzabar was stored across multiple transactional tables with complex relationships. Reconstructing an accurate balance-due figure for each student required joining charges, payments, financial aid disbursements, and adjustments — logic that had never been formalized or documented consistently.',
        approach: [
            'Reverse-engineered Jenzabar\'s financial schema by analyzing transactional tables across multiple term cycles',
            'Formalized the balance-due calculation as verified SQL aggregation logic, handling all edge cases (reversals, adjustments, FA)',
            'Wrapped the logic in reusable stored procedures and views to make it maintainable and auditable',
            'Validated outputs against known-good financial statements to confirm accuracy before going live',
        ],
        results: [
            'Financial balance figures in the SS&E platform matched bursar records with 99.8% accuracy post-validation',
            'Resolved a persistent source of incorrect financial hold flags that had been impacting student services for months',
            'Logic was documented and auditable, enabling the finance team to verify calculations independently',
            'Reusable SQL components were adopted in two additional reporting systems beyond the original scope',
        ],
        techStack: ['SQL Server', 'T-SQL', 'Jenzabar ERP', 'Stored Procedures', 'Python (validation layer)', 'Excel (reconciliation)'],
    },
    {
        slug: 'ai-media-pipeline',
        image: 'image-8',
        category: 'AI / Media',
        title: 'Multi-Platform AI Media Pipeline',
        client: 'E-commerce Content Team',
        industry: 'Retail / Digital Marketing',
        duration: '6 weeks',
        result: 'Integrated Runway, Photoroom, ElevenLabs, and FFmpeg to automate creation of short-form video content at scale',
        overview:
            'A content team producing short-form video ads for social media was spending 8–12 hours per video on production. With increasing demand for platform-native content across TikTok, Instagram Reels, and YouTube Shorts, a scalable AI-powered production system was essential.',
        challenge:
            'Each video required background removal, dynamic product placement, AI voiceover generation, motion graphics, and final encoding — all steps done manually by separate tools and team members. There was no unified pipeline, no reusable templates, and no way to scale output without proportionally scaling headcount.',
        approach: [
            'Designed a modular pipeline architecture connecting each production step via automated handoffs',
            'Integrated Photoroom API for background removal and product scene generation from catalog images',
            'Used Runway ML for shot extension and motion effects on static product imagery',
            'Integrated ElevenLabs for AI voiceover generation from script templates, with voice profile consistency',
            'Used FFmpeg for final assembly: layer composition, subtitle burn-in, format export, and aspect-ratio variants',
        ],
        results: [
            'Reduced per-video production time from 8–12 hours to under 45 minutes end-to-end',
            'Enabled the team to produce 10–15x more video variants per week without additional production staff',
            'Consistent visual and audio quality across all outputs due to templatized pipeline logic',
            'Format variants (9:16, 1:1, 16:9) generated automatically per video, eliminating manual re-editing per platform',
        ],
        techStack: ['Runway ML', 'Photoroom API', 'ElevenLabs API', 'FFmpeg', 'Python', 'n8n', 'OpenAI API', 'Cloud Storage'],
    },
];

export const getCaseStudyBySlug = (slug) =>
    caseStudies.find((cs) => cs.slug === slug) || null;

export const getAdjacentCaseStudies = (slug) => {
    const idx = caseStudies.findIndex((cs) => cs.slug === slug);
    if (idx === -1) return { prev: null, next: null };
    return {
        prev: idx > 0 ? caseStudies[idx - 1] : null,
        next: idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null,
    };
};
