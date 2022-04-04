const Productlist = ({ employee }) => {

    return (
        <div className="ProductInfo">
            <img className = "Image" src = {employee.image} alt="avatar" />
            
            <p className="Product1">{employee.role}</p>
            <p className="Product2">{employee.summary}</p>
        </div>
        
        
    );
};

export default Productlist;