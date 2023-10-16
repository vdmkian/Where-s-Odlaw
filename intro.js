class Start extends Phaser.Scene {
    constructor() {
        super('Start');
    }

    create() {
        this.add.text(game.canvas.width / 2, game.canvas.height / 2, "Where's Odlaw?",
            {
                font: "40px Arial",
                align: "center",
                color: "#FFFFFF"
            }).setOrigin(0.5, 0.5);

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(500, 0, 0, 0);
            this.time.delayedCall(500, () => this.scene.start('Level1'));
        });
    }
}

class Lost extends Phaser.Scene {
    constructor() {
        super('lost');
    }
    preload(){
        this.load.image('lost', './assets/lost.png')
    }

    create() {
        this.add.image(960,540,'lost')
//        this.add.text(game.canvas.width / 2, game.canvas.height / 2, "you lost, Try again",
//            {
//                font: "40px Arial",
//                align: "center",
//                color: "#FFFFFF"
//            }).setOrigin(0.5, 0.5);

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(500, 0, 0, 0);
            this.time.delayedCall(500, () => this.scene.start('Level1'));
        });
    }
}

class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1");
    }

    preload() {
        this.load.image('odlaw', './assets/odlaw.png');
        this.load.image('background1', './assets/background1.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background1');
        background.setInteractive();
        let odlaw = this.add.image(1460, 415, 'odlaw');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level2');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
    }
}

class Level2 extends Phaser.Scene {
    constructor() {
        super("Level2");
    }

    preload() {
        this.load.image('odlaw2', './assets/odlaw2.png');
        this.load.image('background2', './assets/background2.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background2');
        background.setInteractive();
        let odlaw = this.add.image(1515, 415, 'odlaw2');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level3');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}


class Level3 extends Phaser.Scene {
    constructor() {
        super("Level3");
    }

    preload() {
        this.load.image('odlaw3', './assets/odlaw3.png');
        this.load.image('background3', './assets/background3.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background3');
        background.setInteractive();
        let odlaw = this.add.image(1470, 335, 'odlaw3');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level4');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class Level4 extends Phaser.Scene {
    constructor() {
        super("Level4");
    }

    preload() {
        this.load.image('odlaw4', './assets/odlaw4.png');
        this.load.image('background4', './assets/background4.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background4');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw4');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level5');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class Level5 extends Phaser.Scene {
    constructor() {
        super("Level5");
    }

    preload() {
        this.load.image('odlaw5', './assets/odlaw5.png');
        this.load.image('background5', './assets/background5.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background5');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw5');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level6');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class Level6 extends Phaser.Scene {
    constructor() {
        super("Level6");
    }

    preload() {
        this.load.image('odlaw6', './assets/odlaw6.png');
        this.load.image('background6', './assets/background6.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background6');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw6');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level7');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class Level7 extends Phaser.Scene {
    constructor() {
        super("Level7");
    }

    preload() {
        this.load.image('odlaw7', './assets/odlaw7.png');
        this.load.image('background7', './assets/background7.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background7');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw7');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level8');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class Level8 extends Phaser.Scene {
    constructor() {
        super("Level8");
    }

    preload() {
        this.load.image('odlaw8', './assets/odlaw8.png');
        this.load.image('background8', './assets/background8.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background8');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw8');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level9');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class Level9 extends Phaser.Scene {
    constructor() {
        super("Level9");
    }

    preload() {
        this.load.image('odlaw9', './assets/odlaw9.png');
        this.load.image('background9', './assets/background9.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background9');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw9');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Level10');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class Level10 extends Phaser.Scene {
    constructor() {
        super("Level10");
    }

    preload() {
        this.load.image('odlaw10', './assets/odlaw10.png');
        this.load.image('background10', './assets/background10.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background10');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw10');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('EndScene');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}

class EndScene extends Phaser.Scene {
    constructor() {
        super("EndScene");
    }

    preload() {
        this.load.image('odlaw11', './assets/odlaw11.png');
        this.load.image('background11', './assets/background11.png');
    }

    create() {
        let background = this.add.image(960, 540, 'background11');
        background.setInteractive();
        let odlaw = this.add.image(960, 540, 'odlaw11');
        odlaw.setInteractive();

        function moveToNextScene() {
            this.scene.start('Finale');
        }

        function moveToLostGame() {
            this.scene.start('lost');
        }
        
        background.on('pointerdown', moveToLostGame, this);
        
        odlaw.on('pointerdown', moveToNextScene, this);
        
    }
}