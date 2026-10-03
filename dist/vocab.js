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
وَلَد|enfant, garçon|男孩，孩子|family|83
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
ثُمَّ|puis|然后|grammar|202
مَا ...؟|quel est… ?|……是什么？|questions|202
أَيَّة|quelle ?|哪一个？（阴性）|questions|202
تَذَكَّرَ|se rappeler|想起|verbs|202
اِسْتَقْبَلَ|recevoir, accueillir|接待；迎接|verbs|202
يَسْتَقْبِلُ|il reçoit|他接待|verbs|202
شُوف|regarde (familier)|看（口语）|verbs|202
لَقِيَ|rencontrer|遇见|verbs|202
اِلْتَقَى|se rencontrer|相遇|verbs|202
اِلْتَقَيْتُ|j'ai rencontré|我遇见了|verbs|202
نَلْتَقِي|nous nous rencontrons|我们见面|verbs|202
زَارَ|rendre visite|拜访|verbs|202
يَزُورُ|il rend visite|他拜访|verbs|202
أَعِدْ مِنْ فَضْلِكَ|répète s'il te plaît (masculin)|请再说一遍（对男性）|phrases|202
أَعِيدِي مِنْ فَضْلِكِ|répète s'il te plaît (féminin)|请再说一遍（对女性）|phrases|202
بَقِيَ|rester|留下|verbs|202
يَبْقَى|il reste|他留下|verbs|202
بَقِيتُ|je suis resté|我留下了|verbs|202
رَجَعَ|revenir|回来|verbs|202
ضَحِكَ|rire|笑|verbs|202
شَارِع|rue|街道|places|202
حَمَّام|salle de bain|浴室|home|202
دُونَ|sans|没有|grammar|202
بِدُون|sans|没有|grammar|202
عَرَفَ|savoir, connaître|知道；认识|verbs|202
يَعْرِفُ|il sait|他知道|verbs|202
لَا أَعْرِفُ|je ne sais pas|我不知道|phrases|202
وَحِيد|seul|独自的|qualities|202
فَقَطْ|seulement|仅仅|grammar|202
بَسّ|seulement (familier)|只有（口语）|grammar|202
أُسْبُوع|semaine|星期|time|202
مَعْنًى|sens, signification|意思|concepts|202
سَبْعَة|sept|七|numbers|202
سِتَّة|six|六|numbers|202
شَرِكَة|société, entreprise|公司|concepts|202
أُخْت|sœur|姐妹|family|202
أَخَوَات|sœurs|姐妹们|family|202
سُوق|souk, marché|市场|places|202
قَلَم|stylo|笔|school|202
سُكَّر|sucre|糖|food|202
جَنُوب|sud|南方|places|202
طَاوِلَة|table|桌子|home|202
فِنْجَان|tasse|杯子|home|202
هَاتِف|téléphone|电话|home|202
الْجَوُّ حَارّ|il fait chaud|天气热|phrases|202
الْجَوُّ بَارِد|il fait froid|天气冷|phrases|202
نَصّ|texte|文本|school|202
شَاي|thé|茶|food|202
مَسْرَح|théâtre|剧院|places|202
عُنْوَان|titre d'un livre|书名；标题|school|202
كُلّ شَيْء تَمَام|tout va bien|一切都好|phrases|202
تَرْجَمْ مِنْ فَضْلِكَ|traduis s'il te plaît (masculin)|请翻译（对男性）|phrases|202
تَرْجَمِي مِنْ فَضْلِكِ|traduis s'il te plaît (féminin)|请翻译（对女性）|phrases|202
قِطَار|train|火车|travel|202
عَمِلَ|travailler|工作|verbs|202
يَعْمَلُ|il travaille|他工作|verbs|202
تَمْرِين|exercice|练习|school|200
تَمَارِين|exercices|练习（复数）|school|200
فَعَلَ|faire|做|verbs|200
يَفْعَلُ|il fait|他做|verbs|200
عَائِلَة|famille|家庭|family|200
تَعْبَان|fatigué|疲惫的|qualities|200
نِسَاء|femmes|女人们|people|200
أَعْيَاد|fêtes|节日（复数）|concepts|200
زَهْرَة|fleur|花|nature|200
زُهُور|fleurs|花（复数）|nature|200
نَهْر|fleuve|河流|nature|200
أَنْهَار|fleuves|河流（复数）|nature|200
مُوَظَّفُون|fonctionnaires|公务员们|people|200
بِطَاقَات|formulaires, cartes|表格；卡片|school|200
أَخ|frère|兄弟|family|200
إِخْوَة|frères|兄弟们|family|200
جُبْن|fromage|奶酪|food|200
فَوَاكِه|fruits|水果|food|200
وَلَد|garçon|男孩|family|200
أَوْلَاد|garçons, enfants|男孩们；孩子们|family|200
بَلْعُوم|gorge|咽喉|body|200
سَكَنَ|habiter|居住|verbs|200
يَسْكُنُ|il habite|他居住|verbs|200
تَارِيخ|histoire, date|历史；日期|school|200
رِجَال|hommes|男人们|people|200
فَنَادِق|hôtels|酒店（复数）|places|200
زَيْت|huile|油|food|200
لَيْسَ|il n'est pas|他不是|grammar|200
مِش|ne… pas (familier)|不（口语）|grammar|200
مُو|ne… pas (familier)|不（口语）|grammar|200
هُنَاكَ|il y a, là-bas|有；那里|grammar|200
كَانَ يُوجَد|il y avait|过去有|grammar|200
قَاهِرَة|Le Caire|开罗|places|200
دَرْس|leçon|课|school|200
دُرُوس|leçons|课程（复数）|school|200
بَحْر|mer|海|nature|201
بِحَار|mers|海（复数）|nature|201
نِصْف|moitié|一半|numbers|201
جَبَل|montagne|山|nature|201
جِبَال|montagnes|山（复数）|nature|201
رَكِبَ|monter, prendre (bus)|乘车|verbs|201
يَرْكَبُ|il prend un transport|他乘车|verbs|201
سَاعَة|montre|手表|time|201
جَامِع|mosquée|清真寺|places|201
جَوَامِع|mosquées|清真寺（复数）|places|201
كَلِمَة|mot|单词|school|201
كَلِمَات|mots|词语（复数）|school|201
مَتَاحِف|musées|博物馆（复数）|places|201
ثَلْج|neige|雪|nature|201
عِيد الْمِيلَاد|Noël|圣诞节|time|201
أَسْمَاء|noms|名字（复数）|people|201
لَيْلَة|nuit|夜晚|time|201
لَيَالٍ|nuits|夜晚（复数）|time|201
شَمَال|nord|北方|places|201
أَوْ|ou|或者|grammar|201
أَمْ|ou bien|还是（疑问句）|grammar|201
أَيْنَ|où ?|在哪里？|questions|201
نَسِيتُ|j'ai oublié|我忘了|verbs|201
فَتَحَ|ouvrir|打开|verbs|201
عُمَّال|ouvriers|工人们|people|201
خُبْز|pain|面包|food|201
وَرَقَة|papier|纸|school|201
أَوْرَاق|papiers|纸张（复数）|school|201
لِأَنَّ|parce que|因为|grammar|201
بَلَد|pays|国家|places|201
بِلَاد|pays (pluriel)|国家（复数）|places|201
أَب|père|父亲|family|201
آبَاء|pères|父亲们|family|201
غُرْفَة|pièce|房间|home|201
غُرَف|pièces|房间（复数）|home|201
سَاحَة|place|广场|places|201
أَسْمَاك|poissons|鱼（复数）|food|201
أَمْطَار|pluies|雨（复数）|nature|201
أُولَى|première|第一（阴性）|numbers|201
حَاضِر|présent|现在的；出席的|time|201
مُضَارِع|présent (grammaire)|现在时|grammar|201
مَاذَا فَعَلْتَ فِي الْعُطْلَةِ؟|qu'as-tu fait pendant les vacances ?|你假期做了什么？|phrases|68
أَيْنَ الْجَامِعَةُ وَالْمَطْعَمُ؟|où sont l'université et le restaurant ?|大学和餐馆在哪里？|phrases|68
دَرَسْتُ الْيَوْمَ فِي الْبَيْتِ|j'ai étudié aujourd'hui à la maison|我今天在家学习了|phrases|68
يُوجَدُ شَخْصٌ فِي الشَّارِعِ|il y a une personne dans la rue|街上有一个人|phrases|68
جِئْتُ مِنَ الْجَامِعَةِ|je suis venu de l'université|我从大学来了|phrases|68
أَنَا أَتَكَلَّمُ الْعَرَبِيَّةَ كُلَّ يَوْمٍ|je parle arabe tous les jours|我每天说阿拉伯语|phrases|68
سَافَرْتُ إِلَى تُونِسَ|j'ai voyagé en Tunisie|我去了突尼斯|phrases|68
كُنْتُ عِنْدَ أُسْرَتِي|j'étais chez ma famille|我在家人那里|phrases|68
كْلِير|Claire (prénom)|克莱尔（人名）|people|73
لُوِيس|Louis (prénom)|路易（人名）|people|73
أَنْطُوَان|Antoine (prénom)|安托万（人名）|people|73
لِيو|Léo (prénom)|莱奥（人名）|people|73
فَرَانْسْوَا|François (prénom)|弗朗索瓦（人名）|people|73
سُونْيَا|Sonia (prénom)|索尼娅（人名）|people|73
جُوزِيف|Joseph (prénom)|约瑟夫（人名）|people|73
فْرِيدْرِيك|Frédéric (prénom)|弗雷德里克（人名）|people|73
إِلِينَا|Elena (prénom)|埃莱娜（人名）|people|73
مَاتِيَاس|Mathias (prénom)|马蒂亚斯（人名）|people|73
غِيُوم|Guillaume (prénom)|纪尧姆（人名）|people|73
مَارْجُورِي|Marjorie (prénom)|玛乔丽（人名）|people|73
إِلِيزَابِيت|Élisabeth (prénom)|伊丽莎白（人名）|people|73
لُوسِي|Lucie (prénom)|露西（人名）|people|73
لُوسِيل|Lucile (prénom)|露西尔（人名）|people|73
كْلِيمَانْس|Clémence (prénom)|克莱芒丝（人名）|people|73
إِيفَا|Eva (prénom)|伊娃（人名）|people|73
لَيْلَا|Leïla (prénom)|莱拉（人名）|people|73
شَارْل|Charles (prénom)|夏尔（人名）|people|73
مَارْيُون|Marion (prénom)|玛丽翁（人名）|people|73
إِيمِلِي|Émilie (prénom)|埃米莉（人名）|people|73
مَارْك|Marc (prénom)|马克（人名）|people|73
كْلُوتِيلْد|Clotilde (prénom)|克洛蒂尔德（人名）|people|73
أَلِكْسَانْدْر|Alexandre (prénom)|亚历山大（人名）|people|73
كَارُولِين|Caroline (prénom)|卡罗琳（人名）|people|73
آن|Anne (prénom)|安娜（人名）|people|73
فِيلِيب|Philippe (prénom)|菲利普（人名）|people|73
مَاتِيلْد|Mathilde (prénom)|玛蒂尔德（人名）|people|73
دَافِيد|David (prénom)|大卫（人名）|people|73
أُود|Aude (prénom)|奥德（人名）|people|73
أُولِيفْيَا|Olivia (prénom)|奥利维娅（人名）|people|73
جُولِي|Julie (prénom)|朱莉（人名）|people|73
كْلَارَا|Clara (prénom)|克拉拉（人名）|people|73
مِيشِيل|Michel (prénom)|米歇尔（人名）|people|73
وَجْه|visage|脸|body|83
وَحِيد|seul|独自的|qualities|83
وَسَط|centre, milieu|中心|places|83
وَصَلَ|arriver|到达|verbs|83
وَلَد|enfant, garçon|孩子；男孩|family|83
يَخْرُجُ|il sort|他出去|verbs|83
يَد|main|手|body|83
يَدِي|ma main|我的手|body|83
يُرِيدُ|il veut|他想要|verbs|83
يَسَار|gauche|左边|places|83
يَسْكُنُ|il habite|他居住|verbs|83
يَشْرَبُ|il boit|他喝|verbs|83
يَعْرِفُ|il connaît|他认识|verbs|83
يَعْمَلُ|il travaille|他工作|verbs|83
يَفْعَلُ|il fait|他做|verbs|83
يَفْهَمُ|il comprend|他明白|verbs|83
يُوجَدُ|il y a|有；存在|grammar|83
يَوْم|jour|天|time|83
الْيَوْم|aujourd'hui|今天|time|83
يَعْنِي|c'est-à-dire|也就是说|grammar|83
اِسْتَقْبَلَ|accueillir|迎接|verbs|198
يَسْتَقْبِلُ|il accueille|他迎接|verbs|198
اِشْتَرَى|acheter|购买|verbs|198
يَشْتَرِي|il achète|他买|verbs|198
اِشْتَرَيْتُ|j'ai acheté|我买了|verbs|198
قُرْبَ|à côté de|在旁边|places|198
جَنْب|à côté de|旁边|places|198
صِفَة|adjectif|形容词|school|198
عُنْوَان|adresse|地址|concepts|198
مَطَار|aéroport|机场|travel|198
عُمْر|âge|年龄|concepts|198
زِرَاعَة|agriculture|农业|concepts|198
ذَهَبَ إِلَى|aller à|去往|verbs|198
يَذْهَبُ إِلَى|il va à|他去往|verbs|198
رَاحَ|aller (familier)|去（口语）|verbs|198
رُحْتُ|je suis allé(e) (familier)|我去了（口语）|verbs|198
أَصْدِقَاء|amis|朋友们|people|198
صَدِيقَات|amies|女性朋友们|people|198
زَاوِيَة|angle|角度|places|198
عِيد مِيلَاد|anniversaire|生日|time|198
جِهَاز|appareil, machine|设备|home|198
تَعَلَّمَ|apprendre|学习|verbs|198
عَرَب|les Arabes|阿拉伯人|people|198
عَرَبِيّ|un Arabe|阿拉伯人（男）|people|198
عَرَبِيَّة|arabe (langue)|阿拉伯语|school|198
فُصْحَى|arabe littéral|标准阿拉伯语|school|198
شَجَرَة|arbre|树|nature|198
أَشْجَار|arbres|树木（复数）|nature|198
جَيْش|armée|军队|concepts|198
خِزَانَة|armoire|衣柜|home|198
وَصَلَ|arriver|到达|verbs|198
يَصِلُ|il arrive|他到达|verbs|198
سَنَصِلُ|nous arriverons|我们将到达|verbs|198
فَنّ|art|艺术|concepts|198
فُنُون|arts|艺术（复数）|concepts|198
جَلَسَ|s'asseoir|坐下|verbs|198
يَجْلِسُ|il s'assoit|他坐下|verbs|198
اِنْتَظِرْ|attends !|等一下！|verbs|198
اِسْتَنَّى|attends ! (familier)|等一下！（口语）|verbs|198
اِنْتِبَاه|attention|注意|concepts|198
فَوْقَ|au-dessus|在上方|grammar|198
الْيَوْم|aujourd'hui|今天|time|198
مَعَ السَّلَامَة|au revoir|再见|phrases|198
أَيْضًا|aussi|也|grammar|198
كَمَان|aussi (familier)|也（口语）|grammar|198
قَبْلَ|avant|以前|grammar|198
مَعَ|avec|和……一起|grammar|198
بِكُلِّ سُرُور|avec plaisir|乐意|phrases|198
طَائِرَة|avion|飞机|travel|198
خَافَ|avoir peur|害怕|verbs|198
يَخَافُ|il a peur|他害怕|verbs|198
أَنَا خِفْتُ مِنْ|j'ai eu peur de|我害怕过……|phrases|198
حَمَّام|bain|浴室|home|198
بَنْك|banque|银行|places|198
سَفِينَة|bateau|船|travel|198
سُفُن|bateaux|船（复数）|travel|198
كَثِيرًا|beaucoup|很多|qualities|198
جَمِيل|beau|漂亮的（男）|qualities|198
جَمِيلَة|belle|漂亮的（女）|qualities|198
أَحْتَاجُ إِلَى|j'ai besoin de|我需要……|phrases|198
حَاجَة إِلَى|besoin de|需要……|concepts|198
مَكْتَبَة|bibliothèque|图书馆|places|198
جَيِّد|bien|好的|qualities|198
خَيْر|bien|好；善|concepts|198
حَبِيبَة|bien-aimée|心爱的女性|people|198
تَمَام|ça va, bien|好；没问题|phrases|198
قَرِيبًا|bientôt|不久|time|198
أَهْلًا وَسَهْلًا|bienvenue|欢迎|phrases|198
بِطَاقَة|billet, carte|票；卡|travel|198
شَرِبَ|boire|喝|verbs|198
يَشْرَبُ|il boit|他喝|verbs|198
مَرْحَبًا|bonjour|你好|phrases|198
مَكْتَب|bureau|办公室；书桌|home|198
بَاص|bus|公交车|travel|198
مَقْهَى|café (lieu)|咖啡馆|places|198
دَفْتَر|cahier|练习本|school|198
رِيف|campagne|乡村|places|198
حَقِيبَة|cartable, sac|书包；包|home|198
شَنْطَة|cartable (familier)|书包（口语）|school|198
بِطَاقَة|carte|卡片|school|198
كَسَرَ|casser|打破|verbs|198
يَكْسِرُ|il casse|他打破|verbs|198
هَذَا|ce (masculin)|这个（阳性）|grammar|198
ذَلِكَ|ce (éloignement)|那个（阳性）|grammar|198
يَعْنِي|c'est-à-dire|也就是说|grammar|198
فَقَطْ|c'est tout|就这些|phrases|198
بَسّ|c'est tout (familier)|就这些（口语）|phrases|198
هَذِهِ|cette (féminin)|这个（阴性）|grammar|198
تِلْكَ|cette (éloignement)|那个（阴性）|grammar|198
عُطْلَة|vacances|假期|time|203
حَقِيبَة|valise|行李箱|travel|203
شَنْطَة|valise (familier)|行李箱（口语）|travel|203
الْجُمُعَة|vendredi|星期五|time|203
جَاءَ|venir|来|verbs|203
يَجِيءُ|il vient|他来|verbs|203
أَنَا جِئْتُ|je suis venu(e)|我来了|verbs|203
دَرَّاجَة|vélo|自行车|travel|203
بِسِكْلِيت|vélo (familier)|自行车（口语）|travel|203
كَأْس|verre|杯子|home|203
كُؤُوس|verres|杯子（复数）|home|203
ثِيَاب|vêtements|衣服|home|203
مَلَابِس|vêtements|衣服|home|203
لَحْم|viande|肉|food|203
لُحُوم|viandes|肉类（复数）|food|203
حَيَاة|la vie|生命；生活|concepts|203
مَدِينَة|ville|城市|places|203
مُدُن|villes|城市（复数）|places|203
نَبِيذ|vin|葡萄酒|food|203
خَمْر|vin|酒|food|203
زَارَ|visiter|拜访；参观|verbs|203
يَزُورُ|il visite|他参观|verbs|203
أَنَا زُرْتُ|j'ai visité|我参观了|verbs|203
مُفْرَدَات|vocabulaire|词汇|school|203
رَأَى|voir|看见|verbs|203
جَار|voisin|邻居|people|203
سَيَّارَة|voiture|汽车|travel|203
أَنْتُمَا|vous deux|你们俩|people|203
سَافَرَ|voyager|旅行|verbs|203
يُسَافِرُ|il voyage|他旅行|verbs|203
نِهَايَة الْأُسْبُوع|week-end|周末|time|203
صِفْر|zéro|零|numbers|203
كَبِير|grand|大的|qualities|204
صَغِير|petit|小的|qualities|204
جَيِّد|bien|好的|qualities|204
سَيِّئ|mauvais|坏的|qualities|204
سَهْل|facile|容易的|qualities|204
صَعْب|difficile|困难的|qualities|204
جَدِيد|nouveau|新的|qualities|204
قَلِيل|peu|少的|qualities|204
كَثِير|beaucoup|很多|qualities|204
بَارِد|froid|冷的|qualities|204
حَارّ|chaud|热的|qualities|204
سَاخِن|chaud|热的|qualities|204
شَمَال|nord|北方|places|204
جَنُوب|sud|南方|places|204
غَرْب|ouest|西方|places|204
لَطِيف|gentil|友善的|qualities|204
طَوِيل|long, grand|长的；高的|qualities|204
قَصِير|court|短的|qualities|204
قَبْلَ|avant|之前|grammar|204
بَعْدَ|après|之后|grammar|204
قَرِيب|proche|近的|qualities|204
بَعِيد|loin|远的|qualities|204
سَعِيد|heureux|快乐的|qualities|204
تَحْتَ|sous|在……下面|grammar|204
فَوْقَ|sur, au-dessus|在……上面|grammar|204
مُمْكِن|possible|可能的|qualities|204
لَيْل|nuit|夜晚|time|204
مَوْت|mort|死亡|concepts|204
نِهَايَة|fin|结尾|time|204
بِدَايَة|début|开始|time|204
أَب|père|父亲|family|76
أَبَدًا|jamais, pas du tout|绝不；从来不|grammar|76
أَتَكَلَّمُ|je parle|我说话|verbs|76
اِثْنَان|deux|二|numbers|76
اِجْتِمَاع|réunion|会议|concepts|76
أُحِبُّ|j'aime|我喜欢|verbs|76
أَحْتَاجُ إِلَى|j'ai besoin de|我需要……|phrases|76
إِدَارَة|administration|行政管理|concepts|76
أَدْرُسُ|j'étudie|我学习|verbs|76
أَرْبَعَة|quatre|四|numbers|76
أُرِيدُ|je veux|我想要|verbs|76
إِذَنْ|donc|所以|grammar|76
أَذْهَبُ|je vais|我去|verbs|76
أُسْبُوع|semaine|星期|time|76
أُسْتَاذ|professeur|老师|school|76
اِسْتَخْدَمَ|utiliser|使用|verbs|76
اِسْتَقْبَلَ|recevoir, accueillir|接待；迎接|verbs|76
أُسْرَتِي|ma famille|我的家庭|family|76
آسِف|désolé|对不起|phrases|76
أَسْكُنُ|j'habite|我居住|verbs|76
اِسْم|nom|名字|people|76
اِشْتَرَى|acheter|购买|verbs|76
اِشْتَرَيْتُ|j'ai acheté|我买了|verbs|76
أَصْدِقَاء|des amis|朋友们|people|76
أَعْمَلُ|je travaille|我工作|verbs|76
أَكْتُبُ|j'écris|我写|verbs|76
أَكَلْتُ|j'ai mangé|我吃了|verbs|76
أَمْس|hier|昨天|time|76
إِلَى|vers, à|向；到|grammar|76
الْأُرْدُنّ|Jordanie|约旦|places|76
الْآن|maintenant|现在|time|76
اِلْتَقَى|rencontrer|遇见|verbs|76
اِلْتَقَيْتُ|j'ai rencontré|我遇见了|verbs|76
الْقُدْس|Jérusalem|耶路撒冷|places|76
أُمّ|mère|母亲|family|76
أَنَا|moi|我|people|76
أَنْتَ|toi (masculin)|你（男）|people|76
أَنْتِ|toi (féminin)|你（女）|people|76
أَنْتُمْ|vous (pluriel)|你们|people|76
أَهْلًا وَسَهْلًا|bienvenue, bonjour|欢迎；你好|phrases|76
أَوْ|ou|或者|grammar|76
أَيْضًا|aussi, également|也|grammar|76
أَيْنَ|où ?|在哪里？|questions|76
بَاب|porte|门|home|76
بَارِد|frais|凉的；冷的|qualities|76
الْبَارِحَة|hier|昨天；昨夜|time|76
بَارِيس|Paris|巴黎|places|76
بَاص|bus|公交车|travel|76
بِالضَّبْط|exactement|恰好；确切地|grammar|76
بِحَاجَة إِلَى|avoir besoin de|需要……|phrases|76
بَحْر|mer|海|nature|76
بِخَيْر|bien, en forme|好；身体好|qualities|76
بِدَايَة|début|开端|time|76
بِدُون|sans|没有|grammar|76
بُرْتُقَال|orange|橙子|food|76
بَرْد|froid|寒冷|qualities|77
بَطَاطَا|pomme de terre|土豆|food|77
بَعْدَ|après|之后|grammar|77
بَعِيد عَنْ|loin de|远离|places|77
بَقِيتُ|je suis resté|我留下了|verbs|77
بَلَد|pays|国家|places|77
بِلَاد|pays (pluriel)|国家（复数）|places|77
بَنْك|banque|银行|places|77
بِنْت|fille|女孩|family|77
بَيَّاع|vendeur|卖家；小贩|people|77
بَيْت|maison|房子|home|77
بِئْر|puits|井|places|77
بَيْضَة|un œuf|一只鸡蛋|food|77
بَيْرُوت|Beyrouth|贝鲁特|places|77
بُيُوت|maisons|房子（复数）|home|77
تَاج|couronne|王冠|home|77
تَارِيخ|date, histoire|日期；历史|school|77
تِجَارَة|commerce|贸易|concepts|77
تَحْتَ|sous|在……下面|grammar|77
تِسْعَة|neuf|九|numbers|77
تَشَرَّفْنَا|enchanté|很高兴认识你|phrases|77
تَعْبَان|fatigué|疲惫的|qualities|77
تَفَضَّلْ|je t'en prie|请；给你|phrases|77
تَمَام|bien, ça va|好；没问题|phrases|77
تَمْرِين|exercice|练习|school|77
تُوت|mûre|桑葚|food|77
تُونِس|Tunis, Tunisie|突尼斯城；突尼斯|places|77
ثَوْب|vêtement|衣服|home|77
ثَلْج|neige|雪|nature|77
ثُمَّ|puis, ensuite|然后|grammar|77
ثَوْر|taureau|公牛|nature|77
ثَوْرَة|révolution|革命|concepts|77
ثِيَاب|vêtements|衣服|home|77
جَاءَ|venir|来|verbs|77
جِئْتُ|je suis venu|我来了|verbs|77
جَامِع|mosquée|清真寺|places|77
جَامِعَة|université|大学|school|77
جَبْر|algèbre|代数|school|77
جَبَل|montagne|山|nature|77
جُبْنَة|fromage|奶酪|food|77
جُبْن|fromage|奶酪|food|77
جَدِيد|nouveau|新的|qualities|77
جَرِيدَة|journal|报纸|school|77
الْجَزَائِر|Algérie, Alger|阿尔及利亚；阿尔及尔|places|77
جَزِيرَة|île|岛|places|77
جِسْر|pont|桥|places|77
جَلَسَ|s'asseoir|坐下|verbs|77
جَنْب|à côté de|旁边|places|77
جَنُوب|sud|南方|places|77
جَوَاز سَفَر|passeport|护照|travel|77
جَوَازِي|mon passeport|我的护照|travel|77
جَيِّد|bon, bien|好的|qualities|77
جَيْش|armée|军队|concepts|77
حَال|état, condition|状态；情况|concepts|77
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
الْيَوْم|aujourd'hui|今天|time|83
أَمْس|hier|昨天|time|76
غَدًا|demain|明天|time|199
صَبَاح|matin|早晨|time|200
مَسَاء|soir|晚上|time|82
لَيْل|nuit|夜晚|time|81
نَهَار|journée|白天|time|204
يَوْم|jour|天|time|83
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
يُوجَد|il y a, il existe|有；存在|grammar|200
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
أَعْرِفُ|je connais|我知道|verbs|83
أَفْهَمُ|je comprends|我理解|verbs|83
أَفْعَلُ|je fais|我做|verbs|83
أَخْرُجُ|je sors|我出去|verbs|83
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
وَصَلَ|arriver|到达|verbs|83
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
وَجْه|visage|脸|body|83
يَد|main|手|body|83
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
قَبِيح|laid|丑的|qualities|204
بَشِع|très laid|难看的|qualities|204
غَلِيظ|méchant, rude|粗鲁的|qualities|204
كَرِيم|généreux|慷慨的|qualities|204
بَخِيل|avare|吝啬的|qualities|204
نَحِيف|mince|瘦的|qualities|204
سَمِين|gros|胖的|qualities|204
بَدِين|corpulent|肥胖的|qualities|204
عَادِي|normal, ordinaire|普通的|qualities|204
غَالِي|cher|昂贵的|qualities|204
رَخِيص|pas cher|便宜的|qualities|204
إِيجَابِيّ|positif|积极的，肯定的|qualities|204
سَلْبِيّ|négatif|消极的，否定的|qualities|204
قَدِيم|vieux, ancien|古老的，旧的|qualities|204
أَوْرَاق|feuilles, papiers|纸张（复数）|school|200
فَرَنْسِيَّة|française|法国人（女）；法语的|people|200
اِشْتَرَيْتُ|j'ai acheté|我买了|verbs|200
نِمْتُ|j'ai dormi|我睡了|verbs|200
تَفَضَّلْ|je t'en prie (masc.)|请（对男性）|phrases|200
تَفَضَّلِي|je t'en prie (fém.)|请（对女性）|phrases|200
تَفَضَّلُوا|je vous en prie|请（对多人）|phrases|200
عِنْدِي أَلَم|j'ai mal|我疼|phrases|200
مَا عِنْدِي|je n'ai pas|我没有|grammar|200
مَا كَانَ يُوجَد|il n'y avait pas|过去没有|grammar|200
يَا اللّٰه|allez, allons|走吧|phrases|201
صِفَة|adjectif|形容词|school|201
فُصْحَى|arabe littéral|标准阿拉伯语|school|201
سَنَصِلُ|nous arriverons|我们将到达|verbs|201
شَنْطَة|cartable, sac|书包|school|201
مِكْتَبَة|librairie|书店|places|201
عَلَيْهَا|sur laquelle|在它上面（阴性）|grammar|202
مَا مَعْنَى|quel est le sens de… ?|……是什么意思？|phrases|202
وَحِيد|seul|独自的|qualities|202
مُخَابَرَات|service de renseignement|情报机构|concepts|202
مَطَاعِم|restaurants|餐馆（复数）|food|202
`;

// Additional course vocabulary from the 60 photos supplied on 2026-10-01.
// French-only exercise prompts have been answered in Arabic and included below.
const COURSE_RAW = `
بَاب|porte|门|home|20
زَيْت|huile|油|food|20
يَد|main|手|body|20
وَزِير|ministre|部长|people|21
زُرْتُ|j'ai visité|我参观了|verbs|21
بِئْر|puits|井|nature|21
ثَوْب|vêtement|衣服|home|21
بُيُوت|maisons|房子（复数）|home|21
بَارِد|frais, froid|凉的，冷的|qualities|21
بَيْرُوت|Beyrouth|贝鲁特|places|21
بَرِيد|poste, courrier|邮政，邮件|places|21
ثَوْر|taureau|公牛|nature|21
دُبّ|ours|熊|nature|21
خُبْز|pain|面包|food|24
جَبَل|montagne|山|nature|24
وَاحِد|un (nombre)|一|numbers|24
يُوجَد|il y a, il existe|有，存在|grammar|24
جَزَر|carotte|胡萝卜|food|24
دَجَاج|poulet|鸡肉，鸡|food|24
رَجُل|homme|男人|people|24
بُرْج|tour|塔|places|24
تَاج|couronne|王冠|concepts|24
خَرَجَ|il est sorti|他出去了|verbs|24
دَخَلَ|il est entré|他进去了|verbs|26
أَخْبَرَ|il a informé|他告知了|verbs|26
حَجّ|pèlerinage|朝觐|concepts|26
رَدَّ|il a répondu|他回答了|verbs|26
يَصِلُ|il arrive|他到达|verbs|28
بَيْض|œufs|鸡蛋|food|28
خُضَار|légumes|蔬菜|food|28
بَطَاطَا|pommes de terre|土豆|food|28
شَخْص|personne|人|people|28
رَخِيص|pas cher|便宜的|qualities|28
وَصَلَ|il est arrivé|他到达了|verbs|28
عَاصِمَة|capitale|首都|places|30
حِوَار|dialogue|对话|school|31
قِصَّة|histoire, récit|故事|school|31
دَرَسَ|il a étudié|他学习了|verbs|31
شَرِبَ|il a bu|他喝了|verbs|31
سَأَلَ|il a demandé|他问了|verbs|31
خَبَّاز|boulanger|面包师|people|31
حَافِلَة|bus|公共汽车|travel|31
جَيْش|armée|军队|concepts|31
ضَابِط|officier|军官|people|31
طَيَّار|pilote|飞行员|people|31
رُحْتُ|je suis allé|我去了|verbs|31
لُوسِي|Lucie|露西（人名）|people|31
رَشِيد|Rachid|拉希德（人名）|people|31
طَبَخَ|il a cuisiné|他做饭了|verbs|33
طَبَّاخ|cuisinier|厨师|people|33
شُرْطِيّ|policier|警察|people|33
حَظّ|chance|运气|concepts|33
الرِّبَاط|Rabat|拉巴特|places|33
زِيَارَة|une visite|一次拜访|concepts|33
مُسْتَشْفَى|hôpital|医院|places|35
شَارِع|rue|街道|places|35
كَلْب|chien|狗|nature|38
كَاتِب|écrivain|作家|people|38
كَتَبَ|il a écrit|他写了|verbs|38
كَبِير|grand|大的|qualities|38
صَغِير|petit|小的|qualities|38
كِتَابَة|écriture|书写|school|38
دَفْتَر|cahier|练习本|school|41
مَدْرَسَة|école|学校|school|41
مُشْكِلَة|problème|问题|concepts|41
عُطْلَة|vacances|假期|time|41
صَحْرَاء|désert|沙漠|nature|41
شَمْس|soleil|太阳|nature|42
صَابُون|savon|肥皂|home|42
جَنُوب|sud|南方|places|42
شَمَال|nord|北方|places|42
نَصّ|texte|课文，文本|school|42
سَنَة|année|年|time|42
عَمَل|travail|工作|concepts|42
مَطْعَم|restaurant|餐馆|places|42
صَدِيق|ami|朋友|people|42
لَحْم|viande|肉|food|42
سَلَام|paix|和平|concepts|42
جَامِعَة|université|大学|school|42
قَمَر|lune|月亮|nature|42
نَهَار|jour|白天|time|42
لَيْل|nuit|夜晚|time|42
صُورَة|image, photo|图片，照片|concepts|42
تَكَلَّمَ|il a parlé|他说话了|verbs|42
يَوْم|jour|日，天|time|42
أَيّ|quel, lequel|哪个|questions|42
أَيَّام|jours|日子（复数）|time|42
لِمَاذَا|pourquoi|为什么|questions|42
فَنْدَق|hôtel|旅馆|travel|43
سَاعَة|heure, montre|小时，钟表|time|43
فَرَنْسِيّ|français (masculin)|法国的（男）|people|43
فَرَنْسِيَّة|française (féminin)|法国的（女）|people|43
مُمْتَاز|excellent|极好的|qualities|43
نَبِيذ|vin|葡萄酒|food|43
وَلَكِنْ|mais|但是|grammar|43
قَهْوَة|café (boisson)|咖啡|food|43
شَهْر|mois|月份|time|43
طَابِق|étage|楼层|home|43
تَمْرِين|exercice|练习|school|43
هُنَا|ici|这里|places|43
كَانَ|il était|他曾经是|verbs|43
فَوَاكِه|fruits|水果（复数）|food|43
وُجُوه|visages|脸（复数）|body|43
فَهِمَ|il a compris|他理解了|verbs|43
سَفِينَة|bateau|船|travel|43
مَعْرِض|exposition|展览|concepts|43
عُنْوَان|adresse, titre|地址，标题|concepts|43
مَتْحَف|musée|博物馆|places|43
دَخَلْتُ|je suis entré|我进去了|verbs|45
شَمْس|soleil|太阳|nature|45
مَقْهَى|café (lieu)|咖啡馆|places|45
وَحِيد|seul|独自的|qualities|45
مُنْذُ|depuis|自从|grammar|45
مَعَ|avec|和……一起|grammar|45
عِنْدَ|chez, auprès de|在……处|grammar|45
عِنْدِي|j'ai|我有|grammar|45
سَكَنْتُ|j'ai habité|我居住过|verbs|47
دَرَسْتُ|j'ai étudié|我学习了|verbs|47
ذَهَبْتُ|je suis allé|我去了|verbs|47
كُنْتُ|j'étais|我曾是／我当时在|verbs|47
شَرِبْتُ|j'ai bu|我喝了|verbs|47
فَعَلْتُ|j'ai fait|我做了|verbs|47
فِي الْعُطْلَة|pendant les vacances|在假期里|phrases|47
تَعْبَان|fatigué|疲倦的（男）|qualities|47
شُوَيَّة|un peu|一点儿（口语）|grammar|47
كَيْفَ حَالُكَ؟|comment vas-tu ? (masculin)|你好吗？（对男性）|phrases|47
فِي الْجَبَل|à la montagne|在山里|phrases|47
جَبَل طَارِق|Gibraltar|直布罗陀|places|47
سَنَة حُلْوَة يَا جَمِيل|joyeux anniversaire|生日快乐|phrases|47
عِيد مِيلَاد سَعِيد|joyeux anniversaire|生日快乐|phrases|47
عِيد مِيلَاد مَجِيد|joyeux Noël|圣诞快乐|phrases|47
كُلّ عَام وَأَنْتَ بِخَيْر|meilleurs vœux (masculin)|祝你年年安好（对男性）|phrases|47
كُلّ سَنَة وَأَنْتَ طَيِّب|bonne fête (masculin)|节日快乐（对男性）|phrases|47
سَنَة سَعِيدَة|bonne année|新年快乐|phrases|47
اِسْتَخْدَمَ|il a utilisé|他使用了|verbs|48
اِسْتَقْبَلَ|il a reçu|他接待了|verbs|48
اِجْتِمَاع|réunion|会议|concepts|48
مَسْؤُول|responsable|负责人|people|48
سُؤَال|question|问题，提问|questions|48
رَئِيس|président|主席，总统|people|48
شَاطِئ|plage|海滩|nature|48
طَائِرَة|avion|飞机|travel|48
مَاء|eau|水|food|48
مَسَاء|soir|晚上|time|48
جَاءَ|il est venu|他来了|verbs|48
أَب|père|父亲|family|48
أُمّ|mère|母亲|family|48
أُسْرَة|famille|家庭|family|48
أَصْدِقَاء|amis|朋友们|people|48
رَأْس|tête|头|body|48
لَا أَعْرِف|je ne sais pas|我不知道|phrases|48
مَا أَكَلْتُ|je n'ai pas mangé|我没吃|phrases|48
أَدْرُسُ|j'étudie|我学习|verbs|48
أَسْأَلُ|je demande|我问|verbs|48
كَأْس|verre (récipient)|杯子|home|48
صَدِيقِي|mon ami|我的朋友|people|54
أَصْدِقَائِي|mes amis|我的朋友们|people|54
عِنْدَكَ|tu as (masculin)|你有（男）|grammar|54
عِنْدَكِ|tu as (féminin)|你有（女）|grammar|54
عِنْدَهُ|il a|他有|grammar|54
بِحَاجَةٍ إِلَى|avoir besoin de|需要|grammar|54
مَرِيض|malade|生病的|qualities|54
مُدِيرَة|directrice|女主任|people|54
حَدِيقَة|jardin|花园|nature|54
كَذَّاب|menteur|说谎的人|people|54
حَزِين|triste|悲伤的|qualities|54
قَصِير|petit, court|矮的，短的|qualities|54
قَرِيب|proche|近的|qualities|54
سَفَارَة|ambassade|大使馆|places|54
وِزَارَة|ministère|部委|places|54
لَنْدَن|Londres|伦敦|places|54
بُرُوكْسِل|Bruxelles|布鲁塞尔|places|54
بَرْلِين|Berlin|柏林|places|54
دُبَيّ|Dubaï|迪拜|places|54
مِسْكِين|pauvre, malheureux|可怜的|qualities|58
تَفَضَّلْ|je t'en prie (masculin)|请（对男性）|phrases|58
الْحَمْدُ لِلَّه|Dieu merci|感谢真主|phrases|58
عِنْدِي سُؤَال|j'ai une question|我有一个问题|phrases|58
عِنْدَكَ جَوَاز سَفَر؟|as-tu un passeport ? (masculin)|你有护照吗？（对男性）|phrases|58
جَوَاز سَفَر|passeport|护照|travel|58
مَتَى تَذْهَبُ إِلَى لُبْنَان؟|quand vas-tu au Liban ?|你什么时候去黎巴嫩？|phrases|58
فِي الصَّيْف|en été|在夏天|time|58
حُمُّص|hoummous|鹰嘴豆泥|food|58
تَبُّولَة|taboulé|塔布勒沙拉|food|58
سَلَطَة|salade|沙拉|food|58
جُبْنَة|fromage|奶酪|food|58
مَعَ السَّلَامَة|au revoir|再见|phrases|58
مَسَاء الْخَيْر|bonsoir (salutation)|晚上好|phrases|58
مَسَاء النُّور|bonsoir (réponse)|晚上好（回答）|phrases|58
كَيْفَ الْحَال؟|comment ça va ?|近况如何？|phrases|58
أَنَا لَا أُحِبّ الْحُمُّص|je n'aime pas le hoummous|我不喜欢鹰嘴豆泥|phrases|58
أُحِبّ التَّبُّولَة|j'aime le taboulé|我喜欢塔布勒沙拉|phrases|58
اِسْمِي|je m'appelle|我的名字是|phrases|62
تَشَرَّفْنَا|enchanté|幸会|phrases|62
عَفْوًا|je t'en prie, pardon|不客气，对不起|phrases|62
شُكْرًا جَزِيلًا|merci beaucoup|非常感谢|phrases|62
أَنَا أَسْكُنُ فِي بَارِيس|j'habite à Paris|我住在巴黎|phrases|62
عِنْدِي بَيْت فِي بَارِيس|j'ai une maison à Paris|我在巴黎有一套房子|phrases|62
ذَهَبْتُ مَعَ صَدِيقٍ إِلَى الْجَامِعَة|je suis allé à l'université avec un ami|我和朋友去了大学|phrases|62
أَسْكُنُ|j'habite|我住|verbs|62
أَعْمَلُ|je travaille|我工作|verbs|64
أَتَكَلَّمُ الْعَرَبِيَّة|je parle arabe|我说阿拉伯语|phrases|64
أَدْرُسُ الْعَرَبِيَّة|j'étudie l'arabe|我学习阿拉伯语|phrases|64
نَأْكُلُ|nous mangeons|我们吃|verbs|64
فَلَافِل|falafels|炸鹰嘴豆丸子|food|64
بَقْلَاوَة|baklawa|果仁蜜饼|food|64
أُحِبُّ|j'aime|我喜欢|verbs|64
لَا أُحِبُّ|je n'aime pas|我不喜欢|verbs|64
أَذْهَبُ|je vais|我去|verbs|64
أَكْتُبُ|j'écris|我写|verbs|64
تَكْتُبُ|tu écris (masculin), elle écrit|你写（男），她写|verbs|64
تَكْتُبِينَ|tu écris (féminin)|你写（女）|verbs|64
يَكْتُبُ|il écrit|他写|verbs|64
أَكَلْتُ|j'ai mangé|我吃了|verbs|65
تَكَلَّمْتُ|j'ai parlé|我说了|verbs|65
عَمِلْتُ|j'ai travaillé|我工作了|verbs|65
بِالضَّبْط|exactement|确切地说|phrases|65
رُزّ|riz|米饭|food|65
سَمَك|poisson|鱼|food|65
بَيْض|œufs|鸡蛋|food|65
عَصِير بُرْتُقَال|jus d'orange|橙汁|food|65
قَهْوَة بِالْحَلِيب|café au lait|牛奶咖啡|food|65
مَاذَا أَكَلْتَ هُنَاكَ؟|qu'as-tu mangé là-bas ?|你在那里吃了什么？|phrases|65
مَاذَا فَعَلْتَ فِي الْعُطْلَة؟|qu'as-tu fait pendant les vacances ?|假期你做了什么？|phrases|65
إِلَى الْجَنُوب|vers le sud|往南方|phrases|65
يَشْرَبُ|il boit|他喝|verbs|66
تَشْرَبُ|tu bois (masculin), elle boit|你喝（男），她喝|verbs|66
تَشْرَبِينَ|tu bois (féminin)|你喝（女）|verbs|66
أَشْرَبُ|je bois|我喝|verbs|66
يَجْلِسُ|il s'assoit|他坐下|verbs|66
يَدْخُلُ|il entre|他进入|verbs|66
دَخَلْتُ|je suis entré|我进去了|verbs|66
دَخَلْتَ|tu es entré (masculin)|你进去了（男）|verbs|66
دَخَلْتِ|tu es entrée (féminin)|你进去了（女）|verbs|66
دَخَلَتْ|elle est entrée|她进去了|verbs|66
سَيَّارَة|voiture|汽车|travel|67
بَعِيد|loin|远的|qualities|67
جَدِيدَة|nouvelle (féminin)|新的（阴性）|qualities|67
شَيْخ|vieux cheikh, maître|谢赫，长者|people|67
مَعْنًى|sens, signification|意思|concepts|67
عِنْدَ|chez, avoir|在……处，拥有|grammar|67
ذَهَبْتُ إِلَى الطَّبِيب|je suis allé chez le médecin|我去看医生了|phrases|67
هَلْ يُوجَدُ خُبْز؟|y a-t-il du pain ?|有面包吗？|phrases|67
الْخُبْزُ عَلَى الطَّاوِلَة|le pain est sur la table|面包在桌子上|phrases|67
شَرِبْتُ قَهْوَة|j'ai bu un café|我喝了一杯咖啡|phrases|67
دَرَسَ فِي الْمَدْرَسَة|il a étudié à l'école|他在学校学习了|phrases|67
هَلْ أَنْتَ طَالِب؟|tu es étudiant ? (masculin)|你是学生吗？（男）|phrases|67
ذَهَبْتُ إِلَى الْجَامِعَة|je suis allé à l'université|我去大学了|phrases|67
دَرَسْتُ الْعَرَبِيَّة|j'ai étudié l'arabe|我学习了阿拉伯语|phrases|67
سَكَنْتُ فِي بَارِيس|j'ai habité à Paris|我住过巴黎|phrases|67
لَمْ أَشْرَبِ النَّبِيذَ وَلَكِنْ شَرِبْتُ عَصِيرَ الْبُرْتُقَال|je n'ai pas bu de vin mais du jus d'orange|我没喝葡萄酒，而喝了橙汁|phrases|67
دَرَسْتَ|tu as étudié (masculin)|你学习了（男）|verbs|70
دَرَسْتِ|tu as étudié (féminin)|你学习了（女）|verbs|70
دَرَسَتْ|elle a étudié|她学习了|verbs|70
دَرَسْنَا|nous avons étudié|我们学习了|verbs|70
يَدْرُسُ|il étudie|他学习|verbs|70
تَدْرُسُ|tu étudies (masculin), elle étudie|你学习（男），她学习|verbs|70
تَدْرُسِينَ|tu étudies (féminin)|你学习（女）|verbs|70
نَدْرُسُ|nous étudions|我们学习|verbs|70
طَبَخَ|il a cuisiné|他做饭了|verbs|70
أَطْبُخُ|je cuisine|我做饭|verbs|70
يَطْبُخُ|il cuisine|他做饭|verbs|70
دَجَاجَات|poulets|鸡（复数）|food|70
قِطَار|train|火车|travel|70
دَرْس|leçon|课|school|70
عَرْض|exposé|报告，展示|school|70
مَتْحَف|musée|博物馆|places|72
تَارِيخ|histoire (discipline)|历史|school|72
سِينَمَا|cinéma|电影院，电影|places|72
بَدَأَ|il a commencé|他开始了|verbs|72
نِهَايَة الأُسْبُوع|week-end|周末|time|72
وَصَلْتُ|je suis arrivé|我到了|verbs|72
سَافَرْتُ|j'ai voyagé|我旅行了|verbs|72
فَرِح|heureux|快乐的|qualities|72
اِشْتَرَيْتُ|j'ai acheté|我买了|verbs|72
لَمْ أَشْتَرِ|je n'ai pas acheté|我没有买|verbs|72
قَرَأْتُ|j'ai lu|我读了|verbs|72
نَسِيتُ|j'ai oublié|我忘了|verbs|72
بَقِيتُ|je suis resté|我留下了|verbs|72
كُلّ يَوْم|chaque jour|每天|time|72
ثَلَاثَة أَيَّام|trois jours|三天|time|72
بِالْقُرْب مِنَ الْبَحْر|à côté de la mer|在海边附近|phrases|72
مَرْحَبًا|bonjour, salut|你好|phrases|74
أَهْلًا وَسَهْلًا|bienvenue, salut|欢迎，你好|phrases|74
جَيِّد|bien, bon|好的|qualities|74
تَفَضَّلِي|je t'en prie (féminin)|请（对女性）|phrases|74
مَا فَهِمْتُ|je n'ai pas compris|我没听懂|phrases|74
تَرْجَمَ|il a traduit|他翻译了|verbs|74
تَرْجَمِي|traduis ! (féminin)|请翻译（对女性）|verbs|74
لَوْ سَمَحْتَ|s'il te plaît (masculin)|请（对男性）|phrases|74
أَعِدْ|répète ! (masculin)|请重复（对男性）|phrases|74
أَعِيدِي|répète ! (féminin)|请重复（对女性）|phrases|74
كَيْفَ تَقُولُ؟|comment dit-on ?|怎么说？|phrases|74
يَعْنِي|cela signifie|意思是|grammar|74
اِسْتِرَاحَة|pause|休息|time|74
أَنَا بَلْجِيكِيّ|je suis belge (masculin)|我是比利时人（男）|people|74
سُوَيْسِرِيّ|suisse (masculin)|瑞士人（男）|people|74
بَلْجِيكِيَّة|belge (féminin)|比利时人（女）|people|74
سُوَيْسِرِيَّة|suisse (féminin)|瑞士人（女）|people|74
تَكَلَّمَ|il a parlé|他说话了|verbs|74
أَتَكَلَّمُ شُوَيَّة|je parle un peu|我会说一点儿|phrases|74
مَا مَعْنَى هَذَا؟|qu'est-ce que cela signifie ?|这是什么意思？|phrases|74
نِيكُولَا|Nicolas (prénom)|尼古拉（人名）|people|73
مَارِي|Marie (prénom)|玛丽（人名）|people|73
جِيل|Gilles (prénom)|吉尔（人名）|people|73
كْلُوي|Chloé (prénom)|克洛伊（人名）|people|73
مِيشِيل|Michèle (prénom)|米歇尔（人名）|people|73
مَارْك|Marc (prénom)|马克（人名）|people|73
كَاتْرِين|Catherine (prénom)|卡特琳（人名）|people|73
نِينَا|Nina (prénom)|妮娜（人名）|people|73
مَاكْسِيم|Maxime (prénom)|马克西姆（人名）|people|73
كْلِير|Claire (prénom)|克莱尔（人名）|people|73
حِوَار|dialogue|对话|school|70
دَرْس|leçon|课|school|70
وَاحِد|un|一|numbers|70
جَبَل|montagne|山|nature|70
خُبْز|pain|面包|food|70
بَحْر|la mer|大海|nature|70
طَالِب|étudiant|学生（男）|school|70
طُلَّاب|étudiants|学生们|school|70
يُوجَد|il y a|有|grammar|70
شَارِع|rue|街道|places|70
سَيَّارَة|voiture|汽车|travel|70
صَدِيق|ami|朋友|people|70
خُضَار|légumes|蔬菜|food|70
صَغِير|petit|小的|qualities|70
بَاب|porte|门|home|70
زَيْت|huile|油|food|70
وَلَد|enfant / garçon|男孩，孩子|family|70
دَرَسَ|il a étudié|他学习了|verbs|70
خَرَجَ|il est sorti|他出去了|verbs|70
شَرِبَ|il a bu|他喝了|verbs|70
مَعْنًى|sens|意思|concepts|70
فَعَلَ|faire|做|verbs|70
لَذِيذ|délicieux|好吃的|qualities|70
طَبَخَ|cuisiner|做饭|verbs|70
دَجَاجَات|poulets|鸡（复数）|food|70
مَا|quel est|什么是|questions|70
عِنْدِي|j'ai|我有|grammar|70
مَتَى|quand|什么时候|questions|70
كَيْفَ|comment|怎样|questions|70
عَرْض|exposé|报告，展示|school|70
قِطَار|train|火车|travel|70
بَيْت|maison|房子|home|70
يَد|main|手|body|70
حَلِيب|lait|牛奶|food|70
دَار|maison|房屋|home|19
زَارَ|il a visité|他拜访了|verbs|19
وَلَد|garçon|男孩|family|19
يَزُورُ|il visite|他拜访|verbs|19
وَادِي|vallée|山谷|nature|19
وَ|et|和|grammar|19
زَاي|lettre zāy|阿拉伯字母 ز 的名称|school|19
يَدِي|ma main|我的手|body|19
وَلَدِي|mon fils|我的儿子|family|19
لَوْز|amande|杏仁|food|19
وَزِير|ministre|部长|people|19
يُرِيدُ|il veut|他想要|verbs|19
رُزّ|riz|大米|food|19
كُلّ شَيْء تَمَام|tout va bien|一切都好|phrases|13
يَا أُسْتَاذ|monsieur le professeur !|老师！|phrases|13
أُحِبُّ اللُّغَة الْعَرَبِيَّة|j'aime la langue arabe|我喜欢阿拉伯语|phrases|13
كَيْفَ نَقُولُ؟|comment dit-on ?|怎么说？|phrases|13
تَسْكُنُ|tu habites|你住|verbs|13
عَرْض|exposé|报告，展示|school|36
سَاعَة|heure|小时|time|36
عُطْلَة|vacances|假期|time|36
شَارِع|rue|街道|places|36
شَرِيعَة|loi islamique|伊斯兰教法|concepts|36
بَيَّاع|vendeur|售货员|people|36
تَارِيخ|date, histoire|日期，历史|time|36
طَارِق|Tariq (prénom)|塔里克（人名）|people|36
سَعِيد|heureux|高兴的|qualities|36
فِي|dans|在……里|grammar|36
رِيف|campagne|乡村|places|36
فَعَلْتَ|tu as fait (masculin)|你做了（男）|verbs|36
قَالَ|il a dit|他说了|verbs|36
صَدِيق|ami|朋友|people|36
قِطَار|train|火车|travel|36
حَلِيب|lait|牛奶|food|37
حِوَار|dialogue|对话|school|37
ثَلْج|neige|雪|nature|37
دَرَسَ|il a étudié|他学习了|verbs|37
طَالِب|étudiant|学生（男）|school|37
صَعْب|difficile|难的|qualities|37
قَالَ صَدِيقِي|mon ami a dit|我的朋友说了|phrases|37
بَعْدَ سَاعَة|après une heure|一小时以后|time|37
فِي الْعُطْلَة|pendant les vacances|在假期里|phrases|37
سَافَرْتُ بِالْقِطَار|j'ai voyagé en train|我乘火车旅行了|phrases|37
شَرِبْتُ عَصِيرَ بُرْتُقَال|j'ai bu du jus d'orange|我喝了橙汁|phrases|37
لَازِم|nécessaire|必要的|qualities|39
خَلَاص|ça suffit, c'est fini|够了，结束了|phrases|39
كِلَاب|chiens|狗（复数）|nature|39
كُلّ|tout, chaque|所有，每个|grammar|39
لَا يَعْرِفُ|il ne sait pas|他不知道|phrases|39
طُلَّاب|étudiants|学生们|school|39
بَلَد|pays|国家|places|39
بِلَاد|pays (pluriel)|国家（复数）|places|39
تَفَضَّل|je t'en prie|请，请进|phrases|39
لَطِيفَة|gentille (féminin)|友善的（女）|qualities|39
دَفْتَر|cahier|练习本|school|39
نَصّ|texte|课文，文本|school|44
تَفَضَّل|je t'en prie|请，请进|phrases|44
سَاعَة|heure|小时|time|44
مُنْذُ|depuis|自从|grammar|44
عِنْدِي|j'ai|我有|grammar|44
وَلَكِنْ|mais|但是|grammar|44
مَعَ|avec|和……一起|grammar|44
مُشْكِلَة|problème|问题|concepts|44
فَنْدَق|hôtel|旅馆|travel|44
مُمْتَاز|excellent|极好的|qualities|44
فَرَنْسِيَّة|française (féminin)|法国的（女）|people|44
سَلَام|paix|和平|concepts|44
شَاي|thé|茶|food|44
يَوْم|jour|日，天|time|44
مَدْرَسَة|école|学校|school|45
عُطْلَة|vacances|假期|time|45
حَلِيب|lait|牛奶|food|45
تَمْرِين|exercice|练习|school|45
هُنَا|ici|这里|places|45
كُنْتُ|j'étais|我曾是／我当时在|verbs|45
مَنْ|qui ?|谁？|questions|45
مِنْ|de, depuis|从，属于|grammar|45
مَاذَا|qu'est-ce que ?|什么？|questions|45
هَلْ|est-ce que ?|是否？|questions|45
مَطْعَم|restaurant|餐馆|places|45
شَمَال|nord|北方|places|45
جَنُوب|sud|南方|places|45
عُنْوَان|adresse, titre|地址，标题|concepts|45
مَتْحَف|musée|博物馆|places|45
مَعْرِض|exposition|展览|concepts|45
ذَهَبَ|il est allé|他去了|verbs|45
فَهِمَ|il a compris|他理解了|verbs|45
وَصَلَ|il est arrivé|他到达了|verbs|45
إِلَى|vers, à|向，到|grammar|50
عَلَى|sur|在……上|grammar|50
اِشْتَرَى|il a acheté|他买了|verbs|50
اِلْتَقَى|il a rencontré|他遇见了|verbs|50
أَبْقَى|je reste|我留下|verbs|50
مَشَى|il a marché|他走了|verbs|50
رَأَى|il a vu|他看见了|verbs|50
إِلَيْكَ|vers toi (masculin)|向你（男）|grammar|50
عَلَيْكُمْ|sur vous (pluriel)|在你们身上|grammar|50
اِشْتَرَيْتُ|j'ai acheté|我买了|verbs|50
اِلْتَقَيْتُ|j'ai rencontré|我遇见了|verbs|50
بَقِيتُ|je suis resté|我留下了|verbs|50
مَشَيْتُ|j'ai marché|我走了|verbs|50
رَأَيْتُ|j'ai vu|我看见了|verbs|50
آسِف|désolé|抱歉|phrases|50
الآن|maintenant|现在|time|50
أَب|père|父亲|family|50
آب|août|八月|time|50
لِأَنَّ|parce que|因为|grammar|51
الْجَزَائِر|Algérie|阿尔及利亚|places|51
أَسْئِلَة|questions|问题（复数）|school|51
مُتَأَخِّر|en retard|迟到的|qualities|51
أُسْتَاذ|professeur|老师|people|51
سَمَاء|ciel|天空|nature|51
مَسَاء|soir|晚上|time|51
أَشْيَاء|choses|东西（复数）|concepts|51
شَيْء|chose|东西|concepts|51
مَكْتَبَة|bibliothèque|图书馆|places|51
مِئَة|cent|一百|numbers|51
كَأْس|verre|杯子|home|51
سَأَلَ|il a demandé|他问了|verbs|51
إِذَنْ|donc|那么，因此|grammar|51
مَعْنًى|sens|意思|concepts|51
لَيْلَى|Leïla (prénom)|莱拉（人名）|people|51
مَتَى|quand|什么时候|questions|51
حَتَّى|jusqu'à|直到|grammar|51
جِئْتُ|je suis venu|我来了|verbs|52
لَا أَعْرِفُ|je ne sais pas|我不知道|phrases|52
قَرَأَ|il a lu|他读了|verbs|52
اِجْتِمَاع|réunion|会议|concepts|52
جَاءَ|il est venu|他来了|verbs|52
أَيْنَ الْمَطْعَم؟|où est le restaurant ?|餐馆在哪里？|phrases|52
ذَهَبَ إِلَى الْمَقْهَى|il est allé au café|他去了咖啡馆|phrases|52
قَلِيلًا|un peu|一点儿|grammar|60
كَثِيرًا|beaucoup|很多|grammar|60
أَبَدًا|jamais|从不|grammar|60
أَيْضًا|aussi|也|grammar|60
طَبْعًا|bien sûr|当然|grammar|60
دَائِمًا|toujours|总是|grammar|60
عَفْوًا|pardon|对不起，不客气|phrases|60
شُكْرًا|merci|谢谢|phrases|60
يَدْرُسُ دَرْسًا|il étudie une leçon|他学习一课|phrases|61
يَكْتُبُ كِتَابًا|il écrit un livre|他写一本书|phrases|61
كَتَبَ الطَّالِبُ الدَّرْسَ عَلَى الدَّفْتَرِ|l'étudiant a écrit la leçon dans le cahier|学生在本子上写下了课文|phrases|61
جَبْر|algèbre|代数学|concepts|61
سُلْطَان|sultan|苏丹|people|61
كُحُول|alcool|酒精|concepts|61
كُورْد|Kurdes|库尔德人|people|61
بَرْلَمَان|parlement|议会|concepts|61
أَرْخَبِيل|archipel|群岛|nature|61
قُنْصُلِيَّة|consulat|领事馆|places|61
سِينَمَا|cinéma|电影院，电影|concepts|61
غَزَال|gazelle|瞪羚|nature|61
أَمِير الْبَحْر|amiral|海军上将|people|61
مُوسِيقَى|musique|音乐|concepts|61
تِلِفِزْيُون|télévision|电视|home|61
فَيْلَسُوف|philosophe|哲学家|people|61
دِبْلُومَاسِيَّة|diplomatie|外交|concepts|61
فَرَنْسَا|France|法国|places|73
أَلْمَانْيَا|Allemagne|德国|places|73
سُوَيْسْرَا|Suisse|瑞士|places|73
إِسْبَانْيَا|Espagne|西班牙|places|73
الْبُرْتُغَال|Portugal|葡萄牙|places|73
إِيطَالْيَا|Italie|意大利|places|73
رُومَانْيَا|Roumanie|罗马尼亚|places|73
رُوسْيَا|Russie|俄罗斯|places|73
أُوكْرَانْيَا|Ukraine|乌克兰|places|73
الْيُونَان|Grèce|希腊|places|73
تُرْكِيَا|Turquie|土耳其|places|73
جَزِيرَة كُورْسِيكَا|Corse|科西嘉岛|places|73
الْبَحْر الْأَسْوَد|mer Noire|黑海|nature|73
الْبَحْر الْمُتَوَسِّط|mer Méditerranée|地中海|nature|73
الْمَغْرِب|Maroc|摩洛哥|places|73
الْجَزَائِر|Algérie|阿尔及利亚|places|73
تُونِس|Tunisie|突尼斯|places|73
لِيبِيَا|Libye|利比亚|places|73
مِصْر|Égypte|埃及|places|73
مُورِيتَانْيَا|Mauritanie|毛里塔尼亚|places|73
مَالِي|Mali|马里|places|73
النِّيْجَر|Niger|尼日尔|places|73
تْشَاد|Tchad|乍得|places|73
السُّودَان|Soudan|苏丹|places|73
جَنُوب السُّودَان|Soudan du Sud|南苏丹|places|73
إِثْيُوبْيَا|Éthiopie|埃塞俄比亚|places|73
الصُّومَال|Somalie|索马里|places|73
سُورِيَا|Syrie|叙利亚|places|73
لُبْنَان|Liban|黎巴嫩|places|73
الْأُرْدُنّ|Jordanie|约旦|places|73
فِلَسْطِين|Palestine|巴勒斯坦|places|73
الْعِرَاق|Irak|伊拉克|places|73
إِيرَان|Iran|伊朗|places|73
الْمَمْلَكَة الْعَرَبِيَّة السُّعُودِيَّة|Arabie saoudite|沙特阿拉伯|places|73
الْإِمَارَات الْعَرَبِيَّة الْمُتَّحِدَة|Émirats arabes unis|阿拉伯联合酋长国|places|73
عُمَان|Oman|阿曼|places|73
الْيَمَن|Yémen|也门|places|73
الْبَحْر الْأَحْمَر|mer Rouge|红海|nature|73
خُبْز|pain|面包|food|25
تَحْت|sous, en-dessous|在……下面|grammar|25
دَرْس|leçon|课|school|25
ثَلْج|neige|雪|nature|25
شَرِبَ|il a bu|他喝了|verbs|25
وَاحِد|un|一|numbers|25
وَحِيد|seul|独自的|qualities|25
دَجَاج|poulet|鸡肉，鸡|food|25
شَاي|thé|茶|food|25
دَخَلَ|il est entré|他进去了|verbs|25
يَدْخُلُ|il entre|他进入|verbs|25
الْحَال|état, situation|状况|concepts|25
بِخَيْر|bien|好，安好|phrases|25
تَارِيخ|date, histoire|日期，历史|time|25
الْجَبْر|algèbre|代数学|concepts|25
جِسْر سِيدِي رَاشِد|pont Sidi Rached|西迪·拉希德桥|places|25
حَبَّ|il a aimé|他喜欢了|verbs|27
سَيِّد|monsieur|先生|people|27
خَبَّرَ|il a informé|他告诉了|verbs|27
دَخَّلَ|il a fait entrer|他让人进入了|verbs|27
حَجَّ|il a fait le pèlerinage|他朝觐了|verbs|27
رَدَّدَ|il a répété|他重复了|verbs|27
طَيِّب|bon, gentil|好的，善良的|qualities|32
طَبِيب|médecin|医生|people|32
طَلَبَ|il a demandé|他请求了|verbs|32
طَالِب|étudiant|学生（男）|school|32
طَبَخَ|il a cuisiné|他做饭了|verbs|32
شُرْطِيّ|policier|警察|people|32
حَظّ|chance|运气|concepts|32
الرِّبَاط|Rabat|拉巴特|places|32
بَيْضَة|un œuf|一枚鸡蛋|food|33
ثَوْرَة|révolution|革命|concepts|33
جَزِيرَة|île|岛屿|nature|33
سِتَّة|six|六|numbers|33
سَادَة|messieurs|先生们|people|33
حَيَاة|vie|生命|concepts|33
طَاوِلَة|table|桌子|home|33
جَرِيدَة|journal|报纸|concepts|33
حَبِيبَة|chérie|亲爱的（女）|people|33
حَبِيبَتِي|ma chérie|我的亲爱的（女）|phrases|33
جَدِيدَة|nouvelle (féminin)|新的（女）|qualities|33
بِدَايَة|début|开始|concepts|33
نَجَاة|Najat (prénom)|娜贾特（人名）|people|33
زَوْجَة|épouse|妻子|family|34
خَطِيبَة|fiancée|未婚妻|family|34
جَيِّدَة|bonne (féminin)|好的（女）|qualities|34
وَسَط|milieu|中间|places|34
صَبَّ|il a versé|他倒了|verbs|34
طَيْر|oiseau|鸟|nature|34
جَوَازِي|mon passeport|我的护照|travel|34
دَرَّسَ|il a enseigné|他教了|verbs|34
سَيِّدَة|madame|女士|people|34
خَبَّاز|boulanger|面包师|people|34
سَاحَة التَّحْرِير|place Tahrir|解放广场|places|34
أَوْ|ou|或者|grammar|54
دَرَّاجَة|vélo|自行车|travel|54
حَدِيقَة|jardin|花园|places|54
مَرِيض|malade|生病的|qualities|54
بِحَاجَة إِلَى|avoir besoin de|需要|phrases|54
فِي|dans, à|在……里|grammar|54
سَأَبْقَى|je resterai|我将留下|verbs|54
تِجَارَة|commerce|商业|concepts|54
الْجُبْنَة|fromage|奶酪|food|54
كَذَّاب|menteur|说谎者|people|54
بِلَاد|pays (pluriel)|国家（复数）|places|54
حَزِين|triste|伤心的|qualities|54
سَمَك|poisson|鱼|food|54
سَعِيد|content|高兴的|qualities|54
قَصِير|court|短的|qualities|54
طَوِيل|long|长的|qualities|54
النَّاس|les gens|人们|people|54
مَقْهَى|café (lieu)|咖啡馆|places|54
أَيَّام|des jours|日子（复数）|time|54
بُرُوكْسِيل|Bruxelles|布鲁塞尔|places|54
بَرْلِين|Berlin|柏林|places|54
دُبَي|Dubaï|迪拜|places|54
إِسْبَانْيَا|Espagne|西班牙|places|54
عِنْدِي|j'ai|我有|grammar|54
عِنْدَكَ|tu as (masculin)|你有（男）|grammar|54
عِنْدَكِ|tu as (féminin)|你有（女）|grammar|54
عِنْدَهُ|il a|他有|grammar|54
الْبَارِحَة|hier|昨天|time|54
الْمُدِيرَة|directrice|女主任|people|54
الآن|maintenant|现在|time|54
سَيِّئ|mauvais|坏的|qualities|54
مُمْكِن|possible|可能的|qualities|54
صَدِيقِي|mon ami|我的朋友|people|54
أَصْدِقَائِي|mes amis|我的朋友们|people|54
مُمْتَاز|excellent|极好的|qualities|54
الْمَطَار|aéroport|机场|travel|54
الْمُعَلِّمَة|enseignante|女教师|people|54
بَعِيد عَنْ|loin de|远离|grammar|54
قَرِيب مِنْ|près de|靠近|grammar|54
وِزَارَة|ministère|政府部门，部|places|54
سِفَارَة|ambassade|大使馆|places|54
خَلَاص|ça suffit|够了|phrases|54
لُكْسَمْبُورْغ|Luxembourg|卢森堡|places|54
جِنِيف|Genève|日内瓦|places|54
لَنْدَن|Londres|伦敦|places|54
كَنَدَا|Canada|加拿大|places|54
سُوق|marché|市场|places|65
تَوَابِل|épices|香料|food|65
سُوق التَّوَابِل|marché aux épices|香料市场|places|65
وَسَط|centre, milieu|中间，中心|places|65
شُوَيَّة|un peu|一点儿|grammar|65
بِالضَّبْط|exactement|正是，确切地|phrases|65
أَكَلْتُ|j'ai mangé|我吃了|verbs|65
شَرِبْتُ|j'ai bu|我喝了|verbs|65
مَاذَا فَعَلْتَ؟|qu'as-tu fait ?|你做了什么？（男）|phrases|65
أَيْنَ بِالضَّبْط؟|où exactement ?|具体在哪里？|phrases|65
عِنْدَكَ بَيْت هُنَاكَ؟|as-tu une maison là-bas ?|你在那里有房子吗？|phrases|65
مَا عِنْدِي بَيْت هُنَاكَ|je n'ai pas de maison là-bas|我在那里没有房子|phrases|65
أَيْضًا|aussi|也|grammar|67
جَاءَ|il est venu|他来了|verbs|67
صَدِيق|ami|朋友|people|67
مَدْرَسَة|école|学校|school|67
جِئْتُ|je suis venu|我来了|verbs|67
شَخْص|personne|人|people|67
شَارِع|rue|街道|places|67
بِلَاد|pays (pluriel)|国家（复数）|places|67
وَصَلَ|il est arrivé|他到达了|verbs|67
حِوَار|dialogue|对话|school|67
طَائِرَة|avion|飞机|travel|67
سَيَّارَة|voiture|汽车|travel|67
سَنَة|année|年|time|67
خُبْز|pain|面包|food|67
جَدِيدَة|nouvelle (féminin)|新的（女）|qualities|67
زَيْت|huile|油|food|67
بَعِيد|loin|远的|qualities|67
بَلَد|pays|国家|places|67
شَيْخ|cheikh, maître|长者，谢赫|people|67
مَعْنًى|sens|意思|concepts|67
عِنْدَ|chez, avoir|在……那里，有|grammar|67
بَاب|porte|门|home|21
بَلَد|pays|国家|places|21
بَيْت|maison|房子|home|21
زَيْت|huile|油|food|21
بَلَدِيَّة|mairie, municipalité|市政府|places|21
تَلّ|colline|小山丘|nature|20
بِيتْزَا|pizza|披萨|food|20
بَرْد|froid|寒冷|nature|20
ثِيَاب|vêtements|衣服（复数）|home|20
تُوت|mûre|桑葚|food|20
بَلَد|pays|国家|places|20
نَعَم|oui|是|phrases|13
لَا|non|不|phrases|13
جَيِّد|bien|好的|qualities|13
تَمَام|bien, ça va|好，没问题|phrases|13
تَفَضَّل|tiens, entrez|请，请进|phrases|13
شُكْرًا جَزِيلًا|merci beaucoup|非常感谢|phrases|13
عِنْدِي سُؤَال|j'ai une question|我有一个问题|phrases|13
بِخَيْر|bien|好，安好|phrases|13
نَسِيتُ|j'ai oublié|我忘了|verbs|13
تَشَرَّفْنَا|enchanté|幸会|phrases|13
مَعَ السَّلَامَة|au revoir|再见|phrases|13
أَسْكُنُ|j'habite|我住|verbs|13
أَعْمَلُ|je travaille|我工作|verbs|13
أَتَكَلَّمُ|je parle|我说话|verbs|13
يُوجَد|il y a|有|grammar|23
جَبَل|montagne|山|nature|23
حِوَار|dialogue|对话|school|23
وَاحِد|un|一|numbers|23
بَحْر|mer|大海|nature|23
زَوْج|époux|丈夫|family|23
وَحِيد|seul|独自的|qualities|23
دَجَاج|poulet|鸡肉，鸡|food|23
الْحَال|état, situation|状况|concepts|23
بِخَيْر|bien|好，安好|phrases|23
بُرْج|tour|塔|places|23
تَاج|couronne|王冠|concepts|23
خَالِي|mon oncle maternel|我的舅舅|family|23
جَارِي|mon voisin|我的邻居|people|23
حَبِيبِي|mon chéri|我亲爱的（男）|phrases|23
حَبِيبَتِي|ma chérie|我的亲爱的（女）|phrases|23
كُلُّهُ تَمَام|tout va bien|一切都好|phrases|23
مَا مَعْنَى؟|que signifie ?|是什么意思？|questions|23
تَرْجِمْ|traduis ! (masculin)|请翻译（对男性）|verbs|23
تَفَضَّلِي|je t'en prie (féminin)|请（对女性）|phrases|23
مِنْ فَضْلِكَ|s'il te plaît (masculin)|请（对男性）|phrases|23
لَا أَعْرِفُ|je ne sais pas|我不知道|phrases|23
لَوْ سَمَحْتَ|s'il te plaît (masculin)|请（对男性）|phrases|23
أَمِير الْبَحْر|amiral|海军上将|people|23
شَاي|thé|茶|food|24
يَسَار|gauche|左边|places|24
بَارِيس|Paris|巴黎|places|24
شَيْخ|cheikh, maître|长者，谢赫|people|24
دَرَسَ|il a étudié|他学习了|verbs|24
دَرَسْتُ|j'ai étudié|我学习了|verbs|24
شَرِبَ|il a bu|他喝了|verbs|24
بَاب الْبَحْر|porte de la mer|海门（地名）|places|24
بَاب زُحْل|porte de Saturne|土星门（地名）|places|24
دَرَسَ|il a étudié|他学习了|verbs|26
دَرَسْتُ|j'ai étudié|我学习了|verbs|26
خَرَجَ|il est sorti|他出去了|verbs|26
خَرَجْتُ|je suis sorti|我出去了|verbs|26
دَخَلَ|il est entré|他进去了|verbs|26
دَخَلْتُ|je suis entré|我进去了|verbs|26
سَحَبَ|il a tiré|他拉了|verbs|26
سَحَبْتُ|j'ai tiré|我拉了|verbs|26
شَرِبَ|il a bu|他喝了|verbs|26
شَرِبْتُ|j'ai bu|我喝了|verbs|26
يَسَار|gauche|左边|places|26
بِخَيْر|bien|好，安好|phrases|26
حِوَار|dialogue|对话|school|26
بَحْر|mer|大海|nature|26
جَبَل|montagne|山|nature|26
خُبْز|pain|面包|food|26
وَاحِد|un|一|numbers|26
بَاب|porte|门|home|26
بَلَد|pays|国家|places|26
زُرْتُ|j'ai visité|我参观了|verbs|26
بَيْت|maison|房子|home|26
زَيْت|huile|油|food|26
وَحِيد|seul|独自的|qualities|26
بَاص|bus|公共汽车|travel|29
شَخْص|personne|人|people|29
خُضَار|légumes|蔬菜|food|29
رَخِيص|pas cher|便宜的|qualities|29
وَصَلَ|il est arrivé|他到达了|verbs|29
بَيْض|œufs|鸡蛋|food|29
جَزَر|carotte|胡萝卜|food|29
خِيَار|concombre|黄瓜|food|29
بَطَاطَا|pommes de terre|土豆|food|29
الْعَرَبِيَّة|l'arabe|阿拉伯语|school|35
لَعِبَ|il a joué|他玩了|verbs|35
عَرْض|exposé, exposition|报告，展览|school|35
شَارِع|rue|街道|places|35
صَعْب|difficile|难的|qualities|35
صَغِير|petit|小的|qualities|35
عَبْد|serviteur, Abd|仆人；阿卜德（人名）|people|35
بَعِيد|loin|远的|qualities|35
بَاب الْوَزِير|porte du ministre|大臣门（地名）|places|35
جَيِّد|bien|好的|qualities|28
خَبَّاز|boulanger|面包师|people|28
حُجَّاج|pèlerins|朝觐者们|people|28
دَرَّسَ|il a enseigné|他教了|verbs|28
بَحْر|mer|大海|nature|28
بَحَّار|marin|水手|people|28
الَّذِي|qui (masculin, relatif)|……的那个（阳性关系代词）|grammar|28
الَّتِي|qui (féminin, relatif)|……的那个（阴性关系代词）|grammar|28
حَلِيب|lait|牛奶|food|28
كَيْفَ|comment ?|怎样？|questions|38
يَقُولُ|il dit|他说|verbs|38
رَكِبَ|il est monté|他骑上了|verbs|38
حِكَايَة|histoire, conte|故事|school|38
كَلْب فِي الْجَبَل|un chien dans la montagne|山里的狗|phrases|38
الْعِيد الْكَبِير|la grande fête|宰牲节（大节）|time|38
الْعِيد الصَّغِير|la petite fête|开斋节（小节）|time|38
عِيد الْفِطْر|fête de la rupture du jeûne|开斋节|time|38
كَبِير|grand|大的|qualities|38
كَاتِب|écrivain|作家|people|38
كَتَبَ|il a écrit|他写了|verbs|38
كَلْب|chien|狗|nature|38
كَبِير|grand|大的|qualities|40
كِتَاب|livre|书|school|40
خِلَال|pendant, durant|在……期间|grammar|40
شُرْطِيّ|policier|警察|people|40
يَقُولُ|il dit|他说|verbs|40
يَعْرِفُ|il sait|他知道|verbs|40
يَكْتُبُ|il écrit|他写|verbs|40
دَخَلْتُ|je suis entré|我进去了|verbs|40
كَتَبْتُ|j'ai écrit|我写了|verbs|40
كَيْفَ|comment ?|怎样？|questions|40
حَال|état, situation|状况|concepts|40
بِخَيْر|bien|好，安好|phrases|40
بَلَدِيَّة|mairie, municipalité|市政府|places|40
طَاوِلَة|table|桌子|home|40
سُكَّر|sucre|糖|food|40
كَذَّاب|menteur|说谎者|people|40
طَوِيل|long|长的|qualities|40
قَصِير|court|短的|qualities|40
قَرِيب|proche|近的|qualities|40
بَعِيد|loin|远的|qualities|40
فَقَط|seulement|只，仅|grammar|40
دَرَسْتُ|j'ai étudié|我学习了|verbs|41
دَرَسْتَ|tu as étudié (masculin)|你学习了（男）|verbs|41
دَرَسْتِ|tu as étudié (féminin)|你学习了（女）|verbs|41
دَرَسَ|il a étudié|他学习了|verbs|41
دَرَسَتْ|elle a étudié|她学习了|verbs|41
كَتَبْتُ|j'ai écrit|我写了|verbs|41
كَتَبْتَ|tu as écrit (masculin)|你写了（男）|verbs|41
كَتَبْتِ|tu as écrit (féminin)|你写了（女）|verbs|41
كَتَبَ|il a écrit|他写了|verbs|41
كَتَبَتْ|elle a écrit|她写了|verbs|41
كَيْفَ الْحَالُ؟|comment ça va ?|你好吗？|phrases|41
جَوَاز|passeport|护照|travel|41
حِمَار|âne|驴|nature|41
كُلّ|tout|全部，每个|grammar|41
يُوجَد|il y a|有|grammar|41
يَقُولُ|il dit|他说|verbs|41
كَلَام|parole, discours|话语|concepts|42
مَطْعَم|restaurant|餐馆|places|42
قَمَر|lune|月亮|nature|42
جَامِعَة|université|大学|school|42
لَحْم|viande|肉|food|42
سَلَام|paix|和平|concepts|42
مَعَ|avec|和……一起|grammar|42
تَكَلَّمَ|il a parlé|他说话了|verbs|42
يَوْم|jour|日，天|time|42
شَمْس|soleil|太阳|nature|42
مَا|quel est ?|什么是？|questions|42
سَنَة|année|年|time|42
عِنْدَ|chez, avoir|在……那里，有|grammar|42
نَصّ|texte|课文，文本|school|42
صَابُون|savon|肥皂|home|42
جَنُوب|sud|南方|places|42
مُنْذُ|depuis|自从|grammar|42
صَيْف|été|夏天|time|42
حَمَّام|bain, hammam|浴室，土耳其浴|places|42
السِّفَارَة الْفَرَنْسِيَّة|ambassade de France|法国大使馆|places|42
دَرَسْنَا|nous avons étudié|我们学习了|verbs|44
دَخَلْتُ|je suis entré|我进去了|verbs|44
دَخَلْنَا|nous sommes entrés|我们进去了|verbs|44
نَصّ|texte|课文，文本|school|44
فَرَنْسِيَّة|française (féminin)|法国的（女）|people|44
شَاي|thé|茶|food|44
يَوْم|jour|日，天|time|44
الْمَتْحَف الْوَطَنِيّ|musée national|国家博物馆|places|45
فَاس|Fès|非斯|places|45
دِمَشْق|Damas|大马士革|places|45
تُونِس|Tunis|突尼斯城|places|45
وَهْرَان|Oran|奥兰|places|45
يَفْهَمُ|il comprend|他理解|verbs|46
سَلَام|paix|和平|concepts|46
يَعْمَلُ|il travaille|他工作|verbs|46
يَفْعَلُ|il fait|他做|verbs|46
لِمَاذَا|pourquoi ?|为什么？|questions|46
تَمْرِين|exercice|练习|school|46
نِهَايَة|fin|结尾|concepts|46
بِدَايَة|début|开始|concepts|46
تَعْبَان|fatigué|累的|qualities|46
لَا|non|不|phrases|46
هُوَ|il|他|grammar|46
هِيَ|elle|她|grammar|46
هُمْ|ils|他们|grammar|46
نَحْنُ|nous|我们|grammar|46
نَعَم|oui|是|phrases|46
شُوفْ|regarde ! (familier)|看！（口语）|verbs|46
ثُمَّ|puis, ensuite|然后|grammar|46
بَعْدَ|après|在……之后|grammar|46
جَنْب|à côté de|在旁边|grammar|46
عِنْدِي|j'ai|我有|grammar|46
دَار السَّلَام|Dar es Salaam|达累斯萨拉姆|places|46
شَرِبْتُ قَهْوَةً|j'ai bu un café|我喝了一杯咖啡|phrases|47
كُنْتُ فِي عُطْلَة|j'étais en vacances|我在度假|phrases|47
صَبَاح الْخَيْر|bonjour (le matin)|早上好|phrases|47
صَبَاح النُّور|bonjour (réponse)|早上好（回应）|phrases|47
تَعْبَان شُوَيَّة|un peu fatigué|有点累|phrases|47
كَيْفَ حَالُكَ؟|comment vas-tu ? (masculin)|你好吗？（男）|phrases|47
كُنْتُ فِي الْجَبَل|j'étais à la montagne|我在山里|phrases|47
جَبَل طَارِق|Gibraltar|直布罗陀|places|47
سَنَة حِلْوَة يَا جَمِيل|joyeux anniversaire|生日快乐|phrases|47
عِيد مِيلَاد سَعِيد|joyeux anniversaire|生日快乐|phrases|47
عِيد مِيلَاد مَجِيد|joyeux Noël|圣诞快乐|phrases|47
كُلّ عَام وَأَنْتَ بِخَيْر|bonne fête (masculin)|祝你节日快乐（男）|phrases|47
كُلّ سَنَة وَأَنْتَ طَيِّب|bonne fête (masculin)|祝你每年平安（男）|phrases|47
سَنَة سَعِيدَة|bonne année|新年快乐|phrases|47
أَب|père|父亲|family|48
أُمّ|mère|母亲|family|48
أُحِبُّ|j'aime|我喜欢|verbs|48
أُسْبُوع|semaine|星期|time|48
أَيْنَ|où ?|哪里？|questions|48
إِدَارَة|administration|行政管理|concepts|48
أَنْتِ|tu (féminin)|你（女）|grammar|48
أُرِيدُ|je veux|我想要|verbs|48
الْأُمَم الْمُتَّحِدَة|Nations unies|联合国|concepts|48
حِذَاء|chaussure|鞋|home|49
جَاءَ|il est venu|他来了|verbs|49
مَسَاء|soir|晚上|time|49
مَاء|eau|水|food|49
لِقَاء|rencontre|会面|concepts|49
أَنَا|je|我|grammar|49
أَدْرُسُ|j'étudie|我学习|verbs|49
أَصْدِقَاء|amis|朋友们|people|49
قَرَأَ|il a lu|他读了|verbs|49
سَأَلَ|il a demandé|他问了|verbs|49
أَمْس|hier|昨天|time|49
رَأْس|tête|头|body|49
أُسْرَتِي|ma famille|我的家人|family|49
أَكَلْتُ|j'ai mangé|我吃了|verbs|49
أَوْ|ou|或者|grammar|49
لَا أَعْرِفُ|je ne sais pas|我不知道|phrases|49
مَسْؤُول|responsable|负责人|people|49
سُؤَال|question|问题|school|49
كُؤُوس|verres|杯子（复数）|home|49
جِئْتُ|je suis venu|我来了|verbs|49
طَائِرَة|avion|飞机|travel|49
رَئِيس|président|总统，主席|people|49
شَاطِئ|plage|海滩|nature|49
اِسْم|nom|名字|concepts|49
اِجْتِمَاع|réunion|会议|concepts|49
اِسْتَقْبَلَ|il a reçu|他接待了|verbs|49
اِسْتَخْدَمَ|il a utilisé|他使用了|verbs|49
الْخُبْز|le pain|面包（特指）|food|55
الْمَاء|l'eau|水（特指）|food|55
مَكْتَب|bureau|办公室，书桌|school|55
الْمَكْتَب|le bureau|办公室（特指）|school|55
بِنْت|fille|女孩|family|55
الْبِنْت|la fille|女孩（特指）|family|55
وَلَد|garçon|男孩|family|55
الْوَلَد|le garçon|男孩（特指）|family|55
كُتُب|livres|书（复数）|school|55
الْكُتُب|les livres|书（复数，特指）|school|55
الْقَمَر|la lune|月亮（特指）|nature|55
الْكَأْس|le verre|杯子（特指）|home|55
الْعُطْلَة|les vacances|假期（特指）|time|55
الشَّمْس|le soleil|太阳（特指）|nature|55
السَّيَّارَة|la voiture|汽车（特指）|travel|55
الطَّالِب|l'étudiant|学生（特指）|school|55
الصَّدِيق|l'ami|朋友（特指）|people|55
خَرَجَ مِنَ الْبَيْت|il est sorti de la maison|他从房子里出来了|phrases|56
سَافَرْتُ مِنَ الرِّبَاط إِلَى الدَّار الْبَيْضَاء|j'ai voyagé de Rabat à Casablanca|我从拉巴特去了卡萨布兰卡|phrases|56
أَنْتُمْ طُلَّاب؟|êtes-vous des étudiants ?|你们是学生吗？|phrases|56
أَنْتُمُ الطُّلَّاب؟|êtes-vous les étudiants ?|你们是那些学生吗？|phrases|56
تَرْجِمِ الْجُمْلَة|traduis la phrase !|翻译这个句子！|phrases|56
هَلِ الْبَيْت كَبِير؟|est-ce que la maison est grande ?|房子大吗？|phrases|56
بِالضَّبْط|exactement|正是，确切地|phrases|56
الدَّرْس|la leçon|课（特指）|school|57
الْقَهْوَة|le café|咖啡（特指）|food|57
الْعُطْلَة|les vacances|假期（特指）|time|57
الطَّالِب|l'étudiant|学生（特指）|school|57
الْجَبَل|la montagne|山（特指）|nature|57
الْحَلِيب|le lait|牛奶（特指）|food|57
الْكِتَاب|le livre|书（特指）|school|57
الدَّفْتَر|le cahier|练习本（特指）|school|57
الْوِزَارَة|le ministère|部（特指）|places|57
اللِّقَاء|la rencontre|会面（特指）|concepts|57
الْبَارِحَة|hier|昨天|time|57
الشَّارِع|la rue|街道（特指）|places|57
الْمَكْتَب|le bureau|办公室（特指）|school|57
الْفُنْدُق|l'hôtel|旅馆（特指）|travel|57
السُّؤَال|la question|问题（特指）|school|57
الْعِيد|la fête|节日（特指）|time|57
مَعَ السَّلَامَة|au revoir|再见|phrases|57
الطَّاوِلَة|la table|桌子（特指）|home|57
الطَّائِرَة|l'avion|飞机（特指）|travel|57
مَسَاء الْخَيْر|bonsoir|晚上好|phrases|58
مَسَاء النُّور|bonsoir (réponse)|晚上好（回应）|phrases|58
جَوَاز سَفَر|passeport|护照|travel|58
عِنْدَكَ جَوَاز سَفَر؟|as-tu un passeport ?|你有护照吗？|phrases|58
لُبْنَان|Liban|黎巴嫩|places|58
صَيْف|été|夏天|time|58
حُمُّص|houmous|鹰嘴豆泥|food|58
تَبُّولَة|taboulé|塔布勒沙拉|food|58
مِسْكِين|pauvre, malheureux|可怜的|qualities|58
صِفْر|zéro|零|numbers|59
وَاحِد|un|一|numbers|59
اِثْنَان|deux|二|numbers|59
ثَلَاثَة|trois|三|numbers|59
أَرْبَعَة|quatre|四|numbers|59
خَمْسَة|cinq|五|numbers|59
سِتَّة|six|六|numbers|59
سَبْعَة|sept|七|numbers|59
ثَمَانِيَة|huit|八|numbers|59
تِسْعَة|neuf|九|numbers|59
عَشَرَة|dix|十|numbers|59
مَرْحَبًا|salut, bonjour|你好|phrases|62
أَهْلًا وَسَهْلًا|bienvenue|欢迎|phrases|62
اِسْمِي|je m'appelle|我的名字是|phrases|62
وَأَنْتَ؟|et toi ? (masculin)|你呢？（男）|phrases|62
تَشَرَّفْنَا|enchanté|幸会|phrases|62
الْحَمْدُ لِلَّه|Dieu merci|感谢真主|phrases|62
أَيْضًا|aussi|也|grammar|62
عَفْوًا|je t'en prie|不客气|phrases|62
زَمِيل|collègue|同学，同事|people|62
عِنْدِي بَيْت|j'ai une maison|我有一所房子|phrases|62
ذَهَبْتُ مَعَ صَدِيقِي إِلَى الْجَامِعَة|je suis allé à l'université avec mon ami|我和朋友去了大学|phrases|62
كَتَبْتُ|j'ai écrit|我写了|verbs|63
كَتَبْتَ|tu as écrit (masculin)|你写了（男）|verbs|63
كَتَبْتِ|tu as écrit (féminin)|你写了（女）|verbs|63
كَتَبَ|il a écrit|他写了|verbs|63
كَتَبَتْ|elle a écrit|她写了|verbs|63
كَتَبْنَا|nous avons écrit|我们写了|verbs|63
سَكَنْتُ|j'ai habité|我居住过|verbs|63
دَرَسْتُ|j'ai étudié|我学习了|verbs|63
عَمِلْتُ|j'ai travaillé|我工作了|verbs|63
ذَهَبْتُ|je suis allé|我去了|verbs|63
شَرِبْتُ|j'ai bu|我喝了|verbs|63
الْبَارِحَة|hier|昨天|time|63
كُلّ الْيَوْم|toute la journée|一整天|time|63
ثُمَّ|puis, ensuite|然后|grammar|63
مَاذَا فَعَلْتَ الْبَارِحَة؟|qu'as-tu fait hier ?|你昨天做了什么？|phrases|63
أَكْتُبُ|j'écris|我写|verbs|64
تَكْتُبُ|tu écris (masculin)|你写（男）|verbs|64
تَكْتُبِينَ|tu écris (féminin)|你写（女）|verbs|64
يَكْتُبُ|il écrit|他写|verbs|64
تَكْتُبُ|elle écrit|她写|verbs|64
نَكْتُبُ|nous écrivons|我们写|verbs|64
نَأْكُلُ|nous mangeons|我们吃|verbs|64
فَلَافِل|falafels|炸鹰嘴豆丸子|food|64
سَلَطَة|salade|沙拉|food|64
بَقْلَاوَة|baklava|果仁蜜饼|food|64
عِنْدَ صَدِيقِي|chez mon ami|在我朋友家|phrases|64
دَرَسَ|il a étudié|他学习了|verbs|66
يَدْرُسُ|il étudie|他学习|verbs|66
خَرَجَ|il est sorti|他出去了|verbs|66
يَخْرُجُ|il sort|他出去|verbs|66
دَخَلَ|il est entré|他进去了|verbs|66
يَدْخُلُ|il entre|他进入|verbs|66
كَتَبَ|il a écrit|他写了|verbs|66
يَكْتُبُ|il écrit|他写|verbs|66
سَكَنَ|il a habité|他居住过|verbs|66
يَسْكُنُ|il habite|他住|verbs|66
ذَهَبَ|il est allé|他去了|verbs|66
يَذْهَبُ|il va|他去|verbs|66
شَرِبَ|il a bu|他喝了|verbs|66
يَشْرَبُ|il boit|他喝|verbs|66
جَاءَ|il est venu|他来了|verbs|66
يَجِيءُ|il vient|他来|verbs|66
جَلَسَ|il s'est assis|他坐下了|verbs|66
يَجْلِسُ|il s'assied|他坐下|verbs|66
سَهْل|facile|容易的|qualities|69
صَعْب|difficile|难的|qualities|69
بِدَايَة|début|开始|concepts|69
نِهَايَة|fin|结尾|concepts|69
خَرَجَ|il est sorti|他出去了|verbs|69
دَخَلَ|il est entré|他进去了|verbs|69
بَعِيد|loin|远的|qualities|69
قَرِيب|proche|近的|qualities|69
كَبِير|grand|大的|qualities|69
صَغِير|petit|小的|qualities|69
طَوِيل|long|长的|qualities|69
قَصِير|court|短的|qualities|69
قُطْن|coton|棉花|concepts|69
سُوق|marché|市场|places|69
مَدِينَة|ville|城市|places|69
بَنْك|banque|银行|places|69
حَشِيش|herbe|草|nature|69
صَابُون|savon|肥皂|home|69
رِيف|campagne|乡村|places|69
فُرْن|four|烤炉|home|69
نَبِيل|noble|高贵的|qualities|69
شَرِيف|honorable|尊贵的|qualities|69
مَشْي|marche à pied|步行|travel|69
اِشْتَرَى|il a acheté|他买了|verbs|69
صَالَة|salle|大厅|places|69
سَلَطَة|salade|沙拉|food|69
مَشْوِي|grillé|烤的|food|70
ثَوْر|taureau|公牛|nature|70
قَانُون|loi|法律|concepts|70
وَزِير|ministre|部长|people|70
طَبِيب|médecin|医生|people|70
بَنْك|banque|银行|places|70
مَدِينَة|ville|城市|places|70
تِلِفُون|téléphone|电话|home|70
أَدْرُسُ|j'étudie|我学习|verbs|71
أَكْتُبُ|j'écris|我写|verbs|71
أَطْبُخُ|je cuisine|我做饭|verbs|71
تَدْرُسُ|tu étudies (masculin)|你学习（男）|verbs|71
تَكْتُبُ|tu écris (masculin)|你写（男）|verbs|71
تَطْبُخُ|tu cuisines (masculin)|你做饭（男）|verbs|71
تَدْرُسِينَ|tu étudies (féminin)|你学习（女）|verbs|71
تَكْتُبِينَ|tu écris (féminin)|你写（女）|verbs|71
تَطْبُخِينَ|tu cuisines (féminin)|你做饭（女）|verbs|71
يَدْرُسُ|il étudie|他学习|verbs|71
يَكْتُبُ|il écrit|他写|verbs|71
يَطْبُخُ|il cuisine|他做饭|verbs|71
تَدْرُسُ|elle étudie|她学习|verbs|71
تَكْتُبُ|elle écrit|她写|verbs|71
تَطْبُخُ|elle cuisine|她做饭|verbs|71
دَرَسْتُ|j'ai étudié|我学习了|verbs|71
كَتَبْتُ|j'ai écrit|我写了|verbs|71
طَبَخْتُ|j'ai cuisiné|我做饭了|verbs|71
شَرِبَ|il a bu|他喝了|verbs|71
دَخَلْتُ|je suis entré|我进去了|verbs|72
دَخَلْتَ|tu es entré (masculin)|你进去了（男）|verbs|72
دَخَلْتِ|tu es entrée (féminin)|你进去了（女）|verbs|72
دَخَلَ|il est entré|他进去了|verbs|72
دَخَلَتْ|elle est entrée|她进去了|verbs|72
أَدْخُلُ|j'entre|我进入|verbs|72
تَدْخُلُ|tu entres (masculin)|你进入（男）|verbs|72
تَدْخُلِينَ|tu entres (féminin)|你进入（女）|verbs|72
يَدْخُلُ|il entre|他进入|verbs|72
تَدْخُلُ|elle entre|她进入|verbs|72
حَبِيبَة|bien-aimée|心爱的女性|people|78
حَتَّى|jusqu'à|直到|grammar|78
حَجّ|pèlerinage|朝觐|concepts|78
حَدِيقَة|jardin|花园|nature|78
حُدُود|frontières|边境|places|78
حِذَاء|chaussure|鞋|home|78
حَزِين|triste|难过的|qualities|78
حَظّ|chance|运气|concepts|78
حِكَايَة|histoire, conte|故事|concepts|78
حَلَب|Alep|阿勒颇|places|78
حَلِيب|lait|牛奶|food|78
حِمَار|âne|驴|nature|78
حَمَّام|bain|浴室；洗澡|home|78
حِوَار|dialogue|对话|school|78
حَيَاة|vie|生命，生活|concepts|78
خَبَّاز|boulanger|面包师|people|78
خُبْز|pain|面包|food|78
خَرَجَ|il est sorti|他出去了|verbs|78
خُضَار|légumes|蔬菜|food|78
خَطِيبَة|fiancée|未婚妻|family|78
خَمْسَة|cinq|五|numbers|78
خَوْخ|prune (manuel) ; pêche selon l'usage|李子（教材释义）；也可指桃子|food|78
دَار|maison|家，房子|home|78
دَائِمًا|toujours|总是|time|78
دَجَاج|poulet|鸡肉；鸡|food|78
دَخَلَ|il est entré|他进去了|verbs|78
دَرَّاجَة|vélo|自行车|travel|78
بِسِكْلِيت|vélo (familier)|自行车（口语）|travel|78
دَرْس|leçon, cours|课|school|78
دَرَسَ|il a étudié|他学习了|verbs|78
دَرَّسَ|enseigner|教|verbs|78
دَرَسْتُ|j'ai étudié|我学习了|verbs|78
دَلِيل|guide|向导；指南|people|78
دَفْتَر|cahier|练习本|school|78
دِمَشْق|Damas|大马士革|places|78
دَيْر|monastère|修道院|places|78
ذَهَبَ إِلَى|aller à|去往|verbs|78
ذَهَبْتُ إِلَى|je suis allé à|我去了|verbs|78
ذَيْل|queue|尾巴|body|78
رَأَى|voir|看见|verbs|78
رَاحَ|aller|去（口语）|verbs|78
رَاحَتْ|elle est allée|她去了|verbs|78
رُحْتُ|je suis allé(e)|我去了（口语）|verbs|78
رَأْس|tête|头|body|78
رَأَيْتُ|j'ai vu|我看见了|verbs|78
شِفْتُ|j'ai vu (familier)|我看见了（口语）|verbs|78
رَئِيس|président|主席；总统|people|78
الرِّبَاط|Rabat|拉巴特|places|78
رَجَعَ|revenir|回来|verbs|78
رَجُل|homme|男人|people|78
رَخِيص|bon marché|便宜的|qualities|78
رُزّ|riz|米饭；大米|food|78
رَدَّدَ|répéter|重复|verbs|78
رِيف|campagne|乡村|places|78
زَارَ|il a visité|他参观了|verbs|79
زُرْتُ|j'ai visité|我参观了|verbs|79
زَمِيل|collègue|同事|people|79
زَوْج|époux, mari|丈夫|family|79
زَوْجَة|épouse|妻子|family|79
زَيْت|huile|油|food|79
سَأَبْقَى|je resterai|我会留下|verbs|79
سَافَرْتُ|j'ai voyagé|我旅行了|verbs|79
سَأَلَ|demander, interroger|询问|verbs|79
السَّبْت|samedi|星期六|time|79
سَبْعَة|sept|七|numbers|79
سِتَّة|six|六|numbers|79
سَرِيع|vite, rapide|快的；迅速地|qualities|79
سَعِيد|heureux, joyeux|快乐的|qualities|79
سَفَارَة|ambassade|大使馆|places|79
سَفَر|voyage|旅行|travel|79
سِفْر|livre en plusieurs volumes|卷册|school|79
سَفِير|ambassadeur|大使|people|79
سَفِينَة|bateau|船|travel|79
سُكَّر|sucre|糖|food|79
سَلَام|paix|和平|concepts|79
سُكُون|sukūn, signe sans voyelle|静符（不发元音）|grammar|79
سَمَك|poisson|鱼|food|79
سَمِعَ|entendre|听见|verbs|79
سَنَة|année|年|time|79
سُؤَال|question|问题|questions|79
سُورِيّ|syrien|叙利亚人；叙利亚的（男）|people|79
سُورِيَا|Syrie|叙利亚|places|79
سُورِيَّة|syrienne|叙利亚人；叙利亚的（女）|people|79
سَيَّارَة|voiture|汽车|travel|79
سَيِّد|monsieur|先生|people|79
سَيِّئ|mauvais|坏的|qualities|79
شَارِع|rue|街道|places|79
شَاطِئ|plage|海滩|places|79
شَخْص|personne|人|people|79
شَدَّة|signe de redoublement|叠音符|grammar|79
شَرِبَ|il a bu|他喝了|verbs|79
شَرِبْتُ|j'ai bu|我喝了|verbs|79
شُرْطِيّ|policier|警察|people|79
شَرِيعَة|charia, loi religieuse|沙里亚；宗教律法|concepts|79
شُكْرًا|merci|谢谢|phrases|79
شَمَال|nord|北方|places|79
شَمْس|soleil|太阳|nature|79
شَهْر|mois|月|time|79
شُوف|regarde (familier)|看（口语命令式）|verbs|79
شُوَيَّة|un peu (familier)|一点（口语）|qualities|79
شَيْخ|vieux, chef, maître|长者；首领；老师|people|79
شَيْء|chose|东西；事情|concepts|79
صَابُون|savon|肥皂|home|80
صَبَّ|verser|倒；倾倒|verbs|80
صَبَاحُ الْخَيْر|bonjour (matin)|早上好|phrases|80
صَبَاحُ النُّور|réponse à bonjour (matin)|早上好（应答）|phrases|80
صَعْب|difficile|困难的|qualities|80
صَدِيق|ami|朋友（男）|people|80
صَدِيقِي|mon ami|我的朋友（男）|people|80
صَدِيقَة|amie|朋友（女）|people|80
صَدِيقَتِي|mon amie|我的朋友（女）|people|80
صِفْر|zéro|零|numbers|80
صَغِير|petit|小的|qualities|80
صَيْف|été|夏天|time|80
ضَابِط|officier|军官|people|80
طَائِرَة|avion|飞机|travel|80
طَارِق|Tariq (prénom)|塔里克（人名）|people|80
طَالِب|étudiant|学生（男）|school|80
طَاوِلَة|table|桌子|home|80
طَبَّاخ|cuisinier|厨师|people|80
طَبَخَ|cuisiner|做饭|verbs|80
طَبَخْتُ|j'ai cuisiné|我做饭了|verbs|80
طَبْخ|cuisine, nourriture|烹饪；饭菜|food|80
طَبْعًا|bien sûr|当然|phrases|80
طَبِيب|médecin|医生|people|80
طُلَّاب|étudiants|学生们|school|80
طَلَبَ|demander|请求|verbs|80
طَوِيل|long|长的|qualities|80
طَيِّب|bon|好的|qualities|80
طَيْر|oiseau|鸟|nature|80
ظُهْر|midi|中午|time|80
عَبْد|Abd, serviteur de Dieu|阿卜德；仆人|people|80
عَرَب|les Arabes|阿拉伯人|people|80
عَرَبِيّ|un Arabe|阿拉伯人（男）|people|80
عَرَبِيَّة|arabe (langue, féminin)|阿拉伯语；阿拉伯的（女）|school|80
عَرْض|exposition|展览|concepts|80
عَسْكَرِيّ|militaire|军人|people|80
عَشَرَة|dix|十|numbers|80
عَصِير|jus|果汁|food|80
عُطْلَة|vacances|假期|time|80
عَفْوًا|de rien, pardon|不客气；抱歉|phrases|80
عَلَى|sur|在……上|grammar|80
عَنْ|à propos de|关于|grammar|80
عِنْدَ|chez|在……处|grammar|80
عِنْدَكَ|tu as (masculin)|你有（男）|grammar|80
عِنْدَكِ|tu as (féminin)|你有（女）|grammar|80
عِنْدَهُ|il a|他有|grammar|80
عِنْدِي|j'ai|我有|grammar|80
عُنْوَان|adresse, titre|地址；标题|concepts|80
غَابَة|forêt|森林|nature|80
غَرْب|ouest, occident|西方|places|81
فَتَحَ|ouvrir|打开|verbs|81
فَرَنْسَا|France|法国|places|81
فَرَنْسِيّ|français|法国的；法国人（男）|people|81
فَرَنْسِيَّة|française|法国的；法国人（女）|people|81
فَعَلْتَ|tu as fait (masculin)|你做了（男）|verbs|81
فَقَطْ|seulement|仅仅|grammar|81
بَسّ|c'est tout (familier)|就这样；仅此而已（口语）|phrases|81
فَنّ|art|艺术|concepts|81
فُنْدُق|hôtel|酒店|places|81
فَهِمَ|il a compris|他懂了|verbs|81
فَوَاكِه|fruits|水果|food|81
فِي|dans, pendant|在……里；在……期间|grammar|81
قَالَ|dire|说|verbs|81
قَرَأَ|lire|读|verbs|81
قُرْبَ|près de|靠近|places|81
قَرِيبًا|bientôt|不久|time|81
قَرِيب مِنْ|proche de|离……近|places|81
قِرَاءَة|lecture|阅读|school|81
قَصْر|château|城堡|places|81
قَصِير|court|短的|qualities|81
قِطَار|train|火车|travel|81
قَلِيلًا|un peu|一点|qualities|81
قَمَر|lune|月亮|nature|81
قَهْوَة|café (boisson)|咖啡|food|81
كَاتِب|écrivain|作家|people|81
كَأْس|verre|杯子|home|81
كَبِير|grand|大的|qualities|81
كَثِيرًا|beaucoup|很多|qualities|81
كِتَاب|livre|书|school|81
كَتَبَ|il a écrit|他写了|verbs|81
كَذَّاب|menteur|说谎者|people|81
كَلَام|parole|话；言语|concepts|81
كَلْب|chien|狗|nature|81
كُنْتُ|j'étais|我曾是|verbs|81
كُنْتَ|tu étais (masculin)|你曾是（男）|verbs|81
كُنْتِ|tu étais (féminin)|你曾是（女）|verbs|81
كَيْفَ|comment ?|怎样？|questions|81
اللّٰه|Dieu|真主|concepts|81
لَا|non|不|phrases|81
لَا أَعْرِفُ|je ne sais pas|我不知道|phrases|81
لَازِم|il faut|必须；必要|grammar|81
لِأَنَّ|parce que|因为|grammar|81
لُبْنَان|Liban|黎巴嫩|places|81
لَحْم|viande|肉|food|81
لَذِيذ|délicieux|美味的|qualities|81
لَطِيف|gentil|友善的|qualities|81
لَعِبَ|jouer|玩|verbs|81
لَكِنْ|mais|但是|grammar|81
لِمَاذَا|pourquoi ?|为什么？|questions|81
لَوْن|couleur|颜色|concepts|81
لَيْل|nuit|夜晚|time|81
مَا|quoi ?|什么？|questions|81
مَاء|eau|水|food|81
مَاذَا|quoi ?|什么？|questions|82
مَتَى|quand ?|什么时候？|questions|82
مُتَأَخِّر|en retard|迟到的|qualities|82
مَتْحَف|musée|博物馆|places|82
مَدْرَسَة|école|学校|school|82
مُدِير|directeur|校长；主任|people|82
مُخَابَرَات|services de renseignement|情报部门|concepts|82
اِمْرَأَة|femme|女人|people|82
مِرْآة|miroir|镜子|home|82
مَرْحَبًا|salut, bonjour|你好|phrases|82
مَرِيض|malade|生病的|qualities|82
مَسَاء|soir|晚上|time|82
مَسَاءُ الْخَيْر|bonsoir|晚上好|phrases|82
مَسَاءُ النُّور|réponse à bonsoir|晚上好（应答）|phrases|82
مُسْتَشْفَى|hôpital|医院|places|82
مُشْكِلَة|problème|问题；困难|concepts|82
مَشَى|marcher|步行|verbs|82
مَشَيْتُ|j'ai marché|我走了|verbs|82
مِصْر|Égypte|埃及|places|82
مَطْعَم|restaurant|餐馆|places|82
مَعَ|avec|和……一起|grammar|82
مَعَ السَّلَامَة|au revoir|再见|phrases|82
مُعَلِّم|enseignant|老师|school|82
مَعْنًى|sens|意义|concepts|82
الْمَغْرِب|Maroc|摩洛哥|places|82
مَقْهَى|café (lieu)|咖啡馆|places|82
مَكْتَبَة|bibliothèque|图书馆|places|82
مُمْكِن|possible|可能的|qualities|82
مَنْ|qui ?|谁？|questions|82
مِنْ|de, depuis|从；来自|grammar|82
مُنْذُ|depuis|自从|grammar|82
النَّاس|les gens|人们|people|82
نَحْنُ|nous|我们|people|82
نَبِيذ|vin|葡萄酒|food|82
نَسِيتُ|j'ai oublié|我忘了|verbs|82
نَصّ|texte|文本|school|82
نَعَم|oui|是的|phrases|82
نِهَايَة|fin|结尾|time|82
هَذَا|ce (masculin)|这个（阳性）|grammar|82
هَذِهِ|cette (féminin)|这个（阴性）|grammar|82
هَلْ|est-ce que ?|是否？|questions|82
هُمْ|ils|他们|people|82
هُوَ|il|他|people|82
هِيَ|elle|她|people|82
وَ|et|和；并且|grammar|82
وَاحِد|un|一|numbers|82
وَادٍ|rivière|河|nature|82
وَادِي|vallée|山谷|nature|82
وِزَارَة|ministère|部；部门|concepts|82
وِزَارَة الْخَارِجِيَّة|ministère des Affaires étrangères|外交部|concepts|82
وِزَارَة الدَّاخِلِيَّة|ministère de l'Intérieur|内政部|concepts|82
وِزَارَة الدِّفَاع|ministère de la Défense|国防部|concepts|82
وَزِير|ministre|部长|people|82
`;

const THEME_ORDER = ['phrases','people','family','questions','numbers','time','qualities','home','school','food','places','travel','verbs','nature','body','grammar','concepts'];
const WORDS = (RAW.trim()+'\n'+COURSE_RAW.trim()).split('\n').map((line, i) => { const [ar, fr, zh, theme, page] = line.split('|'); return { id: i + 1, ar, fr, zh, theme, page: Number(page) }; });
const UNIQUE_WORDS = [...WORDS.reduce((map,w)=>{const key=`${w.ar}|${w.fr}`;if(map.has(key)){const old=map.get(key);old.pages=[...new Set([...old.pages,w.page])].sort((a,b)=>a-b)}else map.set(key,{...w,pages:[w.page]});return map},new Map()).values()];

