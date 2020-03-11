// Empty JS for your own code to be here

const noctBaseStatsByLevel = [{level:1, hp:325, mp:75, str:19, vit:22, mag:63, spr: 40},
{level:2, hp:331, mp:77, str:20, vit:23, mag:71, spr: 41},
{level:3, hp:336, mp:79, str:20, vit:23, mag:77, spr: 41},
{level:4, hp:342, mp:81, str:21, vit:24, mag:84, spr: 42},
{level:5, hp:349, mp:83, str:21, vit:24, mag:90, spr: 42},
{level:6, hp:356, mp:85, str:22, vit:25, mag:96, spr: 43},
{level:7, hp:364, mp:87, str:23, vit:25, mag:101, spr: 43},
{level:8, hp:372, mp:89, str:24, vit:26, mag:107, spr: 44},
{level:9, hp:382, mp:91, str:26, vit:26, mag:112, spr: 44},
{level:10, hp:391, mp: 93, str:27, vit:27, mag:117, spr:45},
{level:11, hp:402, mp: 95, str:28, vit:27, mag:122, spr:45},
{level:12, hp:413, mp: 97, str:30, vit:28, mag:127, spr:46},
{level:13, hp:426, mp: 99, str:31, vit:28, mag:131, spr:46},
{level:14, hp:439, mp: 101, str:32, vit:28, mag:136, spr:46},
{level:15, hp:452, mp: 103, str:34, vit:29, mag:140, spr:47},
{level:16, hp:469, mp: 105, str:35, vit:29, mag:145, spr:47},
{level:17, hp:485, mp: 107, str:37, vit:30, mag:149, spr:48},
{level:18, hp:502, mp: 109, str:38, vit:30, mag:153, spr:48},
{level:19, hp:523, mp: 111, str:40, vit:30, mag:157, spr:48},
{level:20, hp:544, mp: 114, str:41, vit:31, mag:161, spr:49},
{level:21, hp:568, mp: 116, str:43, vit:31, mag:165, spr:49},
{level:22, hp:592, mp: 118, str:44, vit:31, mag:169, spr:49},
{level:23, hp:619, mp: 120, str:46, vit:32, mag:179, spr:50},
{level:24, hp:648, mp: 122, str:48, vit:32, mag:177, spr:50},
{level:25, hp:679, mp: 124, str:50, vit:32, mag:180, spr:50},
{level:26, hp:712, mp: 126, str:53, vit:33, mag:184, spr:51},
{level:27, hp:748, mp: 128, str:55, vit:33, mag:188, spr:51},
{level:28, hp:788, mp: 130, str:58, vit:33, mag:191, spr:51},
{level:29, hp:831, mp: 132, str:61, vit:34, mag:195, spr:52},
{level:30, hp:877, mp: 135, str:64, vit:34, mag:198, spr:52},
{level:31, hp:925, mp: 137, str:67, vit:34, mag:201, spr:52},
{level:32, hp:979, mp: 139, str:71, vit:35, mag:205, spr:53},
{level:33, hp:1036, mp:141, str:74, vit:35, mag:208, spr:53},
{level:34, hp:1100, mp:143, str:78, vit:35, mag:211, spr:53},
{level:35, hp:1168, mp:145, str:82, vit:36, mag:215, spr:54},
{level:36, hp:1240, mp:148, str:87, vit:36, mag:218, spr:54},
{level:37, hp:1318, mp:149, str:91, vit:36, mag:221, spr:54},
{level:38, hp:1402, mp:151, str:96, vit:36, mag:224, spr:54},
{level:39, hp:1494, mp:153, str:102, vit:37, mag:227, spr:55},
{level:40, hp:1584, mp:156, str:108, vit:38, mag:230, spr:56},
{level:41, hp:1672, mp:158, str:114, vit:40, mag:233, spr:59},
{level:42, hp:1758, mp:160, str:120, vit:42, mag:236, spr:61},
{level:43, hp:1842, mp:162, str:127, vit:44, mag:239, spr:64},
{level:44, hp:1924, mp:164, str:134, vit:47, mag:242, spr:69},
{level:45, hp:2004, mp:166, str:148, vit:51, mag:245, spr:75},
{level:46, hp:2082, mp:168, str:148, vit:54, mag:248, spr:78},
{level:47, hp:2158, mp:170, str:154, vit:57, mag:251, spr:83},
{level:48, hp:2232, mp:172, str:161, vit:60, mag:254, spr:87},
{level:49, hp:2304, mp:174, str:168, vit:63, mag:257, spr:92},
{level:50, hp:2374, mp:177, str:175, vit:67, mag:259, spr:97},
{level:51, hp:2442, mp:179, str:182, vit:70, mag:262, spr:101},
{level:52, hp:2508, mp:181, str:190, vit:73, mag:265, spr:105},
{level:53, hp:2572, mp:183, str:198, vit:76, mag:268, spr:110},
{level:54, hp:2634, mp:185, str:206, vit:79, mag:270, spr:113},
{level:55, hp:2694, mp:187, str:214, vit:83, mag:273, spr:119},
{level:56, hp:2752, mp:189, str:221, vit:86, mag:276, spr:123},
{level:57, hp:2808, mp:191, str:227, vit:89, mag:278, spr:128},
{level:58, hp:2862, mp:193, str:233, vit:92, mag:281, spr:131},
{level:59, hp:2914, mp:195, str:239, vit:95, mag:284, spr:135},
{level:60, hp:2964, mp:197, str:245, vit:99, mag:286, spr:141},
{level:61, hp:3013, mp:198, str:252, vit:102, mag:289, spr:145},
{level:62, hp:3061, mp:199, str:259, vit:104, mag:291, spr:148},
{level:63, hp:3108, mp:200, str:266, vit:106, mag:294, spr:150},
{level:64, hp:3154, mp:201, str:273, vit:108, mag:296, spr:153},
{level:65, hp:3199, mp:202, str:279, vit:110, mag:299, spr:156},
{level:66, hp:3243, mp:203, str:283, vit:112, mag:301, spr:158},
{level:67, hp:3286, mp:204, str:287, vit:114, mag:304, spr:160},
{level:68, hp:3328, mp:205, str:290, vit:116, mag:306, spr:163},
{level:69, hp:3369, mp:206, str:293, vit:118, mag:308, spr:166},
{level:70, hp:3409, mp:207, str:296, vit:119, mag:311, spr:167},
{level:71, hp:3448, mp:208, str:299, vit:120, mag:313, spr:168},
{level:72, hp:3486, mp:209, str:302, vit:121, mag:316, spr:169},
{level:73, hp:3523, mp:210, str:305, vit:122, mag:318, spr:170},
{level:74, hp:3559, mp:211, str:308, vit:123, mag:320, spr:172},
{level:75, hp:3594, mp:212, str:311, vit:124, mag:323, spr:173},
{level:76, hp:3628, mp:213, str:313, vit:125, mag:325, spr:173},
{level:77, hp:3661, mp:214, str:314, vit:126, mag:328, spr:175},
{level:78, hp:3693, mp:215, str:316, vit:127, mag:330, spr:176},
{level:79, hp:3724, mp:216, str:317, vit:128, mag:332, spr:178},
{level:80, hp:3754, mp:217, str:319, vit:129, mag:334, spr:179},
{level:81, hp:3783, mp:218, str:320, vit:130, mag:336, spr:179},
{level:82, hp:3811, mp:219, str:322, vit:131, mag:339, spr:181},
{level:83, hp:3838, mp:220, str:323, vit:132, mag:341, spr:182},
{level:84, hp:3864, mp:221, str:325, vit:133, mag:343, spr:183},
{level:85, hp:3889, mp:222, str:326, vit:134, mag:345, spr:185},
{level:86, hp:3913, mp:223, str:328, vit:135, mag:348, spr:185},
{level:87, hp:3936, mp:224, str:329, vit:136, mag:349, spr:187},
{level:88, hp:3958, mp:225, str:331, vit:137, mag:352, spr:188},
{level:89, hp:3979, mp:226, str:332, vit:138, mag:354, spr:189},
{level:90, hp:3999, mp:227, str:334, vit:139, mag:356, spr:191},
{level:91, hp:4018, mp:228, str:335, vit:140, mag:358, spr:191},
{level:92, hp:4036, mp:229, str:337, vit:141, mag:360, spr:192},
{level:93, hp:4053, mp:230, str:338, vit:142, mag:362, spr:194},
{level:94, hp:4069, mp:231, str:340, vit:143, mag:364, spr:195},
{level:95, hp:4084, mp:232, str:341, vit:144, mag:366, spr:196},
{level:96, hp:4098, mp:233, str:343, vit:145, mag:368, spr:197},
{level:97, hp:4111, mp:234, str:344, vit:146, mag:371, spr:198},
{level:98, hp:4123, mp:235, str:346, vit:147, mag:373, spr:199},
{level:99, hp:4134, mp:238, str:347, vit:148, mag:375, spr:201},
{level:100, hp:4144, mp:239, str:349, vit:149, mag:377, spr:202},
{level:101, hp:4154, mp:239, str:350, vit:149, mag:379, spr:202},
{level:102, hp:4164, mp:240, str:352, vit:149, mag:381, spr:202},
{level:103, hp:4174, mp:240, str:353, vit:150, mag:383, spr:202},
{level:104, hp:4184, mp:241, str:355, vit:150, mag:385, spr:202},
{level:105, hp:4194, mp:241, str:356, vit:150, mag:387, spr:202},
{level:106, hp:4204, mp:242, str:358, vit:151, mag:389, spr:204},
{level:107, hp:4214, mp:242, str:359, vit:151, mag:391, spr:204},
{level:108, hp:4224, mp:243, str:361, vit:151, mag:392, spr:204},
{level:109, hp:4234, mp:243, str:362, vit:152, mag:394, spr:204},
{level:110, hp:4245, mp:244, str:364, vit:153, mag:396, spr:205},
{level:111, hp:4255, mp:244, str:365, vit:153, mag:398, spr:205},
{level:112, hp:4265, mp:245, str:367, vit:153, mag:400, spr:205},
{level:113, hp:4275, mp:245, str:368, vit:154, mag:402, spr:206},
{level:114, hp:4285, mp:246, str:370, vit:154, mag:404, spr:206},
{level:115, hp:4295, mp:246, str:371, vit:154, mag:406, spr:206},
{level:116, hp:4305, mp:247, str:373, vit:155, mag:408, spr:207},
{level:117, hp:4315, mp:247, str:374, vit:155, mag:410, spr:207},
{level:118, hp:4325, mp:248, str:376, vit:155, mag:411, spr:207},
{level:119, hp:4335, mp:248, str:377, vit:156, mag:413, spr:208},
{level:120, hp:4346, mp:249, str:379, vit:157, mag:415, spr:209}]

//var noctCurrentLevel = 1; //not needed?
var noctBaseStats = noctBaseStatsByLevel[0];
var noctTotalStats = {level: 1, hp:255, mp:75, str:19, vit:22, mag:63, spr:40, atk:19, def:22}; //Keep total values here, declare with base stats. 
var hpOverMax = 0; //HP that goes above the 9999 limit.
var healthLevel = 0; //0 no bonus, 2 Health Level, 5 Health Level II, 10 Health Level III
var vitLevel = 0; //0 no bonus, 1 Vitality Level

var weapon1 = {hp:0, vit:0};
var weapon2 = {hp:0, vit:0};
var weapon3 = {hp:0, vit:0};
var weapon4 = {hp:0, vit:0};


var accessory1 = {hp:0};
var accessory2 = {hp:0};
var accessory3 = {hp:0};

var food = {hp:0, vit:0};

var attire = {hpBonus:0.30, vitBonus:0.20}; //Percentage based



function updateStats() {

	//---------------
	// HP
	//---------------
	noctTotalStats.hp = noctBaseStats.hp + (noctBaseStats.hp * attire.hpBonus) + (noctBaseStats.level * healthLevel) +
		accessory1.hp + accessory2.hp + accessory3.hp + weapon1.hp + weapon2.hp + weapon3.hp + weapon4.hp + food.hp;

	//If HP above 9999, record difference and reduce to 9999.
	if (noctTotalStats.hp > 9999) {
		hpOverMax = noctTotalStats.hp - 9999;
		noctTotalStats.hp = 9999
	}

	//---------------
	// Vitality
	//---------------
	noctTotalStats.vit = noctBaseStats.vit + (noctBaseStats.vit * attire.vitBonus) + (noctBaseStats.level * vitLevel) +
		accessory1.vit + accessory2.vit + accessory3.vit + weapon1.vit + weapon2.vit + weapon3.vit + weapon4.vit + food.vit;

	//Update display screen with new values.

}


const levelInput = document.querySelector('#levelInput');

levelInput.addEventListener('change', updateValue);

function updateValue(e) {
	if (e.target.value < 1)
		e.target.value = 1;
	else if (e.target.value > 120)
		e.target.value = 120;
	else
		e.target.value = Math.round(e.target.value);

	noctCurrentLevel = noctBaseStats[e.target.value - 1];
}


