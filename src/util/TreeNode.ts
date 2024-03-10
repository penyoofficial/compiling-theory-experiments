export class TreeNode<T> {
  readonly father?: TreeNode<T>;
  data?: T;
  children: TreeNode<T>[] = [];

  constructor(father?: TreeNode<T>, data?: T) {
    this.father = father;
    this.data = data;
  }

  /**
   * Check if current node is a leaf of tree.
   */
  isLeaf() {
    return this.children.length === 0;
  }
}
