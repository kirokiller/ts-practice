type Test = -100;

type Result = Absolute<Test>; // expect "100"

type Absolute<T extends number> = `${T}` extends `-${infer R}` ? R : `${T}`;

export { Absolute };
