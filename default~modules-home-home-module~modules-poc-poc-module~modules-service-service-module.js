(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-home-home-module~modules-poc-poc-module~modules-service-service-module"],{

/***/ "/zpU":
/*!********************************************************!*\
  !*** ./src/app/modules/poc/shared/famiy-unit-const.ts ***!
  \********************************************************/
/*! exports provided: FAMILY_UNIT_MAX_PROFILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAMILY_UNIT_MAX_PROFILES", function() { return FAMILY_UNIT_MAX_PROFILES; });
var FAMILY_UNIT_MAX_PROFILES = 5;


/***/ }),

/***/ "5SoQ":
/*!***********************************************************!*\
  !*** ./src/app/modules/poc/shared/family-unit.service.ts ***!
  \***********************************************************/
/*! exports provided: FamilyUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyUnitService", function() { return FamilyUnitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var FamilyUnitService = /** @class */ (function () {
    function FamilyUnitService() {
        this.familyUnitChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.deleteCard$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.deleteIdentity$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    FamilyUnitService.prototype.init = function () {
        this.familyUnitChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };
    FamilyUnitService.prototype.emitNotification = function (value) {
        this.familyUnitChange$.next(value);
    };
    FamilyUnitService.prototype.clear = function () {
        this.familyUnitChange$.unsubscribe();
    };
    FamilyUnitService.prototype.emitDeleteCard = function (value) {
        this.deleteCard$.next(value);
    };
    FamilyUnitService.prototype.cleanCardListener = function () {
        this.deleteCard$.unsubscribe();
    };
    FamilyUnitService.prototype.emitDeleteIdentity = function (value) {
        this.deleteIdentity$.next(value);
    };
    FamilyUnitService.prototype.cleanIdentityListener = function () {
        this.deleteIdentity$.unsubscribe();
    };
    FamilyUnitService.ɵfac = function FamilyUnitService_Factory(t) { return new (t || FamilyUnitService)(); };
    FamilyUnitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FamilyUnitService, factory: FamilyUnitService.ɵfac, providedIn: 'root' });
    return FamilyUnitService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FamilyUnitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BgmQ":
/*!******************************************************************!*\
  !*** ./src/app/modules/poc/add-profile/add-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: AddProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfileComponent", function() { return AddProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal-ref */ "UdKV");
/* harmony import */ var src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/reactiveform-service */ "cU2l");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/ImageUtils */ "1N2o");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/family-unit.service */ "5SoQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/nz-spinner/nz-spinner */ "b+Yv");






















function AddProfileComponent_ng_container_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "CAMPO_REQUERIDO"), " ");
} }
function AddProfileComponent_ng_container_0_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "CAMPO_REQUERIDO"), " ");
} }
function AddProfileComponent_ng_container_0_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "CAMPO_REQUERIDO"), " ");
} }
function AddProfileComponent_ng_container_0_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FAMILY_UNIT.BTN_CREATE"));
} }
function AddProfileComponent_ng_container_0_nz_spinner_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spinner");
} }
function AddProfileComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProfileComponent_ng_container_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProfileComponent_ng_container_0_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onUploadImagen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProfileComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r3.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddProfileComponent_ng_container_0_div_28_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddProfileComponent_ng_container_0_div_34_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddProfileComponent_ng_container_0_div_40_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProfileComponent_ng_container_0_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.saveAddProfileForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AddProfileComponent_ng_container_0_span_57_Template, 3, 3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AddProfileComponent_ng_container_0_nz_spinner_58_Template, 1, 0, "nz-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.addUserProfileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, "FAMILY_UNIT.TITLE_ADD"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.sanitizer.bypassSecurityTrustUrl(ctx_r0.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "FAMILY_UNIT.PROFILE_PICTURE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 22, "FAMILY_UNIT.ACTION_DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 24, "FAMILY_UNIT.REQUIRED_FIELDS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 26, "FAMILY_UNIT.NAME"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isInputNameValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 28, "COMP_USER.SURNAME"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isInputSurNameValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 30, "FAMILY_UNIT.EMAIL"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isInputEmailValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 32, "FAMILY_UNIT.GENDER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 34, "FAMILY_UNIT.MALE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 36, "FAMILY_UNIT.FEMALE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 38, "FAMILY_UNIT.NO_ANSWER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
var _c0 = function (a0) { return { userName: a0 }; };
function AddProfileComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProfileComponent_ng_template_1_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProfileComponent_ng_template_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "FAMILY_UNIT.RESULT_TITLE_CREATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, "FAMILY_UNIT.RESULT_INFO_CREATE", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r2.profile.name)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "COMP_USER.SUPPORT_NOTIFICATION.CLOSE"), " ");
} }
var AddProfileComponent = /** @class */ (function () {
    function AddProfileComponent(modalRef, userService, sanitizer, translate, messageService, formService, familyUnitService) {
        this.modalRef = modalRef;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.translate = translate;
        this.messageService = messageService;
        this.formService = formService;
        this.familyUnitService = familyUnitService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].STATIC_CONTENT;
        this.loading = false;
        this.image = this.staticContentUrl + "img/add-user.png";
        // timeZoneList = TIMEZONELIST;
        this.addProfileSuccessForm = false;
        this.profile = {
            name: 'Julio'
        };
    }
    AddProfileComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AddProfileComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    AddProfileComponent.prototype.createForm = function () {
        this.addUserProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null),
        });
    };
    Object.defineProperty(AddProfileComponent.prototype, "inputName", {
        get: function () {
            return this.addUserProfileForm.get("name");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddProfileComponent.prototype, "isInputNameValid", {
        get: function () {
            var _a;
            return ((_a = this.inputName) === null || _a === void 0 ? void 0 : _a.touched) && this.inputName.invalid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddProfileComponent.prototype, "inputSurName", {
        get: function () {
            return this.addUserProfileForm.get("surname");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddProfileComponent.prototype, "isInputSurNameValid", {
        get: function () {
            var _a;
            return ((_a = this.inputSurName) === null || _a === void 0 ? void 0 : _a.touched) && this.inputSurName.invalid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddProfileComponent.prototype, "inputEmail", {
        get: function () {
            return this.addUserProfileForm.get("email");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddProfileComponent.prototype, "isInputEmailValid", {
        get: function () {
            var _a;
            return ((_a = this.inputEmail) === null || _a === void 0 ? void 0 : _a.touched) && this.inputEmail.invalid;
        },
        enumerable: false,
        configurable: true
    });
    AddProfileComponent.prototype.onUploadImagen = function ($event) {
        var _this = this;
        var target = $event.target;
        if (target.files != null) {
            if (target.files.length > 0) {
                var file = target.files[0];
                var value = target.value.toLowerCase();
                var ext = value.split(".").pop();
                var name_1 = target.name.toLowerCase();
                var exts = ["png", "jpg", "jpeg", "gif"];
                if (name_1 == "favicon") {
                    exts = ["png", "jpg", "jpeg", "gif", "ico"];
                }
                if (exts.indexOf(ext) != -1) {
                    src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_8__["ImageUtils"].getBase64(file).then(function (result) {
                        src_app_utils_ImageUtils__WEBPACK_IMPORTED_MODULE_8__["ImageUtils"].compressImage(result, 100, 100).then(function (compressed) {
                            _this.image = compressed;
                            _this.imagenToUpload = compressed;
                        });
                    });
                }
                else {
                    this.translate
                        .get("ONLY_IMAGES_ERROR")
                        .subscribe(function (res) { return _this.messageService.add(res, "error"); });
                }
            }
        }
    };
    AddProfileComponent.prototype.saveAddProfileForm = function () {
        var _this = this;
        this.formService.markFormGroupTouched(this.addUserProfileForm);
        if (this.addUserProfileForm.valid) {
            this.loading = true;
            var formValues = this.addUserProfileForm.getRawValue();
            this.profile = {
                name: formValues.name,
                surname: formValues.surname,
                email: formValues.email,
                photo: this.imagenToUpload,
                // timezone: formValues.timezone,
                gender: formValues.gender,
            };
            this.userService.addUserProfile(this.profile)
                .then(function (resp) {
                _this.familyUnitService.emitNotification(true);
                _this.loading = false;
                _this.addProfileSuccessForm = true;
                // this.closeModal();
            }, function (error) {
                console.log("error: ", error);
            });
        }
    };
    AddProfileComponent.ɵfac = function AddProfileComponent_Factory(t) { return new (t || AddProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_4__["CDKModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_10__["FamilyUnitService"])); };
    AddProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProfileComponent, selectors: [["app-add-profile"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["addProfileSuccess", ""], [1, "d-flex", "w-100", "justify-content-end"], [1, "icon-close", "ds-fs-14", "ds-cur-pointer", 3, "click"], [1, "d-flex", "flex-column", 3, "formGroup"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-24p"], [1, "d-flex", "align-items-center", "modal-width-fix"], [1, "photo"], ["name", "favicon", "type", "file", "accept", "image/x-png,image/jpeg,image/gif,image/x-icon", 2, "display", "none", 3, "change"], ["profileImage", ""], ["type", "button", 1, "btn", "bback", 3, "click"], ["width", "64", "height", "64", 2, "width", "64px", "height", "64px", "border-radius", "50%", 3, "src"], [1, "text"], [1, "title"], [1, "subtitle"], [1, "ds-caption", "ds-r-regular", "ds-c-secondary", "ds-mb-12p"], [1, "d-flex", "flex-column", "ds-mb-12p"], [1, "ds-label-control"], ["type", "text", "formControlName", "name", 1, "ds-control"], ["class", "loginError semantic-danger fs-12 lh-14 d-inline-flex align-items-center", 4, "ngIf"], ["type", "text", "formControlName", "surname", 1, "ds-control"], ["type", "text", "formControlName", "email", 1, "ds-control"], ["formControlName", "gender", 1, "ds-control"], ["value", "Male"], ["value", "Female"], ["value", "NoAnswer"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "loginError", "semantic-danger", "fs-12", "lh-14", "d-inline-flex", "align-items-center"], [1, "d-flex", "flex-column"], [1, "ds-modal-header", "ds-mb-32p", "justify-content-end"], [1, "icon-close", 3, "click"], [1, "ds-t-center", "d-flex", "flex-column", "ds-mb-32p"], [1, "icon-green-check", "fa-6x", "ds-c-success", "ds-mb-32p"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", 3, "innerHTML"]], template: function AddProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddProfileComponent_ng_container_0_Template, 59, 40, "ng-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProfileComponent_ng_template_1_Template, 14, 12, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addProfileSuccessForm)("ngIfElse", _r1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_12__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".add-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 64px;\n  border: solid 2px #bcc4d4;\n  width: 64px;\n  color: #bcc4d4;\n  border-radius: 64px;\n  cursor: pointer;\n}\n\n.modal-head-container[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.close-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n\n.modal-width-fix[_ngcontent-%COMP%] {\n  width: 482px;\n}\n\n@media only screen and (max-width: 767px) {\n  .modal-width-fix[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n}\n\np.title[_ngcontent-%COMP%] {\n  color: #34383f;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wb2MvYWRkLXByb2ZpbGUvYWRkLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9jL2FkZC1wcm9maWxlL2FkZC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICNiY2M0ZDQ7XG4gIHdpZHRoOiA2NHB4O1xuICBjb2xvcjogI2JjYzRkNDtcbiAgYm9yZGVyLXJhZGl1czogNjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtaGVhZC1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuXG4uY2xvc2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5tb2RhbC13aWR0aC1maXgge1xuICB3aWR0aDogNDgycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1vZGFsLXdpZHRoLWZpeCB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICB9XG59XG5cbnAudGl0bGUge1xuICBjb2xvcjogIzM0MzgzZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"] });
    return AddProfileComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-profile',
                templateUrl: './add-profile.component.html',
                styleUrls: ['./add-profile.component.scss']
            }]
    }], function () { return [{ type: src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_4__["CDKModalRef"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }, { type: src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormService"] }, { type: _shared_family_unit_service__WEBPACK_IMPORTED_MODULE_10__["FamilyUnitService"] }]; }, null); })();


/***/ }),

/***/ "CBJ7":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/service-status-modal/low-level-ssm/low-level-ssm.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LowLevelSsmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowLevelSsmComponent", function() { return LowLevelSsmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



var LowLevelSsmComponent = /** @class */ (function () {
    function LowLevelSsmComponent() {
    }
    LowLevelSsmComponent.prototype.ngOnInit = function () {
    };
    LowLevelSsmComponent.ɵfac = function LowLevelSsmComponent_Factory(t) { return new (t || LowLevelSsmComponent)(); };
    LowLevelSsmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LowLevelSsmComponent, selectors: [["app-low-level-ssm"]], decls: 14, vars: 9, consts: [[1, "d-flex", "justify-content-center", "text-center", "align-items-center", "flex-column"], [1, "icon-warning", "fa-7x", "ds-c-danger", "ds-mb-32p"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-c-black", "ds-r-regular", "ds-mb-24p"], [1, "jumbotron-item", "orange"], [1, "d-flex", "ds-fs-24", "justify-content-end"], [1, "icon-exclam", "ds-fs-16", "ds-c-orange"]], template: function LowLevelSsmComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "COMP_SERVICE_STATUS.FOLLOW_RECOMMENDATIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "COMP_SERVICE_STATUS.LEVEL_PROTECTION_LOW"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "COMP_SERVICE_STATUS.CHECK_STATUS_BAR"), " ");
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXJ2aWNlc3Mtc3RhdHVzL3NlcnZpY2Utc3RhdHVzLW1vZGFsL2xvdy1sZXZlbC1zc20vbG93LWxldmVsLXNzbS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return LowLevelSsmComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LowLevelSsmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-low-level-ssm',
                templateUrl: './low-level-ssm.component.html',
                styleUrls: ['./low-level-ssm.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CpQq":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/home/identity-theft-protection/itp-warning-modal/itp-warning-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ItpWarningModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItpWarningModalComponent", function() { return ItpWarningModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_monitored_identities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/monitored-identities.service */ "ozvF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function ItpWarningModalComponent_section_2_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var breach_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breach_r3.name);
} }
function ItpWarningModalComponent_section_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var breach_r4 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.staticContentUrl + "img/breach.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", breach_r4.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var _c0 = function (a0) { return { email: a0 }; };
function ItpWarningModalComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ItpWarningModalComponent_section_2_li_14_Template, 3, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ItpWarningModalComponent_section_2_div_19_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItpWarningModalComponent_section_2_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, "CYBERALARM.IDENTITIES.BREACH_MODAL.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 10, "CYBERALARM.IDENTITIES.BREACH_MODAL.TEXT1", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx_r0.breachedIdentity.identity)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, "CYBERALARM.IDENTITIES.BREACH_MODAL.TEXT2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentBreach);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 15, "CYBERALARM.IDENTITIES.BREACH_MODAL.TEXT3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currentBreach);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 17, "CYBERALARM.IDENTITIES.BREACH_MODAL.TEXT4"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 19, "WIZARD.BTNS.CLOSE"), " ");
} }
var ItpWarningModalComponent = /** @class */ (function () {
    function ItpWarningModalComponent(
    // private modalRef: CDKModalRef,
    activeModal, monitoredIdentitiesService) {
        this.activeModal = activeModal;
        this.monitoredIdentitiesService = monitoredIdentitiesService;
        this.currentBreach = [];
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].STATIC_CONTENT;
    }
    ItpWarningModalComponent.prototype.ngOnInit = function () {
        this.breachedIdentity = this.data;
        this.getIdentityBreach();
    };
    ItpWarningModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
        // this.modalRef.close();
    };
    ItpWarningModalComponent.prototype.getIdentityBreach = function () {
        var _this = this;
        this.loading = true;
        this.monitoredIdentitiesService.getIdentityBreach(this.breachedIdentity.identityId).then(function (result) {
            if (result.length > 0) {
                _this.currentBreach = result.map(function (x) { return x; });
            }
            else {
                _this.currentBreach = [{ monitoredIdentityId: -1, domain: "", name: "", description: "", detectionDate: "" }];
            }
            _this.loading = false;
        });
    };
    ItpWarningModalComponent.ɵfac = function ItpWarningModalComponent_Factory(t) { return new (t || ItpWarningModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_monitored_identities_service__WEBPACK_IMPORTED_MODULE_2__["MonitoredIdentitiesService"])); };
    ItpWarningModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItpWarningModalComponent, selectors: [["app-itp-warning-modal"]], inputs: { data: "data" }, decls: 3, vars: 1, consts: [[1, "d-flex", "ds-mb-32p", "justify-content-end", "ds-pt-24p", "ds-pr-24p"], [1, "icon-close", 3, "click"], ["class", "row mt-2 mr-4 ml-4 mb-4", 4, "ngIf"], [1, "row", "mt-2", "mr-4", "ml-4", "mb-4"], [1, "col-sm-12", "pl-0", "pr-0", "d-flex", "justify-content-center"], [1, "new-modal-img", "mb-4", "mt-0", "fs-78", "icon-warning", "semantic-danger"], [1, "col-sm-12", "pl-0", "pr-0", "mb-2", "d-flex", "justify-content-center"], [1, "wizard-modal-title", "fs-20", "lh-24", "neutral-black"], [1, "wizard-modal-text", "neutral-black", "fs-16", "lh-19", 3, "innerHTML"], [1, "col-sm-12", "pl-0", "pr-0", "d-flex", "flex-column", "justify-content-center"], [1, "wizard-modal-text", "neutral-black", "fs-16", "lh-19", "mb-0"], ["class", "wizard-modal-text neutral-black mt-0 mb-0 fs-16 lh-19", 4, "ngFor", "ngForOf"], [1, "wizard-modal-text", "neutral-black", "mt-3", "fs-16", "lh-19"], ["class", "breach-info mb-3 d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "wizard-modal-text", "neutral-black", "fs-16", "lh-19"], [1, "col-sm-12", "mt-3", "pl-0", "pr-0", "justify-content-end", "d-flex"], [1, "btn", "btn-primary", "wizard-modal-btn", 3, "click"], [1, "text-uppercase"], [1, "wizard-modal-text", "neutral-black", "mt-0", "mb-0", "fs-16", "lh-19"], [1, "breach-info", "mb-3", "d-flex", "justify-content-between"], ["alt", "", 3, "src"], [1, "neutral-black", "fs-14", "lh-16", "mb-0", 3, "innerHTML"]], template: function ItpWarningModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItpWarningModalComponent_Template_i_click_1_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItpWarningModalComponent_section_2_Template, 29, 23, "section", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breachedIdentity);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9pZGVudGl0eS10aGVmdC1wcm90ZWN0aW9uL2l0cC13YXJuaW5nLW1vZGFsL2l0cC13YXJuaW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ItpWarningModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItpWarningModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-itp-warning-modal',
                templateUrl: './itp-warning-modal.component.html',
                styleUrls: ['./itp-warning-modal.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: src_app_services_monitored_identities_service__WEBPACK_IMPORTED_MODULE_2__["MonitoredIdentitiesService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "DdhC":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/servicess-status.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ServicessStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicessStatusComponent", function() { return ServicessStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal.service */ "WDzv");
/* harmony import */ var _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sidebar-menu.service */ "7MbT");
/* harmony import */ var _service_status_modal_service_status_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-status-modal/service-status-modal.component */ "gqpB");
/* harmony import */ var _service_status_modal_shared_service_status_level__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service-status-modal/shared/service-status-level */ "yBZ4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/tooltip/tooltip.directive */ "OZ9l");

















var _c0 = ["carrouselContainer"];
var _c1 = ["carrousel"];
var _c2 = ["innerCarrousel"];
var _c3 = ["prevMove"];
var _c4 = ["nextMove"];
function ServicessStatusComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicessStatusComponent_div_0_div_1_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.openStatusServiceModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "COMP_SERVICE_STATUS.SERVICES_STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r1.jumbotronData.levelProtectionConfig.levelClassCss, " cursor ml-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.jumbotronData.levelProtectionConfig.iconConfig);
} }
function ServicessStatusComponent_div_0_ng_container_3_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicessStatusComponent_div_0_ng_container_3_ng_container_18_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); var item_r13 = ctx.$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.goToService(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("jumbotron-item ", item_r13.borderClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltip", item_r13.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r13.serviceIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("ds-fs-16 ", item_r13.iconClass, " ", item_r13.colorClass, " ");
} }
function ServicessStatusComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicessStatusComponent_div_0_ng_container_3_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.openStatusServiceModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ServicessStatusComponent_div_0_ng_container_3_Template_a_mousedown_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onLeftMove(); })("mouseup", function ServicessStatusComponent_div_0_ng_container_3_Template_a_mouseup_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onFinishMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ServicessStatusComponent_div_0_ng_container_3_ng_container_18_Template, 5, 11, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ServicessStatusComponent_div_0_ng_container_3_Template_a_mousedown_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.onRightMove(); })("mouseup", function ServicessStatusComponent_div_0_ng_container_3_Template_a_mouseup_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.onFinishMove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "COMP_SERVICE_STATUS.PROTECTION_LEVEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ds-h2 ds-m-bold ", ctx_r2.jumbotronData.levelProtectionConfig.levelClassCss, " cursor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.jumbotronData.levelProtectionConfig.translatedText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.jumbotronData.levelProtectionConfig.iconConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.jumbotronData.services);
} }
function ServicessStatusComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicessStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicessStatusComponent_div_0_div_1_Template, 6, 9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServicessStatusComponent_div_0_ng_container_3_Template, 22, 11, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ServicessStatusComponent_div_0_ng_template_4_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.jumbotronData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isloading);
} }
var ServicessStatusComponent = /** @class */ (function () {
    function ServicessStatusComponent(cdkModalService, modalService, sidebarServices, router, translate) {
        this.cdkModalService = cdkModalService;
        this.modalService = modalService;
        this.sidebarServices = sidebarServices;
        this.router = router;
        this.translate = translate;
        this.timeToMove = 20;
        this.initCarrousel = false;
        this.oneCardWith = 80;
        this.afterViewInit = false;
        this.maxAvailableSpace = 540;
        this.isloading = true;
        this.showJumbotrom = false;
        this.transform = 0;
        this.initialPosition = null;
        this.finalized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ServicessStatusComponent.prototype, "carrouselContainerContent", {
        set: function (content) {
            if (content) {
                this.carrouselContainer = content;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicessStatusComponent.prototype, "carrouselContent", {
        set: function (content) {
            if (content) {
                this.carrousel = content;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicessStatusComponent.prototype, "innerCarrouselContent", {
        set: function (content) {
            if (content) {
                this.innerCarrousel = content;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicessStatusComponent.prototype, "prevMoveContent", {
        set: function (content) {
            if (content) {
                this.prevMove = content;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicessStatusComponent.prototype, "nextMoveContent", {
        set: function (content) {
            if (content) {
                this.nextMove = content;
            }
        },
        enumerable: false,
        configurable: true
    });
    ServicessStatusComponent.prototype.ngOnInit = function () {
        this.loadJumbotronData();
        this.cleanEventListener();
        this.watchRefreshJumbotrom();
    };
    ServicessStatusComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        window.addEventListener("resize", function (e) {
            _this.availableSpaceCalculate();
        });
    };
    ServicessStatusComponent.prototype.availableSpaceCalculate = function () {
        if (this.carrousel && this.carrousel.nativeElement) {
            var availableSpace = this.carrousel.nativeElement.offsetWidth - 50;
            var spaceTotal = this.oneCardWith * this.jumbotronData.services.length;
            if (spaceTotal < availableSpace) {
                this.initCarrousel = false;
                this.prevMove.nativeElement.style.display = 'none';
                this.nextMove.nativeElement.style.display = 'none';
                this.carrouselContainer.nativeElement.style.borderLeft = 'none';
                this.innerCarrousel.nativeElement.style.transform = "translateX(0px)";
            }
            else {
                this.initCarrousel = true;
                if (document.body.clientWidth <= 751) {
                    this.prevMove.nativeElement.style.display = 'none';
                    this.nextMove.nativeElement.style.display = 'none';
                    this.carrouselContainer.nativeElement.style.borderLeft = 'none';
                    this.innerCarrousel.nativeElement.style.transform = "translateX(0px)";
                }
                else {
                    this.carrouselContainer.nativeElement.style.borderLeft = '1px solid #BCC4D4';
                    this.prevMove.nativeElement.style.display = 'block';
                    this.nextMove.nativeElement.style.display = 'block';
                    this.carrousel.nativeElement.style.cursor = 'default';
                    this.innerCarrousel.nativeElement.style.transform = "translateX(0px)";
                    // this.innerCarrousel.nativeElement.style.left = `0px`;
                }
            }
        }
    };
    ServicessStatusComponent.prototype.cleanEventListener = function () {
        if (window.PointerEvent) {
            window.removeEventListener('pointerdown', null);
            window.removeEventListener('pointermove', null);
            window.removeEventListener('pointerup', null);
        }
        else {
            window.removeEventListener('touchdown', null);
            window.removeEventListener('touchmove', null);
            window.removeEventListener('touchup', null);
            window.removeEventListener('mousedown', null);
            window.removeEventListener('mousemove', null);
            window.removeEventListener('mouseup', null);
        }
        if (this.carrousel) {
            this.carrousel.nativeElement.removeEventListener("mouseup", null);
            this.carrousel.nativeElement.style.cursor = 'default';
        }
    };
    ServicessStatusComponent.prototype.initCarrouselEvents = function () {
        var _this = this;
        if (this.carrousel && this.carrousel.nativeElement) {
            if (window.PointerEvent) {
                this.carrousel.nativeElement.addEventListener('pointerdown', this.gestureStart2.bind(this));
                this.carrousel.nativeElement.addEventListener('pointermove', this.gestureMove2.bind(this));
                this.carrousel.nativeElement.addEventListener('pointerup', this.gestureEnd.bind(this));
            }
            else {
                this.carrousel.nativeElement.addEventListener('touchdown', this.gestureStart2.bind(this));
                this.carrousel.nativeElement.addEventListener('touchmove', this.gestureMove2.bind(this));
                this.carrousel.nativeElement.addEventListener('touchup', this.gestureEnd.bind(this));
                this.carrousel.nativeElement.addEventListener('mousedown', this.gestureStart2.bind(this));
                this.carrousel.nativeElement.addEventListener('mousemove', this.gestureMove2.bind(this));
                this.carrousel.nativeElement.addEventListener('mouseup', this.gestureEnd.bind(this));
            }
            this.carrousel.nativeElement.addEventListener('mouseup', function (e) {
                if (!_this.initCarrousel)
                    return;
                _this.carrousel.nativeElement.style.cursor = 'grab';
            });
        }
    };
    ServicessStatusComponent.prototype.gestureStart2 = function (e) {
        if (!this.initCarrousel)
            return;
        this.pressed = true;
        this.initialPosition = e.pageX;
        var transformMatrix = window.getComputedStyle(this.innerCarrousel.nativeElement).getPropertyValue('transform');
        if (transformMatrix !== 'none') {
            this.transform = parseInt(transformMatrix.split(',')[4].trim());
        }
    };
    ServicessStatusComponent.prototype.gestureMove2 = function (e) {
        if (!this.initCarrousel)
            return;
        if (!this.pressed)
            return;
        e.preventDefault();
        var currentPosition = e.pageX;
        var diff = currentPosition - this.initialPosition;
        this.innerCarrousel.nativeElement.style.transform = "translateX(" + (this.transform + diff) + "px)";
        this.checkboundary2();
    };
    ServicessStatusComponent.prototype.gestureStart = function (e) {
        if (!this.initCarrousel)
            return;
        this.pressed = true;
        this.startx = e.offsetX - this.innerCarrousel.nativeElement.offsetLeft;
        // this.carrousel.nativeElement.style.cursor = 'grabbing';
    };
    ServicessStatusComponent.prototype.gestureMove = function (e) {
        if (!this.initCarrousel)
            return;
        if (!this.pressed)
            return;
        e.preventDefault();
        var x = e.offsetX;
        this.innerCarrousel.nativeElement.style.left = x - this.startx + "px";
        this.checkboundary();
    };
    ServicessStatusComponent.prototype.gestureEnd = function (e) {
        if (!this.initCarrousel)
            return;
        this.pressed = false;
    };
    ServicessStatusComponent.prototype.checkboundary = function () {
        var outer = this.carrousel.nativeElement.getBoundingClientRect();
        var inner = this.innerCarrousel.nativeElement.getBoundingClientRect();
        if (parseInt(this.innerCarrousel.nativeElement.style.left) > 0) {
            this.innerCarrousel.nativeElement.style.left = '0px';
        }
        else if (inner.right < outer.right) {
            this.innerCarrousel.nativeElement.style.left = "-" + (inner.width - outer.width) + "px";
        }
    };
    ServicessStatusComponent.prototype.moveCarrousel2 = function (valueToMove) {
        var leftV = this.getMatrix(this.innerCarrousel.nativeElement).x;
        var calc = leftV - valueToMove;
        this.innerCarrousel.nativeElement.style.transform = "translateX(" + calc + "px)";
        this.checkboundary2();
    };
    ServicessStatusComponent.prototype.moveCarrousel = function (valueToMove) {
        var leftV = isNaN(parseInt(this.innerCarrousel.nativeElement.style.left)) ? 0 : parseInt(this.innerCarrousel.nativeElement.style.left);
        var calc = leftV - valueToMove;
        this.innerCarrousel.nativeElement.style.left = calc + "px";
        this.checkboundary();
    };
    ServicessStatusComponent.prototype.onLeftMove = function () {
        var _this = this;
        clearInterval(this.buttonLongInterval);
        this.moveCarrousel2(-10);
        this.buttonLongInterval = setInterval(function () {
            _this.moveCarrousel2(-10);
        }, this.timeToMove);
    };
    ServicessStatusComponent.prototype.onRightMove = function () {
        var _this = this;
        clearInterval(this.buttonLongInterval);
        this.moveCarrousel2(10);
        this.buttonLongInterval = setInterval(function () {
            _this.moveCarrousel2(10);
        }, this.timeToMove);
    };
    ServicessStatusComponent.prototype.onFinishMove = function () {
        clearInterval(this.buttonLongInterval);
    };
    ServicessStatusComponent.prototype.getMatrix = function (element) {
        var values = element.style.transform.split(/\w+\(|\);?/);
        var transform = values[1].split(/,\s?/g).map(parseInt);
        return {
            x: isNaN(transform[0]) ? 0 : transform[0],
            y: isNaN(transform[1]) ? 0 : transform[1],
            z: isNaN(transform[2]) ? 0 : transform[2]
        };
    };
    ServicessStatusComponent.prototype.checkboundary2 = function () {
        var transformMatrix = this.getMatrix(this.innerCarrousel.nativeElement);
        var outer = this.carrousel.nativeElement.getBoundingClientRect();
        var inner = this.innerCarrousel.nativeElement.getBoundingClientRect();
        if (parseInt(transformMatrix.x) > 0) {
            this.innerCarrousel.nativeElement.style.transform = "translateX(0px)";
        }
        else if (inner.right < outer.right) {
            this.innerCarrousel.nativeElement.style.transform = "translateX(-" + (inner.width - outer.width) + "px)";
        }
    };
    ServicessStatusComponent.prototype.openStatusServiceModal = function () {
        var config = {
            data: this.jumbotronData,
            modalClass: 'ds-modal-sm',
            position: 'center',
        };
        this.cdkModalService.open(_service_status_modal_service_status_modal_component__WEBPACK_IMPORTED_MODULE_7__["ServiceStatusModalComponent"], config);
    };
    ServicessStatusComponent.prototype.loadJumbotronData = function () {
        var _this = this;
        this.sidebarServices
            .getJumbotromInformation()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.showJumbotrom = res && res.services && res.services.length > 0;
            _this.jumbotronData = res;
            localStorage.setItem("jumbotronData", JSON.stringify(_this.jumbotronData));
            _this.jumbotronData.levelProtectionConfig = _this.getLevelProtectionCongig(_this.jumbotronData.levelProtection);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.processJumbotromItems(res.services); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.isloading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            setTimeout(function () {
                if (_this.showJumbotrom) {
                    _this.availableSpaceCalculate();
                    _this.initCarrouselEvents();
                    _this.finalized.emit(true);
                }
            }, 100);
        }))
            .subscribe();
    };
    ServicessStatusComponent.prototype.getLevelProtectionCongig = function (levelProtection) {
        var protectionConfig = {
            translatedText: '',
            levelClassCss: '',
            iconConfig: ''
        };
        switch (levelProtection) {
            case _service_status_modal_shared_service_status_level__WEBPACK_IMPORTED_MODULE_8__["ServiceStatusLevel"].LowLevel:
                protectionConfig.translatedText = this.translate.instant('COMP_SERVICE_STATUS.LOW');
                protectionConfig.levelClassCss = 'ds-c-danger';
                protectionConfig.iconConfig = 'icon-warning';
                break;
            case _service_status_modal_shared_service_status_level__WEBPACK_IMPORTED_MODULE_8__["ServiceStatusLevel"].MediumLevel:
                protectionConfig.translatedText = this.translate.instant('COMP_SERVICE_STATUS.MEDIUM');
                protectionConfig.levelClassCss = 'ds-c-warning';
                protectionConfig.iconConfig = 'icon-exclamation';
                break;
            case _service_status_modal_shared_service_status_level__WEBPACK_IMPORTED_MODULE_8__["ServiceStatusLevel"].HightLevel:
                protectionConfig.translatedText = this.translate.instant("COMP_SERVICE_STATUS.HIGH");
                protectionConfig.levelClassCss = 'ds-c-success';
                protectionConfig.iconConfig = 'icon-green-check';
                break;
            default:
                break;
        }
        return protectionConfig;
    };
    ServicessStatusComponent.prototype.processJumbotromItems = function (services) {
        this.jumbotronData.services = services.map(function (x) {
            x.iconClass = 'icon-tick-round';
            x.colorClass = 'ds-c-success';
            x.borderClass = 'success';
            if (!x.isActive) {
                x.iconClass = 'icon-exclam';
                x.colorClass = 'ds-c-warning';
                x.borderClass = 'orange';
            }
            return x;
        });
    };
    ServicessStatusComponent.prototype.goToService = function (service) {
        this.router.navigate(['service/' + service.serviceCode]);
    };
    ServicessStatusComponent.prototype.watchRefreshJumbotrom = function () {
        var _this = this;
        this.sidebarServices.reloadJumbotron$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (data) { return !!data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return _this.reloadJumbotronInsteadServiceUpdate(data); }))
            .subscribe();
    };
    ServicessStatusComponent.prototype.reloadJumbotronInsteadServiceUpdate = function (serviceData) {
        if (this.jumbotronData && this.jumbotronData.services && this.jumbotronData.services.length) {
            var index = this.jumbotronData.services.findIndex(function (x) { return x.serviceCode == serviceData.serviceCode; });
            if (index >= 0) {
                var iconClass = 'icon-tick-round';
                var colorClass = 'ds-c-success';
                var borderClass = 'success';
                if (!serviceData.isActive) {
                    iconClass = 'icon-exclam';
                    colorClass = 'ds-c-warning';
                    borderClass = 'orange';
                }
                this.jumbotronData.services[index].borderClass = borderClass;
                this.jumbotronData.services[index].colorClass = colorClass;
                this.jumbotronData.services[index].iconClass = iconClass;
                this.jumbotronData.services[index].isActive = serviceData.isActive;
            }
        }
    };
    ServicessStatusComponent.ɵfac = function ServicessStatusComponent_Factory(t) { return new (t || ServicessStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_5__["CDKModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    ServicessStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicessStatusComponent, selectors: [["app-servicess-status"]], viewQuery: function ServicessStatusComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carrouselContainerContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carrouselContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.innerCarrouselContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prevMoveContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nextMoveContent = _t.first);
        } }, outputs: { finalized: "finalized" }, decls: 1, vars: 1, consts: [["class", "d-flex flex-column", "id", "jumbotrom", 4, "ngIf"], ["id", "jumbotrom", 1, "d-flex", "flex-column"], ["class", "d-flex", 4, "ngIf"], [1, "ds-card", "ds-jumbotron"], [4, "ngIf"], ["loadingTemplate", ""], [1, "d-flex"], [1, "ds-r-bold", "ds-c-secondary", "ds-fs-14", "ds-t-uppercase", "ds-mb-8p"], ["id", "service-status-icon-mobile", 3, "click"], [1, "jumbotron-summary"], [1, "ds-caption", "ds-r-regular", "ds-c-black", "ds-mb-12p"], [3, "click"], [1, "jumbotron-cards"], ["carrouselContainer", ""], ["href", "javascript:void(0)", 1, "jumbotron-arrows", 3, "mousedown", "mouseup"], ["prevMove", ""], [1, "icon-left-arrow"], [1, "jumbotron-items"], [1, "carrousel"], ["carrousel", ""], [1, "carrousel-inner"], ["innerCarrousel", ""], [4, "ngFor", "ngForOf"], ["nextMove", ""], [1, "icon-right-arrow"], [3, "tooltip", "click"], [1, "d-flex", "ds-fs-24"], [1, "w-100", "text-center", "fa-2x"], [1, "fas", "fa-spinner", "fa-spin"]], template: function ServicessStatusComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ServicessStatusComponent_div_0_Template, 6, 2, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showJumbotrom);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["#service-status-icon-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (max-width: 767px) {\n  #service-status-icon-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3NlcnZpY2Vzcy1zdGF0dXMvc2VydmljZXNzLXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUVFO0lBQ0UsY0FBQTtFQUFGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvc2VydmljZXNzLXN0YXR1cy9zZXJ2aWNlc3Mtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlcnZpY2Utc3RhdHVzLWljb24tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXG4gICNzZXJ2aWNlLXN0YXR1cy1pY29uLW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxufVxuIl19 */"] });
    return ServicessStatusComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicessStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servicess-status',
                templateUrl: './servicess-status.component.html',
                styleUrls: ['./servicess-status.component.scss']
            }]
    }], function () { return [{ type: src_app_components_cdk_modal_services_cdk_modal_service__WEBPACK_IMPORTED_MODULE_5__["CDKModalService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _shared_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_6__["SidebarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, { carrouselContainerContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carrouselContainer', { static: false }]
        }], carrouselContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carrousel', { static: false }]
        }], innerCarrouselContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['innerCarrousel', { static: false }]
        }], prevMoveContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['prevMove', { static: false }]
        }], nextMoveContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nextMove', { static: false }]
        }], finalized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "H2Rf":
/*!***************************************************************!*\
  !*** ./src/app/modules/poc/add-profile/add-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: AddProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfileModule", function() { return AddProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-profile.component */ "BgmQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/reactiveform-service */ "cU2l");








var AddProfileModule = /** @class */ (function () {
    function AddProfileModule() {
    }
    AddProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddProfileModule });
    AddProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddProfileModule_Factory(t) { return new (t || AddProfileModule)(); }, providers: [src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ]] });
    return AddProfileModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddProfileModule, { declarations: [_add_profile_component__WEBPACK_IMPORTED_MODULE_2__["AddProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], exports: [_add_profile_component__WEBPACK_IMPORTED_MODULE_2__["AddProfileComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_5__["NzSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ],
                declarations: [_add_profile_component__WEBPACK_IMPORTED_MODULE_2__["AddProfileComponent"]],
                exports: [_add_profile_component__WEBPACK_IMPORTED_MODULE_2__["AddProfileComponent"]],
                providers: [src_app_helpers_reactiveform_service__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LmLT":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/servicess-status.module.ts ***!
  \**************************************************************************/
/*! exports provided: ServicessStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicessStatusModule", function() { return ServicessStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicess_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicess-status.component */ "DdhC");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _service_status_modal_service_status_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-status-modal/service-status-modal.module */ "fO7b");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");
/* harmony import */ var src_app_components_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/tooltip/tooltip.module */ "0+yD");









// import { MatTooltipModule } from '@angular/material/tooltip';
var ServicessStatusModule = /** @class */ (function () {
    function ServicessStatusModule() {
    }
    ServicessStatusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicessStatusModule });
    ServicessStatusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicessStatusModule_Factory(t) { return new (t || ServicessStatusModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _service_status_modal_service_status_modal_module__WEBPACK_IMPORTED_MODULE_5__["ServiceStatusModalModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                src_app_components_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
                // MatTooltipModule
            ]] });
    return ServicessStatusModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicessStatusModule, { declarations: [_servicess_status_component__WEBPACK_IMPORTED_MODULE_2__["ServicessStatusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _service_status_modal_service_status_modal_module__WEBPACK_IMPORTED_MODULE_5__["ServiceStatusModalModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        src_app_components_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
        // MatTooltipModule
    ], exports: [_servicess_status_component__WEBPACK_IMPORTED_MODULE_2__["ServicessStatusComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicessStatusModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _service_status_modal_service_status_modal_module__WEBPACK_IMPORTED_MODULE_5__["ServiceStatusModalModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_6__["NzSpinnerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    src_app_components_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"]
                    // MatTooltipModule
                ],
                declarations: [_servicess_status_component__WEBPACK_IMPORTED_MODULE_2__["ServicessStatusComponent"]],
                exports: [_servicess_status_component__WEBPACK_IMPORTED_MODULE_2__["ServicessStatusComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "P+WM":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/service-status-modal/medium-level-ssm/medium-level-ssm.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MediumLevelSsmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumLevelSsmComponent", function() { return MediumLevelSsmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



var MediumLevelSsmComponent = /** @class */ (function () {
    function MediumLevelSsmComponent() {
    }
    MediumLevelSsmComponent.prototype.ngOnInit = function () {
    };
    MediumLevelSsmComponent.ɵfac = function MediumLevelSsmComponent_Factory(t) { return new (t || MediumLevelSsmComponent)(); };
    MediumLevelSsmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediumLevelSsmComponent, selectors: [["app-medium-level-ssm"]], decls: 14, vars: 9, consts: [[1, "d-flex", "justify-content-center", "text-center", "align-items-center", "flex-column"], [1, "icon-exclamation", "fa-7x", "ds-c-danger", "ds-mb-32p", "ds-c-warning"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-c-black", "ds-r-regular", "ds-mb-24p"], [1, "jumbotron-item", "orange"], [1, "d-flex", "ds-fs-24", "justify-content-end"], [1, "icon-exclam", "ds-fs-16", "ds-c-orange"]], template: function MediumLevelSsmComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "COMP_SERVICE_STATUS.YOU_CAN_STILL_IMPROVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "COMP_SERVICE_STATUS.LEVEL_PROTECTION_MEDIUM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "COMP_SERVICE_STATUS.CHECK_STATUS_BAR"), " ");
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXJ2aWNlc3Mtc3RhdHVzL3NlcnZpY2Utc3RhdHVzLW1vZGFsL21lZGl1bS1sZXZlbC1zc20vbWVkaXVtLWxldmVsLXNzbS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return MediumLevelSsmComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediumLevelSsmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-medium-level-ssm',
                templateUrl: './medium-level-ssm.component.html',
                styleUrls: ['./medium-level-ssm.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Y0uy":
/*!*****************************************************!*\
  !*** ./src/app/services/monitored-cards.service.ts ***!
  \*****************************************************/
/*! exports provided: MonitoredCardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoredCardsService", function() { return MonitoredCardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/string-utils */ "372O");








var MonitoredCardsService = /** @class */ (function () {
    function MonitoredCardsService(http) {
        this.http = http;
        this.cards = [];
        this.protectedCards = 0;
        this.cardsWithFraud = 0;
        this.citInformation = {};
        this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    MonitoredCardsService.prototype.getMonitoredCardsByUser = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // let params = new HttpParams();
                // params = params.set('partnerSuiteId', partnerSuiteId);
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredcards/").toPromise().then(function (result) {
                        _this.cards = result;
                        _this.cards.forEach(function (element) {
                            if (element.lastAnalysisDate == null || element.lastAnalysisDate == '') {
                                element.lastAnalysisDate = _utils_string_utils__WEBPACK_IMPORTED_MODULE_5__["StringUtils"].getCurrentDate();
                            }
                        });
                        _this.protectedCards = _this.cards.filter(function (x) { return !x.fraudDetected; }).length;
                        _this.cardsWithFraud = _this.cards.length - _this.protectedCards;
                    })];
            });
        });
    };
    MonitoredCardsService.prototype.emitReload = function (value) {
        this.reload$.next(value);
    };
    MonitoredCardsService.prototype.getMonitoredCardsByUser2 = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredcards/");
    };
    MonitoredCardsService.prototype.addMonitoredCard = function (cards) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredcards/", cards).toPromise();
    };
    MonitoredCardsService.prototype.deleteMonitoredCard = function (cardId) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiEndpoint + "api/monitoredcards?cardId=" + cardId).toPromise();
    };
    MonitoredCardsService.ɵfac = function MonitoredCardsService_Factory(t) { return new (t || MonitoredCardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    MonitoredCardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MonitoredCardsService, factory: MonitoredCardsService.ɵfac, providedIn: 'root' });
    return MonitoredCardsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MonitoredCardsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "YQtU":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/home/identity-theft-protection/itp-delete-item/itp-delete-item.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ItpDeleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItpDeleteItemComponent", function() { return ItpDeleteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal-ref */ "UdKV");
/* harmony import */ var src_app_modules_poc_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/poc/shared/family-unit.service */ "5SoQ");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var src_app_services_monitored_identities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/monitored-identities.service */ "ozvF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/nz-spinner/nz-spinner */ "b+Yv");














function ItpDeleteItemComponent_nz_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-spinner");
} }
function ItpDeleteItemComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_GRAVITY.REMOVE_FORM.DELETE_BUTTON"), "");
} }
var ItpDeleteItemComponent = /** @class */ (function () {
    function ItpDeleteItemComponent(modalRef, translate, messageService, monitoredIdentitiesService, familyUnitService) {
        this.modalRef = modalRef;
        this.translate = translate;
        this.messageService = messageService;
        this.monitoredIdentitiesService = monitoredIdentitiesService;
        this.familyUnitService = familyUnitService;
        this.loading = false;
        this.emailSelected = {};
    }
    ItpDeleteItemComponent.prototype.ngOnInit = function () {
        this.emailSelected = this.modalRef.config.data;
    };
    ItpDeleteItemComponent.prototype.closeModal = function (deleteEmail) {
        this.modalRef.close(deleteEmail);
    };
    ItpDeleteItemComponent.prototype.saveDeleteEmail = function () {
        var _this = this;
        this.loading = true;
        this.translate.get('REQUEST_DELETE_SERVICE').subscribe(function (res) { return _this.messageService.add(res, "ok"); });
        this.monitoredIdentitiesService.deleteMonitoredIdentity(this.emailSelected.identityId).then(function (result) {
            _this.loading = false;
            if (result) {
                _this.messageService.add(_this.translate.instant('CYBERALARM.IDENTITIES.REMOVE_FORM.RESULT_OK'), "ok");
                _this.monitoredIdentitiesService.emitReload(true);
                _this.familyUnitService.emitDeleteIdentity(true);
                _this.closeModal(true);
            }
            else {
                _this.messageService.add(_this.translate.instant('CYBERALARM.IDENTITIES.REMOVE_FORM.RESULT_ERROR'), "error");
            }
        });
    };
    ItpDeleteItemComponent.ɵfac = function ItpDeleteItemComponent_Factory(t) { return new (t || ItpDeleteItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_2__["CDKModalRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_monitored_identities_service__WEBPACK_IMPORTED_MODULE_5__["MonitoredIdentitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_poc_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_3__["FamilyUnitService"])); };
    ItpDeleteItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItpDeleteItemComponent, selectors: [["app-itp-delete-item"]], decls: 19, vars: 12, consts: [[1, "ds-modal-header", "ds-mb-32p", "justify-content-end"], [1, "icon-close", 3, "click"], [1, "ds-t-center", "d-flex", "flex-column", "ds-mb-32p"], [1, "icon-trash", "fa-6x", "ds-c-black", "ds-mb-32p"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-regular", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-r-bold", "ds-c-black", "ds-mb-12p"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-outline-secondary", "ds-mr-12p", "ds-t-uppercase", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [4, "ngIf"]], template: function ItpDeleteItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItpDeleteItemComponent_Template_i_click_1_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItpDeleteItemComponent_Template_button_click_13_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItpDeleteItemComponent_Template_button_click_16_listener() { return ctx.saveDeleteEmail(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ItpDeleteItemComponent_nz_spinner_17_Template, 1, 0, "nz-spinner", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ItpDeleteItemComponent_span_18_Template, 3, 3, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "CYBERALARM.IDENTITIES.REMOVE_FORM.SURE1"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "CYBERALARM.IDENTITIES.REMOVE_FORM.SURE2"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.emailSelected.identity, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9pZGVudGl0eS10aGVmdC1wcm90ZWN0aW9uL2l0cC1kZWxldGUtaXRlbS9pdHAtZGVsZXRlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
    return ItpDeleteItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItpDeleteItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-itp-delete-item',
                templateUrl: './itp-delete-item.component.html',
                styleUrls: ['./itp-delete-item.component.scss']
            }]
    }], function () { return [{ type: src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_2__["CDKModalRef"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: src_app_services_monitored_identities_service__WEBPACK_IMPORTED_MODULE_5__["MonitoredIdentitiesService"] }, { type: src_app_modules_poc_shared_family_unit_service__WEBPACK_IMPORTED_MODULE_3__["FamilyUnitService"] }]; }, null); })();


/***/ }),

/***/ "fO7b":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/service-status-modal/service-status-modal.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServiceStatusModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStatusModalModule", function() { return ServiceStatusModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_status_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-status-modal.component */ "gqpB");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dynamic-render/dynamic-render-component.module */ "Gvde");
/* harmony import */ var _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./low-level-ssm/low-level-ssm.component */ "CBJ7");
/* harmony import */ var _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hight-level-ssm/hight-level-ssm.component */ "uYlk");
/* harmony import */ var _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./medium-level-ssm/medium-level-ssm.component */ "P+WM");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");










var ServiceStatusModalModule = /** @class */ (function () {
    function ServiceStatusModalModule() {
    }
    ServiceStatusModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceStatusModalModule });
    ServiceStatusModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceStatusModalModule_Factory(t) { return new (t || ServiceStatusModalModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_8__["NzSpinnerModule"],
                src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_4__["DynamicRenderComponentModule"]
            ]] });
    return ServiceStatusModalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceStatusModalModule, { declarations: [_service_status_modal_component__WEBPACK_IMPORTED_MODULE_2__["ServiceStatusModalComponent"],
        _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_7__["MediumLevelSsmComponent"],
        _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__["LowLevelSsmComponent"],
        _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__["HightLevelSsmComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_8__["NzSpinnerModule"],
        src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_4__["DynamicRenderComponentModule"]], exports: [_service_status_modal_component__WEBPACK_IMPORTED_MODULE_2__["ServiceStatusModalComponent"],
        _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_7__["MediumLevelSsmComponent"],
        _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__["LowLevelSsmComponent"],
        _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__["HightLevelSsmComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceStatusModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_8__["NzSpinnerModule"],
                    src_app_dynamic_render_dynamic_render_component_module__WEBPACK_IMPORTED_MODULE_4__["DynamicRenderComponentModule"]
                ],
                declarations: [
                    _service_status_modal_component__WEBPACK_IMPORTED_MODULE_2__["ServiceStatusModalComponent"],
                    _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_7__["MediumLevelSsmComponent"],
                    _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__["LowLevelSsmComponent"],
                    _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__["HightLevelSsmComponent"]
                ],
                exports: [
                    _service_status_modal_component__WEBPACK_IMPORTED_MODULE_2__["ServiceStatusModalComponent"],
                    _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_7__["MediumLevelSsmComponent"],
                    _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__["LowLevelSsmComponent"],
                    _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__["HightLevelSsmComponent"]
                ],
                entryComponents: [
                    _service_status_modal_component__WEBPACK_IMPORTED_MODULE_2__["ServiceStatusModalComponent"],
                    _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_7__["MediumLevelSsmComponent"],
                    _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__["LowLevelSsmComponent"],
                    _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__["HightLevelSsmComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "gqpB":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/service-status-modal/service-status-modal.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ServiceStatusModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStatusModalComponent", function() { return ServiceStatusModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/cdk-modal/services/cdk-modal-ref */ "UdKV");
/* harmony import */ var src_app_dynamic_render_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dynamic-render/dynamic-render-component.service */ "NKj7");
/* harmony import */ var src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dynamic-render/render-component.directive */ "utrB");
/* harmony import */ var _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hight-level-ssm/hight-level-ssm.component */ "uYlk");
/* harmony import */ var _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./low-level-ssm/low-level-ssm.component */ "CBJ7");
/* harmony import */ var _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medium-level-ssm/medium-level-ssm.component */ "P+WM");
/* harmony import */ var _shared_service_status_level__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/service-status-level */ "yBZ4");












function ServiceStatusModalComponent_ng_template_3_Template(rf, ctx) { }
var ServiceStatusModalComponent = /** @class */ (function () {
    function ServiceStatusModalComponent(dynamicRenderComponentService, modalRef) {
        this.dynamicRenderComponentService = dynamicRenderComponentService;
        this.modalRef = modalRef;
    }
    ServiceStatusModalComponent.prototype.ngOnInit = function () {
        this.serviceStatusData = this.modalRef.config.data;
        this.loadComponentByBussinessStrategy(this.serviceStatusData.levelProtection);
    };
    ServiceStatusModalComponent.prototype.loadComponentByBussinessStrategy = function (level) {
        if (!level) {
            this.renderDefaultLevel();
        }
        switch (level) {
            case _shared_service_status_level__WEBPACK_IMPORTED_MODULE_7__["ServiceStatusLevel"].HightLevel:
                this.renderHightLevel(this.serviceStatusData.allProtected);
                break;
            case _shared_service_status_level__WEBPACK_IMPORTED_MODULE_7__["ServiceStatusLevel"].MediumLevel:
                this.renderMediumLevel();
                break;
            case _shared_service_status_level__WEBPACK_IMPORTED_MODULE_7__["ServiceStatusLevel"].LowLevel:
                this.renderLowLevel();
                break;
            default:
                this.renderDefaultLevel();
                break;
        }
    };
    ServiceStatusModalComponent.prototype.renderDefaultLevel = function () {
        this.dynamicRenderComponentService.loadComponent(this.directiveContainer, _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__["LowLevelSsmComponent"]);
    };
    ServiceStatusModalComponent.prototype.renderHightLevel = function (allProtected) {
        this.dynamicRenderComponentService.loadComponent(this.directiveContainer, _hight_level_ssm_hight_level_ssm_component__WEBPACK_IMPORTED_MODULE_4__["HightLevelSsmComponent"], allProtected);
    };
    ServiceStatusModalComponent.prototype.renderMediumLevel = function () {
        this.dynamicRenderComponentService.loadComponent(this.directiveContainer, _medium_level_ssm_medium_level_ssm_component__WEBPACK_IMPORTED_MODULE_6__["MediumLevelSsmComponent"]);
    };
    ServiceStatusModalComponent.prototype.renderLowLevel = function () {
        this.dynamicRenderComponentService.loadComponent(this.directiveContainer, _low_level_ssm_low_level_ssm_component__WEBPACK_IMPORTED_MODULE_5__["LowLevelSsmComponent"]);
    };
    ServiceStatusModalComponent.prototype.closeModal = function () {
        this.modalRef.close();
    };
    ServiceStatusModalComponent.ɵfac = function ServiceStatusModalComponent_Factory(t) { return new (t || ServiceStatusModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dynamic_render_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_2__["DynamicRenderComponentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__["CDKModalRef"])); };
    ServiceStatusModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceStatusModalComponent, selectors: [["app-service-status-modal"]], viewQuery: function ServiceStatusModalComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_3__["RenderComponentDirective"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.directiveContainer = _t.first);
        } }, decls: 4, vars: 0, consts: [[1, "d-flex", "w-100", "justify-content-end"], ["type", "button", 1, "btn", "ds-fs-14", 3, "click"], [1, "icon-close"], ["render-component", ""]], template: function ServiceStatusModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceStatusModalComponent_Template_button_click_1_listener() { return ctx.closeModal(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServiceStatusModalComponent_ng_template_3_Template, 0, 0, "ng-template", 3);
        } }, directives: [src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_3__["RenderComponentDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXJ2aWNlc3Mtc3RhdHVzL3NlcnZpY2Utc3RhdHVzLW1vZGFsL3NlcnZpY2Utc3RhdHVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ServiceStatusModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceStatusModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-status-modal',
                templateUrl: './service-status-modal.component.html',
                styleUrls: ['./service-status-modal.component.scss']
            }]
    }], function () { return [{ type: src_app_dynamic_render_dynamic_render_component_service__WEBPACK_IMPORTED_MODULE_2__["DynamicRenderComponentService"] }, { type: src_app_components_cdk_modal_services_cdk_modal_ref__WEBPACK_IMPORTED_MODULE_1__["CDKModalRef"] }]; }, { directiveContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_dynamic_render_render_component_directive__WEBPACK_IMPORTED_MODULE_3__["RenderComponentDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "uYlk":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/service-status-modal/hight-level-ssm/hight-level-ssm.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HightLevelSsmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HightLevelSsmComponent", function() { return HightLevelSsmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function HightLevelSsmComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMP_SERVICE_STATUS.LEVEL_PROTECTION_HIGH"), " ");
} }
function HightLevelSsmComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var HightLevelSsmComponent = /** @class */ (function () {
    function HightLevelSsmComponent() {
        this.allServicesActivated = false;
    }
    HightLevelSsmComponent.prototype.ngOnInit = function () {
        this.allServicesActivated = this.data;
    };
    HightLevelSsmComponent.ɵfac = function HightLevelSsmComponent_Factory(t) { return new (t || HightLevelSsmComponent)(); };
    HightLevelSsmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HightLevelSsmComponent, selectors: [["app-hight-level-ssm"]], inputs: { data: "data" }, decls: 10, vars: 8, consts: [[1, "d-flex", "justify-content-center", "text-center", "align-items-center", "flex-column"], [1, "icon-green-check", "fa-7x", "ds-c-success"], [1, "ds-h3", "ds-m-bold", "ds-c-black", "ds-mb-12p"], [1, "ds-body-primary", "ds-c-black", "ds-r-regular", "ds-mb-24p"], ["class", "ds-body-primary ds-c-black ds-r-regular ds-mb-24p", 4, "ngIf"], ["class", "jumbotron-item orange", 4, "ngIf"], [1, "jumbotron-item", "orange"], [1, "d-flex", "ds-fs-24", "justify-content-end"], [1, "icon-exclam", "ds-fs-16", "ds-c-orange"]], template: function HightLevelSsmComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HightLevelSsmComponent_div_8_Template, 3, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HightLevelSsmComponent_div_9_Template, 3, 0, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "COMP_SERVICE_STATUS.CONGRATULATIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "COMP_SERVICE_STATUS.SERVICES_ACTIVATED"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allServicesActivated);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allServicesActivated);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zZXJ2aWNlc3Mtc3RhdHVzL3NlcnZpY2Utc3RhdHVzLW1vZGFsL2hpZ2h0LWxldmVsLXNzbS9oaWdodC1sZXZlbC1zc20uY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
    return HightLevelSsmComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HightLevelSsmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hight-level-ssm',
                templateUrl: './hight-level-ssm.component.html',
                styleUrls: ['./hight-level-ssm.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "yBZ4":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/home/servicess-status/service-status-modal/shared/service-status-level.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServiceStatusLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStatusLevel", function() { return ServiceStatusLevel; });
var ServiceStatusLevel;
(function (ServiceStatusLevel) {
    ServiceStatusLevel[ServiceStatusLevel["HightLevel"] = 2] = "HightLevel";
    ServiceStatusLevel[ServiceStatusLevel["MediumLevel"] = 1] = "MediumLevel";
    ServiceStatusLevel[ServiceStatusLevel["LowLevel"] = 0] = "LowLevel";
})(ServiceStatusLevel || (ServiceStatusLevel = {}));


/***/ })

}]);
//# sourceMappingURL=default~modules-home-home-module~modules-poc-poc-module~modules-service-service-module.js.map