(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_weather_weather_week_view_weather_week_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weather/weather-week-view/weather-week-view.component */ "./src/app/components/weather/weather-week-view/weather-week-view.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");






const routes = [
    { path: 'home', component: _components_weather_weather_week_view_weather_week_view_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWeekViewComponent"] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'favorites', component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _controls_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/main-header/main-header.component */ "./src/app/controls/main-header/main-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_controls_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__["MainHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGNvZGVcXGhlcm9sby10ZXN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufSIsIkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_favorites_add_city_modal_add_city_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/favorites/add-city-modal/add-city-modal.component */ "./src/app/components/favorites/add-city-modal/add-city-modal.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_weather_weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/weather/weather-item/weather-item.component */ "./src/app/components/weather/weather-item/weather-item.component.ts");
/* harmony import */ var _components_weather_weather_week_view_weather_week_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/weather/weather-week-view/weather-week-view.component */ "./src/app/components/weather/weather-week-view/weather-week-view.component.ts");
/* harmony import */ var _controls_search_location_search_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/search-location/search-location.component */ "./src/app/controls/search-location/search-location.component.ts");
/* harmony import */ var _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/weather-icon/weather-icon.component */ "./src/app/controls/weather-icon/weather-icon.component.ts");
/* harmony import */ var _providers_material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers/material/material.module */ "./src/app/providers/material/material.module.ts");
/* harmony import */ var _controls_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/main-header/main-header.component */ "./src/app/controls/main-header/main-header.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _providers_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_weather_weather_week_view_weather_week_view_component__WEBPACK_IMPORTED_MODULE_10__["WeatherWeekViewComponent"],
        _components_weather_weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_9__["WeatherItemComponent"],
        _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesComponent"],
        _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_12__["WeatherIconComponent"],
        _controls_search_location_search_location_component__WEBPACK_IMPORTED_MODULE_11__["SearchLocationComponent"],
        _components_favorites_add_city_modal_add_city_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddCityModalComponent"],
        _controls_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_14__["MainHeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _providers_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_weather_weather_week_view_weather_week_view_component__WEBPACK_IMPORTED_MODULE_10__["WeatherWeekViewComponent"],
                    _components_weather_weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_9__["WeatherItemComponent"],
                    _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesComponent"],
                    _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_12__["WeatherIconComponent"],
                    _controls_search_location_search_location_component__WEBPACK_IMPORTED_MODULE_11__["SearchLocationComponent"],
                    _components_favorites_add_city_modal_add_city_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddCityModalComponent"],
                    _controls_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_14__["MainHeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _providers_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/favorites/add-city-modal/add-city-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/favorites/add-city-modal/add-city-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddCityModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityModalComponent", function() { return AddCityModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _controls_search_location_search_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controls/search-location/search-location.component */ "./src/app/controls/search-location/search-location.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class AddCityModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.selectedLocation = null;
    }
    ngOnInit() {
    }
    getSelectedLocation(location) {
        this.selectedLocation = location;
    }
    closeModal() {
        this.dialogRef.close();
    }
}
AddCityModalComponent.ɵfac = function AddCityModalComponent_Factory(t) { return new (t || AddCityModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AddCityModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCityModalComponent, selectors: [["app-add-city-modal"]], decls: 8, vars: 2, consts: [[3, "setSelectedLocation"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close", "disabled"]], template: function AddCityModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add a city to favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-location", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setSelectedLocation", function AddCityModalComponent_Template_app_search_location_setSelectedLocation_2_listener($event) { return ctx.getSelectedLocation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCityModalComponent_Template_button_click_4_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.selectedLocation)("disabled", !ctx.selectedLocation);
    } }, directives: [_controls_search_location_search_location_component__WEBPACK_IMPORTED_MODULE_2__["SearchLocationComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2FkZC1jaXR5LW1vZGFsL2FkZC1jaXR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCityModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-city-modal',
                templateUrl: './add-city-modal.component.html',
                styleUrls: ['./add-city-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _add_city_modal_add_city_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-city-modal/add-city-modal.component */ "./src/app/components/favorites/add-city-modal/add-city-modal.component.ts");
/* harmony import */ var _favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.service */ "./src/app/components/favorites/favorites.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _weather_weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../weather/weather-item/weather-item.component */ "./src/app/components/weather/weather-item/weather-item.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../controls/weather-icon/weather-icon.component */ "./src/app/controls/weather-icon/weather-icon.component.ts");











function FavoritesComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-weather-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeFromFavorite", function FavoritesComponent_ng_container_5_Template_app_weather_item_removeFromFavorite_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const location_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.removeFromFavorite(location_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const location_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("locationData", location_r12)("isFavoriteContext", true);
} }
function FavoritesComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.addFavorites(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FavoritesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your favorite list is empty...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How would you know what to wear?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add a city to your favorite list for the answer..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-weather-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoritesComponent_div_9_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.addFavorites(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FavoritesComponent {
    constructor(favoriteService, dialog, toastService) {
        this.favoriteService = favoriteService;
        this.dialog = dialog;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.getFavorites();
    }
    getFavorites() {
        this.favoriteList$ = this.favoriteService.getFavoriteList();
    }
    addFavorites() {
        const dialogRef = this.dialog.open(_add_city_modal_add_city_modal_component__WEBPACK_IMPORTED_MODULE_1__["AddCityModalComponent"], {
            width: '500px',
            data: {}
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                console.log(result);
                const success = this.favoriteService.addToFavorites(result);
                const message = success ? result.LocalizedName + ' added to favorites successfully' : 'Sorry, something went wrong, please try again';
                this.showToast(message, success);
            }
        });
    }
    removeFromFavorite(location) {
        this.favoriteService.removeFromFavorite(location.Key);
        const message = location.LocalizedName + ' has been removed';
        this.showToast(message, true);
    }
    showToast(message, success) {
        this.toastService.open(message, '', {
            duration: 3000,
            panelClass: success ? ['notif-success'] : ['notif-error']
        });
    }
}
FavoritesComponent.ɵfac = function FavoritesComponent_Factory(t) { return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
FavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoritesComponent, selectors: [["app-favorites"]], decls: 11, vars: 9, consts: [[1, "row", "title-wrapper", "justify-content-center"], [1, "col-12", "col-sm-8", "col-md-8", "col-lg-8", "col-xl-8"], [1, "title"], [1, "row", "justify-content-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "text-center favorite-empty", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-2"], [3, "locationData", "isFavoriteContext", "removeFromFavorite"], ["mat-mini-fab", "", "color", "primary", 1, "float", 3, "click"], [1, "text-center", "favorite-empty"], ["svgIcon", "weather", "aria-hidden", "false", 1, "weather-icon"], [1, "text-row-1"], [1, "text-row-2"], [1, "text-row-3"], ["mat-mini-fab", "", "color", "primary", 3, "click"]], template: function FavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FavoritesComponent_ng_container_5_Template, 3, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FavoritesComponent_ng_container_7_Template, 4, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FavoritesComponent_div_9_Template, 13, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        const currVal_1 = ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.favoriteList$)) == null ? null : tmp_1_0.length) > 0;
        var tmp_2_0 = null;
        const currVal_2 = ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.favoriteList$)) == null ? null : tmp_2_0.length) === 0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.favoriteList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _weather_weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_6__["WeatherItemComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_9__["WeatherIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".title-wrapper[_ngcontent-%COMP%] {\n  padding: 50px;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: var(--text-color4);\n  position: relative;\n  text-align: center;\n}\n.title-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: white;\n  font-size: 40px;\n}\n.add-card[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  background-color: white;\n  border-radius: 25px;\n  margin-bottom: 30px;\n  transform: scale(1.1) perspective(1500px) rotateY(10deg);\n  border: 1px dashed lightgrey;\n}\n.float[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 40px;\n  right: 40px;\n}\n.favorite-empty[_ngcontent-%COMP%]   .weather-icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.favorite-empty[_ngcontent-%COMP%]   .text-row-1[_ngcontent-%COMP%] {\n  color: var(--text-color2);\n}\n.favorite-empty[_ngcontent-%COMP%]   .text-row-2[_ngcontent-%COMP%] {\n  color: var(--text-color4);\n  font-size: 22px;\n}\n.favorite-empty[_ngcontent-%COMP%]   .text-row-3[_ngcontent-%COMP%] {\n  color: var(--text-color1);\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvQzpcXGNvZGVcXGhlcm9sby10ZXN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYXZvcml0ZXNcXGZhdm9yaXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ1I7QURHQTtFQUNJLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0RBQUE7RUFDQSw0QkFBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKO0FETUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0hSO0FES0k7RUFDSSx5QkFBQTtBQ0hSO0FETUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNKUjtBRE9JO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtd3JhcHBlcntcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29sb3I0KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6NDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkZC1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSBwZXJzcGVjdGl2ZSgxNTAwcHgpIHJvdGF0ZVkoMTBkZWcpO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmZsb2F0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZhdm9yaXRlLWVtcHR5e1xyXG4gICAgLndlYXRoZXItaWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcm93LTEge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXh0LXJvdy0yIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcjQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRleHQtcm93LTMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIudGl0bGUtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvcjQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZS13cmFwcGVyIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uYWRkLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKSBwZXJzcGVjdGl2ZSgxNTAwcHgpIHJvdGF0ZVkoMTBkZWcpO1xuICBib3JkZXI6IDFweCBkYXNoZWQgbGlnaHRncmV5O1xufVxuXG4uZmxvYXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5mYXZvcml0ZS1lbXB0eSAud2VhdGhlci1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mYXZvcml0ZS1lbXB0eSAudGV4dC1yb3ctMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMik7XG59XG4uZmF2b3JpdGUtZW1wdHkgLnRleHQtcm93LTIge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcjQpO1xuICBmb250LXNpemU6IDIycHg7XG59XG4uZmF2b3JpdGUtZW1wdHkgLnRleHQtcm93LTMge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcjEpO1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorites',
                templateUrl: './favorites.component.html',
                styleUrls: ['./favorites.component.scss']
            }]
    }], function () { return [{ type: _favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/favorites/favorites.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/favorites/favorites.service.ts ***!
  \***********************************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class FavoritesService {
    constructor() {
        this.favoriteListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    addToFavorites(location) {
        const isNotExist = !this.checkIfExist(location.Key);
        if (isNotExist) {
            let newList = this.getFavoritesSync();
            newList.push(location);
            this.favoriteListSubject.next(newList);
            localStorage.setItem(this.favoriteLocalStorageName, JSON.stringify(newList));
        }
        return isNotExist;
    }
    removeFromFavorite(locationKey) {
        const filteredList = this.getFavoritesSync().filter(f => f.Key !== locationKey);
        localStorage.setItem(this.favoriteLocalStorageName, JSON.stringify(filteredList));
        this.favoriteListSubject.next(filteredList);
    }
    getFavoritesSync() {
        const localStorageData = localStorage.getItem(this.favoriteLocalStorageName);
        if (localStorageData) {
            return JSON.parse(localStorageData);
        }
        return [];
    }
    getFavoriteList() {
        this.favoriteListSubject.next(this.getFavoritesSync());
        return this.favoriteListSubject.asObservable();
    }
    checkIfExist(locationKey) {
        return this.getFavoritesSync().find(f => f.Key === locationKey) != null;
    }
}
FavoritesService.ɵfac = function FavoritesService_Factory(t) { return new (t || FavoritesService)(); };
FavoritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FavoritesService, factory: FavoritesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/weather/weather-item/weather-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/weather/weather-item/weather-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: WeatherItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherItemComponent", function() { return WeatherItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/components/weather/weather.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../controls/weather-icon/weather-icon.component */ "./src/app/controls/weather-icon/weather-icon.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function WeatherItemComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherItemComponent_div_0_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.clickOnRemoveFromFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WeatherItemComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.locationData.LocalizedName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", ctx_r21.locationData.Country.LocalizedName, " ");
} }
function WeatherItemComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r22.weatherItem.date, "EEEE"));
} }
function WeatherItemComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r23.weatherItem.temperature.min == null ? null : ctx_r23.weatherItem.temperature.min.Value, "1.0-0"), "\u00B0");
} }
function WeatherItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherItemComponent_div_0_ng_container_1_Template, 5, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeatherItemComponent_div_0_div_4_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeatherItemComponent_div_0_div_5_Template, 3, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WeatherItemComponent_div_0_span_11_Template, 3, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@loadItemAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isFavoriteContext);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("svgIcon", ctx_r19.weatherItem.weatherIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.locationData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.locationData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, ctx_r19.weatherItem.temperature.max.Value, "1.0-0"), "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.weatherItem.temperature.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.weatherItem.weatherDescription, " ");
} }
class WeatherItemComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.locationData = null;
        this.isFavoriteContext = false;
        this.removeFromFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDataReady = false;
    }
    ngOnInit() {
        if (this.isFavoriteContext && this.locationData) {
            this.getCurrentWeather();
        }
        else {
            this.isDataReady = true;
        }
    }
    clickOnRemoveFromFavorite() {
        this.removeFromFavorite.emit();
    }
    getCurrentWeather() {
        this.weatherService.getCurrentWeatherByLocation(this.locationData.Key).subscribe(result => {
            this.weatherItem = result;
            this.isDataReady = true;
        });
    }
}
WeatherItemComponent.ɵfac = function WeatherItemComponent_Factory(t) { return new (t || WeatherItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"])); };
WeatherItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherItemComponent, selectors: [["app-weather-item"]], inputs: { weatherItem: "weatherItem", locationData: "locationData", isFavoriteContext: "isFavoriteContext" }, outputs: { removeFromFavorite: "removeFromFavorite" }, decls: 2, vars: 1, consts: [["class", "card text-center weather-weekly-card", 4, "ngIf"], [1, "card", "text-center", "weather-weekly-card"], [4, "ngIf"], [1, "card-header"], ["aria-hidden", "false", 1, "weather-icon", 3, "svgIcon"], ["class", "location", 4, "ngIf"], ["class", "date", 4, "ngIf"], [1, "card-body"], [1, "card-text"], [1, "degree"], ["class", "degree min", 4, "ngIf"], [1, "summary"], ["mat-button", "", "color", "warn", 1, "btn-remove-favorite", 3, "click"], [1, "location"], [1, "text-muted"], [1, "date"], [1, "degree", "min"]], template: function WeatherItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherItemComponent_div_0_Template, 14, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-weather-icon");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_4__["WeatherIconComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".weather-weekly-card[_ngcontent-%COMP%] {\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  background-color: white;\n  border-radius: 25px;\n  border: none;\n  margin-bottom: 50px;\n  transform: scale(1.1) perspective(1500px) rotateY(10deg);\n}\n.weather-weekly-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  transform: scale(1.1) perspective(1500px) rotateY(15deg);\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-align: center;\n  font-weight: 500;\n  color: var(--text-color1);\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  text-align: center;\n  color: var(--text-color1);\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .weather-icon[_ngcontent-%COMP%] {\n  height: 120px;\n  width: 120px;\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  padding-top: 12px;\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .weather-icon[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  position: absolute;\n  left: 65%;\n  top: 30%;\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .degree[_ngcontent-%COMP%] {\n  color: var(--text-color5);\n  font-weight: 700;\n  font-size: 50px;\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .degree.min[_ngcontent-%COMP%] {\n  color: var(--text-color3);\n  font-weight: normal;\n  font-size: 20px;\n}\n.weather-weekly-card[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  font-size: 16px;\n  text-align: center;\n  color: var(--text-color2);\n}\n.btn-remove-favorite[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n@media only screen and (max-width: 576px) {\n  .weather-weekly-card[_ngcontent-%COMP%] {\n    transform: none !important;\n    padding: 0;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  .weather-weekly-card[_ngcontent-%COMP%]:hover {\n    transform: none !important;\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXItaXRlbS9DOlxcY29kZVxcaGVyb2xvLXRlc3Qvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlYXRoZXJcXHdlYXRoZXItaXRlbVxcd2VhdGhlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci1pdGVtL3dlYXRoZXItaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0FDQUo7QURHSTtFQUNJLDRFQUFBO0VBQ0Esd0RBQUE7QUNEUjtBRElJO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FDRlI7QURJUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNGWjtBREtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0haO0FETVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0paO0FEVVE7RUFDSSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsaUJBQUE7QUNSWjtBRFdRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDVFo7QURZUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVlo7QURZWTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDVmhCO0FEZ0JJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDZFI7QURvQkE7RUFDSSxrQkFBQTtBQ2pCSjtBRHFCQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSxVQUFBO0lBQ0EsNEVBQUE7RUNsQk47RURvQk07SUFDSSwwQkFBQTtJQUNBLFVBQUE7RUNsQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0aGVyLWl0ZW0vd2VhdGhlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYXRoZXItd2Vla2x5LWNhcmQge1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSBwZXJzcGVjdGl2ZSgxNTAwcHgpIHJvdGF0ZVkoMTBkZWcpO1xyXG5cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSBwZXJzcGVjdGl2ZSgxNTAwcHgpIHJvdGF0ZVkoMTVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2VhdGhlci1pY29uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuXHJcbiAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndlYXRoZXItaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiA2NSU7XHJcbiAgICAgICAgICAgIHRvcDogMzAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlZ3JlZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yNSk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuXHJcbiAgICAgICAgICAgICYubWluIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMyk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IyKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4uYnRuLXJlbW92ZS1mYXZvcml0ZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAud2VhdGhlci13ZWVrbHktY2FyZCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIud2VhdGhlci13ZWVrbHktY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcGVyc3BlY3RpdmUoMTUwMHB4KSByb3RhdGVZKDEwZGVnKTtcbn1cbi53ZWF0aGVyLXdlZWtseS1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHBlcnNwZWN0aXZlKDE1MDBweCkgcm90YXRlWSgxNWRlZyk7XG59XG4ud2VhdGhlci13ZWVrbHktY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLndlYXRoZXItd2Vla2x5LWNhcmQgLmNhcmQtaGVhZGVyIC5sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcjEpO1xufVxuLndlYXRoZXItd2Vla2x5LWNhcmQgLmNhcmQtaGVhZGVyIC5kYXRlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMSk7XG59XG4ud2VhdGhlci13ZWVrbHktY2FyZCAuY2FyZC1oZWFkZXIgLndlYXRoZXItaWNvbiB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi53ZWF0aGVyLXdlZWtseS1jYXJkIC5jYXJkLWJvZHkgLmNhcmQtdGV4dCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuLndlYXRoZXItd2Vla2x5LWNhcmQgLmNhcmQtYm9keSAud2VhdGhlci1pY29uIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY1JTtcbiAgdG9wOiAzMCU7XG59XG4ud2VhdGhlci13ZWVrbHktY2FyZCAuY2FyZC1ib2R5IC5kZWdyZWUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcjUpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDUwcHg7XG59XG4ud2VhdGhlci13ZWVrbHktY2FyZCAuY2FyZC1ib2R5IC5kZWdyZWUubWluIHtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IzKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLndlYXRoZXItd2Vla2x5LWNhcmQgLnN1bW1hcnkge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcjIpO1xufVxuXG4uYnRuLXJlbW92ZS1mYXZvcml0ZSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAud2VhdGhlci13ZWVrbHktY2FyZCB7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICB9XG4gIC53ZWF0aGVyLXdlZWtseS1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('loadItemAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0, opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 300, opacity: 1 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-item',
                templateUrl: './weather-item.component.html',
                styleUrls: ['./weather-item.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('loadItemAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0, opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 300, opacity: 1 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }]; }, { weatherItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], locationData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFavoriteContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeFromFavorite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/weather/weather-week-view/weather-week-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/weather/weather-week-view/weather-week-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WeatherWeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWeekViewComponent", function() { return WeatherWeekViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/components/weather/weather.service.ts");
/* harmony import */ var _favorites_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../favorites/favorites.service */ "./src/app/components/favorites/favorites.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _controls_search_location_search_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../controls/search-location/search-location.component */ "./src/app/controls/search-location/search-location.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../weather-item/weather-item.component */ "./src/app/components/weather/weather-item/weather-item.component.ts");
/* harmony import */ var _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../controls/weather-icon/weather-icon.component */ "./src/app/controls/weather-icon/weather-icon.component.ts");












function WeatherWeekViewComponent_ng_container_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherWeekViewComponent_ng_container_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.setLocationAsFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeatherWeekViewComponent_ng_container_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-weather-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const day_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weatherItem", day_r6);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function WeatherWeekViewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-search-location", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setSelectedLocation", function WeatherWeekViewComponent_ng_container_0_Template_app_search_location_setSelectedLocation_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.getSelectedLocation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeatherWeekViewComponent_ng_container_0_button_5_Template, 3, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, WeatherWeekViewComponent_ng_container_0_ng_container_17_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, "linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(117, 19, 93, 0.6)), url(" + ctx_r0.currentWeatherIcon + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.includedInFavorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedLocation == null ? null : ctx_r0.selectedLocation.LocalizedName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", ctx_r0.selectedLocation == null ? null : ctx_r0.selectedLocation.Country == null ? null : ctx_r0.selectedLocation.Country.LocalizedName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentWeather == null ? null : ctx_r0.currentWeather.weatherDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" now with ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 7, ctx_r0.currentWeather == null ? null : ctx_r0.currentWeather.temperature == null ? null : ctx_r0.currentWeather.temperature.max == null ? null : ctx_r0.currentWeather.temperature.max.Value, "1.0-0"), "\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 10, ctx_r0.weeklyData$));
} }
function WeatherWeekViewComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-weather-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class WeatherWeekViewComponent {
    constructor(weatherService, favoriteService, toastService) {
        this.weatherService = weatherService;
        this.favoriteService = favoriteService;
        this.toastService = toastService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.includedInFavorite = false;
        this.isDataReady = false;
    }
    ngOnInit() {
        this.getDeviceLocation();
    }
    getDeviceLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.weatherService.getLocationKeyByGeoPosition(position.coords.latitude, position.coords.longitude)
                    .subscribe((result) => {
                    this.selectedLocation = result;
                    this.updateLocation(this.selectedLocation);
                    this.isDataReady = true;
                }, error => {
                    this.showToast(error.message, false);
                });
            });
        }
        else {
            this.selectedLocation = this.weatherService.defaultLocation;
        }
    }
    getSelectedLocation(location) {
        this.selectedLocation = location;
        this.updateLocation(location);
    }
    getWeatherForecast(locationKey) {
        this.weeklyData$ = this.weatherService.getWeatherForecast(locationKey);
    }
    getCurrentWeatherByLocation(locationKey) {
        this.weatherService.getCurrentWeatherByLocation(locationKey).subscribe(result => {
            this.currentWeather = result;
            this.currentWeatherIcon = `assets/img/${this.weatherService.getCurrentWeatherIcon(this.currentWeather.weatherIcon)}.svg`;
        }, error => {
            this.showToast(error.message, false);
        });
    }
    setLocationAsFavorite() {
        const success = this.favoriteService.addToFavorites(this.selectedLocation);
        this.includedInFavorite = success;
        const message = success ? this.selectedLocation.LocalizedName + ' added to favorites successfully' : 'Sorry, something went wrong, please try again';
        this.showToast(message, true);
    }
    updateLocation(location) {
        this.getWeatherForecast(location.Key);
        this.getCurrentWeatherByLocation(location.Key);
        this.includedInFavorite = this.favoriteService.checkIfExist(location.Key);
    }
    /////Healper Functions/////
    showToast(message, success) {
        this.toastService.open(message, '', {
            duration: 3000,
            panelClass: success ? ['notif-success'] : ['notif-error']
        });
    }
}
WeatherWeekViewComponent.ɵfac = function WeatherWeekViewComponent_Factory(t) { return new (t || WeatherWeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_favorites_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
WeatherWeekViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherWeekViewComponent, selectors: [["app-weather-week-view"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "row", "location-details-wrapper", "justify-content-center", 3, "ngStyle"], [1, "col-12", "text-center"], [3, "setSelectedLocation"], [1, "col-2", "col-sm-2", "col-md-1", "col-lg-1", "col-xl-1", "text-right"], ["mat-mini-fab", "", "color", "primary", "class", "favorite-button", 3, "click", 4, "ngIf"], [1, "col-10", "col-sm-8", "col-md-8", "col-lg-8", "col-xl-8"], [1, "location-name"], [1, "country"], [1, "weather-description"], [1, "row", "justify-content-center"], [4, "ngFor", "ngForOf"], ["mat-mini-fab", "", "color", "primary", 1, "favorite-button", 3, "click"], [1, "col-10", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-2"], [3, "weatherItem"], [1, "text-center", "loader"], ["svgIcon", "weather", "aria-hidden", "false", 1, "weather-icon"], [1, "text-row-1"]], template: function WeatherWeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeatherWeekViewComponent_ng_container_0_Template, 19, 14, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherWeekViewComponent_ng_container_1_Template, 7, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataReady);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDataReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _controls_search_location_search_location_component__WEBPACK_IMPORTED_MODULE_6__["SearchLocationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _weather_item_weather_item_component__WEBPACK_IMPORTED_MODULE_9__["WeatherItemComponent"], _controls_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_10__["WeatherIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".location-details-wrapper[_ngcontent-%COMP%] {\n  padding: 50px;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.location-details-wrapper[_ngcontent-%COMP%]   .location-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  line-height: normal;\n}\n.location-details-wrapper[_ngcontent-%COMP%]   .location-name[_ngcontent-%COMP%]   .country[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n.location-details-wrapper[_ngcontent-%COMP%]   .weather-description[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2rem;\n  font-weight: bold;\n}\n@media (min-width: 599px) {\n  .search-box-field[_ngcontent-%COMP%] {\n    min-width: 20rem;\n  }\n}\n.loader[_ngcontent-%COMP%]   .weather-icon[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 20%;\n}\n.loader[_ngcontent-%COMP%]   .text-row-1[_ngcontent-%COMP%] {\n  color: var(--text-color2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXItd2Vlay12aWV3L0M6XFxjb2RlXFxoZXJvbG8tdGVzdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcd2VhdGhlclxcd2VhdGhlci13ZWVrLXZpZXdcXHdlYXRoZXItd2Vlay12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGhlci13ZWVrLXZpZXcvd2VhdGhlci13ZWVrLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0FaO0FES0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSFI7QURRQTtFQUNJO0lBQ0ksZ0JBQUE7RUNMTjtBQUNGO0FEVUk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ1JSO0FEVUk7RUFDSSx5QkFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXItd2Vlay12aWV3L3dlYXRoZXItd2Vlay12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2F0aW9uLWRldGFpbHMtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmxvY2F0aW9uLW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHJcblxyXG4gICAgICAgIC5jb3VudHJ5IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndlYXRoZXItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTk5cHgpIHtcclxuICAgIC5zZWFyY2gtYm94LWZpZWxkIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxvYWRlcntcclxuICAgIC53ZWF0aGVyLWljb24ge1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yb3ctMSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IyKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLmxvY2F0aW9uLWRldGFpbHMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvY2F0aW9uLWRldGFpbHMtd3JhcHBlciAubG9jYXRpb24tbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbi5sb2NhdGlvbi1kZXRhaWxzLXdyYXBwZXIgLmxvY2F0aW9uLW5hbWUgLmNvdW50cnkge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubG9jYXRpb24tZGV0YWlscy13cmFwcGVyIC53ZWF0aGVyLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTk5cHgpIHtcbiAgLnNlYXJjaC1ib3gtZmllbGQge1xuICAgIG1pbi13aWR0aDogMjByZW07XG4gIH1cbn1cbi5sb2FkZXIgLndlYXRoZXItaWNvbiB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMjAlO1xufVxuLmxvYWRlciAudGV4dC1yb3ctMSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWeekViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-week-view',
                templateUrl: './weather-week-view.component.html',
                styleUrls: ['./weather-week-view.component.scss']
            }]
    }], function () { return [{ type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }, { type: _favorites_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/weather/weather.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/weather/weather.service.ts ***!
  \*******************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class WeatherService {
    constructor(http) {
        this.http = http;
        this.defaultLocation = {
            Key: 215854,
            LocalizedName: 'Tel Aviv',
            Country: {
                ID: 'IL',
                LocalizedName: 'Israel'
            }
        };
        this.selectedLocationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultLocation);
    }
    getWeatherForecast(locationKey) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey}&metric=true`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => this.convertDailyWeatherToMainModel(response.DailyForecasts)));
    }
    getLocationSuggestion(searchInput) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiUrl}/locations/v1/cities/autocomplete?apikey=${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey}&q=${searchInput}`);
    }
    getCurrentWeatherByLocation(locationKey) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiUrl}/currentconditions/v1/${locationKey}?apikey=${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((currentWeather) => this.convertCurrentWeatherToMainModel(currentWeather[0])));
    }
    getLocationKeyByGeoPosition(lat, lon) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApiUrl}/locations/v1/cities/geoposition/search?apikey=${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey}&q=${lat},${lon}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => this.convertLocationToMainModel(result)));
    }
    convertCurrentWeatherToMainModel(currentWeather) {
        const weatherItem = {
            date: currentWeather.LocalObservationDateTime,
            weatherIcon: currentWeather.WeatherIcon,
            weatherDescription: currentWeather.WeatherText,
            temperature: {
                max: {
                    Value: currentWeather.Temperature.Metric.Value,
                    Unit: currentWeather.Temperature.Metric.Unit,
                    UnitType: currentWeather.Temperature.Metric.UnitType
                },
                min: null
            }
        };
        return weatherItem;
    }
    convertLocationToMainModel(location) {
        const newLocationModel = {
            Key: location.Key,
            LocalizedName: location.LocalizedName,
            Country: {
                ID: location.Country.ID,
                LocalizedName: location.Country.LocalizedName
            }
        };
        return newLocationModel;
    }
    convertDailyWeatherToMainModel(dailyWeatherData) {
        const weatherItem = dailyWeatherData.map(item => ({
            date: item.Date,
            weatherIcon: item.Day.Icon,
            weatherDescription: item.Day.IconPhrase,
            temperature: {
                max: item.Temperature.Maximum,
                min: item.Temperature.Minimum
            }
        }));
        return weatherItem;
    }
    //I've decided to marge some icons
    getCurrentWeatherIcon(weatherIcon) {
        if (weatherIcon <= 5) {
            return 'sunny';
        }
        if (weatherIcon === 6) {
            return 'sunny-cloudy';
        }
        if (weatherIcon <= 11) {
            return 'cloud';
        }
        if (weatherIcon <= 18) {
            return 'rain';
        }
        if (weatherIcon <= 29) {
            return 'snow';
        }
        if (weatherIcon <= 30) {
            return 'sunny';
        }
        if (weatherIcon <= 44) {
            return 'night';
        }
    }
}
WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controls/main-header/main-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/controls/main-header/main-header.component.ts ***!
  \***************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/favorites"]; };
class MainHeaderComponent {
    constructor() {
        this.title = "Nati's Weather";
    }
    ngOnInit() {
    }
}
MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) { return new (t || MainHeaderComponent)(); };
MainHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainHeaderComponent, selectors: [["app-main-header"]], decls: 11, vars: 5, consts: [["color", "primary"], [1, "logo-holder", 3, "routerLink"], ["src", "assets/img/logo.png"], ["href", "#"], [1, "spacer"], ["mat-button", "", 3, "routerLink"]], template: function MainHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Favorites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--text-color1);\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.logo-holder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.logo-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45px;\n}\n\n.logo-holder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvbWFpbi1oZWFkZXIvQzpcXGNvZGVcXGhlcm9sby10ZXN0L3NyY1xcYXBwXFxjb250cm9sc1xcbWFpbi1oZWFkZXJcXG1haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250cm9scy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBSTtFQUNJLFlBQUE7QUNFUjs7QURDSTtFQUNJLG1CQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb250cm9scy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMSk7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmxvZ28taG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG59IiwiLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yMSk7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmxvZ28taG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ28taG9sZGVyIGltZyB7XG4gIGhlaWdodDogNDVweDtcbn1cbi5sb2dvLWhvbGRlciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-header',
                templateUrl: './main-header.component.html',
                styleUrls: ['./main-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/controls/search-location/search-location.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/controls/search-location/search-location.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLocationComponent", function() { return SearchLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_components_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/weather/weather.service */ "./src/app/components/weather/weather.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");












function SearchLocationComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please type with English letter only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchLocationComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r29.LocalizedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" | ", option_r29.Country.LocalizedName, "");
} }
class SearchLocationComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.setSelectedLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ngOnInit() {
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400))
            .subscribe((input) => {
            if (this.searchControl.valid && input.length >= 2) {
                this.suggestedLocationList$ = this.weatherService.getLocationSuggestion(input);
            }
        });
    }
    displayFn(location) {
        if (location) {
            return location.LocalizedName;
        }
    }
    selectLocation(location) {
        this.setSelectedLocation.emit(location);
    }
}
SearchLocationComponent.ɵfac = function SearchLocationComponent_Factory(t) { return new (t || SearchLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"])); };
SearchLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchLocationComponent, selectors: [["app-search-location"]], outputs: { setSelectedLocation: "setSelectedLocation" }, decls: 14, vars: 7, consts: [[1, "row"], [1, "col-12", "search-box-wrapper"], ["appearance", "fill", 1, "search-box-field"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "select a city", "aria-label", "Number", "oninput", "this.value=this.value.replace(/[^a-zA-Z ]/g,'');", 3, "matAutocomplete", "formControl"], [4, "ngIf"], ["autoActiveFirstOption", "", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "location-name"], [1, "text-muted"]], template: function SearchLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search Weather By Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchLocationComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-autocomplete", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function SearchLocationComponent_Template_mat_autocomplete_optionSelected_9_listener($event) { return ctx.selectLocation($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchLocationComponent_mat_option_12_Template, 5, 3, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r27)("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 5, ctx.suggestedLocationList$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".search-box-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.search-box-wrapper[_ngcontent-%COMP%]   .location-name[_ngcontent-%COMP%] {\n  color: var(--text-color5);\n}\n@media (min-width: 599px) {\n  .search-box-field[_ngcontent-%COMP%] {\n    min-width: 20rem;\n  }\n}\n .mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvc2VhcmNoLWxvY2F0aW9uL0M6XFxjb2RlXFxoZXJvbG8tdGVzdC9zcmNcXGFwcFxcY29udHJvbHNcXHNlYXJjaC1sb2NhdGlvblxcc2VhcmNoLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250cm9scy9zZWFyY2gtbG9jYXRpb24vc2VhcmNoLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7QUNDUjtBRElBO0VBQ0k7SUFDSSxnQkFBQTtFQ0ROO0FBQ0Y7QURJQTtFQUNJLHFEQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb250cm9scy9zZWFyY2gtbG9jYXRpb24vc2VhcmNoLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gtd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmxvY2F0aW9uLW5hbWUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTk5cHgpIHtcclxuICAgIC5zZWFyY2gtYm94LWZpZWxkIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC40KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIuc2VhcmNoLWJveC13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNlYXJjaC1ib3gtd3JhcHBlciAubG9jYXRpb24tbmFtZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yNSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1OTlweCkge1xuICAuc2VhcmNoLWJveC1maWVsZCB7XG4gICAgbWluLXdpZHRoOiAyMHJlbTtcbiAgfVxufVxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-location',
                templateUrl: './search-location.component.html',
                styleUrls: ['./search-location.component.scss']
            }]
    }], function () { return [{ type: src_app_components_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }]; }, { setSelectedLocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/controls/weather-icon/weather-icon.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/controls/weather-icon/weather-icon.component.ts ***!
  \*****************************************************************/
/*! exports provided: WeatherIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherIconComponent", function() { return WeatherIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




class WeatherIconComponent {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon("1", sanitizer.bypassSecurityTrustResourceUrl('assets/icons/day.svg'));
        iconRegistry.addSvgIcon('2', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/day.svg'));
        iconRegistry.addSvgIcon('3', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy-day-2.svg'));
        iconRegistry.addSvgIcon('4', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy-day-3.svg'));
        iconRegistry.addSvgIcon('5', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy-day-3.svg'));
        iconRegistry.addSvgIcon('6', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('7', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('8', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('9', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('11', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('12', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/rainy-7.svg'));
        iconRegistry.addSvgIcon('13', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/rainy-1.svg'));
        iconRegistry.addSvgIcon('14', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/rainy-1.svg'));
        iconRegistry.addSvgIcon('15', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thunder.svg'));
        iconRegistry.addSvgIcon('16', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/rainy-1.svg'));
        iconRegistry.addSvgIcon('17', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/rainy-1.svg'));
        iconRegistry.addSvgIcon('18', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/rainy-7.svg'));
        iconRegistry.addSvgIcon('19', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('20', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy-day-1.svg'));
        iconRegistry.addSvgIcon('22', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/snowy-6.svg'));
        iconRegistry.addSvgIcon('25', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/snowy-4.svg'));
        iconRegistry.addSvgIcon('26', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/snowy-4.svg'));
        iconRegistry.addSvgIcon('30', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/night.svg'));
        iconRegistry.addSvgIcon('31', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/night.svg'));
        iconRegistry.addSvgIcon('32', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/night.svg'));
        iconRegistry.addSvgIcon('33', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/night.svg'));
        iconRegistry.addSvgIcon('34', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/night.svg'));
        iconRegistry.addSvgIcon('35', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('36', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('37', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloudy.svg'));
        iconRegistry.addSvgIcon('weather', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/weather.svg'));
    }
    ngOnInit() {
    }
}
WeatherIconComponent.ɵfac = function WeatherIconComponent_Factory(t) { return new (t || WeatherIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
WeatherIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherIconComponent, selectors: [["app-weather-icon"]], decls: 0, vars: 0, template: function WeatherIconComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL3dlYXRoZXItaWNvbi93ZWF0aGVyLWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-icon',
                templateUrl: './weather-icon.component.html',
                styleUrls: ['./weather-icon.component.scss']
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/providers/material/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/providers/material/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");












class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
        ],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
                ],
                exports: [
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseApiUrl: 'https://dataservice.accuweather.com',
    apiKey: 'KZFxfgG0PNcS7lBS6K49CfCHn0rPNgJG'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\code\herolo-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map