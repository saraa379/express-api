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
          lineNumber: 33
        },
        className: "jsx-120966343" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Books__["a" /* default */], {
        bookData: this.props.bookData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "120966343",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;}.book{background-color:black;opacity:0.5;margin:10px;padding:5px 15px 5px 15px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQzBCLEFBR2dDLEFBS1IsQUFRTyxBQU1QLEFBSUQsQUFNSyxBQVdOLEFBUU8sQUFTRyxBQUdBLEFBR1YsQUFRVyxZQWpFRixBQWNSLEFBcUJZLEFBdUJkLENBeENFLEtBTUssQ0FtQkEsR0FoRFQsQUF5RFYsQUFHQSxDQXhDQyxBQTRDYSxBQU9ELFFBdEVGLEFBS0csSUFrRUQsRUEvQkMsQUFRSSxJQS9DbEIsQ0FLdUIsQ0FNRSxJQTRERSxPQXZCTixXQTFDTCxLQU1VLEdBNERmLENBdkJXLE9BMUNyQixFQWtFa0IsSUFuREksRUFNUCxRQW1DUyxDQWxETCxNQWdCUCxPQVdTLEtBVkUsSUFoQnZCLElBb0NVLGFBQ0QsRUFwQmdCLFVBcUIxQixLQXNCYSxVQTFDQSxDQVRPLENBb0RwQixVQTFDMkIsS0ErQkgsS0F2QkosZ0JBUFAsWUFDYiw0Q0FYQSxxQkFrQndCLENBdUJaLGlFQUFPLE9BQ25CLDBCQXZCQSIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxNb29uXFxEb2N1bWVudHNcXEVkdWNhdGlvblxcRnJvbnRlbmRcXFNlcnZlcnNpZGVcXExhYnNcXExhYjFcXGV4cHJlc3MtYXBpIiwic291cmNlc0NvbnRlbnQiOlsiLy9NYWluIHBhZ2VcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUyIGZyb20gJy4uL2NvbXBvbmVudHMvTWVudTInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEJvb2tzIGZyb20gJy4uL2NvbXBvbmVudHMvQm9va3MnO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IHtjdXJyZW50VGFiOiBcIkJvb2tzXCJ9O1xyXG5cclxuXHRcdFx0dGhpcy50YWJDbGljayA9IHRoaXMudGFiQ2xpY2suYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnZmV0Y2hpbmcgZGF0YS4uLicpO1xyXG5cdCAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWhhcnJ5cG90dGVyJyk7XHJcblx0XHRjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0ICAgIGJvb2tEYXRhOiBqc29uRGF0YS5pdGVtc1xyXG4gIFx0XHR9XHJcblx0fVxyXG5cclxuXHR0YWJDbGljayhpbmQpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ1dyYXBwZXI6IENsaWNrIGhhcHBlbmVkOiAnICsgaW5kKTtcclxuICAgIFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRhYjogaW5kfSk7XHJcbiAgXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lID0gJ3Jvb3REaXYnPlxyXG5cdFx0ICBcdFx0PEhlYWRlcj48L0hlYWRlcj5cclxuXHRcdFx0ICAgIDxNZW51MiBjaG9zZW5UYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn0gY2xpY2tFdmVudD17dGhpcy50YWJDbGlja30+PC9NZW51Mj5cclxuXHRcdFx0ICAgIDxCb29rcyBib29rRGF0YT17dGhpcy5wcm9wcy5ib29rRGF0YX0+PC9Cb29rcz5cclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHRcdFx0ICAgIFx0KiB7XHJcblx0XHRcdCAgICBcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDA7XHJcblx0XHQgIFx0XHRcdCBcdHBhZGRpbmc6IDA7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgICAgaHRtbCwgYm9keSB7XHJcblx0XHRcdCAgICAgIFx0IGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgXHQgYmFja2dyb3VuZDogIzIwMjAyMDtcclxuXHRcdFx0ICAgICAgXHQgd2lkdGg6IDEwMCU7XHJcblx0XHQgIFx0XHRcdCBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRcdCAgXHRcdFx0IG1pbi13aWR0aDogMjAwcHg7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgYm9keSB7XHJcblx0XHRcdCAgICAgIFx0IGJhY2tncm91bmQtaW1hZ2U6IFxyXG5cdFx0XHRcdFx0XHR1cmwoJy9zdGF0aWMvYm9vazEuanBnJyk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICAucm9vdERpdiB7XHJcblx0XHRcdCAgICAgIFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICAudGl0bGUge1xyXG5cdFx0XHQgICAgXHRcdGhlaWdodDogMjAwcHg7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIFx0XHRmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0aDEge1xyXG5cdFx0XHQgICAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogaW5saW5lO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHQgICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0bmF2IHtcclxuXHRcdFx0ICAgIFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGEge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctdG9wOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGE6aG92ZXIge1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmFjdGl2ZSB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9va0xpc3Qge1xyXG5cdFx0XHQgICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczsgY2VudGVyO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjU7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xyXG5cdFx0XHQgICAgXHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0YH08L3N0eWxlPlxyXG5cdFx0ICA8L2Rpdj5cclxuICBcdFx0KTsvL2VuZCBvZiByZXR1cm5cclxuXHR9IC8vZW5kIG9mIHJlbmRlclxyXG59IC8vZW5kIG9mIGNvbXBvbmVudFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */"
      })); //end of return
    } //end of render

  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, jsonData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('fetching data...');
                _context.next = 3;
                return fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter');

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                jsonData = _context.sent;
                return _context.abrupt("return", {
                  bookData: jsonData.items
                });

              case 8:
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
//# sourceMappingURL=4.40bf23e9152140902011.hot-update.js.map