const Header = ({ employee }) => {
    return (
        <div className="Header">
            <div className="HeaderNavigator">
                <div className="Backbtn">{"<"}</div>
            </div>
            <div className="HeaderContent">
                <div className="EmployeeName">{employee.name}</div>
                <div className="EmployeeId">{employee.id}</div>
            </div>
            <div className="Printwrapper">
                <button>Print</button>
            </div>
        </div>
    );
};

export default Header;