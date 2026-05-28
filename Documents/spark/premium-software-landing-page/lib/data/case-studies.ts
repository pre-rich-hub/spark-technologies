export interface CaseStudy {
  slug:         string
  title:        string
  category:     string
  industry:     string
  tagline:      string
  overview:     string
  challenge:    string
  solution:     string
  technologies: string[]
  timeline:     string
  liveUrl:      string
  thumbnail:    string
  tags:         string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug:      "hamba-tours",
    title:     "Hamba Ethiopia Tours",
    category:  "Tourism Platform",
    industry:  "Travel & Hospitality",
    liveUrl:   "https://www.hambatours.com/",
    thumbnail: "/thumbnails/hamba-s.jpg",
    tagline:   "A premium multilingual platform for an Ethiopian expedition tour operator — built to reach international travelers.",
    overview:  "Hamba Ethiopia Tours is a licensed tour operator offering guided expeditions across Ethiopia's most extraordinary landscapes and cultures — from the rock-hewn churches of Lalibela to the terrain of the Danakil Depression. Expert local guides and carefully researched itineraries distinguish them in a competitive market.",
    challenge: "Hamba's international clientele — researchers, documentarians, cultural travelers — were arriving at a website that didn't reflect the quality of the experience on offer. The digital presence wasn't surfacing in global search for Ethiopian travel intent, and the existing site lacked multilingual support for their key markets.",
    solution:  "We designed and built a Next.js platform with multilingual support across English, Spanish, and French, Cloudinary-powered cinematic image galleries, and a structured itinerary architecture for multiple expedition types. An SEO strategy anchored to specific destination queries improved organic visibility. The result gives the brand a digital presence that matches the quality of the experience.",
    technologies: ["Next.js", "Django", "PostgreSQL", "Cloudinary", "Tailwind CSS", "i18n", "Vercel", "SEO Architecture", "Structured Data"],
    timeline:  "6 weeks",
    tags: ["Tourism", "Travel", "Multilingual", "SEO"],
  },
  {
    slug:      "maison-real-estate",
    title:     "Maison",
    category:  "Luxury Real Estate Platform",
    industry:  "Real Estate & PropTech",
    liveUrl:   "https://premium-real-estate-platform.vercel.app/",
    thumbnail: "/thumbnails/realstate-s.jpg",
    tagline:   "A bespoke luxury real estate platform with cinematic listings, private advisory flows, and curated property search.",
    overview:  "Maison is a luxury real estate brokerage specialising in high-end residential properties — penthouses, villas, and estates across premium addresses. The advisory-led model serves clients whose property decisions require a considered, personalised digital experience.",
    challenge: "High-net-worth buyers expected a digital experience as refined as the properties on offer. Generic MLS platforms and template-based sites were eroding brand equity. The existing site couldn't showcase premium listings with the cinematic quality the market demands.",
    solution:  "We built a full-stack luxury property platform with cinematic listing showcases, private advisory consultation flows, and a curated search experience across penthouses, villas, estates, and new developments. Neighbourhood guides, broker profiles, and a seamlessly integrated CRM deliver the high-touch experience the audience expects.",
    technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Vercel", "Stripe", "CRM Integration", "Mapbox"],
    timeline:  "10 weeks",
    tags: ["Real Estate", "Luxury", "PropTech", "E-Commerce"],
  },
  {
    slug:      "prestige-car-rental",
    title:     "PRESTIGE",
    category:  "Luxury Automotive Platform",
    industry:  "Automotive & Luxury",
    liveUrl:   "https://luxury-car-rental-mu.vercel.app/",
    thumbnail: "/thumbnails/carental-s.jpg",
    tagline:   "A concierge-grade exotic car rental platform — fleet showcases, membership tiers, and real-time booking.",
    overview:  "PRESTIGE operates an exotic car rental service with a fleet of supercars and ultra-luxury vehicles. A tiered membership model requires a digital experience that reflects the exclusivity of the brand and makes the booking process as frictionless as possible.",
    challenge: "PRESTIGE had a premium fleet but a fragmented digital booking experience. High-intent clients were dropping off before completing a reservation. Membership management and chauffeur scheduling were handled manually, creating friction and missed opportunities.",
    solution:  "We built a unified luxury booking platform with fleet showcases by category, membership tier management, chauffeur and transfer scheduling, and a concierge request flow. The design language communicates exclusivity at every touchpoint — from the first fleet browse to booking confirmation.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Vercel", "PostgreSQL", "Real-time Availability API", "Twilio"],
    timeline:  "8 weeks",
    tags: ["Automotive", "Luxury", "E-Commerce", "Hospitality"],
  },
  {
    slug:      "iron-pulse",
    title:     "IronPulse",
    category:  "Fitness Club Platform",
    industry:  "Health & Fitness",
    liveUrl:   "https://iron-pulse-gym-website-azure.vercel.app/",
    thumbnail: "/thumbnails/gym-s.jpg",
    tagline:   "A premium fitness club platform with class scheduling, membership management, and coach profiles.",
    overview:  "IronPulse is a strength-and-conditioning club with certified coaches and a range of weekly classes across multiple programmes — from Olympic lifting to body transformation. They serve a growing member base with a results-first coaching philosophy.",
    challenge: "IronPulse had a world-class facility and exceptional coaching staff, but their digital presence wasn't converting. Class scheduling was managed manually, membership sign-ups were handled on paper, and the brand failed to communicate their culture to prospective members.",
    solution:  "We built a full-featured fitness platform with online class booking across all programmes, membership tier management, coach profiles and credential showcases, and a results-led content strategy. The platform makes it easy for prospects to understand the offering and sign up without friction.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Booking Engine", "Vercel", "Stripe", "CRM Integration"],
    timeline:  "6 weeks",
    tags: ["Fitness", "Health", "SaaS", "E-Commerce"],
  },
  {
    slug:      "atlas-build",
    title:     "AtlasBuild Group",
    category:  "Construction & Engineering Platform",
    industry:  "Construction & Infrastructure",
    liveUrl:   "https://construction-company-website-seven.vercel.app",
    thumbnail: "/thumbnails/construction-s.jpg",
    tagline:   "A credibility-first construction company platform — project portfolio, sector case studies, and enterprise inquiry flows.",
    overview:  "AtlasBuild Group is a construction and engineering firm that delivers complex projects across commercial, industrial, and civil infrastructure sectors. A strong safety record and quality certifications form the backbone of their value proposition to enterprise clients.",
    challenge: "Despite a strong track record, AtlasBuild's digital presence wasn't communicating their depth of capability. A dated website was failing to attract enterprise clients, and competing firms with weaker portfolios were winning engagements on perception alone.",
    solution:  "We built a content-rich enterprise platform that presents AtlasBuild's project portfolio by sector, showcases their quality management systems and safety record, and connects enterprise clients directly to regional teams through a structured inquiry system. Case studies by service line demonstrate depth of capability.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Headless CMS", "Vercel", "PostgreSQL", "SEO Architecture", "Structured Data"],
    timeline:  "8 weeks",
    tags: ["Construction", "Enterprise", "Infrastructure", "B2B"],
  },
  {
    slug:      "shemzu-store",
    title:     "Shemzu",
    category:  "Fashion E-Commerce",
    industry:  "Fashion & Retail",
    liveUrl:   "https://shamzu-store.vercel.app",
    thumbnail: "/thumbnails/shemzu-s.jpg",
    tagline:   "A premium fashion e-commerce storefront built around ethical sourcing, material quality, and editorial design.",
    overview:  "Shemzu is a contemporary fashion retailer curating premium-material clothing and lifestyle pieces sourced ethically and designed to last. Their positioning is intentional over impulsive — investment pieces rather than fast fashion.",
    challenge: "Shemzu's brand philosophy — premium materials, ethical sourcing — wasn't coming through on a generic e-commerce template. The site failed to differentiate them in a crowded market or communicate the considered craftsmanship behind each product.",
    solution:  "We built a custom Next.js storefront with editorial-style collection pages, product storytelling that foregrounds material quality and ethical sourcing, and a checkout flow optimised for their audience. Trust elements — clear returns, dispatch windows, and secure checkout — are woven throughout.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Vercel", "Headless CMS", "SEO Optimization", "Analytics"],
    timeline:  "7 weeks",
    tags: ["Fashion", "E-Commerce", "Retail", "Luxury"],
  },
  {
    slug:      "hora-tours",
    title:     "Hora Tours",
    category:  "Luxury Travel Platform",
    industry:  "Travel & Hospitality",
    liveUrl:   "https://hora-tours.vercel.app/",
    thumbnail: "/thumbnails/hora-tour-s.jpg",
    tagline:   "A luxury travel platform with destination-first design — custom itineraries, editorial photography, and consultation booking.",
    overview:  "Hora Tours curates premium multi-day travel experiences across Europe, Asia, and the Maldives — custom itineraries with private vehicles, dedicated guides, boutique accommodations, and around-the-clock support.",
    challenge: "Hora Tours was operating as a premium curator but presenting as a mid-market agency. Their digital presence didn't justify premium package prices to travelers with high standards and many alternatives. Conversion from browse to consultation was low, and the site wasn't surfacing for high-intent search queries.",
    solution:  "We redesigned and built a destination-first travel platform with editorial photography, custom itinerary templates for key destinations, and a consultation booking flow that signals a personalised, premium service. A social proof architecture — reviews and testimonials — builds trust throughout the funnel.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Booking Engine", "Vercel", "Cloudinary", "SEO Architecture", "Schema Markup"],
    timeline:  "6 weeks",
    tags: ["Tourism", "Travel", "Luxury", "E-Commerce"],
  },
  {
    slug:      "aurum-restaurant",
    title:     "Aurum",
    category:  "Fine Dining Platform",
    industry:  "Food & Beverage",
    liveUrl:   "https://premium-restaurant-platform.vercel.app/",
    thumbnail: "/thumbnails/restaurant-s.jpg",
    tagline:   "A cinematic fine dining platform — tasting menu showcases, private dining enquiry, and multi-location reservation.",
    overview:  "Aurum is a fine dining restaurant with multiple locations, offering a tasting menu experience, private dining, and an exclusive chef's table. Discerning diners expect a digital presence that communicates the same level of care as the food and service.",
    challenge: "A restaurant of Aurum's standing needed a digital presence that commanded the same reverence as its cuisine. The existing site was functional but lacked the cinematic, atmospheric quality that discerning diners expect. Reservation abandonment was high and the brand's personality wasn't translating digitally.",
    solution:  "We crafted a cinematic fine dining platform with tasting menu showcases, a private dining enquiry system, a chef's table reservation flow, and dedicated location pages. The visual language and pacing of the site were designed to reflect the experience of dining at Aurum itself.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Reservation System", "Vercel", "Headless CMS", "SEO Optimization", "Analytics"],
    timeline:  "7 weeks",
    tags: ["Hospitality", "Luxury", "Food & Beverage", "Restaurant"],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
