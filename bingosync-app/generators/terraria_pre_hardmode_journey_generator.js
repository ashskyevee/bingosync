var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[];
bingoList[1] = [
{ name: "Have 0 Town NPCs in your world", types: [] },
{ name: "Use the Torch God's Favor", types: [] },
{ name: "Craft a Legendary Palm Wood Sword", types: [] },
{ name: "Research 5 types of Wood Fences", types: [] },
{ name: "Research regular Mana Potions", types: [] },
]; bingoList[2] = [
{ name: "Cook a Marshmallow", types: [] },
{ name: "Walk on water", types: [] },
{ name: "Craft a Target Dummy", types: [] },
{ name: "Craft a Dye", types: [] },
{ name: "Consume a Cooked Fish", types: [] },
]; bingoList[3] = [
{ name: "Open a Sandstone Chest", types: [] },
{ name: "Change shoe color at a Dresser", types: [] },
{ name: "Catch and contain 3 unique Critters", types: ["Critters"] },
{ name: "Eat Sauteed Frog Legs", types: [] },
{ name: "Get the Tipsy Debuff", types: [] },
]; bingoList[4] = [
{ name: "Afflict the same enemy with Frostburn and On Fire!", types: [] },
{ name: "Duplicate any Stucco", types: [] },
{ name: "Place a Food Item on a Plate", types: [] },
{ name: "Die to a trap", types: [] },
{ name: "Fire a Boomstick", types: [] },
]; bingoList[5] = [
{ name: "Obtain a non-stackable Weapon from an Enemy", types: [] },
{ name: "Research Smooth Granite or Smooth Marble", types: [] },
{ name: "Purchase any Pylon", types: [] },
{ name: "Craft a Gold or Platinum Hammer", types: [] },
{ name: "Catch an Oyster", types: [] },
]; bingoList[6] = [
{ name: "Buy a Lawnmower", types: [] },
{ name: "Wear a Garland", types: [] },
{ name: "Change Gender", types: [] },
{ name: "Craft any Boss Summon ", types: [] },
{ name: "Craft an Abeemination", types: [] },
]; bingoList[7] = [
{ name: "Trash a Crispy Honey Block", types: [] },
{ name: "Obtain a Platinum Coin", types: [] },
{ name: "Place a Skyware Chandelier", types: [] },
{ name: "Research Sticky or Bouncy Bombs", types: [] },
{ name: "Craft a Piano", types: [] },
]; bingoList[8] = [
{ name: "Craft a Featherfall Potion and an Ironskin Potion", types: [] },
{ name: "Craft a Hunter Potion and a Magic Power Potion", types: [] },
{ name: "Use a Dirt Rod to throw dirt out of the world", types: [] },
{ name: "Wear a full set of Pumpkin Armor", types: [] },
{ name: "Craft a Gills Potion and a Battle Potion", types: [] },
]; bingoList[9] = [
{ name: "Craft a set of Crimson or Shadow Armor", types: [] },
{ name: "Make an Announcement Box say \"BINGO\" in chat", types: [] },
{ name: "Fish up 3 Junk Items", types: [] },
{ name: "Defeat the Eye of Cthulhu with only Ranged weapons", types: [] },
{ name: "Kill a Boss using only a Minecart", types: [] },
]; bingoList[10] = [
{ name: "Kill an enemy with a Dart", types: [] },
{ name: "Research Bones", types: [] },
{ name: "Obtain the Cursed Debuff", types: [] },
{ name: "Touch the Left and Right World Borders", types: [] },
{ name: "Finish off a Boss with placeable Explosives", types: [] },
]; bingoList[11] = [
{ name: "Craft a Gem Robe", types: [] },
{ name: "Craft an Amber Gemcorn", types: [] },
{ name: "Cover an Ocean with Obsidian", types: [] },
{ name: "Duplicate all 3 Liquid Buckets", types: [] },
{ name: "Die to enraged Skeletron", types: ["Skeletron"] },
]; bingoList[12] = [
{ name: "Destroy an entire Floating Island (including walls)", types: [] },
{ name: "Research 3 Banners", types: [] },
{ name: "Wear one of the Vanity Contest winner sets", types: [] },
{ name: "Set your spawn in a Slime Bed", types: [] },
{ name: "Touch the very top and very bottom of the world", types: [] },
]; bingoList[13] = [
{ name: "Obtain 3 Gem Staves", types: [] },
{ name: "Chop a tree with Lucy The Axe", types: [] },
{ name: "Fire the Weather Pain in a Sandstorm", types: [] },
{ name: "Summon Deerclops using a Deer Thing", types: [] },
{ name: "Kill a Hardmode enemy in Pre-Hardmode", types: [] },
]; bingoList[14] = [
{ name: "Craft 4 Shortswords", types: [] },
{ name: "Catch and contain a Gem Critter", types: [] },
{ name: "Rescue the Stylist", types: [] },
{ name: "Craft any Timer", types: [] },
{ name: "Kill The Bride or The Groom", types: [] },
]; bingoList[15] = [
{ name: "Defeat enraged Queen Bee", types: [] },
{ name: "Fish and kill a Blood Moon Enemy", types: [] },
{ name: "Fire a Phoenix Blaster", types: [] },
{ name: "Acquire 4 different Mushrooms", types: [] },
{ name: "Defeat Tim", types: [] },
]; bingoList[16] = [
{ name: "Obtain a Guide Voodoo Doll", types: [] },
{ name: "Consume any Flask", types: [] },
{ name: "Defeat Goblin Army", types: [] },
{ name: "Defeat King Slime", types: [] },
{ name: "Research 6 Campfires", types: [] },
]; bingoList[17] = [
{ name: "Throw Unholy Water or Blood Water", types: [] },
{ name: "Have 12 buffs/debuffs at the same time", types: [] },
{ name: "Kill a Corrupt or Vicious Critter", types: [] },
{ name: "Summon an Evil Boss without smashing Orbs or Hearts", types: [] },
{ name: "Acquire the Exquisitely Stuffed buff", types: [] },
]; bingoList[18] = [
{ name: "Equip a set of Necro Armor", types: [] },
{ name: "Research Antlion Eggs", types: [] },
{ name: "Buy a Tragic Umbrella", types: [] },
{ name: "Craft the Grand Design", types: [] },
{ name: "Purchase the Quad-Barrel Shotgun", types: [] },
]; bingoList[19] = [
{ name: "Craft a Recall Potion", types: [] },
{ name: "Confuse an Enemy", types: [] },
{ name: "Open a Crate", types: [] },
{ name: "Defeat Skeletron in the Jungle", types: ["Skeletron"] },
{ name: "Fly 2 Kites", types: [] },
]; bingoList[20] = [
{ name: "Research Evil Bars, Meteorite Bars and Hellstone bars", types: [] },
{ name: "Place 9 unique Toilets", types: [] },
{ name: "Combine an Obsidian Skull with another Accessory", types: [] },
{ name: "Complete 2 Fishing Quests", types: [] },
{ name: "Defeat a boss using only Whips", types: [] },
]; bingoList[21] = [
{ name: "Fail the Old One's Army event", types: [] },
{ name: "Have 3 Minions active", types: [] },
{ name: "Have 12 Town NPCs (including pets)", types: [] },
{ name: "Obtain 2 Non-Light Pets", types: [] },
{ name: "Obtain a Light Pet", types: [] },
]; bingoList[22] = [
{ name: "Craft 2 Hamaxes", types: [] },
{ name: "Open a Shadow Chest", types: [] },
{ name: "Summon 2 unique Sentries", types: [] },
{ name: "Have 8 unique Food Items in your inventory at once", types: [] },
{ name: "Have 200 Health and 200 Mana", types: [] },
]; bingoList[23] = [
{ name: "Fish an item from Lava", types: [] },
{ name: "Obtain 3 Summon Weapons (excluding Sentries)", types: [] },
{ name: "Research 5 Grappling Hooks", types: [] },
{ name: "Research 4 Fishing Rods", types: [] },
{ name: "Obtain 2 Yoyos", types: [] },
]; bingoList[24] = [
{ name: "Equip a set of Jungle Armor", types: [] },
{ name: "Obtain the Night's Edge", types: [] },
{ name: "Have 35 Defense", types: [] },
{ name: "Craft a Phaseblade", types: [] },
{ name: "Fill all 12 Accessory and Vanity Accessory slots", types: [] },
]; bingoList[25] = [
{ name: "Ride 2 Mounts", types: [] },
{ name: "Craft the Star Cannon", types: [] },
{ name: "Have 4 Pre-Hardmode bosses alive at once", types: [] },
{ name: "Catch and contain 14 unique Critters", types: ["Critters"] },
{ name: "Obtain 10 unique Ammo items", types: [] },
];
