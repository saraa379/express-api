webpackHotUpdate(5,{

/***/ "./components/Books.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fire__ = __webpack_require__("./components/fire.js");
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\components\\Books.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    _this.state = {
      books: []
    };
    return _this;
  }

  _createClass(Books, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      //fire.database().ref('books/').on('value', this.fbCallback);//end of fire

      /*
      	    this.setState({
      	      books: this.props.bookData
      	    })*/
      __WEBPACK_IMPORTED_MODULE_2__components_fire__["a" /* default */].database().ref('books/').on('value', function (snapshot) {
        var dataArray = [];
        snapshot.forEach(function (child) {
          var bookTemp = child.val();
          dataArray.push(bookTemp);
        }); //end of foreach

        console.log("books from db: " + dataArray);
      }); //end of db.ref
    } //end of will mount

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {//var book = this.readTextFile('./static/book.txt');
      //console.log("Book data: " + book);
    }
  }, {
    key: "render",
    value: function render() {
      var bookArray = this.state.books; //console.log("Comp book recieved: " + bookArray);

      var listItems = bookArray.map(function (book) {
        //console.log("Individual book info: " + book.id);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "book",
          key: book.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, "Title: ", book.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, "Author: ", book.author), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, "Published date: ", book.date), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, "Description: ", book.desc));
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bookList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
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
//# sourceMappingURL=5.7ad498fac03e64868412.hot-update.js.map