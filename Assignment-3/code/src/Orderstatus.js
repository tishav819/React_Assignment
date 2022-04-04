import { timeStampformatter } from "./Formatdate";
const Orderstatus = ({ employee }) => {

    const Statusdetail = ({ detailName, detail}) => {
        return (
            <div className="StatusdetailWrapper">
                <div className="StatusdetailName">{detailName + " "}</div>
                <div className="Statusdetail">{detail}</div>
            </div>
        );
    };
    return (
        <div className="Statusinfo">
            <Statusdetail
            detailName={"Status"}
            detail={employee.status}
            />
            <Statusdetail detailName={"Door"} detail={employee.Door} />
            <Statusdetail
            detailName={"Time"}
            detail={timeStampformatter(employee.apointmentdOn)}
            />

        </div>
    )
};

export default Orderstatus;


