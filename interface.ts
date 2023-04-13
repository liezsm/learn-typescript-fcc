interface User {
  readonly dbID: number;
  email: string;
  userId: number;
  goodleId?: string;
  startTrial(): string;
  getCoupon(couponname: string): number;
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
