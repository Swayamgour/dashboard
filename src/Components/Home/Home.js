import React from 'react'
import style from '../Home/Home.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FacebookIcon from '@mui/icons-material/Facebook';
import InfoIcon from '@mui/icons-material/Info'; import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import QuizIcon from '@mui/icons-material/Quiz';
import Switch from '@mui/material/Switch';

function Home() {

    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const list = [
        {
            id: 1,
            icon: <DashboardIcon />,
            name: 'Dashboard'

        },
        {
            id: 1,
            icon: <InfoIcon />,
            name: 'About'

        },
        {
            id: 1,
            icon: <PermContactCalendarIcon />,
            name: 'Contact US'

        },
        {
            id: 1,
            icon: <QuizIcon />,
            name: 'Help'

        },

    ]
    const array = [
        {
            id: 1,
            icon: <AccountCircleIcon />,
            name: 'Profile'
        },
        {
            id: 1,
            icon: < AssignmentReturnOutlinedIcon />,
            name: 'Sign in'
        },
        {
            id: 1,
            icon: <ExitToAppOutlinedIcon />,
            name: 'Sign up'
        },
    ]
    return (
        <>
            <div style={{ color: 'white' }} className={style.sideSearch}>
                <SearchIcon />
                <input />
                <FacebookIcon />
                <SettingsIcon />
                <NotificationsIcon />

            </div>
            <div className={style.main}>

                <div className={style.left}>

                    <div className={style.left}>
                        {list.map((e) => (
                            <>
                                <div className={style.sideNav}>
                                    <div style={{ color: '#7263F7' }}>{e.icon}</div>
                                    <div style={{ color: 'white' }}>{e.name}</div>
                                </div>
                            </>
                        ))}
                        <h3 style={{ marginLeft: '1.5rem', color: 'white' }}> Advantage Frames</h3>


                    </div>

                    <div className={style.left}>
                        {array.map((e) => (
                            <>
                                <div className={style.sideNav}>
                                    <div style={{ color: '#7263F7' }}>{e.icon}</div>
                                    <div style={{ color: 'white' }}>{e.name}</div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div >
                        <img style={{ borderRadius: '10px', marginLeft: '1rem' }} width="100px" height='100px' src='https://img.freepik.com/free-vector/landing-page-with-welcome-wilderness-theme_52683-20262.jpg' />

                    </div>
                </div>
                <div className={style.Right}>
                    <div style={{ color: 'white', display: 'flex', width: '50rem', marginTop: '2.5rem', borderRadius: '10px', justifyContent: 'space-between' }}>
                        <img style={{ borderRadius: '10px', }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb93MmrDfja20jNlhxVBaepFC2AgIr56rNgw&usqp=CAU' width='50px' height='40px' />
                        <button style={{ color: 'white', width: '8rem', borderRadius: '10px', backgroundColor: 'blue' }}>wkbbhchb</button>
                    </div>

                    <div >
                        <img style={{ borderRadius: '10px', marginTop: '20px' }} width="220px" height='200px' src='https://img.freepik.com/free-vector/landing-page-with-welcome-wilderness-theme_52683-20262.jpg' />

                    </div>
                    <div className={style.card2} style={{ color: 'white', border: '1px solid white', marginTop: '1rem', height: '33vh' }}>
                        <h4 style={{ marginLeft: '20px', marginTop: '20px' }}>Platfrom Settings</h4>
                        <div className={style.switch}>
                            <Switch

                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /><span>Reminder me</span>
                        </div>
                        <div className={style.switch}>
                            <Switch

                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /><span>Reminder me</span>
                        </div>
                        <div className={style.switch}>
                            <Switch
                                className={style.switchOffOn}
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /><span>Reminder me</span>
                        </div>
                        <div className={style.InformationCard} style={{ color: 'white', border: '1px solid white', marginLeft: '15rem', marginTop: "-23.5rem" }}>
                            <img className={style.InformationCard} src='https://cdn-media-1.freecodecamp.org/images/fUI8CpLiySb4PZmrg2l8MU9NRpEEn9oECeCw' />

                        </div>
                        <div className={style.Projects} style={{ color: 'white', border: '1px solid white', marginLeft: '15rem', width: '700px', marginTop: "1.8rem" }}>
                            <h4 style={{ marginLeft: '20px', marginTop: '20px' }}>Projects </h4>
                            <img style={{ padding: '1rem' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIFmu_mz74ba6Yk28Z7cKgdNHyF1gvRZmAA&usqp=CAU' />
                            <img style={{ padding: '1rem' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZIFmu_mz74ba6Yk28Z7cKgdNHyF1gvRZmAA&usqp=CAU' />
                        </div>
                        <div  className={style.info} style={{ color: 'white', border: '1px solid white', marginLeft: '41rem', marginTop: "-30rem" }}>
                        <h4 style={{ marginLeft: '20px', marginTop: '20px' }}>Profile information </h4>
                        <p style={{ marginLeft: '18px', marginTop: '20px' , fontSize:'10px' }}>
                        Vehicle owner info gives you helpful data about vehicle that could come in handy during road accidents and rash driving cases, before purchasing a second-hand vehicle or for law enforcement and investigation purposes. Vehicle details can also be important if you lost your documents related vehicle/vahan. You can find any detail of vehicle. Vehicle details are also important, if y
                        </p>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}

export default Home