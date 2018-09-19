webpackHotUpdate(4,{

/***/ "./components/fire.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var config = {
  apiKey: "AIzaSyDKKMjqyvzJcmO4c2y2rG_8ZAB6UANPMoc",
  authDomain: "express-app-6eaa3.firebaseapp.com",
  databaseURL: "https://express-app-6eaa3.firebaseio.com",
  projectId: "express-app-6eaa3",
  storageBucket: "express-app-6eaa3.appspot.com",
  messagingSenderId: "121493773188"
};
var fire = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config); //const db = firebase.database();

/* unused harmony default export */ var _unused_webpack_default_export = (fire);
/*
import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKKMjqyvzJcmO4c2y2rG_8ZAB6UANPMoc",
    authDomain: "express-app-6eaa3.firebaseapp.com",
    databaseURL: "https://express-app-6eaa3.firebaseio.com",
    projectId: "express-app-6eaa3",
    storageBucket: "express-app-6eaa3.appspot.com",
    messagingSenderId: "121493773188"
  };
  var fire = firebase.initializeApp(config);
  //const db = firebase.database();
export default fire;*/

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_fire__ = __webpack_require__("./components/fire.js");

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
          lineNumber: 71
        },
        className: "jsx-1053610237" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Books__["a" /* default */], {
        bookData: this.props.bookData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1053610237",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 20px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRTBCLEFBR2dDLEFBS1IsQUFRTyxBQU1QLEFBSUQsQUFNSyxBQVdOLEFBUU8sQUFTRyxBQUdBLEFBR1YsQUFVVyxBQVNKLFlBNUVFLEFBY1IsQUFxQlksQUF1QmQsQ0F4Q0UsS0FNSyxDQW1CQSxBQWtDbkIsR0FsRlUsQUF5RFYsQUFHQSxDQXhDQyxBQTRDYSxBQVNELFFBeEVGLEFBS0csSUFvRUQsRUFqQ0MsQUFRSSxJQS9DbEIsQ0FLdUIsQ0FNRSxJQThESSxPQXpCUixXQTFDTCxLQU1VLElBcUNKLENBeUJYLE1BbkVWLElBb0VrQixFQXJESSxFQU1QLFFBbUNTLENBbERMLE1BZ0JQLE9BV1MsS0FWRSxJQWhCdkIsSUFvQ1UsYUFDRCxFQXBCZ0IsVUFxQjFCLE9Bd0JhLFFBNUNBLENBVE8sR0FzRHBCLFFBNUMyQixLQStCSCxLQXZCSixnQkFQUCxZQUNiLDRDQVhBLHFCQWtCd0IsQ0F1QlosaUVBQU8sT0FDRixnQkFDRyxVQXhCcEIsU0F5QkEiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcTW9vblxcRG9jdW1lbnRzXFxFZHVjYXRpb25cXEZyb250ZW5kXFxTZXJ2ZXJzaWRlXFxMYWJzXFxMYWIxXFxleHByZXNzLWFwaSIsInNvdXJjZXNDb250ZW50IjpbIi8vTWFpbiBwYWdlXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLi9jb21wb25lbnRzL01lbnUyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBCb29rcyBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tzJztcclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9maXJlJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSB7Y3VycmVudFRhYjogXCJCb29rc1wifTtcclxuXHJcblx0XHRcdHRoaXMudGFiQ2xpY2sgPSB0aGlzLnRhYkNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2ZldGNoaW5nIGRhdGEuLi4nKTtcclxuXHQgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1oYXJyeXBvdHRlcicpO1xyXG5cdFx0Y29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0dmFyIGJvb2tzID0ganNvbkRhdGEuaXRlbXM7XHJcblx0XHRcclxuXHRcdGJvb2tzLm1hcChmdW5jdGlvbihib29rKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgbmV3Qm9vayA9IHtcclxuXHRcdFx0XHRrZXk6IFwiXCIsXHJcblx0XHRcdFx0aWQ6IGJvb2suaWQsXHJcblx0XHRcdFx0dGl0bGU6IGJvb2sudm9sdW1lSW5mby50aXRsZSxcclxuXHRcdFx0XHRhdXRob3I6IGJvb2sudm9sdW1lSW5mby5hdXRob3JzLFxyXG5cdFx0XHRcdGRhdGU6IGJvb2sudm9sdW1lSW5mby5wdWJsaXNoZWREYXRlLFxyXG5cdFx0XHRcdGRlc2M6IGJvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvblxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQm9va3M6IFwiICsgYm9vay5pZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQm9va3M6IFwiICsgYm9vay52b2x1bWVJbmZvLmF1dGhvcnMpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkJvb2tzOiBcIiArIGJvb2sudm9sdW1lSW5mby5wdWJsaXNoZWREYXRlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJCb29rczogXCIgKyBib29rLnZvbHVtZUluZm8udGl0bGUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkJvb2tzOiBcIiArIGJvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvbik7XHJcblxyXG4vKlxyXG5cdFx0XHQvL0NoZWNrcyBpZiB1c2VyIGFscmVhZHkgZXhpc3QgaW4gdGhlIERCXHJcblx0XHRcdGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycpLm9uY2UoJ3ZhbHVlJywgZnVuY3Rpb24oc25hcHNob3QpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG5cdFx0XHRcdGZvcihsZXQgY2hpbGQgaW4gZGF0YSl7XHJcblx0XHRcdFx0XHRsZXQgciA9IGRhdGFbY2hpbGRdO1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlbWFpbDogXCIgKyByLmVtYWlsKTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJ1c2VyTy5lbWFpbDogXCIgKyB1c2VyTy5lbWFpbCk7XHJcblx0XHRcdFx0XHRpZihyLmlkID09IGJvb2suaWQpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkJvb2sgZXhpc3QgaW4gZGJcIik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgYm9va0tleSA9IGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycpLnB1c2gobmV3Qm9vaykua2V5O1xyXG5cdFx0XHRcdFx0XHRmaXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nICsgYm9va0tleSArICcva2V5Jykuc2V0KGJvb2tLZXkpO1xyXG5cdFx0XHRcdFx0fS8vZW5kIG9mIGlmIGVsc2VcclxuXHRcdFx0XHR9Ly9lbmQgb2YgZm9yXHJcblx0XHRcdH0pLy9lbmQgb2YgZGIucmVmXHJcbiovXHJcblx0XHRcdC8vdmFyIGJvb2tLZXkgPSBmaXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nKS5wdXNoKG5ld0Jvb2spLmtleTtcclxuXHRcdFx0Ly9maXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nICsgYm9va0tleSArICcva2V5Jykuc2V0KGJvb2tLZXkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIFx0fSk7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0ICAgIGJvb2tEYXRhOiBqc29uRGF0YS5pdGVtc1xyXG4gIFx0XHR9XHJcblx0fVxyXG5cclxuXHR0YWJDbGljayhpbmQpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ1dyYXBwZXI6IENsaWNrIGhhcHBlbmVkOiAnICsgaW5kKTtcclxuICAgIFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRhYjogaW5kfSk7XHJcbiAgXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lID0gJ3Jvb3REaXYnPlxyXG5cdFx0ICBcdFx0PEhlYWRlcj48L0hlYWRlcj5cclxuXHRcdFx0ICAgIDxNZW51MiBjaG9zZW5UYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn0gY2xpY2tFdmVudD17dGhpcy50YWJDbGlja30+PC9NZW51Mj5cclxuXHRcdFx0ICAgIDxCb29rcyBib29rRGF0YT17dGhpcy5wcm9wcy5ib29rRGF0YX0+PC9Cb29rcz5cclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHRcdFx0ICAgIFx0KiB7XHJcblx0XHRcdCAgICBcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDA7XHJcblx0XHQgIFx0XHRcdCBcdHBhZGRpbmc6IDA7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgICAgaHRtbCwgYm9keSB7XHJcblx0XHRcdCAgICAgIFx0IGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgXHQgYmFja2dyb3VuZDogIzIwMjAyMDtcclxuXHRcdFx0ICAgICAgXHQgd2lkdGg6IDEwMCU7XHJcblx0XHQgIFx0XHRcdCBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRcdCAgXHRcdFx0IG1pbi13aWR0aDogMjAwcHg7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgYm9keSB7XHJcblx0XHRcdCAgICAgIFx0IGJhY2tncm91bmQtaW1hZ2U6IFxyXG5cdFx0XHRcdFx0XHR1cmwoJy9zdGF0aWMvYm9vazEuanBnJyk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICAucm9vdERpdiB7XHJcblx0XHRcdCAgICAgIFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICAudGl0bGUge1xyXG5cdFx0XHQgICAgXHRcdGhlaWdodDogMjAwcHg7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIFx0XHRmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0aDEge1xyXG5cdFx0XHQgICAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogaW5saW5lO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHQgICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0bmF2IHtcclxuXHRcdFx0ICAgIFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGEge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctdG9wOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGE6aG92ZXIge1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmFjdGl2ZSB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9va0xpc3Qge1xyXG5cdFx0XHQgICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczsgY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9vayB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdCAgICBcdFx0b3BhY2l0eTogMC43O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9vayBwIHtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRgfTwvc3R5bGU+XHJcblx0XHQgIDwvZGl2PlxyXG4gIFx0XHQpOy8vZW5kIG9mIHJldHVyblxyXG5cdH0gLy9lbmQgb2YgcmVuZGVyXHJcbn0gLy9lbmQgb2YgY29tcG9uZW50XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */\n/*@ sourceURL=pages\\index.js */"
      })); //end of return
    } //end of render

  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, jsonData, books;
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
                books = jsonData.items;
                books.map(function (book) {
                  var newBook = {
                    key: "",
                    id: book.id,
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors,
                    date: book.volumeInfo.publishedDate,
                    desc: book.volumeInfo.description
                  };
                  console.log("Books: " + book.id);
                  console.log("Books: " + book.volumeInfo.authors);
                  console.log("Books: " + book.volumeInfo.publishedDate);
                  console.log("Books: " + book.volumeInfo.title);
                  console.log("Books: " + book.volumeInfo.description);
                  /*
                  			//Checks if user already exist in the DB
                  			fire.database().ref('books/').once('value', function(snapshot) {
                  				let data = snapshot.val();
                  				for(let child in data){
                  					let r = data[child];
                  					//console.log("remail: " + r.email);
                  					//console.log("userO.email: " + userO.email);
                  					if(r.id == book.id){
                  						console.log("Book exist in db");
                  					} else {
                  						var bookKey = fire.database().ref('books/').push(newBook).key;
                  						fire.database().ref('books/' + bookKey + '/key').set(bookKey);
                  					}//end of if else
                  				}//end of for
                  			})//end of db.ref
                  */
                  //var bookKey = fire.database().ref('books/').push(newBook).key;
                  //fire.database().ref('books/' + bookKey + '/key').set(bookKey);
                });
                return _context.abrupt("return", {
                  bookData: jsonData.items
                });

              case 10:
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
//# sourceMappingURL=4.8f2b838737478ec7807e.hot-update.js.map