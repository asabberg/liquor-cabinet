// boardgamesdata.js - Board game collection data populated from BGs.docx

const boardGamesData = [
    {
        title: '5-Minute Mystery',
        players: '1-6',
        minPlayers: 1,
        maxPlayers: 6,
        type: 'Cooperative / Real-Time / Deduction',
        description: 'Players race against a five-minute timer to find hidden symbols in scenes, match codex patterns, and eliminate suspects to catch a museum culprit.'
    },
    {
        title: 'Camel Up',
        players: '2-8',
        minPlayers: 2,
        maxPlayers: 8,
        type: 'Family / Betting / Racing',
        description: 'Players place bets on stackable racing camels as dice-driven pyramid rolls send the herd tumbling unpredictably around a desert track.'
    },
    {
        title: 'Clank! A Deck-Building Adventure',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Deck Building / Push Your Luck / Dungeon Crawl',
        description: 'Players build decks to move through a fixed dungeon board, pilfering treasures and racing back to the surface before a dragon knocks them out.'
    },
    {
        title: 'Clank! Catacombs',
        players: '1-4',
        minPlayers: 1,
        maxPlayers: 4,
        type: 'Deck Building / Push Your Luck / Dungeon Crawl',
        description: 'Thieves sneak through an ever-changing dungeon built from unexplored tiles, building decks to grab artifacts and escape before making too much noise and waking the dragon.'
    },
    {
        title: 'Clank! Legacy: Acquisitions Incorporated',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Legacy / Deck Building / Adventure',
        description: 'Players build decks and undertake a multi-game campaign as fledgling franchisees of Acquisitions Incorporated, permanently altering the board, cards, and world.'
    },
    {
        title: 'Clank! Legacy 2: Acquisitions Incorporated – Darkest Magic',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Legacy / Deck Building / Adventure',
        description: 'Players return for a second campaign of corporate dungeon-delving, unlocking new mechanics and permanently customizing their game across linked sessions.'
    },
    {
        title: 'Clank! The Mummy\'s Curse (Expansion)',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Expansion / Deck Building / Push Your Luck',
        description: 'This expansion adds a double-sided pyramid board, a roaming mummy hazard, and new cards and curses to the base Clank! game.'
    },
    {
        title: 'Clue',
        players: '2-6',
        minPlayers: 2,
        maxPlayers: 6,
        type: 'Family / Deduction / Murder Mystery',
        description: 'Players move between rooms in a mansion and make suggestions to deduce which suspect, weapon, and room were involved in Mr. Boddy\'s murder.'
    },
    {
        title: 'Codenames',
        players: '2-8+',
        minPlayers: 2,
        maxPlayers: 12,
        type: 'Party / Word Game / Deduction',
        description: 'Two rival spymasters give single-word clues to help their teammates identify their team\'s secret agents from a grid of word cards while avoiding the assassin.'
    },
    {
        title: 'Critter Kitchen',
        players: '1-5',
        minPlayers: 1,
        maxPlayers: 5,
        type: 'Worker Placement / Simultaneous Action Selection',
        description: 'Players secretly dispatch fast, medium, and slow animal chefs across town to gather ingredients and plate dishes for a celebrity food critic.'
    },
    {
        title: 'Deadline',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Deduction / Card Game / Mystery',
        description: 'As 1930s New York detectives, players cooperatively manage their hand of clue cards to follow leads and solve mystery cases before running out of time.'
    },
    {
        title: 'Deception: Murder in Hong Kong',
        players: '4-12',
        minPlayers: 4,
        maxPlayers: 12,
        type: 'Party / Deduction / Bluffing',
        description: 'A Forensic Scientist gives cryptic scene clues to help investigators identify the murderer and weapon among their own ranks while the killer tries to mislead the group.'
    },
    {
        title: 'Disney Villainous (4 boxes: Wicked to the Core, Perfectly Wretched, Despicable Plots, and The Worst Takes It All)',
        players: '2-6 (2-3 per standalone expansion box)',
        minPlayers: 2,
        maxPlayers: 6,
        type: 'Asymmetric / Hand Management / Take That',
        description: 'Each player takes on the role of an iconic Disney villain with a unique deck and asymmetric objective, racing to achieve their sinister goal while thwarting rivals.'
    },
    {
        title: 'Flamecraft',
        players: '1-5',
        minPlayers: 1,
        maxPlayers: 5,
        type: 'Worker Placement / Set Collection',
        description: 'Players act as Flamekeepers placing small artisan dragons into shops around town to cast enchantments and earn reputation.'
    },
    {
        title: 'Gloomhaven: Forgotten Circles (Expansion)',
        players: '1-4',
        minPlayers: 1,
        maxPlayers: 4,
        type: 'Expansion / Tactical Combat / Campaign',
        description: 'This expansion continues the Gloomhaven story with 20 new scenarios and adds the Aesther Diviner character class.'
    },
    {
        title: 'Gloomhaven: Jaws of the Lion',
        players: '1-4',
        minPlayers: 1,
        maxPlayers: 4,
        type: 'Tactical Combat / Campaign / Dungeon Crawl',
        description: 'Players control four mercenaries using dual-purpose ability cards to fight tactical battles through a 25-scenario story book campaign.'
    },
    {
        title: 'Jaipur',
        players: '2',
        minPlayers: 2,
        maxPlayers: 2,
        type: 'Card Game / Set Collection / Hand Management',
        description: 'Two merchants compete in a fast-paced tug-of-war to buy, trade, and sell goods at the market for rupees and bonus tokens.'
    },
    {
        title: 'Let\'s Go! To Japan',
        players: '1-4',
        minPlayers: 1,
        maxPlayers: 4,
        type: 'Card Drafting / Set Collection',
        description: 'Players draft activity cards to plan a week-long itinerary across Tokyo and Kyoto, optimizing travel routes and experiences for the ultimate vacation.'
    },
    {
        title: 'Low Lands',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Worker Placement / Resource Management',
        description: 'Farmers raise sheep and upgrade their estates on the North Sea coast while deciding whether to cooperate on building a shared dike to hold back storm surges.'
    },
    {
        title: 'MicroMacro: Crime City – Full House',
        players: '1-4',
        minPlayers: 1,
        maxPlayers: 4,
        type: 'Deduction / Puzzle',
        description: 'Players work cooperatively as detectives to solve 16 interlocking crimes by spotting clues and tracing characters across a massive, detailed city map.'
    },
    {
        title: 'Monopoly',
        players: '2-8',
        minPlayers: 2,
        maxPlayers: 8,
        type: 'Family / Economic / Roll and Move / Trading',
        description: 'Players roll dice to move around the board buying properties, building houses and hotels, and collecting rent to bankrupt their opponents.'
    },
    {
        title: 'Munchkin Deluxe',
        players: '3-6',
        minPlayers: 3,
        maxPlayers: 6,
        type: 'Card Game / Fantasy / Take That',
        description: 'Players kick down dungeon doors, fight humorous monsters, equip loot, and backstab friends in a race to reach Level 10.'
    },
    {
        title: 'Nyctophobia',
        players: '3-5',
        minPlayers: 3,
        maxPlayers: 5,
        type: 'Asymmetric / Horror / Deduction',
        description: 'Players wear blackout glasses and navigate a tactile maze board strictly by touch to escape a relentless hunter controlled by one player.'
    },
    {
        title: 'On Tour',
        players: '1-8+',
        minPlayers: 1,
        maxPlayers: 12,
        type: 'Roll-and-Write / Route Building',
        description: 'Players roll dice and flip region cards to write ascending numbers on a map, plotting the longest continuous concert tour route for their band.'
    },
    {
        title: 'Pan Am: The Game',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Worker Placement / Route Building / Economic',
        description: 'Players build rival airlines by bidding on landing rights, expanding flight routes, and selling lucrative routes to the growing Pan Am corporation.'
    },
    {
        title: 'Pandemic',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Cooperative / Medical / Hand Management',
        description: 'Players take on specialized roles to travel the globe, treat infections, and discover cures for four deadly diseases before outbreaks overwhelm humanity.'
    },
    {
        title: 'Pandemic Legacy: Season 0',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Legacy / Cooperative / Spy Thriller',
        description: 'Set during the 1962 Cold War, CIA medical operatives travel the world undercover to stop a Soviet bio-threat in a narrative campaign with permanent consequences.'
    },
    {
        title: 'Pandemic Legacy: Season 1',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Legacy / Cooperative / Medical',
        description: 'Players work together across a twelve-month campaign to contain mutating diseases, permanently modifying rules, characters, and cities along the way.'
    },
    {
        title: 'Pandemic Legacy: Season 2',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Legacy / Cooperative / Post-Apocalyptic',
        description: 'Set 71 years after a devastating plague, players sail from floating havens to reconnect and supply a fallen world across a persistent campaign.'
    },
    {
        title: 'Pandemic: Hot Zone – Europe',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Cooperative / Medical / Hand Management',
        description: 'A compact, faster-playing version of Pandemic where players cooperate to contain three diseases threatening Europe.'
    },
    {
        title: 'Photosynthesis',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Abstract Strategy / Action Points',
        description: 'Players plant and grow trees through their life cycles across a forest board, positioning them to collect sunlight points from a revolving sun while casting shadows on opponents.'
    },
    {
        title: 'Raptor',
        players: '2',
        minPlayers: 2,
        maxPlayers: 2,
        type: 'Asymmetric / Hand Management / Grid Movement',
        description: 'In an asymmetric two-player game, one player commands a mother raptor and her babies trying to escape while the other controls scientists attempting to capture them.'
    },
    {
        title: 'Risk',
        players: '2-6',
        minPlayers: 2,
        maxPlayers: 6,
        type: 'Wargame / Area Control / Dice Rolling',
        description: 'Players deploy armies, form fragile alliances, and roll dice to conquer territories and eliminate rivals in a bid for global domination.'
    },
    {
        title: 'Robinson Crusoe: Adventures on the Cursed Island',
        players: '1-4',
        minPlayers: 1,
        maxPlayers: 4,
        type: 'Cooperative / Worker Placement / Adventure',
        description: 'Castaways work together to build shelter, gather food, explore, and survive harsh weather and scenario hazards on a deserted island.'
    },
    {
        title: 'Secret Hitler',
        players: '5-10',
        minPlayers: 5,
        maxPlayers: 10,
        type: 'Party / Bluffing / Deduction',
        description: 'Players are secretly divided into liberals and fascists who must pass legislation and deduce each other\'s hidden loyalties before a fascist regime takes over.'
    },
    {
        title: 'Sherlock Holmes Consulting Detective: The Baker Street Irregulars',
        players: '1-8',
        minPlayers: 1,
        maxPlayers: 8,
        type: 'Cooperative / Deduction / Narrative Mystery',
        description: 'Players read case booklets, newspapers, and London directories to follow leads and solve ten Victorian mysteries in fewer steps than Sherlock Holmes.'
    },
    {
        title: 'Sky Team',
        players: '2',
        minPlayers: 2,
        maxPlayers: 2,
        type: 'Cooperative / Dice Placement',
        description: 'Two players act as pilot and co-pilot, silently assigning dice rolls to control panels to balance speed, tilt, and flaps for a safe airplane landing.'
    },
    {
        title: 'Small World',
        players: '2-5',
        minPlayers: 2,
        maxPlayers: 5,
        type: 'Area Control / Fantasy',
        description: 'Players combine fantasy races and special powers to conquer regions on a cramped map, putting civilizations into decline at the right moment to rise again with a new faction.'
    },
    {
        title: 'Sonar',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Team Game / Deduction',
        description: 'Two submarine crews compete in turn-based stealth combat, tracking each other\'s movements across a grid map to fire torpedoes and sink the opposing sub.'
    },
    {
        title: 'Spirit Island',
        players: '1-4',
        minPlayers: 1,
        maxPlayers: 4,
        type: 'Cooperative / Area Control / Hand Management',
        description: 'Players embody elemental island spirits using asymmetric powers to defend their land and native Dahan from waves of colonizing invaders.'
    },
    {
        title: 'Splendor',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Engine Building / Set Collection / Renaissance',
        description: 'Players act as Renaissance gem merchants collecting tokens and acquiring mines, transportation, and artisans to build an efficient engine and earn prestige points.'
    },
    {
        title: 'Terraforming Mars',
        players: '1-5',
        minPlayers: 1,
        maxPlayers: 5,
        type: 'Strategy / Hand Management / Tile Placement',
        description: 'Competing corporations play project cards to raise the temperature, oxygen, and ocean coverage of Mars while building infrastructure for victory points.'
    },
    {
        title: 'The Game of Life',
        players: '2-4',
        minPlayers: 2,
        maxPlayers: 4,
        type: 'Family / Roll and Move',
        description: 'Players spin the wheel and travel along a winding track through life milestones like college, careers, marriage, and retirement to finish with the most wealth.'
    },
    {
        title: 'The Settlers of Catan',
        players: '3-4',
        minPlayers: 3,
        maxPlayers: 4,
        type: 'Strategy / Trading / Dice Rolling / Route Building',
        description: 'Players gather and trade wood, brick, sheep, wheat, and ore to build roads, settlements, and cities across a modular island.'
    },
    {
        title: 'Ticket to Ride',
        players: '2-5',
        minPlayers: 2,
        maxPlayers: 5,
        type: 'Family / Set Collection / Route Building',
        description: 'Players collect colored train cards to claim railway routes across North America and complete secret destination tickets.'
    },
    {
        title: 'Tinners\' Trail',
        players: '1-5',
        minPlayers: 1,
        maxPlayers: 5,
        type: 'Economic / Auction / Tile Placement',
        description: 'Players bid on mining claims in 19th-century Cornwall, extracting tin and copper and investing in development before market prices drop.'
    },
    {
        title: 'Unfair',
        players: '2-5',
        minPlayers: 2,
        maxPlayers: 5,
        type: 'Strategy / Card Drafting / Hand Management',
        description: 'Players build and upgrade themed amusement parks by drafting attractions and staff while using event cards to sabotage rivals or protect their own park.'
    },
    {
        title: 'Welcome To...',
        players: '1-100',
        minPlayers: 1,
        maxPlayers: 100,
        type: 'Roll-and-Write / Flip-and-Write / City Building',
        description: 'Players simultaneously flip cards to number houses and build neighborhood amenities in a 1950s suburban development.'
    }
];
