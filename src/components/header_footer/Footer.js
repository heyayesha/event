import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade display={500}>
                <div className="font_righteous footer_logo_venue">Openning Day</div>
                <div className="footer_copyright">
                    Yankees Stadium 2022. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;