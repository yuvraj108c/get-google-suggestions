import axios from 'axios';

async function getGoogleSuggestions(query: string): Promise<string[]> {
  if (query.length === 0) return Promise.resolve([]);

  const response = await axios.get(
    `https://suggestqueries.google.com/complete/search?client=chrome-omni&q=${query}`
  );
  const suggestions = await response.data;
  return suggestions[1];
}

module.exports = getGoogleSuggestions;
