import { Grammar } from "./Grammar";

export class GrammarParser {
  grammar = new Grammar();

  constructor(phrases: string[]) {
    const lPieces: string[] = [];
    const rPieces: string[] = [];
    const rs: string[] = [];
    const lrPair: [string, string][] = [];

    phrases.forEach((p) => {
      const [l, r] = p.replace(" ", "").split("->");
      lPieces.push(...l.split(""));
      rPieces.push(...r.split(""));
      rs.push(r);
      lrPair.push([l, r]);
    });

    lPieces.forEach((l) => {
      if (rs.indexOf(l) === -1) this.grammar.s = l;
    });

    this.grammar.vn = Array.from(new Set(lPieces));

    this.grammar.vt = Array.from(
      new Set(rPieces.filter((r) => lPieces.indexOf(r) === -1)),
    );

    this.grammar.p = lrPair;
  }
}
