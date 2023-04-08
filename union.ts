let score: number | string = 33;

score = "44";

// score = false

// - another example

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hites: User | Admin = {
  name: "hits",
  id: 444,
};

hites = {
  username: "admin",
  id: 444,
};

export {};
