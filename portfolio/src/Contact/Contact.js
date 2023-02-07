import Navs from '../Navbar/Navs'
import styles from './Contact.module.css'
import { useState } from 'react';
function Contact() {
    const [inSubj, setInSubj] = useState('');
    const [inText, setInText] = useState('');
    const [inEmail, setInEmail] = useState('');
    const subjChangeHandler = (event) => {
        setInSubj(event.target.value);
    }
    const textChangeHandler = (event) => {
        setInText(event.target.value);
    }
    const emailChangeHandler = (event) => {
        setInEmail(event.target.value);
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        window.Email.send({
            SecureToken: '2d27aef8-6829-44b3-b2a8-8d875f3df8e2',
            To: `port.cont7@gmail.com`,
            From: 'port.cont7@gmail.com',
            Subject: `${inSubj} + ${inEmail}`,
            Body: `${inText}`
        }).then(
            message => alert(message)
        );
        setInEmail('');
        setInSubj('');
        setInText('');
    }
    return (
        <div className={`container-fluid-md vh-100 vw-100 + ${styles.h2style}`} style={{ border: '10px solid black', overflow: 'auto' }}>
            <div className="container">
                <Navs style="light" border="black" />
            </div>
            <div className="col-sm-8 py-5 justify-content-center offset-md-2 text-center">
                <h2 className={styles.h2style} style={{ letterSpacing: '2px', fontWeight: '700', fontSize: '35px' }}>
                    <span style={{ borderLeft: '1px solid black', borderRight: '1px solid black', padding: '0 10px', }}> 04 : Contact </span>
                </h2>
            </div>
            <div className='row justify-content-center mx-0' >
                <div className='col-md-7'>
                    <div className='row'>
                        <div className='col-xs-12 col-md-6'>
                            <form onSubmit={formSubmitHandler}>
                                <div className="">
                                    <label htmlFor="exampleInputEmail1" className="form-label" />
                                    <input type="email" onChange={emailChangeHandler} value={inEmail} className={`form-control ${styles.formControl}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputPassword1" className="form-label" />
                                    <input type="text" onChange={subjChangeHandler} value={inSubj} className={`form-control ${styles.formControl}`} id="exampleInputPassword1" placeholder='Subject' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label" />
                                    <textarea onChange={textChangeHandler} value={inText} className={`form-control ${styles.formControl}`} id="exampleFormControlTextarea1" rows="3" placeholder='Enter your message'></textarea>
                                </div>
                                <button type="submit" className={`btn btn-primary ${styles.custombtn}`}>Send</button>
                            </form>
                        </div>
                        <div className='col-xs-12 col-md-6'>
                            <ul className='list-unstyled' style={{ letterSpacing: '3px', marginTop: '1rem' }}>
                                <li style={{ paddingBottom: '10px' }}>
                                    <span className='fa-icon' >
                                        <i className='fa fa-phone' aria-hidden='true' />
                                    </span>
                                    +91 8961261371
                                </li>
                                <li style={{ paddingBottom: '10px' }}>
                                    <span className='fa-icon'>
                                        <i className='fa fa-at' aria-hidden='true' />
                                    </span>
                                    port.cont7@gmail.com
                                </li>
                                <li style={{ paddingBottom: '10px' }}>
                                    <span className='fa-icon'>
                                        <i className='fa fa fa-map-marker' aria-hidden='true' />
                                    </span>
                                    332/1 Ichapore Kolkata 743144
                                </li>
                            </ul>
                            <h3 className='my-3 py-2'>Follow me on social networks</h3>
                            <a href="https://github.com/zerkxes" className='fa-icon ' style={{ padding: '10px' }}>
                                <i className='fa-brands fa-github' style={{ color: 'black' }} />
                            </a>
                            <a href='https://www.instagram.com/fucka.saurus_rex/' className='fa-icon' style={{ padding: '10px' }}>
                                <i className='fa-brands fa-square-instagram' style={{ color: 'black' }} />
                            </a>
                            <a href='' className='fa-icon ' style={{ padding: '10px' }}>
                                <i className='fa fa-linkedin' style={{ color: 'black' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;