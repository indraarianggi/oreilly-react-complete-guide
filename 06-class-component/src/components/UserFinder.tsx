import React, { Component, useEffect, useState } from "react";
import Users, { IUser } from "./Users";

import styles from "./UserFinder.module.css";

const DUMMY_USERS: IUser[] = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

type TUserFinderProps = {};

type TUserFinderState = {
  filteredUsers: IUser[];
  searchTerm: string;
};

class UserFinder extends Component<TUserFinderProps, TUserFinderState> {
  state: TUserFinderState = {
    filteredUsers: [],
    searchTerm: "",
  };

  // called once when component initially mounted
  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps: TUserFinderProps, prevState: TUserFinderState) {
    // to prevent infinite loop caused by updating filteredUsers
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState((prevState) => ({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.toLowerCase().includes(prevState.searchTerm.toLowerCase())
        ),
      }));
    }
  }

  searchChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

/**
 * This is the Functional Component version
 */
/*
const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={styles.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </>
  );
};
*/

export default UserFinder;
