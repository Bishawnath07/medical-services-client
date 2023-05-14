

const AppionmentRow = ({appionment}) => {
    const {name , date, treatment , image} = appionment
    return (
        <tr>
        <th>
            <button className="btn btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td>
            {name}
        </td>
        <td>
            {treatment}
        </td>
        <td>{date}</td>
        
        <th>
            {
                status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                    <button  className="btn btn-ghost btn-xs">Please Confirm</button>}
        </th>
    </tr>
    );
};

export default AppionmentRow;