import React from 'react';

function Columns() {
    return <>
        <td>First</td>
        <td>second</td>
    </>
}

function Table() {
    return <div>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            <tr style={{ border: '1px solid black' }}>
                <Columns />
            </tr>
            <tr style={{ border: '1px solid black' }}>
                <Columns />
            </tr>
        </table>
    </div>
}

export default Table;
