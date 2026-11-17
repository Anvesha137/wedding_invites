# The Wedding Edit — 22 animated wedding websites

Run `npm install`, then `npm run dev`. Build with `npm run build`; static deployment output is `dist/`. Run `node verify.mjs` for the feature and integration checks.

Open the collection and choose **View website**. Each demo has its own shareable route: `/?theme=<theme-slug>`.

Every theme includes:
- Ganesh ji with the couple names at the front, devotional greeting and animated tap-to-open intro.
- A bundled original soft instrumental, pause/play and a local song picker.
- Live IST-aware countdown plus touch/keyboard-accessible date reveal.
- Family blessings, two couple profiles and four-part story timeline.
- Mehendi, Haldi, Sangeet, Pheras and Reception cards, each with a local image, date/time, venue, dress code, Google Maps and an individual calendar file.
- Twenty distinct card entrance animations, theme-specific layouts, decorative motion, photo motion and a persistent pause control. System reduced-motion preferences are respected.
- Photo viewer with previous/next, keyboard navigation, swipe and Escape dismissal.
- Travel, hotel stay, coordinator information and FAQs.
- RSVP with attendance, guest count, event selection and notes. Google Sheets is intentionally a placeholder; demo responses save locally in the browser.

The supplied `invites.mp4` informed the devotional front, doors, floral ornament, arched image cards and date-reveal interaction. Its frames are reference material only; the supplied website assets are original generated images, existing SVG art and an original generated instrumental.

Start personalisation with **BEFORE-SHARING.md**. Shared details live in `src/wedding-config.js`; theme colours/cities/art are in `src/designs.js`; individual composition rules are in `src/experience.css` and `src/video-inspired.css`.

Verification: all 22 server renders and feature checks pass, including 110 event-image placements, Ganesh-first openings, 22 card entrance animations, countdown edge cases, calendar timezone and mocked Sheets validation/deduplication. Production build passes. Live browser verification could not be completed because Computer Use could not confidently identify the Windows browser URL. Live Google Sheets delivery is unconfigured and untested, as requested.

## New: 21 — The Royal Scroll

Open `/?theme=the-royal-scroll` after starting the local dev server. This additional template uses original burgundy-and-ivory panels, decorative elephants, a scenic lakeside mandap, an unfurling gold-ended family scroll, rolling date cartouches with one-shot confetti, and a horizontal framed photo gallery. A Replay opening control lets you revisit the intro. All existing guest features remain included.

Its design was informed by the user-supplied `new-invite.mp4`. The original vendor branding and video frames are not included in the website. Browser playback smoothness is not yet visually verified.

## New: 22 — The Palace Garden Invite

Route: `/?theme=the-palace-garden-invite`. A dedicated recreation of the supplied `invites.mp4` design: carved palace doors, Ganesh welcome, pink floral invitation, arched portraits, scratch-date reveal, Polaroid gallery, pastel illustrated event cards and scenic footer. It uses original replacement artwork and shared placeholder content, not the original website assets or source. It is a close design recreation, not a verified pixel-identical copy.

Template 21 scroll fix: the paper clip and lower roller are now calculated directly from window scroll position through a passive scroll listener and a single requestAnimationFrame update. The animation reverses on upward scrolling. Pause motion and reduced-motion show the full readable scroll. No timed entrance controls the unfurl.

## Illustrated entrances and continuous scenes
All 22 invitations now omit the top navbar and demo toolbar. A footer link returns to the collection. Theme illustrations form a continuous scroll/pointer parallax background, with pause-motion and reduced-motion support. Opening scenes include articulated SVG birds, dawn and moonrise, progressively drawn borders, woven artwork, rotating mandalas, paper reveals, and photographed carved doors. Each theme has an explicit event-card composition; mobile cards collapse to one column.

New painted assets: public/artwork/sunrise-garden.png and public/artwork/moonlit-garden.png. Generated with the built-in imagegen tool. Prompts: a refined watercolor Indian palace lotus garden at dawn with an open center; a midnight blue and antique gold celestial lake garden with an open center. Sun/moon disks and birds are animated separately in code.

Browser visual and interaction verification remains pending due to the Computer Use browser-URL policy detection failure. Automated rendering and production compilation do not establish animation smoothness on actual devices.

Mobile update: responsive.css loads after the theme styles and overrides desktop specificity. Event cards use one column through 799px, two columns from 800–1100px. Openings, typography, couple/story/gallery/travel/RSVP sections, countdown and fixed controls have narrow-screen rules. Run node verify-responsive.mjs after building to check the shipped CSS cascade across all 22 themes at 9 widths. This is a CSS regression check, not browser/device visual QA.

## Deploy on Vercel
Import Anvesha137/wedding_invites into Vercel. Use the main branch, repository root (./), Vite framework, npm ci install command, npm run build build command and dist output directory. These build settings are included in vercel.json. No environment variables are required for the current demo. The RSVP remains browser-local until a Google Apps Script endpoint is configured.

## Illustrated invitation collection — November 2026
The first 20 templates now use original portrait-format illustrated scenes, a scroll-linked narrative opening, floating decorative layers, large family invitation typography, five illustrated event vignettes, and arch/medallion/folio/scalloped/theatre card compositions. Both existing video-inspired templates remain available. The complete guest feature set and demo RSVP behavior remain unchanged.

Visual direction was researched from public Missing Piece demos: Mountain, Ayodhya, City, City 2, City 3 and Meenaya. These are original implementations and artwork, not the vendor's Framer templates or exact reproductions. No vendor source or watermarked artwork was copied.

Final optimized assets are in public/artwork/illustrated. PROMPTS.json records the complete prompts and built-in imagegen provenance. Each scene has a smaller lazy-loaded collection preview. User content and the WhatsApp contact +91 761 947 9099 are preserved.

Verification: production build; 22 server-rendered invitations; exact event image references; all scene/thumbnail WebP assets; 198 shipped-CSS grid checks at mobile/tablet sizes. Local browser navigation timed out on localhost and the LAN address; device visual/animation QA remains pending.
