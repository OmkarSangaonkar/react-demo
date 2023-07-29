import React, { useState } from 'react';

const CategorizeQuestion = () => {
  const [questionText, setQuestionText] = useState('');
  const [categories, setCategories] = useState(['']);

  const handleAddCategory = () => {
    setCategories([...categories, '']);
  };

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  return (
    <div>
      <h3>Categorize Question</h3>
      <input
        type="text"
        placeholder="Enter your question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <button onClick={handleAddCategory}>Add Category</button>
      {categories.map((category, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Category ${index + 1}`}
          value={category}
          onChange={(e) => handleCategoryChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default CategorizeQuestion;
