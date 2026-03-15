import React, { Suspense, use } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface UserResponse {
  users: User[];
}

function getUser(): Promise<UserResponse> {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
}

function UsersList({ usersPromise }: { usersPromise: Promise<UserResponse> }) {
  const getUsersList = use(usersPromise);
  return (
    <div>
      {getUsersList.users.map((user) => (
        <div key={user.id}>
          <p>
            {user.firstName}-{user.lastName}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function UseHookExample() {
  const usersPromise = getUser();
  return (
    <div>
      <h1>UseHookExample</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
}
