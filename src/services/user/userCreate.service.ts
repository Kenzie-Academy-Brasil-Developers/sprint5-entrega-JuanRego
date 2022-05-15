import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser } from "../../interfaces/users/index";
import bcrypt from "bcrypt";

const userCreateService = async ({
  email,
  name,
  password,
  age,
}: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email Already Exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.age = age;
  user.created_at = new Date();
  user.updated_at = new Date();

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;
