(() => {
  const base = 'https://www.objectsinmotion.ca';
  const page = document.body.dataset.page || 'home';
  const titles = {
    home:'Rolling Ball Sculptures & Kinetic Art | Objects In Motion',
    portfolio:'Rolling Ball Sculpture Portfolio | Objects In Motion',
    commissions:'Custom Rolling Ball Sculpture Commissions | Objects In Motion',
    collect:'Rolling Ball Sculptures for Sale & Collector List | Objects In Motion',
    spaces:'Custom Kinetic Art for Offices, Hotels & Public Spaces | Objects In Motion',
    about:'Robert Kalinovich | Canadian Kinetic Artist | Objects In Motion',
    faq:'Rolling Ball Sculpture FAQ | Objects In Motion',
    contact:'Contact Robert Kalinovich | Objects In Motion',
    visualize:'See a Kinetic Sculpture in Your Space | Objects In Motion',
    artwork:'Rolling Ball Sculpture Artwork | Objects In Motion'
  };
  const routeMap={home:'',portfolio:'portfolio',commissions:'commissions',collect:'collect',spaces:'for-spaces',about:'about',faq:'faq',contact:'contact',visualize:'visualize',artwork:'artwork'};
  const canonical = `${base}/${routeMap[page]||''}`;
  const setMeta=(property,content,attr='property')=>{let m=document.head.querySelector(`meta[${attr}="${property}"]`);if(!m){m=document.createElement('meta');m.setAttribute(attr,property);document.head.appendChild(m)}m.content=content};
  setMeta('og:type','website'); setMeta('og:site_name','Objects In Motion'); setMeta('og:title',titles[page]||document.title); setMeta('og:description',document.querySelector('meta[name="description"]')?.content||'One-of-a-kind rolling ball sculpture and kinetic art.'); setMeta('og:image',`${base}/assets/images/observer-hero.jpg`); setMeta('og:url',canonical);
  setMeta('twitter:card','summary_large_image','name');
  const schemas=[
    {'@context':'https://schema.org','@type':'WebSite','name':'Objects In Motion','url':base},
    {'@context':'https://schema.org','@type':'Organization','name':'Objects In Motion','url':base,'email':'objectsinmotion.ca@gmail.com','telephone':'+1-403-703-4425','founder':{'@type':'Person','name':'Robert Kalinovich'},'address':{'@type':'PostalAddress','addressLocality':'Cochrane','addressRegion':'Alberta','addressCountry':'CA'},'description':'One-of-a-kind rolling ball sculpture and kinetic art handcrafted by Robert Kalinovich.'}
  ];
  const crumbNames={home:'Home',portfolio:'Portfolio',commissions:'Commission',collect:'Collect',spaces:'For Spaces',visualize:'See It in Your Space',about:'About',faq:'FAQ',contact:'Contact',artwork:'Artwork'};
  if(page!=='home') schemas.push({'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':base},{'@type':'ListItem','position':2,'name':crumbNames[page]||'Page','item':canonical}]});
  if(page==='about') schemas.push({'@context':'https://schema.org','@type':'Person','name':'Robert Kalinovich','jobTitle':'Kinetic Artist','worksFor':{'@type':'Organization','name':'Objects In Motion'},'homeLocation':{'@type':'Place','name':'Cochrane, Alberta, Canada'},'url':`${base}/about`});
  if(page==='faq'){
    const qa=[...document.querySelectorAll('.faq-item')].map(d=>({q:d.querySelector('h3')?.textContent.trim(),a:d.querySelector('.faq-answer')?.textContent.trim()})).filter(x=>x.q&&x.a);
    schemas.push({'@context':'https://schema.org','@type':'FAQPage','mainEntity':qa.map(x=>({'@type':'Question','name':x.q,'acceptedAnswer':{'@type':'Answer','text':x.a}}))});
  }
  if(page==='artwork' && Array.isArray(window.OIM_WORKS)){
    const id=new URLSearchParams(location.search).get('id'); const w=window.OIM_WORKS.find(x=>x.id===id);
    if(w){document.title=`${w.title} Rolling Ball Sculpture | Objects In Motion`;schemas.push({'@context':'https://schema.org','@type':'VisualArtwork','name':w.title,'artform':'Kinetic sculpture','artMedium':w.materials||'Stainless steel and glass marbles','creator':{'@type':'Person','name':'Robert Kalinovich'},'image':w.image,'description':w.description||w.story,'dateCreated':w.year?String(w.year):undefined,'url':canonical});}
  }
  schemas.forEach(data=>{const s=document.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify(data);document.head.appendChild(s)});
})();
