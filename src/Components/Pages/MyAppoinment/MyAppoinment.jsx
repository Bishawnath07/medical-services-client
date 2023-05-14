import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AppionmentRow from "./appionmentRow";

const MyAppoinment = () => {
    const {user} = useContext(AuthContext);
    const [appionments , setAppionments] = useState([])
    const url = `http://localhost:5000/appionment?email=${user?.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setAppionments(data))
    } , [])

    return (
        <div>
            <h2>My Appionment: {appionments.length} </h2>
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
                            ></AppionmentRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;