import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function PersonalDetails({ handleNextPage, formData, setFormData }) {

    const { firstname, lastname, middlename, email, contactnumber } = formData;

    // const [personalDetails, setPersonalDetails] = useState({ name: "" });

    // const history = useHistory();

    // const handleChange = (e) => {
    //     setPersonalDetails({
    //         [e.target.name]: e.target.value
    //     })
    // }

    return (
        <div>
            <br />
            <h2>Enter Your Personal Details</h2><br />
            <div>
                <input placeholder="Monkey..." value={firstname} onChange={setFormData} name="firstname" size="40" /><br /><br /><br />
                <input placeholder="...Luffy" value={lastname} onChange={setFormData} name="lastname" size="40" /><br /><br /><br />
                <input placeholder="D" value={middlename} onChange={setFormData} name="middlename" size="40" /><br /><br /><br />
                <input placeholder="stayhome@staysafe.com..." value={email} onChange={setFormData} name="email" size="40" /><br /><br /><br />
                <input placeholder="1234567898..." value={contactnumber} onChange={setFormData} name="contactnumber" size="40" /><br /><br /><br />
                <button className="button" onClick={(e) => handleNextPage(e)} >Next</button>
            </div>
        </div>
    )
}

export default PersonalDetails;
