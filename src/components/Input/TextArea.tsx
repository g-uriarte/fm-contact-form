import { FC } from 'react'
import { ControlledPropsContactForm } from '../../types/contactForm';
import { useController } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import { cn } from '../../utils/tw';

type TextAreaProps = {
    label: string;
    id: string;
    isRequired: boolean;
} & ControlledPropsContactForm;

export const TextArea: FC<TextAreaProps> = ({
    id, label, isRequired, ...props
}) => {

    const { field, fieldState } = useController({ ...props, defaultValue: '' });

    return (
        <>
            <label
                htmlFor={id}
                className={cn("text-contact-form-grey-900 text-base", { "after:content-['*'] after:ml-1.5 after:text-xs after:text-contact-form-green-600": isRequired })}
            >{label}</label>
            <textarea
                {...field}
                id={id}
                className='text-contact-form-grey-900 border border-solid border-contact-form-idle rounded-md pl-3 '
                rows={8}
            ></textarea>
            {
                fieldState.error && <ErrorMessage message={fieldState.error!.message ? fieldState.error!.message : `${field.name} has an error`} />
            }
        </>
    )
}
