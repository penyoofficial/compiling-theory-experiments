import { Tree } from "./Tree";
import { TreeNode } from "./TreeNode";

export class ArrayTree<T> implements Tree<T> {
  readonly #data: TreeNode<T>;

  #currentLayer: TreeNode<T>;

  constructor(data: T) {
    this.#data = new TreeNode(undefined, data);
    this.#currentLayer = this.#data;
  }

  load(node: TreeNode<T>) {
    this.#currentLayer = node;
    return this;
  }

  root() {
    return this.#data;
  }

  up() {
    const father = this.#currentLayer.father;
    if (father) this.#currentLayer = father;
    return this;
  }

  down(index: number) {
    const child = this.#currentLayer.children[index];
    if (child) this.#currentLayer = child;
    return this;
  }

  add(value?: T) {
    this.#currentLayer.children.push(new TreeNode(this.#currentLayer, value));
    return this;
  }

  clear() {
    this.#currentLayer.children.length = 0;
  }

  delete(value: T) {
    if (this.has(value)) {
      this.#currentLayer.children = this.#currentLayer.children.filter(
        (e) => value !== e,
      );
      return true;
    }
    return false;
  }

  has(value: T) {
    return (
      this.#currentLayer.children.length !==
      this.#currentLayer.children.filter((e) => value !== e).length
    );
  }

  search(matcher: (n: TreeNode<T>) => boolean) {
    const matched: TreeNode<T>[] = [];

    function searchInSingleTree(stn: TreeNode<T>) {
      stn.children.forEach((n) => {
        if (n.children.length > 0) searchInSingleTree(n);
        if (matcher(n)) matched.push(n);
      });
    }

    searchInSingleTree(this.#data);

    return matched;
  }
}
