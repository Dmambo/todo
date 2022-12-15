/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/script.js":
/*!*******************************!*\
  !*** ./src/modules/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkedComplete": () => (/* binding */ checkedComplete),
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "inputs": () => (/* binding */ inputs),
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
var btnClear = document.querySelector('.btn-clear');
var todoList = document.querySelector('.list-items');
var todoInput = document.querySelector('#inputs');
var todos = [];
var storage = function storage(todo) {
  localStorage.setItem('todos', JSON.stringify(todo));
};
var render = function render(todos) {
  var li = '';
  if (todos) {
    todos.forEach(function (todo, id) {
      li += "<li class='list-item'>\n        <label class='lists' id=".concat(id, ">\n          <input class='checkbox' type='checkbox' id=").concat(id, " />\n          <p class='list' contenteditable='true'>").concat(todo.description, "</p>\n        </label>\n        <div class='settings'>\n              <ion-icon  name='ellipsis-vertical-outline'></ion-icon>\n            <ul class='task-menu'>\n              <ion-icon name='trash-outline' class='trash'>Delete</ion-icon>\n            </ul>\n         </div>\n         </li>");
    });
    todoList.innerHTML = li;
  }
};

// checkbox and mark as completed
var checkedComplete = function checkedComplete(target) {
  if (target.classList.contains('checkbox')) {
    todos[target.parentElement.id].completed = target.checked;
    // add a class of completed
    if (target.checked) {
      target.parentElement.parentElement.classList.add('completed');
    } else {
      target.parentElement.parentElement.classList.remove('completed');
    }
    storage(todos);
  }
};

// remove element
var removeid = function removeid(id) {
  todos.filter(function (todo) {
    return todo.index !== id;
  }), _readOnlyError("todos");
  for (var i = 0; i < todos.length; i += 1) {
    todos[i].index = i + 1;
  }
  storage(todos);
  render(todos);
};
var removeElement = function removeElement(target) {
  if (target.classList.contains('trash')) {
    // const id = target.parentElement.parentElement.parentElement.id;
    todos.splice(target.parentElement.parentElement.parentElement.id, 1);
    removeid(target.parentElement.parentElement.parentElement.id);
  }
};

// clear all completed file
var clearAll = function clearAll() {
  btnClear.addEventListener('click', function () {
    // clear all method with filter methods
    todos.filter(function (todo) {
      return todo.completed === false;
    }), _readOnlyError("todos");
    storage(todos);
    render(todos);
  });
};

// edit todo
var editTodo = function editTodo(document) {
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('list')) {
      e.target.contentEditable = true;
      e.target.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.target.contentEditable = false;
          todos[e.target.parentElement.id].description = e.target.innerText;
          storage(todos);
        }
      });
    }
  });
};
var inputs = function inputs() {
  todoInput.addEventListener('keypress', function (e) {
    var todoInfo = todoInput.value.trim();
    if (e.key === 'Enter' && e.target.value !== '') {
      e.preventDefault();
      var todo = {
        description: todoInfo,
        completed: false,
        index: todos.length + 1
      };
      todos.push(todo);
      storage(todos);
      render(todos);
      e.target.value = '';
    }
  });
};

// update the storage to show when user reloads the page

if (localStorage.getItem('todos')) {
  JSON.parse(localStorage.getItem('todos')), _readOnlyError("todos");
  render(todos);
} else {
  localStorage.setItem('todos', JSON.stringify([]));
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background: linear-gradient(to left, rgb(215, 235, 235), #edf0f4);\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: rgba(226, 220, 220, 0.767);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(11, 11, 11, 0.844);\r\n  padding: 20px 20px;\r\n  margin: 150px auto;\r\n  width: 450px;\r\n  position: relative;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 20px;\r\n  background-color: rgba(252, 250, 252, 0.721);\r\n  padding: 8px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.todo .repeat {\r\n  margin-top: 10px;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  color: rgba(176, 184, 190, 0.684);\r\n}\r\n\r\n.content .todo h1 {\r\n  font-size: 1.2rem;\r\n  margin-left: 12px;\r\n}\r\n\r\n#input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgba(255, 255, 255, 0.989);\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\n.inputs {\r\n  padding: 10px;\r\n  border: 1px solid transparent;\r\n  width: 480px;\r\n}\r\n\r\n.inputs:focus-visible {\r\n  outline-color: #fff;\r\n}\r\n\r\n#btn {\r\n  background: inherit;\r\n  color: rgb(229, 220, 220);\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.controls {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 18px 25px;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.989);\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: auto;\r\n}\r\n\r\n.filters #all {\r\n  margin-right: 22px;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.filters span.active {\r\n  color: #3c87ff;\r\n}\r\n\r\n.list-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  margin-left: 0;\r\n  padding-inline-start: 0;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgba(255, 255, 255, 0.989);\r\n  padding: 0 10px;\r\n  border-radius: 10px;\r\n  color: black;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  margin-left: 0;\r\n}\r\n\r\n.lists {\r\n  display: flex;\r\n}\r\n\r\n.list {\r\n  font-size: 1.2rem;\r\n  margin-left: 12px;\r\n  padding: 5px;\r\n}\r\n\r\n.settings {\r\n  cursor: move;\r\n  position: relative;\r\n}\r\n\r\n.settings .task-menu {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: rgba(87, 85, 86, 0.892);\r\n  padding: 5px 8px;\r\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);\r\n  right: -5px;\r\n  bottom: -40px;\r\n  border-radius: 5px;\r\n  transform: scale(0);\r\n  transition: transform 0.2s ease;\r\n  transform-origin: top right;\r\n}\r\n\r\n.settings:hover .task-menu {\r\n  transform: scale(1);\r\n}\r\n\r\n.settings .task-menu li {\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  margin-bottom: 2px;\r\n  justify-content: flex-start;\r\n  color: rgb(174, 12, 185);\r\n}\r\n\r\n.btn-clear {\r\n  padding: 10px;\r\n  font-size: 1.2rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn-clear:hover {\r\n  background-color: rgba(120, 24, 104, 0.721);\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: rgba(144, 137, 137, 0.855);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iEAAiE;AACnE;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,4CAA4C;EAC5C,mBAAmB;EACnB,8CAA8C;EAC9C,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,4CAA4C;EAC5C,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4CAA4C;EAC5C,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,yCAAyC;EACzC,gBAAgB;EAChB,yCAAyC;EACzC,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,6BAA6B;EAC7B,iCAAiC;AACnC","sourcesContent":["body {\r\n  background: linear-gradient(to left, rgb(215, 235, 235), #edf0f4);\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: rgba(226, 220, 220, 0.767);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(11, 11, 11, 0.844);\r\n  padding: 20px 20px;\r\n  margin: 150px auto;\r\n  width: 450px;\r\n  position: relative;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 20px;\r\n  background-color: rgba(252, 250, 252, 0.721);\r\n  padding: 8px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.todo .repeat {\r\n  margin-top: 10px;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  color: rgba(176, 184, 190, 0.684);\r\n}\r\n\r\n.content .todo h1 {\r\n  font-size: 1.2rem;\r\n  margin-left: 12px;\r\n}\r\n\r\n#input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgba(255, 255, 255, 0.989);\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: none;\r\n}\r\n\r\n.inputs {\r\n  padding: 10px;\r\n  border: 1px solid transparent;\r\n  width: 480px;\r\n}\r\n\r\n.inputs:focus-visible {\r\n  outline-color: #fff;\r\n}\r\n\r\n#btn {\r\n  background: inherit;\r\n  color: rgb(229, 220, 220);\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.controls {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 18px 25px;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.989);\r\n}\r\n\r\n.filters {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: auto;\r\n}\r\n\r\n.filters #all {\r\n  margin-right: 22px;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.filters span.active {\r\n  color: #3c87ff;\r\n}\r\n\r\n.list-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  margin-left: 0;\r\n  padding-inline-start: 0;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgba(255, 255, 255, 0.989);\r\n  padding: 0 10px;\r\n  border-radius: 10px;\r\n  color: black;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  margin-left: 0;\r\n}\r\n\r\n.lists {\r\n  display: flex;\r\n}\r\n\r\n.list {\r\n  font-size: 1.2rem;\r\n  margin-left: 12px;\r\n  padding: 5px;\r\n}\r\n\r\n.settings {\r\n  cursor: move;\r\n  position: relative;\r\n}\r\n\r\n.settings .task-menu {\r\n  position: absolute;\r\n  z-index: 2;\r\n  background-color: rgba(87, 85, 86, 0.892);\r\n  padding: 5px 8px;\r\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);\r\n  right: -5px;\r\n  bottom: -40px;\r\n  border-radius: 5px;\r\n  transform: scale(0);\r\n  transition: transform 0.2s ease;\r\n  transform-origin: top right;\r\n}\r\n\r\n.settings:hover .task-menu {\r\n  transform: scale(1);\r\n}\r\n\r\n.settings .task-menu li {\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n  margin-bottom: 2px;\r\n  justify-content: flex-start;\r\n  color: rgb(174, 12, 185);\r\n}\r\n\r\n.btn-clear {\r\n  padding: 10px;\r\n  font-size: 1.2rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn-clear:hover {\r\n  background-color: rgba(120, 24, 104, 0.721);\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: rgba(144, 137, 137, 0.855);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/script.js */ "./src/modules/script.js");


(0,_modules_script_js__WEBPACK_IMPORTED_MODULE_1__.inputs)();
(0,_modules_script_js__WEBPACK_IMPORTED_MODULE_1__.render)(_modules_script_js__WEBPACK_IMPORTED_MODULE_1__.todos);
(0,_modules_script_js__WEBPACK_IMPORTED_MODULE_1__.clearAll)();
(0,_modules_script_js__WEBPACK_IMPORTED_MODULE_1__.editTodo)(document);

// event delegation
document.addEventListener('click', function (e) {
  (0,_modules_script_js__WEBPACK_IMPORTED_MODULE_1__.removeElement)(e.target);
  (0,_modules_script_js__WEBPACK_IMPORTED_MODULE_1__.checkedComplete)(e.target);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle3f6863876803e637de8d.js.map