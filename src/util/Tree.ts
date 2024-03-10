import { TreeNode } from "./TreeNode";

export interface Tree<T> {
  /**
   * Load the given node as current layer.
   */
  load(node: TreeNode<T>): Tree<T>;

  /**
   * Get the root node.
   */
  root(): TreeNode<T>;

  /**
   * Try moving one layer towards the root.
   */
  up(): Tree<T>;

  /**
   * Try moving one layer towards the end.
   */
  down(index: number): Tree<T>;

  /**
   * Add a node to current layer.
   */
  add(value?: T): Tree<T>;

  /**
   * Delete all nodes from current layer.
   */
  clear(): void;

  /**
   * Try to delete a node with matched value from current layer.
   */
  delete(value: T): boolean;

  /**
   * Check if a wanted node exists in current layer.
   */
  has(value: T): boolean;

  /**
   * Search node(s) among the entire tree.
   */
  search(matcher: (n: TreeNode<T>) => boolean): TreeNode<T>[];
}
