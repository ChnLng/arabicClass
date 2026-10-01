(() => {
  const expected = '158a323a7ba44870f23d96f1516dd70aa48e9a72db4ebb026b0a89e212a208ab';
  const $ = id => document.getElementById(id);
  const labels = {
    zh: {title:'欢迎回来<br><em>继续学阿拉伯语。</em>',subtitle:'输入访问密码，打开你的词汇课堂。',label:'访问密码',open:'打开课堂',error:'密码不正确，请再试一次。',other:'Français'},
    fr: {title:'Bienvenue<br><em>en cours d’arabe.</em>',subtitle:'Saisissez le code d’accès pour ouvrir votre lexique.',label:'Code d’accès',open:'Ouvrir la classe',error:'Code incorrect. Réessayez.',other:'中文'}
  };
  let lang = localStorage.getItem('huruf-lang') === 'fr' ? 'fr' : 'zh';
  function localize(){const t=labels[lang];$('gate-title').innerHTML=t.title;$('gate-subtitle').textContent=t.subtitle;$('gate-label').textContent=t.label;$('gate-open').textContent=t.open;$('gate-lang').textContent=t.other;document.documentElement.lang=lang}
  function loadScript(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.body.append(s)})}
  async function unlock(){
    $('access-gate').classList.add('hidden');$('learning-app').classList.remove('hidden');
    await loadScript('vocab.js');await loadScript('app.js');
  }
  $('gate-form').addEventListener('submit',async e=>{
    e.preventDefault();const bytes=new TextEncoder().encode($('gate-code').value);
    const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(n=>n.toString(16).padStart(2,'0')).join('');
    if(hash!==expected){$('gate-error').textContent=labels[lang].error;$('gate-code').select();return}
    sessionStorage.setItem('huruf-access','yes');unlock();
  });
  $('gate-lang').onclick=()=>{lang=lang==='zh'?'fr':'zh';localStorage.setItem('huruf-lang',lang);localize()};
  localize();if(sessionStorage.getItem('huruf-access')==='yes')unlock();
})();

