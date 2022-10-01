// Trees

    // overview: So far, you have learned about linear data structues such as linked lists, stacks and queues. In this module, you will learn about trees, which are a type of hierarchical data structure.

    // terms:

        // tree structure: a type of structure that includes a single root and multiple levels of organization

        // root node: a special node with no parent, from which all other nodes descend

        // leaf node: a node without any children

        // binary tree: a tree with an additional limitation- each node can only have zero, one, or two children (at most)

        // subtree: a mini tree within a binary tree, whose root can be any node and all of its descendants rooted at the node

    // Trees are data structures that consist of nodes that are linked together in a certain way. Nodes in a tree have a parent-child relationship. Each node is linked to zero or more child nodes, and at most one parent. There is a special node called the root node at the top of the tree. The root node has no parent, and it's the node from which all other nodes descend. A nodes without any children is called a leaf node.

    // A branch in a tree signifies a decision path, a choice that connects one node to another. A binary tree may have a left branch and a right branch. It may also have subtrees. A subtree is a mini tree within a binary tree, whose root can be any node and all of its descendants rooted at that node.

// Defining Binary Search Trees 44.2

    // overview: Recall that one key challenge in computer science is searching and sorting through large volumes of data. If not done properly, sorting and finding the right data can be time consuming. Binary search trees can help you search through data efficiently.

// BTSs are a special kind of binary tree with the following characteristics:

    // each node has zero, one, or two children

    // all of the nodes in the left-hand branch of a node are guaranteed to have lower values than the node itself

    // all of the nodes in the right-hand branch of a node are guaranteed to have a higher value than the node itself

    // both the left and right subtrees are guaranteed to be BSTs themselves