

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . 2 2 2 2 2 . . .
    . . . . . . . . . 2 2 2 2 1 . .
    . . . . . . . . . . 2 1 4 1 1 .
    . . . . . . . . . . 1 1 1 1 5 5
    . . . . . . . . . . . 1 1 1 . .
    . . . . . . . . . . . 1 1 . . .
    . . . . . . . 1 1 b b 1 1 1 . .
    . . . . . . 1 1 b b b 1 1 1 . .
    . . . . 1 b b b b 1 1 1 1 1 . .
    . . 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 1 1 . 1 1 1 1 1 1 . . . .
    . . . 1 1 1 1 1 4 1 4 . . . . .
    . . . . . . . . 4 . 4 4 . . . .
    . . . . . . . . 4 4 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
//const flipped = mySprite.image.clone();
//flipped.flipX()
//mySprite.setImage(flipped)
mySprite.x =20
mySprite.ay = 200 // vertical acceleration

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    mySprite.vy = -100
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, 
function (sprite: Sprite, otherSprite: Sprite) {
    game.over()
})

game.onUpdate(function () {
    if(mySprite.top < 0 || mySprite.bottom > 120)
        game.over()
    info.changeScoreBy(1)
})

game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSide(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a e e e e a a a a
        a a a a a a a a e e e e a a e e
        a a a a a a a a e e e e e e e e
        a a a a a a a a e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        . e e e e e e e e e e e e e e e
        . e e e e e e e e e e e e e e e
        . e e e e e e . . . . . . . . .
        . . e e e e . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        7 7 7 7 . . . . . . . . . . . .
        7 7 7 7 7 . . . . . . . . . . .
        7 7 7 7 7 7 . . . . . . . . . .
        . . 7 7 7 7 7 . . . . . . . . .
        . . . 7 7 7 7 7 7 . . . . . . .
        . . . . 7 7 7 7 7 7 . . . . . .
        . . . . . 7 7 7 7 7 7 . . . . .
        . . . . . . . 7 7 7 7 7 . . . .
        . . . . . . . . 7 7 7 7 7 . . .
        . . . . . . . . . 7 7 7 7 . . .
        . . . . . . . . . . 7 7 7 7 . .
        . . . . . . . . . . 7 7 7 7 7 .
        . . . . . . . . . . . 7 7 7 7 7
        . . . . . . . . . . . . 7 7 7 7
        . . . . . . . . . . . . . 7 7 7
        . . . . . . . . . . . . . . 7 7
        a a a a a a a a a a a a a a 7 7
        a a a a a a a a a a a a a a 7 7
        a a a a a 7 7 7 7 7 7 7 7 7 7 7
        a a a a a 7 7 7 7 7 7 7 7 7 7 7
        a a a a a 7 7 7 7 7 7 7 7 7 7 7
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
        a a a a a a a a a a a a a a a a
    `, -200, 0)
    projectile.y = Math.randomRange(50, 70)
})



