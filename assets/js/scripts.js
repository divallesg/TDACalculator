"use strict";//Cause that's how I roll.

//--------------------------------------------------------------------
//Helper functions. Very nice! :)
//--------------------------------------------------------------------

//Limit the value to some lower and higher bound, otherwise return the same number.
function limit(someNumber, lowerBound, higherBound) {
    if (someNumber < lowerBound)
    	return lowerBound;
    else if (someNumber > higherBound)
    	return higherBound;
    else
    	return someNumber;
}

//Receives a number and applies a plus sign if it's 0 or positive. Returns otherwise.
function addPlusSign(someValue) {
	if (someValue >= 0)
		return '+' + someValue;
	else
		return someValue.toString();
}

//Replaces an infinite value with the infinity symbol, keeping the sign.
function replaceWithInfSymbol(someValue) {
	if (someValue == Infinity)
		return '∞';
	else if (someValue == -Infinity)
		return '-∞';
	else
		return someValue.toString();
}

//Check if the character can equip the given Attire.
//Not used inside for-loops cause it would only worsen performance.
function canEquipAttire (charName, attireEquip) {
	if (charName == 'Noctis') {
		if (attireEquip == charName || attireEquip == 'All')
			return true;
		else
			return false;
	}
	else {//If not Noctis.
		if (attireEquip == charName || attireEquip == 'All' ||
			attireEquip == 'All but Noctis')
			return true;
		else
			return false;
	}
}

//Check if the character can equip the given Weapon at the given weapon slot.
//Not used inside for-loops cause it would only worsen performance.
function canEquipWeapon (charEquipType, weapon) {
	if (charEquipType == '')//Noctis case, can use all weapons.
		return true;
	else if (charEquipType == weapon.type)
		if (weapon.name == 'Cerberus')
			return false;//Special case, Prompto can't use Cerberus.
		else
			return true;
	else
		return false;
}

//Check if the character can equip the given Attire.
//Not used inside for-loops cause it would only worsen performance.
function canEquipAccessory (charName, accessoryEquip) {
	if (charName == 'Noctis') {
		if (accessoryEquip == charName || accessoryEquip == 'All')
			return true;
		else
			return false;
	}
	else {//If not Noctis.
		if (accessoryEquip == charName || accessoryEquip == 'All' ||
			accessoryEquip == 'All but Noctis')
			return true;
		else
			return false;
	}
}

//Takes the string of a number and returns a string with commas inserted every 3 digits.
function insertCommas (someNumberString) {
	return someNumberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//If the limited value differs from the true value, make the displayed result have both values
//separated by parentheses.
function displayDifferenceIfAny (valueLimited, actualValue, additionalSymbol) {
	if (actualValue != valueLimited) {
		return valueLimited + additionalSymbol + ' (' + replaceWithInfSymbol(actualValue) + ')';
	}
	else {
		return valueLimited + additionalSymbol;
	}
}

//Format the string to include the amount of leftover XP after reaching level 120.
function displayXpDifferenceIfAny (xp) {
	if (xp < 0) {
		return '0 (' + insertCommas((-xp).toString()) + ' left over)';
	}
	else {
		return insertCommas(xp.toString());
	}
}

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

class Character {
	constructor(name, hprec, mprec, weaponType1, weaponType2,baseStats) {         
		this.name = name;
		this.hprec = hprec;
		this.mprec = mprec;
		this.weaponType1 = weaponType1;
		this.weaponType2 = weaponType2;
		this.baseStats = baseStats;
	}
}

class Attire {    
    constructor(equip,name,hpBonus,mpBonus,strBonus,vitBonus,magBonus,sprBonus,fire,ice,lightning,
    	dark,shot,hprec,mprec,crit,phase,itemDrop,immunity,effect) {
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
        this.crit = crit;
        this.phase = phase;
        this.itemDrop = itemDrop;
        this.immunity = immunity;
        this.effect = effect;
    }
	getTooltipMessage() {
		let tooltipMessage = '';
		if (this.hpBonus != 0)
	    	tooltipMessage += 'HP: ' + addPlusSign(this.hpBonus) + '% | ';
	    if (this.hprec != 0)
	    	tooltipMessage += 'HPRec: ' + this.hprec + ' | ';
	    if (this.mpBonus != 0)
	    	tooltipMessage += 'MP: ' + addPlusSign(this.mpBonus) + '% | ';
	    if (this.mprec != 0)
	    	tooltipMessage += 'MPRec: ' + this.mprec + ' | ';
	   	if (this.strBonus != 0)
	   		tooltipMessage += 'STR: ' + addPlusSign(this.strBonus) + '% | ';
	   	if (this.vitBonus != 0)
	   		tooltipMessage += 'VIT: ' + this.vitBonus + '% | ';//TODO
	   	if (this.magBonus != 0)
	   		tooltipMessage += 'MAG: ' + addPlusSign(this.magBonus) + '% | ';
	   	if (this.sprBonus != 0)
	   		tooltipMessage += 'SPR: ' + addPlusSign(this.sprBonus) + '% | ';
	   	if (this.crit != 0)
	   		tooltipMessage += 'Crit: ' + this.crit + ' | ';
	   	if (this.fire != 0)
	   		tooltipMessage += 'FireRes: ' + this.fire + ' | ';
	   	if (this.ice != 0)
	   		tooltipMessage += 'IceRes: ' + this.ice + ' | ';
	   	if (this.lightning != 0)
	   		tooltipMessage += 'LightningRes: ' + this.lightning + ' | ';
	   	if (this.dark != 0)
	   		tooltipMessage += 'DarkRes: ' + this.dark + ' | ';
	   	if (this.shot != 0)
	   		tooltipMessage += 'ShotRes: ' + this.shot + ' | ';
	   	if (this.phase != 0)
	   		tooltipMessage += 'Phase Cost: ' + this.phase + ' | ';
	   	if (this.itemDrop != 0)
	   		tooltipMessage += 'Item Drop: ' + this.itemDrop + ' | ';
	   	if (this.immunity != '')
	   		tooltipMessage += 'Immunities: ' + this.immunity + ' | ';
	   	if (this.effect != '')
	   		tooltipMessage += 'Extra Effect: ' + this.effect + ' | ';

	   	tooltipMessage = tooltipMessage.slice(0,-3);//Remove the last spaces and pipe symbol.

		return tooltipMessage;
	}
}

class Food {    
    constructor(type,favorite,name,hp,str,vit,mag,spr,fire,ice,lightning,hprec,xpBonus,crit,
    	itemDrop,immunity,effect,description) {
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
        this.xpBonus = xpBonus;
        this.crit = crit;
		this.itemDrop = itemDrop;
        this.immunity = immunity;
        this.effect = effect;
        this.description = description;
    }
    getTooltipMessage() {
		let tooltipMessage = '';
		if (this.hp != 0)
	    	tooltipMessage += 'HP: ' + this.hp + ' | ';
	    if (this.hprec != 0)
	    	tooltipMessage += 'HPRec: ' + this.hprec + ' | ';
	   	if (this.str != 0)
	   		tooltipMessage += 'STR: ' + replaceWithInfSymbol(this.str) + ' | ';
	   	if (this.vit != 0)
	   		tooltipMessage += 'VIT: ' + this.vit + ' | ';
	   	if (this.mag != 0)
	   		tooltipMessage += 'MAG: ' + replaceWithInfSymbol(this.mag) + ' | ';
	   	if (this.spr != 0)
	   		tooltipMessage += 'SPR: ' + this.spr + ' | ';
	   	if (this.crit != 0)
	   		tooltipMessage += 'Crit: ' + this.crit + ' | ';
	   	if (this.fire != 0)
	   		tooltipMessage += 'FireRes: ' + this.fire + ' | ';
	   	if (this.ice != 0)
	   		tooltipMessage += 'IceRes: ' + this.ice + ' | ';
	   	if (this.lightning != 0)
	   		tooltipMessage += 'LightningRes: ' + this.lightning + ' | ';
	   	if (this.favorite != 0)
	   		tooltipMessage += 'Favorite of: ' + this.favorite + ' | ';
	   	if (this.xpBonus != 0)
	   		tooltipMessage += 'XP Bonus: ' + this.xpBonus + ' | ';
	   	if (this.itemDrop != 0)
	   		tooltipMessage += 'Item Drop: ' + this.itemDrop + ' | ';
	   	if (this.immunity != '')
	   		tooltipMessage += 'Immunities: ' + this.immunity + ' | ';
	   	if (this.description != '')
	   		tooltipMessage += 'Extra Effect: ' + this.description + ' | ';

	   	tooltipMessage = tooltipMessage.slice(0,-3);//Remove the last spaces and pipe symbol.

		return tooltipMessage;
	}
}

class Weapon {
    constructor(type,name,attack,crit,hp,mp,str,vit,mag,spr,fire,ice,lightning,dark,shot,hprec,
    	element,effect) {
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
        this.hprec = hprec;
        this.element = element;
        this.effect = effect;
    }
    getTooltipMessage() {
		let tooltipMessage = '';
		if (this.attack != 0)
	    	tooltipMessage += 'ATK: ' + this.attack + ' | ';
	    if (this.crit != 0)
	   		tooltipMessage += 'Crit: ' + this.crit + ' | ';
	   	if (this.hp != 0)
	    	tooltipMessage += 'HP: ' + this.hp + ' | ';
	    if (this.hprec != 0)
	    	tooltipMessage += 'HPRec: ' + this.hprec + ' | ';
	    if (this.mp != 0)
	    	tooltipMessage += 'MP: ' + this.mp + ' | ';
	   	if (this.str != 0)
	   		tooltipMessage += 'STR: ' + this.str + ' | ';
	   	if (this.vit != 0)
	   		tooltipMessage += 'VIT: ' + this.vit + ' | ';
	   	if (this.mag != 0)
	   		tooltipMessage += 'MAG: ' + this.mag + ' | ';
	   	if (this.spr != 0)
	   		tooltipMessage += 'SPR: ' + this.spr + ' | ';
	   	if (this.fire != 0)
	   		tooltipMessage += 'FireRes: ' + this.fire + ' | ';
	   	if (this.ice != 0)
	   		tooltipMessage += 'IceRes: ' + this.ice + ' | ';
	   	if (this.lightning != 0)
	   		tooltipMessage += 'LightningRes: ' + this.lightning + ' | ';
	   	if (this.dark != 0)
	   		tooltipMessage += 'DarkRes: ' + this.dark + ' | ';
	   	if (this.shot != 0)
	   		tooltipMessage += 'ShotRes: ' + this.shot + ' | ';
	   	if (this.element != '')
	   		tooltipMessage += 'Elemental Damage: ' + this.element + ' | ';
	   	if (this.effect != '')
	   		tooltipMessage += 'Extra Effect: ' + this.effect + ' | ';

	   	tooltipMessage = tooltipMessage.slice(0,-3);//Remove the last spaces and pipe symbol.

		return tooltipMessage;
	}
}

class Accessory {    
    constructor(category,equip,name,hp,mp,str,vit,mag,spr,fire,ice,lightning,dark,shot,hprec,mprec,
    	xpBonus,crit,phase,itemDrop,immunity,effect) {
    	this.category = category;
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
        this.xpBonus = xpBonus;
        this.crit = crit;
        this.phase = phase;
        this.itemDrop = itemDrop;
        this.immunity = immunity;
        this.effect = effect;
    }
    getTooltipMessage() {
		let tooltipMessage = '';
	   	if (this.hp != 0)
	    	tooltipMessage += 'HP: ' + this.hp + ' | ';
	    if (this.hprec != 0)
	    	tooltipMessage += 'HPRec: ' + this.hprec + ' | ';
	    if (this.mp != 0)
	    	tooltipMessage += 'MP: ' + this.mp + ' | ';
	    if (this.mprec != 0)
	    	tooltipMessage += 'MPRec: ' + this.mprec + ' | ';
	   	if (this.str != 0)
	   		tooltipMessage += 'STR: ' + this.str + ' | ';
	   	if (this.vit != 0)
	   		tooltipMessage += 'VIT: ' + this.vit + ' | ';
	   	if (this.mag != 0)
	   		tooltipMessage += 'MAG: ' + this.mag + ' | ';
	   	if (this.spr != 0)
	   		tooltipMessage += 'SPR: ' + this.spr + ' | ';
	   	if (this.fire != 0)
	   		tooltipMessage += 'FireRes: ' + this.fire + ' | ';
	   	if (this.ice != 0)
	   		tooltipMessage += 'IceRes: ' + this.ice + ' | ';
	   	if (this.lightning != 0)
	   		tooltipMessage += 'LightningRes: ' + this.lightning + ' | ';
	   	if (this.dark != 0)
	   		tooltipMessage += 'DarkRes: ' + this.dark + ' | ';
	   	if (this.shot != 0)
	   		tooltipMessage += 'ShotRes: ' + this.shot + ' | ';
	    if (this.crit != 0)
	   		tooltipMessage += 'Crit: ' + this.crit + ' | ';
	   	if (this.xpBonus != 0)
	   		tooltipMessage += 'XP Bonus: ' + this.xpBonus + ' | ';
	   	if (this.phase != 0)
	   		tooltipMessage += 'Phase Cost: ' + this.phase + ' | ';
	   	if (this.itemDrop != 0)
	   		tooltipMessage += 'Item Drop: ' + this.itemDrop + ' | ';
	   	if (this.immunity != '')
	   		tooltipMessage += 'Immunities: ' + this.immunity + ' | ';
	   	if (this.effect != '')
	   		tooltipMessage += 'Extra Effect: ' + this.effect + ' | ';

	   	tooltipMessage = tooltipMessage.slice(0,-3);//Remove the last spaces and pipe symbol.

		return tooltipMessage;
	}
}

//--------------------------------------------------------------------
//Data
//--------------------------------------------------------------------

//Experience required for level up at current level - 1.
const xpRequired = [99,165,264,396,462,627,759,891,1023,1221,1386,1584,1815,2013,2244,2475,2739,
	3036,3300,3630,3927,4290,4620,5016,5379,5808,6237,6666,7128,7656,8118,8646,9207,9735,10329,
	10956,11583,12210,12903,13563,14322,15048,15840,16632,17457,18249,19173,20064,20988,21912,22935,
	23892,24948,26037,27093,28215,29337,30558,31779,33000,34254,35541,36927,38280,39699,41118,42603,
	44121,45606,47190,48774,50457,52140,53856,55572,57354,59235,61083,62964,64911,66891,68838,70917,
	73062,75207,77352,79596,81873,84117,86493,88869,91311,93786,96294,98709,101085,103417,105699,
	1079256,1100909,1121873,1142123,1161590,1180227,1197974,1214783,1230614,1245410,1259141,1271764,
	1284382,1296990,1309602,1322202,1334792,1347367,1359920,1372462,1384971];


//Character stats
const charList = [new Character ('Noctis',4,20,'','',[
	new BaseStat (1,325,75,19,22,63,40),
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
	new BaseStat (120,4346,249,379,157,415,209)]),
	
	//Gladiolus
	new Character ('Gladiolus',4,0,'Greatsword','Shield',[
	new BaseStat (1,534,100,27,40,7,36),
	new BaseStat (2,542,100,27,41,8,37),
	new BaseStat (3,552,100,28,43,9,38),
	new BaseStat (4,562,100,28,44,10,39),
	new BaseStat (5,574,100,30,45,11,39),
	new BaseStat (6,588,100,31,46,12,40),
	new BaseStat (7,602,100,32,48,12,41),
	new BaseStat (8,617,100,34,49,13,41),
	new BaseStat (9,632,100,36,50,14,42),
	new BaseStat (10,648,100,37,51,14,43),
	new BaseStat (11,666,100,39,53,15,43),
	new BaseStat (12,685,100,40,54,16,44),
	new BaseStat (13,705,100,42,55,16,45),
	new BaseStat (14,728,100,44,56,17,45),
	new BaseStat (15,753,100,45,58,17,46),
	new BaseStat (16,778,100,48,59,18,46),
	new BaseStat (17,803,100,49,60,19,47),
	new BaseStat (18,833,100,51,62,20,47),
	new BaseStat (19,867,100,52,63,20,48),
	new BaseStat (20,901,100,55,64,20,48),
	new BaseStat (21,938,100,56,65,21,49),
	new BaseStat (22,979,100,58,67,21,49),
	new BaseStat (23,1023,100,61,68,22,50),
	new BaseStat (24,1068,100,63,69,23,50),
	new BaseStat (25,1119,100,67,70,23,50),
	new BaseStat (26,1173,100,69,72,24,51),
	new BaseStat (27,1230,100,73,73,24,51),
	new BaseStat (28,1295,100,76,74,24,52),
	new BaseStat (29,1363,100,80,75,25,52),
	new BaseStat (30,1435,100,84,77,25,53),
	new BaseStat (31,1513,100,88,78,26,53),
	new BaseStat (32,1598,100,92,79,26,53),
	new BaseStat (33,1693,100,97,80,27,54),
	new BaseStat (34,1792,100,102,82,27,54),
	new BaseStat (35,1899,100,108,83,28,55),
	new BaseStat (36,2014,100,112,84,28,55),
	new BaseStat (37,2138,100,118,85,28,55),
	new BaseStat (38,2270,100,124,87,29,56),
	new BaseStat (39,2416,100,132,88,29,56),
	new BaseStat (40,2561,100,139,91,30,56),
	new BaseStat (41,2703,100,146,95,30,59),
	new BaseStat (42,2842,100,154,99,31,60),
	new BaseStat (43,2978,100,163,104,31,64),
	new BaseStat (44,3111,100,172,108,32,65),
	new BaseStat (45,3241,100,180,112,32,67),
	new BaseStat (46,3368,100,187,117,32,70),
	new BaseStat (47,3492,100,195,123,32,73),
	new BaseStat (48,3613,100,204,129,33,76),
	new BaseStat (49,3731,100,212,135,33,79),
	new BaseStat (50,3846,100,220,142,34,82),
	new BaseStat (51,3959,100,230,149,34,85),
	new BaseStat (52,4070,100,240,156,35,89),
	new BaseStat (53,4179,100,248,164,35,93),
	new BaseStat (54,4286,100,258,171,35,96),
	new BaseStat (55,4391,100,266,179,36,100),
	new BaseStat (56,4494,100,273,186,36,102),
	new BaseStat (57,4595,100,280,192,36,105),
	new BaseStat (58,4694,100,288,198,36,107),
	new BaseStat (59,4791,100,295,204,37,111),
	new BaseStat (60,4886,100,303,210,37,114),
	new BaseStat (61,4979,100,312,215,38,114),
	new BaseStat (62,5070,100,320,220,38,118),
	new BaseStat (63,5159,100,328,225,38,121),
	new BaseStat (64,5246,100,336,230,39,123),
	new BaseStat (65,5331,100,340,234,39,125),
	new BaseStat (66,5414,100,345,238,40,128),
	new BaseStat (67,5495,100,349,242,40,131),
	new BaseStat (68,5574,100,352,245,40,132),
	new BaseStat (69,5651,100,356,248,40,136),
	new BaseStat (70,5726,100,360,251,40,138),
	new BaseStat (71,5799,100,362,253,41,138),
	new BaseStat (72,5870,100,366,255,41,139),
	new BaseStat (73,5938,100,369,257,42,142),
	new BaseStat (74,6003,100,373,259,42,143),
	new BaseStat (75,6065,100,375,261,42,144),
	new BaseStat (76,6123,100,376,262,43,145),
	new BaseStat (77,6178,100,379,263,43,146),
	new BaseStat (78,6230,100,380,264,44,147),
	new BaseStat (79,6275,100,382,265,44,147),
	new BaseStat (80,6315,100,384,266,44,148),
	new BaseStat (81,6353,100,386,267,44,151),
	new BaseStat (82,6387,100,387,268,44,151),
	new BaseStat (83,6420,100,390,269,44,151),
	new BaseStat (84,6452,100,391,270,45,153),
	new BaseStat (85,6483,100,393,271,45,154),
	new BaseStat (86,6513,100,394,272,45,154),
	new BaseStat (87,6542,100,397,273,46,155),
	new BaseStat (88,6870,100,398,274,46,155),
	new BaseStat (89,6597,100,400,275,47,157),
	new BaseStat (90,6623,100,402,276,47,158),
	new BaseStat (91,6648,100,404,277,47,158),
	new BaseStat (92,6672,100,405,278,48,159),
	new BaseStat (93,6695,100,408,279,48,162),
	new BaseStat (94,6717,100,409,280,48,162),
	new BaseStat (95,6738,100,411,281,48,162),
	new BaseStat (96,6758,100,412,282,48,162),
	new BaseStat (97,6777,100,415,283,49,165),
	new BaseStat (98,6795,100,416,284,49,165),
	new BaseStat (99,6812,100,418,285,49,166),
	new BaseStat (100,6822,100,420,286,50,167),
	new BaseStat (101,6832,100,422,286,50,167),
	new BaseStat (102,6842,100,423,287,50,168),
	new BaseStat (103,6852,100,426,287,51,168),
	new BaseStat (104,6862,100,427,288,51,169),
	new BaseStat (105,6872,100,429,288,51,169),
	new BaseStat (106,6882,100,430,289,52,172),
	new BaseStat (107,6892,100,433,289,52,172),
	new BaseStat (108,6902,100,434,290,52,172),
	new BaseStat (109,6912,100,436,290,52,172),
	new BaseStat (110,6923,100,438,291,52,172),
	new BaseStat (111,6933,100,440,291,52,174),
	new BaseStat (112,6943,100,441,292,53,174),
	new BaseStat (113,6953,100,444,292,53,174),
	new BaseStat (114,6963,100,445,293,53,175),
	new BaseStat (115,6973,100,447,293,54,175),
	new BaseStat (116,6983,100,448,294,54,176),
	new BaseStat (117,6993,100,451,294,54,176),
	new BaseStat (118,7003,100,452,295,54,177),
	new BaseStat (119,7013,100,454,295,55,177),
	new BaseStat (120,7024,100,456,296,55,180)]),

	//Ignis
	new Character ('Ignis',4,0,'Daggers','Polearm',[
	new BaseStat (1,339,100,17,31,24,51),
	new BaseStat (2,345,100,17,32,27,52),
	new BaseStat (3,351,100,18,33,30,53),
	new BaseStat (4,358,100,18,34,36,54),
	new BaseStat (5,365,100,19,34,39,54),
	new BaseStat (6,373,100,19,35,42,55),
	new BaseStat (7,382,100,20,36,45,56),
	new BaseStat (8,391,100,21,36,48,56),
	new BaseStat (9,401,100,22,37,51,57),
	new BaseStat (10,412,100,24,38,54,58),
	new BaseStat (11,423,100,25,38,54,58),
	new BaseStat (12,436,100,26,39,57,59),
	new BaseStat (13,449,100,28,40,60,60),
	new BaseStat (14,463,100,29,40,63,60),
	new BaseStat (15,480,100,30,41,66,61),
	new BaseStat (16,496,100,33,41,69,61),
	new BaseStat (17,513,100,34,42,69,62),
	new BaseStat (18,534,100,36,42,72,62),
	new BaseStat (19,554,100,37,43,75,63),
	new BaseStat (20,579,100,39,43,75,63),
	new BaseStat (21,603,100,40,44,78,64),
	new BaseStat (22,631,100,42,44,81,64),
	new BaseStat (23,660,100,43,45,84,65),
	new BaseStat (24,691,100,45,45,84,65),
	new BaseStat (25,724,100,47,45,87,65),
	new BaseStat (26,760,100,49,46,90,66),
	new BaseStat (27,799,100,52,46,90,66),
	new BaseStat (28,844,100,54,47,93,67),
	new BaseStat (29,889,100,57,47,96,67),
	new BaseStat (30,938,100,60,48,96,68),
	new BaseStat (31,991,100,63,48,99,68),
	new BaseStat (32,1050,100,67,48,99,68),
	new BaseStat (33,1113,100,71,49,102,69),
	new BaseStat (34,1180,100,74,49,102,69),
	new BaseStat (35,1254,100,78,50,105,70),
	new BaseStat (36,1331,100,82,50,108,70),
	new BaseStat (37,1417,100,87,50,108,70),
	new BaseStat (38,1508,100,91,51,111,71),
	new BaseStat (39,1606,100,96,51,111,71),
	new BaseStat (40,1700,100,103,53,114,73),
	new BaseStat (41,1792,100,109,56,114,77),
	new BaseStat (42,1882,100,115,59,117,81),
	new BaseStat (43,1970,100,121,63,120,86),
	new BaseStat (44,2056,100,128,67,120,92),
	new BaseStat (45,2140,100,136,71,123,97),
	new BaseStat (46,2222,100,144,74,123,101),
	new BaseStat (47,2302,100,150,77,126,105),
	new BaseStat (48,2380,100,156,81,126,111),
	new BaseStat (49,2456,100,163,85,129,115),
	new BaseStat (50,2530,100,171,89,129,121),
	new BaseStat (51,2602,100,178,93,132,126),
	new BaseStat (52,2672,100,185,97,132,131),
	new BaseStat (53,2740,100,193,101,135,137),
	new BaseStat (54,2806,100,201,104,135,141),
	new BaseStat (55,2870,100,210,107,138,145),
	new BaseStat (56,2932,100,218,111,138,149),
	new BaseStat (57,2992,100,225,114,141,154),
	new BaseStat (58,3050,100,231,116,141,156),
	new BaseStat (59,3106,100,237,118,144,158),
	new BaseStat (60,3160,100,244,120,144,161),
	new BaseStat (61,3212,100,250,122,147,164),
	new BaseStat (62,3262,100,257,124,147,166),
	new BaseStat (63,3311,100,264,125,147,167),
	new BaseStat (64,3359,100,271,126,150,168),
	new BaseStat (65,3406,100,279,127,150,170),
	new BaseStat (66,3452,100,285,128,153,170),
	new BaseStat (67,3497,100,289,129,153,172),
	new BaseStat (68,3541,100,293,130,156,173),
	new BaseStat (69,3584,100,296,131,156,173),
	new BaseStat (70,3626,100,299,132,156,175),
	new BaseStat (71,3667,100,302,133,159,176),
	new BaseStat (72,3707,100,305,134,159,177),
	new BaseStat (73,3746,100,309,135,162,178),
	new BaseStat (74,3784,100,312,136,162,179),
	new BaseStat (75,3821,100,315,137,165,181),
	new BaseStat (76,3857,100,318,138,165,182),
	new BaseStat (77,3892,100,320,139,165,183),
	new BaseStat (78,3926,100,321,140,168,184),
	new BaseStat (79,3959,100,323,141,168,185),
	new BaseStat (80,3991,100,324,142,171,187),
	new BaseStat (81,4022,100,326,143,171,187),
	new BaseStat (82,4052,100,327,144,174,189),
	new BaseStat (83,4081,100,329,145,174,190),
	new BaseStat (84,4109,100,330,146,174,190),
	new BaseStat (85,4136,100,332,147,177,192),
	new BaseStat (86,4162,100,333,148,177,193),
	new BaseStat (87,4187,100,335,149,177,194),
	new BaseStat (88,4211,100,336,150,180,196),
	new BaseStat (89,4234,100,338,151,180,196),
	new BaseStat (90,4256,100,339,152,183,198),
	new BaseStat (91,4277,100,342,153,183,199),
	new BaseStat (92,4297,100,343,154,183,200),
	new BaseStat (93,4316,100,345,155,186,201),
	new BaseStat (94,4332,100,346,156,186,202),
	new BaseStat (95,4351,100,348,157,186,203),
	new BaseStat (96,4367,100,349,158,189,205),
	new BaseStat (97,4382,100,351,159,189,205),
	new BaseStat (98,4394,100,352,160,192,207),
	new BaseStat (99,4405,100,354,161,192,208),
	new BaseStat (100,4415,100,355,162,192,209),
	new BaseStat (101,4425,100,357,162,195,209),
	new BaseStat (102,4435,100,358,163,195,210),
	new BaseStat (103,4445,100,360,163,195,210),
	new BaseStat (104,4455,100,361,164,198,211),
	new BaseStat (105,4465,100,363,164,198,211),
	new BaseStat (106,4475,100,364,165,201,212),
	new BaseStat (107,4485,100,366,165,201,212),
	new BaseStat (108,4495,100,367,166,201,213),
	new BaseStat (109,4505,100,369,166,201,213),
	new BaseStat (110,4516,100,370,167,204,214),
	new BaseStat (111,4526,100,372,167,204,214),
	new BaseStat (112,4536,100,373,168,207,215),
	new BaseStat (113,4546,100,376,168,207,215),
	new BaseStat (114,4556,100,377,169,207,216),
	new BaseStat (115,4566,100,379,169,210,216),
	new BaseStat (116,4576,100,380,170,210,217),
	new BaseStat (117,4586,100,382,170,210,217),
	new BaseStat (118,4596,100,383,171,210,218),
	new BaseStat (119,4606,100,385,171,213,218),
	new BaseStat (120,4617,100,386,172,213,219)]),

	//Prompto
	new Character ('Prompto',4,20,'Firearm','Machinery',[
	new BaseStat (1,178,100,21,21,11,38),
	new BaseStat (2,180,100,21,22,13,39),
	new BaseStat (3,185,100,22,23,14,40),
	new BaseStat (4,189,100,22,24,15,41),
	new BaseStat (5,192,100,23,24,17,42),
	new BaseStat (6,196,100,24,25,18,43),
	new BaseStat (7,201,100,25,25,19,43),
	new BaseStat (8,206,100,27,26,20,44),
	new BaseStat (9,211,100,28,27,21,45),
	new BaseStat (10,218,100,29,27,22,45),
	new BaseStat (11,224,100,31,28,23,46),
	new BaseStat (12,231,100,32,28,24,47),
	new BaseStat (13,238,100,33,28,24,47),
	new BaseStat (14,246,100,35,29,25,48),
	new BaseStat (15,254,100,36,30,26,49),
	new BaseStat (16,263,100,38,30,27,49),
	new BaseStat (17,274,100,39,31,28,50),
	new BaseStat (18,285,100,41,31,29,50),
	new BaseStat (19,295,100,42,32,29,51),
	new BaseStat (20,308,100,44,32,30,51),
	new BaseStat (21,322,100,45,32,31,52),
	new BaseStat (22,337,100,47,32,32,52),
	new BaseStat (23,352,100,49,33,32,53),
	new BaseStat (24,370,100,51,33,33,53),
	new BaseStat (25,389,100,53,34,34,54),
	new BaseStat (26,408,100,55,34,34,54),
	new BaseStat (27,430,100,58,34,35,54),
	new BaseStat (28,453,100,61,35,36,55),
	new BaseStat (29,479,100,64,35,37,55),
	new BaseStat (30,508,100,67,36,37,56),
	new BaseStat (31,537,100,71,36,38,56),
	new BaseStat (32,569,100,74,36,38,57),
	new BaseStat (33,603,100,78,36,39,57),
	new BaseStat (34,641,100,82,36,40,57),
	new BaseStat (35,682,100,87,37,40,58),
	new BaseStat (36,727,100,91,37,41,58),
	new BaseStat (37,774,100,96,38,41,59),
	new BaseStat (38,825,100,101,38,42,59),
	new BaseStat (39,880,100,107,38,43,59),
	new BaseStat (40,939,100,113,39,43,60),
	new BaseStat (41,998,100,119,41,44,63),
	new BaseStat (42,1056,100,126,43,44,66),
	new BaseStat (43,1114,100,133,45,45,68),
	new BaseStat (44,1171,100,141,47,45,71),
	new BaseStat (45,1228,100,147,50,46,77),
	new BaseStat (46,1284,100,152,53,47,82),
	new BaseStat (47,1340,100,159,56,49,86),
	new BaseStat (48,1395,100,166,60,48,92),
	new BaseStat (49,1450,100,173,63,48,96),
	new BaseStat (50,1504,100,180,66,49,101),
	new BaseStat (51,1558,100,188,69,49,105),
	new BaseStat (52,1611,100,196,73,50,111),
	new BaseStat (53,1664,100,203,76,50,115),
	new BaseStat (54,1716,100,211,79,51,119),
	new BaseStat (55,1768,100,218,82,51,123),
	new BaseStat (56,1818,100,224,86,52,130),
	new BaseStat (57,1868,100,230,89,52,134),
	new BaseStat (58,1917,100,236,92,53,138),
	new BaseStat (59,1966,100,242,94,53,141),
	new BaseStat (60,2014,100,248,96,54,144),
	new BaseStat (61,2062,100,255,97,54,147),
	new BaseStat (62,2109,100,262,99,55,150),
	new BaseStat (63,2156,100,269,101,55,153),
	new BaseStat (64,2202,100,275,102,56,154),
	new BaseStat (65,2248,100,279,103,56,155),
	new BaseStat (66,2293,100,283,104,57,157),
	new BaseStat (67,2338,100,286,105,57,158),
	new BaseStat (68,2382,100,289,106,58,159),
	new BaseStat (69,2426,100,292,107,58,160),
	new BaseStat (70,2469,100,295,108,59,162),
	new BaseStat (71,2512,100,297,109,59,162),
	new BaseStat (72,2554,100,300,110,60,163),
	new BaseStat (73,2596,100,303,111,60,165),
	new BaseStat (74,2637,100,306,112,60,166),
	new BaseStat (75,2678,100,308,113,61,167),
	new BaseStat (76,2718,100,309,114,61,168),
	new BaseStat (77,2757,100,311,115,62,170),
	new BaseStat (78,2795,100,312,116,62,171),
	new BaseStat (79,2832,100,314,117,63,175),
	new BaseStat (80,2868,100,315,118,63,177),
	new BaseStat (81,2903,100,317,119,63,178),
	new BaseStat (82,2937,100,318,120,64,180),
	new BaseStat (83,2970,100,320,121,64,180),
	new BaseStat (84,3002,100,321,122,65,181),
	new BaseStat (85,3033,100,323,123,65,183),
	new BaseStat (86,3063,100,324,124,65,183),
	new BaseStat (87,3092,100,326,125,66,185),
	new BaseStat (88,3120,100,327,126,66,186),
	new BaseStat (89,3147,100,329,127,67,187),
	new BaseStat (90,3173,100,330,128,67,189),
	new BaseStat (91,3198,100,332,129,68,189),
	new BaseStat (92,3222,100,333,130,68,191),
	new BaseStat (93,3245,100,335,131,68,192),
	new BaseStat (94,3267,100,336,132,69,194),
	new BaseStat (95,3288,100,338,133,69,194),
	new BaseStat (96,3308,100,339,134,69,195),
	new BaseStat (97,3327,100,341,135,70,197),
	new BaseStat (98,3345,100,342,136,70,198),
	new BaseStat (99,3362,100,344,137,71,202),
	new BaseStat (100,3372,100,345,138,71,204),
	new BaseStat (101,3382,100,346,138,72,204),
	new BaseStat (102,3392,100,347,139,72,205),
	new BaseStat (103,3402,100,349,139,72,205),
	new BaseStat (104,3412,100,350,139,73,205),
	new BaseStat (105,3422,100,352,140,73,206),
	new BaseStat (106,3432,100,353,140,73,206),
	new BaseStat (107,3442,100,355,140,74,206),
	new BaseStat (108,3452,100,356,141,74,206),
	new BaseStat (109,3462,100,358,142,74,207),
	new BaseStat (110,3473,100,359,142,75,207),
	new BaseStat (111,3483,100,361,142,75,207),
	new BaseStat (112,3493,100,362,143,76,209),
	new BaseStat (113,3503,100,364,143,76,209),
	new BaseStat (114,3513,100,365,143,76,209),
	new BaseStat (115,3523,100,367,144,77,209),
	new BaseStat (116,3533,100,368,144,77,209),
	new BaseStat (117,3543,100,370,144,77,209),
	new BaseStat (118,3553,100,371,145,78,209),
	new BaseStat (119,3563,100,373,146,78,211),
	new BaseStat (120,3574,100,374,146,78,211)])];

//Attire
const attireList = [
	new Attire ('All','None',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','Prince\'s Fatigues',20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','Prince\'s Fatigues (No Jacket)',0,0,20,0,20,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('All but Noctis','Crownsguard Fatigues',20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('All but Noctis','Crownsguard Fatigues (No Jacket)',0,0,20,0,20,0,0,0,0,0,0,0,0,0,0,
		0,'',''),
	new Attire ('Gladiolus','Rugged Attire',0,0,30,-30,0,0,0,0,0,0,0,0,0,0,0,30,'',''),
	new Attire ('Ignis','Crownsguard Casual',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Ignis','Unkempt Crownsguard',0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('All','Casual Outfit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'Enfeebled, Disenchanted, Burnt, Frozen, Shocked',''),
	new Attire ('All','Casual Outfit (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,'',''),
	new Attire ('Noctis','Trendy Outfit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'Enfeebled, Disenchanted, Burnt, Frozen, Shocked',''),
	new Attire ('Noctis','Trendy Outfit (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,'',''),
	new Attire ('Noctis','Kingly Raiment',0,0,0,30,0,30,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','Kingly Raiment (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,3,6,0,0,0,'',''),
	new Attire ('All but Noctis','Kingsglaive Garb',0,0,0,30,0,30,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('All but Noctis','Kingsglaive Garb (No Jacket)',0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,'',
		''),
	new Attire ('Noctis','Royal Raiment',25,25,0,0,0,0,0,0,0,0,0,0,6,0,0,0,'',''),
	new Attire ('Noctis','Royal Raiment (No Jacket)',0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,'',
		'Infinite stamina'),
	new Attire ('Noctis','Ardyn\'s Ensemble',0,0,0,0,50,0,0,0,0,100,0,0,0,0,0,0,'',
		'+100 Strength temporarily after taking Dark damage'),
	new Attire ('All','Thermal Suit',20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Burnt',
		'Immune to Fire elemental damage'),
	new Attire ('Noctis','Choco-Mog Tee',0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,'',''),
	new Attire ('Noctis','Festive Ensemble',20,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','Master Assassin\'s Robes',0,0,0,0,0,0,0,0,0,0,0,0,0,0,-40,0,'',''),
	new Attire ('Noctis','Master Assassin\'s Robes (Hooded)',0,0,0,0,0,0,0,0,0,0,0,0,0,0,-40,0,'',
		''),
	new Attire ('All','Medjay Assassin\'s Robe',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Instant Death',''),
	new Attire ('Noctis','Medjay Assassin\'s Robe (Hooded)',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'Instant Death',''),
	new Attire ('Prompto','Tundra Attire',20,0,0,20,0,0,-30,60,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','Noodle Helmet',0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,'',''),
	new Attire ('Noctis','King\'s Knight Tee',0,0,0,0,0,0,25,25,25,25,25,0,0,0,0,0,'',''),
	new Attire ('Noctis','EPISODE GLADIOLUS Tee',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','EPISODE PROMPTO Tee',0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,'',''),
	new Attire ('Noctis','EPISODE IGNIS Tee',0,0,0,0,0,0,0,0,0,0,0,0,0,25,0,0,'',''),
	new Attire ('Noctis','COMRADES Tee',25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','Half-Life Costume',25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','The Sims™ 4 Llama Suit',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Noctis','Glamour Prism: Miqo\'te',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Gladiolus','Glamour Prism: Roegadyn',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Ignis','Glamour Prism: Elezen',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('Prompto','Glamour Prism: Hyur',0,0,0,24,0,50,0,0,0,0,0,0,0,0,0,0,'',''),
	new Attire ('All','Magitek Exosuit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Makes the wearer invincible for a time.')];

//Food
const foodList = [
	new Food ('','','None',0,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Flame-Roasted Toast',0,10,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Toasty Rice Balls',50,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Croque Madame',0,30,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Veggie Medley Stew',150,20,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Mystery Meat Sushi',100,50,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Prompto','Burly Bean Bowl',300,40,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Gladiolus','Prairie-Style Skewers',200,40,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Multi-Meat Sandwich',100,0,0,0,0,0,0,0,0,20,0,0,'','',''),
	new Food ('Recipeh','','Oil-Drizzled Steamed Fish',200,60,0,50,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Noctis','Grease Monkey\'s Schnitzel Sandwich',200,80,0,0,0,0,0,0,0,0,0,0,
		'','',''),
	new Food ('Recipeh','Ignis','Breaded Cutlet with Tomato',250,60,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Prompto','Spicy Long-Bone Rib Steak',200,50,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Classic Tomato & Egg Stir-Fry',100,0,0,0,0,0,0,0,50,0,0,0,'','',''),
	new Food ('Recipeh','Noctis','Dish and Chips',300,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Dry-Aged Tender Roast Stew',250,80,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Grilled Wild Trevally',100,70,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Charcuterie on Toast',200,80,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Creamy Fowl Sauté',400,80,0,0,0,0,0,0,0,0,0,0,'Poison','',''),
	new Food ('Recipeh','Gladiolus','Fried Frontier Skewer',500,0,0,0,0,0,0,0,0,0,30,0,'','',''),
	new Food ('Recipeh','Prompto','Peppery Daggerquill Rice',250,80,0,0,0,0,0,0,25,0,0,0,'','',''),
	new Food ('Recipeh','','Quillhorn Soup',0,100,0,0,0,0,0,0,75,0,0,0,'','',''),
	new Food ('Recipeh','','Creamy Crustacean Omelette',400,100,0,100,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Egg-Fried Crustacean Bowl',600,100,0,100,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Battered Barramundi',500,100,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Crown City Dive-Style Dumplings',300,100,0,100,0,0,0,0,0,0,0,0,'','',
		''),
	new Food ('Recipeh','','Ace Hunter\'s Schnitzel',400,120,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Stacked Ham Sandwich',400,0,0,0,0,0,0,0,0,50,0,0,'','',''),
	new Food ('Recipeh','Noctis','Grilled Wild Barramundi',500,80,0,80,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Ignis','Fluffy Chiffon Cake',1000,0,200,0,200,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Cannedwich',300,100,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Garden Curry',500,80,0,0,0,50,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Triple Truffle Risotto',400,0,0,0,0,0,0,0,75,0,0,0,'Poison','',''),
	new Food ('Recipeh','','Robust Bean Soup',600,0,0,0,0,0,0,0,50,0,0,0,'','Technician',
		'For Noctis: +100% to tech bar fill rate; for allies: +100% to tech leveling rate and always' +
		' perform critical versions of techniques'),
	new Food ('Recipeh','Prompto','Meat-and-Beet Bouillon',500,100,0,0,0,0,0,0,0,0,0,0,'Poison','',
		''),
	new Food ('Recipeh','','Free-Range Fowl over Rice',500,100,0,0,0,0,0,0,25,0,0,0,'','',''),
	new Food ('Recipeh','','Creamy Milk Risotto',600,0,0,0,0,0,0,0,75,0,0,0,'Toad','',''),
	new Food ('Recipeh','','Lestallum Stewed Tripe',0,0,0,200,0,0,0,0,75,0,0,0,'','',''),
	new Food ('Recipeh','','Fried Rookie on Rice',400,100,0,0,0,0,0,0,0,0,0,0,'Poison','',''),
	new Food ('Recipeh','','Toadsteak Drumsticks',500,120,0,100,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Prompto','Meldacio Meat Pie',500,150,0,150,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Ignis','Fisherman\'s Favorite Paella',600,120,0,0,0,0,0,0,25,0,0,0,'','',
		''),
	new Food ('Recipeh','','Nebula Salmon Teriyaki',600,150,0,150,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Salmon-in-a-Suit',700,120,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Croaker in Brown Sauce',600,150,0,0,0,0,0,0,0,0,0,0,'Toad','',''),
	new Food ('Recipeh','Gladiolus','Skewered Wild Trout',800,150,0,0,0,0,0,0,0,0,0,0,'Toad','',''),
	new Food ('Recipeh','','Packed Mushroom Stew',0,700,0,700,0,0,0,0,0,0,0,0,'','Last Stand',
		'Max HP reduced to 10% (truncated). Max HP possible is 999'),
	new Food ('Recipeh','','Moist Tomato Cake',1000,0,200,0,300,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Crispy Fish Fritterwich',800,160,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Hot Hopper Skewers',0,0,0,0,0,0,0,0,0,0,0,0,'Toad','Equalizer',
		'+2% damage per level difference between attacker and higher-level target'),
	new Food ('Recipeh','','Darkshells Marinières',0,100,0,0,0,0,0,0,0,0,0,0,'','Technician',
		'For Noctis: +100% to tech bar fill rate; for allies: +100% to tech leveling rate and always' +
		' perform critical versions of techniques'),
	new Food ('Recipeh','','Paella de Pollo',500,150,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Ignis','Tomalley-Filled Dumplings',300,100,0,200,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Beanball Croquettes',500,0,0,0,0,0,0,0,0,0,0,0,'All but Instant Death',
		'',''),
	new Food ('Recipeh','','Golden Egg Galette',400,120,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Sweet & Spicy Cygillan Crab',200,100,0,0,0,70,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Ignis','Kenny\'s Original Recipe',0,150,200,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Noctis','Mother & Child Rice Bowl',1000,0,0,0,0,0,0,0,0,30,0,50,'','',''),
	new Food ('Recipeh','Gladiolus','Prime Garula Rib',500,0,0,0,0,0,0,0,0,0,0,0,'','Endurance',
		'Infinite stamina'),
	new Food ('Recipeh','Noctis','Garulessandwich',600,120,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Ignis','Horntooth Meat Pie',600,160,0,160,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Hunters\' Krazy Kebabs',800,200,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Creamy Bisque',0,160,0,0,0,0,0,0,100,0,0,0,'','',''),
	new Food ('Recipeh','','Thick \'n\' Juicy Steak',1000,0,0,0,0,0,0,0,0,0,0,0,'','Endurance',
		'Infinite stamina'),
	new Food ('Recipeh','','Three-Mushroom Kebabs',800,150,0,0,0,0,0,0,0,0,0,0,
		'All but Instant Death','',''),
	new Food ('Recipeh','Prompto','Green Soup Curry',800,160,0,0,0,70,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Royal Road Paella',1000,150,0,0,0,0,0,0,0,0,0,0,'','Endurance',
		'Infinite stamina'),
	new Food ('Recipeh','','Elegant Orange Cake',1000,0,250,0,400,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Blazing Braised Gizzard',0,0,300,0,0,0,0,0,50,0,0,0,'','',''),
	new Food ('Recipeh','','Carp of the Diem',1500,100,0,0,0,0,0,0,0,0,0,0,'Poison','',''),
	new Food ('Recipeh','Gladiolus','Grilled Mighty Barramundi',0,0,0,0,0,0,0,0,0,0,0,0,
		'All but Instant Death','Resistant','Immune to Fire, Ice, and Lightning elemental damage'),
	new Food ('Recipeh','','Fire-Sauce Fillet',600,200,0,200,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Karlabos Cream Croquettes',1000,200,0,0,0,0,0,0,50,0,0,0,'','',''),
	new Food ('Recipeh','','Taelpar Harvest Galette',1000,0,0,120,400,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Sweet Saltwater Crustacean Curry',800,120,0,0,0,50,0,0,0,0,0,0,'','',
		''),
	new Food ('Recipeh','Noctis','Papa Bird & Baby Bowl',1000,0,0,0,0,0,0,0,0,40,0,100,'','',''),
	new Food ('Recipeh','','Fishsticks on Sticks',1000,0,0,0,0,0,0,0,0,0,50,0,'','',''),
	new Food ('Recipeh','','Sea Bass Sauté',1500,0,0,0,0,0,50,0,0,0,0,0,'Toad','',''),
	new Food ('Recipeh','','Anointed Allural Sea Bass',1000,200,0,150,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Devilfin Soup',0,200,0,0,0,0,0,0,125,0,0,0,'','',''),
	new Food ('Recipeh','','Marrowshroom Chowder',0,0,0,0,0,0,0,0,0,0,100,0,'','',''),
	new Food ('Recipeh','','Smoked Behemoth',1000,400,0,0,0,0,0,0,0,0,0,0,'','Endurance',
		'Infinite stamina'),
	new Food ('Recipeh','','Hearty Cutlet on Rice',1500,250,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Tide Grouper Carpaccio',1000,300,0,0,0,0,0,0,0,0,0,0,'Instant Death','',
		''),
	new Food ('Recipeh','','Crown City Roast',3000,400,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Lasagna al Forno',4000,0,0,0,0,0,0,0,0,100,0,0,'','Resistant',
		'Immune to Fire, Ice, and Lightning elemental damage'),
	new Food ('Recipeh','','Golden Tail Soup',0,0,0,0,0,0,0,0,150,0,100,0,'','',''),
	new Food ('Recipeh','','Seasoned Midgardsormr',1000,350,0,0,0,0,0,0,0,0,0,0,'',
		'Equalizer','+2% damage per level for level difference between attacker and higher-level' +
		' target'),
	new Food ('Recipeh','','Legendary Herb-Grilled Whopper',0,500,0,-Infinity,0,0,0,0,0,0,0,0,'','',
		''),
	new Food ('Recipeh','','Fried Tide Grouper',0,500,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Roc of Ravatogh Rice',1500,300,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Broiled King-on-a-Stick',1500,300,0,0,0,0,0,0,0,0,0,0,
		'All but Instant Death','',''),
	new Food ('Recipeh','Noctis','Memory Lane Pastry',0,-Infinity,0,500,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Excellent Oven-Roasted Trout',2000,350,0,0,0,50,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','King\'s Stew',2000,400,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Crispy Zu Skewers',2000,0,0,0,0,0,0,0,0,0,80,0,'','',''),
	new Food ('Recipeh','','Kenny\'s Secret Recipe',0,400,300,300,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','','Oak-Smoked Devil Gar',2000,0,0,0,0,0,0,0,0,0,0,0,'','Resistant',
		'Immune to Fire, Ice, and Lightning elemental damage'),
	new Food ('Recipeh','','Royal Banquet Canapé',0,0,0,0,0,0,0,0,0,50,0,0,'',
		'Prime','Strength +75%, Magic +75%'),
	new Food ('Recipeh','','Longwythe\'s Peak',4000,600,0,0,0,0,0,0,200,0,0,0,'','',''),
	new Food ('Recipeh','','Chilled Food Tin',100,30,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Gladiolus','Cup Noodles (Initial)',300,30,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Gladiolus','Cup Noodles (Behemoth Round)',300,30,0,0,0,0,0,0,0,0,0,0,'','',
		''),
	new Food ('Recipeh','Gladiolus','Cup Noodles (Glimmering Zu Egg)',300,30,0,0,0,0,0,0,0,0,0,0,'',
		'',''),
	new Food ('Recipeh','Gladiolus','Cup Noodles (Karlabos Carapace)',300,30,0,0,0,0,0,0,0,0,0,0,'',
		'',''),
	new Food ('Recipeh','Gladiolus','Cup Noodles (Real Taste)',500,80,0,0,0,0,0,0,0,20,0,0,'','',
		''),
	new Food ('Recipeh','','Crispy Cheese Pizza',0,100,0,0,0,0,0,0,0,0,0,0,'Poison','Endurance',
		'Infinite stamina'),
	new Food ('Recipeh','','Kupoberry Cheesecake',0,0,0,0,0,0,0,0,0,0,0,0,'','Line Boost',
		'Fishing Line HP Damage Rate reduced by 25%'),
	new Food ('Recipeh','','Golden Chocobo Tart',0,0,0,0,0,0,0,0,0,0,0,0,'','Chocobolster',
		'Chocobo\'s Stamina Depletion Rate reduced by 25%'),
	new Food ('Recipeh','','Plump \'n\' Pungent Tofu',0,500,0,500,0,0,0,0,0,10,0,0,'','Last Stand',
		'Max HP reduced to 10% (truncated). Max HP possible is 999'),
	new Food ('Recipeh','Noctis','Scientia-Style Sushi',0,0,0,0,0,0,0,0,0,50,100,0,'',
		'Prime Endurance','Strength +75%, Magic +75%. Infinite stamina'),
	new Food ('Recipeh','','Semur Skewers',0,0,0,0,0,0,0,0,100,0,0,0,'','Endurance',
		'Infinite stamina'),
	new Food ('Recipeh','Noctis','Pit Crew\'s Meat Wraps',750,180,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Recipeh','Prompto','Keycatrich Salad',500,0,0,0,0,0,0,0,25,20,0,0,'','',''),
	new Food ('Recipeh','','Moogle Mousse with Kupoberry Sauce',1000,0,250,0,400,0,0,0,0,0,0,0,'',
		'',''),
	new Food ('Recipeh','Gladiolus','Military Man\'s Banquet',0,160,0,0,0,0,0,0,100,0,0,0,'','',''),
	new Food ('Recipeh','','Miss Mercenary\'s Cassoulet',1000,120,0,0,0,0,0,0,0,0,0,0,'',
		'Technician','For Noctis: +100% to tech bar fill rate; for allies: +100% tech leveling ' +
		'rate and always perform critical versions of techniques'),
	new Food ('Recipeh','Ignis','Feast of the Divine',3000,0,0,0,0,0,100,0,0,0,0,0,
		'All but Instant Death','',''),
	new Food ('Recipeh','','Hearty Stir-Fry',500,350,0,0,0,0,0,0,0,0,0,0,'','Endurance',
		'Infinite stamina'),
	new Food ('Restaurant','','Chili con Carne',50,20,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Leiden Jambalaya',200,150,0,0,0,0,0,0,25,0,0,0,'','',''),
	new Food ('Restaurant','','Hammerhead Hot Sandwich',200,80,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Sizzling Humongo-Steak',1000,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Jetty\'s',0,0,0,0,0,0,0,0,0,0,0,0,'Poison, Toad','',''),
	new Food ('Restaurant','','Kenny\'s Fries',300,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Kenny\'s Salmon',0,150,200,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Kenny\'s "Special" Salmon',0,400,300,300,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Galdin Gratin',500,50,0,50,0,0,0,0,0,10,0,0,'','',''),
	new Food ('Restaurant','','White Fish in Tomato Sauce',900,160,0,0,0,0,0,0,0,0,0,0,'Poison','',
		''),
	new Food ('Restaurant','','Sea\'s Bounty Risotto',600,120,0,0,0,0,0,0,25,0,0,0,'','',''),
	new Food ('Restaurant','','Steamed Crab with Rock Salt',0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Resistant','Immune to Fire, Ice, and Lightning elemental damage'),
	new Food ('Restaurant','','Tenebraen Berry Opera',0,-Infinity,0,500,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Gysahl Chips',400,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Green Smoothie',0,0,0,0,0,90,90,90,0,0,0,0,'','',''),
	new Food ('Restaurant','','Chocobo Club Sandwich',400,80,0,0,0,0,0,0,0,0,0,0,'Toad','',''),
	new Food ('Restaurant','','Fat Chocobo Triple-Decker',400,0,0,0,0,0,0,0,0,50,0,0,'','',''),
	new Food ('Restaurant','','Peanut Sauce Skewers',400,120,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Soup & Bread',0,150,0,0,0,0,0,0,100,0,0,0,'','',''),
	new Food ('Restaurant','','Bird-Broth Rice with Curry',250,80,0,0,0,0,0,0,25,0,0,0,'','',''),
	new Food ('Restaurant','','Offal Stew',0,0,200,0,0,0,0,0,75,0,0,0,'','',''),
	new Food ('Restaurant','','Spicy Skewers',1000,350,0,0,0,0,0,0,0,0,0,0,'','Equalizer',
		'+2% damage per level for level difference between attacker and higher-level target'),
	new Food ('Restaurant','','Roti and Curry Plate',200,120,0,100,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Soul Soup',0,120,0,0,200,70,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Big Bread Buns',600,0,0,0,0,0,0,0,50,0,0,0,'','',''),
	new Food ('Restaurant','','Meat & Onion Skewers',800,200,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Mama Ezma\'s Meat Pie',500,150,0,150,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Hunters\' Ragout',2000,400,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Verinas Spuds',300,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Tender Bird Fritters',400,120,0,0,0,50,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Smoked Dualhorn Shank',1000,400,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Fettini di Cernia',1000,300,0,0,0,0,0,0,0,0,0,0,'Instant Death','',
		''),
	new Food ('Restaurant','','Maagho Lasagna',4000,0,0,0,0,0,0,0,0,100,0,0,'','',''),
	new Food ('Restaurant','','Fine Caviar Canapé',0,0,0,0,0,0,0,0,0,50,0,0,'','Prime',
		'Strength +75%, Magic +75%'),
	new Food ('Restaurant','','Wood-Smoked Fish',1500,0,0,0,0,0,50,0,0,0,0,0,'Toad','',''),
	new Food ('Restaurant','','Set Dinner Course',500,0,0,0,0,0,0,0,0,0,0,0,'','',''),
	new Food ('Restaurant','','Kupoberry Cheesecake',0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Line Boost','Fishing Line HP Damage Rate reduced by 25%'),
	new Food ('Restaurant','','Golden Chocobo Tart',0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Chocobolster','Chocobo\'s Stamina Depletion Rate reduced by 25%'),
	new Food ('Restaurant','','Semur Skewers',0,0,0,0,0,0,0,0,100,0,0,0,'','','')];

//Weapons
const weaponList = [
	new Weapon ('','None',0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Weapon ('Sword','Engine Blade',28,2,0,5,0,0,5,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Sword','Broadsword',42,2,0,6,0,0,0,0,0,0,0,0,0,0,'',
		'+2% Critical Rate per combo hit'),
	new Weapon ('Sword','Engine Blade II',42,2,0,15,0,0,12,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Sword','Crowbar',58,2,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+80% breakage on body parts/appendages'),
	new Weapon ('Sword','Blazefire Saber',71,2,0,9,0,18,0,0,0,0,0,0,0,0,'',
		'-15% physical damage taken'),
	new Weapon ('Sword','Blazefire Saber XV',72,2,0,9,0,18,0,0,0,0,0,0,0,0,'',
		'-15% physical damage taken'),
	new Weapon ('Sword','Airstep Sword',83,2,0,7,0,0,0,0,0,0,0,0,0,0,'',
		'Halves MP consumption in mid-air'),
	new Weapon ('Sword','Rune Saber',103,2,48,8,0,8,12,9,0,0,0,0,0,0,'',''),
	new Weapon ('Sword','Flame Tongue',117,2,0,7,0,0,0,0,28,0,0,0,0,0,'Fire',''),
	new Weapon ('Sword','Ice Brand',137,2,0,10,0,0,0,0,0,31,0,0,0,0,'Ice',''),
	new Weapon ('Sword','Ragnarok',153,2,0,8,0,0,0,0,0,0,0,0,0,0,'',
		'Boosted damage with warp-strike but the warp animation is slower'),
	new Weapon ('Sword','Sarah\'s Shortsword',179,2,0,0,0,0,9,15,0,0,0,0,0,0,'Light',
		'+50% damage at full HP'),
	new Weapon ('Sword','Blood Sword',198,2,0,11,0,0,0,0,0,0,0,0,0,0,'',
		'20% chance to recover 30 HP per hit'),
	new Weapon ('Sword','Garuda\'s Gaze',200,2,0,6,16,17,21,14,0,0,0,0,0,0,'',
		'Strengthened aerial attacks'),
	new Weapon ('Sword','Engine Blade III',207,2,0,25,0,0,18,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Sword','Durandal',232,2,0,11,0,0,0,0,0,0,0,33,0,0,'Light',''),
	new Weapon ('Sword','Enhancer',276,2,0,12,0,0,0,0,0,0,0,0,0,0,'',''),
	new Weapon ('Sword','Soul Saber',343,2,0,12,0,0,0,0,0,0,0,0,0,0,'',
		'+4% damage for each 1% below 50% Stamina'),
	new Weapon ('Sword','Ultima Blade',364,2,0,40,0,0,30,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Sword','Gaze of the Vortex',430,100,0,60,22,22,22,15,0,0,0,0,0,0,'',
		'Deals 50% more damage with aerial attacks. Airstepping and aerial warping cost halved'),
	new Weapon ('Sword','Balmung',446,2,0,11,0,0,0,0,0,0,0,0,0,0,'',
		'-4% damage for every 1% of missing MP'),
	new Weapon ('Greatsword','Two-Handed Sword',48,1,53,0,0,0,0,0,0,0,0,0,0,0,'',
		'+15% damage per additional enemy within 65 feet (max 100%)'),
	new Weapon ('Greatsword','War Sword',78,1,65,0,0,0,0,0,0,0,0,0,0,0,'',
		'10% chance to inflict Compromised'),
	new Weapon ('Greatsword','Dodanuki',80,1,0,0,46,0,0,0,0,0,0,0,0,0,'',
		'Reduces enemy defense with each slash'),
	new Weapon ('Greatsword','Masamune',88,1,49,0,0,0,0,0,0,0,0,0,0,0,'',
		'20% chance of inflicting 30% Max HP damage when the target\'s HP is full'),
	new Weapon ('Greatsword','Blade of Brennaere',131,1,82,0,0,0,0,0,27,0,0,0,0,0,'Fire',''),
	new Weapon ('Greatsword','Claymore',156,1,98,0,0,32,0,0,0,0,0,0,0,0,'',''),
	new Weapon ('Greatsword','Force Stealer',210,1,202,6,0,0,0,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Greatsword','Hardedge',244,1,153,0,0,0,0,0,0,0,0,0,0,0,'',
		'+80% breakage on body parts/appendages'),
	new Weapon ('Greatsword','Mutant Rakshasa Blade',328,1,124,32,25,0,52,21,0,0,0,58,0,0,
		'','The blade sends out three projections that damage the target before ' +
		'Noctis warps. The warp-strike also ignores greatsword resistances/weaknesses'),
	new Weapon ('Greatsword','Thunderbolt',345,1,246,0,0,0,0,0,0,0,29,0,0,0,'Lightning',''),
	new Weapon ('Greatsword','Duel Code',370,1,468,0,0,0,0,0,0,0,0,0,0,0,'',
		'+50% damage to lone enemies within 65 feet'),
	new Weapon ('Greatsword','Genji Blade',426,1,357,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Weapon ('Greatsword','Garuda\'s Pain',456,1,0,6,22,24,29,20,0,0,0,0,0,0,'',
		'Strengthened aerial attacks'),
	new Weapon ('Greatsword','Force Stealer II',463,1,308,11,0,0,0,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Greatsword','Hyperion',496,1,310,0,0,0,0,0,0,0,0,0,0,0,'',
		'+15% damage per additional enemy within 65 feet (max 100%)'),
	new Weapon ('Greatsword','Afrosword',503,1,287,0,0,0,0,54,0,0,0,0,0,0,'',
		'Changes battle music to Timed Quest music when equipped and controlling the user'),
	new Weapon ('Greatsword','Pain of the Vortex',572,100,0,60,31,31,31,22,0,0,0,0,0,0,
		'','Deals 50% more damage with aerial attacks. Aerial warping MP cost halved'),
	new Weapon ('Greatsword','Iron Duke',581,1,153,0,20,0,0,0,0,0,0,0,0,0,'',''),
	new Weapon ('Greatsword','Dominator',583,1,298,0,0,0,0,0,0,0,0,32,0,0,'Light',''),
	new Weapon ('Greatsword','Apocalypse',597,1,403,0,0,0,0,0,0,0,0,0,0,0,'',
		'When below 30% HP: +30 damage and +9 damage for each 1% missing HP below 30%'),
	new Weapon ('Polearm','Javelin',18,3,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'When below 30% HP: Critical +5% and another +1.5% per each 1% missing HP below 30%'),
	new Weapon ('Polearm','Drain Lance',33,3,0,5,0,0,0,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Polearm','Drain Lance II',48,3,0,11,0,0,0,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Polearm','Mythril Lance',55,3,0,0,0,0,32,0,0,0,0,0,0,0,'',''),
	new Weapon ('Polearm','Rapier Lance',68,3,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+80% breakage on body parts/appendages'),
	new Weapon ('Polearm','Gae Bolg',75,3,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+44% damage when using warp-strikes'),
	new Weapon ('Polearm','Storm Lance',113,3,0,0,0,0,0,0,0,0,0,0,0,0,'Lightning',''),
	new Weapon ('Polearm','Ice Spear',133,3,0,0,0,0,0,0,0,0,0,0,0,0,'Ice',''),
	new Weapon ('Polearm','Wyvern Lance',161,3,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+50% damage in mid-air'),
	new Weapon ('Polearm','Drain Lance III',195,3,0,11,0,0,0,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Polearm','Radiant Lance',205,3,0,0,0,0,0,0,0,0,0,0,0,0,'Light',''),
	new Weapon ('Polearm','Dragoon Lance',246,3,0,0,0,0,0,0,15,14,16,0,0,0,'',''),
	new Weapon ('Polearm','Precision Lance',266,13,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Weapon ('Polearm','Flayer',337,3,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Finishers deal +80% damage'),
	new Weapon ('Daggers','Daggers',20,7,0,4,0,0,5,0,0,0,0,0,0,0,'',
		'+50% damage to enemies in vulnerable status'),
	new Weapon ('Daggers','Avengers',43,7,0,4,0,0,5,0,0,0,0,0,0,0,'',
		'When below 30% HP: Critical +5 and another +1.5 per each 1% missing HP below 30%'),
	new Weapon ('Daggers','Cutlasses',58,7,0,6,0,0,10,0,0,0,0,0,0,0,'',
		'10% chance to inflict Enfeebled'),
	new Weapon ('Daggers','Mythril Knives',62,7,0,6,0,0,50,0,0,0,0,0,0,0,'',''),
	new Weapon ('Daggers','Mage Mashers',66,7,0,13,0,0,32,0,30,30,30,0,0,0,'',''),
	new Weapon ('Daggers','Plunderers',111,7,0,10,0,0,10,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Daggers','Assassin\'s Daggers',126,7,0,7,0,0,10,0,0,0,0,0,0,0,'',
		'10% chance to inflict Poison'),
	new Weapon ('Daggers','Delta Daggers',153,7,0,6,0,0,15,0,0,0,0,0,0,0,'',
		'10% chance to inflict Compromised'),
	new Weapon ('Daggers','Garuda\'s Plumes',176,7,0,6,22,24,29,20,0,0,0,0,0,0,'',
		'Strengthened aerial attacks'),
	new Weapon ('Daggers','Spelldaggers',178,7,0,0,28,0,0,16,0,0,0,0,0,0,'',
		'Exploits any enemy\'s elemental weakness'),
	new Weapon ('Daggers','Plunderers II',183,7,0,15,0,0,30,0,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Daggers','Main Gauches',192,7,0,7,0,0,21,0,0,0,0,0,0,0,'',
		'+50% damage to enemies in vulnerable status'),
	new Weapon ('Daggers','Orichalcum',223,7,0,9,0,0,20,0,0,0,0,0,0,0,'Light',''),
	new Weapon ('Daggers','Ulric\'s Kukris',234,12,282,24,8,15,48,20,5,7,4,19,21,1,'',
		''),
	new Weapon ('Daggers','Organyx',248,7,0,10,0,25,23,32,10,10,10,10,0,0,'',''),
	new Weapon ('Daggers','Vigilantes',290,7,0,5,0,0,20,0,0,0,0,0,0,0,'',
		'5% chance to inflict Stop'),
	new Weapon ('Daggers','Plumes of the Vortex',320,100,0,60,31,31,31,22,0,0,0,0,0,0,
		'','Deal 50% more damage with aerial attacks. Aerial warping MP cost halved'),
	new Weapon ('Daggers','Zwill Crossblade',345,7,0,5,0,0,25,0,0,0,0,0,0,0,'',
		'+80% damage at full HP'),
	new Weapon ('Firearm','Handgun',32,1,0,0,0,0,0,4,0,0,0,0,0,0,'',
		'+80% breakage on body parts/appendages'),
	new Weapon ('Firearm','Cocytus',45,1,0,0,0,0,0,7,0,0,0,0,0,0,'Ice',''),
	new Weapon ('Firearm','Calamity',53,1,0,0,0,0,0,5,0,0,0,0,0,0,'',
		'10% chance to inflict poison'),
	new Weapon ('Firearm','Mythril Pistol',96,1,0,0,0,0,42,11,0,0,0,0,0,0,'',''),
	new Weapon ('Firearm','Valiant',147,1,0,11,0,0,0,12,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Firearm','Cerberus',156,1,0,0,0,0,0,6,0,0,0,0,0,0,'',
		'A rifle that can be manually-aimed in three different ways. It is only available to' +
		' Noctis'),
	new Weapon ('Firearm','Rebellion',167,1,0,0,0,0,0,15,0,0,0,0,0,0,'',
		'When below 30% HP: Critical +5 and another +1.5 per each 1% missing HP below 30%'),
	new Weapon ('Firearm','Garuda\'s Abandon',193,1,0,6,22,24,29,20,0,0,0,0,0,0,'',
		'Strengthened enemy appendages breaking power'),
	new Weapon ('Firearm','Valiant II',200,1,0,14,0,0,0,21,0,0,0,0,0,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Firearm','Flame Gun',210,1,0,0,0,0,0,16,0,0,0,0,0,0,'Fire',''),
	new Weapon ('Firearm','Quicksilver',222,1,0,0,0,0,0,18,0,0,0,0,0,0,'',
		'+80% breakage on body parts/appendages'),
	new Weapon ('Firearm','Enforcer',243,11,0,0,0,0,0,19,0,0,0,0,0,0,'',''),
	new Weapon ('Firearm','Lion Heart',262,1,0,0,9,0,0,14,0,0,0,0,0,0,'',
		'When below 30% HP: Critical +5 and another +1.5 per each 1% missing HP below 30%'),
	new Weapon ('Firearm','Executioner',363,1,0,0,0,0,0,22,0,0,0,0,0,0,'',
		'+50% damage to lone enemies within 65 feet'),
	new Weapon ('Firearm','Hyper Magnum',388,1,0,0,0,0,0,21,0,0,0,0,0,0,'',''),
	new Weapon ('Firearm','Abandon of the Vortex',399,100,0,60,31,31,31,22,0,0,0,0,0,0,
		'',
		'Strengthened enemy appendage breaking power. Deals 50% more damage to vulnerable targets'),
	new Weapon ('Firearm','Death Penalty',424,1,0,0,0,0,0,25,0,0,0,0,0,0,'',
		'1% chance to inflict Instant Death'),
	new Weapon ('Shield','Kite Shield',52,0,0,0,0,15,0,0,0,0,0,0,8,0,'',
		'Recovers 50 HP per Blink'),
	new Weapon ('Shield','Absorb Shield',83,0,0,10,0,30,0,0,0,0,0,0,12,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Shield','Ice Shield',93,0,0,0,0,18,0,0,0,22,0,0,10,0,'',
		'+30% HP Recovery Rate for 5 seconds after taking Ice damage'),
	new Weapon ('Shield','Thunder Shield',111,0,0,0,0,21,0,0,0,0,24,0,12,0,'',
		'x4 Critical Rate for 5 seconds after taking Lightning damage'),
	new Weapon ('Shield','Flame Shield',126,0,0,0,0,22,0,0,21,0,0,0,9,0,'',
		'+300 Strength for 5 seconds after taking Fire damage'),
	new Weapon ('Shield','Hero Shield',144,0,0,0,0,25,0,0,0,0,0,0,22,0,'',
		'-30% damage from bullets'),
	new Weapon ('Shield','Absorb Shield II',167,0,0,15,0,38,0,0,0,0,0,0,12,0,'',
		'Absorbs elemental energy when dealing the finishing blow to an enemy'),
	new Weapon ('Shield','Black Prince',175,0,0,0,0,32,0,0,0,0,0,22,13,0,'',
		'+300 Magic for 5 seconds after taking Darkness damage'),
	new Weapon ('Shield','Power Shield',176,0,0,0,0,6,0,0,0,0,0,0,11,0,'',''),
	new Weapon ('Shield','Medjay Assassin\'s Shield',202,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+200 Strength for 3 seconds after Blocking'),
	new Weapon ('Shield','Wizard Shield',225,0,0,0,0,34,99,0,0,0,0,0,12,0,'',''),
	new Weapon ('Shield','Aegis Shield',292,0,0,0,0,55,0,0,0,0,0,0,11,0,'',
		'10% chance to nullify any incoming damage'),
	new Weapon ('Shield','Alien Shield',313,0,0,0,18,52,0,48,12,14,13,10,18,0,'Light',''),
	new Weapon ('Shield','Ziedrich',327,0,0,0,0,50,0,0,0,0,0,0,14,0,'',
		'+200 Strength for 3 seconds after Blinking'),
	new Weapon ('Machinery','Auto Crossbow',61,1,12,0,0,0,0,0,0,0,0,0,10,0,'',
		'Fires a barrage of crossbow bolts'),
	new Weapon ('Machinery','Bioblaster',74,1,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Disperses a poisonous mist'),
	new Weapon ('Machinery','Circular Saw',90,1,0,0,0,9,0,0,0,0,0,0,7,0,'',
		'Inflicts repeated damage with spinning blades'),
	new Weapon ('Machinery','Gravity Well',108,1,0,0,0,0,8,0,0,0,0,0,0,0,'',
		'Pulls foes in with a gravity sphere'),
	new Weapon ('Machinery','Noiseblaster',153,1,0,0,0,0,0,11,0,0,0,0,0,0,'',
		'Emits a pummeling sonic wave over a wide area'),
	new Weapon ('Machinery','Drillbreaker',181,1,7,0,0,5,0,0,0,0,0,0,8,0,'',
		'Inflicts repeated damage with piercing drills'),
	new Weapon ('Machinery','Flamebreath Cannon',286,1,0,0,0,0,0,0,0,0,0,0,0,0,'Fire',
		'Spews a constant stream of elemental flames towards enemies, constantly draining MP'),
	new Weapon ('Machinery','Auto Crossbow Plus',323,1,18,0,0,0,0,0,0,0,0,0,22,0,'',
		'Fires a barrage of crossbow bolts'),
	new Weapon ('Machinery','Bioblaster Plus',339,1,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Disperses a poisonous mist'),
	new Weapon ('Machinery','Circular Saw Plus',356,1,0,0,0,21,0,0,0,0,0,0,12,0,'',
		'Inflicts repeated damage with spinning blades'),
	new Weapon ('Machinery','Gravity Well Plus',374,1,0,0,0,0,18,0,0,0,0,0,0,0,'',
		'Pulls foes in with a gravity sphere'),
	new Weapon ('Machinery','Noiseblaster Plus',397,1,0,0,0,0,0,23,0,0,0,0,0,0,'',
		'Emits a pummeling sonic wave over a wide area'),
	new Weapon ('Machinery','Drillbreaker Plus',432,1,12,0,0,13,0,0,0,0,0,0,13,0,'',
		'Inflicts repeated damage with piercing drills'),
	new Weapon ('Royal Arm','Sword of the Wise',194,2,100,0,0,30,30,30,0,0,0,0,0,0,'',
		'A sword that performs short warp-strikes when near enemies'),
	new Weapon ('Royal Arm','Axe of the Conqueror',483,1,0,0,60,-80,0,0,0,0,0,0,0,0,'',
		'A polearm that performs slow but powerful attacks, at the expense of defense and '+ 
		'increased HP loss. Has a unique warp-strike, launching diagonally upward above the ' +
		'target then crashing down. Especially good at making enemies vulnerable'),
	new Weapon ('Royal Arm','Bow of the Clever',203,6,0,0,0,0,80,0,0,0,0,0,50,0,'',
		'A bow that fires piercing arrows, and can fire while moving in any direction. Its ' +
		'damage is based on the Magic stat. Warp-strike fires multiple arrows upward'),
	new Weapon ('Royal Arm','Swords of the Wanderer',153,3,0,0,0,50,0,50,0,0,0,0,0,0,
		'','Dual swords functioning similar to daggers that can transform into a ' +
		'single weapon to deliver powerful blows'),
	new Weapon ('Royal Arm','Blade of the Mystic',396,5,150,0,0,30,0,0,0,0,0,20,0,0,'',
		'A greatsword with the ability to briefly increase the wielder\'s Strength through a ' +
		'unique self-buff after swinging. The warp-strike fires three ranged energy beams before' +
		' warping'),
	new Weapon ('Royal Arm','Star of the Rogue',177,1,0,0,0,0,0,0,20,20,20,0,0,0,'',
		'A shuriken capable of dealing multiple piercing ranged hits in rapid succession either' +
		' on different targets or on the various body parts of a single target'),
	new Weapon ('Royal Arm','Sword of the Tall',518,1,200,0,0,0,0,-30,-40,-40,-40,-40,0,0,
		'','A greatsword with a chainsaw effect, dealing multiple hits with each ' +
		'blow. The warp-strike is 3 horizontal swings'),
	new Weapon ('Royal Arm','Shield of the Just',251,0,1000,-50,-100,200,0,0,10,10,10,10,10,0,
		'','A shield that enables cover status when guarding, enabling HP recovery ' +
		'at the cost of MP. It can block normally unblockable attacks and negate most of the ' +
		'damage. The radius of its warp-strike is very wide'),
	new Weapon ('Royal Arm','Mace of the Fierce',334,1,300,0,0,0,0,0,0,0,0,0,-50,0,'',
		'A mace with the ability to deal grievous breakage to body parts/appendages'),
	new Weapon ('Royal Arm','Scepter of the Pious',237,2,0,0,0,0,150,0,0,0,0,50,0,0,'',
		'A scepter that takes on the forms of several other royal arms to perform a variety of ' +
		'attacks. Its damage is based on the magic stat.'),
	new Weapon ('Royal Arm','Trident of the Oracle',388,4,0,60,0,0,0,0,0,0,0,0,0,0,'',
		'A polearm that produces afterimages after attacks that deal damage to nearby foes'),
	new Weapon ('Royal Arm','Katana of the Warrior',361,2,0,0,0,0,0,100,25,25,25,-50,0,0,
		'','A longsword that attacks quickly and relentlessly after startup. Can ' +
		'spam warp-strikes very quickly'),
	new Weapon ('Royal Arm','Sword of the Father',141,5,0,0,100,0,100,0,0,0,0,0,0,0,'',
		'A sword that increases its wielder\'s Strength after Finishers. Drains less HP compared' +
		' to other royal arms'),
	new Weapon ('Ring','Ring of the Lucii',0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Death/Light',
		'It lets the player use a special type of magic and cast three unique spells: Death, ' +
		'Holy and Alterna')];

//Accessories
const accessoryList = [
	new Accessory ('','All','None',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Bronze Bangle',50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Iron Bangle',100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Carbon Bangle',150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Titanium Bangle',200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Silver Bangle',300,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Gold Bangle',500,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Platinum Bangle',700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Centurion Bangle',1000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Legatus Bangle',1200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Gigas Bangle',1500,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Onion Bangle',2500,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP','All','Adamantite Bangle',10000,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MP','Noctis','Soul of Thamasa',0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('HP Recovery Rate','All','White Choker',0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,'',''),
	new Accessory ('HP Recovery Rate','All','Green Choker',0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,'',''),
	new Accessory ('HP Recovery Rate','All','Blue Choker',0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,'',''),
	new Accessory ('HP Recovery Rate','All','HP-8700K Booster',0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,'',
		''),
	new Accessory ('HP Recovery Rate','All','Red Choker',0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,'',''),
	new Accessory ('HP Recovery Rate','All','Black Choker',0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,'',''),
	new Accessory ('HP Recovery Rate','Gladiolus','Megaphone',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+10 HP Recovery Rate for the whole party'),
	new Accessory ('MP Recovery Rate','Noctis','Robe of the Lord',0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,
		'',''),
	new Accessory ('MP Recovery Rate','Noctis','MP-8700K Booster',0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,
		0,'',''),
	new Accessory ('STR','All','Garnet Bracelet',0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Amethyst Bracelet',0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Heliodor Bracelet',0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Sapphire Bracelet',0,0,45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Ruby Bracelet',0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Emerald Bracelet',0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Diamond Bracelet',0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Blue Diamond Bracelet',0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('STR','All','Dark Matter Bracelet',0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('VIT','All','Soldier\'s Anklet',0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('VIT','All','Warrior\'s Anklet',0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('VIT','All','Fencer\'s Anklet',0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('VIT','All','Knight\'s Anklet',0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('VIT','All','Crusader\'s Anklet',0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('VIT','All','Champion\'s Anklet',0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('VIT','All','Emperor\'s Anklet',0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Anklet of the Gods',0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Amulet',0,0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Angel Earring',0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Talisman',0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Rune Earring',0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Circlet',0,0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Oracle Earring',0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Mystic Circlet',0,0,0,0,250,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('MAG','All','Hypno Crown',0,0,0,0,300,0,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','Potpourri',0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','White Sage',0,0,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','Power Stone',0,0,0,0,0,60,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','Oracle Card',0,0,0,0,0,70,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','Pendulum',0,0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','Lavender Oil',0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','Purified Salt',0,0,0,0,0,120,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('SPR','All','Tarot Card',0,0,0,0,0,150,0,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('Multiple Stats','All','Assist Suit',500,0,30,20,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		''),
	new Accessory ('Multiple Stats','All','Magitek Suit',1000,0,70,50,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		''),
	new Accessory ('Multiple Stats','All','Magitek Suit V2',2000,0,100,70,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'',''),
	new Accessory ('Multiple Stats','All','Tempered Shield',800,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		''),
	new Accessory ('Multiple Stats','All','Magitek Shield',1000,0,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		''),
	new Accessory ('Multiple Stats','All','Trihead Heart',1000,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,'',
		''),
	new Accessory ('Multiple Stats','Noctis','Auto-changer',100,0,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'','Automatically switches to the next clockwise weapon after each attack or combo'),
	new Accessory ('Multiple Stats','Noctis','Rare Metal',0,0,500,-500,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Attacks can break the damage limit. HP reduced to 10% (rounded) before food or attire ' +
		'bonus'),
	new Accessory ('Fire Resistance','All','Fireproof Inners',0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,'',
		''),
	new Accessory ('Fire Resistance','All','Fire Crest',0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('Ice Resistance','All','Warm Inners',0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('Ice Resistance','All','Ice Crest',0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,'',''),
	new Accessory ('Lightning Resistance','All','Insulated Inners',0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,
		0,'',''),
	new Accessory ('Lightning Resistance','All','Lightning Crest',0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,
		0,'',''),
	new Accessory ('Dark Resistance','All','Anti-darkness Inners',0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,
		0,'',''),
	new Accessory ('Dark Resistance','All','Dark Crest',0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,'',''),
	new Accessory ('Shot Resistance','All','Bulletproof Vest',0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,'',
		''),
	new Accessory ('Shot Resistance','All','Bulletproof Suit',0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0,0,'',
		''),
	new Accessory ('Shot Resistance','All','Chobham',0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,'',''),
	new Accessory ('Multiple Resistances','All','Celestriad',0,0,0,0,0,0,30,30,30,0,0,0,0,0,0,0,0,
		'',''),
	new Accessory ('Multiple Resistances','All','Mighty Guard',0,0,0,0,0,0,30,30,30,30,0,0,0,0,0,0,
		0,'',''),
	new Accessory ('Multiple Resistances','All','Stone Wall',0,0,0,0,0,0,30,30,0,0,30,0,0,0,0,0,0,
		'',''),
	new Accessory ('Multiple Resistances','All','Genji Gloves',0,0,0,0,0,0,0,0,30,30,30,0,0,0,0,0,0,
		'',''),
	new Accessory ('Multiple Stats & Resistances','Gladiolus','The Tall\'s Talisman',10,10,10,10,10,
		10,10,10,10,10,10,10,0,0,0,0,0,'','Increases the growth rate of the Valor gauge'),
	new Accessory ('Multiple Stats & Resistances','Ignis','The Wanderer\'s Talisman',10,10,10,10,10,
		10,10,10,10,10,10,10,0,0,0,0,0,'','Increases growth rate of the Total Clarity gauge'),
	new Accessory ('Multiple Stats & Resistances','Prompto','The Clever\'s Talisman',10,10,10,10,10,
		10,10,10,10,10,10,10,0,0,50,0,0,'','Rapidus SMG never runs out of ammo'),
	new Accessory ('Immunities','All','Star Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Poison',''),
	new Accessory ('Immunities','All','Rainbow Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'Confusion',''),
	new Accessory ('Immunities','All','Moon Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Toad',''),
	new Accessory ('Immunities','All','Earth Pendant',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Stone',''),
	new Accessory ('Immunities','All','Golden Hourglass',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'Stop',
		''),
	new Accessory ('Immunities','All','Safety Bit',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'Instant Death',''),
	new Accessory ('Immunities','All','Ribbon',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'All',''),
	new Accessory ('AP','All','Blitzer\'s Fanfare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+2 AP when getting A+ in Time in non-training battle'),
	new Accessory ('AP','All','Tactician\'s Fanfare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+4 AP when getting A+ in Finesse in non-training battle'),
	new Accessory ('AP','All','Warrior\'s Fanfare',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+1 AP when getting A+ in Offense in non-training battle'),
	new Accessory ('EXP','All','Moogle Charm',0,0,0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,'',''),
	new Accessory ('EXP','All','Nixperience Band',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'XP not tallied when resting'),
	new Accessory ('Phase Cost','Noctis','Thieves\' Way',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-20,0,'',''),
	new Accessory ('Phase Cost','Noctis','Thieves\' Way II',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-40,0,'',
		''),
	new Accessory ('Cosmetic','All','Towel',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'No dirt accumulation'),
	new Accessory ('Cosmetic','All','Handkerchief',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Reduced dirt accumulation'),
	new Accessory ('Cosmetic','All','White Sneakers',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Increased dirt accumulation'),
	new Accessory ('Cosmetic','All','Bandage',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Prevents bloodstains'),
	new Accessory ('Cosmetic','All','Styling Gel',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Retains hairstyle in any weather'),
	new Accessory ('Automatic Item Usage','Noctis','Field Medicine',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,'','Automatically uses a Potion when HP falls to half'),
	new Accessory ('Automatic Item Usage','Noctis','Applied Sorcery',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,'','Automatically uses an Ether when MP falls to half'),
	new Accessory ('Automatic Item Usage','Ignis','The Good Chamberlain',0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,'','Ignis automatically uses a Hi-Potion when the player-controlled character\'s ' +
		'HP falls to half'),
	new Accessory ('Automatic Item Usage','Ignis','The Grand Chamberlain',0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,'','Ignis automatically uses an Elixir when the player-controlled character\'s ' +
		'maximum HP falls to half'),
	new Accessory ('Other Utility','All','Ring of Resistance',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'All allies become immune to friendly fire from Elemancy'),
	new Accessory ('Other Utility','All','Key of Prosperity',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,'',
		''),
	new Accessory ('Other Utility','All but Noctis','Friendship Band',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,'','Increases link-strike activation radius'),
	new Accessory ('Other Utility','Noctis','Black Hood',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Enables auto-parries and automatic phasing through attacks'),
	new Accessory ('Other Utility','Noctis','Tech Turbocharger',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'','Doubles Tech bar increase rate. Prevents Armiger bar from increasing'),
	new Accessory ('Other Utility','Noctis','Armiger Accelerator',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		'','Doubles Armiger bar increase rate. Prevents Tech bar from increasing'),
	new Accessory ('Other Utility','Noctis','Stamina Badge',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'Infinite Stamina'),
	new Accessory ('Other Utility','Noctis','The Founder King\'s Sigil',0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,'','Enables Armiger Unleashed'),
	new Accessory ('Other Utility','Gladiolus','Black Belt',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+50% damage to larger enemies'),
	new Accessory ('Other Utility','Prompto','Target Scope',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+50% damage to small enemies'),
	new Accessory ('Other Utility','Prompto','Camera Strap',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,'',
		'+5 to max photos per day')];

//--------------------------------------------------------------------
//Fill up Food dropdown list (never changes, so only run once).
//--------------------------------------------------------------------

const foodBox = document.getElementById('food');
let foodBoxString = '';//The total string to use as the inner HTML.
let currentFoodType = '';//Keep track of changing categories to add a new optgroup each time.

foodBoxString += '<option value="0" selected>None</option>\n';//Add 'None' option.
for (let i = 1; i < foodList.length; i++) {//Read list of food and make option tags.
    if (currentFoodType != foodList[i].type) {
        foodBoxString += '<optgroup label="' + '-' + foodList[i].type +
        	'------"></optgroup>\n';//Make optgroup tags
        currentFoodType = foodList[i].type;
    }

   	foodBoxString += '<option value="' + i + '" data-toggle="tooltip" data-placement="right"' +
    	' title="' + foodList[i].getTooltipMessage() + '">' + foodList[i].name + '</option>\n';
}

foodBox.innerHTML = foodBoxString;//Fill up the dropdown list.

//--------------------------------------------------------------------
//Calculations
//--------------------------------------------------------------------

//Update the dropdown lists to the currently selected character.
function updateCharacter() {

	const char = charList[document.getElementById('character').value];
	const noneOption = '<option value="0" selected>None</option>\n';

   	//--------------------------------------------------------------------
	//Compute strings to use as the new dropdown lists.
	//--------------------------------------------------------------------
    
    //---Attire---
    let newAttireListString = noneOption;//Initialize Attire dropdown list with "None" option.
    for (let i = 1; i < attireList.length; i++) {
        if (attireList[i].equip == char.name || attireList[i].equip == 'All') {
            newAttireListString += '<option value="' + i + '" data-toggle="tooltip" ' +
            	'data-placement="right" title="' + attireList[i].getTooltipMessage() + '">' +
            	attireList[i].name + '</option>\n';
        }
        else if (char.name != 'Noctis' && attireList[i].equip == 'All but Noctis') {
        	newAttireListString += '<option value="' + i + '" data-toggle="tooltip" ' +
            	'data-placement="right" title="' + attireList[i].getTooltipMessage() + '">' +
            	attireList[i].name + '</option>\n';
        }
    }

    //---Weapons---
	let newWeaponListString1 = noneOption;//Initialize new Weapon dropdown list with "None" option.
	let newWeaponListString2 = noneOption;//Only used when character is not Noctis.
    if (char.name == 'Noctis') {
    	let currentWepType = '';//Keep track of changing categories to add a new optgroup each time.
    	for (let i = 1; i < weaponList.length; i++) {
	        if (currentWepType != weaponList[i].type) {
	            newWeaponListString1 += '<optgroup label="' + '----' + weaponList[i].type +
	            	'----"></optgroup>\n';
	            currentWepType = weaponList[i].type;
	        }
	        newWeaponListString1 += '<option value="' + i + '" data-toggle="tooltip" ' +
            	'data-placement="right" title="' + weaponList[i].getTooltipMessage() + '">' +
            	weaponList[i].name + '</option>\n';
	    }
    }
    else { //Not Noctis.
    	//Set the 2 weapon types for the character.
    	newWeaponListString1 += '<optgroup label="----' + char.weaponType1 + '----"></optgroup>\n';
        newWeaponListString2 += '<optgroup label="----' + char.weaponType2 + '----"></optgroup>\n';
    	for (let i = 1; i < weaponList.length; i++) {
    	 	if (weaponList[i].type == char.weaponType1) {
    	 		if (weaponList[i].name == 'Cerberus')
    	 			;//Do nothing and skip it cause only Noctis an equip it.
    	 		else {
    	 			newWeaponListString1 += '<option value="' + i + '" data-toggle="tooltip" ' +
		            	'data-placement="right" title="' + weaponList[i].getTooltipMessage() +
		            	'">' + weaponList[i].name + '</option>\n';
    	 		}
    	 	}
    	 	else if (weaponList[i].type == char.weaponType2) {
    	 		newWeaponListString2 += '<option value="' + i + '" data-toggle="tooltip" ' +
	            	'data-placement="right" title="' + weaponList[i].getTooltipMessage() + '">' +
	            	weaponList[i].name + '</option>\n';
    	 	}
	    }
    }

    //---Accessories---
    let currentAccType = '';//Keep track of changing categories to add a new optgroup each time.
    let newAccessoryListString = noneOption;//Initialize Accessory dropdown list with "None" option.
    for (let i = 1; i < accessoryList.length; i++) {
        if (accessoryList[i].equip == char.name || accessoryList[i].equip == 'All') {
	    	if (currentAccType != accessoryList[i].category) {
	    		newAccessoryListString += '<optgroup label="' + '----' + accessoryList[i].category +
	    			'----"></optgroup>\n';
	            currentAccType = accessoryList[i].category;
	    	}

            newAccessoryListString += '<option value="' + i + '" data-toggle="tooltip" ' +
	            	'data-placement="right" title="' + accessoryList[i].getTooltipMessage() + '">' +
	            	accessoryList[i].name + '</option>\n';
        }
        else if (char.name != 'Noctis' && accessoryList[i].equip == 'All but Noctis') {//Not Noctis.
        	if (currentAccType != accessoryList[i].category) {
	    		newAccessoryListString += '<optgroup label="' + '----' + accessoryList[i].category +
	    			'----"></optgroup>\n';
	            currentAccType = accessoryList[i].category;
	    	}

        	newAccessoryListString += '<option value="' + i + '" data-toggle="tooltip" ' +
	            	'data-placement="right" title="' + accessoryList[i].getTooltipMessage() + '">' +
	            	accessoryList[i].name + '</option>\n';
        }
    }

   	//--------------------------------------------------------------------
	//Update DOM with new dropdown lists
	//--------------------------------------------------------------------

	//---Attire---
	//Get Attire dropdown list element.
    const attireBox =  document.getElementById('attire');

    //Save previous selection.
    const oldAttireValue = attireBox.value;

    //Replace dropdown list.
    attireBox.innerHTML = newAttireListString;

    //Restore old selection only if the new char can equip the same attire.
    if (canEquipAttire(char.name, attireList[oldAttireValue].equip)) {
    	attireBox.value = oldAttireValue;
    }

    //---Weapons---
	//Get Weapon dropdown list elements.
    const weapon1Box = document.getElementById('weapon1');
    const weapon2Box = document.getElementById('weapon2');
    const weapon3Box = document.getElementById('weapon3');
    const weapon4Box = document.getElementById('weapon4');
    const equippedRadios = document.getElementsByName('equipped');

    //Save previous selection.
    const oldWeapon1BoxValue = weapon1Box.value;
    const oldWeapon2BoxValue = weapon2Box.value;

    if (char.name == 'Noctis') {
    	weapon3Box.disabled = false;//Enable weapons 3 and 4 since Noctis can use 4 weapons.
    	weapon4Box.disabled = false;
    	equippedRadios[2].disabled = false;//Enable back radio buttons.
    	equippedRadios[3].disabled = false;

    	//Replace dropdown lists.
    	weapon1Box.innerHTML = newWeaponListString1;
    	weapon2Box.innerHTML = newWeaponListString1;
    	weapon3Box.innerHTML = newWeaponListString1;
    	weapon4Box.innerHTML = newWeaponListString1;
    }
    else {//Not Noctis
		weapon3Box.disabled = true;//Disable Weapons 3 and 4 if not Noctis.
		weapon4Box.disabled = true;
		equippedRadios[2].disabled = true;//Disable respective radio buttons.
		equippedRadios[3].disabled = true;

		//Change checkmark to weapon 1, if 3 or 4 were checked.
		if (equippedRadios[2].checked || equippedRadios[3].checked) {
			equippedRadios[0].checked = true;
		}

    	//Replace dropdown lists.
    	weapon1Box.innerHTML = newWeaponListString1;
    	weapon2Box.innerHTML = newWeaponListString2;
    	weapon3Box.innerHTML = noneOption;//To clear previous values if any.
    	weapon4Box.innerHTML = noneOption;
    }

    //Restore old selection only if the new char can equip the same weapons.
    if (canEquipWeapon(char.weaponType1, weaponList[oldWeapon1BoxValue]))
    	weapon1Box.value = oldWeapon1BoxValue;
    if (canEquipWeapon(char.weaponType2, weaponList[oldWeapon2BoxValue]))
    	weapon2Box.value = oldWeapon2BoxValue;

    //---Accessories---
	//Get Accessory dropdown list elements.
    const acc1Box = document.getElementById('accessory1');
    const acc2Box = document.getElementById('accessory2');
    const acc3Box = document.getElementById('accessory3');

    //Save previous selection.
    const oldAcc1BoxValue = acc1Box.value;
    const oldAcc2BoxValue = acc2Box.value;
    const oldAcc3BoxValue = acc3Box.value;

    //Replace dropdown lists.
    acc1Box.innerHTML = newAccessoryListString;
    acc2Box.innerHTML = newAccessoryListString;
    acc3Box.innerHTML = newAccessoryListString;

    //Restore old selection only if the new char can equip the same accessories.
    if (canEquipAccessory(char.name, accessoryList[oldAcc1BoxValue].equip))
    	acc1Box.value = oldAcc1BoxValue;
    if (canEquipAccessory(char.name, accessoryList[oldAcc2BoxValue].equip))
    	acc2Box.value = oldAcc2BoxValue;
    if (canEquipAccessory(char.name, accessoryList[oldAcc3BoxValue].equip))
    	acc3Box.value = oldAcc3BoxValue;

    updateData();//Compute the result screen with the new values.
}

//Update the entire right-hand side of the screen.
function updateData() {

    const levelBox = document.getElementById('level');
    //Limit level input to integers between [1,120], change the input to value in range.
    const level = Math.round(limit(levelBox.value,1,120));//Limit input to int range [1,120].
    levelBox.value = level;//Change the input to value in range.

    const char = charList[document.getElementById('character').value];//Get selected character.

    //Change the pixel image of the character to the new character.
    document.getElementById('CharacterImage').src = 'assets/img/' + char.name + 'Pixel.png';

    //Get base stats for the character and all equipped items.
    const baseStats = char.baseStats[level - 1];
    const attire = attireList[document.getElementById('attire').value];
    const food = foodList[document.getElementById('food').value];

    const weapon = [weaponList[document.getElementById('weapon1').value],
        weaponList[document.getElementById('weapon2').value],
        weaponList[document.getElementById('weapon3').value],
        weaponList[document.getElementById('weapon4').value]];

    const accessory = [accessoryList[document.getElementById('accessory1').value],
        accessoryList[document.getElementById('accessory2').value],
        accessoryList[document.getElementById('accessory3').value]];

    //Read radio buttons for selected one.
    const equippedRadios = document.getElementsByName('equipped');
    let equipped;
    for (let i = 0; i < equippedRadios.length; i++) {
        if (equippedRadios[i].checked) {
            equipped = i;
            break;
        }
    }

    //Get ascencion upgrades selected.
    const healthLevel = document.getElementById('healthLevel').value;
    const experimagic = +document.getElementById('experimagic').checked;
    const strLevel = +document.getElementById('strLevel').checked;
    const vitLevel = +document.getElementById('vitLevel').checked;
    const magLevel = document.getElementById('magLevel').value;
    const sprLevel = +document.getElementById('sprLevel').checked;

    //HP,HPRec, MP, MPRec
   	let rareMetalHP = 0;
    if (accessory[0].name == 'Rare Metal' || accessory[1].name == 'Rare Metal' ||
    	accessory[2].name == 'Rare Metal') {
    	//Gives HP to remove, makes input negative to round down on .5 cases.
    	rareMetalHP = Math.round(-((baseStats.hp + weapon[0].hp + weapon[1].hp + weapon[2].hp +
    		weapon[3].hp + accessory[0].hp + accessory[1].hp + accessory[2].hp + (healthLevel *
    		baseStats.level)) * 0.9));
    }

    let hp = Math.floor(baseStats.hp * (1 + attire.hpBonus/100)) + Math.round((1 + attire.hpBonus/100) *
    	(weapon[0].hp + weapon[1].hp + weapon[2].hp + weapon[3].hp + accessory[0].hp +
        accessory[1].hp + accessory[2].hp + (healthLevel * baseStats.level))) + food.hp +
    	rareMetalHP;
    let hpLimited = limit(hp,1,9999);

    if (food.effect == 'Last Stand') {
    	hpLimited = Math.floor(hpLimited/10);
    }

    let hprec = char.hprec + weapon[0].hprec + weapon[1].hprec + weapon[2].hprec + weapon[3].hprec +
    	accessory[0].hprec + accessory[1].hprec + accessory[2].hprec + attire.hprec + food.hprec;

    let mp = Math.floor(baseStats.mp * (1 + attire.mpBonus/100)) + Math.round((1 + attire.mpBonus/100) *
    	(weapon[0].mp + weapon[1].mp + weapon[2].mp + weapon[3].mp + accessory[0].mp +
		accessory[1].mp + accessory[2].mp + (experimagic * baseStats.level)));
    let mpLimited = limit(mp,1,999);

    let mprec = char.mprec + accessory[0].mprec + accessory[1].mprec + accessory[2].mprec +
    	attire.mprec;

    //Str,Vit,Mag,Spr
    let str = Math.floor(baseStats.str * (1 + attire.strBonus/100)) + Math.round((1 +
        attire.strBonus/100) * (weapon[0].str + weapon[1].str + weapon[2].str + weapon[3].str +
        accessory[0].str + accessory[1].str + accessory[2].str + (strLevel * baseStats.level))) +
    	food.str;
    let strLimited = limit(str,0,9999);

    let vit = Math.floor(baseStats.vit * (1 + attire.vitBonus/100)) + Math.round((1 +
        attire.vitBonus/100) * (weapon[0].vit + weapon[1].vit + weapon[2].vit + weapon[3].vit +
        accessory[0].vit + accessory[1].vit + accessory[2].vit + (vitLevel * baseStats.level))) +
    	food.vit;
    let vitLimited = limit(vit,0,9999);

    let mag = Math.floor(baseStats.mag * (1 + attire.magBonus/100)) + Math.round((1 +
    	attire.magBonus/100) * (weapon[0].mag + weapon[1].mag + weapon[2].mag + weapon[3].mag +
    	accessory[0].mag + accessory[1].mag + accessory[2].mag + (magLevel * baseStats.level))) +
    	food.mag;
    let magLimited = limit(mag,0,9999);

    let spr = Math.floor(baseStats.spr * (1 + attire.sprBonus/100)) + Math.round((1 +
    	attire.sprBonus/100) * (weapon[0].spr + weapon[1].spr + weapon[2].spr + weapon[3].spr +
    	accessory[0].spr + accessory[1].spr + accessory[2].spr + (sprLevel * baseStats.level))) +
    	food.spr;
    let sprLimited = limit(spr,0,9999);

    //Special Case - Prime Food Effect.
    if (food.effect == 'Prime' || food.effect == 'Prime Endurance') {
    	str = Math.round(str * 0.75);
    	strLimited = limit(str,0,9999);
    	mag = Math.round(mag * 0.75);
    	magLimited = limit(mag,0,9999);
    }

    //Attack, Defense, Crit
    let attack = weapon[equipped].attack + strLimited;
    let defense = vitLimited;
    let crit = weapon[equipped].crit + accessory[0].crit + accessory[1].crit + accessory[2].crit +
    	attire.crit + food.crit;
    let critLimited = limit(crit,0,100);

    //Physical Damage
    let physicalDamageValueString = '';
    if (weapon[equipped].type == 'Ring'){
    	physicalDamageValueString = '';//Add nothing
    }
    else if (weapon[equipped].type == 'Firearm') {//Add the word 'Shot' as well on Firearms.
    	physicalDamageValueString = '<span class="firearm">Firearm</span>/<span class="shot">' +
    		'Shot</span>';
    }
    else if (weapon[equipped].type == 'Royal Arm') {//Write in the 'royal-arm' class correctly.
    	physicalDamageValueString = '<span class="royal-arm">Royal Arm</span>';
    }
    else {
    	physicalDamageValueString = '<span class="' + weapon[equipped].type.toLowerCase() + '">' +
    		weapon[equipped].type + '</span>';
    }

    //Magical Damage
    let magicalDamageValueString = '';
    if (weapon[equipped].type == 'Ring'){
    	magicalDamageValueString = '<span class="death">Death</span>/<span class="light">' +
    		'Light</span>';
    }
    else {
    	magicalDamageValueString = '<span class="' + weapon[equipped].element.toLowerCase() + '">' +
    		weapon[equipped].element + '</span>';
    }

    //Elemental
    let fire = attire.fire + weapon[0].fire + weapon[1].fire + weapon[2].fire + weapon[3].fire +
        accessory[0].fire + accessory[1].fire + accessory[2].fire + food.fire;
    let fireLimited = limit(fire,-899,100);

    let ice = attire.ice + weapon[0].ice + weapon[1].ice + weapon[2].ice + weapon[3].ice +
        accessory[0].ice + accessory[1].ice + accessory[2].ice + food.ice;
    let iceLimited = limit(ice,-899,100);

    let lightning = attire.lightning + weapon[0].lightning + weapon[1].lightning + weapon[2].lightning +
    	weapon[3].lightning + accessory[0].lightning + accessory[1].lightning +
    	accessory[2].lightning + food.lightning;
    let lightningLimited = limit(lightning,-899,100);

    let dark = attire.dark + weapon[0].dark + weapon[1].dark + weapon[2].dark + weapon[3].dark +
        accessory[0].dark + accessory[1].dark + accessory[2].dark;
    let darkLimited = limit(dark,-899,100);

    let shot = attire.shot + weapon[0].shot + weapon[1].shot + weapon[2].shot + weapon[3].shot +
        accessory[0].shot + accessory[1].shot + accessory[2].shot;
    let shotLimited = limit(shot,-899,100);

    //TDA's
    let tdaPhysical = hpLimited * (1 + vitLimited/100);
    let tdaMagical = hpLimited * (1 + sprLimited/100);
    let tdaFire = tdaMagical / (1 - fireLimited/100);
    let tdaIce = tdaMagical / (1 - iceLimited/100);
    let tdaLightning = tdaMagical / (1 - lightningLimited/100);
    let tdaDark = tdaMagical / (1 - darkLimited/100);
    let tdaShot = tdaPhysical / (1 - shotLimited/100);

    //Special Cases - Resistant Food Effect, Thermal Suit.
    if (food.effect == 'Resistant') {
    	tdaFire = Infinity;
    	tdaIce = Infinity;
    	tdaLightning = Infinity;
    }
    else if (attire.name == 'Thermal Suit') {
    	tdaFire = Infinity;
    }

    //Extras
    let itemDrop = accessory[0].itemDrop + accessory[1].itemDrop + accessory[2].itemDrop +
    	attire.itemDrop + food.itemDrop;
    let itemDropLimited = limit(itemDrop,0,100);

    let xpBonus = accessory[0].xpBonus + accessory[1].xpBonus + accessory[2].xpBonus + food.xpBonus;

   	let phase = accessory[0].phase + accessory[1].phase + accessory[2].phase +
   		attire.phase;
   	let phaseLimited = limit(phase,-100,0);

   	//Accumulated XP and XP needed to reach level 120.
   	const xpBox = document.getElementById('xp');//Get current XP.
    const currentXp = Math.round(limit(xpBox.value,0,Infinity));//Limit input to int range [0,Inf].
    xpBox.value = currentXp;//Change the input to value in range.
    const currentXpWithLodgingBonus = Math.round(currentXp *
    	document.getElementById('LodgingXPBonus').value);//Rounded to nearest integer.

    //Add up all the accumulated XP from previous levels.
    let xp = 0;
    let j = 0;//Gonna re-use this index.
    for (j; j < level - 1; j++) {
    	xp += xpRequired[j];
    }
    xp += currentXpWithLodgingBonus;//Add the current XP with lodging bonus.

    //Add up all the XP required to reach 120.
    let xpTo120 = -currentXpWithLodgingBonus;//Start by removing current XP with lodging bonus.
    for (j; j < xpRequired.length; j++) {//Continue previous loop to the end for XP left to acquire.
    	xpTo120 += xpRequired[j];
    }

   	//Immunities
    const immunitiesBox = document.getElementById('ExtrasImmunities');
    let immunitiesValueString = '';

    if (attire.immunity != '') {
    	immunitiesValueString += '<strong>' + attire.name + ':</strong> ' + attire.immunity +
    		'<br>';
    }

    if (food.immunity != '') {
    	immunitiesValueString += '<strong>' + food.name + ':</strong> ' + food.immunity + '<br>';
    }

    for (let i = 0; i < accessory.length; i++) {
    	if (accessory[i].immunity != '') {
    		immunitiesValueString += '<strong>' + accessory[i].name + ':</strong> ' +
    			accessory[i].immunity + '<br>';
    	}
    }

   	//Notes
    const notesBox = document.getElementById('Notes');
    let notesValueString = '';//Initialize string
    
    if (attire.effect != '')
        notesValueString += '<strong>' + attire.name + ':</strong> ' + attire.effect + '.<br>';

    if (food.effect != '')
        notesValueString += '<strong>' + food.name + ':</strong> ' + food.description + '.<br>';

    if (food.favorite == char.name) {
    	if (char.name == 'Noctis') {
    		notesValueString += '<strong>Favorite Food:</strong> +100% to tech bar fill ' +
    			'rate.<br>';
    	}
    	else {
    		notesValueString += '<strong>Favorite Food:</strong> +100% to tech leveling rate ' +
    			'and always perform critical versions of techniques.<br>';
    	}
    }

    if (weapon[equipped].effect != '') {
        notesValueString += '<strong>' + weapon[equipped].name +
            ':</strong> ' + weapon[equipped].effect + '.<br>';
    }

    for (let i = 0; i < accessory.length; i++) {
    	if (accessory[i].effect != '') {
	    	notesValueString += '<strong>' + accessory[i].name +
	            ':</strong> ' + accessory[i].effect + '.<br>';
	    }
    }

	//--------------------------------------------------------------------
	//Dump all the data on screen at once
	//--------------------------------------------------------------------

    //TDA
    document.getElementById('TDAPhysical').innerHTML = insertCommas(
    	Math.round(tdaPhysical).toString());
    document.getElementById('TDAMagical').innerHTML = insertCommas(
    	Math.round(tdaMagical).toString());
    document.getElementById('TDAFire').innerHTML = insertCommas(replaceWithInfSymbol(
    	Math.round(tdaFire)));
    document.getElementById('TDAIce').innerHTML = insertCommas(replaceWithInfSymbol(
    	Math.round(tdaIce)));
    document.getElementById('TDALightning').innerHTML = insertCommas(replaceWithInfSymbol(
    	Math.round(tdaLightning)));
    document.getElementById('TDADark').innerHTML = insertCommas(replaceWithInfSymbol(
    	Math.round(tdaDark)));
    document.getElementById('TDAShot').innerHTML = insertCommas(replaceWithInfSymbol(
    	Math.round(tdaShot)));

    //Stats
    document.getElementById('StatsHP').innerHTML = displayDifferenceIfAny(hpLimited,hp,'');
    document.getElementById('StatsMP').innerHTML = displayDifferenceIfAny(mpLimited,mp,'');
    document.getElementById('StatsAttack').innerHTML = attack;
    document.getElementById('StatsDefense').innerHTML = defense;

    document.getElementById('StatsHPRec').innerHTML = (hprec/10) + '%';
    document.getElementById('StatsMPRec').innerHTML = (mprec/10) + '%';
    document.getElementById('StatsCrit').innerHTML = displayDifferenceIfAny(critLimited,crit,'%');
    document.getElementById('StatsPhysicalDamage').innerHTML = physicalDamageValueString;
	document.getElementById('StatsMagicalDamage').innerHTML = magicalDamageValueString;

    document.getElementById('StatsSTR').innerHTML = displayDifferenceIfAny(strLimited,str,'');
    document.getElementById('StatsVIT').innerHTML = displayDifferenceIfAny(vitLimited,vit,'');
    document.getElementById('StatsMAG').innerHTML = displayDifferenceIfAny(magLimited,mag,'');
    document.getElementById('StatsSPR').innerHTML = displayDifferenceIfAny(sprLimited,spr,'');
    document.getElementById('StatsFire').innerHTML = displayDifferenceIfAny(fireLimited,fire,'%');
    document.getElementById('StatsIce').innerHTML = displayDifferenceIfAny(iceLimited,ice,'%');
    document.getElementById('StatsLightning').innerHTML = displayDifferenceIfAny(lightningLimited,
    	lightning,'%');
    document.getElementById('StatsDark').innerHTML = displayDifferenceIfAny(darkLimited,dark,'%');
    document.getElementById('StatsShot').innerHTML = displayDifferenceIfAny(shotLimited,shot,'%');

    //Extras
   	document.getElementById('ExtrasIDR').innerHTML = displayDifferenceIfAny(itemDropLimited,
   		itemDrop,'%');
    document.getElementById('ExtrasXP').innerHTML = '+' + xpBonus + '%';
    document.getElementById('ExtrasPhase').innerHTML = displayDifferenceIfAny(phaseLimited,phase,
    	'%');

    document.getElementById('ExtrasAccumulatedXP').innerHTML = insertCommas(xp.toString());
    document.getElementById('ExtrasXP120').innerHTML = displayXpDifferenceIfAny(xpTo120);

    if (immunitiesValueString == '') {
    	document.getElementById('ExtrasImmunitiesLabel').innerHTML = '';//Remove title of section.
    	immunitiesBox.innerHTML = '';//Clear contents if any were there
    }
    else {
    	document.getElementById('ExtrasImmunitiesLabel').innerHTML = '- - - - - - - - - - - - - ' +
    		'- Immunities - - - - - - - - - - - - - -';//write title of section.
    	immunitiesBox.innerHTML = immunitiesValueString;
    }

    //Notes
    if (notesValueString == '') {
    	document.getElementById('NotesContainer').style.display = 'none';
    	notesBox.innerHTML = '';//Clear contents if any were there
    }
    else {
    	document.getElementById('NotesContainer').style.display = 'block';
    	notesBox.innerHTML = notesValueString;
    }


}

updateCharacter();//Run once to fill up result screen with initial data.

//Add event listeners
document.getElementById('character').addEventListener('change', updateCharacter);
document.getElementById('level').addEventListener('change', updateData);
document.getElementById('xp').addEventListener('change', updateData);
document.getElementById('LodgingXPBonus').addEventListener('change', updateData);
document.getElementById('attire').addEventListener('change', updateData);
document.getElementById('food').addEventListener('change', updateData);

document.getElementById('weapon1').addEventListener('change', updateData);
document.getElementById('weapon2').addEventListener('change', updateData);
document.getElementById('weapon3').addEventListener('change', updateData);
document.getElementById('weapon4').addEventListener('change', updateData);

let radios = document.getElementsByName('equipped');
for (let i = 0; i < radios.length; i++) {
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