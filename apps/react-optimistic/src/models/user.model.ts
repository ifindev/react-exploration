export type User = {
  /** Unique identifier for the user */
  id: string;

  /** Timestamp when the user was created (in milliseconds since Unix epoch) */
  createdAt: number;

  /** Timestamp when the user was last updated (in milliseconds since Unix epoch) */
  updatedAt: number;

  /** Full name of the user */
  name: string;

  /** Age of the user */
  age: number;

  /** Email address of the user */
  email: string;
};

export type CreateUserReq = Omit<User, 'id' | 'updatedAt' | 'createdAt'>;

export type UpdateUserReq = {
  id: string;
} & Partial<CreateUserReq>;
