import { Suspense } from 'react';
import NewUserModal from './components/new-user-modal';
import UserList from './components/user-list';
import userService from './services/user.service';

function App() {
  const usersPromise = userService.getUsers(); // How do I trigger refetch on this after mutation??

  return (
    <main className="grid grid-cols-[20%_1fr] w-screen h-screen">
      <aside className="flex flex-col p-6 gap-4 border-r border-r-slate-400">
        <h1 className="font-bold">User List</h1>
        <Suspense fallback={<p className=" animate-pulse">Loading Users...</p>}>
          <UserList usersPromise={usersPromise} />
        </Suspense>
      </aside>
      <section>User Detail</section>
      <NewUserModal />
    </main>
  );
}

export default App;
