var config = {
    type: JungleGame.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new JungleGame.Game(config);

function preload ()
{
    this.load.image('jungle', 'assets/junglebackground.jpg');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('guy', 'assets/JungleGuy-v3.png', { frameWidth: 100, frameHeight: 92 });
}

function create ()
{

}

function update ()
{

}