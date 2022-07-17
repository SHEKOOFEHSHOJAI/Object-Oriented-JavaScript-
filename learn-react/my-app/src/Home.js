const  Home= () => {
    
    const handelClick=()=>{
        console.log('hello,ninja');
    }


     const handelClickAgain=(name)=>{
        console.log('hello',name);
    }
    
    return (  

        <div className="home">
            <h1>Home page</h1>
           <button onClick={handelClick}>Click Me </button>
           {/* for  */}
            <button onClick={()=>{
               handelClickAgain('mario')

            }}></button>
        </div>
    );
}
 
export default Home ;