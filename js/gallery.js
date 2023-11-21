class Character {
    constructor(id, name, currentImg, altImgs){
        this.id = id;
        this.name = name;
        this.currentImg = currentImg;
        this.altImgs = altImgs;
    }
    static addAltImg(altImg){
        this.altImgs.push(altImg);
    }
    
    changeForm(){
        let currentImg = this.currentImg;
        this.currentImg = this.altImgs.shift();
        this.altImgs.push(currentImg);
        return this.currentImg;
    }
}

class CharacterImg {
    constructor(imgUrl, altTxt){
        this.imgUrl = imgUrl;
        this.altTxt = altTxt;
    }
}

let characters = [];
let img_base = '../images/';
let goku = new Character(
    1,
    'Goku', 
    new CharacterImg('goku.png', 'Goku'), 
    [
        new CharacterImg('super_saiyan_goku.png', 'Super Saiyan Goku'),
        new CharacterImg('goku_black.png', 'Goku Black'),
        new CharacterImg('goku_god.png', 'Goku Super Saiyan God'),
        new CharacterImg('goku_ultra_instinct.png', 'Goku Ultra Instinct'),
    ]);
let vegita = new Character(
    2,
    'Vegita', 
    new CharacterImg('vegita.png', 'Vegita'), 
    [
        new CharacterImg('super_saiyan_vegita.png', 'Super Saiyan Vegita'),
        new CharacterImg('vegita_god.png', 'Goku Super Saiyan God'),
        new CharacterImg('vegita_blue.png', 'Vegita Super Saiyan Blue'),
    ]);

let piccolo = new Character(
    3,
    'Piccolo', 
    new CharacterImg('piccolo.png', 'Picolo'), 
    [
        new CharacterImg('piccolo_orange.png', 'Orange Piccolo'),
    ]);

let buu = new Character(
    4,
    'Majin-Buu', 
    new CharacterImg('majin_buu.png', 'Majin Buu'), 
    [
        new CharacterImg('evil_majin_buu.png', 'Evil Majin Buu'),
        new CharacterImg('kid_buu.png', 'Kid Buu'),
    ]);

let currentCharacterID = 1;

characters.push(goku);
characters.push(vegita);
characters.push(piccolo);
characters.push(buu);


createCharacterCard = () => {
    let char = characters.find((ch) =>  ch.id == currentCharacterID)
    img = document.getElementById('main-img')
    img.classList.add('gallery-img', `${char.name}-img`, 'img-shadow');
    img.setAttribute('alt', char.currentImg.altTxt)
    img.src = img_base + char.currentImg.imgUrl;
}

changeForm = () => {
    let character = characters.find((char) => char.id === currentCharacterID);
    document.querySelector(`.${character.name}-img`).src = img_base + character.changeForm().imgUrl;
}

createCharList = () => {
    let namesEl = document.getElementById('gallery-names');
    let ul = document.createElement('ul');
    characters.forEach((char) => {
        let li = document.createElement('li');
        li.innerHTML = char.name;
        li.setAttribute('onclick', `changeCharacter(${char.id})`);
        ul.append(li);
    })
    namesEl.append(ul);
}

changeCharacter = (id) => {
    currentCharacterID = id;
    createCharacterCard();
}


window.onload = (event) => {
    createCharacterCard();
    createCharList();
};