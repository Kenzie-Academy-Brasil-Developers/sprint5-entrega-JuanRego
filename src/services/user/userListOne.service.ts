import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserListOne } from "../../interfaces/users";

const userListOneService = async ({ id }: IUserListOne) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);

  return user;
};

export default userListOneService;
