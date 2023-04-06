const superHeros: string[] = [];

const heroPower: number[] = [];
// -or we can declare array like this:
const heroPowers: Array<number> = [];

superHeros.push("spidey");
heroPowers.push(2);

type User = {
  name: string;
  isActive: boolean;
};

const users: User[] = [
  {
    name: "st",
    isActive: false,
  },
  {
    name: "sts",
    isActive: true,
  },
];

// -or

const usersx: Array<User> = [
  {
    name: "st",
    isActive: false,
  },
  {
    name: "sts",
    isActive: true,
  },
];

// -example of defining of arrays of array

const MLModels: number[][] = [
  [255, 255, 255],
  [23, 2323, 233],
  // 'fsdf'
];
