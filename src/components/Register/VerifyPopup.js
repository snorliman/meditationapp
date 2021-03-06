import React from "react";
import Button from "../../components/Button/Button";
import { Link } from 'react-router-dom';

const VerifyPopup = () => {
    return (
        <div className="verify-popup">
            <h2 className="verify-header">Zweryfikuj swój email w swojej poczcie i zalogij się</h2>
            <Link to="/zaloguj" ><Button>Strona logowania</Button></Link>
        </div>

    )
}

export default VerifyPopup;