import { timeStampformatter } from "./Formatdate";
const Orderinfo = ({ employee }) => {
    const Orderdetail = ({ detailName, detail}) => {
        return (
            <div className="ContactdetailWrapper">
                <span className="ContactdetailName">{detailName + " "}</span>
                <span className="Contactdetail">{detail}</span>
            </div>
        );
    };
    return (
        <div className="ContactInfo">
            <div className="Contactdet">
            <Orderdetail
            detailName={"Appointment:"}
            detail = {timeStampformatter(employee.apointmentdOn)}
            />
            <Orderdetail detailName={"Email:"} detail = {employee.email}/>
            <Orderdetail detailName={"Phone:"} detail = {employee.phone}/>
        </div>

        </div>
        
    );
};

export default Orderinfo;