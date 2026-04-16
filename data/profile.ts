export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
  };
  photo: string;
};

export const profile: Profile = {
  name: "Kenzo Tanougast",
  title: "FULLSTACK DEVELOPER",
  location: "Nanterre, Île-de-France",
  email: "kenzotanougast@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/kenzo-tanougast-1267072a2",
    github: "https://github.com/",
  },
  photo: "/kenzo2.jpg",
};
