import React, { useState } from 'react';

const ClozeQuestion = () => {
  const [questionText, setQuestionText] = useState('');
  const [blanks, setBlanks] = useState([{ text: '', answer: '' }]);

  const handleAddBlank = () => {
    setBlanks([...blanks, { text: '', answer: '' }]);
  };

  const handleBlankChange = (index, field, value) => {
    const newBlanks = [...blanks];
    newBlanks[index][field] = value;
    setBlanks(newBlanks);
  };

  return (
    <div>
      <h3>Cloze Question</h3>
      <input
        type="text"
        placeholder="Enter your question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <button onClick={handleAddBlank}>Add Blank</button>
      {blanks.map((blank, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Blank ${index + 1} Text`}
            value={blank.text}
            onChange={(e) => handleBlankChange(index, 'text', e.target.value)}
          />
          <input
            type="text"
            placeholder={`Correct Answer for Blank ${index + 1}`}
            value={blank.answer}
            onChange={(e) => handleBlankChange(index, 'answer', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ClozeQuestion;
