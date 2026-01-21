# SEO Strategy & Keyword Implementation Report - RJR Herbal Hospitals

## 1. Overview
The SEO strategy for RJR Herbal Hospitals focuses on three main pillars:
- **Global Branding**: Establishing authority in traditional medicine (Siddha, Ayurveda, Herbal).
- **Regional Dominance**: Targeting "Chennai" and "Tamil Nadu" as primary hubs.
- **Micro-targeting**: Branch-specific and treatment-specific local SEO.

---

## 2. Key Keywords Implemented

### Global Keywords (Primary)
- Ayurveda hospital Tamil Nadu
- Siddha hospital Chennai
- Herbal medicine hospital
- Traditional Tamil medicine
- Varmam therapy
- Panchakarma treatment

### Specialized Chennai Target Keywords
- Best Siddha doctor in Chennai
- Ayurvedic treatment Chennai
- Chennai Siddha and Ayurveda center
- Siddha medicine for arthritis Chennai
- Ayurvedic skin care Chennai
- RJR Herbal Hospital T. Nagar

### Treatment-Specific Keywords
*(Dynamically generated for each treatment page)*
- [Disease Name] treatment Tamil
- Specialist for [Disease Name]
- Ayurvedic cure for [Disease Name]
- Siddha medicine for [Disease Name]

### Local Branch SEO
*(Applied to all 102+ branch locations)*
- [City Name] Ayurveda hospital
- Siddha medicine [City Name]
- Ayurvedic clinic in [City Name]
- Best herbal hospital [Region Name]

---

## 3. Technical Implementation

### A. Metadata API Integration
We have used the Next.js Metadata API across all major routes:
- **`app/layout.tsx`**: Global metadata, OpenGraph tags, and site-wide keywords.
- **`app/page.tsx`**: Homepage-specific cinematic titles and descriptions.
- **`app/branches/[branchId]/page.tsx`**: Dynamic local SEO metadata using `generateMetadata`.
- **`app/treatments/[slug]/page.tsx`**: Dynamic treatment-specific metadata.

### B. Route-Specific SEO Files
Created dedicated `layout.tsx` files for client-side pages to preserve SEO:
- `app/gallery/layout.tsx`
- `app/therapies/layout.tsx`
- `app/ipd/layout.tsx`
- `app/contact/layout.tsx`

### C. Multilingual Approach
- Meta descriptions are optimized in both **English and Tamil** to capture diverse search intents.
- HTML language tag set to `ta` (Tamil) for better regional indexing.

---

## 4. On-Page Optimizations
- **Semantic HTML**: Proper use of `<h1>` through `<h3>` tags for hierarchy.
- **Image SEO**: All images include `alt` tags and use WebP/AVIF formats for performance.
- **Rich Snippets**: Implementation of structured data via metadata for medical services.
