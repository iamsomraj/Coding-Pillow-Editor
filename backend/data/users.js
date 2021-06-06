import bcrypt from "bcryptjs";
const users = [
  {
    name: "Somraj",
    email: "iamsomraj@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
