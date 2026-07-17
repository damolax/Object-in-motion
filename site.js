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
      <a class="nav-contact" href="contact.html">Start a conversation <span>↗</span></a>
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
    <div class="footer-bottom"><span>© 2020–2026 Robert Kalinovich</span><span>Website redesign concept by Emily James</span><a href="#top">Back to top ↑</a></div>
  </footer>
  <div class="mobile-action"><a href="shop.html">Collect</a><a href="commissions.html#enquire">Commission</a></div>
  <button class="design-notes-launch" type="button" aria-controls="design-notes" aria-expanded="false"><span>i</span> Design notes</button>
  <aside class="design-notes-panel" id="design-notes" aria-hidden="true">
    <button class="design-notes-close" type="button" aria-label="Close design notes">×</button>
    <p class="kicker">Prepared for Objects In Motion</p>
    <h2>I designed this interactive direction to strengthen first impression and create clearer paths to a sale or commission.</h2>
    <p>I used Robert’s verified public content and existing sculpture assets. The navigation, portfolio search and filters, artwork pages, multi-step briefs, file previews, downloadable summaries and email-ready enquiry flows can all be tested from the front end.</p>
    <p>Small <strong class="inline-i">i</strong> markers identify the few areas that require Robert’s confirmation or a live Wix Studio connection, such as current inventory, secure uploads, automations and payment rules.</p>
    <div class="design-signoff"><strong>Emily James</strong><span>Website strategy, design and conversion direction</span></div>
  </aside>
  <div class="notes-scrim" hidden></div>
  <div class="note-popover" role="tooltip" hidden></div>
  <div class="form-result" role="dialog" aria-modal="true" aria-labelledby="form-result-title" hidden>
    <div class="form-result-card">
      <button class="form-result-close" type="button" aria-label="Close">×</button>
      <p class="kicker">Your enquiry is ready</p>
      <h2 id="form-result-title">Choose how to continue.</h2>
      <p class="form-result-intro">The information below has been formatted into a clear brief. You can open it in your email application, download a copy, or copy the text.</p>
      <pre class="form-result-summary"></pre>
      <div class="form-result-actions">
        <a class="button gold form-email" href="#">Open email ↗</a>
        <button class="button dark form-download" type="button">Download brief ↓</button>
        <button class="button dark form-copy" type="button">Copy text</button>
      </div>
      <p class="form-result-footnote">Photographs selected in this preview cannot be attached automatically by the browser. They can be added manually to the email. In Wix Studio, uploads will be stored with the submission.</p>
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
    const titleMap={commission:'Objects In Motion — Commission Project Brief',visualize:'Objects In Motion — Placement Brief',contact:'Objects In Motion — Website Enquiry',collector:'Objects In Motion — Collector Preview Request'};
    const lines=[titleMap[type]||'Objects In Motion Enquiry','',`Prepared: ${new Date().toLocaleString()}`,''];
    const data=new FormData(form);
    for(const [key,value] of data.entries()){
      if(value instanceof File){continue;}
      if(String(value).trim()) lines.push(`${key}: ${String(value).trim()}`);
    }
    const files=[...form.querySelectorAll('input[type="file"]')].flatMap(i=>[...i.files].map(f=>f.name));
    if(files.length){lines.push('',`Selected photographs: ${files.join(', ')}`,'Note: please attach these files manually when the email opens.');}
    lines.push('','Sent from the Objects In Motion website concept.');
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
