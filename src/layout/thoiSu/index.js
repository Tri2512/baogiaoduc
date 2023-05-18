import {useEffect,useState} from "react";
import axios from "axios";
function App1(){
    const [arrTS,setArrTS] = useState([]);

    console.log(arrTS);
    const getArr = async () => {
        try{
            const res = await axios.get("http://localhost:4001/");
            setArrTS(res.data);
        }catch (error){
            console.log(error);
        }
    }
    useEffect(() => {
        getArr();
    },[])
    return(
        <>
            <h1>Bao thoi su</h1>
        </>
    );
}

export default App1;