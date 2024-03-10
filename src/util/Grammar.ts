export class Grammar {
  s?: string;
  vn: string[] = [];
  vt: string[] = [];
  p: [string, string][] = [];

  static fromProductions(productions: string[]) {
    const g = new Grammar();

    const lPieces: string[] = [];
    const rPieces: string[] = [];
    const rs: string[] = [];

    productions.forEach((p) => {
      const [l, r] = p.replace(" ", "").split("->");
      lPieces.push(...l.split(""));
      rPieces.push(...r.split(""));
      rs.push(r);
      g.p.push([l, r]);
    });

    lPieces.forEach((l) => {
      if (rs.indexOf(l) === -1) g.s = l;
    });

    g.vn = Array.from(new Set(lPieces));

    g.vt = Array.from(
      new Set(rPieces.filter((r) => lPieces.indexOf(r) === -1)),
    );

    return g;
  }

  toString() {
    return `S:\n\t${this.s}\nVn:\n\t${this.vn.join(
      "\n\t",
    )}\nVt:\n\t${this.vt.join("\n\t")}\nP:\n\t${this.p
      .map((p) => `${p[0]}->${p[1]}`)
      .join("\n\t")}`;
  }
}
