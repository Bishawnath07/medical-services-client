import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AppionmentRow from "./appionmentRow";

const MyAppoinment = () => {
    const {user} = useContext(AuthContext);
    const [appionments , setAppionments] = useState([])
    const [bookings, setBookings] = useState([]);
    const [searchText, setSearchText] = useState("");

    const url = `http://localhost:5000/appionment?email=${user?.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAppionments(data))
    } , [])

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/appionment/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleSearch = () => {
        fetch(`http://localhost:5000/getJobsByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAppionments(data);
          });
      };

    return (
        <div>
            <h2>My Appionment: {appionments.length} </h2>
            <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="input input-bordered input-warning w-full max-w-xs"
          />{" "}
          <button onClick={handleSearch} className="btn btn-outline btn-success">Search</button>
        </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>treatment</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appionments.map(appionment => <AppionmentRow
                            key = {appionment._id}
                            appionment= {appionment}
                            handleDelete={handleDelete}
                            ></AppionmentRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;