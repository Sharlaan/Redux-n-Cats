import React, { useState } from 'react';
import { connect } from 'react-redux';

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

function TodosForm({ add, reset }) {
  const showID = useFormCheckbox(true);
  const text = useFormInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    text.value.length && add({ text: text.value, showID: showID.checked });
  };

  return (
    <section>
      <ResetButton onClick={() => reset()} />

      <form onSubmit={handleSubmit}>
        <Checkbox {...showID} />
        <TextField {...text} />
        <SubmitButton isDisabled={!text.value.length} />
      </form>
    </section>
  );
}

// Reusable and testable custom hook
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function handleChange(event) {
    setValue(event.target.value);
  }
  return { value, onChange: handleChange };
};

const useFormCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event) => setValue(event.target.checked);
  return { checked: value, onChange: handleChange };
};

const mapDispatch = ({ todos: { add, reset } }) => ({ add, reset });

export default connect(
  null,
  mapDispatch,
)(TodosForm);
