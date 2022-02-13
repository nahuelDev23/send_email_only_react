import React from 'react'
import emailjs from 'emailjs-com'
export const Meiler = () => {

    const handleEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_488zblf',
            'template_j8l0ruv',
            e.target,
            'user_kYtRohQMb3xJ2GJNFPpfw')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <form onSubmit={handleEmail}>
                <input name='user_name' type="text" placeholder='nombre cliente'  />
                <input name='message' type="text" placeholder='mensaje'  />
                <input name='user_email' type="text" placeholder='useremail' />
                <button type='submit'>enviar</button>
            </form>
        </div>
    )
}
