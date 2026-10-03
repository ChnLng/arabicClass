// Beginner lessons. Examples are simple teaching examples; they are not presented as quotations from the textbook.
const ARABIC_LETTERS = [
  ['ا','أَلِف','alif','/aː/','بَاب','门','porte','延长 a；词首带 ء 时才发喉塞音。','Allonge a ; avec ء, marque un coup de glotte.'],
  ['ب','بَاء','bāʾ','/b/','بَيْت','房子','maison','像 b。','Comme b.'],
  ['ت','تَاء','tāʾ','/t/','تَمْر','椰枣','dattes','像清晰的 t。','Comme t.'],
  ['ث','ثَاء','thāʾ','/θ/','ثَلَاثَة','三','trois','舌尖轻触上齿，像英语 think 的 th。','Comme th dans think (anglais).'],
  ['ج','جِيم','jīm','/dʒ/','جَمِيل','漂亮','beau','标准阿拉伯语近似英语 jam 的 j；方言读法不同。','Comme j dans jam (anglais) en arabe standard ; les dialectes varient.'],
  ['ح','حَاء','ḥāʾ','/ħ/','حَلِيب','牛奶','lait','从咽喉挤出的清擦音，不是普通 h。','Friction profonde dans la gorge, différente de h.'],
  ['خ','خَاء','khāʾ','/x/','خُبْز','面包','pain','喉后部擦音，近似德语 Bach 的 ch。','Comme le ch de Bach (allemand).'],
  ['د','دَال','dāl','/d/','دَار','家','maison','像 d。','Comme d.'],
  ['ذ','ذَال','dhāl','/ð/','ذَهَب','黄金','or','像英语 this 的 th。','Comme th dans this (anglais).'],
  ['ر','رَاء','rāʾ','/r/','رَأْس','头','tête','舌尖轻弹或颤动，不是法语小舌 r。','R roulé ou battu avec la pointe de la langue.'],
  ['ز','زَاي','zāy','/z/','زَيْت','油','huile','像法语 z。','Comme z en français.'],
  ['س','سِين','sīn','/s/','سَمَك','鱼','poisson','像 s。','Comme s.'],
  ['ش','شِين','shīn','/ʃ/','شَمْس','太阳','soleil','像法语 ch。','Comme ch dans chat.'],
  ['ص','صَاد','ṣād','/sˤ/','صَبَاح','早晨','matin','厚重的 s；舌后部收紧。','S emphatique : arrière de la langue rétracté.'],
  ['ض','ضَاد','ḍād','/dˤ/','ضَابِط','军官','officier','厚重的 d，与 د 对比听。','D emphatique ; comparez avec د.'],
  ['ط','طَاء','ṭāʾ','/tˤ/','طَالِب','学生','étudiant','厚重的 t，与 ت 对比听。','T emphatique ; comparez avec ت.'],
  ['ظ','ظَاء','ẓāʾ','/ðˤ/','ظُهْر','中午','midi','厚重的 ذ；部分方言读法不同。','ذ emphatique ; varie selon les dialectes.'],
  ['ع','عَيْن','ʿayn','/ʕ/','عَيْن','眼睛','œil','有声咽音；汉语和法语没有对应音。','Consonne pharyngale voisée, sans équivalent direct en français.'],
  ['غ','غَيْن','ghayn','/ɣ/','غُرْفَة','房间','chambre','类似法语 r，但发音位置与力度可不同。','Proche du r français, mais pas toujours identique.'],
  ['ف','فَاء','fāʾ','/f/','فَم','嘴','bouche','像 f。','Comme f.'],
  ['ق','قَاف','qāf','/q/','قَمَر','月亮','lune','舌根更靠后，区别于 ك。','Occlusive plus reculée que ك.'],
  ['ك','كَاف','kāf','/k/','كِتَاب','书','livre','像 k。','Comme k.'],
  ['ل','لَام','lām','/l/','لَحْم','肉','viande','通常像 l；在 الله 等词中有特殊变化。','En général l ; réalisation particulière dans الله.'],
  ['م','مِيم','mīm','/m/','مَاء','水','eau','像 m。','Comme m.'],
  ['ن','نُون','nūn','/n/','نَهْر','河','fleuve','像 n。','Comme n.'],
  ['ه','هَاء','hāʾ','/h/','هُنَا','这里','ici','轻轻呼气的 h，区别于 ح。','H expiré léger ; comparez avec ح.'],
  ['و','وَاو','wāw','/w/, /uː/','وَلَد','男孩','garçon','词首可读 w；在 نُور 中可延长 u。','W consonne ; voyelle longue ou dans نُور.'],
  ['ي','يَاء','yāʾ','/j/, /iː/','يَوْم','日子','jour','词首像 y；在 كَبِير 中可延长 i。','Y consonne ; voyelle longue i dans كَبِير.']
];
const ARABIC_SIGNS = [
  ['ءَ ؤُ ئِ','ء','hamza','喉塞音：أَكَلَ；可写在 ا、و、ي 上或独立。','Coup de glotte : أَكَلَ ; sur ا، و، ي ou seul.','أَكَلَ'],
  ['ـة','ة','tāʾ marbūṭa','常标记阴性：طَالِبَة。停顿时常读 a；连读、格尾时可读 t。','Souvent féminin : طَالِبَة. À la pause, souvent a ; en liaison, t peut apparaître.','طَالِبَة'],
  ['ى','ى','alif maqṣūra','词尾读长 ā：إِلَى。字形像无点的 ي，读音不同。','En fin de mot, voyelle longue ā : إِلَى ; ressemble à ي sans points.','إِلَى'],
  ['َ ِ ُ','حَرَكَات','voyelles brèves','َ = a，ِ = i，ُ = u；例：بَ، بِ، بُ。','َ = a, ِ = i, ُ = u ; exemple : بَ، بِ، بُ.','بَ بِ بُ'],
  ['ْ','سُكُون','sukūn','表示这个辅音后面没有短元音：بَيْت。','Aucune voyelle brève après la consonne : بَيْت.','بَيْت'],
  ['ّ','شَدَّة','shadda','辅音读两拍／双写：مُدَرِّس。','Consonne doublée : مُدَرِّس.','مُدَرِّس'],
  ['ً ٍ ٌ','تَنْوِين','tanwīn','不定名词格尾常见 -an、-in、-un：كِتَابٌ。口语和停顿常省略。','Terminaisons indéfinies -an, -in, -un : كِتَابٌ ; souvent omises à la pause et à l’oral.','كِتَابٌ'],
  ['لا','لَا','lām + alif','ل 与 ا 相连形成 لا；这是连写形式，不是第 29 个字母。','Ligature de ل et ا ; ce n’est pas une 29e lettre.','لَا']
];
const ARABIC_GRAMMAR = [
  {zh:'词、字母和短元音',fr:'Mots, lettres et voyelles brèves',ruleZh:'阿拉伯语从右向左读。辅音字母会随位置变形；短元音写在字母上方或下方，普通文本常省略。先把有元音的词读熟，再学无元音写法。',ruleFr:'L’arabe se lit de droite à gauche. Les lettres se lient et changent de forme. Les voyelles brèves se placent autour des lettres et sont souvent omises dans les textes courants.',examples:[['كَتَبَ','他写了','il a écrit'],['كِتَاب','书','livre']],q:['كَتَبَ','كَتَبَ 的三个短元音是什么？','Quelles sont les voyelles brèves de كَتَبَ ?', ['a-a-a','i-a-a','a-i-u'],0]},
  {zh:'阴性与阳性',fr:'Féminin et masculin',ruleZh:'名词和形容词有语法性别。很多阴性形式用 ـة：طَالِب → طَالِبَة；但不是所有阴性词都有 ـة，也不能把任何词直接加 ـة。形容词通常与所修饰名词的性别一致。',ruleFr:'Noms et adjectifs ont un genre. Le féminin se marque souvent par ـة : طَالِب → طَالِبَة, mais il existe des exceptions. L’adjectif s’accorde généralement avec le nom.',examples:[['طَالِب / طَالِبَة','男学生／女学生','étudiant / étudiante'],['جَمِيل / جَمِيلَة','漂亮（阳／阴）','beau / belle']],q:['طَالِبَة','طَالِبَة 通常是什么性别？','Quel est généralement le genre de طَالِبَة ?', ['阴性','阳性'],0]},
  {zh:'定冠词与太阳字母',fr:'Article défini et lettres solaires',ruleZh:'الـ 相当于法语 le/la/les。遇到“太阳字母”（如 ش、س、ر）时，ل 写着却通常不读，下一辅音加重：الشَّمْس 读 ash-shams。遇到月亮字母，ل 读出来：الْقَمَر。',ruleFr:'الـ correspond à le/la/les. Devant une lettre solaire (ش، س، ر…), le ل s’écrit mais ne se prononce pas ; la consonne suivante est doublée : الشَّمْس. Devant ق, on prononce ل : الْقَمَر.',examples:[['شَمْس / الشَّمْس','太阳／这太阳','soleil / le soleil'],['قَمَر / الْقَمَر','月亮／这月亮','lune / la lune']],q:['الشَّمْس','الشَّمْس 中的 ل 怎样读？','Comment se prononce ل dans الشَّمْس ?', ['不单独读，ش 加重','像 الْقَمَر 一样读 l'],0]},
  {zh:'单数、双数与复数',fr:'Singulier, duel et pluriel',ruleZh:'阿拉伯语区分一个、两个和多个。复数可加词尾，也可改词内部元音和结构（破碎复数）。不要假设所有词都能按同一公式变化；把常用单复数配对记忆。',ruleFr:'L’arabe distingue singulier, duel et pluriel. Certains pluriels prennent un suffixe, d’autres changent la structure interne. Apprenez les formes fréquentes par paires.',examples:[['كِتَاب / كُتُب','书／书（复数）','livre / livres'],['طَالِب / طُلَّاب','学生／学生们','étudiant / étudiants']],q:['كُتُب','كُتُب 是哪个词的复数？','De quel mot كُتُب est-il le pluriel ?', ['كِتَاب','قَمَر','بَيْت'],0]},
  {zh:'代词与“这个”',fr:'Pronoms et démonstratifs',ruleZh:'“你”区分男性 أَنْتَ 和女性 أَنْتِ。“这个”也随所指名词的性别变化：هَذَا（阳性），هَذِهِ（阴性）。学习句子时一起记名词的性别。',ruleFr:'« Tu » distingue أَنْتَ (masculin) et أَنْتِ (féminin). « Ce/cette » prend هَذَا ou هَذِهِ selon le genre du nom.',examples:[['هَذَا كِتَاب','这是一本书','C’est un livre'],['هَذِهِ مَدْرَسَة','这是一所学校','C’est une école']],q:['هَذِهِ','“这”（阴性）是哪一个？','Quelle forme signifie « cette » ?', ['هَذِهِ','هَذَا'],0]},
  {zh:'形容词跟随名词',fr:'Accord de l’adjectif',ruleZh:'形容词一般放在名词后，性和数通常与名词一致。先练单数：طَالِب جَمِيل、طَالِبَة جَمِيلَة。加了定冠词的名词，修饰它的形容词通常也加 ال。',ruleFr:'L’adjectif suit généralement le nom et s’accorde en genre et en nombre. Pour un groupe défini, l’adjectif prend en général aussi ال.',examples:[['طَالِب جَمِيل','英俊的男学生','un bel étudiant'],['طَالِبَة جَمِيلَة','漂亮的女学生','une belle étudiante']],q:['جَمِيلَة','طَالِبَة 后应选哪个形容词？','Quel adjectif suit طَالِبَة ?', ['جَمِيلَة','جَمِيل'],0]},
  {zh:'动词：人称与时间',fr:'Verbes : personne et temps',ruleZh:'阿拉伯语动词按人称、性别、数和时体变化。入门先对照词首和词尾：كَتَبَ（他写了），كَتَبْتُ（我写了），أَكْتُبُ（我写／正在写）。这只是一个常见范例。',ruleFr:'Le verbe varie selon la personne, le genre, le nombre et l’aspect. Comparez كَتَبَ (il a écrit), كَتَبْتُ (j’ai écrit) et أَكْتُبُ (j’écris).',examples:[['كَتَبَ / كَتَبْتُ','他写了／我写了','il a écrit / j’ai écrit'],['أَكْتُبُ','我写','j’écris']],q:['كَتَبْتُ','哪个形式表示“我写了”？','Quelle forme veut dire « j’ai écrit » ?', ['كَتَبْتُ','كَتَبَ','أَكْتُبُ'],0]},
  {zh:'介词与常用表达',fr:'Prépositions et expressions',ruleZh:'介词会与代词后缀结合：عِنْدَ（在……那里）＋ ـِي（我）→ عِنْدِي，可表达“我有”。介词后的名词在完整标准语句中常用属格；入门先学整组表达。',ruleFr:'Les prépositions se combinent avec des suffixes pronominaux : عِنْدَ + ـِي → عِنْدِي, souvent « j’ai ». Dans une phrase vocalisée, le nom après la préposition est généralement au génitif.',examples:[['عِنْدِي كِتَاب','我有一本书','J’ai un livre'],['فِي الْبَيْت','在家里','dans la maison']],q:['عِنْدِي','عِنْدِي 在这里是什么意思？','Que signifie عِنْدِي ici ?', ['我有','他有'],0]},
  {zh:'问句和否定',fr:'Questions et négation',ruleZh:'هَلْ 常引出“是／否”问句；مَا 询问“什么”，أَيْنَ 询问“哪里”。لَا 常用于否定非过去陈述。否定词的用法会随句型和时间变化。',ruleFr:'هَلْ introduit souvent une question oui/non ; مَا demande « quoi », أَيْنَ « où ». لَا sert fréquemment à nier au présent ; la négation varie selon la phrase et le temps.',examples:[['هَلْ هَذَا كِتَاب؟','这是书吗？','Est-ce un livre ?'],['لَا أَكْتُبُ','我不写','Je n’écris pas']],q:['هَلْ','哪个词常引出是非问句？','Quel mot introduit souvent une question oui/non ?', ['هَلْ','أَيْنَ','لَا'],0]}
];

function lessonSpeak(ar){
  if(!('speechSynthesis' in window))return alert(document.documentElement.lang==='fr'?'Voix arabe indisponible sur cet appareil.':'此设备没有可用的阿拉伯语语音。');
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(ar);u.lang='ar-SA';u.rate=.78;
  const voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('ar'));if(voice)u.voice=voice;
  speechSynthesis.speak(u);
}
function renderAlphabet(){
  const fr=document.documentElement.lang==='fr',get=id=>document.getElementById(id);
  get('nav-alphabet').textContent=fr?'Alphabet':'字母';
  get('alphabet-title').textContent=fr?'L’alphabet arabe':'阿拉伯字母入门';
  get('alphabet-desc').textContent=fr?'Écoutez les 28 lettres une par une. Touchez un mot pour l’entendre, puis comparez les sons proches.':'先逐个听 28 个字母的名称，再听例词。相似音要成对比较，建立“字形—声音—词义”的联系。';
  get('alphabet-intro').innerHTML=fr?'<strong>Avant de commencer</strong><p>L’arabe se lit de droite à gauche. Les lettres changent de forme quand elles se lient. ا، د، ذ، ر، ز، و ne se lient pas à la lettre suivante. Une voix de synthèse peut mal lire un caractère isolé : écoutez aussi le mot et le cours audio lié plus bas.</p>':'<strong>先记住三件事</strong><p>阿拉伯语从右向左写。字母连写时会变形。ا、د、ذ、ر、ز、و 不与后面的字母相连。设备语音可能把孤立字母读错，所以请同时听例词，并用下方免费课程核对。</p>';
  get('alphabet-grid').innerHTML=ARABIC_LETTERS.map((x,i)=>`<article class="letter-card"><div class="letter-top"><span class="letter-index">${String(i+1).padStart(2,'0')} / 28</span><span class="letter-glyph" lang="ar" dir="rtl">${x[0]}</span></div><strong class="letter-name">${x[2]} <small>${x[3]}</small></strong><div class="letter-ar-name" lang="ar" dir="rtl">${x[1]}</div><p>${fr?x[8]:x[7]}</p><div class="letter-example"><span lang="ar" dir="rtl">${x[4]}</span><span>${fr?x[6]:x[5]}</span></div><div class="letter-actions"><button type="button" data-say="name" data-letter="${i}">${fr?'Écouter la lettre':'听字母名'}</button><button type="button" data-say="example" data-letter="${i}">${fr?'Écouter le mot':'听例词'}</button></div></article>`).join('');
  get('signs-title').textContent=fr?'Signes et formes à connaître':'还要认识这些符号与特殊字形';
  get('signs-grid').innerHTML=ARABIC_SIGNS.map((x,i)=>`<article class="sign-card"><div class="sign-symbol" lang="ar" dir="rtl">${x[0]}</div><strong>${x[2]}</strong><p>${fr?x[4]:x[3]}</p><button type="button" data-sign="${i}">${fr?'Écouter l’exemple':'听例子'} ◖))</button></article>`).join('');
  get('alphabet-source').innerHTML=(fr?'Pour vérifier les sons : ':'发音核对：')+'<a href="https://madinaharabic.com/free-content/reading/lesson-1/part-1" target="_blank" rel="noopener">Madinah Arabic</a> · <a href="https://learning.aljazeera.net/en/generallanguage/%D8%B3%D9%84%D8%B3%D9%84%D8%A9-%D8%A7%D9%84%D8%AD%D8%B1%D9%88%D9%81-%D9%88%D8%A7%D9%84%D8%A3%D8%B5%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9" target="_blank" rel="noopener">Al Jazeera Learning Arabic</a>';
}
function renderGrammar(){
  const fr=document.documentElement.lang==='fr',get=id=>document.getElementById(id);
  get('nav-grammar').textContent=fr?'Grammaire':'语法';
  get('practice-range-link').textContent=fr?'Choisir une plage ↗':'设置页码范围 ↗';
  get('grammar-title').textContent=fr?'La grammaire, pas à pas':'语法从零开始';
  get('grammar-desc').textContent=fr?'Neuf mini leçons avec exemples et une question chacune. Commencez par le genre et les changements de mots, puis passez aux phrases.':'9 个短课，每课有对比例子和一道自测题。从阴阳性、词形变化到简单句，按顺序学。';
  get('grammar-lessons').innerHTML=ARABIC_GRAMMAR.map((l,i)=>`<details class="grammar-lesson" ${i===0?'open':''}><summary><span class="lesson-number">${String(i+1).padStart(2,'0')}</span><span>${fr?l.fr:l.zh}</span><span class="lesson-chevron">⌄</span></summary><div class="lesson-body"><p>${fr?l.ruleFr:l.ruleZh}</p><div class="lesson-examples">${l.examples.map(e=>`<div><strong lang="ar" dir="rtl">${e[0]}</strong><span>${fr?e[2]:e[1]}</span><button type="button" data-grammar-say="${i}" data-text="${e[0]}">◖))</button></div>`).join('')}</div><div class="lesson-quiz"><strong>${fr?l.q[2]:l.q[1]}</strong><div>${l.q[3].map((a,j)=>`<button type="button" data-quiz="${i}" data-answer="${j}">${a}</button>`).join('')}</div><small id="quiz-feedback-${i}" aria-live="polite"></small></div></div></details>`).join('');
  get('grammar-source').innerHTML=(fr?'Cours gratuit pour approfondir : ':'继续深入：')+'<a href="https://madinaharabic.com/free-content/grammar" target="_blank" rel="noopener">Madinah Arabic · Grammar Course</a>';
}
document.getElementById('alphabet-grid').addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(!b)return;const x=ARABIC_LETTERS[Number(b.dataset.letter)];lessonSpeak(b.dataset.say==='name'?x[1]:x[4])});
document.getElementById('signs-grid').addEventListener('click',e=>{const b=e.target.closest('[data-sign]');if(b)lessonSpeak(ARABIC_SIGNS[Number(b.dataset.sign)][5])});
document.getElementById('grammar-lessons').addEventListener('click',e=>{
  const say=e.target.closest('[data-grammar-say]');if(say){lessonSpeak(say.dataset.text.replace(' / ','، '));return}
  const b=e.target.closest('[data-quiz]');if(!b)return;
  const i=Number(b.dataset.quiz),good=Number(b.dataset.answer)===ARABIC_GRAMMAR[i].q[4],fr=document.documentElement.lang==='fr';
  const feedback=document.getElementById('quiz-feedback-'+i);feedback.textContent=good?(fr?'Correct !':'答对了！'):(fr?'Réessayez.':'再想想。');feedback.className=good?'quiz-good':'quiz-wrong';
  if(good){b.parentElement.querySelectorAll('button').forEach(x=>x.disabled=true);b.classList.add('correct')}
});

