import fs from 'node:fs';
let s=fs.readFileSync('verify.mjs','utf8');s=s.replace('for(const id of [\'welcome\',...required])',`assert.ok(!html.includes('wedding-nav')&&!html.includes('demo-bar'),design.name+': no navbar');
 assert.ok(html.includes('immersive-scene')&&html.includes('opening-scene'),design.name+': layered background and illustrated opening');
 for(const id of ['welcome',...required])`);fs.writeFileSync('verify.mjs',s);
