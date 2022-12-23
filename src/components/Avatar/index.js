import React from "react";

export const Avatar = ({ image, borderColor }) => (
    <img src={image} style={{ border: `10px solid ${borderColor}`, borderRadius: '50%' }} />
)