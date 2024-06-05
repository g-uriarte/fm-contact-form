import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ContactFormSchema, QueryTypeRadioOptions, checkForm, contactFormZodResolver } from '../../types/contactForm'
import { Input } from '../Input/Input'
import { Checkbox } from '../Input/Checkbox'
import { RadioGroup } from '../Input/RadioGroup'
import { TextArea } from '../Input/TextArea'
import { toast } from 'sonner'
import { ToastContent } from '../Toast/ToastContent'

type ContactFormProps = {

}

export const ContactForm: FC<ContactFormProps> = ({ }) => {

    const { handleSubmit, control, setValue, formState } = useForm<ContactFormSchema>({
        resolver: contactFormZodResolver,
        mode: 'onSubmit'
    });

    const onSubmit: SubmitHandler<ContactFormSchema> = (data) => {
        const result = checkForm(data);
        if (result.success) {
            toast(<ToastContent title='Message Sent!' message="Thanks for completing the form. We'll be in touch soon!" />, {
                position: 'top-center',
                unstyled: true,
                classNames: {
                    toast: 'bg-contact-form-grey-900 p-4 rounded-md w-[380px]',
                }
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-contact-form-grey-900'>Contact Us</h1>
            <div className='flex flex-col gap-4 xl:flex-row xl:flex-1' >
                <div className='flex flex-col gap-1 xl:flex-1' >
                    <Input
                        name='firstName'
                        type='text'
                        id='firstname'
                        label='First name'
                        isRequired
                        control={control}
                    />
                </div>
                <div className='flex flex-col gap-1 xl:flex-1'>
                    <Input
                        name='lastName'
                        type='text'
                        id='lastname'
                        label='Last name'
                        isRequired
                        control={control}
                    />
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-1' >
                    <Input
                        name='email'
                        type='email'
                        id='email'
                        label='Email Address'
                        isRequired
                        control={control}
                    />
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-3'>
                    <RadioGroup
                        name='queryType'
                        isRequired
                        control={control}
                        options={QueryTypeRadioOptions}
                    />
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-1' >
                    <TextArea
                        name='message'
                        isRequired
                        id='message'
                        label='Message'
                        control={control}
                    />
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-1'>
                    <Checkbox
                        name='consentContactByTheTeam'
                        id='consent'
                        label='I consent to being contacted by the team'
                        isRequired
                        control={control}
                        rules={{
                            onChange: (e) => {
                                setValue('consentContactByTheTeam', e.target.value ? 'true' : 'false')
                            }
                        }}
                    />
                </div>
            </div>
            <button
                type='submit'
                className='h-14 w-full font-semibold text-white bg-contact-form-green-600 rounded-md'>
                Submit
            </button>
        </form>
    )
}
