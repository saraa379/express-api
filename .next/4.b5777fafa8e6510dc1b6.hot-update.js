webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Menu2__ = __webpack_require__("./components/Menu2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Books__ = __webpack_require__("./components/Books.js");

var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

//Main page





var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      currentTab: "Books"
    };
    _this.tabClick = _this.tabClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Index, [{
    key: "tabClick",
    value: function tabClick(ind) {
      //console.log('Wrapper: Click happened: ' + ind);
      this.setState({
        currentTab: ind
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2347209391" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Books__["a" /* default */], {
        bookData: this.props.bookData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2347209391",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;background-color:black;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRDBCLEFBR2dDLEFBS1IsQUFRTyxBQU1QLEFBSUQsQUFNSyxBQVdOLEFBUU8sQUFTRyxBQUdBLEFBR1YsWUF6RFMsQUFjUixBQXFCWSxBQXVCRixDQXhDVixLQU1LLENBbUJBLEdBaERULEFBeURWLEFBR0EsQ0F4Q0MsUUFuQlUsQUFLRyxJQTBERCxFQXZCQyxBQVFJLElBL0NsQixDQUt1QixDQU1FLElBb0R6QixPQWZxQixXQTFDTCxLQU1VLElBcUNKLE9BMUNyQixNQWVzQixFQU1QLFNBZkksTUFnQlAsT0FXUyxLQVZFLElBaEJ2QixJQW9DVSxhQUNELEVBcEJnQixVQXFCMUIsZUFwQmEsQ0FUTyxXQVVPLFVBUVAsZ0JBUFAsWUFDYiw0Q0FYQSxxQkFrQndCLG1HQUN4QiIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxNb29uXFxEb2N1bWVudHNcXEVkdWNhdGlvblxcRnJvbnRlbmRcXFNlcnZlcnNpZGVcXExhYnNcXExhYjFcXGV4cHJlc3MtYXBpIiwic291cmNlc0NvbnRlbnQiOlsiLy9NYWluIHBhZ2VcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUyIGZyb20gJy4uL2NvbXBvbmVudHMvTWVudTInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEJvb2tzIGZyb20gJy4uL2NvbXBvbmVudHMvQm9va3MnO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IHtjdXJyZW50VGFiOiBcIkJvb2tzXCJ9O1xyXG5cclxuXHRcdFx0dGhpcy50YWJDbGljayA9IHRoaXMudGFiQ2xpY2suYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnZmV0Y2hpbmcgZGF0YS4uLicpO1xyXG5cdCAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWhhcnJ5cG90dGVyJyk7XHJcblx0XHQvL2NvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJUeXBlIG9mIHNlcnZlciByZXNwb25zZTogXCIgKyAodHlwZW9mIGpzb25EYXRhKSk7XHJcblx0XHQvKlxyXG5cdFx0dmFyIGJvb2tzID0gW107XHJcblx0XHRpZiAocmVzICE9IHVuZGVmaW5lZCl7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0ICAgIFx0ICAgIHZhciBpdGVtID0gcmVzLml0ZW1zW2ldO1xyXG5cdCAgICAgICAgXHRpdGVtLnZvbHVtZUluZm8udGl0bGU7XHJcbiAgICAgIFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJVc2VyIGlzIHVuZGVmaW5lZFwiKTtcclxuXHRcdH1cclxuXHRcdC8vZm9yICh2YXIgaSA9IDA7IGkgPCByZXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgLy8gICAgdmFyIGl0ZW0gPSByZXMuaXRlbXNbaV07XHJcblx0ICAgICAgICAvL2l0ZW0udm9sdW1lSW5mby50aXRsZTtcclxuICAgICAgXHQvL30qL1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coJ0RhdGEgaXMgZmV0Y2hlZDogJyArIGpzb25EYXRhLml0ZW1zKTtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0ICAgIGJvb2tEYXRhOiByZXMuaXRlbXNcclxuICBcdFx0fVxyXG5cdH1cclxuXHJcblx0dGFiQ2xpY2soaW5kKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdXcmFwcGVyOiBDbGljayBoYXBwZW5lZDogJyArIGluZCk7XHJcbiAgICBcdHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRUYWI6IGluZH0pO1xyXG4gIFx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0ICA8ZGl2IGNsYXNzTmFtZSA9ICdyb290RGl2Jz5cclxuXHRcdCAgXHRcdDxIZWFkZXI+PC9IZWFkZXI+XHJcblx0XHRcdCAgICA8TWVudTIgY2hvc2VuVGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9IGNsaWNrRXZlbnQ9e3RoaXMudGFiQ2xpY2t9PjwvTWVudTI+XHJcblx0XHRcdCAgICA8Qm9va3MgYm9va0RhdGE9e3RoaXMucHJvcHMuYm9va0RhdGF9PjwvQm9va3M+XHJcblx0XHRcdCAgICBcclxuXHRcdFx0ICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcblx0XHRcdCAgICBcdCoge1xyXG5cdFx0XHQgICAgXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAwO1xyXG5cdFx0ICBcdFx0XHQgXHRwYWRkaW5nOiAwO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICAgIGh0bWwsIGJvZHkge1xyXG5cdFx0XHQgICAgICBcdCBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgIFx0IGJhY2tncm91bmQ6ICMyMDIwMjA7XHJcblx0XHRcdCAgICAgIFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0ICBcdFx0XHQgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0XHQgIFx0XHRcdCBtaW4td2lkdGg6IDIwMHB4O1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGJvZHkge1xyXG5cdFx0XHQgICAgICBcdCBiYWNrZ3JvdW5kLWltYWdlOiBcclxuXHRcdFx0XHRcdFx0dXJsKCcvc3RhdGljL2Jvb2sxLmpwZycpO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgLnJvb3REaXYge1xyXG5cdFx0XHQgICAgICBcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICBcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgLnRpdGxlIHtcclxuXHRcdFx0ICAgIFx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGgxIHtcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGlubGluZTtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdCAgICBcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0ICAgIFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0b3BhY2l0eTogMC41O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdG5hdiB7XHJcblx0XHRcdCAgICBcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIFx0XHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRhIHtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLXRvcDogMTNweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRhOmhvdmVyIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5hY3RpdmUge1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmJvb2tMaXN0IHtcclxuXHRcdFx0ICAgIFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdCAgICBcdFx0b3BhY2l0eTogMC41O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRgfTwvc3R5bGU+XHJcblx0XHQgIDwvZGl2PlxyXG4gIFx0XHQpOy8vZW5kIG9mIHJldHVyblxyXG5cdH0gLy9lbmQgb2YgcmVuZGVyXHJcbn0gLy9lbmQgb2YgY29tcG9uZW50XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */\n/*@ sourceURL=pages\\index.js */"
      })); //end of return
    } //end of render

  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('fetching data...');
                _context.next = 3;
                return fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter');

              case 3:
                res = _context.sent;
                return _context.abrupt("return", {
                  bookData: res.items
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]); //end of component


/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.b5777fafa8e6510dc1b6.hot-update.js.map