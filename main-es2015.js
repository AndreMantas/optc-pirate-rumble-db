(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\source\repos\games\optc-pirate-rumble-db\src\main.ts */"zUnb");


/***/ }),

/***/ "0mm2":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/marked.pipe.ts ***!
  \*********************************************/
/*! exports provided: MarkedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedPipe", function() { return MarkedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "DlQD");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);



class MarkedPipe {
    transform(value) {
        if (value && value.length > 0) {
            return marked__WEBPACK_IMPORTED_MODULE_1__(value);
        }
        return value;
    }
}
MarkedPipe.ɵfac = function MarkedPipe_Factory(t) { return new (t || MarkedPipe)(); };
MarkedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "marked", type: MarkedPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'marked'
            }]
    }], null, null); })();


/***/ }),

/***/ "30Z1":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/class-picker/class-picker.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClassPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPickerComponent", function() { return ClassPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClassPickerComponent_mat_button_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r1.name)("matTooltip", c_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", c_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ClassPickerComponent {
    constructor() {
        this.classChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.class = [];
        this.classes = [
            {
                name: 'Fighter',
                img: 'assets/images/filter_type_icn_1.png'
            },
            {
                name: 'Slasher',
                img: 'assets/images/filter_type_icn_2.png'
            },
            {
                name: 'Striker',
                img: 'assets/images/filter_type_icn_3.png'
            },
            {
                name: 'Shooter',
                img: 'assets/images/filter_type_icn_4.png'
            },
            {
                name: 'Free Spirit',
                img: 'assets/images/filter_type_icn_5.png'
            },
            {
                name: 'Driven',
                img: 'assets/images/filter_type_icn_6.png'
            },
            {
                name: 'Cerebral',
                img: 'assets/images/filter_type_icn_7.png'
            },
            {
                name: 'Powerhouse',
                img: 'assets/images/filter_type_icn_8.png'
            },
        ];
    }
    ngOnInit() {
        this.class = [];
        console.log('classes', this.classes);
    }
    change() {
        console.log('change', this.class);
        this.classChange.emit(this.class);
    }
}
ClassPickerComponent.ɵfac = function ClassPickerComponent_Factory(t) { return new (t || ClassPickerComponent)(); };
ClassPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClassPickerComponent, selectors: [["app-class-picker"]], outputs: { classChange: "classChange" }, decls: 2, vars: 2, consts: [["fxLayout", "row wrap", "aria-label", "Class Filter", "name", "class", "multiple", "", 3, "ngModel", "ngModelChange", "change"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], [3, "value", "matTooltip"], ["width", "48", "height", "48", 3, "src"]], template: function ClassPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClassPickerComponent_Template_mat_button_toggle_group_ngModelChange_0_listener($event) { return ctx.class = $event; })("change", function ClassPickerComponent_Template_mat_button_toggle_group_change_0_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClassPickerComponent_mat_button_toggle_1_Template, 2, 3, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NsYXNzLXBpY2tlci9jbGFzcy1waWNrZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-class-picker',
                templateUrl: './class-picker.component.html',
                styleUrls: ['./class-picker.component.css']
            }]
    }], function () { return []; }, { classChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "DVe0":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/changelog/changelog.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _pipes_marked_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/marked.pipe */ "0mm2");






class ChangelogComponent {
    constructor(http) {
        this.http = http;
        this.changeLogText = 'Could not load changelog';
    }
    ngOnInit() {
        const options = {
            responseType: 'text',
        };
        this.http.get('./CHANGELOG.md', options).subscribe(data => this.changeLogText = data);
    }
    getChangeLog() {
        return this.changeLogText;
    }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChangelogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["app-changelog"]], decls: 7, vars: 3, consts: [[3, "innerHTML"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Change Log ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "marked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.getChangeLog()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], pipes: [_pipes_marked_pipe__WEBPACK_IMPORTED_MODULE_4__["MarkedPipe"]], styles: ["a[_ngcontent-%COMP%] {\r\n  color: #BBB;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #DDD;\r\n}\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n  color: #999;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6ICNCQkI7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjREREO1xyXG59XHJcblxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangelogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-changelog',
                templateUrl: './changelog.component.html',
                styleUrls: ['./changelog.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JMoW":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/effect.pipe.ts ***!
  \*********************************************/
/*! exports provided: EffectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectPipe", function() { return EffectPipe; });
/* harmony import */ var intl_list_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intl-list-format */ "6cLz");
/* harmony import */ var intl_list_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intl_list_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var intl_list_format_locale_data_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-list-format/locale-data/en */ "V8Jz");
/* harmony import */ var intl_list_format_locale_data_en__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intl_list_format_locale_data_en__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const numberFormatter = new Intl.NumberFormat();
const listFormatter = new Intl.ListFormat();
class EffectPipe {
    transform(effect) {
        let e = '<li>';
        e += this.conditionToString(effect.condition);
        switch (effect.effect) {
            case 'buff':
                e += 'Applies Lv.' + effect.level + ' ' + this.arrayToString(effect.attributes) + ' up buff';
                break;
            case 'debuff':
                e += 'Inflicts Lv.' + effect.level + ' ' + this.arrayToString(effect.attributes) + ' down debuff';
                break;
            case 'damage':
                switch (effect.type) {
                    case 'time':
                        e += 'Deals Lv.' + effect.level + ' Damage Over Time';
                        break;
                    case 'atk':
                        e += 'Deals ' + numberFormatter.format(effect.amount) + 'x ATK in damage';
                        break;
                    case 'fixed':
                        e += 'Deals ' + numberFormatter.format(effect.amount) + 'x ATK in damage';
                        break;
                    case 'cut':
                        e += numberFormatter.format(effect.amount) + '% health cut';
                        break;
                    default:
                        e += 'TODO:  ' + JSON.stringify(effect);
                }
                break;
            case 'recharge':
                switch (effect.type) {
                    case 'RCV':
                        e += 'Restores ' + numberFormatter.format(effect.amount) + 'x RCV of HP';
                        break;
                    case 'percentage':
                        e += 'Restores ' + numberFormatter.format(effect.amount) + '% of HP';
                        break;
                    case 'fixed':
                        e += 'Restores ' + numberFormatter.format(effect.amount) + ' fixed HP';
                        break;
                    case 'Special CT':
                        e += 'Reduces ' + numberFormatter.format(effect.amount) + '% of ' + effect.type;
                        break;
                    default:
                        e += 'TODO:  ' + JSON.stringify(effect);
                }
                break;
            case 'hinderance':
                e += effect.chance + '% chance to ' + this.arrayToString(effect.attributes);
                break;
            case 'boon':
                e += ('chance' in effect ? effect.chance + '% chance to ' : '') + ('Provoke' === this.arrayToString(effect.attributes) ? 'Provoke enemies' : 'reduce ' + this.arrayToString(effect.attributes));
                break;
            case 'penalty':
                const tmpStr = this.arrayToString(effect.attributes);
                if (tmpStr === 'HP' && 'amount' in effect) {
                    e += numberFormatter.format(effect.amount) + '% health cut';
                }
                else if ('level' in effect) {
                    e += 'Inflicts Lv.' + numberFormatter.format(effect.level) + ' ' + this.arrayToString(effect.attributes) + ' down penalty';
                }
                else {
                    e += effect.chance + '% chance to ' + this.arrayToString(effect.attributes);
                }
                break;
            default:
                e += 'UNKNOWN EFFECT ' + JSON.stringify(effect);
                break;
        }
        e += this.targetToString(effect.targeting) + this.rangeToString(effect.range)
            + ('duration' in effect ? ' for ' + numberFormatter.format(effect.duration) + 's' : '') + '.';
        e += '</li>';
        return e;
    }
    arrayToString(array) {
        const tmpStr = listFormatter.format(array);
        return tmpStr;
    }
    conditionToString(condition) {
        if (!condition) {
            return '';
        }
        switch (condition.type) {
            case 'stat':
                return 'When ' + condition.stat + ' is ' + condition.comparator + ' ' + condition.count + '%, ';
            case 'time':
                switch (condition.comparator) {
                    case 'first':
                        return 'For the first ' + condition.count + ' seconds, ';
                    case 'after':
                        return 'After the first ' + condition.count + ' seconds, ';
                    case 'remaining':
                        return 'For the last ' + condition.count + ' seconds, ';
                    default:
                        return 'UNKNOWN TIME CONDITION ' + JSON.stringify(condition);
                }
            case 'crew':
            case 'enemies':
                return 'When ' + condition.type + ' count is ' + condition.count + ' or ' + condition.comparator + ', ';
            case 'trigger':
                return 'When this unit does a ' + condition.stat + ' (limit ' + condition.count + '), ';
            default:
                return 'UNKNOWN CONDITION ' + JSON.stringify(condition);
        }
    }
    rangeToString(range) {
        if (!range) {
            return '';
        }
        return ' in a ' + range.size + ', ' + range.direction + ' range';
    }
    targetToString(target) {
        if (!target) {
            return '';
        }
        let targetStr = this.arrayToString(target.targets);
        if (targetStr === 'crew') {
            targetStr = 'crew member(s)';
        }
        if (targetStr === 'enemies') {
            if (!target.count) {
                targetStr = 'all enemies';
            }
            else if (target.count === 1) {
                targetStr = 'enemy';
            }
        }
        return ' to ' + ('count' in target ? target.count + ' ' : '') + targetStr
            + ('stat' in target ? ' with the ' + target.priority + ' ' + target.stat : '');
    }
}
EffectPipe.ɵfac = function EffectPipe_Factory(t) { return new (t || EffectPipe)(); };
EffectPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "effect", type: EffectPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EffectPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"],
        args: [{
                name: 'effect'
            }]
    }], null, null); })();


/***/ }),

/***/ "P+y/":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/decorate.pipe.ts ***!
  \***********************************************/
/*! exports provided: DecoratePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecoratePipe", function() { return DecoratePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DecoratePipe {
    transform(s) {
        if (s === null || s === '') {
            return s;
        }
        return s.replace(/\[?STR\]?/, this.getImageString('filter_attribute_power'))
            .replace(/\[?DEX\]?/, this.getImageString('filter_attribute_technical'))
            .replace(/\[?QCK\]?/, this.getImageString('filter_attribute_speed'))
            .replace(/\[?PSY\]?/, this.getImageString('filter_attribute_heart'))
            .replace(/\[?INT\]?/, this.getImageString('filter_attribute_intellect'))
            .replace(/\[?DUAL\]?/, this.getImageString('filter_attribute_multiplecharacter'));
    }
    getImageString(s) {
        return '<img src="assets/images/' + s + '.png" width="auto" height="30px"/>';
    }
}
DecoratePipe.ɵfac = function DecoratePipe_Factory(t) { return new (t || DecoratePipe)(); };
DecoratePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "decorate", type: DecoratePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecoratePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'decorate'
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _pipes_decorate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/decorate.pipe */ "P+y/");
/* harmony import */ var _pipes_effect_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/effect.pipe */ "JMoW");
/* harmony import */ var _pipes_marked_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/marked.pipe */ "0mm2");
/* harmony import */ var _components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/changelog/changelog.component */ "DVe0");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "efK2");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _pipes_unit_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/unit-filter.pipe */ "iSLt");
/* harmony import */ var _components_class_picker_class_picker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/class-picker/class-picker.component */ "30Z1");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _components_type_picker_type_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/type-picker/type-picker.component */ "wpUN");

















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_7__["ChangelogComponent"],
        _pipes_decorate_pipe__WEBPACK_IMPORTED_MODULE_4__["DecoratePipe"],
        _pipes_effect_pipe__WEBPACK_IMPORTED_MODULE_5__["EffectPipe"],
        _pipes_marked_pipe__WEBPACK_IMPORTED_MODULE_6__["MarkedPipe"],
        _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"],
        _pipes_unit_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["UnitFilterPipe"],
        _components_class_picker_class_picker_component__WEBPACK_IMPORTED_MODULE_13__["ClassPickerComponent"],
        _components_type_picker_type_picker_component__WEBPACK_IMPORTED_MODULE_15__["TypePickerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_7__["ChangelogComponent"],
        _pipes_decorate_pipe__WEBPACK_IMPORTED_MODULE_4__["DecoratePipe"],
        _pipes_effect_pipe__WEBPACK_IMPORTED_MODULE_5__["EffectPipe"],
        _pipes_marked_pipe__WEBPACK_IMPORTED_MODULE_6__["MarkedPipe"],
        _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"],
        _pipes_unit_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["UnitFilterPipe"],
        _components_class_picker_class_picker_component__WEBPACK_IMPORTED_MODULE_13__["ClassPickerComponent"],
        _components_type_picker_type_picker_component__WEBPACK_IMPORTED_MODULE_15__["TypePickerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_7__["ChangelogComponent"],
                    _pipes_decorate_pipe__WEBPACK_IMPORTED_MODULE_4__["DecoratePipe"],
                    _pipes_effect_pipe__WEBPACK_IMPORTED_MODULE_5__["EffectPipe"],
                    _pipes_marked_pipe__WEBPACK_IMPORTED_MODULE_6__["MarkedPipe"],
                    _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"],
                    _pipes_unit_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["UnitFilterPipe"],
                    _components_class_picker_class_picker_component__WEBPACK_IMPORTED_MODULE_13__["ClassPickerComponent"],
                    _components_type_picker_type_picker_component__WEBPACK_IMPORTED_MODULE_15__["TypePickerComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _components_changelog_changelog_component__WEBPACK_IMPORTED_MODULE_7__["ChangelogComponent"],
                    _pipes_decorate_pipe__WEBPACK_IMPORTED_MODULE_4__["DecoratePipe"],
                    _pipes_effect_pipe__WEBPACK_IMPORTED_MODULE_5__["EffectPipe"],
                    _pipes_marked_pipe__WEBPACK_IMPORTED_MODULE_6__["MarkedPipe"],
                    _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"],
                    _pipes_unit_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["UnitFilterPipe"],
                    _components_class_picker_class_picker_component__WEBPACK_IMPORTED_MODULE_13__["ClassPickerComponent"],
                    _components_type_picker_type_picker_component__WEBPACK_IMPORTED_MODULE_15__["TypePickerComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                ],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "efK2":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
  \***********************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const MAX_LENGTH = 35;
class TruncatePipe {
    transform(s) {
        if (s.length < MAX_LENGTH) {
            return s;
        }
        // return '<span matTooltip="'+s+'">'+s.substring(0,37)+'...</span>';
        return s.substring(0, MAX_LENGTH - 3) + '...';
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();


/***/ }),

/***/ "iSLt":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/unit-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: UnitFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFilterPipe", function() { return UnitFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UnitFilterPipe {
    transform(value, ...args) {
        const arg = args && args[0];
        if (!arg) {
            return value.slice(0, 10);
        }
        let filtered = value;
        const nameFilter = arg.filter && arg.filter.toLowerCase();
        if (nameFilter) {
            filtered = filtered.filter(u => u.name.toLowerCase().includes(nameFilter));
        }
        if (arg.types && arg.types.length) {
            filtered = filtered.filter(u => u.stats && arg.types.some(t => t === u.stats.type));
        }
        if (arg.classes && arg.classes.length) {
            const set = new Set(arg.classes);
            if (arg.includeOtherClasses) {
                filtered = filtered.filter(u => u.stats && set.has(u.stats.class1) || set.has(u.stats.class2));
            }
            else {
                filtered = filtered.filter(u => u.stats &&
                    set.has(u.stats.class1) &&
                    ((set.size === 1 && !u.stats.class2) || set.has(u.stats.class2)));
            }
        }
        // if we wanted to do pagination in this pipe:
        // const start = arg.page * arg.limit;
        // return filtered.slice(start, start + arg.limit);
        return filtered;
    }
}
UnitFilterPipe.ɵfac = function UnitFilterPipe_Factory(t) { return new (t || UnitFilterPipe)(); };
UnitFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "unitFilter", type: UnitFilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'unitFilter',
                pure: false,
            }]
    }], null, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");






class CoreModule {
    constructor(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | database-database-module */[__webpack_require__.e("default~database-database-module~team-builder-team-builder-module"), __webpack_require__.e("database-database-module")]).then(__webpack_require__.bind(null, /*! ./database/database.module */ "xBvx")).then(m => m.DatabaseModule),
    },
    {
        path: 'team-builder',
        loadChildren: () => Promise.all(/*! import() | team-builder-team-builder-module */[__webpack_require__.e("default~database-database-module~team-builder-team-builder-module"), __webpack_require__.e("team-builder-team-builder-module")]).then(__webpack_require__.bind(null, /*! ./team-builder/team-builder.module */ "CC78")).then(m => m.TeamBuilderModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wpUN":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/type-picker/type-picker.component.ts ***!
  \************************************************************************/
/*! exports provided: TypePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypePickerComponent", function() { return TypePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TypePickerComponent_mat_button_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", t_r1.name)("matTooltip", t_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", t_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TypePickerComponent {
    constructor() {
        this.classChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = [];
        this.types = [
            {
                name: 'STR',
                img: 'assets/images/filter_attribute_power.png'
            },
            {
                name: 'DEX',
                img: 'assets/images/filter_attribute_technical.png'
            },
            {
                name: 'QCK',
                img: 'assets/images/filter_attribute_speed.png'
            },
            {
                name: 'PSY',
                img: 'assets/images/filter_attribute_heart.png'
            },
            {
                name: 'INT',
                img: 'assets/images/filter_attribute_intellect.png'
            },
            {
                name: 'DUAL',
                img: 'assets/images/filter_attribute_multiplecharacter.png'
            },
        ];
    }
    ngOnInit() {
        this.type = [];
        console.log('types', this.types);
    }
    change() {
        console.log('change', this.type);
        this.classChange.emit(this.type);
    }
}
TypePickerComponent.ɵfac = function TypePickerComponent_Factory(t) { return new (t || TypePickerComponent)(); };
TypePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypePickerComponent, selectors: [["app-type-picker"]], outputs: { classChange: "classChange" }, decls: 2, vars: 2, consts: [["fxLayout", "row wrap", "aria-label", "Type Filter", "name", "type", "multiple", "", 3, "ngModel", "ngModelChange", "change"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], [3, "value", "matTooltip"], ["width", "48", "height", "48", 3, "src"]], template: function TypePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TypePickerComponent_Template_mat_button_toggle_group_ngModelChange_0_listener($event) { return ctx.type = $event; })("change", function TypePickerComponent_Template_mat_button_toggle_group_change_0_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TypePickerComponent_mat_button_toggle_1_Template, 2, 3, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3R5cGUtcGlja2VyL3R5cGUtcGlja2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-type-picker',
                templateUrl: './type-picker.component.html',
                styleUrls: ['./type-picker.component.css']
            }]
    }], function () { return []; }, { classChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map