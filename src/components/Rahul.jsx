import React from 'react'
import img from '../img/rahul2.png'
import './rahul.css'
import './navbar.css'
const Rahul = () => {
  return (
    <>
      <div className="mainwala">
        <div className="img">
            <img width={400} height={450} src={img} alt="" />
        </div>
        <div className="content">
            <h1>Rahul Arora</h1>
        </div>
        <div className='lower'>
            <table>
                <th>
                <tr className='trwala'>
                    <td style={{margin:" 1000px"}}>26</td>
                    <td>344</td>
                    <td>140</td>
                </tr>
                </th>
                <tbody>
                    <tr>
                        <td>Post</td>
                        <td>Followers</td>
                        <td>Following</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Rahul