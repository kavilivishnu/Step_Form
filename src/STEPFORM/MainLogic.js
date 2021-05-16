import React, { useState } from 'react';
import Address from './Address';
import PersonalDetails from './PersonalDetails';
import PaymentDetails from './PaymentDetails';
import ConfirmDetails from './ConfirmDetails';
import { useForm } from "react-hooks-helper";
import Api from './Api';

function MainLogic() {

    const [navigation, setNavigation] = useState({ pagenumber: 1 })

    const allDetails = {
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
        contactnumber: "",
        plotno: "",
        locality: "",
        pincode: "",
        state: "",
        nationality: ""
    }

    const [formData, setFormData] = useForm(allDetails);

    const handleNextPage = () => {
        setNavigation({ ...navigation, pagenumber: navigation.pagenumber + 1 });
    }

    const handlePreviousPage = () => {
        setNavigation({ ...navigation, pagenumber: navigation.pagenumber - 1 });
    }

    switch (navigation.pagenumber) {
        case 2:
            return (
                <PersonalDetails
                    handleNextPage={handleNextPage}
                    formData={formData}
                    setFormData={setFormData}
                    allDetails={allDetails}
                />
            )
        case 3:
            return (
                <Address
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                    formData={formData}
                    setFormData={setFormData}
                />
            )
        case 4:
            return (
                <PaymentDetails
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                />
            )
        case 5:
            return (
                <ConfirmDetails
                    formData={formData}
                    setFormData={setFormData}
                />
            )
    }

    return (
        <div>
            <h1>Welcome to the page. Click Proceed to start filling the form</h1>
            <button className="button" onClick={(e) => handleNextPage(e)} >Proceed</button><br /><br />
            <Api />
        </div>
    )
}

export default MainLogic;
