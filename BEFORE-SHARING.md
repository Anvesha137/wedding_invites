# What to replace before sharing a real invitation

These are intentional placeholders, as requested. All 22 templates use the shared content in `src/wedding-config.js` and retain their own visual design.

| Replace | Location | What to enter |
|---|---|---|
| Couple names, family names, invitation blessing | `wedding.names`, `families`, `blessing` | Final spelling, family wording and personal invitation text |
| Couple portraits and biographies | `wedding.couple` | Your two photos, names, initials and bios; current portraits are samples |
| Love story | `wedding.story` | Your real dates, milestones and descriptions |
| Ceremony date and RSVP deadline | `wedding.date`, `replyBy` | Timestamp with `+05:30` for India; confirm countdown and displayed date |
| Every event | `eventTemplates` | Real date/day, display time, `start` and `end` timestamps, venue, dress code and description; keep display values consistent with timestamps |
| Event images | `eventTemplates[].image`, `imageAlt` | Keep the included AI-generated inspiration images or replace with your own images in `public/events/` |
| Event Maps links | `eventTemplates[].mapsQuery` | Exact venue name plus full address for each event; empty currently falls back to the sample city |
| Main venue | `wedding.venue` | Confirmed venue name, street address and exact `mapsQuery` |
| City | `src/designs.js` | Replace the selected theme's sample city with your wedding city |
| Song | `wedding.music` | Put the selected song in `public/music/`, set its path and title; the guest-side file picker only changes audio on that device |
| Gallery | `wedding.gallery` | Your images, captions and descriptive alt text; existing gallery photos are inspiration samples |
| Hotel and transport | `wedding.stay`, `travel` | Room block, rates, check-in/out, station/airport pickup, coordinator name and contact |
| FAQs and fixed date labels | `src/experience.jsx` | Confirm family guest/children policies, dress guidance and the celebrations heading; update any sample date labels |
| Google Sheets | `wedding.rsvpEndpoint` | Deploy `integration/google-sheets.gs`, configure the Sheet ID and paste its `/exec` URL; follow `integration/README.md` |
| Business enquiry contact | `src/main.jsx` | Confirm the existing WhatsApp number before publishing the studio collection |
| Demo/sample wording | Components in `src/experience.jsx`, `src/weddings.jsx` | Once all details are real, adjust the sample labels, footer and inspiration captions as appropriate |

Ganesh ji artwork is included locally at `public/artwork/ganesh-blessing.webp`; there is no external image dependency for the opening or event images.

Before launch:
1. Run `node verify.mjs` and `npm run build`.
2. Test the selected theme in mobile Safari and Chrome: open invitation, music, pause motion, all event maps/calendars, date reveal, gallery and RSVP.
3. Connect Sheets and submit a test from the deployed site; verify the actual row exists. Until configured, the website clearly states that responses are browser-local demos.
4. Deploy `dist/` to a static host and share the chosen `?theme=` URL. The ZIP is a code package, not a hosted website.

No live Sheet, external RSVP submission or deployment was performed in this task.

Template 21 styling and decorative components are in `src/royal-scroll.css` and `src/royal-scroll.jsx`. Its local hero image is `public/artwork/royal-mandap.webp`. The same shared names, dates, event data, song and Sheet placeholder apply.

Template 22 is styled in `src/palace-garden.css`; its carved-door asset is `public/artwork/palace-doors.webp`. It uses the shared placeholder wedding content and original replacement images.
