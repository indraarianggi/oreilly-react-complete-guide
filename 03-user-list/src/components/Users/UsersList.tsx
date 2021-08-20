import styled from "styled-components";
import Container from "../UI/Container";
import Card from "../UI/Card";
import { IUser } from "../../App";

const UsersListBase = styled.ul`
  list-style: none;
  padding: 1rem;
`;

const UserListItem = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

type TUsersListProps = {
  users: IUser[];
};

const UsersList = ({ users }: TUsersListProps) => {
  return (
    <Container>
      <Card>
        <UsersListBase>
          {users.map((user) => (
            <UserListItem key={user.id}>
              {user.username} ({user.age} years old)
            </UserListItem>
          ))}
        </UsersListBase>
      </Card>
    </Container>
  );
};

export default UsersList;
