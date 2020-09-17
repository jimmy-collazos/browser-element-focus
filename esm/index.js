const {document, NodeFilter} = self;
const QUERY = 'a[href],area[href],button,details,iframe,input,select,textarea,[contentEditable="true"],[tabindex]';

export function isFocusable(node) {
  return node.matches(QUERY) &&
    node.tabIndex >= 0 &&
    !node.hidden &&
    !node.disabled
}

export function getFocusableWalker(rootNode) {
  return document.createTreeWalker(rootNode, NodeFilter.SHOW_ELEMENT, filterFocusableWalker);
}

export function findFocusableElement(rootNode) {
  return getFocusableWalker(rootNode).nextNode();
}

function filterFocusableWalker(node) {
  return isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
}