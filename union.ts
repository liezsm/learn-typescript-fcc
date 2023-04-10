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

function getDBId(id: number | string) {
  console.log(`DB is is ${id}`);

  if (typeof id == "string") {
    id.toLowerCase();
  }
  if (typeof id == "number") {
    id.toFixed();
  }
}

getDBId(3);
getDBId("3");

// using union in array

// const data: number[] = [1,2,3,"4"]
// const data: string[] = [1,2,3,"4"]
// const data: string[] | number[] = [1,2,3,"4"]

const data: (string | number)[] = [1, 2, 3, "4"];

// example

let seatAllotment: "aisle" | "middle" | "window";

// seatAllotment = "test"
seatAllotment = "aisle";
export {};
