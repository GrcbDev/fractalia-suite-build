(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-my-profile-my-profile-module"],{

/***/ "394V":
/*!*********************************************************!*\
  !*** ./src/app/modules/my-profile/my-profile.module.ts ***!
  \*********************************************************/
/*! exports provided: MyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile.component */ "aINz");
/* harmony import */ var _my_profile_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile.routing */ "og1R");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "JY65");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var src_app_components_common_password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/common/password-strength/password-strength.module */ "NGje");










var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyProfileModule });
    MyProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyProfileModule_Factory(t) { return new (t || MyProfileModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _my_profile_routing__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"],
                src_app_components_common_password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_8__["PasswordStrenthModule"]
            ]] });
    return MyProfileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyProfileModule, { declarations: [_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _my_profile_routing__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"],
        src_app_components_common_password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_8__["PasswordStrenthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    _my_profile_routing__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"],
                    src_app_components_common_password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_8__["PasswordStrenthModule"]
                ],
                declarations: [_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aINz":
/*!************************************************************!*\
  !*** ./src/app/modules/my-profile/my-profile.component.ts ***!
  \************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
    }
    MyProfileComponent.prototype.ngOnInit = function () {
    };
    MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(); };
    MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 2, vars: 0, template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " my-profile works!\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return MyProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-profile',
                templateUrl: './my-profile.component.html',
                styleUrls: ['./my-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "og1R":
/*!**********************************************************!*\
  !*** ./src/app/modules/my-profile/my-profile.routing.ts ***!
  \**********************************************************/
/*! exports provided: MyProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileRoutingModule", function() { return MyProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "JY65");


// import { MyProfileComponent } from './my-profile.component';



var routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
    },
];
var MyProfileRoutingModule = /** @class */ (function () {
    function MyProfileRoutingModule() {
    }
    MyProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyProfileRoutingModule });
    MyProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyProfileRoutingModule_Factory(t) { return new (t || MyProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MyProfileRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-my-profile-my-profile-module.js.map