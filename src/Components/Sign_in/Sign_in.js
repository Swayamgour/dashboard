import React from 'react'
import image from '../Image.png/img.jpg'
import style from '../Sign_in/Sign_in.module.css'
import Switch from '@mui/material/Switch';

function Sign_in() {

    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className={style.Main} >
            <div >
                <div className={style.Navbar}>
                    <p>About </p>
                    <p>Contact</p>
                    <p>Help</p>
                    <button className={style.but}>SINGIN</button>
                </div>
                < img className={style.leftImg} src={image} />
                <div className={style.heading}>
                    <ul>INSPIRED BY THE FUTURE</ul>
                    <ul>THE VISION UI DASHBORD</ul>
                </div>
            </div>
            <div className={style.RightSide}>
                <h2 className={style.RightHeading}>Nice to see you!</h2>
                <p className={style.Rightp}>Includes unlimited streaming  .</p>
                <div>
                    <label className={style.label} for="fname">Email</label></div>
                <input type="text" className={style.input} id="fname" name="fname" placeholder='Enter email' />
                <div>
                    <label className={style.label} for="lname">Password</label></div>
                <input className={style.input} type="text" id="lname" name="lname" placeholder='Enter Password' />
                <div className={style.switch}>
                    <Switch

                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    /><span>Reminder me</span>
                </div>
                <div>
                    <button className={style.button}>SINGIN</button>
                </div>
                <h6 style={{fontFamily:'Arial' , marginTop:'1rem'}}>Don't have an account? sign up</h6>
                <p className={style.discrop} >@2021 a dashboard is a way of displaying various types of visual data in one place.</p>
            </div>
        </div>
    )
}

export default Sign_in