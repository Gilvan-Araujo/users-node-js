import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userWithId = this.usersRepository.findById(user_id);

    if (!userWithId) throw new Error("User not found");

    const user = this.usersRepository.turnAdmin(userWithId);

    return user;
  }
}

export { TurnUserAdminUseCase };
