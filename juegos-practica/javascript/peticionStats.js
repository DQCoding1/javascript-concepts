const btn_players = document.querySelector(".callofduty__button")
const mainContainer = document.querySelector(".callofduty")


btn_players.addEventListener("click", showCards)


function showCards(){
  const loader = document.createRange().createContextualFragment(`
    <div class="animation">
      <div class="animation__loading1"></div>
      <div class="animation__loading2"></div>
      <div class="animation__loading3"></div>
    </div>   
    `)      
  btn_players.appendChild(loader)  

  const callofduty_cards = document.createElement("section")
  callofduty_cards.classList.add("callofduty__cards")

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4b3a00033dmsh070ff1d10615b18p11a04ejsn6ef208f3e17b',
      'X-RapidAPI-Host': 'call-of-duty-modern-warfare.p.rapidapi.com'
    }
  };

  fetch('https://call-of-duty-modern-warfare.p.rapidapi.com/leaderboard/1/battle', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.entries.forEach(item => {
        const card = document.createRange().createContextualFragment(
          `
          <article class="callofduty__article">
            <div><span class="callofduty__span">User: </span><br> ${item.username}</div>
            <div><span class="callofduty__span">Wins: </span>${item.values.wins}</div>
            <div><span class="callofduty__span">Losses: </span>${item.values.losses}</div>
            <div><span class="callofduty__span">Kills: </span>${item.values.kills}</div>
            <div><span class="callofduty__span">Headshots: </span>${item.values.headshots}</div>
            <div><span class="callofduty__span">Time played: </span>${item.values.timePlayed}</div>
            <div><span class="callofduty__span">Experience: </span>${item.values.xp}</div>
            <div><span class="callofduty__span">Prestige: </span>${item.values.prestige}</div>
          </article>
        `
        )
        callofduty_cards.appendChild(card)
      })
        
      mainContainer.appendChild(callofduty_cards)
      btn_players.removeEventListener("click", showCards)
      btn_players.removeChild(btn_players.lastElementChild)
    })
        

}





    