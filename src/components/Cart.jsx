import Button from "./Button";

const Cart = ({cartItem}) => {
    const totalSalary = cartItem.reduce(
    (total, item) => total + item.salary, 0);
    
    return (
        <div className="bg-white w-full p-2 rounded-md shadow-md flex flex-col gap-4">
            <div className="p-2 rounded-md shadow-lg">
                <h1 className="text-md font-bold">Expert Added: {cartItem.length}</h1>
                <h1 className="text-md font-bold">Total Cost: $ {totalSalary}</h1>
            </div>
            <div className="space-y-4">
            {cartItem.map((item)=>{
                return (
                <div key={item.id} className="flex justify-start gap-4 items-center shadow-md bg-white">
                    <img src={item.img} alt="Avatar" className="w-12 h-12 rounded-lg"/>
                    <p>{item.name}</p>
                </div>
                )
                }
            )}
            </div>
            <div className="mt-auto pt-3 flex justify-end">
                    <Button color="default">Confirm List</Button>
            </div>
        </div>
    );
};

export default Cart;