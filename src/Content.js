import React from 'react';
function Main(){
    return(
        <div className='content'>
            <TableList/>
            <FormList/>
        </div>
    )
}
function TableList(){
    return(
        <div className='TableCon'>
            <h2>Student Details</h2>
        <table className='Table'>
            <tr>
                <th>Reg No</th>
                <th>Name</th>
                <th>Dept</th>
                <th>College</th>
            </tr>
            <tr>
                <td>01</td>
                <td>Vaishnavi</td>
                <td>ECE</td>
                <td>HICET</td>
            </tr>
            <tr>
                <td>02</td>
                <td>Anu</td>
                <td>ECE</td>
                <td>HICET</td>
            </tr>
            <tr>
                <td>03</td>
                <td>Bharathi</td>
                <td>CSC</td>
                <td>HiTECH</td>
            </tr>
            <tr>
                <td>04</td>
                <td>Logesh</td>
                <td>ECE</td>
                <td>HiTECH</td>
            </tr>
            <tr>
                <td>05</td>
                <td>Nishan</td>
                <td>IT</td>
                <td>HICET</td>
            </tr>
            <tr>
                <td>06</td>
                <td>Anuj</td>
                <td>ECE</td>
                <td>HICET</td>
            </tr>
            <tr>
                <td>07</td>
                <td>Mohan</td>
                <td>EEE</td>
                <td>HiTECH</td>
            </tr>
            <tr>
                <td>08</td>
                <td>Ram</td>
                <td>CSE</td>
                <td>HICET</td>
            </tr>
        </table>
        </div>
    )
}
function FormList(){
    return(
        <div className='FormCon' >
            <h2>Login Form</h2>
    <form className='formList'>
        <label for="name">Name :</label>
        <input type="text" placeholder="Name"/><br/>
        <label for="email">Email :</label>
        <input type="email" placeholder="Email"/><br/>
        <label for="Password">Password :</label>
        <input type="password" placeholder="Password"/><br/>
        <button type="submit">Submit</button>
    </form>
    </div>
    )
}
export default Main;