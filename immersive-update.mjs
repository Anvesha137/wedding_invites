import {readFileSync,writeFileSync} from 'node:fs';
let s=readFileSync('src/experience.jsx','utf8');s=s.replace("import './palace-garden.css';","import './palace-garden.css';\nimport {ImmersiveScene} from './immersive';");s=s.replace('className={`wedding experience theme-', 'className={`wedding experience immersive theme-');
const a=s.indexOf(' <div className="demo-bar">'),b=s.indexOf(' <main>',a);if(a<0||b<0)throw Error('Navigation region not found');s=s.slice(0,a)+s.slice(b);
s=s.replace(' <audio ref={audio}', ' <ImmersiveScene design={d} enabled={motion} active={opened}/>\n <audio ref={audio}');
s=s.replace("el.classList.add('reveal');observer.observe(el)","el.classList.add('reveal');if(el.matches('.event-card,.person-card,.album-photo,.story-timeline article'))el.classList.add('depth-card');observer.observe(el)");
s=s.replace('<footer className="w-footer">','<footer className="w-footer"><a className="collection-return" href="/">← Back to the collection</a>');writeFileSync('src/experience.jsx',s);
