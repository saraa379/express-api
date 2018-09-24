webpackHotUpdate(7,{

/***/ "./pages/delete.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu2__ = __webpack_require__("./components/Menu2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fire__ = __webpack_require__("./components/fire.js");
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\pages\\delete.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

//Main page





var Delete =
/*#__PURE__*/
function (_Component) {
  _inherits(Delete, _Component);

  function Delete(props) {
    var _this;

    _classCallCheck(this, Delete);

    _this = _possibleConstructorReturn(this, (Delete.__proto__ || Object.getPrototypeOf(Delete)).call(this, props));
    _this.state = {
      currentTab: "Delete book",
      dKey: ""
    };
    _this.tabClick = _this.tabClick.bind(_assertThisInitialized(_this));
    _this.handleChangeKey = _this.handleChangeKey.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Delete, [{
    key: "tabClick",
    value: function tabClick(ind) {
      //console.log('Wrapper: Click happened: ' + ind);
      this.setState({
        currentTab: ind
      });
    }
  }, {
    key: "handleChangeKey",
    value: function handleChangeKey(event) {
      this.setState({
        dKey: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-49376804" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-49376804" + " " + "book"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "form_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-49376804"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        action: "/deletebook",
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-49376804"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "Book key",
        value: this.state.dKey,
        onChange: this.handleChangeKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-49376804"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-49376804"
      }, " Delete book "))), "//end of form content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "49376804",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:30px;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}#form_content{padding:20px;}input{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;max-width:500px;margin:5px auto;}textarea{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;margin:5px auto;max-width:500px;}form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button{color:black;border-radius:5px;font-size:16px;line-height:100%;padding:5px 10px 5px 10px;width:8em;margin:3px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkZWxldGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0MwQixBQUdnQyxBQUtSLEFBUU8sQUFNUCxBQUlELEFBTUssQUFXTixBQVNPLEFBU0csQUFHQSxBQUdWLEFBVVcsQUFTSixBQUdULEFBR0MsQUFTQSxBQVNELEFBS0EsWUExR1csQUFjUixBQXFCWSxBQXdCZCxBQWdESyxDQXpGSCxBQStEakIsQUFHNEIsQUFTQSxLQXJFTixDQW9CQSxBQWtDbkIsR0FuRlUsQUEwRFYsQUFHQSxDQXpDQyxBQTZDYSxBQVNELE9BdUNDLENBaEhILEFBS0csSUFxRUQsRUFsQ0MsQUFTSSxJQWhEbEIsQ0FLdUIsQ0FNRSxFQXFHVCxFQXRDUSxPQXpCSCxRQWdFSSxHQTNHVCxLQU1VLEFBK0RmLEdBYUMsQUFTQSxDQS9DVSxBQXVERixNQTdCRCxDQXJFbEIsTUFlc0IsQ0E0RmQsQ0F0Rk8sUUFvQ1MsQ0FuREwsQUFzR0wsTUF0RkYsT0FXUyxHQTRFekIsRUF0RjJCLElBaEJ2QixJQXFDVSxhQUNELEVBckJnQixRQTBEZixBQVNBLEVBN0NYLEVBd0JhLENBNkJRLE9BaEJYLEFBU0EsSUFyQlYsQ0E5Q2EsQ0FUTyxLQW9FTCxBQVNBLE1BbkVZLEtBZ0NILEtBeEJKLEFBbURMLEFBU0EsZ0JBbkVGLEFBMkRoQixBQVNBLFlBbkVHLHFDQXdFSCxPQW5GRyxxQkFrQndCLENBd0JaLGlFQUFPLE9BQ0YsZ0JBQ0csVUF6QkEsU0EwQnBCLFVBekJBIiwiZmlsZSI6InBhZ2VzXFxkZWxldGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxNb29uXFxEb2N1bWVudHNcXEVkdWNhdGlvblxcRnJvbnRlbmRcXFNlcnZlcnNpZGVcXExhYnNcXExhYjFcXGV4cHJlc3MtYXBpIiwic291cmNlc0NvbnRlbnQiOlsiLy9NYWluIHBhZ2VcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUyIGZyb20gJy4uL2NvbXBvbmVudHMvTWVudTInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9maXJlJztcclxuXHJcbmNsYXNzIERlbGV0ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0XHR0aGlzLnN0YXRlID0ge2N1cnJlbnRUYWI6IFwiRGVsZXRlIGJvb2tcIixcclxuXHRcdFx0XHRcdFx0XHRkS2V5OiBcIlwiXHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMudGFiQ2xpY2sgPSB0aGlzLnRhYkNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMuaGFuZGxlQ2hhbmdlS2V5ID0gdGhpcy5oYW5kbGVDaGFuZ2VLZXkuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHRhYkNsaWNrKGluZCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnV3JhcHBlcjogQ2xpY2sgaGFwcGVuZWQ6ICcgKyBpbmQpO1xyXG4gICAgXHR0aGlzLnNldFN0YXRlKHtjdXJyZW50VGFiOiBpbmR9KTtcclxuICBcdH1cclxuICBcdGhhbmRsZUNoYW5nZUtleShldmVudCkge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtkS2V5OiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lID0gJ3Jvb3REaXYnPlxyXG5cdFx0ICBcdFx0PEhlYWRlcj48L0hlYWRlcj5cclxuXHRcdFx0ICAgIDxNZW51MiBjaG9zZW5UYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn0gY2xpY2tFdmVudD17dGhpcy50YWJDbGlja30+PC9NZW51Mj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va1wiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGlkPVwiZm9ybV9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIi9kZWxldGVib29rXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCb29rIGtleVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRLZXl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUtleX0vPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPiBEZWxldGUgYm9vayA8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9mb3JtPlxyXG4gXHRcdFx0XHRcdDwvZGl2Pi8vZW5kIG9mIGZvcm0gY29udGVudFxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICBcclxuXHRcdFx0ICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcblx0XHRcdCAgICAgICoge1xyXG5cdFx0XHQgICAgXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAwO1xyXG5cdFx0ICBcdFx0XHQgXHRwYWRkaW5nOiAwO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICAgIGh0bWwsIGJvZHkge1xyXG5cdFx0XHQgICAgICBcdCBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgIFx0IGJhY2tncm91bmQ6ICMyMDIwMjA7XHJcblx0XHRcdCAgICAgIFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0ICBcdFx0XHQgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0XHQgIFx0XHRcdCBtaW4td2lkdGg6IDIwMHB4O1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGJvZHkge1xyXG5cdFx0XHQgICAgICBcdCBiYWNrZ3JvdW5kLWltYWdlOiBcclxuXHRcdFx0XHRcdFx0dXJsKCcvc3RhdGljL2Jvb2sxLmpwZycpO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgLnJvb3REaXYge1xyXG5cdFx0XHQgICAgICBcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICBcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgLnRpdGxlIHtcclxuXHRcdFx0ICAgIFx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGgxIHtcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGlubGluZTtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdCAgICBcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0ICAgIFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0b3BhY2l0eTogMC41O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdG5hdiB7XHJcblx0XHRcdCAgICBcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIFx0XHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGEge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctdG9wOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGE6aG92ZXIge1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmFjdGl2ZSB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9va0xpc3Qge1xyXG5cdFx0XHQgICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczsgY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9vayB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdCAgICBcdFx0b3BhY2l0eTogMC43O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nOiAyMHB4IDEwcHggMTBweDtcclxuXHRcdFx0ICAgIFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmJvb2sgcCB7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1ib3R0b206IDVweDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQjZm9ybV9jb250ZW50IHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlucHV0IHtcclxuXHRcdFx0XHRcdFx0IG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdFx0XHRcdCB0cmFuc2l0aW9uOiAuMnMgYWxsIGxpbmVhcjtcclxuXHRcdFx0XHRcdFx0IGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdCBwYWRkaW5nOiA4cHg7XHJcblx0XHRcdFx0XHRcdCB3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0IG1heC13aWR0aDogNTAwcHg7XHJcblx0XHRcdFx0XHRcdCBtYXJnaW46IDVweCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGV4dGFyZWEge1xyXG5cdFx0XHRcdFx0XHQgb3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0IHRyYW5zaXRpb246IC4ycyBhbGwgbGluZWFyO1xyXG5cdFx0XHRcdFx0XHQgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0IHBhZGRpbmc6IDhweDtcclxuXHRcdFx0XHRcdFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHQgbWFyZ2luOiA1cHggYXV0bztcclxuXHRcdFx0XHRcdFx0IG1heC13aWR0aDogNTAwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb3JtIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRidXR0b24ge1xyXG5cdFx0XHRcdFx0XHQgY29sb3I6IGJsYWNrO1xyXG5cdFx0XHRcdFx0XHQgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdFx0XHQgZm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHQgbGluZS1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdCBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuXHRcdFx0XHRcdFx0IHdpZHRoOiA4ZW07XHJcblx0XHRcdFx0XHRcdCBtYXJnaW46IDNweCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0ICAgIFx0YH08L3N0eWxlPlxyXG5cdFx0ICA8L2Rpdj5cclxuICBcdFx0KTsvL2VuZCBvZiByZXR1cm5cclxuXHR9IC8vZW5kIG9mIHJlbmRlclxyXG59IC8vZW5kIG9mIGNvbXBvbmVudFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlOyJdfQ== */\n/*@ sourceURL=pages\\delete.js */"
      })); //end of return
    } //end of render

  }]);

  return Delete;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]); //end of component


/* harmony default export */ __webpack_exports__["default"] = (Delete);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/delete")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.0a07342729d4898a8048.hot-update.js.map