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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{title | uppercase | honor}}\n  </h1>\n  \n  <app-header></app-header>\n  <app-body></app-body>\n  <app-footer></app-footer>\n\n  \n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = AppComponent_1 = (function () {
    function AppComponent() {
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
    })
], AppComponent);

var AppComponent_1;
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
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app-body{\r\n    .title {\r\n        padding: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"counter\" [style.backgroundColor]=\"colorByValue()\">{{curVal}}</div>\n<div class=\"row buttons\">\n    <button type=\"button\" (click)=\"inc()\">+</button>\n    <button type=\"button\" (click)=\"dec()\">-</button>\n</div>\n<div class=\"row manual-action\">\n    <label for=\"manual-val\">수동 수정:</label>\n    <input type=\"number\" id=\"manual-val\" [(ngModel)]=\"manualVal\">\n    <button type=\"button\" (click)=\"setValueForcibly()\">강제 저장</button>\n\n    \n</div>\n\n<app-mouse-track-zone></app-mouse-track-zone>\n\n        \n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__ = __webpack_require__("../../../../../src/app/service/my-special-logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_log_level_enum__ = __webpack_require__("../../../../../src/app/service/log-level.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyComponent = BodyComponent_1 = (function () {
    function BodyComponent() {
        this.title = 'Body!!';
        this.curVal = 0;
        this.manualVal = 0;
        this.logger = new __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */](__WEBPACK_IMPORTED_MODULE_2__service_log_level_enum__["a" /* LogLevel */].DEBUG);
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.onClick = function (element) {
        alert(element.value);
    };
    BodyComponent.prototype.colorByValue = function () {
        if (this.curVal > 0)
            return 'green';
        else if (this.curVal < 0)
            return 'red';
        else
            return 'grey';
    };
    BodyComponent.prototype.inc = function () {
        var tempVal = this.curVal + 1;
        if (this.checkLimitCnt(tempVal)) {
            this.curVal = tempVal;
        }
        // console.log(this.logger);
        this.logger.debug("ss");
    };
    BodyComponent.prototype.dec = function () {
        var tempVal = this.curVal - 1;
        if (this.checkLimitCnt(tempVal)) {
            this.curVal = tempVal;
        }
    };
    BodyComponent.prototype.setValueForcibly = function () {
        if (this.checkLimitCnt(this.manualVal)) {
            this.curVal = this.manualVal;
        }
    };
    BodyComponent.prototype.checkLimitCnt = function (val) {
        if (Math.abs(val) < BodyComponent_1.LIMIT_CNT) {
            return true;
        }
        var target = val > 0 ? '증가' : '감소';
        alert("\uB354 \uC774\uC0C1 " + target + "\uC2DC\uD0AC \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
        return false;
    };
    return BodyComponent;
}());
BodyComponent.LIMIT_CNT = 100;
BodyComponent = BodyComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/body/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/body.component.css")],
        host: { 'class': 'col-12 col-sm-6 col-md-4 col-lg-3 ' }
    }),
    __metadata("design:paramtypes", [])
], BodyComponent);

var BodyComponent_1;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_log_level_enum__ = __webpack_require__("../../../../../src/app/service/log-level.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MouseTrackZoneComponent = (function () {
    function MouseTrackZoneComponent() {
        this.logLevel = __WEBPACK_IMPORTED_MODULE_2__service_log_level_enum__["a" /* LogLevel */].INFO;
        this.logger = new __WEBPACK_IMPORTED_MODULE_1__service_my_special_logger_service__["a" /* MySpecialLoggerService */](this.logLevel);
    }
    MouseTrackZoneComponent.prototype.ngOnInit = function () {
        console.log("asdf");
    };
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
        styles: [__webpack_require__("../../../../../src/app/body/mouse-track-zone/mouse-track-zone.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MouseTrackZoneComponent);

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
        template: "\n    <p>\n      &copy; Copyright 2017 fogking.github.io all right reserved.\n    </p>\n  ",
        styles: ['p {text-align:center}']
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

module.exports = "<p>\n  이 사이트는 앵귤러 4 기반으로 작성되어져 있으며 개발자가 앵귤러를 접한지 얼마 되지않아 버그가 있을 수 있습니다.\n</p>\n"

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

/***/ "../../../../../src/app/service/my-special-logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySpecialLoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_level_enum__ = __webpack_require__("../../../../../src/app/service/log-level.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_format__ = __webpack_require__("../../../../date-fns/format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_format__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MySpecialLoggerService = (function () {
    function MySpecialLoggerService(logLevel) {
        this.logs = [];
        this.MAX_HISTORY_CNT = 100;
        this.TIME_FORMATTER = "YYYY-MM-DD HH:mm:ss SSS";
        this.logLevel = logLevel;
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
}());
MySpecialLoggerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
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