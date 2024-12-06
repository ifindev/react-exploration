import { nanoid } from 'nanoid';
import { ApiResponse } from '../models/api.model';
import { CreateUserReq, UpdateUserReq, User } from '../models/user.model';
import toApiResponse from '../utils/api.util';
import { delayReturn } from '../utils/delay';

export class UserService {
  private users: User[];

  constructor() {
    const cachedUsers = JSON.parse(
      localStorage.getItem('users') ?? '[]'
    ) as User[];

    this.users = cachedUsers;

    // In case storage is still empty
    this.syncCache();
  }

  private syncCache() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUsers(): Promise<ApiResponse<User[]>> {
    return delayReturn(
      toApiResponse({
        data: [...this.users].reverse(),
        message: 'Success',
        status: 'success',
      }),
      5000
    );
  }

  // TODO: implement random error add users
  addUser(req: CreateUserReq): Promise<ApiResponse<User>> {
    const user: User = {
      ...req,
      id: nanoid(),
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };

    this.users.push(user);
    this.syncCache();

    return delayReturn(
      toApiResponse({
        data: user,
        message: 'Success',
        status: 'success',
      })
    );
  }

  async updateUser(req: UpdateUserReq): Promise<ApiResponse<User>> {
    const userIndex = this.users.findIndex((user) => user.id === req.id);

    if (userIndex === -1) {
      return toApiResponse({
        status: 'error',
        message: 'User not found',
      });
    }

    const currUser = this.users[userIndex];

    const updatedUser: User = {
      id: req.id,
      name: req.name ?? currUser.name,
      age: req.age ?? currUser.age,
      email: req.email ?? currUser.email,
      updatedAt: new Date().getTime(),
      createdAt: currUser.createdAt,
    };

    this.users.splice(userIndex, 1, updatedUser);
    this.syncCache();

    return delayReturn(
      toApiResponse({
        status: 'success',
        message: 'Success update user',
        data: updatedUser,
      })
    );
  }
}

// Note: Singleton for simplicity
const userService = new UserService();
export default userService;
