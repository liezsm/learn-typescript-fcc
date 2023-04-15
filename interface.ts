interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  goodleId?: string;
  startTrial(): string;
  getCoupon(couponname: string): number;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: User = {
  dbID: 22233,
  email: " h@com",
  userId: 13343,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (couponname: "ktacoupokn") => {
    return 10;
  },
};

const hitesh2: Admin = {
  dbID: 22233,
  email: " h@com",
  userId: 13343,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (couponname: "ktacoupokn") => {
    return 10;
  },
  role: "admin",
};

// -interface vs types

// - types and interface are alike in many ways but the difference is interface can be reopend and can add new properties while type, we cannot.

// -example below

interface Sample {
  name: string;
  email: string;
  id: number;
}

interface Sample {
  age: number;
}

// -if we want to extend using type, we can by using intersection

type UserSample = {
  name: string;
};

type User1 = UserSample & {
  age: number;
};
