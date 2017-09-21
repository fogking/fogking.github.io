webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!-- <h1>\n    {{title | uppercase | honor}}\n  </h1> -->\n  \n  <!-- <app-header></app-header> -->\n  <app-body></app-body>\n  <!-- <app-footer></app-footer> -->\n\n  \n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__ = __webpack_require__("../../../../../src/app/service/my-special-logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { LogLevel } from './service/log-level.enum';
var AppComponent = AppComponent_1 = (function () {
    // logLevel: LogLevel = LogLevel.DEBUG;
    // logger: MySpecialLoggerService;
    function AppComponent(logger) {
        this.logger = logger;
        this.title = 'fogking.github.io';
        this.userName = '';
        this.valid = false;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var checkTouchedFn = function () {
            if (_this.valid)
                return;
            // alert('이름을 입력해 주세요');
        };
        setTimeout(checkTouchedFn, AppComponent_1.CHK_KEYUP_WAIT_SEC);
    };
    AppComponent.prototype.onKeyUp = function (name) {
        this.valid = name.length > 0;
    };
    AppComponent.prototype.onChange = function () {
        this.valid = this.userName.length > 0;
    };
    return AppComponent;
}());
AppComponent.CHK_KEYUP_WAIT_SEC = 5000;
AppComponent = AppComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */]) === "function" && _a || Object])
], AppComponent);

var AppComponent_1, _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__body_body_component__ = __webpack_require__("../../../../../src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_honor_pipe__ = __webpack_require__("../../../../../src/app/pipe/honor.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__body_mouse_track_zone_mouse_track_zone_component__ = __webpack_require__("../../../../../src/app/body/mouse-track-zone/mouse-track-zone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_my_special_logger_service__ = __webpack_require__("../../../../../src/app/service/my-special-logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_another_logger_service__ = __webpack_require__("../../../../../src/app/service/another-logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_log_level_enum__ = __webpack_require__("../../../../../src/app/service/log-level.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_token__ = __webpack_require__("../../../../../src/app/app.token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__body_block_game_block_game_component__ = __webpack_require__("../../../../../src/app/body/block-game/block-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipe_honor_pipe__["a" /* HonorPipe */],
            __WEBPACK_IMPORTED_MODULE_8__body_mouse_track_zone_mouse_track_zone_component__["a" /* MouseTrackZoneComponent */],
            __WEBPACK_IMPORTED_MODULE_13__body_block_game_block_game_component__["a" /* BlockGameComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            // MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN , useValue: LogLevel.INFO},
            __WEBPACK_IMPORTED_MODULE_9__service_my_special_logger_service__["a" /* MySpecialLoggerService */],
            __WEBPACK_IMPORTED_MODULE_10__service_another_logger_service__["a" /* AnotherLoggerService */], { provide: __WEBPACK_IMPORTED_MODULE_12__app_token__["a" /* LOG_LEVEL_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_11__service_log_level_enum__["a" /* LogLevel */].INFO }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOG_LEVEL_TOKEN; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var LOG_LEVEL_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]('logLevel');
//# sourceMappingURL=app.token.js.map

/***/ }),

/***/ "../../../../../src/app/body/block-game/block-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\r\n    display: inline-block;\r\n    font-size: 80px;\r\n    background-color: #008CBA;\r\n}\r\n\r\n.contents .testcanvas {\r\n    /* width: 100vh; */\r\n} \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/block-game/block-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contents\"  >\r\n    <!-- <button class=\"fa fa-angle-double-left button\" type=\"button\" \r\n        (mousedown)=\"leftMove($event)\" (mouseup)=\"notMove($event)\">  </button> -->\r\n    <canvas class=\"testcanvas\"  #myCanvas  width=\"360\" height=\"320\"  (mousemove)=\"mouseMove($event)\" (touchmove)=\"touchMove($event)\" ></canvas>\r\n    <!-- <button class=\"fa fa-angle-double-right button\" type=\"button\" \r\n        (mousedown)=\"rightMove($event)\" (mouseup)=\"notMove($event)\">  </button> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/body/block-game/block-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockGameComponent = (function () {
    function BlockGameComponent() {
        this.brickRowCount = 3;
        this.brickColumnCount = 5;
        this.brickWidth = 53;
        this.brickHeight = 10;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;
        this.score = 0;
        this.bricks = [];
        this.ballColor = "#0095DD";
        this.level = 1;
        this.ballSpeedInterval = 0.5;
    }
    BlockGameComponent.prototype.ngOnInit = function () {
        this.canvas = this.myCanvas.nativeElement;
        this.context = this.canvas.getContext("2d");
        this.customInit();
        this.draw();
    };
    // game over
    BlockGameComponent.prototype.customInit = function () {
        this.ballRadius = 10;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.ballSpeedX = 2;
        this.ballSpeedY = -2;
        this.dx = this.ballSpeedX;
        this.dy = this.ballSpeedY;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.score = 0;
        this.lives = 8;
        this.level = 1;
        // 대라기 빡대가리 됬나봐 배열 문법 몰라서 해맴 ... 시발.....
        for (var c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for (var r = 0; r < this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
    };
    // level up
    BlockGameComponent.prototype.levelUp = function () {
        this.ballRadius = 10;
        // this.brickRowCount += 1;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = this.ballSpeedX;
        this.dy = this.ballSpeedY;
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        // 대라기 빡대가리 됬나봐 배열 문법 몰라서 해맴 ... 시발.....
        for (var c = 0; c < this.brickColumnCount; c++) {
            this.bricks[c] = [];
            for (var r = 0; r < this.brickRowCount; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
    };
    BlockGameComponent.prototype.leftMove = function ($event) {
        this.leftPressed = true;
        this.rightPressed = false;
        console.log("되냐?");
    };
    BlockGameComponent.prototype.rightMove = function ($event) {
        this.leftPressed = false;
        this.rightPressed = true;
    };
    BlockGameComponent.prototype.notMove = function ($event) {
        this.leftPressed = false;
        this.rightPressed = false;
    };
    BlockGameComponent.prototype.mouseMove = function ($event) {
        var relativeX = $event.clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddleX = relativeX - this.paddleWidth / 2;
        }
    };
    BlockGameComponent.prototype.touchMove = function ($event) {
        // alert("터치 되냐?");
        var relativeX = $event.touches[0].clientX - this.canvas.offsetLeft;
        if (relativeX > 0 && relativeX < this.canvas.width) {
            this.paddleX = relativeX - this.paddleWidth / 2;
        }
    };
    BlockGameComponent.prototype.drawBall = function () {
        var ctx = this.context;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = this.ballColor;
        ctx.fill();
        ctx.closePath();
    };
    BlockGameComponent.prototype.drawPaddle = function () {
        var ctx = this.context;
        ctx.beginPath();
        ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    };
    BlockGameComponent.prototype.drawBricks = function () {
        var ctx = this.context;
        for (var c = 0; c < this.brickColumnCount; c++) {
            for (var r = 0; r < this.brickRowCount; r++) {
                if (this.bricks[c][r].status == 1) {
                    var brickX = (c * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
                    var brickY = (r * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
                    this.bricks[c][r].x = brickX;
                    this.bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    };
    BlockGameComponent.prototype.collisionDetection = function () {
        for (var c = 0; c < this.brickColumnCount; c++) {
            for (var r = 0; r < this.brickRowCount; r++) {
                var b = this.bricks[c][r];
                if (b.status == 1) {
                    if (this.x > b.x && this.x < b.x + this.brickWidth && this.y > b.y && this.y < b.y + this.brickHeight) {
                        this.dy = -(this.dy);
                        var cr = Math.floor(Math.random() * 99); // 0 ~ 255 까지의 난수 얻어오기
                        var cg = Math.floor(Math.random() * 99);
                        var cb = Math.floor(Math.random() * 99);
                        this.ballColor = "#" + cr + cg + cb;
                        b.status = 0;
                        console.log('!!!!');
                        this.score++;
                        if ((this.score % (this.brickRowCount * this.brickColumnCount)) == 0) {
                            alert("Level UP!!!!");
                            this.level += 1;
                            this.ballSpeedX += this.ballSpeedInterval;
                            this.ballSpeedY -= this.ballSpeedInterval;
                            this.dx += this.ballSpeedX;
                            this.dy -= this.ballSpeedY;
                            this.levelUp();
                            // TODO 캔버스 리로드...
                        }
                    }
                }
            }
        }
    };
    BlockGameComponent.prototype.drawScore = function () {
        var ctx = this.context;
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + this.score, 8, 20);
    };
    BlockGameComponent.prototype.drawLives = function () {
        var ctx = this.context;
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
    };
    BlockGameComponent.prototype.drawLevel = function () {
        var ctx = this.context;
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Level: " + this.level, (this.canvas.width / 2) - 20, 20);
    };
    BlockGameComponent.prototype.draw = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.draw();
        });
        var ctx = this.context;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBricks();
        this.drawBall();
        this.drawPaddle();
        this.drawScore();
        this.drawLives();
        this.drawLevel();
        this.collisionDetection();
        if (this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -(this.dx);
        }
        if (this.y + this.dy < this.ballRadius) {
            this.dy = -(this.dy);
        }
        else if (this.y + this.dy > this.canvas.height - this.ballRadius) {
            if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
                this.dy = -(this.dy);
            }
            else {
                this.lives--;
                if (!this.lives) {
                    alert("GAME OVER");
                    this.customInit();
                }
                else {
                    this.ballSpeedX += this.ballSpeedInterval;
                    this.ballSpeedY -= this.ballSpeedInterval;
                    // alert('x = '+this.dx + ' , y ='+this.dy);
                    this.x = this.canvas.width / 2;
                    this.y = this.canvas.height - 30;
                    this.dx = this.ballSpeedX;
                    this.dy = this.ballSpeedY;
                    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
                }
            }
        }
        if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
            this.paddleX += 7;
        }
        else if (this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }
        this.x += this.dx;
        this.y += this.dy;
    };
    return BlockGameComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("myCanvas"),
    __metadata("design:type", Object)
], BlockGameComponent.prototype, "myCanvas", void 0);
BlockGameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-block-game',
        template: __webpack_require__("../../../../../src/app/body/block-game/block-game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/block-game/block-game.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlockGameComponent);

//# sourceMappingURL=block-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"utf-8\";\r\n\r\n:root {\r\n    --margin-color: #5d9ab2;\r\n    --accent-color: #bf6a7a;\r\n    --dark-main-color: #2b5566;\r\n    --text-bright-color: #fff;\r\n    --icon-color: #fff;\r\n    --icon-bk-color: #ddd;\r\n    --large-width: 1000px;\r\n}\r\n\r\napp-body {\r\n    margin: 0;\r\n    font-family: '\\B9D1\\C740   \\ACE0\\B515',\r\n        'Apple SD Gothic Neo',\r\n        sans-serif;\r\n}\r\n\r\n/* 콘텐츠A 히어로 이미지 */\r\n.conA {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 100vh;\r\n    min-height: 450px;\r\n    /* background-image: url(/assets/image/hero_blue.jpg); */\r\n    /* background-image: url(/assets/image/hero.jpg); */\r\n    background-image: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.5)), url(/assets/image/hero.jpg);\r\n    /* background-image: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.5)), url(/assets/image/hero_blue.jpg); */\r\n    background-position: center;\r\n    background-size: cover;\r\n    color: var(--text-bright-color);\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.conA h1 {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n    font-family: 'Montesrrat', sans-serif;\r\n    font-size: 15vw;\r\n    letter-spacing: 0.2em;\r\n    margin-left: 0.2em;\r\n}\r\n\r\n.conA p {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 18px;\r\n}\r\n\r\n.conA img {\r\n    width: 20%;\r\n}\r\n\r\n.conA a {\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n    padding: 10px 30px;\r\n    border: solid 3px currentColor;\r\n    border-radius: 6px;\r\n    background-color: rgb(106, 107, 191);\r\n    /* background-color: var(--accent-color); */\r\n    color: #fff;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\n.conA a:hover {\r\n    background-image: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2));\r\n}\r\n\r\n/* 콘텐츠B: 개요(아이콘 + 글자) */\r\n.conB h2 {\r\n    margin-top: 0;\r\n    margin-bottom: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.conB p {\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\r\n    line-height: 1.8;\r\n    opacity:0.5\r\n}\r\n\r\n.conB a {\r\n    color: #5d9ab2;\r\n    /* color: var(--main-color); */\r\n    text-decoration: none;\r\n}\r\n\r\n.conB a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.conB .icon {\r\n    display: inline-block;\r\n    margin-bottom: 20px;\r\n    font-size: 40px;\r\n    width: 2em;\r\n    line-height: 2em;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    background-color: #ddd;\r\n    /* background-color: var(--icon-bk-color); */\r\n    color: #fff;\r\n    /* color: var(--icon-color); */\r\n}\r\n\r\n.conB .text{\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-bottom: 60px;\r\n    text-align: center;\r\n}\r\n\r\n.conB .container {\r\n    padding-top: 80px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.blockGame {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.blockGame .container {\r\n    background: #2b5566;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .conA h1 {\r\n        font-size: 115px;\r\n    }\r\n\r\n    .conA p {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .conB .container {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        max-width: 1000px;\r\n        /* max-width: var(--large-width); */\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n\r\n    .conB .text {\r\n        -webkit-box-flex: 1;\r\n            -ms-flex: 1;\r\n                flex: 1;\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n/* vietnamese */\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v10/SKK6Nusyv8QPNMtI4j9J2yEAvth_LlrfE80CYdSH47w.woff2) format('woff2');\r\n    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n\r\n/* latin-ext */\r\n    @font-face {\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v10/gFXtEMCp1m_YzxsBpKl68iEAvth_LlrfE80CYdSH47w.woff2) format('woff2');\r\n    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n\r\n/* latin */\r\n@font-face {\r\n    font-family: 'Montserrat';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYPk_vArhqVIZ0nv9q090hN8.woff2) format('woff2');\r\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://use.fontawesom.com/926fe18a63.js\"></script>\n\n<section class=\"conA\">\n    <div calss=\"container\">\n        <!-- <img src=\"/assets/image/MANJOO_CI.svg\" alt=\"\"> -->\n        <h1>MANJOO</h1>\n        <p>매일 매일 즐겁게 코딩하는 회사</p>\n        <a href=\"#\"  (click)=\"startManjoo()\">만주 시작하기</a>\n    </div>\n</section>\n\n<section class=\"conB\">\n    <div class=\"container\">\n        <div class=\"text\">\n            <span class=\"fa fa-home icon\"></span>\n            <h2>만주란?</h2>\n            <p>만주 처럼 달콤한 서비스들을 제공하는 회사입니다.</p>\n            <a href=\"#\">MORE...\n                <span class=\"fa fa-chevron-right\"></span>\n            </a>\n        </div>\n        <div class=\"text\">\n            <span class=\"fa fa-gears icon\"></span>\n            <h2>서비스가 만들어 지는 과정은?</h2>\n            <p>코딩 코딩.. 무한 삽질 코딩을 통해서 만들어지고 있습니다. ^__^</p>\n            <a href=\"#\">MORE...\n                <span class=\"fa fa-chevron-right\"></span>\n            </a>\n        </div>\n        <div class=\"text\">\n            <span class=\"fa fa-rocket icon\"></span>\n            <h2>거시기?</h2>\n            <p>마땅히 즐길 서비스가 없을 때 서비스를 추천해줍니다.</p>\n            <a href=\"#\">MORE...\n                <span class=\"fa fa-chevron-right\"></span>\n            </a>\n        </div>\n    </div>\n</section>\n\n<section class=\"bolckGame\">\n    <div class=\"container\">\n        <app-block-game></app-block-game>\n    </div>\n</section>\n      \n\n<!-- <div class=\"counter\" [style.backgroundColor]=\"colorByValue()\">{{curVal}}</div>\n<div class=\"row buttons\">\n    <button type=\"button\" (click)=\"inc()\">+</button>\n    <button type=\"button\" (click)=\"dec()\">-</button>\n</div>\n<div class=\"row manual-action\">\n    <label for=\"manual-val\">수동 수정:</label>\n    <input type=\"number\" id=\"manual-val\" [(ngModel)]=\"manualVal\">\n    <button type=\"button\" (click)=\"setValueForcibly()\">강제 저장</button>\n\n    \n</div> -->\n\n<!-- <app-mouse-track-zone></app-mouse-track-zone> -->\n\n        \n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__ = __webpack_require__("../../../../../src/app/service/my-special-logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = (function () {
    function BodyComponent(logger) {
        this.logger = logger;
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    // TODO : 앞으로는 어디로 갈지 정해야 함.
    BodyComponent.prototype.startManjoo = function () {
        alert("잠시만요.. 열심히 만들고 있어요!! ^_^/");
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/body/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/body.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */]) === "function" && _a || Object])
], BodyComponent);

var _a;
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/mouse-track-zone/mouse-track-zone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: inline-block;\r\n    padding: 5px;\r\n    border: 1px solid darkslategrey;\r\n}\r\n\r\n.track-zone {\r\n    width: 200px;\r\n    height: 200px;\r\n    vertical-align: top;\r\n    background-color: lightblue;\r\n    border: 1px solid grey;\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/mouse-track-zone/mouse-track-zone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"track-zone\" (click)=\"captureMousePos($event)\"></div>"

/***/ }),

/***/ "../../../../../src/app/body/mouse-track-zone/mouse-track-zone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseTrackZoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__ = __webpack_require__("../../../../../src/app/service/my-special-logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_another_logger_service__ = __webpack_require__("../../../../../src/app/service/another-logger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MouseTrackZoneComponent = (function () {
    function MouseTrackZoneComponent(mySpecialLogger, anotherLogger) {
        this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
    }
    MouseTrackZoneComponent.prototype.ngOnInit = function () { };
    MouseTrackZoneComponent.prototype.captureMousePos = function ($event) {
        this.logger.debug('click event occured');
        var pos = [$event.clientX, $event.clientY];
        this.logger.info("x:" + pos[0] + " y:" + pos[1]);
        alert("x:" + pos[0] + " y:" + pos[1]);
    };
    return MouseTrackZoneComponent;
}());
MouseTrackZoneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-mouse-track-zone',
        template: __webpack_require__("../../../../../src/app/body/mouse-track-zone/mouse-track-zone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/mouse-track-zone/mouse-track-zone.component.css")],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Host */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_another_logger_service__["a" /* AnotherLoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_another_logger_service__["a" /* AnotherLoggerService */]) === "function" && _b || Object])
], MouseTrackZoneComponent);

var _a, _b;
//# sourceMappingURL=mouse-track-zone.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: "\n    <div>\n      <p>\n        &copy; Copyright 2017 fogking.github.io all right reserved.\n      </p>\n    </div>\n  ",
        styles: ['p {text-align:center}', ' div{background-color: lightblue};']
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"none\" style=\"background-color: lightblue;\"> header </div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/honor.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HonorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HonorPipe = (function () {
    function HonorPipe() {
    }
    HonorPipe.prototype.transform = function (value) {
        return value + "\uB2D8";
    };
    return HonorPipe;
}());
HonorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'honor'
    })
], HonorPipe);

//# sourceMappingURL=honor.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/service/another-logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnotherLoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_level_enum__ = __webpack_require__("../../../../../src/app/service/log-level.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_token__ = __webpack_require__("../../../../../src/app/app.token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_service__ = __webpack_require__("../../../../../src/app/service/logger-service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AnotherLoggerService = (function (_super) {
    __extends(AnotherLoggerService, _super);
    function AnotherLoggerService(logLevel) {
        return _super.call(this, logLevel) || this;
    }
    AnotherLoggerService.prototype.log = function (logLevel, msg) {
        var logMsg = this.getFormattedLogMsg(logLevel, msg);
        if (this.isProperLogLevel(logLevel)) {
            console.log(logMsg);
        }
    };
    AnotherLoggerService.prototype.getFormattedLogMsg = function (logLevel, msg) {
        return "[" + __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */][logLevel] + "] - " + msg;
    };
    return AnotherLoggerService;
}(__WEBPACK_IMPORTED_MODULE_3__logger_service__["a" /* LoggerService */]));
AnotherLoggerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_token__["a" /* LOG_LEVEL_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */]) === "function" && _a || Object])
], AnotherLoggerService);

var _a;
//# sourceMappingURL=another-logger.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/log-level.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=log-level.enum.js.map

/***/ }),

/***/ "../../../../../src/app/service/logger-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_level_enum__ = __webpack_require__("../../../../../src/app/service/log-level.enum.ts");

var LoggerService = (function () {
    function LoggerService(logLevel) {
        this.logLevel = logLevel;
    }
    LoggerService.prototype.debug = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_0__log_level_enum__["a" /* LogLevel */].DEBUG, msg); };
    LoggerService.prototype.info = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_0__log_level_enum__["a" /* LogLevel */].INFO, msg); };
    LoggerService.prototype.warn = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_0__log_level_enum__["a" /* LogLevel */].WARN, msg); };
    LoggerService.prototype.error = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_0__log_level_enum__["a" /* LogLevel */].ERROR, msg); };
    LoggerService.prototype.isProperLogLevel = function (logLevel) {
        if (this.logLevel === __WEBPACK_IMPORTED_MODULE_0__log_level_enum__["a" /* LogLevel */].DEBUG)
            return true;
        return logLevel >= this.logLevel;
    };
    return LoggerService;
}());

//# sourceMappingURL=logger-service.js.map

/***/ }),

/***/ "../../../../../src/app/service/my-special-logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySpecialLoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_level_enum__ = __webpack_require__("../../../../../src/app/service/log-level.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_format__ = __webpack_require__("../../../../date-fns/format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_token__ = __webpack_require__("../../../../../src/app/app.token.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__("../../../../../src/app/service/logger-service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MySpecialLoggerService = (function (_super) {
    __extends(MySpecialLoggerService, _super);
    function MySpecialLoggerService(logLevel) {
        var _this = _super.call(this, logLevel) || this;
        _this.logs = [];
        _this.MAX_HISTORY_CNT = 100;
        _this.TIME_FORMATTER = "YYYY-MM-DD HH:mm:ss SSS";
        return _this;
    }
    MySpecialLoggerService.prototype.debug = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].DEBUG, msg); };
    MySpecialLoggerService.prototype.info = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].INFO, msg); };
    MySpecialLoggerService.prototype.warn = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].WARN, msg); };
    MySpecialLoggerService.prototype.error = function (msg) { this.log(__WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].ERROR, msg); };
    MySpecialLoggerService.prototype.log = function (logLevel, msg) {
        var logMsg = this.getFormattedLogMsg(logLevel, msg);
        if (this.isProperLogLevel(logLevel)) {
            console.log(logMsg);
            this.keepLogHistory(logMsg);
        }
    };
    MySpecialLoggerService.prototype.getFormattedLogMsg = function (logLevel, msg) {
        var curTimestamp = __WEBPACK_IMPORTED_MODULE_2_date_fns_format__(new Date(), this.TIME_FORMATTER);
        return "[" + __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */][logLevel] + "] " + curTimestamp + " - " + msg;
    };
    MySpecialLoggerService.prototype.isProperLogLevel = function (logLevel) {
        if (this.logLevel === __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].DEBUG)
            return true;
        return logLevel >= this.logLevel;
    };
    MySpecialLoggerService.prototype.keepLogHistory = function (log) {
        if (this.logs.length === this.MAX_HISTORY_CNT) {
            this.logs.shift();
        }
        this.logs.push(log);
    };
    return MySpecialLoggerService;
}(__WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* LoggerService */]));
MySpecialLoggerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_token__["a" /* LOG_LEVEL_TOKEN */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */]) === "function" && _a || Object])
], MySpecialLoggerService);

var _a;
//# sourceMappingURL=my-special-logger.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map