import React from 'react';

const CategoryTabs = ({ selected, onChange }) => {
  const categories = ['All', 'Electronics', 'Clothing'];

  return (
    <div style={{ marginBottom: '1rem' }}>
      {categories.map(cat => (
        <button
          key={cat}
          style={{
            marginRight: '1rem',
            backgroundColor: selected === cat ? '#007bff' : '#eee',
            color: selected === cat ? '#fff' : '#000',
            padding: '8px 12px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
