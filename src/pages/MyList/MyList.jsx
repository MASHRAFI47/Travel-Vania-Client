import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import Swal from "sweetalert2"

//icons
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";



const MyList = () => {
  let i = 1;
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/myProduct/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [user]);



  const handleDelete = (id) => {
    console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        fetch(`http://localhost:4000/tourists/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Successfully deleted",
                icon: "success"
              });

              const remaining = items.filter(item => item._id !== id)
              setItems(remaining)
            }
          })
      }
    });

  }


  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Tourist Spot</th>
              <th>Country</th>
              <th>Location</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(item => <tr key={item._id} className="hover">
                <th>{i++}</th>
                <td>{item.tourists_spot_name}</td>
                <td>{item.country_Name}</td>
                <td>{item.location}</td>
                <td>{item.average_cost}</td>
                <td>
                  <div className="flex gap-5">
                    <Link to={`/update-tourists/${item._id}`}>
                      <button className="text-green-600 text-xl"><FaRegEdit /></button>
                    </Link>
                    <button className="text-red-600 text-xl" onClick={() => handleDelete(item._id)}><FaRegTrashCan /></button>
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyList