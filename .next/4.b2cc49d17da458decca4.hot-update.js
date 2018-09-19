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
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 20px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRTBCLEFBR2dDLEFBS1IsQUFRTyxBQU1QLEFBSUQsQUFNSyxBQVdOLEFBUU8sQUFTRyxBQUdBLEFBR1YsQUFVVyxBQVNKLFlBNUVFLEFBY1IsQUFxQlksQUF1QmQsQ0F4Q0UsS0FNSyxDQW1CQSxBQWtDbkIsR0FsRlUsQUF5RFYsQUFHQSxDQXhDQyxBQTRDYSxBQVNELFFBeEVGLEFBS0csSUFvRUQsRUFqQ0MsQUFRSSxJQS9DbEIsQ0FLdUIsQ0FNRSxJQThESSxPQXpCUixXQTFDTCxLQU1VLElBcUNKLENBeUJYLE1BbkVWLElBb0VrQixFQXJESSxFQU1QLFFBbUNTLENBbERMLE1BZ0JQLE9BV1MsS0FWRSxJQWhCdkIsSUFvQ1UsYUFDRCxFQXBCZ0IsVUFxQjFCLE9Bd0JhLFFBNUNBLENBVE8sR0FzRHBCLFFBNUMyQixLQStCSCxLQXZCSixnQkFQUCxZQUNiLDRDQVhBLHFCQWtCd0IsQ0F1QlosaUVBQU8sT0FDRixnQkFDRyxVQXhCcEIsU0F5QkEiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcTW9vblxcRG9jdW1lbnRzXFxFZHVjYXRpb25cXEZyb250ZW5kXFxTZXJ2ZXJzaWRlXFxMYWJzXFxMYWIxXFxleHByZXNzLWFwaSIsInNvdXJjZXNDb250ZW50IjpbIi8vTWFpbiBwYWdlXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLi9jb21wb25lbnRzL01lbnUyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBCb29rcyBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tzJztcclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9maXJlJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSB7Y3VycmVudFRhYjogXCJCb29rc1wifTtcclxuXHJcblx0XHRcdHRoaXMudGFiQ2xpY2sgPSB0aGlzLnRhYkNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2ZldGNoaW5nIGRhdGEuLi4nKTtcclxuXHQgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1oYXJyeXBvdHRlcicpO1xyXG5cdFx0Y29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0dmFyIGJvb2tzID0ganNvbkRhdGEuaXRlbXM7XHJcblx0XHRcclxuXHRcdGJvb2tzLm1hcChmdW5jdGlvbihib29rKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgbmV3Qm9vayA9IHtcclxuXHRcdFx0XHRrZXk6IFwiXCIsXHJcblx0XHRcdFx0aWQ6IGJvb2suaWQsXHJcblx0XHRcdFx0dGl0bGU6IGJvb2sudm9sdW1lSW5mby50aXRsZSxcclxuXHRcdFx0XHRhdXRob3I6IGJvb2sudm9sdW1lSW5mby5hdXRob3JzLFxyXG5cdFx0XHRcdGRhdGU6IGJvb2sudm9sdW1lSW5mby5wdWJsaXNoZWREYXRlLFxyXG5cdFx0XHRcdGRlc2M6IGJvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvblxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQm9va3M6IFwiICsgYm9vay5pZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiQm9va3M6IFwiICsgYm9vay52b2x1bWVJbmZvLmF1dGhvcnMpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkJvb2tzOiBcIiArIGJvb2sudm9sdW1lSW5mby5wdWJsaXNoZWREYXRlKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJCb29rczogXCIgKyBib29rLnZvbHVtZUluZm8udGl0bGUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIkJvb2tzOiBcIiArIGJvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvbik7XHJcblxyXG4vKlxyXG5cdFx0XHQvL0NoZWNrcyBpZiB1c2VyIGFscmVhZHkgZXhpc3QgaW4gdGhlIERCXHJcblx0XHRcdGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycpLm9uY2UoJ3ZhbHVlJywgZnVuY3Rpb24oc25hcHNob3QpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG5cdFx0XHRcdGZvcihsZXQgY2hpbGQgaW4gZGF0YSl7XHJcblx0XHRcdFx0XHRsZXQgciA9IGRhdGFbY2hpbGRdO1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcInJlbWFpbDogXCIgKyByLmVtYWlsKTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coXCJ1c2VyTy5lbWFpbDogXCIgKyB1c2VyTy5lbWFpbCk7XHJcblx0XHRcdFx0XHRpZihyLmlkID09IGJvb2suaWQpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkJvb2sgZXhpc3QgaW4gZGJcIik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgYm9va0tleSA9IGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycpLnB1c2gobmV3Qm9vaykua2V5O1xyXG5cdFx0XHRcdFx0XHRmaXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nICsgYm9va0tleSArICcva2V5Jykuc2V0KGJvb2tLZXkpO1xyXG5cdFx0XHRcdFx0fS8vZW5kIG9mIGlmIGVsc2VcclxuXHRcdFx0XHR9Ly9lbmQgb2YgZm9yXHJcblx0XHRcdH0pLy9lbmQgb2YgZGIucmVmXHJcbiovXHJcblx0XHRcdHZhciBib29rS2V5ID0gZmlyZS5kYXRhYmFzZSgpLnJlZignYm9va3MvJykucHVzaChuZXdCb29rKS5rZXk7XHJcblx0XHRcdGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycgKyBib29rS2V5ICsgJy9rZXknKS5zZXQoYm9va0tleSk7XHJcbiAgICAgICAgICBcclxuICAgICAgXHR9KTtcclxuXHRcdHJldHVybiB7XHJcblx0XHQgICAgYm9va0RhdGE6IGpzb25EYXRhLml0ZW1zXHJcbiAgXHRcdH1cclxuXHR9XHJcblxyXG5cdHRhYkNsaWNrKGluZCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnV3JhcHBlcjogQ2xpY2sgaGFwcGVuZWQ6ICcgKyBpbmQpO1xyXG4gICAgXHR0aGlzLnNldFN0YXRlKHtjdXJyZW50VGFiOiBpbmR9KTtcclxuICBcdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdCAgPGRpdiBjbGFzc05hbWUgPSAncm9vdERpdic+XHJcblx0XHQgIFx0XHQ8SGVhZGVyPjwvSGVhZGVyPlxyXG5cdFx0XHQgICAgPE1lbnUyIGNob3NlblRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifSBjbGlja0V2ZW50PXt0aGlzLnRhYkNsaWNrfT48L01lbnUyPlxyXG5cdFx0XHQgICAgPEJvb2tzIGJvb2tEYXRhPXt0aGlzLnByb3BzLmJvb2tEYXRhfT48L0Jvb2tzPlxyXG5cdFx0XHQgICAgXHJcblx0XHRcdCAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQgICAgXHQqIHtcclxuXHRcdFx0ICAgIFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogMDtcclxuXHRcdCAgXHRcdFx0IFx0cGFkZGluZzogMDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgICBodG1sLCBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICBcdCBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG5cdFx0XHQgICAgICBcdCB3aWR0aDogMTAwJTtcclxuXHRcdCAgXHRcdFx0IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdFx0ICBcdFx0XHQgbWluLXdpZHRoOiAyMDBweDtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgYmFja2dyb3VuZC1pbWFnZTogXHJcblx0XHRcdFx0XHRcdHVybCgnL3N0YXRpYy9ib29rMS5qcGcnKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC5yb290RGl2IHtcclxuXHRcdFx0ICAgICAgXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC50aXRsZSB7XHJcblx0XHRcdCAgICBcdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRoMSB7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHQgICAgXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdG9wYWNpdHk6IDAuNTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRuYXYge1xyXG5cdFx0XHQgICAgXHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YSB7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy10b3A6IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1ib3R0b206IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YTpob3ZlciB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYWN0aXZlIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rTGlzdCB7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOyBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjc7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHAge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGB9PC9zdHlsZT5cclxuXHRcdCAgPC9kaXY+XHJcbiAgXHRcdCk7Ly9lbmQgb2YgcmV0dXJuXHJcblx0fSAvL2VuZCBvZiByZW5kZXJcclxufSAvL2VuZCBvZiBjb21wb25lbnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuXHJcblxyXG5cclxuIl19 */\n/*@ sourceURL=pages\\index.js */"
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

                  var bookKey = __WEBPACK_IMPORTED_MODULE_6__components_fire__["a" /* default */].database().ref('books/').push(newBook).key;
                  __WEBPACK_IMPORTED_MODULE_6__components_fire__["a" /* default */].database().ref('books/' + bookKey + '/key').set(bookKey);
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
//# sourceMappingURL=4.b2cc49d17da458decca4.hot-update.js.map