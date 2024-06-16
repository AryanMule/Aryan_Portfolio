import React from "react";
import { Oval } from 'react-loader-spinner';
import "../Loader/loader.css";


const Loading = () => {
    return (

        <div className="loader">

            <Oval 
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>

    );
};

export default Loading;