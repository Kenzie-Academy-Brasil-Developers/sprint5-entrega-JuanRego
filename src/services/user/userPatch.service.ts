import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser, IUserListOne } from "../../interfaces/users";
import bcrypt from "bcrypt";

const userPatchService = async (
  { id }: IUserListOne,
  { name, email, password, age }: ICreateUser
) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });

  if (user) {
    user.name = name;
    user.email = email;
    user.password = bcrypt.hashSync(password, 10);
    user.age = age;

    await userRepository.save(user)

    return user;
  }
};

export default userPatchService;
