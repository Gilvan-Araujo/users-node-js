import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const doesUserAlreadyExist = this.usersRepository.findById(user_id);

    if (!doesUserAlreadyExist) throw new Error("Mensagem de erro!");

    return doesUserAlreadyExist;
  }
}

export { ShowUserProfileUseCase };
