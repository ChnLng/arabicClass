// Original learning annotations transcribed from the user's 15 reference photographs.
// Format: Arabic | French | Chinese | theme | source page (printed page number).
const RAW = `
أَنَا|je, moi|我|people|76
أَنْتَ|tu (masculin)|你（男）|people|76
أَنْتِ|tu (féminin)|你（女）|people|76
هُوَ|il|他|people|81
هِيَ|elle|她|people|81
نَحْنُ|nous|我们|people|82
أَنْتُمْ|vous (pluriel)|你们|people|76
هُمْ|ils|他们|people|81
أَب|père|父亲|family|76
أُمّ|mère|母亲|family|76
أُسْرَة|famille|家庭|family|76
وَلَد|enfant, garçon|男孩，孩子|family|75
بِنْت|fille|女孩|family|77
رَجُل|homme|男人|people|200
اِمْرَأَة|femme|女人|people|82
صَدِيق|ami|朋友（男）|people|80
صَدِيقَة|amie|朋友（女）|people|80
صَاحِب|compagnon, ami|伙伴|people|199
زَمِيل|collègue|同事|people|79
أُسْتَاذ|professeur|老师|school|76
أُسْتَاذَة|professeure|女老师|school|202
طَالِب|étudiant|学生（男）|school|80
طَالِبَة|étudiante|学生（女）|school|199
طُلَّاب|étudiants|学生们|school|80
طَبِيب|médecin|医生|people|80
طَبَّاخ|cuisinier|厨师|people|80
ضَابِط|officier|军官|people|80
عَسْكَرِيّ|militaire|军人|people|80
شُرْطِيّ|policier|警察|people|79
بَائِع|vendeur|售货员|people|77
خَبَّاز|boulanger|面包师|people|78
كَاتِب|écrivain|作家|people|81
مُدِير|directeur|主任，经理|people|82
وَزِير|ministre|部长|people|82
رَئِيس|président|主席，总统|people|78
طَيَّار|pilote|飞行员|people|78
مُوَظَّف|employé|雇员|people|200
سَيِّد|monsieur|先生|people|79
سَيِّئ|mauvais|坏的|qualities|79
أَهْلًا وَسَهْلًا|bienvenue !|欢迎！|phrases|76
مَرْحَبًا|bonjour !|你好！|phrases|82
السَّلَامُ عَلَيْكُمْ|bonjour, paix sur vous|愿你平安（问候）|phrases|79
وَعَلَيْكُمُ السَّلَام|réponse au salut|也愿你平安|phrases|79
صَبَاحُ الْخَيْر|bonjour (matin)|早上好|phrases|80
صَبَاحُ النُّور|réponse du matin|早上好（应答）|phrases|80
مَسَاءُ الْخَيْر|bonsoir|晚上好|phrases|82
مَسَاءُ النُّور|réponse du soir|晚上好（应答）|phrases|82
مَعَ السَّلَامَة|au revoir|再见|phrases|82
شُكْرًا|merci|谢谢|phrases|79
عَفْوًا|de rien, pardon|不客气；抱歉|phrases|80
نَعَم|oui|是|phrases|82
لَا|non|不|phrases|81
آسِف|désolé|对不起|phrases|199
مِنْ فَضْلِكَ|s'il te plaît (masc.)|请（对男性）|phrases|202
مَاذَا|quoi ?|什么？|questions|82
مَتَى|quand ?|什么时候？|questions|82
أَيْنَ|où ?|在哪里？|questions|76
كَيْفَ|comment ?|怎样？|questions|81
لِمَاذَا|pourquoi ?|为什么？|questions|81
كَمْ|combien ?|多少？|questions|199
مَنْ|qui ?|谁？|questions|82
هَلْ|est-ce que ?|是否？|questions|81
مَا|quoi ? / ne…pas|什么？；不|questions|81
أَيّ|quel ?|哪一个？|questions|199
أَيُّهَا|quel ?|哪一位？|questions|82
هَذَا|ceci (masculin)|这个（阳性）|grammar|82
هَذِهِ|cette (féminin)|这个（阴性）|grammar|82
ذَلِكَ|cela (masculin)|那个（阳性）|grammar|199
هُنَا|ici|这里|places|200
هُنَاكَ|là-bas|那里|places|200
الآنَ|maintenant|现在|time|76
الْيَوْم|aujourd'hui|今天|time|75
أَمْس|hier|昨天|time|76
غَدًا|demain|明天|time|199
صَبَاح|matin|早晨|time|200
مَسَاء|soir|晚上|time|82
لَيْل|nuit|夜晚|time|81
نَهَار|journée|白天|time|204
يَوْم|jour|天|time|75
أُسْبُوع|semaine|星期|time|76
شَهْر|mois|月|time|79
سَنَة|année|年|time|199
السَّبْت|samedi|星期六|time|79
الْجُمُعَة|vendredi|星期五|time|204
الْأَرْبِعَاء|mercredi|星期三|time|201
الظُّهْر|midi|中午|time|80
بَعْدَ الظُّهْر|après-midi|下午|time|199
بَعْدَ|après|之后|grammar|77
قَبْلَ|avant|之前|grammar|199
بِدَايَة|début|开始|time|82
نِهَايَة|fin|结束|time|82
وَاحِد|un|一|numbers|82
وَاحِدَة|une|一（阴性）|numbers|204
اِثْنَان|deux|二|numbers|76
ثَلَاثَة|trois|三|numbers|204
أَرْبَعَة|quatre|四|numbers|76
خَمْسَة|cinq|五|numbers|78
سِتَّة|six|六|numbers|79
سَبْعَة|sept|七|numbers|79
تِسْعَة|neuf|九|numbers|77
عَشَرَة|dix|十|numbers|80
صِفْر|zéro|零|numbers|80
الأَوَّل|premier|第一|numbers|201
الثَّانِي|deuxième|第二|numbers|199
الثَّالِث|troisième|第三|numbers|204
كَثِير|beaucoup|很多|qualities|81
قَلِيل|peu|少|qualities|81
قَلِيلًا|un peu|一点点|qualities|81
كَبِير|grand|大的|qualities|81
صَغِير|petit|小的|qualities|80
طَوِيل|long, grand|长的，高的|qualities|80
قَصِير|court|短的|qualities|81
جَدِيد|nouveau|新的|qualities|77
قَدِيم|ancien|旧的|qualities|204
جَمِيل|beau|美丽的|qualities|204
جَيِّد|bon|好的|qualities|80
سَيِّئ|mauvais|坏的|qualities|79
صَعْب|difficile|难的|qualities|80
سَهْل|facile|容易的|qualities|200
سَرِيع|rapide|快的|qualities|79
بَطِيء|lent|慢的|qualities|199
بَارِد|froid|冷的|qualities|76
سَاخِن|chaud|热的|qualities|199
سَعِيد|heureux|开心的|qualities|79
حَزِين|triste|难过的|qualities|204
غَنِيّ|riche|富有的|qualities|204
فَقِير|pauvre|贫穷的|qualities|204
قَوِيّ|fort|强壮的|qualities|204
ضَعِيف|faible|弱的|qualities|204
مُمْكِن|possible|可能的|qualities|82
مُسْتَحِيل|impossible|不可能的|qualities|204
طَبِيعِيّ|normal|正常的|qualities|204
غَرِيب|étrange|奇怪的|qualities|204
بَسِيط|simple|简单的|qualities|204
مُعَقَّد|compliqué|复杂的|qualities|204
لَطِيف|gentil|友善的|qualities|81
شَرِير|méchant|凶恶的|qualities|204
ذَكِيّ|intelligent|聪明的|qualities|204
غَبِيّ|stupide|愚笨的|qualities|204
وَاسِع|large|宽的|qualities|204
ضَيِّق|étroit|窄的|qualities|204
بَاكِر|tôt|早的|qualities|204
مُتَأَخِّر|en retard|迟的|qualities|82
مَرِيض|malade|生病的|qualities|82
تَعْبَان|fatigué|疲倦的|qualities|77
مَشْغُول|occupé|忙的|qualities|77
مَجَّانًا|gratuitement|免费地|grammar|77
بَيْت|maison|房子|home|77
بُيُوت|maisons|房子（复数）|home|77
غُرْفَة|chambre, pièce|房间|home|199
بَاب|porte|门|home|76
نَافِذَة|fenêtre|窗户|home|200
طَاوِلَة|table|桌子|home|80
كُرْسِيّ|chaise|椅子|home|199
سَرِير|lit|床|home|199
خِزَانَة|armoire|柜子|home|199
مَطْبَخ|cuisine|厨房|home|199
حَمَّام|salle de bains|浴室|home|78
مِكْتَب|bureau|办公室，书桌|home|199
تِلِفُون|téléphone|电话|home|202
حَقِيبَة|sac|包|home|202
حَقِيبَة سَفَر|valise|旅行箱|travel|204
مَفْتَاح|clé|钥匙|home|199
كَأْس|verre|玻璃杯|home|81
فِنْجَان|tasse|杯子|home|202
كِتَاب|livre|书|school|81
كُتُب|livres|书（复数）|school|201
دَرْس|leçon|课|school|78
مَدْرَسَة|école|学校|school|82
جَامِعَة|université|大学|school|77
أُسْتَاذ|professeur|教授，老师|school|76
دِرَاسَة|études|学习|school|199
نَصّ|texte|课文|school|82
كَلِمَة|mot|词|school|81
كَلَام|parole|话语|school|81
سُؤَال|question|问题|school|79
جَوَاب|réponse|答案|school|78
قِرَاءَة|lecture|阅读|school|81
كِتَابَة|écriture|书写|school|199
وَرَقَة|papier, feuille|纸张|school|201
جَرِيدَة|journal|报纸|school|77
مَكْتَبَة|bibliothèque|图书馆|school|82
مُعْجَم|dictionnaire|词典|school|82
قَلَم|stylo|笔|school|81
رَقْم|numéro|号码|school|201
عُنْوَان|adresse, titre|地址，标题|school|80
لُغَة|langue|语言|school|200
العَرَبِيَّة|l'arabe|阿拉伯语|school|80
الفَرَنْسِيَّة|le français|法语|school|79
الصِّينِيَّة|le chinois|汉语|school|200
الإنْجِلِيزِيَّة|l'anglais|英语|school|200
تَارِيخ|date, histoire|日期，历史|school|77
جَبْر|algèbre|代数|school|77
خُبْز|pain|面包|food|78
جُبْن|fromage|奶酪|food|77
بَيْضَة|œuf|鸡蛋|food|77
سَمَك|poisson|鱼|food|79
لَحْم|viande|肉|food|81
خَضَار|légumes|蔬菜|food|78
فَاكِهَة|fruits|水果|food|200
سُكَّر|sucre|糖|food|79
مِلْح|sel|盐|food|199
زَيْت|huile|油|food|79
مَاء|eau|水|food|81
شَاي|thé|茶|food|202
قَهْوَة|café (boisson)|咖啡|food|81
طَعَام|nourriture|食物|food|77
غَدَاء|déjeuner|午餐|food|78
عَشَاء|dîner|晚餐|food|199
مَطْعَم|restaurant|餐馆|food|82
لَذِيذ|délicieux|好吃的|food|81
جَائِع|j'ai faim|饿了|food|200
عَطْشَان|j'ai soif|渴了|food|200
شَرِبَ|boire|喝|verbs|79
أَكَلَ|manger|吃|verbs|201
طَبَخَ|cuisiner|做饭|verbs|80
مَدِينَة|ville|城市|places|204
بَلَد|pays|国家|places|77
بِلَاد|pays (pluriel)|国家（复数）|places|77
فَرَنْسَا|France|法国|places|81
مِصْر|Égypte|埃及|places|82
لُبْنَان|Liban|黎巴嫩|places|81
سُورِيَا|Syrie|叙利亚|places|79
تُونِس|Tunisie|突尼斯|places|77
الجَزَائِر|Algérie|阿尔及利亚|places|77
الأُرْدُنّ|Jordanie|约旦|places|76
المَغْرِب|Maroc|摩洛哥|places|82
بَارِيس|Paris|巴黎|places|76
بَيْرُوت|Beyrouth|贝鲁特|places|77
دِمَشْق|Damas|大马士革|places|78
القُدْس|Jérusalem|耶路撒冷|places|76
الرِّبَاط|Rabat|拉巴特|places|78
قَاهِرَة|Le Caire|开罗|places|200
شَارِع|rue|街道|places|79
مَيْدَان|place|广场|places|201
سُوق|marché|市场|places|82
فُنْدُق|hôtel|旅馆|places|81
مُسْتَشْفَى|hôpital|医院|places|82
مَسْجِد|mosquée|清真寺|places|201
مَتْحَف|musée|博物馆|places|201
مَسْرَح|théâtre|剧院|places|202
مَقْهَى|café (lieu)|咖啡馆|places|82
مَطَار|aéroport|机场|travel|199
مَحَطَّة|gare|车站|travel|199
قِطَار|train|火车|travel|81
طَائِرَة|avion|飞机|travel|80
سَيَّارَة|voiture|汽车|travel|204
حَافِلَة|bus|公共汽车|travel|76
دَرَّاجَة|vélo|自行车|travel|78
سَفَر|voyage|旅行|travel|79
جَوَاز سَفَر|passeport|护照|travel|77
بِطَاقَة|billet, carte|票，卡|travel|199
طَرِيق|route, chemin|道路|travel|80
قَرِيب|proche|近的|places|81
بَعِيد|loin|远的|places|77
جَانِب|à côté|旁边|places|77
عِنْدَ|chez, auprès de|在……那里|grammar|80
عَلَى|sur|在……上|grammar|80
تَحْتَ|sous|在……下|grammar|77
فِي|dans|在……里|grammar|81
مِنْ|de, depuis|从|grammar|82
إِلَى|vers, à|到|grammar|76
مَعَ|avec|和……一起|grammar|82
بِدُون|sans|没有|grammar|76
وَ|et|和|grammar|82
أَوْ|ou|或者|grammar|76
لَكِنْ|mais|但是|grammar|81
لِأَنَّ|parce que|因为|grammar|81
فَقَطْ|seulement|只|grammar|81
أَيْضًا|aussi|也|grammar|76
ثُمَّ|puis, ensuite|然后|grammar|77
كَانَ|il était|曾经是|grammar|200
لَيْسَ|n'est pas|不是|grammar|200
عِنْدِي|j'ai|我有|grammar|80
عِنْدَكَ|tu as (masc.)|你有（男）|grammar|80
عِنْدَكِ|tu as (fém.)|你有（女）|grammar|80
عِنْدَهُ|il a|他有|grammar|80
هُنَاكَ|il y a|有；那里有|grammar|200
أُرِيدُ|je veux|我想要|verbs|76
أُحِبُّ|j'aime|我喜欢|verbs|76
أَذْهَبُ|je vais|我去|verbs|76
ذَهَبَ|aller (passé)|去了|verbs|78
رَاحَ|aller|去了|verbs|78
جَاءَ|venir (passé)|来了|verbs|77
أَرَى|voir|看见|verbs|78
أَسْمَعُ|entendre|听见|verbs|79
أَقُولُ|dire|说|verbs|81
أَتَكَلَّمُ|je parle|我说话|verbs|76
أَقْرَأُ|je lis|我读|verbs|81
أَكْتُبُ|j'écris|我写|verbs|76
أَدْرُسُ|j'étudie|我学习|verbs|76
أَعْمَلُ|je travaille|我工作|verbs|76
أَعْرِفُ|je connais|我知道|verbs|75
أَفْهَمُ|je comprends|我理解|verbs|75
أَفْعَلُ|je fais|我做|verbs|75
أَخْرُجُ|je sors|我出去|verbs|75
أَسْكُنُ|j'habite|我住|verbs|76
أَشْتَرِي|j'achète|我买|verbs|76
أَسْتَخْدِمُ|j'utilise|我使用|verbs|76
أَحْتَاجُ إِلَى|j'ai besoin de|我需要|verbs|76
أَبْحَثُ عَنْ|je cherche|我寻找|verbs|199
أَنْتَظِرُ|j'attends|我等待|verbs|199
أَلْعَبُ|je joue|我玩|verbs|200
أُسَافِرُ|je voyage|我旅行|verbs|79
نَسِيتُ|j'ai oublié|我忘了|verbs|82
رَأَيْتُ|j'ai vu|我看到了|verbs|78
كَتَبْتُ|j'ai écrit|我写了|verbs|76
قُلْتُ|j'ai dit|我说了|verbs|76
فَهِمْتُ|j'ai compris|我明白了|verbs|81
ذَهَبْتُ|je suis allé(e)|我去了|verbs|78
رَجَعَ|revenir|回来了|verbs|78
وَصَلَ|arriver|到达|verbs|75
خَرَجَ|sortir|出去|verbs|200
دَخَلَ|entrer|进入|verbs|199
فَتَحَ|ouvrir|打开|verbs|81
أَغْلَقَ|fermer|关上|verbs|200
نَامَ|dormir|睡觉|verbs|199
بَقِيَ|rester|留下|verbs|200
كَانَ|être (passé)|曾是|verbs|200
يَكُونُ|être|是|verbs|200
سَأَلَ|demander|问|verbs|79
طَلَبَ|demander, commander|请求，点餐|verbs|80
شَرَحَ|expliquer|解释|verbs|200
رَدَّدَ|répéter|重复|verbs|78
فَتَشَ|chercher|查找|verbs|199
تَعَلَّمَ|apprendre|学习|verbs|199
دَرَسَ|étudier|学习|verbs|78
زَارَ|visiter|参观|verbs|204
تَعْبِير|expression|表达|school|200
شَرْق|est|东方|nature|204
غَرْب|ouest|西方|nature|81
شَمَال|nord|北方|nature|79
جَنُوب|sud|南方|nature|77
بَحْر|mer|海|nature|76
نَهْر|rivière|河|nature|82
وَادِي|vallée|山谷|nature|82
جَبَل|montagne|山|nature|77
غَابَة|forêt|森林|nature|80
جَزِيرَة|île|岛屿|nature|77
شَاطِئ|plage|海滩|nature|79
قَمَر|lune|月亮|nature|81
شَمْس|soleil|太阳|nature|79
نَجْم|étoile|星星|nature|201
ثَلْج|neige|雪|nature|77
بَرْد|froid|寒冷|nature|77
أَرْض|terre|土地|nature|80
طَائِر|oiseau|鸟|nature|80
سَمَكَة|poisson|鱼|nature|79
وَرْدَة|fleur|花|nature|200
شَجَرَة|arbre|树|nature|199
لَوْن|couleur|颜色|nature|81
أَحْمَر|rouge|红色的|nature|202
أَخْضَر|vert|绿色的|nature|204
أَزْرَق|bleu|蓝色的|nature|202
أَصْفَر|jaune|黄色的|nature|202
بُرْتُقَال|orange|橙子；橙色|food|76
وَجْه|visage|脸|body|75
يَد|main|手|body|75
رَأْس|tête|头|body|202
عَيْن|œil|眼睛|body|201
جِسْم|corps|身体|body|77
قَلْب|cœur|心|body|199
حَيَاة|vie|生命|concepts|204
مَوْت|mort|死亡|concepts|77
حُبّ|amour|爱|concepts|76
سَلَام|paix|和平|concepts|79
حَقّ|raison, droit|道理；权利|concepts|204
مُشْكِلَة|problème|问题，麻烦|concepts|82
فِكْرَة|idée|想法|concepts|199
مَعْنًى|sens|意思|concepts|82
أَمْر|affaire, ordre|事情，命令|concepts|199
خَبَر|nouvelle|消息|concepts|199
قِصَّة|histoire|故事|concepts|199
حَقِيقَة|vérité|真相|concepts|199
وَقْت|temps|时间|concepts|202
عَمَل|travail|工作|concepts|202
مَال|argent|钱|concepts|201
تِجَارَة|commerce|贸易|concepts|77
بَنْك|banque|银行|places|77
سِعْر|prix|价格|concepts|202
رِيَاضَة|sport|运动|concepts|200
تَمْرِين|exercice|练习|concepts|77
عُطْلَة|vacances|假期|concepts|80
ثَوْرَة|révolution|革命|concepts|77
جَيْش|armée|军队|concepts|77
وِزَارَة|ministère|部|concepts|82
اللّٰه|Dieu|真主|concepts|81
لَا أَعْرِف|je ne sais pas|我不知道|phrases|81
أَنَا بِخَيْر|je vais bien|我很好|phrases|199
مَا اسْمُكَ؟|comment tu t'appelles ?|你叫什么名字？|phrases|76
كَيْفَ حَالُكَ؟|comment vas-tu ?|你好吗？|phrases|76
أَيْنَ تَسْكُنُ؟|où habites-tu ?|你住在哪里？|phrases|76
هَذَا كُلّ شَيْء|c'est tout|就这些|phrases|199
إِنْ شَاءَ اللّٰه|si Dieu le veut|如果真主愿意|phrases|200
تِلْكَ|cette (éloignement)|那个（阴性）|grammar|199
قِطّ|chat|猫|nature|199
كَلْب|chien|狗|nature|199
قَصْر|château, palais|城堡，宫殿|places|199
حَارّ|chaud|热的|qualities|199
حِذَاء|chaussure|鞋子|home|199
قَائِد|chef, commandant|领导者，指挥官|people|199
شَيْء|chose|东西，事情|concepts|199
زَاوِيَة|coin, angle|角落，角度|places|199
الخَامِس|cinquième|第五|numbers|199
نِصْف|demi, moitié|一半|numbers|199
أَخِير|dernier|最后的|qualities|199
خَلْفَ|derrière|在后面|grammar|199
نَزَلَ|descendre|下降，下车|verbs|199
حِوَار|dialogue|对话|school|199
الأَحَد|dimanche|星期日|time|199
إِذَنْ|donc|因此|grammar|199
أَعْطِنِي|donne-moi|给我|phrases|199
خَسَارَة|dommage, perte|损失，可惜|concepts|199
بِطَلَاقَة|couramment|流利地|grammar|199
فِيهَا|dans laquelle|在其中（阴性）|grammar|199
مَعًا|ensemble|一起|grammar|199
تَشَرَّفْنَا|enchanté(e)|很高兴认识你|phrases|199
بَيْنَ|entre|在……之间|grammar|199
شَرِكَة|entreprise, société|公司|places|199
زَوْج|époux, mari|丈夫|family|199
زَوْجَة|épouse|妻子|family|199
صَيْف|été|夏天|time|199
بِالضَّبْط|exactement|确切地|grammar|199
مُمْتَاز|excellent|优秀的|qualities|200
هُمَا|eux deux|他们俩|people|200
سَاعَة|heure, montre|小时；钟表|time|200
مُغْلَق|fermé|关着的|qualities|200
عِيد|fête|节日|concepts|200
حَفْلَة|fête, réception|聚会|concepts|200
مُوَظَّف|fonctionnaire|公务员|people|200
أَخ|frère|兄弟|family|200
دَخَّنَ|fumer|抽烟|verbs|200
حَنْجَرَة|gorge|喉咙|body|200
لَازِم|il faut|必须|grammar|200
لَا يُوجَد|il n'y a pas|没有|grammar|200
مُهَنْدِس|ingénieur|工程师|people|200
حَدِيقَة|jardin|花园|places|200
أَحْبَبْتُ|j'ai aimé|我喜欢过|verbs|200
عِنْدِي أَلَم فِي|j'ai mal à…|我……疼|phrases|200
الخَمِيس|jeudi|星期四|time|200
عَصِير|jus|果汁|food|200
حَلِيب|lait|牛奶|food|200
تَزَلُّج|ski|滑雪|concepts|200
لُبْنَانِيّ|libanais|黎巴嫩人；黎巴嫩的|people|200
عُمْر|âge|年龄|concepts|201
زِرَاعَة|agriculture|农业|concepts|201
حِمَار|âne|驴|nature|201
عِيد مِيلَاد|anniversaire|生日|time|201
جِهَاز|appareil, machine|设备，机器|home|201
فَنّ|art|艺术|concepts|201
جَلَسَ|s'asseoir|坐下|verbs|201
اِنْتِبَاه|attention|注意|concepts|201
فَوْقَ|au-dessus|在上面|grammar|201
بِكُلِّ سُرُور|avec plaisir|乐意|phrases|201
خَافَ|avoir peur|害怕|verbs|201
سَفِينَة|bateau|船|travel|201
حَبِيبَة|bien-aimée|亲爱的（女）|people|201
تَمَام|bien, ça va|好，没问题|phrases|201
طَبْعًا|bien sûr|当然|phrases|201
قَرِيبًا|bientôt|很快|time|201
دَفْتَر|cahier|笔记本|school|201
رِيف|campagne|乡村|places|201
مَدْرَسَة|école|学校|school|201
كَسَرَ|casser|打破|verbs|201
عِنْدَمَا|lorsque|当……时|grammar|201
الإِثْنَيْن|lundi|星期一|time|201
إِيمَيْل|mail, e-mail|电子邮件|concepts|201
بَلَدِيَّة|mairie|市政厅|places|201
بَلْ|mais bien au contraire|而是|grammar|201
الثُّلَاثَاء|mardi|星期二|time|201
كَذَّاب|menteur|说谎的人|people|201
شُكْرًا جَزِيلًا|merci beaucoup|非常感谢|phrases|201
عَسَل|miel|蜂蜜|food|201
وَسَط|milieu|中间|places|201
رَكِبَ|monter, prendre un transport|乘坐|verbs|201
سِبَاحَة|natation|游泳|concepts|201
جِنْسِيَّة|nationalité|国籍|concepts|201
مُسْتَوَى|niveau|水平|concepts|201
اسْم|nom|姓名，名字|people|201
بَيْض|œufs|鸡蛋（集合）|food|201
شَفَوِيّ|oral|口头的|qualities|201
أَصْل|origine|起源|concepts|201
نَسِيَ|oublier|忘记|verbs|201
عَامِل|ouvrier|工人|people|201
أَحْيَانًا|parfois|有时候|time|201
سَوْفَ|particule du futur|将要（将来时标记）|grammar|201
مَاضٍ|passé|过去的|time|201
فُطُور|petit déjeuner|早餐|food|201
رُبَّمَا|peut-être|也许|grammar|201
مَطَر|pluie|雨|nature|201
قَرِيب مِنْ|proche de|靠近|places|201
رُبْع|quart|四分之一|numbers|202
حَيّ|quartier|街区|places|202
الرَّابِع|quatrième|第四|numbers|202
تَذَكُّر|rappel|回忆，提醒|concepts|202
لِقَاء|rencontre|见面|concepts|202
مَوْعِد|rendez-vous|约会，预约|time|202
حَجْز|réservation|预订|travel|202
لَا شَيْء|rien|什么都没有|grammar|202
ضَحِكَ|rire|笑|verbs|202
رُزّ|riz|米饭|food|202
السَّابِع|septième|第七|numbers|202
السَّادِس|sixième|第六|numbers|202
أُخْت|sœur|姐妹|family|202
جَوّ|temps, ambiance|天气；氛围|nature|202
كُلّ|tout, chaque|全部，每个|grammar|202
جِدًّا|très|很，非常|grammar|202
مُبَاشَرَة|directement|直接地|grammar|202
مُعَلِّم|enseignant|教师|people|202
اِجْتِمَاع|réunion|会议|concepts|202
اِجْتَمَعَ|se réunir|聚集|verbs|202
سُورِيّ|syrien|叙利亚人；叙利亚的|people|202
قَدِيش|combien ? (dialectal)|多少？（方言）|questions|199
`;

const THEME_ORDER = ['phrases','people','family','questions','numbers','time','qualities','home','school','food','places','travel','verbs','nature','body','grammar','concepts'];
const WORDS = RAW.trim().split('\n').map((line, i) => { const [ar, fr, zh, theme, page] = line.split('|'); return { id: i + 1, ar, fr, zh, theme, page: Number(page) }; });
const UNIQUE_WORDS = [...new Map(WORDS.map(w => [`${w.ar}|${w.fr}`, w])).values()];

