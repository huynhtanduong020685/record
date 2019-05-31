(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./src/app/pages/speech/speech.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/speech/speech.module.ts ***!
  \***********************************************/
/*! exports provided: SpeechPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechPageModule", function() { return SpeechPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _speech_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speech.page */ "./src/app/pages/speech/speech.page.ts");







var routes = [
    {
        path: '',
        component: _speech_page__WEBPACK_IMPORTED_MODULE_6__["SpeechPage"]
    }
];
var SpeechPageModule = /** @class */ (function () {
    function SpeechPageModule() {
    }
    SpeechPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_speech_page__WEBPACK_IMPORTED_MODULE_6__["SpeechPage"]]
        })
    ], SpeechPageModule);
    return SpeechPageModule;
}());



/***/ }),

/***/ "./src/app/pages/speech/speech.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/speech/speech.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Speech Recognition</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n      <ion-card class=\"welcome-card\">\n              <ion-card-header>Result:</ion-card-header>\n              <ion-card-content class=\"ioncardcontent\" *ngFor=\"let match of matches\">\n              <p> {{ match }}</p>\n              </ion-card-content>\n      </ion-card>\n    <div class=\"buttonspeech\">\n       <ion-button full (click)=\"getPermission()\">\n             <ion-icon slot=\"start\" name=\"star\" ></ion-icon>\n            Get Permission\n       </ion-button>\n        <ion-button full (click)=\"startListening()\">\n            Start Recording\n            <ion-icon slot=\"end\" name=\"mic\"></ion-icon>\n        </ion-button>\n        <ion-button full  (click)=\"stopListening()\" >\n          <ion-icon name=\"hand\"></ion-icon>\n          Stop Recording\n        </ion-button>\n \t </div>\n    \n</ion-content>"

/***/ }),

/***/ "./src/app/pages/speech/speech.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/speech/speech.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  color: #ffffff; }\n\n.buttonspeech {\n  margin: auto;\n  border-radius: 10px;\n  margin-top: 50px;\n  border: none;\n  color: aliceblue;\n  background-color: #ffffff !important;\n  text-align: center; }\n\nion-card.welcome-card {\n  border-radius: 15px;\n  margin-top: 30px;\n  background: #3880ff !important;\n  height: 200px; }\n\nion-card-content.ioncardcontent {\n  margin: auro;\n  padding: auto;\n  height: auto; }\n\nion-button.headphone {\n  margin: auto;\n  width: 300px;\n  height: 50px;\n  border-radius: 10px;\n  background-color: #3880ff !important; }\n\nion-card-header {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBvL0Rlc2t0b3AvaXJvbnRyYWlucHJvamVjdDAyL3NyYy9hcHAvcGFnZXMvc3BlZWNoL3NwZWVjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBRWY7RUFFSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFlO0VBRWYsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0csbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw4QkFBNkI7RUFDN0IsYUFBWSxFQUFBOztBQUVmO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixZQUFXLEVBQUE7O0FBRWI7RUFDSSxZQUFZO0VBQ1osWUFBVztFQUNYLFlBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0NBQW9DLEVBQUE7O0FBRXhDO0VBRUUsY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BlZWNoL3NwZWVjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBjb2xvcjojZmZmZmZmO1xuICB9XG4gIC5idXR0b25zcGVlY2h7XG4gIFxuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6NTBweDtcbiAgICAgIC8vd2lkdGg6MTM1cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGlvbi1jYXJkLndlbGNvbWUtY2FyZHtcbiAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgYmFja2dyb3VuZDojMzg4MGZmICFpbXBvcnRhbnQ7XG4gICAgIGhlaWdodDoyMDBweDtcbiAgfVxuICBpb24tY2FyZC1jb250ZW50LmlvbmNhcmRjb250ZW50e1xuICAgIG1hcmdpbjphdXJvO1xuICAgIHBhZGRpbmc6YXV0bztcbiAgICBoZWlnaHQ6YXV0bztcbiAgfVxuICBpb24tYnV0dG9uLmhlYWRwaG9uZXtcbiAgICAgIG1hcmdpbjogYXV0bzsgXG4gICAgICB3aWR0aDozMDBweDtcbiAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmYgIWltcG9ydGFudDtcbiAgfVxuICBpb24tY2FyZC1oZWFkZXJ7XG4gIFxuICAgIGNvbG9yOiNmZmZmZmY7XG4gIH1cbiAgXG4gIFxuICBcbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/speech/speech.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/speech/speech.page.ts ***!
  \*********************************************/
/*! exports provided: SpeechPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechPage", function() { return SpeechPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");





var SpeechPage = /** @class */ (function () {
    //Inject to the constructor.
    function SpeechPage(navCtrl, speechRecognition, plt, cd) {
        this.navCtrl = navCtrl;
        this.speechRecognition = speechRecognition;
        this.plt = plt;
        this.cd = cd;
        // Declares the required variables before the constructor.
        this.matches = ['Result of speech Recording is showed here'];
        this.isRecording = false;
    }
    // function for start recording audio on smartphone
    SpeechPage.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
        });
    };
    SpeechPage.prototype.getPermission = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission();
            }
        });
    };
    SpeechPage.prototype.startListening = function () {
        var _this = this;
        this.matches = [];
        var options = {
            language: 'en-US'
        };
        this.speechRecognition.startListening(options).subscribe(function (matches) {
            _this.matches = matches;
            _this.cd.detectChanges();
        });
        this.isRecording = true;
    };
    SpeechPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-speech',
            template: __webpack_require__(/*! ./speech.page.html */ "./src/app/pages/speech/speech.page.html"),
            styles: [__webpack_require__(/*! ./speech.page.scss */ "./src/app/pages/speech/speech.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognition"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SpeechPage);
    return SpeechPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/pages/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _speech_speech_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../speech/speech.module */ "./src/app/pages/speech/speech.module.ts");
/* harmony import */ var _playrecordfile_playrecordfile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../playrecordfile/playrecordfile.module */ "./src/app/pages/playrecordfile/playrecordfile.module.ts");









var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                _speech_speech_module__WEBPACK_IMPORTED_MODULE_7__["SpeechPageModule"],
                _playrecordfile_playrecordfile_module__WEBPACK_IMPORTED_MODULE_8__["PlayrecordfilePageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"playrecordfile\">\n      <ion-icon name=\"play\"></ion-icon>\n      <ion-label>Recorder</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/pages/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/pages/tabs/tabs.router.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'playrecordfile',
                children: [
                    {
                        path: '',
                        loadChildren: '../playrecordfile/playrecordfile.module#PlayrecordfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/playrecordfile',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map