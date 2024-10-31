// src/app/tickets/users/page.js
import { IconCheck, IconUserOff } from "@tabler/icons-react";

const users = [
  {
    name: "Harry Green",
    job: "QA Engineer",
    isAvailable: false,
  },
  {
    name: "Trudy Torres",
    job: "Project Manager",
    isAvailable: true,
  },
  {
    name: "Alice Ling",
    job: "Software Engineer",
    isAvailable: false,
  },
];

const UserList = () => {
  return (
    <table>
      {/* Table Heads */}
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>

      {/* Table body */}
      <tbody>
        {users.map((user) => (
          // Each user row
          <tr key={user.name}>
            {/* user name and availablity status */}
            <td style={{ color: !user.isAvailable ? "red" : undefined }}>
            {user.isAvailable ? <IconCheck /> : <IconUserOff />} {user.name}
            </td>
            {/* user job */}
            <td>
              {user.job}
            </td>

          </tr>
        ))}
      </tbody>
      
      
    </table>
  )
}

export default UserList;
