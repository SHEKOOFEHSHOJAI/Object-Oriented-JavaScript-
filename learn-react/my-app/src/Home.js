const  Home= () => {
    const handelClick=()=>{
        console.log('hello,ninja');
    }
    return (  

        <div className="home">
            <h1>Home page</h1>
            <button onClick={handelClick}>Click Me </button>
        </div>
    );
}
 
export default Home ;