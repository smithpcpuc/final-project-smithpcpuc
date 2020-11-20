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
    this.load.image('jungle', 'resources/img/junglebackground.png');
    this.load.image('ground', 'resources/img/jungleplatform.png');
    this.load.image('coin', 'resources/img/CoinAnimation.gif');
    this.load.spritesheet('guy', 'resources/img/JungleGuy-v4.png', { frameWidth: 120, frameHeight: 92 });
}

function create ()
{
    //game background
    this.add.image(400,300, 'jungle');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(1).refreshBody();

    platforms.create(600, 400, 'ground').setScale(.60).refreshBody();
    platforms.create(50, 250, 'ground').setScale(.60).refreshBody();
    platforms.create(750, 220, 'ground').setScale(.60).refreshBody();

    player = this.physics.add.sprite(100, 450, 'guy');
    
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('guy', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        //frames: this.anims.generateFrameNumbers('guy', { start: 0, end: 3 }),
        frames: [ { key: 'guy', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('guy', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
}

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some coins to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    coins = this.physics.add.group({
        key: 'coin',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    coins.children.iterate(function (child) {

        //  Give each coin a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(coins, platforms);

    //this.physics.add.overlap(player, coins, collectCoin, null, this);

function update ()
{
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}

function collectCoin (player, coin)
{
    coin.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (coins.countActive(true) === 0)
    {
        //  A new batch of coins to collect
        coins.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    

    }
}

