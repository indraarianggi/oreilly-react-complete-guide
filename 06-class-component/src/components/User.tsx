import { Component } from "react";

import styles from "./User.module.css";

type TUserProps = {
  name: string;
};

class User extends Component<TUserProps> {
  render() {
    return <li className={styles.user}>{this.props.name}</li>;
  }
}

/**
 * This is the Functional Component version
 */
/*
const User = (props: TUserProps) => {
  return <li className={classes.user}>{props.name}</li>;
};
*/

export default User;
