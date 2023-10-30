import{j as s}from"./index-67d5e236.js";function p({currentLevel:n,mod:e,bonus:i,atk:a,def:l,champ:t,updateAbilitiesBonus:h}){const r=[{description:s.jsxs("div",{className:"abilityDescription",children:[s.jsxs("h4",{children:[s.jsx("span",{className:"marker--ability",children:"P"})," BATTLE FURY"]}),s.jsxs("p",{children:["Gain ",s.jsxs("abbr",{title:"0.32-0.5% based on level",className:"stat--critChance",children:[(.32+.012857142857142857*(n-1)).toFixed(2)," Critical Rate"]})," for each point of Fury"]}),s.jsxs("p",{children:["Attacking a champion grants ",s.jsxs("abbr",{title:"at ULT level 0/1/2/3",className:"stat--as",children:["55 (",(t.asBase*55/100).toFixed(3),") / 60 (",(t.asBase*60/100).toFixed(3),") / 65 (",(t.asBase*60/100).toFixed(3),") / 70% (",(t.asBase*70/100).toFixed(3),") Attack Speed"]})," for 5 seconds. (6 second cooldown)"]}),s.jsx("p",{children:"Gains 5 Fury with every attack, 10 from critical strikes and 15 from kills. Loses 5 Fury per second after Tryndamere has been out of combat for 8 seconds."})]})},{description:s.jsxs("div",{className:"abilityDescription",children:[s.jsxs("h4",{children:[s.jsx("span",{className:"marker--ability",children:"1"})," BLOODLUST"]}),s.jsxs("h5",{children:["Cooldown:"," ",(12*e.atkcdr).toFixed(1)]}),s.jsx("h5",{className:"stat--hp",children:"Healing Shield:"}),s.jsxs("p",{className:"stat--hp",children:[Math.round(55+a.ap*30/100)," -"," ",Math.round(55+a.ap*30/100+(1+a.ap*1.2/100)*100)," /"," ",Math.round(65+a.ap*30/100)," -"," ",Math.round(65+a.ap*30/100+(1+a.ap*1.2/100)*100)," /"," ",Math.round(75+a.ap*30/100)," -"," ",Math.round(75+a.ap*30/100+(1+a.ap*1.2/100)*100)," /"," ",Math.round(85+a.ap*30/100)," -"," ",Math.round(85+a.ap*30/100+(1+a.ap*1.2/100)*100)]}),s.jsx("br",{}),s.jsxs("p",{children:[s.jsx("b",{children:"Passive:"})," Gains ",s.jsx("span",{className:"stat--ad",children:"5 / 10 / 15 / 20 Attack Damage"}),"  plus an additional ",s.jsx("span",{className:"stat--ad",children:" 0.25 / 0.30 / 0.35 / 0.4 Attack Damage"})," per 1% of missing Health."]}),s.jsxs("p",{children:[s.jsx("b",{children:"Active:"})," Consumes all Fury to heal for ",s.jsxs("span",{className:"stat--hp",children:["55 / 65 / 75 / 85 (",s.jsx("span",{className:"stat--ap",children:"+30% AP"}),")"]})," plus  ",s.jsxs("span",{className:"stat--hp",children:["1 / 1.6 / 2.2 / 2.8 (",s.jsx("span",{className:"stat--ap",children:"+1.2%  AP"}),")"]})," per point of Fury consumed."]})]})},{description:s.jsxs("div",{className:"abilityDescription",children:[s.jsxs("h4",{children:[s.jsx("span",{className:"marker--ability",children:"2"})," MOCKING SHOUT"]}),s.jsxs("h5",{children:["Cooldown:"," ",(12*e.atkcdr).toFixed(1)]}),s.jsx("br",{}),s.jsxs("p",{children:["Reduces nearby enemy champions' ",s.jsx("span",{className:"stat--as",children:"Attack Speed by 25/30/35/40%"}),"  for 3 seconds. If target is moving away from Tryndamere, ",s.jsx("span",{className:"stat--moveSpeed",children:"slow them by 35%"}),"."]})]})},{description:s.jsxs("div",{className:"abilityDescription",children:[s.jsxs("h4",{children:[s.jsx("span",{className:"marker--ability",children:"3"})," SPINNING SLASH"]}),s.jsxs("h5",{children:["Cooldown:"," ",(12*e.atkcdr).toFixed(1)," /"," ",(11*e.atkcdr).toFixed(1)," /"," ",(10*e.atkcdr).toFixed(1)," /"," ",(9*e.atkcdr).toFixed(1)]}),s.jsx("h5",{className:"stat--ad",children:"Damage:"}),s.jsxs("p",{className:"stat--ad",children:["Pre-mitigation:"," ",Math.round(80+i.attack*130/100+a.ap*100/100)," /"," ",Math.round(120+i.attack*130/100+a.ap*100/100)," /"," ",Math.round(160+i.attack*130/100+a.ap*100/100)," /"," ",Math.round(200+i.attack*130/100+a.ap*100/100)]}),s.jsxs("p",{className:"stat--ad",children:["Post-mitigation:"," ",Math.round((80+i.attack*130/100+a.ap*100/100)*(1-e.defPhysRed))," /"," ",Math.round((120+i.attack*130/100+a.ap*100/100)*(1-e.defPhysRed))," /"," ",Math.round((160+i.attack*130/100+a.ap*100/100)*(1-e.defPhysRed))," /"," ",Math.round((200+i.attack*130/100+a.ap*100/100)*(1-e.defPhysRed))]}),s.jsx("br",{}),s.jsxs("p",{children:["Dashes, dealing ",s.jsxs("span",{className:"stat--ad",children:["80 / 120 / 160 / 200 (+130% bonus AD) (",s.jsx("span",{className:"stat--ap",children:"+100% AP"}),") physical damage "]})]}),s.jsxs("p",{children:[s.jsx("span",{className:"stat--critCHance",children:"Critical Strikes"}),"  against minions reduce the cooldown of Spinning Slash by 1 second, doubled against champions. Gains 2 Fury for each enemy hit."]})]})},{description:s.jsxs("div",{className:"abilityDescription",children:[s.jsxs("h4",{children:[s.jsx("span",{className:"marker--ability",children:"ULT"})," UNDYING RAGE"]}),s.jsxs("h5",{children:["Cooldown:"," ",(90*e.atkcdr).toFixed(1)," /"," ",(80*e.atkcdr).toFixed(1)," /"," ",(70*e.atkcdr).toFixed(1)]}),s.jsx("br",{}),s.jsxs("p",{children:[s.jsx("b",{children:"Passive:"})," Increases Battle Fury's bonus Attack Speed"]}),s.jsxs("p",{children:[s.jsx("b",{children:"Active:"})," Becomes unkillable for 5 seconds and gains 50 / 75 / 100 Fury."]}),s.jsx("p",{children:"Can be cast while crowd controlled."})]})}];return s.jsx(s.Fragment,{children:r.map((c,d)=>s.jsx("div",{className:"abilitiesTile",children:s.jsx("div",{children:c.description},d)}))})}export{p as default};
