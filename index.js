(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.createDeepTreeWalkerIterator = {}));
}(this, (function (exports) { 'use strict';

  const {document, NodeFilter} = self;
  const QUERY = 'a[href],area[href],button,details,iframe,input,select,textarea,[contentEditable="true"],[tabindex]';

  function isFocusable(node) {
    return node.matches(QUERY) &&
      node.tabIndex >= 0 &&
      !node.hidden &&
      !node.disabled
  }

  function getFocusableWalker(rootNode) {
    return document.createTreeWalker(rootNode, NodeFilter.SHOW_ELEMENT, filterFocusableWalker);
  }

  function getFirstFocusable(rootNode) {
    return getFocusableWalker(rootNode).nextNode();
  }

  function filterFocusableWalker(node) {
    return isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  }

  exports.getFirstFocusable = getFirstFocusable;
  exports.getFocusableWalker = getFocusableWalker;
  exports.isFocusable = isFocusable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
