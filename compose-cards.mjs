import fs from 'node:fs';
import {designs} from './src/designs.js';
const configurations=[
['1.1fr .9fr','50% 50% 8px 8px','4 / 3',35],['1fr','4px','16 / 8',0],['1fr 1fr','180px 180px 8px 8px','4 / 5',70],['1fr 1fr 1fr','120px 120px 0 0','3 / 4',35],['1fr 1fr','50% 50% 12px 12px','1 / 1',100],['1fr','2px','4 / 3',0],['1fr 1fr','0','1 / 1',50],['1fr 1fr','160px 160px 20px 20px','4 / 3',0],['1fr 1fr 1fr','150px 150px 0 0','3 / 4',50],['1fr 1fr','100px 8px 100px 8px','4 / 3',80],['1fr','28px','16 / 9',0],['1fr 1fr','35px 8px 40px 12px','1 / 1',60],['1fr 1fr 1fr','150px 150px 4px 4px','4 / 5',30],['1fr 1fr','45% 45% 12px 12px','1 / 1',100],['1fr','160px 160px 12px 12px','16 / 9',0],['1fr','0','16 / 9',0],['1fr 1fr','0','4 / 3',55],['1fr 1fr 1fr','2px','1 / 1',45],['1fr 1fr','200px 200px 4px 4px','4 / 5',100],['1fr','0','21 / 9',0],['1fr 1fr','4px','4 / 3',65],['1fr 1fr','160px 160px 8px 8px','4 / 5',50]
];
let css='/* Explicit event compositions per theme, retaining each theme’s entrance animation. */\n';
for(const [i,d] of designs.entries()){
 const [columns,radius,aspect,stagger]=configurations[i],p=`.experience.immersive.theme-${d.art}`;
 css+=`${p} .celebration-cards{display:grid;grid-template-columns:${columns};gap:${28+i%4*6}px;align-items:start}\n${p} .event-card{min-width:0;border-radius:${radius};overflow:hidden;margin:0;grid-column:auto;background:var(--surface)}\n${p} .event-photo{aspect-ratio:${aspect};height:auto;min-height:0;border-radius:${radius}}\n${p} .event-photo img{height:100%;width:100%;object-fit:cover}\n`;
 if(columns==='1fr')css+=`@media(min-width:800px){${p} .event-card{display:grid;grid-template-columns:${i===15?'1.5fr 1fr':'1fr 1fr'};align-items:stretch}${p} .event-photo{height:100%;min-height:350px}${p} .event-card:nth-child(even) .event-photo{order:2}${p} .event-body{padding:40px}}\n`;
 else css+=`@media(min-width:800px){${p} .event-card:nth-child(even){margin-top:${stagger}px}${p} .event-card:last-child{grid-column:${i%3===0?'1 / -1':'auto'}}}\n`;
 if(['polaroid','postcard','doodle'].includes(d.art))css+=`${p} .event-card{padding:12px;box-shadow:8px 16px 35px #0002}${p} .event-card:nth-child(odd){rotate:-1.5deg}${p} .event-card:nth-child(even){rotate:1.5deg}\n`;
}
css+='@media(max-width:799px){.experience.immersive .celebration-cards{grid-template-columns:minmax(0,1fr);gap:35px}.experience.immersive .event-card{margin:0;rotate:0;display:block;grid-column:auto}.experience.immersive .event-photo{aspect-ratio:4/3;max-height:360px}.experience.immersive .event-body{padding:25px}}\n';
fs.writeFileSync('src/card-compositions.css',css);
let s=fs.readFileSync('src/experience.jsx','utf8');s=s.replace("import {RoyalCrest,RoyalElephant,RoyalScrollBlessing,RoyalDateReveal} from './royal-scroll';","import {RoyalCrest,RoyalElephant,RoyalScrollBlessing,RoyalDateReveal} from './royal-scroll';\nimport './card-compositions.css';");fs.writeFileSync('src/experience.jsx',s);
