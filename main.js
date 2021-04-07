'use strict'

const player1 = {
    name: 'KITANA',
    hp: 100,
    img: 'assets/characters/kitana.gif',
    weapon: ['fists'],
    attack: function() {
        console.log(player1.name + ' Fight...')
    }
}

player1.attack()

const player2 = {
    name: 'SONYA',
    hp: 100,
    img: 'assets/characters/sonya.gif',
    weapon: ['legs'],
    attack: function() {
        console.log(player2.name + ' Fight...')
    }
}

player2.attack()

function createPlayer(player, name, hp, img) {
    const $arenas = document.querySelector('.arenas')

    function addClass(classname) {
        $player.classList.add(classname)
    }
    
    const $player = document.createElement('div')
    addClass(player)

    const $progressBar = document.createElement('div')
    $progressBar.classList.add('progressbar')

    const $life = document.createElement('div') 
    $life.classList.add('life')

    const $name = document.createElement('div')
    $name.classList.add('name')

    const $character = document.createElement('div')
    $character.classList.add('character')

    const $imgCharacter = document.createElement('img')

    $arenas.appendChild($player)
    $player.appendChild($progressBar)
    $player.appendChild($character)
    $progressBar.appendChild($life)
    $progressBar.appendChild($name)
    $character.appendChild($imgCharacter)

    $life.style.width = hp + '%'
    $name.innerText = name
    $imgCharacter.setAttribute('src', img)
}

createPlayer('player1', player1.name, player1.hp, player1.img)
createPlayer('player2', player2.name, player2.hp, player2.img)