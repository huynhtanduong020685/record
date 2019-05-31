(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sources-sources-module"],{

/***/ "./src/app/pages/sources/sources.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sources/sources.module.ts ***!
  \*************************************************/
/*! exports provided: SourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesPageModule", function() { return SourcesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sources_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources.page */ "./src/app/pages/sources/sources.page.ts");







var routes = [
    {
        path: '',
        component: _sources_page__WEBPACK_IMPORTED_MODULE_6__["SourcesPage"]
    }
];
var SourcesPageModule = /** @class */ (function () {
    function SourcesPageModule() {
    }
    SourcesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sources_page__WEBPACK_IMPORTED_MODULE_6__["SourcesPage"]]
        })
    ], SourcesPageModule);
    return SourcesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sources/sources.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/sources/sources.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sources</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar [(ngModel)]=\"term\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid fixed>\n    <ion-row *ngIf=\"!sources\">\n      <ion-col size=12 *ngFor=\"let sources of fakeSources\">\n        <ion-skeleton-text width=\"35%\"></ion-skeleton-text>\n        <ion-skeleton-text width=\"70%\"></ion-skeleton-text>\n        <ion-skeleton-text width=\"100%\"></ion-skeleton-text>\n        <ion-skeleton-text width=\"80%\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"sources\">\n      <ion-col size=12 size-md=\"6\" *ngFor=\"let source of sources\">\n        <ion-list>\n          <ion-item-sliding>\n            <ion-item color=\"light\" href=\"/tabs/(sources:sources/{{source.id}})\">\n              <ion-label text-wrap>\n                <ion-text>\n                  <h2>{{source.name}} <ion-badge>{{source.category}}</ion-badge>\n                  </h2>\n                </ion-text>\n                <ion-text>\n                  <p>{{source.description}}</p>\n                </ion-text>\n              </ion-label>\n              <!-- <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon> -->\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option (click)=\"favorite(source)\">Favorite</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sources/sources.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/sources/sources.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvdXJjZXMvc291cmNlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/sources/sources.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/sources/sources.page.ts ***!
  \***********************************************/
/*! exports provided: SourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesPage", function() { return SourcesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SourcesPage = /** @class */ (function () {
    function SourcesPage(newsService, storage, toastController) {
        this.newsService = newsService;
        this.storage = storage;
        this.toastController = toastController;
        this.fakeSources = new Array(20);
        this.term = '';
    }
    SourcesPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.sources = this.newsService.getData('sources');
        this.newsService.getData('sources').subscribe(function (sources) {
            _this.sources = sources['sources'];
        });
    };
    SourcesPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Added To Favorites.',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SourcesPage.prototype.favorite = function (source) {
        var _this = this;
        console.log(source);
        this.storage.get('favorite').then(function (val) {
            var items = [];
            if (val != null) {
                items = JSON.parse(val);
            }
            items.push(source);
            _this.storage.set('favorite', JSON.stringify(items));
            _this.presentToast();
        });
    };
    SourcesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sources',
            template: __webpack_require__(/*! ./sources.page.html */ "./src/app/pages/sources/sources.page.html"),
            styles: [__webpack_require__(/*! ./sources.page.scss */ "./src/app/pages/sources/sources.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], SourcesPage);
    return SourcesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sources-sources-module.js.map