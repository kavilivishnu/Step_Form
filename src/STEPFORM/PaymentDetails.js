import React, { useState, useEffect } from 'react';

function PaymentDetails({ handleNextPage, handlePreviousPage }) {

    useEffect(() => {
        alert("The values in the inputs i.e., your card credentials won't be persisting like the ones in the previous pages for security purpose but will be stored in the database. So, enter the details correctly before you proceed");
    }, [])

    const dash = "-";
    const slash = "/";

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const [length, setLength] = useState(0);
    const [expriryLength, setExpiryLength] = useState(0);

    const [selectedDebitCard, setSelectedDebitCard] = useState("");
    const [selectCreditCard, setSelectedCreditCard] = useState("");

    const handleCardNumber = (e) => {
        setCardNumber(e.target.value);
        setLength(length + 1);
        if (length === 2) {
            setCardNumber(e.target.value + dash)
        }
        if (length === 6) {
            setCardNumber(e.target.value + dash)
        }
        if (cardNumber === "") {
            setLength(0);
        }
    }

    const handleExpiry = (e) => {
        setExpiry(e.target.value);
        setExpiryLength(expriryLength + 1);
        if (expriryLength === 1) {
            setExpiry(e.target.value + slash)
        }
        if (expriryLength === "") {
            setExpiryLength(0);
        }
    }

    return (
        <div>
            <br />
            <h2>Enter Your Card Details</h2><br />
            <div>
                <input placeholder="Card Name: UZUMAKI NARUTO..." value={cardName} onChange={(e) => setCardName(e.target.value)} size="30" /><br /><br /><br />
                <input placeholder="Card Number: 1234-5678-9876" value={cardNumber} onChange={handleCardNumber} maxLength="14" size="30" /><br /><br /><br />
                <input placeholder="Expiry: 10/23" value={expiry} onChange={handleExpiry} maxLength="5" size="10" /><br /><br /><br />
                <input placeholder=" CVV: 123" value={cvv} onChange={(e) => setCvv(e.target.value)} maxLength="3" size="10" /><br /><br /><br />
                <select className="select" value={selectedDebitCard} onChange={(e) => setSelectedDebitCard(e.target.value)} >
                    <option val="IndusInd Bank Debit Card"> IndusInd Bank Debit Card </option>
                    <option value="Kotak Mahindra Bank Debit Card" >Kotak Mahindra Bank Debit Card</option>
                    <option value="YES Bank Debit Card" >YES Bank Debit Card</option>
                    <option value="Axis Bank Debit Card" >Axis Bank Debit Card</option>
                    <option value="Bank of Baroda Debit Card" >Bank of Baroda Debit Card</option>
                    <option value="Central Bank of India Debit Card" >Central Bank of India Debit Card</option>
                    <option value="HDFC Debit Card" >HDFC Debit Card</option>
                </select>
                <h3>OR</h3>
                <select className="select" value={selectCreditCard} onChange={(e) => setSelectedCreditCard(e.target.value)} >
                    <option val="HDFC Bank Regalia Credit Card"> HDFC Bank Regalia Credit Card </option>
                    <option value="Kotak Bank Royale Signature Credit Card" >Kotak Bank Royale Signature Credit Card</option>
                    <option value="IndusInd Bank Signature Legend Credit Card" >IndusInd Bank Signature Legend Credit Card</option>
                    <option value="Kotak Bank Essentia Platinum Credit Card" >Kotak Bank Essentia Platinum Credit Card</option>
                    <option value="SBI Card ELITE" >SBI Card ELITE</option>
                    <option value="HDFC Bank Millenia Credit Card" >HDFC Bank Millenia Credit Card</option>
                    <option value="Axis Bank My Zone Credit Card" >Axis Bank My Zone Credit Card</option>
                </select>
            </div><br /><br />
            <button className="button" style={{ marginRight: "16px" }} onClick={(e) => handlePreviousPage(e)} >Back</button>
            <button className="button" onClick={(e) => handleNextPage(e)} >Next</button>
        </div>
    )
}

export default PaymentDetails;
