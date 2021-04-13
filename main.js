'use strict'

const $arenas = document.querySelector('.arenas')
const $randomBtn = document.querySelector('.button')

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'assets/characters/scorpion.gif',
    weapon: ['fists'],
    attack: attack,
    changeHP: changeHP, 
    elHP: elHP,
    renderHP: renderHP
}

player1.attack()

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'assets/characters/subzero.gif',
    weapon: ['legs'],
    attack: attack,
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
}

player2.attack()

function attack() {
    console.log(this.name + ' - Fight...')
}

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

function renderHP() {
    this.elHP().style.width = this.hp + '%'
}

function elHP() {
    const $playerLife = document.querySelector('.player'+ this.player +' .life')
    return $playerLife
}

function getRandom(num) {
    return Math.ceil(Math.random() * num)
}

function changeHP(damage) {
    this.hp -= damage
    console.log(this.hp)

    if(this.hp <= 0) {
        this.hp = 0
    }
}

function showResult(name) {
    const $winTitle = createElement('div', 'winTitle')
    if(name) {
        $winTitle.innerText = name + ' wins'
    } else {
        $winTitle.innerText = 'draw'
    }
    
    return $winTitle
}

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap')
    const $reloadBtn = createElement('button', 'button')
    $reloadBtn.innerText = 'Restart'
    $reloadWrap.appendChild($reloadBtn)

    $reloadBtn.addEventListener('click', function() {
        window.location.reload()
    })

    return $reloadBtn
}

$randomBtn.addEventListener('click', function() {
    player1.changeHP(getRandom(20))
    player2.changeHP(getRandom(20))
    player1.renderHP()
    player2.renderHP()

    if(player1.hp === 0 || player2.hp === 0) {
        $randomBtn.disabled = true
        $arenas.appendChild(createReloadButton())
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(showResult(player2.name))
    } else
        if(player2.hp === 0 && player2.hp < player1.hp) {
            $arenas.appendChild(showResult(player1.name))
        } else 
            if(player1.hp === 0 && player2.hp === 0) {
                $arenas.appendChild(showResult())
        }
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))