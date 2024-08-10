import React, { useState } from 'react';
import './App.css';

function App() {
// This URL is copied from the side panel showing the backend ports view
const WORKSPACE_URL = "https://6500-idx-react-shop-application-1722227155960.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev";

async function get(url) {
  const response = await fetch(url, {
    credentials: 'include',
  });
  const data = await response.json();
  console.log(data);
 
}

// Call the backend
get(WORKSPACE_URL);
  return (
    <div className="App">
      <h1>Shop App : </h1>
    </div>
  );
}

export default App;
