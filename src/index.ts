import { Grammar } from "./util/Grammar";

const sampleInput = ["E->E+T", "E->T", "T->T*F", "T->F", "F->(E)", "F->i"];

console.log(`${Grammar.fromProductions(sampleInput)}`);
