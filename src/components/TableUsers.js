import { useState, useEffect } from "react";
import TableUsersRow from "./TableUsersRow";

const TableUsers = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (response.ok) {
                const users = await response.json();
                return { status: response.status, users };
            }

            return { status: response.status }
        }
        catch (error) {
            return { error };
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            const users = await fetchUsers();

            if (users.error) {
                console.error(users.error);
                return;
            }

            if (users.status === 200) {
                setUsers(users.users);
            }
            else {
                console.warn("There was a problem. Status code:", users.status);
            }
        }

        getUsers();
    }, []);

    return (
        <table className="table-users">
            <thead className="table-users--head">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody className="table-users--body">
                {users.map(user => {
                    return (
                        <TableUsersRow key={user.id} user={user} />
                    );
                })}
            </tbody>
        </table>
    )
}

export default TableUsers