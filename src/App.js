import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const tasksByTrader = {
    Prapor: [
      { name: "Shooting Cans", requirements: "", level: 1, desc: "Eliminate 5 Scavs on Factory", map: "Factory", difficulty: "Easy", category: "Elimination", xp: 600, money: 1000, kappa: false },
      { name: "Debut", requirements: "Shooting Cans", level: 2, desc: "Locate the chemical container on Customs", map: "Customs", difficulty: "Easy", category: "Exploration", xp: 2900, money: 7000, kappa: true },
      { name: "Luxurious Life", requirements: "Debut", level: 1, desc: "Hand over 3 gold chains", map: "Any", difficulty: "Easy", category: "Collection", xp: 1800, money: 9000, kappa: false },
      { name: "Background Check", requirements: "Luxurious Life", level: 2, desc: "Find and hand over the bronze pocket watch", map: "Customs", difficulty: "Medium", category: "Collection", xp: 2700, money: 10000, kappa: false },
      { name: "Checking", requirements: "Background Check", level: 3, desc: "Survive and extract from Customs through Dorms V-EX", map: "Customs", difficulty: "Easy", category: "Survival", xp: 5100, money: 12000, kappa: false },
      { name: "Shootout Picnic", requirements: "Background Check", level: 3, desc: "Eliminate 15 Scavs on Customs", map: "Customs", difficulty: "Easy", category: "Elimination", xp: 6000, money: 15000, kappa: false },
      { name: "Delivery From the Past", requirements: "Background Check", level: 5, desc: "Obtain the bronze pocket watch and place it in the secure container", map: "Customs", difficulty: "Hard", category: "Survival", xp: 8500, money: 25000, kappa: true },
      { name: "BP Depot", requirements: "Delivery From the Past", level: 5, desc: "Mark the fuel tanks with MS2000 Markers on Customs", map: "Customs", difficulty: "Medium", category: "Marking", xp: 6200, money: 18000, kappa: false },
      { name: "Belka and Strelka", requirements: "BP Depot", level: 5, desc: "Survive and extract from Streets 5 times", map: "Streets", difficulty: "Medium", category: "Survival", xp: 8700, money: 22000, kappa: false },
      { name: "Search Mission", requirements: "Debut", level: 5, desc: "Locate the lost group on Shoreline", map: "Shoreline", difficulty: "Easy", category: "Exploration", xp: 5800, money: 14000, kappa: false },
      { name: "Bad Habit", requirements: "Checking", level: 7, desc: "Hand over Marlboro cigarettes and Wilston cigarettes", map: "Any", difficulty: "Easy", category: "Collection", xp: 4200, money: 16000, kappa: false },
      { name: "Ice Cream Cones", requirements: "Shootout Picnic", level: 8, desc: "Hand over Military corrugated tubes", map: "Any", difficulty: "Medium", category: "Collection", xp: 5400, money: 18000, kappa: false },
      { name: "Polikhim Hobo", requirements: "Search Mission", level: 8, desc: "Locate the crashed UAV on Woods", map: "Woods", difficulty: "Easy", category: "Exploration", xp: 6500, money: 20000, kappa: false },
      { name: "Shaking Up Teller", requirements: "Bad Habit", level: 10, desc: "Eliminate Reshala and his guards", map: "Customs", difficulty: "Hard", category: "Boss", xp: 9200, money: 35000, kappa: false },
      { name: "Big Customer", requirements: "Ice Cream Cones", level: 12, desc: "Hand over GP coins", map: "Any", difficulty: "Medium", category: "Collection", xp: 7100, money: 25000, kappa: false },
      { name: "Chemical - Part 1", requirements: "Polikhim Hobo", level: 13, desc: "Hand over Chemicals", map: "Any", difficulty: "Easy", category: "Collection", xp: 8200, money: 28000, kappa: true },
      { name: "Grenadier", requirements: "Shaking Up Teller", level: 14, desc: "Eliminate 8 PMCs with grenades", map: "Any", difficulty: "Hard", category: "PvP", xp: 12500, money: 45000, kappa: true },
      { name: "The Punisher - Part 1", requirements: "Big Customer", level: 15, desc: "Eliminate 15 Scavs on Shoreline", map: "Shoreline", difficulty: "Easy", category: "Elimination", xp: 9000, money: 32000, kappa: true },
      { name: "Chemical - Part 2", requirements: "Chemical - Part 1", level: 17, desc: "Obtain chemicals in Labs", map: "Labs", difficulty: "Hard", category: "Collection", xp: 10500, money: 38000, kappa: true },
      { name: "Setup", requirements: "Grenadier", level: 18, desc: "Plant a secure folder in the Factory office", map: "Factory", difficulty: "Hard", category: "Planting", xp: 11200, money: 40000, kappa: true },
      { name: "The Punisher - Part 2", requirements: "The Punisher - Part 1", level: 19, desc: "Eliminate 12 Scavs on Customs with an AKM-series weapon", map: "Customs", difficulty: "Easy", category: "Elimination", xp: 9500, money: 35000, kappa: true },
      { name: "Chemical - Part 3", requirements: "Chemical - Part 2", level: 21, desc: "Hand over Military tubes and Chemicals", map: "Any", difficulty: "Medium", category: "Collection", xp: 12000, money: 42000, kappa: true },
      { name: "Perfect Mediator", requirements: "Setup", level: 22, desc: "Reach level 3 loyalty with all traders except Fence", map: "Any", difficulty: "Easy", category: "Loyalty", xp: 35000, money: 100000, kappa: false },
      { name: "The Punisher - Part 3", requirements: "The Punisher - Part 2", level: 23, desc: "Eliminate 25 Scavs on Customs while wearing PACA body armor", map: "Customs", difficulty: "Medium", category: "Elimination", xp: 10500, money: 38000, kappa: true },
      { name: "Chemical - Part 4", requirements: "Chemical - Part 3", level: 25, desc: "Survive and extract from Labs 3 times", map: "Labs", difficulty: "Hard", category: "Survival", xp: 15000, money: 55000, kappa: true },
      { name: "Test Drive - Part 1", requirements: "Perfect Mediator", level: 26, desc: "Eliminate PMCs on different maps", map: "Multiple", difficulty: "Medium", category: "PvP", xp: 14000, money: 50000, kappa: true },
      { name: "The Punisher - Part 4", requirements: "The Punisher - Part 3", level: 27, desc: "Eliminate 10 PMCs on Shoreline while wearing a Scav vest", map: "Shoreline", difficulty: "Hard", category: "PvP", xp: 16500, money: 58000, kappa: true },
      { name: "Lend Lease - Part 1", requirements: "Chemical - Part 4", level: 29, desc: "Hand over M4A1 rifles", map: "Any", difficulty: "Medium", category: "Collection", xp: 13500, money: 48000, kappa: false },
      { name: "Private Clinic", requirements: "Test Drive - Part 1", level: 30, desc: "Build a Medstation level 3 in your hideout", map: "Hideout", difficulty: "Easy", category: "Hideout", xp: 18000, money: 65000, kappa: false },
      { name: "The Punisher - Part 5", requirements: "The Punisher - Part 4", level: 31, desc: "Eliminate 10 PMCs on Customs with AKS-74U", map: "Customs", difficulty: "Hard", category: "PvP", xp: 18500, money: 68000, kappa: true },
      { name: "Lend Lease - Part 2", requirements: "Lend Lease - Part 1", level: 33, desc: "Hand over M4A1 rifles and AKMN rifles", map: "Any", difficulty: "Medium", category: "Collection", xp: 15000, money: 52000, kappa: false },
      { name: "Capturing Outposts", requirements: "Private Clinic", level: 35, desc: "Eliminate Scavs on Lighthouse", map: "Lighthouse", difficulty: "Medium", category: "Elimination", xp: 16000, money: 55000, kappa: false },
      { name: "The Punisher - Part 6", requirements: "The Punisher - Part 5", level: 36, desc: "Eliminate 15 PMCs on Shoreline with SVD", map: "Shoreline", difficulty: "Hard", category: "PvP", xp: 20000, money: 75000, kappa: true },
      { name: "Ambulance", requirements: "Lend Lease - Part 2", level: 38, desc: "Hand over medical supplies", map: "Any", difficulty: "Medium", category: "Collection", xp: 17000, money: 60000, kappa: false },
      { name: "Test Drive - Part 2", requirements: "Capturing Outposts", level: 40, desc: "Eliminate PMCs and Scavs on Customs", map: "Customs", difficulty: "Medium", category: "Elimination", xp: 19000, money: 70000, kappa: true },
    ],
    Therapist: [
      { name: "First in Line", requirements: "", level: 1, desc: "Hand over Salewas", map: "Any", difficulty: "Easy", category: "Collection", xp: 2000, money: 5000, kappa: false },
      { name: "Shortage", requirements: "First in Line", level: 1, desc: "Hand over medical supplies", map: "Any", difficulty: "Easy", category: "Collection", xp: 2500, money: 7000, kappa: false },
      { name: "Sanitary Standards - Part 1", requirements: "Shortage", level: 4, desc: "Locate and mark medical supplies on Shoreline", map: "Shoreline", difficulty: "Easy", category: "Marking", xp: 4800, money: 15000, kappa: true },
      { name: "Operation Aquarius - Part 1", requirements: "Sanitary Standards - Part 1", level: 6, desc: "Locate water pumping station on Lighthouse", map: "Lighthouse", difficulty: "Medium", category: "Exploration", xp: 6200, money: 20000, kappa: true },
      { name: "Sanitary Standards - Part 2", requirements: "Operation Aquarius - Part 1", level: 7, desc: "Hand over medical supplies", map: "Any", difficulty: "Medium", category: "Collection", xp: 5500, money: 18000, kappa: true },
      { name: "Painkiller", requirements: "Sanitary Standards - Part 2", level: 8, desc: "Hand over painkillers", map: "Any", difficulty: "Easy", category: "Collection", xp: 5800, money: 20000, kappa: false },
      { name: "General Wares", requirements: "Painkiller", level: 10, desc: "Hand over tools and supplies", map: "Any", difficulty: "Easy", category: "Collection", xp: 6500, money: 22000, kappa: false },
      { name: "Operation Aquarius - Part 2", requirements: "General Wares", level: 12, desc: "Locate the pumping station control panel", map: "Lighthouse", difficulty: "Medium", category: "Exploration", xp: 8000, money: 28000, kappa: true },
      { name: "Pharmacist", requirements: "Operation Aquarius - Part 2", level: 14, desc: "Hand over medical supplies and find medicine case", map: "Shoreline", difficulty: "Medium", category: "Collection", xp: 9500, money: 32000, kappa: false },
      { name: "Supply Plans", requirements: "Pharmacist", level: 16, desc: "Obtain documents on Reserve", map: "Reserve", difficulty: "Hard", category: "Collection", xp: 11000, money: 38000, kappa: true },
      { name: "Decontamination Service", requirements: "Supply Plans", level: 18, desc: "Hand over LEDX Skin Transilluminators", map: "Any", difficulty: "Hard", category: "Collection", xp: 13500, money: 45000, kappa: false },
      { name: "Health Care Privacy - Part 1", requirements: "Decontamination Service", level: 20, desc: "Obtain flash drives with medical records", map: "Any", difficulty: "Medium", category: "Collection", xp: 12000, money: 40000, kappa: true },
      { name: "Out of Curiosity", requirements: "Health Care Privacy - Part 1", level: 22, desc: "Hand over Medical tools", map: "Any", difficulty: "Easy", category: "Collection", xp: 10500, money: 35000, kappa: false },
      { name: "Health Care Privacy - Part 2", requirements: "Out of Curiosity", level: 24, desc: "Hand over medical supplies", map: "Any", difficulty: "Medium", category: "Collection", xp: 13000, money: 42000, kappa: true },
      { name: "Vitamins - Part 1", requirements: "Health Care Privacy - Part 2", level: 26, desc: "Hand over Medical supplies", map: "Any", difficulty: "Medium", category: "Collection", xp: 14500, money: 48000, kappa: false },
      { name: "Mentor", requirements: "Vitamins - Part 1", level: 28, desc: "Reach level 4 loyalty with all traders", map: "Any", difficulty: "Medium", category: "Loyalty", xp: 45000, money: 150000, kappa: false },
      { name: "Health Care Privacy - Part 3", requirements: "Mentor", level: 30, desc: "Obtain medical records from Labs", map: "Labs", difficulty: "Hard", category: "Collection", xp: 16000, money: 55000, kappa: true },
      { name: "Vitamins - Part 2", requirements: "Health Care Privacy - Part 3", level: 32, desc: "Hand over Military tubes and Medical supplies", map: "Any", difficulty: "Hard", category: "Collection", xp: 17500, money: 60000, kappa: false },
      { name: "Colleagues - Part 1", requirements: "Vitamins - Part 2", level: 35, desc: "Locate bodies on Streets", map: "Streets", difficulty: "Medium", category: "Exploration", xp: 18000, money: 65000, kappa: false },
      { name: "Colleagues - Part 2", requirements: "Colleagues - Part 1", level: 37, desc: "Hand over medical case", map: "Any", difficulty: "Hard", category: "Collection", xp: 19500, money: 70000, kappa: false },
      { name: "Colleagues - Part 3", requirements: "Colleagues - Part 2", level: 40, desc: "Survive Labs raids", map: "Labs", difficulty: "Hard", category: "Survival", xp: 22000, money: 80000, kappa: false },
    ],
    Skier: [
      { name: "Burning Rubber", requirements: "", level: 1, desc: "Hand over Fuel conditioners", map: "Any", difficulty: "Easy", category: "Collection", xp: 1800, money: 6000, kappa: false },
      { name: "Supplier", requirements: "Burning Rubber", level: 5, desc: "Hand over 3 respirators", map: "Any", difficulty: "Easy", category: "Collection", xp: 5100, money: 18000, kappa: true },
      { name: "The Extortionist", requirements: "Supplier", level: 7, desc: "Plant gold swag on Customs", map: "Customs", difficulty: "Medium", category: "Planting", xp: 6800, money: 22000, kappa: true },
      { name: "What's on the Flash Drive?", requirements: "The Extortionist", level: 9, desc: "Obtain secure flash drives", map: "Any", difficulty: "Medium", category: "Collection", xp: 7500, money: 25000, kappa: false },
      { name: "Stirrup", requirements: "What's on the Flash Drive?", level: 11, desc: "Eliminate PMCs with pistols", map: "Any", difficulty: "Hard", category: "PvP", xp: 9000, money: 30000, kappa: true },
      { name: "Golden Swag", requirements: "Stirrup", level: 13, desc: "Hand over gold chains and Roler watches", map: "Any", difficulty: "Medium", category: "Collection", xp: 8500, money: 28000, kappa: false },
      { name: "Flint", requirements: "Golden Swag", level: 15, desc: "Eliminate PMCs with headshots", map: "Woods", difficulty: "Medium", category: "PvP", xp: 10500, money: 35000, kappa: true },
      { name: "Informed Means Armed", requirements: "Flint", level: 17, desc: "Hand over SSD drives", map: "Any", difficulty: "Medium", category: "Collection", xp: 11000, money: 38000, kappa: false },
      { name: "Bullshit", requirements: "Informed Means Armed", level: 19, desc: "Eliminate Scavs at night on Customs", map: "Customs", difficulty: "Medium", category: "Elimination", xp: 12500, money: 42000, kappa: false },
      { name: "Kind of Sabotage", requirements: "Bullshit", level: 21, desc: "Mark fuel trucks on Customs", map: "Customs", difficulty: "Medium", category: "Marking", xp: 13500, money: 45000, kappa: false },
      { name: "Chemical - Part 4", requirements: "Kind of Sabotage", level: 23, desc: "Obtain key from Customs", map: "Customs", difficulty: "Hard", category: "Collection", xp: 14500, money: 50000, kappa: true },
      { name: "Silent Caliber", requirements: "Chemical - Part 4", level: 25, desc: "Eliminate PMCs with suppressed weapons", map: "Any", difficulty: "Medium", category: "PvP", xp: 15500, money: 55000, kappa: false },
      { name: "No Offence", requirements: "Silent Caliber", level: 27, desc: "Hand over items from Customs dorms", map: "Customs", difficulty: "Hard", category: "Collection", xp: 16500, money: 60000, kappa: false },
      { name: "Loyalty Buyout", requirements: "No Offence", level: 30, desc: "Pay Skier for loyalty increase", map: "Any", difficulty: "Easy", category: "Loyalty", xp: 25000, money: 100000, kappa: false },
      { name: "Insider", requirements: "Loyalty Buyout", level: 32, desc: "Locate and obtain items on Reserve", map: "Reserve", difficulty: "Medium", category: "Collection", xp: 17500, money: 65000, kappa: true },
      { name: "Dressed to Kill", requirements: "Insider", level: 35, desc: "Hand over Killa's helmet and armor", map: "Interchange", difficulty: "Hard", category: "Boss", xp: 20000, money: 75000, kappa: false },
    ],
    Peacekeeper: [
      { name: "Fishing Gear", requirements: "", level: 5, desc: "Hand over Shustrilo sealing foam", map: "Any", difficulty: "Easy", category: "Collection", xp: 4500, money: 15000, kappa: false },
      { name: "Tigr Safari", requirements: "Fishing Gear", level: 7, desc: "Eliminate PMCs on Woods", map: "Woods", difficulty: "Medium", category: "PvP", xp: 8000, money: 25000, kappa: false },
      { name: "Scrap Metal", requirements: "Tigr Safari", level: 9, desc: "Hand over Gunpowder and metal parts", map: "Any", difficulty: "Easy", category: "Collection", xp: 6500, money: 20000, kappa: false },
      { name: "Humanitarian Supplies", requirements: "Scrap Metal", level: 11, desc: "Locate and mark supply crates on Shoreline", map: "Shoreline", difficulty: "Medium", category: "Marking", xp: 9000, money: 28000, kappa: true },
      { name: "Spa Tour - Part 1", requirements: "Humanitarian Supplies", level: 13, desc: "Survive and extract from Shoreline", map: "Shoreline", difficulty: "Easy", category: "Survival", xp: 8500, money: 26000, kappa: true },
      { name: "The Cult - Part 1", requirements: "Spa Tour - Part 1", level: 15, desc: "Locate ritual sites on Customs and Woods", map: "Multiple", difficulty: "Medium", category: "Exploration", xp: 10000, money: 32000, kappa: true },
      { name: "Spa Tour - Part 2", requirements: "The Cult - Part 1", level: 17, desc: "Locate supplies in Sanatorium", map: "Shoreline", difficulty: "Medium", category: "Exploration", xp: 11000, money: 35000, kappa: true },
      { name: "Peacekeeping Mission", requirements: "Spa Tour - Part 2", level: 19, desc: "Eliminate Scavs on Shoreline wearing UN armor", map: "Shoreline", difficulty: "Medium", category: "Elimination", xp: 12500, money: 38000, kappa: true },
      { name: "The Cult - Part 2", requirements: "Peacekeeping Mission", level: 21, desc: "Hand over Cultist knives", map: "Any", difficulty: "Hard", category: "Collection", xp: 14000, money: 45000, kappa: true },
      { name: "Cargo X - Part 1", requirements: "The Cult - Part 2", level: 23, desc: "Locate container on Customs", map: "Customs", difficulty: "Easy", category: "Exploration", xp: 12000, money: 40000, kappa: false },
      { name: "Wet Job - Part 1", requirements: "Cargo X - Part 1", level: 25, desc: "Eliminate Scavs on Shoreline from pier", map: "Shoreline", difficulty: "Medium", category: "Elimination", xp: 13500, money: 42000, kappa: false },
      { name: "Cargo X - Part 2", requirements: "Wet Job - Part 1", level: 27, desc: "Obtain shipping manifest from Customs", map: "Customs", difficulty: "Medium", category: "Collection", xp: 14500, money: 45000, kappa: false },
      { name: "Wet Job - Part 2", requirements: "Cargo X - Part 2", level: 29, desc: "Eliminate PMCs on Shoreline from pier", map: "Shoreline", difficulty: "Hard", category: "PvP", xp: 16000, money: 52000, kappa: false },
      { name: "Cargo X - Part 3", requirements: "Wet Job - Part 2", level: 31, desc: "Mark containers on Customs", map: "Customs", difficulty: "Medium", category: "Marking", xp: 15500, money: 50000, kappa: false },
      { name: "Wet Job - Part 3", requirements: "Cargo X - Part 3", level: 33, desc: "Eliminate Scavs on Shoreline without armor", map: "Shoreline", difficulty: "Hard", category: "Elimination", xp: 17000, money: 55000, kappa: false },
      { name: "Ocean Man", requirements: "Wet Job - Part 3", level: 35, desc: "Survive Shoreline raids", map: "Shoreline", difficulty: "Medium", category: "Survival", xp: 18500, money: 60000, kappa: false },
      { name: "Samples", requirements: "Ocean Man", level: 37, desc: "Hand over Medical supplies from Labs", map: "Labs", difficulty: "Hard", category: "Collection", xp: 20000, money: 70000, kappa: false },
      { name: "Eagle Eye", requirements: "Samples", level: 40, desc: "Mark vehicles on Streets", map: "Streets", difficulty: "Medium", category: "Marking", xp: 22000, money: 80000, kappa: false },
    ],
    Mechanic: [
      { name: "Saving the Mole", requirements: "", level: 2, desc: "Locate the water pump on Factory", map: "Factory", difficulty: "Easy", category: "Exploration", xp: 3500, money: 12000, kappa: false },
      { name: "Gunsmith - Part 1", requirements: "Saving the Mole", level: 2, desc: "Modify MP-133 shotgun", map: "Hideout", difficulty: "Easy", category: "Hideout", xp: 4200, money: 15000, kappa: true },
      { name: "Gunsmith - Part 2", requirements: "Gunsmith - Part 1", level: 5, desc: "Modify AKS-74U", map: "Hideout", difficulty: "Easy", category: "Hideout", xp: 5800, money: 18000, kappa: true },
      { name: "Introduction", requirements: "Gunsmith - Part 1", level: 2, desc: "Hand over MR-133 shotgun", map: "Any", difficulty: "Easy", category: "Collection", xp: 4000, money: 14000, kappa: false },
      { name: "Gunsmith - Part 3", requirements: "Gunsmith - Part 2", level: 7, desc: "Modify MP5", map: "Hideout", difficulty: "Medium", category: "Hideout", xp: 7000, money: 22000, kappa: true },
      { name: "Friend from Norvinsk - Part 1", requirements: "Introduction", level: 5, desc: "Obtain bronze pocket watch", map: "Customs", difficulty: "Medium", category: "Collection", xp: 5500, money: 18000, kappa: false },
      { name: "Gunsmith - Part 4", requirements: "Gunsmith - Part 3", level: 9, desc: "Modify M4A1", map: "Hideout", difficulty: "Medium", category: "Hideout", xp: 8500, money: 26000, kappa: true },
      { name: "Friend from Norvinsk - Part 2", requirements: "Friend from Norvinsk - Part 1", level: 5, desc: "Obtain the decrypted message", map: "Customs", difficulty: "Medium", category: "Collection", xp: 6000, money: 20000, kappa: false },
      { name: "Gunsmith - Part 5", requirements: "Gunsmith - Part 4", level: 11, desc: "Modify AK-74M", map: "Hideout", difficulty: "Medium", category: "Hideout", xp: 9500, money: 30000, kappa: true },
      { name: "Friend from Norvinsk - Part 3", requirements: "Friend from Norvinsk - Part 2", level: 5, desc: "Locate the USEC hideout on Customs", map: "Customs", difficulty: "Medium", category: "Exploration", xp: 6500, money: 22000, kappa: false },
      { name: "Gunsmith - Part 6", requirements: "Gunsmith - Part 5", level: 13, desc: "Modify AKM", map: "Hideout", difficulty: "Medium", category: "Hideout", xp: 10500, money: 34000, kappa: true },
      { name: "Friend from Norvinsk - Part 4", requirements: "Friend from Norvinsk - Part 3", level: 5, desc: "Locate the lost USEC operators", map: "Woods", difficulty: "Medium", category: "Exploration", xp: 7000, money: 24000, kappa: false },
      { name: "Gunsmith - Part 7", requirements: "Gunsmith - Part 6", level: 15, desc: "Modify AK-74N", map: "Hideout", difficulty: "Medium", category: "Hideout", xp: 11500, money: 38000, kappa: true },
      { name: "Friend from Norvinsk - Part 5", requirements: "Friend from Norvinsk - Part 4", level: 5, desc: "Obtain information about the group", map: "Shoreline", difficulty: "Hard", category: "Collection", xp: 7500, money: 26000, kappa: false },
      { name: "Gunsmith - Part 8", requirements: "Gunsmith - Part 7", level: 17, desc: "Modify AK-102", map: "Hideout", difficulty: "Medium", category: "Hideout", xp: 12500, money: 42000, kappa: true },
      { name: "Breathing Room", requirements: "Friend from Norvinsk - Part 5", level: 5, desc: "Install signal jammers on Customs", map: "Customs", difficulty: "Medium", category: "Planting", xp: 8000, money: 28000, kappa: false },
      { name: "Gunsmith - Part 9", requirements: "Gunsmith - Part 8", level: 19, desc: "Modify DVL-10", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 13500, money: 46000, kappa: true },
      { name: "Farming - Part 1", requirements: "Breathing Room", level: 8, desc: "Obtain documents from Customs", map: "Customs", difficulty: "Medium", category: "Collection", xp: 8500, money: 30000, kappa: false },
      { name: "Gunsmith - Part 10", requirements: "Gunsmith - Part 9", level: 21, desc: "Modify AS Val", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 14500, money: 50000, kappa: true },
      { name: "Farming - Part 2", requirements: "Farming - Part 1", level: 10, desc: "Hand over military cables", map: "Any", difficulty: "Medium", category: "Collection", xp: 9000, money: 32000, kappa: false },
      { name: "Gunsmith - Part 11", requirements: "Gunsmith - Part 10", level: 23, desc: "Modify M1A", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 15500, money: 54000, kappa: true },
      { name: "Farming - Part 3", requirements: "Farming - Part 2", level: 12, desc: "Obtain documents on Interchange", map: "Interchange", difficulty: "Medium", category: "Collection", xp: 9500, money: 34000, kappa: false },
      { name: "Gunsmith - Part 12", requirements: "Gunsmith - Part 11", level: 25, desc: "Modify AK-104", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 16500, money: 58000, kappa: true },
      { name: "Farming - Part 4", requirements: "Farming - Part 3", level: 14, desc: "Hand over Machinery key", map: "Any", difficulty: "Hard", category: "Collection", xp: 10000, money: 36000, kappa: false },
      { name: "Gunsmith - Part 13", requirements: "Gunsmith - Part 12", level: 27, desc: "Modify ADAR 2-15", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 17500, money: 62000, kappa: true },
      { name: "Textile - Part 1", requirements: "Farming - Part 4", level: 16, desc: "Obtain cordura polyamide fabric", map: "Any", difficulty: "Medium", category: "Collection", xp: 10500, money: 38000, kappa: false },
      { name: "Gunsmith - Part 14", requirements: "Gunsmith - Part 13", level: 29, desc: "Modify TX-15", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 18500, money: 66000, kappa: true },
      { name: "Textile - Part 2", requirements: "Textile - Part 1", level: 18, desc: "Hand over Aramid fiber fabrics", map: "Any", difficulty: "Hard", category: "Collection", xp: 11000, money: 40000, kappa: false },
      { name: "Gunsmith - Part 15", requirements: "Gunsmith - Part 14", level: 31, desc: "Modify MPX", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 19500, money: 70000, kappa: true },
      { name: "Bad Reputation", requirements: "Textile - Part 2", level: 20, desc: "Reduce Fence reputation", map: "Any", difficulty: "Hard", category: "Loyalty", xp: 12000, money: 45000, kappa: false },
      { name: "Gunsmith - Part 16", requirements: "Gunsmith - Part 15", level: 33, desc: "Modify SVDS", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 20500, money: 74000, kappa: true },
      { name: "Scout", requirements: "Bad Reputation", level: 22, desc: "Mark vehicles on Woods", map: "Woods", difficulty: "Medium", category: "Marking", xp: 12500, money: 48000, kappa: false },
      { name: "Gunsmith - Part 17", requirements: "Gunsmith - Part 16", level: 35, desc: "Modify SR-25", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 21500, money: 78000, kappa: true },
      { name: "Insider", requirements: "Scout", level: 24, desc: "Locate and mark BMP-2", map: "Reserve", difficulty: "Hard", category: "Marking", xp: 13000, money: 50000, kappa: false },
      { name: "Gunsmith - Part 18", requirements: "Gunsmith - Part 17", level: 37, desc: "Modify M1911A1", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 22500, money: 82000, kappa: true },
      { name: "Signal - Part 1", requirements: "Insider", level: 26, desc: "Install radio transmitters on Shoreline", map: "Shoreline", difficulty: "Medium", category: "Planting", xp: 13500, money: 52000, kappa: false },
      { name: "Gunsmith - Part 19", requirements: "Gunsmith - Part 18", level: 39, desc: "Modify AK-105", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 23500, money: 86000, kappa: true },
      { name: "Signal - Part 2", requirements: "Signal - Part 1", level: 28, desc: "Install signal repeaters on Woods", map: "Woods", difficulty: "Medium", category: "Planting", xp: 14000, money: 54000, kappa: false },
      { name: "Gunsmith - Part 20", requirements: "Gunsmith - Part 19", level: 41, desc: "Modify SA-58", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 24500, money: 90000, kappa: true },
      { name: "Signal - Part 3", requirements: "Signal - Part 2", level: 30, desc: "Install signal repeaters on Customs", map: "Customs", difficulty: "Medium", category: "Planting", xp: 14500, money: 56000, kappa: false },
      { name: "Gunsmith - Part 21", requirements: "Gunsmith - Part 20", level: 43, desc: "Modify RSASS", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 25500, money: 94000, kappa: true },
      { name: "Signal - Part 4", requirements: "Signal - Part 3", level: 32, desc: "Install signal repeaters on Interchange", map: "Interchange", difficulty: "Medium", category: "Planting", xp: 15000, money: 58000, kappa: false },
      { name: "Gunsmith - Part 22", requirements: "Gunsmith - Part 21", level: 45, desc: "Modify HK 416A5", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 26500, money: 98000, kappa: true },
      { name: "Freight Terminal Recon", requirements: "Signal - Part 4", level: 34, desc: "Mark containers on Streets", map: "Streets", difficulty: "Medium", category: "Marking", xp: 15500, money: 60000, kappa: false },
      { name: "Gunsmith - Part 23", requirements: "Gunsmith - Part 22", level: 47, desc: "Modify STM-9", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 27500, money: 102000, kappa: false },
      { name: "Corporate Secrets", requirements: "Freight Terminal Recon", level: 36, desc: "Obtain documents on Lighthouse", map: "Lighthouse", difficulty: "Hard", category: "Collection", xp: 16000, money: 62000, kappa: false },
      { name: "Gunsmith - Part 24", requirements: "Gunsmith - Part 23", level: 49, desc: "Modify P90", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 28500, money: 106000, kappa: false },
      { name: "Database - Part 1", requirements: "Corporate Secrets", level: 38, desc: "Obtain hard drives on Customs", map: "Customs", difficulty: "Hard", category: "Collection", xp: 16500, money: 64000, kappa: false },
      { name: "Gunsmith - Part 25", requirements: "Gunsmith - Part 24", level: 51, desc: "Modify Chiappa Rhino 200DS", map: "Hideout", difficulty: "Hard", category: "Hideout", xp: 29500, money: 110000, kappa: false },
      { name: "Database - Part 2", requirements: "Database - Part 1", level: 40, desc: "Obtain server components on Reserve", map: "Reserve", difficulty: "Hard", category: "Collection", xp: 17000, money: 66000, kappa: false },
    ],
    Ragman: [
      { name: "Only Business", requirements: "", level: 3, desc: "Hand over Tushonka", map: "Any", difficulty: "Easy", category: "Collection", xp: 3800, money: 13000, kappa: false },
      { name: "Make ULTRA Great Again", requirements: "Only Business", level: 5, desc: "Locate and mark supply crates on Interchange", map: "Interchange", difficulty: "Easy", category: "Marking", xp: 5500, money: 18000, kappa: false },
      { name: "Big Sale", requirements: "Make ULTRA Great Again", level: 7, desc: "Hand over Circuit boards", map: "Any", difficulty: "Medium", category: "Collection", xp: 7000, money: 22000, kappa: false },
      { name: "The Blood of War - Part 1", requirements: "Big Sale", level: 9, desc: "Hand over Bloodsets", map: "Any", difficulty: "Medium", category: "Collection", xp: 8500, money: 26000, kappa: false },
      { name: "Dressed to Kill", requirements: "The Blood of War - Part 1", level: 11, desc: "Eliminate Killa and hand over his armor", map: "Interchange", difficulty: "Hard", category: "Boss", xp: 12000, money: 40000, kappa: false },
      { name: "Gratitude", requirements: "Dressed to Kill", level: 13, desc: "Hand over Military batteries", map: "Any", difficulty: "Medium", category: "Collection", xp: 10000, money: 32000, kappa: false },
      { name: "The Blood of War - Part 2", requirements: "Gratitude", level: 15, desc: "Hand over Bloodsets", map: "Any", difficulty: "Hard", category: "Collection", xp: 11500, money: 36000, kappa: false },
      { name: "Minibus", requirements: "The Blood of War - Part 2", level: 17, desc: "Mark minibuses on Lighthouse", map: "Lighthouse", difficulty: "Medium", category: "Marking", xp: 12500, money: 40000, kappa: false },
      { name: "The Blood of War - Part 3", requirements: "Minibus", level: 19, desc: "Hand over Medical supplies", map: "Any", difficulty: "Hard", category: "Collection", xp: 13500, money: 44000, kappa: false },
      { name: "Sew It Good - Part 1", requirements: "The Blood of War - Part 3", level: 21, desc: "Hand over Ripstop cloth", map: "Any", difficulty: "Medium", category: "Collection", xp: 14000, money: 46000, kappa: false },
      { name: "Epidemic", requirements: "Sew It Good - Part 1", level: 23, desc: "Eliminate PMCs while infected", map: "Any", difficulty: "Hard", category: "PvP", xp: 16000, money: 52000, kappa: false },
      { name: "Sew It Good - Part 2", requirements: "Epidemic", level: 25, desc: "Hand over Aramid fiber", map: "Any", difficulty: "Hard", category: "Collection", xp: 15500, money: 50000, kappa: false },
      { name: "Charisma Brings Success", requirements: "Sew It Good - Part 2", level: 27, desc: "Reach level 3 loyalty with all traders", map: "Any", difficulty: "Medium", category: "Loyalty", xp: 30000, money: 120000, kappa: false },
      { name: "Sew It Good - Part 3", requirements: "Charisma Brings Success", level: 29, desc: "Hand over PACA soft armor", map: "Any", difficulty: "Medium", category: "Collection", xp: 17000, money: 56000, kappa: false },
      { name: "Sales Night", requirements: "Sew It Good - Part 3", level: 31, desc: "Hand over Cash registers", map: "Any", difficulty: "Medium", category: "Collection", xp: 18000, money: 60000, kappa: false },
      { name: "Sew It Good - Part 4", requirements: "Sales Night", level: 33, desc: "Hand over Ultra medical storage key", map: "Any", difficulty: "Hard", category: "Collection", xp: 19000, money: 65000, kappa: false },
      { name: "The Key to Success", requirements: "Sew It Good - Part 4", level: 35, desc: "Obtain Keys from Interchange", map: "Interchange", difficulty: "Hard", category: "Collection", xp: 20000, money: 70000, kappa: false },
      { name: "Bunker - Part 1", requirements: "The Key to Success", level: 37, desc: "Locate bunker entrances on Reserve", map: "Reserve", difficulty: "Medium", category: "Exploration", xp: 21000, money: 75000, kappa: false },
      { name: "Bunker - Part 2", requirements: "Bunker - Part 1", level: 40, desc: "Survive Reserve raids", map: "Reserve", difficulty: "Hard", category: "Survival", xp: 24000, money: 85000, kappa: false },
    ],
    Jaeger: [
      { name: "Acquaintance", requirements: "Introduction", level: 2, desc: "Locate Jaeger's camp on Woods", map: "Woods", difficulty: "Easy", category: "Exploration", xp: 3200, money: 11000, kappa: false },
      { name: "The Tarkov Shooter - Part 1", requirements: "Acquaintance", level: 2, desc: "Eliminate PMCs with bolt-action rifles", map: "Any", difficulty: "Medium", category: "PvP", xp: 6500, money: 20000, kappa: true },
      { name: "The Survivalist Path - Unprotected but Dangerous", requirements: "Acquaintance", level: 2, desc: "Eliminate Scavs without armor", map: "Any", difficulty: "Medium", category: "Elimination", xp: 5500, money: 18000, kappa: false },
      { name: "The Tarkov Shooter - Part 2", requirements: "The Tarkov Shooter - Part 1", level: 2, desc: "Eliminate PMCs with bolt-action rifles from 40m", map: "Any", difficulty: "Medium", category: "PvP", xp: 7500, money: 24000, kappa: true },
      { name: "The Survivalist Path - Thrifty", requirements: "The Survivalist Path - Unprotected but Dangerous", level: 2, desc: "Eliminate Scavs with headshots", map: "Any", difficulty: "Medium", category: "Elimination", xp: 6000, money: 20000, kappa: false },
      { name: "The Tarkov Shooter - Part 3", requirements: "The Tarkov Shooter - Part 2", level: 2, desc: "Eliminate PMCs with bolt-action rifles on Shoreline", map: "Shoreline", difficulty: "Medium", category: "PvP", xp: 8500, money: 28000, kappa: true },
      { name: "The Survivalist Path - Zhivchik", requirements: "The Survivalist Path - Thrifty", level: 2, desc: "Eliminate PMCs with headshots", map: "Any", difficulty: "Hard", category: "PvP", xp: 7000, money: 24000, kappa: false },
      { name: "The Tarkov Shooter - Part 4", requirements: "The Tarkov Shooter - Part 3", level: 2, desc: "Eliminate PMCs with bolt-action rifles on Woods", map: "Woods", difficulty: "Medium", category: "PvP", xp: 9500, money: 32000, kappa: true },
      { name: "The Survivalist Path - Wounded Beast", requirements: "The Survivalist Path - Zhivchik", level: 2, desc: "Survive raids with tremor effect", map: "Any", difficulty: "Hard", category: "Survival", xp: 8000, money: 28000, kappa: false },
      { name: "The Tarkov Shooter - Part 5", requirements: "The Tarkov Shooter - Part 4", level: 2, desc: "Eliminate PMCs with bolt-action rifles from 60m", map: "Any", difficulty: "Hard", category: "PvP", xp: 10500, money: 36000, kappa: true },
      { name: "The Survivalist Path - Tough Guy", requirements: "The Survivalist Path - Wounded Beast", level: 2, desc: "Eliminate PMCs with heavy bleeding", map: "Any", difficulty: "Hard", category: "PvP", xp: 9000, money: 32000, kappa: false },
      { name: "The Tarkov Shooter - Part 6", requirements: "The Tarkov Shooter - Part 5", level: 2, desc: "Eliminate PMCs with headshots using bolt-action rifles", map: "Any", difficulty: "Hard", category: "PvP", xp: 11500, money: 40000, kappa: true },
      { name: "The Survivalist Path - Cold Blooded", requirements: "The Survivalist Path - Wounded Beast", level: 2, desc: "Eliminate PMCs at night", map: "Any", difficulty: "Hard", category: "PvP", xp: 9500, money: 34000, kappa: false },
      { name: "The Tarkov Shooter - Part 7", requirements: "The Tarkov Shooter - Part 6", level: 2, desc: "Eliminate PMCs on Woods in one raid", map: "Woods", difficulty: "Hard", category: "PvP", xp: 12500, money: 44000, kappa: true },
      { name: "The Survivalist Path - Eagle-Owl", requirements: "The Survivalist Path - Tough Guy", level: 2, desc: "Eliminate Scavs at night", map: "Any", difficulty: "Medium", category: "Elimination", xp: 10000, money: 36000, kappa: false },
      { name: "The Tarkov Shooter - Part 8", requirements: "The Tarkov Shooter - Part 7", level: 2, desc: "Eliminate PMCs with Mosin", map: "Any", difficulty: "Hard", category: "PvP", xp: 13500, money: 48000, kappa: true },
      { name: "The Survivalist Path - Combat Medic", requirements: "The Survivalist Path - Eagle-Owl", level: 2, desc: "Heal damage in raid", map: "Any", difficulty: "Medium", category: "Survival", xp: 10500, money: 38000, kappa: false },
      { name: "The Survivalist Path - Junkie", requirements: "The Survivalist Path - Combat Medic", level: 2, desc: "Use painkillers in raids", map: "Any", difficulty: "Easy", category: "Survival", xp: 11000, money: 40000, kappa: false },
      { name: "The Huntsman Path - Secured Perimeter", requirements: "The Tarkov Shooter - Part 3, The Survivalist Path - Tough Guy", level: 2, desc: "Eliminate Scavs on Woods", map: "Woods", difficulty: "Easy", category: "Elimination", xp: 8500, money: 30000, kappa: false },
      { name: "The Huntsman Path - Trophy", requirements: "The Huntsman Path - Secured Perimeter", level: 2, desc: "Eliminate Shturman", map: "Woods", difficulty: "Hard", category: "Boss", xp: 12000, money: 42000, kappa: false },
      { name: "The Huntsman Path - Forest Cleaning", requirements: "The Huntsman Path - Secured Perimeter", level: 2, desc: "Eliminate Scavs on Woods with headshots", map: "Woods", difficulty: "Medium", category: "Elimination", xp: 9500, money: 34000, kappa: false },
      { name: "The Huntsman Path - Controller", requirements: "The Huntsman Path - Forest Cleaning", level: 2, desc: "Eliminate PMCs on Woods", map: "Woods", difficulty: "Medium", category: "PvP", xp: 11000, money: 38000, kappa: false },
      { name: "The Huntsman Path - Justice", requirements: "The Huntsman Path - Trophy", level: 2, desc: "Eliminate PMCs who killed Scavs", map: "Any", difficulty: "Hard", category: "PvP", xp: 13000, money: 46000, kappa: false },
      { name: "The Huntsman Path - Evil Watchman", requirements: "The Huntsman Path - Forest Cleaning", level: 2, desc: "Eliminate Scavs on Customs", map: "Customs", difficulty: "Medium", category: "Elimination", xp: 10000, money: 36000, kappa: false },
      { name: "Rough Tarkov", requirements: "Acquaintance", level: 2, desc: "Survive raids without healing", map: "Any", difficulty: "Hard", category: "Survival", xp: 8500, money: 30000, kappa: false },
      { name: "Every Hunter Knows This", requirements: "Rough Tarkov", level: 2, desc: "Hand over hunting matches", map: "Any", difficulty: "Easy", category: "Collection", xp: 6500, money: 22000, kappa: false },
      { name: "Work Smarter", requirements: "Acquaintance", level: 2, desc: "Hand over toolkits", map: "Any", difficulty: "Easy", category: "Collection", xp: 5500, money: 18000, kappa: false },
      { name: "Rite of Passage", requirements: "Work Smarter", level: 2, desc: "Eliminate Scavs with headshots on Factory", map: "Factory", difficulty: "Medium", category: "Elimination", xp: 7500, money: 26000, kappa: false },
      { name: "The Delicious Sausage", requirements: "The Survivalist Path - Thrifty", level: 5, desc: "Hand over Sausages", map: "Any", difficulty: "Easy", category: "Collection", xp: 6000, money: 20000, kappa: false },
      { name: "Claustrophobia", requirements: "The Huntsman Path - Forest Cleaning", level: 2, desc: "Eliminate Scavs on Factory", map: "Factory", difficulty: "Medium", category: "Elimination", xp: 9000, money: 32000, kappa: false },
      { name: "The Huntsman Path - Sadist", requirements: "The Huntsman Path - Evil Watchman", level: 15, desc: "Eliminate Scavs with headshots", map: "Any", difficulty: "Medium", category: "Elimination", xp: 12500, money: 44000, kappa: false },
      { name: "The Huntsman Path - Woods Keeper", requirements: "The Huntsman Path - Controller", level: 18, desc: "Eliminate Shturman with headshot", map: "Woods", difficulty: "Hard", category: "Boss", xp: 14500, money: 50000, kappa: false },
      { name: "The Huntsman Path - Sells-Out", requirements: "The Huntsman Path - Sadist", level: 21, desc: "Eliminate PMCs on Interchange", map: "Interchange", difficulty: "Medium", category: "PvP", xp: 13500, money: 48000, kappa: false },
      { name: "The Huntsman Path - Eraser - Part 1", requirements: "The Huntsman Path - Woods Keeper", level: 24, desc: "Eliminate PMCs without armor", map: "Any", difficulty: "Hard", category: "PvP", xp: 15500, money: 54000, kappa: false },
      { name: "The Huntsman Path - Eraser - Part 2", requirements: "The Huntsman Path - Eraser - Part 1", level: 27, desc: "Eliminate PMCs with headshots", map: "Any", difficulty: "Hard", category: "PvP", xp: 17500, money: 60000, kappa: false },
      { name: "The Huntsman Path - Outcasts", requirements: "The Huntsman Path - Sells-Out", level: 30, desc: "Eliminate Raiders", map: "Reserve", difficulty: "Hard", category: "Elimination", xp: 19500, money: 68000, kappa: false },
      { name: "The Huntsman Path - Administrator", requirements: "The Huntsman Path - Eraser - Part 2", level: 33, desc: "Eliminate bosses", map: "Any", difficulty: "Hard", category: "Boss", xp: 21500, money: 76000, kappa: false },
      { name: "Living High is Not a Crime - Part 1", requirements: "The Huntsman Path - Outcasts", level: 36, desc: "Hand over Bitcoin", map: "Any", difficulty: "Hard", category: "Collection", xp: 20000, money: 72000, kappa: false },
      { name: "Living High is Not a Crime - Part 2", requirements: "Living High is Not a Crime - Part 1", level: 40, desc: "Hand over Intelligence folders", map: "Any", difficulty: "Hard", category: "Collection", xp: 24000, money: 85000, kappa: false },
    ],
    Fence: [
      { name: "External Interest", requirements: "Progression Difficulties - Part 2", level: 5, desc: "Eliminate PMCs with Scav karma", map: "Any", difficulty: "Hard", category: "PvP", xp: 15000, money: 50000, kappa: false },
    ],
    Lightkeeper: [
      { name: "Assessment - Part 1", requirements: "", level: 62, desc: "Reach level 62 and access to Lighthouse", map: "Lighthouse", difficulty: "Medium", category: "Exploration", xp: 50000, money: 200000, kappa: false },
      { name: "Assessment - Part 2", requirements: "Assessment - Part 1", level: 62, desc: "Eliminate PMCs and Scavs on Lighthouse", map: "Lighthouse", difficulty: "Hard", category: "Elimination", xp: 55000, money: 220000, kappa: false },
      { name: "Assessment - Part 3", requirements: "Assessment - Part 2", level: 62, desc: "Survive Lighthouse raids with specific gear", map: "Lighthouse", difficulty: "Hard", category: "Survival", xp: 60000, money: 240000, kappa: false },
      { name: "Trouble in the Big City", requirements: "Assessment - Part 3", level: 62, desc: "Complete tasks on Streets", map: "Streets", difficulty: "Hard", category: "Exploration", xp: 65000, money: 260000, kappa: false },
      { name: "Missing Cargo", requirements: "Trouble in the Big City", level: 62, desc: "Locate and mark cargo on Lighthouse", map: "Lighthouse", difficulty: "Medium", category: "Marking", xp: 70000, money: 280000, kappa: false },
      { name: "Return the Favor", requirements: "Missing Cargo", level: 62, desc: "Complete Lightkeeper missions", map: "Any", difficulty: "Hard", category: "Loyalty", xp: 80000, money: 300000, kappa: false },
    ],
  };

  const allMaps = ["All", "Factory", "Customs", "Woods", "Shoreline", "Reserve", "Interchange", "Labs", "Lighthouse", "Streets", "Ground Zero", "Multiple", "Hideout", "Any"];
  const allCategories = ["All", "Collection", "Elimination", "PvP", "Boss", "Exploration", "Marking", "Planting", "Survival", "Loyalty", "Hideout"];
  const allDifficulties = ["All", "Easy", "Medium", "Hard"];

  const [profiles, setProfiles] = useState(() => {
    const saved = localStorage.getItem("tarkovTrackerProfiles");
    return saved ? JSON.parse(saved) : [{ name: "Main Profile", completed: [], notes: {} }];
  });

  const [activeProfile, setActiveProfile] = useState(() => {
    const saved = localStorage.getItem("tarkovTrackerActiveProfile");
    return saved ? parseInt(saved) : 0;
  });

  const [completed, setCompleted] = useState(profiles[activeProfile]?.completed || []);
  const [notes, setNotes] = useState(profiles[activeProfile]?.notes || {});
  const [openTraders, setOpenTraders] = useState({});
  const [infoTask, setInfoTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterMap, setFilterMap] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [showKappaOnly, setShowKappaOnly] = useState(false);
  const [showIncomplete, setShowIncomplete] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("tarkovTrackerTheme") || "cyber-green";
  });
  const [showStats, setShowStats] = useState(false);
  const [showProfileManager, setShowProfileManager] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  // Fixed: Save current profile data to localStorage whenever completed or notes change
  useEffect(() => {
    const updatedProfiles = [...profiles];
    updatedProfiles[activeProfile] = { 
      ...updatedProfiles[activeProfile],
      completed, 
      notes 
    };
    localStorage.setItem("tarkovTrackerProfiles", JSON.stringify(updatedProfiles));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completed, notes, activeProfile]); // Intentionally excluding profiles to avoid infinite loop

  // Update profiles state only when switching profiles
  useEffect(() => {
    localStorage.setItem("tarkovTrackerActiveProfile", activeProfile.toString());
    setCompleted(profiles[activeProfile]?.completed || []);
    setNotes(profiles[activeProfile]?.notes || {});
  }, [activeProfile, profiles]);

  useEffect(() => {
    localStorage.setItem("tarkovTrackerTheme", theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  let touchTimeout;

  const handleTouchStart = (task) => {
    touchTimeout = setTimeout(() => {
      setInfoTask(task);
    }, 500);
  };

  const handleTouchEnd = () => {
    clearTimeout(touchTimeout);
  };

  const toggleTask = (taskName) => {
    if (completed.includes(taskName)) {
      setCompleted(completed.filter((t) => t !== taskName));
    } else {
      setCompleted([...completed, taskName]);
    }
  };

  const toggleTrader = (trader) => {
    setOpenTraders({ ...openTraders, [trader]: !openTraders[trader] });
  };

  const handleRightClick = (e, task) => {
    e.preventDefault();
    setInfoTask(task);
  };

  const expandAll = () => {
    const allOpen = {};
    Object.keys(tasksByTrader).forEach((trader) => {
      allOpen[trader] = true;
    });
    setOpenTraders(allOpen);
  };

  const collapseAll = () => {
    setOpenTraders({});
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      setCompleted([]);
      setNotes({});
    }
  };

  const addProfile = () => {
    const name = prompt("Enter profile name:");
    if (name) {
      const newProfiles = [...profiles, { name, completed: [], notes: {} }];
      setProfiles(newProfiles);
      setActiveProfile(newProfiles.length - 1);
    }
  };

  const deleteProfile = (index) => {
    if (profiles.length === 1) {
      alert("You must have at least one profile!");
      return;
    }
    if (window.confirm(`Delete profile "${profiles[index].name}"?`)) {
      const newProfiles = profiles.filter((_, i) => i !== index);
      setProfiles(newProfiles);
      setActiveProfile(Math.min(activeProfile, newProfiles.length - 1));
    }
  };

  const renameProfile = (index) => {
    const newName = prompt("Enter new profile name:", profiles[index].name);
    if (newName) {
      const newProfiles = [...profiles];
      newProfiles[index].name = newName;
      setProfiles(newProfiles);
    }
  };

  const exportData = () => {
    const data = JSON.stringify({ profiles, activeProfile }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tarkov-tracker-backup.json";
    a.click();
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          setProfiles(data.profiles);
          setActiveProfile(data.activeProfile || 0);
          alert("Data imported successfully!");
        } catch (error) {
          alert("Error importing data. Please check the file format.");
        }
      };
      reader.readAsText(file);
    }
  };

  const totalTasks = Object.values(tasksByTrader).flat().length;
  const completedCount = completed.length;
  const progressPercent = ((completedCount / totalTasks) * 100).toFixed(1);

  const kappaQuests = Object.values(tasksByTrader).flat().filter(t => t.kappa);
  const kappaCompleted = kappaQuests.filter(t => completed.includes(t.name)).length;
  const kappaTotal = kappaQuests.length;
  const kappaPercent = ((kappaCompleted / kappaTotal) * 100).toFixed(1);

  const totalXP = completed.reduce((sum, taskName) => {
    const task = Object.values(tasksByTrader).flat().find(t => t.name === taskName);
    return sum + (task?.xp || 0);
  }, 0);

  const totalMoney = completed.reduce((sum, taskName) => {
    const task = Object.values(tasksByTrader).flat().find(t => t.name === taskName);
    return sum + (task?.money || 0);
  }, 0);

  const getFilteredTasks = (tasks) => {
    return tasks.filter((task) => {
      const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           task.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = filterLevel === "" || task.level >= parseInt(filterLevel);
      const matchesMap = filterMap === "All" || task.map === filterMap;
      const matchesCategory = filterCategory === "All" || task.category === filterCategory;
      const matchesDifficulty = filterDifficulty === "All" || task.difficulty === filterDifficulty;
      const matchesKappa = !showKappaOnly || task.kappa;
      const matchesIncomplete = !showIncomplete || !completed.includes(task.name);
      
      return matchesSearch && matchesLevel && matchesMap && matchesCategory && matchesDifficulty && matchesKappa && matchesIncomplete;
    });
  };

  const addNote = (taskName, note) => {
    setNotes({ ...notes, [taskName]: note });
    setEditingNote(null);
  };

  return (
    <div className={`app-wrapper theme-${theme}`}>
      <h1 className="title">TARKOV QUEST TRACKER</h1>
      
      <div className="theme-selector container">
        <label>Theme: </label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="cyber-green">Cyber Green (Default)</option>
          <option value="tactical-blue">Tactical Blue</option>
          <option value="military-tan">Military Tan</option>
          <option value="dark-red">Dark Red</option>
          <option value="purple-haze">Purple Haze</option>
        </select>
      </div>

      <div className="profile-section container">
        <div className="profile-header">
          <h3>Profile: {profiles[activeProfile]?.name}</h3>
          <button onClick={() => setShowProfileManager(!showProfileManager)} className="control-btn">
            {showProfileManager ? "Hide" : "Manage"} Profiles
          </button>
        </div>
        
        {showProfileManager && (
          <div className="profile-manager">
            <div className="profile-list">
              {profiles.map((profile, index) => (
                <div key={index} className={`profile-item ${index === activeProfile ? "active" : ""}`}>
                  <span onClick={() => setActiveProfile(index)}>{profile.name}</span>
                  <div className="profile-actions">
                    <button onClick={() => renameProfile(index)}>✏️</button>
                    <button onClick={() => deleteProfile(index)}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={addProfile} className="control-btn">+ New Profile</button>
            <div className="import-export">
              <button onClick={exportData} className="control-btn">Export Data</button>
              <label className="control-btn">
                Import Data
                <input type="file" accept=".json" onChange={importData} style={{ display: "none" }} />
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="controls-section container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters-grid">
          <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} className="filter-select">
            <option value="">All Levels</option>
            {[...Array(50)].map((_, i) => (
              <option key={i + 1} value={i + 1}>Level {i + 1}+</option>
            ))}
          </select>

          <select value={filterMap} onChange={(e) => setFilterMap(e.target.value)} className="filter-select">
            {allMaps.map(map => <option key={map} value={map}>{map}</option>)}
          </select>

          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="filter-select">
            {allCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)} className="filter-select">
            {allDifficulties.map(diff => <option key={diff} value={diff}>{diff}</option>)}
          </select>
        </div>

        <div className="toggle-filters">
          <label className="checkbox-label">
            <input type="checkbox" checked={showKappaOnly} onChange={(e) => setShowKappaOnly(e.target.checked)} />
            Kappa Required Only
          </label>
          <label className="checkbox-label">
            <input type="checkbox" checked={showIncomplete} onChange={(e) => setShowIncomplete(e.target.checked)} />
            Incomplete Only
          </label>
        </div>

        <div className="button-group">
          <button onClick={expandAll} className="control-btn">Expand All</button>
          <button onClick={collapseAll} className="control-btn">Collapse All</button>
          <button onClick={() => setShowStats(!showStats)} className="control-btn">
            {showStats ? "Hide" : "Show"} Stats
          </button>
          <button onClick={resetProgress} className="control-btn reset-btn">Reset Progress</button>
        </div>
      </div>

      {showStats && (
        <div className="stats-dashboard container">
          <h2>Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{completedCount}/{totalTasks}</div>
              <div className="stat-label">Total Quests</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{kappaCompleted}/{kappaTotal}</div>
              <div className="stat-label">Kappa Quests</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{totalXP.toLocaleString()}</div>
              <div className="stat-label">Total XP Earned</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">₽{totalMoney.toLocaleString()}</div>
              <div className="stat-label">Total Money Earned</div>
            </div>
          </div>
          <div className="category-breakdown">
            <h3>Completion by Trader</h3>
            {Object.keys(tasksByTrader).map(trader => {
              const traderTasks = tasksByTrader[trader];
              const traderCompleted = traderTasks.filter(t => completed.includes(t.name)).length;
              const traderPercent = ((traderCompleted / traderTasks.length) * 100).toFixed(0);
              return (
                <div key={trader} className="trader-stat">
                  <span>{trader}</span>
                  <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: `${traderPercent}%` }}></div>
                  </div>
                  <span>{traderCompleted}/{traderTasks.length}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="progress-container container">
        <div className="progress-box">
          <h3>Overall Progress</h3>
          <div className="progress-text">
            <span className="progress-count">{completedCount}</span> / <span className="progress-total">{totalTasks}</span> Tasks
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div className="progress-percent">{progressPercent}%</div>
        </div>

        <div className="progress-box kappa-progress">
          <h3>🎁 Kappa Container Progress</h3>
          <div className="progress-text">
            <span className="progress-count">{kappaCompleted}</span> / <span className="progress-total">{kappaTotal}</span> Required Quests
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill kappa-fill" style={{ width: `${kappaPercent}%` }}></div>
          </div>
          <div className="progress-percent">{kappaPercent}%</div>
        </div>
      </div>

      <div className="instructions container">
        <p><strong>Desktop:</strong> Left click to complete • Right click for details</p>
        <p><strong>Mobile:</strong> Tap to complete • Hold for details</p>
      </div>

      <div className="tasks-container container">
        {Object.keys(tasksByTrader).map((trader) => {
          const filteredTasks = getFilteredTasks(tasksByTrader[trader]);
          if (filteredTasks.length === 0 && (searchTerm || filterLevel || filterMap !== "All" || filterCategory !== "All" || filterDifficulty !== "All" || showKappaOnly || showIncomplete)) return null;
          
          const traderCompleted = tasksByTrader[trader].filter(t => completed.includes(t.name)).length;
          const traderTotal = tasksByTrader[trader].length;
          const traderPercent = ((traderCompleted / traderTotal) * 100).toFixed(0);

          return (
            <div key={trader} className="trader-section">
              <h2 className="trader-title" onClick={() => toggleTrader(trader)}>
                <span className="trader-name-wrapper">
                  <span className="trader-name">{trader}</span>
                  <span className="trader-progress">({traderCompleted}/{traderTotal})</span>
                </span>
                <span className="toggle-arrow">{openTraders[trader] ? "−" : "+"}</span>
              </h2>

              {openTraders[trader] && (
                <div className="tasks-list">
                  <div className="trader-stats">
                    <div className="level-range">
                      Level Requirement: {Math.min(...tasksByTrader[trader].map((t) => t.level))} - {Math.max(...tasksByTrader[trader].map((t) => t.level))}
                    </div>
                    <div className="trader-progress-bar">
                      <div className="trader-progress-fill" style={{ width: `${traderPercent}%` }}></div>
                    </div>
                  </div>

                  {filteredTasks.map((task) => (
                    <div
                      key={task.name}
                      className={`task-box ${completed.includes(task.name) ? "completed" : ""} difficulty-${task.difficulty.toLowerCase()}`}
                      onClick={() => toggleTask(task.name)}
                      onContextMenu={(e) => handleRightClick(e, task)}
                      onTouchStart={() => handleTouchStart(task)}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div className="task-header">
                        <div className="task-name-wrapper">
                          <span className="task-name">{task.name}</span>
                          <div className="task-badges">
                            <span className="task-level">Lvl {task.level}</span>
                            <span className={`task-difficulty ${task.difficulty.toLowerCase()}`}>{task.difficulty}</span>
                            <span className="task-category">{task.category}</span>
                            <span className="task-map">{task.map}</span>
                            {task.kappa && <span className="kappa-badge">🎁</span>}
                          </div>
                        </div>
                        {completed.includes(task.name) && (
                          <span className="task-checkmark">✓</span>
                        )}
                      </div>
                      {task.requirements && task.requirements.trim() !== "" && (
                        <div className="task-requirements">
                          Requires: {task.requirements}
                        </div>
                      )}
                      <div className="task-desc">{task.desc}</div>
                      <div className="task-rewards">
                        💰 ₽{task.money.toLocaleString()} • ⭐ {task.xp.toLocaleString()} XP
                      </div>
                      {notes[task.name] && (
                        <div className="task-note">
                          📝 {notes[task.name]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {infoTask && (
        <div className="task-info-overlay" onClick={() => setInfoTask(null)}>
          <div className="task-info-box" onClick={(e) => e.stopPropagation()}>
            <h3>{infoTask.name}</h3>
            <div className="task-detail-row">
              <strong>Level:</strong> {infoTask.level}
            </div>
            <div className="task-detail-row">
              <strong>Map:</strong> {infoTask.map}
            </div>
            <div className="task-detail-row">
              <strong>Difficulty:</strong> <span className={`difficulty-badge ${infoTask.difficulty.toLowerCase()}`}>{infoTask.difficulty}</span>
            </div>
            <div className="task-detail-row">
              <strong>Category:</strong> {infoTask.category}
            </div>
            <div className="task-detail-row">
              <strong>Requires:</strong> {infoTask.requirements || "None"}
            </div>
            <div className="task-detail-row">
              <strong>Rewards:</strong> ₽{infoTask.money.toLocaleString()} + {infoTask.xp.toLocaleString()} XP
            </div>
            {infoTask.kappa && (
              <div className="task-detail-row kappa-required">
                🎁 <strong>Required for Kappa Container</strong>
              </div>
            )}
            <div className="task-detail-row">
              <strong>Objective:</strong>
            </div>
            <p className="task-objective">{infoTask.desc}</p>
            
            <div className="task-notes-section">
              <strong>Personal Notes:</strong>
              {editingNote === infoTask.name ? (
                <div>
                  <textarea
                    className="note-input"
                    defaultValue={notes[infoTask.name] || ""}
                    placeholder="Add your notes here..."
                    onBlur={(e) => addNote(infoTask.name, e.target.value)}
                    autoFocus
                  />
                </div>
              ) : (
                <div>
                  <p className="task-note-display">{notes[infoTask.name] || "No notes yet"}</p>
                  <button onClick={() => setEditingNote(infoTask.name)} className="edit-note-btn">
                    {notes[infoTask.name] ? "Edit Note" : "Add Note"}
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setInfoTask(null)}>Close</button>
          </div>
        </div>
      )}

      <div className="footer">
        Created by{" "}
        <a href="https://gevoglanyan.com" target="_blank" rel="noopener noreferrer">
          Harry Gevoglanyan
        </a>
        {" "}• Enhanced Edition
      </div>
    </div>
  );
}