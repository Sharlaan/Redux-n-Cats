import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, reset } from './todos.actions';

const ResetButton = ({ onClick }) => (
  <button type="reset" onClick={onClick}>
    Reset
  </button>
);

const SubmitButton = ({ isDisabled }) => (
  <button type="submit" className="round-button" disabled={isDisabled}>
    +
  </button>
);

const Checkbox = (props) => <input type="checkbox" {...props} />;

const TextField = (props) => <input type="text" {...props} />;

export default function TodosForm() {
  const dispatch = useDispatch();
  const showID = useFormCheckbox(true);
  const text = useFormInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    text.value.length && dispatch(add(text.value, showID.checked));
    const resetEvent = { target: { value: '' } };
    text.onChange(resetEvent);
  };

  return (
    <section>
      <ResetButton onClick={() => dispatch(reset())} />

      <form onSubmit={handleSubmit}>
        <Checkbox {...showID} />
        <TextField {...text} />
        <SubmitButton isDisabled={!text.value.length} />
      </form>
    </section>
  );
}

// Reusable and testable custom hook
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(event) {
    setValue(event.target.value);
  }
  return { value, onChange: handleChange };
}

function useFormCheckbox(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => setValue(event.target.checked);
  return { checked: value, onChange: handleChange };
}
