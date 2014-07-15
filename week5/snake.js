var canvas = document.getElementById("hackCanvas");
    var ctx = canvas.getContext("2d");
    var canvasWidth = $("#hackCanvas").width();
    var canvasHeight = $("#hackCanvas").height();
    var snakeColor = "yellow";

    var snake = (function(ctx) {
        var tail = [];
        var direction = "";
        var isAlive = true;
        [1, 2, 3].forEach(function(i) {
          tail.push(new Pixel(i + 10, 10, 10, snakeColor, ctx));
        });
        var snakeHead = tail[tail.length - 1];

        var print = function() {
          tail.forEach(function(pixel) {
            pixel.print();
          });
    };

    var getsnakeHead = function() {
        return snakeHead;
    };

    var getIsAlive = function() {
        return isAlive;
    };

    var killSnake = function() {
        isAlive = false;
    }

    var move = function() {
        if(isAlive) {
            switch(direction) {
                case "up":
                    var newHead = new Pixel(snakeHead.x, snakeHead.y - 1, 10, snakeColor, ctx);
                    break;
                case "down":
                    var newHead = new Pixel(snakeHead.x, snakeHead.y + 1, 10, snakeColor, ctx);
                    break;
                case "right":
                    var newHead = new Pixel(snakeHead.x + 1, snakeHead.y, 10, snakeColor, ctx);
                    break;
                case "left":
                    var newHead = new Pixel(snakeHead.x - 1, snakeHead.y, 10, snakeColor, ctx);
                    break;
                default: var newHead = new Pixel(snakeHead.x + 1, snakeHead.y, 10, snakeColor, ctx);
            }
            tail.push(newHead);
            if(!isOnFood(food)) {
                tail.shift();
            }
            else {
                food.randFood();
            }
            snakeHead = newHead;
        }
        else {
            return false;
        }
    };

    var isOnFood = function(food) {
        if(snakeHead.x === food.getX() && snakeHead.y === food.getY()) {
            return true;
        }
        else {
            return false;
        }
    };

    var setDirection = function(dir) {
        if(dir === "up" && direction === "down" ||
            dir === "down" && direction === "up" ||
            dir === "left" && direction === "right" ||
            dir === "right" && direction === "left" ) {
            return false;
        }
        else {
            direction = dir;
        }
    };

        return {
            print: print,
            move: move,
            setDirection: setDirection,
            getsnakeHead: getsnakeHead,
            getIsAlive: getIsAlive,
            killSnake: killSnake,
            isOnFood: isOnFood,
        }
    }(ctx));

    initKeyboardController(function(direction){
        snake.setDirection(direction);
    });

    var check_borders = function(snake){
        if(snake.getsnakeHead().x < 0 ||
            snake.getsnakeHead().y < 0 ||
            snake.getsnakeHead().x >= Math.floor(canvasWidth /10) - 1||
            snake.getsnakeHead().y >= Math.floor(canvasHeight / 10) - 1){
                return false;
        }
        else {
            return true;
        }

    };

    function initKeyboardController(callback) {
        var keyCodeToDirectionTable = {
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        $(document).keydown(function(event){
            callback(keyCodeToDirectionTable[event.which]);
        });
    }
    // GameLoop
    setInterval(function() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        food.print();
        if (!check_borders(snake)) {
            snake.killSnake();
        }
        snake.isOnFood(food);
        snake.move();
        snake.print();
    }, 200);


    function Pixel(x, y, size, color, ctx) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.ctx = ctx;

        this.print = function() {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
        };
    };

    var food = (function(ctx) {

        var pixel = new Pixel(5, 8, 10, "orange", ctx);

        var print = function() {
        //     var picture = new Image();
        //     picture.onload = function() {
        //     ctx.drawImage(picture, x, y, width, height);
        // };
        // picture.src = "./apple.png";
        };

        var getX = function() {
            return pixel.x;
        };

        var getY = function() {
            return pixel.y;
        };



        var randFood = function() {
            var randX = Math.floor(Math.random() * canvasWidth / 10);
            var randY = Math.floor(Math.random() * canvasHeight / 10);
            pixel = new Pixel(randX, randY, 10, "orange", ctx);
            // picture = new Image()
        };

     return {
            print: print,
            getY: getY,
            getX: getX,
            randFood: randFood,
        }
    }(ctx));
