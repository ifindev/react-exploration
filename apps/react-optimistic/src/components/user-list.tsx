import { use } from 'react';
import { ApiResponse } from '../models/api.model';
import { User } from '../models/user.model';
import userManagementStore from '../stores/user-management.store';
import Button from './button';

type Props = {
  usersPromise: Promise<ApiResponse<User[]>>;
};

export default function UserList({ usersPromise }: Props) {
  const users = use(usersPromise);

  if (users.status === 'error') {
    return <p>Error getting users data!</p>;
  }

  return (
    <>
      <Button onClick={() => userManagementStore.actions.openNewUserModal()}>
        Add User
      </Button>
      {users.data.map((user) => (
        <div className="flex items-center">
          <button className="p-2 border border-gray-200 rounded w-full text-left hover:bg-gray-100">
            {user.name}
          </button>
        </div>
      ))}
    </>
  );
}
