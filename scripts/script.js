const MAIN_LINK="https://1wgcmt.com/v3/3245/landing-universal-timer?p=6i9o";
const WA_LINK="https://whatsapp.com/channel/0029Vb6IjfI4tRrn1IzWzP16/298";
const DOWNLOAD_LINK="./files/KofiGames.apk";
const FIREBASE_CONFIG={
    apiKey:"AIzaSyBfeysFOWSEkKD7GKaCveUCbhGXow6UUPU",
    authDomain:"aviaghs.firebaseapp.com",
    projectId:"aviaghs",
    storageBucket:"aviaghs.firebasestorage.app",
    messagingSenderId:"629268920786",
    appId:"1:629268920786:web:612c0518e250937ec9f00b"
};
const VAPID_KEY="BKSGlXmj87rSA20S_x4sBtRAsE6guEq053gjQBDWmyPPfftC0CNI_S8wxfy_G8chpHcjy9jQmuJ-KTLQ7OFIYlk";
const TIER1_FUN_COUNTRIES=["Hungary","Greece","Ireland","Italy","Slovakia","Slovenia","Poland","Romania","Bulgaria","Estonia","Finland","Croatia","Czechia","Latvia","Luxembourg","Canada","Japan","Qatar","United Arab Emirates","Macau"];
const CRYPTO_KEY="CRYPTO_PLACEHOLDER";
const CURRENCY_RATES={
    'USD':1,'EUR':.95,'BDT':110,'NGN':750,'KES':145,'ZAR':18,'GHS':12,'XAF':600,'XOF':600,'RWF':1300,'BRL':5,'RUB':90,'MXN':17,'IDR':15000,'PHP':55,'ARS':850,'CLP':900,'COP':3900,'PEN':3.7,'INR':83,'TRY':32,'UAH':40,'AZN':1.7,'AMD':400,'MDL':18,'TJS':11,'UZS':12500,'PKR':278,'MYR':4.7,'THB':36,'KRW':1350,'KGS':89,'EGP':30,'TZS':2500,'UGX':3700,'DEFAULT':100
};
const RESTRICTED_COUNTRIES=["Austria","Belgium","France","Germany","Ireland","Italy","Netherlands","Spain","Finland","Slovakia","Slovenia","Latvia","Luxembourg","United Kingdom","United States","Norway","Sweden","Japan"];
const DETAILED_PAYMENT_TEXTS={
    'RUB':['СБП (T-банк, Сбер)','Т-pay','Piastrix','FK Wallet','Sky Pay (Visa/MasterCard/МИР)','Telegram stars',CRYPTO_KEY],
    'AZN':['M10','eManat','(Visa/MasterCard)','Kapital Bank','SmartPay','Skrill',CRYPTO_KEY],'AMD':['(Visa/MasterCard)','Skrill',CRYPTO_KEY],
    'MDL':['(Visa/MasterCard)','Skrill',CRYPTO_KEY],'KGS':['(Visa/MasterCard)','Winbalance',CRYPTO_KEY],'TJS':['(Банк Эсхата, Алиф)','(Visa/MasterCard)',CRYPTO_KEY],
    'UAH':['(Visa/MasterCard)','Sky Pay','Piastrix',CRYPTO_KEY],'UZS':['Uzcard','HUMO','(Visa/MasterCard)','Piastrix',CRYPTO_KEY],
    'TRY':['FixTurka','Papara Wallet','Express/Vip Havale','PayCO','(Visa/MasterCard)',CRYPTO_KEY],'CAD':['(Visa/MasterCard)','Neteller','Skrill',CRYPTO_KEY],
    'ARS':['Mercado Pago','AstroPay','Transferencia Bancaria','Airtm',CRYPTO_KEY],'BRL':['PIX','Boleto Bancário','Airtm','OpenFinance',CRYPTO_KEY],
    'CLP':['Red Compra','Mach','AstroPay','Pago 46',CRYPTO_KEY],'COP':['PSE','Nequi','AstroPay','Daviplata','(Visa/MasterCard)',CRYPTO_KEY],
    'USD_VEN':['Pago Movil Instant','Biopago','AstroPay','Airtm',CRYPTO_KEY],'USD_ECU':['Bank Transfer','PayPhone','AstroPay',CRYPTO_KEY],
    'PEN':['Yape','Payvalida','Bank Transfer','(Visa/MasterCard)',CRYPTO_KEY],'INR':['PAY TM','PhonePe','UPI','Bank Transfer','AstroPay',CRYPTO_KEY],
    'IDR':['QRIS','Dana eWallet','OVO Wallet','Virtual Accounts',CRYPTO_KEY],'BDT':['BKash','Nagad',CRYPTO_KEY],'THB':['PromptPay','True money wallet',CRYPTO_KEY],
    'PHP':['GCash','PayMaya','QRPH','GrabPay','Bank Transfer',CRYPTO_KEY],'PKR':['Easypaisa','JazzCash','Nayapay',CRYPTO_KEY],
    'MYR':['Touch n Go','DuitNow','Bank Transfer','GrabPay',CRYPTO_KEY],'KRW':['Bank Transfer',CRYPTO_KEY],'VDN':['VietQR','Momo QR','Bank Transfer',CRYPTO_KEY],
    'CIV':['Wave','Orange Money','MTN','Moov Money','OuiPay',CRYPTO_KEY],'CMR':['Orange Money','MTN','(Visa/MasterCard)',CRYPTO_KEY],'BFA':['Orange Money','Wave','Moov Money',CRYPTO_KEY],
    'KES':['M-pesa','Airtel',CRYPTO_KEY],'SEN':['Wave','Orange Money','Freemoney',CRYPTO_KEY],'GHS':['MTN','Vodafone','Airtel Tigo',CRYPTO_KEY],
    'BEN':['MTN','Moov Money','Celtiis',CRYPTO_KEY],'TGO':['T-money','Moov Money',CRYPTO_KEY],'EGP':['Vodafone Cash','Etisalat/Orange Cash','Fawry','CIB Smart Wallet',CRYPTO_KEY],
    'TZS':['TigoPesa','Vodacom','Airtel',CRYPTO_KEY],'RWF':['MTN','Airtel','(Visa/MasterCard)',CRYPTO_KEY],'UGX':['MTN','Airtel',CRYPTO_KEY],'DEFAULT':['Visa/MasterCard',CRYPTO_KEY,'Bank Transfer']
};
const GAME_NAMES=["Aviator","Aviamasters Xmas","Chicken Crash","Tower Rush","Aviamasters","Ice Fishning","Play me"];
const CONTENT={
    en:{wv_title:"Browser Required",wv_sub:"To continue, please switch browser.",wv_step1:"Tap the menu icon (•••)",wv_step2:'Select "Open in Browser"',T2_3_hero:"Play Games & <br><span>Earn Daily</span>",T2_3_sub:"Instant withdrawal.",T1_FUN_hero:"Have Fun & <br><span>Enjoy your leisure</span>",T1_FUN_sub:"High-class entertainment. Safe and Secure.",btn:"REGISTER NOW",vpn_cta:"⚠️ VPN REQUIRED",games:"🔥 Hot Games",reviews:"💬 Reviews",video:"Video Guide + free vouchers",download:"Android APK",vpn_title:"Access Restricted",vpn_text:"Your region is currently restricted.<br>Please enable **VPN** to continue registration and claim bonus.",vpn_btn:"I Enabled VPN / Start Playing",vpn_close_simple:"Close",bonus_label:"Bonus ends:",promo_label:"Use Promo:",payment_label:"Available payment methods:",responsible_text:"Play responsibly. Gambling can be addictive.",crypto:"Crypto (USDT)",review_names:["John D.","Mike T.","Sarah L.","Adam F.","Chloe B.","James G.","Emily R."],review_templates:["Awesome game! I love it and constantly win big amounts in {game}. Payout was instant.","Classy! Got my money right away. Highly recommend {game} if you want to multiply your deposit.","Best odds and fast payout to my mobile money account. I just won a huge sum playing {game}!","I was skeptical, but the winnings were massive! {game} is paying today. Withdrawed everything in 5 minutes.","Easy to play, easy to win. I hit the jackpot on {game} and the withdrawal was super smooth."]},
    bn:{wv_title:"ব্রাউজার প্রয়োজন",wv_sub:"চালিয়ে যেতে, দয়া করে ব্রাউজার পরিবর্তন করুন।",wv_step1:"মেনু আইকন ট্যাপ করুন (•••)",wv_step2:'"ব্রাউজারে খুলুন" নির্বাচন করুন',T2_3_hero:"খেলুন এবং <span>আয় করুন</span>",T2_3_sub:"বিকাশ/নগদ এর মাধ্যমে দ্রুত টাকা তুলুন।",T1_FUN_hero:"<span>সময় কাটান</span> এবং মজা করুন",T1_FUN_sub:"উচ্চ-শ্রেণীর বিনোদন। নিরাপদ এবং সুরক্ষিত।",btn:"এখনই নিবন্ধন করুন",vpn_cta:"⚠️ ভিপিএন আবশ্যক",games:"🔥 জনপ্রিয় গেমস",reviews:"💬 প্লেয়ার রিভিউ",video:"ভিডিও গাইড",download:"ডাউনলোড অ্যাপ",vpn_title:"অ্যাক্সেস সীমিত",vpn_text:"আপনার অঞ্চল বর্তমানে সীমিত। নিবন্ধন চালিয়ে যেতে এবং বোনাস দাবি করতে **VPN** সক্ষম করুন।",vpn_btn:"ভিপিএন চালু করেছি / খেলা শুরু করুন",vpn_close_simple:"বন্ধ করুন",bonus_label:"বোনাস শেষ:",promo_label:"প্রোমো ব্যবহার:",payment_label:"উপলব্ধ পেমেন্ট পদ্ধতি:",responsible_text:"দায়িত্বের সাথে খেলুন। জুয়া আসক্তি হতে পারে।",crypto:"ক্রিপ্টোকারেন্সি (USDT)",review_names:["Rahim K.","Sumon A.","Fatima B.","Omar H.","Priya C.","Akash V."],review_templates:["খুব ভালো অ্যাপ! আমি এটি পছন্দ করি এবং {game}-এ ক্রমাগত বড় অঙ্কের টাকা জিতছি। পেমেন্ট তাৎক্ষণিক ছিল।","দারুণ! আমি সঙ্গে সঙ্গে আমার টাকা পেয়েছি। আপনি যদি আপনার ডিপোজিট বাড়াতে চান তবে আমি {game} এর সুপারিশ করছি।","সেরা অডস এবং মোবাইল মানিতে দ্রুত পেমেন্ট। আমি এইমাত্র {game} খেলে একটি বিশাল অঙ্ক জিতেছি!","আমি সন্দিহান ছিলাম, কিন্তু জয়গুলো ছিল বিশাল! আজ {game} পেমেন্ট দিচ্ছে। ৫ মিনিটের মধ্যে সব তুলে নিলাম।","খেলা সহজ, জেতা সহজ। আমি {game}-এ জ্যাকপট পেয়েছি এবং টাকা তোলা খুব মসৃণ ছিল।"]},
    ru:{wv_title:"Нужен Браузер",wv_sub:"Для продолжения откройте в браузере.",wv_step1:"Нажмите на меню (•••)",wv_step2:'Выберите "Открыть в браузере"',T2_3_hero:"Играй и <span>Зарабатывай</span>",T2_3_sub:"Моментальный вывод.",T1_FUN_hero:"Отдохни и <span>получи удовольствие</span>",T1_FUN_sub:"Премиальный досуг. Безопасно и надежно.",btn:"РЕГИСТРАЦИЯ",vpn_cta:"⚠️ ТРЕБУЕТСЯ VPN",games:"🔥 Топ Игры",reviews:"💬 Отзывы",video:"Видео Гайд + ваучеры",download:"Скачать APK",vpn_title:"Доступ ограничен",vpn_text:"Ваш регион ограничен. Включите **VPN**, чтобы продолжить регистрацию и получить бонус.",vpn_btn:"Я включил VPN / Начать играть",vpn_close_simple:"Закрыть",bonus_label:"Бонус истекает:",promo_label:"Промокод:",payment_label:"Доступные платежные системы:",responsible_text:"Играйте ответственно. Игра может вызывать зависимость.",crypto:"Криптовалюта (USDT)",review_names:["Иван С.","Ольга К.","Дмитрий В.","Елена П.","Сергей М.","Анна Н.","Михаил В."],review_templates:["Отличная игра! Люблю ее, постоянно выигрываю крупные суммы в {game}. Вывод моментальный.","Класс! Деньги пришли сразу. Очень советую {game}, если хотите умножить свой депозит.","Лучшие коэффициенты и быстрый вывод на карту. Я только что выиграл огромную сумму в {game}!","Я сомневался, но выигрыши оказались просто огромными! {game} сегодня дает. Вывел все за 5 минут.","Легко играть, легко выигрывать. Сорвал куш на {game}, и вывод прошел супер гладко."]},
    fr:{wv_title:"Navigateur Requis",wv_sub:"Pour continuer, veuillez changer de navigateur.",wv_step1:"Appuyez sur le menu (•••)",wv_step2:'Sélectionnez "Ouvrir dans le navigateur"',T2_3_hero:"Jouez et <span>Gagnez Quotidiennement</span>",T2_3_sub:"Retrait instantané.",T1_FUN_hero:"Amusez-vous et <br><span>Profitez de votre temps libre</span>",T1_FUN_sub:"Divertissement haut de gamme. Sûr et sécurisé.",btn:"INSCRIPTION",vpn_cta:"⚠️ VPN REQUIS",games:"🔥 Jeux Populaires",reviews:"💬 Avis des Joueurs",video:"Guide Vidéo + bons gratuits",download:"APK Android",vpn_title:"Accès Restreint",vpn_text:"Votre région est actuellement restreinte.<br>Veuillez activer le **VPN** pour continuer l'inscription et réclamer votre bonus.",vpn_btn:"J'ai activé le VPN / Commencer à jouer",vpn_close_simple:"Fermer",bonus_label:"Le bonus expire dans:",promo_label:"Code Promo:",payment_label:"Méthodes de paiement disponibles:",responsible_text:"Jouez de manière responsable. Le jeu peut créer une dépendance.",crypto:"Crypto (USDT)",review_names:["Jean D.","Michel T.","Sophie L.","Adrien F.","Chloé B.","Julien G.","Émilie R."],review_templates:["Jeu génial ! J'adore et je gagne constamment de grosses sommes sur {game}. Le paiement a été instantané.","Classe ! J'ai reçu mon argent tout de suite. Je recommande vivement {game} si vous voulez multiplier votre dépôt.","Meilleures cotes et retrait rapide sur mon compte mobile money. Je viens de gagner une énorme somme en jouant à {game} !","J'étais sceptique, mais les gains étaient massifs ! {game} paie aujourd'hui. J'ai tout retiré en 5 minutes.","Facile à jouer, facile à gagner. J'ai décroché le jackpot sur {game} et le retrait s'est déroulé très facilement."]}
};
function getPaymentMethods(currencyCode, countryCode){
    let key=currencyCode;
    if(countryCode==='Venezuela')key='USD_VEN';
    else if(countryCode==='Ecuador')key='USD_ECU';
    else if(countryCode==='Ivory Coast')key='CIV';
    else if(countryCode==='Cameroon')key='CMR';
    else if(countryCode==='Burkina Faso')key='BFA';
    else if(countryCode==='Senegal')key='SEN';
    else if(countryCode==='Benin')key='BEN';
    else if(countryCode==='Togo')key='TGO';
    else if(countryCode==='Uganda')key='UGX';
    else if(!DETAILED_PAYMENT_TEXTS[key])key='DEFAULT';
    return DETAILED_PAYMENT_TEXTS[key];
}
let messaging=null,firebaseInitialized=false;
function initFirebase(){
    try{
        if(typeof firebase==='undefined'){
            console.warn("Firebase libraries not loaded");
            return false;
        }
        if(firebaseInitialized){
            console.log("Firebase already initialized");
            return true;
        }
        const app=firebase.initializeApp(FIREBASE_CONFIG);
        messaging=firebase.messaging();
        firebaseInitialized=true;
        console.log("Firebase initialized successfully");
        return true;
    }catch(e){
        console.error("Firebase init error:",e);
        return false;
    }
}
async function handleFirebaseRegistration(e){
    if(e)e.preventDefault();
    console.log("Firebase registration started");
    if(!firebaseInitialized&&!initFirebase()){
        console.log("Firebase initialization failed, redirecting to main link");
        window.location.href=MAIN_LINK;
        return;
    }
    try{
        const permission=await Notification.requestPermission();
        console.log("Notification permission:",permission);
        if(permission==='granted'){
            console.log('Notification permission granted, getting token...');
            const currentToken=await messaging.getToken({vapidKey:VAPID_KEY});
            if(currentToken){
                console.log('FCM Token received:',currentToken);
            }else{
                console.log('No registration token available.');
            }
        }else{
            console.log('Notification permission denied.');
        }
    }catch(err){
        console.error('Error during Firebase registration:',err);
    }finally{
        console.log("Redirecting to main link");
        window.location.href=MAIN_LINK;
    }
}
const getRandomInt=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
const formatNumber=num=>Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ");
const getCurrencyRate=currency=>CURRENCY_RATES[currency]||CURRENCY_RATES['DEFAULT'];
function getCurrencyAndLocale(){
    const tz=Intl.DateTimeFormat().resolvedOptions().timeZone;
    const lang=(navigator.language||navigator.userLanguage).toLowerCase();
    let currency="USD",country="DEFAULT";
    const TZ_MAP={
        "Europe/Moscow":"RUB,Russia","Asia/Yekaterinburg":"RUB,Russia","Europe/Kiev":"UAH,Ukraine",
        "Asia/Tashkent":"UZS,Uzbekistan","Asia/Dushanbe":"TJS,Tajikistan","Asia/Bishkek":"KGS,Kyrgyzstan",
        "Asia/Baku":"AZN,Azerbaijan","Asia/Yerevan":"AMD,Armenia","Europe/Chisinau":"MDL,Moldova",
        "America/Sao_Paulo":"BRL,Brazil","America/Buenos_Aires":"ARS,Argentina","America/Santiago":"CLP,Chile",
        "America/Bogota":"COP,Colombia","America/Caracas":"USD,Venezuela","America/Guayaquil":"USD,Ecuador",
        "America/Lima":"PEN,Peru","Asia/Dhaka":"BDT,Bangladesh","Asia/Jakarta":"IDR,Indonesia",
        "Asia/Kolkata":"INR,India","Asia/Manila":"PHP,Philippines","Asia/Bangkok":"THB,Thailand",
        "Asia/Karachi":"PKR,Pakistan","Asia/Kuala_Lumpur":"MYR,Malaysia","Asia/Seoul":"KRW,South Korea",
        "Asia/Ho_Chi_Minh":"VDN,Vietnam","Africa/Lagos":"NGN,Nigeria","Africa/Nairobi":"KES,Kenya",
        "Africa/Accra":"GHS,Ghana","Africa/Cairo":"EGP,Egypt","Africa/Dar_es_Salaam":"TZS,Tanzania",
        "Africa/Kigali":"RWF,Rwanda","Africa/Kampala":"UGX,Uganda","Africa/Abidjan":"XOF,Ivory Coast",
        "Africa/Douala":"XAF,Cameroon","Europe/Istanbul":"TRY,Turkey","America/Toronto":"CAD,Canada",
        "America/Vancouver":"CAD,Canada","America/New_York":"USD,United States","America/Los_Angeles":"USD,United States",
        "America/Chicago":"USD,United States","Europe/London":"EUR,United Kingdom",
        "Europe/Madrid":"EUR,Europe","Europe/Berlin":"EUR,Europe","Europe/Paris":"EUR,Europe","Europe/Amsterdam":"EUR,Europe"
    };
    let mapEntry=Object.entries(TZ_MAP).find(([key])=>tz.includes(key));
    if(mapEntry){
        [currency,country]=mapEntry[1].split(',');
    }   
    let tier='T2_3';
    if(TIER1_FUN_COUNTRIES.some(c=>country.includes(c))||['Europe','Canada','United States'].includes(country)){
        tier='T1_FUN';
    }
    return {currency,tz,lang,tier,country,countryCode:country};
}
const checkRestricted=country=>RESTRICTED_COUNTRIES.includes(country);
function activateCTA(){
    const cta=document.getElementById('cta-link');
    const sticky=document.getElementById('sticky-link');
    cta.href=sticky.href="javascript:void(0);";
    cta.classList.remove('disabled','restricted');
    sticky.classList.remove('disabled');
    cta.style.animation='pulse 2s infinite';
    cta.style.boxShadow='0 4px 25px rgba(46, 204, 113, 0.3)';
    sticky.style.background="";
    cta.onclick=sticky.onclick=handleFirebaseRegistration;
    console.log("CTA buttons activated with Firebase registration");
}
function isInWebView(){
    const ua=navigator.userAgent||navigator.vendor||window.opera;
    const markers=['FBAN','FBAV','Instagram','TikTok','BytedanceWebview','wv'];
    return markers.some(marker=>ua.indexOf(marker)>-1);
}
function setupBasicLinks(){
    const waLink=document.getElementById('wa-link');
    if(waLink)waLink.href=WA_LINK;
    const dlLink=document.getElementById('dl-link');
    if(dlLink)dlLink.onclick=startDownload;
    document.querySelectorAll('.game-item').forEach(item=>{
        const href=item.getAttribute('href');
        if(href&&href.startsWith('http'))item.target='_blank';
    });
}
document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM Content Loaded");
    const {currency,lang,tier,country}=getCurrencyAndLocale();
    const isRestricted=checkRestricted(country);
    localize(lang,currency,tier,country);
    setupBasicLinks();
    if(isInWebView()){
        console.log("WebView detected, showing guide");
        document.getElementById('webview-guide').style.display='flex';
        document.getElementById('main-app').style.display='none';
        document.getElementById('sticky-foot').style.display='none';
        return;
    }
    console.log("Regular browser detected, initializing app");
    const firebaseSuccess=initFirebase();
    console.log("Firebase initialization:",firebaseSuccess?"success":"failed");
    setupButtons(isRestricted,lang);
    document.getElementById('main-app').style.display='block';
    document.getElementById('sticky-foot').style.display='flex';
    startTimer(300,document.querySelector('#timer'));
});
function closeVpnModal(){
    document.getElementById('vpn-modal').style.display='none';
}
function handleVpnButtonClick(e){
    e.preventDefault();
    closeVpnModal();
    handleFirebaseRegistration();
}
function setupButtons(isRestricted,userLang){
    const cta=document.getElementById('cta-link');
    const sticky=document.getElementById('sticky-link');
    const langCode=userLang.startsWith('ru')?'ru':(userLang.startsWith('bn')?'bn':(userLang.startsWith('fr')?'fr':'en'));
    const txt=CONTENT[langCode];
    const vpnCloseBtn=document.getElementById('vpn-close-btn');
    const vpnCloseSimpleBtn=document.getElementById('vpn-close-simple-btn');
    if(vpnCloseBtn)vpnCloseBtn.onclick=handleVpnButtonClick;
    if(vpnCloseSimpleBtn)vpnCloseSimpleBtn.onclick=closeVpnModal;
    if(isRestricted){
        console.log("Restricted country detected, showing VPN modal");
        const vpnAction=(e)=>{
            e.preventDefault();
            document.getElementById('vpn-modal').style.display='flex';
        };
        cta.classList.add('restricted');
        cta.classList.remove('disabled');
        cta.querySelector('#btn-txt').textContent=txt.vpn_cta;
        cta.onclick=vpnAction;
        sticky.style.background="#e74c3c";
        sticky.textContent=txt.vpn_cta;
        sticky.onclick=vpnAction;
        sticky.classList.remove('disabled');
    }else{
        console.log("Normal country, activating CTA");
        activateCTA();
    }
}
function startDownload(e){
    if(e)e.preventDefault();
    console.log("Starting download");
    const btn=document.getElementById('dl-link');
    const txt=document.getElementById('dl-text');
    btn.classList.add('loading');
    txt.innerHTML="⏳ ...";
    setTimeout(()=>{
        txt.innerHTML="✅ DONE";
        window.location.href=DOWNLOAD_LINK;
    },2000);
}
function localize(langCode,currencyCode,tier,countryCode){
    let lang;
    if(langCode.startsWith('ru'))lang='ru';
    else if(langCode.startsWith('bn'))lang='bn';
    else if(langCode.startsWith('fr'))lang='fr';
    else lang='en';
    const txt=CONTENT[lang];
    const rate=getCurrencyRate(currencyCode);
    if(txt.wv_title)document.getElementById('wv-title').textContent=txt.wv_title;
    if(txt.wv_sub)document.getElementById('wv-sub').textContent=txt.wv_sub;
    if(txt.wv_step1)document.getElementById('wv-step1').textContent=txt.wv_step1;
    if(txt.wv_step2)document.getElementById('wv-step2').textContent=txt.wv_step2;
    const heroKey=(tier==='T1_FUN')?'T1_FUN_hero':'T2_3_hero';
    const subKey=(tier==='T1_FUN')?'T1_FUN_sub':'T2_3_sub';
    document.getElementById('hero-title').innerHTML=txt[heroKey];
    document.getElementById('hero-sub').textContent=txt[subKey];
    document.getElementById('vpn-title').textContent=txt.vpn_title;
    document.getElementById('vpn-text').innerHTML=txt.vpn_text;
    document.getElementById('vpn-close-btn').textContent=txt.vpn_btn;
    document.getElementById('vpn-close-simple-btn').textContent=txt.vpn_close_simple;
    document.getElementById('timer-label').textContent=txt.bonus_label;
    document.getElementById('promo-label').textContent=txt.promo_label;
    if(!document.getElementById('cta-link').classList.contains('restricted')){
        document.getElementById('btn-txt').textContent=txt.btn;
        document.getElementById('sticky-link').textContent="🔥 "+txt.btn;
    }
    document.getElementById('games-title').textContent=txt.games;
    document.getElementById('reviews-title').textContent=txt.reviews;
    document.getElementById('vid-txt').textContent=txt.video;
    document.getElementById('dl-text').textContent=txt.download;
    document.getElementById('payment-text').textContent=txt.payment_label;
    document.getElementById('responsible-text').textContent=txt.responsible_text;
    const paymentMethodsContainer=document.getElementById('payment-methods-list');
    const paymentMethodsArray=getPaymentMethods(currencyCode,countryCode);
    const translatedPayments=paymentMethodsArray.map(item=>item===CRYPTO_KEY?txt.crypto:item).join('; ');
    paymentMethodsContainer.textContent=translatedPayments;
    const track=document.getElementById('wins-track');
    track.innerHTML='';
    for(let i=0;i<15;i++){
        const usdAmount=getRandomInt(500,8000);
        const localAmount=usdAmount*rate;
        const randomGame=GAME_NAMES[getRandomInt(0,GAME_NAMES.length-1)];
        track.innerHTML+=`<span class="win-item">🎉 <span class="win-name">User***</span> <span class="win-amount">+${formatNumber(localAmount)} ${currencyCode}</span> <span class="win-game">${randomGame}</span></span>`;
    }
    const namesSource=CONTENT[lang].review_names;
    const availableNames=[...namesSource];
    const availableTemplates=[...txt.review_templates];
    for(let i=1;i<=3;i++){
        const usdAmount=getRandomInt(1000,20000);
        const localAmount=usdAmount*rate;
        const nameIndex=getRandomInt(0,availableNames.length-1);
        const templateIndex=getRandomInt(0,availableTemplates.length-1);
        const randomName=availableNames.splice(nameIndex,1)[0];
        const randomTemplate=availableTemplates.splice(templateIndex,1)[0];
        const randomGame=GAME_NAMES[getRandomInt(0,GAME_NAMES.length-1)];
        const reviewText=randomTemplate.replace('{game}',`<b>${randomGame}</b>`);
        document.getElementById(`rev-name-${i}`).textContent=randomName;
        document.getElementById(`rev-amt-${i}`).textContent=`+ ${formatNumber(localAmount)} ${currencyCode}`;
        document.getElementById(`rev-txt-${i}`).innerHTML=`"${reviewText}"`;
    }
}
function startTimer(duration,display){
    let timer=duration,m,s;
    setInterval(()=>{
        m=parseInt(timer/60,10);
        s=parseInt(timer%60,10);
        display.textContent=(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
        if(--timer<0)timer=duration;
    },1000);
}