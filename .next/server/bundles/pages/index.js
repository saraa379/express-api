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

/***/ "./components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\components\\Menu.js";





var Menu = function Menu() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2518088769"
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2518088769" + " " + 'menu'
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-2518088769" + " " + 'active'
  }, "Books")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2518088769"
  }, "Add book")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-2518088769"
  }, "Edit book")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-2518088769"
  }, "Delete book"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2518088769",
    css: ".menu.jsx-2518088769{height:45px;background-color:#444444;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}a.jsx-2518088769{padding-right:10px;padding-left:10px;padding-top:13px;padding-bottom:13px;-webkit-text-decoration:none;text-decoration:none;outline:none;color:white;}a.jsx-2518088769:hover{background-color:grey;}.active.jsx-2518088769{background-color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJpQixBQUlvQixBQVFPLEFBU0csQUFHQSxZQW5CRyxPQVFQLEdBU25CLEFBR0EsZUFuQmMsQUFRSSxpQkFDRyxvQkFDQyxxQ0FUQSxhQVVYLGFBQ0QsWUFDVixxQ0FYb0IsNkZBQ0ksbUdBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHNcXE1lbnUuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxNb29uXFxEb2N1bWVudHNcXEVkdWNhdGlvblxcRnJvbnRlbmRcXFNlcnZlcnNpZGVcXExhYnNcXExhYjFcXGV4cHJlc3MtYXBpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiAoXHJcblx0XHJcbiAgICA8ZGl2PlxyXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT0nbWVudSc+XHJcbiAgICBcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIFx0XHQ8YSBjbGFzc05hbWU9J2FjdGl2ZSc+Qm9va3M8L2E+XHJcbiAgICAgICAgXHQ8L0xpbms+XHJcbiAgICAgICAgXHQ8TGluayBocmVmPVwiL2NyZWF0ZVwiPlxyXG4gICAgICAgICAgXHRcdDxhPkFkZCBib29rPC9hPlxyXG4gICAgICAgIFx0PC9MaW5rPlxyXG4gICAgICAgIFx0PExpbmsgaHJlZj1cIi9lZGl0XCI+XHJcbiAgICAgICAgICBcdFx0PGE+RWRpdCBib29rPC9hPlxyXG4gICAgICAgIFx0PC9MaW5rPlxyXG4gICAgICAgIFx0PExpbmsgaHJlZj1cIi9kZWxldGVcIj5cclxuICAgICAgICAgIFx0XHQ8YT5EZWxldGUgYm9vazwvYT5cclxuICAgICAgICBcdDwvTGluaz5cclxuICAgIFx0PC9kaXY+XHJcblxyXG4gICAgXHQ8c3R5bGUganN4PntgXHJcblx0ICAgIFx0XHJcblx0ICAgIFx0Lm1lbnUge1xyXG5cdCAgICBcdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcclxuXHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIFx0XHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcblx0ICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAgICBcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdGEge1xyXG5cdCAgICBcdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHQgICAgXHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHQgICAgXHRcdHBhZGRpbmctdG9wOiAxM3B4O1xyXG5cdCAgICBcdFx0cGFkZGluZy1ib3R0b206IDEzcHg7XHJcblx0ICAgIFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdGE6aG92ZXIge1xyXG5cdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHQgICAgXHR9XHJcblx0ICAgIFx0LmFjdGl2ZSB7XHJcblx0ICAgIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG5cdCAgICBcdH1cclxuICAgIFx0YH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVcclxuLypcclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Y3VycmVudFRhYjogc3RhdGUuY3VycmVudFRhYlxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIaXN0b3J5KTtcclxuKi9cclxuXHJcblxyXG4vKlxyXG5cdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuKi8iXX0= */\n/*@ sourceURL=components\\Menu.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);
/*
let mapStateToProps = state => {
	return {
		currentTab: state.currentTab
	};
}

export default connect(mapStateToProps)(History);
*/

/*
		<Link href="/">
          <a style={linkStyle}>Home</a>
        
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
*/

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Menu__ = __webpack_require__("./components/Menu.js");
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\pages\\index.js";



 //import Page from '../components/page';

var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3963423489" + " " + 'rootDiv'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charset: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3963423489"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3963423489"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3963423489"
  }, "Lab 1 - Express app")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-3963423489" + " " + 'title'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3963423489"
  }, "Google Books API")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Menu__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-3963423489"
  }, "Hello Next.js"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3963423489",
    css: "*{box-sizing:border-box;margin:0;padding:0;}html,body{height:100%;background:#202020;width:100%;font-family:sans-serif;min-width:200px;}body{background-image: url('/static/book1.jpg');background-position:center;background-repeat:no-repeat;background-size:cover;}.rootDiv{height:100%;width:100%;}.title{height:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:inline;margin:auto;background-color:black;text-transform:uppercase;color:white;padding:5px 10px 5px 10px;opacity:0.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQndCLEFBRzhCLEFBS1IsQUFRTyxBQU1QLEFBSUQsQUFNSyxZQXZCRyxBQWNSLENBSUEsS0FNSyxJQTdCVCxDQW9CVCxRQW5CVSxBQUtHLFVBSmQsQ0FLdUIsQ0FNRSxzQkFMVCxLQU1VLFdBTHpCLE1BZXNCLEVBTVAsU0FmSSxNQWdCUCxZQUNXLElBaEJ2QixtQkFpQnlCLHlCQUNiLENBVE8sV0FVTywwQkFDZCxZQUNiLDRDQVhBIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXE1vb25cXERvY3VtZW50c1xcRWR1Y2F0aW9uXFxGcm9udGVuZFxcU2VydmVyc2lkZVxcTGFic1xcTGFiMVxcZXhwcmVzcy1hcGkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXHJcbi8vaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lID0gJ3Jvb3REaXYnPlxyXG4gIFx0XHQ8SGVhZD5cclxuICBcdFx0XHQ8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxyXG5cdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MVwiIC8+XHJcbiAgXHRcdFx0PHRpdGxlPkxhYiAxIC0gRXhwcmVzcyBhcHA8L3RpdGxlPlxyXG4gIFx0XHQ8L0hlYWQ+XHJcbiAgXHRcdDxkaXYgY2xhc3NOYW1lID0gJ3RpdGxlJz5cclxuICAgIFx0XHQ8aDE+R29vZ2xlIEJvb2tzIEFQSTwvaDE+XHJcbiAgICBcdDwvZGl2PlxyXG5cdCAgICA8TWVudSAvPlxyXG5cdCAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG5cdCAgICBcclxuXHQgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHQgICAgXHQqIHtcclxuXHQgICAgXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAgIFx0XHRtYXJnaW46IDA7XHJcbiAgXHRcdFx0IFx0cGFkZGluZzogMDtcclxuXHQgICAgXHR9XHJcblx0ICAgICAgaHRtbCwgYm9keSB7XHJcblx0ICAgICAgXHQgaGVpZ2h0OiAxMDAlO1xyXG5cdCAgICAgIFx0IGJhY2tncm91bmQ6ICMyMDIwMjA7XHJcblx0ICAgICAgXHQgd2lkdGg6IDEwMCU7XHJcbiAgXHRcdFx0IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIFx0XHRcdCBtaW4td2lkdGg6IDIwMHB4O1xyXG5cdCAgICAgIH1cclxuXHQgICAgICBib2R5IHtcclxuXHQgICAgICBcdCBiYWNrZ3JvdW5kLWltYWdlOiBcclxuXHRcdFx0XHR1cmwoJy9zdGF0aWMvYm9vazEuanBnJyk7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHQgICAgICB9XHJcblx0ICAgICAgLnJvb3REaXYge1xyXG5cdCAgICAgIFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0ICAgICAgXHRcdHdpZHRoOiAxMDAlO1xyXG5cdCAgICAgIH1cclxuXHQgICAgICAudGl0bGUge1xyXG5cdCAgICBcdFx0aGVpZ2h0OiAyMDBweDtcclxuXHQgICAgXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0ICAgIFx0XHRmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG5cdCAgICBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQgICAgXHR9XHJcblx0ICAgIFx0aDEge1xyXG5cdCAgICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdCAgICBcdFx0ZGlzcGxheTogaW5saW5lO1xyXG5cdCAgICBcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdCAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0ICAgIFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdCAgICBcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdCAgICBcdFx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcblx0ICAgIFx0XHRvcGFjaXR5OiAwLjU7XHJcblx0ICAgIFx0fVxyXG4gICAgXHRgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */\n/*@ sourceURL=pages\\index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map