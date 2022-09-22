import React from 'react'

const SavedContext = React.createContext({
  savedItems: [],
  addSavedItems: () => {},
  isTheme: true,
  themeIsClicked: () => {},
})
export default SavedContext
