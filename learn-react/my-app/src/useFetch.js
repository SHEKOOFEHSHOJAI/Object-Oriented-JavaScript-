import { useState, useEffect } from "react";




const useFetch=(url)=>{
 const [data, setData] = useState(null);
 const [isPending, setPending] = useState(true);
 const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch(url)
          .then((res) => {
            //show in catch and can't get data in API
            if (!res.ok) {
              throw Error("clould not fetch the data for that resource");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
            //when data has load not show
            setPending(false);
            // if get data don't show error
            setError(null);
          })
          .catch((err) => {
            // console.log(err.message);
            //show error in browser
            setPending(false);
            setError(err.message);
          });
      }, 1000);
      //[] dependency arry  => the seconed argument just run one and run just with render no chenge data
      //no dependency arry run for each change in page
      //[name ]=>run for change useState
      //  console.log(name);
    }, [url]);
    return{data,isPending,error}
}

export default useFetch