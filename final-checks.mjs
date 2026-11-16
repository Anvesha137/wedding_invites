import {readFileSync,writeFileSync} from 'node:fs';
let s=readFileSync('verify.mjs','utf8');s=s.replace("assert.ok(html.includes('Which celebrations will you attend?'));",`assert.ok(html.includes('Which celebrations will you attend?'));
 assert.equal((html.match(/class="event-photo"/g)||[]).length,5);
 assert.equal((html.match(/src="\\/artwork\\/ganesh-blessing.png"/g)||[]).length,2);
 for(const event of eventTemplates)assert.ok(html.includes(event.image));
 assert.ok(html.includes('Tap to reveal the date'));
 const cover=html.slice(html.indexOf('class="gate-content"'),html.indexOf('class="experience-content"'));
 assert.ok(cover.indexOf('ganesh-blessing')<cover.indexOf('id="invitation-title"'));`);
s=s.replace("console.log('PASS countdown rollover",`const visualCSS=readFileSync('src/video-inspired.css','utf8');
assert.equal(new Set([...visualCSS.matchAll(/--event-enter:([a-z-]+)/g)].map(m=>m[1])).size,20);
for(const event of eventTemplates){const bytes=readFileSync('public'+event.image);assert.equal(bytes.toString('ascii',1,4),'PNG');}
assert.equal(readFileSync('public/artwork/ganesh-blessing.png').toString('ascii',1,4),'PNG');
console.log('PASS Ganesh-first openings, 100 event-image placements, 20 event entrance sequences, scratch-date fallback.');
console.log('PASS countdown rollover`);
s=s.replace('complete feature coverage in every server-rendered page;', 'complete feature coverage in every server-rendered page; Ganesh-first covers and heroes; five local event images on each theme (100 placements); 20 unique event entrance keyframes; scratch-date keyboard fallback;');
writeFileSync('verify.mjs',s);
let main=readFileSync('src/main.jsx','utf8');main=main.replace("['A personalised welcome & invitation','Your story, photos and gallery','Event-wise schedule and timings','Venue details with map links','RSVP and guest responses','Custom sections for your celebration']", "['Ganesh blessing & animated tap-to-open invitation','Background music, countdown & date reveal','Couple profiles, family note & story timeline','Five animated event cards, photos, maps & calendars','Photo viewer, travel, accommodation & FAQs','RSVP with Google Sheets connection placeholder']");writeFileSync('src/main.jsx',main);
