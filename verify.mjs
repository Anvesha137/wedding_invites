import {build} from 'esbuild';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
await build({entryPoints:['src/weddings.jsx'],outfile:'.verify-render.mjs',bundle:true,platform:'node',format:'esm',packages:'external',loader:{'.css':'empty'}});
const {WeddingSite,ThemePreview}=await import('./.verify-render.mjs');
const {designs}=await import('./src/designs.js');
const {wedding,eventTemplates,presentation,countdownParts,calendarText,mapsLink}=await import('./src/wedding-config.js');
const React=(await import('react')).default;
const {renderToStaticMarkup}=await import('react-dom/server');
assert.equal(designs.length,22);assert.equal(new Set(designs.map(d=>d.slug)).size,22);assert.equal(new Set(designs.map(d=>presentation(d).layout)).size,22);
const {scrollUnfurlProgress}=await import('./src/scroll-progress.js');
assert.equal(scrollUnfurlProgress(900,700,800),0);
assert.equal(scrollUnfurlProgress(-100,700,800),1);
const down=[650,500,300,100,-100].map(top=>scrollUnfurlProgress(top,700,800));
for(let i=1;i<down.length;i++)assert.ok(down[i]>=down[i-1]);
assert.deepEqual([-100,100,300,500,650].map(top=>scrollUnfurlProgress(top,700,800)),[...down].reverse());
assert.ok(scrollUnfurlProgress(300,700,800)>0&&scrollUnfurlProgress(300,700,800)<1);
assert.equal(scrollUnfurlProgress(900,0,0),0);
assert.equal(readFileSync('public/artwork/palace-doors.webp').toString('ascii',8,12),'WEBP');
const required=['blessing','couple','story','countdown','celebrate','gallery','visit','rsvp'];
for(const design of designs){
 const html=renderToStaticMarkup(React.createElement(WeddingSite,{design}));
 assert.ok(!html.includes('wedding-nav')&&!html.includes('demo-bar'),design.name+': no navbar');
 assert.ok(html.includes('immersive-scene')&&html.includes('opening-scene'),design.name+': layered background and illustrated opening');
 for(const id of ['welcome',...required]) assert.equal((html.match(new RegExp(`id="${id}"`,'g'))||[]).length,1,`${design.name}: ${id}`);
 assert.deepEqual([...presentation(design).sections].sort(),[...required].sort());
 for(const event of eventTemplates)assert.ok(html.includes(`event-${event.id}`));
 assert.equal((html.match(/Add to Calendar/g)||[]).length,5);
 assert.equal((html.match(/class="person-card"/g)||[]).length,2);
 assert.ok(html.includes('Tap to open invitation with music'));
 assert.ok(html.includes('Open without music'));
 assert.ok(html.includes('<audio'));
 assert.ok(html.includes('role="timer"'));
 assert.ok(html.includes('<dialog'));
 assert.ok(html.includes('Pause motion'));
 assert.ok(html.includes('Google Sheets connection is a placeholder'));
 assert.ok(html.includes('aria-controls="music-options"'));
 assert.ok(html.includes('Which celebrations will you attend?'));
 assert.equal((html.match(/class="event-photo"/g)||[]).length,5);
 assert.equal((html.match(/src="\/artwork\/ganesh-blessing.webp"/g)||[]).length,2);
 for(const event of eventTemplates)assert.ok(html.includes(event.image));
 assert.ok(html.includes(design.id==='21'?'Reveal the date':'Tap to reveal the date'));
 if(design.id==='22'){assert.ok(html.includes('opening-carved-doors'));assert.ok(html.includes('layout-palacegarden'));}
 if(design.id==='21'){assert.ok(html.includes('royal-scroll-sheet'));assert.ok(html.includes('royal-date-slots'));assert.ok(html.includes('Scroll gallery right'));assert.ok(html.includes('opening-royal-panels'));}
 const cover=html.slice(html.indexOf('class="gate-content"'),html.indexOf('class="experience-content"'));
 assert.ok(cover.indexOf('ganesh-blessing')<cover.indexOf('id="invitation-title"'));
 renderToStaticMarkup(React.createElement(ThemePreview,{design}));
 console.log('PASS '+design.id+' '+design.name+' — all required features, '+presentation(design).layout+' layout');
}
assert.deepEqual(countdownParts('2027-02-18T16:30:00+05:30',Date.parse('2027-02-17T15:29:59+05:30')),{days:1,hours:1,minutes:0,seconds:1,ended:false});
assert.equal(countdownParts(wedding.date,Date.parse('2028-01-01')).ended,true);
assert.equal(countdownParts(wedding.date,Date.parse('2028-01-01')).seconds,0);
for(const event of eventTemplates){const ics=calendarText(event,designs[0]);assert.ok(ics.includes('BEGIN:VEVENT'));assert.ok(ics.includes('END:VCALENDAR'));assert.ok(new Date(event.end)>new Date(event.start));}
assert.ok(calendarText(eventTemplates.find(e=>e.id==='pheras'),designs[0]).includes('DTSTART:20270218T110000Z'));
assert.ok(mapsLink('Jaipur & Gardens').includes('Jaipur%20%26%20Gardens'));
const wav=readFileSync('public/music/a-little-forever.wav');assert.equal(wav.toString('ascii',0,4),'RIFF');assert.equal(wav.toString('ascii',8,12),'WAVE');assert.ok(wav.length>100000);
// Exercise the prepared Sheets handler without contacting Google.
const rows=[];let held=false,configured=true;
const sheet={getLastRow:()=>rows.length,appendRow:r=>rows.push(r),getRange:()=>({createTextFinder:term=>({matchEntireCell:()=>({findNext:()=>rows.find(r=>r[0]===term)||null})})})};
const context={LockService:{getScriptLock:()=>({waitLock:()=>{held=true},hasLock:()=>held,releaseLock:()=>{held=false}})},PropertiesService:{getScriptProperties:()=>({getProperty:()=>configured?'test-id':null})},SpreadsheetApp:{openById:()=>({getSheetByName:()=>sheet,insertSheet:()=>sheet}),flush:()=>{}},ContentService:{MimeType:{JSON:'json'},createTextOutput:value=>({setMimeType:()=>JSON.parse(value)})}};
vm.createContext(context);vm.runInContext(readFileSync('integration/google-sheets.gs','utf8'),context);
const payload={name:'=HYPERLINK("bad")',email:'guest@example.com',requestId:'test-request-123',theme:designs[0].slug,attending:'yes',guests:'2',events:'Mehendi',note:'Happy to join'};
assert.equal(context.doPost({parameter:payload}).ok,true);assert.equal(rows.length,2);assert.ok(rows[1][3].startsWith("'="));assert.equal(held,false);
assert.equal(context.doPost({parameter:payload}).ok,true);assert.equal(rows.length,2);
assert.equal(context.doPost({parameter:{...payload,email:'invalid'}}).ok,false);
assert.equal(context.doPost({parameter:{...payload,requestId:'test-request-456',guests:'99'}}).ok,false);
configured=false;assert.equal(context.doPost({parameter:{...payload,requestId:'test-request-789'}}).ok,false);
assert.equal(readFileSync('public/artwork/royal-mandap.webp').toString('ascii',8,12),'WEBP');
const visualCSS=readFileSync('src/video-inspired.css','utf8')+readFileSync('src/royal-scroll.css','utf8')+readFileSync('src/palace-garden.css','utf8');
assert.equal(new Set([...visualCSS.matchAll(/--event-enter:([a-z-]+)/g)].map(m=>m[1])).size,22);
for(const event of eventTemplates){const bytes=readFileSync('public'+event.image);assert.equal(bytes.toString('ascii',8,12),'WEBP');}
assert.equal(readFileSync('public/artwork/ganesh-blessing.webp').toString('ascii',8,12),'WEBP');
console.log('PASS Ganesh-first openings, 110 event-image placements, 22 event entrance sequences, scratch-date fallback.');
console.log('PASS scroll-linked unfurl: endpoints, continuous intermediate positions, down/up reversibility.');
console.log('PASS countdown rollover, calendar timezone, audio file, and Sheets validation/deduplication/formula escaping.');
writeFileSync('verification.txt','PASS: 22 unique themes and page layouts; complete feature coverage in every server-rendered page; Ganesh-first covers and heroes; five local event images on each theme (110 placements); 22 unique event entrance keyframes; scratch-date keyboard fallback; all five events and event calendars; countdown rollover and elapsed-date handling; original WAV file; mocked Sheets validation, idempotency and formula escaping.\nProduction build: run npm run build.\nVisual/interaction browser QA: blocked because Computer Use could not confidently identify the Windows browser URL.\nGoogle Sheets: intentionally unconfigured placeholder; no live submission tested.\n');

