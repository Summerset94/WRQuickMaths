import './App.css';
import { useState } from 'react';
import ChampionList from './components/ChampionList';
import MainInfo from './components/MainInfo';
import './styles/StatColors.css'
import { StatsProvider } from './components/StatsContext';
import Header from './components/Header';
import ChangeLog from './components/ChangeLog';


function App() {
  const [attackChamp, setAttackChamp] = useState(false);
  const [defenceChamp, setDefenceChamp] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  
  function champSelected() {
    return attackChamp && defenceChamp ? true : false
  };


  function handleConfirm() {
    setConfirmation(!confirmation)
  }

  function handleAttackClick(champion) {
    setAttackChamp(champion);
  }

  function handleDefenceClick(champion) {
    setDefenceChamp(champion);
  }
  
  return (
    <>
      <Header />

       {champSelected && confirmation ? (        
        <div className='mainTile'>
          <StatsProvider>
          <MainInfo 
            attack={attackChamp} 
            defence={defenceChamp}
            resetButtonClick={handleConfirm}
          />
          </StatsProvider>
        </div>
      ) : ( 
        <div className='selectTile'>
          <ChampionList 
            onChampClick={handleAttackClick}
            champ='attacking' />
          <ChampionList 
            onChampClick={handleDefenceClick}
            champ='defending' />

          <div className='confirmButtonTile'>
          <button onClick={handleConfirm} className='confirmButton'>Confirm</button>
          </div>

          <ChangeLog />          
          <br />
          <div className='bugsTile'>
          <p>Current bugs:</p>
          <ol>
            <li>Level scaling bonus: JS doesn't like decimals. And numbers here have a lot of them. BASE stats at level are a bit off (Health and Mana ~40; small numbers like AD, Armor, Magic Resistance ~1). It is due the nature of level growth mechanic (stats grow at 75-125% of scaling based on level and JS doesn't take those numbers well).</li>
            <li>% Physical Penetration items do not update <u>shown</u> numbers when Champion level is changed. Re-apply item after changing current champion level to show up actual numbers;</li>
          </ol>
          <br /> 

          <p>
            Source code for project: <a href="https://github.com/Summerset94/wrquickmaths" target='_blank'>Github Page</a>  
          </p>

          <br />
          <p>
            For any questions contact me in Discord @summerset94 or <a href="https://twitter.com/wrquickmaths" target='_blank'>twitter</a> 
          </p>
          </div>
        </div>

        
      )}
    </>
  )
}

export default App
