import axios from "axios"
import { useEffect, useState } from "react";
import CyberMasterCard from "./CyberMasterCard";
import Navbar from "./Navbar";
import Cart from "./Cart";

const Home = () => {
    const [cyberMaster, setCyberMaster] = useState([])
    const [errors, setErrors] = useState("")
    const [cartItem, setCartItem] = useState([])
    useEffect(()=>{
            axios.get("./experts.json")
            .then(response => setCyberMaster(response.data))
            .catch(error => setErrors(error));
    },[])
   
   const addToCart = (id) => {
        const selectedItem = cyberMaster.find((item) => item.id === id);
        if (!selectedItem) return;
        const exists = cartItem.find((item) => item.id === id);
        if (!exists) {
            setCartItem([...cartItem, selectedItem]);
        }
    };
    return (
        <div>
            <Navbar/>
            <div className="p-5 flex justify-between items-start w-10/12 mx-auto gap-2 bg-gray-100">
                <div className="grid grid-cols-3 flex-3 gap-5">
                    {
                        errors ? (<p className="text-red-500 font-semibold">{errors}</p>) : 
                        (
                            cyberMaster.map((item)=>{
                                return (
                                    <CyberMasterCard master={item} addToCart={addToCart} key={item.id}/>
                                )
                            })
                        )
                    }   
                    
                </div>
                <div className="flex-1 bg-gray-100 rounded-md shadow-md sticky top-5">
                    <Cart cartItem={cartItem} key={cartItem.id}/>
                </div>
            </div>
        </div>
    );
};

export default Home;