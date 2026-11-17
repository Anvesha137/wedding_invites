import React from 'react';
import {wedding,ceremonyDate,downloadCalendar,eventTemplates} from './wedding-config';
import {GaneshBlessing} from './invitation-details';
export function SceneOrnaments({kind='lanterns'}){if(kind==='none')return null;return <div className={`scene-ornaments ornaments-${kind}`} aria-hidden="true">{Array.from({length:9},(_,i)=><span key={i} style={{'--n':i,'--left':`${7+(i*37)%88}%`,'--top':`${8+(i*23)%78}%`}}>{kind==='stars'?'✦':kind==='petals'?'❧':''}</span>)}</div>}
export function NarrativeHero({design:d,motion,active,heroRef}){
 return <section ref={heroRef} id="welcome" tabIndex={-1} className="wedding-hero narrative-hero"><div className="narrative-journey"><div className="narrative-stage"><div className="narrative-title"><GaneshBlessing/><p className="narrative-kicker">WITH THE BLESSINGS OF OUR FAMILIES</p><h1><span>{wedding.names[0]}</span><i>and</i><span>{wedding.names[1]}</span></h1><p className="narrative-date">{ceremonyDate({day:'2-digit',month:'long',year:'numeric'})}<br/><span>{d.city}</span></p><a href="#blessing" className="narrative-scroll">SCROLL TO UNFOLD OUR CELEBRATION<span>↓</span></a></div><div className="narrative-base"/></div></div><div className="narrative-caption"><span>{d.line}</span><button onClick={()=>downloadCalendar(eventTemplates.find(e=>e.id==='pheras'),d)}>Save our wedding date ↗</button></div></section>
}
