import React from "react";

export const Avatar = ({ image, borderColor, ...props }) => (
    <img src={image} alt='avatar' style={{ border: `10px solid ${borderColor}`, borderRadius: '50%' }} {...props} />
)