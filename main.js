'use strict'

const $arenas = document.querySelector('.arenas')
const $form = document.querySelector('.control')
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'assets/characters/scorpion.gif',
    weapon: ['fists'],
    attack,
    changeHP, 
    elHP,
    renderHP
}

player1.attack()

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'assets/characters/subzero.gif',
    weapon: ['legs'],
    attack,
    changeHP,
    elHP,
    renderHP
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

    $arenas.appendChild($reloadWrap)

    return $reloadBtn
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

$form.addEventListener('submit', function(e) {
    e.preventDefault()
    const enemy = enemyAttack()

    const attack = {}

    for (let item of $form) {
        
        if(item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value])
            attack.hit = item.value
        }
        if(item.checked && item.name === 'defence') {
            attack.defence = item.value
        }
        item.checked = false
    }
    if(enemy.hit != attack.defence) {
         player1.changeHP(attack.value)
    } else
        if(attack.hit != enemy.defence) {
            player2.changeHP(enemy.value)
        }

    player1.renderHP()
    player2.renderHP()

    if(player1.hp === 0 || player2.hp === 0) {
        $form.style.display = 'none'
        createReloadButton()
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
    console.log('enemy', enemy)
    console.log('me', attack)
    console.log(attack)
})

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1]
    const defence = ATTACK[getRandom(3) - 1]
    
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
} 

// if(player1 item.value === 'head' && player2 item.defence === 'head') {
//     ничего
// }
