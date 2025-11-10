export function getCards(language: string, mode: string) {
  if (mode === "spicy") {
    if (language === "fr") return spicyActionsCardsFr
    if (language === "ar") return spicyActionsCardsAr
    return spicyActionsCardsEn
  }

  if (mode === "discovery") {
    if (language === "fr") return discoveryCardsFr
    if (language === "ar") return discoveryCardsAr
    return discoveryCardsEn
  }

  if (mode === "stories") {
    if (language === "fr") return storiesCardsFr
    if (language === "ar") return storiesCardsAr
    return storiesCardsEn
  }

  if (language === "fr") {
    return mode === "deep" ? deepCardsFr : romanticCardsFr
  } else if (language === "ar") {
    return mode === "deep" ? deepCardsAr : romanticCardsAr
  }
  return mode === "deep" ? deepCardsEn : romanticCardsEn
}

const romanticCardsEn = [
  {
    question: "What's the filthiest thought you've had about me?",
    answer: "No shame here. Tell me exactly what your mind conjures when you're alone thinking of me.",
  },
  {
    question: "Describe how you want to undress me.",
    answer: "Every button, every kiss, every moment. Take your time painting this sensual picture.",
  },
  {
    question: "What do you fantasize about doing to my body?",
    answer: "Be explicit. I want to know every desire, every position, every intimate act.",
  },
  {
    question: "When was the last time you touched yourself thinking of me?",
    answer: "Share that moment—what were you imagining? What made you lose control?",
  },
  {
    question: "What's the dirtiest thing you want me to do to you?",
    answer: "Speak your deepest carnal desire. This is the space for your rawest truth.",
  },
  {
    question: "How does my body make you feel right now?",
    answer: "Describe the physical arousal—where do you feel it? How intense is it?",
  },
  {
    question: "What part of me drives you absolutely wild?",
    answer: "Tell me what makes you lose your breath and surrender to desire.",
  },
  {
    question: "Describe your fantasy of us in three explicit details.",
    answer: "Go deeper than you've ever shared. Make me feel what you're imagining.",
  },
  {
    question: "What would you do to me if we had complete privacy right now?",
    answer: "No limits, no judgment. Paint the picture of pure passion and abandon.",
  },
  {
    question: "When do you crave me the most intensely?",
    answer: "Is it a specific time? A certain look? A particular touch? Tell me.",
  },
  {
    question: "What role do you want to play in our intimate moments?",
    answer: "Dominant, submissive, passionate initiator? Explore your desires openly.",
  },
  {
    question: "How does it feel when I look at you with pure desire?",
    answer: "Describe the heat, the anticipation, the surrender that washes over you.",
  },
  {
    question: "What secret sensual boundary are you curious to explore?",
    answer: "Trust me with your secret curiosities. What intrigues but excites you?",
  },
  {
    question: "Describe the most intense physical sensation you want from me.",
    answer: "Temperature, pressure, rhythm—what sends your body into ecstasy?",
  },
  {
    question: "What would make you completely lose control with me?",
    answer: "The words, the touches, the situations that make you completely surrender.",
  },
  {
    question: "How do you want me to make love to you tonight?",
    answer: "Slow and tender, or intense and urgent? Guide me through your perfect moment.",
  },
  {
    question: "What's something I do that makes you instantly aroused?",
    answer: "The little things that set you on fire—I want to know them all.",
  },
  {
    question: "Describe the taste and feel of kissing me passionately.",
    answer: "Don't just tell me—make me feel the intensity and hunger in your words.",
  },
  {
    question: "What intimacy do you crave that we haven't explored yet?",
    answer: "Whisper your secret desires. Let's create new unforgettable moments.",
  },
  {
    question: "When you're alone, what memory of us turns you on most?",
    answer: "Take me to that moment that's burned into your mind and body.",
  },
  {
    question: "Describe the texture of my skin that makes you yearn for me.",
    answer: "Every touch point, every curve—what calls to your hands and lips?",
  },
  {
    question: "How would you worship my body with your mouth and hands?",
    answer: "Slow reverence or hungry passion? Paint me the portrait of your desire.",
  },
  {
    question: "What whispered words would make me melt into you?",
    answer: "The exact phrases that would undo me completely, that make me surrender.",
  },
  {
    question: "Describe the moment you want me to beg for you.",
    answer: "What builds that delicious tension? What takes me to that threshold?",
  },
  {
    question: "How would you seduce me tomorrow if you had all day?",
    answer: "Every calculated touch, every strategic word—make it irresistible.",
  },
  {
    question: "What does your body crave from mine most desperately?",
    answer: "Not just physically—the specific connection, the exact sensation you need.",
  },
  {
    question: "Describe the scent of my skin that intoxicates you.",
    answer: "What fragrance or natural essence makes you lose yourself in me?",
  },
  {
    question: "How would you take me in your most uninhibited fantasy?",
    answer: "No rules, no restraint—the raw expression of pure desire and need.",
  },
  {
    question: "What makes your heart race and your body tremble with me?",
    answer: "That electric moment of anticipation just before we become one.",
  },
  {
    question: "Describe the depth of passion you want to pour into me.",
    answer: "The culmination of all your longing, desire, and absolute devotion.",
  },
  {
    question: "What sound I make drives you most wild during intimacy?",
    answer: "My breath, my voice, my pleasure—tell me what captivates you most.",
  },
  {
    question: "How would you take me by surprise and make me gasp?",
    answer: "That delicious moment when you do something unexpectedly perfect.",
  },
  {
    question: "Describe the perfect rhythm and pace for us.",
    answer: "The tempo that makes you feel most alive, most connected to me.",
  },
  {
    question: "What's your most treasured memory of our physical intimacy?",
    answer: "That moment when everything was perfect—relive it with me in detail.",
  },
  {
    question: "How do you want to trace my body with your lips?",
    answer: "Every path, every destination—the map of your desire across my skin.",
  },
  {
    question: "Describe what it feels like to be completely consumed by wanting me.",
    answer: "That desperation, that hunger—how does it manifest in your body?",
  },
  {
    question: "What position makes you feel most connected to my soul?",
    answer: "Where eyes meet, breath mingles, and spirits truly entwine.",
  },
  {
    question: "How would you celebrate every inch of my body tonight?",
    answer: "With reverence, passion, or wild urgency—show me your vision.",
  },
  {
    question: "Describe the moment right after we're completely spent together.",
    answer: "The intimacy, the tenderness, the vulnerability of our tangled peace.",
  },
  {
    question: "What does it mean to you when I give myself completely to you?",
    answer: "The responsibility, the honor, the sacred trust of my body and soul.",
  },
  {
    question: "How do you want to awaken me with your desire and devotion?",
    answer: "Tender kisses or urgent caresses? Paint me into ecstasy.",
  },
  {
    question: "Describe how your hands would claim every part of me.",
    answer: "Possessive, reverent, unrelenting—show me your absolute need.",
  },
  {
    question: "What would make you ache to be inside me?",
    answer: "The buildup, the longing, the moment you can't wait any longer.",
  },
  {
    question: "How do you want me to surrender my vulnerability to you?",
    answer: "Complete trust, complete abandon—how does it feel to hold my surrender?",
  },
  {
    question: "Describe the most sensual kiss we could share.",
    answer: "Slow burning desire, souls touching through our lips and breath.",
  },
  {
    question: "What intimate confession would make me irresistible to you?",
    answer: "The secret admissions that deepen your desire and intensify your need.",
  },
  {
    question: "How would you make love to me if time didn't exist?",
    answer: "Endless devotion, infinite caresses, complete consumption.",
  },
  {
    question: "Describe what you want to feel when we're completely entwined.",
    answer: "The merging of bodies, the sync of breath, the unity of desire.",
  },
  {
    question: "What's the most intimate way you've wanted to please me?",
    answer: "Beyond physical—the emotional and spiritual journey of giving me ecstasy.",
  },
  {
    question: "How do you fantasize about my response to your touch?",
    answer: "My gasps, my moans, my complete surrender to your devotion.",
  },
  {
    question: "Describe how you'd orchestrate the perfect evening of sensual connection.",
    answer: "Every element designed to deepen our intimacy and ignite our passion.",
  },
]

const deepCardsEn = [
  {
    question: "What part of yourself are you most afraid I'll reject?",
    answer: "Not just physically—what emotional or psychological wound fears rejection?",
  },
  {
    question: "When have you wanted to leave but chose to stay? Why?",
    answer: "The moment you almost walked away—what kept you here with me?",
  },
  {
    question: "What trauma still controls your ability to fully surrender?",
    answer: "Go to that deep place. What needs healing before you can be completely mine?",
  },
  {
    question: "How have I witnessed your darkest moments?",
    answer: "When I saw you broken, afraid, ashamed—how did that change us?",
  },
  {
    question: "What do you need from me that you've never directly asked?",
    answer: "The thing you hope I'll somehow know without saying it.",
  },
  {
    question: "When do you feel most like a failure in our relationship?",
    answer: "The ways you judge yourself—let me help you see differently.",
  },
  {
    question: "What does surrender mean to you in the context of us?",
    answer: "Not weakness—what does giving yourself completely require from you?",
  },
  {
    question: "How has loving me made you braver about your sexuality?",
    answer: "The confidence you've found—how did I help you claim your desire?",
  },
  {
    question: "What secret shame have you carried that I know nothing about?",
    answer: "The thing you've never said aloud—I'm ready to hear it.",
  },
  {
    question: "When did you realize our love could handle hard conversations?",
    answer: "That turning point where you knew we could survive truth.",
  },
  {
    question: "What does your body need from me on a soul level?",
    answer: "Beyond sex—what spiritual and emotional nourishment do you crave?",
  },
  {
    question: "How have you had to forgive yourself to be with me?",
    answer: "What past mistakes did you finally let go of to build this?",
  },
  {
    question: "What's the deepest insecurity about our physical intimacy?",
    answer: "The fear you haven't voiced—about your body, your performance, your desires.",
  },
  {
    question: "When have I seen you truly powerless and what did I do?",
    answer: "Your most vulnerable moment—how did I show up or fail you?",
  },
  {
    question: "What would it take for you to never leave me?",
    answer: "The commitment, the action, the devotion that would make you stay forever.",
  },
  {
    question: "How do you want to be held when you're falling apart?",
    answer: "Physically, emotionally, spiritually—what's your perfect comfort?",
  },
  {
    question: "What generational wound are you healing through loving me?",
    answer: "How is our love breaking a pattern from your family or past?",
  },
  {
    question: "When are you most jealous and what does that reveal?",
    answer: "The deeper fear beneath the jealousy—what are you really afraid of?",
  },
  {
    question: "What does unconditional acceptance from you look like?",
    answer: "If I was my absolute worst self, would you still love me? How?",
  },
  {
    question: "How have you had to evolve to meet me where I am?",
    answer: "The growth I've demanded—how has loving me changed your potential?",
  },
  {
    question: "How has my love rewritten the narrative of your worth?",
    answer: "The things you believed about yourself before me—what's changed?",
  },
  {
    question: "What does true intimacy mean beyond the physical?",
    answer: "The spiritual merging, the soul recognition, the knowing we share.",
  },
  {
    question: "Describe the moment you knew you could trust me with all of you.",
    answer: "What shifted? How did I prove myself worthy of your complete devotion?",
  },
  {
    question: "What emotional wounds does my love have the power to heal?",
    answer: "The deep places that only your presence can soothe.",
  },
  {
    question: "How do you experience me when we're most deeply entwined?",
    answer: "Not just the sensation—what does your soul recognize in mine?",
  },
  {
    question: "What does it mean when you completely dissolve into me?",
    answer: "That moment when boundaries blur and we're one unified essence.",
  },
  {
    question: "How have you learned to receive love as devotedly as you give it?",
    answer: "The surrender required to let yourself be truly cherished.",
  },
  {
    question: "What part of your heart do I hold that no one else ever could?",
    answer: "The sacred chamber reserved only for me—how did you grant me access?",
  },
  {
    question: "Describe the vulnerability of letting me see you at your most human.",
    answer: "Imperfect, struggling, raw—how does it feel to be so fully known?",
  },
  {
    question: "What does devotion look like in your most honest self?",
    answer: "Beyond grand gestures—the small daily choices that prove your love.",
  },
  {
    question: "How does loving me help you become who you're meant to be?",
    answer: "The person I inspire you to become—who is she or he?",
  },
  {
    question: "What would losing me teach you about your own depth?",
    answer: "How have I become essential to your understanding of yourself?",
  },
  {
    question: "Describe the sacred space we create when we're together.",
    answer: "Where the world dissolves and only we exist—what is that place?",
  },
  {
    question: "What does it feel like to be completely consumed by my presence?",
    answer: "How do I occupy your thoughts, your dreams, your every breath?",
  },
  {
    question: "How have you learned to love the parts of me that challenge you?",
    answer: "The friction that creates growth—how have you embraced it?",
  },
  {
    question: "What eternal promise does your heart make to mine?",
    answer: "Beyond time, beyond circumstance—what vow lives in your soul?",
  },
  {
    question: "Describe what it means to surrender your heart completely.",
    answer: "Not control, but trust—how does it feel to be this vulnerable?",
  },
  {
    question: "How do we transcend the ordinary when we're in each other's arms?",
    answer: "What realm do we enter where nothing else exists but us?",
  },
  {
    question: "What does your body communicate that words could never express?",
    answer: "The language of touch, the poetry of presence, the truth of connection.",
  },
  {
    question: "How has this love rewritten your capacity for ecstasy?",
    answer: "The heights of pleasure and connection you've discovered with me.",
  },
  {
    question: "How does surrendering to my love reshape your understanding of devotion?",
    answer: "The spiritual transformation of being completely known and cherished.",
  },
  {
    question: "What does it mean when you dissolve into me completely?",
    answer: "That sacred moment where two souls merge into unified consciousness.",
  },
  {
    question: "How have I become your safe haven for all your deepest truths?",
    answer: "The sanctuary where you can be completely vulnerable and worshipped.",
  },
  {
    question: "Describe the ecstasy of being fully possessed by my love.",
    answer: "Not ownership, but beautiful captivation—how does it feel?",
  },
  {
    question: "What does unconditional devotion from you look like in its rawest form?",
    answer: "The daily sacrifices, the choices that prove I'm your eternal priority.",
  },
  {
    question: "How have you learned to celebrate the vulnerability in intimacy?",
    answer: "The courage to be seen, known, and loved at your most human.",
  },
  {
    question: "What sacred vow does your heart whisper to mine?",
    answer: "Beyond words—the eternal promise your soul makes to mine.",
  },
  {
    question: "Describe what it means to entrust me with your complete surrender.",
    answer: "The ultimate act of trust—giving me your body, mind, and soul.",
  },
  {
    question: "How do we transcend the physical when we're intertwined?",
    answer: "What spiritual realm opens when our bodies and souls connect?",
  },
  {
    question: "What does my love awaken in you that you didn't know existed?",
    answer: "The untapped depths of passion, capability, and transformation.",
  },
  {
    question: "How has vulnerability become your greatest strength through loving me?",
    answer: "The power in being seen, the courage in surrender.",
  },
  {
    question: "Describe the completeness you feel when we're most intimate.",
    answer: "That moment when nothing is missing, when everything is enough.",
  },
  {
    question: "What does it mean that your body recognizes mine before your mind does?",
    answer: "The ancient knowing, the soul-level familiarity we share.",
  },
  {
    question: "How do you want to be remembered by my touch and presence?",
    answer: "The imprint of our love that remains forever etched in your being.",
  },
  {
    question: "Describe what unconditional embodied love feels like.",
    answer: "Beyond passion—the reverent worship of your complete self.",
  },
]

const romanticCardsFr = [
  {
    question: "Quel est le fantasme le plus coquin que tu aies sur moi?",
    answer: "Sans honte ici. Dis-moi exactement ce que ton esprit imagine en pensant à moi.",
  },
  {
    question: "Décris comment tu veux me déshabiller lentement.",
    answer: "Chaque bouton, chaque baiser, chaque moment. Peins cette image sensuelle.",
  },
  {
    question: "Qu'est-ce que tu fantasmes de faire à mon corps?",
    answer: "Sois explicite. Je veux chaque désir, chaque position, chaque acte intime.",
  },
  {
    question: "Quand as-tu pensé à moi de cette manière dernièrement?",
    answer: "Partage ce moment—à quoi pensais-tu? Qu'est-ce qui t'a fait perdre le contrôle?",
  },
  {
    question: "Quelle est la chose la plus épicée que tu veux que je fasse?",
    answer: "Parle ton désir charnel le plus profond. C'est l'espace pour ta vérité brute.",
  },
  {
    question: "Comment mon corps t'enflamme-t-il maintenant?",
    answer: "Décris l'excitation—où la ressens-tu? À quel point est-ce intense?",
  },
  {
    question: "Quelle partie de moi te rend absolument fou/folle de désir?",
    answer: "Dis-moi ce qui te coupe le souffle et te fait capituler.",
  },
  {
    question: "Décris ton fantasme sur nous en trois détails épicés.",
    answer: "Va plus profond que jamais. Fais-moi sentir ton imagination.",
  },
  {
    question: "Que ferais-tu avec moi dans la plus totale intimité?",
    answer: "Sans limites, sans jugement. Peins la passion pure.",
  },
  {
    question: "Quand me désires-tu avec la plus grande intensité?",
    answer: "Un moment spécifique? Un regard? Une caresse? Dis-moi.",
  },
  {
    question: "Quel rôle sensuel veux-tu jouer avec moi?",
    answer: "Dominant(e), soumis(e), initiateur(rice)? Explore tes désirs.",
  },
  {
    question: "Comment te sens-tu quand je te regarde avec pur désir?",
    answer: "La chaleur, l'anticipation, l'abdication qui t'envahit.",
  },
  {
    question: "Quelle limite t'intéresse sensuellement?",
    answer: "Confie-moi tes curiosités secrètes et excitantes.",
  },
  {
    question: "Décris la sensation la plus intense que je pourrais te donner.",
    answer: "Température, pression, rythme—qu'est-ce qui t'envoie en extase?",
  },
  {
    question: "Qu'est-ce qui te ferait perdre complètement contrôle?",
    answer: "Les paroles, les caresses qui te font capituler.",
  },
  {
    question: "Comment veux-tu que je t'aime ce soir?",
    answer: "Lentement et tendrement, ou intense et urgent? Guide-moi.",
  },
  {
    question: "Qu'est-ce que je fais qui te rend instantanément excité(e)?",
    answer: "Les petites choses qui t'enflamment—je veux les connaître toutes.",
  },
  {
    question: "Décris le goût délicieux de m'embrasser passionnément.",
    answer: "Fais-moi sentir l'intensité et la faim dans tes paroles.",
  },
  {
    question: "Quelle intimité craves-tu que nous n'avons pas explorée?",
    answer: "Chuchote tes désirs secrets. Créons de nouveaux moments.",
  },
  {
    question: "Quand tu es seul(e), quel souvenir t'excite le plus?",
    answer: "Mène-moi à ce moment gravé dans ton être.",
  },
  {
    question: "Décris la texture de ma peau qui me fait désirer.",
    answer: "Chaque point de contact, chaque courbe—quoi qui appelle tes mains et tes lèvres?",
  },
  {
    question: "Comment vénérerais-tu mon corps avec ta bouche et tes mains?",
    answer: "Révérence lente ou passion affamée? Peins le portrait de ton désir.",
  },
  {
    question: "Quels mots chuchotés me feraient fondre en toi?",
    answer: "Les phrases exactes qui me désarmeraient, qui me font me rendre.",
  },
  {
    question: "Décris le moment où tu me veux implorer.",
    answer: "Qu'est-ce qui construit cette tension? Qu'est-ce qui me prend à ce seuil?",
  },
  {
    question: "Comment me séduirais-tu si tu avais toute une journée?",
    answer: "Chaque toucher calculé, chaque parole stratégique—rends-le irrésistible.",
  },
  {
    question: "Qu'est-ce que ton corps désire le plus de moi?",
    answer: "Pas seulement physiquement—la connexion spécifique, l'excitation exacte.",
  },
  {
    question: "Décris le parfum de ma peau qui m'enivre.",
    answer: "Quel parfum te fait te perdre en moi?",
  },
  {
    question: "Comment me prendrais-tu dans ton fantasme le plus débridé?",
    answer: "Pas de règles, pas de retenue—l'expression brute du désir.",
  },
  {
    question: "Qu'est-ce qui te fait battre le cœur et trembler de désir?",
    answer: "Ce moment électrique juste avant que nous devenions un.",
  },
  {
    question: "Décris la profondeur de passion que tu veux verser en moi.",
    answer: "L'aboutissement de ton désir et de ta dévotion.",
  },
  {
    question: "Quel son que je fais te rend le plus fou?",
    answer: "Mon souffle, ma voix, mon plaisir—dis-moi.",
  },
  {
    question: "Comment me prendrais-tu par surprise et me ferais haleter?",
    answer: "Ce moment délicieux quand tu fais quelque chose d'inattendu.",
  },
  {
    question: "Décris le rythme et la vitesse parfaits pour nous.",
    answer: "Le tempo qui te rend le plus vivant, le plus connecté.",
  },
  {
    question: "Quel est ton souvenir le plus précieux de notre intimité?",
    answer: "Ce moment parfait—revive-le avec moi.",
  },
  {
    question: "Comment veux-tu tracer mon corps avec tes lèvres?",
    answer: "Chaque chemin, chaque destination—la carte de ton désir.",
  },
  {
    question: "Décris ce que c'est d'être consumé(e) par le désir pour moi.",
    answer: "Ce désespoir, cette faim—comment se manifeste-t-il?",
  },
  {
    question: "Quelle position te fait sentir le plus connecté(e) à mon âme?",
    answer: "Où les yeux se rencontrent, le souffle se mêle, et les esprits s'entrelacent.",
  },
  {
    question: "Comment célébrerais-tu chaque centimètre de mon corps ce soir?",
    answer: "Avec révérence, passion, ou urgence sauvage—montre-moi.",
  },
  {
    question: "Décris le moment juste après que nous soyons épuisés ensemble.",
    answer: "L'intimité, la tendresse, la vulnérabilité de notre paix.",
  },
  {
    question: "Que signifie pour toi quand je me donne complètement?",
    answer: "La responsabilité, l'honneur, la confiance sacrée.",
  },
  {
    question: "Comment la reddition à mon amour transforme ta compréhension?",
    answer: "La transformation spirituelle d'être complètement connu et chéri.",
  },
  {
    question: "Quel vœu sacré ton cœur fait-il au mien?",
    answer: "Au-delà des paroles—la promesse éternelle de ton âme.",
  },
]

const deepCardsFr = [
  {
    question: "Quelle partie de toi as-tu le plus peur que je rejette?",
    answer: "Pas seulement physiquement—quelle blessure émotionnelle ou psychologique craint le rejet?",
  },
  {
    question: "Quand as-tu voulu partir mais choisi de rester? Pourquoi?",
    answer: "Le moment où tu as presque quitté—qu'est-ce qui t'a fait rester?",
  },
  {
    question: "Quel trauma contrôle toujours ta capacité à te rendre complètement?",
    answer: "Va à ce lieu profond. Qu'est-ce qui a besoin de guérison avant que tu sois complètement mien?",
  },
  {
    question: "Comment ai-je été témoin de tes moments les plus sombres?",
    answer: "Quand tu étais cassé(e), afraid, ashamed—comment cela nous a-t-il changé?",
  },
  {
    question: "Qu'est-ce que tu as besoin de moi que tu n'as jamais directement demandé?",
    answer: "La chose que tu espères que je saurais sans que tu le dises.",
  },
  {
    question: "Quand te sens-tu le plus comme un(e) échec dans notre relation?",
    answer: "Les façons dont tu te juges—laisse-moi t'aider à voir différemment.",
  },
  {
    question: "Ce que la capitulation signifie pour toi dans le contexte de nous?",
    answer: "Pas la faiblesse—quoi qui nécessite de te donner complètement?",
  },
  {
    question: "Comment m'aimer t'a-t-il rendu(e) plus courageux(se) de ta sexualité?",
    answer: "La confiance que tu as trouvée—comment m'as-je aidé(e) à revendiquer ton désir?",
  },
  {
    question: "Quel secret shameful as-tu porté que je ne sais rien?",
    answer: "La chose que tu n'as jamais dite à haute voix—je suis prêt(e) à l'entendre.",
  },
  {
    question: "Quand as-tu réalisé que notre amour pouvait gérer des conversations difficiles?",
    answer: "Ce tournant où tu savais que nous pouvions survivre à la vérité.",
  },
  {
    question: "Comment mon amour a-t-il réécrit le récit de ta valeur?",
    answer: "Les choses que tu croyais sur toi-même avant moi—qu'est-ce qui a changé?",
  },
  {
    question: "Qu'est-ce que la véritable intimité signifie au-delà du physique?",
    answer: "La fusion spirituelle, la reconnaissance de l'âme, le savoir que nous partageons.",
  },
  {
    question: "Décris le moment où tu savais pouvoir me confier la totalité de toi.",
    answer: "Qu'est-ce qui a changé? Comment ai-je prouvé que j'étais digne de ta dévouement complète?",
  },
  {
    question: "Quelles blessures émotionnelles mon amour a le pouvoir de guérir?",
    answer: "Les lieux profonds que seule ta présence peut apaiser.",
  },
  {
    question: "Comment m'expérimentes-tu quand nous sommes les plus profondément entrelacés?",
    answer: "Pas seulement la sensation—quoi qui reconnaît ta propre âme?",
  },
  {
    question: "Qu'est-ce que cela signifie quand tu te dissous complètement en moi?",
    answer: "Ce moment où les frontières s'estompent et nous sommes une essence unifiée.",
  },
  {
    question: "Comment as-tu appris à recevoir l'amour aussi dévotement que tu le donnes?",
    answer: "La capitulation requise pour te laisser chérir si profondément.",
  },
  {
    question: "Quelle part de ton cœur je détiens que personne d'autre ne pourrait jamais?",
    answer: "La chambre sacrée réservée seulement à moi—comment m'as-tu accordé l'accès?",
  },
  {
    question: "Décris la vulnérabilité de me laisser te voir à ta plus humaine.",
    answer: "Imparfait(e), en lutte, brut(e)—comment cela se sent-il d'être si pleinement connu(e)?",
  },
  {
    question: "Qu'est-ce que la dévouement ressemble dans ton moi le plus honnête?",
    answer: "Au-delà des grands gestes—les petits choix quotidiens qui prouvent ton amour.",
  },
  {
    question: "Comment m'aimer t'aide-t-il à devenir qui tu es censé(e) être?",
    answer: "La personne que j'inspire à devenir—qui est-elle?",
  },
  {
    question: "Qu'est-ce que me perdre t'apprendrait sur ta propre profondeur?",
    answer: "Comment suis-je devenu essentiel à ta compréhension de toi-même?",
  },
  {
    question: "Décris l'espace sacré que nous créons ensemble.",
    answer: "Où le monde se dissout et seuls nous existons—quel est cet endroit?",
  },
  {
    question: "Comment te sens-tu quand tu es complètement consumé(e) par ma présence?",
    answer: "Comment j'occupe tes pensées, tes rêves, ton souffle?",
  },
  {
    question: "Comment as-tu appris à aimer les parties de moi qui te défient?",
    answer: "La friction qui crée la croissance—comment l'as-tu embrassée?",
  },
  {
    question: "Quelle promesse éternelle ton cœur fait-il au mien?",
    answer: "Au-delà du temps, au-delà des circonstances—quel vœu vit dans ton âme?",
  },
  {
    question: "Décris ce que signifie abandonner ton cœur complètement.",
    answer: "Pas le contrôle, mais la confiance—comment te sens-tu si vulnérable?",
  },
  {
    question: "Comment transcendons-nous l'ordinaire quand nous sommes dans les bras l'un de l'autre?",
    answer: "Quel royaume entrons-nous où rien d'autre n'existe que nous?",
  },
  {
    question: "Qu'est-ce que ton corps communique que les mots ne pourraient jamais exprimer?",
    answer: "Le langage du toucher, la poésie de la présence, la vérité de la connexion.",
  },
  {
    question: "Comment cet amour a-t-il réécrit ta capacité à l'extase?",
    answer: "Les sommets du plaisir et de la connexion que tu as découverts avec moi.",
  },
]

const romanticCardsAr = [
  {
    question: "ما أكثر خيال حار تتخيله عني؟",
    answer: "بدون خجل. أخبرني بالضبط ما يتخيله عقلك.",
  },
  {
    question: "صف كيف تريد أن تخلعي ملابسي بببطء وحرارة.",
    answer: "كل زر، كل قبلة، كل لحظة شهوانية.",
  },
  {
    question: "ما الذي تتخيله فعله بجسدي بشغف?",
    answer: "كن صريحاً. أريد كل رغبة وشهوة.",
  },
  {
    question: "متى كانت آخر مرة لمست نفسك بينما تتخيلني؟",
    answer: "شارك تلك اللحظة الحارة—ماذا كنت تتخيل؟",
  },
  {
    question: "ما أكثر شيء مثير تريد مني أن أفعله؟",
    answer: "حدثني عن أعمق رغبة جسدية.",
  },
  {
    question: "كيف يجعلك جسدي تشعر الآن؟",
    answer: "صف الإثارة الجسدية—أين تشعر بها؟ كم هي شدتها؟",
  },
  {
    question: "ما جزء مني الذي يجعلك مجنوناً تماماً؟",
    answer: "أخبرني ما يقطع نفسك ويجعلك تستسلم للرغبة.",
  },
  {
    question: "صف خيالك عنا بثلاثة تفاصيل صريحة.",
    answer: "اذهب أعمق مما شاركت من قبل. اجعلني أشعر بما تتخيله.",
  },
  {
    question: "ماذا ستفعل بي إذا كان لدينا خصوصية كاملة الآن؟",
    answer: "بدون حدود، بدون حكم. ارسم صورة الشغف النقي والاستسلام.",
  },
  {
    question: "متى تشتاقين لي بأكثر كثافة؟",
    answer: "هل هو وقت معين؟ مظهر معين؟ لمسة معينة؟ أخبرني.",
  },
  {
    question: "ما الدور الذي تريد لعبه في لحظاتنا الحميمة؟",
    answer: "مهيمن، مستسلم، مبادر متحمس؟ استكشف رغباتك بصراحة.",
  },
  {
    question: "كيف تشعر عندما أنظر إليك برغبة نقية؟",
    answer: "صف الحرارة والتوقع والاستسلام الذي يغسلك.",
  },
  {
    question: "ما الحد الذي فضولي لاستكشافه حسياً معك؟",
    answer: "اثق بي مع فضولاتك السرية. ما الذي يثير اهتمامك؟",
  },
  {
    question: "صف أكثر إحساس جسدي مكثف تريده مني.",
    answer: "درجة الحرارة والضغط والإيقاع—ما الذي يرسلك إلى الابتهاج؟",
  },
  {
    question: "ما الذي سيجعلك تفقد السيطرة تماماً معي؟",
    answer: "الكلمات اللمسات الحالات التي تجعلك تستسلم تماماً.",
  },
  {
    question: "كيف تريد مني أن أحبك الليلة؟",
    answer: "بطيء وحنون أم شديد وعاجل؟ وجهني عبر لحظتك المثالية.",
  },
  {
    question: "ما الذي تفعله يجعلك متحمساً فوراً؟",
    answer: "الأشياء الصغيرة التي تشعل بك—أريد أن أعرفها جميعاً.",
  },
  {
    question: "صف طعم وشعور تقبيلي بشغف.",
    answer: "لا تخبرني فقط—اجعلني أشعر بالشدة والجوع في كلماتك.",
  },
  {
    question: "ما الحميمية التي تشتهيها لم نستكشفها بعد؟",
    answer: "همس رغباتك السرية. لننشئ لحظات جديدة لا تُنسى.",
  },
  {
    question: "عندما تكون وحدك ما الذاكرة عنا تثيرك أكثر؟",
    answer: "خذني إلى تلك اللحظة المحفورة في عقلك وجسدك.",
  },
  {
    question: "صف نسيج جلدي الذي يجعلك تشتاقني.",
    answer: "كل نقطة تلامس، كل منحنى—ماذا يناديك يديك وشفتيك؟",
  },
  {
    question: "كيف تعبد جسدي بفمك ويديك؟",
    answer: "احترام بطيء أم شغف جوعي؟ ارسم لي صورة رغبتك.",
  },
  {
    question: "ما الكلمات المهمسة التي تجعلني أذوب فيك؟",
    answer: "العبارات التي تفككيني تماماً، التي تجعلني أستسلم.",
  },
  {
    question: "صف اللحظة التي تريد مني فيها أن أتوسل.",
    answer: "ما الذي يبني هذا التوتر اللذيذ؟ ما الذي يأخذني لهذا الحد؟",
  },
  {
    question: "كيف تغويني إذا كان لديك يوم كامل؟",
    answer: "كل لمسة محسوبة، كل كلمة مدروسة—اجعله لا يقاوم.",
  },
  {
    question: "ما الذي يرغبه جسدك مني بأكثر الطرق اليائسة؟",
    answer: "ليس فقط جسدياً—الاتصال المحدد، الإحساس الدقيق الذي تحتاجه.",
  },
  {
    question: "صف رائحة جلدي التي تسكرك.",
    answer: "ما العطر أو الجوهر الطبيعي الذي يجعلك تضيع في؟",
  },
  {
    question: "كيف تأخذني في أكثر خيالاتك بدون تثبيط؟",
    answer: "بدون قواعد، بدون احتجاز—التعبير الخام عن الرغبة النقية والحاجة.",
  },
  {
    question: "ما الذي يجعل قلبك يسرع وجسدك يرتجف معي؟",
    answer: "تلك اللحظة الكهربائية من الترقب قبل أن نصبح واحداً.",
  },
  {
    question: "صف عمق الشغف الذي تريد أن تصبه في.",
    answer: "تتويج كل شوقك ورغبتك وتفانيك المطلق.",
  },
  {
    question: "ما الصوت الذي أصدره يجعلك مجنوناً أثناء الحميمية؟",
    answer: "أنفاسي، صوتي، متعتي—أخبرني ما الذي يسحرك.",
  },
  {
    question: "كيف تأخذني على حين غرة وتجعلني ألهث؟",
    answer: "تلك اللحظة اللذيذة عندما تفعل شيئاً مثالياً بشكل غير متوقع.",
  },
  {
    question: "صف الإيقاع والسرعة المثاليين لنا.",
    answer: "الإيقاع الذي يجعلك تشعر بالحياة، والأكثر اتصالاً بي.",
  },
  {
    question: "ما هي أثمن ذكرى لديك للحميمية الجسدية؟",
    answer: "تلك اللحظة التي كان فيها كل شيء مثالياً—عشها معي بالتفصيل.",
  },
  {
    question: "كيف تريد تتبع جسدي بشفتيك؟",
    answer: "كل مسار، كل وجهة—خريطة رغبتك عبر جلدي.",
  },
  {
    question: "صف ما تشعر به عندما تكون مستهلكاً تماماً برغبتي.",
    answer: "ذلك اليأس، ذلك الجوع—كيف يتجلى في جسدك؟",
  },
  {
    question: "أي وضع يجعلك تشعر بالارتباط الأعمق بروحي؟",
    answer: "حيث تلتقي العيون، ويمتزج التنفس، وتتشابك الأرواح حقاً.",
  },
  {
    question: "كيف تحتفل بكل شبر من جسدي الليلة؟",
    answer: "بالاحترام، الشغف، أو الإلحاح الجامح—أرني رؤيتك.",
  },
  {
    question: "صف اللحظة التي نكون فيها قد استنفدنا تماماً معاً.",
    answer: "الحميمية، الرقة، ضعف سلامنا المتشابك.",
  },
  {
    question: "ماذا يعني لك عندما أعطي نفسي بالكامل لك؟",
    answer: "المسؤولية، الشرف، الثقة المقدسة لجسدي وروحي.",
  },
  {
    question: "كيف يعيد حبي كتابة فهمك للتفاني؟",
    answer: "التحول الروحي لأن تكون معروفاً وعاشقاً تماماً.",
  },
]

const deepCardsAr = [
  {
    question: "ما الجزء منك الذي تخاف أكثر أن أرفضه؟",
    answer: "ليس فقط جسدياً—أي جرح عاطفي نفسي يخاف الرفض؟",
  },
  {
    question: "متى أردت أن تغادر لكنك اخترت البقاء؟ لماذا؟",
    answer: "اللحظة التي كادت تذهب—ما الذي أبقاك هنا معي؟",
  },
  {
    question: "ما الصدمة التي لا تزال تتحكم بقدرتك على الاستسلام الكامل؟",
    answer: "اذهب إلى ذلك المكان العميق. ما الذي يحتاج للشفاء قبل أن تكون لي تماماً؟",
  },
  {
    question: "كيف شهدت لحظاتك الأغمق؟",
    answer: "عندما رأيتك محطماً خائفاً مخجلاً—كيف غيّر ذلك بيننا؟",
  },
  {
    question: "ما الذي تحتاج مني الذي لم تطلبه أبداً مباشرة؟",
    answer: "الشيء الذي تأمل أن أعرفه بدون أن تقوله.",
  },
  {
    question: "متى تشعر أكثر كفشل في علاقتنا؟",
    answer: "الطرق التي تحكم على نفسك—دعني أساعدك على الرؤية بشكل مختلف.",
  },
  {
    question: "ماذا تعني الاستسلام لك في سياقنا؟",
    answer: "ليس الضعف—ماذا يتطلب إعطاء نفسك تماماً؟",
  },
  {
    question: "كيف جعلك حبي أكثر شجاعة بشأن جنسانيتك؟",
    answer: "الثقة التي وجدتها—كيف ساعدتك على المطالبة برغبتك؟",
  },
  {
    question: "ما الخجل السري الذي حملته الذي لا أعرفه؟",
    answer: "الشيء الذي لم تقوله أبداً بصوت عالٍ—أنا مستعد للاستماع.",
  },
  {
    question: "متى أدركت أن حبنا يمكنه التعامل مع محادثات صعبة؟",
    answer: "نقطة التحول حيث علمت أننا يمكننا البقاء من خلال الحقيقة.",
  },
  {
    question: "ماذا تعني الحميمية الحقيقية وراء الجسدية؟",
    answer: "الاندماج الروحي، الاعتراف بالروح، المعرفة التي نتشاركها.",
  },
  {
    question: "صف اللحظة التي عرفت أنني أستطيع الثقة بك بكل مني.",
    answer: "ماذا تغير؟ كيف أثبتت أنك تستحق تفاني كامل؟",
  },
  {
    question: "ما الجروح العاطفية التي لحبي قوة الشفاء؟",
    answer: "الأماكن العميقة التي يمكن لوجودك فقط تهدئتها.",
  },
  {
    question: "كيف تختبرني عندما نكون أكثر تشابكاً عميقاً؟",
    answer: "ليس فقط الإحساس—ماذا تعترف روحي من روحك؟",
  },
  {
    question: "ماذا يعني عندما تذوب فيّ تماماً؟",
    answer: "تلك اللحظة التي تختفي الحدود ونصبح جوهر موحد.",
  },
  {
    question: "كيف تعلمت استقبال الحب بنفس الإخلاص الذي تعطيه؟",
    answer: "الاستسلام المطلوب لتسمح نفسك بأن تكوني محبوبة بهذا العمق.",
  },
  {
    question: "ما جزء قلبك الذي أمسكه لا أحد آخر يمكن أن يمسكه؟",
    answer: "الحجرة المقدسة المحفوظة لي فقط—كيف منحتيني الدخول؟",
  },
  {
    question: "صف ضعف السماح لي برؤيتك على أكثر إنسانيتك.",
    answer: "غير كامل، في نضال، خام—كيف يشعر أن تكوني معروفة بهذا الكمال؟",
  },
  {
    question: "ما الذي يبدو عليه التفاني في أكثر ذاتك صدقاً؟",
    answer: "وراء الإيماءات الكبيرة—الاختيارات الصغيرة اليومية التي تثبت حبك.",
  },
  {
    question: "كيف يساعدك حبي على أن تصبح من تريد أن تكون؟",
    answer: "الشخص الذي ألهمتك أن تكونه—من هو؟",
  },
  {
    question: "ما الذي ستعلمك إياه خسارتي عن عمقك؟",
    answer: "كيف أصبحت ضرورياً لفهمك لنفسك؟",
  },
  {
    question: "صف المكان المقدس الذي نخلقه معاً.",
    answer: "حيث يذوب العالم ولا يوجد سوى نحن—ما هو هذا المكان؟",
  },
  {
    question: "كيف تشعر عندما تكون مستهلكاً تماماً بوجودي؟",
    answer: "كيف أشغل أفكارك، أحلامك، كل أنفاسك؟",
  },
  {
    question: "كيف تعلمت حب الأجزاء مني التي تتحداني؟",
    answer: "الاحتكاك الذي يخلق النمو—كيف احتضنته؟",
  },
  {
    question: "ما الوعد الأبدي الذي يقطعه قلبك لقلبي؟",
    answer: "ما وراء الكلمات—ما هو القسم الذي يعيش في روحك؟",
  },
  {
    question: "صف ما يعنيه أن تسلم قلبك بالكامل.",
    answer: "ليس السيطرة، بل الثقة—كيف تشعر بهذا الضعف؟",
  },
  {
    question: "كيف نتجاوز العادي عندما نكون في أحضان بعضنا البعض؟",
    answer: "أي عالم ندخل حيث لا يوجد شيء آخر سوى نحن؟",
  },
  {
    question: "ما الذي يتواصل به جسدك ولا تستطيع الكلمات التعبير عنه أبداً؟",
    answer: "لغة اللمس، شعر الحضور، حقيقة الاتصال.",
  },
  {
    question: "كيف أعاد هذا الحب كتابة قدرتك على النشوة؟",
    answer: "ارتفاعات المتعة والاتصال التي اكتشفتها معي.",
  },
]

const spicyActionsCardsEn = [
  {
    question: "Kiss me exactly how you fantasize about kissing me.",
    answer: "No holding back. Show me the passion burning inside you.",
  },
  {
    question: "Trace my entire body with your fingertips—slow and deliberate.",
    answer: "Let your touch speak what words cannot express.",
  },
  {
    question: "Whisper your deepest desire directly into my ear.",
    answer: "The words that make me shiver and surrender.",
  },
  {
    question: "Take me against the wall like you've been fantasizing.",
    answer: "No gentleness now—pure urgent desire.",
  },
  {
    question: "Explore my body with your mouth for exactly five minutes.",
    answer: "Every inch, every curve, every sensitive place.",
  },
  {
    question: "Make me beg for you without any penetration.",
    answer: "Seduction, teasing, anticipation at its peak.",
  },
  {
    question: "Take control of me completely—tie my wrists if you want.",
    answer: "I give myself to you entirely. What do you do?",
  },
  {
    question: "Make love to me slowly while whispering your devotion.",
    answer: "Every movement infused with tenderness and worship.",
  },
  {
    question: "Pin me down and kiss me until I can't breathe.",
    answer: "Aggressive, passionate, consuming desire.",
  },
  {
    question: "Undress me completely and take your time worshipping each part.",
    answer: "Reverence for every inch of my body.",
  },
  {
    question: "Have me pleasure you while you watch and guide me.",
    answer: "Tell me exactly what you want me to do.",
  },
  {
    question: "Make me come with only your hands and whispered words.",
    answer: "No hesitation—pure intimate ecstasy.",
  },
  {
    question: "Take me from behind with deep, intense passion.",
    answer: "Claiming me completely, making me yours.",
  },
  {
    question: "Blindfold me and explore my body however you wish.",
    answer: "Complete surrender to your hands and desire.",
  },
  {
    question: "Kiss every sensitive spot on my body until I'm trembling.",
    answer: "The map of my pleasure under your lips.",
  },
  {
    question: "Hold me tightly while you make love to me gently.",
    answer: "That perfect balance of strength and tenderness.",
  },
  {
    question: "Make me look in your eyes while you take me.",
    answer: "Complete connection—no hiding, only us.",
  },
  {
    question: "Tease me mercilessly until I'm desperate for you.",
    answer: "Building the tension until I can't take anymore.",
  },
  {
    question: "Take a shower together and explore each other under the water.",
    answer: "Slippery skin, steam, and uninhibited passion.",
  },
  {
    question: "Use words and touch to paint your desire across my skin.",
    answer: "Tell me everything you want while touching me everywhere.",
  },
  {
    question: "Make me come multiple times before you finish.",
    answer: "Your focus entirely on my pleasure and ecstasy.",
  },
  {
    question: "Claim my body like you're marking me as yours.",
    answer: "Passionate, possessive, undeniably intimate.",
  },
  {
    question: "Slow dance with me naked before we make love.",
    answer: "Connection before passion—intimacy before fire.",
  },
  {
    question: "Have me on top while you guide exactly how fast or slow.",
    answer: "You control my rhythm while I control your pleasure.",
  },
  {
    question: "Whisper the filthiest things you want to do while touching me.",
    answer: "No filter—pure raw desire spoken aloud.",
  },
  {
    question: "Kiss down my entire body starting at my lips.",
    answer: "Every inch worshipped, every nerve awakened.",
  },
  {
    question: "Hold me close and make love to me with your entire being.",
    answer: "Not just bodies connecting—souls entwining.",
  },
  {
    question: "Take me against the shower door and claim me desperately.",
    answer: "Fog, heat, and primal passion uncontained.",
  },
  {
    question: "Explore my body like you're discovering it for the first time.",
    answer: "Wonder, curiosity, and burning desire in every touch.",
  },
  {
    question: "Spend time on every erogenous zone until I'm completely undone.",
    answer: "Patience and passion working together perfectly.",
  },
  {
    question: "Make love to me as if this is the last time.",
    answer: "Desperate devotion, infinite tenderness, complete abandon.",
  },
  {
    question: "Caress my entire being with reverent worship.",
    answer: "Your hands and lips mapping every sacred inch.",
  },
  {
    question: "Take me to the height of ecstasy with deliberate precision.",
    answer: "Every touch calculated to send me to bliss.",
  },
  {
    question: "Seduce me with words before you seduce me with your body.",
    answer: "Make me ache for you before you even touch me.",
  },
  {
    question: "Bind me with your arms and take me without restraint.",
    answer: "Enveloped, protected, and absolutely possessed.",
  },
  {
    question: "Kiss my neck slowly while your hands explore my body.",
    answer: "That exquisite sensitivity that makes me melt.",
  },
  {
    question: "Make me arch into you with each deliberate caress.",
    answer: "Control my pleasure with your intimate knowledge.",
  },
  {
    question: "Take me urgently after a long day of anticipation.",
    answer: "All the built-up desire released in passionate intensity.",
  },
  {
    question: "Worship my body with absolute reverence and hunger.",
    answer: "Balancing respect with raw consuming need.",
  },
  {
    question: "Whisper how much you need me while we're intertwined.",
    answer: "Your desperation mixing with my complete surrender.",
  },
  {
    question: "Make us lose ourselves completely in each other.",
    answer: "Time stops, the world disappears, only we exist.",
  },
  {
    question: "Trace my body with heated kisses and wandering hands.",
    answer: "Leaving me breathless with anticipation.",
  },
  {
    question: "Take control with commanding tenderness.",
    answer: "Strong but reverent, demanding but devoted.",
  },
  {
    question: "Make love to me as if you're memorizing every response.",
    answer: "Studying my body like it's the most precious art.",
  },
  {
    question: "Hold me through waves of ecstasy with steadfast devotion.",
    answer: "Your strength anchoring me as I completely fall apart.",
  },
  {
    question: "Claim every part of me with passionate intensity.",
    answer: "No part of me left untouched by your desire.",
  },
  {
    question: "Let's create new sensations together with playful exploration.",
    answer: "Discovery and delight in every unexpected moment.",
  },
  {
    question: "Kiss me with the hunger of a thousand nights.",
    answer: "Let our lips speak of longing and unfulfilled desire.",
  },
  {
    question: "Trace the curve of my hip with your thumb, slowly.",
    answer: "Make me ache for your touch to linger.",
  },
  {
    question: "Whisper secrets only lovers should know into my ear.",
    answer: "Words that bind us closer, that reveal our deepest truths.",
  },
  {
    question: "Take me with a primal urgency, as if I'm your last desire.",
    answer: "No room for hesitation, only pure, unadulterated need.",
  },
  {
    question: "Explore the sensitive hollow of my throat with your lips.",
    answer: "Make me shiver with every gentle, lingering kiss.",
  },
  {
    question: "Make me crave your touch, your taste, your very presence.",
    answer: "Build the anticipation until I'm undone by wanting you.",
  },
  {
    question: "Control my pleasure, guiding me to the edge and back.",
    answer: "Your mastery over my body is an art form.",
  },
  {
    question: "Slowly undress me, savoring each moment of revelation.",
    answer: "Let my body be a map for your devout exploration.",
  },
  {
    question: "Make me come with a whisper, a breath, a single touch.",
    answer: "Your power over my climax is absolute.",
  },
  {
    question: "Take me from behind with the ferocity of a storm.",
    answer: "Lost in the intensity, completely yours.",
  },
  {
    question: "Blindfold me and let your hands be my only guide.",
    answer: "Surrendering all control, trusting your every touch.",
  },
  {
    question: "Kiss every inch of my inner thigh with escalating passion.",
    answer: "Where my body trembles most, let your lips linger.",
  },
  {
    question: "Hold me as if I might shatter, making love with tender strength.",
    answer: "The perfect balance of fierce desire and gentle care.",
  },
  {
    question: "Lock eyes with me as you take me, sharing every sensation.",
    answer: "Our souls connecting through the intensity of our union.",
  },
  {
    question: "Tease me until I'm begging for release, for your touch.",
    answer: "The exquisite torture of wanting you desperately.",
  },
  {
    question: "Explore my body in the shower, letting the water amplify our passion.",
    answer: "Slippery skin, shared breaths, and uninhibited lust.",
  },
  {
    question: "Use your words to paint a picture of your desire for me.",
    answer: "Tell me exactly what you want to do, while you do it.",
  },
  {
    question: "Bring me to the brink of ecstasy multiple times.",
    answer: "Your sole focus is my pleasure, my complete satisfaction.",
  },
  {
    question: "Mark me as yours with every kiss, every caress.",
    answer: "Possessive passion that leaves no doubt of your claim.",
  },
  {
    question: "Dance with me naked, our bodies entwined before we join.",
    answer: "Intimacy brewing, a prelude to fiery passion.",
  },
  {
    question: "Guide my rhythm on top, dictating the pace of our pleasure.",
    answer: "You orchestrate my ecstasy, I deliver your satisfaction.",
  },
  {
    question: "Whisper the darkest fantasies you've held for me.",
    answer: "Raw desire unleashed, spoken aloud with fervent intensity.",
  },
]

const spicyActionsCardsFr = [
  {
    question: "Embrasse-moi exactement comme tu l'as fantasmé.",
    answer: "Sans retenue. Montre-moi la passion.",
  },
  {
    question: "Trace tout mon corps avec tes doigts—lent et délibéré.",
    answer: "Laisse ton toucher parler ce que les mots ne peuvent exprimer.",
  },
  {
    question: "Chuchote ton désir profond dans mon oreille.",
    answer: "Les paroles qui me font trembler.",
  },
  {
    question: "Prends-moi contre le mur comme tu l'as fantasmé.",
    answer: "Pas de douceur maintenant—pur désir urgent.",
  },
  {
    question: "Explore mon corps avec ta bouche pendant cinq minutes.",
    answer: "Chaque centimètre, chaque courbe, chaque endroit sensible.",
  },
  {
    question: "Fais-moi te supplier sans aucune pénétration.",
    answer: "Séduction, taquinerie, anticipation à son apogée.",
  },
  {
    question: "Prends le contrôle complètement—attache mes poignets si tu veux.",
    answer: "Je me donne à toi entièrement. Que fais-tu?",
  },
  {
    question: "Fais-moi l'amour lentement en chuchotant ton dévouement.",
    answer: "Chaque mouvement imbibé de tendresse et de vénération.",
  },
  {
    question: "Épingle-moi et embrasse-moi jusqu'à ce que je ne puisse pas respirer.",
    answer: "Agressif, passionné, désir consumant.",
  },
  {
    question: "Déshabille-moi complètement et prends du temps à vénérer chaque partie.",
    answer: "Révérence pour chaque centimètre de mon corps.",
  },
  {
    question: "Fais-moi te plaire pendant que tu regardes et me guides.",
    answer: "Dis-moi exactement ce que tu veux que je fasse.",
  },
  {
    question: "Fais-moi jouir avec seulement tes mains et tes paroles chuchotées.",
    answer: "Pas d'hésitation—pur extase intime.",
  },
  {
    question: "Prends-moi par derrière avec passion profonde et intense.",
    answer: "Me réclamant complètement, me faisant tienne.",
  },
  {
    question: "Bande-moi les yeux et explore mon corps comme tu le souhaites.",
    answer: "Reddition complète à tes mains et ton désir.",
  },
  {
    question: "Embrasse chaque endroit sensible de mon corps jusqu'à ce que je tremble.",
    answer: "La carte de mon plaisir sous tes lèvres.",
  },
  {
    question: "Tiens-moi serré pendant que tu me fais l'amour doucement.",
    answer: "Cet équilibre parfait entre force et tendresse.",
  },
  {
    question: "Fais-moi te regarder dans les yeux pendant que tu me prends.",
    answer: "Connexion complète—pas de cachette, juste nous.",
  },
  {
    question: "Taquine-moi impitoyablement jusqu'à ce que je sois désespérée pour toi.",
    answer: "Construire la tension jusqu'à ce que je ne puisse plus supporter.",
  },
  {
    question: "Prenez une douche ensemble et explorez-vous sous l'eau.",
    answer: "Peau glissante, vapeur, et passion sans inhibition.",
  },
  {
    question: "Utilise des paroles et des touches pour peindre ton désir sur ma peau.",
    answer: "Dis-moi tout ce que tu veux pendant que tu me touches partout.",
  },
  {
    question: "Fais-moi jouir plusieurs fois avant de finir.",
    answer: "Ton attention entièrement sur mon plaisir et mon extase.",
  },
  {
    question: "Réclame mon corps comme si tu me marquais comme tienne.",
    answer: "Passionné, possessif, indéniablement intime.",
  },
  {
    question: "Danse lentement avec moi nu(e) avant de faire l'amour.",
    answer: "Connexion avant passion—intimité avant feu.",
  },
  {
    question: "Mets-moi sur le dessus et guide exactement la vitesse.",
    answer: "Tu contrôles mon rythme pendant que je contrôle ton plaisir.",
  },
  {
    question: "Chuchote les choses les plus sales que tu veux faire en me touchant.",
    answer: "Pas de filtre—pur désir brut parlé à voix haute.",
  },
  {
    question: "Embrasse tout mon corps en commençant par mes lèvres.",
    answer: "Chaque centimètre adoré, chaque nerf éveillé.",
  },
  {
    question: "Tiens-moi près et fais-moi l'amour avec tout ton être.",
    answer: "Pas seulement les corps qui se connectent—les âmes qui s'entrelacent.",
  },
  {
    question: "Prends-moi contre la porte de la douche et réclame-moi désespérément.",
    answer: "Brouillard, chaleur, et passion primale sans retenue.",
  },
  {
    question: "Explore mon corps comme si tu le découvrais pour la première fois.",
    answer: "Merveille, curiosité, et désir ardent dans chaque toucher.",
  },
  {
    question: "Passe du temps sur chaque zone érogène jusqu'à ce que je sois complètement défaite.",
    answer: "Patience et passion travaillant ensemble parfaitement.",
  },
  {
    question: "Fais-moi l'amour comme si c'était la dernière fois.",
    answer: "Dévotion désespérée, tendresse infinie, abandon complet.",
  },
  {
    question: "Caresse tout mon être avec une adoration révérante.",
    answer: "Tes mains et tes lèvres cartographiant chaque centimètre sacré.",
  },
  {
    question: "Mène-moi au sommet de l'extase avec une précision délibérée.",
    answer: "Chaque toucher calculé pour m'envoyer au paradis.",
  },
  {
    question: "Seduce-moi avec des mots avant de me séduire avec ton corps.",
    answer: "Fais-moi languir avant même de me toucher.",
  },
  {
    question: "Lie-moi avec tes bras et prends-moi sans retenue.",
    answer: "Enveloppé(e), protégé(e), et absolument possédé(e).",
  },
  {
    question: "Embrasse lentement mon cou pendant que tes mains explorent mon corps.",
    answer: "Cette sensibilité exquise qui me fait fondre.",
  },
  {
    question: "Fais-moi cambrer vers toi à chaque caresse délibérée.",
    answer: "Contrôle mon plaisir avec ta connaissance intime.",
  },
  {
    question: "Prends-moi de manière urgente après une longue journée d'anticipation.",
    answer: "Tout le désir accumulé libéré dans une intensité passionnée.",
  },
  {
    question: "Adore mon corps avec une révérence et une faim absolues.",
    answer: "Équilibrer le respect avec le besoin brut et dévorant.",
  },
  {
    question: "Chuchote combien tu as besoin de moi pendant que nous sommes entrelacés.",
    answer: "Ta désespération se mêlant à mon abandon complet.",
  },
  {
    question: "Faisons-nous perdre complètement l'un dans l'autre.",
    answer: "Le temps s'arrête, le monde disparaît, seuls nous existons.",
  },
  {
    question: "Trace mon corps avec des baisers chauffés et des mains errantes.",
    answer: "Me laissant à bout de souffle d'anticipation.",
  },
  {
    question: "Prends le contrôle avec une tendresse autoritaire.",
    answer: "Fort mais révérencieux, exigeant mais dévoué.",
  },
  {
    question: "Fais-moi l'amour comme si tu mémorises chaque réponse.",
    answer: "Étudiant mon corps comme l'art le plus précieux.",
  },
  {
    question: "Tiens-moi à travers les vagues d'extase avec une dévotion inébranlable.",
    answer: "Ta force m'ancre alors que je m'effondre complètement.",
  },
  {
    question: "Réclame chaque partie de moi avec une intensité passionnée.",
    answer: "Aucune partie de moi n'est laissée intacte par ton désir.",
  },
  {
    question: "Créons de nouvelles sensations ensemble avec une exploration ludique.",
    answer: "Découverte et délice dans chaque moment inattendu.",
  },
  {
    question: "Embrasse-moi avec la faim de mille nuits.",
    answer: "Laissons nos lèvres parler du désir et de l'envie insatisfaite.",
  },
  {
    question: "Trace la courbe de ma hanche avec ton pouce, lentement.",
    answer: "Fais-moi languir que ton toucher s'attarde.",
  },
  {
    question: "Chuchote des secrets que seuls les amants devraient connaître dans mon oreille.",
    answer: "Des mots qui nous lient plus étroitement, qui révèlent nos vérités les plus profondes.",
  },
  {
    question: "Prends-moi avec une urgence primale, comme si j'étais ton dernier désir.",
    answer: "Pas de place pour l'hésitation, seulement le besoin pur et non dilué.",
  },
  {
    question: "Explore le creux sensible de ma gorge avec tes lèvres.",
    answer: "Fais-moi frissonner à chaque baiser doux et prolongé.",
  },
  {
    question: "Fais-moi désirer ton toucher, ton goût, ta seule présence.",
    answer: "Construis l'anticipation jusqu'à ce que je sois défaite de te vouloir.",
  },
  {
    question: "Contrôle mon plaisir, guidant-moi au bord et en arrière.",
    answer: "Ta maîtrise de mon corps est une forme d'art.",
  },
  {
    question: "Déshabille-moi lentement, savourant chaque moment de révélation.",
    answer: "Laisse mon corps être une carte pour ton exploration dévote.",
  },
  {
    question: "Fais-moi jouir avec un murmure, un souffle, un seul toucher.",
    answer: "Ton pouvoir sur mon orgasme est absolu.",
  },
  {
    question: "Prends-moi par derrière avec la férocité d'une tempête.",
    answer: "Perdu dans l'intensité, complètement à toi.",
  },
  {
    question: "Bande-moi les yeux et laisse tes mains être mon seul guide.",
    answer: "Abandonnant tout contrôle, faisant confiance à chaque toucher.",
  },
  {
    question: "Embrasse chaque centimètre de ma cuisse intérieure avec une passion croissante.",
    answer: "Là où mon corps tremble le plus, laisse tes lèvres s'attarder.",
  },
  {
    question: "Tiens-moi comme si je risquais de me briser, faisant l'amour avec une force tendre.",
    answer: "L'équilibre parfait entre désir féroce et soin doux.",
  },
  {
    question: "Fixe mes yeux pendant que tu me prends, partageant chaque sensation.",
    answer: "Nos âmes se connectant par l'intensité de notre union.",
  },
  {
    question: "Taquine-moi jusqu'à ce que je supplie d'être libérée, de ton toucher.",
    answer: "La torture exquise de te vouloir désespérément.",
  },
  {
    question: "Explore mon corps sous la douche, laissant l'eau amplifier notre passion.",
    answer: "Peau glissante, respirations partagées, et luxure sans inhibition.",
  },
  {
    question: "Utilise tes mots pour peindre une image de ton désir pour moi.",
    answer: "Dis-moi exactement ce que tu veux faire, pendant que tu le fais.",
  },
  {
    question: "Amène-moi au bord de l'extase plusieurs fois.",
    answer: "Ton seul objectif est mon plaisir, ma satisfaction complète.",
  },
  {
    question: "Marque-moi comme tienne avec chaque baiser, chaque caresse.",
    answer: "Passion possessive qui ne laisse aucun doute sur ta revendication.",
  },
  {
    question: "Danse avec moi nue, nos corps entrelacés avant de nous joindre.",
    answer: "L'intimité se préparant, un prélude à la passion ardente.",
  },
  {
    question: "Guide mon rythme sur le dessus, dictant le tempo de notre plaisir.",
    answer: "Tu orchestres mon extase, je livre ta satisfaction.",
  },
  {
    question: "Chuchote les fantasmes les plus sombres que tu as gardés pour moi.",
    answer: "Régler désir déchaîné, parlé à voix haute avec une intensité fervente.",
  },
]

const spicyActionsCardsAr = [
  {
    question: "قبّلني بالطريقة التي تخيلتها.",
    answer: "بدون تحفظ. أظهر لي الشغف.",
  },
  {
    question: "اتتبع كل جسدي بأصابعك—بطيء ومتعمد.",
    answer: "دع لمستك تتحدث عما لا تستطيع الكلمات التعبير عنه.",
  },
  {
    question: "همس رغبتك الأعمق مباشرة في أذني.",
    answer: "الكلمات التي تجعلني أرتجف.",
  },
  {
    question: "خذني ضد الجدار كما تخيلت.",
    answer: "لا لطف الآن—رغبة عاجلة نقية.",
  },
  {
    question: "استكشف جسدي بفمك لمدة خمس دقائق بالضبط.",
    answer: "كل بوصة، كل منحنى، كل مكان حساس.",
  },
  {
    question: "اجعليني أتوسل بدون أي اختراق.",
    answer: "إغراء، مداعبة، توقع في ذروته.",
  },
  {
    question: "خذ السيطرة الكاملة—اربط معصمي إذا أردت.",
    answer: "أعطيت نفسي لك تماماً. ماذا تفعل؟",
  },
  {
    question: "احبني ببطء أثناء همس تفانيك.",
    answer: "كل حركة مشبعة بالحنان والعبادة.",
  },
  {
    question: "شدّني وقبّلني حتى لا أستطيع التنفس.",
    answer: "عدواني، شغوف، رغبة مستهلكة.",
  },
  {
    question: "اخلعي ملابسي بالكامل وخذ وقتك لتعبد كل جزء.",
    answer: "احترام لكل بوصة من جسدي.",
  },
  {
    question: "اجعليني أشبعك أثناء مشاهدتك وتوجيهك لي.",
    answer: "أخبرني بالضبط ما تريد مني أن أفعله.",
  },
  {
    question: "اجعليني أصل إلى النشوة بيديك وكلماتك فقط.",
    answer: "لا تردد—نشوة حميمة خالصة.",
  },
  {
    question: "خذني من الخلف بشغف عميق ومكثف.",
    answer: "مطالبتي بالكامل، جعلي ملكك.",
  },
  {
    question: "كمّمني واستكشف جسدي كيفما شئت.",
    answer: "استسلام كامل ليديك ورغبتك.",
  },
  {
    question: "قبّل كل بقعة حساسة في جسدي حتى أرتجف.",
    answer: "خريطة متعتي تحت شفتيك.",
  },
  {
    question: "عَانِقني بقوة بينما تحبني بلطف.",
    answer: "ذلك التوازن المثالي بين القوة واللطف.",
  },
  {
    question: "اجعلني أنظر في عينيك وأنت تأخذني.",
    answer: "اتصال كامل—لا مجال للاختباء، فقط نحن.",
  },
  {
    question: "داعبني بلا رحمة حتى أيأس منك.",
    answer: "بناء التوتر حتى لا أحتمل المزيد.",
  },
  {
    question: "خذ حماماً معاً واستكشف بعضكما البعض تحت الماء.",
    answer: "جلد زلق، بخار، وشغف غير مقيد.",
  },
  {
    question: "استخدم كلماتك ولمساتك لرسم رغبتك على جلدي.",
    answer: "أخبرني بكل ما تريد بينما تلمسني في كل مكان.",
  },
  {
    question: "اجعليني أصل إلى النشوة عدة مرات قبل أن تنتهي.",
    answer: "تركيزك بالكامل على متعتي ونشوتي.",
  },
  {
    question: "ادّعِ جسدي وكأنك تضع علامة كأنني ملكك.",
    answer: "شغف، امتلاك، حميمية لا لبس فيها.",
  },
  {
    question: "ارقص معي عارياً قبل أن نحب.",
    answer: "اتصال قبل الشغف—حميمية قبل النار.",
  },
  {
    question: "اجعليني في الأعلى بينما توجه بالضبط السرعة أو البطء.",
    answer: "أنت تتحكم في إيقاعي بينما أتحكم في متعتك.",
  },
  {
    question: "همس أقذر الأشياء التي تريد فعلها أثناء لمسي.",
    answer: "لا فلتر—رغبة خام نقية منطوقة بصوت عالٍ.",
  },
  {
    question: "قبّل جسدي بالكامل بدءاً من شفتي.",
    answer: "كل شبر معبود، كل عصب مستيقظ.",
  },
  {
    question: "عانقني بقوة واحبني بكامل كيانك.",
    answer: "ليس فقط الأجساد التي تتصل—الأرواح التي تتشابك.",
  },
  {
    question: "خذني ضد باب الدش وطالب بي بيأس.",
    answer: "ضباب، حرارة، وشغف بدائي لا يمكن احتواؤه.",
  },
  {
    question: "استكشف جسدي وكأنك تكتشفه لأول مرة.",
    answer: "دهشة، فضول، ورغبة ملتهبة في كل لمسة.",
  },
  {
    question: "اقضِ وقتاً على كل منطقة مثيرة حتى أنتهي تماماً.",
    answer: "الصبر والشغف يعملان معاً بشكل مثالي.",
  },
  {
    question: "احبني كما لو كانت هذه هي المرة الأخيرة.",
    answer: "تفاني يائس، حنان لا نهائي، استسلام كامل.",
  },
  {
    question: "دلل كياني بالكامل بعبادة مهيبة.",
    answer: "يداك وشفتاك ترسمان كل شبر مقدس.",
  },
  {
    question: "خذني إلى ذروة النشوة بدقة متعمدة.",
    answer: "كل لمسة محسوبة لإرسالي إلى النعيم.",
  },
  {
    question: "أغوِني بالكلمات قبل أن تغويني بجسدك.",
    answer: "اجعلني أشتاق إليك قبل أن تلمسني حتى.",
  },
  {
    question: "قيّدني بذراعيك وخذني بلا قيود.",
    answer: "ملتف، محمي، ومملوك بالكامل.",
  },
  {
    question: "قبّل عنقي ببطء بينما تستكشف يداك جسدي.",
    answer: "تلك الحساسية الرائعة التي تجعلني أذوب.",
  },
  {
    question: "اجعلني أقوس تجاهك مع كل مداعبة متعمدة.",
    answer: "تحكم في متعتي بمعرفتك الحميمة.",
  },
  {
    question: "خذني بشكل عاجل بعد يوم طويل من الترقب.",
    answer: "كل الرغبة المتراكمة تطلق في شدة شغوفة.",
  },
  {
    question: "عبد جسدي بالاحترام والجوع المطلق.",
    answer: "موازنة الاحترام مع الحاجة الخام المستهلكة.",
  },
  {
    question: "همس كم تحتاجني بينما نتداخل.",
    answer: "يأسك يختلط باستسلامي الكامل.",
  },
  {
    question: "دعنا نضيع أنفسنا تماماً في بعضنا البعض.",
    answer: "يتوقف الوقت، يختفي العالم، لا يوجد سوى نحن.",
  },
  {
    question: "تتبع جسدي بقبلات ساخنة وأيدي متجولة.",
    answer: "تتركني لاهثاً من الترقب.",
  },
  {
    question: "خذ السيطرة بحنان آمر.",
    answer: "قوي ولكن مهيب، متطلب ولكن مخلص.",
  },
  {
    question: "احبني كما لو كنت تحفظ كل رد فعل.",
    answer: "دراسة جسدي كأنه أثمن فن.",
  },
  {
    question: "عانقني عبر موجات النشوة بتفانٍ راسخ.",
    answer: "قوتك ترسو بي بينما أنهار تماماً.",
  },
  {
    question: "ادّعِ كل جزء مني بشدة شغوفة.",
    answer: "لا جزء مني لم يمسه رغبتك.",
  },
  {
    question: "دعنا نخلق إحساساً جديداً معاً باستكشاف مرح.",
    answer: "اكتشاف وبهجة في كل لحظة غير متوقعة.",
  },
  {
    question: "قبّلني بشهوة ألف ليلة.",
    answer: "دع شفتينا تتحدثان عن الشوق والرغبة التي لم تتحقق.",
  },
  {
    question: "اتتبع منحنى وركي بإبهامك، ببطء.",
    answer: "اجعلني أشتاق إلى لمستك التي تدوم.",
  },
  {
    question: "همس أسرار لا يجب أن يعرفها إلا العشاق في أذني.",
    answer: "كلمات تربطنا بشكل أوثق، تكشف حقائقنا العميقة.",
  },
  {
    question: "خذني بإلحاح بدائي، كما لو كنت رغبتك الأخيرة.",
    answer: "لا مجال للتردد، فقط الحاجة النقية غير المخففة.",
  },
  {
    question: "استكشف تجويف حلقي الحساس بشفتيك.",
    answer: "اجعلني أرتجف مع كل قبلة لطيفة وطويلة.",
  },
  {
    question: "اجعلني أشتاق إلى لمستك، طعمك، وجودك.",
    answer: "ابنِ الترقب حتى أنهار من رغبتك.",
  },
  {
    question: "تحكم في متعتي، ووجهني إلى الحافة والعودة.",
    answer: "براعتك في جسدي هي شكل فني.",
  },
  {
    question: "اخلعني ببطء، مستمتعاً بكل لحظة كشف.",
    answer: "اجعل جسدي خريطة لاستكشافك المهيب.",
  },
  {
    question: "اجعليني أصل إلى النشوة بكلمة، نفس، لمسة واحدة.",
    answer: "قوتك على نشوتي مطلقة.",
  },
  {
    question: "خذني من الخلف بقوة عاصفة.",
    answer: "ضائع في الشدة، ملكك بالكامل.",
  },
  {
    question: "كمّمني واجعل يديك دليلي الوحيد.",
    answer: "أسلم كل السيطرة، أثق في كل لمسة.",
  },
  {
    question: "قبّل كل بوصة من فخذي الداخلي بشغف متصاعد.",
    answer: "حيث يرتجف جسدي أكثر، لتستقر شفتيك.",
  },
  {
    question: "عانقني كما لو كنت على وشك التحطم، وحبني بقوة لطيفة.",
    answer: "التوازن المثالي بين الرغبة الشديدة والرعاية اللطيفة.",
  },
  {
    question: "تواصل بصرياً معي وأنت تأخذني، مشاركاً كل إحساس.",
    answer: "أرواحنا تتصل من خلال شدة اتحادنا.",
  },
  {
    question: "داعبني حتى أتوسل للراحة، لملستك.",
    answer: "التعذيب الرائع لرغبتك بشدة.",
  },
  {
    question: "استكشف جسدي في الحمام، ودع الماء يضخم شغفنا.",
    answer: "جلد زلق، أنفاس مشتركة، وشهوة لا تقيد.",
  },
  {
    question: "استخدم كلماتك لرسم صورة رغبتك لي.",
    answer: "أخبرني بالضبط ما تريد فعله، أثناء فعله.",
  },
  {
    question: "أوصلني إلى حافة النشوة عدة مرات.",
    answer: "تركيزك الوحيد هو متعتي، ورضاي الكامل.",
  },
  {
    question: "ضع علامة كأنني ملكك بكل قبلة، كل مداعبة.",
    answer: "شغف امتلاكي لا يترك شكاً في ادعائك.",
  },
  {
    question: "ارقص معي عارياً، أجسادنا متداخلة قبل أن ننضم.",
    answer: "الحميمية تتصاعد، مقدمة للشغف الناري.",
  },
  {
    question: "وجه إيقاعي في الأعلى، وحدد سرعة متعتنا.",
    answer: "أنت تنظم نشوتي، أنا أوصل رضاك.",
  },
  {
    question: "همس أغمق خيالاتك التي احتفظت بها لي.",
    answer: "رغبة خام مطلقة، منطوقة بحدة شغوفة.",
  },
]

// DISCOVERY CARDS FOR NEW COUPLES - Getting to know each other deeply
const discoveryCardsEn = [
  {
    question: "What's your most cherished childhood memory?",
    answer: "Take me back to a moment that shaped who you are today.",
  },
  {
    question: "What dream have you never shared with anyone before?",
    answer: "The quiet aspiration that lives in your heart—I want to know it.",
  },
  {
    question: "How do you show love to the people closest to you?",
    answer: "Your unique expressions of affection and care—what do they look like?",
  },
  {
    question: "What's a fear you've had since childhood?",
    answer: "The vulnerability that still affects you—I'm here to understand it.",
  },
  {
    question: "What does your ideal future look like with me?",
    answer: "Paint the picture of our life together—dreams, adventures, intimacy.",
  },
  {
    question: "What's something you're really proud of about yourself?",
    answer: "The accomplishment or quality that makes you feel most worthy.",
  },
  {
    question: "How did you know I was different from everyone else?",
    answer: "What moment or quality made you see a future with me?",
  },
  {
    question: "What's your love language—how do you feel most loved?",
    answer: "Words, touch, time, gifts, acts of service? How does my love resonate most?",
  },
  {
    question: "What's a mistake you've made that taught you something vital?",
    answer: "The failure that became your greatest teacher—what did it teach?",
  },
  {
    question: "What makes you feel most alive and excited about life?",
    answer: "The passion that ignites you—what activity or pursuit makes you feel most yourself?",
  },
  {
    question: "How do you want to be comforted when you're sad?",
    answer: "What do you need from me during your difficult moments?",
  },
  {
    question: "What's your biggest insecurity?",
    answer: "The thing you fear people will judge you for—trust me with it.",
  },
  {
    question: "What role models have shaped who you've become?",
    answer: "The people who influenced your values, dreams, and character.",
  },
  {
    question: "What does intimacy mean to you beyond the physical?",
    answer: "Emotional closeness, vulnerability, being truly known—what does it entail?",
  },
  {
    question: "What's your favorite thing about me that you've noticed?",
    answer: "Not just physical—what character trait or habit makes you adore me?",
  },
  {
    question: "How do you envision us handling disagreements?",
    answer: "Your approach to conflict, compromise, and finding common ground.",
  },
  {
    question: "What's something you want to experience with me?",
    answer: "A dream adventure, achievement, or intimate moment you want to share.",
  },
  {
    question: "What values are non-negotiable for you?",
    answer: "The principles that define how you want to live and love.",
  },
  {
    question: "How have past relationships shaped what you want with me?",
    answer: "What you've learned about love, trust, and partnership.",
  },
  {
    question: "What would make you feel most supported by me?",
    answer: "The specific ways I can show up for you and your goals.",
  },
  {
    question: "What's a secret fantasy you've held for a long time?",
    answer: "Not necessarily intimate—a dream you've kept close to your heart.",
  },
  {
    question: "How do you handle stress and what helps you feel better?",
    answer: "Your coping mechanisms and what brings you peace.",
  },
  {
    question: "What's the most meaningful compliment someone has given you?",
    answer: "A moment when someone really saw you—how did it feel?",
  },
  {
    question: "What does family mean to you and how important is it?",
    answer: "Your relationship with family and how you want to build ours.",
  },
  {
    question: "What's a skill or hobby you're passionate about?",
    answer: "Something that makes you feel fulfilled and creative.",
  },
  {
    question: "How do you want to grow together as a couple?",
    answer: "The ways we can challenge each other to become better versions of ourselves.",
  },
  {
    question: "What's your greatest strength?",
    answer: "The quality that makes you capable, strong, and admirable.",
  },
  {
    question: "What would you do if you had no fear?",
    answer: "Your wildest ambitions if limitations didn't exist.",
  },
  {
    question: "How do you celebrate your wins, big and small?",
    answer: "What makes you feel acknowledged and appreciated?",
  },
  {
    question: "What does home feel like to you?",
    answer: "Is it a place, a person, a feeling? What creates that sense of belonging?",
  },
  {
    question: "What's something you've always wanted to learn?",
    answer: "A skill, language, or knowledge that intrigues you.",
  },
  {
    question: "How do you show vulnerability?",
    answer: "What makes you feel safe enough to be completely honest?",
  },
  {
    question: "What's your most treasured possession and why?",
    answer: "Something meaningful that tells a story about who you are.",
  },
  {
    question: "How do you want to make a difference in the world?",
    answer: "Your purpose, your legacy, what you want to contribute.",
  },
  {
    question: "What moment made you realize you were falling for me?",
    answer: "The specific instant when your feelings shifted toward love.",
  },
  {
    question: "What's your idea of a perfect day together?",
    answer: "From morning to night, paint the details of how we'd spend it.",
  },
  {
    question: "How do you define success?",
    answer: "What achievements or life circumstances would make you feel successful?",
  },
  {
    question: "What's something you want me to know about your past?",
    answer: "An experience that shaped you and is important for me to understand.",
  },
  {
    question: "How do you want to be remembered?",
    answer: "The legacy you want to leave and the impact you want to make.",
  },
  {
    question: "What brings you deepest joy?",
    answer: "The moments or people that fill your heart with pure happiness.",
  },
  {
    question: "What's a boundary that's important to you?",
    answer: "Something you need respected for your wellbeing and peace.",
  },
  {
    question: "How do you express your feelings when it's difficult?",
    answer: "The ways you communicate when something is hard or painful.",
  },
  {
    question: "What's your spiritual or philosophical belief?",
    answer: "How you make meaning of life, love, and our existence.",
  },
  {
    question: "What makes you feel most like yourself?",
    answer: "The circumstances where you feel most authentic and free.",
  },
  {
    question: "How do you want to celebrate our milestones together?",
    answer: "Anniversaries, achievements, moments that matter—how do we honor them?",
  },
  {
    question: "What's a quality of mine that you want to embrace more of?",
    answer: "Something you admire that inspires you to grow.",
  },
  {
    question: "How do you handle disappointment?",
    answer: "Your resilience, what helps you bounce back, how you move forward.",
  },
  {
    question: "What's the most generous thing you've ever done?",
    answer: "An act of kindness that revealed your character.",
  },
  {
    question: "What does loyalty mean to you?",
    answer: "How you define being faithful, reliable, and steadfast.",
  },
  {
    question: "What's a lesson love has taught you?",
    answer: "How past relationships or connections have shaped your understanding.",
  },
  {
    question: "How do you want our love story to begin in public?",
    answer: "How we introduce ourselves, define our relationship to the world.",
  },
]

const discoveryCardsFr = [
  {
    question: "Quel est ton souvenir d'enfance le plus chéri?",
    answer: "Ramène-moi à un moment qui t'a façonné.",
  },
  {
    question: "Quel rêve n'as-tu jamais partagé avec personne?",
    answer: "L'aspiration silencieuse qui vit dans ton cœur—je veux la connaître.",
  },
  {
    question: "Comment montres-tu l'amour aux personnes les plus proches?",
    answer: "Tes expressions uniques d'affection et de soin—à quoi ressemblent-elles?",
  },
  {
    question: "Quelle peur as-tu eu depuis l'enfance?",
    answer: "La vulnérabilité qui t'affecte toujours—je suis là pour la comprendre.",
  },
  {
    question: "À quoi ressemble ton avenir idéal avec moi?",
    answer: "Peins la photo de notre vie ensemble—rêves, aventures, intimité.",
  },
  {
    question: "Qu'est-ce que tu es vraiment fier(e) de toi?",
    answer: "L'accomplissement ou la qualité qui te rend digne.",
  },
  {
    question: "Comment as-tu su que j'étais différent(e)?",
    answer: "Quel moment ou qualité t'a montré un avenir avec moi?",
  },
  {
    question: "Quel est ton langage amoureux—comment te sens-tu aimé(e)?",
    answer: "Paroles, toucher, temps, cadeaux, actes? Comment mon amour résonne-t-il?",
  },
  {
    question: "Quelle erreur as-tu faite qui t'a appris quelque chose vital?",
    answer: "L'échec qui est devenu ton plus grand professeur—qu'as-tu appris?",
  },
  {
    question: "Qu'est-ce qui te fait sentir le plus vivant(e) et excité(e)?",
    answer: "La passion qui t'enflamme—quelle activité te rend le plus toi-même?",
  },
  {
    question: "Comment veux-tu être réconforté(e) quand tu es triste?",
    answer: "De quoi as-tu besoin de moi pendant tes moments difficiles?",
  },
  {
    question: "Quelle est ta plus grande insécurité?",
    answer: "Ce que tu crains que les gens te jugent—fais-moi confiance avec ça.",
  },
  {
    question: "Quels modèles t'ont façonné?",
    answer: "Les personnes qui ont influencé tes valeurs, tes rêves et ton caractère.",
  },
  {
    question: "Qu'est-ce que l'intimité signifie pour toi au-delà du physique?",
    answer: "Proximité émotionnelle, vulnérabilité, être vraiment connu—qu'implique-t-elle?",
  },
  {
    question: "Quelle est la chose que tu aimes le plus chez moi et que tu as remarquée?",
    answer: "Pas seulement physique—quel trait de caractère ou habitude te fait m'adorer?",
  },
  {
    question: "Comment envisages-tu de gérer nos désaccords?",
    answer: "Ton approche du conflit, du compromis et de la recherche d'un terrain d'entente.",
  },
  {
    question: "Qu'est-ce que tu veux expérimenter avec moi?",
    answer: "Une aventure de rêve, une réussite, ou un moment intime que tu veux partager.",
  },
  {
    question: "Quelles valeurs sont non négociables pour toi?",
    answer: "Les principes qui définissent comment tu veux vivre et aimer.",
  },
  {
    question: "Comment les relations passées ont-elles façonné ce que tu veux avec moi?",
    answer: "Ce que tu as appris sur l'amour, la confiance et le partenariat.",
  },
  {
    question: "Qu'est-ce qui te ferait sentir le plus soutenu(e) par moi?",
    answer: "Les façons spécifiques dont je peux me présenter pour toi et tes objectifs.",
  },
  {
    question: "Quel est un fantasme secret que tu as gardé longtemps?",
    answer: "Pas nécessairement intime—un rêve que tu as gardé près de ton cœur.",
  },
  {
    question: "Comment gères-tu le stress et qu'est-ce qui t'aide à te sentir mieux?",
    answer: "Tes mécanismes d'adaptation et ce qui t'apporte la paix.",
  },
  {
    question: "Quel est le compliment le plus significatif que quelqu'un t'ait fait?",
    answer: "Un moment où quelqu'un t'a vraiment vu—comment te sentais-tu?",
  },
  {
    question: "Que signifie la famille pour toi et quelle importance a-t-elle?",
    answer: "Ta relation avec ta famille et comment tu veux construire la nôtre.",
  },
  {
    question: "Quelle est une compétence ou un hobby qui te passionne?",
    answer: "Quelque chose qui te fait te sentir épanoui(e) et créatif(ve).",
  },
  {
    question: "Comment veux-tu grandir ensemble en tant que couple?",
    answer: "Les façons dont nous pouvons nous défier mutuellement à devenir de meilleures versions de nous-mêmes.",
  },
  {
    question: "Quelle est ta plus grande force?",
    answer: "La qualité qui te rend capable, fort(e) et admirable.",
  },
  {
    question: "Que ferais-tu si tu n'avais aucune peur?",
    answer: "Tes ambitions les plus folles si les limitations n'existaient pas.",
  },
  {
    question: "Comment célèbres-tu tes victoires, grandes et petites?",
    answer: "Qu'est-ce qui te fait te sentir reconnu(e) et apprécié(e)?",
  },
  {
    question: "À quoi ressemble le sentiment de chez-soi pour toi?",
    answer: "Est-ce un lieu, une personne, un sentiment? Qu'est-ce qui crée ce sentiment d'appartenance?",
  },
  {
    question: "Qu'est-ce que tu as toujours voulu apprendre?",
    answer: "Une compétence, une langue ou une connaissance qui t'intrigue.",
  },
  {
    question: "Comment montres-tu ta vulnérabilité?",
    answer: "Qu'est-ce qui te fait te sentir assez en sécurité pour être complètement honnête?",
  },
  {
    question: "Quel est ton bien le plus précieux et pourquoi?",
    answer: "Quelque chose de significatif qui raconte une histoire sur qui tu es.",
  },
  {
    question: "Comment veux-tu faire une différence dans le monde?",
    answer: "Ton but, ton héritage, ce que tu veux contribuer.",
  },
  {
    question: "Quel moment t'a fait réaliser que tu tombais amoureux/se de moi?",
    answer: "L'instant précis où tes sentiments se sont orientés vers l'amour.",
  },
  {
    question: "Quelle est ton idée d'une journée parfaite ensemble?",
    answer: "Du matin au soir, dépeins les détails de comment nous la passerions.",
  },
  {
    question: "Comment définis-tu le succès?",
    answer: "Quels réalisations ou circonstances de vie te feraient te sentir réussi(e)?",
  },
  {
    question: "Qu'est-ce que tu veux que je sache de ton passé?",
    answer: "Une expérience qui t'a façonné et qu'il est important que je comprenne.",
  },
  {
    question: "Comment veux-tu être rappelé(e)?",
    answer: "L'héritage que tu veux laisser et l'impact que tu veux avoir.",
  },
  {
    question: "Qu'est-ce qui t'apporte la plus profonde joie?",
    answer: "Les moments ou les personnes qui remplissent ton cœur de pur bonheur.",
  },
  {
    question: "Quelle est une limite qui est importante pour toi?",
    answer: "Quelque chose que tu as besoin que l'on respecte pour ton bien-être et ta paix.",
  },
  {
    question: "Comment exprimes-tu tes sentiments quand c'est difficile?",
    answer: "Les façons dont tu communiques quand quelque chose est dur ou douloureux.",
  },
  {
    question: "Quelle est ta croyance spirituelle ou philosophique?",
    answer: "Comment donnes-tu un sens à la vie, à l'amour et à notre existence.",
  },
  {
    question: "Qu'est-ce qui te fait sentir le plus toi-même?",
    answer: "Les circonstances où tu te sens le plus authentique et libre.",
  },
  {
    question: "Comment veux-tu célébrer nos étapes importantes ensemble?",
    answer: "Anniversaires, réussites, moments importants—comment les honorons-nous?",
  },
  {
    question: "Quelle qualité chez moi veux-tu davantage adopter?",
    answer: "Quelque chose que tu admires et qui t'inspire à grandir.",
  },
  {
    question: "Comment gères-tu la déception?",
    answer: "Ta résilience, ce qui t'aide à rebondir, comment tu vas de l'avant.",
  },
  {
    question: "Quelle est la chose la plus généreuse que tu aies jamais faite?",
    answer: "Un acte de gentillesse qui a révélé ton caractère.",
  },
  {
    question: "Que signifie la loyauté pour toi?",
    answer: "Comment définis-tu être fidèle, fiable et constant.",
  },
  {
    question: "Quelle leçon l'amour t'a-t-il apprise?",
    answer: "Comment les relations ou les connexions passées ont façonné ta compréhension.",
  },
  {
    question: "Comment veux-tu que notre histoire d'amour commence en public?",
    answer: "Comment nous nous présentons, définissons notre relation au monde.",
  },
]

const discoveryCardsAr = [
  {
    question: "ما أغلى ذكرى من طفولتك؟",
    answer: "أعدني إلى اللحظة التي شكلتك.",
  },
  {
    question: "ما الحلم الذي لم تشاركه مع أحد؟",
    answer: "الطموح الصامت الذي يعيش في قلبك—أريد أن أعرفه.",
  },
  {
    question: "كيف تُظهر الحب للأشخاص المقربين منك؟",
    answer: "تعبيراتك الفريدة عن المودة والرعاية—كيف تبدو؟",
  },
  {
    question: "ما هو خوف لديك منذ الطفولة؟",
    answer: "الضعف الذي لا يزال يؤثر عليك—أنا هنا لأفهمه.",
  },
  {
    question: "كيف يبدو مستقبلك المثالي معي؟",
    answer: "ارسم صورة حياتنا معاً—أحلام، مغامرات، حميمية.",
  },
  {
    question: "ما هو الشيء الذي تفخر به حقاً عن نفسك؟",
    answer: "الإنجاز أو الصفة التي تجعلك تشعر بأنك جدير.",
  },
  {
    question: "كيف عرفت أنني مختلف عن أي شخص آخر؟",
    answer: "أي لحظة أو صفة جعلتك ترى مستقبلاً معي؟",
  },
  {
    question: "ما هي لغة حبك—كيف تشعر بأنك محبوب أكثر؟",
    answer: "كلمات، لمسات، وقت، هدايا، أعمال خدمة؟ كيف يتردد صدى حبي؟",
  },
  {
    question: "ما هو الخطأ الذي ارتكبته وعلمك شيئاً حيوياً؟",
    answer: "الفشل الذي أصبح معلمك الأكبر—ماذا علم؟",
  },
  {
    question: "ما الذي يجعلك تشعر بأنك أكثر حيوية وحماساً للحياة؟",
    answer: "الشغف الذي يشعل حماسك—أي نشاط يجعلك تشعر بأنك نفسك؟",
  },
  {
    question: "كيف تريد أن يتم مواساتك عندما تكون حزيناً؟",
    answer: "ماذا تحتاج مني خلال لحظاتك الصعبة؟",
  },
  {
    question: "ما هو أكبر مخاوفك؟",
    answer: "الشيء الذي تخشى أن يحكم عليك الناس من أجله—ثق بي به.",
  },
  {
    question: "ما هي الشخصيات النموذجية التي شكلتك؟",
    answer: "الأشخاص الذين أثروا في قيمك وأحلامك وشخصيتك.",
  },
  {
    question: "ماذا تعني الحميمية لك بعيداً عن الجسدية؟",
    answer: "القرب العاطفي، الضعف، أن تكون معروفاً حقاً—ماذا يشمل ذلك؟",
  },
  {
    question: "ما هو الشيء المفضل لديك عني الذي لاحظته؟",
    answer: "ليس فقط جسدياً—أي صفة شخصية أو عادة تجعلك تعشقني؟",
  },
  {
    question: "كيف تتصور تعاملنا مع الخلافات؟",
    answer: "نهجك في الصراع، والمساومة، وإيجاد أرضية مشتركة.",
  },
  {
    question: "ما هو الشيء الذي تريد تجربته معي؟",
    answer: "مغامرة حلم، إنجاز، أو لحظة حميمة تريد مشاركتها.",
  },
  {
    question: "ما هي القيم التي لا تقبل المساومة بالنسبة لك؟",
    answer: "المبادئ التي تحدد كيف تريد أن تعيش وتحب.",
  },
  {
    question: "كيف شكلت العلاقات السابقة ما تريده معي؟",
    answer: "ما تعلمته عن الحب والثقة والشراكة.",
  },
  {
    question: "ما الذي سيجعلك تشعر بأنني أدعمك أكثر؟",
    answer: "الطرق المحددة التي يمكنني أن أكون بها بجانبك لأهدافك.",
  },
  {
    question: "ما هو خيال سري احتفظت به لفترة طويلة؟",
    answer: "ليس بالضرورة حميمياً—حلم أبقيته قريباً من قلبك.",
  },
  {
    question: "كيف تتعامل مع التوتر وما الذي يساعدك على الشعور بتحسن؟",
    answer: "آليات التأقلم لديك وما الذي يجلب لك السلام.",
  },
  {
    question: "ما هو أثمن مجاملة تلقيتها؟",
    answer: "لحظة رآك فيها شخص ما حقاً—كيف شعرت؟",
  },
  {
    question: "ماذا تعني العائلة لك ومدى أهميتها؟",
    answer: "علاقتك بالعائلة وكيف تريد بناء علاقتنا.",
  },
  {
    question: "ما هي المهارة أو الهواية التي لديك شغف بها؟",
    answer: "شيء يجعلك تشعر بالرضا والإبداع.",
  },
  {
    question: "كيف تريد أن تنمو معاً كزوجين؟",
    answer: "الطرق التي يمكننا من خلالها تحدي بعضنا البعض لنصبح نسخاً أفضل من أنفسنا.",
  },
  {
    question: "ما هي أكبر نقاط قوتك؟",
    answer: "الصفة التي تجعلك قادراً وقوياً ومثيراً للإعجاب.",
  },
  {
    question: "ماذا ستفعل لو لم تكن لديك أي مخاوف؟",
    answer: "طموحاتك الأكثر جموحاً إذا لم تكن هناك قيود.",
  },
  {
    question: "كيف تحتفل بانتصاراتك، الكبيرة والصغيرة؟",
    answer: "ما الذي يجعلك تشعر بالتقدير والامتنان؟",
  },
  {
    question: "كيف تشعر عندما يتعلق الأمر بالمنزل؟",
    answer: "هل هو مكان، شخص، شعور؟ ما الذي يخلق هذا الشعور بالانتماء؟",
  },
  {
    question: "ما هو الشيء الذي طالما أردت تعلمه؟",
    answer: "مهارة، لغة، أو معرفة تثير فضولك.",
  },
  {
    question: "كيف تظهر ضعفك؟",
    answer: "ما الذي يجعلك تشعر بالأمان بما يكفي لتكون صادقاً تماماً؟",
  },
  {
    question: "ما هو ممتلكاتك الأكثر قيمة ولماذا؟",
    answer: "شيء ذو معنى يروي قصة عن هويتك.",
  },
  {
    question: "كيف تريد أن تحدث فرقاً في العالم؟",
    answer: "هدفك، إرثك، ما تريد المساهمة به.",
  },
  {
    question: "ما هي اللحظة التي أدركت فيها أنك تقع في حبي؟",
    answer: "اللحظة المحددة التي تحولت فيها مشاعرك نحو الحب.",
  },
  {
    question: "ما هي فكرتك عن يوم مثالي معاً؟",
    answer: "من الصباح إلى الليل، ارسم تفاصيل كيف سنقضيها.",
  },
  {
    question: "كيف تعرف النجاح؟",
    answer: "ما هي الإنجازات أو ظروف الحياة التي ستجعلك تشعر بالنجاح؟",
  },
  {
    question: "ما هو الشيء الذي تريد أن أعرفه عن ماضيك؟",
    answer: "تجربة شكلتك وهي مهمة بالنسبة لي لفهمها.",
  },
  {
    question: "كيف تريد أن يتم تذكرك؟",
    answer: "الإرث الذي تريد تركه والتأثير الذي تريد إحداثه.",
  },
  {
    question: "ما الذي يجلب لك أعمق سعادة؟",
    answer: "اللحظات أو الأشخاص الذين يملؤون قلبك بالسعادة الخالصة.",
  },
  {
    question: "ما هو الحد الذي يعتبر مهماً بالنسبة لك؟",
    answer: "شيء تحتاج إلى احترامه من أجل رفاهيتك وسلامك.",
  },
  {
    question: "كيف تعبر عن مشاعرك عندما يكون الأمر صعباً؟",
    answer: "الطرق التي تتواصل بها عندما يكون شيء ما صعباً أو مؤلماً.",
  },
  {
    question: "ما هو معتقدك الروحي أو الفلسفي؟",
    answer: "كيف تصنع معنى للحياة والحب ووجودنا.",
  },
  {
    question: "ما الذي يجعلك تشعر بأنك نفسك أكثر؟",
    answer: "الظروف التي تشعر فيها بأنك أكثر أصالة وحرية.",
  },
  {
    question: "كيف تريد أن نحتفل بمعالمنا معاً؟",
    answer: "الذكرى السنوية، الإنجازات، اللحظات المهمة—كيف نكرمها؟",
  },
  {
    question: "ما هي صفة فيّ تريد أن تحتضنها أكثر؟",
    answer: "شيء تعجب به يلهمك للنمو.",
  },
  {
    question: "كيف تتعامل مع خيبة الأمل؟",
    answer: "مرونتك، ما يساعدك على التعافي، كيف تتقدم.",
  },
  {
    question: "ما هو أكثر شيء كريم قمت به على الإطلاق؟",
    answer: "عمل لطيف كشف عن شخصيتك.",
  },
  {
    question: "ماذا تعني الولاء بالنسبة لك؟",
    answer: "كيف تعرف الإخلاص والموثوقية والثبات.",
  },
  {
    question: "ما هو الدرس الذي علمك إياه الحب؟",
    answer: "كيف شكلت العلاقات أو الارتباطات السابقة فهمك.",
  },
  {
    question: "كيف تريد أن تبدأ قصة حبنا علناً؟",
    answer: "كيف نقدم أنفسنا، ونحدد علاقتنا بالعالم.",
  },
]

// SPICY STORIES & SCENARIOS FOR MARRIED COUPLES
const storiesCardsEn = [
  {
    question: "Scenario: The Forbidden Hotel",
    answer:
      "You're in an upscale hotel room for the night. The tension has been building all day. As soon as the door closes, I catch your eye with a look that says 'I've been wanting you all day.' I slowly remove my jacket and step closer, my hands finding the curve of your waist. 'I've been fantasizing about this moment since this morning,' I whisper. The anticipation has been unbearable. How do you respond? Do you pull me in desperately, or do you take control and push me against the wall? The privacy of these walls means everything can happen. What do you do to me?",
  },
  {
    question: "Scenario: The Anticipated Return",
    answer:
      "After a week away on business, I arrive home and find you waiting in candlelight. You've prepared everything—soft music, the scent of my favorite fragrance, and you're wearing something that steals my breath. 'I've missed you,' you say, walking toward me slowly. Every step is deliberate, every movement calculated to ignite me. 'I've counted the days, the hours,' you whisper as you kiss me. Our bodies have missed each other. How intense does our reunion become? What do you want to do with all that built-up longing?",
  },
  {
    question: "Scenario: The Shower Encounter",
    answer:
      "I step into the shower to find you already there, steam rising around your body. You smile at me with an intensity that makes my pulse race. 'I was hoping you'd join me,' you say, your eyes trailing down my body. The hot water cascades between us. 'Come closer,' you whisper. Your hands reach for me in the steam and mist. Water drips between us as we get closer. What happens next? How urgent and passionate does this become?",
  },
  {
    question: "Scenario: The Slow Seduction",
    answer:
      "Tonight, you've decided to take your time. We're lying in bed, the only light coming from the moon through our window. You start by tracing my jawline with your fingertip, slowly, deliberately. 'I want to savor every moment of you,' you whisper. Your lips find my neck, my shoulder, my collarbone. Each kiss is a promise. Your hands explore slowly, reverently. 'Tell me what you want,' you murmur against my skin. How do I respond? What desires do I confess?",
  },
  {
    question: "Scenario: The Daring Adventure",
    answer:
      "We've gone away for the weekend to a private cabin. Remote, secluded, no one around for miles. You look at me with that mischievous smile that means you have something planned. 'I want to try something we've never done before,' you say mysteriously. You take my hand and lead me to the large windows overlooking the forest. 'Out here, under the stars, with no one to see us—I want to make love to you completely free.' What adventure do we embark on? How uninhibited do we become?",
  },
  {
    question: "Scenario: The Morning Awakening",
    answer:
      "I wake to find you already awake, watching me with a tender yet intense gaze. 'Good morning,' you whisper, and before I can respond, you're kissing me softly, then with increasing hunger. Your hands slide across my bare shoulders, down my back. 'I couldn't wait another moment,' you confess. Morning light filters through the window as you move against me. How do we greet the day? What passionate connection unfolds before we have to leave our bed?",
  },
  {
    question: "Scenario: The Lingerie Reveal",
    answer:
      "You disappear into the bathroom and emerge wearing something that takes my breath away—elegant, sensual, designed entirely to captivate me. You walk slowly, letting me take in every detail. 'Do you like it?' you ask, knowing full well the effect you're having. You twirl slowly, and I can't help but stand up and reach for you. 'I wore this just for you,' you say, pulling me close. What's my reaction? How desperately do I want you?",
  },
  {
    question: "Scenario: The Anticipated Reunion",
    answer:
      "We haven't had time for each other in weeks—life has been hectic. Tonight, we finally have uninterrupted time. You lock the bedroom door and turn to me with a look that says this night is ours. 'I need you,' you say simply. We fall together with the hunger of two people who've been starved for connection. What does our night of rediscovery look like? How passionate and all-consuming is our reunification?",
  },
  {
    question: "Scenario: The Forbidden Lunch Break",
    answer:
      "You text me at work: 'I need you. Come home.' When I arrive, you meet me at the door in nothing but a silk robe. 'I couldn't wait until tonight,' you say, pulling me inside and locking the door behind me. We have limited time before the world calls us back. How urgent and intense do we become? What do we accomplish in this stolen hour?",
  },
  {
    question: "Scenario: The Anniversary Night",
    answer:
      "It's our anniversary, and you've arranged everything perfectly. Dinner was wonderful, but now we're back home in our bedroom. You've decorated with rose petals and soft lighting. 'Happy anniversary,' you say, taking both my hands. 'I want tonight to be unforgettable—to celebrate everything we are and everything we feel.' You kiss me with all the passion and love of our years together. How do we honor this milestone? What does our celebration look like?",
  },
  {
    question: "Scenario: The Mirror Seduction",
    answer:
      "You take my hand and lead me to stand in front of the mirror. 'I want you to watch me love you,' you whisper. You position us so I can see everything that's about to happen. 'I want you to see how much I desire you, how beautiful you are to me.' With the reflection showing us everything, you begin to move against me, maintaining eye contact through the mirror. How deeply intimate does this become?",
  },
  {
    question: "Scenario: The Rainy Afternoon",
    answer:
      "Rain patters against the windows as we lie on the couch. There's nowhere to be, nothing to do. You curl into me and start kissing my neck, my jaw, my lips. 'I love these days,' you murmur, 'where all I want to do is be close to you.' Your hands move under my shirt. Lazy, sensual, unhurried. We have all the time in the world. How does this afternoon unfold?",
  },
  {
    question: "Scenario: The Passionate Argument Resolution",
    answer:
      "We've been at odds all day, tension building, emotions high. Finally, you corner me in the bedroom, your eyes blazing. 'I hate fighting with you,' you say intensely. 'But right now, all I can think about is making up with you, showing you how much you mean to me.' The frustration becomes passion. How intensely do we resolve this tension? What does makeup passion look like between us?",
  },
  {
    question: "Scenario: The Slow Dance",
    answer:
      "Music plays softly in the darkness of our room. You pull me close and we sway together, still clothed, just feeling each other's presence. Your lips find mine as we dance. Slowly, with each song, layers come off. This is dance and seduction combined, rhythm and desire intertwined. How sensually does this progression continue?",
  },
  {
    question: "Scenario: The Mastery and Surrender",
    answer:
      "Tonight, you want complete control. You whisper your desires clearly, and I surrender to your every command. You guide me with words and touches, orchestrating every moment. 'Look at me,' you say. 'I want to see you as I take you.' Your confidence and my complete trust creates something transcendent. How commanding are you? How deeply do I surrender?",
  },
  {
    question: "Scenario: The Rediscovery",
    answer:
      "After years together, you want to explore something new. 'Let's pretend we've just met,' you suggest playfully. 'Seduce me like you did that first night.' You leave the room and return as a stranger, confident and magnetic. The familiar becomes thrilling. How do we play this game of rediscovery? What reignites between us?",
  },
  {
    question: "Scenario: The Silk and Sensation",
    answer:
      "You bring out silk scarves and drape them across the bed. 'I want to explore texture, sensation, everything,' you say, guiding my hands and body with the soft fabric. Each material creates a different feeling. Your creativity and sensuality combine as you create an experience that heightens every nerve. What heights of pleasure do we reach?",
  },
  {
    question: "Scenario: The Whispered Confessions",
    answer:
      "In the darkness, wrapped in each other's arms, you begin to whisper your deepest fantasies to me—things you've never said aloud. I respond with my own desires. This intimate sharing leads to deeper physical intimacy as we begin to explore these confessions together. What secrets do we share? How does this vulnerability deepen our connection?",
  },
  {
    question: "Scenario: The Vacation Freedom",
    answer:
      "We're in a vacation home by the ocean. Removed from daily life, from expectations, from the familiar. You look at me with a freedom I've never seen before. 'No one knows us here. We can be completely ourselves.' What do we do with this freedom? How wild and uninhibited do we become?",
  },
  {
    question: "Scenario: The Orchestrated Pleasure",
    answer:
      "You've planned everything meticulously. Rose petals, champagne, mood lighting, scented candles. But more importantly, you've thought about every way to please me. 'Tonight is entirely about your pleasure,' you say. 'I'm going to worship every inch of you.' How thoughtful and passionate does your orchestrated seduction become?",
  },
  {
    question: "Scenario: The Unexpected Passion",
    answer:
      "We were just having a normal evening when suddenly something shifts. A look, a touch, a moment of connection that ignites something primal. Suddenly we're reaching for each other urgently, passionately. We end up making love right here, right now, completely unplanned. What triggers this spontaneous fire between us?",
  },
]

const storiesCardsFr = [
  {
    question: "Scénario: L'Hôtel Interdit",
    answer:
      "Vous êtes dans une belle chambre d'hôtel pour la nuit. La tension monte depuis toute la journée. Dès que la porte se ferme, je croise ton regard avec un regard qui dit 'je te veux depuis ce matin.' Je retire lentement ma veste et m'approche, mes mains trouvant ta taille. 'Je fantasme sur ce moment depuis ce matin,' je chuchote. L'anticipation a été insupportable. Comment réponds-tu? Me tires-tu vers toi désespérément, ou tu prends le contrôle et me repousses contre le mur? La vie privée de ces murs signifie que tout peut arriver. Que fais-tu de moi?",
  },
  {
    question: "Scénario: Le Retour Anticipé",
    answer:
      "Après une semaine d'affaires, je rentre à la maison et te trouve attendant à la lueur des bougies. Tu as tout préparé—musique douce, parfum de mon parfum préféré, et tu portes quelque chose qui me coupe le souffle. 'Tu m'as manqué,' dis-tu, en t'approchant lentement. Chaque pas est délibéré, chaque mouvement calculé pour m'enflammer. 'J'ai compté les jours, les heures,' tu chuchotes en m'embrassant. Nos corps se sont manqués. Quelle intensité prendra notre réunion? Que veux-tu faire de toute cette envie accumulée?",
  },
  {
    question: "Scénario: La Rencontre sous la Douche",
    answer:
      "J'entre dans la douche pour te trouver déjà là, la vapeur montant autour de ton corps. Tu me souris avec une intensité qui fait battre mon pouls. 'J'espérais que tu me rejoindrais,' dis-tu, tes yeux descendant sur mon corps. L'eau chaude cascade entre nous. 'Viens plus près,' murmures-tu. Tes mains me cherchent dans la vapeur et la brume. L'eau coule entre nous à mesure que nous nous rapprochons. Que se passe-t-il ensuite? Quelle urgence et quelle passion cela devient-il?",
  },
  {
    question: "Scénario: La Lente Séduction",
    answer:
      "Ce soir, tu as décidé de prendre ton temps. Nous sommes allongés dans le lit, la seule lumière venant de la lune à travers notre fenêtre. Tu commences par tracer ma mâchoire avec ton doigt, lentement, délibérément. 'Je veux savourer chaque instant de toi,' murmures-tu. Tes lèvres trouvent mon cou, mon épaule, ma clavicule. Chaque baiser est une promesse. Tes mains explorent lentement, avec révérence. 'Dis-moi ce que tu veux,' murmures-tu contre ma peau. Comment réponds-je? Quelles envies avoue-je?",
  },
  {
    question: "Scénario: L'Aventure Audacieuse",
    answer:
      "Nous sommes partis pour le week-end dans une cabane privée. Isolée, reculée, personne à des kilomètres. Tu me regardes avec ce sourire malicieux qui signifie que tu as quelque chose de prévu. 'Je veux essayer quelque chose que nous n'avons jamais fait auparavant,' dis-tu mystérieusement. Tu prends ma main et me guides vers les grandes fenêtres donnant sur la forêt. 'Ici, sous les étoiles, sans personne pour nous voir—je veux faire l'amour avec toi complètement libre.' Quelle aventure entreprenons-nous? À quel point devenons-nous sans inhibition?",
  },
  {
    question: "Scénario: Le Réveil Matinal",
    answer:
      "Je me réveille pour te trouver déjà éveillé(e), me regardant avec un regard tendre mais intense. 'Bonjour,' murmures-tu, et avant que je puisse répondre, tu m'embrasses doucement, puis avec une faim croissante. Tes mains glissent sur mes épaules nues, le long de mon dos. 'Je ne pouvais pas attendre un moment de plus,' confesses-tu. La lumière du matin filtre à travers la fenêtre pendant que tu bouges contre moi. Comment accueillons-nous la journée? Quelle connexion passionnée se déroule avant que nous ayons à quitter notre lit?",
  },
  {
    question: "Scénario: La Révélation de Lingerie",
    answer:
      "Tu disparais dans la salle de bain et réapparais portant quelque chose qui me coupe le souffle—élégant, sensuel, entièrement conçu pour me captiver. Tu marches lentement, me laissant admirer chaque détail. 'Tu aimes ça?' demandes-tu, sachant parfaitement l'effet que tu as. Tu tournes lentement, et je ne peux m'empêcher de me lever et de te chercher. 'Je l'ai porté juste pour toi,' dis-tu, me tirant près de toi. Quelle est ma réaction? À quel point te désire-je désespérément?",
  },
  {
    question: "Scénario: La Réunion Anticipée",
    answer:
      "Nous n'avons pas eu de temps l'un pour l'autre depuis des semaines—la vie a été trépidante. Ce soir, nous avons enfin du temps ininterrompu. Tu verrouilles la porte de la chambre et te tournes vers moi avec un regard qui dit que cette nuit est à nous. 'J'ai besoin de toi,' dis-tu simplement. Nous tombons l'un sur l'autre avec la faim de deux personnes affamées de connexion. À quoi ressemble notre nuit de redécouverte? Quelle passion et quelle dévoration caractérisent notre réunification?",
  },
  {
    question: "Scénario: La Pause Déjeuner Interdite",
    answer:
      "Tu me textos au travail: 'J'ai besoin de toi. Rentre à la maison.' Quand j'arrive, tu m'accueilles à la porte dans rien d'autre qu'un peignoir en soie. 'Je ne pouvais pas attendre ce soir,' dis-tu, me tirant à l'intérieur et verrouillant la porte derrière moi. Nous avons un temps limité avant que le monde ne nous rappelle. Quelle urgence et quelle intensité deviennent-nous? Qu'accomplissons-nous dans cette heure volée?",
  },
  {
    question: "Scénario: La Nuit d'Anniversaire",
    answer:
      "C'est notre anniversaire, et tu as tout organisé parfaitement. Le dîner était merveilleux, mais maintenant nous sommes de retour à la maison dans notre chambre. Tu l'as décorée avec des pétales de roses et un éclairage tamisé. 'Joyeux anniversaire,' dis-tu, prenant mes deux mains. 'Je veux que cette nuit soit inoubliable—pour célébrer tout ce que nous sommes et tout ce que nous ressentons.' Tu m'embrasses avec toute la passion et l'amour de nos années ensemble. Comment honorons-nous cette étape? À quoi ressemble notre célébration?",
  },
  {
    question: "Scénario: La Séduction Miroir",
    answer:
      "Tu prends ma main et me guides pour nous tenir devant le miroir. 'Je veux que tu me regardes t'aimer,' murmures-tu. Tu nous positionnes de sorte que je puisse voir tout ce qui est sur le point de se passer. 'Je veux que tu voies à quel point je te désire, à quel point tu es belle à mes yeux.' Avec le reflet nous montrant tout, tu commences à bouger contre moi, en maintenant le contact visuel à travers le miroir. À quel point cela devient-il intime?",
  },
  {
    question: "Scénario: L'Après-midi Pluvieux",
    answer:
      "La pluie tape contre les fenêtres pendant que nous sommes allongés sur le canapé. Il n'y a nulle part où aller, rien à faire. Tu te blottis contre moi et commences à embrasser mon cou, ma mâchoire, mes lèvres. 'J'adore ces journées,' murmures-tu, 'où tout ce que je veux faire, c'est être près de toi.' Tes mains bougent sous ma chemise. Paresseux, sensuel, sans hâte. Nous avons tout le temps du monde. Comment cet après-midi se déroule-t-il?",
  },
  {
    question: "Scénario: La Résolution d'une Dispute Passionnée",
    answer:
      "Nous nous sommes disputés toute la journée, la tension monte, les émotions sont à vif. Finalement, tu m'attrapes dans la chambre, tes yeux brûlants. 'Je déteste me disputer avec toi,' dis-tu intensément. 'Mais en ce moment, tout ce à quoi je pense, c'est de me réconcilier avec toi, de te montrer combien tu comptes pour moi.' La frustration devient passion. Quelle intensité mettons-nous dans la résolution de cette tension? À quoi ressemble la passion de la réconciliation entre nous?",
  },
  {
    question: "Scénario: La Danse Lente",
    answer:
      "La musique joue doucement dans l'obscurité de notre chambre. Tu me tires près de toi et nous dansons ensemble, toujours habillés, sentant juste la présence de l'autre. Tes lèvres trouvent les miennes pendant que nous dansons. Lentement, avec chaque chanson, des couches tombent. C'est la danse et la séduction combinées, le rythme et le désir entrelacés. Comment cette progression se poursuit-elle sensuellement?",
  },
  {
    question: "Scénario: La Maîtrise et la Reddition",
    answer:
      "Ce soir, tu veux le contrôle total. Tu murmures tes désirs clairement, et je me rends à chacune de tes commandes. Tu me guides par des mots et des touches, orchestrant chaque instant. 'Regarde-moi,' dis-tu. 'Je veux te voir pendant que je te prends.' Ta confiance et ma confiance totale créent quelque chose de transcendant. À quel point es-tu autoritaire? À quel point me rends-je profondément?",
  },
  {
    question: "Scénario: La Redécouverte",
    answer:
      "Après des années ensemble, tu veux explorer quelque chose de nouveau. 'Faisons comme si nous venions de nous rencontrer,' suggères-tu enjoué. 'Seduce-moi comme tu l'as fait cette première nuit.' Tu quittes la pièce et reviens en étranger(ère), confiant(e) et magnétique. Le familier devient excitant. Comment jouons-nous à ce jeu de redécouverte? Qu'est-ce qui se rallume entre nous?",
  },
  {
    question: "Scénario: La Soie et la Sensation",
    answer:
      "Tu sors des foulards de soie et les draps sur le lit. 'Je veux explorer la texture, la sensation, tout,' dis-tu, guidant mes mains et mon corps avec le tissu doux. Chaque matériau crée une sensation différente. Ta créativité et ta sensualité se combinent alors que tu crées une expérience qui intensifie chaque nerf. Quels sommets de plaisir atteignons-nous?",
  },
  {
    question: "Scénario: Les Confessions Murmurées",
    answer:
      "Dans l'obscurité, enlacés l'un dans l'autre, tu commences à me murmurer tes fantasmes les plus profonds—des choses que tu n'as jamais dites à voix haute. Je réponds avec mes propres désirs. Ce partage intime mène à une intimité physique plus profonde alors que nous commençons à explorer ces confessions ensemble. Quels secrets partageons-nous? Comment cette vulnérabilité approfondit-elle notre connexion?",
  },
  {
    question: "Scénario: La Liberté des Vacances",
    answer:
      "Nous sommes dans une maison de vacances au bord de l'océan. Éloignés de la vie quotidienne, des attentes, du familier. Tu me regardes avec une liberté que je n'ai jamais vue auparavant. 'Personne ne nous connaît ici. Nous pouvons être complètement nous-mêmes.' Que faisons-nous de cette liberté? À quel point devenons-nous sauvages et sans inhibition?",
  },
  {
    question: "Scénario: Le Plaisir Orchestré",
    answer:
      "Tu as tout planifié méticuleusement. Pétales de roses, champagne, éclairage d'ambiance, bougies parfumées. Mais plus important encore, tu as pensé à chaque façon de me plaire. 'Ce soir, tout tourne autour de ton plaisir,' dis-tu. 'Je vais adorer chaque centimètre de toi.' Quelle attention et quelle passion votre séduction orchestrée atteint-elle?",
  },
  {
    question: "Scénario: La Passion Inattendue",
    answer:
      "Nous avions juste une soirée normale quand soudain quelque chose change. Un regard, un toucher, un moment de connexion qui allume quelque chose de primal. Soudain, nous nous précipitons l'un vers l'autre avec urgence, passion. Nous finissons par faire l'amour ici même, maintenant, complètement imprévu. Qu'est-ce qui déclenche ce feu spontané entre nous?",
  },
]

const storiesCardsAr = [
  {
    question: "السيناريو: الفندق الممنوع",
    answer:
      "أنتما في غرفة فندق فاخرة. التوتر يتراكم طوال اليوم. عندما تُغلق الباب، أرميك بنظرة تقول 'كنت أشتاقك طوال اليوم.' أخلع جاكتي ببطء وأقترب، يداي تجدان انحناء خصرك. 'كنت أتخيل هذه اللحظة منذ الصباح'، أهمس. الترقب كان لا يطاق. كيف ترد؟ هل تسحبني إليك بيأس، أم تأخذ السيطرة وتدفعني على الحائط؟ خصوصية هذه الجدران تعني أن كل شيء يمكن أن يحدث. ماذا تفعل بي؟",
  },
  {
    question: "السيناريو: العودة المنتظرة",
    answer:
      "بعد أسبوع في رحلة عمل، أصل إلى المنزل وأجدك تنتظر في ضوء الشموع. لقد أعددت كل شيء—موسيقى هادئة، رائحة عطري المفضل، وترتدين شيئاً يأسر أنفاسي. 'اشتقت إليك'، تقولين، وتتقدمين نحوي ببطء. كل خطوة متعمدة، كل حركة محسوبة لإشعالي. 'عدت الأيام، الساعات'، تهمسين وأنت تقبّليني. أجسادنا افتقدت بعضها البعض. ما مدى شدة لقائنا؟ ماذا تريدين أن تفعلي بكل هذا الشوق المتراكم؟",
  },
  {
    question: "السيناريو: لقاء الحمام",
    answer:
      "أدخل الحمام لأجدك موجودة بالفعل، البخار يتصاعد حول جسدك. تبتسمين لي بكثافة تجعل نبضي يتسارع. 'كنت آمل أن تنضمي إليّ'، تقولين، وعيناك تتتبعان جسدي. الماء الساخن يتساقط بيننا. 'اقتربي'، تهمسين. تمتد يداك نحوي في البخار والرذاذ. يقطر الماء بيننا ونحن نقترب. ماذا يحدث بعد ذلك؟ ما مدى إلحاح وشغف هذا الأمر؟",
  },
  {
    question: "السيناريو: الإغواء البطيء",
    answer:
      "الليلة، قررت أن تأخذي وقتك. نحن مستلقيان في السرير، والضوء الوحيد يأتي من القمر عبر نافذتنا. تبدأ بتتبع خط فكي بإصبعك، ببطء، بتعمد. 'أريد أن أتذوق كل لحظة منك'، تهمسين. شفتيك تجدان عنقي، كتفي، عظمة ترقوتي. كل قبلة هي وعد. تستكشف يداك ببطء، بتوقير. 'أخبريني ماذا تريدين'، تهمسين على جلدي. كيف أستجيب؟ ما الرغبات التي أعترف بها؟",
  },
  {
    question: "السيناريو: المغامرة الجريئة",
    answer:
      "لقد ذهبنا لقضاء عطلة نهاية الأسبوع في كوخ خاص. منعزل، بعيد، لا أحد حولنا لأميال. تنظرين إليّ بتلك الابتسامة الماكرة التي تعني أن لديك شيئاً مخططاً له. 'أريد أن أجرب شيئاً لم نفعله من قبل'، تقولين بغموض. تأخذين يدي وتقودينني إلى النوافذ الكبيرة المطلة على الغابة. 'هنا، تحت النجوم، بدون أحد لرؤيتنا—أريد أن أحبك بحرية تامة.' أي مغامرة ننطلق فيها؟ إلى أي مدى نصبح غير مقيدين؟",
  },
  {
    question: "السيناريو: الاستيقاظ الصباحي",
    answer:
      "أستيقظ لأجدك مستيقظة بالفعل، تنظرين إليّ بنظرة حنونة ولكنها شديدة. 'صباح الخير'، تهمسين، وقبل أن أتمكن من الرد، تقبلينني بلطف، ثم بشغف متزايد. تنزلق يداك عبر كتفي العاريتين، نزولاً على ظهري. 'لم أستطع الانتظار لحظة أخرى'، تعترفين. يتسلل ضوء الصباح عبر النافذة وأنت تتحركين ضدي. كيف نستقبل اليوم؟ أي اتصال شغوف يتكشف قبل أن نضطر لمغادرة سريرنا؟",
  },
  {
    question: "السيناريو: كشف الملابس الداخلية",
    answer:
      "تختفين في الحمام وتظهرين وأنت ترتدين شيئاً يأخذ أنفاسي—أنيق، مثير، مصمم بالكامل لإبهاري. تمشين ببطء، سامحة لي بالاستمتاع بكل التفاصيل. 'هل يعجبك؟'، تسألين، وأنت تعلمين جيداً تأثيرك. تدورين ببطء، ولا يسعني إلا أن أقف وأصل إليك. 'ارتديت هذا من أجلك فقط'، تقولين، وتسحبينني بقربك. ما هو رد فعلي؟ ما مدى يأس رغبتي فيك؟",
  },
  {
    question: "السيناريو: اللقاء المنتظر",
    answer:
      "لم يكن لدينا وقت لبعضنا البعض لأسابيع—الحياة كانت محمومة. الليلة، لدينا أخيراً وقت غير منقطع. تقفلين باب غرفة النوم وتستديرين إليّ بنظرة تقول إن هذه الليلة لنا. 'أحتاجك'، تقولين ببساطة. نقع في بعضنا البعض بشهوة شخصين جائعين للاتصال. كيف تبدو ليلتنا لإعادة الاكتشاف؟ ما مدى شغف واستهلاك توحيدنا؟",
  },
  {
    question: "السيناريو: استراحة الغداء الممنوعة",
    answer:
      "ترسلين لي رسالة نصية في العمل: 'أحتاجك. تعالي إلى المنزل.' عندما أصل، تستقبلينني عند الباب في لا شيء سوى رداء حريري. 'لم أستطع الانتظار حتى الليلة'، تقولين، وتسحبينني إلى الداخل وتقفلين الباب خلفي. لدينا وقت محدود قبل أن يعيدنا العالم. ما مدى إلحاح وشدة ما نصبح عليه؟ ماذا ننجز في هذه الساعة المسروقة؟",
  },
  {
    question: "السيناريو: ليلة الذكرى السنوية",
    answer:
      "إنها ذكرى عيد زواجنا، وقد رتبت كل شيء بشكل مثالي. العشاء كان رائعاً، لكننا الآن عدنا إلى المنزل في غرفة نومنا. لقد زينتها بتلات الورد والإضاءة الخافتة. 'عيد زواج سعيد'، تقولين، وتمسكين بكلا يديّ. 'أريد لهذه الليلة أن تكون لا تُنسى—للاحتفال بكل ما نحن عليه وكل ما نشعر به.' تقبلينني بكل شغف وحب سنواتنا معاً. كيف نكرّم هذه اللحظة؟ كيف يبدو احتفالنا؟",
  },
  {
    question: "السيناريو: إغواء المرآة",
    answer:
      "تأخذين يدي وتقودينني للوقوف أمام المرآة. 'أريدك أن تشاهديني وأنا أحبك'، تهمسين. تضعيننا بحيث يمكنني رؤية كل ما هو على وشك الحدوث. 'أريدك أن ترى كم أرغب فيك، كم أنت جميلة بالنسبة لي.' مع انعكاس يرينا كل شيء، تبدأين بالتحرك ضدي، مع الحفاظ على التواصل البصري عبر المرآة. ما مدى حميمية هذا؟",
  },
  {
    question: "السيناريو: بعد الظهيرة الممطرة",
    answer:
      "المطر يضرب النوافذ بينما نحن مستلقيان على الأريكة. لا يوجد مكان نذهب إليه، لا شيء نفعله. تنحنين بجانبي وتبدأين بتقبيل رقبتي، فكي، شفتي. 'أحب هذه الأيام'، تهمسين، 'حيث كل ما أريده هو أن أكون قريبة منك.' تنتقل يداك تحت قميصي. كسولة، حسية، غير متعجلة. لدينا كل الوقت في العالم. كيف تتكشف هذه بعد الظهيرة؟",
  },
  {
    question: "السيناريو: حل الخلاف العاطفي",
    answer:
      "لقد كنا على خلاف طوال اليوم، والتوتر يتصاعد، والمشاعر عالية. أخيراً، تحاصرينني في غرفة النوم، وعيناك تشتعلان. 'أكره الشجار معك'، تقولين بشدة. 'لكن الآن، كل ما أفكر فيه هو المصالحة معك، وإظهار كم تعنين لي.' يتحول الإحباط إلى شغف. ما مدى شدة حل هذا التوتر؟ كيف تبدو شغف المصالحة بيننا؟",
  },
  {
    question: "السيناريو: الرقصة البطيئة",
    answer:
      "الموسيقى تعزف بهدوء في ظلام غرفتنا. تسحبينني بقربك ونرقص معاً، لا نزال نرتدي ملابسنا، فقط نشعر بوجود بعضنا البعض. شفتيك تجدان شفتيّ ونحن نرقص. ببطء، مع كل أغنية، تنزع طبقات. هذا هو الرقص والإغراء معاً، الإيقاع والرغبة متشابكان. كيف تستمر هذه التقدمة الحسية؟",
  },
  {
    question: "السيناريو: السيطرة والاستسلام",
    answer:
      "الليلة، تريدين السيطرة الكاملة. تهمسين برغباتك بوضوح، وأنا أستسلم لكل أوامرك. توجهينني بالكلمات واللمسات، وتنظمين كل لحظة. 'انظري إليّ'، تقولين. 'أريد أن أراك وأنا آخذك.' ثقتك بنفسك وثقتي الكاملة تخلق شيئاً متعالياً. ما مدى سيطرتك؟ ما مدى استسلامي العميق؟",
  },
  {
    question: "السيناريو: إعادة الاكتشاف",
    answer:
      "بعد سنوات معاً، تريدين استكشاف شيء جديد. 'لنفترض أننا التقينا للتو'، تقترحين بمرح. 'أغوني كما فعلتِ في تلك الليلة الأولى.' تتركي الغرفة وتعودين كغريبة، واثقة ومغناطيسية. يصبح المألوف مثيراً. كيف نلعب هذه اللعبة لإعادة الاكتشاف؟ ما الذي يعود للاشتعال بيننا؟",
  },
  {
    question: "السيناريو: الحرير والإحساس",
    answer:
      "تخرجين أوشحة حريرية وتلقينها على السرير. 'أريد استكشاف النسيج، الإحساس، كل شيء'، تقولين، وتوجهين يديّ وجسدي بالقماش الناعم. كل مادة تخلق شعوراً مختلفاً. إبداعك وحسك الأنثوي يجتمعان بينما تخلقين تجربة تزيد من إثارة كل عصب. ما هي قمم المتعة التي نصل إليها؟",
  },
  {
    question: "السيناريو: الاعترافات المهموسة",
    answer:
      "في الظلام، متشابكين في أحضان بعضنا البعض، تبدأين في همس أعمق خيالاتك لي—أشياء لم تقوليها بصوت عالٍ أبداً. أستجيب برغباتي الخاصة. هذا المشاركة الحميمة تؤدي إلى حميمية جسدية أعمق بينما نبدأ في استكشاف هذه الاعترافات معاً. ما هي الأسرار التي نشاركها؟ كيف يعمق هذا الضعف اتصالنا؟",
  },
  {
    question: "السيناريو: حرية العطلة",
    answer:
      "نحن في منزل عطلة على المحيط. بعيدون عن الحياة اليومية، عن التوقعات، عن المألوف. تنظرين إليّ بحرية لم أرها من قبل. 'لا أحد يعرفنا هنا. يمكننا أن نكون أنفسنا تماماً.' ماذا نفعل بهذه الحرية؟ إلى أي مدى نصبح جامحين وغير مقيدين؟",
  },
  {
    question: "السيناريو: المتعة المنظمة",
    answer:
      "لقد خططت لكل شيء بدقة. بتلات الورد، الشمبانيا، الإضاءة الخافتة، الشموع المعطرة. ولكن الأهم من ذلك، لقد فكرت في كل طريقة لإرضائي. 'الليلة تدور بالكامل حول متعتك'، تقولين. 'سأعبد كل شبر منك.' ما مدى تفكير وشغف إغوائك المنظم؟",
  },
  {
    question: "السيناريو: الشغف غير المتوقع",
    answer:
      "كنا فقط نقضي أمسية عادية عندما فجأة تغير شيء ما. نظرة، لمسة، لحظة اتصال تشعل شيئاً بدائياً. فجأة نتجه نحو بعضنا البعض بإلحاح، بشغف. ننتهي من ممارسة الحب هنا، الآن، بشكل غير مخطط له تماماً. ما الذي يثير هذا النار العفوية بيننا؟",
  },
]
