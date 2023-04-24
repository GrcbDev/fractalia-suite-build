(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-managment-user-managment-module"],{

/***/ "26L6":
/*!************************************!*\
  !*** ./src/app/models/userlist.ts ***!
  \************************************/
/*! exports provided: UserList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserList", function() { return UserList; });
var UserList = /** @class */ (function () {
    function UserList() {
    }
    return UserList;
}());



/***/ }),

/***/ "2riZ":
/*!***********************************************!*\
  !*** ./src/app/validators/bytes.validator.ts ***!
  \***********************************************/
/*! exports provided: BytesValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesValidator", function() { return BytesValidator; });
var BytesValidator = /** @class */ (function () {
    function BytesValidator() {
    }
    BytesValidator.FormatBytes = function (size) {
        if (size === 0)
            return 0;
        var bytesSize = size.replace(BytesValidator.numberRegex, '').replace(BytesValidator.spaceRegex, '');
        var k = 1024;
        var sizes = ['TB', 'GB', 'MB', 'KB', 'B'];
        var unit = size.replace(/[0-9]/g, '').replace(BytesValidator.spaceRegex, '');
        for (var index = sizes.indexOf(unit); index < sizes.length - 1; index++) {
            bytesSize = bytesSize * k;
        }
        return bytesSize;
    };
    BytesValidator.GetSpaceWithDecimals = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0)
            return '0 Bytes';
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + BytesValidator.units[i];
    };
    BytesValidator.GetSpaceWithDecimals2 = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0)
            return 0;
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
    };
    BytesValidator.numberRegex = /\D/g;
    BytesValidator.spaceRegex = /\s/g;
    BytesValidator.formatRegex = /^[0-9]+[\s]{0,1}[KMGT]{0,1}B$/;
    BytesValidator.units = ['B', 'KB', 'MB', 'GB', 'TB'];
    BytesValidator.ValidateBytes = function (size) {
        var result = false;
        size = size.toUpperCase();
        var correctFormat = BytesValidator.formatRegex.test(size);
        BytesValidator.units.forEach(function (e) {
            result = result || size.indexOf(e) > 0;
        });
        if (result && correctFormat)
            return BytesValidator.FormatBytes(size);
        else
            return 0;
    };
    return BytesValidator;
}());



/***/ }),

/***/ "4NPW":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user-managment/add-user/add-user.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/validators/user.validator */ "TQtI");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/nz-spinner/nz-spinner */ "b+Yv");





















function AddUserComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddUserComponent_div_31_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onUploadImagen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddUserComponent_div_31_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r14.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.sanitizer.bypassSecurityTrustUrl(ctx_r0.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, "IMAGEN_PERFIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, "CAMBIAR_IMAGEN_PERFIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 10, "CUT_PROFILE_IMAGE_USER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 12, "CANCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 14, "OK"));
} }
function AddUserComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_42_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "EMAIL"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.user.email);
} }
var _c0 = function (a0) { return { identifier: a0 }; };
function AddUserComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_43_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.user.eid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, "EID", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r4.partnerService.partner.uniqueIdentifier)), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.user.eid);
} }
function AddUserComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_44_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.user.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "TELEFONO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.user.phone);
} }
function AddUserComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_45_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.user.adress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "DIRECCION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.user.adress);
} }
function AddUserComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_46_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.user.postalcode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "CODIGO_POSTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.user.postalcode);
} }
function AddUserComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_div_47_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.user.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "CIUDAD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.user.city);
} }
function AddUserComponent_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var country_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r36.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r36.name, " ");
} }
function AddUserComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ERROR_GUARDAR_DATOS"));
} }
function AddUserComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r11.message, " ");
} }
function AddUserComponent_nz_spinner_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-spinner");
} }
function AddUserComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "GUARDAR_NEW"));
} }
var _c1 = function (a0) { return { "margin": a0 }; };
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(partnerService, userService, route, router, messageService, translate, sanitizer) {
        this.partnerService = partnerService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
        this.translate = translate;
        this.sanitizer = sanitizer;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].STATIC_CONTENT;
        this.loading = false;
        this.submitted = false;
        this.updateError = false;
        this.image = this.staticContentUrl + "img/add-user.png";
        this.showMessage = false;
        this.message = "";
        this.pendingUsers = 0;
        this.isShowEid = false;
        this.isShowEmail = false;
        this.isShowRequiredEmail = false;
        this.user = this.userService.currentUserValue;
        this.partnerId = this.user.partnerId;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userService.currentUserValue.isAdminUserId) {
                            this.router.navigate(['/profile']);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.userService.getCompanyUsers()];
                    case 1:
                        _a.sent();
                        this.pendingUsers = this.userService.companyUser.pendingUsers;
                        if (this.pendingUsers == 0) {
                            this.router.navigate(['/profile']);
                            // this.router.navigate(['/user-list']);
                            return [2 /*return*/];
                        }
                        this.AdminUserId = +this.route.snapshot.paramMap.get('AdminUserId');
                        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
                        this.user.countryCode = "select";
                        this.loading = false;
                        this.loginType = this.partnerService.partner.loginType;
                        this.ruleShowEid();
                        this.ruleShowEmail();
                        this.ruleShowRequiredEmail();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserComponent.prototype.ruleShowEid = function () {
        if (this.loginType == 2 || this.loginType == 5) {
            this.isShowEid = true;
        }
    };
    AddUserComponent.prototype.ruleShowEmail = function () {
        this.isShowEmail = true;
    };
    AddUserComponent.prototype.ruleShowRequiredEmail = function () {
        if (this.loginType == 1 || this.loginType == 4 || this.loginType == 5 || this.loginType == 6) {
            this.isShowRequiredEmail = true;
        }
    };
    AddUserComponent.prototype.isValidString = function (str) {
        return str !== null && str !== undefined && typeof str === "string" && str.length > 0;
    };
    AddUserComponent.prototype.onSubmit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.updateError = false;
                        this.loading = true;
                        if (!this.isValidString(this.user.name)) {
                            this.message = this.translate.instant('MULTIUSER.VALIDATION1');
                            this.showMessage = true;
                            this.loading = false;
                            return [2 /*return*/];
                        }
                        if (this.loginType == 2 || this.loginType == 5) {
                            if (!this.isValidString(this.user.eid)) {
                                this.message = this.translate.instant('MULTIUSER.VALIDATION2').replace("{{identifier}}", this.partnerService.partner.uniqueIdentifier);
                                this.showMessage = true;
                                this.loading = false;
                                return [2 /*return*/];
                            }
                        }
                        if (this.loginType == 1 || this.loginType == 4 || this.loginType == 5 || this.loginType == 6) {
                            if (!this.isValidString(this.user.email)) {
                                this.message = this.translate.instant('MULTIUSER.VALIDATION3');
                                this.showMessage = true;
                                this.loading = false;
                                return [2 /*return*/];
                            }
                            if (src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_9__["UserValidator"].validEmail(this.user.email) == null) {
                                this.message = this.translate.instant('MULTIUSER.VALIDATION4');
                                this.showMessage = true;
                                this.loading = false;
                                return [2 /*return*/];
                            }
                        }
                        if (this.user.phone) {
                            if (src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_9__["UserValidator"].validPhone(this.user.phone) == null) {
                                this.message = this.translate.instant('MULTIUSER.VALIDATION11');
                                this.showMessage = true;
                                this.loading = false;
                                return [2 /*return*/];
                            }
                        }
                        this.showMessage = false;
                        this.message = "";
                        this.user.adminUserId = this.AdminUserId;
                        this.user.partnerId = this.partnerId;
                        if (this.image == this.staticContentUrl + "img/profileDefaultMenu.png" || this.image == this.staticContentUrl + "img/add-user.png") {
                            this.user.profileImage = null;
                        }
                        else {
                            this.user.profileImage = this.image;
                        }
                        this.user.typeUser = "1";
                        this.user.parentCompanyIdentification = this.userService.currentUserValue.companyIdentification;
                        this.user.userSuites = this.userService.currentUserValue.userSuites;
                        if (this.user.countryCode !== 'select')
                            this.user.country = this.partnerService.countries.find(function (x) { return x.code == _this.user.countryCode; }).name;
                        return [4 /*yield*/, this.userService.createCompanyUser(this.user, this.partnerService.partner.apiKey).then(function (result) {
                                if (result.status != 200) {
                                    // this.message = result.message;
                                    _this.message = _this.translate.instant("COMP_USER.APIPROVISION.MESSAGE." + result.responseCode);
                                    _this.showMessage = true;
                                    _this.loading = false;
                                    return;
                                }
                                else {
                                    _this.loading = false;
                                    _this.translate.get('MULTIUSER.ADD_USER_OK').subscribe(function (res) { return _this.messageService.add(res, "ok"); });
                                    _this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
                                    _this.image = _this.staticContentUrl + "img/add-user.png";
                                    _this.userService.getCompanyUsers().then(function (result) {
                                        _this.router.navigate(['/user-list']);
                                        // if(this.userService.companyUser.pendingUsers<=0)
                                        //   this.router.navigate(['/home']);
                                    });
                                }
                            }, function (err) {
                                _this.loading = false;
                                _this.translate.get('MULTIUSER.ADD_USER_ERROR').subscribe(function (res) { return _this.messageService.add(res, "error"); });
                                return;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserComponent.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    AddUserComponent.prototype.onUploadImagen = function ($event) {
        var _this = this;
        var target = $event.target;
        if (target.files != null) {
            if (target.files.length > 0) {
                var file = target.files[0];
                var value = target.value.toLowerCase();
                var ext = value.split('.').pop();
                var name_1 = target.name.toLowerCase();
                var exts = ["png", "jpg", "jpeg", "gif"];
                if (name_1 == "favicon") {
                    exts = ["png", "jpg", "jpeg", "gif", "ico"];
                }
                if (exts.indexOf(ext) != -1) {
                    this.getBase64(file).then(function (result) {
                        _this.image = result.toString();
                    });
                }
                else {
                    this.translate.get('ONLY_IMAGES_ERROR').subscribe(function (res) { return _this.messageService.add(res, "error"); });
                }
            }
        }
    };
    AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"])); };
    AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 84, vars: 49, consts: [["id", "header"], [1, "container-fluid", "m767"], [1, "navbar-nav", "float-left", "mr-auto", "ml-3", "pl-1"], [1, "nav-item"], [1, "ml-3", "pl-1"], [1, "container-fluid", "m767", "pr-4"], ["href", "javascript:history.back()", 1, "d-flex", "position-absolute", "mt-3"], [1, "icon-left-big-arrow", "mr-2"], [1, "row", "no-gutters"], [1, "col-xl-9", "col-lg-10", "col-md-12", 3, "ngStyle"], [1, "card"], [1, "container-fluid", "pr-4", "pl-4"], [1, "pform", "formdatauser", 3, "ngSubmit"], [1, "row", "align-items-start"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "form-group", 3, "ngClass"], ["type", "text", "required", "", "name", "name", "maxlength", "100", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["name", "ngModel"], ["type", "text", "required", "", "name", "surname", "maxlength", "100", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["surname", "ngModel"], ["class", "col-lg-6 col-md-6 col-sm-6 col-xs-12", 4, "ngIf"], [1, "form-group"], ["required", "", "name", "country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "select", "disabled", "", 3, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "mb-4", "mt-2"], ["style", "text-align: center; font-size: 80%; color:#dc3545;", 4, "ngIf"], [1, "errormen"], ["class", "loginError d-inline-flex align-items-center", 4, "ngIf"], [1, "btnform"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mt-2", "order-lg-12"], [1, "requiredtext", "text-right", "float-left", "float-lg-right", "mt-2"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12", "mt-2"], [1, "btn", "btn-primary", "mr-3", "mt-2", 3, "disabled"], [4, "ngIf"], ["routerLink", "/user-managment", 1, "btn", "btn-outline-secondary", "mt-2"], [1, "d-inline-flex", "mt-5", "blockquote"], [1, "icon-exclamation"], [1, "requiredtext"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "picture-container"], [1, "upload-wrapper"], [1, "photo"], ["name", "favicon", "type", "file", "accept", "image/x-png,image/jpeg,image/gif,image/x-icon", 2, "display", "none", 3, "change"], ["profileImage", ""], ["type", "button", 1, "btn", "bback", 3, "click"], ["width", "84", "height", "84", 3, "src"], [1, "text"], [1, "title"], [1, "subtitle"], ["id", "modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "img-container"], ["id", "image", "src", ""], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "button", "id", "crop", 1, "btn", "btn-primary"], ["type", "email", "required", "", "name", "email", "maxlength", "100", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["email", "ngModel"], ["type", "text", "required", "", "name", "eid", "maxlength", "100", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["eid", "ngModel"], ["type", "text", "required", "", "name", "phone", "maxlength", "20", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "required", "", "name", "adress", "maxlength", "100", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["adress", "ngModel"], ["type", "text", "required", "", "name", "postalcode", "maxlength", "10", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["postalcode", "ngModel"], ["type", "text", "required", "", "name", "city", "maxlength", "50", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["city", "ngModel"], [3, "value"], [2, "text-align", "center", "font-size", "80%", "color", "#dc3545"], [1, "loginError", "d-inline-flex", "align-items-center"], [1, "icon-exclamation-tri"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_29_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddUserComponent_div_31_Template, 35, 16, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_34_listener($event) { return ctx.user.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_input_ngModelChange_39_listener($event) { return ctx.user.surname = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AddUserComponent_div_42_Template, 5, 4, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AddUserComponent_div_43_Template, 5, 7, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AddUserComponent_div_44_Template, 5, 4, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AddUserComponent_div_45_Template, 5, 4, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AddUserComponent_div_46_Template, 5, 4, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AddUserComponent_div_47_Template, 5, 4, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "select", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddUserComponent_Template_select_ngModelChange_50_listener($event) { return ctx.user.countryCode = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AddUserComponent_option_54_Template, 2, 2, "option", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AddUserComponent_div_56_Template, 4, 3, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, AddUserComponent_div_58_Template, 3, 1, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "font");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, AddUserComponent_nz_spinner_70_Template, 1, 0, "nz-spinner", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, AddUserComponent_div_71_Template, 3, 3, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 29, "ADD_NEW_USER_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 31, "ATRAS"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](47, _c1, !ctx.userService.currentUserValue.inJira ? "0 auto" : ""));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 33, "DATOS_PERSONALES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.partnerService.partner.hasFullProfile ? "no-photo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 35, "NOMBRE"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.partnerService.partner.hasFullProfile ? "no-photo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 37, "APELLIDOS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.surname);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShowEmail);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShowEid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.countryCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.user.countryCode == "select");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 39, "PAIS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.partnerService.countries);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.updateError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 41, "CAMPOS_OBLIGATORIOS"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 43, "CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 45, "BLOCKQUOTE_NEW_USER"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_13__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ21lbnQvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AddUserComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-user',
                templateUrl: './add-user.component.html',
                styleUrls: ['./add-user.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "KCgV":
/*!**********************************************!*\
  !*** ./src/app/services/tranxfer.service.ts ***!
  \**********************************************/
/*! exports provided: TranxferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranxferService", function() { return TranxferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "tZre");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");










var TranxferService = /** @class */ (function () {
    function TranxferService(http, messageService, translate) {
        this.http = http;
        this.messageService = messageService;
        this.translate = translate;
    }
    TranxferService.prototype.GetUserStatusTranxfer = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
                params = params.set('userid', id.toString());
                return [2 /*return*/, this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiEndpoint + "api/tranxfer/user", { params: params }).toPromise().then(function (result) {
                        return result;
                        //  this.editPartner = result; 
                    })];
            });
        });
    };
    TranxferService.prototype.ActivateUserTranxfer = function (id, sname, ssurname, semail, slanguage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
                params = params.set('id', id.toString());
                return [2 /*return*/, this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiEndpoint + "api/tranxfer/user", { userid: id, name: sname, surname: ssurname, email: semail, language: slanguage }).toPromise().then(function (result) {
                        return result;
                        //  this.editPartner = result; 
                    })];
            });
        });
    };
    TranxferService.ɵfac = function TranxferService_Factory(t) { return new (t || TranxferService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    TranxferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TranxferService, factory: TranxferService.ɵfac, providedIn: 'root' });
    return TranxferService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TranxferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "KpOO":
/*!*****************************************************************************!*\
  !*** ./src/app/components/custom/deleteusermodal/deleteusermodal.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DeleteUserModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserModalModule", function() { return DeleteUserModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _deleteusermodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteusermodal.component */ "eQSR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../nz-spinner/nz-spinner.module */ "gT/A");









var DeleteUserModalModule = /** @class */ (function () {
    function DeleteUserModalModule() {
    }
    DeleteUserModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DeleteUserModalModule });
    DeleteUserModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DeleteUserModalModule_Factory(t) { return new (t || DeleteUserModalModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
            ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] });
    return DeleteUserModalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DeleteUserModalModule, { declarations: [_deleteusermodal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteUserModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"]], exports: [_deleteusermodal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteUserModalComponent"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteUserModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
                ],
                declarations: [
                    _deleteusermodal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteUserModalComponent"]
                ],
                providers: [],
                entryComponents: [
                    _deleteusermodal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteUserModalComponent"]
                ],
                exports: [
                    _deleteusermodal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteUserModalComponent"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "MVED":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user-managment/edit-user/edit-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var src_app_models_userlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/userlist */ "26L6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/validators/user.validator */ "TQtI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_custom_deleteusermodal_deleteusermodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/custom/deleteusermodal/deleteusermodal.component */ "eQSR");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/nz-spinner/nz-spinner */ "b+Yv");
























function EditUserComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.partnerService.preloaderImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditUserComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EditUserComponent_div_33_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onUploadImagen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditUserComponent_div_33_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r14.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.isActivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.sanitizer.bypassSecurityTrustUrl(ctx_r1.image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "IMAGEN_PERFIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "CAMBIAR_IMAGEN_PERFIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 11, "CUT_PROFILE_IMAGE_USER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 13, "CANCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 15, "OK"));
} }
function EditUserComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_44_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "EMAIL"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.emailDisabled)("ngModel", ctx_r4.user.email);
} }
var _c0 = function (a0) { return { identifier: a0 }; };
function EditUserComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_45_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.user.eid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 3, "EID", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r5.partnerService.partner.uniqueIdentifier)), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.user.eid)("disabled", ctx_r5.isActivo);
} }
function EditUserComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_46_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.user.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "TELEFONO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.isActivo)("ngModel", ctx_r6.user.phone);
} }
function EditUserComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_47_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.user.adress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "DIRECCION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r7.isActivo)("ngModel", ctx_r7.user.adress);
} }
function EditUserComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_48_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.user.postalcode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "CODIGO_POSTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r8.isActivo)("ngModel", ctx_r8.user.postalcode);
} }
function EditUserComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 74, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_div_49_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.user.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "CIUDAD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.isActivo)("ngModel", ctx_r9.user.city);
} }
function EditUserComponent_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var country_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r36.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", country_r36.name, " ");
} }
function EditUserComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ERROR_GUARDAR_DATOS"));
} }
function EditUserComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.message, " ");
} }
function EditUserComponent_button_71_nz_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-spinner");
} }
function EditUserComponent_button_71_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "GUARDAR"));
} }
function EditUserComponent_button_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditUserComponent_button_71_nz_spinner_1_Template, 1, 0, "nz-spinner", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditUserComponent_button_71_div_2_Template, 3, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r13.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r13.loading);
} }
var _c1 = function (a0) { return { "margin": a0 }; };
var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(partnerService, userService, router, messageService, modalService, translate, route, sanitizer) {
        var _this = this;
        this.partnerService = partnerService;
        this.userService = userService;
        this.router = router;
        this.messageService = messageService;
        this.modalService = modalService;
        this.translate = translate;
        this.route = route;
        this.sanitizer = sanitizer;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].STATIC_CONTENT;
        this.user = new src_app_models_userlist__WEBPACK_IMPORTED_MODULE_0__["UserList"];
        this.loading_page = true;
        this.loading = false;
        this.loadingDelete = false;
        this.submitted = false;
        this.updateError = false;
        this.image = this.staticContentUrl + "img/add-user.png";
        this.id = 0;
        this.emailDisabled = true;
        this.showMessage = false;
        this.message = "";
        this.isActivo = true;
        this.isShowEid = false;
        this.isShowEmail = false;
        this.isShowRequiredEid = false;
        this.isShowRequiredEmail = false;
        // console.log("constructor");
        route.params.subscribe(function (val) {
            _this.loading_page = true;
            // put the code from `ngOnInit` here
            _this.id = +_this.route.snapshot.paramMap.get('id');
            _this.loadUser();
        });
    }
    EditUserComponent.prototype.ngOnInit = function () {
        // console.log("ngOnInit");
        this.userService.getCompanyUsers();
        this.loadUser();
    };
    EditUserComponent.prototype.loadUser = function () {
        var _this = this;
        // console.log("loadUser")
        if (!this.userService.currentUserValue.isAdminUserId) {
            this.router.navigate(['/profile']);
        }
        var interval = setInterval(function () {
            if (_this.userService.companyUser) {
                _this.user = _this.userService.companyUser.userList.find(function (u) { return u.userId == _this.id; });
                // console.log("USER:");
                // console.log(this.user);
                _this.image = _this.user.profileImage == null ? _this.staticContentUrl + "img/add-user.png" : _this.user.profileImage;
                _this.partnerId = _this.user.partnerId;
                _this.loginType = _this.partnerService.partner.loginType;
                _this.isActivo = +_this.user.active == 1;
                _this.emailDisabled = _this.isActivo;
                if (_this.emailDisabled && (_this.partnerService.partner.loginType == 2 || _this.partnerService.partner.loginType == 3 || _this.partnerService.partner.loginType == 5
                    || _this.partnerService.partner.loginType == 7 || _this.partnerService.partner.loginType == 8 || _this.partnerService.partner.loginType == 10)) {
                    if (_this.user.email == null || _this.user.email.trim() == "") {
                        _this.emailDisabled = false;
                    }
                }
                _this.ruleShowEid();
                _this.ruleShowEmail();
                _this.ruleShowRequiredEmail();
                _this.loading_page = false;
                clearInterval(interval);
            }
        }, 500);
    };
    EditUserComponent.prototype.isValidString = function (str) {
        return str !== null && str !== undefined && typeof str === "string" && str.length > 0;
    };
    EditUserComponent.prototype.ruleShowEid = function () {
        if (this.loginType == 2 || this.loginType == 5) {
            this.isShowEid = true;
        }
    };
    EditUserComponent.prototype.ruleShowEmail = function () {
        this.isShowEmail = true;
    };
    EditUserComponent.prototype.ruleShowRequiredEmail = function () {
        if (this.loginType == 1 || this.loginType == 5 || this.loginType == 4 || this.loginType == 6 || this.loginType == 11) {
            this.isShowRequiredEmail = true;
        }
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a;
        this.updateError = false;
        this.showMessage = false;
        if (this.user.name != null)
            this.user.name = this.user.name.trim();
        if (this.user.surname != null)
            this.user.surname = this.user.surname.trim();
        if (this.user.email != null)
            this.user.email = this.user.email.trim();
        if (this.user.eid != null)
            this.user.eid = this.user.eid.trim();
        if (this.user.phone != null)
            this.user.phone = this.user.phone.trim();
        this.user.country = (_a = this.partnerService.countries.find(function (x) { return x.code == _this.user.countryCode; })) === null || _a === void 0 ? void 0 : _a.name;
        this.loading = true;
        if (!this.isValidString(this.user.name)) {
            this.message = this.translate.instant('MULTIUSER.VALIDATION1');
            this.showMessage = true;
            this.loading = false;
            return;
        }
        if (this.loginType == 2 || this.loginType == 5) {
            if (!this.isValidString(this.user.eid)) {
                this.message = this.translate.instant('MULTIUSER.VALIDATION2').replace("{{identifier}}", this.partnerService.partner.uniqueIdentifier);
                this.showMessage = true;
                this.loading = false;
                return;
            }
        }
        if (this.loginType == 1 || this.loginType == 4 || this.loginType == 5 || this.loginType == 6 || this.loginType == 11) {
            if (!this.isValidString(this.user.email)) {
                this.message = this.translate.instant('MULTIUSER.VALIDATION3');
                this.showMessage = true;
                this.loading = false;
                return;
            }
            if (src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_9__["UserValidator"].validEmail(this.user.email) == null) {
                this.message = this.translate.instant('MULTIUSER.VALIDATION4');
                this.showMessage = true;
                this.loading = false;
                return;
            }
        }
        if (this.user.phone != null && this.user.phone.length > 0) {
            if (src_app_validators_user_validator__WEBPACK_IMPORTED_MODULE_9__["UserValidator"].validPhone(this.user.phone) == null) {
                this.message = this.translate.instant('MULTIUSER.VALIDATION11');
                this.showMessage = true;
                this.loading = false;
                return;
            }
        }
        this.showMessage = false;
        this.message = "";
        if (this.image == this.staticContentUrl + "img/profileDefaultMenu.png" || this.image == this.staticContentUrl + "img/add-user.png") {
            this.user.profileImage = null;
        }
        else {
            this.user.profileImage = this.image;
        }
        this.userService.updateUserByAdminCompany(this.user).then(function (result) {
            if (result.status != 200) {
                _this.message = result.message;
                _this.showMessage = true;
                _this.loading = false;
                return;
            }
            else {
                _this.translate.get('PERFIL_MODIFICADO').subscribe(function (res) { return _this.messageService.add(res, "ok"); });
                _this.loading = false;
                // this.router.navigate([this.router.url]);
                // this.router.navigate(['/user-list']);
                // this.router.navigate(['/home']);
            }
        }, function (error) {
            _this.translate.get('ERROR_MODIFICAR_PERFIL').subscribe(function (res) {
                _this.messageService.add(res, "error");
                _this.updateError = true;
                _this.loading = false;
            });
        });
    };
    EditUserComponent.prototype.getBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    EditUserComponent.prototype.onUploadImagen = function ($event) {
        var _this = this;
        var target = $event.target;
        if (target.files != null) {
            if (target.files.length > 0) {
                var file = target.files[0];
                var value = target.value.toLowerCase();
                var ext = value.split('.').pop();
                var name_1 = target.name.toLowerCase();
                var exts = ["png", "jpg", "jpeg", "gif"];
                if (name_1 == "favicon") {
                    exts = ["png", "jpg", "jpeg", "gif", "ico"];
                }
                if (exts.indexOf(ext) != -1) {
                    this.getBase64(file).then(function (result) {
                        _this.image = result.toString();
                    });
                }
                else {
                    this.translate.get('ONLY_IMAGES_ERROR').subscribe(function (res) { return _this.messageService.add(res, "error"); });
                }
            }
        }
    };
    EditUserComponent.prototype.deletetUser = function () {
        var _this = this;
        var idChild = this.user.userId;
        var userChild = this.userService.companyUser.userList.find(function (u) { return u.userId == idChild; });
        var modalRef = this.modalService.open(_components_custom_deleteusermodal_deleteusermodal_component__WEBPACK_IMPORTED_MODULE_11__["DeleteUserModalComponent"]);
        modalRef.componentInstance.usuario = userChild.name;
        modalRef.result.then(function (result) { }, function (reason) {
            if (reason === 'OK') {
                var userparam = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
                userparam.id = userChild.userId;
                _this.userService.deleteUser(userparam, _this.partnerService.partner.apiKey).then(function (result) {
                    if (result.status != 200) {
                        _this.messageService.add(_this.translate.instant('COMP_USER_LIST.REM_FAILED'), "error");
                        return;
                    }
                    else {
                        _this.messageService.add(_this.translate.instant('COMP_USER_LIST.REM_OK'), "ok");
                        _this.userService.getCompanyUsers();
                        _this.router.navigate(['/home']);
                    }
                }, function (error) {
                    _this.messageService.add(_this.translate.instant('COMP_USER_LIST.REM_FAILED'), "error");
                });
            }
        });
    };
    EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"])); };
    EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 76, vars: 46, consts: [[4, "ngIf"], ["id", "header"], [1, "container-fluid", "m767"], [1, "navbar-nav", "float-left", "mr-auto", "ml-3", "pl-1"], [1, "nav-item"], [1, "ml-3", "pl-1"], [1, "container-fluid", "m767", "pr-4"], ["href", "javascript:history.back()", 1, "d-flex", "position-absolute", "mt-3"], [1, "icon-left-big-arrow", "mr-2"], [1, "row", "align-items-start"], [1, "col-lg-12", 3, "ngStyle"], [1, "card"], [1, "container-fluid", "pr-4", "pl-4"], [1, "pform", "formdatauser", 3, "ngSubmit"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["class", "picture-container", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12", 3, "ngClass"], [1, "form-group"], ["type", "text", "required", "", "name", "name", "maxlength", "100", 1, "form-control", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["name", "ngModel"], ["type", "text", "required", "", "name", "surname", "maxlength", "100", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], ["surname", "ngModel"], ["class", "col-lg-6 col-md-6 col-sm-6 col-xs-12", 4, "ngIf"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], ["required", "", "name", "country", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["disabled", "", 3, "value", "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "mb-4", "mt-2"], ["style", "font-size: 80%; color:#dc3545;", 4, "ngIf"], [1, "errormen"], ["class", "loginError d-inline-flex align-items-center", 4, "ngIf"], [1, "btnform"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "mt-2", "order-lg-12"], [1, "requiredtext", "text-right", "float-left", "float-lg-right", "mt-2"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12", "mt-2"], ["class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [1, "app-loading"], [1, "logo"], ["width", "100", "height", "100", 3, "src"], [1, "picture-container"], [1, "upload-wrapper"], [1, ""], [1, "photo"], ["name", "favicon", "type", "file", "accept", "image/x-png,image/jpeg,image/gif,image/x-icon", 2, "display", "none", 3, "disabled", "change"], ["profileImage", ""], ["type", "button", 1, "btn", "bback", 3, "click"], ["width", "84", "height", "84", 3, "src"], [1, "text"], [1, "title"], [1, "subtitle"], ["id", "modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "img-container"], ["id", "image", "src", ""], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "button", "id", "crop", 1, "btn", "btn-primary"], ["type", "email", "required", "", "name", "email", "maxlength", "100", 1, "form-control", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["email", "ngModel"], ["type", "text", "required", "", "name", "eid", "maxlength", "100", 1, "form-control", 3, "ngModel", "disabled", "placeholder", "ngModelChange"], ["eid", "ngModel"], ["type", "text", "required", "", "name", "phone", "maxlength", "20", 1, "form-control", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "required", "", "name", "adress", "maxlength", "100", 1, "form-control", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["adress", "ngModel"], ["type", "text", "required", "", "name", "postalcode", "maxlength", "10", 1, "form-control", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["postalcode", "ngModel"], ["type", "text", "required", "", "name", "city", "maxlength", "50", 1, "form-control", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], ["city", "ngModel"], [3, "value"], [2, "font-size", "80%", "color", "#dc3545"], [1, "loginError", "d-inline-flex", "align-items-center"], [1, "icon-exclamation-tri"], [1, "btn", "btn-primary", 3, "disabled"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditUserComponent_div_0_Template, 4, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "form", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditUserComponent_Template_form_ngSubmit_30_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EditUserComponent_div_33_Template, 35, 17, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 18, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_36_listener($event) { return ctx.user.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 20, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_input_ngModelChange_41_listener($event) { return ctx.user.surname = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, EditUserComponent_div_44_Template, 5, 5, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, EditUserComponent_div_45_Template, 5, 8, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, EditUserComponent_div_46_Template, 5, 5, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, EditUserComponent_div_47_Template, 5, 5, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, EditUserComponent_div_48_Template, 5, 5, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, EditUserComponent_div_49_Template, 5, 5, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "select", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditUserComponent_Template_select_ngModelChange_52_listener($event) { return ctx.user.countryCode = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, EditUserComponent_option_56_Template, 2, 2, "option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EditUserComponent_div_58_Template, 4, 3, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, EditUserComponent_div_60_Template, 3, 1, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "font");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, EditUserComponent_button_71_Template, 3, 3, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading_page);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 30, "EDIT_USER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 32, "ATRAS"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c1, !ctx.userService.currentUserValue.inJira ? "0 auto" : ""));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 34, "DATOS_PERSONALES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.partnerService.partner.hasFullProfile ? "no-photo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 36, "NOMBRE"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isActivo)("ngModel", ctx.user.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.partnerService.partner.hasFullProfile ? "no-photo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 38, "APELLIDOS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.surname);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.isActivo ? "" : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShowEmail);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isShowEid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.partnerService.partner.hasFullProfile);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.countryCode)("disabled", ctx.isActivo);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", null)("hidden", ctx.user.countryCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 40, "PAIS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.partnerService.countries);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.updateError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 42, "CAMPOS_OBLIGATORIOS"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isActivo);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_15__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ21lbnQvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return EditUserComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-user',
                templateUrl: './edit-user.component.html',
                styleUrls: ['./edit-user.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "Y5ga":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user-managment/user-list/user-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "2hxB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_infomodal_infomodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/infomodal/infomodal.component */ "nY9P");
/* harmony import */ var _components_custom_deleteusermodal_deleteusermodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/custom/deleteusermodal/deleteusermodal.component */ "eQSR");
/* harmony import */ var src_app_services_email_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/email.service */ "cfV7");
/* harmony import */ var src_app_validators_bytes_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/validators/bytes.validator */ "2riZ");
/* harmony import */ var _components_custom_desactiveservicemodal_desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/custom/desactiveservicemodal/desactiveservicemodal.component */ "fvar");
/* harmony import */ var src_app_services_tranxfer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/tranxfer.service */ "KCgV");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/nz-spinner/nz-spinner */ "b+Yv");































function UserListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_div_10_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.validateAddUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r0.totalUsers == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 10, "MULTIUSER.ADD_USER_TEXT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 12, "MULTIUSER.TOTAL_USERS"), ": ", ctx_r0.totalUsers, "/", ctx_r0.maxLicense, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, "MULTIUSER.ACTIVE_USERS"), ": ", ctx_r0.activeUsers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 16, "MULTIUSER.NON_ACTIVE_USERS"), ": ", ctx_r0.usersNotActivated, " ");
} }
function UserListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "LOAD_INFO"));
} }
function UserListComponent_div_17_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 47);
} }
function UserListComponent_div_17_a_12_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_div_17_a_12_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.deleteUser(user_r7.userConfigId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.REMOVE_USER"));
} }
function UserListComponent_div_17_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.ACTIVE_USER"));
} }
function UserListComponent_div_17_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.INACTIVE_USER"));
} }
function UserListComponent_div_17_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "YOU"), ")");
} }
function UserListComponent_div_17_tr_55_ng_container_1_td_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.ACTIVE_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_td_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.INACTIVE_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserListComponent_div_17_tr_55_ng_container_1_td_4_div_1_Template, 3, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserListComponent_div_17_tr_55_ng_container_1_td_4_div_2_Template, 3, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !serviceTypeConfig_r18.isActive);
} }
function UserListComponent_div_17_tr_55_ng_container_1_td_5_Template(rf, ctx) { if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "font", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserListComponent_div_17_tr_55_ng_container_1_td_5_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return serviceTypeConfig_r18.isActive = $event; })("click", function UserListComponent_div_17_tr_55_ng_container_1_td_5_Template_input_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.confirmDialog($event, user_r7.userConfigId, serviceTypeConfig_r18.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, "COMP_USER_LIST.ACTIVATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "serviceType_", user_r7.userConfigId, "_", serviceTypeConfig_r18.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("name", "serviceType_", user_r7.userConfigId, "_", serviceTypeConfig_r18.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", serviceTypeConfig_r18.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("for", "serviceType_", user_r7.userConfigId, "_", serviceTypeConfig_r18.code, "");
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.ASSIGNED_SPACE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.ASSIGNED_SPACE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.ASSIGNED_LICENSES"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r25.GetSpaceWithDecimals(serviceTypeConfig_r18.available), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" (+", serviceTypeConfig_r18.assigned, " GB)");
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r26.GetSpaceWithDecimals(serviceTypeConfig_r18.available), "");
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", serviceTypeConfig_r18.assigned, "");
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.REQUESTED_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.NOT_REQUESTED_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserListComponent_div_17_tr_55_ng_container_1_div_17_div_1_Template, 3, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserListComponent_div_17_tr_55_ng_container_1_div_17_div_2_Template, 3, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !serviceTypeConfig_r18.isActive);
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.REQUESTED_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.NOT_REQUESTED_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserListComponent_div_17_tr_55_ng_container_1_div_18_div_1_Template, 3, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserListComponent_div_17_tr_55_ng_container_1_div_18_div_2_Template, 3, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.assigned);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !serviceTypeConfig_r18.assigned);
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.REQUESTED_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "COMP_USER_LIST.NOT_REQUESTED_SERVICE"));
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", serviceTypeConfig_r18.used, "");
} }
function UserListComponent_div_17_tr_55_ng_container_1_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r33.GetSpaceWithDecimals(serviceTypeConfig_r18.used), "");
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 72);
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_33_Template(rf, ctx) { if (rf & 1) {
    var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_div_17_tr_55_ng_container_1_div_33_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.increaseDecreaseServiceConfig(false, serviceTypeConfig_r18.code, user_r7.userConfigId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserListComponent_div_17_tr_55_ng_container_1_div_33_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; return serviceTypeConfig_r18.assigned = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_div_17_tr_55_ng_container_1_div_33_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r66.increaseDecreaseServiceConfig(true, serviceTypeConfig_r18.code, user_r7.userConfigId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", serviceTypeConfig_r18.assigned);
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.GetSpaceWithDecimals(serviceTypeConfig_r18.available));
} }
function UserListComponent_div_17_tr_55_ng_container_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](serviceTypeConfig_r18.available);
} }
function UserListComponent_div_17_tr_55_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserListComponent_div_17_tr_55_ng_container_1_td_4_Template, 3, 2, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserListComponent_div_17_tr_55_ng_container_1_td_5_Template, 7, 10, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "font", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserListComponent_div_17_tr_55_ng_container_1_p_11_Template, 3, 3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserListComponent_div_17_tr_55_ng_container_1_p_12_Template, 3, 3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserListComponent_div_17_tr_55_ng_container_1_p_13_Template, 3, 3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserListComponent_div_17_tr_55_ng_container_1_p_14_Template, 4, 2, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserListComponent_div_17_tr_55_ng_container_1_p_15_Template, 2, 1, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserListComponent_div_17_tr_55_ng_container_1_p_16_Template, 2, 1, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserListComponent_div_17_tr_55_ng_container_1_div_17_Template, 3, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserListComponent_div_17_tr_55_ng_container_1_div_18_Template, 3, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "font", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserListComponent_div_17_tr_55_ng_container_1_div_24_Template, 3, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserListComponent_div_17_tr_55_ng_container_1_div_25_Template, 3, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UserListComponent_div_17_tr_55_ng_container_1_p_26_Template, 2, 1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UserListComponent_div_17_tr_55_ng_container_1_p_27_Template, 2, 1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UserListComponent_div_17_tr_55_ng_container_1_div_28_Template, 1, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "font", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UserListComponent_div_17_tr_55_ng_container_1_div_33_Template, 8, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UserListComponent_div_17_tr_55_ng_container_1_div_34_Template, 3, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, UserListComponent_div_17_tr_55_ng_container_1_div_35_Template, 3, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](serviceTypeConfig_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r19.familyUser.isCustomizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r19.familyUser.isCustomizable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 20, "COMP_USER_LIST.ASSIGNED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "CAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "BAK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "CAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "BAK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", serviceTypeConfig_r18.code === "TNX" ? serviceTypeConfig_r18.code : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", serviceTypeConfig_r18.code === "ACU" || serviceTypeConfig_r18.code === "ATS" || serviceTypeConfig_r18.code === "GRA" || serviceTypeConfig_r18.code === "ELE" ? serviceTypeConfig_r18.code : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 22, "COMP_USER_LIST.USED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.used == "" && serviceTypeConfig_r18.isUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.used == "" && !serviceTypeConfig_r18.isUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.used != "" && serviceTypeConfig_r18.code !== "CAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.used != "" && serviceTypeConfig_r18.code === "CAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r19.IsCorrectSpace(serviceTypeConfig_r18.used, serviceTypeConfig_r18.assigned, serviceTypeConfig_r18.available) && serviceTypeConfig_r18.used != "" && serviceTypeConfig_r18.code === "CAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 24, "COMP_USER_LIST.TOTAL_AVAILABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.code === "CAC" && serviceTypeConfig_r18.isActive && ctx_r19.hiredServices.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.code === "BAK");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", serviceTypeConfig_r18.code !== "CAC" && serviceTypeConfig_r18.code !== "BAK" && serviceTypeConfig_r18.code !== "ACU");
} }
function UserListComponent_div_17_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserListComponent_div_17_tr_55_ng_container_1_Template, 36, 26, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var serviceTypeConfig_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", serviceTypeConfig_r18.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !serviceTypeConfig_r18.denyEmployeeAccess);
} }
function UserListComponent_div_17_tr_56_nz_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-spinner");
} }
function UserListComponent_div_17_tr_56_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "GUARDAR"));
} }
function UserListComponent_div_17_tr_56_Template(rf, ctx) { if (rf & 1) {
    var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_div_17_tr_56_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77); var user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.saveConfigUser(user_r7.userConfigId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserListComponent_div_17_tr_56_nz_spinner_7_Template, 1, 0, "nz-spinner", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UserListComponent_div_17_tr_56_div_8_Template, 3, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.loading);
} }
function UserListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_div_17_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); var user_r7 = ctx.$implicit; var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r78.editUser(user_r7.userConfigId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserListComponent_div_17_div_11_Template, 1, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserListComponent_div_17_a_12_Template, 3, 3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserListComponent_div_17_div_16_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserListComponent_div_17_div_17_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserListComponent_div_17_span_20_Template, 3, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_div_17_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); var user_r7 = ctx.$implicit; var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r80.loadInitialState(user_r7.userConfigId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, UserListComponent_div_17_tr_55_Template, 2, 2, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, UserListComponent_div_17_tr_56_Template, 9, 2, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r7 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 20, "COMP_USER_LIST.USER_INFORMATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r7.isAdminUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r7.isAdminUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", user_r7.profileImage != null ? user_r7.profileImage : ctx_r2.staticContentUrl + "img/profileDefaultMenu.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", user_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r7.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r7.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", user_r7.name, " ", user_r7.surname, " ", user_r7.surname2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r7.isAdminUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#collapse", user_r7.userConfigId, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "collapse", user_r7.userConfigId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 22, "COMP_USER_LIST.SERVICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 24, "COMP_USER_LIST.ACTIVATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 26, "COMP_USER_LIST.ASSIGNED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 28, "COMP_USER_LIST.USED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 30, "COMP_USER_LIST.TOTAL_AVAILABLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", user_r7.servicesTypeConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.familyUser.isCustomizable || ctx_r2.hiredServices.length !== 0);
} }
function UserListComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "MULTIUSER.TEXT3"));
} }
function UserListComponent_div_19_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "font");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "font");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "font");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r82.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r82.available + item_r82.used, " GB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r82.used, " GB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r82.available, " GB");
} }
function UserListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserListComponent_div_19_tr_20_Template, 13, 4, "tr", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, "COMP_USER_LIST.SERVICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, "COMP_USER_LIST.TOTAL_ACQUIRED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 9, "COMP_USER_LIST.TOTAL_ASSIGNED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 11, "COMP_USER_LIST.TOTAL_AVAILABLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.hiredServices);
} }
var UserListComponent = /** @class */ (function () {
    function UserListComponent(partnerService, userService, router, formBuilder, messageService, translate, sanitizer, modalService, emailService, tranxferService) {
        this.partnerService = partnerService;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.translate = translate;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.emailService = emailService;
        this.tranxferService = tranxferService;
        this.staticContentUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].STATIC_CONTENT;
        this.terms = false;
        this.image = this.staticContentUrl + "img/profileDefaultMenu.png";
        this.usersConfig = [];
        this.hiredServices = [];
        this.maxLicense = 0;
        this.totalUsers = 0;
        this.activeUsers = 0;
        this.usersNotActivated = 0;
        this.pendingUsers = 0;
        this.loading = false;
        this.user = this.userService.currentUserValue;
        this.terms = this.user.checkTermsAcceptDate;
        this.image = this.user.profileImage;
    }
    UserListComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                localStorage.removeItem('userConfigList');
                if (!this.userService.currentUserValue.isAdminUserId) {
                    this.router.navigate(['/profile']);
                }
                this.userService.getFamilyUser().then(function (result) {
                    console.log(_this.userService.familyUser);
                    _this.familyUser = _this.userService.familyUser;
                    // this.userConfig = this.familyUser.userConfig.filter(x => x.userId != this.user.id);
                    _this.usersConfig = _this.familyUser.usersConfig;
                    _this.hiredServices = _this.familyUser.adminHiredServices;
                    _this.maxLicense = _this.familyUser.maxLicense;
                    _this.totalUsers = _this.familyUser.totalUsers;
                    _this.activeUsers = _this.familyUser.activeUsers;
                    _this.usersNotActivated = _this.familyUser.usersNotActivated;
                    _this.pendingUsers = _this.familyUser.pendingUsers;
                });
                this.userService.getCompanyUsers();
                return [2 /*return*/];
            });
        });
    };
    UserListComponent.prototype.onCheckType = function (i) {
        var id = "eid" + i.toString();
        var input = document.getElementById(id);
        var type = input.attributes["type"].value;
        if (type === "password") {
            input.attributes["type"].value = "text";
        }
        else {
            input.attributes["type"].value = "password";
        }
    };
    UserListComponent.prototype.validateAddUser = function () {
        if (this.pendingUsers == 0) {
            var modalRef = this.modalService.open(_components_infomodal_infomodal_component__WEBPACK_IMPORTED_MODULE_11__["InfoModalComponent"]);
            modalRef.componentInstance.message = this.translate.instant('COMP_USER_LIST.VALIDATE_USER');
            return;
        }
        else {
            this.router.navigate(['user-managment/add-user', this.user.id]);
        }
    };
    UserListComponent.prototype.editUser = function (userid) {
        if (userid == this.user.id)
            this.router.navigate(['my-profile']);
        else
            this.router.navigate(['user-managment/edit-user', userid]);
    };
    UserListComponent.prototype.deleteUser = function (idChild) {
        var _this = this;
        var userChild = this.userService.companyUser.userList.find(function (u) { return u.userId == idChild; });
        var modalRef = this.modalService.open(_components_custom_deleteusermodal_deleteusermodal_component__WEBPACK_IMPORTED_MODULE_12__["DeleteUserModalComponent"]);
        modalRef.componentInstance.usuario = userChild.name;
        modalRef.result.then(function (result) { }, function (reason) {
            if (reason === 'OK') {
                var userparam = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
                userparam.id = userChild.userId;
                _this.userService.deleteUser(userparam, _this.partnerService.partner.apiKey).then(function (result) {
                    if (result.status != 200) {
                        _this.messageService.add(_this.translate.instant('COMP_USER_LIST.REM_FAILED'), "error");
                        return;
                    }
                    else {
                        _this.messageService.add(_this.translate.instant('COMP_USER_LIST.REM_OK'), "ok");
                        _this.ngOnInit();
                    }
                }, function (error) {
                    _this.messageService.add(_this.translate.instant('COMP_USER_LIST.REM_FAILED'), "error");
                });
            }
        });
    };
    UserListComponent.prototype.sendEmail = function (email) {
        var _this = this;
        this.emailService.sendEmail(email, this.user.partnerId.toString()).then(function (result) {
            if (result)
                _this.translate.get('RESEND_PASSWORD.OK').subscribe(function (res) { return _this.messageService.add(res, "ok"); });
            else
                _this.translate.get('RESEND_PASSWORD.FAIL').subscribe(function (res) { return _this.messageService.add(res, "error"); });
        });
    };
    UserListComponent.prototype.saveConfigUser = function (userConfigId) {
        var _this = this;
        this.loading = true;
        var userConfigUpdate = this.familyUser.usersConfig.find(function (uc) { return uc.userConfigId == userConfigId; });
        var acronisService = userConfigUpdate.servicesTypeConfig.find(function (x) { return x.code === "CAC"; });
        if (acronisService && !acronisService.isActive) {
            acronisService.assigned = 0;
        }
        this.userService.updateUserConfig(userConfigUpdate).then(function (result) {
            if (result.result === -3) {
                _this.messageService.add(_this.translate.instant('COMP_USER_LIST.ERROR_ACRONIS_SPACE'), "error");
                _this.loading = false;
                return;
            }
            if (result.result != 0) {
                _this.messageService.add(_this.translate.instant('COMP_USER_LIST.SAVE_CONFIG_FAILED'), "error");
                _this.loading = false;
                return;
            }
            else {
                _this.messageService.add(_this.translate.instant('COMP_USER_LIST.SAVE_CONFIG'), "ok");
                _this.hiredServices = result.adminHiredServices;
                localStorage.setItem('userConfigList', JSON.stringify(_this.usersConfig.find(function (x) { return x.userConfigId === userConfigId; }))); // Saving current user
                _this.loading = false;
            }
        }, function (error) {
            _this.messageService.add(_this.translate.instant('COMP_USER_LIST.SAVE_CONFIG_FAILED'), "error");
            _this.loading = false;
        });
    };
    UserListComponent.prototype.increaseDecreaseServiceConfig = function (add, serviceType, userConfigId) {
        if (add === void 0) { add = true; }
        switch (serviceType) {
            case 'CAC':
                var userConfig = this.usersConfig.find(function (x) { return x.userConfigId == userConfigId; }).servicesTypeConfig.find(function (x) { return x.code === serviceType; });
                var hiredService = this.hiredServices.find(function (x) { return x.serviceTypeCode === serviceType; });
                var totalAmountOtherUsers_1 = 0;
                this.usersConfig.filter(function (x) { return x.userConfigId !== userConfigId; })
                    .map(function (x) { return x.servicesTypeConfig
                    .find(function (y) { return y.code === serviceType; }); })
                    .forEach(function (element) { totalAmountOtherUsers_1 += element.assigned; });
                if (add) {
                    if ((totalAmountOtherUsers_1 + userConfig.assigned) >= (hiredService.available + hiredService.used))
                        return;
                    userConfig.assigned += 10;
                }
                else {
                    if (userConfig.assigned <= 0)
                        return;
                    userConfig.assigned -= 10;
                }
                break;
        }
    };
    UserListComponent.prototype.loadInitialState = function (userConfigId) {
        if (!document.getElementById('collapse' + userConfigId).classList.contains('show')) { // only if is displaying
            if (localStorage.getItem('userConfigList')) { // Previous value user
                var userConfig = JSON.parse(localStorage.getItem('userConfigList'));
                this.usersConfig[this.usersConfig.findIndex(function (x) { return x.userConfigId == userConfig.userConfigId; })] = userConfig;
            }
            localStorage.setItem('userConfigList', JSON.stringify(this.usersConfig.find(function (x) { return x.userConfigId == userConfigId; }))); // Saving current user
        }
    };
    UserListComponent.prototype.GetSpaceWithDecimals = function (bytes) {
        return (bytes > 0) ? src_app_validators_bytes_validator__WEBPACK_IMPORTED_MODULE_14__["BytesValidator"].GetSpaceWithDecimals(bytes) : 0;
    };
    UserListComponent.prototype.IsCorrectSpace = function (currentSpace, assignedSpace, availableSpace) {
        var bytesAssignedSpace = src_app_validators_bytes_validator__WEBPACK_IMPORTED_MODULE_14__["BytesValidator"].FormatBytes(assignedSpace + ' GB');
        return (bytesAssignedSpace + availableSpace) > currentSpace;
    };
    UserListComponent.prototype.confirmDialog = function (e, userConfigId, serviceType) {
        var _this = this;
        if (!e.target.checked) {
            if (this.usersConfig.find(function (x) { return x.userConfigId == userConfigId; }).servicesTypeConfig.find(function (x) { return x.code === serviceType; }).isUsed) {
                var modalRefService = this.modalService.open(_components_custom_desactiveservicemodal_desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_15__["DesactiveservicemodalComponent"]);
                modalRefService.componentInstance.message = this.translate.instant('DESACTIVE_SERVICE_MODAL.MESSAGE');
                modalRefService.result.then(function (result) { }, function (reason) {
                    if (reason !== 'OK') {
                        _this.usersConfig.find(function (x) { return x.userConfigId == userConfigId; }).servicesTypeConfig.find(function (x) { return x.code === serviceType; }).isActive = true;
                    }
                });
            }
        }
    };
    UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tranxfer_service__WEBPACK_IMPORTED_MODULE_16__["TranxferService"])); };
    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 22, vars: 11, consts: [[1, "user-list-com"], [1, ""], [1, "datausers", "mt-2"], [1, "card", "mb-5"], ["class", "row align-items-center", 4, "ngIf"], [1, "card"], ["id", "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], ["class", "mt-5", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "row", "align-items-center"], [1, "col-xl-3", "col-lg-3", "col-md-12", "col-sm-12"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", 3, "click"], [1, "icon-user-plus"], [1, "col-xl-9", "col-lg-9", "col-md-12", "col-sm-12"], [1, "d-inline-flex", "align-items-center", "list"], [1, "d-inline-flex", "align-items-center", "grey"], [1, "icon-users"], [1, "d-inline-flex", "align-items-center", "activegreen"], [1, "d-inline-flex", "align-items-center", "desactivered"], [1, "col-md-12"], [1, "m-3"], ["id", "headingOne", 1, "card-header"], [1, "mt-2", "mb-0"], [1, "d-inline-flex", "align-items-center"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, ""], ["aria-hidden", "true", 1, "icon-menu-points"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], ["class", "dropdown-divider", 4, "ngIf"], ["class", "dropdown-item", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], [1, "foto"], ["width", "30", "height", "30", 3, "src", "alt"], ["class", "user-status active", 4, "ngIf"], ["class", "user-status inactive", 4, "ngIf"], [1, "username"], ["class", "you", 4, "ngIf"], ["data-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "btn", "btn-link", "collapsed", "float-right", 3, "href", "click"], [1, "icon-bottom-arrow"], ["aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse", 3, "id"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-responsive"], ["scope", "col"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "dropdown-divider"], [1, "user-status", "active"], [1, "fas", "fa-circle", 3, "title"], [1, "user-status", "inactive"], [1, "you"], [3, "ngSwitch"], ["scope", "row"], [1, "tableth"], [1, "d-flex", "align-items-center", "dper"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "strong", 4, "ngSwitchCase"], ["class", "strong", 4, "ngSwitchDefault"], [1, "d-flex"], ["class", "service-status active", 4, "ngIf"], ["class", "service-status inactive", 4, "ngIf"], ["class", "icon-exclamation-tri errormen", "title", "Ha excedido el uso m\u00E1ximo", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], ["class", "", 4, "ngIf"], [1, "service-status", "active"], [1, "service-status", "inactive"], [1, "custom-control", "custom-switch"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "name", "ngModel", "ngModelChange", "click"], [1, "custom-control-label", 3, "for"], [1, "strong"], ["title", "Ha excedido el uso m\u00E1ximo", 1, "icon-exclamation-tri", "errormen"], [1, "input-group"], [1, "input-group-btn", 3, "click"], ["type", "button", "data-type", "minus", "data-field", "quant[1]", 1, "btn", "btn-default", "btn-number"], [1, "fas", "fa-minus"], ["type", "text", "name", "quant[1]", "readonly", "", 1, "form-control", "input-number", 3, "ngModel", "ngModelChange"], ["type", "button", "data-type", "plus", "data-field", "quant[1]", 1, "btn", "btn-default", "btn-number"], [1, "fas", "fa-plus"], [1, "btn", "btn-primary", 3, "click"], [1, "mt-5"], [1, "table", "mb-0"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "text-center"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserListComponent_div_10_Template, 22, 18, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserListComponent_div_11_Template, 5, 3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserListComponent_div_17_Template, 57, 32, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserListComponent_p_18_Template, 3, 3, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserListComponent_div_19_Template, 21, 13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, "MULTIUSER.TEXT1"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalUsers > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalUsers == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "MULTIUSER.TEXT2"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.usersConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hiredServices.length !== 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hiredServices.length !== 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _components_nz_spinner_nz_spinner__WEBPACK_IMPORTED_MODULE_19__["NzSpinnerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".user-list-com {\n  padding-top: 4em;\n}\n\n@media only screen and (max-width: 767px) {\n  .user-list-com {\n    padding-top: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnbWVudC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLW1hbmFnbWVudC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbGlzdC1jb20ge1xuICBwYWRkaW5nLXRvcDogNGVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51c2VyLWxpc3QtY29tIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG5cbn1cbiJdfQ== */"], encapsulation: 2 });
    return UserListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }, { type: src_app_services_email_service__WEBPACK_IMPORTED_MODULE_13__["EmailService"] }, { type: src_app_services_tranxfer_service__WEBPACK_IMPORTED_MODULE_16__["TranxferService"] }]; }, null); })();


/***/ }),

/***/ "bf+u":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user-managment/user-managment.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserManagmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagmentModule", function() { return UserManagmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_managment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-managment.component */ "wr17");
/* harmony import */ var _user_managment_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-managment.routing */ "ceoT");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "Y5ga");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_custom_desactiveservicemodal_desactiveservicemodal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/custom/desactiveservicemodal/desactiveservicemodal.module */ "x3dA");
/* harmony import */ var src_app_components_custom_deleteusermodal_deleteusermodal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/custom/deleteusermodal/deleteusermodal.module */ "KpOO");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-user/add-user.component */ "4NPW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "MVED");
/* harmony import */ var src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/nz-spinner/nz-spinner.module */ "gT/A");













// import { MyProfileModule } from '../my-profile/my-profile.module';
var UserManagmentModule = /** @class */ (function () {
    function UserManagmentModule() {
    }
    UserManagmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagmentModule });
    UserManagmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagmentModule_Factory(t) { return new (t || UserManagmentModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                src_app_components_custom_desactiveservicemodal_desactiveservicemodal_module__WEBPACK_IMPORTED_MODULE_6__["DesactiveServerModalModule"],
                src_app_components_custom_deleteusermodal_deleteusermodal_module__WEBPACK_IMPORTED_MODULE_7__["DeleteUserModalModule"],
                src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_11__["NzSpinnerModule"],
                // MyProfileModule,
                _user_managment_routing__WEBPACK_IMPORTED_MODULE_3__["UserManagmentRoutingModule"]
            ]] });
    return UserManagmentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagmentModule, { declarations: [_user_managment_component__WEBPACK_IMPORTED_MODULE_2__["UserManagmentComponent"],
        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"],
        _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
        _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        src_app_components_custom_desactiveservicemodal_desactiveservicemodal_module__WEBPACK_IMPORTED_MODULE_6__["DesactiveServerModalModule"],
        src_app_components_custom_deleteusermodal_deleteusermodal_module__WEBPACK_IMPORTED_MODULE_7__["DeleteUserModalModule"],
        src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_11__["NzSpinnerModule"],
        // MyProfileModule,
        _user_managment_routing__WEBPACK_IMPORTED_MODULE_3__["UserManagmentRoutingModule"]], exports: [_user_managment_component__WEBPACK_IMPORTED_MODULE_2__["UserManagmentComponent"],
        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"],
        _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
        _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    src_app_components_custom_desactiveservicemodal_desactiveservicemodal_module__WEBPACK_IMPORTED_MODULE_6__["DesactiveServerModalModule"],
                    src_app_components_custom_deleteusermodal_deleteusermodal_module__WEBPACK_IMPORTED_MODULE_7__["DeleteUserModalModule"],
                    src_app_components_nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_11__["NzSpinnerModule"],
                    // MyProfileModule,
                    _user_managment_routing__WEBPACK_IMPORTED_MODULE_3__["UserManagmentRoutingModule"]
                ],
                declarations: [
                    _user_managment_component__WEBPACK_IMPORTED_MODULE_2__["UserManagmentComponent"],
                    _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"],
                    _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
                    _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"],
                ],
                exports: [
                    _user_managment_component__WEBPACK_IMPORTED_MODULE_2__["UserManagmentComponent"],
                    _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"],
                    _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
                    _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "ceoT":
/*!******************************************************************!*\
  !*** ./src/app/modules/user-managment/user-managment.routing.ts ***!
  \******************************************************************/
/*! exports provided: UserManagmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagmentRoutingModule", function() { return UserManagmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_modules_user_managment_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/user-managment/add-user/add-user.component */ "4NPW");
/* harmony import */ var _my_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-profile/profile/profile.component */ "JY65");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "MVED");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "Y5ga");
/* harmony import */ var _user_managment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-managment.component */ "wr17");









var routes = [
    {
        path: '',
        component: _user_managment_component__WEBPACK_IMPORTED_MODULE_6__["UserManagmentComponent"],
        children: [
            {
                path: '',
                component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"],
            },
            { path: 'add-user/:AdminUserId', component: src_app_modules_user_managment_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] },
            { path: 'edit-user/:id', component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"] },
            { path: 'profile', component: _my_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
        ]
    },
];
var UserManagmentRoutingModule = /** @class */ (function () {
    function UserManagmentRoutingModule() {
    }
    UserManagmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserManagmentRoutingModule });
    UserManagmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserManagmentRoutingModule_Factory(t) { return new (t || UserManagmentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return UserManagmentRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserManagmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagmentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cfV7":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
    }
    EmailService.prototype.sendEmail = function (email, partnerid) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('email', encodeURIComponent(email));
        params = params.append('partnerid', partnerid);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/email/sentEmail", { params: params }).toPromise();
    };
    EmailService.prototype.sendEmailTest = function (email, partnerid) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('email', encodeURIComponent(email));
        params = params.append('partnerid', partnerid);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndpoint + "api/email/sentEmailTest", { params: params }).toPromise();
    };
    EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
    return EmailService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "eQSR":
/*!********************************************************************************!*\
  !*** ./src/app/components/custom/deleteusermodal/deleteusermodal.component.ts ***!
  \********************************************************************************/
/*! exports provided: DeleteUserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserModalComponent", function() { return DeleteUserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/partner.service */ "7Hzr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








var DeleteUserModalComponent = /** @class */ (function () {
    function DeleteUserModalComponent(activeModal, partnerService) {
        this.activeModal = activeModal;
        this.partnerService = partnerService;
    }
    DeleteUserModalComponent.prototype.ngOnInit = function () {
    };
    DeleteUserModalComponent.ɵfac = function DeleteUserModalComponent_Factory(t) { return new (t || DeleteUserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"])); };
    DeleteUserModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteUserModalComponent, selectors: [["app-modal"]], inputs: { usuario: "usuario" }, decls: 33, vars: 16, consts: [["id", "DeleteUser", 1, "popup"], ["id", "popup", 1, ""], [1, "popup-header", "sph"], ["id", "CloseDeletePopup", "href", "javascript:void(0);", 1, "cerrar", 3, "click"], ["_ngcontent-oui-c3", "", 1, "icon-close"], [1, "text-left"], ["id", "form_delete_navegacion_dispositivo", "action", "/es/protecciones", "method", "post", "enctype", "multipart/form-data", 1, "dil"], ["type", "hidden", "name", "_csrf-frontend", "value", "bv8myJmK99P76IjluJuJZLTSzzCbG2_fx1789J1HNlMNtVGn672HsbTapazZ0bEjg7W8AuJPCumOFquA0T9sHQ=="], [1, "error-summary", 2, "display", "none"], [1, "popup-body"], [1, "text-left", "mb-4"], ["id", "DeleteNavegacionUsuario"], [1, "popup-footer", "text-left"], [1, "form-group", "field-formdeletenavegaciondispositivo-id_usuario", "required"], ["type", "hidden", "id", "formdeletenavegaciondispositivo-id_usuario", "name", "FormDeleteNavegacionDispositivo[id_usuario]", "value", "19", 1, "form-control"], [1, "help-block"], [1, "form-group", "field-formdeletenavegaciondispositivo-id_dispositivo", "required"], ["type", "hidden", "id", "formdeletenavegaciondispositivo-id_dispositivo", "name", "FormDeleteNavegacionDispositivo[id_dispositivo]", "value", "2", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-25", 3, "click"], ["id", "popup-delete", "href", "javascript:void(0)", 1, "btn", "mx-3", 3, "click"]], template: function DeleteUserModalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserModalComponent_Template_a_click_3_listener() { return ctx.activeModal.dismiss("Cancel"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserModalComponent_Template_button_click_27_listener() { return ctx.activeModal.dismiss("OK"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteUserModalComponent_Template_a_click_30_listener() { return ctx.activeModal.dismiss("Cancel"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "DELETE_USER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "ARE_SURE_DELETE_USER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.usuario);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("? ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, "ARE_SURE_DELETE_USER2"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 12, "DELETE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 14, "CANCEL"));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tL2RlbGV0ZXVzZXJtb2RhbC9kZWxldGV1c2VybW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
    return DeleteUserModalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteUserModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './deleteusermodal.component.html',
                styleUrls: ['./deleteusermodal.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }, { type: src_app_services_partner_service__WEBPACK_IMPORTED_MODULE_2__["PartnerService"] }]; }, { usuario: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fvar":
/*!********************************************************************************************!*\
  !*** ./src/app/components/custom/desactiveservicemodal/desactiveservicemodal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DesactiveservicemodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesactiveservicemodalComponent", function() { return DesactiveservicemodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






var DesactiveservicemodalComponent = /** @class */ (function () {
    function DesactiveservicemodalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    DesactiveservicemodalComponent.prototype.ngOnInit = function () {
    };
    DesactiveservicemodalComponent.ɵfac = function DesactiveservicemodalComponent_Factory(t) { return new (t || DesactiveservicemodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
    DesactiveservicemodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesactiveservicemodalComponent, selectors: [["app-desactiveservicemodal"]], inputs: { message: "message" }, decls: 32, vars: 13, consts: [[1, "popup"], ["id", "popup", 1, ""], [1, "popup-header", "sph"], ["id", "CloseDeletePopup", "href", "javascript:void(0);", 1, "cerrar", 3, "click"], ["_ngcontent-oui-c3", "", 1, "icon-close"], [1, "text-left"], ["id", "form_delete_navegacion_dispositivo", "action", "/es/protecciones", "method", "post", "enctype", "multipart/form-data", 1, "dil"], ["type", "hidden", "name", "_csrf-frontend", "value", "bv8myJmK99P76IjluJuJZLTSzzCbG2_fx1789J1HNlMNtVGn672HsbTapazZ0bEjg7W8AuJPCumOFquA0T9sHQ=="], [1, "error-summary", 2, "display", "none"], [1, "popup-body"], [1, "text-left", "mb-4"], [1, "popup-footer", "text-left"], [1, "form-group", "field-formdeletenavegaciondispositivo-id_usuario", "required"], ["type", "hidden", "id", "formdeletenavegaciondispositivo-id_usuario", "name", "FormDeleteNavegacionDispositivo[id_usuario]", "value", "19", 1, "form-control"], [1, "help-block"], [1, "form-group", "field-formdeletenavegaciondispositivo-id_dispositivo", "required"], ["type", "hidden", "id", "formdeletenavegaciondispositivo-id_dispositivo", "name", "FormDeleteNavegacionDispositivo[id_dispositivo]", "value", "2", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["id", "popup-delete", "href", "javascript:void(0)", 1, "btn", "mx-3", 3, "click"]], template: function DesactiveservicemodalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesactiveservicemodalComponent_Template_a_click_3_listener() { return ctx.activeModal.dismiss("Cancel"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesactiveservicemodalComponent_Template_button_click_26_listener() { return ctx.activeModal.dismiss("OK"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DesactiveservicemodalComponent_Template_a_click_29_listener() { return ctx.activeModal.dismiss("Cancel"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "DESACTIVE_SERVICE_MODAL.WARNING"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "DESACTIVE_SERVICE_MODAL.QUESTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 9, "DESACTIVE_SERVICE_MODAL.YES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 11, "DESACTIVE_SERVICE_MODAL.CANCEL"));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tL2Rlc2FjdGl2ZXNlcnZpY2Vtb2RhbC9kZXNhY3RpdmVzZXJ2aWNlbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
    return DesactiveservicemodalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesactiveservicemodalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-desactiveservicemodal',
                templateUrl: './desactiveservicemodal.component.html',
                styleUrls: ['./desactiveservicemodal.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "wr17":
/*!********************************************************************!*\
  !*** ./src/app/modules/user-managment/user-managment.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagmentComponent", function() { return UserManagmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



var UserManagmentComponent = /** @class */ (function () {
    function UserManagmentComponent() {
    }
    UserManagmentComponent.prototype.ngOnInit = function () {
    };
    UserManagmentComponent.ɵfac = function UserManagmentComponent_Factory(t) { return new (t || UserManagmentComponent)(); };
    UserManagmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserManagmentComponent, selectors: [["app-user-managment"]], decls: 1, vars: 0, template: function UserManagmentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1tYW5hZ21lbnQvdXNlci1tYW5hZ21lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return UserManagmentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserManagmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-managment',
                templateUrl: './user-managment.component.html',
                styleUrls: ['./user-managment.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "x3dA":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/custom/desactiveservicemodal/desactiveservicemodal.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DesactiveServerModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesactiveServerModalModule", function() { return DesactiveServerModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desactiveservicemodal.component */ "fvar");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../nz-spinner/nz-spinner.module */ "gT/A");









var DesactiveServerModalModule = /** @class */ (function () {
    function DesactiveServerModalModule() {
    }
    DesactiveServerModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DesactiveServerModalModule });
    DesactiveServerModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DesactiveServerModalModule_Factory(t) { return new (t || DesactiveServerModalModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
            ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] });
    return DesactiveServerModalModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DesactiveServerModalModule, { declarations: [_desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_5__["DesactiveservicemodalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"]], exports: [_desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_5__["DesactiveservicemodalComponent"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesactiveServerModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _nz_spinner_nz_spinner_module__WEBPACK_IMPORTED_MODULE_7__["NzSpinnerModule"],
                ],
                declarations: [
                    _desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_5__["DesactiveservicemodalComponent"]
                ],
                providers: [],
                entryComponents: [
                    _desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_5__["DesactiveservicemodalComponent"]
                ],
                exports: [
                    _desactiveservicemodal_component__WEBPACK_IMPORTED_MODULE_5__["DesactiveservicemodalComponent"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-user-managment-user-managment-module.js.map