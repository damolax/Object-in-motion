(() => {
  const STUDIO_EMAIL = 'objectsinmotion.ca@gmail.com';
  const current = document.body.dataset.page || 'home';
  const nav = [
    ['home','index.html','Home'],['portfolio','portfolio.html','Portfolio'],['commissions','commissions.html','Commission'],['collect','shop.html','Collect'],['spaces','spaces.html','For spaces'],['about','about.html','About'],['faq','faq.html','FAQ']
  ];

  const header = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" id="top">
    <a class="brand" href="index.html" aria-label="Objects In Motion home">
      <img class="brand-logo" src="assets/images/oim-logo-black.png" alt="Objects In Motion">
    </a>
    <button class="menu-button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span class="sr-only">Menu</span></button>
    <nav class="site-nav" id="site-nav">
      ${nav.map(([id,url,label])=>`<a href="${url}" class="${current===id?'active':''}">${label}</a>`).join('')}
      <a class="nav-contact" href="commissions.html">Commission a sculpture <span>↗</span></a>
    </nav>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="footer-cta">
      <p class="kicker">A sculpture unlike any other</p>
      <a href="commissions.html"><span>Bring an idea</span><strong>into motion.</strong><i>↗</i></a>
    </div>
    <div class="footer-grid">
      <div><img class="footer-logo" src="assets/images/oim-logo-black.png" alt="Objects In Motion"><p>One-of-a-kind rolling ball sculpture and kinetic art, handcrafted near the Rocky Mountains in Cochrane, Alberta, Canada.</p></div>
      <div><span>Explore</span><a href="portfolio.html">Portfolio</a><a href="commissions.html">Commission</a><a href="shop.html">Collect</a><a href="spaces.html">For spaces</a><a href="visualize.html">Visualize in your space</a></div>
      <div><span>Contact</span><a href="mailto:${STUDIO_EMAIL}">${STUDIO_EMAIL}</a><a href="tel:+14037034425">+1 403 703 4425</a><p>Cochrane, Alberta, Canada</p></div>
    </div>
    <div class="footer-bottom"><span>© 2020–2026 Robert Kalinovich</span><span>Website strategy and redesign by Emily James</span><a href="#top">Back to top ↑</a></div>
  </footer>
  <div class="mobile-action"><a href="shop.html">Collect</a><a href="commissions.html#enquire">Commission</a></div>
  <button class="design-notes-launch" type="button" aria-controls="design-notes" aria-expanded="false"><span>i</span> My notes for Rob</button>
  <aside class="design-notes-panel" id="design-notes" aria-hidden="true">
    <button class="design-notes-close" type="button" aria-label="Close design notes">×</button>
    <p class="kicker">My redesign plan for Objects In Motion</p>
    <h2>Rob, I designed this direction to make the work feel as exceptional online as it does in motion.</h2>
    <p>The customer-facing language across the website is the copy I propose for the finished site. I have kept the tone focused on the sculptures, the collector experience and the practical confidence a serious buyer needs.</p>
    <div class="review-plan-block"><h3>What I have already designed</h3><p>A cinematic first impression, four clear buying paths, a searchable portfolio, individual artwork stories, commission and placement briefs, a professional-project route, collector capture, mobile actions, saved-work shortlists and an interactive room-placement study.</p></div>
    <div class="review-plan-block"><h3>Why I designed it this way</h3><p>The website must do more than display past work. It should help a visitor understand what can be collected, imagine an original commission, see how the process works and take a useful next step without searching through the site.</p></div>
    <div class="review-plan-block"><h3>What I will connect inside Wix Studio</h3><p>I will rebuild this approved direction natively in Wix Studio, connect the complete portfolio to Wix CMS, route forms and photographs into Wix Contacts, add branded automations, confirm inventory and payment rules, preserve existing search visibility through redirects, and install analytics so we can see which works and traffic sources create real enquiries.</p></div><div class="review-plan-block"><h3>How I will help more people find the work</h3><p>I have planned dedicated search themes for rolling ball sculpture, custom kinetic sculpture, private commissions and professional spaces. I will also structure the artist, artwork and FAQ content so search engines and AI answer experiences can understand and cite the business more accurately.</p></div>
    <p>Small <strong class="inline-i">i</strong> markers identify the few places where I need your confirmation or a live Wix connection. They are review notes for you and would not remain on the public website after launch.</p>
    <div class="design-signoff"><strong>Emily James</strong><span>Website strategy, design and conversion direction</span></div>
  </aside>
  <div class="notes-scrim" hidden></div>
  <div class="note-popover" role="tooltip" hidden></div>
  <button class="shortlist-launch" type="button" aria-controls="shortlist-panel" aria-expanded="false"><span>0</span> Saved works</button>
  <aside class="shortlist-panel" id="shortlist-panel" aria-hidden="true">
    <button class="shortlist-close" type="button" aria-label="Close saved works">×</button>
    <p class="kicker">Your shortlist</p>
    <h2>Keep the works that hold your attention.</h2>
    <p class="shortlist-intro">Save works as you explore, then send the list as a starting point for an availability or commission conversation.</p>
    <div class="shortlist-items"></div>
    <div class="shortlist-actions"><a class="button gold shortlist-email" href="#">Open email ↗</a><button class="button dark shortlist-copy" type="button">Copy list</button><button class="text-button shortlist-clear" type="button">Clear all</button></div>
  </aside>
  <div class="shortlist-scrim" hidden></div>
  <div class="form-result" role="dialog" aria-modal="true" aria-labelledby="form-result-title" hidden>
    <div class="form-result-card">
      <button class="form-result-close" type="button" aria-label="Close">×</button>
      <p class="kicker">Your enquiry is ready</p>
      <h2 id="form-result-title">Choose how to continue.</h2>
      <p class="form-result-intro">Your answers have been organized into a clear brief. Open it in your email application, download a copy, or copy the text.</p>
      <pre class="form-result-summary"></pre>
      <div class="form-result-actions">
        <a class="button gold form-email" href="#">Open email ↗</a>
        <button class="button dark form-download" type="button">Download brief ↓</button>
        <button class="button dark form-copy" type="button">Copy text</button>
      </div>
      <p class="form-result-footnote">Selected photographs remain on this device and can be attached when the email opens. The small note beside each upload explains how I will connect secure file submission inside Wix Studio.</p>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);
  const main = document.querySelector('main'); if(main && !main.id) main.id = 'main';

  const menu = document.querySelector('.menu-button');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    document.querySelector('.site-nav')?.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });

  let lastY = 0;
  const head = document.querySelector('.site-header');
  addEventListener('scroll', () => {
    const y = scrollY;
    head?.classList.toggle('scrolled', y > 30);
    head?.classList.toggle('hidden', y > 180 && y > lastY);
    lastY = y;
  }, {passive:true});

  const reveal = new IntersectionObserver((entries)=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('is-visible'); reveal.unobserve(e.target)}
  }),{threshold:.09});
  document.querySelectorAll('[data-reveal]').forEach(el=>reveal.observe(el));

  document.querySelectorAll('img[data-fallback]').forEach(img=>{
    img.addEventListener('error',()=>{ if(img.dataset.didFallback) return; img.dataset.didFallback='1'; img.src=img.dataset.fallback; });
  });

  // Design notes drawer, written in Emily's voice.
  const notesLaunch = document.querySelector('.design-notes-launch');
  const notesPanel = document.querySelector('.design-notes-panel');
  const notesScrim = document.querySelector('.notes-scrim');
  const closeNotes = () => {
    notesPanel?.classList.remove('open');
    notesPanel?.setAttribute('aria-hidden','true');
    notesLaunch?.setAttribute('aria-expanded','false');
    if(notesScrim) notesScrim.hidden = true;
  };
  const openNotes = () => {
    notesPanel?.classList.add('open');
    notesPanel?.setAttribute('aria-hidden','false');
    notesLaunch?.setAttribute('aria-expanded','true');
    if(notesScrim) notesScrim.hidden = false;
  };
  notesLaunch?.addEventListener('click',()=> notesPanel?.classList.contains('open') ? closeNotes() : openNotes());
  document.querySelector('.design-notes-close')?.addEventListener('click', closeNotes);
  notesScrim?.addEventListener('click', closeNotes);

  // Tooltip notes: hover/focus on desktop, tap on mobile.
  const popover = document.querySelector('.note-popover');
  let pinnedNote = null;
  function positionNote(btn){
    if(!popover || !btn) return;
    popover.textContent = btn.dataset.note || '';
    popover.hidden = false;
    const r = btn.getBoundingClientRect();
    const width = Math.min(360, innerWidth - 28);
    popover.style.width = `${width}px`;
    const pr = popover.getBoundingClientRect();
    let left = Math.max(14, Math.min(innerWidth - pr.width - 14, r.left + r.width/2 - pr.width/2));
    let top = r.bottom + 12;
    if(top + pr.height > innerHeight - 14) top = Math.max(14, r.top - pr.height - 12);
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
  }
  document.querySelectorAll('.review-note').forEach(b=>{if(!b.getAttribute('aria-label'))b.setAttribute('aria-label','Read Emily’s note for Rob')});
  document.addEventListener('mouseover', e=>{const b=e.target.closest('.review-note'); if(b && !pinnedNote) positionNote(b)});
  document.addEventListener('mouseout', e=>{const b=e.target.closest('.review-note'); if(b && !pinnedNote && popover) popover.hidden=true});
  document.addEventListener('focusin', e=>{const b=e.target.closest('.review-note'); if(b) positionNote(b)});
  document.addEventListener('focusout', e=>{const b=e.target.closest('.review-note'); if(b && !pinnedNote && popover) popover.hidden=true});
  document.addEventListener('click', e=>{
    const b=e.target.closest('.review-note');
    if(b){e.preventDefault();e.stopPropagation();pinnedNote = pinnedNote===b ? null : b;if(pinnedNote) positionNote(b); else if(popover) popover.hidden=true;return;}
    if(pinnedNote && !e.target.closest('.note-popover')){pinnedNote=null;if(popover)popover.hidden=true;}
  });
  addEventListener('resize',()=>{if(pinnedNote)positionNote(pinnedNote)});
  addEventListener('scroll',()=>{if(pinnedNote)positionNote(pinnedNote)},{passive:true});

  // File previews.
  document.querySelectorAll('.demo-upload input[type="file"]').forEach(input=>input.addEventListener('change',()=>{
    const wrap=input.closest('.demo-upload');
    const preview=wrap?.querySelector('.upload-preview');
    const thumbs=wrap?.querySelector('.upload-thumbs');
    const files=[...input.files];
    if(preview){preview.textContent=files.length?`${files.length} image${files.length===1?'':'s'} selected: ${files.map(f=>f.name).join(', ')}`:'No file selected.';preview.classList.add('show')}
    if(thumbs){thumbs.innerHTML='';files.slice(0,6).forEach(file=>{const img=document.createElement('img');img.alt=file.name;img.src=URL.createObjectURL(file);img.onload=()=>URL.revokeObjectURL(img.src);thumbs.appendChild(img)});thumbs.classList.toggle('show',files.length>0)}
  }));

  // Multi-step commission form with per-step validation.
  document.querySelectorAll('[data-stepper]').forEach(form=>{
    const steps=[...form.querySelectorAll('.form-step')]; let index=0;
    const dots=[...form.querySelectorAll('.step-dot')];
    const show=(n)=>{index=Math.max(0,Math.min(steps.length-1,n));steps.forEach((s,i)=>s.classList.toggle('active',i===index));dots.forEach((d,i)=>d.classList.toggle('active',i<=index));form.querySelectorAll('[data-prev]').forEach(b=>b.style.visibility=index?'visible':'hidden');form.querySelectorAll('[data-next]').forEach(b=>b.style.display=index===steps.length-1?'none':'inline-flex');form.querySelectorAll('[data-finish]').forEach(b=>b.style.display=index===steps.length-1?'inline-flex':'none');};
    form.addEventListener('click',e=>{
      if(e.target.closest('[data-next]')){e.preventDefault();const required=[...steps[index].querySelectorAll('[required]')];const invalid=required.find(el=>!el.reportValidity());if(!invalid)show(index+1)}
      if(e.target.closest('[data-prev]')){e.preventDefault();show(index-1)}
    });show(0);
  });

  function formToBrief(form){
    const type = form.dataset.formType || 'enquiry';
    const titleMap={commission:'Objects In Motion — Commission Project Brief',visualize:'Objects In Motion — Placement Brief',contact:'Objects In Motion — General Enquiry',collector:'Objects In Motion — Collector Preview Request'};
    const lines=[titleMap[type]||'Objects In Motion Enquiry','',`Prepared: ${new Date().toLocaleString()}`,''];
    const data=new FormData(form);
    for(const [key,value] of data.entries()){
      if(value instanceof File){continue;}
      if(String(value).trim()) lines.push(`${key}: ${String(value).trim()}`);
    }
    const files=[...form.querySelectorAll('input[type="file"]')].flatMap(i=>[...i.files].map(f=>f.name));
    if(files.length){lines.push('',`Selected photographs: ${files.join(', ')}`,'Note: please attach these files manually when the email opens.');}
    lines.push('','Prepared through the Objects In Motion website.');
    return {type,title:titleMap[type]||'Objects In Motion Enquiry',text:lines.join('\n')};
  }

  const result=document.querySelector('.form-result');
  const summary=result?.querySelector('.form-result-summary');
  const emailLink=result?.querySelector('.form-email');
  const downloadBtn=result?.querySelector('.form-download');
  const copyBtn=result?.querySelector('.form-copy');
  let currentBrief=null;
  function showResult(brief){
    currentBrief=brief;
    if(summary) summary.textContent=brief.text;
    if(emailLink){emailLink.href=`mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(brief.title)}&body=${encodeURIComponent(brief.text)}`;}
    if(result){result.hidden=false;document.body.classList.add('modal-open')}
  }
  function closeResult(){if(result){result.hidden=true;document.body.classList.remove('modal-open')}}
  document.querySelector('.form-result-close')?.addEventListener('click',closeResult);
  result?.addEventListener('click',e=>{if(e.target===result)closeResult()});
  downloadBtn?.addEventListener('click',()=>{if(!currentBrief)return;const blob=new Blob([currentBrief.text],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=currentBrief.title.replace(/[^a-z0-9]+/gi,'_')+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)});
  copyBtn?.addEventListener('click',async()=>{if(!currentBrief)return;await navigator.clipboard.writeText(currentBrief.text);copyBtn.textContent='Copied';setTimeout(()=>copyBtn.textContent='Copy text',1500)});

  // Saved-work shortlist: fully usable from the front end and retained in the visitor's browser.
  const shortlistLaunch=document.querySelector('.shortlist-launch');
  const shortlistPanel=document.querySelector('.shortlist-panel');
  const shortlistScrim=document.querySelector('.shortlist-scrim');
  const shortlistItems=document.querySelector('.shortlist-items');
  const shortlistEmail=document.querySelector('.shortlist-email');
  const shortlistCopy=document.querySelector('.shortlist-copy');
  const shortlistClear=document.querySelector('.shortlist-clear');
  let shortlist=[];
  try{shortlist=JSON.parse(localStorage.getItem('oim-shortlist')||'[]')}catch(_e){shortlist=[]}
  const allWorks=()=>Array.isArray(window.OIM_WORKS)?window.OIM_WORKS:[];
  const findWork=id=>allWorks().find(w=>w.id===id)||shortlist.find(w=>w.id===id)||{id,title:id};
  const persistShortlist=()=>{try{localStorage.setItem('oim-shortlist',JSON.stringify(shortlist))}catch(_e){}};
  const shortlistText=()=>shortlist.length?['Objects In Motion - saved works','',...shortlist.map((w,i)=>`${i+1}. ${w.title}${w.status?` - ${w.status}`:''}\n   ${location.origin}${location.pathname.replace(/[^/]*$/,'')}artwork.html?id=${w.id}`),'','I would like to discuss availability and/or an original commission inspired by this shortlist.'].join('\n'):'Objects In Motion - no works saved yet.';
  function syncSaveButtons(){document.querySelectorAll('[data-save-id]').forEach(btn=>{const saved=shortlist.some(w=>w.id===btn.dataset.saveId);btn.classList.toggle('saved',saved);btn.setAttribute('aria-pressed',String(saved));const label=btn.querySelector('[data-save-label]');if(label)label.textContent=saved?'Saved':'Save work';});}
  function renderShortlist(){
    if(shortlistLaunch){shortlistLaunch.querySelector('span').textContent=String(shortlist.length);shortlistLaunch.classList.toggle('has-items',shortlist.length>0);shortlistLaunch.classList.toggle('is-empty',shortlist.length===0)}
    if(shortlistItems){shortlistItems.innerHTML=shortlist.length?shortlist.map(w=>`<article><img src="${w.fallback||w.image||'assets/images/detail-track.jpg'}" alt=""><div><strong>${w.title}</strong><span>${w.status||'Selected work'}</span></div><button type="button" data-remove-shortlist="${w.id}" aria-label="Remove ${w.title}">×</button></article>`).join(''):'<p class="shortlist-empty">No works saved yet. Open the portfolio or an artwork page and choose <strong>Save work</strong>.</p>'}
    if(shortlistEmail){const text=shortlistText();shortlistEmail.href=`mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent('Objects In Motion - saved works')}&body=${encodeURIComponent(text)}`;shortlistEmail.classList.toggle('disabled',!shortlist.length)}
    syncSaveButtons();persistShortlist();
  }
  function toggleShortlist(id){const index=shortlist.findIndex(w=>w.id===id);if(index>=0)shortlist.splice(index,1);else{const w=findWork(id);shortlist.push({id:w.id,title:w.title,status:w.status,image:w.image,fallback:w.fallback})}renderShortlist()}
  function openShortlist(){shortlistPanel?.classList.add('open');shortlistPanel?.setAttribute('aria-hidden','false');shortlistLaunch?.setAttribute('aria-expanded','true');if(shortlistScrim)shortlistScrim.hidden=false}
  function closeShortlist(){shortlistPanel?.classList.remove('open');shortlistPanel?.setAttribute('aria-hidden','true');shortlistLaunch?.setAttribute('aria-expanded','false');if(shortlistScrim)shortlistScrim.hidden=true}
  document.addEventListener('click',e=>{const save=e.target.closest('[data-save-id]');if(save){e.preventDefault();e.stopPropagation();toggleShortlist(save.dataset.saveId);return}const remove=e.target.closest('[data-remove-shortlist]');if(remove){toggleShortlist(remove.dataset.removeShortlist)}});
  document.addEventListener('keydown',e=>{const save=e.target.closest?.('[data-save-id]');if(save&&(e.key==='Enter'||e.key===' ')){e.preventDefault();toggleShortlist(save.dataset.saveId)}});
  shortlistLaunch?.addEventListener('click',()=>shortlistPanel?.classList.contains('open')?closeShortlist():openShortlist());
  document.querySelector('.shortlist-close')?.addEventListener('click',closeShortlist);shortlistScrim?.addEventListener('click',closeShortlist);
  shortlistClear?.addEventListener('click',()=>{shortlist=[];renderShortlist()});
  shortlistCopy?.addEventListener('click',async()=>{if(!shortlist.length)return;await navigator.clipboard.writeText(shortlistText());shortlistCopy.textContent='Copied';setTimeout(()=>shortlistCopy.textContent='Copy list',1500)});
  renderShortlist();

  document.querySelectorAll('form[data-form-type]').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.reportValidity()) return;
    const brief=formToBrief(form);
    try{localStorage.setItem(`oim-${brief.type}-${Date.now()}`,brief.text)}catch(_e){}
    const note=form.querySelector('.form-note');
    if(note){note.textContent='Your information has been prepared. Choose email, download or copy in the next window.';note.classList.add('show')}
    showResult(brief);
  }));
})();
