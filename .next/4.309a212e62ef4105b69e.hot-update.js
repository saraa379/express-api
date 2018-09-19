webpackHotUpdate(4,{

/***/ "./components/Books.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\components\\Books.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//AIzaSyB0cooAANtGVdiLnD0SZrZZ_1cN00Z2vpg - google api key
//https://books.google.com/



var Books =
/*#__PURE__*/
function (_Component) {
  _inherits(Books, _Component);

  function Books(props) {
    var _this;

    _classCallCheck(this, Books);

    _this = _possibleConstructorReturn(this, (Books.__proto__ || Object.getPrototypeOf(Books)).call(this, props));
    _this.state = {
      books: []
    };
    return _this;
  }

  _createClass(Books, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        books: this.props.bookData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var bookArray = this.state.books;
      var books = [{
        id: 1,
        title: "lala"
      }, {
        id: 2,
        title: "ssss"
      }];
      console.log("Comp book recieved: " + bookArray);
      var listItems = bookArray.map(function (book) {
        console.log("Individual book info: " + book.id);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "book",
          key: book.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, "Title: ", book.volumeInfo.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, "Author: ", book.volumeInfo.authors), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, "Published date: ", book.volumeInfo.publishedDate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, "Description: ", book.volumeInfo.description));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bookList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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

/***/ })

})
//# sourceMappingURL=4.309a212e62ef4105b69e.hot-update.js.map