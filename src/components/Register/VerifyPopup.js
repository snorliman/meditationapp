import React from "react";
import Button from "../../components/Button/Button";

const VerifyPopup = () => {
    return (
        <div className="verify-popup">
            <h2 className="verify-header">Zweryfikuj swój email w swojej poczcie i zalogij się</h2>
            <Link><Button>Strona logowania</Button></Link>
        </div>

    )
}

export default VerifyPopup;