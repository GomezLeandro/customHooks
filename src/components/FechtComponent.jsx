import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const FechtApp = () => {

  const url= 'https://jsonplaceholder.typicode.com/users'
  const { data, isLoading, error,fetchData } = useFetch();
  
  const body= {
    title:'foo',
    body:'bar',
    userId: 1,
  }

  useEffect(() => {
   fetchData(url, 'GET')
   // fetchData(url, 'POST', body) solo se le agrega body
   // fetchData(url, 'PUT', body) SE LE AGREGA EL ID users/1
   // fetchData(url, 'DELETE') SIN BODY PERO CON ID USERS/1
  }, [])
  

  return (
    <>
      <h2> Lista de Usuarios </h2>
      {isLoading ? (
        <h4> Cargando... </h4>
      ) : error ? (
        <h4> Ha ocurrido un error: {error} </h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map(user =>{
                    return(
                    <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    </tr>
                    )

                })
            }
          </tbody>
        </table>
      )}
    </>
  );
};
