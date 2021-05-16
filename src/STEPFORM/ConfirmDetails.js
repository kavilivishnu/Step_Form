import React, { useState } from 'react'

function ConfirmDetails({ formData, setFormData }) {

    const [edit, setEdit] = useState(0);
    const [endNote, setEndNote] = useState(false);

    const {
        firstname,
        lastname,
        middlename,
        email,
        contactnumber,
        plotno,
        locality,
        pincode,
        state,
        nationality
    } = formData;

    return (
        <div>
            <br />
            {endNote ?
                <div>
                    <br />
                    <h2>You have submitted your form. We'll get back to you as soon as possible</h2>
                    <h2>Thank you very much! Staty safe.</h2>
                    <a href="/MainLogic">Go to home page</a>
                </div>
                :
                <div>
                    <br />
                    <h2>Please Check your details. If any correctiosn, please edit</h2><br />
                    <button className="button" onClick={() => setEndNote(true)}>Submit The Form</button>
                    <br /><br />
                    <div>
                        {edit === 1 ?
                            <input value={firstname} onChange={setFormData} name="firstname" />
                            :
                            <h5>First Name: {firstname}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(1)} >Edit First Name</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 2 ?
                            <input value={lastname} onChange={setFormData} name="lastname" />
                            :
                            <h5>Last Name: {lastname}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(2)} >Edit Last Name</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 3 ?
                            <input value={middlename} onChange={setFormData} name="middlename" />
                            :
                            <h5>Middle Name: {middlename}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(3)} >Edit Middle Name</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 4 ?
                            <input value={email} onChange={setFormData} name="email" />
                            :
                            <h5>Email: {email}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(4)} >Edit Email</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 5 ?
                            <input value={contactnumber} onChange={setFormData} name="contactnumber" />
                            :
                            <h5>Contact Number: {contactnumber}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(5)} >Edit Contact Number</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 6 ?
                            <input value={plotno} onChange={setFormData} name="plotno" />
                            :
                            <h5>Plot No: {plotno}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(6)} >Edit Plot No</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 7 ?
                            <input value={locality} onChange={setFormData} name="locality" />
                            :
                            <h5>Locality: {locality}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(7)} >Edit Locality</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 8 ?
                            <input value={pincode} onChange={setFormData} name="pincode" />
                            :
                            <h5>Pin Code: {pincode}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(8)} >Edit Pin Code</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 9 ?
                            <input value={state} onChange={setFormData} name="state" />
                            :
                            <h5>State: {state}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(9)} >Edit State</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br />
                    <div>
                        {edit === 10 ?
                            <input value={nationality} onChange={setFormData} name="nationality" />
                            :
                            <h5>Nationality: {nationality}</h5>
                        }
                        <button className="button" style={{ marginRight: "16px" }} onClick={() => setEdit(10)} >Edit Nationality</button>
                        <button className="button" onClick={() => setEdit(0)}>Save Changes</button>
                    </div><br /><br /><br />
                </div>
            }
        </div>
    )
}

export default ConfirmDetails
