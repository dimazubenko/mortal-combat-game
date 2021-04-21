export const player1 = {
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

export const player2 = {
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

function attack() {
    console.log(`${this.name} - Fight...`)
}

function renderHP() {
    this.elHP().style.width = this.hp + '%'
}

function elHP() {
    const $playerLife = document.querySelector('.player'+ this.player +' .life')
    return $playerLife
}

function changeHP(damage) {
    this.hp -= damage
    console.log(this.hp)

    if(this.hp <= 0) {
        this.hp = 0
    }
}