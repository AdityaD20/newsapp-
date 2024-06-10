import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  [
 
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Golo Roden",
    "title": "Ente gut, alles gut? DuckDB ist eine besondere Datenbank",
    "description": "DuckDB ist in Version 1.0 erschienen. Was hat es mit dieser Datenbank auf sich, die einiges anders macht als andere Datenbanken?",
    "url": "https://www.heise.de/blog/Ente-gut-alles-gut-DuckDB-ist-eine-besondere-Datenbank-9753854.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/0/8/9/6/6/DuckDB-975075d3eff6d7c9.jpg",
    "publishedAt": "2024-06-10T07:20:00Z",
    "content": "Inhaltsverzeichnis\r\nVor kurzem bin ich auf eine Software gestoßen, bei der ich mir gewünscht hätte, ich hätte sie schon viel früher kennengelernt. Aber, wie es so schön heißt: besser spät als nie. Be… [+9658 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "iOS 18: Six new features coming to the iPhone (other than AI)",
    "description": "While new AI features will steal the show at WWDC this week, Apple has a number of other changes planned for iOS 18. This includes new home screen customization options, design changes, and more. Head below for a roundup of some of the non-AI features rumored…",
    "url": "https://9to5mac.com/2024/06/09/ios-18-new-features-iphone-ai/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/05/ios18-ai.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-06-10T01:42:06Z",
    "content": "While new AI features will steal the show at WWDC this week, Apple has a number of other changes planned for iOS 18. This includes new home screen customization options, design changes, and more. Hea… [+3094 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Zac Hall",
    "title": "Apple is about to make major generative AI news; here’s how I’ve been using AI so far",
    "description": "In a few hours, we’ll learn what Apple has in mind for an AI-infused version of iPhone software. We expect AI to deliver quality-of-life improvements to iOS over the next year. In recent history is any indication, AI will advance such that iOS 19 and iOS 20 a…",
    "url": "https://9to5mac.com/2024/06/09/apple-is-about-to-make-major-generative-ai-news-heres-how-ive-been-using-ai-so-far/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/05/ios18-ai.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-06-10T00:57:00Z",
    "content": "In a few hours, well learn what Apple has in mind for an AI-infused version of iPhone software. We expect AI to deliver quality-of-life improvements to iOS over the next year. In recent history is an… [+5292 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "Apple's M3 Pro MacBook Pro plunges to $1,699",
    "description": "The WWDC price war sees Apple's current MacBook Pro 14-inch with the M3 Pro chip fall to $1,699, which is the lowest price on record.Get Apple's M3 Pro MacBook Pro 14 for just $1,699.To snap up the deal while supplies last, head over to B&H Photo or Amazon. B…",
    "url": "https://appleinsider.com/articles/24/06/10/apples-m3-pro-macbook-pro-plunges-to-1699",
    "urlToImage": "https://photos5.appleinsider.com/gallery/59961-122979-apple-macbook-pro-14-m3-pro-1699-copy-xl.jpg",
    "publishedAt": "2024-06-10T06:46:18Z",
    "content": "Get Apple's M3 Pro MacBook Pro 14 for just $1,699.\r\nThe WWDC price war sees Apple's current MacBook Pro 14-inch with the M3 Pro chip fall to $1,699, which is the lowest price on record.\r\nTo snap up t… [+1162 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "編集部",
    "title": "【解説ライブやります】AppleはAI時代にどう動く？ 今夜のWWDCでチェックできます #WWDC24",
    "description": "Image:Appleティム・クック（AppleのCEO）はみんなが聞き飽きた「AI」って言葉は使わなさそう。本日（6/10）の深夜26時（日本時間）から、Apple（アップル）はアプリやサービス開発者向けのイベント「WWDC24」を開催します。Appleが作っているさまざまなOSの新機能、つまりiPhoneやAppleWatch、Macにやってくる新機能がお披露目される、開発者（や新機能が楽しみ",
    "url": "https://www.gizmodo.jp/2024/06/wwdc24_announce.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/06/10/wwdc2024-1.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2024-06-10T03:00:00Z",
    "content": "AppleCEOAI\r\n6/1026AppleWWDC24\r\nAppleOSiPhoneApple WatchMac\r\nMacAI\r\nMicrosoftGoogleAI2120AI\r\nAppleSiri...\r\n3\r\n1Apple\r\nApple\r\n2Apple TV\r\nAppleApple TVAppel TV\r\n3YouTubeApple\r\nAppleYouTubeYouTube\r\nAIYou… [+5 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "そうこ",
    "title": "パスワード覚えたくない人、Appleのパスワード管理アプリに期待",
    "description": "Photo:TadaImages/Shutterstock.com今夜、日本時間では日付が変わってすぐ、11日の2時から開催されるAppleのデベロッパカンファレンス・WWDC24。今年は、主にAI関連の発表になるなんて言われていますが、ここにきてパスワード管理についての話が。Apple情報通のマーク・ガーマン氏によれば、各ソフトウェアのアップデートとして、パスワード管理アプリがリリースされるとい",
    "url": "https://www.gizmodo.jp/2024/06/apple-passdwords-app.html",
    "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/06/10/shutterstock_2250806105.jpg?w=1280&h=630&f=jpg",
    "publishedAt": "2024-06-10T04:00:00Z",
    "content": "112AppleWWDC24AI\r\nAppleiPhoneiOS 18iPadiPadOS 18MacMacOS 15\r\nApplePasswords1PasswordLastPass\r\nAppleiCloudPasswords\r\nWi-FiGoogle Authenticator2"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Pedro Aznar",
    "title": "¡Hoy toca keynote! Llega la IA de Apple en un Apple Event que llevábamos años esperando",
    "description": "Volver a las antiguas keynotes de antes. Las de antes de las redes sociales, las filtraciones en la cadena de producción o los renders desde prácticamente cualquier ángulo. Las que quizás sois demasiado jóvenes para recordar, o muy veteranos para intentar evi…",
    "url": "https://www.applesfera.com/nuevo/hoy-toca-keynote-apple-event-donde-ia-sera-protagonista-hoy-estamos-emocionados",
    "urlToImage": "https://i.blogs.es/d4958d/belkin-iphone-mount-apple-tv-analisis--300/840_560.jpeg",
    "publishedAt": "2024-06-10T07:00:39Z",
    "content": "Volver a las antiguas keynotes de antes. Las de antes de las redes sociales, las filtraciones en la cadena de producción o los renders desde prácticamente cualquier ángulo. Las que quizás sois demasi… [+5741 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Es increíble que el iPhone 15 se pueda comprar a menos de 630 euros y esté a estrenar",
    "description": "No falta mucho para que Apple anuncie su nueva generación de smartphones, pues acostumbra a hacerlo en septiembre, y eso explica que los actuales se pueden encontrar bastante más rebajados que en la Apple Store. El reputado vendedor de AliExpress Super Tech E…",
    "url": "https://www.applesfera.com/seleccion/increible-que-iphone-15-se-pueda-comprar-a-630-euros-este-a-estrenar",
    "urlToImage": "https://i.blogs.es/2313c8/iphone-15/840_560.jpeg",
    "publishedAt": "2024-06-10T06:30:39Z",
    "content": "No falta mucho para que Apple anuncie su nueva generación de smartphones, pues acostumbra a hacerlo en septiembre, y eso explica que los actuales se pueden encontrar bastante más rebajados que en la … [+2141 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Pedro Aznar",
    "title": "Así es el pack de bienvenida al Apple Event de la WWDC24",
    "description": "Recién llegado a California para asistir a la WWDC24, y tras doce horas de viaje, me encontraba en el hotel con la bolsa de bienvenida al evento - algo que tradicionalmente Apple ha entregado a los desarrolladores que hayan conseguido asistir presencialmente …",
    "url": "https://www.applesfera.com/eventos/asi-pack-bienvenida-al-apple-event-wwdc24",
    "urlToImage": "https://i.blogs.es/7e88a0/applesfera-fotos--01/840_560.jpeg",
    "publishedAt": "2024-06-10T06:31:23Z",
    "content": "Recién llegado a California para asistir a la WWDC24, y tras doce horas de viaje, me encontraba en el hotel con la bolsa de bienvenida al evento - algo que tradicionalmente Apple ha entregado a los d… [+3574 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Caschys Blog"
    },
    "author": "Olli",
    "title": "WWDC 2024: Keynote live verfolgen, das wird erwartet",
    "description": "Heute Abend geht es bei Apple wieder rund. Die WWDC (Worldwide Developers Conference) 2024 startet. Die Eröffnungskeynote ist auch für viele Nicht-Entwickler ein Höhepunkt, bekommt man dort doch verständlich nahegebracht, welche neuen Funktionen in iOS, iPadO…",
    "url": "https://stadt-bremerhaven.de/wwdc-2024-keynote-live-verfolgen-das-wird-erwartet/",
    "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2024/05/Apple-WWDC24-event-details-hero_big.jpg.medium_2x-2.jpg",
    "publishedAt": "2024-06-10T05:00:56Z",
    "content": "Heute Abend geht es bei Apple wieder rund. Die WWDC (Worldwide Developers Conference) 2024 startet. Die Eröffnungskeynote ist auch für viele Nicht-Entwickler ein Höhepunkt, bekommt man dort doch vers… [+1352 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ifanr.com"
    },
    "author": "苏伟鸿",
    "title": "苹果 iOS 18 爆料：AI 之外亮点同样不少，主屏幕或迎来大变 | WWDC24 前瞻",
    "description": "即使没有 AI，更新幅度也比 iOS 17 大不少#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
    "url": "https://www.ifanr.com/1588746",
    "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2024/06/covermain-1.jpg",
    "publishedAt": "2024-06-10T02:00:18Z",
    "content": "WWDC AI\r\n AI iOS 18 iOS \r\n AI AI \r\n Apple Park WWDC24 \r\niOS 18 \r\niOS 18 WWDC iOS 18 \r\n AI iOS iOS 17iOS 18 AI \r\niOS 18 17 \r\n iOS \r\niOS 14 iOS 18 Android 12 \r\nAndroid 12\r\n iOS 18 iOS iPadOS iOS 16 \r\n … [+959 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smartworld.it"
    },
    "author": "Antonio Lepore",
    "title": "Apple pensa ai robot domestici intelligenti, ma la strada appare in salita",
    "description": "Apple starebbe provando a realizzare robot domestici intelligenti. Tuttavia, potrebbero occorrere anni prima del lancio di un prodotto davvero utile.\r\nL'articolo Apple pensa ai robot domestici intelligenti, ma la strada appare in salita sembra essere il primo…",
    "url": "https://www.smartworld.it/news/apple-robot-domestici-intelligenti.html",
    "urlToImage": "https://www.smartworld.it/images/2023/12/18/apple-final-bianco-e-nero_1200x675.jpeg",
    "publishedAt": "2024-06-10T06:56:00Z",
    "content": "Sono diverse le aziende che stanno pensando allo sviluppo di robot umanoidi. Tra queste realtà, si può includere Apple, con l'ex Google John Giannandrea, già responsabile di Siri e dell'Apple Car, a … [+1446 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smartworld.it"
    },
    "author": "Alessandro Nodari",
    "title": "\"Un PC non è una console\": Apple blocca emulatore PC sia sull'App Store sia sugli store di terze parti",
    "description": "Se volevate usare un emulatore per PC sul vostro iPhone, preparatevi a un'amara sorpresa: per Apple un PC non è una console\r\nL'articolo \"Un PC non è una console\": Apple blocca emulatore PC sia sull'App Store sia sugli store di terze parti sembra essere il pri…",
    "url": "https://www.smartworld.it/news/emulatore-utm-bloccato-apple.html",
    "urlToImage": "https://www.smartworld.it/images/2024/06/10/utm-emulatore-iphone_1200x675.jpg",
    "publishedAt": "2024-06-10T06:54:00Z",
    "content": "L'apertura di Apple (forzata) verso i marketplace di terze parti e gli emulatori per console ha scatenato un certo entusiasmo tra gli utenti della mela, ma questo non significa che ognuno possa fare … [+2518 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smartworld.it"
    },
    "author": "Emanuele Cisotti",
    "title": "La miglior serratura smart è quella non connessa? Netatmo presenta Door Lock",
    "description": "Se c'è un prodotto smart che può davvero migliorare la vita di un individuo quello è sicuramente una serratura smart....\r\nL'articolo La miglior serratura smart è quella non connessa? Netatmo presenta Door Lock sembra essere il primo su Smartworld.",
    "url": "https://www.smartworld.it/news/netatmo-door-lock.html",
    "urlToImage": "https://www.smartworld.it/images/2024/06/07/netatmo-door-lock_1200x675.jpg",
    "publishedAt": "2024-06-10T07:10:00Z",
    "content": "Se c'è un prodotto smart che può davvero migliorare la vita di un individuo quello è sicuramente una serratura smart. Questo perché mi mette al riparo da tutte quelle volte in cui ci si dimentica le … [+4328 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "La Vanguardia"
    },
    "author": "Fran Besora",
    "title": "iOS 18 permitiría bloquear apps con Face ID, Toch ID o código",
    "description": "iOS 18 está a punto de ser presentado, y ya contamos con un resumen completo de todas las novedades que podríamos ver. Sin embargo, aún siguen emergiendo pequeños detalles a pocas horas de su presentación: se podrían bloquear aplicaciones utilizando Face ID, …",
    "url": "https://www.lavanguardia.com/andro4all/apple/ios-18-permitiria-bloquear-apps-con-face-id-toch-id-o-codigo",
    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/06/ios-18-permitira-bloquear-apps-con-face-id.jpg?width=1200",
    "publishedAt": "2024-06-10T06:39:39Z",
    "content": "iOS 18 y sus funciones de IA se presentarán en la WWDC 2024\r\niOS 18 está a punto de ser presentado, y ya contamos con un resumen completo de todas las novedades que podríamos ver. Sin embargo, aún si… [+1937 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "La Vanguardia"
    },
    "author": "David Freire",
    "title": "Netflix dejará de funcionar en todos estos dispositivos a partir de julio",
    "description": "A pesar de sus constantes subidas de precio, Netflix sigue siendo la plataforma de streaming de series que más usuarios activos tiene en todo el mundo, pero igual que sucede con otros servicios, las recientes actualizaciones de sus aplicaciones provocan que a…",
    "url": "https://www.lavanguardia.com/andro4all/aplicaciones/netflix-dejara-de-funcionar-en-todos-estos-dispositivos-a-partir-de-julio",
    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/06/netflix-portada.1717995971.8158.jpg?width=1200",
    "publishedAt": "2024-06-10T06:01:33Z",
    "content": "El logo de Netflix, la aplicación de streaming de series y películas más popular en la actualidad\r\nA pesar de sus constantes subidas de precio, Netflix sigue siendo la plataforma de streaming de seri… [+2257 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Armando Tinoco",
    "title": "‘Presumed Innocent’ Is A Tale Of Two Trials – In Court & At Home, Star Jake Gyllenhaal Says – Tribeca Festival",
    "description": "Two trials play out in the new Apple TV+ adaptation of lawyer-novelist Scott Turow’s 1988 bestselling legal thriller, Presumed Innocent: the criminal case against a Chicago prosecutor charged with murdering a colleague, and the nightmare at home that the murd…",
    "url": "http://deadline.com/2024/06/presumed-innocent-tale-two-trials-jake-gyllenhaal-tribeca-festival-1235968698/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2024/06/presumed-innocent-tribeca-film-festival.jpg?w=1024",
    "publishedAt": "2024-06-10T04:35:53Z",
    "content": "Two trials play out in the new Apple TV+ adaptation of lawyer-novelist Scott Turow’s 1988 bestselling legal thriller, Presumed Innocent: the criminal case against a Chicago prosecutor charged with mu… [+5386 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Googlewatchblog.de"
    },
    "author": "Jens",
    "title": "Mein Gerät finden: Google startet mit angezogener Handbremse – langsamer Rollout und niedrige Stufe",
    "description": "Vor mittlerweile mehr als zwei Monaten hat Google den offiziellen Startschuss für Mein Gerät finden gegeben und das Gerätenetzwerk den ersten Nutzern zugänglich gemacht - beginnend in den USA. Seit etwas mehr als einer Woche können auch deutsche Nutzer dabei …",
    "url": "https://www.googlewatchblog.de/2024/06/mein-geraet-google-handbremse/",
    "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/mein-geraet-finden-logo-cover-google.jpg",
    "publishedAt": "2024-06-10T06:36:38Z",
    "content": "Vor mittlerweile mehr als zwei Monaten hat Google den offiziellen Startschuss für Mein Gerät finden gegeben und das Gerätenetzwerk den ersten Nutzern zugänglich gemacht – beginnend in den USA. Seit e… [+3224 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Googlewatchblog.de"
    },
    "author": "Jens",
    "title": "Pixel-Smartphones: Google hat das Juni-Update weit verzögert – diese Updates sollten heute kommen",
    "description": "Planmäßig hätte Google am Montag vergangener Woche das Pixel Update inklusive des Android-Sicherheitsupdate veröffentlichen und für alle Pixel-Smartphones ausrollen sollen. Doch beide Updates blieben aus, auch in den folgenden Tagen gab es keine Bewegung und …",
    "url": "https://www.googlewatchblog.de/?p=227290",
    "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/android-system-update.jpg",
    "publishedAt": "2024-06-10T05:00:35Z",
    "content": "Planmäßig hätte Google am Montag vergangener Woche das Pixel Update inklusive des Android-Sicherheitsupdate veröffentlichen und für alle Pixel-Smartphones ausrollen sollen. Doch beide Updates blieben… [+6721 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nextpit.de"
    },
    "author": "Jade Bryan",
    "title": "WWDC 2024: So seid Ihr live dabei, wenn Apple KI-Features enthüllt",
    "description": "Am heutigen 10. Juni startet Apple die WWDC 2024. Wir verraten Euch, was Ihr von KI bis Siri erwarten dürft und wie Ihr das Event live verfolgen könnt.",
    "url": "https://www.nextpit.de/apple-wwdc-2024-so-seid-ihr-heute-live-dabei",
    "urlToImage": "https://fscl01.fonpit.de/userfiles/7734655/image/Apple-WWDC-2024-What-to-Expect-How-to-Watch.png",
    "publishedAt": "2024-06-10T06:08:49Z",
    "content": "So verfolgt Ihr die WWDC 2024 von Apple live\r\nDie WWDC 2024 beginnt am heutigen 10. Juni und dauert bis zum 14. Juni. Die 5-tägige Konferenz für Entwickler:innen startet im Apple Park in Kalifornien … [+4610 chars]"
    },
    {
    "source": {
    "id": "focus",
    "name": "Focus"
    },
    "author": "FOCUS online",
    "title": "Aktiensplit wird wirksam - Aus einer Nvidia-Aktie werden zehn, Kleinanleger hoffen auf Kurs-Turbo",
    "description": "Der Chipkonzern Nvidia führt einen Aktiensplit durch, um sein Wertpapier für Kleinanleger erschwinglicher zu halten. Konkret teilt der KI-Chiphersteller eine alte Aktie in zehn neue auf. Das senkt den Preis, zumindest optisch. Eine Voraussetzung für weitere K…",
    "url": "https://www.focus.de/finanzen/boerse/aktiensplit-wird-wirksam-aus-einer-nvidia-aktie-werden-zehn-kleinanleger-hoffen-auf-kurs-turbo_id_260021541.html",
    "urlToImage": "https://p6.focus.de/img/fotos/id_259902082/nvidia.jpg?im=Crop%3D%280%2C152%2C3464%2C1732%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=223e3bcb56467bbf4c4961141c9f442b8ca0f3cb79ecef7abeff9b19b80e5ca8",
    "publishedAt": "2024-06-10T06:41:08Z",
    "content": "Der Chipkonzern Nvidia führt einen Aktiensplit durch, um sein Wertpapier für Kleinanleger erschwinglicher zu halten. Konkret teilt der KI-Chiphersteller eine alte Aktie in zehn neue auf. Das senkt de… [+3107 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Techbang.com"
    },
    "author": "janus",
    "title": "iOS 18 AI 功能注重隱私，部分功能用戶可選擇不啟用",
    "description": "蘋果不會強推，消息稱使用者可選擇是否啟用 iOS 18 的 AI 功能Apple 先前已宣布將於美國西岸時間 6 月10 日至 6 月 14日，於線上舉行一年一度的全球開發者大會（WWDC 2024），也就是台灣時間 2024 年 6 月 11 日至 15 日。\n這次蘋果即將推出的 iOS 18，預計將帶來多項由 AI 驅動的新功能，但這些功能也引發了部分用戶對隱私的擔憂。\n根據彭博社報導，蘋果意識到這些擔憂，並計畫將部分 iOS 18 的 AI 功能設計為可選擇加入的服務。這意味著用戶可以自行決定是否啟用這些功…",
    "url": "https://www.techbang.com/posts/115964-apple-wont-push-it-and-the-news-says-that-users-can-choose",
    "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/115964/original/e3bf50dafe18e74350da91dcccc29b83.jpg?1717960880",
    "publishedAt": "2024-06-10T06:00:00Z",
    "content": "Apple 6 10 6 14WWDC 2024 2024 6 11 15 \r\n iOS 18 AI \r\n iOS 18 AI \r\n Mark Gurman OpenAI AI OpenAI \r\n AI \r\n OpenAI ChatGPT iOS 18 \r\n9to5mac iOS 18 OpenAI Google"
    },
    {
    "source": {
    "id": null,
    "name": "Digiday"
    },
    "author": "Digiday Editors",
    "title": "The definitive Digiday guide to what’s in and out at Cannes 2024",
    "description": "Here's what's in and out for the Cannes Lions International Festival of Creativity.",
    "url": "http://digiday.com/marketing/the-definitive-digiday-guide-to-whats-in-and-out-at-cannes-2024/",
    "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2024/06/cannes-in-out-2024.jpg",
    "publishedAt": "2024-06-10T04:01:00Z",
    "content": "Digiday covers the latest from marketing and media at the annual Cannes Lions International Festival of Creativity. More from the series →In Brand apologies for marketing gaffes\r\nOutIgnoring backlash… [+1057 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Linuxtoday.com"
    },
    "author": "Web Webster",
    "title": "Best Free and Open-Source Alternatives to Apple iWork",
    "description": "iWork is an office suite of applications created by Apple for its macOS, iPadOS, and iOS operating systems. It provides the word-processing and desktop-publishing application Pages, the spreadsheet application Numbers, and the presentation application Keynote…",
    "url": "https://www.linuxtoday.com/blog/best-free-and-open-source-alternatives-to-apple-iwork/",
    "urlToImage": "https://assets.linuxtoday.com/uploads/2021/07/Linux_opengraph_square2-01.png",
    "publishedAt": "2024-06-10T00:00:20Z",
    "content": "iWork is an office suite of applications created by Apple for its macOS, iPadOS, and iOS operating systems. It provides the word-processing and desktop-publishing application Pages, the spreadsheet a… [+177 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Businessinsider.de"
    },
    "author": "Don Dahlmann",
    "title": "Warum der ÖPNV mit den großen Tech-Firmen zusammenarbeiten sollte",
    "description": "Ohne die Hilfe von Apple und Google wird der ÖPNV die Digitalisierung nicht stemmen können. Städte wie Paris machen es vor.",
    "url": "https://www.businessinsider.de/gruenderszene/automotive-mobility/warum-der-oepnv-mit-den-grossen-tech-firmen-zusammenarbeiten-sollte/",
    "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2024/05/GettyImages-1979575804.jpg?ver=1716985782",
    "publishedAt": "2024-06-10T04:00:00Z",
    "content": "Ohne die Hilfe von Apple und Google wird der ÖPNV die Digitalisierung nicht stemmen können. Städte wie Paris machen es vor.Das Deutschlandticket hat gezeigt, dass man den öffentlichen Nahverkehr vor … [+4061 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Antyweb.pl"
    },
    "author": "Kamil Świtalski",
    "title": "WWDC 2024 - to już dziś! Gdzie i o której oglądać konferencję Apple?",
    "description": "Już dziś Apple zaprezentuje najnowsze wersje oprogramowania, które jeszcze tej jesieni zasili ich smartfony, tablety, komputery i spółkę!\n \n The post WWDC 2024 - to już dziś! Gdzie i o której oglądać konferencję Apple? appeared first on AntyWeb.",
    "url": "https://antyweb.pl/wwdc-2024-gdzie-ogladac",
    "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2024/03/gnvitbyick/wwdc.jpg",
    "publishedAt": "2024-06-10T06:39:54Z",
    "content": "To ju dzi! Uroczyste otwarcie konferencji WWDC 2024 które, jak zwykle, oznacza oficjaln prezentacj w ramach której dowiemy si jakie nowoci w tym roku w swoim oprogramowaniu zaserwuje Apple. Tim Cook … [+804 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Antyweb.pl"
    },
    "author": "Kamil Świtalski",
    "title": "Apple lubi emulatory, ale do czasu. Na tę aplikację firma nie wyraża zgody",
    "description": "Apple nie ma nic przeciwko emulatorom tak długo, jak te nie pozwalają emulować... PC!\n \n The post Apple lubi emulatory, ale do czasu. Na tę aplikację firma nie wyraża zgody appeared first on AntyWeb.",
    "url": "https://antyweb.pl/apple-lubi-emulatory-ale-do-czasu-na-te-aplikacje-firma-nie-wyraza-zgody",
    "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2021/05/04114104/apple.jpg",
    "publishedAt": "2024-06-10T06:39:54Z",
    "content": "Coraz ciekawiej wygldaj sprawy wokó emulacji u Apple. Firma wydawaa si by bardzo otwarta na ten pomys, pozwalajc na dodawanie kolejnych emulatorów do ich oficjalnego sklepu z aplikacjami. Co prawda n… [+2365 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphoneitalia.com"
    },
    "author": "Francesco Siciliani",
    "title": "AirPods 3 in sconto su Amazon a 159€",
    "description": "Gli apprezzatissimi auricolari di Apple, AirPods 3, sono in sconto su Amazon al prezzo di 159€ sia in versione Lightning che MagSafe.",
    "url": "https://www.iphoneitalia.com/772199/airpods-3-amazon-disponibili-offerte-apple",
    "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2021/10/airpods-3.png",
    "publishedAt": "2024-06-10T07:00:43Z",
    "content": "Gli AirPods 3 di Apple sono disponibili su Amazon, con consegna immediata, e in offerta a 159€.\r\nGli AirPods 3 offrono il pieno supporto all’Audio Spaziale di Apple e al Dolby Atmos, vanno a sostitui… [+1243 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Neowin"
    },
    "author": "Sagar Naresh",
    "title": "Apple blocks a PC emulator for iPhones & iPads from being listed on the App Store",
    "description": "Apple has blocked the listing of a PC Emulator on the Apple App Stores in the EU because of a rule violation, which the developers of the emulator claim Apple has assessed in the wrong way. Read more...",
    "url": "https://www.neowin.net/news/apple-blocks-a-pc-emulator-for-iphones--ipads-from-being-listed-on-the-app-store/",
    "urlToImage": "https://cdn.neowin.com/news/images/uploaded/2024/06/1718002330_utm-pc-emulator-apple_story.jpg",
    "publishedAt": "2024-06-10T07:16:02Z",
    "content": "According to a fresh report, Apple has rejected a submission from the developers of UTM, a PC emulator for iPhone and iPad. Apple reportedly took this step because it believes it violates one of its … [+1958 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "redmondpie.com"
    },
    "author": "Oliver Haslam",
    "title": "Our WWDC 2024 Keynote Coverage Starts At 10am PT Today, Here Are The Details",
    "description": "Apple's 2024 Worldwide Developers Conference will, as usual, be the big event that sees the company unveil the new software that will power its platforms going into the next year and beyond.\nThe post Our WWDC 2024 Keynote Coverage Starts At 10am PT Today, Her…",
    "url": "https://www.redmondpie.com/our-wwdc-2024-keynote-coverage-starts-at-10am-pt-today-here-are-the-details/",
    "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2024/06/wwdc-24-time.jpg",
    "publishedAt": "2024-06-10T07:08:01Z",
    "content": "Apple’s 2024 Worldwide Developers Conference will, as usual, be the big event that sees the company unveil the new software that will power its platforms going into the next year and beyond.\r\nBig thi… [+1440 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "redmondpie.com"
    },
    "author": "RP Staff",
    "title": "[Fixed] iPhone Stuck In Recovery Mode After iOS 18 Update",
    "description": "Are you one of those people who want to get rid of iOS 18 stuck in recovery mode? If yes, then this article might be what you’re looking for. Read this article to discover 5 best solutions for this problem!\nThe post [Fixed] iPhone Stuck In Recovery Mode After…",
    "url": "https://www.redmondpie.com/iphone-stuck-in-recovery-mode-after-ios-18-update/",
    "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2024/06/Screenshot-2024-06-09-at-10.44.54 PM.png",
    "publishedAt": "2024-06-10T04:05:05Z",
    "content": "“I felt a surge of panic as I realized iOS 18 stuck in recovery mode after attempting to update to iOS 18. I searched for a solution online, coming across numerous forums, but didnt know which one wa… [+6908 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Netaful.jp"
    },
    "author": "コグレマサト",
    "title": "【Mac整備済製品】MacBook Air・MacBook Pro・iMac・Mac Studio【2024年6月10日】",
    "description": "Apple公式サイトの「Mac整備済製品」の情報です。 Appleの整備済み品は問題があって返品された商品などを整備し、テスト後認定されたものです。1年間の特別保証が付いています。 最新の在庫情報は「Apple整備済製品...\n投稿 【Mac整備済製品】MacBook Air・MacBook Pro・iMac・Mac Studio【2024年6月10日】 は ネタフル に最初に表示されました。",
    "url": "https://netaful.jp/apple-refurbished/0151808.html",
    "urlToImage": "https://i0.wp.com/netaful.jp/wp-content/uploads/2024/06/apple-refurbished-mac-1.jpg?fit=1500%2C928&ssl=1",
    "publishedAt": "2024-06-10T05:00:00Z",
    "content": "AppleMac\r\nApple1\r\nApple\r\nAirPods Pro2[]\r\n33,800\r\n24iMac [] 8CPU7GPUApple M1 – 144,800\r\n24iMac [] 8CPU7GPUApple M1 – 144,800\r\n15MacBook Air [] 8CPU10GPUApple M2 – 154,800\r\n15MacBook Air [] 8CPU10GPUAp… [+6148 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "no-reply@tinhte.vn (Anh Tú.), Anh Tú.",
    "title": "Mời anh em tối nay xem tường thuật trực tiếp sự kiện WWDC24",
    "description": "Tối nay lúc 0h ngày 11/06 sẽ diễn ra sự kiện WWDC24 của Apple, trong sự kiện lần này gần như chắc chắn Apple sẽ giới thiệu những tính năng AI mới trên những hệ điều hành của họ bao gồm: iOS, iPadOS, macOS, tvOS, watchOS, visionOS.",
    "url": "https://tinhte.vn/thread/moi-anh-em-toi-nay-xem-tuong-thuat-truc-tiep-su-kien-wwdc24.3796214/",
    "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8360718_6a68d653aeaa65ccb321f03e12c2d36f.jpg",
    "publishedAt": "2024-06-10T07:03:28Z",
    "content": "Mình và Mod Minh c ti nay cng s livestream tng thut trc tip s kin ln này chia s ti anh em nhng thông tin v WWDC24 nhanh nht. Ngoài ra, anh em có th theo dõi nhng thông tin sm nht ca s kin WWD24 Tinht… [+137 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "no-reply@tinhte.vn (vn_ninja), vn_ninja",
    "title": "Inforgraphic: So sánh số lượng trung tâm dữ liệu của các công ty Big Tech",
    "description": "Inforgraphic sau đây thể hiện sự tương quan số lượng các trung tâm dữ liệu giữa các công ty Big Tech bao gồm Meta, Google, Microsoft, Apple và Amazon. Nguồn số liệu từ Meta, Google và Microsoft. Số của Apple và Amazon là ước tính của bên thứ 3.",
    "url": "https://tinhte.vn/thread/inforgraphic-so-sanh-so-luong-trung-tam-du-lieu-cua-cac-cong-ty-big-tech.3795944/",
    "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8360028_155daab5323f119f279287dd77270afa.jpg",
    "publishedAt": "2024-06-10T01:20:01Z",
    "content": "Inforgraphic sau ây th hin s tng quan s lng các trung tâm d liu gia các công ty Big Tech bao gm Meta, Google, Microsoft, Apple và Amazon. Ngun s liu t Meta, Google và Microsoft. S ca Apple và Amazon … [+1594 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "no-reply@tinhte.vn (vn_ninja), vn_ninja",
    "title": "iOS 18 sẽ chuyển màu icon app ở Dark mode, cho phép khoá app bằng Face ID?",
    "description": "Trước ngày diễn ra WWDC 2024 thì đã có thêm một số báo cáo về các tính năng mới trên iOS 18 sắp tới. Theo trang tin MacRumors thì các icon ứng dụng trên iOS 18 sẽ thay đổi màu sắc khi chế độ Dark mode được kích hoạt.",
    "url": "https://tinhte.vn/thread/ios-18-se-chuyen-mau-icon-app-o-dark-mode-cho-phep-khoa-app-bang-face-id.3795955/",
    "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8360070_5443ffb7975f782b169d9ff02d72a1b9.jpg",
    "publishedAt": "2024-06-10T00:33:31Z",
    "content": "Và mt thay i khác ó là iOS 18 s cho phép khoá app bng Face ID. Hin ti Apple ã trin khai phng thc này trong mt s app tích hp, ví d nh ch duyt web riêng t ca Safari cn xác thc Face ID truy cp, hay albu… [+368 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "no-reply@tinhte.vn (Trần Hoàng Long.), Trần Hoàng Long.",
    "title": "Trên tay Anker MagGo Foldable 3in1: Đế sạc không dây Qi2 thiết kế thông minh, đẹp và sạc nhanh",
    "description": "Tên đầy đủ của đế sạc không dây này là \"Anker MagGo Wireless Charging Station (Foldable 3-in-1)\", quá là dài luôn luôn mình chỉ gọi tắt nó là MagGo Foldable Qi2. Thực sự là từ lúc biết tới cục sạc này qua hình ảnh giới thiệu ở sự kiện CES 2024 mình…",
    "url": "https://tinhte.vn/thread/tren-tay-anker-maggo-foldable-3in1-de-sac-khong-day-qi2-thiet-ke-thong-minh-dep-va-sac-nhanh.3795945/",
    "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8360041_0de011ebb8d8e0d8b90003193981914e.jpg",
    "publishedAt": "2024-06-10T02:06:37Z",
    "content": "Thc t qua o c cho thy MagGo Foldable Qi2 sc không dây tt c các thit b iPhone, Apple Watch và AirPods u là sc nhanh. iPhone t 0% n lúc pin lên 50% ch khong 30 phút, Apple Watch Ultra 1 ca mình t 0% lê… [+517 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tinhte.vn"
    },
    "author": "no-reply@tinhte.vn (bk9sw), bk9sw",
    "title": "NVIDIA làm vi xử lý ARM cho máy tính Windows - một sự kết hợp giữa nhân Cortex X và Blackwell GPU?",
    "description": "NVIDIA sẽ không đứng ngoài cuộc chơi về laptop chạy CPU kiến trúc ARM. Trong một cuộc phỏng vấn mới đây với Bloomberg, CEO NVIDIA - Jensen Huang và nhà sáng lập Dell - Michael Dell đã phần nào khẳng định rằng NVIDIA sẽ bước chân vào thị trường AI…",
    "url": "https://tinhte.vn/thread/nvidia-lam-vi-xu-ly-arm-cho-may-tinh-windows-mot-su-ket-hop-giua-nhan-cortex-x-va-blackwell-gpu.3795687/",
    "urlToImage": "https://storage-tinhte.vncdn.vn/data/attachment-files/vnetwork/2024/06/8360257_19c6b045f509e07552e2f6deffc9b66d.jpg",
    "publishedAt": "2024-06-10T01:51:04Z",
    "content": "Tegra K1 ra mt nm 2014 có 2 phiên bn, 1 phiên bn dùng 4 nhân Cortex-A15 tng t Tegra 4 và 1 phiên bn 2 nhân Denver x64 tu bin. Th nhng im áng chú ý nht là vic nó c tích hp GPU dùng kin trúc Kepler vi … [+2485 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Beast"
    },
    "author": "Nick Schager",
    "title": "‘Presumed Innocent’: Jake Gyllenhaal’s New Show Is Summer’s Best TV Binge",
    "description": "Photo Illustration by Thomas Levinson/The Daily Beast/Getty/Apple TV+\r\nDistending their source material to egregious lengths with unnecessary exposition, superfluous additions, and ham-fisted “timeliness,” most long-form TV adaptations of popular films have s…",
    "url": "https://www.thedailybeast.com/obsessed/jake-gyllenhaals-presumed-innocent-review-summer-best-tv-binge",
    "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1717968517/240609-presumed-innocent-tease_uuygfo",
    "publishedAt": "2024-06-10T01:30:51Z",
    "content": "Distending their source material to egregious lengths with unnecessary exposition, superfluous additions, and ham-fisted timeliness, most long-form TV adaptations of popular films have severely under… [+6296 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Elespanol.com"
    },
    "author": "Daniel González",
    "title": "FREE FIRE MAX | Códigos de hoy lunes 10 de junio de 2024 - Recompensas gratis",
    "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire MAX que podrás canjear hoy, lunes 10 de junio de 2024. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido n…",
    "url": "https://vandal.elespanol.com/noticia/1350771978/free-fire-max-codigos-de-hoy-lunes-10-de-junio-de-2024-recompensas-gratis/",
    "urlToImage": "https://media.vandal.net/ivandal/12/63/1200x630/6/6-2024/10/2024610813383_1.jpg",
    "publishedAt": "2024-06-10T06:03:00Z",
    "content": "El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido nuevos códigos diarios para hoy lunes 10 de junio de 2024. Los jugadores pueden canjear estos códigos para recibir recompensas v… [+2720 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Macitynet.it"
    },
    "author": "Settimio Perlini",
    "title": "Inizia la WWDC24, sviuppatori alla carica nel Campus Apple",
    "description": "Una edizione della WWDC, la conferenza sviluppatori Apple che verrà ricordata come la definitiva rinascita dopo il Covid: centinaia di sviluppatori si sono ritrovati per la registrazione e l’accesso all’evento che comincia nel pomeriggio ore italiane. Il repo…",
    "url": "https://www.macitynet.it/inizia-la-wwdc24-sviuppatori-alla-carica-nel-campus-apple/",
    "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/06/wwdc24-campus-cupertino-macitynet-settimio-perliniIMG-7915-1.jpg",
    "publishedAt": "2024-06-10T05:40:55Z",
    "content": "Sembrava di essere tornati ai tempi della conferenza sviluppatori al Moscone Center: una lunga fila abbracciava nel pomeriggio del 9 Giugno il vecchio Campus Apple a qualche km dal nuovo Apple Park.\r… [+1476 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Macitynet.it"
    },
    "author": "Mauro Notarianni",
    "title": "Apple non può pagare Kaspersky ricompensa per la scoperta di vulnerabilità",
    "description": "Kaspersky, azienda russa con sede a Mosca, lo scorso anno ha individuato quattro vulnerabilità zero-day e lamenta di non avere ricevuto ancora le ricompense previste dal \"Bug Bounty\" di Apple. Il motivo è molto probabilmente legato alle sanzioni imposte dagli…",
    "url": "https://www.macitynet.it/?p=1310905",
    "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/12/Triangulation.jpg",
    "publishedAt": "2024-06-10T07:29:23Z",
    "content": "Kaspersky, azienda russa con sede a Mosca, lo scorso anno ha individuato quattro vulnerabilità zero-day, scoperte dopo un attacco diretto al management di Kaspersky.\r\nL’attacco individuato lo scorso … [+2713 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Macitynet.it"
    },
    "author": "Fabrizio Frattini",
    "title": "Sull’Intelligenza artificiale Apple si gioca tutto, incluso il successore di iPhone",
    "description": "Sull'intelligenza artificiale Apple si gioca il futuro. Non solo quello dei servizi ma anche quello dell'hardware. Inclusa la capacità di sostituire iPhone come fattore di traino del suo mercato. Ma devono cambiare molte cose.\n- su macitynet.it Sull’Intellige…",
    "url": "https://www.macitynet.it/?p=1310833",
    "urlToImage": "https://www.macitynet.it/wp-content/uploads/2021/09/california-streaming-ico.jpg",
    "publishedAt": "2024-06-10T06:04:20Z",
    "content": "Da successo della strategia nell’Intelligenza Artificiale dipendono non tanto il futuro dei servizi e delle funzioni del sistema operativo ma la capacità di Apple di trovare un sostituto di iPhone ch… [+3353 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hwupgrade.it"
    },
    "author": null,
    "title": "WWDC 2024: Apple pronta ad abbracciare l'AI per reinventare iOS, macOS e non solo",
    "description": "Mancano ormai pochissime ore alla conferenza inaugurale della WWDC 2024 ossia la conferenza annuale per gli sviluppatori di Apple. Sarà probabilmente la più importante di tutti i tempi perché Apple potrebbe per la prima volta introdurre funzionalità mai viste…",
    "url": "https://www.hwupgrade.it/news/apple/wwdc-2024-apple-pronta-ad-abbracciare-l-ai-per-reinventare-ios-macos-e-non-solo_127890.html",
    "urlToImage": "https://www.hwupgrade.it/i/n/WWDC2024today_720.jpg",
    "publishedAt": "2024-06-10T06:30:39Z",
    "content": "È arrivato il periodo dell'anno più atteso dagli appassionati di tecnologia di tutto il mondo: la Worldwide Developers Conference 2024 di Apple è ormai dietro l'angolo. L'edizione di quest'anno si pr… [+11551 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Sapo.pt"
    },
    "author": "Pedro Simões",
    "title": "Apple deixa emulador de PC fora das lojas de apps de terceiros do iOS e da App Store",
    "description": "Uma mudança recente da Apple nas regras da App Store veio abrir a porta à chegada de emuladores ao iOS e ao iPhone. Estes estavam bloqueados e passam agora a poder ser instalados e...",
    "url": "https://pplware.sapo.pt/apple/apple-deixa-emulador-de-pc-fora-das-lojas-de-apps-de-terceiros-do-ios-e-da-app-store/",
    "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2021/12/app_store_apps_namoro_3.jpg",
    "publishedAt": "2024-06-10T06:00:43Z",
    "content": "Uma mudança recente da Apple nas regras da App Store veio abrir a porta à chegada de emuladores ao iOS e ao iPhone. Estes estavam bloqueados e passam agora a poder ser instalados e usados de forma ab… [+2273 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Smhn.info"
    },
    "author": "會原",
    "title": "Apple、iOS 18にAI搭載。名称は「Apple Intelligence」に？",
    "description": "略してAI！？Appleが、iOS 18におけるAI機能の総称として、「Apple Intelligence」を用いる可能性が浮上しました。GSMArenaが伝えています。本件を伝えたのは、9to5MacでApple系のリーカーとして活躍した後、BloombergでApple系ス...smhn.infoにアクセスすると、全文を読むことができます。",
    "url": "https://smhn.info/202406-apple-intelligence-rumors",
    "urlToImage": "https://smhn.info/wp-content/uploads/2024/06/apple-ios.jpg",
    "publishedAt": "2024-06-10T02:04:34Z",
    "content": "AI\r\nAppleiOS 18AIApple IntelligenceGSMArena\r\n9to5MacAppleBloombergAppleMark Gurman\r\nBloombergAppleAIApple IntelligenceArtificial Intelligence\r\nAppleAppleiPhoneVision ProMR HMD\r\nApple IntelligenceSafa… [+38 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Impress.co.jp"
    },
    "author": null,
    "title": "「2021 10.2インチ iPad」が5,000円OFF！AmazonのAppleストアでセール開催中【本日みつけたお買い得情報】",
    "description": "Amazon.co.jpのAppleストアでは現在、同社のタブレット端末「2021 10.2インチ iPad」「2021 iPad mini」のセールが行われています。",
    "url": "https://forest.watch.impress.co.jp/docs/serial/goodbuy/1598733.html",
    "urlToImage": "https://forest.watch.impress.co.jp/img/wf/list/1598/733/image_top.jpg",
    "publishedAt": "2024-06-10T03:40:28Z",
    "content": "2021 10.2 iPad2,160×1,62010.2 RetinaNeural EngineA13 Bionic8 \r\n Wi-Fi64GB49,800/25,00010OFF44,800 \r\n 256GB6OFF67,47567,475"
    },
    {
    "source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Илья Сидоров",
    "title": "Apple Intelligence станет основой всех будущих сервисов и устройств Apple",
    "description": "Новые функции на основе искусственного интеллекта Apple Intelligence, которые будут представлены сегодня на WWDC, станут основой для будущих сервисов и устройств компании. К 2030 году Apple рассчитывает выпустить несколько новых категорий продуктов, и в этом …",
    "url": "https://www.iphones.ru/iNotes/apple-intelligence-stanet-osnovoy-vseh-budushchih-servisov-i-ustroystv-apple-06-10-2024",
    "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2024%2F06%2F20230904-145524.jpg",
    "publishedAt": "2024-06-10T06:36:01Z",
    "content": "Apple Intelligence, WWDC, .\r\n 2030 Apple , .\r\n, Amazon Astro, . .\r\nAmazon Astro\r\n Apple . , , . Siri.\r\n Apple AirPods . : , . \r\n Apple , , . . [Bloomberg]\r\n - iPhone, . Apple FixSpot.ru .\r\n 6 . . , ,… [+20 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Илья Сидоров",
    "title": "Apple запретила размещать в App Store эмулятор ПК",
    "description": "Apple не пропустила в App Store приложение UTM, которое является эмулятором ПК для iPhone и iPad. Приложение давно доступно на iOS, но его можно было скачать через некоторые альтернативные магазины приложений, которые устанавливаются через Safari. После того …",
    "url": "https://www.iphones.ru/iNotes/apple-zapretila-razmeshchat-v-app-store-emulyator-pk-06-10-2024",
    "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2024%2F06%2Fpc-emulator-ios-app-store.jpg",
    "publishedAt": "2024-06-10T05:58:24Z",
    "content": "Apple App Store UTM, iPhone iPad.\r\n iOS, , Safari. \r\n Apple App Store, UTM , .\r\nApple , , « ». , UTM . [9to5Mac]\r\n - iPhone, . Apple FixSpot.ru .\r\n 6 . . , , iPhone, iPad MacBook"
    },
    {
    "source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Илья Сидоров",
    "title": "Где сегодня смотреть презентацию WWDC 2024",
    "description": "Сегодня в 20:00 по московскому времени начнется конференция WWDC 2024. Она пройдёт в онлайн-формате. На WWDC компания представит обновления для всех своих операционных систем. В тему: Здесь всё, что покажет Apple на WWDC 2024 Где смотреть презентацию Apple: п…",
    "url": "https://www.iphones.ru/iNotes/gde-segodnya-smotret-prezentaciyu-wwdc-2024-06-09-2024",
    "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2024%2F06%2Fwwdc-2024-main-image-feature.jpg",
    "publishedAt": "2024-06-10T04:00:01Z",
    "content": "20:00 WWDC 2024. -.\r\n WWDC .\r\nApple: \r\n1. iPhones.ru, 19:00. . , .\r\n2. @iPhonesru, 20:00. , .\r\n , .\r\n3. YouTube. Apple 20:00. \r\n4. Apple. 20:00. \r\n5. Apple TV. , .\r\niPhones.ru .\r\n , , . - , , .\r\n - i… [+59 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphones.ru"
    },
    "author": "Микк Сид",
    "title": "Да это же настоящий убийца макбука! Неделю пользуюсь Huawei MateBook X Pro и не хочу возвращаться к Apple",
    "description": "В поисках Windows-ноутбука, который в совокупности своих технических и внешних данных мог бы заменить мне MacBook Air, я перепробовал около десятка разных моделей. Каждая из них была в чём-то хороша, но обязательно имела больше изъянов, чем преимуществ. То гр…",
    "url": "https://www.iphones.ru/iNotes/da-eto-zhe-nastoyashchiy-ubiyca-makbuka-nedelyu-polzuyus-huawei-matebook-x-pro-i-ne-hochu-vozvrashchatsya-k-apple-06-05-2024",
    "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2024%2F06%2F1-4.jpg",
    "publishedAt": "2024-06-10T07:30:52Z",
    "content": "Windows-, MacBook Air, .\r\n - , , . , , , , .\r\n 2024 Huawei MateBook X Pro, «-». , «» .\r\n :\r\nMateBook X Pro 2024:\r\nOLED-8 \r\n, , , 10- .\r\n , Huawei MateBook X Pro «» . . :\r\n1. , , \r\n .\r\n, , MateBook X … [+1462 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacGeneration"
    },
    "author": "Stéphane Moussie",
    "title": "Prince of Persia : Lost Crown porté sur Mac à la fin de l’année",
    "description": "Ce n’est pas un, mais deux jeux Ubisoft qui sortiront sur Mac à la fin de l’année. En plus Assassin’s Creed Shadows prévu le 15 novembre, l’éditeur français va porter Prince of Persia: Lost Crown sur les ordinateurs Apple. Disponible depuis le début de l’anné…",
    "url": "https://www.macg.co/logiciels/2024/06/prince-persia-lost-crown-porte-sur-mac-la-fin-de-lannee-144189",
    "urlToImage": "https://cdn.mgig.fr/2024/06/mga-acb48128-w375-w1500-w750_accroche.jpg",
    "publishedAt": "2024-06-10T07:04:00Z",
    "content": "Ce nest pas un, mais deux jeux Ubisoft qui sortiront sur Mac à la fin de lannée. En plus Assassins Creed Shadows prévu le 15 novembre, léditeur français va porter Prince of Persia: Lost Crown sur les… [+478 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gori.me"
    },
    "author": "g.O.R.i",
    "title": "WWDC24開催目前。Apple待望のAIシステムなど発表予想、見る方法まとめ（日本時間6月11日午前2時〜）",
    "description": "2024年のApple世界開発者会議、通称WWDC24は、日本時間6月11日（火）午前2時から約2時間にわたって開催される基調講演とともにスタートする。 今年はハードウェアの発表はなく、AppleのAIシステム「Apple Intelligence」が発表時間の半分程度を占めると見られる。 本記事で…\nThe post WWDC24開催目前。Apple待望のAIシステムなど発表予想、見る方法まとめ（日本時間6月11日午前2時〜） first appeared on ゴリミー. 【もっと読む】",
    "url": "https://gori.me/apple/wwdc/153658",
    "urlToImage": "https://gori.me/uploads/2024/06/What-to-expect-for-wwdc24-800x500.jpg",
    "publishedAt": "2024-06-10T01:01:59Z",
    "content": "2024AppleWWDC2461122\r\nAppleAIApple Intelligence\r\nWWDC24XTwitter\r\nAppleMaciPadiPhoneiPod touchSafariiOSiOS 10MacmacOS Sierra 10.12\r\nMSEH.264AACChromeFirefoxWindows PCMicrosoft EdgeWindows 10\r\nYouTubeW… [+442 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gori.me"
    },
    "author": "g.O.R.i",
    "title": "iOS 18のベータ版は例年以上にバグが多いかも。正式リース後もAI機能は「ベータ版」として提供",
    "description": "AppleがWWDC24で正式発表するiOS 18は、基調講演終了後より開発者向けベータ版として登場するだろう。最新機能を試すために真っ先にインストールする人は例年以上に注意が必要だ。Bloombergの人気ジャーナリストMark Gurman氏によると、iOS 18 beta 1は「明日リリースす…\nThe post iOS 18のベータ版は例年以上にバグが多いかも。正式リース後もAI機能は「ベータ版」として提供 first appeared on ゴリミー. 【もっと読む】",
    "url": "https://gori.me/ios/ios-news/153659",
    "urlToImage": "https://gori.me/uploads/2024/06/ios18-all-image-2-800x544.jpg",
    "publishedAt": "2024-06-10T01:13:16Z",
    "content": "My sense is that many of the features in the first iOS 18 beta have come in really hot and this first seed is going to be especially buggy. In fact, some are surprised the first betas are going out t… [+120 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Expansion.com"
    },
    "author": "expansion.com",
    "title": "La Primera de Expansión sobre el resultado de las elecciones europeas, Inditex, Apple, Carlos Alcaraz y Elon Musk",
    "description": "Además, hablaremos sobre Inditex, que gana cuota y lidera el mercado textil por beneficios, y sobre Apple, que se prepara para subirse a la ola de la inteligencia artificial...",
    "url": "https://www.expansion.com/podcasts/la-primera-de-expansion/2024/06/10/66668a71e5fdea180b8b458f.html",
    "urlToImage": "https://phantom-expansion.unidadeditorial.es/44812a6dde8381ec5434f50a525b9534/f/webp/assets/multimedia/imagenes/2024/06/10/17179958847723.jpg",
    "publishedAt": "2024-06-10T05:35:29Z",
    "content": "Además, hablaremos sobre Inditex, que gana cuota y lidera el mercado textil por beneficios, y sobre Apple, que se prepara para subirse a la ola de la inteligencia artificial generativa. \r\nEn cuanto a… [+635 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Expansion.com"
    },
    "author": "Alejandro Sánchez",
    "title": "El Ibex duda sin perder de vista el contexto político",
    "description": "La Bolsa de París encabeza las caídas un día después de las elecciones europeas, con Francia como máximo exponente del clima de incertidumbre política. El euro también sufre, y el Ibex inicia la semana de la Fed repitiendo el freno que registró el pasado vier…",
    "url": "https://www.expansion.com/mercados/cronica-bolsa/2024/06/10/66669d6ce5fdeadb448b45a0.html",
    "urlToImage": "https://phantom-expansion.unidadeditorial.es/36cbbbc661241db7fdf9ad0728c2a696/crop/102x75/1983x1329/resize/1200/f/webp/assets/multimedia/imagenes/2024/06/10/17180009716608.jpg",
    "publishedAt": "2024-06-10T06:30:18Z",
    "content": "La Primera de Expansión sobre el resultado de las elecciones europeas, Inditex, Apple, Carlos Alcaraz y Elon Musk"
    },
    {
    "source": {
    "id": null,
    "name": "GameStar"
    },
    "author": "Patrick Schneider",
    "title": "WWDC 2024 - Live-Ticker: Alles zu iOS 18, iPadOS 18, macOS 15 und watchOS 11",
    "description": "Die WWDC 2024 startet heute. Wir zeigen euch live, was Apple zu iOS 18, iPadOS 18, watchOS 11 und macOS 15 präsentiert.",
    "url": "https://www.gamestar.de/artikel/apple-wwdc-2024-live-ticker,3414532.html",
    "urlToImage": "https://images.cgames.de/images/gamestar/4/wwdc-2024-live-ticker_6294355.jpg",
    "publishedAt": "2024-06-10T06:52:00Z",
    "content": "Apple zeigt heute, welche KI-Funktionen in den nächsten Systemupdates integriert werden. Darüber hinaus stehen mit iOS 18 respektive iPadOS 18 einige Neuerungen auf dem Programm wenn man den bisherig… [+4112 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eldiario.es"
    },
    "author": "Juan Luis Sánchez",
    "title": " PODCAST | Elecciones europeas: consecuencias y claves del 9J",
    "description": "El Partido Popular ha ganado las elecciones europeas en España. Lo ha hecho por un margen ajustado: 22 escaños frente a los 20 del PSOE. Ambos están a mucha distancia de Vox, tercera fuerza con 6, de Sumar, que con 3 ha superado los dos de Podemos, que se que…",
    "url": "https://www.eldiario.es/blog/al-dia/podcast-elecciones-europeas-consecuencias-claves-9j_132_11435623.html",
    "urlToImage": "https://static.eldiario.es/clip/95080298-bbf8-46a7-9d0c-7dc96eab939e_facebook-aspect-ratio_default_0.jpg",
    "publishedAt": "2024-06-10T05:11:57Z",
    "content": "El Partido Popular ha ganado las elecciones europeas en España. Lo ha hecho por un margen ajustado: 22 escaños frente a los 20 del PSOE. Ambos están a mucha distancia de Vox, tercera fuerza con 6, de… [+1482 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Giga"
    },
    "author": "Peter Hryciuk",
    "title": "Viel früher als gedacht: Amazon enthüllt brisantes Detail zur neuen Samsung-Smartwatch",
    "description": "Eigentlich wurde erwartet, dass Samsung alle neuen Produkte Anfang Juli 2024 auf einem Galaxy-Unpacked-Event vorstellt. Tatsächlich ist das wohl nicht der Fall. Denn schon Ende Juni 2024 soll eine neue Smartwatch eingeführt werden. Amazon hat dieses Geheimnis…",
    "url": "https://www.giga.de/news/viel-frueher-als-gedacht-amazon-enthuellt-brisantes-detail-zur-neuen-samsung-smartwatch/",
    "urlToImage": "https://crops.giga.de/fc/3b/8c/e239fb46376a19b29e8c2ea69e_YyAyODIweDE0NzMrOTArMTA3AnJlIDEyMDAgNjI3A2ZiZTk0NzEyOGU5.jpg",
    "publishedAt": "2024-06-10T07:40:24Z",
    "content": "Eigentlich wurde erwartet, dass Samsung alle neuen Produkte Anfang Juli 2024 auf einem Galaxy-Unpacked-Event vorstellt. Tatsächlich ist das wohl nicht der Fall. Denn schon Ende Juni 2024 soll eine ne… [+1917 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TVLine"
    },
    "author": "Dave Nemetz",
    "title": "Presumed Innocent Review: Jake Gyllenhaal Keeps Us Guessing in Apple TV+’s Riveting Legal Thriller",
    "description": "On paper, Presumed Innocent might sound like your standard courtroom thriller… but there’s no one you’d rather have writing one of those than David E. Kelley. The man has been cranking out quality TV legal dramas since the days of L.A. Law, and the mind behin…",
    "url": "https://tvline.com/reviews/presumed-innocent-review-jake-gyllenhaal-apple-tv-plus-1235254451/",
    "urlToImage": "https://tvline.com/wp-content/uploads/2024/06/presumed-innocent-apple-jake-gyllenhaal.jpg?w=650",
    "publishedAt": "2024-06-10T01:30:00Z",
    "content": "On paper, Presumed Innocent might sound like your standard courtroom thriller… but there’s no one you’d rather have writing one of those than David E. Kelley. The man has been cranking out quality TV… [+3473 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Zive.cz"
    },
    "author": "Jan Pánek",
    "title": "Letní akce, novinky Applu a sluchátka za korunu. Nabídky hardwaru operátorů v červnu",
    "description": "Výrazné letní slevy na mobily Samsung •Akce zahrnují spoustu příslušenství za 1 korunu\n•Kompletní přehled nabídky zařízení u českých operátorů",
    "url": "https://mobilmania.zive.cz/clanky/letni-akce-novinky-applu-a-sluchatka-za-korunu-nabidky-hardwaru-operatoru-v-cervnu/sc-3-a-1360260/default.aspx",
    "urlToImage": "https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=504242395",
    "publishedAt": "2024-06-10T05:20:00Z",
    "content": "T-Mobile\r\nNa zákazníky T-Mobilu v ervnu ekají tarifní dotace, které se vztahují na portfolio znaek T Phone a Xiaomi. Mohou si tak zakoupit nový T Phone 2 za 199 K nebo Xiaomi Redmi 13C 5G 128GB za 1 … [+44131 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Zive.cz"
    },
    "author": "Martin Chroust",
    "title": "Mobilní výrobci už nás tolik nezahlcují novinkami. V loňském roce uvedli na trh „jen“ 500 nových smatphonů",
    "description": "Také vám přijde, že je trh zahlcený stále novými mobilními telefony? • Tak to nepamatujete rok 2014, kdy se každý den objevily dvě novinky • Za loňských rok se počet novinek dostal na metu 503 modelů",
    "url": "https://mobilmania.zive.cz/clanky/mobilni-vyrobci-uz-nas-tolik-nezahlcuji-novinkami-v-lonskem-roce-uvedli-na-trh-jen-500-novych-smatphonu/sc-3-a-1360263/default.aspx",
    "urlToImage": "https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=119304143",
    "publishedAt": "2024-06-10T06:50:00Z",
    "content": "Asi i vy musíme mít nkdy pocit, e mobilní výrobci, zejména ínské znaky nebo jihokorejský Samsung, na trh chrlí doslova jeden telefon za druhým. Pravdou vak je, e rekordní roky, kdy docházelo k obrovs… [+2427 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hvg.hu"
    },
    "author": "hvg@hvg.hu",
    "title": "Hogyan olvassak gazdasági mutatókat, hogy ne tudjanak átverni? - Kasszakulcs #20",
    "description": "Mit jelent, hogy csökken az infláció, ha minden drágul tovább? Miért érzem magasabbnak annál, mint amit írnak? Hogyan kell értelmezni az átlagbéreket? Mit jelent az én életemre nézve, hogyha nő a GDP? Pénzügyi podcastunkban segítettünk eligazodni a makrogazda…",
    "url": "https://hvg.hu/gazdasag/20240610_202406010_kasszakulcs-podcast-statisztika-gazdasag-gdp-inflacio-foglalkoztatottsag-atlagber",
    "urlToImage": "https://img.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/7f1cd87c-1ac1-4b5b-b2a8-4bc964b3bf6c.jpg",
    "publishedAt": "2024-06-10T03:30:00Z",
    "content": "Néha azt mutatják a számok, hogy szuperül élünk, mégsem érezzük így. Néha azt, hogy rosszul, és akkor annál is rosszabbnak érezzük.\r\nMiért van ez így? A Kasszakulcs legfrissebb adásában Gyükeri Mercé… [+869 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Www.nzz.ch"
    },
    "author": "Marie-Astrid Langer (lma)",
    "title": "Manager kündigen, Hollywood-Stars klagen: Skandale erschüttern Open AI – doch das Geschäft boomt",
    "description": "Der CEO Sam Altman macht Negativschlagzeilen – doch Firmen weltweit lechzen danach, mit Open AI zusammenzuarbeiten. Altmans grösster Coup steht nun kurz bevor: Offenbar soll es einen Deal mit Apple geben.",
    "url": "https://www.nzz.ch/pro-global/manager-kuendigen-hollywood-stars-klagen-skandale-erschuettern-open-ai-doch-das-geschaeft-boomt-ld.1834010",
    "urlToImage": "https://img.nzz.ch/2024/06/07/464f9d88-98aa-4d9d-9acc-e0e74f78da00.jpeg?crop=4724,2657,x0,y62&quality=75&auto=webp?width=1200&height=674&fit=bound&quality=75&auto=webp&wmark=nzz",
    "publishedAt": "2024-06-10T03:30:00Z",
    "content": "Der 39-jährige Altman ist Mitgründer und CEO von Open AI und sorgt bisweilen für Kontroversen.\r\nWer Sam Altman bei öffentlichen Auftritten live erlebt, den dürfte seine Stimme verblüffen. Sie ist san… [+8170 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Www.nzz.ch"
    },
    "author": "Mark  Böschen (MaB)",
    "title": "KOMMENTAR - Im «Ramschladen» Deutsche Börse gibt es erstaunliche Qualität im Angebot",
    "description": "In einer Wutrede hat der Börsenchef Theodor Weimer den eigenen Aktienmarkt als Restpostenhandel beschrieben: Investoren kämen nur noch, weil es so billig sei. Das gilt allerdings für weite Teile der Weltbörsen, wie das grösste Treffen der Private-Equity-Manag…",
    "url": "https://www.nzz.ch/meinung/ramschladen-deutsche-boerse-ld.1834124",
    "urlToImage": "https://img.nzz.ch/2024/06/07/ebfe11ed-0759-41b9-9ffb-3a1500a077e2.jpeg?crop=5401,3038,x0,y245&quality=75&auto=webp?width=1200&height=674&fit=bound&quality=75&auto=webp&wmark=nzz",
    "publishedAt": "2024-06-10T03:30:00Z",
    "content": "Der Deutsche-Börse-CEO Theodor Weimer (li.) mit dem Porsche-Chef Oliver Blume beim Börsenstart des Sportwagenbauers im September 2022.\r\nDem selbsternannten «Mr DAX» ist der Kragen geplatzt. In einer … [+10628 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ipadizate.com"
    },
    "author": "Sergio J. Ortiz",
    "title": "Así puedes conseguir el iPhone 15 Pro Max que regala CaixaBank",
    "description": "CaixaBank está regalando un iPhone 15 Pro Max a sus clientes. Una nueva estrategia de marketing que pretende premiar el ahorro de sus usuarios a través de la motivación de uno de los smartphones más potentes del mercado. Si tienes una cuenta en CaixaBank, sol…",
    "url": "https://ipadizate.com/iphone/asi-puedes-conseguir-el-iphone-15-pro-max-que-regala-caixabank",
    "urlToImage": "https://ipadizate.com/hero/2024/06/iphone-15-pro.1696402151.6939.1696950554.2228.1718002016.6108.jpg?width=1200",
    "publishedAt": "2024-06-10T06:52:01Z",
    "content": "CaixaBank regala 90 unidades de iPhone 15 Pro Max\r\nCaixaBank está regalando un iPhone 15 Pro Max a sus clientes. Una nueva estrategia de marketing que pretende premiar el ahorro de sus usuarios a tra… [+3326 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Just Jared"
    },
    "author": "Just Jared",
    "title": "Jake Gyllenhaal Talks Playing Rivals With Brother-In-Law Peter Sarsgaard In New Series 'Presumed Innocent'",
    "description": "Jake Gyllenhaal and Peter Sarsgaard pose for photos together at the premiere of their new limited series Presumed Innocent held at BMCC Theater on Sunday (June 9) in New York City. The 43-year-old actor and his 53-year-old brother-in-law joined several of the…",
    "url": "https://www.justjared.com/2024/06/10/jake-gyllenhaal-talks-playing-rivals-with-brother-in-law-peter-sarsgaard-in-new-series-presumed-innocent/",
    "urlToImage": "https://cdn01.justjared.com/wp-content/uploads/headlines/2024/06/jake-bro.jpg",
    "publishedAt": "2024-06-10T05:32:03Z",
    "content": "Jake Gyllenhaal and Peter Sarsgaard pose for photos together at the premiere of their new limited series Presumed Innocent held at BMCC Theater on Sunday (June 9) in New York City.\r\nThe 43-year-old a… [+1585 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Natalie.mu"
    },
    "author": "音楽ナタリー",
    "title": "Mrs. GREEN APPLEが「SONGS」初登場、大ファンの大泉洋は興奮抑えきれず",
    "description": "Mrs. GREEN APPLEが6月20日22:00より放送されるNHK総合「SONGS」に出演する。",
    "url": "https://natalie.mu/music/news/577044",
    "urlToImage": "https://ogre.natalie.mu/media/news/music/2024/0610/SONGS_MrsGREENAPPLE02.jpg?impolicy=twitter_card_face_crop",
    "publishedAt": "2024-06-10T04:47:00Z",
    "content": "@WWW_ahen\r\n#MrsGREENAPPLE https://t.co/m0HkiejIG2"
    },
    {
    "source": {
    "id": null,
    "name": "Natalie.mu"
    },
    "author": "音楽ナタリー",
    "title": "「@JAM EXPO」出演者第2弾はアンス、開歌、かすてら、九州女子翼、すいすて、タスクら20組",
    "description": "9月14～16日に神奈川・横浜アリーナで開催される音楽フェス「@JAM EXPO 2024 supported by UP-T」の出演者第2弾が発表された。",
    "url": "https://natalie.mu/music/news/576986",
    "urlToImage": "https://ogre.natalie.mu/media/news/music/2024/0526/atjamexpo2024_logo.jpg?impolicy=twitter_card_face_crop",
    "publishedAt": "2024-06-10T03:00:00Z",
    "content": "2024914 2024915 2024916 \r\n1\r\nI MY ME MINE / Appare! / 8WIZARD / THE ORCHESTRA TOKYO / / / CANDY TUNE / / Jams Collection / Sweet Alley / / STAiNY / × / .inc / / PANDAMIC / Peel the Apple / 100 / FEST… [+202 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "STERN.de"
    },
    "author": "STERN.de",
    "title": "Computer: Apple-Chef verspricht \"Großes\" für Entwicklerkonferenz",
    "description": "Von Apples Entwicklerkonferenz WWDC werden vor allem KI-Funktionen erwartet. Konzernchef Tim Cook trifft sich am Vorabend mit jungen Programmierern - und hat ein Lob für eine deutsche Studentin parat.",
    "url": "https://www.stern.de/gesellschaft/regional/nordrhein-westfalen/computer--apple-chef-verspricht--grosses--fuer-entwicklerkonferenz-34784152.html",
    "urlToImage": "https://image.stern.de/34784154/t/ZX/v1/w1440/r1.7778/-/10--urnnewsmldpacom2009010124061099337174v2w800h600l1008t753r3024b2265jpeg---61bb39a70dd3842c.jpg",
    "publishedAt": "2024-06-10T04:08:31Z",
    "content": "Von Apples Entwicklerkonferenz WWDC werden vor allem KI-Funktionen erwartet. Konzernchef Tim Cook trifft sich am Vorabend mit jungen Programmierern - und hat ein Lob für eine deutsche Studentin parat… [+2117 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Impress.co.jp"
    },
    "author": null,
    "title": "2020年モデルのiPadが36,300円、Qualitの中古Aランク品セール",
    "description": "2020年に発売されたApple「第8世代 iPad Wi-Fi(MYLA2J/A)」の中古品が、横河レンタ・リースが運営する通販サイト「Qualit」で特価販売中。",
    "url": "https://akiba-pc.watch.impress.co.jp/docs/usedpc_hotline/1598533.html",
    "urlToImage": "https://akiba-pc.watch.impress.co.jp/img/ah/list/1598/533/asale1.jpg",
    "publishedAt": "2024-06-10T03:00:00Z",
    "content": "2020Apple8 iPad Wi-Fi(MYLA2J/A)Qualit\r\n ()A32GB36,30012 \r\n 2,160×1,620RetinaA12X BionicUSB-C-LightningUSB-C"
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Laurin Meyer, Nando Sommerfeldt",
    "title": "Europas Rechtsruck und die 4 Investments des Börsen-Superstars",
    "description": "In der heutigen Folge von “Alles auf Aktien” sprechen die Finanzjournalisten Laurin Meyer und Nando Sommerfeldt über das Orakel von Washington, Lieferprobleme bei Airbus und den Tag der Meme-Stocks.",
    "url": "https://www.welt.de/podcasts/alles-auf-aktien/article251943762/Boersen-Podcast-AfD-Aufschwung-Gruenen-Absturz-Macron-Beben-die-Folgen-der-Europawahl.html",
    "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile244546174/4791354867-ci16x9-w1200/meyer-somm-DWO-Podcast-Teaser-AllesAufAktien-mit-2zu3-meyer-sommerfeld-aw.jpg",
    "publishedAt": "2024-06-10T02:58:25Z",
    "content": "Außerdem geht es um Vonovia, LEG, Aroundtown, TAG, Infineon, Gamestop, AMC Entertainment, Koss, Nvidia, Arm Holdings, Recursion Pharmaceuticals, SoundHound, Softbank und Nano-X Imaging.\r\nHier die akt… [+278 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ispazio.net"
    },
    "author": "Francesco Santagati",
    "title": "iOS 18 includerà un’app Password dedicata",
    "description": "iOS 18 includerà un’app Password dedicata\n\nApple introdurrà una nuova app Password con iOS 18, iPadOS 18 e macOS 15, secondo quanto riportato da Mark Gurman di Bloomberg. La nuova app offrirà agli utenti di iPhone, iPad e Mac un modo più semplice per accedere…",
    "url": "https://www.ispazio.net/2070918/ios-18-includera-unapp-password-dedicata",
    "urlToImage": "https://www.ispazio.net/wp-content/uploads/2024/06/app-password-ios-18-ispazio.jpg",
    "publishedAt": "2024-06-10T06:55:33Z",
    "content": "Apple introdurrà una nuova app Password con iOS 18, iPadOS 18 e macOS 15, secondo quanto riportato da Mark Gurman di Bloomberg. La nuova app offrirà agli utenti di iPhone, iPad e Mac un modo più semp… [+1549 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Apple to break AI silence at developers conference",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_75449401-242c-4712-b7eb-b54db799954b",
    "urlToImage": null,
    "publishedAt": "2024-06-10T01:25:03Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Mark Gurman",
    "title": "Apple WWDC Event Will Show Whether It Can Be a Force in AI Industry",
    "description": "(Bloomberg) -- Apple Inc.’s developers conference on Monday will show whether the iPhone maker can become a major player in the burgeoning field of...",
    "url": "https://finance.yahoo.com/news/apple-wwdc-event-show-whether-040000897.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/NsJS0XoN3QJjnRYkcsoZgA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://media.zenfs.com/en/bloomberg_technology_68/f6baa15e17978a4adb0e5d9bfeafcf82",
    "publishedAt": "2024-06-10T04:00:00Z",
    "content": "(Bloomberg) -- Apple Inc.s developers conference on Monday will show whether the iPhone maker can become a major player in the burgeoning field of artificial intelligence, marking a critical moment f… [+3682 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Malwarebytes.com"
    },
    "author": "Malwarebytes Labs",
    "title": "A week in security (June 3 – June 9)",
    "description": "A list of topics we covered in the week of June 3 to June 9 of 2024",
    "url": "https://www.malwarebytes.com/blog/news/2024/06/a-week-in-security-june-3-june-9",
    "urlToImage": "https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/11/Week_in_Security.jpg",
    "publishedAt": "2024-06-10T07:01:35Z",
    "content": "June 6, 2024 - A husband, now indicted, allegedly used seven Apple AirTags to stalk his ex-wife over a period of several weeks. His trial begins this month. \r\nJune 6, 2024 - A worried researcher has … [+254 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CHIP Online Deutschland"
    },
    "author": "Michael Humpa",
    "title": "WWDC-Vorschau: Diese Neuheiten zeigt Apple heute Abend",
    "description": "Die diesjährige Worldwide Developers Conference (WWDC) von Apple steht vor der Tür. Mit iOS 18 wird am Montagabend, um 19:00 Uhr deutscher Zeit das nächste Software-Generation für das iPhone vorgestellt. Nutzer können sich auf jede Menge Neuerungen freuen.",
    "url": "https://www.chip.de/news/WWDC-Vorschau-Diese-Neuheiten-zeigt-Apple-heute-Abend_185307365.html",
    "urlToImage": "https://www.chip.de/ii/1/2/6/9/2/9/4/7/2/Design_ohne_Titel__9_-e3d5a2000742dfa8.jpg",
    "publishedAt": "2024-06-10T07:00:00Z",
    "content": "Laut dem renommierten Bloomberg-Journalisten Mark Gurman, wird bei der diesjährigen Worldwide Developers Conference (WWDC) keine neue Hardware vorgestellt. Dies ist jedoch keine Überraschung, da die … [+1006 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CHIP Online Deutschland"
    },
    "author": "Redaktion CHIP",
    "title": "ChatGPT auf dem iPhone: Sprachassistent bald auch bei der Nutzung anderer Apps aktiv",
    "description": "Das neue ChatGPT-Update für das iPhone ermöglicht die Nutzung von KI während der Verwendung anderer Apps. Was das für Siri bedeutet, erfährst du hier.",
    "url": "https://www.chip.de/news/Sprachassistent-bald-auch-bei-der-Nutzung-anderer-Apps-aktiv-ChatGPT-auf-dem-iPhone_185312990.html",
    "urlToImage": "https://www.chip.de/ii/1/2/6/9/3/1/2/5/0/ChatPGT_App_Appleh-26cc5ece7bc8e2f2.jpg",
    "publishedAt": "2024-06-10T04:21:00Z",
    "content": "Sollte Apple ChatGPT tatsächlich wie vermutet in das kommende iOS 18 integrieren, ist unklar, was dies für die Zukunft von Siri bedeutet. Es könnte bedeuten, dass Siri nicht nur Befehle empfangen und… [+579 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CHIP Online Deutschland"
    },
    "author": "Redaktion CHIP",
    "title": "Sicherheitslücke in macOS 14: Mail-App kontaktiert weiterhin Tracking-Server",
    "description": "Apples Kampf gegen Mail-Tracking in macOS 14 hat Probleme: Trotz aktivierter \"Inhalte blockieren\"-Einstellung werden Tracking-Server kontaktiert.",
    "url": "https://www.chip.de/news/Mail-App-kontaktiert-weiterhin-Tracking-Server-Sicherheitsluecke-in-macOS-14_185313137.html",
    "urlToImage": "https://www.chip.de/ii/1/2/6/9/3/1/2/9/9/Apple_Mail_Tracking_macOS_14-81f4b32dea82e161.jpg",
    "publishedAt": "2024-06-10T04:09:00Z",
    "content": "Besonders kritisch ist, dass die Mail-App unter macOS Sonoma genau dann versucht, Tracking-Server zu kontaktieren, wenn E-Mails im Spam- oder Werbeordner landen. Warum dies auf Code-Ebene geschieht, … [+651 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphon.fr"
    },
    "author": "iPhon.fr",
    "title": "Compatible Apple Pay, Fortuneo offre 220€ cash pour la bienvenue",
    "description": "Pour booster l'acquisition client avant l'été, Fortuneo organise une opération choc. Quiconque ouvrira un compte courant (gratuit) avec une carte Gold Mastercard (gratuite) pourra aussi repartir avec une prime de 220 euros en guise de bienvenue.",
    "url": "https://www.iphon.fr/post/compatible-apple-pay-fortuneo-offre-220e-cash-pour-la-bienvenue",
    "urlToImage": "https://www.iphon.fr/app/uploads/2023/03/carte-fortuneo-banque.jpg",
    "publishedAt": "2024-06-10T00:56:30Z",
    "content": "Fortuneo est l’une des grandes banques en ligne de l’Hexagone avec un million de clients. Filiale du Crédit Mutuel Arkéa, elle est aussi connue pour être l’une des plus sérieuses et fiables. C’est d’… [+2638 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphon.fr"
    },
    "author": "Tristan Carballeda",
    "title": "iOS 18 : le mode sombre et Face ID pourraient évoluer (en bien)",
    "description": "Apple pourrait lancer de nouvelles fonctionnalités liées à Face ID et au mode sombre dès ce soir avec iOS 18.",
    "url": "https://www.iphon.fr/post/ios-18-le-mode-sombre-et-face-id-pourraient-evoluer-en-bien",
    "urlToImage": "https://www.iphon.fr/app/uploads/2024/06/apple-iphone-mode-sombre-ios-18.jpg",
    "publishedAt": "2024-06-10T06:51:00Z",
    "content": "Apple doit prendre la parole ce soir pour dévoiler les grandes nouveautés diOS 18 et de ses autres systèmes dexploitation. La firme de Cupertino na encore fait aucune annonce préalable à cette confér… [+2001 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ifun.de › Apple-News seit 2001"
    },
    "author": "Chris",
    "title": "WWDC-Start: Ab 19 Uhr blicken wir in Apples Zukunft",
    "description": "Macht euch bereit für die WWDC24 und die Vorstellung von Apples kommenden Betriebssystemen. Um 19 Uhr unserer Zeit geht es heute Abend los und die Veranstaltung wird wie immer live übertragen. Wobei wir damit rechnen, dass es sich bei der Keynote an sich wied…",
    "url": "https://www.ifun.de/wwdc-start-ab-19-uhr-blicken-wir-in-apples-zukunft-233931/",
    "urlToImage": "https://images.ifun.de/wp-content/uploads/2024/06/wwdc24-feature.jpg",
    "publishedAt": "2024-06-10T04:56:41Z",
    "content": "Macht euch bereit für die WWDC24 und die Vorstellung von Apples kommenden Betriebssystemen. Um 19 Uhr unserer Zeit geht es heute Abend los und die Veranstaltung wird wie immer live übertragen.\r\nWobei… [+2138 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ifun.de › Apple-News seit 2001"
    },
    "author": "Chris",
    "title": "„Prince of Persia: The Lost Crown“ für Mac lässt sich vorbestellen",
    "description": "Nachdem Assassin’s Creed Mirage und „Rabbids: Legends of the Multiverse“ bereits für Apple-Geräte erschienen sind, bereitet Ubisoft die Veröffentlichung von Prince of Persia: The Lost Crown für den Mac vor. Die App ist jetzt mit dem Vermerk „Bald erhältlich“ …",
    "url": "https://www.ifun.de/prince-of-persia-the-lost-crown-fuer-mac-laesst-sich-vorbestellen-233938/",
    "urlToImage": "https://images.ifun.de/wp-content/uploads/2024/06/prince-of-persia-feature.jpg",
    "publishedAt": "2024-06-10T07:16:39Z",
    "content": "Nachdem Assassins Creed Mirage und Rabbids: Legends of the Multiverse bereits für Apple-Geräte erschienen sind, bereitet Ubisoft die Veröffentlichung von Prince of Persia: The Lost Crown für den Mac … [+2721 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Ben Schwan",
    "title": "iOS-18-Gerüchte kurz vor Keynote: Kontrollzentrum, App-Face-ID, dunkle Icons",
    "description": "Kurz vor der Keynote am Montagabend sind weitere Details zum neuen iPhone-Betriebsystem durchgesickert. Apple plant Optimierungen an vielen Stellen.",
    "url": "https://www.heise.de/news/iOS-18-Geruechte-kurz-vor-Keynote-Kontrollzentrum-App-Face-ID-dunkle-Icons-9755209.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/0/9/6/5/9/tre_iPhone-15-cdf021d19301dc0e.jpeg",
    "publishedAt": "2024-06-10T07:45:00Z",
    "content": "Inhaltsverzeichnis\r\nIn knapp neun Stunden beginnt Apples Präsentation zur Entwicklerkonferenz WWDC 2024, bei der vor allem die Neuerungen in den Betriebssystemen des Konzerns im Vordergrund stehen we… [+2452 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Desdelinux.net"
    },
    "author": "Linux Post Install",
    "title": "Top nuevas Distros GNU/Linux a ser reconocidas: 2024 – Parte 10",
    "description": "En esta parte 10 te daremos a conocer 4 interesantes Distros GNU/Linux, que están en la lista de espera de DW para ser reconocidas este 2024.",
    "url": "https://blog.desdelinux.net/top-nuevas-distros-gnu-linux-2024-parte-10/",
    "urlToImage": "https://blog.desdelinux.net/wp-content/uploads/2024/06/top-nuevas-distros-gnu-linux-2024-parte-10-imagen-destacada-blog-desdelinux.jpeg",
    "publishedAt": "2024-06-10T04:00:43Z",
    "content": "Top nuevas Distros GNU/Linux a ser reconocidas: 2024 – Parte 10\r\nContinuando este mes de junio de 2024 con nuestra actual serie de publicaciones llamada Top de nuevas Distros GNU/Linux, hoy les ofrec… [+5491 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Yahoo Sports Videos",
    "title": "Is Jrue Holiday a dark horse candidate for Finals MVP? | Good Word with Goodwill",
    "description": "Yahoo Sports senior NBA reporter Vincent Goodwill is joined by Dan Devine to discuss Celtics guard Jrue Holiday's candidacy for Finals MVP and why he's been so effective against the Mavericks. Hear the full conversation on “Good Word with Goodwill” - part of …",
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_6a19e724-3eb4-4bc4-aee2-a9138effe715",
    "urlToImage": null,
    "publishedAt": "2024-06-10T07:47:18Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ixbt.com"
    },
    "author": "jin@ixbt.com (Jin)",
    "title": "Unreal Engine, SoC Snapdragon и VR-очки — сегодня эти технологии становятся частью автомобиля. Появились живые фото Chery iCar V23",
    "description": "Автомобиль Chery iCar V23, который был представлен в апреле, показали вживую в черном цвете. Начало продаж запланировано на конец этого года. Автомобиль получил рубленый дизайн, он оснащен скрытыми дверными ручками, боковыми подножками и расширенными колесным…",
    "url": "https://www.ixbt.com/news/2024/06/10/unreal-engine-soc-snapdragon-vr-chery-icar-v23.html",
    "urlToImage": "https://www.ixbt.com/img/n1/news/2024/5/1/bd791b6b-eafb-453a-8136-d50c7980c97d.png",
    "publishedAt": "2024-06-10T04:30:00Z",
    "content": "Chery iCar V23, , . .\r\n , , .\r\n Snapdragon 8155 Qualcomm 5G, 2,5K, Unreal Engine. Apple Carplay VR-.\r\n Horizon J3 TDA4 , , , , .\r\niCar V23, , . iWD. , 500 ."
    },
    {
    "source": {
    "id": null,
    "name": "Horizont.net"
    },
    "author": "HORIZONT Online / dpa",
    "title": "Entwicklerkonferenz WWDC: Apple-Chef Cook verspricht \"eine große Sache\" bei KI-Applikationen",
    "description": "Apple stürzte sich bisher nicht so ins KI-Abenteuer wie andere Tech-Konzerne. Doch bei der Entwicklerkonferenz WWDC könnte der iPhone-Konzern kräftig nachlegen.",
    "url": "https://www.horizont.net/marketing/nachrichten/entwicklerkonferenz-wwdc-apple-chef-cook-verspricht-eine-grosse-sache-bei-ki-applikationen-220457",
    "urlToImage": "https://www.horizont.net/news/media/45/Apple-Park-Headquarter-Unternehmenszentrale-Sitz-441222.jpeg",
    "publishedAt": "2024-06-10T04:55:00Z",
    "content": "Bei der hauseigenen WWDC-Konferenz am Sitz der Firma im kalifornischen Cupertino gibt der iPhone-Konzern traditionell einen Ausblick auf Software und Funktionen, die ab Herbst mit neuen Geräte-Genera… [+460 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Geeky Gadgets"
    },
    "author": "Roland Hutchinson",
    "title": "iOS 18 Features Expected At WWDC Today",
    "description": "Apple fans around the world are eagerly anticipating the unveiling of iOS 18 at WWDC later today. This update is set to be one of the most significant in recent years, promising a range of new features and enhancements that will revolutionize the way you inte…",
    "url": "https://www.geeky-gadgets.com/ios-18-features-expected-at-wwdc-today/",
    "urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2024/06/Apple-iOS-18.jpg",
    "publishedAt": "2024-06-10T06:30:38Z",
    "content": "Apple fans around the world are eagerly anticipating the unveiling of iOS 18 at WWDC later today. This update is set to be one of the most significant in recent years, promising a range of new featur… [+6022 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Huffingtonpost.jp"
    },
    "author": "ハフポスト日本版編集部",
    "title": "カラオケで人気の曲。 Bling-Bang-Bang-Bornを抑えた1位は“あの曲“【2024年上半期ランキング】",
    "description": "2024年上半期カラオケランキング【あわせて読みたい】「どうしてこうなった？」カラオケの採点機能でまさかのグラフに驚きの声が広がる\r\n皆さんは、カラオケに行ったら必ず歌う曲はありますか？第一興商が6月10日、「DAM 2024年上半期カラオケランキング」を発表しました。\r\n今年の上半期にカラオケでよく歌われたのはどの曲だったのでしょうか。気になる結果をご紹介します。\r\n2024年上半期カラオケランキング\r\n10位 サウダージ（ポルノグラフィティ）\r\n9位 さよならエレジー（菅田将暉）\r\n8位 ケセラセラ（Mrs.…",
    "url": "https://www.huffingtonpost.jp/entry/story_jp_66664edae4b0a01ba85b2a57",
    "urlToImage": "https://img.huffingtonpost.com/asset/66665df022000020001a4ffc.jpg?cache=6ZsMnWdu3I&ops=1200_630",
    "publishedAt": "2024-06-10T02:30:41Z",
    "content": "610DAM 2024\r\n10 \r\n9 \r\n8 Mrs. GREEN APPLE\r\n7  \r\n6 YOASOBI\r\n5 \r\n4 \r\n3 tuki.\r\n2 Bling-Bang-Bang-BornCreepy Nuts\r\n1 Vaundy\r\n120231Vaundy\r\n2-MASHLE- Creepy NutsBling-Bang-Bang-Born\r\nTV1\r\n315tuki.\r\n237TikT… [+2 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ixbt.com"
    },
    "author": "jin@ixbt.com (Jin)",
    "title": "«iOS может многое из того, чего не может Samsung». Инсайдер заявил, что сегодня, 10 июня, Samsung сегодня лишится ИИ-преимущества перед iPhone",
    "description": "Сегодня, 10 июня, стартует ежегодная технологическая конференция Apple Worldwide Developers Conference (WWDC). Ожидается, что сегодня будут анонсированы ИИ-функции для iOS 18. Известный инсайдер Ice Universe опубликовал некоторые подробности на этот счет. Он …",
    "url": "https://www.ixbt.com/news/2024/06/10/ios-samsung-10-samsung-iphone.html",
    "urlToImage": "https://www.ixbt.com/img/n1/news/2024/5/1/image%20(96)_large.png",
    "publishedAt": "2024-06-10T01:18:00Z",
    "content": ", 10 , Apple Worldwide Developers Conference (WWDC). , - iOS 18.\r\n Ice Universe . , Samsung iPhone .\r\n 24 Samsung . Samsung , , .\r\nIce Universe\r\n, « iOS , Samsung, , Samsung. iOS , Samsung».\r\nIce Uni… [+90 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "Nathan Rott",
    "title": "Illegal wildlife trade is booming. What does that mean for the confiscated animals?",
    "description": "Wildlife trafficking is one of the largest and most profitable crime sectors in the world. The illegal trade estimated to be a multi-billion dollar industry. On a high level, that illegal trade causes problems for everything from global biodiversity to local …",
    "url": "https://www.npr.org/2024/06/10/1198910180/animals-illegal-wildlife-trade-trafficking",
    "urlToImage": "https://media.npr.org/assets/img/2024/06/07/6.10.24-ep-art_wide-d3ccd88a0c2ff5b7fd73c48cbc44bbca90e1d15b.jpg?s=1400&c=100&f=jpeg",
    "publishedAt": "2024-06-10T07:00:59Z",
    "content": "The illegal wildlife trade is estimated to be a multi-billion dollar enterprise. Live animals that are caught, like this box turtle, need immediate and long-term care at facilities like The Turtle Co… [+2264 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "Apple 苹果 iPad10.9英寸平板电脑 2022年款粉色 2349元（需用券）",
    "description": "Apple 苹果 iPad10.9英寸平板电脑 2022年款粉色 2349元（需用券）,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
    "url": "https://www.smzdm.com/p/115632331/",
    "urlToImage": "https://qny.smzdm.com/202210/19/634f65fa9bc4f6601.jpg_d250.jpg",
    "publishedAt": "2024-06-10T05:42:48Z",
    "content": "iPad 2022iPad ProiPad Air10.9Liquid2360*1640264PPI500nit10.9HomeIDIPad 2022LightningUSB-C\r\nA145nm118 20% 10%16A13280%12001200122°12004K240fps\r\n64GB256GBWLAN5GWi-Fi 6iPad 2022Apple PenciliPadOS 16 iPad"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "百亿补贴：Apple 苹果 Watch Series 9 智能手表 GPS款 45mm 2299元",
    "description": "拼多多百亿补贴到手价2299元，近期好价！",
    "url": "https://www.smzdm.com/p/115631641/",
    "urlToImage": "https://y.zdmimg.com/202309/13/6500bbefc734d2300.png_d250.jpg",
    "publishedAt": "2024-06-10T05:42:48Z",
    "content": "Apple Watch Series 9 Apple S9 56Series 8 60%GPU30%siriAppleiPhone\r\nApple Watch Series 9200013256G\r\nApple Watch Series 9 3618"
    }
    ]
  constructor(){
    super();
    console.log("Hello I am constructor from news components  ");
    this.state = {
      articles: this.articles,
      loading: false

    }
  }

  render() {
    return (
      <div className="container my-3 ">
        <h2>NewsMonkey - Top Headlines</h2>
      <div className="row"> 
        { this.state.articles.map((element)=>{ 
        return  <div className="col-md-4" key={element.url} > 
             <NewsItem   title= {element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
      })}
         </div>
        </div>
    )
  }
}

export default News
