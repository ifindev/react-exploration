// #region IMPORTS
import { proxy } from 'valtio';
import { User } from '../models/user.model';
// #endregion

// #region STATE TYPE
/**
 * Represents the state of the user management
 */
type UserManagementState = {
  /** Indicates whether the detail modal for user information is open */
  isNewUserModalOpen: boolean;

  /** Currently selected user */
  selectedUser: User | null;
};
// #endregion

// #region INITIAL STATE
/**
 * The initial state of the user management store
 */
const initialState = {
  isNewUserModalOpen: false,
  selectedUser: null,
} satisfies UserManagementState;
// #endregion

// #region STATE AND ACTIONS
/**
 * The mutable state of the user management store, managed by valtio
 */
const state = proxy<UserManagementState>({ ...initialState });

/**
 * Actions to manipulate the user management state
 */
const actions = {
  /**
   * Open user detail modal
   */
  openNewUserModal: () => {
    state.isNewUserModalOpen = true;
  },
  /**
   * Close user detail modal
   */
  closeNewUserModal: () => {
    state.isNewUserModalOpen = false;
  },
  /**
   * Select user
   */
  selectUser: (user: User) => {
    state.selectedUser = user;
  },
  /**
   * Reset selected user
   */
  resetUser: () => {
    state.selectedUser = null;
  },
};
// #endregion

// #region STORE
/**
 * Represents the structure of UserManagementStore
 */
type UserManagementStore = {
  actions: typeof actions;
  initialState: Readonly<typeof initialState>;
  state: Readonly<UserManagementState>;
};

/**
 * The main store object for managing user management state and actions.
 */
const userManagementStore: UserManagementStore = {
  actions,
  initialState,
  state,
};
// #endregion

export default userManagementStore;
