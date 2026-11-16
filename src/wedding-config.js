// Replace these sample details before sharing a real wedding invitation.
// Keep song files in public/music and images in public/photos.
export const wedding = {
  date: '2027-02-18T16:30:00+05:30',
  replyBy: '20 January 2027',
  names: ['Aarav', 'Meera'],
  families: ['The Sharma family', 'The Kapoor family'],
  blessing: 'With the blessings of our elders and hearts full of gratitude, our families invite you to witness the wedding of Aarav and Meera. Your presence, love and good wishes will make our celebration complete.',
  couple: [
    {name:'Aarav',role:'THE GROOM',initial:'A',bio:'An architect, a Sunday chai enthusiast, and the person who always takes the scenic route. His favourite adventure? Finding Meera.',photo:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85'},
    {name:'Meera',role:'THE BRIDE',initial:'M',bio:'A designer, a collector of little memories, and the first one on the dance floor. She knew it was love when even the ordinary days felt special.',photo:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85'}
  ],
  story: [
    {year:'2021',title:'A little hello',text:'A mutual friend, a very long conversation, and a coffee neither of us wanted to finish.'},
    {year:'2022',title:'Our kind of adventure',text:'Train rides, wrong turns, shared playlists. We discovered that anywhere felt like home together.'},
    {year:'2025',title:'The easiest yes',text:'Under a sky full of stars, one small question became the beginning of our biggest promise.'},
    {year:'2027',title:'And now, forever',text:'With our families beside us and our favourite people around us, we begin our next chapter.'}
  ],
  music: { title:'A little forever — soft instrumental', src:'/music/a-little-forever.wav' },
  // Paste a deployed Google Apps Script /exec URL here. Empty = clearly labelled local demo.
  rsvpEndpoint: '',
  venue: { name:'The Celebration House', address:'Sample wedding venue — replace with the confirmed address', mapsQuery:'' },
  stay: { name:'The Garden Retreat', note:'Sample guest hotel · replace with your room block, nightly rate and booking contact.', checkIn:'17 February, 2:00 PM',checkOut:'19 February, 11:00 AM'},
  travel: { arrival:'Arrive on 17 February before 2:00 PM to settle in before Mehendi.',transfer:'Airport / station pickup details will be included here. Replace with the shuttle timings and coordinator contact.',contact:'Your wedding coordinator · add name and phone number'},
  gallery: [
    {src:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85',alt:'A romantic wedding celebration',caption:'A day full of love'},
    {src:'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85',alt:'A flower-filled wedding ceremony',caption:'Our favourite people'},
    {src:'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85',alt:'A beautifully arranged wedding table',caption:'The little details'}
  ]
};
export const eventTemplates = [
 {id:'mehendi',image:'/events/mehendi.webp',imageAlt:'A bride displaying intricate mehendi in a lush Indian wedding garden',mapsQuery:'',name:'Mehendi',symbol:'✿',day:'17 FEB',time:'3:00 PM',start:'2027-02-17T15:00:00+05:30',end:'2027-02-17T18:00:00+05:30',venue:'The Garden Courtyard',dress:'Fresh greens & festive florals',note:'Henna-stained hands, chai, laughter and all the colours of a new beginning.'},
 {id:'sangeet',image:'/events/sangeet.webp',imageAlt:'An Indian couple dancing beneath fairy lights at their sangeet',mapsQuery:'',name:'Sangeet',symbol:'♫',day:'17 FEB',time:'7:30 PM',start:'2027-02-17T19:30:00+05:30',end:'2027-02-17T23:00:00+05:30',venue:'The Starlit Terrace',dress:'A little sparkle, dancing shoes',note:'Bring your best moves. Our families have been rehearsing, and the dance floor is waiting.'},
 {id:'haldi',image:'/events/haldi.webp',imageAlt:'A joyful haldi ceremony beneath yellow marigold garlands',mapsQuery:'',name:'Haldi',symbol:'☀',day:'18 FEB',time:'10:00 AM',start:'2027-02-18T10:00:00+05:30',end:'2027-02-18T12:00:00+05:30',venue:'The Sunlit Lawn',dress:'Sunshine yellow & easy whites',note:'A morning of blessings, marigolds and a very generous helping of turmeric.'},
 {id:'pheras',image:'/events/pheras.webp',imageAlt:'A bride and groom taking pheras around the sacred fire',mapsQuery:'',name:'Pheras',symbol:'❋',day:'18 FEB',time:'4:30 PM',start:'2027-02-18T16:30:00+05:30',end:'2027-02-18T18:30:00+05:30',venue:'The Wedding Pavilion',dress:'Traditional Indian / formal',note:'Seven promises. Two families. Join us as we step into our forever.'},
 {id:'reception',image:'/events/reception.webp',imageAlt:'A newlywed couple at an elegant candlelit Indian wedding reception',mapsQuery:'',name:'Reception',symbol:'✧',day:'18 FEB',time:'7:00 PM',start:'2027-02-18T19:00:00+05:30',end:'2027-02-18T23:00:00+05:30',venue:'The Grand Ballroom',dress:'Evening elegance',note:'Dinner, heartfelt toasts, and one more dance. Let the celebration continue.'}
];
// Every theme gets the complete feature set; presentation and section sequence differ.
const rows=[
 ['folio','embroidered','fish','scroll','blessing,couple,story,countdown,celebrate,gallery,visit,rsvp'],
 ['earth','circle','dancer','circle','blessing,countdown,celebrate,couple,story,gallery,visit,rsvp'],
 ['garden','arches','petal','doors','blessing,couple,countdown,story,celebrate,gallery,visit,rsvp'],
 ['palace','palace','petal','doors','countdown,blessing,celebrate,couple,story,gallery,visit,rsvp'],
 ['pond','lotus','lotus','curtain','blessing,countdown,couple,story,gallery,celebrate,visit,rsvp'],
 ['textile','vine','leaf','scroll','blessing,story,couple,countdown,celebrate,gallery,visit,rsvp'],
 ['festival','diamonds','diamond','curtain','countdown,blessing,couple,celebrate,story,gallery,visit,rsvp'],
 ['mandala','radial','dot','circle','blessing,couple,countdown,celebrate,story,gallery,visit,rsvp'],
 ['sanctuary','temple','flame','doors','blessing,countdown,celebrate,couple,story,visit,gallery,rsvp'],
 ['valley','botanical','leaf','book','blessing,story,couple,gallery,countdown,celebrate,visit,rsvp'],
 ['baraat','truck','diamond','curtain','countdown,celebrate,blessing,couple,story,gallery,visit,rsvp'],
 ['comic','doodle','heart','envelope','couple,story,blessing,countdown,celebrate,gallery,visit,rsvp'],
 ['storybook','toile','petal','book','blessing,story,couple,countdown,celebrate,gallery,visit,rsvp'],
 ['wash','watercolour','petal','envelope','blessing,couple,gallery,story,countdown,celebrate,visit,rsvp'],
 ['meadow','wildflower','leaf','curtain','countdown,blessing,celebrate,visit,couple,story,gallery,rsvp'],
 ['magazine','type','line','book','couple,blessing,story,countdown,celebrate,gallery,visit,rsvp'],
 ['airmail','postcard','stamp','envelope','blessing,countdown,visit,celebrate,couple,story,gallery,rsvp'],
 ['scrapbook','polaroid','heart','book','gallery,couple,story,blessing,countdown,celebrate,visit,rsvp'],
 ['orbit','celestial','star','circle','blessing,countdown,story,couple,celebrate,gallery,visit,rsvp'],
 ['gala','deco','spark','doors','blessing,countdown,couple,celebrate,story,gallery,visit,rsvp']
];
export function presentation(d){const row=d.id==='22'?['palacegarden','palacegarden','petal','carved-doors','blessing,couple,story,countdown,gallery,celebrate,visit,rsvp']:d.id==='21'?['royalscroll','royalscroll','spark','royal-panels','blessing,countdown,couple,story,gallery,celebrate,visit,rsvp']:rows[Number(d.id)-1];return {layout:row[0],frame:row[1],particle:row[2],opening:row[3],sections:row[4].split(',')}}
export function countdownParts(target,now=Date.now()){const ms=Math.max(0,new Date(target).getTime()-now);return {days:Math.floor(ms/86400000),hours:Math.floor(ms/3600000)%24,minutes:Math.floor(ms/60000)%60,seconds:Math.floor(ms/1000)%60,ended:ms===0}}
export function mapsLink(query){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query)}
const escapeICS=s=>String(s).replaceAll('\\','\\\\').replaceAll('\n','\\n').replaceAll(';','\\;').replaceAll(',','\\,');
const utc=s=>new Date(s).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z/,'Z');
export function calendarText(event,d){return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//The Wedding Edit//Wedding Calendar//EN','BEGIN:VEVENT',`UID:${d.slug}-${event.id}@wedding-edit`,`DTSTAMP:${utc(new Date().toISOString())}`,`DTSTART:${utc(event.start)}`,`DTEND:${utc(event.end)}`,`SUMMARY:${escapeICS(wedding.names.join(' & ')+' — '+event.name)}`,`LOCATION:${escapeICS(event.venue+', '+wedding.venue.name+', '+d.city)}`,`DESCRIPTION:${escapeICS(event.note+' Dress code: '+event.dress+'. Sample wedding details.')}`,'END:VEVENT','END:VCALENDAR',''].join('\r\n')}
export function downloadCalendar(event,d){const url=URL.createObjectURL(new Blob([calendarText(event,d)],{type:'text/calendar;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=`${d.slug}-${event.id}.ics`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
// Human-readable dates stay tied to the configurable ceremony timestamp.
export function ceremonyDate(options={day:'numeric',month:'long',year:'numeric'}){return new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',...options}).format(new Date(wedding.date))}
export function ceremonyTime(){return new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',hour:'numeric',minute:'2-digit'}).format(new Date(wedding.date))}
export function initials(){return wedding.names.map(name=>name.trim()[0]||'').join(' & ')}
