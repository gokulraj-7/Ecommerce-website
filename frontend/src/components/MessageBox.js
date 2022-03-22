import React from 'react';

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div> /*children is a special type of props that shows the content
                of MessageBox in the place it have been used*/
    );
}
