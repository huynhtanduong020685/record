(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-tabs-tabs-module~speech-speech-module"],{

/***/ "./node_modules/@ionic-native/media/ngx/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ionic-native/media/ngx/index.js ***!
  \*******************************************************/
/*! exports provided: MediaObject, MEDIA_STATUS, MEDIA_ERROR, Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObject", function() { return MediaObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_STATUS", function() { return MEDIA_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ERROR", function() { return MEDIA_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return Media; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;
        this.onSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });
        this.onStatusUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }
    MediaObject.prototype.getCurrentAmplitude = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "getCurrentAmplitude", {}, arguments); };
    MediaObject.prototype.getCurrentPosition = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "getCurrentPosition", {}, arguments); };
    MediaObject.prototype.getDuration = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "getDuration", { "sync": true }, arguments); };
    MediaObject.prototype.play = function (iosOptions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "play", { "sync": true }, arguments); };
    MediaObject.prototype.pause = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "pause", { "sync": true }, arguments); };
    MediaObject.prototype.release = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "release", { "sync": true }, arguments); };
    MediaObject.prototype.seekTo = function (milliseconds) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "seekTo", { "sync": true }, arguments); };
    MediaObject.prototype.setVolume = function (volume) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "setVolume", { "sync": true }, arguments); };
    MediaObject.prototype.setRate = function (speedRate) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "setRate", { "sync": true }, arguments); };
    MediaObject.prototype.startRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "startRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stopRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "stopRecord", { "sync": true }, arguments); };
    MediaObject.prototype.pauseRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "pauseRecord", { "sync": true }, arguments); };
    MediaObject.prototype.resumeRecord = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "resumeRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stop = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "stop", { "sync": true }, arguments); };
    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "successCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "successCallback", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "errorCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "errorCallback", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "statusCallback"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "statusCallback", value); },
        enumerable: true,
        configurable: true
    });
    return MediaObject;
}());

var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));
var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    Media.prototype.create = function (src) {
        var instance;
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(Media.getPluginRef(), null, Media.getPluginName()) ===
            true) {
            // Creates a new media object
            instance = new (Media.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    Media.pluginName = "Media";
    Media.repo = "https://github.com/apache/cordova-plugin-media";
    Media.plugin = "cordova-plugin-media";
    Media.pluginRef = "Media";
    Media.platforms = ["Android", "Browser", "iOS", "Windows"];
    Media = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], Media);
    return Media;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGdGQUFnRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7O0lBb0MxQyxxQkFBb0IsZUFBb0I7UUFBeEMsaUJBbUJDO1FBbkJtQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxDQUFNLFVBQUMsUUFBdUI7WUFDM0QsS0FBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQzNCLFVBQUMsUUFBK0I7WUFDOUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxhQUFhLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztRQUMvQyxDQUFDLENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQ2xDLFVBQUMsUUFBZ0M7WUFDL0IsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztRQUNoRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFPRCx5Q0FBbUI7SUFTbkIsd0NBQWtCO0lBU2xCLGlDQUFXO0lBUVgsMEJBQUksYUFBQyxVQUdKO0lBTUQsMkJBQUs7SUFNTCw2QkFBTztJQU9QLDRCQUFNLGFBQUMsWUFBb0I7SUFPM0IsK0JBQVMsYUFBQyxNQUFjO0lBR3hCLDZCQUFPLGFBQUMsU0FBaUI7SUFNekIsaUNBQVc7SUFNWCxnQ0FBVTtJQU1WLGlDQUFXO0lBTVgsa0NBQVk7SUFNWiwwQkFBSTswQkE5SGdCLHdDQUFlOzs7Ozs7MEJBS2Ysc0NBQWE7Ozs7OzswQkFLYix1Q0FBYzs7Ozs7O3NCQXBDcEM7OztBQXlLQSxNQUFNLENBQU4sSUFBWSxZQU1YO0FBTkQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUix1REFBUSxDQUFBO0lBQ1IscURBQU8sQ0FBQTtJQUNQLG1EQUFNLENBQUE7SUFDTixxREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLFlBQVksS0FBWixZQUFZLFFBTXZCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixtREFBVyxDQUFBO0lBQ1gsbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7SUFDTix1REFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCOztJQStHMEIseUJBQWlCOzs7UUFDMUMsWUFBWTtRQUNaOztXQUVHO1FBQ0gsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZjs7V0FFRztRQUNILG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25COztXQUVHO1FBQ0gsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEI7O1dBRUc7UUFDSCxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGNBQWM7UUFDZDs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQjs7V0FFRztRQUNILDhCQUF3QixHQUFHLENBQUMsQ0FBQzs7O0lBRTdCOzs7O09BSUc7SUFDSCxzQkFBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixJQUFJLFFBQWEsQ0FBQztRQUVsQixJQUNFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BFLElBQUksRUFDSjtZQUNBLDZCQUE2QjtZQUM3QixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUExRFUsS0FBSztRQUhqQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csS0FBSztnQkFyU2xCO0VBcVMyQixpQkFBaUI7U0FBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgY2hlY2tBdmFpbGFiaWxpdHkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYU9iamVjdCB7XG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IG9uIGFjdGlvbnMgc3VjY2Vzc1xuICAgKi9cbiAgb25TdWNjZXNzOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiBhbiBlcnJvciBvY2N1cnNcbiAgICovXG4gIG9uRXJyb3I6IE9ic2VydmFibGU8TUVESUFfRVJST1I+O1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGZpbGUgc3RhdHVzIGNoYW5nZXNcbiAgICovXG4gIG9uU3RhdHVzVXBkYXRlOiBPYnNlcnZhYmxlPE1FRElBX1NUQVRVUz47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3VjY2Vzc0NhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlcnJvckNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzdGF0dXNDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMub25TdWNjZXNzID0gbmV3IE9ic2VydmFibGU8YW55Pigob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcbiAgICAgIHJldHVybiAoKSA9PiAodGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uRXJyb3IgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9FUlJPUj4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPE1FRElBX0VSUk9SPikgPT4ge1xuICAgICAgICB0aGlzLmVycm9yQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4gKHRoaXMuZXJyb3JDYWxsYmFjayA9ICgpID0+IHt9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5vblN0YXR1c1VwZGF0ZSA9IG5ldyBPYnNlcnZhYmxlPE1FRElBX1NUQVRVUz4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPE1FRElBX1NUQVRVUz4pID0+IHtcbiAgICAgICAgdGhpcy5zdGF0dXNDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICAgIHJldHVybiAoKSA9PiAodGhpcy5zdGF0dXNDYWxsYmFjayA9ICgpID0+IHt9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0Q3VycmVudEFtcGxpdHVkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuIEFsc28gdXBkYXRlcyB0aGUgTWVkaWEgb2JqZWN0J3MgcG9zaXRpb24gcGFyYW1ldGVyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRDdXJyZW50UG9zaXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiBhbiBhdWRpbyBmaWxlIGluIHNlY29uZHMuIElmIHRoZSBkdXJhdGlvbiBpcyB1bmtub3duLCBpdCByZXR1cm5zIGEgdmFsdWUgb2YgLTEuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIG9yIHJlc3VtZXMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcGxheShpb3NPcHRpb25zPzoge1xuICAgIG51bWJlck9mTG9vcHM/OiBudW1iZXI7XG4gICAgcGxheUF1ZGlvV2hlblNjcmVlbklzTG9ja2VkPzogYm9vbGVhbjtcbiAgfSk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhdXNlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVsZWFzZXMgdGhlIHVuZGVybHlpbmcgb3BlcmF0aW5nIHN5c3RlbSdzIGF1ZGlvIHJlc291cmNlcy4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50IGZvciBBbmRyb2lkLCBzaW5jZSB0aGVyZSBhcmUgYSBmaW5pdGUgYW1vdW50IG9mIE9wZW5Db3JlIGluc3RhbmNlcyBmb3IgbWVkaWEgcGxheWJhY2suIEFwcGxpY2F0aW9ucyBzaG91bGQgY2FsbCB0aGUgcmVsZWFzZSBmdW5jdGlvbiBmb3IgYW55IE1lZGlhIHJlc291cmNlIHRoYXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbGVhc2UoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiBhbiBhdWRpbyBmaWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIFRoZSB0aW1lIHBvc2l0aW9uIHlvdSB3YW50IHRvIHNldCBmb3IgdGhlIGN1cnJlbnQgYXVkaW8gZmlsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2Vla1RvKG1pbGxpc2Vjb25kczogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZvbHVtZSBmb3IgYW4gYXVkaW8gZmlsZS5cbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSBUaGUgdm9sdW1lIHRvIHNldCBmb3IgcGxheWJhY2suIFRoZSB2YWx1ZSBtdXN0IGJlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMC4wIHRvIDEuMC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge31cblxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSYXRlKHNwZWVkUmF0ZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcmVjb3JkaW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydFJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcFJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhdXNlUmVjb3JkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzdW1lcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc3VtZVJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3AoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgdHlwZSBNZWRpYVN0YXR1c1VwZGF0ZUNhbGxiYWNrID0gKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUVycm9yIHtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VcbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogRXJyb3IgY29kZVxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBNRURJQV9TVEFUVVMge1xuICBOT05FID0gMCxcbiAgU1RBUlRJTkcsXG4gIFJVTk5JTkcsXG4gIFBBVVNFRCxcbiAgU1RPUFBFRFxufVxuXG5leHBvcnQgZW51bSBNRURJQV9FUlJPUiB7XG4gIEFCT1JURUQgPSAxLFxuICBORVRXT1JLLFxuICBERUNPREUsXG4gIFNVUFBPUlRFRFxufVxuXG5leHBvcnQgdHlwZSBNZWRpYUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IE1lZGlhRXJyb3IpID0+IHZvaWQ7XG5cbi8qKlxuICogQG5hbWUgTWVkaWFcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gcmVjb3JkIGFuZCBwbGF5IGJhY2sgYXVkaW8gZmlsZXMgb24gYSBkZXZpY2UuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNZWRpYSwgTWVkaWFPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21lZGlhL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIENyZWF0ZSBhIE1lZGlhIGluc3RhbmNlLiAgRXhwZWN0cyBwYXRoIHRvIGZpbGUgb3IgdXJsIGFzIGFyZ3VtZW50XG4gKiAvLyBXZSBjYW4gb3B0aW9uYWxseSBwYXNzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIHRyYWNrIHRoZSBzdGF0dXMgb2YgdGhlIG1lZGlhXG4gKlxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgnZmlsZS5tcDMnKTtcbiAqXG4gKiAvLyB0byBsaXN0ZW4gdG8gcGx1Z2luIGV2ZW50czpcbiAqXG4gKiBmaWxlLm9uU3RhdHVzVXBkYXRlLnN1YnNjcmliZShzdGF0dXMgPT4gY29uc29sZS5sb2coc3RhdHVzKSk7IC8vIGZpcmVzIHdoZW4gZmlsZSBzdGF0dXMgY2hhbmdlc1xuICpcbiAqIGZpbGUub25TdWNjZXNzLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIGlzIHN1Y2Nlc3NmdWwnKSk7XG4gKlxuICogZmlsZS5vbkVycm9yLnN1YnNjcmliZShlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpKTtcbiAqXG4gKiAvLyBwbGF5IHRoZSBmaWxlXG4gKiBmaWxlLnBsYXkoKTtcbiAqXG4gKiAvLyBwYXVzZSB0aGUgZmlsZVxuICogZmlsZS5wYXVzZSgpO1xuICpcbiAqIC8vIGdldCBjdXJyZW50IHBsYXliYWNrIHBvc2l0aW9uXG4gKiBmaWxlLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHBvc2l0aW9uKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcbiAqIH0pO1xuICpcbiAqIC8vIGdldCBmaWxlIGR1cmF0aW9uXG4gKiBsZXQgZHVyYXRpb24gPSBmaWxlLmdldER1cmF0aW9uKCk7XG4gKiBjb25zb2xlLmxvZyhkdXJhdGlvbik7XG4gKlxuICogLy8gc2tpcCB0byAxMCBzZWNvbmRzIChleHBlY3RzIGludCB2YWx1ZSBpbiBtcylcbiAqIGZpbGUuc2Vla1RvKDEwMDAwKTtcbiAqXG4gKiAvLyBzdG9wIHBsYXlpbmcgdGhlIGZpbGVcbiAqIGZpbGUuc3RvcCgpO1xuICpcbiAqIC8vIHJlbGVhc2UgdGhlIG5hdGl2ZSBhdWRpbyByZXNvdXJjZVxuICogLy8gUGxhdGZvcm0gUXVpcmtzOlxuICogLy8gaU9TIHNpbXBseSBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYW5kIHRoZSBvbGQgb25lIHdpbGwgYmUgb3ZlcndyaXR0ZW5cbiAqIC8vIEFuZHJvaWQgeW91IG11c3QgY2FsbCByZWxlYXNlKCkgdG8gZGVzdHJveSBpbnN0YW5jZXMgb2YgbWVkaWEgd2hlbiB5b3UgYXJlIGRvbmVcbiAqIGZpbGUucmVsZWFzZSgpO1xuICpcbiAqXG4gKlxuICogLy8gUmVjb3JkaW5nIHRvIGEgZmlsZVxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgncGF0aC90by9maWxlLm1wMycpO1xuICpcbiAqIGZpbGUuc3RhcnRSZWNvcmQoKTtcbiAqXG4gKiBmaWxlLnN0b3BSZWNvcmQoKTtcbiAqXG4gKlxuICogYGBgXG4gKlxuICogU29tZSBoaW50cyBpZiB5b3UgYXJlIHVzaW5nIGlPUyBhbmQgcmVjb3JkaW5nIGRvZXNuJ3Qgd29yazpcbiAqIDEuKSBUcnkgdG8gdXNlIGEgYWJzb2x1dGUgZmlsZSBwYXRoIGJ1dCByZW1vdmUgYmVnaW5uaW5nIFwiZmlsZTovL1wiLlxuICogVGhlbiBpdCBsb29rcyBsaWtlOiBgL3Zhci9tb2JpbGUvQ29udGFpbmVycy9EYXRhL0FwcGxpY2F0aW9uL0FGNDM4QjhCLTc3MjQtNEZCQi04RTY5LTA4MzQ2MzIyNEZDNC90bXAvbXlfZmlsZS5tNGFgXG4gKiBFeGFtcGxlOiBgdGhpcy5tZWRpYS5jcmVhdGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnkucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgJycpICsgJ215X2ZpbGUubTRhJylgXG4gKiAyLikgSWYgdGhhdCdzIG5vdCB3b3JraW5nLCB0b28sIGNyZWF0ZSB0aGUgZmlsZSBiZWZvcmUgdXNpbmcuXG4gKiBFeGFtcGxlOlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tZWRpYS9uZ3gnO1xuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZS5jcmVhdGVGaWxlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LCAnbXlfZmlsZS5tNGEnLCB0cnVlKS50aGVuKCgpID0+IHtcbiAqICAgbGV0IGZpbGUgPSB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKTtcbiAqICAgZmlsZS5zdGFydFJlY29yZCgpO1xuICogICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBmaWxlLnN0b3BSZWNvcmQoKSwgMTAwMDApO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGZpbmQgdGhlIHJlYXNvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtbmF0aXZlL2lzc3Vlcy8xNDUyI2lzc3VlY29tbWVudC0yOTk2MDU5MDZcbiAqIEBjbGFzc2VzXG4gKiBNZWRpYU9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIE1lZGlhRXJyb3JcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNZWRpYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEnLFxuICBwbHVnaW5SZWY6ICdNZWRpYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvLyBDb25zdGFudHNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX05PTkUgPSAwO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RBUlRJTkcgPSAxO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfUlVOTklORyA9IDI7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9QQVVTRUQgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfU1RPUFBFRCA9IDQ7XG5cbiAgLy8gZXJyb3IgY29kZXNcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9BQk9SVEVEID0gMTtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX0VSUl9ERUNPREUgPSAzO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX05PTkVfU1VQUE9SVEVEID0gNDtcblxuICAvKipcbiAgICogT3BlbiBhIG1lZGlhIGZpbGVcbiAgICogQHBhcmFtIHNyYyB7c3RyaW5nfSBBIFVSSSBjb250YWluaW5nIHRoZSBhdWRpbyBjb250ZW50LlxuICAgKiBAcmV0dXJuIHtNZWRpYU9iamVjdH1cbiAgICovXG4gIGNyZWF0ZShzcmM6IHN0cmluZyk6IE1lZGlhT2JqZWN0IHtcbiAgICBsZXQgaW5zdGFuY2U6IGFueTtcblxuICAgIGlmIChcbiAgICAgIGNoZWNrQXZhaWxhYmlsaXR5KE1lZGlhLmdldFBsdWdpblJlZigpLCBudWxsLCBNZWRpYS5nZXRQbHVnaW5OYW1lKCkpID09PVxuICAgICAgdHJ1ZVxuICAgICkge1xuICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBtZWRpYSBvYmplY3RcbiAgICAgIGluc3RhbmNlID0gbmV3IChNZWRpYS5nZXRQbHVnaW4oKSkoc3JjKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE1lZGlhT2JqZWN0KGluc3RhbmNlKTtcbiAgfVxufVxuIl19

/***/ }),

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

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Recording</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n      <ion-card class=\"welcome-card\">\n              <ion-card-header>Result:</ion-card-header>\n              <ion-card-content class=\"ioncardcontent\" *ngFor=\"let match of matches\">\n                       <p> {{ match }}</p>\n              </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-list>\n          <ion-item *ngFor=\"let file of mediaFiles\" tappable (click)=\"playRecordingfile(file)\" text-wrap>\n            {{ file.name }}\n            <p>{{ file.size / 1000 / 1000 | number }} MB</p>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    <div class=\"buttonspeech\">\n      \n       <ion-button full (click)=\"getPermission()\">\n             <ion-icon slot=\"start\" name=\"star\" ></ion-icon>\n            Get Permission\n       </ion-button>\n        <ion-button full (click)=\"startListening()\">\n            Start Recording\n            <ion-icon slot=\"end\" name=\"mic\"></ion-icon>\n        </ion-button>\n\n        <ion-button full  (click)=\"stopListening()\" >\n          <ion-icon name=\"hand\"></ion-icon>\n          Stop Recording\n        </ion-button>\n \t </div>\n    \n</ion-content>"

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
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");








var MEDIA_FILES_KEY = 'mediaFiles';
var SpeechPage = /** @class */ (function () {
    //Inject to the constructor.
    function SpeechPage(navCtrl, speechRecognition, platform, cd, media, storage, file) {
        this.navCtrl = navCtrl;
        this.speechRecognition = speechRecognition;
        this.platform = platform;
        this.cd = cd;
        this.media = media;
        this.storage = storage;
        this.file = file;
        // Declares the required variables before the constructor.
        this.mediaFiles = [];
        this.matches = ['Result of speech Recording is showed here'];
        this.isRecording = false;
    }
    // isIos() {
    //   return this.platform.is('ios');
    // }
    // function for start recording audio on smartphone
    // Call it from `ionViewDidLoad`.
    SpeechPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            _this.mediaFiles = JSON.parse(res) || [];
        });
    };
    SpeechPage.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
        });
    };
    //get permission for speechrecognition
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
    // function for play audio/sound file.
    SpeechPage.prototype.playRecordingfile = function (myFile) {
        var _this = this;
        this.matches = [];
        if (myFile.name.indexOf('.wav') > -1) {
            var audioFile = this.media.create(myFile.localURL);
            audioFile.play();
            this.speechRecognition.startListening().subscribe(function (matches) {
                myFile = _this.matches;
                _this.matches = matches;
                _this.cd.detectChanges();
            });
        }
        myFile.onError.subscribe(function (error) { return console.log('Error!', error); });
    };
    //store media file
    SpeechPage.prototype.storeMediaFiles = function (files) {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            if (res) {
                var arr = JSON.parse(res);
                arr = arr.concat(files);
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            }
            else {
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
            }
            _this.mediaFiles = _this.mediaFiles.concat(files);
        });
    };
    SpeechPage.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myvideo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpeechPage.prototype, "myVideo", void 0);
    SpeechPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-speech',
            template: __webpack_require__(/*! ./speech.page.html */ "./src/app/pages/speech/speech.page.html"),
            styles: [__webpack_require__(/*! ./speech.page.scss */ "./src/app/pages/speech/speech.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognition"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_4__["Media"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])
    ], SpeechPage);
    return SpeechPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-tabs-tabs-module~speech-speech-module.js.map