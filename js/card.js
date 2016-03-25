
function SetCardName(SENw)
{ // return SetCards (String) from w_SE[%]
	var SENstr = "";
	for(var i=0;i<=SC_MAXnum;i++)
	{
		if(i == SENw)
		{
			for(var j=1;w_SC[i][j] != "NULL";j++)
			{
				for (var l=0; l<cardOBJ.length; l++) if (cardOBJ[l][0] === w_SC[i][j])
				{
					SENstr += "["+ cardOBJ[l][2] +" Card]";
					if(w_SC[i][j+1] != "NULL") SENstr += "+";
				}
			}
			return SENstr;
		}
	}
}

function SetCard()
{ // apply cardsets
	for(var i=16;i<=25;i++)
		n_A_card[i] = 0;

	var w_SE_num= 16;
	var w_SE_ch = 0;
	for(var k=0;k<=SC_MAXnum;k++)
	{
		for(var j=1;w_SC[k][j] != "NULL" && (w_SE_ch == 1 || (w_SE_ch == 0 && j == 1));j++)
		{
			w_SE_ch = 0;
			for(var i=0;i<=15 && w_SE_ch == 0;i++)
			{
				if(n_A_card[i] == w_SC[k][j])
					w_SE_ch = 1;
			}
		}
		if(w_SE_ch == 1)
		{
			n_A_card[w_SE_num] = w_SC[k][0];
			w_SE_num++;
		}
	}
}


//[ ID, EQ_location (0=everywhere, 1=weapon, 2=head, 3=shield, 4=armor, 5=garment, 6=shoes, 7=accessory, 100=combo), "Name (0 if none)", "Text bonus (0 if none)", bonus[type], bonusamount, bonus2[type], ..., 0]
{cardOBJ = [
 [   0,0,"(No Card)",0,0]
,[   1,1,"All Race +20%",0,bon_DMG_RC_FORMLESS,20,bon_DMG_RC_UNDEAD,20,bon_DMG_RC_BRUTE,20,bon_DMG_RC_PLANT,20,bon_DMG_RC_INSECT,20,bon_DMG_RC_FISH,20,bon_DMG_RC_DEMON,20,bon_DMG_RC_DEMI_HUMAN,20,bon_DMG_RC_ANGEL,20,bon_DMG_RC_DRAGON,20,0]
,[   2,1,"All Element +20%",0,bon_DMG_ELE_NEUTRAL,20,bon_DMG_ELE_WATER,20,bon_DMG_ELE_EARTH,20,bon_DMG_ELE_FIRE,20,bon_DMG_ELE_WIND,20,bon_DMG_ELE_POISON,20,bon_DMG_ELE_HOLY,20,bon_DMG_ELE_SHADOW,20,bon_DMG_ELE_GHOST,20,bon_DMG_ELE_UNDEAD,20,0]
,[   3,1,"All Size +15%,Atk+5",0,bon_ATK,5,bon_DMG_SIZ_SMALL,15,bon_DMG_SIZ_MEDIUM,15,bon_DMG_SIZ_LARGE,15,0]
,[   4,1,"Crit Dmg+10%,Crit+7",0,bon_DMG_CRIT,10,bon_CRIT,7,0]
,[   5,3,"Race Reduction 30%",0,bon_RED_RC_FORMLESS,30,bon_RED_RC_UNDEAD,30,bon_RED_RC_BRUTE,30,bon_RED_RC_PLANT,30,bon_RED_RC_INSECT,30,bon_RED_RC_FISH,30,bon_RED_RC_DEMON,30,bon_RED_RC_DEMI_HUMAN,30,bon_RED_RC_ANGEL,30,bon_RED_RC_DRAGON,30,0]
,[   6,1,"*Star Crumb","[Mastery Damage] +5<BR>If there are 3 Star Crumbs: [Mastery Damage] +40",0]
//Cards
,[4001,4,"Poring",0,bon_LUK,2,bon_PDODGE,1,0]
,[4002,1,"Fabre",0,bon_VIT,1,bon_HP_ADD,100,0]
,[4003,4,"Pupa",0,bon_HP_ADD,700,0]
,[4004,1,"Drops",0,bon_DEX,1,bon_HIT,3,0]
,[4005,1,"Santa Poring",0,bon_DMG_ELE_SHADOW,20,0]
,[4006,1,"Lunatic",0,bon_LUK,1,bon_CRIT,1,bon_PDODGE,1,0]
,[4007,1,"Peco Peco Egg",0,bon_DMG_RC_FORMLESS,20,0]
,[4008,4,"Picky",0,bon_STR,1,bon_ATK,10,0]
,[4009,6,"Chonchon",0,bon_FLEE,2,bon_AGI,1,0]
,[4010,2,"Willow",0,bon_SP_ADD,80,0]
,[4011,4,"Picky Egg",0,bon_VIT,1,bon_HP_ADD,100,0]
,[4012,3,"Thief Bug Egg",0,bon_HP_ADD,400,0]
,[4013,3,"Andre Egg",0,bon_HP_MUL,5,0]
,[4014,4,"Roda Frog",0,bon_HP_ADD,400,bon_SP_ADD,50,0]
,[4015,5,"Condor",0,bon_FLEE,10,0]
,[4016,4,"Thief Bug",0,bon_AGI,1,0]
,[4017,1,"Savage Babe",0,bon_CH_STATUS_STUN,5,0]
,[4018,1,"Andre Larva",0,bon_INT,1,bon_SP_ADD,10,0]
,[4019,1,"Hornet",0,bon_STR,1,bon_ATK,3,0]
,[4020,1,"Familiar",0,bon_ATK,5,bon_CH_STATUS_BLIND,5,0]
,[4021,4,"Rocker",0,bon_DEX,1,bon_ATK,5,0]
,[4022,7,"Spore",0,bon_VIT,2,0]
,[4023,4,"Baby Desert Wolf",0,bon_INT,1,0]
,[4024,1,"Plankton",0,bon_ATK,5,bon_CH_STATUS_SLEEP,5,0]
,[4025,1,"Skeleton",0,bon_ATK,10,bon_CH_STATUS_STUN,2,0]
,[4026,1,"Female Thief Bug",0,bon_AGI,1,bon_FLEE,1,0]
,[4027,7,"Kukre",0,bon_AGI,2,0]
,[4028,7,"Tarou",0,bon_STR,2,0]
,[4029,1,"Wolf",0,bon_ATK,15,bon_CRIT,1,0]
,[4030,1,"Mandragora",0,bon_DMG_ELE_WIND,20,0]
,[4031,4,"Peco Peco",0,bon_HP_MUL,10,0]
,[4032,3,"Ambernite",0,bon_DEF,2,0]
,[4033,7,"Poporing",0,bon_SKILL_ENABLE,24,0]
,[4034,7,"Wormtail",0,bon_DEX,2,0]
,[4035,1,"Hydra",0,bon_DMG_RC_DEMI_HUMAN,20,0]
,[4036,7,"Muka",0,bon_HP_REG,10,0]
,[4037,1,"Snake",0,bon_ATK,5,bon_CH_STATUS_POISON,5,0]
,[4038,6,"Zombie",0,bon_HP_REG,20,0]
,[4039,2,"Stainer",0,bon_DEF,1,bon_RES_STATUS_SILENCE,20,0]
,[4040,7,"Creamy",0,bon_SKILL_ENABLE,23,0]
,[4041,2,"Coco",0,bon_DEF,1,bon_RES_STATUS_SLEEP,20,0]
,[4042,4,"Steel Chonchon",0,bon_DEF,2,bon_RED_ELE_WIND,10,0]
,[4043,1,"Andre",0,bon_ATK,20,0]
,[4044,7,"Smokie",0,bon_SKILL_ENABLE,22,0]
,[4045,3,"Horn",0,bon_RED_RANGE,35,0]
,[4046,2,"Martin",0,bon_DEF,1,bon_RES_STATUS_BLIND,20,0]
,[4047,4,"Ghostring",0,bon_USR_ELEMENT,8,bon_HP_REG,-25,0]
,[4048,7,"Poison Spore",0,bon_SKILL_ENABLE,20,0]
,[4049,1,"Vadon",0,bon_DMG_ELE_FIRE,20,0]
,[4050,6,"Male Thief Bug",0,bon_AGI,2,0]
,[4051,7,"Yoyo",0,bon_AGI,1,bon_PDODGE,5,0]
,[4052,2,"Elder Willow",0,bon_INT,2,0]
,[4053,7,"Vitata","SP cost of skills +25%",bon_SKILL_ENABLE,5,0]
,[4054,4,"Angeling",0,bon_USR_ELEMENT,6,0]
,[4055,1,"Marina",0,bon_ATK,5,bon_CH_STATUS_FREEZE,5,0]
,[4056,5,"Dustiness",0,bon_FLEE,5,bon_RED_ELE_WIND,30,0]
,[4057,1,"Metaller",0,bon_ATK,5,bon_CH_STATUS_SILENCE,5,0]
,[4058,3,"Thara Frog",0,bon_RED_RC_DEMI_HUMAN,30,0]
,[4059,3,"Soldier Andre",bon_RED_RC_PLANT,30,0]
,[4060,1,"Goblin",0,bon_DMG_RC_BRUTE,20,0]
,[4061,4,"Cornutus","Armor cannot be broken",bon_DEF,1,0]
,[4062,1,"Anacondaq",0,bon_DMG_ELE_POISON,20,0]
,[4063,1,"Caramel",0,bon_DMG_RC_INSECT,20,0]
,[4064,7,"Zerom",0,bon_DEX,3,0]
,[4065,1,"Kaho",0,bon_DMG_ELE_EARTH,20,0]
,[4066,3,"Orc Warrior",0,bon_RED_RC_BRUTE,30,0]
,[4067,3,"Megalodon",0,bon_DEF,1,bon_RES_STATUS_FREEZE,20,0]
,[4068,1,"Scorpion",0,bon_DMG_RC_PLANT,20,0]
,[4069,1,"Drainliar",0,bon_DMG_ELE_WATER,20,0]
,[4070,6,"Eggyra",0,bon_SP_REG,15,0]
,[4071,5,"Orc Zombie",0,bon_FLEE,5,bon_RED_ELE_UNDEAD,30,0]
,[4072,1,"Golem","Weapon cannot be broken",bon_ATK,5,0]
,[4073,7,"Pirate Skel",0,bon_SKILL_ENABLE,26,0]
,[4074,3,"Bigfoot",0,bon_RED_RC_INSECT,30,0]
,[4075,3,"Argos",0,bon_DEF,1,bon_RES_STATUS_STONE,20,0]
,[4076,1,"Magnolia",0,bon_ATK,5,bon_CH_STATUS_CURSE,5,0]
,[4077,7,"Phen","Skill casts cannot be interrupted (except in WoE)",bon_RED_CAST,25,0]
,[4078,4,"Savage",0,bon_VIT,3,0]
,[4079,7,"Mantis",0,bon_STR,3,0]
,[4080,1,"Flora",0,bon_DMG_RC_FISH,20,0]
,[4081,5,"Hode",0,bon_FLEE,5,bon_RED_ELE_EARTH,30,0]
,[4082,1,"Desert Wolf",0,bon_DMG_SIZ_SMALL,15,bon_ATK,5,0]
,[4083,3,"Rafflesia",0,bon_RED_RC_FISH,30,0]
,[4084,7,"Marine Sphere",0,bon_SKILL_ENABLE,21,0]
,[4085,1,"Orc Skeleton",0,bon_DMG_ELE_HOLY,20,0]
,[4086,1,"Soldier Skeleton",0,bon_CRIT,9,0]
,[4087,2,"Giearth",0,bon_RES_STATUS_CHAOS,100,bon_RED_ELE_EARTH,15,0]
,[4088,5,"Frilldora",0,bon_SKILL_ENABLE,19,0]
,[4089,4,"Swordfish",0,bon_DEF,1,bon_USR_ELEMENT,1,0]
,[4090,3,"Munak",0,bon_DEF,1,bon_RED_ELE_EARTH,5,bon_RES_STATUS_STONE,15,0]
,[4091,7,"Kobold",0,bon_STR,1,bon_CRIT,4,0]
,[4092,1,"Skeleton Worker",0,bon_DMG_SIZ_MEDIUM,15,bon_ATK,5,0]
,[4093,7,"Obeaune",0,bon_SKILL_ENABLE,25,0]
,[4094,1,"Archer Skeleton",0,bon_DMG_RANGE,10,0]
,[4095,5,"Marse",0,bon_FLEE,5,bon_RED_ELE_WATER,30,0]
,[4096,1,"Zenorc",0,bon_ATK,10,bon_CH_STATUS_POISON,4,0]
,[4097,6,"Matyr",0,bon_AGI,1,bon_HP_MUL,10,0]
,[4098,4,"Dokebi",0,bon_DEF,1,bon_USR_ELEMENT,4,0]
,[4099,4,"Pasana",0,bon_DEF,1,bon_USR_ELEMENT,3,0]
,[4100,6,"Sohee",0,bon_SP_MUL,15,bon_SP_REG,3,0]
,[4101,4,"Sandman",0,bon_DEF,1,bon_USR_ELEMENT,2,0]
,[4102,5,"Whisper",0,bon_FLEE,20,bon_RED_ELE_GHOST,-50,0]
,[4103,7,"Horong",0,bon_SKILL_ENABLE,16,0]
,[4104,1,"Requiem",0,bon_CH_STATUS_CHAOS,5,0]
,[4105,4,"Marc",0,bon_RES_STATUS_FREEZE,100,bon_RED_ELE_WATER,5,0]
,[4106,1,"Mummy",0,bon_HIT,20,0]
,[4107,6,"Verit",0,bon_HP_MUL,8,bon_SP_MUL,8,0]
,[4108,5,"Myst",0,bon_FLEE,5,bon_RED_ELE_POISON,30,0]
,[4109,5,"Jakk",0,bon_FLEE,5,bon_RED_ELE_FIRE,30,0]
,[4110,2,"Ghoul",0,bon_DEF,1,bon_RES_STATUS_POISON,20,0]
,[4111,1,"Strouf",0,bon_DMG_RC_DEMON,20,0]
,[4112,2,"Marduk",0,bon_RES_STATUS_SILENCE,100,0]
,[4113,5,"Marionette",0,bon_FLEE,5,bon_RED_ELE_GHOST,30,0]
,[4114,4,"Argiope",0,bon_DEF,1,bon_USR_ELEMENT,5,0]
,[4115,1,"Hunter Fly","Enables a 3% chance of gaining 15% of the damage inflicted on an enemy as HP with each attack",0]
,[4116,5,"Isis",0,bon_FLEE,5,bon_RED_ELE_SHADOW,30,0]
,[  43,1,"Sidewinder","Enable the use of [Double Attack] Lvl 1 (all weapons)<BR>If you know a level higher than 1 you will use that level instead",0] //Look in roformulas.js
,[4118,1,"Earth Petite",0,bon_DMG_RC_DRAGON,20,0]
,[4119,4,"Bathory",0,bon_USR_ELEMENT,7,0]
,[4120,3,"Sky Petite",0,bon_RED_RC_DRAGON,30,0]
,[4121,1,"Phreeoni",0,bon_HIT,100,0]
,[4122,2,"Deviruchi",0,bon_STR,1,bon_RES_STATUS_BLIND,100,0]
,[4123,6,"Eddga","Infinite [Endure] effect",bon_HP_MUL,-25,0]
,[4124,3,"Medusa",0,bon_RED_RC_DEMON,15,bon_RES_STATUS_STONE,100,0]
,[4125,1,"Deviace",0,bon_DMG_RC_DEMI_HUMAN,7,bon_DMG_RC_BRUTE,7,bon_DMG_RC_PLANT,7,bon_DMG_RC_INSECT,7,0]
,[4126,1,"Minorous",0,bon_DMG_SIZ_LARGE,15,bon_ATK,5,0]
,[4127,2,"Nightmare",0,bon_AGI,1,bon_RES_STATUS_SLEEP,100,0]
,[4128,3,"Golden Thief Bug","Immunity to all magic (including heal/buffs).<BR>SP cost of skills +100%",0]
,[4129,5,"Bapho Jr.",0,bon_AGI,3,bon_CRIT,1,0]
,[4130,1,"Scorpion King",0,bon_DMG_ELE_UNDEAD,20,0]
,[4131,6,"Moonlight Flower","Movement speed increased (same as Increase AGI)",0]
,[4132,2,"Mistress","Skills requiring gemstones to cast no longer require them.<BR>SP cost of skills +25%",0]
,[4133,5,"Raydric",0,bon_RED_ELE_NEUTRAL,20,0]
,[4134,1,"Dracula","Enables a 10% chance to gain 5% of the damage inflicted on an enemy as SP with each attack",0]
,[4135,4,"Orc Lord",0,bon_REFLECT_PHY_DMG,30,0]
,[4136,3,"Khalitzburg",0,bon_RED_RC_DEMON,30,0]
,[  32,1,"Drake","Nullify reduction in damage inflicted on enemies resulting from enemy's size.",0] //Look in roformulas.js
,[4138,3,"Anubis",0,bon_RED_RC_ANGEL,30,0]
,[4139,7,"Joker",0,bon_SKILL_ENABLE,27,0]
,[4140,1,"Abysmal Knight",0,bon_DMG_BOSS,25,0]
,[4141,4,"Evil Druid",0,bon_INT,1,bon_DEF,1,bon_USR_ELEMENT,9,0]
,[4142,1,"Doppelganger",0,bon_ASPD_MUL,10,0]
,[4143,2,"Orc Hero",0,bon_VIT,3,bon_RES_STATUS_STUN,100,0]
,[4144,7,"Osiris","When revived you recover full HP & SP",0]
,[4145,7,"Berzebub",0,bon_RED_CAST,-30,0]
,[4146,3,"Maya","50% chance to reflect targeted magic spells",0]
,[4147,1,"Baphomet","All regular attacks become 3x3 splash damage",bon_HIT,-10,0]
,[4148,2,"Pharaoh","SP cost of skills -30%",0]
,[4149,7,"Gargoyle","Add 1% chance to drop [Box of Thunder] each time a [Insect] type monster is killed",0]
,[283,4,"Goat","If the armor is upgraded to +5 or less:<BR>[DEF] +2<BR>[MDEF] +5",0] //ID: 283 Look in roformulas.js
,[4151,6,"Gajomart",0,bon_EXP_RC_PLANT,10,bon_RED_RC_PLANT,-20,0]
,[4152,7,"Galapago","Add 3% chance to drop [Apple Juice] each time a [Insect] type monster is killed<BR>Add 3% chance to drop [Banana Juice] each time a [Insect] type monster is killed<BR>Add 3% chance to drop [Carrot Juice] each time a [Insect] type monster is killed<BR>Increases healing effect of [Apple Juice] by 50%<BR>Increases healing effect of [Banana Juice] by 50%<BR>Increases healing effect of [Carrot Juice] by 50%",0]
,[4153,1,"Crab","Increase damage on [Aster] by 30%",bon_DMG_SPE_ASTER,30,0] //Check script
,[4154,7,"Dumpling Kid","Add 3% chance to drop [Candy] each time a [Demi-Human] type monster is killed<BR>Add 1% chance to drop [Candy Cane] each time a [Demi-Human] type monster is killed<BR>Increases healing effect of [Candy] by 50%<BR>Increases healing effect of [Candy Cane] by 50%",0]
,[4155,1,"Goblin Leader",0,bon_DMG_GOBLIN,30,0]
,[4156,1,"Goblin Steamrider",0,bon_DMG_CRIT,10,bon_CRIT_RC_FORMLESS,7,0]
,[4157,1,"Goblin Archer",0,bon_DMG_CRIT,10,bon_CRIT_RC_UNDEAD,7,0]
,[4158,4,"Sky Deleter","Regain 100 HP each time a monster is killed with a physical attack",bon_HP_REG,-100,0]
,[271,5,"Nine Tail","If the garment is upgraded to +9 or higher: Flee Rate +20",bon_AGI,2,bon_SCRIPT, ,0] //Look in roformulas.js
,[4234,4,"Anolian","If you know [Improve Concentration] Lv 10 you will autocast Lv 10 instead",221,56,0]
//Sets
,[1001,100,0,"PROVA",bon_AGI,10,0]
];

CardNum = cardOBJ.length -1;
}

//suggestion to improve the array below
{CardSortOBJ = [
/* NULL     */[0,"NULL"],
/* Weap     */[0,"NULL"],
/* Head     */[0,"NULL"],
/* Shield   */[0,"NULL"],
/* Armor    */[0,"NULL"],
/* Garment  */[0,"NULL"],
/* Shoes    */[0,"NULL"],
/* Access   */[0,"NULL"]
];

for (var i=1; i<=7; i++)
{
	k=0;
	for (var j=0; j<cardOBJ.length; j++)
	{
		if (cardOBJ[j][1] === 0 || cardOBJ[j][1] === i)
		{
			CardSortOBJ[i][k]=cardOBJ[j][0];
			k++;
		}
		CardSortOBJ[i][k] = "NULL";
	}	
}
}

{ // CardSets
w_SC = [[1001,4001,4002,4103,"NULL"]
];
}

// SC_MAXnum = 34;
SC_MAXnum = w_SC.length - 1;

for(var i=0;i<=SC_MAXnum;i++)
{
	for(var k=1;w_SC[i][k] != "NULL";k++)
	{
		for (var l=0; l<cardOBJ.length; l++) if (cardOBJ[l][0] === w_SC[i][k])
		{
			for(var j=4;cardOBJ[l][j] != 0;j+=2);
			cardOBJ[l][j]=90;
			cardOBJ[l][j+1]=i;
			cardOBJ[l][j+2]=0;
		}
	}
}

{ // WeaponCardShotcuts (not working anymore, need fixing)
CardShort =[ // WeaponSlots (4x), 0, Name
[0,0,0,0,0,"Card Shortcuts"]
,[0,0,0,0,0,"Remove All"]
,[1,1,0,0,0,"+40%"]
,[1,1,1,0,0,"+60%"]
,[1,1,1,1,0,"+80%"]
,[1,2,0,0,0,"+44%"]
,[1,1,2,0,0,"+68%"]
,[1,1,2,2,0,"+96%"]
,[3,3,0,0,0,"Size Type 2x"]
,[3,3,3,0,0,"Size Type 3x"]
,[3,3,3,3,0,"Size Type 4x"]
,[4,4,0,0,0,"Crit Dmg+10%,Crit+7 2x"]
,[4,4,4,0,0,"Crit Dmg+10%,Crit+7 3x"]
,[4,4,4,4,0,"Crit Dmg+10%,Crit+7 4x"]
,[0,6,0,0,0,"Elemental + Star Crumb"]
,[0,6,6,0,0,"Elemental + Star Crumb 2x"]
,[6,6,6,0,0,"Star Crumb 3x"]
];
}

{ // EquipCardShortcuts
EquipShortCutData =[ // 9999 := remove, Cardslots (8x), 0, Name
[10000,0,0,0,0,0,0,0,0,0,"Set Shortcuts"]
,[9999,0,0,0,0,0,0,0,0,0,"Remove all cards"]
];
}
