import React from 'react'
import ReactDOM from 'react-dom/client'

// Simple test component
function TestApp() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>UPKIIP Test Page</h1>
      <p>If you see this, React is working!</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  )
}

const root = document.getElementById('root')
if (root) {
  console.log('Root element found')
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <TestApp />
      </React.StrictMode>
    )
    console.log('React rendered successfully')
  } catch (error) {
    console.error('React render error:', error)
    root.innerHTML = `<div style="padding: 20px; color: red;">
      <h1>Error!</h1>
      <pre>${error}</pre>
    </div>`
  }
} else {
  console.error('Root element not found!')
  document.body.innerHTML = '<h1 style="color: red;">Root element not found!</h1>'
}
