// Users.js
import React from 'react';
import { deleteById, patchById } from '../../Service';
import { BASE_URL_USERS } from '../../Service/Api';
import { useNavigate } from 'react-router-dom';
import Search from '../Home/Search';
import UserSort from './UserSort';
import AdminBtn from './AdminBtn';

const Users = ({ state, dispatch }) => {
  const UserDelete = (id) => {
    deleteById(BASE_URL_USERS, id);
    dispatch({
      type: "DELuser",
      id,
    });
  };

  const handleEdit = (id) => {
    navigate("/edituser", { state: { id: id } });
  };

  const handleAdminToggle = async (id, isAdmin) => {
    const obj = { isAdmin: !isAdmin }; 
    await patchById(BASE_URL_USERS, id, obj);
    dispatch({
      type: "ToggleAdmin",
      id,
    });
  };

  const navigate = useNavigate();

  return (
    <div className='container'>
      <Search state={state} dispatch={dispatch} />
      <UserSort state={state} dispatch={dispatch} />
      <AdminBtn state={state} dispatch={dispatch} />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                UserName
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {
              state.allUserSearch.map((item) => {
                return (
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th className="px-6 py-4">{item.id}</th>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="ps-3">
                        <div className="text-base font-semibold">{item.name}</div>
                        <div className="font-normal text-gray-500">
                          {item.surname}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{item.userName}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" />{" "}
                        {item.password}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        {item.email}
                      </a>
                    </td>
                    <td className="px-6 py-4">{item.gender}</td>
                    <td className="px-6 py-4 text-red-600">{item.isAdmin ? "Admin" : "User"} <input onChange={()=>handleAdminToggle(item.id,item.isAdmin)}  type="radio" /></td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => UserDelete(item.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(item.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;
