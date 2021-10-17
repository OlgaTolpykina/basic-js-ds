const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

module.exports = class BinarySearchTree {

  constructor () {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addToNode(this.treeRoot, data);

    function addToNode (node, data) {
      if (!node) return new Node(data);
      if (data === node.data) return node;
      if (data < node.data) {
        node.left = addToNode(node.left, data);
      }
      if (data > node.data) {
        node.right = addToNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return findInNode(this.treeRoot, data);

    function findInNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      if (data < node.data) {
        return findInNode(node.left, data);
      } else {
        return findInNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.tRoot = removeInNode(this.treeRoot, data);

    function removeInNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeInNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeInNode(node.right, data);
        return node;
      } else if (data == node.data) {
        if (!node.left && !node.right) return null;
      }

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let minRightNode = node.right;
      while (minRightNode.left) minRightNode = minRightNode.left;
      node.data = minRightNode.data;

      node.right = removeInNode(node.right, minRightNode.data);

      return node;
    }
  }

  min() {
    if (!this.treeRoot) return null;

    let node = this.treeRoot;
    while (node.left) node = node.left;

    return node.data;
  }

  max() {
    if (!this.treeRoot) return null;
    let node = this.treeRoot;
    while (node.right) node = node.right;

    return node.data;
  }
};