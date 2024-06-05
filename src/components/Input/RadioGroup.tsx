import { ControlledPropsContactForm, RadioOption } from '../../types/contactForm'
import { useController } from 'react-hook-form';
import { cn } from '../../utils/tw';
import { ErrorMessage } from './ErrorMessage';

type RadioGroupProps<KEnum extends string, T extends RadioOption<KEnum>> = {
    options: T[],
    isRequired: boolean;
} & ControlledPropsContactForm;

export const RadioGroup = <KEnum extends string, T extends RadioOption<KEnum>,>({
    options, isRequired, ...props
}: RadioGroupProps<KEnum, T>) => {

    const { field, fieldState } = useController({ ...props, defaultValue: '' });

    return (
        <>
            <legend
                className={cn("text-contact-form-grey-900 text-base", { "after:content-['*'] after:ml-1.5 after:text-xs after:text-contact-form-green-600": isRequired })}
            >Query type</legend>
            <div className='flex flex-col gap-3 xl:flex-row'>
                {options.map(({ id, label, value }) => (
                    <div key={id}
                        className='checkbox-label flex flex-row gap-3 items-center justify-start border border-solid border-contact-form-idle rounded-md h-12 pl-7 xl:flex-1'
                    >
                        <input
                            {...field}
                            className="custom-radio"
                            value={value}
                            type='radio'
                            id={id}
                            onFocus={() => { console.log('focus') }}
                        />
                        <label
                            htmlFor={id}
                            className='text-contact-form-grey-900 text-base font-normal'
                        >{label}</label>
                    </div>
                ))}
            </div>
            {
                fieldState.error && <ErrorMessage message={fieldState.error!.message ? fieldState.error!.message : `${field.name} has an error`} />
            }
        </>
    )
}
