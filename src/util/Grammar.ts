export class Grammar {
  s?: string;
  vn: string[] = [];
  vt: string[] = [];
  p: [string, string][] = [];

  toString() {
    return `S:\n\t${this.s}
Vn:\n\t${this.vn.join("\n\t")}
Vt:\n\t${this.vt.join("\n\t")}
P:\n\t${this.p.map((p) => `${p[0]}->${p[1]}`).join("\n\t")}`;
  }
}
