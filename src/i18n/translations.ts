export const LANGUAGES = [
  { code: "en", label: "English", slug: "en" },
  { code: "fr", label: "Français", slug: "fr" },
  { code: "es", label: "Español", slug: "es" },
  { code: "de", label: "Deutsch", slug: "de" },
  { code: "pt", label: "Português", slug: "pt" },
  { code: "zh-CN", label: "简体中文", slug: "zh-cn" },
  { code: "zh-TW", label: "繁體中文", slug: "zh-tw" },
  { code: "ja", label: "日本語", slug: "jp" },
  { code: "ko", label: "한국어", slug: "ko" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export type TranslationKey =
  | "nav.download"
  | "nav.language"
  | "hero.eyebrow"
  | "hero.title1"
  | "hero.title2"
  | "hero.body"
  | "hero.cta.ios"
  | "hero.cta.android"
  | "hero.note"
  | "how.eyebrow"
  | "how.title"
  | "how.step"
  | "how.s1.title"
  | "how.s1.body"
  | "how.s2.title"
  | "how.s2.body"
  | "how.s3.title"
  | "how.s3.body"
  | "sched.eyebrow"
  | "sched.title"
  | "sched.body"
  | "sched.b1.title"
  | "sched.b1.body"
  | "sched.b2.title"
  | "sched.b2.body"
  | "sched.b3.title"
  | "sched.b3.body"
  | "sched.b4.title"
  | "sched.b4.body"
  | "sched.caption"
  | "stats.s1"
  | "stats.s2"
  | "stats.s3"
  | "feat.eyebrow"
  | "feat.title"
  | "feat.f1.title"
  | "feat.f1.body"
  | "feat.f2.title"
  | "feat.f2.body"
  | "feat.f3.title"
  | "feat.f3.body"
  | "feat.f4.title"
  | "feat.f4.body"
  | "quote.body"
  | "quote.author"
  | "cta.eyebrow"
  | "cta.title"
  | "cta.body"
  | "footer.tagline"
  | "footer.top"
  | "footer.download"
  | "footer.privacy"
  | "footer.terms"
  | "footer.support"
  | "footer.copy"
  | "support.eyebrow"
  | "support.title"
  | "support.intro"
  | "support.email.prefix"
  | "support.email.suffix"
  | "support.home"
  | "support.privacy"
  | "support.terms"
  | "support.meta.title"
  | "support.meta.description";

type Dict = Record<TranslationKey, string>;

const en: Dict = {
  "nav.download": "Download",
  "nav.language": "Language",
  "hero.eyebrow": "For the global traveler",
  "hero.title1": "Beat jet lag.",
  "hero.title2": "Arrive ready.",
  "hero.body":
    "A personalized hour-by-hour schedule for your body — starting 48 hours before departure through 48 hours after landing. Built for people who cross continents the way most cross town.",
  "hero.cta.ios": "Download for iOS",
  "hero.cta.android": "Get on Android",
  "hero.note": "Works for eastward and westward travel · 14-day free trial",
  "how.eyebrow": "How it works",
  "how.title": "Three steps. Then a calmer flight.",
  "how.step": "Step",
  "how.s1.title": "Enter your flight",
  "how.s1.body":
    "Search by airline code, flight number, and date. Sandpiper pulls live data — departure times, time zones, distance — automatically.",
  "how.s2.title": "Get your schedule",
  "how.s2.body":
    "A personalized timeline of actions — when to seek light, avoid screens, take melatonin, cut caffeine, and sleep — built around your body clock and your route.",
  "how.s3.title": "Follow along",
  "how.s3.body":
    "Enable notifications and Sandpiper nudges you at exactly the right moment. Your schedule is saved offline — no connection needed at 35,000 feet.",
  "sched.eyebrow": "Your plan",
  "sched.title": "Two clocks. One plan. Zero jet lag.",
  "sched.body":
    "From two days before departure through two days after arrival, Sandpiper shows every action against both your home time and your destination time — so you always know what your body should be doing, no matter which clock you're reading.",
  "sched.b1.title": "Both timezones, side by side",
  "sched.b1.body":
    "In-flight events show your departure time and your destination time on the same row — your body's clock and your watch, in sync.",
  "sched.b2.title": "Live destination clock",
  "sched.b2.body":
    "A sticky bar pinned to the bottom shows the current time in your arrival city, ticking second by second.",
  "sched.b3.title": "‘You are here’ on the timeline",
  "sched.b3.body":
    "An amber line marks exactly where you are in your plan. Past events sit above. Next action sits below.",
  "sched.b4.title": "Tap any event to learn the science",
  "sched.b4.body":
    "Each card opens to explain why this action, why now, and what to do if you miss it.",
  "sched.caption": "SFO → HND · live destination clock",
  "stats.s1": "Report better sleep on arrival",
  "stats.s2": "Time zones supported",
  "stats.s3": "Pre-flight prep window",
  "feat.eyebrow": "Features",
  "feat.title": "Built for serious travelers.",
  "feat.f1.title": "Offline-first",
  "feat.f1.body":
    "Your schedule is saved the moment you book. No signal? No problem — it's all there when you land.",
  "feat.f2.title": "East and west",
  "feat.f2.body":
    "The algorithm accounts for travel direction. Westward flights are easier. We treat them differently.",
  "feat.f3.title": "48 hours out, 48 hours in",
  "feat.f3.body":
    "Prep starts before you leave. Recovery continues after you land. Most apps stop at departure.",
  "feat.f4.title": "Science-backed",
  "feat.f4.body":
    "Built on circadian biology research — not wellness trends. Light, melatonin, caffeine, and sleep timing that actually moves your clock.",
  "quote.body":
    "“I've tried everything for jet lag. Sandpiper is the first thing that actually worked. I land in Tokyo and go straight to a meeting.”",
  "quote.author": "Frequent flyer, 180k miles / year",
  "cta.eyebrow": "Ready when you are",
  "cta.title": "Your next flight is different.",
  "cta.body": "Add your flight and get your schedule in under a minute.",
  "footer.tagline": "Beat jet lag. Arrive ready.",
  "footer.top": "Top",
  "footer.download": "Download",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "footer.support": "Support",
  "footer.copy": "© 2026 Sandpiper · Made for travelers who cross continents",
  "support.eyebrow": "Help",
  "support.title": "Support",
  "support.intro": "Have a question or running into an issue? We're here to help.",
  "support.email.prefix": "Email us at",
  "support.email.suffix": "and we'll get back to you as soon as possible.",
  "support.home": "Home",
  "support.privacy": "Privacy",
  "support.terms": "Terms",
  "support.meta.title": "Support — Sandpiper",
  "support.meta.description": "Get help with the Sandpiper app.",
};

const fr: Dict = {
  "nav.download": "Télécharger",
  "nav.language": "Langue",
  "hero.eyebrow": "Pour le voyageur international",
  "hero.title1": "Battez le décalage horaire.",
  "hero.title2": "Arrivez prêt.",
  "hero.body":
    "Un programme personnalisé heure par heure pour votre corps — de 48 heures avant le départ à 48 heures après l'atterrissage. Conçu pour ceux qui traversent les continents comme d'autres traversent la ville.",
  "hero.cta.ios": "Télécharger pour iOS",
  "hero.cta.android": "Obtenir sur Android",
  "hero.note": "Fonctionne pour les voyages vers l'est et l'ouest · 14 jours d'essai gratuit",
  "how.eyebrow": "Comment ça marche",
  "how.title": "Trois étapes. Puis un vol plus serein.",
  "how.step": "Étape",
  "how.s1.title": "Saisissez votre vol",
  "how.s1.body":
    "Recherchez par compagnie, numéro de vol et date. Sandpiper récupère automatiquement les données en direct — heures, fuseaux, distance.",
  "how.s2.title": "Recevez votre programme",
  "how.s2.body":
    "Une chronologie personnalisée — quand chercher la lumière, éviter les écrans, prendre la mélatonine, couper la caféine et dormir — adaptée à votre horloge interne et à votre trajet.",
  "how.s3.title": "Suivez le rythme",
  "how.s3.body":
    "Activez les notifications et Sandpiper vous alerte au bon moment. Votre programme est sauvegardé hors ligne — aucune connexion nécessaire à 10 000 mètres.",
  "sched.eyebrow": "Votre plan",
  "sched.title": "Deux horloges. Un plan. Zéro décalage.",
  "sched.body":
    "De deux jours avant le départ à deux jours après l'arrivée, Sandpiper affiche chaque action sur votre heure de départ et votre heure d'arrivée — pour toujours savoir ce que votre corps doit faire.",
  "sched.b1.title": "Les deux fuseaux, côte à côte",
  "sched.b1.body":
    "En vol, chaque événement affiche votre heure de départ et votre heure d'arrivée sur la même ligne — votre horloge biologique et votre montre, synchronisées.",
  "sched.b2.title": "Horloge de destination en direct",
  "sched.b2.body":
    "Une barre fixée en bas affiche l'heure actuelle dans votre ville d'arrivée, seconde après seconde.",
  "sched.b3.title": "« Vous êtes ici » sur la chronologie",
  "sched.b3.body":
    "Une ligne ambre indique exactement où vous en êtes. Les événements passés au-dessus. La prochaine action en-dessous.",
  "sched.b4.title": "Touchez un événement pour comprendre",
  "sched.b4.body":
    "Chaque carte explique pourquoi cette action, pourquoi maintenant, et que faire si vous la manquez.",
  "sched.caption": "SFO → HND · horloge de destination en direct",
  "stats.s1": "Déclarent mieux dormir à l'arrivée",
  "stats.s2": "Fuseaux horaires pris en charge",
  "stats.s3": "Fenêtre de préparation avant le vol",
  "feat.eyebrow": "Fonctionnalités",
  "feat.title": "Conçu pour les voyageurs sérieux.",
  "feat.f1.title": "Hors ligne d'abord",
  "feat.f1.body":
    "Votre programme est enregistré dès la réservation. Pas de signal ? Pas de problème — tout est là à l'atterrissage.",
  "feat.f2.title": "Est et ouest",
  "feat.f2.body":
    "L'algorithme tient compte du sens du voyage. Les vols vers l'ouest sont plus faciles. Nous les traitons différemment.",
  "feat.f3.title": "48 h avant, 48 h après",
  "feat.f3.body":
    "La préparation commence avant le départ. La récupération continue après l'atterrissage. La plupart des apps s'arrêtent au décollage.",
  "feat.f4.title": "Fondé sur la science",
  "feat.f4.body":
    "Basé sur la recherche en biologie circadienne — pas sur des tendances bien-être. Lumière, mélatonine, caféine et sommeil qui décalent vraiment votre horloge.",
  "quote.body":
    "« J'ai tout essayé contre le décalage horaire. Sandpiper est la première chose qui a vraiment marché. J'atterris à Tokyo et je vais en réunion. »",
  "quote.author": "Voyageur fréquent, 290 000 km / an",
  "cta.eyebrow": "Prêt quand vous l'êtes",
  "cta.title": "Votre prochain vol sera différent.",
  "cta.body": "Ajoutez votre vol et obtenez votre programme en moins d'une minute.",
  "footer.tagline": "Battez le décalage horaire. Arrivez prêt.",
  "footer.top": "Haut",
  "footer.download": "Télécharger",
  "footer.privacy": "Confidentialité",
  "footer.terms": "Conditions",
  "footer.support": "Assistance",
  "footer.copy": "© 2026 Sandpiper · Pour ceux qui traversent les continents",
  "support.eyebrow": "Aide",
  "support.title": "Assistance",
  "support.intro": "Une question ou un problème ? Nous sommes là pour vous aider.",
  "support.email.prefix": "Écrivez-nous à",
  "support.email.suffix": "et nous vous répondrons dès que possible.",
  "support.home": "Accueil",
  "support.privacy": "Confidentialité",
  "support.terms": "Conditions",
  "support.meta.title": "Assistance — Sandpiper",
  "support.meta.description": "Obtenez de l'aide pour l'application Sandpiper.",
};

const es: Dict = {
  "nav.download": "Descargar",
  "nav.language": "Idioma",
  "hero.eyebrow": "Para el viajero internacional",
  "hero.title1": "Vence el jet lag.",
  "hero.title2": "Llega listo.",
  "hero.body":
    "Un programa personalizado hora a hora para tu cuerpo — desde 48 horas antes de salir hasta 48 horas después de aterrizar. Para quienes cruzan continentes como otros cruzan la ciudad.",
  "hero.cta.ios": "Descargar para iOS",
  "hero.cta.android": "Obtener en Android",
  "hero.note": "Funciona para viajes hacia el este y el oeste · 14 días de prueba gratuita",
  "how.eyebrow": "Cómo funciona",
  "how.title": "Tres pasos. Y un vuelo más tranquilo.",
  "how.step": "Paso",
  "how.s1.title": "Introduce tu vuelo",
  "how.s1.body":
    "Busca por aerolínea, número de vuelo y fecha. Sandpiper obtiene los datos en vivo automáticamente — horarios, husos, distancia.",
  "how.s2.title": "Recibe tu programa",
  "how.s2.body":
    "Una línea de tiempo personalizada — cuándo buscar luz, evitar pantallas, tomar melatonina, cortar la cafeína y dormir — adaptada a tu reloj biológico y a tu ruta.",
  "how.s3.title": "Sigue el plan",
  "how.s3.body":
    "Activa las notificaciones y Sandpiper te avisa en el momento exacto. Tu programa se guarda sin conexión — no necesitas señal a 10 000 metros.",
  "sched.eyebrow": "Tu plan",
  "sched.title": "Dos relojes. Un plan. Cero jet lag.",
  "sched.body":
    "Desde dos días antes de salir hasta dos días después de llegar, Sandpiper muestra cada acción en tu hora local y la del destino — para que siempre sepas qué debe hacer tu cuerpo.",
  "sched.b1.title": "Ambas zonas horarias, lado a lado",
  "sched.b1.body":
    "Durante el vuelo, cada evento muestra tu hora de salida y de destino en la misma fila — tu reloj biológico y el de pulsera, sincronizados.",
  "sched.b2.title": "Reloj de destino en vivo",
  "sched.b2.body":
    "Una barra fija abajo muestra la hora actual en tu ciudad de llegada, segundo a segundo.",
  "sched.b3.title": "«Estás aquí» en la línea de tiempo",
  "sched.b3.body":
    "Una línea ámbar marca dónde estás en tu plan. Los eventos pasados arriba. La próxima acción abajo.",
  "sched.b4.title": "Toca cualquier evento para ver la ciencia",
  "sched.b4.body":
    "Cada tarjeta explica por qué esta acción, por qué ahora y qué hacer si te la saltas.",
  "sched.caption": "SFO → HND · reloj de destino en vivo",
  "stats.s1": "Dicen dormir mejor al llegar",
  "stats.s2": "Husos horarios soportados",
  "stats.s3": "Ventana de preparación previa",
  "feat.eyebrow": "Funciones",
  "feat.title": "Hecho para viajeros serios.",
  "feat.f1.title": "Sin conexión primero",
  "feat.f1.body":
    "Tu programa se guarda al reservar. ¿Sin señal? Sin problema — todo está allí al aterrizar.",
  "feat.f2.title": "Este y oeste",
  "feat.f2.body":
    "El algoritmo considera la dirección del viaje. Los vuelos hacia el oeste son más fáciles. Los tratamos de forma distinta.",
  "feat.f3.title": "48 h antes, 48 h después",
  "feat.f3.body":
    "La preparación empieza antes de salir. La recuperación sigue tras aterrizar. La mayoría de apps paran en el despegue.",
  "feat.f4.title": "Respaldado por la ciencia",
  "feat.f4.body":
    "Basado en investigación de biología circadiana — no en modas. Luz, melatonina, cafeína y sueño que sí mueven tu reloj.",
  "quote.body":
    "«He probado de todo contra el jet lag. Sandpiper es lo primero que funcionó. Aterrizo en Tokio y voy directo a una reunión.»",
  "quote.author": "Viajero frecuente, 290 000 km / año",
  "cta.eyebrow": "Listo cuando tú lo estés",
  "cta.title": "Tu próximo vuelo es diferente.",
  "cta.body": "Añade tu vuelo y consigue tu plan en menos de un minuto.",
  "footer.tagline": "Vence el jet lag. Llega listo.",
  "footer.top": "Inicio",
  "footer.download": "Descargar",
  "footer.privacy": "Privacidad",
  "footer.terms": "Términos",
  "footer.support": "Soporte",
  "footer.copy": "© 2026 Sandpiper · Para quienes cruzan continentes",
  "support.eyebrow": "Ayuda",
  "support.title": "Soporte",
  "support.intro": "¿Tienes una pregunta o un problema? Estamos aquí para ayudarte.",
  "support.email.prefix": "Escríbenos a",
  "support.email.suffix": "y te responderemos lo antes posible.",
  "support.home": "Inicio",
  "support.privacy": "Privacidad",
  "support.terms": "Términos",
  "support.meta.title": "Soporte — Sandpiper",
  "support.meta.description": "Obtén ayuda con la aplicación Sandpiper.",
};

const de: Dict = {
  "nav.download": "Herunterladen",
  "nav.language": "Sprache",
  "hero.eyebrow": "Für Weltreisende",
  "hero.title1": "Jetlag besiegen.",
  "hero.title2": "Bereit ankommen.",
  "hero.body":
    "Ein persönlicher Stundenplan für deinen Körper — von 48 Stunden vor dem Abflug bis 48 Stunden nach der Landung. Für Menschen, die Kontinente überqueren wie andere die Stadt.",
  "hero.cta.ios": "Für iOS laden",
  "hero.cta.android": "Für Android laden",
  "hero.note": "Funktioniert nach Osten und Westen · 14 Tage kostenlos testen",
  "how.eyebrow": "So funktioniert es",
  "how.title": "Drei Schritte. Dann ein ruhigerer Flug.",
  "how.step": "Schritt",
  "how.s1.title": "Flug eingeben",
  "how.s1.body":
    "Suche nach Airline, Flugnummer und Datum. Sandpiper lädt Live-Daten automatisch — Zeiten, Zeitzonen, Distanz.",
  "how.s2.title": "Plan erhalten",
  "how.s2.body":
    "Eine persönliche Zeitleiste — wann Licht suchen, Bildschirme meiden, Melatonin nehmen, Koffein meiden und schlafen — abgestimmt auf deine innere Uhr und deine Route.",
  "how.s3.title": "Plan folgen",
  "how.s3.body":
    "Aktiviere Benachrichtigungen und Sandpiper erinnert dich im richtigen Moment. Dein Plan ist offline gespeichert — keine Verbindung in 10 000 m Höhe nötig.",
  "sched.eyebrow": "Dein Plan",
  "sched.title": "Zwei Uhren. Ein Plan. Null Jetlag.",
  "sched.body":
    "Von zwei Tagen vor dem Abflug bis zwei Tage nach der Ankunft zeigt Sandpiper jede Aktion in deiner Heimatzeit und der Zielzeit — damit du immer weißt, was dein Körper tun soll.",
  "sched.b1.title": "Beide Zeitzonen nebeneinander",
  "sched.b1.body":
    "Während des Flugs zeigt jedes Ereignis deine Abflug- und Zielzeit in derselben Zeile — innere Uhr und Armbanduhr im Gleichklang.",
  "sched.b2.title": "Live-Uhr am Zielort",
  "sched.b2.body":
    "Eine fixierte Leiste unten zeigt die aktuelle Zeit am Ankunftsort, Sekunde für Sekunde.",
  "sched.b3.title": "„Du bist hier“ auf der Zeitachse",
  "sched.b3.body":
    "Eine bernsteinfarbene Linie zeigt deinen Standort im Plan. Vergangene Ereignisse oben, nächste Aktion unten.",
  "sched.b4.title": "Tippe auf ein Ereignis für die Wissenschaft",
  "sched.b4.body":
    "Jede Karte erklärt, warum diese Aktion, warum jetzt, und was zu tun ist, wenn du sie verpasst.",
  "sched.caption": "SFO → HND · Live-Uhr am Zielort",
  "stats.s1": "Berichten besseren Schlaf bei Ankunft",
  "stats.s2": "Unterstützte Zeitzonen",
  "stats.s3": "Vorbereitungsfenster vor dem Flug",
  "feat.eyebrow": "Funktionen",
  "feat.title": "Für ernsthafte Reisende gemacht.",
  "feat.f1.title": "Offline zuerst",
  "feat.f1.body":
    "Dein Plan wird beim Buchen gespeichert. Kein Signal? Kein Problem — alles ist da, wenn du landest.",
  "feat.f2.title": "Ost und West",
  "feat.f2.body":
    "Der Algorithmus berücksichtigt die Reiserichtung. Westflüge sind leichter. Wir behandeln sie anders.",
  "feat.f3.title": "48 h vorher, 48 h nachher",
  "feat.f3.body":
    "Die Vorbereitung beginnt vor dem Abflug. Die Erholung geht nach der Landung weiter. Die meisten Apps hören beim Abflug auf.",
  "feat.f4.title": "Wissenschaftlich fundiert",
  "feat.f4.body":
    "Auf zirkadianer Forschung basierend — keine Wellness-Trends. Licht, Melatonin, Koffein und Schlafzeiten, die deine Uhr wirklich verschieben.",
  "quote.body":
    "„Ich habe alles gegen Jetlag versucht. Sandpiper ist das Erste, das wirklich wirkt. Ich lande in Tokio und gehe direkt in ein Meeting.“",
  "quote.author": "Vielflieger, 290 000 km / Jahr",
  "cta.eyebrow": "Bereit, wenn du es bist",
  "cta.title": "Dein nächster Flug wird anders.",
  "cta.body": "Füge deinen Flug hinzu und erhalte deinen Plan in unter einer Minute.",
  "footer.tagline": "Jetlag besiegen. Bereit ankommen.",
  "footer.top": "Oben",
  "footer.download": "Herunterladen",
  "footer.privacy": "Datenschutz",
  "footer.terms": "AGB",
  "footer.support": "Support",
  "footer.copy": "© 2026 Sandpiper · Für Reisende, die Kontinente überqueren",
  "support.eyebrow": "Hilfe",
  "support.title": "Support",
  "support.intro": "Haben Sie eine Frage oder ein Problem? Wir helfen Ihnen gerne.",
  "support.email.prefix": "Schreiben Sie uns an",
  "support.email.suffix": "und wir melden uns so schnell wie möglich.",
  "support.home": "Startseite",
  "support.privacy": "Datenschutz",
  "support.terms": "AGB",
  "support.meta.title": "Support — Sandpiper",
  "support.meta.description": "Hilfe zur Sandpiper-App erhalten.",
};

const pt: Dict = {
  "nav.download": "Baixar",
  "nav.language": "Idioma",
  "hero.eyebrow": "Para o viajante global",
  "hero.title1": "Vença o jet lag.",
  "hero.title2": "Chegue pronto.",
  "hero.body":
    "Um plano personalizado hora a hora para o seu corpo — começando 48 horas antes da partida até 48 horas depois do pouso. Feito para quem cruza continentes como outros cruzam a cidade.",
  "hero.cta.ios": "Baixar para iOS",
  "hero.cta.android": "Obter no Android",
  "hero.note": "Funciona para viagens ao leste e oeste · 14 dias de avaliação gratuita",
  "how.eyebrow": "Como funciona",
  "how.title": "Três passos. Depois um voo mais calmo.",
  "how.step": "Passo",
  "how.s1.title": "Insira seu voo",
  "how.s1.body":
    "Busque por companhia, número de voo e data. Sandpiper traz dados ao vivo automaticamente — horários, fusos, distância.",
  "how.s2.title": "Receba seu plano",
  "how.s2.body":
    "Uma linha do tempo personalizada — quando buscar luz, evitar telas, tomar melatonina, cortar cafeína e dormir — ajustada ao seu relógio biológico e à sua rota.",
  "how.s3.title": "Acompanhe",
  "how.s3.body":
    "Ative notificações e o Sandpiper avisa no momento certo. Seu plano fica salvo offline — sem precisar de sinal a 10 000 metros.",
  "sched.eyebrow": "Seu plano",
  "sched.title": "Dois relógios. Um plano. Zero jet lag.",
  "sched.body":
    "De dois dias antes da partida a dois dias após a chegada, o Sandpiper mostra cada ação no seu horário local e no de destino — para você sempre saber o que seu corpo deve fazer.",
  "sched.b1.title": "Os dois fusos, lado a lado",
  "sched.b1.body":
    "Durante o voo, cada evento mostra o horário de partida e o de destino na mesma linha — seu relógio biológico e o do pulso, sincronizados.",
  "sched.b2.title": "Relógio do destino ao vivo",
  "sched.b2.body":
    "Uma barra fixa embaixo mostra a hora atual na sua cidade de chegada, segundo a segundo.",
  "sched.b3.title": "«Você está aqui» na linha do tempo",
  "sched.b3.body":
    "Uma linha âmbar marca onde você está no plano. Eventos passados acima. Próxima ação abaixo.",
  "sched.b4.title": "Toque em qualquer evento para ver a ciência",
  "sched.b4.body":
    "Cada cartão explica por que essa ação, por que agora e o que fazer se perdê-la.",
  "sched.caption": "SFO → HND · relógio do destino ao vivo",
  "stats.s1": "Relatam melhor sono na chegada",
  "stats.s2": "Fusos horários suportados",
  "stats.s3": "Janela de preparação pré-voo",
  "feat.eyebrow": "Recursos",
  "feat.title": "Feito para viajantes sérios.",
  "feat.f1.title": "Offline primeiro",
  "feat.f1.body":
    "Seu plano é salvo na hora da reserva. Sem sinal? Sem problema — tudo está lá quando você pousar.",
  "feat.f2.title": "Leste e oeste",
  "feat.f2.body":
    "O algoritmo considera o sentido da viagem. Voos para oeste são mais fáceis. Nós os tratamos diferente.",
  "feat.f3.title": "48 h antes, 48 h depois",
  "feat.f3.body":
    "A preparação começa antes da partida. A recuperação continua após o pouso. A maioria dos apps para na decolagem.",
  "feat.f4.title": "Baseado na ciência",
  "feat.f4.body":
    "Construído sobre pesquisa em biologia circadiana — não modas de bem-estar. Luz, melatonina, cafeína e sono que realmente movem seu relógio.",
  "quote.body":
    "«Já tentei tudo contra jet lag. O Sandpiper foi a primeira coisa que funcionou. Pouso em Tóquio e vou direto para uma reunião.»",
  "quote.author": "Viajante frequente, 290 000 km / ano",
  "cta.eyebrow": "Pronto quando você estiver",
  "cta.title": "Seu próximo voo será diferente.",
  "cta.body": "Adicione seu voo e receba seu plano em menos de um minuto.",
  "footer.tagline": "Vença o jet lag. Chegue pronto.",
  "footer.top": "Topo",
  "footer.download": "Baixar",
  "footer.privacy": "Privacidade",
  "footer.terms": "Termos",
  "footer.support": "Suporte",
  "footer.copy": "© 2026 Sandpiper · Para quem cruza continentes",
  "support.eyebrow": "Ajuda",
  "support.title": "Suporte",
  "support.intro": "Tem uma dúvida ou está com algum problema? Estamos aqui para ajudar.",
  "support.email.prefix": "Envie um e-mail para",
  "support.email.suffix": "e responderemos o mais rápido possível.",
  "support.home": "Início",
  "support.privacy": "Privacidade",
  "support.terms": "Termos",
  "support.meta.title": "Suporte — Sandpiper",
  "support.meta.description": "Obtenha ajuda com o aplicativo Sandpiper.",
};

const zhCN: Dict = {
  "nav.download": "下载",
  "nav.language": "语言",
  "hero.eyebrow": "为全球旅行者打造",
  "hero.title1": "战胜时差。",
  "hero.title2": "从容抵达。",
  "hero.body":
    "为你的身体定制的逐小时计划 —— 从起飞前48小时到落地后48小时。为那些跨越大洲如同跨越街区的人而生。",
  "hero.cta.ios": "iOS 下载",
  "hero.cta.android": "Android 下载",
  "hero.note": "支持向东与向西飞行 · 14天免费试用",
  "how.eyebrow": "工作原理",
  "how.title": "三步,迎来更平静的航程。",
  "how.step": "步骤",
  "how.s1.title": "输入你的航班",
  "how.s1.body": "按航空公司代码、航班号和日期搜索。Sandpiper 自动获取实时数据 —— 起飞时间、时区、距离。",
  "how.s2.title": "获取你的计划",
  "how.s2.body":
    "个性化的时间线 —— 何时晒光、避免屏幕、服用褪黑素、停止咖啡因、入睡 —— 根据你的生物钟和航线定制。",
  "how.s3.title": "跟随提醒",
  "how.s3.body":
    "开启通知,Sandpiper 在恰当时机提醒你。计划已离线保存 —— 万米高空无需联网。",
  "sched.eyebrow": "你的计划",
  "sched.title": "两个时钟。一个计划。零时差。",
  "sched.body":
    "从出发前两天到抵达后两天,Sandpiper 同时显示每个动作的本地时间与目的地时间 —— 让你随时知道身体该做什么。",
  "sched.b1.title": "两个时区,并排显示",
  "sched.b1.body": "飞行中的每个事件同时显示出发时间与目的地时间 —— 生物钟与手表同步。",
  "sched.b2.title": "实时目的地时钟",
  "sched.b2.body": "底部固定栏实时显示抵达城市的当前时间,秒秒跳动。",
  "sched.b3.title": "时间线上的「你在这里」",
  "sched.b3.body": "琥珀色线条标记你在计划中的位置。已过事件在上,下一步在下。",
  "sched.b4.title": "点击任意事件了解科学原理",
  "sched.b4.body": "每张卡片解释为何这样做、为何此时、错过怎么办。",
  "sched.caption": "SFO → HND · 实时目的地时钟",
  "stats.s1": "用户反馈到达时睡眠更好",
  "stats.s2": "支持的时区数",
  "stats.s3": "起飞前准备窗口",
  "feat.eyebrow": "功能",
  "feat.title": "为认真的旅行者而造。",
  "feat.f1.title": "离线优先",
  "feat.f1.body": "预订即保存计划。没信号?没关系 —— 落地时一切都在。",
  "feat.f2.title": "东向与西向",
  "feat.f2.body": "算法考虑飞行方向。西向更轻松,我们以不同方式处理。",
  "feat.f3.title": "前48小时,后48小时",
  "feat.f3.body": "准备从出发前开始。恢复持续到落地后。大多数应用止于起飞。",
  "feat.f4.title": "科学依据",
  "feat.f4.body": "基于昼夜节律生物学研究 —— 而非健康潮流。真正能拨动你生物钟的光照、褪黑素、咖啡因与睡眠时机。",
  "quote.body": "「我试过所有方法对付时差。Sandpiper 是第一个真正有效的。落地东京后我直接去开会。」",
  "quote.author": "常旅客,每年29万公里",
  "cta.eyebrow": "随时为你准备",
  "cta.title": "你的下一次飞行将不同。",
  "cta.body": "添加你的航班,不到一分钟就能获得计划。",
  "footer.tagline": "战胜时差。从容抵达。",
  "footer.top": "顶部",
  "footer.download": "下载",
  "footer.privacy": "隐私",
  "footer.terms": "条款",
  "footer.support": "支持",
  "footer.copy": "© 2026 Sandpiper · 为跨越大洲的旅行者而做",
  "support.eyebrow": "帮助",
  "support.title": "支持",
  "support.intro": "有问题或遇到困难？我们随时为您提供帮助。",
  "support.email.prefix": "请发送邮件至",
  "support.email.suffix": "我们会尽快回复。",
  "support.home": "首页",
  "support.privacy": "隐私",
  "support.terms": "条款",
  "support.meta.title": "支持 — Sandpiper",
  "support.meta.description": "获取 Sandpiper 应用帮助。",
};

const zhTW: Dict = {
  "nav.download": "下載",
  "nav.language": "語言",
  "hero.eyebrow": "為全球旅行者打造",
  "hero.title1": "戰勝時差。",
  "hero.title2": "從容抵達。",
  "hero.body":
    "為你的身體量身打造的逐小時計畫 —— 從起飛前48小時到落地後48小時。為那些跨越大洲如同跨越街區的人而生。",
  "hero.cta.ios": "iOS 下載",
  "hero.cta.android": "Android 下載",
  "hero.note": "支援向東與向西飛行 · 14天免費試用",
  "how.eyebrow": "運作方式",
  "how.title": "三個步驟,迎來更平靜的航程。",
  "how.step": "步驟",
  "how.s1.title": "輸入你的航班",
  "how.s1.body": "依航空公司代碼、航班號與日期搜尋。Sandpiper 自動取得即時資料 —— 起飛時間、時區、距離。",
  "how.s2.title": "取得你的計畫",
  "how.s2.body":
    "個人化的時間軸 —— 何時曬光、避開螢幕、服用褪黑激素、停止咖啡因、入睡 —— 依你的生理時鐘與航線量身打造。",
  "how.s3.title": "跟隨提醒",
  "how.s3.body":
    "開啟通知,Sandpiper 在恰當時機提醒你。計畫已離線儲存 —— 萬米高空無需連線。",
  "sched.eyebrow": "你的計畫",
  "sched.title": "兩個時鐘。一份計畫。零時差。",
  "sched.body":
    "從出發前兩天到抵達後兩天,Sandpiper 同時顯示每個動作的本地時間與目的地時間 —— 讓你隨時知道身體該做什麼。",
  "sched.b1.title": "兩個時區,並排顯示",
  "sched.b1.body": "飛行中的每個事件同時顯示出發時間與目的地時間 —— 生理時鐘與手錶同步。",
  "sched.b2.title": "即時目的地時鐘",
  "sched.b2.body": "底部固定列即時顯示抵達城市的目前時間,秒秒跳動。",
  "sched.b3.title": "時間軸上的「你在這裡」",
  "sched.b3.body": "琥珀色線條標記你在計畫中的位置。已過事件在上,下一步在下。",
  "sched.b4.title": "點按任一事件了解背後科學",
  "sched.b4.body": "每張卡片說明為何這樣做、為何此時、錯過怎麼辦。",
  "sched.caption": "SFO → HND · 即時目的地時鐘",
  "stats.s1": "使用者回報抵達時睡眠更好",
  "stats.s2": "支援的時區數",
  "stats.s3": "起飛前準備窗口",
  "feat.eyebrow": "功能",
  "feat.title": "為認真的旅行者打造。",
  "feat.f1.title": "離線優先",
  "feat.f1.body": "預訂即儲存計畫。沒訊號?沒關係 —— 落地時一切都在。",
  "feat.f2.title": "東向與西向",
  "feat.f2.body": "演算法考量飛行方向。西向更輕鬆,我們以不同方式處理。",
  "feat.f3.title": "前48小時,後48小時",
  "feat.f3.body": "準備從出發前開始。恢復持續到落地後。大多數應用止於起飛。",
  "feat.f4.title": "科學佐證",
  "feat.f4.body": "基於晝夜節律生物學研究 —— 非養生潮流。真正能撥動你生理時鐘的光照、褪黑激素、咖啡因與睡眠時機。",
  "quote.body": "「我試過所有方法對付時差。Sandpiper 是第一個真正有效的。落地東京後我直接去開會。」",
  "quote.author": "常旅客,每年29萬公里",
  "cta.eyebrow": "隨時為你準備",
  "cta.title": "你的下一次飛行將不同。",
  "cta.body": "加入你的航班,不到一分鐘就能取得計畫。",
  "footer.tagline": "戰勝時差。從容抵達。",
  "footer.top": "頂部",
  "footer.download": "下載",
  "footer.privacy": "隱私",
  "footer.terms": "條款",
  "footer.support": "支援",
  "footer.copy": "© 2026 Sandpiper · 為跨越大洲的旅行者而做",
  "support.eyebrow": "幫助",
  "support.title": "支援",
  "support.intro": "有問題或遇到困難？我們隨時為您提供協助。",
  "support.email.prefix": "請寄信至",
  "support.email.suffix": "我們會盡快回覆。",
  "support.home": "首頁",
  "support.privacy": "隱私",
  "support.terms": "條款",
  "support.meta.title": "支援 — Sandpiper",
  "support.meta.description": "取得 Sandpiper 應用程式協助。",
};

const ja: Dict = {
  "nav.download": "ダウンロード",
  "nav.language": "言語",
  "hero.eyebrow": "世界を旅するあなたへ",
  "hero.title1": "時差ボケを克服。",
  "hero.title2": "万全の状態で到着。",
  "hero.body":
    "出発48時間前から着陸48時間後まで、あなたの身体に合わせた1時間ごとのプラン。大陸を街のように行き来する人のために。",
  "hero.cta.ios": "iOS 版をダウンロード",
  "hero.cta.android": "Android 版を入手",
  "hero.note": "東行き・西行き両対応 · 14日間無料トライアル",
  "how.eyebrow": "使い方",
  "how.title": "3ステップで、穏やかなフライトへ。",
  "how.step": "ステップ",
  "how.s1.title": "フライトを入力",
  "how.s1.body": "航空会社・便名・日付で検索。Sandpiperが出発時刻・時間帯・距離などのライブデータを自動取得します。",
  "how.s2.title": "プランを受け取る",
  "how.s2.body":
    "光を浴びる、画面を避ける、メラトニンを摂る、カフェインを断つ、眠る ── あなたの体内時計と航路に合わせた個別タイムライン。",
  "how.s3.title": "プランに従う",
  "how.s3.body":
    "通知をオンにすれば、Sandpiperが最適な瞬間に教えてくれます。プランはオフライン保存 ── 上空1万mでも接続不要。",
  "sched.eyebrow": "あなたのプラン",
  "sched.title": "二つの時計、一つのプラン、時差ゼロ。",
  "sched.body":
    "出発の2日前から到着の2日後まで、Sandpiperは出発地と目的地、両方の時刻で各アクションを表示。身体が何をすべきかが常にわかります。",
  "sched.b1.title": "二つの時間帯を並べて表示",
  "sched.b1.body": "機内のイベントは出発時刻と到着地時刻を同じ行に表示 ── 体内時計と腕時計を同期。",
  "sched.b2.title": "目的地のリアルタイム時計",
  "sched.b2.body": "画面下に固定されたバーが、到着都市の現在時刻を秒単位で表示します。",
  "sched.b3.title": "タイムラインの「現在地」",
  "sched.b3.body": "アンバー色のラインが現在地を示します。過去のイベントは上、次のアクションは下。",
  "sched.b4.title": "タップで科学的根拠を確認",
  "sched.b4.body": "各カードは「なぜこの行動か」「なぜ今か」「逃したらどうするか」を解説。",
  "sched.caption": "SFO → HND · 目的地リアルタイム時計",
  "stats.s1": "到着時の睡眠改善を実感",
  "stats.s2": "対応タイムゾーン数",
  "stats.s3": "出発前の準備期間",
  "feat.eyebrow": "機能",
  "feat.title": "本気の旅行者のために。",
  "feat.f1.title": "オフラインファースト",
  "feat.f1.body": "予約と同時にプランを保存。電波がなくても、着陸時にはすべてがそこに。",
  "feat.f2.title": "東行きと西行き",
  "feat.f2.body": "アルゴリズムは進行方向を考慮。西行きは楽。Sandpiperは別々に扱います。",
  "feat.f3.title": "前48時間、後48時間",
  "feat.f3.body": "準備は出発前から、回復は着陸後も継続。多くのアプリは出発で止まります。",
  "feat.f4.title": "科学に基づく",
  "feat.f4.body": "ウェルネス流行ではなく、概日リズム研究に基づく。本当に体内時計を動かす光・メラトニン・カフェイン・睡眠のタイミング。",
  "quote.body": "「時差ボケ対策は何でも試した。本当に効いたのはSandpiperが初めて。東京に着いてそのまま会議に向かえる。」",
  "quote.author": "常連旅行者・年間29万km",
  "cta.eyebrow": "あなたが望むときに",
  "cta.title": "次のフライトは違う。",
  "cta.body": "フライトを追加すれば、1分以内にプランが届きます。",
  "footer.tagline": "時差ボケを克服。万全の状態で到着。",
  "footer.top": "トップ",
  "footer.download": "ダウンロード",
  "footer.privacy": "プライバシー",
  "footer.terms": "利用規約",
  "footer.support": "サポート",
  "footer.copy": "© 2026 Sandpiper · 大陸を旅する人のために",
  "support.eyebrow": "ヘルプ",
  "support.title": "サポート",
  "support.intro": "ご質問やお困りのことがありますか？お気軽にお問い合わせください。",
  "support.email.prefix": "次のメールアドレスまでご連絡ください：",
  "support.email.suffix": "できるだけ早くご返信いたします。",
  "support.home": "ホーム",
  "support.privacy": "プライバシー",
  "support.terms": "利用規約",
  "support.meta.title": "サポート — Sandpiper",
  "support.meta.description": "Sandpiperアプリのサポートを受ける。",
};

const ko: Dict = {
  "nav.download": "다운로드",
  "nav.language": "언어",
  "hero.eyebrow": "글로벌 여행자를 위해",
  "hero.title1": "시차를 이기세요.",
  "hero.title2": "준비된 상태로 도착하세요.",
  "hero.body":
    "출발 48시간 전부터 착륙 48시간 후까지, 당신의 몸을 위한 시간별 맞춤 일정. 동네 가듯 대륙을 넘는 사람들을 위해.",
  "hero.cta.ios": "iOS 다운로드",
  "hero.cta.android": "Android 받기",
  "hero.note": "동행·서행 모두 지원 · 14일 무료 체험",
  "how.eyebrow": "사용 방법",
  "how.title": "세 단계, 그리고 더 평온한 비행.",
  "how.step": "단계",
  "how.s1.title": "항공편 입력",
  "how.s1.body": "항공사 코드·편명·날짜로 검색하세요. Sandpiper가 출발 시각, 시간대, 거리 등 실시간 데이터를 자동으로 가져옵니다.",
  "how.s2.title": "일정 받기",
  "how.s2.body":
    "햇빛 쐬기, 화면 피하기, 멜라토닌 복용, 카페인 끊기, 수면 — 당신의 생체시계와 노선에 맞춘 개인화 타임라인.",
  "how.s3.title": "따라가기",
  "how.s3.body":
    "알림을 켜면 Sandpiper가 정확한 순간에 알려줍니다. 일정은 오프라인 저장 — 1만m 상공에서도 연결 불필요.",
  "sched.eyebrow": "당신의 계획",
  "sched.title": "두 개의 시계. 하나의 계획. 시차 제로.",
  "sched.body":
    "출발 2일 전부터 도착 2일 후까지, Sandpiper는 모든 행동을 출발지와 목적지 시각으로 함께 표시 — 당신의 몸이 무엇을 해야 하는지 항상 알 수 있습니다.",
  "sched.b1.title": "두 시간대를 나란히",
  "sched.b1.body": "기내 이벤트는 출발 시각과 도착지 시각을 같은 줄에 표시 — 생체시계와 손목시계를 동기화.",
  "sched.b2.title": "실시간 목적지 시계",
  "sched.b2.body": "하단 고정 바가 도착 도시의 현재 시각을 초 단위로 보여줍니다.",
  "sched.b3.title": "타임라인의 「현재 위치」",
  "sched.b3.body": "앰버 라인이 계획 속 현재 위치를 표시합니다. 지난 일은 위, 다음 행동은 아래.",
  "sched.b4.title": "이벤트를 탭하면 과학적 근거 확인",
  "sched.b4.body": "각 카드가 왜 이 행동인지, 왜 지금인지, 놓쳤을 때 어떻게 할지 설명합니다.",
  "sched.caption": "SFO → HND · 실시간 목적지 시계",
  "stats.s1": "도착 시 수면 개선을 보고",
  "stats.s2": "지원하는 시간대",
  "stats.s3": "출발 전 준비 기간",
  "feat.eyebrow": "기능",
  "feat.title": "진지한 여행자를 위해.",
  "feat.f1.title": "오프라인 우선",
  "feat.f1.body": "예약 즉시 일정 저장. 신호 없어도 문제 없음 — 착륙 시 모든 것이 그대로.",
  "feat.f2.title": "동쪽과 서쪽",
  "feat.f2.body": "알고리즘은 이동 방향을 고려합니다. 서행이 더 수월하며 다르게 처리합니다.",
  "feat.f3.title": "전 48시간, 후 48시간",
  "feat.f3.body": "준비는 출발 전부터, 회복은 착륙 후까지. 대부분의 앱은 출발에서 멈춥니다.",
  "feat.f4.title": "과학 기반",
  "feat.f4.body": "웰니스 트렌드가 아닌 일주기 생물학 연구 기반. 실제로 생체시계를 움직이는 빛, 멜라토닌, 카페인, 수면 타이밍.",
  "quote.body": "「시차 대책은 다 해봤어요. Sandpiper가 처음으로 진짜 효과 있었습니다. 도쿄에 내려서 바로 회의로 갑니다.」",
  "quote.author": "상시 여행자, 연 29만 km",
  "cta.eyebrow": "준비되셨다면",
  "cta.title": "다음 비행은 다릅니다.",
  "cta.body": "항공편을 추가하고 1분 안에 일정을 받으세요.",
  "footer.tagline": "시차를 이기세요. 준비된 상태로 도착하세요.",
  "footer.top": "맨 위",
  "footer.download": "다운로드",
  "footer.privacy": "개인정보",
  "footer.terms": "약관",
  "footer.support": "지원",
  "footer.copy": "© 2026 Sandpiper · 대륙을 넘는 여행자를 위해",
  "support.eyebrow": "도움말",
  "support.title": "지원",
  "support.intro": "질문이 있거나 문제가 있으신가요? 도와드리겠습니다.",
  "support.email.prefix": "다음 이메일로 문의해 주세요:",
  "support.email.suffix": "최대한 빨리 답변드리겠습니다.",
  "support.home": "홈",
  "support.privacy": "개인정보",
  "support.terms": "약관",
  "support.meta.title": "지원 — Sandpiper",
  "support.meta.description": "Sandpiper 앱 지원을 받으세요.",
};

export const TRANSLATIONS: Record<LanguageCode, Dict> = {
  en,
  fr,
  es,
  de,
  pt,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  ja,
  ko,
};
