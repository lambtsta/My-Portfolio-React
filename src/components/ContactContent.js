import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import '../css/sweetalert2-custom.css';
const ContactContent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_emta0im', 'template_4v2j5rx', form.current, 'P7fMsM4H3PXWtaC0q')
            .then(
                (result) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message sent successfully',
                    });
                    clearForm();
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'An error occurred. Please try again.',
                    });
                }
            );
    };

    const clearForm = () => {
        form.current.reset();
    };
    return(
    <section className="contact" id="contact">
        <h2 className="heading">Reach <span>Out</span></h2>
        <form ref={form} onSubmit={sendEmail} id="contact-form">
            <div className="input-box">
                <input type="text" name="full_name" placeholder="Full Name"/>
                <input type="text" name="email" placeholder="example@example.com"/>
            </div>
            <div className="input-box">
                <input type="text" name="contact_number" placeholder="+639*********"/>
                <input type="text" name="email_subject" placeholder="Email Subject"/>
            </div>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="submit" name="submit" value="Send Message" class="send-btn"/>
        </form>
    </section>
    );
}

export default ContactContent;