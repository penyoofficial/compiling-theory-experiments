import { GrammarParser } from "./util/GrammarParser";

const sampleInput = `E->E+T
E->T
T->T*F
T->F
F->(E)
F->i`;

const parser = new GrammarParser(sampleInput.split("\n"));
console.log(parser.grammar.toString());
