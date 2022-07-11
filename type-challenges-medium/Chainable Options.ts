declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

/* // js class
class Chain {
  constructor(previous = {}) {
    this.obj = { ...previous }
  }
  
  obj: Object
  get () {
    return this.obj
  }
  option(key: string, value: any) {
    return new Chain({
      ...this.obj,
      [key]: value
    })
  }
}

const config = new Chain() 
*/

type Chainable<Result = {}> = {
  option: <K extends string, V>(
    key: K,
    value: V
  ) => Chainable<
    Result & {
      [P in K]: V;
    }
  >;
  get: () => Result;
};

export { Chainable };
