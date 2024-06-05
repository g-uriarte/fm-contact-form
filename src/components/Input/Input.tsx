import { FC } from 'react'
import { ControlledPropsContactForm } from '../../types/contactForm';
import { useController } from 'react-hook-form';
import { cn } from '../../utils/tw';
import { ErrorMessage } from './ErrorMessage';

type InputProps = {
    type: React.HTMLInputTypeAttribute;
    label: string;
    id: string;
    isRequired: boolean;
} & ControlledPropsContactForm;

export const Input: FC<InputProps> = ({
    type, label, isRequired, id, ...props
}) => {

    const { field, fieldState } = useController({ ...props, defaultValue: '' });

    return (
        <>
            <label
                htmlFor={id}
                className={cn("text-contact-form-grey-900 text-base", { "after:content-['*'] after:ml-1.5 after:text-xs after:text-contact-form-green-600": isRequired })}
            >{label}</label>
            <input
                {...field}
                className='text-contact-form-grey-900 border border-solid border-contact-form-idle rounded-md h-12 pl-3'
                type={type}
                id={id}
            />
            {
                fieldState.error && <ErrorMessage message={fieldState.error!.message ? fieldState.error!.message : `${field.name} has an error`} />
            }
        </>
    )
}
