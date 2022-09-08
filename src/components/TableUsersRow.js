const TableUsersRow = ({ user }) => {
    return (
        <tr className="table-users--row">
            <td className="table-users--data">{user.id}</td>
            <td className="table-users--data">{user.name}</td>
            <td className="table-users--data">{user.email}</td>
            <td className="table-users--data">{user.phone}</td>
            <td className="table-users--data">{user.address.city}</td>
            <td className="table-users--data">{user.company.name}</td>
        </tr>
    );
}

export default TableUsersRow