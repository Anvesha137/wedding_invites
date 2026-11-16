import {readFileSync,writeFileSync} from 'node:fs';
let s=readFileSync('src/royal-scroll.jsx','utf8');s=s.replace("import './royal-scroll.css';","import './royal-scroll.css';\nimport {scrollUnfurlProgress} from './scroll-progress';");
s=s.replace('export function RoyalScrollBlessing(){return',`export function RoyalScrollBlessing({motion=true,active=true}){
const sheet=useRef(null);
useEffect(()=>{
 if(!active||!sheet.current)return;
 const el=sheet.current,paper=el.querySelector('.scroll-paper');let frame=0;
 const update=()=>{frame=0;const height=paper.offsetHeight;const p=motion?scrollUnfurlProgress(el.getBoundingClientRect().top,height,window.innerHeight):1;el.style.setProperty('--scroll-clip',(100-p*100).toFixed(3)+'%');el.style.setProperty('--roller-shift',(-(1-p)*height).toFixed(2)+'px');el.dataset.unfurlProgress=p.toFixed(3)};
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
 const observer=new ResizeObserver(schedule);observer.observe(paper);
 window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);update();
 return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule)};
},[motion,active]);
return`);
s=s.replace('<div className="royal-scroll-sheet">','<div ref={sheet} className="royal-scroll-sheet scroll-scrubbed">');writeFileSync('src/royal-scroll.jsx',s);
let e=readFileSync('src/experience.jsx','utf8').replace('<RoyalScrollBlessing/>','<RoyalScrollBlessing motion={motion} active={opened}/>');e=e.replace("import './video-inspired.css';","import './video-inspired.css';\nimport './palace-garden.css';");e=e.replace("d.id==='21'?1800:1100","['21','22'].includes(d.id)?1800:1100");e=e.replace("{d.id==='21'&&<button className=\"royal-replay\"", "{['21','22'].includes(d.id)&&<button className=\"royal-replay\"");writeFileSync('src/experience.jsx',e);
let d=readFileSync('src/designs.js','utf8');d+=`\ndesigns.push({id:'22',name:'The Palace Garden Invite',category:'Royal',art:'palacegarden',bg:'#fcf3ec',accent:'#bd9a5a',ink:'#8b425b',city:'Jaisalmer',slug:'the-palace-garden-invite',mood:'Carved doors, pastel florals & an illustrated celebration',line:'Two souls, one heart, one beautiful journey.'});\n`;writeFileSync('src/designs.js',d);
let c=readFileSync('src/wedding-config.js','utf8');c=c.replace("const row=d.id==='21'?", "const row=d.id==='22'?['palacegarden','palacegarden','petal','carved-doors','blessing,couple,story,countdown,gallery,celebrate,visit,rsvp']:d.id==='21'?");writeFileSync('src/wedding-config.js',c);
let a=readFileSync('src/weddings.jsx','utf8').replace("case 'royalscroll':", "case 'palacegarden':c=<image href=\"/artwork/palace-doors.webp\" x=\"0\" y=\"0\" width=\"460\" height=\"360\" preserveAspectRatio=\"xMidYMid slice\"/>;break;\ncase 'royalscroll':");writeFileSync('src/weddings.jsx',a);
let m=readFileSync('src/main.jsx','utf8').replace("d.id==='21'?'NEW · Royal'", "Number(d.id)>=21?'NEW · Royal'");writeFileSync('src/main.jsx',m);
