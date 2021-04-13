'use strict'

const $arenas = document.querySelector('.arenas')
const $randomBtn = document.querySelector('.button')

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 80,
    img: 'assets/characters/scorpion.gif',
    weapon: ['fists'],
    attack: function() {
        console.log(this.name + ' - Fight...')
    }
}

player1.attack()

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'assets/characters/subzero.gif',
    weapon: ['legs'],
    attack: function() {
        console.log(this.name + ' - Fight...')
    }
}

player2.attack()


function createElement(tag, className) {
    const $tag = document.createElement(tag)

    if(className) {
        $tag.classList.add(className)
    }
    
    return $tag
}

function createPlayer(playerNum) {

    const $player = createElement('div', 'player'+playerNum.player)
    const $progressBar = createElement('div', 'progressbar')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $character = createElement('div', 'character')
    const $imgCharacter = createElement('img')

    $player.appendChild($progressBar)
    $player.appendChild($character)
    $progressBar.appendChild($life)
    $progressBar.appendChild($name)
    $character.appendChild($imgCharacter)

    $life.style.width = playerNum.hp + '%'
    $name.innerText = playerNum.name
    $imgCharacter.setAttribute('src', playerNum.img)

    return $player
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life')
    player.hp -= Math.ceil(Math.random() * 20)
    $playerLife.style.width = player.hp + '%'
    console.log(player.hp)

    if(player.hp <= 0) {
        $playerLife.style.width = 0
        $randomBtn.disabled = true
        if(player.hp > 0) {
            $arenas.appendChild(playerWin(player.name))
        }
    }
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle')
    $winTitle.innerText = name + ' win'

    return $winTitle
}

$randomBtn.addEventListener('click', function() {
    changeHP(player1)
    changeHP(player2)
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))