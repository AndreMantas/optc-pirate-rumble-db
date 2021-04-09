(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-builder-team-builder-module"], {
    /***/
    "+9r9":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@material-extended/mde/__ivy_ngcc__/fesm2015/material-extended-mde.js ***!
      \********************************************************************************************/

    /*! exports provided: MdePopover, MdePopoverModule, MdePopoverTarget, MdePopoverTrigger, transformPopover */

    /***/
    function r9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MdePopover", function () {
        return MdePopover;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MdePopoverModule", function () {
        return MdePopoverModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MdePopoverTarget", function () {
        return MdePopoverTarget;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MdePopoverTrigger", function () {
        return MdePopoverTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transformPopover", function () {
        return transformPopover;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /**
       * Throws an exception for the case when popover trigger doesn't have a valid mde-popover instance
       */


      function MdePopover_ng_template_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r1.popoverArrowStyles);
        }
      }

      function MdePopover_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function MdePopover_ng_template_0_Template_div_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2._handleKeydown($event);
          })("click", function MdePopover_ng_template_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onClick();
          })("mouseover", function MdePopover_ng_template_0_Template_div_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.onMouseOver();
          })("mouseleave", function MdePopover_ng_template_0_Template_div_mouseleave_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onMouseLeave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MdePopover_ng_template_0_div_1_Template, 1, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mde-popover-overlap", ctx_r0.overlapTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0._classList)("ngStyle", ctx_r0.popoverPanelStyles)("@.disabled", ctx_r0.disableAnimation)("@transformPopover", "enter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.overlapTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.popoverContentStyles)("cdkTrapFocus", ctx_r0.focusTrapEnabled)("cdkTrapFocusAutoCapture", ctx_r0.focusTrapAutoCaptureEnabled);
        }
      }

      var _c0 = ["*"];

      function throwMdePopoverMissingError() {
        throw Error("mde-popover-trigger: must pass in an mde-popover instance.\n\n    Example:\n      <mde-popover #popover=\"mdePopover\"></mde-popover>\n      <button [mdePopoverTriggerFor]=\"popover\"></button>");
      }
      /**
       * Throws an exception for the case when popover's mdePopoverPositionX value isn't valid.
       * In other words, it doesn't match 'before' or 'after'.
       */


      function throwMdePopoverInvalidPositionX() {
        throw Error("mdePopoverPositionX value must be either 'before' or after'.\n      Example: <mde-popover mdePopoverPositionX=\"before\" #popover=\"mdePopover\"></mde-popover>");
      }
      /**
       * Throws an exception for the case when popover's mdePopoverPositionY value isn't valid.
       * In other words, it doesn't match 'above' or 'below'.
       */


      function throwMdePopoverInvalidPositionY() {
        throw Error("mdePopoverPositionY value must be either 'above' or below'.\n      Example: <mde-popover mdePopoverPositionY=\"above\" #popover=\"mdePopover\"></mde-popover>");
      }
      /**
       * Below are all the animations for the md-popover component.
       * Animation duration and timing values are based on AngularJS Material.
       */

      /**
       * This animation controls the popover panel's entry and exit from the page.
       *
       * When the popover panel is added to the DOM, it scales in and fades in its border.
       *
       * When the popover panel is removed from the DOM, it simply fades out after a brief
       * delay to display the ripple.
       */


      var transformPopover = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformPopover', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1,
        transform: "scale(1)"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0,
        transform: "scale(0)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])("200ms cubic-bezier(0.25, 0.8, 0.25, 1)")]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('50ms 100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0
      }))])]);

      var MdePopover = /*#__PURE__*/function () {
        function MdePopover(_elementRef, zone) {
          _classCallCheck(this, MdePopover);

          this._elementRef = _elementRef;
          this.zone = zone;
          this.role = 'dialog';
          /** Settings for popover, view setters and getters for more detail */

          this._positionX = 'after';
          this._positionY = 'below';
          this._triggerEvent = 'hover';
          this._enterDelay = 200;
          this._leaveDelay = 200;
          this._overlapTrigger = true;
          this._disableAnimation = false;
          this._targetOffsetX = 0;
          this._targetOffsetY = 0;
          this._arrowOffsetX = 20;
          this._arrowWidth = 8;
          this._arrowColor = 'rgba(0, 0, 0, 0.12)';
          this._closeOnClick = true;
          this._focusTrapEnabled = true;
          this._focusTrapAutoCaptureEnabled = true;
          /** Config object to be passed into the popover's ngClass */

          this._classList = {}; // TODO: Write comment description

          /** */

          this.containerPositioning = false;
          /** Closing disabled on popover */

          this.closeDisabled = false;
          /** Emits the current animation state whenever it changes. */

          this._onAnimationStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the popover is closed. */

          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.setPositionClasses();
        }
        /** Position of the popover in the X axis. */


        _createClass(MdePopover, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._emitCloseEvent();

            this.close.complete();
          }
          /** Handle a keyboard event from the popover, delegating to the appropriate action. */

        }, {
          key: "_handleKeydown",
          value: function _handleKeydown(event) {
            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ESCAPE"]:
                this._emitCloseEvent();

                return;
            }
          }
          /**
           * This emits a close event to which the trigger is subscribed. When emitted, the
           * trigger will close the popover.
           */

        }, {
          key: "_emitCloseEvent",
          value: function _emitCloseEvent() {
            this.close.emit();
          }
          /** Close popover on click if closeOnClick is true */

        }, {
          key: "onClick",
          value: function onClick() {
            if (this.closeOnClick) {
              this._emitCloseEvent();
            }
          }
          /**
           * TODO: Refactor when @angular/cdk includes feature I mentioned on github see link below.
           * https://github.com/angular/material2/pull/5493#issuecomment-313085323
           */

          /** Disables close of popover when leaving trigger element and mouse over the popover */

        }, {
          key: "onMouseOver",
          value: function onMouseOver() {
            if (this.triggerEvent === 'hover') {
              this.closeDisabled = true;
            }
          }
          /** Enables close of popover when mouse leaving popover element */

        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            if (this.triggerEvent === 'hover') {
              this.closeDisabled = false;

              this._emitCloseEvent();
            }
          } // TODO: Refactor how styles are set and updated on the component, use best practices.
          // TODO: If arrow left and right positioning is requested, see if flex direction can be used to work with order.

          /** Sets the current styles for the popover to allow for dynamically changing settings */

        }, {
          key: "setCurrentStyles",
          value: function setCurrentStyles() {
            // TODO: See if arrow position can be calculated automatically and allow override.
            // TODO: See if flex order is a better alternative to position arrow top or bottom.
            this.popoverArrowStyles = {
              'right': this.positionX === 'before' ? this.arrowOffsetX - this.arrowWidth + 'px' : '',
              'left': this.positionX === 'after' ? this.arrowOffsetX - this.arrowWidth + 'px' : '',
              'border-top': this.positionY === 'below' ? this.arrowWidth + 'px solid ' + this.arrowColor : '0px solid transparent',
              'border-right': 'undefined' === undefined ? this.arrowWidth + 'px solid ' + this.arrowColor : this.arrowWidth + 'px solid transparent',
              'border-bottom': this.positionY === 'above' ? this.arrowWidth + 'px solid ' + this.arrowColor : this.arrowWidth + 'px solid transparent',
              'border-left': 'undefined' === undefined ? this.arrowWidth + 'px solid ' + this.arrowColor : this.arrowWidth + 'px solid transparent'
            }; // TODO: Remove if flex order is added.

            this.popoverContentStyles = {
              'padding-top': this.overlapTrigger === true ? '0px' : this.arrowWidth + 'px',
              'padding-bottom': this.overlapTrigger === true ? '0px' : this.arrowWidth + 'px',
              'margin-top': this.overlapTrigger === false && this.positionY === 'below' && this.containerPositioning === false ? -(this.arrowWidth * 2) + 'px' : '0px'
            };
          }
          /**
           * It's necessary to set position-based classes to ensure the popover panel animation
           * folds out from the correct direction.
           */

        }, {
          key: "setPositionClasses",
          value: function setPositionClasses() {
            var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.positionX;
            var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.positionY;
            this._classList['mde-popover-before'] = posX === 'before';
            this._classList['mde-popover-after'] = posX === 'after';
            this._classList['mde-popover-above'] = posY === 'above';
            this._classList['mde-popover-below'] = posY === 'below';
          }
        }, {
          key: "positionX",
          get: function get() {
            return this._positionX;
          },
          set: function set(value) {
            if (value !== 'before' && value !== 'after') {
              throwMdePopoverInvalidPositionX();
            }

            this._positionX = value;
            this.setPositionClasses();
          }
          /** Position of the popover in the Y axis. */

        }, {
          key: "positionY",
          get: function get() {
            return this._positionY;
          },
          set: function set(value) {
            if (value !== 'above' && value !== 'below') {
              throwMdePopoverInvalidPositionY();
            }

            this._positionY = value;
            this.setPositionClasses();
          }
          /** Popover trigger event */

        }, {
          key: "triggerEvent",
          get: function get() {
            return this._triggerEvent;
          },
          set: function set(value) {
            this._triggerEvent = value;
          }
          /** Popover enter delay */

        }, {
          key: "enterDelay",
          get: function get() {
            return this._enterDelay;
          },
          set: function set(value) {
            this._enterDelay = value;
          }
          /** Popover leave delay */

        }, {
          key: "leaveDelay",
          get: function get() {
            return this._leaveDelay;
          },
          set: function set(value) {
            this._leaveDelay = value;
          }
          /** Popover overlap trigger */

        }, {
          key: "overlapTrigger",
          get: function get() {
            return this._overlapTrigger;
          },
          set: function set(value) {
            this._overlapTrigger = value;
          }
          /** Popover target offset x */

        }, {
          key: "targetOffsetX",
          get: function get() {
            return this._targetOffsetX;
          },
          set: function set(value) {
            this._targetOffsetX = value;
          }
          /** Popover target offset y */

        }, {
          key: "targetOffsetY",
          get: function get() {
            return this._targetOffsetY;
          },
          set: function set(value) {
            this._targetOffsetY = value;
          }
          /** Popover arrow offset x */

        }, {
          key: "arrowOffsetX",
          get: function get() {
            return this._arrowOffsetX;
          },
          set: function set(value) {
            this._arrowOffsetX = value;
          }
          /** Popover arrow width */

        }, {
          key: "arrowWidth",
          get: function get() {
            return this._arrowWidth;
          },
          set: function set(value) {
            this._arrowWidth = value;
          }
          /** Popover arrow color */

        }, {
          key: "arrowColor",
          get: function get() {
            return this._arrowColor;
          },
          set: function set(value) {
            this._arrowColor = value;
          }
          /**
           * Popover container close on click
           * default: true
           */

        }, {
          key: "closeOnClick",
          get: function get() {
            return this._closeOnClick;
          },
          set: function set(value) {
            this._closeOnClick = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Disable animations of popover and all child elements
           * default: false
           */

        }, {
          key: "disableAnimation",
          get: function get() {
            return this._disableAnimation;
          },
          set: function set(value) {
            this._disableAnimation = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Popover focus trap using cdkTrapFocus
           * default: true
           */

        }, {
          key: "focusTrapEnabled",
          get: function get() {
            return this._focusTrapEnabled;
          },
          set: function set(value) {
            this._focusTrapEnabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * Popover focus trap auto capture using cdkTrapFocusAutoCapture
           * default: true
           */

        }, {
          key: "focusTrapAutoCaptureEnabled",
          get: function get() {
            return this._focusTrapAutoCaptureEnabled;
          },
          set: function set(value) {
            this._focusTrapAutoCaptureEnabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /**
           * This method takes classes set on the host md-popover element and applies them on the
           * popover template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing popover from outside the component.
           * @param classes list of class names
           */

        }, {
          key: "panelClass",
          set: function set(classes) {
            if (classes && classes.length) {
              this._classList = classes.split(' ').reduce(function (obj, className) {
                obj[className] = true;
                return obj;
              }, {});
              this._elementRef.nativeElement.className = '';
              this.setPositionClasses();
            }
          }
          /**
           * This method takes classes set on the host md-popover element and applies them on the
           * popover template that displays in the overlay container.  Otherwise, it's difficult
           * to style the containing popover from outside the component.
           * @deprecated Use `panelClass` instead.
           */

        }, {
          key: "classList",
          get: function get() {
            return this.panelClass;
          },
          set: function set(classes) {
            this.panelClass = classes;
          }
        }]);

        return MdePopover;
      }();

      MdePopover.ɵfac = function MdePopover_Factory(t) {
        return new (t || MdePopover)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      MdePopover.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MdePopover,
        selectors: [["mde-popover"]],
        viewQuery: function MdePopover_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        hostVars: 1,
        hostBindings: function MdePopover_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", ctx.role);
          }
        },
        inputs: {
          positionX: ["mdePopoverPositionX", "positionX"],
          positionY: ["mdePopoverPositionY", "positionY"],
          triggerEvent: ["mdePopoverTriggerOn", "triggerEvent"],
          enterDelay: ["mdePopoverEnterDelay", "enterDelay"],
          leaveDelay: ["mdePopoverLeaveDelay", "leaveDelay"],
          overlapTrigger: ["mdePopoverOverlapTrigger", "overlapTrigger"],
          targetOffsetX: ["mdePopoverOffsetX", "targetOffsetX"],
          targetOffsetY: ["mdePopoverOffsetY", "targetOffsetY"],
          arrowOffsetX: ["mdePopoverArrowOffsetX", "arrowOffsetX"],
          arrowWidth: ["mdePopoverArrowWidth", "arrowWidth"],
          arrowColor: ["mdePopoverArrowColor", "arrowColor"],
          closeOnClick: ["mdePopoverCloseOnClick", "closeOnClick"],
          disableAnimation: ["mdePopoverDisableAnimation", "disableAnimation"],
          focusTrapEnabled: ["mdeFocusTrapEnabled", "focusTrapEnabled"],
          focusTrapAutoCaptureEnabled: ["mdeFocusTrapAutoCaptureEnabled", "focusTrapAutoCaptureEnabled"],
          panelClass: ["class", "panelClass"],
          classList: "classList"
        },
        outputs: {
          close: "close"
        },
        exportAs: ["mdePopover"],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        consts: [["role", "dialog", 1, "mde-popover-panel", 3, "ngClass", "ngStyle", "keydown", "click", "mouseover", "mouseleave"], ["class", "mde-popover-direction-arrow", 3, "ngStyle", 4, "ngIf"], [1, "mde-popover-content", 3, "ngStyle", "cdkTrapFocus", "cdkTrapFocusAutoCapture"], [1, "mde-popover-direction-arrow", 3, "ngStyle"]],
        template: function MdePopover_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MdePopover_ng_template_0_Template, 4, 10, "ng-template");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["CdkTrapFocus"]],
        styles: [".mde-popover-panel{display:flex;flex-direction:column;max-height:calc(100vh + 48px)}.mde-popover-ripple{position:absolute;top:0;left:0;bottom:0;right:0}.mde-popover-below .mde-popover-direction-arrow{position:absolute;bottom:0;width:0;height:0;border-bottom-width:0!important;z-index:99999}.mde-popover-above .mde-popover-direction-arrow{position:absolute;top:0;width:0;height:0;border-top-width:0!important;z-index:99999}.mde-popover-after .mde-popover-direction-arrow{left:20px}.mde-popover-before .mde-popover-direction-arrow{right:20px}"],
        encapsulation: 2,
        data: {
          animation: [transformPopover]
        },
        changeDetection: 0
      });

      MdePopover.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.role')], MdePopover.prototype, "role", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverPositionX')], MdePopover.prototype, "positionX", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverPositionY')], MdePopover.prototype, "positionY", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverTriggerOn')], MdePopover.prototype, "triggerEvent", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverEnterDelay')], MdePopover.prototype, "enterDelay", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverLeaveDelay')], MdePopover.prototype, "leaveDelay", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverOverlapTrigger')], MdePopover.prototype, "overlapTrigger", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverOffsetX')], MdePopover.prototype, "targetOffsetX", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverOffsetY')], MdePopover.prototype, "targetOffsetY", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverArrowOffsetX')], MdePopover.prototype, "arrowOffsetX", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverArrowWidth')], MdePopover.prototype, "arrowWidth", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverArrowColor')], MdePopover.prototype, "arrowColor", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverCloseOnClick')], MdePopover.prototype, "closeOnClick", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverDisableAnimation')], MdePopover.prototype, "disableAnimation", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdeFocusTrapEnabled')], MdePopover.prototype, "focusTrapEnabled", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdeFocusTrapAutoCaptureEnabled')], MdePopover.prototype, "focusTrapAutoCaptureEnabled", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('class')], MdePopover.prototype, "panelClass", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MdePopover.prototype, "classList", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MdePopover.prototype, "close", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], MdePopover.prototype, "templateRef", void 0);
      /**
       * This directive is intended to be used in conjunction with an mde-popover tag. It is
       * responsible for toggling the display of the provided popover instance.
       */

      var MdePopoverTrigger = /*#__PURE__*/function () {
        function MdePopoverTrigger(_overlay, _elementRef, _viewContainerRef, _dir, _changeDetectorRef) {
          _classCallCheck(this, MdePopoverTrigger);

          this._overlay = _overlay;
          this._elementRef = _elementRef;
          this._viewContainerRef = _viewContainerRef;
          this._dir = _dir;
          this._changeDetectorRef = _changeDetectorRef;
          this.ariaHaspopup = true;
          this._overlayRef = null;
          this._popoverOpen = false;
          this._halt = false; // tracking input type is necessary so it's possible to only auto-focus
          // the first item of the list when the popover is opened via the keyboard

          this._openedByMouse = false;
          /** Popover backdrop close on click */

          this.backdropCloseOnClick = true;
          /** Event emitted when the associated popover is opened. */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the associated popover is closed. */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(MdePopoverTrigger, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this._checkPopover();

            this._setCurrentConfig();

            this.popover.close.subscribe(function () {
              return _this.closePopover();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyPopover();
          }
        }, {
          key: "_setCurrentConfig",
          value: function _setCurrentConfig() {
            if (this.positionX === 'before' || this.positionX === 'after') {
              this.popover.positionX = this.positionX;
            }

            if (this.positionY === 'above' || this.positionY === 'below') {
              this.popover.positionY = this.positionY;
            }

            if (this.triggerEvent) {
              this.popover.triggerEvent = this.triggerEvent;
            }

            if (this.enterDelay) {
              this.popover.enterDelay = this.enterDelay;
            }

            if (this.leaveDelay) {
              this.popover.leaveDelay = this.leaveDelay;
            }

            if (this.overlapTrigger === true || this.overlapTrigger === false) {
              this.popover.overlapTrigger = this.overlapTrigger;
            }

            if (this.targetOffsetX) {
              this.popover.targetOffsetX = this.targetOffsetX;
            }

            if (this.targetOffsetY) {
              this.popover.targetOffsetY = this.targetOffsetY;
            }

            if (this.arrowOffsetX) {
              this.popover.arrowOffsetX = this.arrowOffsetX;
            }

            if (this.arrowWidth) {
              this.popover.arrowWidth = this.arrowWidth;
            }

            if (this.arrowColor) {
              this.popover.arrowColor = this.arrowColor;
            }

            if (this.closeOnClick === true || this.closeOnClick === false) {
              this.popover.closeOnClick = this.closeOnClick;
            }

            this.popover.setCurrentStyles();
          }
          /** Whether the popover is open. */

        }, {
          key: "onClick",
          value: function onClick(event) {
            if (this.popover.triggerEvent === 'click') {
              // this.popover.setCurrentStyles();
              // this._setCurrentConfig();
              this.togglePopover();
            }
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter(event) {
            var _this2 = this;

            this._halt = false;

            if (this.popover.triggerEvent === 'hover') {
              this._mouseoverTimer = setTimeout(function () {
                _this2.openPopover();
              }, this.popover.enterDelay);
            }
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave(event) {
            var _this3 = this;

            if (this.popover.triggerEvent === 'hover') {
              if (this._mouseoverTimer) {
                clearTimeout(this._mouseoverTimer);
                this._mouseoverTimer = null;
              }

              if (this._popoverOpen) {
                setTimeout(function () {
                  if (!_this3.popover.closeDisabled) {
                    _this3.closePopover();
                  }
                }, this.popover.leaveDelay);
              } else {
                this._halt = true;
              }
            }
          }
          /** Toggles the popover between the open and closed states. */

        }, {
          key: "togglePopover",
          value: function togglePopover() {
            return this._popoverOpen ? this.closePopover() : this.openPopover();
          }
          /** Opens the popover. */

        }, {
          key: "openPopover",
          value: function openPopover() {
            if (!this._popoverOpen && !this._halt) {
              this._createOverlay().attach(this._portal);
              /** Only subscribe to backdrop if trigger event is click */


              if (this.triggerEvent === 'click' && this.backdropCloseOnClick === true) {
                this._subscribeToBackdrop();
              }

              this._initPopover();
            }
          }
          /** Closes the popover. */

        }, {
          key: "closePopover",
          value: function closePopover() {
            if (this._overlayRef) {
              this._overlayRef.detach();
              /** Only unsubscribe to backdrop if trigger event is click */


              if (this.triggerEvent === 'click' && this.backdropCloseOnClick === true) {
                this._backdropSubscription.unsubscribe();
              }

              this._resetPopover();
            }
          }
          /** Removes the popover from the DOM. */

        }, {
          key: "destroyPopover",
          value: function destroyPopover() {
            if (this._mouseoverTimer) {
              clearTimeout(this._mouseoverTimer);
              this._mouseoverTimer = null;
            }

            if (this._overlayRef) {
              this._overlayRef.dispose();

              this._overlayRef = null;

              this._cleanUpSubscriptions();
            }
          }
          /** Focuses the popover trigger. */

        }, {
          key: "focus",
          value: function focus() {
            this._elementRef.nativeElement.focus();
          }
          /** The text direction of the containing app. */

        }, {
          key: "_subscribeToBackdrop",

          /**
          * This method ensures that the popover closes when the overlay backdrop is clicked.
          * We do not use first() here because doing so would not catch clicks from within
          * the popover, and it would fail to unsubscribe properly. Instead, we unsubscribe
          * explicitly when the popover is closed or destroyed.
          */
          value: function _subscribeToBackdrop() {
            var _this4 = this;

            if (this._overlayRef) {
              this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function () {
                _this4.popover._emitCloseEvent();
              });
            }
          }
          /**
          * This method sets the popover state to open and focuses the first item if
          * the popover was opened via the keyboard.
          */

        }, {
          key: "_initPopover",
          value: function _initPopover() {
            this._setIsPopoverOpen(true);
          }
          /**
          * This method resets the popover when it's closed, most importantly restoring
          * focus to the popover trigger if the popover was opened via the keyboard.
          */

        }, {
          key: "_resetPopover",
          value: function _resetPopover() {
            this._setIsPopoverOpen(false); // Focus only needs to be reset to the host element if the popover was opened
            // by the keyboard and manually shifted to the first popover item.


            if (!this._openedByMouse) {
              this.focus();
            }

            this._openedByMouse = false;
          }
          /** set state rather than toggle to support triggers sharing a popover */

        }, {
          key: "_setIsPopoverOpen",
          value: function _setIsPopoverOpen(isOpen) {
            this._popoverOpen = isOpen;
            this._popoverOpen ? this.opened.emit() : this.closed.emit();
          }
          /**
          *  This method checks that a valid instance of MdPopover has been passed into
          *  mdPopoverTriggerFor. If not, an exception is thrown.
          */

        }, {
          key: "_checkPopover",
          value: function _checkPopover() {
            if (!this.popover) {
              throwMdePopoverMissingError();
            }
          }
          /**
          *  This method creates the overlay from the provided popover's template and saves its
          *  OverlayRef so that it can be attached to the DOM when openPopover is called.
          */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            if (!this._overlayRef) {
              this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["TemplatePortal"](this.popover.templateRef, this._viewContainerRef);

              var config = this._getOverlayConfig();

              this._subscribeToPositions(config.positionStrategy);

              this._overlayRef = this._overlay.create(config);
            }

            return this._overlayRef;
          }
          /**
          * This method builds the configuration object needed to create the overlay, the OverlayConfig.
          * @returns OverlayConfig
          */

        }, {
          key: "_getOverlayConfig",
          value: function _getOverlayConfig() {
            var overlayState = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]();
            overlayState.positionStrategy = this._getPosition();
            /** Display overlay backdrop if trigger event is click */

            if (this.triggerEvent === 'click') {
              overlayState.hasBackdrop = true;
              overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
            }

            overlayState.direction = this.dir;
            overlayState.scrollStrategy = this._overlay.scrollStrategies.reposition();
            return overlayState;
          }
          /**
          * Listens to changes in the position of the overlay and sets the correct classes
          * on the popover based on the new position. This ensures the animation origin is always
          * correct, even if a fallback position is used for the overlay.
          */

        }, {
          key: "_subscribeToPositions",
          value: function _subscribeToPositions(position) {
            var _this5 = this;

            this._positionSubscription = position.positionChanges.subscribe(function (change) {
              var posisionX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
              var posisionY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';

              if (!_this5.popover.overlapTrigger) {
                posisionY = posisionY === 'below' ? 'above' : 'below';
              } // required for ChangeDetectionStrategy.OnPush


              _this5._changeDetectorRef.markForCheck();

              _this5.popover.zone.run(function () {
                _this5.popover.positionX = posisionX;
                _this5.popover.positionY = posisionY;

                _this5.popover.setCurrentStyles();

                _this5.popover.setPositionClasses(posisionX, posisionY);
              });
            });
          }
          /**
          * This method builds the position strategy for the overlay, so the popover is properly connected
          * to the trigger.
          * @returns ConnectedPositionStrategy
          */

        }, {
          key: "_getPosition",
          value: function _getPosition() {
            var _ref = this.popover.positionX === 'before' ? ['end', 'start'] : ['start', 'end'],
                _ref2 = _slicedToArray(_ref, 2),
                originX = _ref2[0],
                originFallbackX = _ref2[1];

            var _ref3 = this.popover.positionY === 'above' ? ['bottom', 'top'] : ['top', 'bottom'],
                _ref4 = _slicedToArray(_ref3, 2),
                overlayY = _ref4[0],
                overlayFallbackY = _ref4[1]; // let originY = overlayY;
            // let fallbackOriginY = overlayFallbackY;


            var originY = overlayY;
            var originFallbackY = overlayFallbackY;
            var overlayX = originX;
            var overlayFallbackX = originFallbackX; // let [originY, originFallbackY] = [overlayY, overlayFallbackY];
            // let [overlayX, overlayFallbackX] = [originX, originFallbackX];

            /** Reverse overlayY and fallbackOverlayY when overlapTrigger is false */

            if (!this.popover.overlapTrigger) {
              originY = overlayY === 'top' ? 'bottom' : 'top';
              originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
            }

            var offsetX = 0;
            var offsetY = 0;

            if (this.popover.targetOffsetX && !isNaN(Number(this.popover.targetOffsetX))) {
              offsetX = Number(this.popover.targetOffsetX); // offsetX = -16;
            }

            if (this.popover.targetOffsetY && !isNaN(Number(this.popover.targetOffsetY))) {
              offsetY = Number(this.popover.targetOffsetY); // offsetY = -10;
            }
            /**
             * For overriding position element, when mdePopoverTargetAt has a valid element reference.
             * Useful for sticking popover to parent element and offsetting arrow to trigger element.
             * If undefined defaults to the trigger element reference.
             */


            var element = this._elementRef;

            if (typeof this.targetElement !== 'undefined') {
              this.popover.containerPositioning = true;
              element = this.targetElement._elementRef;
            }

            return this._overlay.position().flexibleConnectedTo(element).withPositions([{
              originX: originX,
              originY: originY,
              overlayX: overlayX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originFallbackX,
              originY: originY,
              overlayX: overlayFallbackX,
              overlayY: overlayY,
              offsetY: offsetY
            }, {
              originX: originX,
              originY: originFallbackY,
              overlayX: overlayX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }, {
              originX: originFallbackX,
              originY: originFallbackY,
              overlayX: overlayFallbackX,
              overlayY: overlayFallbackY,
              offsetY: -offsetY
            }]).withDefaultOffsetX(offsetX).withDefaultOffsetY(offsetY);
            /*
            return this._overlay.position()
              .connectedTo(element,
                  {originX: posX, originY: originY},
                  {overlayX: posX, overlayY: overlayY})
              .withFallbackPosition(
                  {originX: fallbackX, originY: originY},
                  {overlayX: fallbackX, overlayY: overlayY})
              .withFallbackPosition(
                  {originX: posX, originY: fallbackOriginY},
                  {overlayX: posX, overlayY: fallbackOverlayY})
              .withFallbackPosition(
                  {originX: fallbackX, originY: fallbackOriginY},
                  {overlayX: fallbackX, overlayY: fallbackOverlayY})
              .withOffsetX(offsetX)
              .withOffsetY(offsetY);
              */
          }
        }, {
          key: "_cleanUpSubscriptions",
          value: function _cleanUpSubscriptions() {
            if (this._backdropSubscription) {
              this._backdropSubscription.unsubscribe();
            }

            if (this._positionSubscription) {
              this._positionSubscription.unsubscribe();
            }
          }
        }, {
          key: "_handleMousedown",
          value: function _handleMousedown(event) {
            if (event && !Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["isFakeMousedownFromScreenReader"])(event)) {
              this._openedByMouse = true;
            }
          }
        }, {
          key: "popoverOpen",
          get: function get() {
            return this._popoverOpen;
          }
        }, {
          key: "dir",
          get: function get() {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
          }
        }]);

        return MdePopoverTrigger;
      }();

      MdePopoverTrigger.ɵfac = function MdePopoverTrigger_Factory(t) {
        return new (t || MdePopoverTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      MdePopoverTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MdePopoverTrigger,
        selectors: [["", "mdePopoverTriggerFor", ""]],
        hostVars: 1,
        hostBindings: function MdePopoverTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdePopoverTrigger_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            })("mouseenter", function MdePopoverTrigger_mouseenter_HostBindingHandler($event) {
              return ctx.onMouseEnter($event);
            })("mouseleave", function MdePopoverTrigger_mouseleave_HostBindingHandler($event) {
              return ctx.onMouseLeave($event);
            })("mousedown", function MdePopoverTrigger_mousedown_HostBindingHandler($event) {
              return ctx._handleMousedown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-haspopup", ctx.ariaHaspopup);
          }
        },
        inputs: {
          backdropCloseOnClick: ["mdePopoverBackdropCloseOnClick", "backdropCloseOnClick"],
          popover: ["mdePopoverTriggerFor", "popover"],
          targetElement: ["mdePopoverTargetAt", "targetElement"],
          positionX: ["mdePopoverPositionX", "positionX"],
          positionY: ["mdePopoverPositionY", "positionY"],
          triggerEvent: ["mdePopoverTriggerOn", "triggerEvent"],
          enterDelay: ["mdePopoverEnterDelay", "enterDelay"],
          leaveDelay: ["mdePopoverLeaveDelay", "leaveDelay"],
          overlapTrigger: ["mdePopoverOverlapTrigger", "overlapTrigger"],
          targetOffsetX: ["mdePopoverOffsetX", "targetOffsetX"],
          targetOffsetY: ["mdePopoverOffsetY", "targetOffsetY"],
          arrowOffsetX: ["mdePopoverArrowOffsetX", "arrowOffsetX"],
          arrowWidth: ["mdePopoverArrowWidth", "arrowWidth"],
          arrowColor: ["mdePopoverArrowColor", "arrowColor"],
          closeOnClick: ["mdePopoverCloseOnClick", "closeOnClick"]
        },
        outputs: {
          opened: "opened",
          closed: "closed"
        },
        exportAs: ["mdePopoverTrigger"]
      });

      MdePopoverTrigger.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.aria-haspopup')], MdePopoverTrigger.prototype, "ariaHaspopup", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverTriggerFor')], MdePopoverTrigger.prototype, "popover", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverTargetAt')], MdePopoverTrigger.prototype, "targetElement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverPositionX')], MdePopoverTrigger.prototype, "positionX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverPositionY')], MdePopoverTrigger.prototype, "positionY", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverTriggerOn')], MdePopoverTrigger.prototype, "triggerEvent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverEnterDelay')], MdePopoverTrigger.prototype, "enterDelay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverLeaveDelay')], MdePopoverTrigger.prototype, "leaveDelay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverOverlapTrigger')], MdePopoverTrigger.prototype, "overlapTrigger", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverOffsetX')], MdePopoverTrigger.prototype, "targetOffsetX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverOffsetY')], MdePopoverTrigger.prototype, "targetOffsetY", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverArrowOffsetX')], MdePopoverTrigger.prototype, "arrowOffsetX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverArrowWidth')], MdePopoverTrigger.prototype, "arrowWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverArrowColor')], MdePopoverTrigger.prototype, "arrowColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverCloseOnClick')], MdePopoverTrigger.prototype, "closeOnClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mdePopoverBackdropCloseOnClick')], MdePopoverTrigger.prototype, "backdropCloseOnClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MdePopoverTrigger.prototype, "opened", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MdePopoverTrigger.prototype, "closed", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])], MdePopoverTrigger.prototype, "onClick", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter', ['$event'])], MdePopoverTrigger.prototype, "onMouseEnter", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave', ['$event'])], MdePopoverTrigger.prototype, "onMouseLeave", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])], MdePopoverTrigger.prototype, "_handleMousedown", null);
      MdePopoverTrigger = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], MdePopoverTrigger);

      var MdePopoverTarget = function MdePopoverTarget(_elementRef) {
        _classCallCheck(this, MdePopoverTarget);

        this._elementRef = _elementRef;
      };

      MdePopoverTarget.ɵfac = function MdePopoverTarget_Factory(t) {
        return new (t || MdePopoverTarget)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      MdePopoverTarget.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MdePopoverTarget,
        selectors: [["mde-popover-target"], ["", "mdePopoverTarget", ""]],
        exportAs: ["mdePopoverTarget"]
      });

      MdePopoverTarget.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      var MdePopoverModule = function MdePopoverModule() {
        _classCallCheck(this, MdePopoverModule);
      };

      MdePopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MdePopoverModule
      });
      MdePopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MdePopoverModule_Factory(t) {
          return new (t || MdePopoverModule)();
        },
        imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"]]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MdePopover, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mde-popover',
            template: "<ng-template>\n  <div class=\"mde-popover-panel\" role=\"dialog\" [class.mde-popover-overlap]=\"overlapTrigger\"\n       [ngClass]=\"_classList\" [ngStyle]=\"popoverPanelStyles\" (keydown)=\"_handleKeydown($event)\"\n       (click)=\"onClick()\" (mouseover)=\"onMouseOver()\" (mouseleave)=\"onMouseLeave()\" [@.disabled]=\"disableAnimation\"\n       [@transformPopover]=\"'enter'\">\n    <div class=\"mde-popover-direction-arrow\" [ngStyle]=\"popoverArrowStyles\" *ngIf=\"!overlapTrigger\"></div>\n    <div class=\"mde-popover-content\" [ngStyle]=\"popoverContentStyles\" [cdkTrapFocus]=\"focusTrapEnabled\" [cdkTrapFocusAutoCapture]=\"focusTrapAutoCaptureEnabled\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [transformPopover],
            exportAs: 'mdePopover',
            styles: [".mde-popover-panel{display:flex;flex-direction:column;max-height:calc(100vh + 48px)}.mde-popover-ripple{position:absolute;top:0;left:0;bottom:0;right:0}.mde-popover-below .mde-popover-direction-arrow{position:absolute;bottom:0;width:0;height:0;border-bottom-width:0!important;z-index:99999}.mde-popover-above .mde-popover-direction-arrow{position:absolute;top:0;width:0;height:0;border-top-width:0!important;z-index:99999}.mde-popover-after .mde-popover-direction-arrow{left:20px}.mde-popover-before .mde-popover-direction-arrow{right:20px}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.role']
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          positionX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverPositionX']
          }],
          positionY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverPositionY']
          }],
          triggerEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverTriggerOn']
          }],
          enterDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverEnterDelay']
          }],
          leaveDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverLeaveDelay']
          }],
          overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverOverlapTrigger']
          }],
          targetOffsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverOffsetX']
          }],
          targetOffsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverOffsetY']
          }],
          arrowOffsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverArrowOffsetX']
          }],
          arrowWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverArrowWidth']
          }],
          arrowColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverArrowColor']
          }],
          closeOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverCloseOnClick']
          }],
          disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverDisableAnimation']
          }],
          focusTrapEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdeFocusTrapEnabled']
          }],
          focusTrapAutoCaptureEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdeFocusTrapAutoCaptureEnabled']
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['class']
          }],
          classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MdePopoverTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[mdePopoverTriggerFor]',
            exportAs: 'mdePopoverTrigger'
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, {
          ariaHaspopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-haspopup']
          }],
          backdropCloseOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverBackdropCloseOnClick']
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
          }],
          onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mouseenter', ['$event']]
          }],
          onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mouseleave', ['$event']]
          }],
          _handleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mousedown', ['$event']]
          }],
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverTriggerFor']
          }],
          targetElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverTargetAt']
          }],
          positionX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverPositionX']
          }],
          positionY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverPositionY']
          }],
          triggerEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverTriggerOn']
          }],
          enterDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverEnterDelay']
          }],
          leaveDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverLeaveDelay']
          }],
          overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverOverlapTrigger']
          }],
          targetOffsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverOffsetX']
          }],
          targetOffsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverOffsetY']
          }],
          arrowOffsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverArrowOffsetX']
          }],
          arrowWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverArrowWidth']
          }],
          arrowColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverArrowColor']
          }],
          closeOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mdePopoverCloseOnClick']
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MdePopoverTarget, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'mde-popover-target, [mdePopoverTarget]',
            exportAs: 'mdePopoverTarget'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MdePopoverModule, {
          declarations: function declarations() {
            return [MdePopover, MdePopoverTrigger, MdePopoverTarget];
          },
          imports: function imports() {
            return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"]];
          },
          exports: function exports() {
            return [MdePopover, MdePopoverTrigger, MdePopoverTarget];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MdePopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["A11yModule"]],
            exports: [MdePopover, MdePopoverTrigger, MdePopoverTarget],
            declarations: [MdePopover, MdePopoverTrigger, MdePopoverTarget]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of mde
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=material-extended-mde.js.map

      /***/

    },

    /***/
    "CC78":
    /*!*****************************************************!*\
      !*** ./src/app/team-builder/team-builder.module.ts ***!
      \*****************************************************/

    /*! exports provided: TeamBuilderModule */

    /***/
    function CC78(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamBuilderModule", function () {
        return TeamBuilderModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _team_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./team-builder-routing.module */
      "Re4g");
      /* harmony import */


      var _pages_team_builder_team_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/team-builder/team-builder.component */
      "xqVb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/unit-card/unit-card.component */
      "Rdz9");
      /* harmony import */


      var _components_unit_picker_unit_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/unit-picker/unit-picker.component */
      "d/8i");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _material_extended_mde__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @material-extended/mde */
      "+9r9");
      /* harmony import */


      var _components_team_totals_team_totals_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/team-totals/team-totals.component */
      "aXR3");
      /* harmony import */


      var _components_unit_details_card_unit_details_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/unit-details-card/unit-details-card.component */
      "TrFZ");

      var TeamBuilderModule = function TeamBuilderModule() {
        _classCallCheck(this, TeamBuilderModule);
      };

      TeamBuilderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TeamBuilderModule
      });
      TeamBuilderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TeamBuilderModule_Factory(t) {
          return new (t || TeamBuilderModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _team_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamBuilderRoutingModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _material_extended_mde__WEBPACK_IMPORTED_MODULE_14__["MdePopoverModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamBuilderModule, {
          declarations: [_pages_team_builder_team_builder_component__WEBPACK_IMPORTED_MODULE_4__["TeamBuilderComponent"], _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_6__["UnitCardComponent"], _components_unit_picker_unit_picker_component__WEBPACK_IMPORTED_MODULE_7__["UnitPickerComponent"], _components_team_totals_team_totals_component__WEBPACK_IMPORTED_MODULE_15__["TeamTotalsComponent"], _components_unit_details_card_unit_details_card_component__WEBPACK_IMPORTED_MODULE_16__["UnitDetailsCardComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _team_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamBuilderRoutingModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _material_extended_mde__WEBPACK_IMPORTED_MODULE_14__["MdePopoverModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamBuilderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pages_team_builder_team_builder_component__WEBPACK_IMPORTED_MODULE_4__["TeamBuilderComponent"], _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_6__["UnitCardComponent"], _components_unit_picker_unit_picker_component__WEBPACK_IMPORTED_MODULE_7__["UnitPickerComponent"], _components_team_totals_team_totals_component__WEBPACK_IMPORTED_MODULE_15__["TeamTotalsComponent"], _components_unit_details_card_unit_details_card_component__WEBPACK_IMPORTED_MODULE_16__["UnitDetailsCardComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _team_builder_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamBuilderRoutingModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _material_extended_mde__WEBPACK_IMPORTED_MODULE_14__["MdePopoverModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Rdz9":
    /*!**************************************************************************!*\
      !*** ./src/app/team-builder/components/unit-card/unit-card.component.ts ***!
      \**************************************************************************/

    /*! exports provided: UnitCardComponent */

    /***/
    function Rdz9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitCardComponent", function () {
        return UnitCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_utils_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/utils/effects */
      "cA7W");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _material_extended_mde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @material-extended/mde */
      "+9r9");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _unit_details_card_unit_details_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../unit-details-card/unit-details-card.component */
      "TrFZ");

      function UnitCardComponent_mat_slider_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-slider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnitCardComponent_mat_slider_3_Template_mat_slider_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.unit.hp = $event;
          })("change", function UnitCardComponent_mat_slider_3_Template_mat_slider_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onHpChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.unit.hp)("max", 100)("min", 0)("step", 1)("tickInterval", 10)("thumbLabel", true);
        }
      }

      function UnitCardComponent_section_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.hp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.atk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.def);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.rcv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.spd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.ct);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.crit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.guard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.miss);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.buffs.blow);
        }
      }

      function UnitCardComponent_app_unit_details_card_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-unit-details-card", 22);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unit", ctx_r3.unit);
        }
      }

      var UnitCardComponent = /*#__PURE__*/function () {
        function UnitCardComponent() {
          _classCallCheck(this, UnitCardComponent);

          this.unitClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.hpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.defaultImage = 'assets/images/recruit_wanted.png';
          this.resetBuffs();
        }

        _createClass(UnitCardComponent, [{
          key: "resetBuffs",
          value: function resetBuffs() {
            this.buffs = {
              hp: 0,
              atk: 0,
              def: 0,
              rcv: 0,
              spd: 0,
              ct: 0,
              crit: 0,
              guard: 0,
              miss: 0,
              blow: 0
            };
          }
        }, {
          key: "updateBuffs",
          value: function updateBuffs() {
            var _this6 = this;

            this.resetBuffs();

            this._teamEffects.forEach(function (e) {
              if (Object(_core_utils_effects__WEBPACK_IMPORTED_MODULE_1__["buffAppliesToUnit"])(e, _this6.unit)) {
                _this6.applyBuff(e);
              }
            });

            this.applySelfBuffs();
          }
        }, {
          key: "applySelfBuffs",
          value: function applySelfBuffs() {
            var _this7 = this;

            if (!this.unit) {
              return;
            }

            this.unit.lvl5Ability.filter(function (e) {
              var _a, _b;

              return ((_b = (_a = e === null || e === void 0 ? void 0 : e.targeting) === null || _a === void 0 ? void 0 : _a.targets) === null || _b === void 0 ? void 0 : _b.some(function (t) {
                return t === 'self';
              })) && Object(_core_utils_effects__WEBPACK_IMPORTED_MODULE_1__["buffAppliesToTime"])(e, _this7._battleTimer) && Object(_core_utils_effects__WEBPACK_IMPORTED_MODULE_1__["effectAppliesToUnitHp"])(e, _this7.unit.hp);
            }).forEach(function (e) {
              _this7.applyBuff(e);
            });
          }
        }, {
          key: "applyBuff",
          value: function applyBuff(e) {
            var _this8 = this;

            if (!e || !e.attributes) {
              return;
            }

            console.log('applying effect to ' + this.unit.name, e);
            e.attributes.forEach(function (a) {
              switch (a) {
                case 'HP':
                  _this8.buffs.hp += e.level;
                  break;

                case 'ATK':
                  _this8.buffs.atk += e.level;
                  break;

                case 'DEF':
                  _this8.buffs.def += e.level;
                  break;

                case 'RCV':
                  _this8.buffs.rcv += e.level;
                  break;

                case 'SPD':
                  _this8.buffs.spd += e.level;
                  break;

                case 'Special CT':
                  _this8.buffs.ct += e.level;
                  break;

                case 'Critical Hit':
                  _this8.buffs.crit += e.level;
                  break;

                case 'Guard':
                  _this8.buffs.guard += e.level;
                  break;

                case 'Blow Away':
                  _this8.buffs.blow += e.level;
                  break;

                case 'Accuracy':
                  _this8.buffs.miss += e.level;
                  break;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick() {
            this.unitClick.emit(true);
          }
        }, {
          key: "onHpChange",
          value: function onHpChange(event) {
            this.hpChange.emit(event.value);
          }
        }, {
          key: "teamEffects",
          set: function set(value) {
            this._teamEffects = value;
            this.updateBuffs();
          }
        }, {
          key: "battleTimer",
          get: function get() {
            return this._battleTimer;
          },
          set: function set(value) {
            this._battleTimer = value;
            this.updateBuffs();
          }
        }]);

        return UnitCardComponent;
      }();

      UnitCardComponent.ɵfac = function UnitCardComponent_Factory(t) {
        return new (t || UnitCardComponent)();
      };

      UnitCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnitCardComponent,
        selectors: [["app-unit-card"]],
        inputs: {
          unit: "unit",
          teamEffects: "teamEffects",
          battleTimer: "battleTimer"
        },
        outputs: {
          unitClick: "unitClick",
          hpChange: "hpChange"
        },
        decls: 9,
        vars: 6,
        consts: [[1, "unit-image-container", 3, "mdePopoverTriggerFor", "click"], ["mat-card-image", "", "alt", "unit", 1, "unit-image", 3, "src"], ["mat-card-image", "", "color", "warn", 3, "ngModel", "max", "min", "step", "tickInterval", "thumbLabel", "ngModelChange", "change", 4, "ngIf"], ["class", "buffs", 4, "ngIf"], ["mdePopoverPositionX", "after", 3, "mdePopoverOverlapTrigger"], ["unitPopover", "mdePopover"], [3, "unit", 4, "ngIf"], ["mat-card-image", "", "color", "warn", 3, "ngModel", "max", "min", "step", "tickInterval", "thumbLabel", "ngModelChange", "change"], [1, "buffs"], [1, "buff-container"], [1, "buff-value"], [1, "buff-key"], ["src", "assets/images/pirates_arena_strength_up.png", "alt", "HP"], ["src", "assets/images/pirates_arena_attack_up.png", "alt", "ATK"], ["src", "assets/images/pirates_arena_defence_up.png", "alt", "DEF"], ["src", "assets/images/pirates_arena_cure_up.png", "alt", "RCV"], ["src", "assets/images/pirates_arena_speed_up.png", "alt", "SPD"], ["src", "assets/images/pirates_arena_SP_speed_up.png", "alt", "CT"], ["src", "assets/images/pirates_arena_critical_up.png", "alt", "CRIT"], ["src", "assets/images/pirates_arena_guard_up.png", "alt", "CRIT"], ["src", "assets/images/pirates_arena_miss_up.png", "alt", "CRIT"], ["src", "assets/images/pirates_arena_KnockBack_up.png", "alt", "CRIT"], [3, "unit"]],
        template: function UnitCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitCardComponent_Template_div_click_1_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UnitCardComponent_mat_slider_3_Template, 1, 6, "mat-slider", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UnitCardComponent_section_5_Template, 51, 10, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mde-popover", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UnitCardComponent_app_unit_details_card_8_Template, 1, 1, "app-unit-details-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mdePopoverTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.unit != null ? ctx.unit.thumbnailUrl : ctx.defaultImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mdePopoverOverlapTrigger", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _material_extended_mde__WEBPACK_IMPORTED_MODULE_3__["MdePopoverTrigger"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _material_extended_mde__WEBPACK_IMPORTED_MODULE_3__["MdePopover"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _unit_details_card_unit_details_card_component__WEBPACK_IMPORTED_MODULE_7__["UnitDetailsCardComponent"]],
        styles: [".unit-image-container[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-card-image[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.mat-slider-horizontal[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  margin-top: -20px;\r\n}\r\n\r\n.mat-card-content[_ngcontent-%COMP%] {\r\n  min-width: calc(30px * 5); \r\n  min-height: 112px;\r\n}\r\n\r\n.buffs[_ngcontent-%COMP%] {\r\n  max-width: calc(30px * 5); \r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.buff-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.buff-key[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n}\r\n\r\n.buff-key[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.buff-value[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1idWlsZGVyL2NvbXBvbmVudHMvdW5pdC1jYXJkL3VuaXQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSw0QkFBNEI7RUFDdkQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCLEVBQUUsNEJBQTRCO0VBQ3ZELGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tYnVpbGRlci9jb21wb25lbnRzL3VuaXQtY2FyZC91bml0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiBjYWxjKDMwcHggKiA1KTsgLyogZGlzcGxheSA1IGJ1ZmZzIHBlciByb3cgKi9cclxuICBtaW4taGVpZ2h0OiAxMTJweDtcclxufVxyXG5cclxuLmJ1ZmZzIHtcclxuICBtYXgtd2lkdGg6IGNhbGMoMzBweCAqIDUpOyAvKiBkaXNwbGF5IDUgYnVmZnMgcGVyIHJvdyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uYnVmZi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ1ZmYta2V5IHtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmJ1ZmYta2V5IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idWZmLXZhbHVlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-unit-card',
            templateUrl: './unit-card.component.html',
            styleUrls: ['./unit-card.component.css']
          }]
        }], function () {
          return [];
        }, {
          unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          teamEffects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          battleTimer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          hpChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Re4g":
    /*!*************************************************************!*\
      !*** ./src/app/team-builder/team-builder-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: TeamBuilderRoutingModule */

    /***/
    function Re4g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamBuilderRoutingModule", function () {
        return TeamBuilderRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_team_builder_team_builder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/team-builder/team-builder.component */
      "xqVb");

      var routes = [{
        path: '',
        component: _pages_team_builder_team_builder_component__WEBPACK_IMPORTED_MODULE_2__["TeamBuilderComponent"]
      }];

      var TeamBuilderRoutingModule = function TeamBuilderRoutingModule() {
        _classCallCheck(this, TeamBuilderRoutingModule);
      };

      TeamBuilderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TeamBuilderRoutingModule
      });
      TeamBuilderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TeamBuilderRoutingModule_Factory(t) {
          return new (t || TeamBuilderRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamBuilderRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamBuilderRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TrFZ":
    /*!******************************************************************************************!*\
      !*** ./src/app/team-builder/components/unit-details-card/unit-details-card.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: UnitDetailsCardComponent */

    /***/
    function TrFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitDetailsCardComponent", function () {
        return UnitDetailsCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_utils_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/utils/images */
      "vy+p");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_pipes_pattern_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/pipes/pattern.pipe */
      "N48R");
      /* harmony import */


      var _shared_pipes_effect_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/pipes/effect.pipe */
      "JMoW");

      function UnitDetailsCardComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
        }

        if (rf & 2) {
          var attribute_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", attribute_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", attribute_r5.desc);
        }
      }

      function UnitDetailsCardComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "effect");
        }

        if (rf & 2) {
          var effect_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, effect_r6), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function UnitDetailsCardComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "effect");
        }

        if (rf & 2) {
          var effect_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, effect_r7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function UnitDetailsCardComponent_section_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ATK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DEF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "RCV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SPD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.unit.stats.hp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.unit.stats.atk);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.unit.stats.def);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.unit.stats.rcv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.unit.stats.spd);
        }
      }

      function UnitDetailsCardComponent_div_20_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx_r8.unit.target.comparator, ")");
        }
      }

      function UnitDetailsCardComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UnitDetailsCardComponent_div_20_span_2_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Target: ", ctx_r4.unit.target.criteria, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.unit.target.comparator);
        }
      }

      var UnitDetailsCardComponent = /*#__PURE__*/function () {
        function UnitDetailsCardComponent() {
          _classCallCheck(this, UnitDetailsCardComponent);

          this.attributes = [];
        }

        _createClass(UnitDetailsCardComponent, [{
          key: "setAttributes",
          value: function setAttributes(unit) {
            if (!unit.stats) {
              this.attributes = [];
              return;
            }

            this.attributes = [{
              img: Object(src_app_core_utils_images__WEBPACK_IMPORTED_MODULE_1__["typeImage"])(unit.stats.type),
              desc: unit.stats.type
            }, {
              img: Object(src_app_core_utils_images__WEBPACK_IMPORTED_MODULE_1__["classImage"])(unit.stats.class1),
              desc: unit.stats.class1
            }];

            if (unit.stats.class2) {
              this.attributes.push({
                img: Object(src_app_core_utils_images__WEBPACK_IMPORTED_MODULE_1__["classImage"])(unit.stats.class2),
                desc: unit.stats.class2
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "unit",
          get: function get() {
            return this._unit;
          },
          set: function set(value) {
            this._unit = value;
            this.setAttributes(value);
          }
        }]);

        return UnitDetailsCardComponent;
      }();

      UnitDetailsCardComponent.ɵfac = function UnitDetailsCardComponent_Factory(t) {
        return new (t || UnitDetailsCardComponent)();
      };

      UnitDetailsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnitDetailsCardComponent,
        selectors: [["app-unit-details-card"]],
        inputs: {
          unit: "unit"
        },
        decls: 23,
        vars: 10,
        consts: [[1, "mat-card-header"], [1, "unit-name"], [1, "unit-attributes"], ["width", "48", "height", "48", 3, "src", "alt", 4, "ngFor", "ngForOf"], [3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "other-desc"], ["class", "stats", 4, "ngIf"], [1, "pattern"], [4, "ngIf"], [3, "innerHtml"], ["width", "48", "height", "48", 3, "src", "alt"], [1, "stats"], [1, "stat-container"], [1, "stat-key"], [1, "stat-value"]],
        template: function UnitDetailsCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UnitDetailsCardComponent_img_5_Template, 1, 2, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ability:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UnitDetailsCardComponent_span_10_Template, 2, 3, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UnitDetailsCardComponent_span_14_Template, 2, 3, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UnitDetailsCardComponent_section_16_Template, 28, 5, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pattern");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UnitDetailsCardComponent_div_20_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "pattern");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.unit.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unit.lvl5Ability);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Special (CT ", ctx.unit.lvl10Cooldown, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unit.lvl10Special);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit.stats);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit.target);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 8, ctx.unit.pattern), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_shared_pipes_pattern_pipe__WEBPACK_IMPORTED_MODULE_4__["PatternPipe"], _shared_pipes_effect_pipe__WEBPACK_IMPORTED_MODULE_5__["EffectPipe"]],
        styles: [".mat-card-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.unit-name[_ngcontent-%COMP%] {\r\n  max-width: 300px;\r\n}\r\n\r\n.unit-attributes[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.stat-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.other-desc[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  margin: 12px 0px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: '- ';\r\n  margin: 0em 0em 0em 1em;\r\n  padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1idWlsZGVyL2NvbXBvbmVudHMvdW5pdC1kZXRhaWxzLWNhcmQvdW5pdC1kZXRhaWxzLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tYnVpbGRlci9jb21wb25lbnRzL3VuaXQtZGV0YWlscy1jYXJkL3VuaXQtZGV0YWlscy1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnVuaXQtbmFtZSB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG4udW5pdC1hdHRyaWJ1dGVzIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnN0YXRzIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uc3RhdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ub3RoZXItZGVzYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmgzIHtcclxuICBtYXJnaW46IDEycHggMHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiAnLSAnO1xyXG4gIG1hcmdpbjogMGVtIDBlbSAwZW0gMWVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitDetailsCardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-unit-details-card',
            templateUrl: './unit-details-card.component.html',
            styleUrls: ['./unit-details-card.component.css']
          }]
        }], function () {
          return [];
        }, {
          unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Yqml":
    /*!******************************************!*\
      !*** ./src/app/core/constants/battle.ts ***!
      \******************************************/

    /*! exports provided: battleTime */

    /***/
    function Yqml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "battleTime", function () {
        return battleTime;
      });
      /**
       * Battle time in seconds
       */


      var battleTime = 100;
      /***/
    },

    /***/
    "aXR3":
    /*!******************************************************************************!*\
      !*** ./src/app/team-builder/components/team-totals/team-totals.component.ts ***!
      \******************************************************************************/

    /*! exports provided: TeamTotalsComponent */

    /***/
    function aXR3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamTotalsComponent", function () {
        return TeamTotalsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var TeamTotalsComponent = /*#__PURE__*/function () {
        function TeamTotalsComponent() {
          _classCallCheck(this, TeamTotalsComponent);
        }

        _createClass(TeamTotalsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TeamTotalsComponent;
      }();

      TeamTotalsComponent.ɵfac = function TeamTotalsComponent_Factory(t) {
        return new (t || TeamTotalsComponent)();
      };

      TeamTotalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeamTotalsComponent,
        selectors: [["app-team-totals"]],
        inputs: {
          totals: "totals"
        },
        decls: 7,
        vars: 1,
        consts: [[1, "team-totals"], [1, "team-total-item"], [1, "team-total-item-desc"], [1, "team-total-item-value"]],
        template: function TeamTotalsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totals.cost);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0tYnVpbGRlci9jb21wb25lbnRzL3RlYW0tdG90YWxzL3RlYW0tdG90YWxzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamTotalsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-team-totals',
            templateUrl: './team-totals.component.html',
            styleUrls: ['./team-totals.component.css']
          }]
        }], function () {
          return [];
        }, {
          totals: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "cA7W":
    /*!***************************************!*\
      !*** ./src/app/core/utils/effects.ts ***!
      \***************************************/

    /*! exports provided: buffAppliesToTime, buffAppliesToUnit, isHpBasedEffect, effectAppliesToUnitHp */

    /***/
    function cA7W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buffAppliesToTime", function () {
        return buffAppliesToTime;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "buffAppliesToUnit", function () {
        return buffAppliesToUnit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isHpBasedEffect", function () {
        return isHpBasedEffect;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "effectAppliesToUnitHp", function () {
        return effectAppliesToUnitHp;
      });
      /* harmony import */


      var _constants_battle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../constants/battle */
      "Yqml");

      var buffAppliesToTime = function buffAppliesToTime(effect, time) {
        if (!effect.condition || !effect.condition.count) {
          return true;
        }

        if (effect.condition.type !== 'time') {
          return true;
        }

        switch (effect.condition.comparator) {
          case 'first':
            return time >= _constants_battle__WEBPACK_IMPORTED_MODULE_0__["battleTime"] - effect.condition.count;

          case 'remaining':
            return time <= effect.condition.count;
        }

        return false;
      };

      var buffAppliesToUnit = function buffAppliesToUnit(effect, unit) {
        if (!unit || !effect) {
          return false;
        }

        if (effect.effect !== 'buff') {
          return false;
        }

        if (!effect.targeting) {
          return true;
        }

        if (!effect.targeting.targets || effect.targeting.targets.length === 0) {
          return true;
        }

        return effect.targeting.targets.some(function (t) {
          return t === 'crew' || unit.stats && (t === unit.stats.class1 || t === unit.stats.class2 || t === "[".concat(unit.stats.type, "]"));
        });
      };

      var isHpBasedEffect = function isHpBasedEffect(effect) {
        return effect && effect.condition && effect.condition.type === 'stat' && effect.condition.stat === 'HP';
      };

      var effectAppliesToUnitHp = function effectAppliesToUnitHp(effect, hp) {
        if (!effect) {
          return false;
        }

        if (!isHpBasedEffect(effect)) {
          return true;
        }

        console.log('unit hp ' + hp);
        console.log('effect count ' + effect.condition.count);
        console.log('effect comp ' + effect.condition.comparator);
        console.log('bigger hp? ', hp >= effect.condition.count);
        console.log('lower hp? ', hp <= effect.condition.count);

        switch (effect.condition.comparator) {
          case 'above':
            return hp >= effect.condition.count;

          case 'below':
            return hp <= effect.condition.count;

          default:
            console.warn('received effect that is based on HP but have no switch case for it');
            return true;
        }
      };
      /***/

    },

    /***/
    "d/8i":
    /*!******************************************************************************!*\
      !*** ./src/app/team-builder/components/unit-picker/unit-picker.component.ts ***!
      \******************************************************************************/

    /*! exports provided: UnitPickerComponent */

    /***/
    function d8i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitPickerComponent", function () {
        return UnitPickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_components_type_picker_type_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/type-picker/type-picker.component */
      "wpUN");
      /* harmony import */


      var _shared_components_class_picker_class_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/class-picker/class-picker.component */
      "30Z1");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _shared_pipes_unit_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/pipes/unit-filter.pipe */
      "iSLt");

      var _c0 = ["paginator"];

      function UnitPickerComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitPickerComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onUnset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UnitPickerComponent_ng_container_5_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnitPickerComponent_ng_container_5_div_15_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var unit_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.onPick(unit_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", unit_r7.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };

      function UnitPickerComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnitPickerComponent_ng_container_5_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.filter.filter = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-type-picker", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("classChange", function UnitPickerComponent_ng_container_5_Template_app_type_picker_classChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.typeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-class-picker", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("classChange", function UnitPickerComponent_ng_container_5_Template_app_class_picker_classChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.classChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnitPickerComponent_ng_container_5_Template_mat_checkbox_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.filter.includeOtherClasses = $event;
          })("ngModelChange", function UnitPickerComponent_ng_container_5_Template_mat_checkbox_ngModelChange_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.includeOtherClassesChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Include other classes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UnitPickerComponent_ng_container_5_div_15_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-paginator", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function UnitPickerComponent_ng_container_5_Template_mat_paginator_page_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.pageChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var filtered_r4 = ctx.ngIf;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.filter.filter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.filter.includeOtherClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 6, filtered_r4, ctx_r1.filter.page * ctx_r1.filter.limit, ctx_r1.filter.page * ctx_r1.filter.limit + ctx_r1.filter.limit));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", filtered_r4.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        }
      }

      var UnitPickerComponent = /*#__PURE__*/function () {
        function UnitPickerComponent(dialogRef, data) {
          _classCallCheck(this, UnitPickerComponent);

          this.dialogRef = dialogRef;
          this.checked = true;
          this.units = data.units;
          this.current = data.current;
          this.filter = {
            page: 0,
            limit: 10,
            filter: '',
            classes: [],
            types: [],
            includeOtherClasses: true,
            excludeIds: data.team && data.team.map(function (u) {
              return u.id;
            })
          };
        }

        _createClass(UnitPickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onUnset",
          value: function onUnset() {
            this.dialogRef.close(null);
          }
        }, {
          key: "onPick",
          value: function onPick(unit) {
            this.dialogRef.close(unit);
          }
        }, {
          key: "pageChange",
          value: function pageChange(event) {
            this.filter.page = event.pageIndex;
            this.filter.limit = event.pageSize;
          }
        }, {
          key: "classChange",
          value: function classChange(event) {
            this.paginator.firstPage();
            this.filter.classes = event;
          }
        }, {
          key: "typeChange",
          value: function typeChange(event) {
            this.paginator.firstPage();
            this.filter.types = event;
          }
        }, {
          key: "includeOtherClassesChange",
          value: function includeOtherClassesChange() {
            this.paginator.firstPage();
          }
        }]);

        return UnitPickerComponent;
      }();

      UnitPickerComponent.ɵfac = function UnitPickerComponent_Factory(t) {
        return new (t || UnitPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      UnitPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnitPickerComponent,
        selectors: [["app-unit-picker"]],
        viewQuery: function UnitPickerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 7,
        vars: 5,
        consts: [["mat-dialog-title", "", 1, "title-container"], [1, "buttons"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "search"], [1, "filter-left"], [1, "name-filter"], ["matInput", "", "placeholder", "Search unit", "type", "text", "name", "name", 3, "ngModel", "ngModelChange"], [1, "filter-center"], [3, "classChange"], [1, "filter-right"], ["name", "includeOtherClasses", 3, "ngModel", "ngModelChange"], ["fxLayout", "row wrap", 1, "results"], ["class", "result-container", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["paginator", ""], [1, "result-container"], ["alt", "unit", 1, "result", 3, "src", "click"]],
        template: function UnitPickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pick unit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UnitPickerComponent_button_4_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UnitPickerComponent_ng_container_5_Template, 20, 11, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "unitFilter");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx.units, ctx.filter));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_components_type_picker_type_picker_component__WEBPACK_IMPORTED_MODULE_7__["TypePickerComponent"], _shared_components_class_picker_class_picker_component__WEBPACK_IMPORTED_MODULE_8__["ClassPickerComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"]],
        pipes: [_shared_pipes_unit_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["UnitFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
        styles: [".title-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: left;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.filter-left[_ngcontent-%COMP%] {\r\n  min-width: 100px;\r\n  max-width: 300px;\r\n}\r\n\r\n.name-filter[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n.filter-center[_ngcontent-%COMP%] {\r\n  min-width: 155px;\r\n  max-width: 250px;\r\n}\r\n\r\n.filter-right[_ngcontent-%COMP%] {\r\n  min-width: 155px;\r\n  max-width: 300px;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  margin: 0px 20px;\r\n}\r\n\r\n.results[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 100px;\r\n  justify-content: center;\r\n}\r\n\r\n.result-container[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  min-height: 100px;\r\n}\r\n\r\n.result-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.result[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1idWlsZGVyL2NvbXBvbmVudHMvdW5pdC1waWNrZXIvdW5pdC1waWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdGVhbS1idWlsZGVyL2NvbXBvbmVudHMvdW5pdC1waWNrZXIvdW5pdC1waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWxlZnQge1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLm5hbWUtZmlsdGVyIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maWx0ZXItY2VudGVyIHtcclxuICBtaW4td2lkdGg6IDE1NXB4O1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItcmlnaHQge1xyXG4gIG1pbi13aWR0aDogMTU1cHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnNlYXJjaCA+ICoge1xyXG4gIG1hcmdpbjogMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlc3VsdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnJlc3VsdC1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnitPickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-unit-picker',
            templateUrl: './unit-picker.component.html',
            styleUrls: ['./unit-picker.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['paginator']
          }]
        });
      })();
      /***/

    },

    /***/
    "mPVK":
    /*!***********************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/slider.js ***!
      \***********************************************************/

    /*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */

    /***/
    function mPVK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function () {
        return MAT_SLIDER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSlider", function () {
        return MatSlider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSliderChange", function () {
        return MatSliderChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSliderModule", function () {
        return MatSliderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      "FtGj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["sliderWrapper"];
      var activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({
        passive: false
      });
      /**
       * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
       * the default separation we chose.
       */

      var MIN_AUTO_TICK_SEPARATION = 30;
      /** The thumb gap size for a disabled slider. */

      var DISABLED_THUMB_GAP = 7;
      /** The thumb gap size for a non-active slider at its minimum value. */

      var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
      /** The thumb gap size for an active slider at its minimum value. */

      var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
      /**
       * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)] and [formControl].
       * @docs-private
       */

      var MAT_SLIDER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MatSlider;
        }),
        multi: true
      };
      /** A simple change event emitted by the MatSlider component. */

      var MatSliderChange = function MatSliderChange() {
        _classCallCheck(this, MatSliderChange);
      }; // Boilerplate for applying mixins to MatSlider.

      /** @docs-private */


      var MatSliderBase = function MatSliderBase(_elementRef) {
        _classCallCheck(this, MatSliderBase);

        this._elementRef = _elementRef;
      };

      var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
      /**
       * Allows users to select from a range of values by moving the slider thumb. It is similar in
       * behavior to the native `<input type="range">` element.
       */


      var MatSlider = /*#__PURE__*/function (_MatSliderMixinBase2) {
        _inherits(MatSlider, _MatSliderMixinBase2);

        var _super = _createSuper(MatSlider);

        function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
          var _this9;

          _classCallCheck(this, MatSlider);

          _this9 = _super.call(this, elementRef);
          _this9._focusMonitor = _focusMonitor;
          _this9._changeDetectorRef = _changeDetectorRef;
          _this9._dir = _dir;
          _this9._ngZone = _ngZone;
          _this9._animationMode = _animationMode;
          _this9._invert = false;
          _this9._max = 100;
          _this9._min = 0;
          _this9._step = 1;
          _this9._thumbLabel = false;
          _this9._tickInterval = 0;
          _this9._value = null;
          _this9._vertical = false;
          /** Event emitted when the slider value has changed. */

          _this9.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the slider thumb moves. */

          _this9.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Emits when the raw value of the slider changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this9.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */

          _this9.onTouched = function () {};

          _this9._percent = 0;
          /**
           * Whether or not the thumb is sliding.
           * Used to determine if there should be a transition for the thumb and fill track.
           */

          _this9._isSliding = false;
          /**
           * Whether or not the slider is active (clicked or sliding).
           * Used to shrink and grow the thumb as according to the Material Design spec.
           */

          _this9._isActive = false;
          /** The size of a tick interval as a percentage of the size of the track. */

          _this9._tickIntervalPercent = 0;
          /** The dimensions of the slider. */

          _this9._sliderDimensions = null;

          _this9._controlValueAccessorChangeFn = function () {};
          /** Subscription to the Directionality change EventEmitter. */


          _this9._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
          /** Called when the user has put their pointer down on the slider. */

          _this9._pointerDown = function (event) {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (_this9.disabled || _this9._isSliding || !isTouchEvent(event) && event.button !== 0) {
              return;
            }

            _this9._ngZone.run(function () {
              var oldValue = _this9.value;
              var pointerPosition = getPointerPositionOnPage(event);
              _this9._isSliding = true;
              _this9._lastPointerEvent = event;
              event.preventDefault();

              _this9._focusHostElement();

              _this9._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


              _this9._bindGlobalEvents(event);

              _this9._focusHostElement();

              _this9._updateValueFromPosition(pointerPosition);

              _this9._valueOnSlideStart = oldValue; // Emit a change and input event if the value changed.

              if (oldValue != _this9.value) {
                _this9._emitInputEvent();
              }
            });
          };
          /**
           * Called when the user has moved their pointer after
           * starting to drag. Bound on the document level.
           */


          _this9._pointerMove = function (event) {
            if (_this9._isSliding) {
              // Prevent the slide from selecting anything else.
              event.preventDefault();
              var oldValue = _this9.value;
              _this9._lastPointerEvent = event;

              _this9._updateValueFromPosition(getPointerPositionOnPage(event)); // Native range elements always emit `input` events when the value changed while sliding.


              if (oldValue != _this9.value) {
                _this9._emitInputEvent();
              }
            }
          };
          /** Called when the user has lifted their pointer. Bound on the document level. */


          _this9._pointerUp = function (event) {
            if (_this9._isSliding) {
              event.preventDefault();

              _this9._removeGlobalEvents();

              _this9._isSliding = false;

              if (_this9._valueOnSlideStart != _this9.value && !_this9.disabled) {
                _this9._emitChangeEvent();
              }

              _this9._valueOnSlideStart = _this9._lastPointerEvent = null;
            }
          };
          /** Called when the window has lost focus. */


          _this9._windowBlur = function () {
            // If the window is blurred while dragging we need to stop dragging because the
            // browser won't dispatch the `mouseup` and `touchend` events anymore.
            if (_this9._lastPointerEvent) {
              _this9._pointerUp(_this9._lastPointerEvent);
            }
          };

          _this9._document = _document;
          _this9.tabIndex = parseInt(tabIndex) || 0;

          _ngZone.runOutsideAngular(function () {
            var element = elementRef.nativeElement;
            element.addEventListener('mousedown', _this9._pointerDown, activeEventOptions);
            element.addEventListener('touchstart', _this9._pointerDown, activeEventOptions);
          });

          return _this9;
        }
        /** Whether the slider is inverted. */


        _createClass(MatSlider, [{
          key: "focus",

          /** set focus to the host element */
          value: function focus(options) {
            this._focusHostElement(options);
          }
          /** blur the host element */

        }, {
          key: "blur",
          value: function blur() {
            this._blurHostElement();
          }
          /** The percentage of the slider that coincides with the value. */

        }, {
          key: "_shouldInvertAxis",

          /**
           * Whether the axis of the slider is inverted.
           * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
           */
          value: function _shouldInvertAxis() {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
          }
          /** Whether the slider is at its minimum value. */

        }, {
          key: "_isMinValue",
          value: function _isMinValue() {
            return this.percent === 0;
          }
          /**
           * The amount of space to leave between the slider thumb and the track fill & track background
           * elements.
           */

        }, {
          key: "_getThumbGap",
          value: function _getThumbGap() {
            if (this.disabled) {
              return DISABLED_THUMB_GAP;
            }

            if (this._isMinValue() && !this.thumbLabel) {
              return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
            }

            return 0;
          }
          /** CSS styles for the track background element. */

        }, {
          key: "_getTrackBackgroundStyles",
          value: function _getTrackBackgroundStyles() {
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '-' : '';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")")
            };
          }
          /** CSS styles for the track fill element. */

        }, {
          key: "_getTrackFillStyles",
          value: function _getTrackFillStyles() {
            var percent = this.percent;
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '' : '-';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")"),
              // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
              // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
              // the value of the slider is 0, we can easily get into this situation. We force a
              // recalculation by changing the element's `display` when it goes from 0 to any other value.
              display: percent === 0 ? 'none' : ''
            };
          }
          /** CSS styles for the ticks container element. */

        }, {
          key: "_getTicksContainerStyles",
          value: function _getTicksContainerStyles() {
            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
            var offset = this._tickIntervalPercent / 2 * 100;
            return {
              'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
            };
          }
          /** CSS styles for the ticks element. */

        }, {
          key: "_getTicksStyles",
          value: function _getTicksStyles() {
            var tickSize = this._tickIntervalPercent * 100;
            var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
            var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
            var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
            var styles = {
              'backgroundSize': backgroundSize,
              // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
              'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
            };

            if (this._isMinValue() && this._getThumbGap()) {
              var shouldInvertAxis = this._shouldInvertAxis();

              var side;

              if (this.vertical) {
                side = shouldInvertAxis ? 'Bottom' : 'Top';
              } else {
                side = shouldInvertAxis ? 'Right' : 'Left';
              }

              styles["padding".concat(side)] = "".concat(this._getThumbGap(), "px");
            }

            return styles;
          }
        }, {
          key: "_getThumbContainerStyles",
          value: function _getThumbContainerStyles() {
            var shouldInvertAxis = this._shouldInvertAxis();

            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
            var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
              'transform': "translate".concat(axis, "(-").concat(offset, "%)")
            };
          }
          /**
           * Whether mouse events should be converted to a slider position by calculating their distance
           * from the right or bottom edge of the slider as opposed to the top or left.
           */

        }, {
          key: "_shouldInvertMouseCoords",
          value: function _shouldInvertMouseCoords() {
            var shouldInvertAxis = this._shouldInvertAxis();

            return this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
          }
          /** The language direction for this slider element. */

        }, {
          key: "_getDirection",
          value: function _getDirection() {
            return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this10 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              _this10._isActive = !!origin && origin !== 'keyboard';

              _this10._changeDetectorRef.detectChanges();
            });

            if (this._dir) {
              this._dirChangeSubscription = this._dir.change.subscribe(function () {
                _this10._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
            element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
            this._lastPointerEvent = null;

            this._removeGlobalEvents();

            this._focusMonitor.stopMonitoring(this._elementRef);

            this._dirChangeSubscription.unsubscribe();
          }
        }, {
          key: "_onMouseenter",
          value: function _onMouseenter() {
            if (this.disabled) {
              return;
            } // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.


            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.
            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this.onTouched();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
              return;
            }

            var oldValue = this.value;

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
                this._increment(10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
                this._increment(-10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
                this.value = this.max;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
                this.value = this.min;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
                this._increment(1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                this._increment(-1);

                break;

              default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
            }

            if (oldValue != this.value) {
              this._emitInputEvent();

              this._emitChangeEvent();
            }

            this._isSliding = true;
            event.preventDefault();
          }
        }, {
          key: "_onKeyup",
          value: function _onKeyup() {
            this._isSliding = false;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /**
           * Binds our global move and end events. They're bound at the document level and only while
           * dragging so that the user doesn't have to keep their pointer exactly over the slider
           * as they're swiping across the screen.
           */

        }, {
          key: "_bindGlobalEvents",
          value: function _bindGlobalEvents(triggerEvent) {
            // Note that we bind the events to the `document`, because it allows us to capture
            // drag cancel events where the user's pointer is outside the browser window.
            var document = this._document;
            var isTouch = isTouchEvent(triggerEvent);
            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            var endEventName = isTouch ? 'touchend' : 'mouseup';
            document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.addEventListener('blur', this._windowBlur);
            }
          }
          /** Removes any global event listeners that we may have added. */

        }, {
          key: "_removeGlobalEvents",
          value: function _removeGlobalEvents() {
            var document = this._document;
            document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.removeEventListener('blur', this._windowBlur);
            }
          }
          /** Increments the slider by the given number of steps (negative number decrements). */

        }, {
          key: "_increment",
          value: function _increment(numSteps) {
            this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
          }
          /** Calculate the new value from the new physical location. The value will always be snapped. */

        }, {
          key: "_updateValueFromPosition",
          value: function _updateValueFromPosition(pos) {
            if (!this._sliderDimensions) {
              return;
            }

            var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
            var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

            var percent = this._clamp((posComponent - offset) / size);

            if (this._shouldInvertMouseCoords()) {
              percent = 1 - percent;
            } // Since the steps may not divide cleanly into the max value, if the user
            // slid to 0 or 100 percent, we jump to the min/max value. This approach
            // is slightly more intuitive than using `Math.ceil` below, because it
            // follows the user's pointer closer.


            if (percent === 0) {
              this.value = this.min;
            } else if (percent === 1) {
              this.value = this.max;
            } else {
              var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
              // whole number divisible by the step relative to the min.


              var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

              this.value = this._clamp(closestValue, this.min, this.max);
            }
          }
          /** Emits a change event if the current value is different from the last emitted value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._controlValueAccessorChangeFn(this.value);

            this.valueChange.emit(this.value);
            this.change.emit(this._createChangeEvent());
          }
          /** Emits an input event when the current value is different from the last emitted value. */

        }, {
          key: "_emitInputEvent",
          value: function _emitInputEvent() {
            this.input.emit(this._createChangeEvent());
          }
          /** Updates the amount of space between ticks as a percentage of the width of the slider. */

        }, {
          key: "_updateTickIntervalPercent",
          value: function _updateTickIntervalPercent() {
            if (!this.tickInterval || !this._sliderDimensions) {
              return;
            }

            if (this.tickInterval == 'auto') {
              var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
              var pixelsPerStep = trackSize * this.step / (this.max - this.min);
              var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
              var pixelsPerTick = stepsPerTick * this.step;
              this._tickIntervalPercent = pixelsPerTick / trackSize;
            } else {
              this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
            }
          }
          /** Creates a slider change object from the specified value. */

        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
            var event = new MatSliderChange();
            event.source = this;
            event.value = value;
            return event;
          }
          /** Calculates the percentage of the slider that a value is. */

        }, {
          key: "_calculatePercentage",
          value: function _calculatePercentage(value) {
            return ((value || 0) - this.min) / (this.max - this.min);
          }
          /** Calculates the value a percentage of the slider corresponds to. */

        }, {
          key: "_calculateValue",
          value: function _calculateValue(percentage) {
            return this.min + percentage * (this.max - this.min);
          }
          /** Return a number between two numbers. */

        }, {
          key: "_clamp",
          value: function _clamp(value) {
            var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            return Math.max(min, Math.min(value, max));
          }
          /**
           * Get the bounding client rect of the slider track element.
           * The track is used rather than the native element to ignore the extra space that the thumb can
           * take up.
           */

        }, {
          key: "_getSliderDimensions",
          value: function _getSliderDimensions() {
            return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
          }
          /**
           * Focuses the native element.
           * Currently only used to allow a blur event to fire but will be used with keyboard input later.
           */

        }, {
          key: "_focusHostElement",
          value: function _focusHostElement(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Blurs the native element. */

        }, {
          key: "_blurHostElement",
          value: function _blurHostElement() {
            this._elementRef.nativeElement.blur();
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          }
          /**
           * Registers a callback to be triggered when the value has changed.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          }
          /**
           * Registers a callback to be triggered when the component is touched.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets whether the component should be disabled.
           * Implemented as part of ControlValueAccessor.
           * @param isDisabled
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "invert",
          get: function get() {
            return this._invert;
          },
          set: function set(value) {
            this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The maximum value that the slider can have. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(v) {
            this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The minimum value that the slider can have. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(v) {
            this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min); // If the value wasn't explicitly set by the user, set it to the min.

            if (this._value === null) {
              this.value = this._min;
            }

            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The values at which the thumb will snap. */

        }, {
          key: "step",
          get: function get() {
            return this._step;
          },
          set: function set(v) {
            this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);

            if (this._step % 1 !== 0) {
              this._roundToDecimal = this._step.toString().split('.').pop().length;
            } // Since this could modify the label, we need to notify the change detection.


            this._changeDetectorRef.markForCheck();
          }
          /** Whether or not to show the thumb label. */

        }, {
          key: "thumbLabel",
          get: function get() {
            return this._thumbLabel;
          },
          set: function set(value) {
            this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /**
           * How often to show ticks. Relative to the step so that a tick always appears on a step.
           * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
           */

        }, {
          key: "tickInterval",
          get: function get() {
            return this._tickInterval;
          },
          set: function set(value) {
            if (value === 'auto') {
              this._tickInterval = 'auto';
            } else if (typeof value === 'number' || typeof value === 'string') {
              this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, this._tickInterval);
            } else {
              this._tickInterval = 0;
            }
          }
          /** Value of the slider. */

        }, {
          key: "value",
          get: function get() {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
              this.value = this._min;
            }

            return this._value;
          },
          set: function set(v) {
            if (v !== this._value) {
              var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v); // While incrementing by a decimal we can end up with values like 33.300000000000004.
              // Truncate it to ensure that it matches the label and to make it easier to work with.

              if (this._roundToDecimal) {
                value = parseFloat(value.toFixed(this._roundToDecimal));
              }

              this._value = value;
              this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the slider is vertical. */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
          /** The value to be used for display purposes. */

        }, {
          key: "displayValue",
          get: function get() {
            if (this.displayWith) {
              // Value is never null but since setters and getters cannot have
              // different types, the value getter is also typed to return null.
              return this.displayWith(this.value);
            } // Note that this could be improved further by rounding something like 0.999 to 1 or
            // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
            // every change detection cycle.


            if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
              return this.value.toFixed(this._roundToDecimal);
            }

            return this.value || 0;
          }
        }, {
          key: "percent",
          get: function get() {
            return this._clamp(this._percent);
          }
        }]);

        return MatSlider;
      }(_MatSliderMixinBase);

      MatSlider.ɵfac = function MatSlider_Factory(t) {
        return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatSlider,
        selectors: [["mat-slider"]],
        viewQuery: function MatSlider_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
          }
        },
        hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
        hostVars: 28,
        hostBindings: function MatSlider_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSlider_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("keyup", function MatSlider_keyup_HostBindingHandler() {
              return ctx._onKeyup();
            })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
              return ctx._onMouseenter();
            })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
              return $event.preventDefault();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          color: "color",
          tabIndex: "tabIndex",
          invert: "invert",
          max: "max",
          min: "min",
          value: "value",
          step: "step",
          thumbLabel: "thumbLabel",
          tickInterval: "tickInterval",
          vertical: "vertical",
          displayWith: "displayWith"
        },
        outputs: {
          change: "change",
          input: "input",
          valueChange: "valueChange"
        },
        exportAs: ["matSlider"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        decls: 13,
        vars: 6,
        consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
        template: function MatSlider_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]],
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSlider.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatSlider.propDecorators = {
        invert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thumbLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tickInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        _sliderWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sliderWrapper']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mat-slider',
            exportAs: 'matSlider',
            providers: [MAT_SLIDER_VALUE_ACCESSOR],
            host: {
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)',
              '(keyup)': '_onKeyup()',
              '(mouseenter)': '_onMouseenter()',
              // On Safari starting to slide temporarily triggers text selection mode which
              // show the wrong cursor. We prevent it by stopping the `selectstart` event.
              '(selectstart)': '$event.preventDefault()',
              'class': 'mat-slider mat-focus-indicator',
              'role': 'slider',
              '[tabIndex]': 'tabIndex',
              '[attr.aria-disabled]': 'disabled',
              '[attr.aria-valuemax]': 'max',
              '[attr.aria-valuemin]': 'min',
              '[attr.aria-valuenow]': 'value',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-slider-disabled]': 'disabled',
              '[class.mat-slider-has-ticks]': 'tickInterval',
              '[class.mat-slider-horizontal]': '!vertical',
              '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if mouse coordinates need to be inverted.
              '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
              '[class.mat-slider-sliding]': '_isSliding',
              '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
              '[class.mat-slider-vertical]': 'vertical',
              '[class.mat-slider-min-value]': '_isMinValue()',
              '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          thumbLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tickInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          _sliderWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sliderWrapper']
          }]
        });
      })();
      /** Returns whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the coordinates of a touch or mouse event relative to the viewport. */


      function getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        var point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
        return {
          x: point.clientX,
          y: point.clientY
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatSliderModule = function MatSliderModule() {
        _classCallCheck(this, MatSliderModule);
      };

      MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatSliderModule
      });
      MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatSliderModule_Factory(t) {
          return new (t || MatSliderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, {
          declarations: function declarations() {
            return [MatSlider];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatSlider]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=slider.js.map

      /***/

    },

    /***/
    "mrSG":
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function mrSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      var __createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      };

      function __exportStar(m, o) {
        for (var p in m) {
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
          enumerable: true,
          value: v
        });
      } : function (o, v) {
        o["default"] = v;
      };

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }

        __setModuleDefault(result, mod);

        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "pMoy":
    /*!*************************************************************!*\
      !*** ./node_modules/@angular/material/fesm2015/checkbox.js ***!
      \*************************************************************/

    /*! exports provided: MAT_CHECKBOX_CLICK_ACTION, MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, MAT_CHECKBOX_DEFAULT_OPTIONS, MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckbox, MatCheckboxChange, MatCheckboxModule, MatCheckboxRequiredValidator, _MatCheckboxRequiredValidatorModule */

    /***/
    function pMoy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function () {
        return MAT_CHECKBOX_CLICK_ACTION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function () {
        return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS", function () {
        return MAT_CHECKBOX_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function () {
        return MAT_CHECKBOX_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCheckbox", function () {
        return MatCheckbox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function () {
        return MatCheckboxChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function () {
        return MatCheckboxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function () {
        return MatCheckboxRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function () {
        return _MatCheckboxRequiredValidatorModule;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-checkbox`. */


      var _c0 = ["input"];

      var _c1 = function _c1() {
        return {
          enterDuration: 150
        };
      };

      var _c2 = ["*"];
      var MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-checkbox-default-options', {
        providedIn: 'root',
        factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
        return {
          color: 'accent',
          clickAction: 'check-indeterminate'
        };
      }
      /**
       * Injection token that can be used to specify the checkbox click behavior.
       * @deprecated Injection token will be removed, use `MAT_CHECKBOX_DEFAULT_OPTIONS` instead.
       * @breaking-change 10.0.0
       */


      var MAT_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-checkbox-click-action');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids for checkbox components.

      var nextUniqueId = 0;
      /**
       * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)].
       * @docs-private
       */

      var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return MatCheckbox;
        }),
        multi: true
      };
      /** Change event object emitted by MatCheckbox. */

      var MatCheckboxChange = function MatCheckboxChange() {
        _classCallCheck(this, MatCheckboxChange);
      }; // Boilerplate for applying mixins to MatCheckbox.

      /** @docs-private */


      var MatCheckboxBase = function MatCheckboxBase(_elementRef) {
        _classCallCheck(this, MatCheckboxBase);

        this._elementRef = _elementRef;
      };

      var _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatCheckboxBase))));
      /**
       * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
       * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
       * disabled. Note that all additional accessibility attributes are taken care of by the component,
       * so there is no need to provide them yourself. However, if you want to omit a label and still
       * have the checkbox be accessible, you may supply an [aria-label] input.
       * See: https://material.io/design/components/selection-controls.html
       */


      var MatCheckbox = /*#__PURE__*/function (_MatCheckboxMixinBase2) {
        _inherits(MatCheckbox, _MatCheckboxMixinBase2);

        var _super2 = _createSuper(MatCheckbox);

        function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex,
        /**
         * @deprecated `_clickAction` parameter to be removed, use
         * `MAT_CHECKBOX_DEFAULT_OPTIONS`
         * @breaking-change 10.0.0
         */
        _clickAction, _animationMode, _options) {
          var _this11;

          _classCallCheck(this, MatCheckbox);

          _this11 = _super2.call(this, elementRef);
          _this11._changeDetectorRef = _changeDetectorRef;
          _this11._focusMonitor = _focusMonitor;
          _this11._ngZone = _ngZone;
          _this11._clickAction = _clickAction;
          _this11._animationMode = _animationMode;
          _this11._options = _options;
          /**
           * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
           * take precedence so this may be omitted.
           */

          _this11.ariaLabel = '';
          /**
           * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
           */

          _this11.ariaLabelledby = null;
          _this11._uniqueId = "mat-checkbox-".concat(++nextUniqueId);
          /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */

          _this11.id = _this11._uniqueId;
          /** Whether the label should appear after or before the checkbox. Defaults to 'after' */

          _this11.labelPosition = 'after';
          /** Name value will be applied to the input element if present */

          _this11.name = null;
          /** Event emitted when the checkbox's `checked` value changes. */

          _this11.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event emitted when the checkbox's `indeterminate` value changes. */

          _this11.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
           * @docs-private
           */

          _this11._onTouched = function () {};

          _this11._currentAnimationClass = '';
          _this11._currentCheckState = 0
          /* Init */
          ;

          _this11._controlValueAccessorChangeFn = function () {};

          _this11._checked = false;
          _this11._disabled = false;
          _this11._indeterminate = false;
          _this11._options = _this11._options || {};

          if (_this11._options.color) {
            _this11.color = _this11.defaultColor = _this11._options.color;
          }

          _this11.tabIndex = parseInt(tabIndex) || 0; // TODO: Remove this after the `_clickAction` parameter is removed as an injection parameter.

          _this11._clickAction = _this11._clickAction || _this11._options.clickAction;
          return _this11;
        }
        /** Returns the unique id for the visual hidden input. */


        _createClass(MatCheckbox, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this12 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () {
                  _this12._onTouched();

                  _this12._changeDetectorRef.markForCheck();
                });
              }
            });

            this._syncIndeterminate(this._indeterminate);
          } // TODO: Delete next major revision.

        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /**
           * Whether the checkbox is checked.
           */

        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disableRipple || this.disabled;
          }
          /** Method being called whenever the label text changes. */

        }, {
          key: "_onLabelTextChange",
          value: function _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
            // component will be only marked for check, but no actual change detection runs automatically.
            // Instead of going back into the zone in order to trigger a change detection which causes
            // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
            // an explicit change detection for the checkbox view and its children.
            this._changeDetectorRef.detectChanges();
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "_getAriaChecked",
          value: function _getAriaChecked() {
            if (this.checked) {
              return 'true';
            }

            return this.indeterminate ? 'mixed' : 'false';
          }
        }, {
          key: "_transitionCheckState",
          value: function _transitionCheckState(newState) {
            var oldState = this._currentCheckState;
            var element = this._elementRef.nativeElement;

            if (oldState === newState) {
              return;
            }

            if (this._currentAnimationClass.length > 0) {
              element.classList.remove(this._currentAnimationClass);
            }

            this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
            this._currentCheckState = newState;

            if (this._currentAnimationClass.length > 0) {
              element.classList.add(this._currentAnimationClass); // Remove the animation class to avoid animation when the checkbox is moved between containers

              var animationClass = this._currentAnimationClass;

              this._ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                  element.classList.remove(animationClass);
                }, 1000);
              });
            }
          }
        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            var event = new MatCheckboxChange();
            event.source = this;
            event.checked = this.checked;

            this._controlValueAccessorChangeFn(this.checked);

            this.change.emit(event);
          }
          /** Toggles the `checked` state of the checkbox. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;
          }
          /**
           * Event handler for checkbox input element.
           * Toggles checked state if element is not disabled.
           * Do not toggle on (change) event since IE doesn't fire change event when
           *   indeterminate checkbox is clicked.
           * @param event
           */

        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            var _this13 = this;

            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `checkbox` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation(); // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click

            if (!this.disabled && this._clickAction !== 'noop') {
              // When user manually click on the checkbox, `indeterminate` is set to false.
              if (this.indeterminate && this._clickAction !== 'check') {
                Promise.resolve().then(function () {
                  _this13._indeterminate = false;

                  _this13.indeterminateChange.emit(_this13._indeterminate);
                });
              }

              this.toggle();

              this._transitionCheckState(this._checked ? 1
              /* Checked */
              : 2
              /* Unchecked */
              ); // Emit our custom change event if the native input emitted one.
              // It is important to only emit it, if the native input triggered one, because
              // we don't want to trigger a change event, when the `checked` variable changes for example.


              this._emitChangeEvent();
            } else if (!this.disabled && this._clickAction === 'noop') {
              // Reset native input when clicked with noop. The native checkbox becomes checked after
              // click, reset it to be align with `checked` value of `mat-checkbox`.
              this._inputElement.nativeElement.checked = this.checked;
              this._inputElement.nativeElement.indeterminate = this.indeterminate;
            }
          }
          /** Focuses the checkbox. */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'keyboard';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            this._focusMonitor.focusVia(this._inputElement, origin, options);
          }
        }, {
          key: "_onInteractionEvent",
          value: function _onInteractionEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the `change` output.
            event.stopPropagation();
          }
        }, {
          key: "_getAnimationClassForCheckStateTransition",
          value: function _getAnimationClassForCheckStateTransition(oldState, newState) {
            // Don't transition if animations are disabled.
            if (this._animationMode === 'NoopAnimations') {
              return '';
            }

            var animSuffix = '';

            switch (oldState) {
              case 0
              /* Init */
              :
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === 1
                /* Checked */
                ) {
                    animSuffix = 'unchecked-checked';
                  } else if (newState == 3
                /* Indeterminate */
                ) {
                    animSuffix = 'unchecked-indeterminate';
                  } else {
                  return '';
                }

                break;

              case 2
              /* Unchecked */
              :
                animSuffix = newState === 1
                /* Checked */
                ? 'unchecked-checked' : 'unchecked-indeterminate';
                break;

              case 1
              /* Checked */
              :
                animSuffix = newState === 2
                /* Unchecked */
                ? 'checked-unchecked' : 'checked-indeterminate';
                break;

              case 3
              /* Indeterminate */
              :
                animSuffix = newState === 1
                /* Checked */
                ? 'indeterminate-checked' : 'indeterminate-unchecked';
                break;
            }

            return "mat-checkbox-anim-".concat(animSuffix);
          }
          /**
           * Syncs the indeterminate value with the checkbox DOM node.
           *
           * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
           * property is supported on an element boils down to `if (propName in element)`. Domino's
           * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
           * server-side rendering.
           */

        }, {
          key: "_syncIndeterminate",
          value: function _syncIndeterminate(value) {
            var nativeCheckbox = this._inputElement;

            if (nativeCheckbox) {
              nativeCheckbox.nativeElement.indeterminate = value;
            }
          }
        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
          /** Whether the checkbox is required. */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            if (value != this.checked) {
              this._checked = value;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Whether the checkbox is disabled. This fully overrides the implementation provided by
           * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (newValue !== this.disabled) {
              this._disabled = newValue;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
           * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
           * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
           * set to false.
           */

        }, {
          key: "indeterminate",
          get: function get() {
            return this._indeterminate;
          },
          set: function set(value) {
            var changed = value != this._indeterminate;
            this._indeterminate = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

            if (changed) {
              if (this._indeterminate) {
                this._transitionCheckState(3
                /* Indeterminate */
                );
              } else {
                this._transitionCheckState(this.checked ? 1
                /* Checked */
                : 2
                /* Unchecked */
                );
              }

              this.indeterminateChange.emit(this._indeterminate);
            }

            this._syncIndeterminate(this._indeterminate);
          }
        }]);

        return MatCheckbox;
      }(_MatCheckboxMixinBase);

      MatCheckbox.ɵfac = function MatCheckbox_Factory(t) {
        return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_CHECKBOX_CLICK_ACTION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
      };

      MatCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatCheckbox,
        selectors: [["mat-checkbox"]],
        viewQuery: function MatCheckbox_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostAttrs: [1, "mat-checkbox"],
        hostVars: 12,
        hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          id: "id",
          labelPosition: "labelPosition",
          name: "name",
          required: "required",
          checked: "checked",
          disabled: "disabled",
          indeterminate: "indeterminate",
          ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
          value: "value"
        },
        outputs: {
          change: "change",
          indeterminateChange: "indeterminateChange"
        },
        exportAs: ["matCheckbox"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c2,
        decls: 17,
        vars: 20,
        consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]],
        template: function MatCheckbox_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) {
              return ctx._onInteractionEvent($event);
            })("click", function MatCheckbox_Template_input_click_3_listener($event) {
              return ctx._onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() {
              return ctx._onLabelTextChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1));
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["CdkObserveContent"]],
        styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCheckbox.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_CHECKBOX_CLICK_ACTION]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatCheckbox.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-describedby']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        indeterminateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['input']
        }],
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        indeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-checkbox',
            template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <div class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <div matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div>\n    </div>\n    <div class=\"mat-checkbox-frame\"></div>\n    <div class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <div class=\"mat-checkbox-mixedmark\"></div>\n    </div>\n  </div>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
            exportAs: 'matCheckbox',
            host: {
              'class': 'mat-checkbox',
              '[id]': 'id',
              '[attr.tabindex]': 'null',
              '[class.mat-checkbox-indeterminate]': 'indeterminate',
              '[class.mat-checkbox-checked]': 'checked',
              '[class.mat-checkbox-disabled]': 'disabled',
              '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
              '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
            },
            providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
            inputs: ['disableRipple', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_CHECKBOX_CLICK_ACTION]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          indeterminateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-describedby']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input']
          }],
          ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return MatCheckboxRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Material checkbox's required attribute in template-driven checkbox.
       * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
       * work with `mat-checkbox`.
       */

      var MatCheckboxRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(MatCheckboxRequiredValidator, _angular_forms__WEBPA);

        var _super3 = _createSuper(MatCheckboxRequiredValidator);

        function MatCheckboxRequiredValidator() {
          _classCallCheck(this, MatCheckboxRequiredValidator);

          return _super3.apply(this, arguments);
        }

        return MatCheckboxRequiredValidator;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"]);

      MatCheckboxRequiredValidator.ɵfac = function MatCheckboxRequiredValidator_Factory(t) {
        return ɵMatCheckboxRequiredValidator_BaseFactory(t || MatCheckboxRequiredValidator);
      };

      MatCheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatCheckboxRequiredValidator,
        selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMatCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
            providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** This module is used by both original and MDC-based checkbox implementations. */


      var _MatCheckboxRequiredValidatorModule = function _MatCheckboxRequiredValidatorModule() {
        _classCallCheck(this, _MatCheckboxRequiredValidatorModule);
      };

      _MatCheckboxRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MatCheckboxRequiredValidatorModule
      });
      _MatCheckboxRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function _MatCheckboxRequiredValidatorModule_Factory(t) {
          return new (t || _MatCheckboxRequiredValidatorModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatCheckboxRequiredValidatorModule, {
          declarations: [MatCheckboxRequiredValidator],
          exports: [MatCheckboxRequiredValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            exports: [MatCheckboxRequiredValidator],
            declarations: [MatCheckboxRequiredValidator]
          }]
        }], null, null);
      })();

      var MatCheckboxModule = function MatCheckboxModule() {
        _classCallCheck(this, MatCheckboxModule);
      };

      MatCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatCheckboxModule
      });
      MatCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatCheckboxModule_Factory(t) {
          return new (t || MatCheckboxModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatCheckboxModule, {
          declarations: function declarations() {
            return [MatCheckbox];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule];
          },
          exports: function exports() {
            return [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule],
            exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
            declarations: [MatCheckbox]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=checkbox.js.map

      /***/

    },

    /***/
    "vy+p":
    /*!**************************************!*\
      !*** ./src/app/core/utils/images.ts ***!
      \**************************************/

    /*! exports provided: typeImage, classImage */

    /***/
    function vyP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "typeImage", function () {
        return typeImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "classImage", function () {
        return classImage;
      });

      var typeImage = function typeImage(type) {
        switch (type) {
          case 'STR':
            return 'assets/images/filter_attribute_power.png';

          case 'DEX':
            return 'assets/images/filter_attribute_technical.png';

          case 'QCK':
            return 'assets/images/filter_attribute_speed.png';

          case 'PSY':
            return 'assets/images/filter_attribute_heart.png';

          case 'INT':
            return 'assets/images/filter_attribute_intellect.png';

          case 'DUAL':
            return 'assets/images/filter_attribute_multiplecharacter.png';

          default:
            return '';
        }
      };

      var classImage = function classImage(type) {
        switch (type) {
          case 'Fighter':
            return 'assets/images/filter_type_icn_1.png';

          case 'Slasher':
            return 'assets/images/filter_type_icn_2.png';

          case 'Striker':
            return 'assets/images/filter_type_icn_3.png';

          case 'Shooter':
            return 'assets/images/filter_type_icn_4.png';

          case 'Free Spirit':
            return 'assets/images/filter_type_icn_5.png';

          case 'Driven':
            return 'assets/images/filter_type_icn_6.png';

          case 'Cerebral':
            return 'assets/images/filter_type_icn_7.png';

          case 'Powerhouse':
            return 'assets/images/filter_type_icn_8.png';

          default:
            return '';
        }
      };
      /***/

    },

    /***/
    "xqVb":
    /*!***************************************************************************!*\
      !*** ./src/app/team-builder/pages/team-builder/team-builder.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TeamBuilderComponent */

    /***/
    function xqVb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeamBuilderComponent", function () {
        return TeamBuilderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _components_unit_picker_unit_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/unit-picker/unit-picker.component */
      "d/8i");
      /* harmony import */


      var _core_utils_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/utils/effects */
      "cA7W");
      /* harmony import */


      var _core_constants_battle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/constants/battle */
      "Yqml");
      /* harmony import */


      var src_app_database_components_unit_table_unit_table_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/database/components/unit-table/unit-table-datasource */
      "+uq0");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/unit-card/unit-card.component */
      "Rdz9");

      function TeamBuilderComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-unit-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("unitClick", function TeamBuilderComponent_div_3_Template_app_unit_card_unitClick_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var index_r3 = ctx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.mainTeamUnitClick(index_r3);
          })("hpChange", function TeamBuilderComponent_div_3_Template_app_unit_card_hpChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var unit_r2 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.unitHpChange(unit_r2, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unit", unit_r2)("teamEffects", ctx_r0.teamEffects)("battleTimer", ctx_r0.battleTimer);
        }
      }

      function TeamBuilderComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-unit-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("unitClick", function TeamBuilderComponent_div_5_Template_app_unit_card_unitClick_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var index_r8 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.subTeamUnitClick(index_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r7 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unit", unit_r7)("teamEffects", ctx_r1.teamEffects)("battleTimer", ctx_r1.battleTimer);
        }
      }

      var mainTeamSize = 5;
      var subTeamSize = 3;

      var TeamBuilderComponent = /*#__PURE__*/function () {
        function TeamBuilderComponent(dialog, dataSource) {
          _classCallCheck(this, TeamBuilderComponent);

          this.dialog = dialog;
          this.initialBattleTime = _core_constants_battle__WEBPACK_IMPORTED_MODULE_4__["battleTime"];
          this.battleTimer = this.initialBattleTime;
          this.totals = {
            cost: 0
          };
          this.units = dataSource.data;
          this.mainTeam = [];

          for (var index = 1; index <= mainTeamSize; index++) {
            this.mainTeam.push(null);
          }

          this.subTeam = [];

          for (var _index = 1; _index <= subTeamSize; _index++) {
            this.subTeam.push(null);
          }

          this.teamEffects = [];
        }

        _createClass(TeamBuilderComponent, [{
          key: "createTeamUnit",
          value: function createTeamUnit(unit) {
            if (!unit) {
              return null;
            }

            return Object.assign(unit, {
              hp: 100
            });
          }
        }, {
          key: "isTeamEffect",
          value: function isTeamEffect(effect) {
            switch (effect) {
              case 'buff':
              case 'penalty':
                return true;

              default:
                return false;
            }
          }
        }, {
          key: "buffApplies",
          value: function buffApplies(effect, unit, time) {
            return Object(_core_utils_effects__WEBPACK_IMPORTED_MODULE_3__["buffAppliesToTime"])(effect, time || this.battleTimer) && Object(_core_utils_effects__WEBPACK_IMPORTED_MODULE_3__["effectAppliesToUnitHp"])(effect, unit.hp);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateCost",
          value: function updateCost() {// update totals.cost based on main/sub team current state
          }
        }, {
          key: "updateBuffs",
          value: function updateBuffs(time) {
            var _this14 = this;

            this.teamEffects = this.mainTeam.filter(function (unit) {
              return unit != null && unit.lvl5Ability != null;
            }).flatMap(function (unit) {
              return unit.lvl5Ability.filter(function (e) {
                return _this14.isTeamEffect(e.effect) && _this14.buffApplies(e, unit, time);
              });
            });
          }
        }, {
          key: "updateDebuffs",
          value: function updateDebuffs(time) {// update totals.debuffs based on main team current state
          }
        }, {
          key: "mainTeamUnitClick",
          value: function mainTeamUnitClick(index) {
            var _this15 = this;

            this.openUnitPicker(this.mainTeam[index], function (data) {
              _this15.mainTeam[index] = _this15.createTeamUnit(data);

              _this15.updateBuffs();

              _this15.updateDebuffs();

              _this15.updateCost();
            });
          }
        }, {
          key: "subTeamUnitClick",
          value: function subTeamUnitClick(index) {
            var _this16 = this;

            this.openUnitPicker(this.subTeam[index], function (data) {
              _this16.subTeam[index] = _this16.createTeamUnit(data);

              _this16.updateCost();
            });
          }
        }, {
          key: "openUnitPicker",
          value: function openUnitPicker(current, onPick) {
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
            dialogConfig.hasBackdrop = true;
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
              team: [].concat(_toConsumableArray(this.mainTeam), _toConsumableArray(this.subTeam)).filter(function (u) {
                return u != null;
              }),
              current: current,
              units: this.units
            };
            var dialogRef = this.dialog.open(_components_unit_picker_unit_picker_component__WEBPACK_IMPORTED_MODULE_2__["UnitPickerComponent"], dialogConfig);
            dialogRef.afterClosed().subscribe(function (data) {
              if (data !== undefined) {
                // allow null so we can unset units
                onPick(data);
              }
            });
          }
        }, {
          key: "battleTimerChange",
          value: function battleTimerChange(event) {
            this.updateBuffs(event.value);
            this.updateDebuffs(event.value);
          }
        }, {
          key: "unitHpChange",
          value: function unitHpChange(unit, newHp) {
            console.log('unit hp change', {
              unit: unit,
              newHp: newHp
            });

            if (unit.hp !== newHp) {
              console.warn('they are different!!!!!!!!!!!!!!!!');
            }

            if (unit.lvl5Ability.some(function (e) {
              return Object(_core_utils_effects__WEBPACK_IMPORTED_MODULE_3__["isHpBasedEffect"])(e);
            })) {
              this.updateBuffs(this.battleTimer);
              this.updateDebuffs(this.battleTimer);
            }
          }
        }]);

        return TeamBuilderComponent;
      }();

      TeamBuilderComponent.ɵfac = function TeamBuilderComponent_Factory(t) {
        return new (t || TeamBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_database_components_unit_table_unit_table_datasource__WEBPACK_IMPORTED_MODULE_5__["UnitTableDataSource"]));
      };

      TeamBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeamBuilderComponent,
        selectors: [["app-team-builder"]],
        decls: 14,
        vars: 11,
        consts: [[1, "content"], ["fxLayout", "row wrap", 1, "main-team"], ["class", "unit-container", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", 1, ""], [1, "battle-timer-container"], [1, "card-header"], [1, "card-title"], [3, "invert", "max", "min", "step", "tickInterval", "ngModel", "thumbLabel", "ngModelChange", "input"], [1, "unit-container"], [3, "unit", "teamEffects", "battleTimer", "unitClick", "hpChange"], [3, "unit", "teamEffects", "battleTimer", "unitClick"]],
        template: function TeamBuilderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamBuilderComponent_div_3_Template, 2, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TeamBuilderComponent_div_5_Template, 2, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-slider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamBuilderComponent_Template_mat_slider_ngModelChange_13_listener($event) {
              return ctx.battleTimer = $event;
            })("input", function TeamBuilderComponent_Template_mat_slider_input_13_listener($event) {
              return ctx.battleTimerChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainTeam);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subTeam);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Battle Timer: ", ctx.battleTimer, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ellapsed Time: ", ctx.initialBattleTime - ctx.battleTimer, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invert", true)("max", ctx.initialBattleTime)("min", 0)("step", 1)("tickInterval", 10)("ngModel", ctx.battleTimer)("thumbLabel", true);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_unit_card_unit_card_component__WEBPACK_IMPORTED_MODULE_11__["UnitCardComponent"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.team-totals[_ngcontent-%COMP%] {\r\n  width: 125px;\r\n}\r\n\r\n.team-total-item[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.battle-timer-container[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\n.battle-timer-container[_ngcontent-%COMP%]   .mat-slider[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS1idWlsZGVyL3BhZ2VzL3RlYW0tYnVpbGRlci90ZWFtLWJ1aWxkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdGVhbS1idWlsZGVyL3BhZ2VzL3RlYW0tYnVpbGRlci90ZWFtLWJ1aWxkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGVhbS10b3RhbHMge1xyXG4gIHdpZHRoOiAxMjVweDtcclxufVxyXG5cclxuLnRlYW0tdG90YWwtaXRlbSxcclxuLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJhdHRsZS10aW1lci1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5iYXR0bGUtdGltZXItY29udGFpbmVyIC5tYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamBuilderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-team-builder',
            templateUrl: './team-builder.component.html',
            styleUrls: ['./team-builder.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: src_app_database_components_unit_table_unit_table_datasource__WEBPACK_IMPORTED_MODULE_5__["UnitTableDataSource"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zkoq":
    /*!***************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
      \***************************************************************************/

    /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

    /***/
    function zkoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
        return MatGridAvatarCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
        return MatGridList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
        return MatGridListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
        return MatGridTile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
        return MatGridTileFooterCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
        return MatGridTileHeaderCssMatStyler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
        return MatGridTileText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
        return TileCoordinator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
        return MAT_GRID_LIST;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to provide a grid list to a tile and to avoid circular imports.
       * @docs-private
       */


      var _c0 = ["*"];
      var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
      var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
      var _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";
      var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var MatGridTile = /*#__PURE__*/function () {
        function MatGridTile(_element, _gridList) {
          _classCallCheck(this, MatGridTile);

          this._element = _element;
          this._gridList = _gridList;
          this._rowspan = 1;
          this._colspan = 1;
        }
        /** Amount of rows that the grid tile takes up. */


        _createClass(MatGridTile, [{
          key: "_setStyle",

          /**
           * Sets the style of the grid-tile element.  Needs to be set manually to avoid
           * "Changed after checked" errors that would occur with HostBinding.
           */
          value: function _setStyle(property, value) {
            this._element.nativeElement.style[property] = value;
          }
        }, {
          key: "rowspan",
          get: function get() {
            return this._rowspan;
          },
          set: function set(value) {
            this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
          /** Amount of columns that the grid tile takes up. */

        }, {
          key: "colspan",
          get: function get() {
            return this._colspan;
          },
          set: function set(value) {
            this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
          }
        }]);

        return MatGridTile;
      }();

      MatGridTile.ɵfac = function MatGridTile_Factory(t) {
        return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
      };

      MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTile,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function MatGridTile_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
          }
        },
        inputs: {
          rowspan: "rowspan",
          colspan: "colspan"
        },
        exportAs: ["matGridTile"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-figure"]],
        template: function MatGridTile_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c3],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTile.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      };

      MatGridTile.propDecorators = {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile',
            exportAs: 'matGridTile',
            host: {
              'class': 'mat-grid-tile',
              // Ensures that the "rowspan" and "colspan" input value is reflected in
              // the DOM. This is needed for the grid-tile harness.
              '[attr.rowspan]': 'rowspan',
              '[attr.colspan]': 'colspan'
            },
            template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_GRID_LIST]
            }]
          }];
        }, {
          rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var MatGridTileText = /*#__PURE__*/function () {
        function MatGridTileText(_element) {
          _classCallCheck(this, MatGridTileText);

          this._element = _element;
        }

        _createClass(MatGridTileText, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
          }
        }]);

        return MatGridTileText;
      }();

      MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
        return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridTileText,
        selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
        contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
          }
        },
        ngContentSelectors: _c2,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-grid-list-text"]],
        template: function MatGridTileText_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridTileText.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      MatGridTileText.propDecorators = {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-tile-header, mat-grid-tile-footer',
            template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
        _classCallCheck(this, MatGridAvatarCssMatStyler);
      };

      MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
        return new (t || MatGridAvatarCssMatStyler)();
      };

      MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridAvatarCssMatStyler,
        selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
        hostAttrs: [1, "mat-grid-avatar"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-grid-avatar], [matGridAvatar]',
            host: {
              'class': 'mat-grid-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
        _classCallCheck(this, MatGridTileHeaderCssMatStyler);
      };

      MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
        return new (t || MatGridTileHeaderCssMatStyler)();
      };

      MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileHeaderCssMatStyler,
        selectors: [["mat-grid-tile-header"]],
        hostAttrs: [1, "mat-grid-tile-header"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-header',
            host: {
              'class': 'mat-grid-tile-header'
            }
          }]
        }], null, null);
      })();
      /**
       * Directive whose purpose is to add the mat- CSS styling to this selector.
       * @docs-private
       */


      var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
        _classCallCheck(this, MatGridTileFooterCssMatStyler);
      };

      MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
        return new (t || MatGridTileFooterCssMatStyler)();
      };

      MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatGridTileFooterCssMatStyler,
        selectors: [["mat-grid-tile-footer"]],
        hostAttrs: [1, "mat-grid-tile-footer"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-grid-tile-footer',
            host: {
              'class': 'mat-grid-tile-footer'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
       * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
       * because the tiles can have a rowspan.
       *
       * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
       * large enough to accommodate it so that the tiles still render in the same order in which they
       * are given.
       *
       * The basis of the algorithm is the use of an array to track the already placed tiles. Each
       * element of the array corresponds to a column, and the value indicates how many cells in that
       * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
       * decrements each value in the tracking array (indicating that the column is one cell closer to
       * being free).
       *
       * @docs-private
       */


      var TileCoordinator = /*#__PURE__*/function () {
        function TileCoordinator() {
          _classCallCheck(this, TileCoordinator);

          /** Index at which the search for the next gap will start. */
          this.columnIndex = 0;
          /** The current row index. */

          this.rowIndex = 0;
        }
        /** Gets the total number of rows occupied by tiles */


        _createClass(TileCoordinator, [{
          key: "update",

          /**
           * Updates the tile positions.
           * @param numColumns Amount of columns in the grid.
           * @param tiles Tiles to be positioned.
           */
          value: function update(numColumns, tiles) {
            var _this17 = this;

            this.columnIndex = 0;
            this.rowIndex = 0;
            this.tracker = new Array(numColumns);
            this.tracker.fill(0, 0, this.tracker.length);
            this.positions = tiles.map(function (tile) {
              return _this17._trackTile(tile);
            });
          }
          /** Calculates the row and col position of a tile. */

        }, {
          key: "_trackTile",
          value: function _trackTile(tile) {
            // Find a gap large enough for this tile.
            var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


            this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
            // immediately after the tile that has just been placed.


            this.columnIndex = gapStartIndex + tile.colspan;
            return new TilePosition(this.rowIndex, gapStartIndex);
          }
          /** Finds the next available space large enough to fit the tile. */

        }, {
          key: "_findMatchingGap",
          value: function _findMatchingGap(tileCols) {
            if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
            } // Start index is inclusive, end index is exclusive.


            var gapStartIndex = -1;
            var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

            do {
              // If we've reached the end of the row, go to the next row.
              if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

              if (gapStartIndex == -1) {
                this._nextRow();

                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
              }

              gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
              // gap on the next iteration.

              this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
              // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
            } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
            // at least zero so the tile doesn't get pulled out of the grid.


            return Math.max(gapStartIndex, 0);
          }
          /** Move "down" to the next row. */

        }, {
          key: "_nextRow",
          value: function _nextRow() {
            this.columnIndex = 0;
            this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

            for (var i = 0; i < this.tracker.length; i++) {
              this.tracker[i] = Math.max(0, this.tracker[i] - 1);
            }
          }
          /**
           * Finds the end index (exclusive) of a gap given the index from which to start looking.
           * The gap ends when a non-zero value is found.
           */

        }, {
          key: "_findGapEndIndex",
          value: function _findGapEndIndex(gapStartIndex) {
            for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
              if (this.tracker[i] != 0) {
                return i;
              }
            } // The gap ends with the end of the row.


            return this.tracker.length;
          }
          /** Update the tile tracker to account for the given tile in the given space. */

        }, {
          key: "_markTilePosition",
          value: function _markTilePosition(start, tile) {
            for (var i = 0; i < tile.colspan; i++) {
              this.tracker[start + i] = tile.rowspan;
            }
          }
        }, {
          key: "rowCount",
          get: function get() {
            return this.rowIndex + 1;
          }
          /**
           * Gets the total span of rows occupied by tiles.
           * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
           */

        }, {
          key: "rowspan",
          get: function get() {
            var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount

            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
          }
        }]);

        return TileCoordinator;
      }();
      /**
       * Simple data structure for tile position (row, col).
       * @docs-private
       */


      var TilePosition = function TilePosition(row, col) {
        _classCallCheck(this, TilePosition);

        this.row = row;
        this.col = col;
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * RegExp that can be used to check whether a value will
       * be allowed inside a CSS `calc()` expression.
       */


      var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
      /**
       * Sets the style properties for an individual tile, given the position calculated by the
       * Tile Coordinator.
       * @docs-private
       */

      var TileStyler = /*#__PURE__*/function () {
        function TileStyler() {
          _classCallCheck(this, TileStyler);

          this._rows = 0;
          this._rowspan = 0;
        }
        /**
         * Adds grid-list layout info once it is available. Cannot be processed in the constructor
         * because these properties haven't been calculated by that point.
         *
         * @param gutterSize Size of the grid's gutter.
         * @param tracker Instance of the TileCoordinator.
         * @param cols Amount of columns in the grid.
         * @param direction Layout direction of the grid.
         */


        _createClass(TileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            this._gutterSize = normalizeUnits(gutterSize);
            this._rows = tracker.rowCount;
            this._rowspan = tracker.rowspan;
            this._cols = cols;
            this._direction = direction;
          }
          /**
           * Computes the amount of space a single 1x1 tile would take up (width or height).
           * Used as a basis for other calculations.
           * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
           * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
           * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
           */

        }, {
          key: "getBaseTileSize",
          value: function getBaseTileSize(sizePercent, gutterFraction) {
            // Take the base size percent (as would be if evenly dividing the size between cells),
            // and then subtracting the size of one gutter. However, since there are no gutters on the
            // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
            // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
            // edge evenly among the cells).
            return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
          }
          /**
           * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
           * @param offset Number of tiles that have already been rendered in the row/column.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @return Position of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTilePosition",
          value: function getTilePosition(baseSize, offset) {
            // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
            // row/column (offset).
            return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
          }
          /**
           * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
           * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
           * @param span The tile's rowspan or colspan.
           * @return Size of the tile as a CSS calc() expression.
           */

        }, {
          key: "getTileSize",
          value: function getTileSize(baseSize, span) {
            return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
          }
          /**
           * Sets the style properties to be applied to a tile for the given row and column index.
           * @param tile Tile to which to apply the styling.
           * @param rowIndex Index of the tile's row.
           * @param colIndex Index of the tile's column.
           */

        }, {
          key: "setStyle",
          value: function setStyle(tile, rowIndex, colIndex) {
            // Percent of the available horizontal space that one column takes up.
            var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
            // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

            var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
            this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
            this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          }
          /** Sets the horizontal placement of the tile in the list. */

        }, {
          key: "setColStyles",
          value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
            // Base horizontal size of a column.
            var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
            // height and vertical position depends on the rowMode.

            var side = this._direction === 'rtl' ? 'right' : 'left';

            tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

            tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
          }
          /**
           * Calculates the total size taken up by gutters across one axis of a list.
           */

        }, {
          key: "getGutterSpan",
          value: function getGutterSpan() {
            return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
          }
          /**
           * Calculates the total size taken up by tiles across one axis of a list.
           * @param tileHeight Height of the tile.
           */

        }, {
          key: "getTileSpan",
          value: function getTileSpan(tileHeight) {
            return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
          }
          /**
           * Calculates the computed height and returns the correct style property to set.
           * This method can be implemented by each type of TileStyler.
           * @docs-private
           */

        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return null;
          }
        }]);

        return TileStyler;
      }();
      /**
       * This type of styler is instantiated when the user passes in a fixed row height.
       * Example `<mat-grid-list cols="3" rowHeight="100px">`
       * @docs-private
       */


      var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
        _inherits(FixedTileStyler, _TileStyler);

        var _super4 = _createSuper(FixedTileStyler);

        function FixedTileStyler(fixedRowHeight) {
          var _this18;

          _classCallCheck(this, FixedTileStyler);

          _this18 = _super4.call(this);
          _this18.fixedRowHeight = fixedRowHeight;
          return _this18;
        }

        _createClass(FixedTileStyler, [{
          key: "init",
          value: function init(gutterSize, tracker, cols, direction) {
            _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

            this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

            if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
            }
          }
        }, {
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['height', null]);

            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FixedTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user passes in a width:height ratio
       * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
       * @docs-private
       */


      var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
        _inherits(RatioTileStyler, _TileStyler2);

        var _super5 = _createSuper(RatioTileStyler);

        function RatioTileStyler(value) {
          var _this19;

          _classCallCheck(this, RatioTileStyler);

          _this19 = _super5.call(this);

          _this19._parseRatio(value);

          return _this19;
        }

        _createClass(RatioTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
            var percentHeightPerTile = percentWidth / this.rowHeightRatio;
            this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
            // a percentage-based value for these properties is applied versus the *width* of the
            // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

            tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

            tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "getComputedHeight",
          value: function getComputedHeight() {
            return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
          }
        }, {
          key: "reset",
          value: function reset(list) {
            list._setListStyle(['paddingBottom', null]);

            list._tiles.forEach(function (tile) {
              tile._setStyle('marginTop', null);

              tile._setStyle('paddingTop', null);
            });
          }
        }, {
          key: "_parseRatio",
          value: function _parseRatio(value) {
            var ratioParts = value.split(':');

            if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
            }

            this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
          }
        }]);

        return RatioTileStyler;
      }(TileStyler);
      /**
       * This type of styler is instantiated when the user selects a "fit" row height mode.
       * In other words, the row height will reflect the total height of the container divided
       * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
       *
       * @docs-private
       */


      var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
        _inherits(FitTileStyler, _TileStyler3);

        var _super6 = _createSuper(FitTileStyler);

        function FitTileStyler() {
          _classCallCheck(this, FitTileStyler);

          return _super6.apply(this, arguments);
        }

        _createClass(FitTileStyler, [{
          key: "setRowStyles",
          value: function setRowStyles(tile, rowIndex) {
            // Percent of the available vertical space that one row takes up.
            var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

            var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

            tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

            tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
          }
        }, {
          key: "reset",
          value: function reset(list) {
            if (list._tiles) {
              list._tiles.forEach(function (tile) {
                tile._setStyle('top', null);

                tile._setStyle('height', null);
              });
            }
          }
        }]);

        return FitTileStyler;
      }(TileStyler);
      /** Wraps a CSS string in a calc function */


      function calc(exp) {
        return "calc(".concat(exp, ")");
      }
      /** Appends pixels to a CSS string if no units are given. */


      function normalizeUnits(value) {
        return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(kara): Conditional (responsive) column count / row size.
      // TODO(kara): Re-layout on window resize / media change (debounced).
      // TODO(kara): gridTileHeader and gridTileFooter.


      var MAT_FIT_MODE = 'fit';

      var MatGridList = /*#__PURE__*/function () {
        function MatGridList(_element, _dir) {
          _classCallCheck(this, MatGridList);

          this._element = _element;
          this._dir = _dir;
          /** The amount of space between tiles. This will be something like '5px' or '2em'. */

          this._gutter = '1px';
        }
        /** Amount of columns in the grid list. */


        _createClass(MatGridList, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkCols();

            this._checkRowHeight();
          }
          /**
           * The layout calculation is fairly cheap if nothing changes, so there's little cost
           * to run it frequently.
           */

        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._layoutTiles();
          }
          /** Throw a friendly error if cols property is missing */

        }, {
          key: "_checkCols",
          value: function _checkCols() {
            if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
            }
          }
          /** Default to equal width:height if rowHeight property is missing */

        }, {
          key: "_checkRowHeight",
          value: function _checkRowHeight() {
            if (!this._rowHeight) {
              this._setTileStyler('1:1');
            }
          }
          /** Creates correct Tile Styler subtype based on rowHeight passed in by user */

        }, {
          key: "_setTileStyler",
          value: function _setTileStyler(rowHeight) {
            if (this._tileStyler) {
              this._tileStyler.reset(this);
            }

            if (rowHeight === MAT_FIT_MODE) {
              this._tileStyler = new FitTileStyler();
            } else if (rowHeight && rowHeight.indexOf(':') > -1) {
              this._tileStyler = new RatioTileStyler(rowHeight);
            } else {
              this._tileStyler = new FixedTileStyler(rowHeight);
            }
          }
          /** Computes and applies the size and position for all children grid tiles. */

        }, {
          key: "_layoutTiles",
          value: function _layoutTiles() {
            var _this20 = this;

            if (!this._tileCoordinator) {
              this._tileCoordinator = new TileCoordinator();
            }

            var tracker = this._tileCoordinator;

            var tiles = this._tiles.filter(function (tile) {
              return !tile._gridList || tile._gridList === _this20;
            });

            var direction = this._dir ? this._dir.value : 'ltr';

            this._tileCoordinator.update(this.cols, tiles);

            this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

            tiles.forEach(function (tile, index) {
              var pos = tracker.positions[index];

              _this20._tileStyler.setStyle(tile, pos.row, pos.col);
            });

            this._setListStyle(this._tileStyler.getComputedHeight());
          }
          /** Sets style on the main grid-list element, given the style name and value. */

        }, {
          key: "_setListStyle",
          value: function _setListStyle(style) {
            if (style) {
              this._element.nativeElement.style[style[0]] = style[1];
            }
          }
        }, {
          key: "cols",
          get: function get() {
            return this._cols;
          },
          set: function set(value) {
            this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
          }
          /** Size of the grid list's gutter in pixels. */

        }, {
          key: "gutterSize",
          get: function get() {
            return this._gutter;
          },
          set: function set(value) {
            this._gutter = "".concat(value == null ? '' : value);
          }
          /** Set internal representation of row height from the user-provided value. */

        }, {
          key: "rowHeight",
          get: function get() {
            return this._rowHeight;
          },
          set: function set(value) {
            var newValue = "".concat(value == null ? '' : value);

            if (newValue !== this._rowHeight) {
              this._rowHeight = newValue;

              this._setTileStyler(this._rowHeight);
            }
          }
        }]);

        return MatGridList;
      }();

      MatGridList.ɵfac = function MatGridList_Factory(t) {
        return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatGridList,
        selectors: [["mat-grid-list"]],
        contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
          }
        },
        hostAttrs: [1, "mat-grid-list"],
        hostVars: 1,
        hostBindings: function MatGridList_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
          }
        },
        inputs: {
          cols: "cols",
          gutterSize: "gutterSize",
          rowHeight: "rowHeight"
        },
        exportAs: ["matGridList"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }])],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function MatGridList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [_c3],
        encapsulation: 2,
        changeDetection: 0
      });

      MatGridList.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      MatGridList.propDecorators = {
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }],
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-grid-list',
            exportAs: 'matGridList',
            template: "<div>\n  <ng-content></ng-content>\n</div>",
            host: {
              'class': 'mat-grid-list',
              // Ensures that the "cols" input value is reflected in the DOM. This is
              // needed for the grid-list harness.
              '[attr.cols]': 'cols'
            },
            providers: [{
              provide: MAT_GRID_LIST,
              useExisting: MatGridList
            }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatGridListModule = function MatGridListModule() {
        _classCallCheck(this, MatGridListModule);
      };

      MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatGridListModule
      });
      MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatGridListModule_Factory(t) {
          return new (t || MatGridListModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
          declarations: function declarations() {
            return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
            declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=grid-list.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=team-builder-team-builder-module-es5.js.map