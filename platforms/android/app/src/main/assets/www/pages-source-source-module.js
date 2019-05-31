(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-source-source-module"],{

/***/ "./src/app/pages/source/source.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/source/source.module.ts ***!
  \***********************************************/
/*! exports provided: SourcePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcePageModule", function() { return SourcePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _source_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./source.page */ "./src/app/pages/source/source.page.ts");







var routes = [
    {
        path: '',
        component: _source_page__WEBPACK_IMPORTED_MODULE_6__["SourcePage"]
    }
];
var SourcePageModule = /** @class */ (function () {
    function SourcePageModule() {
    }
    SourcePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_source_page__WEBPACK_IMPORTED_MODULE_6__["SourcePage"]]
        })
    ], SourcePageModule);
    return SourcePageModule;
}());



/***/ }),

/***/ "./src/app/pages/source/source.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/source/source.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Source</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <app-articles [news]=\"news\"></app-articles> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/source/source.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/source/source.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvdXJjZS9zb3VyY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/source/source.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/source/source.page.ts ***!
  \*********************************************/
/*! exports provided: SourcePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcePage", function() { return SourcePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SourcePage = /** @class */ (function () {
    function SourcePage(newsService, activedRoute) {
        this.newsService = newsService;
        this.activedRoute = activedRoute;
    }
    SourcePage.prototype.ngOnInit = function () {
        this.id = this.activedRoute.snapshot.paramMap.get('id');
        this.news = this.newsService.getData("everything?sources=" + this.id);
    };
    SourcePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-source',
            template: __webpack_require__(/*! ./source.page.html */ "./src/app/pages/source/source.page.html"),
            styles: [__webpack_require__(/*! ./source.page.scss */ "./src/app/pages/source/source.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SourcePage);
    return SourcePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-source-source-module.js.map