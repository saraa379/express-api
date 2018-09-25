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
/* unused harmony default export */ var _unused_webpack_default_export = (fire);

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
    _this.handleChangeDesc = _this.handleChangeDesc.bind(_assertThisInitialized(_this)); //this.update = this.update.bind(this);
    //this.checkStatus = this.checkStatus.bind(this);

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
    /*
    function update(data) {
     return fetch('/addClicked', {
       method: 'post',
       body: JSON.stringify(data),
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
       .then(checkStatus)
       .then(()=>console.log('updated!!!'))
    }
    function checkStatus(response) {
     if (response.status >= 200 && response.status < 300) {
       return response
     } else {
       var error = new Error(response.statusText)
       error.response = response
       throw error
     }
    }*/

  }, {
    key: "handleClick",
    value: function handleClick() {
      var book = {
        title: this.state.bTitle,
        author: this.state.bAuthor,
        date: this.state.bDate,
        desc: this.state.bDesc
      };
      fetch('/addClicked', {
        method: 'post',
        body: JSON.stringify(book),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log('Fetch successful');
      }).catch(function (error) {
        console.log(error);
      });
      /*
      	     fetch('/addClicked', {method: 'POST', body: JSON.stringify(book), headers: new Headers({ "Content-Type": "application/json" })})
      		  .then(res => res.json())
      		  .then(jsonRes => {
      
      		    console.log("SUCCESS"); // gives 5
      
      		  })
      		}*/

      /*
      	     fetch('/addClicked', {method: 'POST', body: JSON.stringify(book), headers: new Headers({ "Content-Type": "application/json" })})
      		    .then(function(response) {
      		      if(response.ok) {
      		        console.log('click was recorded');
      		        return;
      		      }
      		    })
      		    .catch(function(error) {
      		      console.log(error);
      		    });*/

      /*
      fetch('/addClicked', {method: 'POST', body: JSON.stringify(book)})
      .then(resp => {return resp.json()})
      .then(json => {if( json.result === 'success' ){
      console.log('Click was recorded');
      return "success";
      }})
      .catch(function(error) {
      console.log(error);
      });   
      */

      /*
      	     fetch('/addClicked', {method: 'POST', body: JSON.stringify(book), headers: { 'Content-Type': 'application/json' }})
      	    .then(function(response) {
      	      if(response.ok) {
      	        console.log('Click was recorded');
      	        return;
      	      }
      	      throw new Error('Request failed.');
      	    })
      	    .catch(function(error) {
      	      console.log(error);
      	    });*/

      /*
      fetch(`http://localhost:3000/travel/${this.state.id}`, {
            method: 'put',
            body:    JSON.stringify(tripObject),
            headers: { 'Content-Type': 'application/json' },
        })
       	var newBook = {
               key: "",
               title: this.state.bTitle,
               author: this.state.bAuthor,
               date: this.state.bDate,
               desc: this.state.bDesc
        }
        console.log("New added book: " + newBook);
       
        var bookKey = fire.database().ref('books/').push(newBook).key;
        fire.database().ref('books/' + bookKey + '/key').set(bookKey);
        let message = "The book is successfully added";	    
        return message;
        */
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
          lineNumber: 159
        },
        className: "jsx-2465911525" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: "jsx-2465911525" + " " + "book"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "form_content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        className: "jsx-2465911525"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-2465911525" + " " + "form"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "Book title",
        value: this.state.bTitle,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        className: "jsx-2465911525"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "Book author",
        value: this.state.bAuthor,
        onChange: this.handleChangeAuthor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: "jsx-2465911525"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "Published date",
        value: this.state.bDate,
        onChange: this.handleChangeDate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: "jsx-2465911525"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        id: "bdesc",
        placeholder: "Description",
        rows: "7",
        value: this.state.bDesc,
        onChange: this.handleChangeDesc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: "jsx-2465911525"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-2465911525"
      }, " Add book "))), "//end of form content"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2465911525",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:30px;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 20px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}#form_content{padding:20px;}input{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;max-width:500px;margin:5px auto;}textarea{outline:none;-webkit-transition:.2s all linear;transition:.2s all linear;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:8px;width:100%;margin:5px auto;max-width:500px;}.form{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}button{color:black;border-radius:5px;font-size:16px;line-height:100%;padding:5px 10px 5px 10px;width:8em;margin:5px auto;}.visible{display:block;}.invincible{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjcmVhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0swQixBQUdnQyxBQUtSLEFBUU8sQUFNUCxBQUlELEFBTUssQUFXTixBQVNPLEFBU0csQUFHQSxBQUdWLEFBVVcsQUFTSixBQUdULEFBR0MsQUFTQSxBQVNELEFBS0EsQUFTQyxBQUdELFlBdEhXLEFBY1IsQUFxQlksQUF3QmQsQUFnREssQ0F6RkgsQUErRGpCLEFBRzRCLEFBU0EsQUEwQjVCLENBSEEsSUE1RnNCLENBb0JBLEFBa0NuQixHQW5GVSxBQTBEVixBQUdBLENBekNDLEFBNkNhLEFBU0QsT0F1Q0MsQ0FoSEgsQUFLRyxJQXFFRCxFQWxDQyxBQVNJLElBaERsQixDQUt1QixDQU1FLEVBcUdULEVBdENhLE9BekJSLFFBZ0VJLEdBM0dULEtBTVUsR0E0RWQsQUFTQSxDQS9DVSxBQXVERixDQTlCVCxNQXBFVixJQXFFa0IsRUF0REksQ0E0RmQsQ0F0Rk8sUUFvQ1MsQ0FuREwsQUFzR0wsTUF0RkYsT0FXUyxHQTRFekIsRUF0RjJCLElBaEJ2QixJQXFDVSxhQUNELEVBckJnQixRQTBEZixBQVNBLEVBN0NYLEdBcURxQixJQTdCUixHQWFILEFBU0EsS0FuRUcsQ0FUTyxHQXVEcEIsRUFhZSxBQVNBLE1BbkVZLEtBZ0NILEtBeEJKLEFBbURMLEFBU0EsZ0JBbkVGLEFBMkRoQixBQVNBLFlBbkVHLHFDQXdFSCxPQW5GRyxxQkFrQndCLENBd0JaLGlFQUFPLE9BQ0YsZ0JBQ0csVUF6QkEsU0EwQnBCLFVBekJBIiwiZmlsZSI6InBhZ2VzXFxjcmVhdGUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxNb29uXFxEb2N1bWVudHNcXEVkdWNhdGlvblxcRnJvbnRlbmRcXFNlcnZlcnNpZGVcXExhYnNcXExhYjFcXGV4cHJlc3MtYXBpIiwic291cmNlc0NvbnRlbnQiOlsiLy9NYWluIHBhZ2VcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUyIGZyb20gJy4uL2NvbXBvbmVudHMvTWVudTInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9maXJlJztcclxuXHJcbmNsYXNzIENyZWF0ZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0XHR0aGlzLnN0YXRlID0ge2N1cnJlbnRUYWI6IFwiQWRkIGJvb2tcIiwgXHJcblx0XHRcdFx0XHRcdCAgYlRpdGxlOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHQgIGJBdXRob3I6IFwiXCIsXHJcblx0XHRcdFx0XHRcdCAgYkRhdGU6IFwiXCIsXHJcblx0XHRcdFx0XHRcdCAgYkRlc2M6IFwiXCJcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy50YWJDbGljayA9IHRoaXMudGFiQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZUNoYW5nZUF1dGhvciA9IHRoaXMuaGFuZGxlQ2hhbmdlQXV0aG9yLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMuaGFuZGxlQ2hhbmdlRGF0ZSA9IHRoaXMuaGFuZGxlQ2hhbmdlRGF0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZUNoYW5nZURlc2MgPSB0aGlzLmhhbmRsZUNoYW5nZURlc2MuYmluZCh0aGlzKTtcclxuXHRcdFx0Ly90aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vdGhpcy5jaGVja1N0YXR1cyA9IHRoaXMuY2hlY2tTdGF0dXMuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHRhYkNsaWNrKGluZCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygnV3JhcHBlcjogQ2xpY2sgaGFwcGVuZWQ6ICcgKyBpbmQpO1xyXG4gICAgXHR0aGlzLnNldFN0YXRlKHtjdXJyZW50VGFiOiBpbmR9KTtcclxuICBcdH1cclxuICBcdC8qXHJcbiAgXHRmdW5jdGlvbiB1cGRhdGUoZGF0YSkge1xyXG5cdFx0ICByZXR1cm4gZmV0Y2goJy9hZGRDbGlja2VkJywge1xyXG5cdFx0ICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0ICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0ICAgIGhlYWRlcnM6IHtcclxuXHRcdCAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHQgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHQgICAgfVxyXG5cdFx0ICB9KVxyXG5cdFx0ICAgIC50aGVuKGNoZWNrU3RhdHVzKVxyXG5cdFx0ICAgIC50aGVuKCgpPT5jb25zb2xlLmxvZygndXBkYXRlZCEhIScpKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcclxuXHRcdCAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcblx0XHQgICAgcmV0dXJuIHJlc3BvbnNlXHJcblx0XHQgIH0gZWxzZSB7XHJcblx0XHQgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcblx0XHQgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxyXG5cdFx0ICAgIHRocm93IGVycm9yXHJcblx0XHQgIH1cclxuXHR9Ki9cclxuICBcdGhhbmRsZUNsaWNrKCkge1xyXG4gIFx0XHRsZXQgYm9vayA9IHtcclxuXHQgICAgICAgIFx0dGl0bGU6IHRoaXMuc3RhdGUuYlRpdGxlLFxyXG5cdCAgICAgICAgXHRhdXRob3I6IHRoaXMuc3RhdGUuYkF1dGhvcixcclxuXHQgICAgICAgIFx0ZGF0ZTogdGhpcy5zdGF0ZS5iRGF0ZSxcclxuXHQgICAgICAgIFx0ZGVzYzogdGhpcy5zdGF0ZS5iRGVzY1xyXG5cdCAgICB9XHJcblx0ICAgICBcclxuXHRcdGZldGNoKCcvYWRkQ2xpY2tlZCcsIHtcclxuXHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2spLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdGZXRjaCBzdWNjZXNzZnVsJyk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdH0pXHJcbi8qXHJcblx0ICAgICBmZXRjaCgnL2FkZENsaWNrZWQnLCB7bWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2spLCBoZWFkZXJzOiBuZXcgSGVhZGVycyh7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0pfSlcclxuXHRcdCAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQgIC50aGVuKGpzb25SZXMgPT4ge1xyXG5cclxuXHRcdCAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1NcIik7IC8vIGdpdmVzIDVcclxuXHJcblx0XHQgIH0pXHJcblx0XHR9Ki9cclxuLypcclxuXHQgICAgIGZldGNoKCcvYWRkQ2xpY2tlZCcsIHttZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9vayksIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSl9KVxyXG5cdFx0ICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHQgICAgICBpZihyZXNwb25zZS5vaykge1xyXG5cdFx0ICAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgd2FzIHJlY29yZGVkJyk7XHJcblx0XHQgICAgICAgIHJldHVybjtcclxuXHRcdCAgICAgIH1cclxuXHRcdCAgICB9KVxyXG5cdFx0ICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0ICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0ICAgIH0pOyovXHJcblxyXG5cdFx0ICAgIC8qXHJcblx0ICAgICBmZXRjaCgnL2FkZENsaWNrZWQnLCB7bWV0aG9kOiAnUE9TVCcsIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2spfSlcclxuXHRcdCAgLnRoZW4ocmVzcCA9PiB7cmV0dXJuIHJlc3AuanNvbigpfSlcclxuXHRcdCAgLnRoZW4oanNvbiA9PiB7aWYoIGpzb24ucmVzdWx0ID09PSAnc3VjY2VzcycgKXtcclxuXHRcdCAgXHRjb25zb2xlLmxvZygnQ2xpY2sgd2FzIHJlY29yZGVkJyk7XHJcblx0XHQgIFx0cmV0dXJuIFwic3VjY2Vzc1wiO1xyXG5cdFx0ICB9fSlcclxuXHRcdCAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHQgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0ICB9KTsgICBcclxuXHRcdCAgKi9cclxuLypcclxuXHQgICAgIGZldGNoKCcvYWRkQ2xpY2tlZCcsIHttZXRob2Q6ICdQT1NUJywgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9vayksIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9fSlcclxuXHQgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHQgICAgICBpZihyZXNwb25zZS5vaykge1xyXG5cdCAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrIHdhcyByZWNvcmRlZCcpO1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgIH1cclxuXHQgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgZmFpbGVkLicpO1xyXG5cdCAgICB9KVxyXG5cdCAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuXHQgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0ICAgIH0pOyovXHJcblxyXG4gIFx0LypcclxuICBcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdHJhdmVsLyR7dGhpcy5zdGF0ZS5pZH1gLCB7XHJcblxyXG4gICAgICAgbWV0aG9kOiAncHV0JyxcclxuXHJcbiAgICAgICBib2R5OiAgICBKU09OLnN0cmluZ2lmeSh0cmlwT2JqZWN0KSxcclxuXHJcbiAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuXHJcbiAgIH0pXHJcbiAgICBcdHZhciBuZXdCb29rID0ge1xyXG4gICAgICAgICAgICBrZXk6IFwiXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLmJUaXRsZSxcclxuICAgICAgICAgICAgYXV0aG9yOiB0aGlzLnN0YXRlLmJBdXRob3IsXHJcbiAgICAgICAgICAgIGRhdGU6IHRoaXMuc3RhdGUuYkRhdGUsXHJcbiAgICAgICAgICAgIGRlc2M6IHRoaXMuc3RhdGUuYkRlc2NcclxuXHQgICAgfVxyXG5cdCAgICBjb25zb2xlLmxvZyhcIk5ldyBhZGRlZCBib29rOiBcIiArIG5ld0Jvb2spO1xyXG4gICAgXHJcblx0ICAgIHZhciBib29rS2V5ID0gZmlyZS5kYXRhYmFzZSgpLnJlZignYm9va3MvJykucHVzaChuZXdCb29rKS5rZXk7XHJcblx0ICAgIGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycgKyBib29rS2V5ICsgJy9rZXknKS5zZXQoYm9va0tleSk7XHJcblx0ICAgIGxldCBtZXNzYWdlID0gXCJUaGUgYm9vayBpcyBzdWNjZXNzZnVsbHkgYWRkZWRcIjtcdCAgICBcclxuXHQgICAgcmV0dXJuIG1lc3NhZ2U7XHJcblx0ICAgICovXHJcbiAgXHR9XHJcbiAgXHRoYW5kbGVDaGFuZ2VBdXRob3IoZXZlbnQpIHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7YkF1dGhvcjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcblx0fVxyXG5cdGhhbmRsZUNoYW5nZShldmVudCkge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtiVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG5cdH1cclxuXHRoYW5kbGVDaGFuZ2VEYXRlKGV2ZW50KSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2JEYXRlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuXHR9XHJcblx0aGFuZGxlQ2hhbmdlRGVzYyhldmVudCkge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtiRGVzYzogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lID0gJ3Jvb3REaXYnPlxyXG5cdFx0ICBcdFx0PEhlYWRlcj48L0hlYWRlcj5cclxuXHRcdFx0ICAgIDxNZW51MiBjaG9zZW5UYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn0gY2xpY2tFdmVudD17dGhpcy50YWJDbGlja30+PC9NZW51Mj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va1wiPlxyXG5cdFx0XHQgICAgXHQ8ZGl2IGlkPVwiZm9ybV9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJCb29rIHRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUuYlRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQm9vayBhdXRob3JcIiB2YWx1ZT17dGhpcy5zdGF0ZS5iQXV0aG9yfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VBdXRob3J9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUHVibGlzaGVkIGRhdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5iRGF0ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGF0ZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSBpZD1cImJkZXNjXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiN1wiIHZhbHVlPXt0aGlzLnN0YXRlLmJEZXNjfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VEZXNjfT48L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+IEFkZCBib29rIDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcbiBcdFx0XHRcdFx0PC9kaXY+Ly9lbmQgb2YgZm9ybSBjb250ZW50XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIFxyXG5cdFx0XHQgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHRcdFx0ICAgICAgKiB7XHJcblx0XHRcdCAgICBcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW46IDA7XHJcblx0XHQgIFx0XHRcdCBcdHBhZGRpbmc6IDA7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgICAgaHRtbCwgYm9keSB7XHJcblx0XHRcdCAgICAgIFx0IGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgXHQgYmFja2dyb3VuZDogIzIwMjAyMDtcclxuXHRcdFx0ICAgICAgXHQgd2lkdGg6IDEwMCU7XHJcblx0XHQgIFx0XHRcdCBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRcdCAgXHRcdFx0IG1pbi13aWR0aDogMjAwcHg7XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgYm9keSB7XHJcblx0XHRcdCAgICAgIFx0IGJhY2tncm91bmQtaW1hZ2U6IFxyXG5cdFx0XHRcdFx0XHR1cmwoJy9zdGF0aWMvYm9vazEuanBnJyk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICAucm9vdERpdiB7XHJcblx0XHRcdCAgICAgIFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdCAgICAgIFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICAudGl0bGUge1xyXG5cdFx0XHQgICAgXHRcdGhlaWdodDogMjAwcHg7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ICAgIFx0XHRmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0aDEge1xyXG5cdFx0XHQgICAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0ZGlzcGxheTogaW5saW5lO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHQgICAgXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0bmF2IHtcclxuXHRcdFx0ICAgIFx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YSB7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy10b3A6IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1ib3R0b206IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YTpob3ZlciB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYWN0aXZlIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rTGlzdCB7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOyBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjc7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHAge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0I2Zvcm1fY29udGVudCB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpbnB1dCB7XHJcblx0XHRcdFx0XHRcdCBvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdFx0XHQgdHJhbnNpdGlvbjogLjJzIGFsbCBsaW5lYXI7XHJcblx0XHRcdFx0XHRcdCBkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHQgcGFkZGluZzogOHB4O1xyXG5cdFx0XHRcdFx0XHQgd2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdCBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdFx0XHRcdFx0XHQgbWFyZ2luOiA1cHggYXV0bztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRleHRhcmVhIHtcclxuXHRcdFx0XHRcdFx0IG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdFx0XHRcdCB0cmFuc2l0aW9uOiAuMnMgYWxsIGxpbmVhcjtcclxuXHRcdFx0XHRcdFx0IGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdCBwYWRkaW5nOiA4cHg7XHJcblx0XHRcdFx0XHRcdCB3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0IG1hcmdpbjogNXB4IGF1dG87XHJcblx0XHRcdFx0XHRcdCBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmZvcm0ge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJ1dHRvbiB7XHJcblx0XHRcdFx0XHRcdCBjb2xvcjogYmxhY2s7XHJcblx0XHRcdFx0XHRcdCBib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0XHRcdCBmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRcdCBsaW5lLWhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0IHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG5cdFx0XHRcdFx0XHQgd2lkdGg6IDhlbTtcclxuXHRcdFx0XHRcdFx0IG1hcmdpbjogNXB4IGF1dG87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQudmlzaWJsZSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmludmluY2libGUge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0ICAgIFx0YH08L3N0eWxlPlxyXG5cdFx0ICA8L2Rpdj5cclxuICBcdFx0KTsvL2VuZCBvZiByZXR1cm5cclxuXHR9IC8vZW5kIG9mIHJlbmRlclxyXG59IC8vZW5kIG9mIGNvbXBvbmVudFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlOyJdfQ== */\n/*@ sourceURL=pages\\create.js */"
      })); //end of return
    } //end of render

  }]);

  return Create;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]); //end of component


/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 3:
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