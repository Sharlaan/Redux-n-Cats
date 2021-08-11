import React, { useState } from 'react';
import { useStoreActions } from '../store';

const ResetButton = ({ onClick }: { onClick(): void }) => (
  <button type="reset" onClick={onClick}>
    Reset
  </button>
);

const SubmitButton = ({ isDisabled }: { isDisabled: boolean }) => (
  <button type="submit" className="round-button" disabled={isDisabled}>
    +
  </button>
);

type CheckboxProps = ReturnType<typeof useFormCheckbox>;
const Checkbox = (props: CheckboxProps) => <input type="checkbox" {...props} />;

type TextFieldProps = ReturnType<typeof useFormInput>;
const TextField = (props: TextFieldProps) => <input type="text" {...props} />;

export default function TodosForm() {
  const { add, reset } = useStoreActions(({ todos }) => ({
    add: todos.add,
    reset: todos.reset,
  }));
  const showID = useFormCheckbox(true);
  const text = useFormInput('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.value.length) {
      add({ text: text.value, showID: showID.checked });
      const resetEvent = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
      text.onChange(resetEvent);
    }
  };

  return (
    <section>
      <ResetButton onClick={reset} />

      <form onSubmit={handleSubmit}>
        <Checkbox {...showID} />
        <TextField {...text} />
        <SubmitButton isDisabled={!text.value.length} />
      </form>
    </section>
  );
}

// Reusable and testable custom hook
function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return { value, onChange: handleChange };
}

function useFormCheckbox(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.checked);
  return { checked: value, onChange: handleChange };
}
