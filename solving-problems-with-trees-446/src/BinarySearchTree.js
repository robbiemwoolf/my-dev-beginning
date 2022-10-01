class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Not Found");
    }
  }

  dfsInOrder(values = []) {
    if (this.left) {
      values = this.left.dfsInOrder(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.dfsInOrder(values);
    }
    return values;
  }

  dfsPreOrder(values = []) {
    values.push(this.value);
    if (this.left) {
      values = this.left.dfsPreOrder(values);
    }
    if (this.right) {
      values = this.right.dfsPreOrder(values);
    }
    return values;
  }

  dfsPostOrder(values = []) {
    if (this.left) {
      values = this.left.dfsPostOrder(values);
    }
    if (this.right) {
      values = this.right.dfsPostOrder(values);
    }
    values.push(this.value);
    return values;
  }

  bfs(tree, values = []) {
    const queue = new Queue();
    queue.enqueue(tree);
    let node = queue.dequeue();
    while (node) {
      values.push(node.value);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
      node = queue.dequeue();
    }

    return values;
  }

  getHeight(currentHeight = 0) {
    if (!this.left && !this.right) return currentHeight;

    const newHeight = currentHeight + 1;

    if (!this.left) return this.right.getHeight(newHeight);

    if (!this.right) return this.left.getHeight(newHeight);

    const leftHeight = this.left.getHeight(newHeight);
    const rightHeight = this.right.getHeight(newHeight);

    return Math.max(leftHeight, rightHeight);
  }

  isBST() {
    const values = this.dfsInOrder();
    for (let i = 1; i < values.length; i++) {
      if (values[i] < values[i - 1]) {
        return false;
      }
    }
    return true;
  }

  findKthLargestValue(k) {
    const values = this.dfsInOrder();
    return values[values.length - k];
  }

  // time complexity O(n) where n is the number of the nodes
  // space complexity?
  countLeaves(count = 0) {
    // BASE CASE:
    // if current node has no left or right child return count + 1
    if (!this.left && !this.right) return count + 1

    // RECURSIVE CASE: 
    // otherwise compute the new count
    const newCount = count + 1

    // if there is no left child, recurse down the right subtree passing down the count of the current node
    if (!this.left) return this.right.countLeaves(newCount)

    // if there is no right child, recurse down the left subtree passing down the count of the current node
    if (!this.right) return this.left.countLeaves(newCount)

    // if both children exist, recurse down both subtrees, passing down the count of the current node
    const leftCount = this.left.countLeaves(newCount)
    const rightCount = this.right.countLeaves(newCount)

    // return the greater of the left or right subtree counts
    return Math.max(leftCount, rightCount)
  }

  isBalancedBST(currentHeight = 0) {
    // BASE CASE:
    // if current node has no left or right child return the height.
    if (!this.left && !this.right) return currentHeight

    // RECURSIVE CASE:
    // otherwise compute the new height
    const newHeight = currentHeight + 1

    // if there is no left child, recurse down the right subtree passing down the height of the current node
    if (!this.left) return this.right.getHeight(newHeight)

    // if there is no right child, recurse down the left subtree passing down the height of the current node
    if (!this.right) return this.left.getHeight(newHeight)

    // if both children exist, recurse down both subtrees, passing down the height of the current node
    const leftHeight = this.left.getHeight(newHeight)
    const rightHeight = this.right.getHeight(newHeight)

    // find taller height
    const taller = Math.max(leftHeight, rightHeight)

    // find shorter height
    const shorter = Math.min(leftHeight, rightHeight)

    // find difference
    const diff = (taller - shorter)

    // return height for balanced BST if -1 <= diff <= 1
    // otherwise return -1 if it is unbalanced
    return (diff >= -1 && diff <= 1) ? taller : -1
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

module.exports = BinarySearchTree;
