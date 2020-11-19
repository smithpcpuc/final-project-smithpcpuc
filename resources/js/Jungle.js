var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var coins;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('jungle', 'assets/junglebackground.png');
    this.load.image('ground', 'assets/jungleplatform.png');
    this.load.image('coin', 'assets/CoinAnimation.gif');
    this.load.spritesheet('guy', 'assets/JungleGuy-v3.png', { frameWidth: 100, frameHeight: 92 });
}

function create ()
{
    //game background
    this.add.image(800,600, 'jungle');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function update ()
{

}