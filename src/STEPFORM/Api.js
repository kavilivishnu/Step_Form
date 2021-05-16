import React, { useState } from 'react';
import axios from 'axios';

function Api() {

    const [apiData, setApiData] = useState([])
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const pullingData = (val) => {
        setApiData(val)
        setIsLoading(false);
    }

    const handleFetch = () => {
        setShow(!show);
        const fetched = "https://jsonplaceholder.typicode.com/posts";
        axios.get(fetched).then((res) => pullingData(res.data)).catch((err) => console.log(err));
        setIsLoading(true);
    }

    return (
        <div>
            <h2>Task 3: Fetch data from Api</h2>
            <button className="button" onClick={(e) => handleFetch(e)} >{show ? "Hide Data" : "Fetch Data"}</button>
            {show ?
                <div>
                    {isLoading ? "loading..." :
                        <div>
                            {apiData.map((items, id) => (
                                <div key={id} >
                                    <p><b>Title:</b> {items.title}</p>
                                    <p><b>Body:</b> {items.body}</p><br />
                                </div>
                            ))}
                        </div>
                    }
                </div>
                :
                ""
            }
        </div>
    )
}

export default Api;
