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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Books.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fire__ = __webpack_require__("./components/fire.js");
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\components\\Books.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

//https://books.google.com/
//<img src={require(book.volumeInfo.imageLinks.smallThumbnail)} alt="logo"/>


 //const writeFileP = require("write-file-p");

var Books =
/*#__PURE__*/
function (_Component) {
  _inherits(Books, _Component);

  function Books(props) {
    var _this;

    _classCallCheck(this, Books);

    _this = _possibleConstructorReturn(this, (Books.__proto__ || Object.getPrototypeOf(Books)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "fbCallback", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(snapshot) {
        var that = this;
        var dataArray = [];
        snapshot.forEach(function (child) {
          var bookTemp = child.val();
          dataArray.unshift(bookTemp);
        }); //end of foreach

        that.setState({
          books: dataArray
        });
      }
    });
    _this.state = {
      books: []
    };
    _this.fbCallback = _this.fbCallback.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Books, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      __WEBPACK_IMPORTED_MODULE_2__components_fire__["a" /* default */].database().ref('books/').on('value', this.fbCallback); //end of fire

      /*
      	    this.setState({
      	      books: this.props.bookData
      	    })*/

      /* fire.database().ref('books/').on('value', function(snapshot) {
      var dataArray = [];
      snapshot.forEach( child => {
      			var bookTemp = child.val();
      	dataArray.push(bookTemp);
      })//end of foreach
      console.log("books from db: " + dataArray);
      
      })//end of db.ref*/
    } //end of will mount

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {//var book = this.readTextFile('./static/book.txt');
      //console.log("Book data: " + book);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      __WEBPACK_IMPORTED_MODULE_2__components_fire__["a" /* default */].database().ref('books/').off('value', this.fbCallback);
    }
  }, {
    key: "render",
    value: function render() {
      var bookArray = this.state.books; //console.log("Comp book recieved: " + bookArray);

      var listItems = bookArray.map(function (book) {
        //console.log("Individual book info: " + book.id);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "book",
          key: book.key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, "Title: ", book.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, "Key: ", book.key), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, "Author: ", book.author), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, "Published date: ", book.date), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, "Description: ", book.desc));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bookList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, listItems); //end of return

      /*
      	
         return (
             <div>
                 <p>Here comes books</p>
                 <div>{this.state.books}</div>
             </div>
         );*/
      //end of return
    } //end of render

  }]);

  return Books;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); //end of component


/* harmony default export */ __webpack_exports__["a"] = (Books);

/***/ }),

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
    charset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Lab 1 - Express app"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
    src: "https://www.gstatic.com/firebasejs/4.10.1/firebase.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
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





var bookExist = false;

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
          lineNumber: 62
        },
        className: "jsx-1053610237" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Books__["a" /* default */], {
        bookData: this.props.bookData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1053610237",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 20px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRTBCLEFBR2dDLEFBS1IsQUFRTyxBQU1QLEFBSUQsQUFNSyxBQVdOLEFBUU8sQUFTRyxBQUdBLEFBR1YsQUFVVyxBQVNKLFlBNUVFLEFBY1IsQUFxQlksQUF1QmQsQ0F4Q0UsS0FNSyxDQW1CQSxBQWtDbkIsR0FsRlUsQUF5RFYsQUFHQSxDQXhDQyxBQTRDYSxBQVNELFFBeEVGLEFBS0csSUFvRUQsRUFqQ0MsQUFRSSxJQS9DbEIsQ0FLdUIsQ0FNRSxJQThESSxPQXpCUixXQTFDTCxLQU1VLElBcUNKLENBeUJYLE1BbkVWLElBb0VrQixFQXJESSxFQU1QLFFBbUNTLENBbERMLE1BZ0JQLE9BV1MsS0FWRSxJQWhCdkIsSUFvQ1UsYUFDRCxFQXBCZ0IsVUFxQjFCLE9Bd0JhLFFBNUNBLENBVE8sR0FzRHBCLFFBNUMyQixLQStCSCxLQXZCSixnQkFQUCxZQUNiLDRDQVhBLHFCQWtCd0IsQ0F1QlosaUVBQU8sT0FDRixnQkFDRyxVQXhCcEIsU0F5QkEiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcTW9vblxcRG9jdW1lbnRzXFxFZHVjYXRpb25cXEZyb250ZW5kXFxTZXJ2ZXJzaWRlXFxMYWJzXFxMYWIxXFxleHByZXNzLWFwaSIsInNvdXJjZXNDb250ZW50IjpbIi8vTWFpbiBwYWdlXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLi9jb21wb25lbnRzL01lbnUyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBCb29rcyBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tzJztcclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9maXJlJztcclxuXHJcbnZhciBib29rRXhpc3QgPSBmYWxzZTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSB7Y3VycmVudFRhYjogXCJCb29rc1wifTtcclxuXHJcblx0XHRcdHRoaXMudGFiQ2xpY2sgPSB0aGlzLnRhYkNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2ZldGNoaW5nIGRhdGEuLi4nKTtcclxuXHQgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1oYXJyeXBvdHRlcicpO1xyXG5cdFx0Y29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0dmFyIGJvb2tzID0ganNvbkRhdGEuaXRlbXM7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiQm9va3M6IFwiICsgYm9va3MpO1xyXG5cclxuXHJcblx0XHRcclxuXHRcdGJvb2tzLm1hcChmdW5jdGlvbihib29rKSB7XHJcblxyXG5cdFx0XHRmaXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nKS5vbmNlKCd2YWx1ZScsIGZ1bmN0aW9uKHNuYXBzaG90KSB7XHJcblx0XHRcdFx0bGV0IGRhdGEgPSBzbmFwc2hvdC52YWwoKTtcclxuXHRcdFx0XHRpZiAoZGF0YSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkJvb2tzIGluIHRoZSBkYlwiKTtcclxuXHRcdFx0XHRcdHZhciBuZXdCb29rID0ge1xyXG5cdFx0XHRcdFx0XHRrZXk6IFwiXCIsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiBib29rLnZvbHVtZUluZm8udGl0bGUsXHJcblx0XHRcdFx0XHRcdGF1dGhvcjogYm9vay52b2x1bWVJbmZvLmF1dGhvcnMsXHJcblx0XHRcdFx0XHRcdGRhdGU6IGJvb2sudm9sdW1lSW5mby5wdWJsaXNoZWREYXRlLFxyXG5cdFx0XHRcdFx0XHRkZXNjOiBib29rLnZvbHVtZUluZm8uZGVzY3JpcHRpb25cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciBib29rS2V5ID0gZmlyZS5kYXRhYmFzZSgpLnJlZignYm9va3MvJykucHVzaChuZXdCb29rKS5rZXk7XHJcblx0XHRcdFx0XHRmaXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nICsgYm9va0tleSArICcva2V5Jykuc2V0KGJvb2tLZXkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSkvL2VuZCBvZiBkYi5yZWZcclxuXHRcdFx0XHJcbiAgICAgIFx0fSk7XHJcblxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHQgICAgYm9va0RhdGE6IGpzb25EYXRhLml0ZW1zXHJcbiAgXHRcdH1cclxuXHR9XHJcblxyXG5cdHRhYkNsaWNrKGluZCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnV3JhcHBlcjogQ2xpY2sgaGFwcGVuZWQ6ICcgKyBpbmQpO1xyXG4gICAgXHR0aGlzLnNldFN0YXRlKHtjdXJyZW50VGFiOiBpbmR9KTtcclxuICBcdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdCAgPGRpdiBjbGFzc05hbWUgPSAncm9vdERpdic+XHJcblx0XHQgIFx0XHQ8SGVhZGVyPjwvSGVhZGVyPlxyXG5cdFx0XHQgICAgPE1lbnUyIGNob3NlblRhYj17dGhpcy5zdGF0ZS5jdXJyZW50VGFifSBjbGlja0V2ZW50PXt0aGlzLnRhYkNsaWNrfT48L01lbnUyPlxyXG5cdFx0XHQgICAgPEJvb2tzIGJvb2tEYXRhPXt0aGlzLnByb3BzLmJvb2tEYXRhfT48L0Jvb2tzPlxyXG5cdFx0XHQgICAgXHJcblx0XHRcdCAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQgICAgXHQqIHtcclxuXHRcdFx0ICAgIFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogMDtcclxuXHRcdCAgXHRcdFx0IFx0cGFkZGluZzogMDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgICBodG1sLCBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICBcdCBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG5cdFx0XHQgICAgICBcdCB3aWR0aDogMTAwJTtcclxuXHRcdCAgXHRcdFx0IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdFx0ICBcdFx0XHQgbWluLXdpZHRoOiAyMDBweDtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgYmFja2dyb3VuZC1pbWFnZTogXHJcblx0XHRcdFx0XHRcdHVybCgnL3N0YXRpYy9ib29rMS5qcGcnKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC5yb290RGl2IHtcclxuXHRcdFx0ICAgICAgXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC50aXRsZSB7XHJcblx0XHRcdCAgICBcdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRoMSB7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHQgICAgXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdG9wYWNpdHk6IDAuNTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRuYXYge1xyXG5cdFx0XHQgICAgXHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YSB7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy10b3A6IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1ib3R0b206IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YTpob3ZlciB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYWN0aXZlIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rTGlzdCB7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOyBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjc7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHAge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGB9PC9zdHlsZT5cclxuXHRcdCAgPC9kaXY+XHJcbiAgXHRcdCk7Ly9lbmQgb2YgcmV0dXJuXHJcblx0fSAvL2VuZCBvZiByZW5kZXJcclxufSAvL2VuZCBvZiBjb21wb25lbnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuXHJcblxyXG5cclxuIl19 */\n/*@ sourceURL=pages\\index.js */"
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
                books = jsonData.items; //console.log("Books: " + books);

                books.map(function (book) {
                  __WEBPACK_IMPORTED_MODULE_6__components_fire__["a" /* default */].database().ref('books/').once('value', function (snapshot) {
                    var data = snapshot.val();

                    if (data !== null) {} else {
                      console.log("Books in the db");
                      var newBook = {
                        key: "",
                        title: book.volumeInfo.title,
                        author: book.volumeInfo.authors,
                        date: book.volumeInfo.publishedDate,
                        desc: book.volumeInfo.description
                      };
                      var bookKey = __WEBPACK_IMPORTED_MODULE_6__components_fire__["a" /* default */].database().ref('books/').push(newBook).key;
                      __WEBPACK_IMPORTED_MODULE_6__components_fire__["a" /* default */].database().ref('books/' + bookKey + '/key').set(bookKey);
                    }
                  }); //end of db.ref
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

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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
//# sourceMappingURL=index.js.map