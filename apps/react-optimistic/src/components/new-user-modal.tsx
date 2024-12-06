/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useActionState } from 'react';
import { redirect } from 'react-router';
import { useSnapshot } from 'valtio';
import userService from '../services/user.service';
import userManagementStore from '../stores/user-management.store';
import Button from './button';
import FormInput from './form-input';

export default function NewUserModal() {
  const { isNewUserModalOpen } = useSnapshot(userManagementStore.state);
  const [_, submitAction, isPending] = useActionState(
    async (_: any, formData: FormData) => {
      const name = formData.get('name') as string;
      const age = parseInt(formData.get('age') as string);
      const email = formData.get('email') as string;

      await userService.addUser({ name, age, email });
      userManagementStore.actions.closeNewUserModal();
      redirect('/path');
      return null;
    },
    null
  );

  if (!isNewUserModalOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      className="absolute h-screen w-screen flex justify-center items-center bg-black bg-opacity-80"
    >
      <div className="flex flex-col gap-4 bg-white rounded-md p-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">New User</h2>
          <button
            onClick={() => userManagementStore.actions.closeNewUserModal()}
            className="w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr />
        <form action={submitAction} className="flex flex-col gap-4">
          <FormInput type="text" name="name" id="name" label="Name" required />
          <FormInput type="number" name="age" id="age" label="Age" required />
          <FormInput
            type="email"
            name="email"
            id="email"
            label="Email"
            required
          />
          <Button disabled={isPending} type="submit">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
