interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit2<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

type MyOmit<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P];
};

type MyOmit2<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

type Exclude<T, U> = T extends U ? never : T;

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export {};
