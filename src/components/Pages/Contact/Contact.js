import React from 'react';
import '../Contact/Contact.css'
function Contact() {
    return (
        <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
            <div className="wrapper wrapper--w680">
                <div className="card card-1">
                    <div className="card-heading" />
                    <div className="card-body">
                        <h2 className="title">Contact Us</h2>
                        <p className="text-contact">Any questions so please contact:</p>
                        <strong className="text-contact">facemaskUFL@gmail.com</strong>
                        <strong className="text-contact">0931905047</strong>
                        <div className="map">
                            <span style={{ "fontSize": "30px" }}>Our Address:</span>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.296478270264!2d108.24404966468386!3d16.050097638892787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421767eaac1a07%3A0x66988f211e4e53d6!2sThe%20Paper%20House!5e0!3m2!1svi!2s!4v1616130718267!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;