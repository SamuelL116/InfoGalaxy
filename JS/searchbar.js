import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = search(searchTerm);
    setResults(results);
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav style={{ flex: 1, backgroundColor: '#eee', padding: 10 }}>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: 0 }}><a href="#">Home</a></li>
          <li style={{ margin: 0 }}><a href="#">About</a></li>
          <li style={{ margin: 0 }}><a href="#">Contact</a></li>
        </ul>
      </nav>

      <form style={{ flex: 1, backgroundColor: '#fff', padding: 10, textAlign: 'right' }}>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" name="search" value={searchTerm} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>

      <div style={{ marginTop: 20 }}>
        <h2>Search Results:</h2>
        <ul>
          {results.map(result => (
            <li key={result.id}>{result.textContent}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;

function search(query) {
    const results = [];
    const searchResults = window.find(query, false, true, true, false, true, false);
    if (searchResults) {
      const range = window.getSelection().getRangeAt(0);
      const nodes = range.getNodes([1]);
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node;
          const text = element.textContent;
          if (text.toLowerCase().includes(query.toLowerCase())) {
            results.push(element);
          }
        }
      }
    }
    return results;
  }