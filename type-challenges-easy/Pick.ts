type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/* FIXME = keyof T是什么意思 语句的优先级组合是怎样的？ */
// type MyPick<T, K extends keyof T = keyof T> = {
//   [P in K]: T[P]
// }

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

export {};
