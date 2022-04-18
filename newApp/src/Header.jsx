import {useEffect, useState} from 'react';
const Header = (props) => {
    const [count,setCount] = useState(0); 

    // useEffect(() => {
    //     document.title = count;
    //     console.log(count);
    // }) 
    

    return ( 
    <>
        <h1 style={{fontSize:props.fontsize,color:props.color}}>{count}</h1>
        <button onClick={() => setCount(count+1)}>Increase</button>
        <button onClick={() => setCount(count-1)}>Decrese</button>
    </>
    )
};

export default Header;