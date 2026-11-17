import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Check, Heart, Menu, X } from 'lucide-react'
import './styles.css'

import { designs } from './designs'
import { ThemePreview, WeddingSite } from './weddings'
const filters = ['All', 'Heritage', 'Royal', 'Romantic', 'Playful', 'Modern', 'Luxury']

function App() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(new URLSearchParams(location.search).get('choose') || '01')
  const [mobileNav, setMobileNav] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', city: '', celebration: 'Wedding', timeline: 'As soon as possible', notes: '' })
  const [features, setFeatures] = useState([])

  const visibleDesigns = useMemo(() => designs.filter(d => filter === 'All' || d.category === filter), [filter])
  const selectedDesign = designs.find(d => d.id === selected) || designs[0]

  const update = (key, value) => setForm(current => ({ ...current, [key]: value }))
  const choose = id => { setSelected(id) }
  const toggleFeature = value => setFeatures(current => current.includes(value) ? current.filter(x => x !== value) : [...current, value])

  function submitInquiry(e) {
    e.preventDefault()
    const dateText = form.date ? new Date(`${form.date}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Not specified'
    const message = `Hello! I'd like to enquire about a wedding website. 💙

MY DETAILS
Name: ${form.name}
Phone: ${form.phone}
Wedding date: ${dateText}
Wedding city: ${form.city}

WEBSITE PREFERENCES
Selected template: ${selectedDesign.id} - ${selectedDesign.name}
Celebration: ${form.celebration}
Website needed: ${form.timeline}
Features: ${features.length ? features.join(', ') : 'Not specified'}
Additional requirements: ${form.notes.trim() || 'None'}

Please share the details and next steps. Thank you!`
    window.open(`https://wa.me/917619479099?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return <div className="site-shell">
    <header className="site-header">
      <a href="#" className="wordmark">the wedding edit<span>.</span><small>A LITTLE WEBSITE FOR YOUR FOREVER</small></a>
      <button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation">{mobileNav ? <X /> : <Menu />}</button>
      <nav className={mobileNav ? 'nav-open' : ''}>
        <a href="#collection" onClick={() => setMobileNav(false)}>The collection</a>
        <a href="#details" onClick={() => setMobileNav(false)}>What's included</a>
        <a className="nav-cta" href="#enquire" onClick={() => setMobileNav(false)}>Enquire now <ArrowUpRight size={14} /></a>
      </nav>
    </header>

    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> WEDDING WEBSITES, THOUGHTFULLY MADE</div>
          <h1>Your day.<br /><em>Your story.</em><br />Your little corner<br className="desktop-break" /> of the internet.</h1>
          <p>All the details, all the people, all the happy chaos. Beautifully brought together in one place your guests can come back to.</p>
          <div className="hero-actions"><a className="button button-dark" href="#collection">Explore the collection <ArrowUpRight size={15} /></a><a className="text-link" href="#enquire">Create your website <ArrowDownRight size={15} /></a></div>
          <div className="hero-note"><Heart size={14} /> MADE FOR THE DAYS YOU'LL REMEMBER</div>
        </div>
        <div className="hero-visual">
          <div className="hero-stamp">MADE<br />WITH<br /><i>love</i></div>
          <a className="hero-real-preview" href="?theme=madhubani-love-story"><ThemePreview design={designs[0]} /></a>
          <div className="hero-caption">A preview of your forever <span>01 / {designs.length}</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <div><strong>{designs.length}</strong><span>distinctive designs</span></div><i />
        <div><strong>02</strong><span>beautiful screen sizes</span></div><i />
        <div><strong>01</strong><span>very personal celebration</span></div>
      </section>

      <section className="collection section-pad" id="collection">
        <div className="section-heading">
          <div><div className="eyebrow">THE COLLECTION · 001—{String(designs.length).padStart(3, '0')}</div><h2>Find the one <em>that feels like you.</em></h2></div>
          <p>{designs.length} complete wedding websites, from Indian folk art to modern romance. Open a design to explore its story, celebrations, gallery and RSVP.</p>
        </div>
        <div className="filter-row" role="group" aria-label="Filter templates">
          {filters.map(item => <button key={item} className={filter === item ? 'filter-pill active' : 'filter-pill'} onClick={() => setFilter(item)}>{item}</button>)}
          <span className="result-count">{visibleDesigns.length} DESIGNS</span>
        </div>
        <div className="template-grid">
          {visibleDesigns.map(d => <article key={d.id} className={`template-card ${selected === d.id ? 'is-selected' : ''}`}>
            <div className="card-preview"><a href={`?theme=${d.slug}`} style={{width: "100%", height: "100%"}} aria-label={`Open ${d.name} website`}><ThemePreview design={d} /></a></div>
            <div className="card-info">
              <div className="card-meta"><span>{Number(d.id)>=21?'NEW · Royal':d.category}</span><span>NO. {d.id}</span></div>
              <h3>{d.name}</h3><p>{d.mood}</p>
              <div className="card-actions"><a className="preview-link" href={`?theme=${d.slug}`}>View website <ArrowUpRight size={13} /></a><button className={`choose-button ${selected === d.id ? 'chosen' : ''}`} onClick={() => choose(d.id)}>{selected === d.id ? <><Check size={13} /> Selected</> : 'Choose design'}</button></div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="details-section section-pad" id="details">
        <div className="details-art"><div className="details-art-card"><div className="details-art-kicker">SAVE THE DATE</div><div className="details-art-title">Aarav <i>&</i><br />Meera</div><div className="details-art-flower">✳</div><div className="details-art-date">18 FEBRUARY 2027</div></div><div className="details-side-note">ONE LINK.<br />ALL THE DETAILS.</div></div>
        <div className="details-copy"><div className="eyebrow">A LITTLE MORE THAN AN INVITE</div><h2>Everything in its <em>right place.</em></h2><p>Give your guests one lovely link for all the things they need to know before the big day.</p>
          <div className="feature-list">
            {['Ganesh blessing & animated tap-to-open invitation','Background music, countdown & date reveal','Couple profiles, family note & story timeline','Five animated event cards, photos, maps & calendars','Photo viewer, travel, accommodation & FAQs','RSVP with Google Sheets connection placeholder'].map((x, i) => <div key={x}><span>0{i + 1}</span>{x}</div>)}
          </div>
          <a href="#enquire" className="text-link">Let's plan yours <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section className="enquiry-section section-pad" id="enquire">
        <div className="enquiry-intro"><div className="eyebrow">YOUR TURN, LOVE</div><h2>Let's make something <em>lovely.</em></h2><p>Tell us a little about your celebration. Your chosen design will come along with your enquiry, so you don't have to explain it all over again.</p><div className="contact-note"><span>HAVE A QUESTION?</span><a href="https://wa.me/917619479099" target="_blank" rel="noreferrer">Chat with us on WhatsApp <ArrowUpRight size={14} /></a></div></div>
        <form className="enquiry-form" onSubmit={submitInquiry}>
          <div className="form-heading"><div><span>LET'S GET STARTED</span><h3>A few details about your day.</h3></div><span className="required-note">* REQUIRED</span></div>
          <div className="form-grid">
            <label>Your name *<input required maxLength="80" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Full name" /></label>
            <label>Phone number *<input required type="tel" pattern="[0-9 +()-]{10,16}" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+91 98765 43210" /></label>
            <label>Wedding date *<input required type="date" value={form.date} onChange={e => update('date', e.target.value)} /></label>
            <label>Wedding city *<input required value={form.city} onChange={e => update('city', e.target.value)} placeholder="e.g. Indore" /></label>
          </div>
          <label className="full-label">Selected template *</label>
          <div className="selected-template"><div className="selected-swatch" style={{ background: selectedDesign.bg }}><span style={{ color: selectedDesign.ink }}>A<span>&</span>M</span></div><div><strong>{selectedDesign.name}</strong><small>{selectedDesign.category} · Design {selectedDesign.id}</small></div><button type="button" onClick={() => document.getElementById('collection').scrollIntoView({ behavior: 'smooth' })}>Change</button></div>
          <div className="form-grid extra-fields">
            <label>What are you celebrating?<select value={form.celebration} onChange={e => update('celebration', e.target.value)}><option>Wedding</option><option>Engagement</option><option>Wedding + Engagement</option><option>Destination Wedding</option><option>Other celebration</option></select></label>
            <label>When do you need it?<select value={form.timeline} onChange={e => update('timeline', e.target.value)}><option>As soon as possible</option><option>Within 2 weeks</option><option>Within a month</option><option>In 2–3 months</option><option>Just exploring for now</option></select></label>
          </div>
          <fieldset className="feature-options"><legend>What would you like included?</legend><div>{['Photo gallery', 'RSVP', 'Event schedule', 'Venue maps', 'Our story', 'Background music'].map(item => <label key={item}><input type="checkbox" checked={features.includes(item)} onChange={() => toggleFeature(item)} />{item}</label>)}</div></fieldset>
          <label className="full-label notes-label">Anything else? <span>OPTIONAL</span><textarea rows="3" value={form.notes} onChange={e => update('notes', e.target.value)} placeholder="Special requests, ideas, or anything we should know..." /></label>
          <button className="submit-button" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={16} /></button>
          <p className="privacy-note">This opens WhatsApp with your details filled in. You'll review and send the message there.</p>
        </form>
      </section>
    </main>

    <footer className="site-footer"><a href="#" className="wordmark">the wedding edit<span>.</span><small>A LITTLE WEBSITE FOR YOUR FOREVER</small></a><div>MADE WITH CARE, FOR YOUR BIG DAY <Heart size={12} /></div><a href="https://wa.me/917619479099" target="_blank" rel="noreferrer">WHATSAPP US <ArrowUpRight size={13} /></a></footer>

  </div>
}

const theme = designs.find(d => d.slug === new URLSearchParams(location.search).get('theme'))
createRoot(document.getElementById('root')).render(<React.StrictMode>{theme ? <WeddingSite design={theme} /> : <App />}</React.StrictMode>)


import './responsive.css'

import './photographic.css'

import './storybook.css'
