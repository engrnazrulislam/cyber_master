import Button from "./Button";
const CyberMasterCard = ({master,addToCart}) => {
    
    return (
        <>
            <div className="p-3 bg-white shadow-xl w-full mx-auto rounded-md flex flex-col h-full">
                <div className="flex-1">
                    <div className="flex justify-center items-center">
                        <img className="h-48 w-96 object-cover" src={master.img} alt="profile_photo" />
                    </div>
                    <div>
                        <p className="text-md"><span className="font-bold">Name: </span>{master.name}</p>
                        <p className="text-md"><span className="font-bold">Designation: </span> {master.designation}  </p>
                        <p className="text-md"><span className="font-bold">Address: </span>{master.address} </p>
                        <p className="text-md"><span className="font-bold">Salary:  </span> $ {master.salary} </p>
                    </div>
                </div>
                <div className="mt-auto pt-3 flex justify-end">
                    <Button handleClick={()=>addToCart(master.id)} color="danger">Add To Cart</Button>
                </div>
            </div>
        </>
    );
};

export default CyberMasterCard;