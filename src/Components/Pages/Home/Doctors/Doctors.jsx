import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";


const Doctors = () => {

    const [doctors , setDoctors] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/doctors').then(res =>res.json()).then(data =>setDoctors(data))
    }, [])

    return (
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
    );
};

export default Doctors;