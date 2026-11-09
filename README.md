Femorestudio
Custom for your confidence
A client website for Femorestudio, a custom lingerie and dancewear brand creating pieces for confidence, movement, and performance.

The website gives the brand a dedicated space to showcase its work, introduce its custom-order process, and guide visitors from browsing a collection to making an enquiry. Products and editorial gallery images are loaded from Sanity, allowing content to be managed separately from the frontend code.

Visit the website
Project overview
Designed and developed by Daisy as a freelance client project.

My work included translating the brand's visual identity into a responsive interface, building reusable React components, integrating Sanity content, and deploying the frontend on Vercel.

The visual direction combines emerald and burgundy tones, script typography, editorial imagery, and subtle scroll animations to reflect the brand's focus on custom fashion and self-expression.
Features
- Brand homepage: introduces the studio, its approach, and the custom-order process.
- Product collection: displays product images, categories, descriptions, and prices from Sanity, sorted by display order.
- Editorial gallery: displays CMS-managed imagery with configurable ordering, image positioning, and alternative text.
- Product enquiries: carries the selected product and a suggested message into the contact page.
- Custom-order contact page: lets visitors describe sizing, colour, style, and performance-wear requests.
- Responsive layouts: adapts navigation, cards, and page sections for different screen widths.
- Scroll reveal effects: uses the browser's Intersection Observer API to reveal sections as visitors scroll.
Technology
Technology	Purpose
React	Component-based user interface
Vite	Development server and production builds
React Router	Home, Products, and Contact routes
JavaScript and CSS	Application behaviour and custom styling
Sanity	Product and gallery content
GROQ	Queries for Sanity documents
Sanity image URL builder	Image URLs with size and quality options
React Icons	Interface icons
Oxlint	JavaScript linting
Vercel	Frontend hosting


Pages
Route	Content
/	Brand introduction, editorial gallery, and custom-order process
/products	Product collection and custom-order information
/contact	Enquiry form and contact links


Run locally
Use Node.js 22.12 or newer and npm.
git clone https://github.com/dee256py/femorestudio.git
cd femorestudio
npm ci
npm run dev
Open the local URL printed by Vite in your terminal.
Available commands
Command	Purpose
npm run dev	Start the development server
npm run build	Generate the production site in dist/
npm run preview	Preview the production build locally
npm run lint	Run Oxlint


Code organisation
Path	Responsibility
src/App.jsx	Application routes and shared page layout
src/pages/	Home, Products, and Contact pages
src/components/	Reusable navigation, footer, product cards, gallery, and reveal effects
src/sanity/client.js	Sanity client and image URL helper used by the collection and gallery
src/sanity/queries.js	Product query definition; components also contain inline queries
src/data/siteContent.js	Contact details and additional site content
src/styles/global.css	Main site styling and responsive layouts
public/	Static assets
vercel.json	Vercel deployment configuration


Content management
The frontend reads product and galleryItem documents from Sanity's production dataset. The product and gallery components use displayOrder to control the sequence of content.

This repository contains the frontend. The Sanity Studio and content schemas are managed separately.

To adapt the website for another brand, configure your own Sanity project in src/sanity/client.js, provide compatible document schemas, and update the contact details in src/data/siteContent.js. The repository also contains a separate client in src/lib/sanity.js; review that configuration when changing projects. Sanity must allow the frontend's development and deployment origins through its CORS settings.
Enquiry flow and current scope
The website is a product showcase with an enquiry-led ordering flow. Orders are discussed directly with the brand; there is no shopping cart, payment processing, or order-management backend in this repository.

The contact form currently uses mailto:, which relies on the visitor's configured email application. It does not submit to a server-side form service. The Instagram and WhatsApp values in src/data/siteContent.js are currently generic links and should be configured with the brand's destinations.
Development experience
This project demonstrates translating a client brief into a branded web interface, organising a React application into reusable components, fetching CMS content, and connecting product discovery to a custom enquiry flow.
Website design and development by Daisy.
