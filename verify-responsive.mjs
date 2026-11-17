import fs from 'node:fs';
import assert from 'node:assert/strict';
import postcss from 'postcss';
import {designs} from './src/designs.js';
import {presentation} from './src/wedding-config.js';
const file=fs.readdirSync('dist/assets').find(x=>x.endsWith('.css'));
const css=postcss.parse(fs.readFileSync('dist/assets/'+file,'utf8'));
// Resolve the simple ancestor-class selectors used by event grid rules in the shipped CSS.
function columns(design,width){
 const classes=new Set(['experience','immersive','wedding','theme-'+design.art,'layout-'+presentation(design).layout,...(design.storybook?['storybook','pinned-invitation','scene-style-'+(design.sceneStyle||'framed'),'composition-'+design.composition]:[])]);let best=null,order=0;
 css.walkRules(rule=>{
  for(let parent=rule.parent;parent;parent=parent.parent){if(parent.type==='atrule'&&parent.name==='media'){
   const q=parent.params;const min=[...q.matchAll(/min-width:\s*([\d.]+)px/g)].map(x=>+x[1]);const max=[...q.matchAll(/max-width:\s*([\d.]+)px/g)].map(x=>+x[1]);
   if(min.some(x=>width<x)||max.some(x=>width>x))return;
  }}
  for(const selector of rule.selectors){if(!selector.endsWith(' .celebration-cards'))continue;
   const ancestor=selector.slice(0,-' .celebration-cards'.length);if(!/^[.\w\-\[\]]+$/.test(ancestor))continue;
   if([...ancestor.matchAll(/\.([\w-]+)/g)].some(m=>!classes.has(m[1])))continue;
   const specificity=(selector.match(/\.[\w-]+|\[[^\]]+\]/g)||[]).length;
   rule.walkDecls('grid-template-columns',decl=>{order++;const rank=(decl.important?1000:0)+specificity;if(!best||rank>best.rank||rank===best.rank&&order>best.order)best={value:decl.value,rank,order}});
  }
 });return best?.value;
}
for(const design of designs){for(const width of [320,360,390,430,540,768,799])assert.equal(columns(design,width),'minmax(0,1fr)',`${design.name} at ${width}px`);for(const width of [800,1024])assert.equal(columns(design,width),design.storybook?'minmax(0,1fr)':'repeat(2,minmax(0,1fr))',`${design.name} tablet ${width}px`)}
console.log('PASS shipped CSS cascade: all 22 templates, 7 mobile widths and 2 tablet widths (198 checks).');
