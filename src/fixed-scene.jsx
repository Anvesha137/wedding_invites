import React from 'react';
import {SceneOrnaments} from './narrative';
// Fixed to the viewport: neither scroll nor pointer movement changes this scene.
export function FixedScene({design:d}){return <div className={`fixed-invitation-scene fixed-scene-${d.sceneStyle||'framed'}`} aria-hidden="true"><img className="fixed-scene-image" src={d.image} alt="" fetchpriority="high"/><div className="fixed-scene-tint"/>{d.overlay&&<img className="fixed-scene-overlay" src={d.overlay} alt=""/>}<SceneOrnaments kind={d.ornament}/><div className="fixed-scene-vignette"/></div>}
