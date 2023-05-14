import { Link } from "react-router-dom";

const DoctorCard = ({doctor}) => {
    const {_id , name , description , image ,expertise} = doctor;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{expertise}</p>
            <p className="text-xl text-orange-500">{description}</p>
            <div className="card-actions">
                <Link to={`/appointment/${_id}`}>
                    <button className="btn btn-primary">Get Appointment</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default DoctorCard;