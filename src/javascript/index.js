const characters = document.querySelectorAll('.character')

  characters.forEach((character) => {

    character.addEventListener('mouseenter', () => {

      const idCharacterSelected = character.attributes.id.value

    if(idCharacterSelected === 'mihawk') return;


      const characterSelected = document.querySelector('.selected')
      characterSelected.classList.remove('selected')

      character.classList.add('selected')

      const firstPlayerImage = document.getElementById('player-1');
      firstPlayerImage.src = `./src/images/${idCharacterSelected}.png`;

      const firstPlayerName = document.querySelector('.playerName');
      const nameSelected = character.getAttribute('data-name')

      firstPlayerName.innerHTML = nameSelected



  })
  
});