import React from 'react'
import image from '../Image.png/img.jpg'
import style from '../Sign_in/Sign_in.module.css'
import Switch from '@mui/material/Switch';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

function Sign_in() {

    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className={style.Main} >
            <div className={style.left}>

                < img className={style.leftImg} src={image} />
                <div className={style.heading}>
                    <ul>INSPIRED BY THE FUTURE</ul>
                    <ul>THE VISION UI DASHBORD</ul>
                </div>
            </div>
            {/* <div style={{border:'1px solid white' , marginLeft:'15rem'}}> */}
            <div className={style.RightSide}>
                <h2 className={style.RightHeading}>Welcome!</h2>
                <p className={style.Rightp}>includes unlimited streaming  .</p>
                <div style={{ display: 'flex', justifyContent: 'space-around', width:'13rem' ,paddingTop:"1rem " , paddingBottom:'1rem' }}>
                    <span style={{border:"1px solid white" , width:'2rem'  ,  textAlign:'center' , borderRadius:'4px'}}><FacebookIcon /></span>
                    <span style={{border:"1px solid white" , width:'2rem'  ,  textAlign:'center' , borderRadius:'4px'}}><AppleIcon/></span>
                    <span style={{border:"1px solid white" , width:'2rem'  ,  textAlign:'center' , borderRadius:'4px'}}><GoogleIcon/></span>
                  
                </div>
                <div>
                    <label className={style.label} for="fname">Name</label></div>
                <input type="text" className={style.input} id="fname" name="fname" placeholder='Enter Name' />
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
                    <button className={style.button}>SINGUP</button>
                </div>
                <h6 style={{ fontFamily: 'Arial' , marginTop:'1rem' }}>Don't have an account? sign in</h6>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Sign_in