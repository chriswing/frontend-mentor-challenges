import React from 'react'

import logo from './image-qr-code.png';
import styles from './QrCode.module.css';

const QrCode = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.imageContainer}>
                <img src={logo} alt="" className={styles.image} />
            </div>

            <h1 className={styles.title}>Improve your front-end skills by building projects</h1>

            <p className={styles.description}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

export default QrCode