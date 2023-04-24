(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-my-profile-my-profile-module~modules-security-security-module~modules-user-managment~bbd46909"],{

/***/ "Fn8h":
/*!***************************************!*\
  !*** ./node_modules/ret/lib/types.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ROOT: 0,
  GROUP: 1,
  POSITION: 2,
  SET: 3,
  RANGE: 4,
  REPETITION: 5,
  REFERENCE: 6,
  CHAR: 7
};

/***/ }),

/***/ "ILLg":
/*!************************************************************************************!*\
  !*** ./src/app/components/common/password-strength/password-strength.component.ts ***!
  \************************************************************************************/
/*! exports provided: PasswordStrengthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordStrengthComponent", function() { return PasswordStrengthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



var PasswordStrengthComponent = /** @class */ (function () {
    function PasswordStrengthComponent() {
        this.validpass = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthComponent.measureStrength = function (pass) {
        // console.log("measureStrength "+pass);
        var score = 0;
        // award every unique letter until 5 repetitions  
        // let letters = {};
        // for (let i = 0; i < pass.length; i++) {
        //       console.log("letters pass i: "+letters[pass[i]]);
        //       letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        //       score += 5.0 / letters[pass[i]];
        //       console.log("score: "+score);
        // }
        score += pass.length * 5; //minimo 8 caracteres * 5 = 40 puntos
        // console.log("Puntos por longitud: "+score);
        if (score > 40)
            score = 40;
        // console.log("Puntos por longitud después de control máximo: "+score);
        // bonus points for mixing it up  
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /[^A-Za-z0-9]/.test(pass),
        };
        var variationCount = 0;
        for (var check in variations) {
            // console.log(check +" - "+ variations[check]);
            variationCount += (variations[check]) ? 1 : 0;
        }
        // score += (variationCount - 1) * 10;
        score += variationCount * 15;
        //Controlamos minimos de seguridad y rebajamos el score para que no cumpla requisitos
        if (score >= 85 && (variationCount < 3 || pass.length < 8))
            score = 80;
        var result = Math.trunc(score);
        // console.log("result - measureStrength: "+result);
        return result;
    };
    PasswordStrengthComponent.prototype.getColor = function (score) {
        // console.log("getColor "+score);
        var idx = 0;
        if (score > 85) {
            idx = 4;
        }
        else if (score >= 80) {
            idx = 3;
        }
        else if (score >= 60) {
            idx = 2;
        }
        else if (score >= 40) {
            idx = 1;
        }
        else if (score < 20) {
            idx = 0;
        }
        // console.log("getColor "+(idx + 1));
        // console.log("getColor "+this.colors[idx]);
        return {
            idx: idx + 1,
            col: this.colors[idx]
        };
    };
    PasswordStrengthComponent.prototype.ngOnChanges = function (changes) {
        // console.log("ngOnChanges");
        // console.log(changes);
        var password = changes['passwordToCheck'].currentValue;
        this.setBarColors(5, '#DDD');
        if (password) {
            var c = this.getColor(PasswordStrengthComponent.measureStrength(password));
            this.setBarColors(c.idx, c.col);
            if (c.idx == 5 || c.idx == 4) //nivel de fuerza 4 o 5 es aceptable
             {
                this.result = true;
            }
            else {
                this.result = false;
            }
            this.checkpass();
        }
    };
    PasswordStrengthComponent.prototype.checkpass = function () {
        // console.log("checkpass: "+this.result);
        this.validpass.emit(this.result);
    };
    PasswordStrengthComponent.prototype.setBarColors = function (count, col) {
        // console.log("setBarColors "+count);
        // console.log("setBarColors "+col);
        for (var _n = 0; _n < count; _n++) {
            this['bar' + _n] = col;
        }
    };
    PasswordStrengthComponent.ɵfac = function PasswordStrengthComponent_Factory(t) { return new (t || PasswordStrengthComponent)(); };
    PasswordStrengthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordStrengthComponent, selectors: [["app-password-strength"]], inputs: { passwordToCheck: "passwordToCheck", barLabel: "barLabel" }, outputs: { validpass: "validpass" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 13, consts: [["id", "strength"], ["strength", ""], [1, "strength-small"], ["id", "strengthBar", 2, "text-align", "center", "width", "100%"], [1, "point"]], template: function PasswordStrengthComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "CONTRASENA_MESSAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bar0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bar1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bar2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bar3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bar4);
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["ul#strengthBar[_ngcontent-%COMP%] {  \n    display:inline;  \n    list-style:none;  \n    margin:0;  \n    margin-left:15px;  \n    padding:0;  \n    vertical-align:2px;  \n}  \n\n.point[_ngcontent-%COMP%]:last {  \n    margin:0 !important;  \n}  \n\n.point[_ngcontent-%COMP%] {  \n    background:#DDD;  \n    border-radius:2px;  \n    display:inline-block;  \n    height:5px;  \n    margin-right:1px;  \n    width:20px;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vcGFzc3dvcmQtc3RyZW5ndGgvcGFzc3dvcmQtc3RyZW5ndGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9wYXNzd29yZC1zdHJlbmd0aC9wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwjc3RyZW5ndGhCYXIgeyAgXG4gICAgZGlzcGxheTppbmxpbmU7ICBcbiAgICBsaXN0LXN0eWxlOm5vbmU7ICBcbiAgICBtYXJnaW46MDsgIFxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7ICBcbiAgICBwYWRkaW5nOjA7ICBcbiAgICB2ZXJ0aWNhbC1hbGlnbjoycHg7ICBcbn0gIFxuXG4ucG9pbnQ6bGFzdCB7ICBcbiAgICBtYXJnaW46MCAhaW1wb3J0YW50OyAgXG59IFxuXG4ucG9pbnQgeyAgXG4gICAgYmFja2dyb3VuZDojREREOyAgXG4gICAgYm9yZGVyLXJhZGl1czoycHg7ICBcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jazsgIFxuICAgIGhlaWdodDo1cHg7ICBcbiAgICBtYXJnaW4tcmlnaHQ6MXB4OyAgXG4gICAgd2lkdGg6MjBweDsgIFxufSAgIl19 */"] });
    return PasswordStrengthComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordStrengthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-password-strength',
                templateUrl: './password-strength.component.html',
                styleUrls: ['./password-strength.component.css']
            }]
    }], null, { passwordToCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], barLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], validpass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "MwW3":
/*!*********************************************!*\
  !*** ./node_modules/randexp/lib/randexp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "lwsE");
var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "W8MJ");
var ret = __webpack_require__(/*! ret */ "WahC");
var DRange = __webpack_require__(/*! drange */ "czWv");
var types = ret.types;
module.exports = /*#__PURE__*/function () {
  "use strict";

  /**
   * @constructor
   * @param {RegExp|String} regexp
   * @param {String} m
   */
  function RandExp(regexp, m) {
    _classCallCheck(this, RandExp);
    this._setDefaults(regexp);
    if (regexp instanceof RegExp) {
      this.ignoreCase = regexp.ignoreCase;
      this.multiline = regexp.multiline;
      regexp = regexp.source;
    } else if (typeof regexp === 'string') {
      this.ignoreCase = m && m.indexOf('i') !== -1;
      this.multiline = m && m.indexOf('m') !== -1;
    } else {
      throw new Error('Expected a regexp or string');
    }
    this.tokens = ret(regexp);
  }

  /**
   * Checks if some custom properties have been set for this regexp.
   *
   * @param {RandExp} randexp
   * @param {RegExp} regexp
   */
  _createClass(RandExp, [{
    key: "_setDefaults",
    value: function _setDefaults(regexp) {
      // When a repetitional token has its max set to Infinite,
      // randexp won't actually generate a random amount between min and Infinite
      // instead it will see Infinite as min + 100.
      this.max = regexp.max != null ? regexp.max : RandExp.prototype.max != null ? RandExp.prototype.max : 100;

      // This allows expanding to include additional characters
      // for instance: RandExp.defaultRange.add(0, 65535);
      this.defaultRange = regexp.defaultRange ? regexp.defaultRange : this.defaultRange.clone();
      if (regexp.randInt) {
        this.randInt = regexp.randInt;
      }
    }

    /**
     * Generates the random string.
     *
     * @return {String}
     */
  }, {
    key: "gen",
    value: function gen() {
      return this._gen(this.tokens, []);
    }

    /**
     * Generate random string modeled after given tokens.
     *
     * @param {Object} token
     * @param {Array.<String>} groups
     * @return {String}
     */
  }, {
    key: "_gen",
    value: function _gen(token, groups) {
      var stack, str, n, i, l;
      switch (token.type) {
        case types.ROOT:
        case types.GROUP:
          // Ignore lookaheads for now.
          if (token.followedBy || token.notFollowedBy) {
            return '';
          }

          // Insert placeholder until group string is generated.
          if (token.remember && token.groupNumber === undefined) {
            token.groupNumber = groups.push(null) - 1;
          }
          stack = token.options ? this._randSelect(token.options) : token.stack;
          str = '';
          for (i = 0, l = stack.length; i < l; i++) {
            str += this._gen(stack[i], groups);
          }
          if (token.remember) {
            groups[token.groupNumber] = str;
          }
          return str;
        case types.POSITION:
          // Do nothing for now.
          return '';
        case types.SET:
          var expandedSet = this._expand(token);
          if (!expandedSet.length) {
            return '';
          }
          return String.fromCharCode(this._randSelect(expandedSet));
        case types.REPETITION:
          // Randomly generate number between min and max.
          n = this.randInt(token.min, token.max === Infinity ? token.min + this.max : token.max);
          str = '';
          for (i = 0; i < n; i++) {
            str += this._gen(token.value, groups);
          }
          return str;
        case types.REFERENCE:
          return groups[token.value - 1] || '';
        case types.CHAR:
          var code = this.ignoreCase && this._randBool() ? this._toOtherCase(token.value) : token.value;
          return String.fromCharCode(code);
      }
    }

    /**
     * If code is alphabetic, converts to other case.
     * If not alphabetic, returns back code.
     *
     * @param {Number} code
     * @return {Number}
     */
  }, {
    key: "_toOtherCase",
    value: function _toOtherCase(code) {
      return code + (97 <= code && code <= 122 ? -32 : 65 <= code && code <= 90 ? 32 : 0);
    }

    /**
     * Randomly returns a true or false value.
     *
     * @return {Boolean}
     */
  }, {
    key: "_randBool",
    value: function _randBool() {
      return !this.randInt(0, 1);
    }

    /**
     * Randomly selects and returns a value from the array.
     *
     * @param {Array.<Object>} arr
     * @return {Object}
     */
  }, {
    key: "_randSelect",
    value: function _randSelect(arr) {
      if (arr instanceof DRange) {
        return arr.index(this.randInt(0, arr.length - 1));
      }
      return arr[this.randInt(0, arr.length - 1)];
    }

    /**
     * expands a token to a DiscontinuousRange of characters which has a
     * length and an index function (for random selecting)
     *
     * @param {Object} token
     * @return {DiscontinuousRange}
     */
  }, {
    key: "_expand",
    value: function _expand(token) {
      if (token.type === ret.types.CHAR) {
        return new DRange(token.value);
      } else if (token.type === ret.types.RANGE) {
        return new DRange(token.from, token.to);
      } else {
        var drange = new DRange();
        for (var i = 0; i < token.set.length; i++) {
          var subrange = this._expand(token.set[i]);
          drange.add(subrange);
          if (this.ignoreCase) {
            for (var j = 0; j < subrange.length; j++) {
              var code = subrange.index(j);
              var otherCaseCode = this._toOtherCase(code);
              if (code !== otherCaseCode) {
                drange.add(otherCaseCode);
              }
            }
          }
        }
        if (token.not) {
          return this.defaultRange.clone().subtract(drange);
        } else {
          return this.defaultRange.clone().intersect(drange);
        }
      }
    }

    /**
     * Randomly generates and returns a number between a and b (inclusive).
     *
     * @param {Number} a
     * @param {Number} b
     * @return {Number}
     */
  }, {
    key: "randInt",
    value: function randInt(a, b) {
      return a + Math.floor(Math.random() * (1 + b - a));
    }

    /**
     * Default range of characters to generate from.
     */
  }, {
    key: "defaultRange",
    get: function get() {
      return this._range = this._range || new DRange(32, 126);
    },
    set: function set(range) {
      this._range = range;
    }

    /**
     *
     * Enables use of randexp with a shorter call.
     *
     * @param {RegExp|String| regexp}
     * @param {String} m
     * @return {String}
     */
  }], [{
    key: "randexp",
    value: function randexp(regexp, m) {
      var randexp;
      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp, m);
      }
      if (regexp._randexp === undefined) {
        randexp = new RandExp(regexp, m);
        regexp._randexp = randexp;
      } else {
        randexp = regexp._randexp;
        randexp._setDefaults(regexp);
      }
      return randexp.gen();
    }

    /**
     * Enables sugary /regexp/.gen syntax.
     */
  }, {
    key: "sugar",
    value: function sugar() {
      /* eshint freeze:false */
      RegExp.prototype.gen = function () {
        return RandExp.randexp(this);
      };
    }
  }]);
  return RandExp;
}();

/***/ }),

/***/ "W8MJ":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "WahC":
/*!***************************************!*\
  !*** ./node_modules/ret/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "uXk4");
var types = __webpack_require__(/*! ./types */ "Fn8h");
var sets = __webpack_require__(/*! ./sets */ "uFO8");
var positions = __webpack_require__(/*! ./positions */ "cDim");
module.exports = function (regexpStr) {
  var i = 0,
    l,
    c,
    start = {
      type: types.ROOT,
      stack: []
    },
    // Keep track of last clause/group and stack.
    lastGroup = start,
    last = start.stack,
    groupStack = [];
  var repeatErr = function repeatErr(i) {
    util.error(regexpStr, "Nothing to repeat at column ".concat(i - 1));
  };

  // Decode a few escaped characters.
  var str = util.strToChars(regexpStr);
  l = str.length;

  // Iterate through each character in string.
  while (i < l) {
    c = str[i++];
    switch (c) {
      // Handle escaped characters, inclues a few sets.
      case '\\':
        c = str[i++];
        switch (c) {
          case 'b':
            last.push(positions.wordBoundary());
            break;
          case 'B':
            last.push(positions.nonWordBoundary());
            break;
          case 'w':
            last.push(sets.words());
            break;
          case 'W':
            last.push(sets.notWords());
            break;
          case 'd':
            last.push(sets.ints());
            break;
          case 'D':
            last.push(sets.notInts());
            break;
          case 's':
            last.push(sets.whitespace());
            break;
          case 'S':
            last.push(sets.notWhitespace());
            break;
          default:
            // Check if c is integer.
            // In which case it's a reference.
            if (/\d/.test(c)) {
              last.push({
                type: types.REFERENCE,
                value: parseInt(c, 10)
              });

              // Escaped character.
            } else {
              last.push({
                type: types.CHAR,
                value: c.charCodeAt(0)
              });
            }
        }
        break;

      // Positionals.
      case '^':
        last.push(positions.begin());
        break;
      case '$':
        last.push(positions.end());
        break;

      // Handle custom sets.
      case '[':
        // Check if this class is 'anti' i.e. [^abc].
        var not;
        if (str[i] === '^') {
          not = true;
          i++;
        } else {
          not = false;
        }

        // Get all the characters in class.
        var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

        // Increase index by length of class.
        i += classTokens[1];
        last.push({
          type: types.SET,
          set: classTokens[0],
          not: not
        });
        break;

      // Class of any character except \n.
      case '.':
        last.push(sets.anyChar());
        break;

      // Push group onto stack.
      case '(':
        // Create group.
        var group = {
          type: types.GROUP,
          stack: [],
          remember: true
        };
        c = str[i];

        // If if this is a special kind of group.
        if (c === '?') {
          c = str[i + 1];
          i += 2;

          // Match if followed by.
          if (c === '=') {
            group.followedBy = true;

            // Match if not followed by.
          } else if (c === '!') {
            group.notFollowedBy = true;
          } else if (c !== ':') {
            util.error(regexpStr, "Invalid group, character '".concat(c, "'") + " after '?' at column ".concat(i - 1));
          }
          group.remember = false;
        }

        // Insert subgroup into current group stack.
        last.push(group);

        // Remember the current group for when the group closes.
        groupStack.push(lastGroup);

        // Make this new group the current group.
        lastGroup = group;
        last = group.stack;
        break;

      // Pop group out of stack.
      case ')':
        if (groupStack.length === 0) {
          util.error(regexpStr, "Unmatched ) at column ".concat(i - 1));
        }
        lastGroup = groupStack.pop();

        // Check if this group has a PIPE.
        // To get back the correct last stack.
        last = lastGroup.options ? lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
        break;

      // Use pipe character to give more choices.
      case '|':
        // Create array where options are if this is the first PIPE
        // in this clause.
        if (!lastGroup.options) {
          lastGroup.options = [lastGroup.stack];
          delete lastGroup.stack;
        }

        // Create a new stack and add to options for rest of clause.
        var stack = [];
        lastGroup.options.push(stack);
        last = stack;
        break;

      // Repetition.
      // For every repetition, remove last element from last stack
      // then insert back a RANGE object.
      // This design is chosen because there could be more than
      // one repetition symbols in a regex i.e. `a?+{2,3}`.
      case '{':
        var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)),
          min,
          max;
        if (rs !== null) {
          if (last.length === 0) {
            repeatErr(i);
          }
          min = parseInt(rs[1], 10);
          max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
          i += rs[0].length;
          last.push({
            type: types.REPETITION,
            min: min,
            max: max,
            value: last.pop()
          });
        } else {
          last.push({
            type: types.CHAR,
            value: 123
          });
        }
        break;
      case '?':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: 1,
          value: last.pop()
        });
        break;
      case '+':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 1,
          max: Infinity,
          value: last.pop()
        });
        break;
      case '*':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: Infinity,
          value: last.pop()
        });
        break;

      // Default is a character that is not `\[](){}?+*^$`.
      default:
        last.push({
          type: types.CHAR,
          value: c.charCodeAt(0)
        });
    }
  }

  // Check if any groups have not been closed.
  if (groupStack.length !== 0) {
    util.error(regexpStr, 'Unterminated group');
  }
  return start;
};
module.exports.types = types;

/***/ }),

/***/ "cDim":
/*!*******************************************!*\
  !*** ./node_modules/ret/lib/positions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var types = __webpack_require__(/*! ./types */ "Fn8h");
exports.wordBoundary = function () {
  return {
    type: types.POSITION,
    value: 'b'
  };
};
exports.nonWordBoundary = function () {
  return {
    type: types.POSITION,
    value: 'B'
  };
};
exports.begin = function () {
  return {
    type: types.POSITION,
    value: '^'
  };
};
exports.end = function () {
  return {
    type: types.POSITION,
    value: '$'
  };
};

/***/ }),

/***/ "czWv":
/*!******************************************!*\
  !*** ./node_modules/drange/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint indent: 4 */

// Private helper class
var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "lwsE");
var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "W8MJ");
var SubRange = /*#__PURE__*/function () {
  function SubRange(low, high) {
    _classCallCheck(this, SubRange);
    this.low = low;
    this.high = high;
    this.length = 1 + high - low;
  }
  _createClass(SubRange, [{
    key: "overlaps",
    value: function overlaps(range) {
      return !(this.high < range.low || this.low > range.high);
    }
  }, {
    key: "touches",
    value: function touches(range) {
      return !(this.high + 1 < range.low || this.low - 1 > range.high);
    }

    // Returns inclusive combination of SubRanges as a SubRange.
  }, {
    key: "add",
    value: function add(range) {
      return new SubRange(Math.min(this.low, range.low), Math.max(this.high, range.high));
    }

    // Returns subtraction of SubRanges as an array of SubRanges.
    // (There's a case where subtraction divides it in 2)
  }, {
    key: "subtract",
    value: function subtract(range) {
      if (range.low <= this.low && range.high >= this.high) {
        return [];
      } else if (range.low > this.low && range.high < this.high) {
        return [new SubRange(this.low, range.low - 1), new SubRange(range.high + 1, this.high)];
      } else if (range.low <= this.low) {
        return [new SubRange(range.high + 1, this.high)];
      } else {
        return [new SubRange(this.low, range.low - 1)];
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.low == this.high ? this.low.toString() : this.low + '-' + this.high;
    }
  }]);
  return SubRange;
}();
var DRange = /*#__PURE__*/function () {
  function DRange(a, b) {
    _classCallCheck(this, DRange);
    this.ranges = [];
    this.length = 0;
    if (a != null) this.add(a, b);
  }
  _createClass(DRange, [{
    key: "_update_length",
    value: function _update_length() {
      this.length = this.ranges.reduce(function (previous, range) {
        return previous + range.length;
      }, 0);
    }
  }, {
    key: "add",
    value: function add(a, b) {
      var _this = this;
      var _add = function _add(subrange) {
        var i = 0;
        while (i < _this.ranges.length && !subrange.touches(_this.ranges[i])) {
          i++;
        }
        var newRanges = _this.ranges.slice(0, i);
        while (i < _this.ranges.length && subrange.touches(_this.ranges[i])) {
          subrange = subrange.add(_this.ranges[i]);
          i++;
        }
        newRanges.push(subrange);
        _this.ranges = newRanges.concat(_this.ranges.slice(i));
        _this._update_length();
      };
      if (a instanceof DRange) {
        a.ranges.forEach(_add);
      } else {
        if (b == null) b = a;
        _add(new SubRange(a, b));
      }
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(a, b) {
      var _this2 = this;
      var _subtract = function _subtract(subrange) {
        var i = 0;
        while (i < _this2.ranges.length && !subrange.overlaps(_this2.ranges[i])) {
          i++;
        }
        var newRanges = _this2.ranges.slice(0, i);
        while (i < _this2.ranges.length && subrange.overlaps(_this2.ranges[i])) {
          newRanges = newRanges.concat(_this2.ranges[i].subtract(subrange));
          i++;
        }
        _this2.ranges = newRanges.concat(_this2.ranges.slice(i));
        _this2._update_length();
      };
      if (a instanceof DRange) {
        a.ranges.forEach(_subtract);
      } else {
        if (b == null) b = a;
        _subtract(new SubRange(a, b));
      }
      return this;
    }
  }, {
    key: "intersect",
    value: function intersect(a, b) {
      var _this3 = this;
      var newRanges = [];
      var _intersect = function _intersect(subrange) {
        var i = 0;
        while (i < _this3.ranges.length && !subrange.overlaps(_this3.ranges[i])) {
          i++;
        }
        while (i < _this3.ranges.length && subrange.overlaps(_this3.ranges[i])) {
          var low = Math.max(_this3.ranges[i].low, subrange.low);
          var high = Math.min(_this3.ranges[i].high, subrange.high);
          newRanges.push(new SubRange(low, high));
          i++;
        }
      };
      if (a instanceof DRange) {
        a.ranges.forEach(_intersect);
      } else {
        if (b == null) b = a;
        _intersect(new SubRange(a, b));
      }
      this.ranges = newRanges;
      this._update_length();
      return this;
    }
  }, {
    key: "index",
    value: function index(_index) {
      var i = 0;
      while (i < this.ranges.length && this.ranges[i].length <= _index) {
        _index -= this.ranges[i].length;
        i++;
      }
      return this.ranges[i].low + _index;
    }
  }, {
    key: "toString",
    value: function toString() {
      return '[ ' + this.ranges.join(', ') + ' ]';
    }
  }, {
    key: "clone",
    value: function clone() {
      return new DRange(this);
    }
  }, {
    key: "numbers",
    value: function numbers() {
      return this.ranges.reduce(function (result, subrange) {
        var i = subrange.low;
        while (i <= subrange.high) {
          result.push(i);
          i++;
        }
        return result;
      }, []);
    }
  }, {
    key: "subranges",
    value: function subranges() {
      return this.ranges.map(function (subrange) {
        return {
          low: subrange.low,
          high: subrange.high,
          length: 1 + subrange.high - subrange.low
        };
      });
    }
  }]);
  return DRange;
}();
module.exports = DRange;

/***/ }),

/***/ "lwsE":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "uFO8":
/*!**************************************!*\
  !*** ./node_modules/ret/lib/sets.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var types = __webpack_require__(/*! ./types */ "Fn8h");
var INTS = function INTS() {
  return [{
    type: types.RANGE,
    from: 48,
    to: 57
  }];
};
var WORDS = function WORDS() {
  return [{
    type: types.CHAR,
    value: 95
  }, {
    type: types.RANGE,
    from: 97,
    to: 122
  }, {
    type: types.RANGE,
    from: 65,
    to: 90
  }].concat(INTS());
};
var WHITESPACE = function WHITESPACE() {
  return [{
    type: types.CHAR,
    value: 9
  }, {
    type: types.CHAR,
    value: 10
  }, {
    type: types.CHAR,
    value: 11
  }, {
    type: types.CHAR,
    value: 12
  }, {
    type: types.CHAR,
    value: 13
  }, {
    type: types.CHAR,
    value: 32
  }, {
    type: types.CHAR,
    value: 160
  }, {
    type: types.CHAR,
    value: 5760
  }, {
    type: types.RANGE,
    from: 8192,
    to: 8202
  }, {
    type: types.CHAR,
    value: 8232
  }, {
    type: types.CHAR,
    value: 8233
  }, {
    type: types.CHAR,
    value: 8239
  }, {
    type: types.CHAR,
    value: 8287
  }, {
    type: types.CHAR,
    value: 12288
  }, {
    type: types.CHAR,
    value: 65279
  }];
};
var NOTANYCHAR = function NOTANYCHAR() {
  return [{
    type: types.CHAR,
    value: 10
  }, {
    type: types.CHAR,
    value: 13
  }, {
    type: types.CHAR,
    value: 8232
  }, {
    type: types.CHAR,
    value: 8233
  }];
};

// Predefined class objects.
exports.words = function () {
  return {
    type: types.SET,
    set: WORDS(),
    not: false
  };
};
exports.notWords = function () {
  return {
    type: types.SET,
    set: WORDS(),
    not: true
  };
};
exports.ints = function () {
  return {
    type: types.SET,
    set: INTS(),
    not: false
  };
};
exports.notInts = function () {
  return {
    type: types.SET,
    set: INTS(),
    not: true
  };
};
exports.whitespace = function () {
  return {
    type: types.SET,
    set: WHITESPACE(),
    not: false
  };
};
exports.notWhitespace = function () {
  return {
    type: types.SET,
    set: WHITESPACE(),
    not: true
  };
};
exports.anyChar = function () {
  return {
    type: types.SET,
    set: NOTANYCHAR(),
    not: true
  };
};

/***/ }),

/***/ "uXk4":
/*!**************************************!*\
  !*** ./node_modules/ret/lib/util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var types = __webpack_require__(/*! ./types */ "Fn8h");
var sets = __webpack_require__(/*! ./sets */ "uFO8");
var CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
var SLSH = {
  '0': 0,
  't': 9,
  'n': 10,
  'v': 11,
  'f': 12,
  'r': 13
};

/**
 * Finds character representations in str and convert all to
 * their respective characters
 *
 * @param {String} str
 * @return {String}
 */
exports.strToChars = function (str) {
  /* jshint maxlen: false */
  var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
  str = str.replace(chars_regex, function (s, b, lbs, a16, b16, c8, dctrl, eslsh) {
    if (lbs) {
      return s;
    }
    var code = b ? 8 : a16 ? parseInt(a16, 16) : b16 ? parseInt(b16, 16) : c8 ? parseInt(c8, 8) : dctrl ? CTRL.indexOf(dctrl) : SLSH[eslsh];
    var c = String.fromCharCode(code);

    // Escape special regex characters.
    if (/[[\]{}^$.|?*+()]/.test(c)) {
      c = '\\' + c;
    }
    return c;
  });
  return str;
};

/**
 * turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {String} str
 * @param {String} regexpStr
 * @return {Array.<Array.<Object>, Number>}
 */
exports.tokenizeClass = function (str, regexpStr) {
  /* jshint maxlen: false */
  var tokens = [];
  var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?([^])/g;
  var rs, c;
  while ((rs = regexp.exec(str)) != null) {
    if (rs[1]) {
      tokens.push(sets.words());
    } else if (rs[2]) {
      tokens.push(sets.ints());
    } else if (rs[3]) {
      tokens.push(sets.whitespace());
    } else if (rs[4]) {
      tokens.push(sets.notWords());
    } else if (rs[5]) {
      tokens.push(sets.notInts());
    } else if (rs[6]) {
      tokens.push(sets.notWhitespace());
    } else if (rs[7]) {
      tokens.push({
        type: types.RANGE,
        from: (rs[8] || rs[9]).charCodeAt(0),
        to: rs[10].charCodeAt(0)
      });
    } else if (c = rs[12]) {
      tokens.push({
        type: types.CHAR,
        value: c.charCodeAt(0)
      });
    } else {
      return [tokens, regexp.lastIndex];
    }
  }
  exports.error(regexpStr, 'Unterminated character class');
};

/**
 * Shortcut to throw errors.
 *
 * @param {String} regexp
 * @param {String} msg
 */
exports.error = function (regexp, msg) {
  throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
};

/***/ })

}]);
//# sourceMappingURL=default~modules-my-profile-my-profile-module~modules-security-security-module~modules-user-managment~bbd46909.js.map