import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function Address({ handleNextPage, handlePreviousPage, formData, setFormData }) {

    const { plotno, locality, pincode, state, nationality } = formData;

    // const [address, setAddress] = useState({ adressess: "" });
    // const history = useHistory();

    // const handleChange = (e) => {
    //     setAddress({
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <div>
            <br />
            <h2>Enter Your Address below</h2><br />
            <div>
                <input placeholder="Plot no 54..." value={plotno} onChange={setFormData} name="plotno" size="30" /><br /><br /><br />
                <input placeholder="Locality: konohagakure..." value={locality} onChange={setFormData} name="locality" size="30" /><br /><br /><br />
                <input placeholder="PinCode: 500021..." value={pincode} onChange={setFormData} name="pincode" size="30" /><br /><br /><br />
                <input placeholder="State: Soul society..." value={state} onChange={setFormData} name="state" size="30" /><br /><br /><br />
                <input placeholder="Nationality: Animeians..." value={nationality} onChange={setFormData} name="nationality" size="30" /><br /><br />
            </div><br /><br />
            <button className="button" style={{ marginRight: "16px" }} onClick={(e) => handlePreviousPage(e)} >Back</button>
            <button className="button" onClick={(e) => handleNextPage(e)} >Next</button>
        </div>
    )
}

export default Address;
