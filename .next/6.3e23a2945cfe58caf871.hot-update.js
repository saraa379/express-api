webpackHotUpdate(6,{

/***/ "./pages/create.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu2__ = __webpack_require__("./components/Menu2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\pages\\create.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

//Main page




var Create =
/*#__PURE__*/
function (_Component) {
  _inherits(Create, _Component);

  function Create(props) {
    var _this;

    _classCallCheck(this, Create);

    _this = _possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).call(this, props));
    _this.state = {
      currentTab: "Add book",
      book: {
        id: 0,
        volumeInfo: {
          title: "",
          authors: "",
          publishedDate: "",
          description: ""
        }
      }
    };
    _this.tabClick = _this.tabClick.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleChangeTitle = _this.handleChangeTitle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Create, [{
    key: "tabClick",
    value: function tabClick(ind) {
      //console.log('Wrapper: Click happened: ' + ind);
      this.setState({
        currentTab: ind
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {//console.log('Wrapper: Click happened: ' + ind);
      //this.setState({currentTab: ind});
    }
  }, {
    key: "handleChangeTitle",
    value: function handleChangeTitle() {
      this.setState({
        book: {
          volumeInfo: {
            title: event.target.value
          }
        }
      });
      console.log('Book title is saved in state: ' + this.state.book.volumeInfo.title);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-3488295494" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3488295494" + " " + "book"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "form_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3488295494"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3488295494" + " " + "form"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        id: "btitle",
        placeholder: "Book title",
        value: this.state.book.volumeInfo.title,
        onChange: this.handleChangeTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        id: "bauthor",
        placeholder: "Book author",
        name: "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        id: "bdate",
        placeholder: "Published date",
        name: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        id: "bdesc",
        placeholder: "Description",
        rows: "7",
        name: "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleClick,
        id: "btnAdd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3488295494"
      }, " Add book "))), "//end of form content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3488295494",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:30px;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 20px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}#form_content{padding:20px;}input{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;max-width:500px;margin:5px auto;}textarea{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;margin:5px auto;max-width:500px;}.form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button{color:black;border-radius:5px;font-size:16px;line-height:100%;padding:5px 10px 5px 10px;width:8em;margin:5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjcmVhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEQwQixBQUdnQyxBQUtSLEFBUU8sQUFNUCxBQUlELEFBTUssQUFXTixBQVNPLEFBU0csQUFHQSxBQUdWLEFBVVcsQUFTSixBQUdULEFBR0MsQUFTQSxBQVNELEFBS0EsWUExR1csQUFjUixBQXFCWSxBQXdCZCxBQWdESyxDQXpGSCxBQStEakIsQUFHNEIsQUFTQSxLQXJFTixDQW9CQSxBQWtDbkIsR0FuRlUsQUEwRFYsQUFHQSxDQXpDQyxBQTZDYSxBQVNELE9BdUNDLENBaEhILEFBS0csSUFxRUQsRUFsQ0MsQUFTSSxJQWhEbEIsQ0FLdUIsQ0FNRSxFQXFHVCxFQXRDYSxPQXpCUixRQWdFSSxHQTNHVCxLQU1VLEdBNEVkLEFBU0EsQ0EvQ1UsQUF1REYsQ0E5QlQsTUFwRVYsSUFxRWtCLEVBdERJLENBNEZkLENBdEZPLFFBb0NTLENBbkRMLEFBc0dMLE1BdEZGLE9BV1MsR0E0RXpCLEVBdEYyQixJQWhCdkIsSUFxQ1UsYUFDRCxFQXJCZ0IsUUEwRGYsQUFTQSxFQTdDWCxHQXFEcUIsSUE3QlIsR0FhSCxBQVNBLEtBbkVHLENBVE8sR0F1RHBCLEVBYWUsQUFTQSxNQW5FWSxLQWdDSCxLQXhCSixBQW1ETCxBQVNBLGdCQW5FRixBQTJEaEIsQUFTQSxZQW5FRyxxQ0F3RUgsT0FuRkcscUJBa0J3QixDQXdCWixpRUFBTyxPQUNGLGdCQUNHLFVBekJBLFNBMEJwQixVQXpCQSIsImZpbGUiOiJwYWdlc1xcY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcTW9vblxcRG9jdW1lbnRzXFxFZHVjYXRpb25cXEZyb250ZW5kXFxTZXJ2ZXJzaWRlXFxMYWJzXFxMYWIxXFxleHByZXNzLWFwaSIsInNvdXJjZXNDb250ZW50IjpbIi8vTWFpbiBwYWdlXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLi9jb21wb25lbnRzL01lbnUyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcblxyXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IHtjdXJyZW50VGFiOiBcIkFkZCBib29rXCIsIFxyXG5cdFx0XHRcdFx0XHQgIGJvb2s6IHtpZDogMCxcclxuXHRcdFx0XHRcdFx0ICBcdFx0IHZvbHVtZUluZm86IHtcclxuXHRcdFx0XHRcdFx0ICBcdFx0IFx0dGl0bGU6IFwiXCIsXHJcblx0XHRcdFx0XHRcdCAgXHRcdCBcdGF1dGhvcnM6IFwiXCIsXHJcblx0XHRcdFx0XHRcdCAgXHRcdCBcdHB1Ymxpc2hlZERhdGU6IFwiXCIsXHJcblx0XHRcdFx0XHRcdCAgXHRcdCBcdGRlc2NyaXB0aW9uOiBcIlwiXHJcblx0XHRcdFx0XHRcdCAgXHRcdCB9XHJcblx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLnRhYkNsaWNrID0gdGhpcy50YWJDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZUNoYW5nZVRpdGxlID0gdGhpcy5oYW5kbGVDaGFuZ2VUaXRsZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0dGFiQ2xpY2soaW5kKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdXcmFwcGVyOiBDbGljayBoYXBwZW5lZDogJyArIGluZCk7XHJcbiAgICBcdHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRUYWI6IGluZH0pO1xyXG4gIFx0fVxyXG4gIFx0aGFuZGxlQ2xpY2soKSB7XHJcbiAgICBcdC8vY29uc29sZS5sb2coJ1dyYXBwZXI6IENsaWNrIGhhcHBlbmVkOiAnICsgaW5kKTtcclxuICAgIFx0Ly90aGlzLnNldFN0YXRlKHtjdXJyZW50VGFiOiBpbmR9KTtcclxuICBcdH1cclxuICBcdGhhbmRsZUNoYW5nZVRpdGxlKCkge1xyXG4gICAgXHR0aGlzLnNldFN0YXRlKHtib29rOiB7XHJcblx0XHRcdFx0XHRcdCAgXHRcdCB2b2x1bWVJbmZvOiB7XHJcblx0XHRcdFx0XHRcdCAgXHRcdCBcdHRpdGxlOiBldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFx0XHRcdCAgXHRcdCB9XHJcblx0XHRcdFx0XHRcdCAgXHR9XHJcblx0XHRcdH0pO1xyXG4gICAgXHRjb25zb2xlLmxvZygnQm9vayB0aXRsZSBpcyBzYXZlZCBpbiBzdGF0ZTogJyArIHRoaXMuc3RhdGUuYm9vay52b2x1bWVJbmZvLnRpdGxlKTtcclxuXHJcbiAgXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdCAgPGRpdiBjbGFzc05hbWUgPSAncm9vdERpdic+XHJcblx0XHQgIFx0XHQ8SGVhZGVyPjwvSGVhZGVyPlxyXG5cdFx0XHQgICAgPE1lbnUyIGNob3NlblRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifSBjbGlja0V2ZW50PXt0aGlzLnRhYkNsaWNrfT48L01lbnUyPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJib29rXCI+XHJcblx0XHRcdCAgICBcdDxkaXYgaWQ9XCJmb3JtX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWUgPSBcImZvcm1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJidGl0bGVcIiBwbGFjZWhvbGRlcj1cIkJvb2sgdGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5ib29rLnZvbHVtZUluZm8udGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVRpdGxlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgaWQgPSBcImJhdXRob3JcIiBwbGFjZWhvbGRlcj1cIkJvb2sgYXV0aG9yXCIgbmFtZT1cImF1dGhvclwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGlkID0gXCJiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiUHVibGlzaGVkIGRhdGVcIiBuYW1lPVwiZGF0ZVwiLz5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgaWQ9XCJiZGVzY1wiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjdcIiBuYW1lPVwiZGVzY1wiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBpZD1cImJ0bkFkZFwiPiBBZGQgYm9vayA8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG4gXHRcdFx0XHRcdDwvZGl2Pi8vZW5kIG9mIGZvcm0gY29udGVudFxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICBcclxuXHRcdFx0ICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcblx0XHRcdCAgICAgICoge1xyXG5cdFx0XHQgICAgXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAwO1xyXG5cdFx0ICBcdFx0XHQgXHRwYWRkaW5nOiAwO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICAgIGh0bWwsIGJvZHkge1xyXG5cdFx0XHQgICAgICBcdCBoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgIFx0IGJhY2tncm91bmQ6ICMyMDIwMjA7XHJcblx0XHRcdCAgICAgIFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0ICBcdFx0XHQgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblx0XHQgIFx0XHRcdCBtaW4td2lkdGg6IDIwMHB4O1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIGJvZHkge1xyXG5cdFx0XHQgICAgICBcdCBiYWNrZ3JvdW5kLWltYWdlOiBcclxuXHRcdFx0XHRcdFx0dXJsKCcvc3RhdGljL2Jvb2sxLmpwZycpO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgLnJvb3REaXYge1xyXG5cdFx0XHQgICAgICBcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICBcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgLnRpdGxlIHtcclxuXHRcdFx0ICAgIFx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGgxIHtcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGlubGluZTtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdCAgICBcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0ICAgIFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0b3BhY2l0eTogMC41O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdG5hdiB7XHJcblx0XHRcdCAgICBcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIFx0XHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGEge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctdG9wOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG5cdFx0XHQgICAgXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdGE6aG92ZXIge1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmFjdGl2ZSB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9va0xpc3Qge1xyXG5cdFx0XHQgICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczsgY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9vayB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHRcdCAgICBcdFx0b3BhY2l0eTogMC43O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYm9vayBwIHtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdCNmb3JtX2NvbnRlbnQge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW5wdXQge1xyXG5cdFx0XHRcdFx0XHQgb3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0IHRyYW5zaXRpb246IC4ycyBhbGwgbGluZWFyO1xyXG5cdFx0XHRcdFx0XHQgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0IHBhZGRpbmc6IDhweDtcclxuXHRcdFx0XHRcdFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHQgbWF4LXdpZHRoOiA1MDBweDtcclxuXHRcdFx0XHRcdFx0IG1hcmdpbjogNXB4IGF1dG87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0ZXh0YXJlYSB7XHJcblx0XHRcdFx0XHRcdCBvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdFx0XHQgdHJhbnNpdGlvbjogLjJzIGFsbCBsaW5lYXI7XHJcblx0XHRcdFx0XHRcdCBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHQgcGFkZGluZzogOHB4O1xyXG5cdFx0XHRcdFx0XHQgd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdCBtYXJnaW46IDVweCBhdXRvO1xyXG5cdFx0XHRcdFx0XHQgbWF4LXdpZHRoOiA1MDBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5mb3JtIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0ZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRidXR0b24ge1xyXG5cdFx0XHRcdFx0XHQgY29sb3I6IGJsYWNrO1xyXG5cdFx0XHRcdFx0XHQgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdFx0XHQgZm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHQgbGluZS1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdCBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuXHRcdFx0XHRcdFx0IHdpZHRoOiA4ZW07XHJcblx0XHRcdFx0XHRcdCBtYXJnaW46IDVweCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0ICAgIFx0YH08L3N0eWxlPlxyXG5cdFx0ICA8L2Rpdj5cclxuICBcdFx0KTsvL2VuZCBvZiByZXR1cm5cclxuXHR9IC8vZW5kIG9mIHJlbmRlclxyXG59IC8vZW5kIG9mIGNvbXBvbmVudFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlOyJdfQ== */\n/*@ sourceURL=pages\\create.js */"
      })); //end of return
    } //end of render

  }]);

  return Create;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]); //end of component


/* harmony default export */ __webpack_exports__["default"] = (Create);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/create")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.3e23a2945cfe58caf871.hot-update.js.map