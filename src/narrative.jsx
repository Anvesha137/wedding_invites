import React,{useEffect,useRef} from 'react';
import {wedding,ceremonyDate,downloadCalendar,eventTemplates} from './wedding-config';
import {GaneshBlessing} from './invitation-details';
export function SceneOrnaments({kind='lanterns'}){return <div className={`scene-ornaments ornaments-${kind}`} aria-hidden="true">{Array.from({length:9},(_,i)=><span key={i} style={{'--n':i,'--left':`${7+(i*37)%88}%`,'--top':`${8+(i*23)%78}%`}}>{kind==='stars'?'✦':kind==='petals'?'❧':''}</span>)}</div>}
export function NarrativeHero({design:d,motion,active,heroRef}){
 const stage=useRef(null);
 useEffect(()=>{const el=stage.current;if(!el)return;let frame=0;
 const paint=()=>{frame=0;const r=el.getBoundingClientRect();const p=motion&&active?Math.max(0,Math.min(1,-r.top/Math.max(1,r.height-innerHeight))):0;el.style.setProperty('--journey',p);el.style.setProperty('--title-y',`${p*-110}px`);el.style.setProperty('--art-y',`${p*55}px`)};
 const schedule=()=>{if(!frame)frame=requestAnimationFrame(paint)};paint();if(active&&motion){addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule)}return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',schedule);removeEventListener('resize',schedule)};
 },[active,motion]);
 return <section ref={heroRef} id="welcome" tabIndex={-1} className="wedding-hero narrative-hero"><div ref={stage} className="narrative-journey"><div className="narrative-stage"><img className="narrative-painting" src={d.image} alt={d.mood} fetchpriority="high"/><div className="narrative-shade"/><SceneOrnaments kind={d.ornament}/><div className="narrative-title"><GaneshBlessing/><p className="narrative-kicker">WITH THE BLESSINGS OF OUR FAMILIES</p><h1><span>{wedding.names[0]}</span><i>and</i><span>{wedding.names[1]}</span></h1><p className="narrative-date">{ceremonyDate({day:'2-digit',month:'long',year:'numeric'})}<br/><span>{d.city}</span></p><a href="#blessing" className="narrative-scroll">SCROLL TO UNFOLD OUR CELEBRATION<span>↓</span></a></div><div className="narrative-base"/></div></div><div className="narrative-caption"><span>{d.line}</span><button onClick={()=>downloadCalendar(eventTemplates.find(e=>e.id==='pheras'),d)}>Save our wedding date ↗</button></div></section>
}
