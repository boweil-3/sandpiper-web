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
  | "footer.deleteAccount"
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
  | "support.meta.description"
  | "deleteAccount.eyebrow"
  | "deleteAccount.title"
  | "deleteAccount.howTo.title"
  | "deleteAccount.howTo.intro"
  | "deleteAccount.howTo.step1"
  | "deleteAccount.howTo.step2.before"
  | "deleteAccount.howTo.step2.settings"
  | "deleteAccount.howTo.step3.before"
  | "deleteAccount.howTo.step3.action"
  | "deleteAccount.howTo.step3.after"
  | "deleteAccount.howTo.outro"
  | "deleteAccount.deleted.title"
  | "deleteAccount.deleted.intro"
  | "deleteAccount.deleted.item1"
  | "deleteAccount.deleted.item2"
  | "deleteAccount.retained.title"
  | "deleteAccount.retained.intro"
  | "deleteAccount.retained.item1"
  | "deleteAccount.retained.item2"
  | "deleteAccount.retained.item3"
  | "deleteAccount.retained.p1"
  | "deleteAccount.retained.p2"
  | "deleteAccount.contact.title"
  | "deleteAccount.contact.prefix"
  | "deleteAccount.meta.title"
  | "deleteAccount.meta.description";

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
  "footer.deleteAccount": "Delete Account",
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
  "deleteAccount.eyebrow": "Account",
  "deleteAccount.title": "Delete Your Account",
  "deleteAccount.howTo.title": "How to delete your account",
  "deleteAccount.howTo.intro": "You can delete your Sandpiper account directly from the app:",
  "deleteAccount.howTo.step1": "Open the Sandpiper app",
  "deleteAccount.howTo.step2.before": "Go to",
  "deleteAccount.howTo.step2.settings": "Settings → Account",
  "deleteAccount.howTo.step3.before": "Tap",
  "deleteAccount.howTo.step3.action": "\"Delete Account\"",
  "deleteAccount.howTo.step3.after": "and confirm",
  "deleteAccount.howTo.outro": "Your account is deleted immediately once confirmed. No waiting period.",
  "deleteAccount.deleted.title": "What gets deleted immediately",
  "deleteAccount.deleted.intro": "The following is permanently removed the moment you confirm deletion:",
  "deleteAccount.deleted.item1": "Your email address and all personal information",
  "deleteAccount.deleted.item2": "Your active sessions — you are signed out on all devices immediately",
  "deleteAccount.retained.title": "What is retained",
  "deleteAccount.retained.intro": "A small anonymized record is kept after deletion. It contains only:",
  "deleteAccount.retained.item1": "Your user ID (a hash — not your email or any identifiable data)",
  "deleteAccount.retained.item2": "The date your account was deleted",
  "deleteAccount.retained.item3": "Subscription status and whether you have ever paid",
  "deleteAccount.retained.p1":
    "No personally identifiable information is stored in this record. It exists solely to prevent fraud on re-registration and is retained indefinitely for that purpose.",
  "deleteAccount.retained.p2":
    "Trip data (flight itineraries) may also be retained, but it is permanently unlinked from your personal information at the time of deletion.",
  "deleteAccount.contact.title": "Questions?",
  "deleteAccount.contact.prefix":
    "If you have questions about your data or need help deleting your account, contact us at",
  "deleteAccount.meta.title": "Delete Your Account — Sandpiper",
  "deleteAccount.meta.description": "How to delete your Sandpiper account and what happens to your data.",
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
  "footer.deleteAccount": "Supprimer le compte",
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
  "deleteAccount.eyebrow": "Compte",
  "deleteAccount.title": "Supprimer votre compte",
  "deleteAccount.howTo.title": "Comment supprimer votre compte",
  "deleteAccount.howTo.intro": "Vous pouvez supprimer votre compte Sandpiper directement depuis l'application :",
  "deleteAccount.howTo.step1": "Ouvrez l'application Sandpiper",
  "deleteAccount.howTo.step2.before": "Allez dans",
  "deleteAccount.howTo.step2.settings": "Réglages → Compte",
  "deleteAccount.howTo.step3.before": "Appuyez sur",
  "deleteAccount.howTo.step3.action": "« Supprimer le compte »",
  "deleteAccount.howTo.step3.after": "et confirmez",
  "deleteAccount.howTo.outro": "Votre compte est supprimé immédiatement après confirmation. Aucun délai d'attente.",
  "deleteAccount.deleted.title": "Ce qui est supprimé immédiatement",
  "deleteAccount.deleted.intro": "Les éléments suivants sont définitivement supprimés dès que vous confirmez :",
  "deleteAccount.deleted.item1": "Votre adresse e-mail et toutes vos informations personnelles",
  "deleteAccount.deleted.item2": "Vos sessions actives — vous êtes déconnecté sur tous les appareils immédiatement",
  "deleteAccount.retained.title": "Ce qui est conservé",
  "deleteAccount.retained.intro": "Un petit enregistrement anonymisé est conservé après la suppression. Il contient uniquement :",
  "deleteAccount.retained.item1": "Votre identifiant utilisateur (un hash — pas votre e-mail ni aucune donnée identifiable)",
  "deleteAccount.retained.item2": "La date de suppression de votre compte",
  "deleteAccount.retained.item3": "Le statut d'abonnement et si vous avez déjà payé",
  "deleteAccount.retained.p1":
    "Aucune information personnellement identifiable n'est stockée dans cet enregistrement. Il existe uniquement pour prévenir la fraude lors d'une nouvelle inscription et est conservé indéfiniment à cette fin.",
  "deleteAccount.retained.p2":
    "Les données de voyage (itinéraires de vol) peuvent également être conservées, mais elles sont définitivement dissociées de vos informations personnelles au moment de la suppression.",
  "deleteAccount.contact.title": "Des questions ?",
  "deleteAccount.contact.prefix":
    "Si vous avez des questions sur vos données ou besoin d'aide pour supprimer votre compte, contactez-nous à",
  "deleteAccount.meta.title": "Supprimer votre compte — Sandpiper",
  "deleteAccount.meta.description": "Comment supprimer votre compte Sandpiper et ce qu'il advient de vos données.",
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
  "footer.deleteAccount": "Eliminar cuenta",
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
  "deleteAccount.eyebrow": "Cuenta",
  "deleteAccount.title": "Eliminar tu cuenta",
  "deleteAccount.howTo.title": "Cómo eliminar tu cuenta",
  "deleteAccount.howTo.intro": "Puedes eliminar tu cuenta de Sandpiper directamente desde la aplicación:",
  "deleteAccount.howTo.step1": "Abre la aplicación Sandpiper",
  "deleteAccount.howTo.step2.before": "Ve a",
  "deleteAccount.howTo.step2.settings": "Ajustes → Cuenta",
  "deleteAccount.howTo.step3.before": "Toca",
  "deleteAccount.howTo.step3.action": "«Eliminar cuenta»",
  "deleteAccount.howTo.step3.after": "y confirma",
  "deleteAccount.howTo.outro": "Tu cuenta se elimina de inmediato una vez confirmada. Sin período de espera.",
  "deleteAccount.deleted.title": "Qué se elimina de inmediato",
  "deleteAccount.deleted.intro": "Lo siguiente se elimina permanentemente en el momento en que confirmas:",
  "deleteAccount.deleted.item1": "Tu dirección de correo electrónico y toda tu información personal",
  "deleteAccount.deleted.item2": "Tus sesiones activas — se cierra la sesión en todos los dispositivos de inmediato",
  "deleteAccount.retained.title": "Qué se conserva",
  "deleteAccount.retained.intro": "Se conserva un pequeño registro anonimizado después de la eliminación. Solo contiene:",
  "deleteAccount.retained.item1": "Tu ID de usuario (un hash — no tu correo ni ningún dato identificable)",
  "deleteAccount.retained.item2": "La fecha en que se eliminó tu cuenta",
  "deleteAccount.retained.item3": "El estado de la suscripción y si alguna vez has pagado",
  "deleteAccount.retained.p1":
    "No se almacena información personalmente identificable en este registro. Existe únicamente para prevenir fraudes en nuevos registros y se conserva indefinidamente con ese fin.",
  "deleteAccount.retained.p2":
    "Los datos de viaje (itinerarios de vuelo) también pueden conservarse, pero se desvinculan permanentemente de tu información personal en el momento de la eliminación.",
  "deleteAccount.contact.title": "¿Preguntas?",
  "deleteAccount.contact.prefix":
    "Si tienes preguntas sobre tus datos o necesitas ayuda para eliminar tu cuenta, contáctanos en",
  "deleteAccount.meta.title": "Eliminar tu cuenta — Sandpiper",
  "deleteAccount.meta.description": "Cómo eliminar tu cuenta de Sandpiper y qué ocurre con tus datos.",
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
  "footer.deleteAccount": "Konto löschen",
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
  "deleteAccount.eyebrow": "Konto",
  "deleteAccount.title": "Konto löschen",
  "deleteAccount.howTo.title": "So löschen Sie Ihr Konto",
  "deleteAccount.howTo.intro": "Sie können Ihr Sandpiper-Konto direkt in der App löschen:",
  "deleteAccount.howTo.step1": "Öffnen Sie die Sandpiper-App",
  "deleteAccount.howTo.step2.before": "Gehen Sie zu",
  "deleteAccount.howTo.step2.settings": "Einstellungen → Konto",
  "deleteAccount.howTo.step3.before": "Tippen Sie auf",
  "deleteAccount.howTo.step3.action": "„Konto löschen“",
  "deleteAccount.howTo.step3.after": "und bestätigen Sie",
  "deleteAccount.howTo.outro": "Ihr Konto wird nach der Bestätigung sofort gelöscht. Keine Wartezeit.",
  "deleteAccount.deleted.title": "Was sofort gelöscht wird",
  "deleteAccount.deleted.intro": "Folgendes wird beim Bestätigen dauerhaft entfernt:",
  "deleteAccount.deleted.item1": "Ihre E-Mail-Adresse und alle persönlichen Informationen",
  "deleteAccount.deleted.item2": "Ihre aktiven Sitzungen — Sie werden auf allen Geräten sofort abgemeldet",
  "deleteAccount.retained.title": "Was aufbewahrt wird",
  "deleteAccount.retained.intro": "Nach der Löschung wird ein kleiner anonymisierter Datensatz aufbewahrt. Er enthält nur:",
  "deleteAccount.retained.item1": "Ihre Benutzer-ID (ein Hash — nicht Ihre E-Mail oder identifizierbare Daten)",
  "deleteAccount.retained.item2": "Das Datum der Kontolöschung",
  "deleteAccount.retained.item3": "Abonnementstatus und ob Sie jemals bezahlt haben",
  "deleteAccount.retained.p1":
    "In diesem Datensatz werden keine personenbezogenen Daten gespeichert. Er dient ausschließlich der Betrugsprävention bei erneuter Registrierung und wird dafür unbegrenzt aufbewahrt.",
  "deleteAccount.retained.p2":
    "Reisedaten (Flugpläne) können ebenfalls aufbewahrt werden, werden aber zum Zeitpunkt der Löschung dauerhaft von Ihren persönlichen Informationen getrennt.",
  "deleteAccount.contact.title": "Fragen?",
  "deleteAccount.contact.prefix":
    "Wenn Sie Fragen zu Ihren Daten haben oder Hilfe beim Löschen Ihres Kontos benötigen, kontaktieren Sie uns unter",
  "deleteAccount.meta.title": "Konto löschen — Sandpiper",
  "deleteAccount.meta.description": "So löschen Sie Ihr Sandpiper-Konto und was mit Ihren Daten geschieht.",
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
  "footer.deleteAccount": "Excluir conta",
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
  "deleteAccount.eyebrow": "Conta",
  "deleteAccount.title": "Excluir sua conta",
  "deleteAccount.howTo.title": "Como excluir sua conta",
  "deleteAccount.howTo.intro": "Você pode excluir sua conta Sandpiper diretamente no aplicativo:",
  "deleteAccount.howTo.step1": "Abra o aplicativo Sandpiper",
  "deleteAccount.howTo.step2.before": "Vá para",
  "deleteAccount.howTo.step2.settings": "Configurações → Conta",
  "deleteAccount.howTo.step3.before": "Toque em",
  "deleteAccount.howTo.step3.action": "«Excluir conta»",
  "deleteAccount.howTo.step3.after": "e confirme",
  "deleteAccount.howTo.outro": "Sua conta é excluída imediatamente após a confirmação. Sem período de espera.",
  "deleteAccount.deleted.title": "O que é excluído imediatamente",
  "deleteAccount.deleted.intro": "O seguinte é removido permanentemente no momento da confirmação:",
  "deleteAccount.deleted.item1": "Seu endereço de e-mail e todas as informações pessoais",
  "deleteAccount.deleted.item2": "Suas sessões ativas — você é desconectado em todos os dispositivos imediatamente",
  "deleteAccount.retained.title": "O que é mantido",
  "deleteAccount.retained.intro": "Um pequeno registro anonimizado é mantido após a exclusão. Ele contém apenas:",
  "deleteAccount.retained.item1": "Seu ID de usuário (um hash — não seu e-mail nem dados identificáveis)",
  "deleteAccount.retained.item2": "A data em que sua conta foi excluída",
  "deleteAccount.retained.item3": "Status da assinatura e se você já pagou",
  "deleteAccount.retained.p1":
    "Nenhuma informação pessoalmente identificável é armazenada neste registro. Ele existe apenas para prevenir fraudes em novos cadastros e é mantido indefinidamente para esse fim.",
  "deleteAccount.retained.p2":
    "Dados de viagem (itinerários de voo) também podem ser mantidos, mas são permanentemente desvinculados das suas informações pessoais no momento da exclusão.",
  "deleteAccount.contact.title": "Dúvidas?",
  "deleteAccount.contact.prefix":
    "Se você tiver dúvidas sobre seus dados ou precisar de ajuda para excluir sua conta, entre em contato em",
  "deleteAccount.meta.title": "Excluir sua conta — Sandpiper",
  "deleteAccount.meta.description": "Como excluir sua conta Sandpiper e o que acontece com seus dados.",
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
  "footer.deleteAccount": "删除账户",
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
  "deleteAccount.eyebrow": "账户",
  "deleteAccount.title": "删除您的账户",
  "deleteAccount.howTo.title": "如何删除您的账户",
  "deleteAccount.howTo.intro": "您可以直接在应用中删除 Sandpiper 账户：",
  "deleteAccount.howTo.step1": "打开 Sandpiper 应用",
  "deleteAccount.howTo.step2.before": "前往",
  "deleteAccount.howTo.step2.settings": "设置 → 账户",
  "deleteAccount.howTo.step3.before": "点击",
  "deleteAccount.howTo.step3.action": "「删除账户」",
  "deleteAccount.howTo.step3.after": "并确认",
  "deleteAccount.howTo.outro": "确认后账户将立即删除，无需等待期。",
  "deleteAccount.deleted.title": "立即删除的内容",
  "deleteAccount.deleted.intro": "确认删除后，以下内容将永久移除：",
  "deleteAccount.deleted.item1": "您的电子邮件地址及所有个人信息",
  "deleteAccount.deleted.item2": "您的活跃会话——所有设备将立即退出登录",
  "deleteAccount.retained.title": "保留的内容",
  "deleteAccount.retained.intro": "删除后会保留一条小型匿名记录，仅包含：",
  "deleteAccount.retained.item1": "您的用户 ID（哈希值——非电子邮件或任何可识别数据）",
  "deleteAccount.retained.item2": "账户删除日期",
  "deleteAccount.retained.item3": "订阅状态及是否曾付费",
  "deleteAccount.retained.p1":
    "该记录不存储任何个人身份信息，仅用于防止重复注册欺诈，并为此目的无限期保留。",
  "deleteAccount.retained.p2":
    "行程数据（航班行程）也可能被保留，但在删除时已与您的个人信息永久解除关联。",
  "deleteAccount.contact.title": "有疑问？",
  "deleteAccount.contact.prefix": "如对数据有疑问或需要协助删除账户，请联系",
  "deleteAccount.meta.title": "删除您的账户 — Sandpiper",
  "deleteAccount.meta.description": "如何删除 Sandpiper 账户以及数据如何处理。",
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
  "footer.deleteAccount": "刪除帳戶",
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
  "deleteAccount.eyebrow": "帳戶",
  "deleteAccount.title": "刪除您的帳戶",
  "deleteAccount.howTo.title": "如何刪除您的帳戶",
  "deleteAccount.howTo.intro": "您可以直接在應用程式中刪除 Sandpiper 帳戶：",
  "deleteAccount.howTo.step1": "開啟 Sandpiper 應用程式",
  "deleteAccount.howTo.step2.before": "前往",
  "deleteAccount.howTo.step2.settings": "設定 → 帳戶",
  "deleteAccount.howTo.step3.before": "點擊",
  "deleteAccount.howTo.step3.action": "「刪除帳戶」",
  "deleteAccount.howTo.step3.after": "並確認",
  "deleteAccount.howTo.outro": "確認後帳戶將立即刪除，無需等待期。",
  "deleteAccount.deleted.title": "立即刪除的內容",
  "deleteAccount.deleted.intro": "確認刪除後，以下內容將永久移除：",
  "deleteAccount.deleted.item1": "您的電子郵件地址及所有個人資訊",
  "deleteAccount.deleted.item2": "您的活躍工作階段——所有裝置將立即登出",
  "deleteAccount.retained.title": "保留的內容",
  "deleteAccount.retained.intro": "刪除後會保留一筆小型匿名記錄，僅包含：",
  "deleteAccount.retained.item1": "您的使用者 ID（雜湊值——非電子郵件或任何可識別資料）",
  "deleteAccount.retained.item2": "帳戶刪除日期",
  "deleteAccount.retained.item3": "訂閱狀態及是否曾付費",
  "deleteAccount.retained.p1":
    "該記錄不儲存任何個人識別資訊，僅用於防止重複註冊詐欺，並為此目的無限期保留。",
  "deleteAccount.retained.p2":
    "行程資料（航班行程）也可能被保留，但在刪除時已與您的個人資訊永久解除關聯。",
  "deleteAccount.contact.title": "有疑問？",
  "deleteAccount.contact.prefix": "如對資料有疑問或需要協助刪除帳戶，請聯絡",
  "deleteAccount.meta.title": "刪除您的帳戶 — Sandpiper",
  "deleteAccount.meta.description": "如何刪除 Sandpiper 帳戶以及資料如何處理。",
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
  "footer.deleteAccount": "アカウント削除",
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
  "deleteAccount.eyebrow": "アカウント",
  "deleteAccount.title": "アカウントを削除",
  "deleteAccount.howTo.title": "アカウントの削除方法",
  "deleteAccount.howTo.intro": "Sandpiperアカウントはアプリから直接削除できます：",
  "deleteAccount.howTo.step1": "Sandpiperアプリを開く",
  "deleteAccount.howTo.step2.before": "次に進む：",
  "deleteAccount.howTo.step2.settings": "設定 → アカウント",
  "deleteAccount.howTo.step3.before": "タップ：",
  "deleteAccount.howTo.step3.action": "「アカウントを削除」",
  "deleteAccount.howTo.step3.after": "を確認",
  "deleteAccount.howTo.outro": "確認後、アカウントは即座に削除されます。待機期間はありません。",
  "deleteAccount.deleted.title": "即座に削除されるもの",
  "deleteAccount.deleted.intro": "削除を確認した時点で、以下は永久に削除されます：",
  "deleteAccount.deleted.item1": "メールアドレスとすべての個人情報",
  "deleteAccount.deleted.item2": "アクティブなセッション——すべてのデバイスから即座にサインアウトされます",
  "deleteAccount.retained.title": "保持されるもの",
  "deleteAccount.retained.intro": "削除後も小さな匿名化レコードが保持されます。含まれるのは以下のみです：",
  "deleteAccount.retained.item1": "ユーザーID（ハッシュ——メールや識別可能なデータではありません）",
  "deleteAccount.retained.item2": "アカウントが削除された日付",
  "deleteAccount.retained.item3": "サブスクリプションの状態と過去に支払いがあったかどうか",
  "deleteAccount.retained.p1":
    "このレコードには個人を特定できる情報は保存されません。再登録時の不正防止のみを目的としており、その目的のために無期限に保持されます。",
  "deleteAccount.retained.p2":
    "旅行データ（フライト行程）も保持される場合がありますが、削除時に個人情報から永久に切り離されます。",
  "deleteAccount.contact.title": "ご質問は？",
  "deleteAccount.contact.prefix": "データに関するご質問やアカウント削除のサポートが必要な場合は、次までご連絡ください：",
  "deleteAccount.meta.title": "アカウントを削除 — Sandpiper",
  "deleteAccount.meta.description": "Sandpiperアカウントの削除方法とデータの扱いについて。",
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
  "footer.deleteAccount": "계정 삭제",
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
  "deleteAccount.eyebrow": "계정",
  "deleteAccount.title": "계정 삭제",
  "deleteAccount.howTo.title": "계정 삭제 방법",
  "deleteAccount.howTo.intro": "Sandpiper 계정은 앱에서 직접 삭제할 수 있습니다:",
  "deleteAccount.howTo.step1": "Sandpiper 앱을 엽니다",
  "deleteAccount.howTo.step2.before": "다음으로 이동:",
  "deleteAccount.howTo.step2.settings": "설정 → 계정",
  "deleteAccount.howTo.step3.before": "탭:",
  "deleteAccount.howTo.step3.action": "「계정 삭제」",
  "deleteAccount.howTo.step3.after": "후 확인",
  "deleteAccount.howTo.outro": "확인 즉시 계정이 삭제됩니다. 대기 기간이 없습니다.",
  "deleteAccount.deleted.title": "즉시 삭제되는 항목",
  "deleteAccount.deleted.intro": "삭제를 확인하는 순간 다음 항목이 영구적으로 제거됩니다:",
  "deleteAccount.deleted.item1": "이메일 주소 및 모든 개인 정보",
  "deleteAccount.deleted.item2": "활성 세션 — 모든 기기에서 즉시 로그아웃됩니다",
  "deleteAccount.retained.title": "보관되는 항목",
  "deleteAccount.retained.intro": "삭제 후 소량의 익명화된 기록이 보관됩니다. 포함 내용:",
  "deleteAccount.retained.item1": "사용자 ID(해시 — 이메일이나 식별 가능한 데이터가 아님)",
  "deleteAccount.retained.item2": "계정이 삭제된 날짜",
  "deleteAccount.retained.item3": "구독 상태 및 결제 이력 여부",
  "deleteAccount.retained.p1":
    "이 기록에는 개인 식별 정보가 저장되지 않습니다. 재가입 사기 방지 목적으로만 존재하며, 해당 목적을 위해 무기한 보관됩니다.",
  "deleteAccount.retained.p2":
    "여행 데이터(항공 일정)도 보관될 수 있지만, 삭제 시점에 개인 정보와 영구적으로 분리됩니다.",
  "deleteAccount.contact.title": "질문이 있으신가요?",
  "deleteAccount.contact.prefix": "데이터에 관한 질문이 있거나 계정 삭제에 도움이 필요하면 다음으로 문의해 주세요:",
  "deleteAccount.meta.title": "계정 삭제 — Sandpiper",
  "deleteAccount.meta.description": "Sandpiper 계정 삭제 방법 및 데이터 처리 안내.",
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
