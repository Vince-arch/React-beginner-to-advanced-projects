import React from "react";

function Button(props) {
    let { action, title } = props;
    return <button onClick={action}>{title}</button>;
}

export default Button;