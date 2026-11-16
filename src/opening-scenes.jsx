import React from 'react';
import {Art} from './weddings';
import './opening-scenes.css';
export const openingScenes={madhubani:'ink-lotus',warli:'village-dawn',mughal:'garden-arches',jaipur:'pink-palace',pichwai:'lotus-flight',kalamkari:'vine-drawing',phulkari:'woven-silk',alpana:'rice-mandala',temple:'golden-dawn',kashmir:'valley-breeze',truck:'baraat-road',doodle:'sketchbook',toile:'blue-etching',watercolour:'paint-bloom',wildflower:'meadow-sunrise',editorial:'paper-curtain',postcard:'coastal-dawn',polaroid:'memory-shutter',celestial:'moonrise',blacktie:'midnight-curtain',royalscroll:'royal-unfurl',palacegarden:'garden-doors'};
export function OpeningScene({design:d}){
 const dawn=['warli','temple','wildflower','postcard','watercolour'].includes(d.art);
 const night=['celestial','blacktie'].includes(d.art);
 const birds=['mughal','jaipur','pichwai','kashmir','toile','wildflower','postcard','palacegarden'].includes(d.art);
 return <div className={`opening-scene photographic-opening scene-${openingScenes[d.art]} ${dawn?'has-dawn':''} ${night?'has-moon':''}`} aria-hidden="true">
 <img className="opening-landscape" src={d.image} alt="" fetchPriority="high"/>
 <div className="opening-light"/><div className="opening-orb"/>
 <div className="opening-art opening-art-left"><Art design={d}/></div><div className="opening-art opening-art-right"><Art design={d}/></div>
 <svg className="opening-drawing" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid slice"><path pathLength="1" d="M40 850V230Q40 80 180 70H820Q960 80 960 230V850M75 850V240Q75 115 190 105H810Q925 115 925 240V850M100 790Q200 750 120 650T180 480Q70 420 130 320M900 790Q800 750 880 650T820 480Q930 420 870 320M300 840Q500 740 700 840M370 850Q500 790 630 850"/></svg>
 {birds&&<div className="opening-birds">{[0,1,2,3].map(i=><svg key={i} style={{'--bird':i}} viewBox="0 0 100 60"><g className="bird-wing-left"><path d="M50 36Q25 0 2 14Q24 18 50 36"/></g><g className="bird-wing-right"><path d="M50 36Q75 0 98 14Q76 18 50 36"/></g><path d="M45 34L55 34L60 40L48 40Z"/></svg>)}</div>}
 <div className="opening-horizon"/>
 </div>
}
