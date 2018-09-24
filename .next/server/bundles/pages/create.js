module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\components\\Header.js";



var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Lab 1 - Express app"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
    src: "https://www.gstatic.com/firebasejs/4.10.1/firebase.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Google Books API")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Menu2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\components\\Menu2.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Menu2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu2, _Component);

  function Menu2(props) {
    _classCallCheck(this, Menu2);

    return _possibleConstructorReturn(this, (Menu2.__proto__ || Object.getPrototypeOf(Menu2)).call(this, props));
  }

  _createClass(Menu2, [{
    key: "render",
    value: function render() {
      var menuItemsArray = ['Books', 'Add book', 'Update Book', 'Delete book'];
      var currentTab = this.props.chosenTab;
      var funcClick = this.props.clickEvent;
      var listItems = menuItemsArray.map(function (tab) {
        if (tab == currentTab) {
          if (tab == 'Books') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              className: "active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            }, "Books"));
          } else if (tab == 'Add book') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/create",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              className: "active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            }, "Add book"));
          } else if (tab == 'Update Book') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/edit",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              className: "active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            }, "Edit Book"));
          } else if (tab == 'Delete book') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/delete",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              className: "active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            }, "Delete book"));
          }
        } else if (tab != currentTab) {
          if (tab == 'Books') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            }, "Books"));
          } else if (tab == 'Add book') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/create",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            }, "Add book"));
          } else if (tab == 'Update Book') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/edit",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            }, "Edit book"));
          } else if (tab == 'Delete book') {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
              href: "/delete",
              key: tab,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }, "Delete book"));
          }
        } //end of else

      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, listItems)); //end of return
    } //end of render

  }]);

  return Menu2;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); //end of component


/* harmony default export */ __webpack_exports__["a"] = (Menu2);

/***/ }),

/***/ "./components/fire.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var config = {
  apiKey: "AIzaSyDKKMjqyvzJcmO4c2y2rG_8ZAB6UANPMoc",
  authDomain: "express-app-6eaa3.firebaseapp.com",
  databaseURL: "https://express-app-6eaa3.firebaseio.com",
  projectId: "express-app-6eaa3",
  storageBucket: "express-app-6eaa3.appspot.com",
  messagingSenderId: "121493773188"
}; //var fire = firebase.initializeApp(config);
//const db = firebase.database();

var fire = !__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.apps.length ? __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config) : __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.app();
/* harmony default export */ __webpack_exports__["a"] = (fire);

/***/ }),

/***/ "./pages/create.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu2__ = __webpack_require__("./components/Menu2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fire__ = __webpack_require__("./components/fire.js");
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
      bTitle: "",
      bAuthor: "",
      bDate: "",
      bDesc: ""
    };
    _this.tabClick = _this.tabClick.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleChangeAuthor = _this.handleChangeAuthor.bind(_assertThisInitialized(_this));
    _this.handleChangeDate = _this.handleChangeDate.bind(_assertThisInitialized(_this));
    _this.handleChangeDesc = _this.handleChangeDesc.bind(_assertThisInitialized(_this));
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
    value: function handleClick() {
      //console.log('Wrapper: Click happened: ' + ind);
      //this.setState({currentTab: ind});
      var newBook = {
        key: "",
        title: this.state.bTitle,
        author: this.state.bAuthor,
        date: this.state.bDate,
        desc: this.state.bDesc
      };
      console.log("New added book: " + newBook);
      var bookKey = __WEBPACK_IMPORTED_MODULE_4__components_fire__["a" /* default */].database().ref('books/').push(newBook).key;
      __WEBPACK_IMPORTED_MODULE_4__components_fire__["a" /* default */].database().ref('books/' + bookKey + '/key').set(bookKey);
    }
  }, {
    key: "handleChangeAuthor",
    value: function handleChangeAuthor(event) {
      this.setState({
        bAuthor: event.target.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        bTitle: event.target.value
      });
    }
  }, {
    key: "handleChangeDate",
    value: function handleChangeDate(event) {
      this.setState({
        bDate: event.target.value
      });
    }
  }, {
    key: "handleChangeDesc",
    value: function handleChangeDesc(event) {
      this.setState({
        bDesc: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-3488295494" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-3488295494" + " " + "book"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "form_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-3488295494"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-3488295494" + " " + "form"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "Book title",
        value: this.state.bTitle,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "Book author",
        value: this.state.bAuthor,
        onChange: this.handleChangeAuthor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "Published date",
        value: this.state.bDate,
        onChange: this.handleChangeDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        id: "bdesc",
        placeholder: "Description",
        rows: "7",
        value: this.state.bDesc,
        onChange: this.handleChangeDesc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3488295494"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-3488295494"
      }, " Add book "))), "//end of form content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3488295494",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:30px;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 20px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}#form_content{padding:20px;}input{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;max-width:500px;margin:5px auto;}textarea{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;margin:5px auto;max-width:500px;}.form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button{color:black;border-radius:5px;font-size:16px;line-height:100%;padding:5px 10px 5px 10px;width:8em;margin:5px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjcmVhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUUwQixBQUdnQyxBQUtSLEFBUU8sQUFNUCxBQUlELEFBTUssQUFXTixBQVNPLEFBU0csQUFHQSxBQUdWLEFBVVcsQUFTSixBQUdULEFBR0MsQUFTQSxBQVNELEFBS0EsWUExR1csQUFjUixBQXFCWSxBQXdCZCxBQWdESyxDQXpGSCxBQStEakIsQUFHNEIsQUFTQSxLQXJFTixDQW9CQSxBQWtDbkIsR0FuRlUsQUEwRFYsQUFHQSxDQXpDQyxBQTZDYSxBQVNELE9BdUNDLENBaEhILEFBS0csSUFxRUQsRUFsQ0MsQUFTSSxJQWhEbEIsQ0FLdUIsQ0FNRSxFQXFHVCxFQXRDYSxPQXpCUixRQWdFSSxHQTNHVCxLQU1VLEdBNEVkLEFBU0EsQ0EvQ1UsQUF1REYsQ0E5QlQsTUFwRVYsSUFxRWtCLEVBdERJLENBNEZkLENBdEZPLFFBb0NTLENBbkRMLEFBc0dMLE1BdEZGLE9BV1MsR0E0RXpCLEVBdEYyQixJQWhCdkIsSUFxQ1UsYUFDRCxFQXJCZ0IsUUEwRGYsQUFTQSxFQTdDWCxHQXFEcUIsSUE3QlIsR0FhSCxBQVNBLEtBbkVHLENBVE8sR0F1RHBCLEVBYWUsQUFTQSxNQW5FWSxLQWdDSCxLQXhCSixBQW1ETCxBQVNBLGdCQW5FRixBQTJEaEIsQUFTQSxZQW5FRyxxQ0F3RUgsT0FuRkcscUJBa0J3QixDQXdCWixpRUFBTyxPQUNGLGdCQUNHLFVBekJBLFNBMEJwQixVQXpCQSIsImZpbGUiOiJwYWdlc1xcY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcTW9vblxcRG9jdW1lbnRzXFxFZHVjYXRpb25cXEZyb250ZW5kXFxTZXJ2ZXJzaWRlXFxMYWJzXFxMYWIxXFxleHByZXNzLWFwaSIsInNvdXJjZXNDb250ZW50IjpbIi8vTWFpbiBwYWdlXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLi9jb21wb25lbnRzL01lbnUyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBmaXJlIGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZSc7XHJcblxyXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IHtjdXJyZW50VGFiOiBcIkFkZCBib29rXCIsIFxyXG5cdFx0XHRcdFx0XHQgIGJUaXRsZTogXCJcIixcclxuXHRcdFx0XHRcdFx0ICBiQXV0aG9yOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHQgIGJEYXRlOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHQgIGJEZXNjOiBcIlwiXHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMudGFiQ2xpY2sgPSB0aGlzLnRhYkNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5oYW5kbGVDaGFuZ2VBdXRob3IgPSB0aGlzLmhhbmRsZUNoYW5nZUF1dGhvci5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZUNoYW5nZURhdGUgPSB0aGlzLmhhbmRsZUNoYW5nZURhdGUuYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5oYW5kbGVDaGFuZ2VEZXNjID0gdGhpcy5oYW5kbGVDaGFuZ2VEZXNjLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHR0YWJDbGljayhpbmQpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ1dyYXBwZXI6IENsaWNrIGhhcHBlbmVkOiAnICsgaW5kKTtcclxuICAgIFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRhYjogaW5kfSk7XHJcbiAgXHR9XHJcbiAgXHRoYW5kbGVDbGljaygpIHtcclxuICAgIFx0Ly9jb25zb2xlLmxvZygnV3JhcHBlcjogQ2xpY2sgaGFwcGVuZWQ6ICcgKyBpbmQpO1xyXG4gICAgXHQvL3RoaXMuc2V0U3RhdGUoe2N1cnJlbnRUYWI6IGluZH0pO1xyXG4gICAgXHR2YXIgbmV3Qm9vayA9IHtcclxuICAgICAgICAgICAga2V5OiBcIlwiLFxyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5zdGF0ZS5iVGl0bGUsXHJcbiAgICAgICAgICAgIGF1dGhvcjogdGhpcy5zdGF0ZS5iQXV0aG9yLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLnN0YXRlLmJEYXRlLFxyXG4gICAgICAgICAgICBkZXNjOiB0aGlzLnN0YXRlLmJEZXNjXHJcblx0ICAgIH1cclxuXHQgICAgY29uc29sZS5sb2coXCJOZXcgYWRkZWQgYm9vazogXCIgKyBuZXdCb29rKTtcclxuICAgIFxyXG5cdCAgICB2YXIgYm9va0tleSA9IGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycpLnB1c2gobmV3Qm9vaykua2V5O1xyXG5cdCAgICBmaXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nICsgYm9va0tleSArICcva2V5Jykuc2V0KGJvb2tLZXkpO1xyXG4gIFx0fVxyXG4gIFx0aGFuZGxlQ2hhbmdlQXV0aG9yKGV2ZW50KSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2JBdXRob3I6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG5cdH1cclxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7YlRpdGxlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuXHR9XHJcblx0aGFuZGxlQ2hhbmdlRGF0ZShldmVudCkge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtiRGF0ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcblx0fVxyXG5cdGhhbmRsZUNoYW5nZURlc2MoZXZlbnQpIHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7YkRlc2M6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0ICA8ZGl2IGNsYXNzTmFtZSA9ICdyb290RGl2Jz5cclxuXHRcdCAgXHRcdDxIZWFkZXI+PC9IZWFkZXI+XHJcblx0XHRcdCAgICA8TWVudTIgY2hvc2VuVGFiPXt0aGlzLnN0YXRlLmN1cnJlbnRUYWJ9IGNsaWNrRXZlbnQ9e3RoaXMudGFiQ2xpY2t9PjwvTWVudTI+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tcIj5cclxuXHRcdFx0ICAgIFx0PGRpdiBpZD1cImZvcm1fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQm9vayB0aXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmJUaXRsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCb29rIGF1dGhvclwiIHZhbHVlPXt0aGlzLnN0YXRlLmJBdXRob3J9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUF1dGhvcn0vPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQdWJsaXNoZWQgZGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmJEYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VEYXRlfS8+XHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIGlkPVwiYmRlc2NcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCI3XCIgdmFsdWU9e3RoaXMuc3RhdGUuYkRlc2N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURlc2N9PjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT4gQWRkIGJvb2sgPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuIFx0XHRcdFx0XHQ8L2Rpdj4vL2VuZCBvZiBmb3JtIGNvbnRlbnRcclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgXHJcblx0XHRcdCAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQgICAgICAqIHtcclxuXHRcdFx0ICAgIFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogMDtcclxuXHRcdCAgXHRcdFx0IFx0cGFkZGluZzogMDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgICBodG1sLCBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICBcdCBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG5cdFx0XHQgICAgICBcdCB3aWR0aDogMTAwJTtcclxuXHRcdCAgXHRcdFx0IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdFx0ICBcdFx0XHQgbWluLXdpZHRoOiAyMDBweDtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgYmFja2dyb3VuZC1pbWFnZTogXHJcblx0XHRcdFx0XHRcdHVybCgnL3N0YXRpYy9ib29rMS5qcGcnKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC5yb290RGl2IHtcclxuXHRcdFx0ICAgICAgXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC50aXRsZSB7XHJcblx0XHRcdCAgICBcdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRoMSB7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHQgICAgXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdG9wYWNpdHk6IDAuNTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRuYXYge1xyXG5cdFx0XHQgICAgXHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRhIHtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLXRvcDogMTNweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRhOmhvdmVyIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5hY3RpdmUge1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmJvb2tMaXN0IHtcclxuXHRcdFx0ICAgIFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIFx0XHRmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcblx0XHRcdCAgICBcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM7IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmJvb2sge1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHQgICAgXHRcdG9wYWNpdHk6IDAuNztcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxuXHRcdFx0ICAgIFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0LmJvb2sgcCB7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1ib3R0b206IDVweDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQjZm9ybV9jb250ZW50IHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMjBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlucHV0IHtcclxuXHRcdFx0XHRcdFx0IG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdFx0XHRcdCB0cmFuc2l0aW9uOiAuMnMgYWxsIGxpbmVhcjtcclxuXHRcdFx0XHRcdFx0IGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdCBwYWRkaW5nOiA4cHg7XHJcblx0XHRcdFx0XHRcdCB3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0IG1heC13aWR0aDogNTAwcHg7XHJcblx0XHRcdFx0XHRcdCBtYXJnaW46IDVweCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGV4dGFyZWEge1xyXG5cdFx0XHRcdFx0XHQgb3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRcdFx0IHRyYW5zaXRpb246IC4ycyBhbGwgbGluZWFyO1xyXG5cdFx0XHRcdFx0XHQgZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0IHBhZGRpbmc6IDhweDtcclxuXHRcdFx0XHRcdFx0IHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHQgbWFyZ2luOiA1cHggYXV0bztcclxuXHRcdFx0XHRcdFx0IG1heC13aWR0aDogNTAwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQuZm9ybSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnV0dG9uIHtcclxuXHRcdFx0XHRcdFx0IGNvbG9yOiBibGFjaztcclxuXHRcdFx0XHRcdFx0IGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0XHRcdFx0IGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRcdFx0IGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHQgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcblx0XHRcdFx0XHRcdCB3aWR0aDogOGVtO1xyXG5cdFx0XHRcdFx0XHQgbWFyZ2luOiA1cHggYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHRcdCAgICBcdGB9PC9zdHlsZT5cclxuXHRcdCAgPC9kaXY+XHJcbiAgXHRcdCk7Ly9lbmQgb2YgcmV0dXJuXHJcblx0fSAvL2VuZCBvZiByZW5kZXJcclxufSAvL2VuZCBvZiBjb21wb25lbnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTsiXX0= */\n/*@ sourceURL=pages\\create.js */"
      })); //end of return
    } //end of render

  }]);

  return Create;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]); //end of component


/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/create.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=create.js.map