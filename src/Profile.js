import React from "react";

export default function Profile({ username, name }) {
    return (
        <div>
            <b>{username}</b>
            <span>{name}</span>
        </div>
    );
}
