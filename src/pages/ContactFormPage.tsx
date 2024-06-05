import { FC } from 'react'
import { ContactFormContainer } from '../components/ContactFormContainer'

type ContactFormPageProps = {

}

export const ContactFormPage: FC<ContactFormPageProps> = ({ }) => {
    return (
        <div className="w-full h-full bg-contact-form-green-200 flex items-center justify-center">
            <ContactFormContainer />
        </div>
    )
}
