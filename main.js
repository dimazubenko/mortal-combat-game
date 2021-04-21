'use strict'

const $arenas = document.querySelector('.arenas')
const $form = document.querySelector('.control')
const $chat = document.querySelector('.chat')
const date = new Date()
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
}

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
    console.log(`${this.name} - Fight...`)
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

function playerAttack() {
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

    return attack
}

function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1]
    const defence = ATTACK[getRandom(3) - 1]
    
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
} 

function showFinalResult() {
    if(player1.hp === 0 || player2.hp === 0) {
        $form.style.display = 'none'
        createReloadButton()
    }

    if(player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(showResult(player2.name))
        generateLogs('end', player2, player1)
    } else
        if(player2.hp === 0 && player2.hp < player1.hp) {
            $arenas.appendChild(showResult(player1.name))
            generateLogs('end', player1, player2)
        } else 
            if(player1.hp === 0 && player2.hp === 0) {
                $arenas.appendChild(showResult())
                generateLogs('draw')
        }
}

function hit(type, player1, player2) {
    const text = logs[type][getRandom(18) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)
    const time = new Date()
    const playerHp = player2.hp
    console.log(text)
    const el = `<p>${time.getHours()}:${time.getMinutes()} - ${text} - [${playerHp}/100]</p>`
    $chat.insertAdjacentHTML('afterbegin', el)
}
function startGame(type, player1, player2) {
    const text = logs[type].replace('[time]', `${date.getHours()}:${date.getMinutes()}`).replace('[player1]', player1.name).replace('[player2]', player2.name)
    console.log(text)
    const el = `<p>${text}</p>`
    $chat.insertAdjacentHTML('afterbegin', el)
}
function showDraw(type) {
    const text = logs[type]
    console.log(text)
    const el = `<p>${text}</p>`
    $chat.insertAdjacentHTML('afterbegin', el)
}
function defence(type, player1, player2) {
    const text = logs[type][getRandom(8) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)
    console.log(text)
    const el = `<p>${text}</p>`
    $chat.insertAdjacentHTML('afterbegin', el)
}
function end(type, player1, player2) {
    const text = logs[type][getRandom(3) - 1].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name)
    console.log(text)
    const el = `<p>${text}</p>`
    $chat.insertAdjacentHTML('afterbegin', el)
}

function generateLogs(type, player1, player2) { 
    const cond = type
    switch(cond) {
        case 'hit':
            hit(type, player1, player2)
            break
        case 'start':
            startGame(type, player1, player2)
            break
        case 'draw':
            showDraw(type)
            break
        case 'end':
            end(type, player1, player2)
            break
        case 'defence':
            defence(type, player1, player2)
            break
    }
    
}
generateLogs('start', player1, player2)

$form.addEventListener('submit', function(e) {
    e.preventDefault()
    const enemy = enemyAttack()
    const player = playerAttack()

    if(player.defence !== enemy.hit) {
         player1.changeHP(enemy.value)
         player1.renderHP()
         generateLogs('hit', player1, player2)
    } 
        
    if(enemy.defence !== player.hit) {
        player2.changeHP(player.value)
        player2.renderHP()
        generateLogs('hit', player2, player1)
    }

    if(player.defence == enemy.hit) {
        generateLogs('defence', player1, player2)
   } 
       
   if(enemy.defence == player.hit) {
    generateLogs('defence', player2, player1)
   }

    showFinalResult()
})




