import { useEffect } from "react"
async function appContext(){
    
       let response = await fetch( 
        "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538,ISBN:0140449132,ISBN:0439023521,ISBN:0679783261,ISBN:0743273567,ISBN:0307277674,ISBN:0385472579,ISBN:0061120081,ISBN:0142437239,ISBN:0140449264,ISBN:0140449183,ISBN:0140449272,ISBN:0140449191,ISBN:0140449205,ISBN:0140449213,ISBN:0140449221,ISBN:014044923X,ISBN:0140449248,ISBN:0140449256,ISBN:0140449267&format=json&jscmd=data"
    );
        let response1=await response.json();
return response1;
}
useEffect(()=>{
    appContext();
},[])
export default appContext();