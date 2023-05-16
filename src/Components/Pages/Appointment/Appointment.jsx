import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Appointment = () => {
    const doctors = useLoaderData()
    const {user} = useContext(AuthContext);
    const { name ,image ,expertise} = doctors;
    console.log(doctors)

    const handleAppoinment = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const treatment = form.treatment.value;
        const email = user?.email;

        const appoinment = {
            name ,
            date, 
            email ,
            treatment ,
            image
        }
        console.log(appoinment)
        fetch('http://localhost:5000/appionment' ,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Appionment Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                }
        })
    }

    return (
        <div>
            <h2 className="text-4xl text-center text-purple-600">Get Appointment: {name} </h2>
            <form onSubmit={handleAppoinment}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name="email" readOnly  placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Get Treatment</span>
                        </label>
                        <input type="text" name="treatment" defaultValue={expertise} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value=" Confirm Your Appointment" />
                </div>
            </form>
        </div>
    );
};

export default Appointment;