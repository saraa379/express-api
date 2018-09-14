webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MyLayout_js__ = __webpack_require__("./components/MyLayout.js");
var _jsxFileName = "C:\\Users\\Moon\\Documents\\Education\\Frontend\\Serverside\\Labs\\Lab1\\express-api\\pages\\index.js";


// This is the Link API

/*
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
	  <a style={{ fontSize: 20 }}>About Page</a>
	</Link>
    <p>Hello Next.js</p>
  </div>
)
export default Index*/


var rootDivStyle = {
  backgroundColor: 'blue',
  boxSize: 'border-box',
  margin: 0,
  padding: 0
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: rootDivStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-2073943172"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-2073943172"
  }, "Hello Next.js"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2073943172",
    css: "body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBRzJCLGlCQUNuQiIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxNb29uXFxEb2N1bWVudHNcXEVkdWNhdGlvblxcRnJvbnRlbmRcXFNlcnZlcnNpZGVcXExhYnNcXExhYjFcXGV4cHJlc3MtYXBpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB0aGUgTGluayBBUElcclxuLypcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuXHQgIDxhIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT5BYm91dCBQYWdlPC9hPlxyXG5cdDwvTGluaz5cclxuICAgIDxwPkhlbGxvIE5leHQuanM8L3A+XHJcbiAgPC9kaXY+XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgqL1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5cclxuY29uc3Qgcm9vdERpdlN0eWxlID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnLFxyXG4gIGJveFNpemU6ICdib3JkZXItYm94JyxcclxuICBtYXJnaW46IDAsXHJcbiAgcGFkZGluZzogMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17cm9vdERpdlN0eWxlfT5cclxuXHQgICAgPEhlYWRlciAvPlxyXG5cdCAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxyXG5cdCAgICBcclxuXHQgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuXHQgICAgICBib2R5IHtcclxuXHQgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG5cdCAgICAgIH1cclxuICAgIFx0YH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */"
  }));
});
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
//# sourceMappingURL=4.110f89a8ba6e0e48e8c8.hot-update.js.map