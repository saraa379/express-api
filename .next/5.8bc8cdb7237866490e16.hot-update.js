webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu2__ = __webpack_require__("./components/Menu2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Books__ = __webpack_require__("./components/Books.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fire__ = __webpack_require__("./components/fire.js");
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  /*
  	static async getInitialProps() {
  		console.log('fetching data...');
  	    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=harrypotter');
  		const jsonData = await res.json();
  		var books = jsonData.items;
  		//console.log("Books: " + books);
  
  
  		
  		books.map(function(book) {
  
  			fire.database().ref('books/').once('value', function(snapshot) {
  				let data = snapshot.val();
  				if (data !== null) {
  				} else {
  					console.log("Books in the db");
  					var newBook = {
  						key: "",
  						title: book.volumeInfo.title,
  						author: book.volumeInfo.authors,
  						date: book.volumeInfo.publishedDate,
  						desc: book.volumeInfo.description
  					}
  					var bookKey = fire.database().ref('books/').push(newBook).key;
  					fire.database().ref('books/' + bookKey + '/key').set(bookKey);
  				}
  				
  			})//end of db.ref
  			
        	});
  
  
  		return {
  		    bookData: jsonData.items
    		}
  	}
  */


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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-1053610237" + " " + 'rootDiv'
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu2__["a" /* default */], {
        chosenTab: this.state.currentTab,
        clickEvent: this.tabClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Books__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1053610237",
        css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}nav{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a:hover{background-color:grey;}.active{background-color:grey;}.bookList{color:white;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items;-webkit-box-align;-ms-flex-align;align-items;center;margin-top:30px;margin-bottom:30px;}.book{background-color:black;opacity:0.7;margin:10px;padding:20px 10px 20px 10px;width:80%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:auto;}.book p{padding-bottom:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRTBCLEFBR2dDLEFBS1IsQUFRTyxBQU1QLEFBSUQsQUFNSyxBQVdOLEFBUU8sQUFTRyxBQUdBLEFBR1YsQUFVVyxBQVNKLFlBNUVFLEFBY1IsQUFxQlksQUF1QmQsQ0F4Q0UsS0FNSyxDQW1CQSxBQWtDbkIsR0FsRlUsQUF5RFYsQUFHQSxDQXhDQyxBQTRDYSxBQVNELFFBeEVGLEFBS0csSUFvRUQsRUFqQ0MsQUFRSSxJQS9DbEIsQ0FLdUIsQ0FNRSxJQThESSxPQXpCUixXQTFDTCxLQU1VLElBcUNKLENBeUJYLE1BbkVWLElBb0VrQixFQXJESSxFQU1QLFFBbUNTLENBbERMLE1BZ0JQLE9BV1MsS0FWRSxJQWhCdkIsSUFvQ1UsYUFDRCxFQXBCZ0IsVUFxQjFCLE9Bd0JhLFFBNUNBLENBVE8sR0FzRHBCLFFBNUMyQixLQStCSCxLQXZCSixnQkFQUCxZQUNiLDRDQVhBLHFCQWtCd0IsQ0F1QlosaUVBQU8sT0FDRixnQkFDRyxVQXhCcEIsU0F5QkEiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcTW9vblxcRG9jdW1lbnRzXFxFZHVjYXRpb25cXEZyb250ZW5kXFxTZXJ2ZXJzaWRlXFxMYWJzXFxMYWIxXFxleHByZXNzLWFwaSIsInNvdXJjZXNDb250ZW50IjpbIi8vTWFpbiBwYWdlXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLi9jb21wb25lbnRzL01lbnUyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBCb29rcyBmcm9tICcuLi9jb21wb25lbnRzL0Jvb2tzJztcclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vY29tcG9uZW50cy9maXJlJztcclxuXHJcbnZhciBib29rRXhpc3QgPSBmYWxzZTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHRcdHRoaXMuc3RhdGUgPSB7Y3VycmVudFRhYjogXCJCb29rc1wifTtcclxuXHJcblx0XHRcdHRoaXMudGFiQ2xpY2sgPSB0aGlzLnRhYkNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG4vKlxyXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnZmV0Y2hpbmcgZGF0YS4uLicpO1xyXG5cdCAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPWhhcnJ5cG90dGVyJyk7XHJcblx0XHRjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHR2YXIgYm9va3MgPSBqc29uRGF0YS5pdGVtcztcclxuXHRcdC8vY29uc29sZS5sb2coXCJCb29rczogXCIgKyBib29rcyk7XHJcblxyXG5cclxuXHRcdFxyXG5cdFx0Ym9va3MubWFwKGZ1bmN0aW9uKGJvb2spIHtcclxuXHJcblx0XHRcdGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycpLm9uY2UoJ3ZhbHVlJywgZnVuY3Rpb24oc25hcHNob3QpIHtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG5cdFx0XHRcdGlmIChkYXRhICE9PSBudWxsKSB7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiQm9va3MgaW4gdGhlIGRiXCIpO1xyXG5cdFx0XHRcdFx0dmFyIG5ld0Jvb2sgPSB7XHJcblx0XHRcdFx0XHRcdGtleTogXCJcIixcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGJvb2sudm9sdW1lSW5mby50aXRsZSxcclxuXHRcdFx0XHRcdFx0YXV0aG9yOiBib29rLnZvbHVtZUluZm8uYXV0aG9ycyxcclxuXHRcdFx0XHRcdFx0ZGF0ZTogYm9vay52b2x1bWVJbmZvLnB1Ymxpc2hlZERhdGUsXHJcblx0XHRcdFx0XHRcdGRlc2M6IGJvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIGJvb2tLZXkgPSBmaXJlLmRhdGFiYXNlKCkucmVmKCdib29rcy8nKS5wdXNoKG5ld0Jvb2spLmtleTtcclxuXHRcdFx0XHRcdGZpcmUuZGF0YWJhc2UoKS5yZWYoJ2Jvb2tzLycgKyBib29rS2V5ICsgJy9rZXknKS5zZXQoYm9va0tleSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KS8vZW5kIG9mIGRiLnJlZlxyXG5cdFx0XHRcclxuICAgICAgXHR9KTtcclxuXHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdCAgICBib29rRGF0YToganNvbkRhdGEuaXRlbXNcclxuICBcdFx0fVxyXG5cdH1cclxuKi9cclxuXHR0YWJDbGljayhpbmQpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ1dyYXBwZXI6IENsaWNrIGhhcHBlbmVkOiAnICsgaW5kKTtcclxuICAgIFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRhYjogaW5kfSk7XHJcbiAgXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHQgIDxkaXYgY2xhc3NOYW1lID0gJ3Jvb3REaXYnPlxyXG5cdFx0ICBcdFx0PEhlYWRlcj48L0hlYWRlcj5cclxuXHRcdFx0ICAgIDxNZW51MiBjaG9zZW5UYWI9e3RoaXMuc3RhdGUuY3VycmVudFRhYn0gY2xpY2tFdmVudD17dGhpcy50YWJDbGlja30+PC9NZW51Mj5cclxuXHRcdFx0ICAgIDxCb29rcz48L0Jvb2tzPlxyXG5cdFx0XHQgICAgXHJcblx0XHRcdCAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG5cdFx0XHQgICAgXHQqIHtcclxuXHRcdFx0ICAgIFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHQgICAgXHRcdG1hcmdpbjogMDtcclxuXHRcdCAgXHRcdFx0IFx0cGFkZGluZzogMDtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgICBodG1sLCBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHQgICAgICBcdCBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG5cdFx0XHQgICAgICBcdCB3aWR0aDogMTAwJTtcclxuXHRcdCAgXHRcdFx0IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5cdFx0ICBcdFx0XHQgbWluLXdpZHRoOiAyMDBweDtcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICBib2R5IHtcclxuXHRcdFx0ICAgICAgXHQgYmFja2dyb3VuZC1pbWFnZTogXHJcblx0XHRcdFx0XHRcdHVybCgnL3N0YXRpYy9ib29rMS5qcGcnKTtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC5yb290RGl2IHtcclxuXHRcdFx0ICAgICAgXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0ICAgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIC50aXRsZSB7XHJcblx0XHRcdCAgICBcdFx0aGVpZ2h0OiAyMDBweDtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHQgICAgXHRcdGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcblx0XHRcdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRoMSB7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFx0ICAgIFx0XHRkaXNwbGF5OiBpbmxpbmU7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHQgICAgXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdG9wYWNpdHk6IDAuNTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHRuYXYge1xyXG5cdFx0XHQgICAgXHRcdGhlaWdodDogNDVweDtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YSB7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRcdFx0ICAgIFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy10b3A6IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0cGFkZGluZy1ib3R0b206IDEzcHg7XHJcblx0XHRcdCAgICBcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdFx0ICAgIFx0YTpob3ZlciB7XHJcblx0XHRcdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgXHQuYWN0aXZlIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rTGlzdCB7XHJcblx0XHRcdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHQgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdCAgICBcdFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG5cdFx0XHQgICAgXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQgICAgXHRcdGFsaWduLWl0ZW1zOyBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdFx0ICAgIFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHtcclxuXHRcdFx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdFx0ICAgIFx0XHRvcGFjaXR5OiAwLjc7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcblx0XHRcdCAgICBcdFx0d2lkdGg6IDgwJTtcclxuXHRcdFx0ICAgIFx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHQgICAgXHR9XHJcblx0XHRcdCAgICBcdC5ib29rIHAge1xyXG5cdFx0XHQgICAgXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblx0XHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGB9PC9zdHlsZT5cclxuXHRcdCAgPC9kaXY+XHJcbiAgXHRcdCk7Ly9lbmQgb2YgcmV0dXJuXHJcblx0fSAvL2VuZCBvZiByZW5kZXJcclxufSAvL2VuZCBvZiBjb21wb25lbnRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuXHJcblxyXG5cclxuIl19 */\n/*@ sourceURL=pages\\index.js */"
      })); //end of return
    } //end of render

  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]); //end of component


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
//# sourceMappingURL=5.8bc8cdb7237866490e16.hot-update.js.map