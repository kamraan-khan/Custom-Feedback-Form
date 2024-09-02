import React, { useState } from 'react';
import StarRating from './StarRating';
import SmileRating from './SmileRating';
import TextArea from './TextArea';
import NumericalRating from './NumericalRating';
import SingleLineInput from './SingleLineInput';
import './FeedbackForm.css'; // Ensure this path is correct

const FeedbackForm = () => {
  const [form, setForm] = useState({
    starRating: '',
    smileRating: '',
    textArea: '',
    numericalRating: '',
    singleLineInput: '',
  });

  const [submitted, setSubmitted] = useState(false); // New state to handle submission

  const handleChange = (field) => (value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add logic to save or process the form data here
    setSubmitted(true); // Update state to indicate form submission
    // Optional: Clear form or redirect after submission
    // setForm({
    //   starRating: '',
    //   smileRating: '',
    //   textArea: '',
    //   numericalRating: '',
    //   singleLineInput: '',
    // });
  };

  if (submitted) {
    return <div>Thank you for your feedback!</div>; // Show a thank you message upon submission
  }

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <div style={{ marginBottom: '20px' }}>
        <StarRating
          label="How likely are you to rate this sale?"
          value={form.starRating}
          onChange={handleChange('starRating')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <SmileRating
          label="What are your thoughts on this?"
          value={form.smileRating}
          onChange={handleChange('smileRating')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextArea
          label="We'd love to hear your opinion on this sale"
          value={form.textArea}
          onChange={handleChange('textArea')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <NumericalRating
          label="Would you recommend this to your family and friends, and how likely?"
          value={form.numericalRating}
          onChange={handleChange('numericalRating')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <SingleLineInput
          label="We’d appreciate any suggestions you have to help us improve our service"
          value={form.singleLineInput}
          onChange={handleChange('singleLineInput')}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
