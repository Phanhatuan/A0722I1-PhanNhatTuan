function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top +=speed;
        console.log('ok: ' + this.top);
    }
    this.moveTop = function () {
        this.top -=speed;
        console.log('ok: ' + this.top);
    }

}

var hero = new Hero('Tuan.jpg', 20, 30, 200,100);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }

    if(hero.top < window.innerHeight - hero.size){
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
