import React, { useState } from 'react';

const Comprehension = () => {
  const [questionText, setQuestionText] = useState('');
  const [mcqOptions, setMCQOptions] = useState([{ text: '', isCorrect: false }]);

  const handleAddMCQOption = () => {
    setMCQOptions([...mcqOptions, { text: '', isCorrect: false }]);
  };

  const handleMCQOptionChange = (index, field, value) => {
    const newMCQOptions = [...mcqOptions];
    if (field === 'isCorrect') {
      newMCQOptions.forEach((option, i) => {
        newMCQOptions[i].isCorrect = i === index;
      });
    } else {
      newMCQOptions[index][field] = value;
    }
    setMCQOptions(newMCQOptions);
  };

  return (
    <div>
      <h3>Comprehension Question</h3>
      <textarea
        rows="4"
        placeholder="Enter your main question text (including passage)"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <h4>Multiple Choice Options</h4>
      <button onClick={handleAddMCQOption}>Add Option</button>
      {mcqOptions.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option.text}
            onChange={(e) => handleMCQOptionChange(index, 'text', e.target.value)}
          />
          <input
            type="radio"
            name="correctOption"
            checked={option.isCorrect}
            onChange={(e) => handleMCQOptionChange(index, 'isCorrect', e.target.value)}
          />
          <label>Correct Option</label>
        </div>
      ))}
    </div>
  );
};

export default Comprehension;
