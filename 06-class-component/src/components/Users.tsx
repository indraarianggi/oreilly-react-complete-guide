import { Component, useState } from "react";
import User from "./User";

import styles from "./Users.module.css";

export interface IUser {
  id: string;
  name: string;
}

type TUsersProps = {
  users: IUser[];
};

type TUsersState = {
  showUsers: boolean;
};

class Users extends Component<TUsersProps, TUsersState> {
  // state initialization
  state: TUsersState = {
    showUsers: false,
  };

  // To test React Error Boundary
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    this.setState((prevState) => ({ showUsers: !prevState.showUsers }));
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/**
 * This is the Functional Component version
 */
/*
const Users = () => {
  const [showUsers, setShowUsers] = useState<boolean>(true);

  const toggleUsersHandler = () => {
    setShowUsers((prevState) => !prevState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={styles.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};
*/

export default Users;
