import { useLoaderData } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import { useEffect, useState } from "react";


const Doctors = () => {
    const [doctors , setDoctors] = useState([]);

    const doctorsLoader = useLoaderData();
    
    const itemsPerPage = 10;
    const totalPages = Math.ceil(doctorsLoader / itemsPerPage);
    console.log(totalPages)

    // const pageNumbers = [...Array(totalPages).keys()]
    

    useEffect( ()=>{
        fetch('http://localhost:5000/doctors').then(res =>res.json()).then(data =>setDoctors(data))
    }, [])

    return (
       <>
        <div>
            <h1 className="text-5xl font-bold text-center my-16">Ours Doctors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    doctors.map(doctor =><DoctorCard
                    key={doctor._id}
                    doctor={doctor}
                    ></DoctorCard>)
                }
            </div>
        </div>
         {/* pagination */}
         <div className="pagination">
                {/* <p>current Page: {currentPage} and items per page: {itemsPerPage}</p> */}
                {/* {
                    pageNumbers.map(number => <button
                        key={number}
                        
                    >{number}</button>)
                } */}
                {/* <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select> */}
            </div>
       </>
    );
};

export default Doctors;