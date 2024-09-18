import React from "react";
import QRCode from "react-qr-code";
import Home from "./Home";
import {QRCodeSVG} from 'qrcode.react';
import { QRCodeCanvas } from "qrcode.react";
const ConfirmBooking: React.FC=()=>{
    const data={
        "date": "123",
        "time": " 2828"
    }
    return (
        <div>
            <QRCodeCanvas value={JSON.stringify(data)}></QRCodeCanvas>

            
        </div>
    )
}

export default ConfirmBooking