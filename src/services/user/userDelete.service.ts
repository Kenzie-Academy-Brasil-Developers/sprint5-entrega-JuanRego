import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserListOne } from "../../interfaces/users";

const userDeleteService = async ({ id }: IUserListOne) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });
  if (user) {
    await userRepository.remove(user);
    return "User removed";
  }
};

export default userDeleteService;
