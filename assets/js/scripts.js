//--------------------------------------------------------------------
//Classes
//--------------------------------------------------------------------
class BaseStat {
    constructor(level,hp,mp,str,vit,mag,spr) {
        this.level = level;
        this.hp = hp;
        this.mp = mp;
        this.str = str;
        this.vit = vit;
        this.mag = mag;
        this.spr = spr;
    }
}
class Weapon {
    constructor(type,name,attack,crit,hp,mp,str,vit,mag,spr,fire,ice,lightning,dark,shot,effect) {
        this.type = type;
        this.name = name;
        this.attack = attack;
        this.crit = crit;
        this.hp = hp;
        this.mp = mp;
        this.str = str;
        this.vit = vit;
        this.mag = mag;
        this.spr = spr;
        this.fire = fire;
        this.ice = ice;
        this.lightning = lightning;
        this.dark = dark;
        this.shot = shot;
        this.effect = effect;
    }
}

class Accessory {    
    constructor(equip,name,hp,mp,str,vit,mag,spr,fire,ice,lightning,dark,shot,
        hprec,mprec,phase,xp,immunity,effect) {
        this.equip = equip;
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.str = str;
        this.vit = vit;
        this.mag = mag;
        this.spr = spr;
        this.fire = fire;
        this.ice = ice;
        this.lightning = lightning;
        this.dark = dark;
        this.shot = shot;
        this.hprec = hprec;
        this.mprec = mprec;
        this.phase = phase;
        this.xp = xp;
        this.immunity = immunity;
        this.effect = effect;
    }
}

class Attire {    
    constructor(equip,name,hpBonus,mpBonus,strBonus,vitBonus,magBonus,sprBonus,fire,ice,lightning,
        dark,shot,hprec,mprec,critBonus,immunity,effect) {
        this.equip = equip;
        this.name = name;
        this.hpBonus = hpBonus;
        this.mpBonus = mpBonus;
        this.strBonus = strBonus;
        this.vitBonus = vitBonus;
        this.magBonus = magBonus;
        this.sprBonus = sprBonus;
        this.fire = fire;
        this.ice = ice;
        this.lightning = lightning;
        this.dark = dark;
        this.shot = shot;
        this.hprec = hprec;
        this.mprec = mprec;
        this.critBonus = critBonus;
        this.immunity = immunity;
        this.effect = effect;
    }
}

class Food {    
    constructor(type,favorite,name,hp,str,vit,mag,spr,fire,ice,lightning,
        hprec,xp,crit,immunity,itemDrop,effect) {
        this.type = type;
        this.favorite = favorite;
        this.name = name;
        this.hp = hp;
        this.str = str;
        this.vit = vit;
        this.mag = mag;
        this.spr = spr;
        this.fire = fire;
        this.ice = ice;
        this.lightning = lightning;
        this.hprec = hprec;
        this.xp = xp;
        this.crit = crit;
        this.immunity = immunity;
        this.itemDrop = itemDrop;
        this.effect = effect;
    }
}

//--------------------------------------------------------------------
//Data
//--------------------------------------------------------------------

//Levels
var noctisStats = [new BaseStat (1,325,75,19,22,63,40),
new BaseStat (2,331,77,20,23,71,41),
new BaseStat (3,336,79,20,23,77,41),
new BaseStat (4,342,81,21,24,84,42),
new BaseStat (5,349,83,21,24,90,42),
new BaseStat (6,356,85,22,25,96,43),
new BaseStat (7,364,87,23,25,101,43),
new BaseStat (8,372,89,24,26,107,44),
new BaseStat (9,382,91,26,26,112,44),
new BaseStat (10,391,93,27,27,117,45),
new BaseStat (11,402,95,28,27,122,45),
new BaseStat (12,413,97,30,28,127,46),
new BaseStat (13,426,99,31,28,131,46),
new BaseStat (14,439,101,32,28,136,46),
new BaseStat (15,452,103,34,29,140,47),
new BaseStat (16,469,105,35,29,145,47),
new BaseStat (17,485,107,37,30,149,48),
new BaseStat (18,502,109,38,30,153,48),
new BaseStat (19,523,111,40,30,157,48),
new BaseStat (20,544,114,41,31,161,49),
new BaseStat (21,568,116,43,31,165,49),
new BaseStat (22,592,118,44,31,169,49),
new BaseStat (23,619,120,46,32,179,50),
new BaseStat (24,648,122,48,32,177,50),
new BaseStat (25,679,124,50,32,180,50),
new BaseStat (26,712,126,53,33,184,51),
new BaseStat (27,748,128,55,33,188,51),
new BaseStat (28,788,130,58,33,191,51),
new BaseStat (29,831,132,61,34,195,52),
new BaseStat (30,877,135,64,34,198,52),
new BaseStat (31,925,137,67,34,201,52),
new BaseStat (32,979,139,71,35,205,53),
new BaseStat (33,1036,141,74,35,208,53),
new BaseStat (34,1100,143,78,35,211,53),
new BaseStat (35,1168,145,82,36,215,54),
new BaseStat (36,1240,148,87,36,218,54),
new BaseStat (37,1318,149,91,36,221,54),
new BaseStat (38,1402,151,96,36,224,54),
new BaseStat (39,1494,153,102,37,227,55),
new BaseStat (40,1584,156,108,38,230,56),
new BaseStat (41,1672,158,114,40,233,59),
new BaseStat (42,1758,160,120,42,236,61),
new BaseStat (43,1842,162,127,44,239,64),
new BaseStat (44,1924,164,134,47,242,69),
new BaseStat (45,2004,166,148,51,245,75),
new BaseStat (46,2082,168,148,54,248,78),
new BaseStat (47,2158,170,154,57,251,83),
new BaseStat (48,2232,172,161,60,254,87),
new BaseStat (49,2304,174,168,63,257,92),
new BaseStat (50,2374,177,175,67,259,97),
new BaseStat (51,2442,179,182,70,262,101),
new BaseStat (52,2508,181,190,73,265,105),
new BaseStat (53,2572,183,198,76,268,110),
new BaseStat (54,2634,185,206,79,270,113),
new BaseStat (55,2694,187,214,83,273,119),
new BaseStat (56,2752,189,221,86,276,123),
new BaseStat (57,2808,191,227,89,278,128),
new BaseStat (58,2862,193,233,92,281,131),
new BaseStat (59,2914,195,239,95,284,135),
new BaseStat (60,2964,197,245,99,286,141),
new BaseStat (61,3013,198,252,102,289,145),
new BaseStat (62,3061,199,259,104,291,148),
new BaseStat (63,3108,200,266,106,294,150),
new BaseStat (64,3154,201,273,108,296,153),
new BaseStat (65,3199,202,279,110,299,156),
new BaseStat (66,3243,203,283,112,301,158),
new BaseStat (67,3286,204,287,114,304,160),
new BaseStat (68,3328,205,290,116,306,163),
new BaseStat (69,3369,206,293,118,308,166),
new BaseStat (70,3409,207,296,119,311,167),
new BaseStat (71,3448,208,299,120,313,168),
new BaseStat (72,3486,209,302,121,316,169),
new BaseStat (73,3523,210,305,122,318,170),
new BaseStat (74,3559,211,308,123,320,172),
new BaseStat (75,3594,212,311,124,323,173),
new BaseStat (76,3628,213,313,125,325,173),
new BaseStat (77,3661,214,314,126,328,175),
new BaseStat (78,3693,215,316,127,330,176),
new BaseStat (79,3724,216,317,128,332,178),
new BaseStat (80,3754,217,319,129,334,179),
new BaseStat (81,3783,218,320,130,336,179),
new BaseStat (82,3811,219,322,131,339,181),
new BaseStat (83,3838,220,323,132,341,182),
new BaseStat (84,3864,221,325,133,343,183),
new BaseStat (85,3889,222,326,134,345,185),
new BaseStat (86,3913,223,328,135,348,185),
new BaseStat (87,3936,224,329,136,349,187),
new BaseStat (88,3958,225,331,137,352,188),
new BaseStat (89,3979,226,332,138,354,189),
new BaseStat (90,3999,227,334,139,356,191),
new BaseStat (91,4018,228,335,140,358,191),
new BaseStat (92,4036,229,337,141,360,192),
new BaseStat (93,4053,230,338,142,362,194),
new BaseStat (94,4069,231,340,143,364,195),
new BaseStat (95,4084,232,341,144,366,196),
new BaseStat (96,4098,233,343,145,368,197),
new BaseStat (97,4111,234,344,146,371,198),
new BaseStat (98,4123,235,346,147,373,199),
new BaseStat (99,4134,238,347,148,375,201),
new BaseStat (100,4144,239,349,149,377,202),
new BaseStat (101,4154,239,350,149,379,202),
new BaseStat (102,4164,240,352,149,381,202),
new BaseStat (103,4174,240,353,150,383,202),
new BaseStat (104,4184,241,355,150,385,202),
new BaseStat (105,4194,241,356,150,387,202),
new BaseStat (106,4204,242,358,151,389,204),
new BaseStat (107,4214,242,359,151,391,204),
new BaseStat (108,4224,243,361,151,392,204),
new BaseStat (109,4234,243,362,152,394,204),
new BaseStat (110,4245,244,364,153,396,205),
new BaseStat (111,4255,244,365,153,398,205),
new BaseStat (112,4265,245,367,153,400,205),
new BaseStat (113,4275,245,368,154,402,206),
new BaseStat (114,4285,246,370,154,404,206),
new BaseStat (115,4295,246,371,154,406,206),
new BaseStat (116,4305,247,373,155,408,207),
new BaseStat (117,4315,247,374,155,410,207),
new BaseStat (118,4325,248,376,155,411,207),
new BaseStat (119,4335,248,377,156,413,208),
new BaseStat (120,4346,249,379,157,415,209)];

//Weapons
var weaponList = [new Weapon ('','None',0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Weapon ('Sword','Airstep Sword',83,3,0,7,0,0,0,0,0,0,0,0,0,'Halves MP consumption in mid-air'),
new Weapon ('Sword','Balmung',446,3,0,11,0,0,0,0,0,0,0,0,0,'-4% damage for every 1% of missing MP'),
new Weapon ('Sword','Blazefire Saber',71,3,0,9,0,18,0,0,0,0,0,0,0,'-15% physical damage taken'),
new Weapon ('Sword','Blazefire Saber XV',72,3,0,9,0,18,0,0,0,0,0,0,0,'-15% physical damage taken'),
new Weapon ('Sword','Blood Sword',198,3,0,11,0,0,0,0,0,0,0,0,0,'20% chance to recover 30 HP per hit'),
new Weapon ('Sword','Broadsword',42,3,0,6,0,0,0,0,0,0,0,0,0,'+2% Critical Rate per combo hit'),
new Weapon ('Sword','Durandal',232,3,0,11,0,0,0,0,0,0,0,33,0,'Light-elemental'),
new Weapon ('Sword','Engine Blade',28,3,0,5,0,0,5,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Sword','Engine Blade II',42,3,0,15,0,0,12,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Sword','Engine Blade III',207,3,0,25,0,0,18,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Sword','Enhancer',276,3,0,12,0,0,0,0,0,0,0,0,0,''),
new Weapon ('Sword','Flame Tongue',117,3,0,7,0,0,0,0,28,0,0,0,0,'Inflicts Fire-based damage'),
new Weapon ('Sword','Garuda\'s Gaze ',200,3,0,6,16,17,21,14,0,0,0,0,0,'Strengthened aerial attacks '),
new Weapon ('Sword','Gaze of the Vortex ',430,100,0,60,22,22,22,15,0,0,0,0,0,'Deals 50% more damage with aerial attacks. Airstepping and aerial warping cost halved. Always inflicts a critical hit'),
new Weapon ('Sword','Ice Brand',137,3,0,10,0,0,0,0,0,31,0,0,0,'Inflicts Ice-based damage'),
new Weapon ('Sword','Ragnarok',153,3,0,8,0,0,0,0,0,0,0,0,0,'Boosted damage with warp-strike but the warp animation is slower'),
new Weapon ('Sword','Rune Saber',103,3,48,8,0,8,12,9,0,0,0,0,0,''),
new Weapon ('Sword','Sarah\'s Shortsword ',179,3,0,0,0,0,9,15,0,0,0,0,0,'+50% damage at full HP. Light-elemental'),
new Weapon ('Sword','Soul Saber',343,3,0,12,0,0,0,0,0,0,0,0,0,'+4% damage for each 1% below 50% Stamina'),
new Weapon ('Sword','Ultima Blade',364,3,0,40,0,0,30,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Greatsword','Afrosword ',503,2,287,0,0,0,0,54,0,0,0,0,0,'Changes battle music to Timed Quest music when equipped to Noctis or Gladiolus and controlling them'),
new Weapon ('Greatsword','Apocalypse',597,2,403,0,0,0,0,0,0,0,0,0,0,'When below 30% HP: +30 damage and +9 damage for each 1% missing HP below 30%'),
new Weapon ('Greatsword','Blade of Brennaere',131,2,82,0,0,0,0,0,27,0,0,0,0,'Inflicts Fire-based damage'),
new Weapon ('Greatsword','Claymore',156,2,98,0,0,32,0,0,0,0,0,0,0,''),
new Weapon ('Greatsword','Dodanuki ',80,2,0,0,46,0,0,0,0,0,0,0,0,'Reduces enemy defense with each slash'),
new Weapon ('Greatsword','Dominator',583,2,298,0,0,0,0,0,0,0,0,32,0,'Light-elemenatal'),
new Weapon ('Greatsword','Duel Code',370,2,468,0,0,0,0,0,0,0,0,0,0,'+50% damage to lone enemies within 65 feet'),
new Weapon ('Greatsword','Force Stealer',210,2,202,6,0,0,0,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Greatsword','Force Stealer II',463,2,308,11,0,0,0,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Greatsword','Garuda\'s Pain ',456,2,0,6,22,24,29,20,0,0,0,0,0,'Strengthened aerial attacks '),
new Weapon ('Greatsword','Genji Blade',426,2,357,0,0,0,0,0,0,0,0,0,0,''),
new Weapon ('Greatsword','Hardedge',244,2,153,0,0,0,0,0,0,0,0,0,0,'+80% breakage on body parts/appendages'),
new Weapon ('Greatsword','Hyperion',496,2,310,0,0,0,0,0,0,0,0,0,0,'+15% damage per additional enemy within 65 feet (max 100%)'),
new Weapon ('Greatsword','Iron Duke',581,2,153,0,20,0,0,0,0,0,0,0,0,''),
new Weapon ('Greatsword','Masamune',88,2,49,0,0,0,0,0,0,0,0,0,0,'20% chance of inflicting 30% Max HP damage when the target\'s HP is full'),
new Weapon ('Greatsword','Mutant Rakshasa Blade',328,2,124,32,25,0,52,21,0,0,0,58,0,'The blade sends out three projections that damage the target before Noctis warps. The warp-strike also ignores greatsword resistances/weaknesses'),
new Weapon ('Greatsword','Pain of the Vortex ',572,2,0,60,31,31,31,22,0,0,0,0,0,'Deals 50% more damage with aerial attacks. Aerial warping MP cost halved. Always inflicts a critical hit'),
new Weapon ('Greatsword','Thunderbolt',345,2,246,0,0,0,0,0,0,0,29,0,0,'Inflicts Lightning-based damage'),
new Weapon ('Greatsword','Two-Handed Sword',48,2,53,0,0,0,0,0,0,0,0,0,0,'+15% damage per additional enemy within 65 feet (max 100%)'),
new Weapon ('Greatsword','War Sword',78,2,65,0,0,0,0,0,0,0,0,0,0,'10% chance to inflict Compromised'),
new Weapon ('Polearm','Dragoon Lance',246,4,0,0,0,0,0,0,15,14,16,0,0,''),
new Weapon ('Polearm','Drain Lance',33,4,0,5,0,0,0,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Polearm','Drain Lance II',48,4,0,11,0,0,0,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Polearm','Drain Lance III',195,4,0,11,0,0,0,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Polearm','Flayer',337,4,0,0,0,0,0,0,0,0,0,0,0,'Finishers deal +80% damage'),
new Weapon ('Polearm','Gae Bolg',75,4,0,0,0,0,0,0,0,0,0,0,0,'+44% damage when using warp-strikes'),
new Weapon ('Polearm','Ice Spear',133,4,0,0,0,0,0,0,0,0,0,0,0,'Inflicts Ice-based damage'),
new Weapon ('Polearm','Javelin',18,4,0,0,0,0,0,0,0,0,0,0,0,'When below 30% HP: Critical +5% and another +1.5% per each 1% missing HP below 30%'),
new Weapon ('Polearm','Mythril Lance',55,4,0,0,0,0,32,0,0,0,0,0,0,''),
new Weapon ('Polearm','Precision Lance',266,4,0,0,0,0,0,0,0,0,0,0,0,'+10% Critical Rate'),
new Weapon ('Polearm','Radiant Lance',205,4,0,0,0,0,0,0,0,0,0,0,0,'Light-elemental'),
new Weapon ('Polearm','Rapier Lance',68,4,0,0,0,0,0,0,0,0,0,0,0,'+80% breakage on body parts/appendages'),
new Weapon ('Polearm','Storm Lance',113,4,0,0,0,0,0,0,0,0,0,0,0,'Inflicts Lightning-based damage'),
new Weapon ('Polearm','Wyvern Lance',161,4,0,0,0,0,0,0,0,0,0,0,0,'+50% damage in mid-air'),
new Weapon ('Daggers','Assassin\'s Daggers',126,8,0,7,0,0,10,0,0,0,0,0,0,'10% chance to inflict Poisons'),
new Weapon ('Daggers','Avengers',43,8,0,4,0,0,5,0,0,0,0,0,0,'When below 30% HP: Critical +5 and another +1.5 per each 1% missing HP below 30%'),
new Weapon ('Daggers','Cutlasses',58,8,0,6,0,0,10,0,0,0,0,0,0,'10% chance to inflict Enfeebled'),
new Weapon ('Daggers','Daggers',20,8,0,4,0,0,5,0,0,0,0,0,0,'+50% damage to enemies in vulnerable status'),
new Weapon ('Daggers','Delta Daggers',153,8,0,6,0,0,15,0,0,0,0,0,0,'10% chance to inflict Compromised'),
new Weapon ('Daggers','Garuda\'s Plumes ',176,8,0,6,22,24,29,20,0,0,0,0,0,'Strengthened aerial attacks '),
new Weapon ('Daggers','Mage Mashers',66,8,0,13,0,0,32,0,30,30,30,0,0,''),
new Weapon ('Daggers','Main Gauches',192,8,0,7,0,0,21,0,0,0,0,0,0,'+50% damage to enemies in vulnerable status'),
new Weapon ('Daggers','Mythril Knives',62,8,0,6,0,0,50,0,0,0,0,0,0,''),
new Weapon ('Daggers','Organyx',248,8,0,10,0,25,23,32,10,10,10,10,0,''),
new Weapon ('Daggers','Orichalcurn',223,8,0,9,0,0,20,0,0,0,0,0,0,'Light-elemental'),
new Weapon ('Daggers','Plumes of the Vortex',320,8,0,60,31,31,31,22,0,0,0,0,0,'Deal 50% more damage with aerial attacks. Aerial warping MP cost halved. Always inflicts a critical hit'),
new Weapon ('Daggers','Plunderers',111,8,0,10,0,0,10,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Daggers','Plunderers II',183,8,0,15,0,0,30,0,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Daggers','Spelldaggers ',178,0,0,0,28,0,0,16,0,0,0,0,0,'Exploits any enemy\'s elemental weakness'),
new Weapon ('Daggers','Ulric\'s Kukris',234,13,282,24,8,15,48,20,5,7,4,19,21,'+1% to HP and MP recovery rates'),
new Weapon ('Daggers','Vigilantes',290,8,0,5,0,0,20,0,0,0,0,0,0,'5% chance to inflict Stop'),
new Weapon ('Daggers','Zwill Crossblade',345,8,0,5,0,0,25,0,0,0,0,0,0,'+80% damage at full HP'),
new Weapon ('Firearm','Abandon of the Vortex',399,100,0,60,31,31,31,22,0,0,0,0,0,'Strengthened enemy appendage breaking power. Deals 50% more damage to vulnerable targets. Always inflicts a critical hit'),
new Weapon ('Firearm','Calamity',53,2,0,0,0,0,0,5,0,0,0,0,0,'10% chance to inflict poison'),
new Weapon ('Firearm','Cerberus',156,2,0,0,0,0,0,6,0,0,0,0,0,'A rifle that can be manually-aimed in three different ways. It is only available to Noctis'),
new Weapon ('Firearm','Cocytus',45,2,0,0,0,0,0,7,0,0,0,0,0,'Inflicts Ice-based damage'),
new Weapon ('Firearm','Death Penalty',424,2,0,0,0,0,0,25,0,0,0,0,0,'1% chance to inflict Instant Death'),
new Weapon ('Firearm','Enforcer',243,2,0,0,0,0,0,19,0,0,0,0,0,'+10% Critical Rate'),
new Weapon ('Firearm','Executioner',363,2,0,0,0,0,0,22,0,0,0,0,0,'+50% damage to lone enemies within 65 feet'),
new Weapon ('Firearm','Flame Gun',210,2,0,0,0,0,0,16,0,0,0,0,0,'Inflicts Fire-based damage'),
new Weapon ('Firearm','Garuda\'s Abandon',193,2,0,6,22,24,29,20,0,0,0,0,0,'Strengthened enemy appendages breaking power'),
new Weapon ('Firearm','Handgun',32,2,0,0,0,0,0,4,0,0,0,0,0,'+80% breakage on body parts/appendages'),
new Weapon ('Firearm','Hyper Magnum',388,2,0,0,0,0,0,21,0,0,0,0,0,''),
new Weapon ('Firearm','Lion Heart',262,0,0,0,9,0,0,14,0,0,0,0,0,'When below 30% HP: Critical +5 and another +1.5 per each 1% missing HP below 30%'),
new Weapon ('Firearm','Mythril Pistol',96,2,0,0,0,0,42,11,0,0,0,0,0,''),
new Weapon ('Firearm','Quicksilver',222,2,0,0,0,0,0,18,0,0,0,0,0,'+80% breakage on body parts/appendages'),
new Weapon ('Firearm','Rebellion',167,2,0,0,0,0,0,15,0,0,0,0,0,'When below 30% HP: Critical +5 and another +1.5 per each 1% missing HP below 30%'),
new Weapon ('Firearm','Valiant',147,2,0,11,0,0,0,12,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Firearm','Valiant II',200,2,0,14,0,0,0,21,0,0,0,0,0,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Shield','Absorb Shield',83,1,0,10,0,30,0,0,0,0,0,0,12,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Shield','Absorb Shield II',167,1,0,15,0,38,0,0,0,0,0,0,12,'Absorbs elemental energy when dealing the finishing blow to an enemy'),
new Weapon ('Shield','Aegis Shield',292,1,0,0,0,55,0,0,0,0,0,0,11,'10% chance to nullify any incoming damage'),
new Weapon ('Shield','Black Prince',175,1,0,0,0,32,0,0,0,0,0,22,13,'+300 Magic for 5 seconds after taking Darkness damage'),
new Weapon ('Shield','Flame Shield',126,1,0,0,0,22,0,0,21,0,0,0,9,'+300 Strength for 5 seconds after taking Fire damage'),
new Weapon ('Shield','Hero Shield',144,1,0,0,0,25,0,0,0,0,0,0,22,'-30% damage from bullets'),
new Weapon ('Shield','Ice Shield',93,1,0,0,0,18,0,0,0,22,0,0,10,'+30% HP Recovery Rate for 5 seconds after taking Ice damage'),
new Weapon ('Shield','Kite Shield',52,1,0,0,0,15,0,0,0,0,0,0,8,'Recovers 50 HP per Blink'),
new Weapon ('Shield','Medjay Assassin\'s Shield',202,0,0,0,0,0,0,0,0,0,0,0,0,'+200 Strength for 3 seconds after Blocking'),
new Weapon ('Shield','Power Shield',176,1,0,0,0,6,0,0,0,0,0,0,11,''),
new Weapon ('Shield','Thunder Shield',111,1,0,0,0,21,0,0,0,0,24,0,12,'x4 Critical Rate for 5 seconds after taking Lightning damage'),
new Weapon ('Shield','Wizard Shield',225,1,0,0,0,34,99,0,0,0,0,0,12,''),
new Weapon ('Shield','Ziedrich',327,1,0,0,0,50,0,0,0,0,0,0,14,'+200 Strength for 3 seconds after Blinking'),
new Weapon ('Machinery','Auto Crossbow',61,2,12,0,0,0,0,0,0,0,0,0,10,'Fires a barrage of crossbow bolts'),
new Weapon ('Machinery','Auto Crossbow Plus',323,2,18,0,0,0,0,0,0,0,0,0,22,'Fires a barrage of crossbow bolts'),
new Weapon ('Machinery','Bioblaster',74,2,0,0,0,0,0,0,0,0,0,0,0,'Disperses a poisonous mist'),
new Weapon ('Machinery','Bioblaster Plus',339,2,0,0,0,0,0,0,0,0,0,0,0,'Disperses a poisonous mist'),
new Weapon ('Machinery','Circular Saw',90,2,0,0,0,9,0,0,0,0,0,0,7,'Inflicts repeated damage with spinning blades'),
new Weapon ('Machinery','Circular Saw Plus',356,2,0,0,0,21,0,0,0,0,0,0,12,'Inflicts repeated damage with spinning blades'),
new Weapon ('Machinery','Drillbreaker',181,2,7,0,0,5,0,0,0,0,0,0,8,'Inflicts repeated damage with piercing drills'),
new Weapon ('Machinery','Drillbreaker Plus',432,2,12,0,0,13,0,0,0,0,0,0,13,'Inflicts repeated damage with piercing drills'),
new Weapon ('Machinery','Flamebreath Cannon',286,2,0,0,0,0,0,0,0,0,0,0,0,'Spews a constant stream of elemental flames towards enemies, constantly draining MP'),
new Weapon ('Machinery','Gravity Well',108,2,0,0,0,0,8,0,0,0,0,0,0,'Pulls foes in with a gravity sphere'),
new Weapon ('Machinery','Gravity Well Plus',374,2,0,0,0,0,18,0,0,0,0,0,0,'Pulls foes in with a gravity sphere'),
new Weapon ('Machinery','Noiseblaster',153,2,0,0,0,0,0,11,0,0,0,0,0,'Emits a pummeling sonic wave over a wide area'),
new Weapon ('Machinery','Noiseblaster Plus',397,2,0,0,0,0,0,23,0,0,0,0,0,'Emits a pummeling sonic wave over a wide area'),
new Weapon ('Royal Arm','Axe of the Conqueror',483,2,0,0,60,-80,0,0,0,0,0,0,0,'A polearm that performs slow but powerful attacks, at the expense of defense and increased HP loss. Has a unique warp-strike, launching diagonally upward above the target then crashing down. Especially good at making enemies vulnerable'),
new Weapon ('Royal Arm','Blade of the Mystic',396,6,150,0,0,30,0,0,0,0,0,20,0,'A greatsword with the ability to briefly increase the wielder\'s Strength through a unique self-buff after swinging. The warp-strike fires three ranged energy beams before warping'),
new Weapon ('Royal Arm','Bow of the Clever',203,7,0,0,0,0,80,0,0,0,0,0,50,'A bow that fires piercing arrows, and can fire while moving in any direction. Its damage is based on the Magic stat. Warp-strike fires multiple arrows upward'),
new Weapon ('Royal Arm','Katana of the Warrior',361,3,0,0,0,0,0,100,25,25,25,-50,0,'A longsword that attacks quickly and relentlessly after startup. Can spam warp-strikes very quickly'),
new Weapon ('Royal Arm','Mace of the Fierce',334,2,300,0,0,0,0,0,0,0,0,0,-50,'A mace with the ability to deal grievous breakage to body parts/appendages'),
new Weapon ('Royal Arm','Scepter of the Pious',237,3,0,0,0,0,150,0,0,0,0,50,0,'A scepter that takes on the forms of several other royal arms to perform a variety of attacks. Its damage is based on the magic stat.'),
new Weapon ('Royal Arm','Shield of the Just',251,1,1000,-50,-100,200,0,0,10,10,10,10,10,'A shield that enables cover status when guarding, enabling HP recovery at the cost of MP. It can block normally unblockable attacks and negate most of the damage. The radius of its warp-strike is very wide'),
new Weapon ('Royal Arm','Star of the Rogue',177,2,0,0,0,0,0,0,20,20,20,0,0,'A shuriken capable of dealing multiple piercing ranged hits in rapid succession either on different targets or on the various body parts of a single target'),
new Weapon ('Royal Arm','Sword of the Father',141,6,0,0,100,0,100,0,0,0,0,0,0,'A sword that increases its wielder\'s Strength after Finishers. Drains less HP compared to other royal arms'),
new Weapon ('Royal Arm','Sword of the Tall',518,2,200,0,0,0,0,-30,-40,-40,-40,-40,0,'A greatsword with a chainsaw effect, dealing multiple hits with each blow. The warp-strike is 3 horizontal swings'),
new Weapon ('Royal Arm','Sword of the Wise',194,3,100,0,0,30,30,30,0,0,0,0,0,'A sword that performs short warp-strikes when near enemies'),
new Weapon ('Royal Arm','Swords of the Wanderer',153,4,0,0,0,50,0,50,0,0,0,0,0,'Dual swords functioning similar to daggers that can transform into a single weapon to deliver powerful blows'),
new Weapon ('Royal Arm','Trident of the Oracle',388,5,0,60,0,0,0,0,0,0,0,0,0,'A polearm that produces afterimages after attacks that deal damage to nearby foes'),
new Weapon ('Ring','Ring of the Lucii',0,0,0,0,0,0,0,0,0,0,0,0,0,'It lets the player use a special type of magic and cast three unique spells: Death, Holy and Alterna')];

//Food
var foodList = [new Food ('','','None',0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Ace Hunter\'s Schnitzel',400,120,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Anointed Allural Sea Bass',1000,200,0,150,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Battered Barramundi',500,100,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Beanball Croquettes',500,0,0,0,0,0,0,0,0,0,0,9,0,''),
new Food ('Recipeh','','Blazing Braised Gizzard',0,0,300,0,0,0,0,0,50,0,0,0,0,''),
new Food ('Recipeh','Ignis','Breaded Cutlet with Tomato',250,60,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Broiled King-on-a-Stick',1500,300,0,0,0,0,0,0,0,0,0,9,0,''),
new Food ('Recipeh','Prompto','Burly Bean Bowl',300,40,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Cannedwich',300,100,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Carp of the Diem',1500,100,0,0,0,0,0,0,0,0,0,1,0,''),
new Food ('Recipeh','','Charcuterie on Toast',200,80,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Chilled Food Tin',100,30,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Classic Tomato & Egg Stir-Fry',100,0,0,0,0,0,0,0,50,0,0,0,0,''),
new Food ('Recipeh','','Creamy Bisque',0,160,0,0,0,0,0,0,100,0,0,0,0,''),
new Food ('Recipeh','','Creamy Crustacean Omelette',400,100,0,100,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Creamy Fowl Sauté',400,80,0,0,0,0,0,0,0,0,0,1,0,''),
new Food ('Recipeh','','Creamy Milk Risotto',600,0,0,0,0,0,0,0,75,0,0,3,0,''),
new Food ('Recipeh','','Crispy Cheese Pizza',0,100,0,0,0,0,0,0,0,0,0,1,0,'Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','','Crispy Fish Fritterwich',800,160,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Crispy Zu Skewers',2000,0,0,0,0,0,0,0,0,0,80,0,0,''),
new Food ('Recipeh','','Croaker in Brown Sauce',600,150,0,0,0,0,0,0,0,0,0,3,0,''),
new Food ('Recipeh','','Croque Madame',0,30,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Crown City Dive-Style Dumplings',300,100,0,100,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Crown City Roast',3000,400,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Cup Noodles (Behemoth Round)',300,30,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Cup Noodles (Glimmering Zu Egg)',300,30,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Cup Noodles (Initial)',300,30,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Cup Noodles (Karlabos Carapace)',300,30,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Cup Noodles (Real Taste)',500,80,0,0,0,0,0,0,0,20,0,0,0,''),
new Food ('Recipeh','','Darkshells Marinières',0,100,0,0,0,0,0,0,0,0,0,0,0,'Technician: For Noctis: +100% to tech bar fill rate; for allies: +100% tech levelling rate and always perform critical versions of techniques'),
new Food ('Recipeh','','Devilfin Soup',0,200,0,0,0,0,0,0,125,0,0,0,0,''),
new Food ('Recipeh','Noctis','Dish and Chips',300,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Dry-Aged Tender Roast Stew',250,80,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Egg-Fried Crustacean Bowl',600,100,0,100,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Elegant Orange Cake',1000,0,250,0,400,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Excellent Oven-Roasted Trout',2000,350,0,0,0,50,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Ignis','Feast of the Divine',3000,0,0,0,0,0,100,0,0,0,0,9,0,''),
new Food ('Recipeh','','Fire-Sauce Fillet',600,200,0,200,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Ignis','Fisherman\'s Favorite Paella',600,120,0,0,0,0,0,0,25,0,0,0,0,''),
new Food ('Recipeh','','Fishsticks on Sticks',1000,0,0,0,0,0,0,0,0,0,50,0,0,''),
new Food ('Recipeh','','Flame-Roasted Toast',0,10,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Ignis','Fluffy Chiffon Cake',1000,0,200,0,200,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Free-Range Fowl over Rice',500,100,0,0,0,0,0,0,25,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Fried Frontier Skewer',500,0,0,0,0,0,0,0,0,0,30,0,0,''),
new Food ('Recipeh','','Fried Rookie on Rice',400,100,0,0,0,0,0,0,0,0,0,1,0,''),
new Food ('Recipeh','','Fried Tide Grouper',0,500,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Garden Curry',500,80,0,0,0,50,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Noctis','Garulessandwich',600,120,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Golden Chocobo Tart',0,0,0,0,0,0,0,0,0,0,0,0,0,'Chocobolster (Level 5): Chocobo\'s Stamina Depletion Rate reduced by 25%'),
new Food ('Recipeh','','Golden Egg Galette',400,120,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Golden Tail Soup',0,0,0,0,0,0,0,0,150,0,Infinity,0,0,''),
new Food ('Recipeh','Noctis','Grease Monkey\'s Schnitzel Sandwich',200,80,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Prompto','Green Soup Curry',800,160,0,0,0,70,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Grilled Mighty Barramundi',0,0,0,0,0,0,0,0,0,0,0,9,0,'Resistant: Immune to Fire, Ice, and Lightning elemental damage'),
new Food ('Recipeh','Noctis','Grilled Wild Barramundi',500,80,0,80,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Grilled Wild Trevally',100,70,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Hearty Cutlet on Rice',1500,250,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Hearty Stir-Fry',500,350,0,0,0,0,0,0,0,0,0,0,0,'Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','Ignis','Horntooth Meat Pie',600,160,0,160,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Hot Hopper Skewers',0,0,0,0,0,0,0,0,0,0,0,3,0,'Equalizer: +2% damage per level for level difference between attacker and higher-level target'),
new Food ('Recipeh','','Hunters\' Krazy Kebabs',800,200,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Karlabos Cream Croquettes',1000,200,0,0,0,0,0,0,50,0,0,0,0,''),
new Food ('Recipeh','Ignis','Kenny\'s Original Recipe',0,150,200,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Kenny\'s Secret Recipe',0,400,300,300,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Prompto','Keycatrich Salad',500,0,0,0,0,0,0,0,25,20,0,0,0,''),
new Food ('Recipeh','','King\'s Stew',2000,400,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Kupoberry Cheesecake',0,0,0,0,0,0,0,0,0,0,0,0,0,'Line Boost (Level 5): Fishing Line HP Damage Rate reduced by 25%'),
new Food ('Recipeh','','Lasagna al Forno',4000,0,0,0,0,0,0,0,0,100,0,0,0,'Resistant: Immune to Fire, Ice, and Lightning elemental damage'),
new Food ('Recipeh','','Legendary Herb-Grilled Whopper',0,500,0,-Infinity,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Lestallum Stewed Tripe',0,0,0,200,0,0,0,0,75,0,0,0,0,''),
new Food ('Recipeh','','Longwythe\'s Peak',4000,600,0,0,0,0,0,0,200,0,0,0,0,''),
new Food ('Recipeh','','Marrowshroom Chowder',0,0,0,0,0,0,0,0,0,0,Infinity,0,0,''),
new Food ('Recipeh','Prompto','Meat-and-Beet Bouillon',500,100,0,0,0,0,0,0,0,0,0,1,0,''),
new Food ('Recipeh','Prompto','Meldacio Meat Pie',500,150,0,150,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Noctis','Memory Lane Pastry',0,-Infinity,0,500,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Military Man\'s Banquet',0,160,0,0,0,0,0,0,100,0,0,0,0,''),
new Food ('Recipeh','','Miss Mercenary\'s Cassoulet',1000,120,0,0,0,0,0,0,0,0,0,0,0,'Technician: For Noctis: +100% to tech bar fill rate; for allies: +100% tech levelling rate and always perform critical versions of techniques'),
new Food ('Recipeh','','Moist Tomato Cake',1000,0,200,0,300,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Moogle Mousse with Kupoberry Sauce',1000,0,250,0,400,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Noctis','Mother & Child Rice Bowl',1000,0,0,0,0,0,0,0,0,30,0,0,50,''),
new Food ('Recipeh','','Multi-Meat Sandwich',100,0,0,0,0,0,0,0,0,20,0,0,0,''),
new Food ('Recipeh','','Mystery Meat Sushi',100,50,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Nebula Salmon Teriyaki',600,150,0,150,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Oak-Smoked Devil Gar',2000,0,0,0,0,0,0,0,0,0,0,0,0,'Resistant: Immune to Fire, Ice, and Lightning elemental damage'),
new Food ('Recipeh','','Oil-Drizzled Steamed Fish',200,60,0,50,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Packed Mushroom Stew',0,700,0,700,0,0,0,0,0,0,0,0,0,'Last Stand: Max HP reduced to 10% (truncated). Max HP possible is 999'),
new Food ('Recipeh','','Paella de Pollo',500,150,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Noctis','Papa Bird & Baby Bowl',1000,0,0,0,0,0,0,0,0,40,0,0,100,''),
new Food ('Recipeh','Prompto','Peppery Daggerquill Rice',250,80,0,0,0,0,0,0,25,0,0,0,0,''),
new Food ('Recipeh','Noctis','Pit Crew\'s Meat Wraps',750,180,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Plump \'n\' Pungent Tofu',0,500,0,500,0,0,0,0,0,10,0,0,0,'Last Stand: Max HP reduced to 10% (truncated). Max HP possible is 999'),
new Food ('Recipeh','Gladiolus','Prairie-Style Skewers',200,40,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Gladiolus','Prime Garula Rib',500,0,0,0,0,0,0,0,0,0,0,0,0,'Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','','Quillhorn Soup',0,100,0,0,0,0,0,0,75,0,0,0,0,''),
new Food ('Recipeh','','Robust Bean Soup',600,0,0,0,0,0,0,0,50,0,0,0,0,'Technician: For Noctis: +100% to tech bar fill rate; for allies: +100% tech levelling rate and always perform critical versions of techniques'),
new Food ('Recipeh','','Roc of Ravatogh Rice',1500,300,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Royal Banquet Canapé',0,0,0,0,0,0,0,0,0,50,0,0,0,'Prime: Strength +75%, Magic +75%'),
new Food ('Recipeh','','Royal Road Paella',1000,150,0,0,0,0,0,0,0,0,0,0,0,'Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','','Salmon-in-a-Suit',700,120,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Noctis','Scientia-Style Sushi',0,0,0,0,0,0,0,0,0,50,Infinity,0,0,'Prime: Strength +75%, Magic +75%. Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','','Sea Bass Sauté',1500,0,0,0,0,0,50,0,0,0,0,3,0,''),
new Food ('Recipeh','','Seasoned Midgardsormr',1000,350,0,0,0,0,0,0,0,0,0,0,0,'Equalizer: +2% damage per level for level difference between attacker and higher-level target'),
new Food ('Recipeh','','Semur Skewers',0,0,0,0,0,0,0,0,100,0,0,0,0,'Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','Gladiolus','Skewered Wild Trout',800,150,0,0,0,0,0,0,0,0,0,3,0,''),
new Food ('Recipeh','','Smoked Behemoth',1000,400,0,0,0,0,0,0,0,0,0,0,0,'Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','Prompto','Spicy Long-Bone Rib Steak',200,50,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Stacked Ham Sandwich',400,0,0,0,0,0,0,0,0,50,0,0,0,''),
new Food ('Recipeh','','Sweet & Spicy Cygillan Crab',200,100,0,0,0,70,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Sweet Saltwater Crustacean Curry',800,120,0,0,0,50,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Taelpar Harvest Galette',1000,0,0,120,400,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Thick \'n\' Juicy Steak',1000,0,0,0,0,0,0,0,0,0,0,0,0,'Endurance: Sprinting does not reduce stamina'),
new Food ('Recipeh','','Three-Mushroom Kebabs',800,150,0,0,0,0,0,0,0,0,0,9,0,''),
new Food ('Recipeh','','Tide Grouper Carpaccio',1000,300,0,0,0,0,0,0,0,0,0,6,0,''),
new Food ('Recipeh','','Toadsteak Drumsticks',500,120,0,100,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Toasty Rice Balls',50,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','Ignis','Tomalley-Filled Dumplings',300,100,0,200,0,0,0,0,0,0,0,0,0,''),
new Food ('Recipeh','','Triple Truffle Risotto',400,0,0,0,0,0,0,0,75,0,0,1,0,''),
new Food ('Recipeh','','Veggie Medley Stew',150,20,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Big Bread Buns',600,0,0,0,0,0,0,0,50,0,0,0,0,''),
new Food ('Restaurant','','Bird-Broth Rice with Curry',250,80,0,0,0,0,0,0,25,0,0,0,0,''),
new Food ('Restaurant','','Chili con Carne',50,20,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Chocobo Club Sandwich',400,80,0,0,0,0,0,0,0,0,0,3,0,''),
new Food ('Restaurant','','Fat Chocobo Triple-Decker',400,0,0,0,0,0,0,0,0,50,0,0,0,''),
new Food ('Restaurant','','Fettini di Cernia',1000,300,0,0,0,0,0,0,0,0,0,6,0,''),
new Food ('Restaurant','','Fine Caviar Canapé',0,0,0,0,0,0,0,0,0,50,0,0,0,'Prime: Strength +75%, Magic +75%'),
new Food ('Restaurant','','Galdin Gratin',500,50,0,50,0,0,0,0,0,10,0,0,0,''),
new Food ('Restaurant','','Golden Chocobo Tart',0,0,0,0,0,0,0,0,0,0,0,0,0,'Chocobolster (Level 5): Chocobo\'s Stamina Depletion Rate reduced by 25%'),
new Food ('Restaurant','','Green Smoothie',0,0,0,0,0,90,90,90,0,0,0,0,0,''),
new Food ('Restaurant','','Gysahl Chips',400,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Hammerhead Hot Sandwich',200,80,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Hunters\' Ragout',2000,400,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Jetty\'s',0,0,0,0,0,0,0,0,0,0,0,9,0,''),
new Food ('Restaurant','','Kenny\'s "Special" Salmon',0,400,300,300,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Kenny\'s Fries',300,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Kenny\'s Salmon',0,150,200,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Kupoberry Cheesecake',0,0,0,0,0,0,0,0,0,0,0,0,0,'Line Boost (Level 5): Fishing Line HP Damage Rate reduced by 25%'),
new Food ('Restaurant','','Leiden Jambalaya',200,150,0,0,0,0,0,0,25,0,0,0,0,''),
new Food ('Restaurant','','Maagho Lasagna',4000,0,0,0,0,0,0,0,0,100,0,0,0,''),
new Food ('Restaurant','','Mama Ezma\'s Meat Pie',500,150,0,150,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Meat & Onion Skewers',800,200,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Offal Stew',0,0,200,0,0,0,0,0,75,0,0,0,0,''),
new Food ('Restaurant','','Peanut Sauce Skewers',400,120,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Roti and Curry Plate',200,120,0,100,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Sea\'s Bounty Risotto',600,120,0,0,0,0,0,0,25,0,0,0,0,''),
new Food ('Restaurant','','Semur Skewers',0,0,0,0,0,0,0,0,100,0,0,0,0,''),
new Food ('Restaurant','','Set Dinner Course',500,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Sizzling Humongo-Steak',1000,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Smoked Dualhorn Shank',1000,400,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Soul Soup',0,120,0,0,200,70,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Soup & Bread',0,150,0,0,0,0,0,0,100,0,0,0,0,''),
new Food ('Restaurant','','Spicy Skewers',1000,350,0,0,0,0,0,0,0,0,0,0,0,'Equalizer: +2% damage per level for level difference between attacker and higher-level target'),
new Food ('Restaurant','','Steamed Crab with Rock Salt',0,0,0,0,0,0,0,0,0,0,0,0,0,'Resistant: Immune to Fire, Ice, and Lightning elemental damage'),
new Food ('Restaurant','','Tender Bird Fritters',400,120,0,0,0,50,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Tenebraen Berry Opera',0,-Infinity,0,500,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','Verinas Spuds',300,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Food ('Restaurant','','White Fish in Tomato Sauce',900,160,0,0,0,0,0,0,0,0,0,1,0,''),
new Food ('Restaurant','','Wood-Smoked Fish',1500,0,0,0,0,0,50,0,0,0,0,3,0,'')];

//Accessories
var accessoryList = [new Accessory ('All','None',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Adamantite Bangle',10000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Amethyst Bracelet',0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Amulet',0,0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Angel Earring',0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Anklet of the Gods',0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Anti-darkness Inners',0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,''),
new Accessory ('Noctis','Applied Sorcery',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Automatically uses Ether when MP falls to half'),
new Accessory ('Noctis','Armiger Accelerator',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Doubles Armiger bar increase rate. Prevents Tech bar from increasing'),
new Accessory ('All','Assist Suit',500,0,30,20,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Noctis','Auto-changer',100,0,30,30,0,0,0,0,0,0,0,0,0,0,0,0,'Automatically switches to the next clockwise weapon after each attack or combo'),
new Accessory ('All','Bandage',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Prevents bloodstains'),
new Accessory ('Gladiolus','Black Belt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'+50% damage to larger enemies'),
new Accessory ('All','Black Choker',0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,''),
new Accessory ('Noctis','Black Hood',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Enables auto-parries and automatic phasing through attacks'),
new Accessory ('All','Blitzer\'s Fanfare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'+2 AP when getting A+ in Time in non-training battle'),
new Accessory ('All','Blue Choker',0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,''),
new Accessory ('All','Blue Diamond Bracelet',0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Bronze Bangle',50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Bulletproof Suit',0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,''),
new Accessory ('All','Bulletproof Vest',0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,''),
new Accessory ('Prompto','Camera Strap',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'+5 to max photos per day'),
new Accessory ('All','Carbon Bangle',150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Celestriad',0,0,0,0,0,0,30,30,30,0,0,0,0,0,0,0,''),
new Accessory ('All','Centurion Bangle',1000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Champion\'s Anklet',0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Chobham',0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,''),
new Accessory ('All','Circlet',0,0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Crusader\'s Anklet',0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Dark Crest',0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,''),
new Accessory ('All','Dark Matter Bracelet',0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Diamond Bracelet',0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Earth Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,''),
new Accessory ('All','Emerald Bracelet',0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Emperor\'s Anklet',0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Fencer\'s Anklet',0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Noctis','Field Medicine',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Automatically uses potion when HP falls to half'),
new Accessory ('All','Fire Crest',0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Fireproof Inners',0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All but Noctis','Friendship Band',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Increases link-strike activation radius'),
new Accessory ('All','Garnet Bracelet',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Genji Gloves',0,0,0,0,0,0,0,0,30,30,30,0,0,0,0,0,''),
new Accessory ('All','Gigas Bangle',1500,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Gold Bangle',500,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Golden Hourglass',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,''),
new Accessory ('All','Green Choker',0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,''),
new Accessory ('All','Handkerchief',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Dirt accumulation -66%'),
new Accessory ('All','Heliodor Bracelet',0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Hypno Crown',0,0,0,0,300,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Ice Crest',0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Insulated Inners',0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,''),
new Accessory ('All','Iron Bangle',100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Key of Prosperity',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Drop Rate increases pitifully'),
new Accessory ('All','Knight\'s Anklet',0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Lavender Oil',0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Legatus Bangle',1200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Lightning Crest',0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,''),
new Accessory ('All','Magitek Shield',1000,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Magitek Suit',1000,0,70,50,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Magitek Suit V2',2000,0,100,70,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Gladiolus','Megaphone',0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,'HP Recovery Rate +10% for the whole party'),
new Accessory ('All','Mighty Guard',0,0,0,0,0,0,30,30,30,30,0,0,0,0,0,0,''),
new Accessory ('All','Moogle Charm',0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,''),
new Accessory ('All','Moon Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,''),
new Accessory ('All','Mystic Circlet',0,0,0,0,250,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Nixperience Band',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'XP not tallied when resting'),
new Accessory ('All','Onion Bangle',2500,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Oracle Card',0,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Oracle Earring',0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Pendulum',0,0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Platinum Bangle',700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Potpourri',0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Power Stone',0,0,0,0,0,60,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Purified Salt',0,0,0,0,0,120,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Rainbow Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,''),
new Accessory ('Noctis','Rare Metal',0,0,500,-500,0,0,0,0,0,0,0,0,0,0,0,0,'Attacks can break the damage limit, but reduces max HP to 10% (truncated), Max HP possible is 999'),
new Accessory ('All','Red Choker',0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,''),
new Accessory ('All','Ribbon',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,''),
new Accessory ('All','Ring of Resistance',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'All allies become immune to friendly fire from Elemancy'),
new Accessory ('Noctis','Robe of the Lord',0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,''),
new Accessory ('All','Ruby Bracelet',0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Rune Earring',0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Safety Bit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,''),
new Accessory ('All','Sapphire Bracelet',0,0,45,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Silver Bangle',300,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Soldier\'s Anklet',0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Noctis','Soul of Thamasa',0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Noctis','Stamina Badge',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Infinite Stamina'),
new Accessory ('All','Star Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,''),
new Accessory ('All','Stone Wall',0,0,0,0,0,0,30,30,0,0,30,0,0,0,0,0,''),
new Accessory ('All','Styling Gel',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Retains hairstyle in any weather'),
new Accessory ('All','Tactician\'s Fanfare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'+4 AP when getting A+ in Finesse in non-training battle'),
new Accessory ('All','Talisman',0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Prompto','Target Scope',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,' +50% damage to small enemies'),
new Accessory ('All','Tarot Card',0,0,0,0,0,150,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Noctis','Tech Turbocharger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Doubles Tech bar increase rate. Prevents Armiger bar from increasing'),
new Accessory ('All','Tempered Shield',800,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('Prompto','The Clever\'s Talisman',10,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,'Boosts Prompto\'s critical hit rate and Rapidus SMG never runs out of ammo'),
new Accessory ('Noctis','The Founder King\'s Sigil',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Enables Armiger Unleashed'),
new Accessory ('Ignis','The Good Chamberlain',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Ignis automatically uses hi-potion when the player-controlled character\'s HP falls to half'),
new Accessory ('Ignis','The Grand Chamberlain',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Ignis automatically uses an elixir when the player-controlled character\'s maximum HP falls to half'),
new Accessory ('Gladiolus','The Tall\'s Talisman',10,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,'Increases the growth rate of Valor gauge'),
new Accessory ('Ignis','The Wanderer\'s Talisman',10,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,'Increases growth rate of Total Clarity gauge'),
new Accessory ('Noctis','Thieves\' Way',0,0,0,0,0,0,0,0,0,0,0,0,0,-20,0,0,''),
new Accessory ('Noctis','Thieves\' Way II',0,0,0,0,0,0,0,0,0,0,0,0,0,-40,0,0,''),
new Accessory ('All','Titanium Bangle',200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Towel',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Dirt accumulation -100%'),
new Accessory ('All','Trihead Heart',1000,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Warm Inners',0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Warrior\'s Anklet',0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','Warrior\'s Fanfare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'+1 AP when getting A+ in Offense in non-training battle'),
new Accessory ('All','White Choker',0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,''),
new Accessory ('All','White Sage',0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,''),
new Accessory ('All','White Sneakers',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Dirt accumulation +100%')];

//Attire
var attireList = [new Attire ('All','None',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','Ardyn\'s Ensemble',0,0,0,0,50,0,0,0,0,100,0,0,0,0,0,'Taking Dark damage temporarily boosts Noctis\'s Str by +100'),
new Attire ('All','Casual Outfit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,''),
new Attire ('All','Casual Outfit (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,''),
new Attire ('Noctis','Choco-Mog Tee',0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,''),
new Attire ('Noctis','Comrades t-shirt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Increases maximum HP.'),
new Attire ('Ignis','Crownsguard Casual',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('All but Noctis','Crownsguard Fatigues',20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('All but Noctis','Crownsguard Fatigues (No Jacket)',0,0,20,0,20,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','Episode Gladiolus t-shirt',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','Episode Ignis t-shirt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Increases critical hit rate'),
new Attire ('Noctis','Episode Prompto t-shirt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Accelerates HP recovery rate'),
new Attire ('Noctis','Festive Ensemble',20,20,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('Ignis','Glamour Prism: Elezen',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,''),
new Attire ('Prompto','Glamour Prism: Hyur',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','Glamour Prism: Miqo\'te',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,''),
new Attire ('Gladiolus','Glamour Prism: Roegadyn ',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','HEV Suit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','King\'s Knight Tee',0,0,0,0,0,0,25,25,25,25,25,0,0,0,0,''),
new Attire ('Noctis','Kingly Raiment',0,0,0,30,0,30,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','Kingly Raiment (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,3,6,0,0,''),
new Attire ('All but Noctis','Kingsglaive Garb',0,0,0,30,0,30,0,0,0,0,0,0,0,0,0,''),
new Attire ('All but Noctis','Kingsglaive Garb (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,''),
new Attire ('All','Magitek Exosuit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Makes the wearer invincible for a time.'),
new Attire ('Noctis','Master Assassin\'s Robes',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Reduces the MP cost of Phasing'),
new Attire ('Noctis','Master Assassin\'s Robes (Hooded)',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Reduces the MP cost of Phasing'),
new Attire ('All','Medjay Assassin\'s Robe',0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,''),
new Attire ('Noctis','Medjay Assassin\'s Robe (Hooded)',0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,''),
new Attire ('Noctis','Noodle Helmet',0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,''),
new Attire ('Noctis','Prince\'s Fatigues',20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','Prince\'s Fatigues (No Jacket)',0,0,20,0,20,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('Noctis','Royal Raiment',25,25,0,0,0,0,0,0,0,0,0,0,6,0,0,''),
new Attire ('Noctis','Royal Raiment (No Jacket)',0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,'Grants infinite stamina'),
new Attire ('Gladiolus','Rugged Attire',0,0,30,-30,0,0,0,0,0,0,0,0,0,0,0,'Boosts item drop rate'),
new Attire ('Noctis','The Sims™ 4 Llama Suit',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,''),
new Attire ('All','Thermal Suit',20,0,0,0,0,0,0,0,0,0,0,0,0,0,7,'Immune to Fire elemental damage'),
new Attire ('Noctis','Trendy Outfit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,''),
new Attire ('Noctis','Trendy Outfit (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,''),
new Attire ('Prompto','Tundra Attire',20,0,0,20,0,0,-30,60,0,0,0,0,0,0,0,''),
new Attire ('Ignis','Unkempt Crownsguard',0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,'')];


//--------------------------------------------------------------------
//Fill up dropdown menus
//--------------------------------------------------------------------

//modify later to account for all chocobros

//Attire dropdown menu
for (let i = 1; i < attireList.length; i++) {
    if (attireList[i].equip == 'Noctis' || attireList[i].equip == 'All') {
        document.getElementById('attire').innerHTML += '\n<option value="' +
            i + '">' + attireList[i].name + '</option>';
    }
}

//Food dropdown menu
var currentType = '';
for (let i = 1; i < foodList.length; i++) {
    if (currentType != foodList[i].type) {
        document.getElementById('food').innerHTML += '<optgroup label="' +
            foodList[i].type + '"></optgroup>';
        currentType = foodList[i].type;
    }
    document.getElementById('food').innerHTML += '\n<option value="' +
        i + '">' + foodList[i].name + '</option>';
}

//Weapons dropdown menu
for (let i = 1; i < weaponList.length; i++) {
    if (currentType != weaponList[i].type) {
        document.getElementById('weapon1').innerHTML += '<optgroup label="' +
            weaponList[i].type + '"></optgroup>';
        document.getElementById('weapon2').innerHTML += '<optgroup label="' +
            weaponList[i].type + '"></optgroup>';
        document.getElementById('weapon3').innerHTML += '<optgroup label="' +
            weaponList[i].type + '"></optgroup>';
        document.getElementById('weapon4').innerHTML += '<optgroup label="' +
            weaponList[i].type + '"></optgroup>';
        currentType = weaponList[i].type;
    }
    
    document.getElementById('weapon1').innerHTML += '\n<option value="' + 
        i + '">' + weaponList[i].name + '</option>';
    document.getElementById('weapon2').innerHTML += '\n<option value="' + 
        i + '">' + weaponList[i].name + '</option>';
    document.getElementById('weapon3').innerHTML += '\n<option value="' + 
        i + '">' + weaponList[i].name + '</option>';
    document.getElementById('weapon4').innerHTML += '\n<option value="' + 
        i + '">' + weaponList[i].name + '</option>';
}

//Accessories dropdown menu
for (let i = 1; i < accessoryList.length; i++) {
    if (accessoryList[i].equip == 'Noctis' || accessoryList[i].equip == 'All') {
        document.getElementById('accessory1').innerHTML += '\n<option value="' + 
            i + '">' + accessoryList[i].name + '</option>';
        document.getElementById('accessory2').innerHTML += '\n<option value="' + 
            i + '">' + accessoryList[i].name + '</option>';
        document.getElementById('accessory3').innerHTML += '\n<option value="' + 
            i + '">' + accessoryList[i].name + '</option>';
    }
}

//--------------------------------------------------------------------
//Calculations
//--------------------------------------------------------------------

//Limit the value to some lower and higher bound.
function limit(someNumber, lowerBound, higherBound) {
    if (Number.isFinite(lowerBound) && someNumber < lowerBound) {
        return lowerBound;
    }
    else if (Number.isFinite(higherBound) && someNumber > higherBound) {
        return higherBound;
    }
    else
        return someNumber;
}

//Update the entire right-hand side of the screen.
function updateData() {

    const baseStats = window.noctisStats[document.getElementById('level').value - 1];
    const attire = window.attireList[document.getElementById('attire').value];
    const food = window.foodList[document.getElementById('food').value];

    const weapon = [window.weaponList[document.getElementById('weapon1').value],
        window.weaponList[document.getElementById('weapon2').value],
        window.weaponList[document.getElementById('weapon3').value],
        window.weaponList[document.getElementById('weapon4').value]];

    const accessory = [window.accessoryList[document.getElementById('accessory1').value],
        window.accessoryList[document.getElementById('accessory2').value],
        window.accessoryList[document.getElementById('accessory3').value]];

    //Read radio buttons for selected one.
    const equippedRadios = document.getElementsByName('equipped');
    let equipped;
    for (let i = 0; i < equippedRadios.length; i++) {
        if (equippedRadios[i].checked) {
            equipped = i;
            break;
        }
    }

    const healthLevel = document.getElementById('healthLevel').value;
    const experimagic = +document.getElementById('experimagic').checked;
    const strLevel = +document.getElementById('strLevel').checked;
    const vitLevel = +document.getElementById('vitLevel').checked;
    const magLevel = document.getElementById('magLevel').value;
    const sprLevel = +document.getElementById('sprLevel').checked;

    let hp, mp, str, vit, mag, spr, fire, ice, lightning, dark, shot, attack, defense;
    let hpDiff, fireDiff, iceDiff, lightningDiff, darkDiff, shotDiff;
    let tdaPhysical, tdaMagical, tdaFire, tdaIce, tdaLightning, tdaDark, tdaShot;


    //Start computing
    hp = Math.floor(baseStats.hp * (1 + attire.hpBonus)) + Math.round((1 + attire.hpBonus) *
        (weapon[0].hp + weapon[1].hp + weapon[2].hp + weapon[3].hp + accessory[0].hp +
        accessory[1].hp + accessory[2].hp + (healthLevel * baseStats.level))) + food.hp;
    hp = limit(hp,1,9999);

    mp = Math.floor(baseStats.mp * (1 + attire.mpBonus)) + Math.round((1 + attire.mpBonus) *
        (weapon[0].mp + weapon[1].mp + weapon[2].mp + weapon[3].mp + accessory[0].mp +
        accessory[1].mp + accessory[2].mp + (experimagic * baseStats.level)));
    mp = limit(mp,1,999);

    str = Math.floor(baseStats.str * (1 + attire.strBonus)) + Math.round((1 + attire.strBonus) *
        (weapon[0].str + weapon[1].str + weapon[2].str + weapon[3].str + accessory[0].str +
        accessory[1].str + accessory[2].str + (strLevel * baseStats.level))) + food.str;

    vit = Math.floor(baseStats.vit * (1 + attire.vitBonus)) + Math.round((1 + attire.vitBonus) *
        (weapon[0].vit + weapon[1].vit + weapon[2].vit + weapon[3].vit + accessory[0].vit +
        accessory[1].vit + accessory[2].vit + (vitLevel * baseStats.level))) + food.vit;

    mag = Math.floor(baseStats.mag * (1 + attire.magBonus)) + Math.round((1 + attire.magBonus) *
        (weapon[0].mag + weapon[1].mag + weapon[2].mag + weapon[3].mag + accessory[0].mag +
        accessory[1].mag + accessory[2].mag + (magLevel * baseStats.level))) + food.mag;

    spr = Math.floor(baseStats.spr * (1 + attire.sprBonus)) + Math.round((1 + attire.sprBonus) *
        (weapon[0].spr + weapon[1].spr + weapon[2].spr + weapon[3].spr + accessory[0].spr +
        accessory[1].spr + accessory[2].spr + (sprLevel * baseStats.level))) + food.spr;

    fire = attire.fire + weapon[0].fire + weapon[1].fire + weapon[2].fire + weapon[3].fire +
        accessory[0].fire + accessory[1].fire + accessory[2].fire + food.fire;
    fire = limit(fire,0,100);

    ice = attire.ice + weapon[0].ice + weapon[1].ice + weapon[2].ice + weapon[3].ice +
        accessory[0].ice + accessory[1].ice + accessory[2].ice + food.ice;
    ice = limit(ice,0,100);

    lightning = attire.lightning + weapon[0].lightning + weapon[1].lightning +
        weapon[2].lightning + weapon[3].lightning + accessory[0].lightning +
        accessory[1].lightning + accessory[2].lightning + food.lightning;
    lightning = limit(lightning,0,100);

    dark = attire.dark + weapon[0].dark + weapon[1].dark + weapon[2].dark + weapon[3].dark +
        accessory[0].dark + accessory[1].dark + accessory[2].dark;
    dark = limit(dark,0,100);

    shot = attire.shot + weapon[0].shot + weapon[1].shot + weapon[2].shot + weapon[3].shot +
        accessory[0].shot + accessory[1].shot + accessory[2].shot;
    shot = limit(shot,0,100);

    attack = weapon[equipped].attack + str;
    defense = vit;

    tdaPhysical = hp * (1 + vit/100);
    tdaMagical = hp * (1 + spr/100);
    tdaFire = tdaMagical * (1 + fire/100);
    tdaIce = tdaMagical * (1 + ice/100);
    tdaLightning = tdaMagical * (1 + lightning/100);
    tdaDark = tdaMagical * (1 + dark/100);
    tdaShot = tdaMagical * (1 + shot/100);


    //Dump data on screen

    //TDA
    document.getElementById('TDAPhysical').innerHTML = Math.round(tdaPhysical).toString();
    document.getElementById('TDAMagical').innerHTML = Math.round(tdaMagical).toString();
    document.getElementById('TDAFire').innerHTML = Math.round(tdaFire).toString();
    document.getElementById('TDAIce').innerHTML = Math.round(tdaIce).toString();
    document.getElementById('TDALightning').innerHTML = Math.round(tdaLightning).toString();
    document.getElementById('TDADark').innerHTML = Math.round(tdaDark).toString();
    document.getElementById('TDAShot').innerHTML = Math.round(tdaShot).toString();

    //Stats
    document.getElementById('StatsHP').innerHTML = hp.toString();
    document.getElementById('StatsMP').innerHTML = mp.toString();
    document.getElementById('StatsAttack').innerHTML = attack.toString();
    document.getElementById('StatsDefense').innerHTML = defense.toString();
    document.getElementById('StatsSTR').innerHTML = str.toString();
    document.getElementById('StatsVIT').innerHTML = vit.toString();
    document.getElementById('StatsMAG').innerHTML = mag.toString();
    document.getElementById('StatsSPR').innerHTML = spr.toString();
    document.getElementById('StatsFire').innerHTML = fire.toString() + '%';
    document.getElementById('StatsIce').innerHTML = ice.toString() + '%';
    document.getElementById('StatsLightning').innerHTML = lightning.toString() + '%';
    document.getElementById('StatsDark').innerHTML = dark.toString() + '%';
    document.getElementById('StatsShot').innerHTML = shot.toString() + '%';

    //Notes
    document.getElementById('Notes').innerHTML = '';
}


updateData();//Run once to fill up result screen with initial data.

//Add event listeners
document.getElementById('level').addEventListener('change', updateData);
document.getElementById('attire').addEventListener('change', updateData);
document.getElementById('food').addEventListener('change', updateData);

document.getElementById('weapon1').addEventListener('change', updateData);
document.getElementById('weapon2').addEventListener('change', updateData);
document.getElementById('weapon3').addEventListener('change', updateData);
document.getElementById('weapon4').addEventListener('change', updateData);

let radios = document.getElementsByName('equipped');
for (const i in radios) {
    radios[i].addEventListener('change', updateData);
}

document.getElementById('accessory1').addEventListener('change', updateData);
document.getElementById('accessory2').addEventListener('change', updateData);
document.getElementById('accessory3').addEventListener('change', updateData);

document.getElementById('healthLevel').addEventListener('change', updateData);
document.getElementById('experimagic').addEventListener('change', updateData);
document.getElementById('strLevel').addEventListener('change', updateData);
document.getElementById('vitLevel').addEventListener('change', updateData);
document.getElementById('magLevel').addEventListener('change', updateData);
document.getElementById('sprLevel').addEventListener('change', updateData);