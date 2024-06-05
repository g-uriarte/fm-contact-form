import { FC } from 'react'
import { ContactForm } from './ContactForm/ContactForm'

type ContactFormContainerProps = {

}

export const ContactFormContainer: FC<ContactFormContainerProps> = ({ }) => {
    return (
        <div className='w-[350px] xl:w-5/12 bg-contact-form-white p-5 xl:pt-8 xl:px-10 rounded-xl'>
            <ContactForm />
        </div>
    )
}
