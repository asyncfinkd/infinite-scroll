import { useEffect } from 'react'

export const ValidateSSL = ({ children }) => {
  useEffect(() => {
    if (window.location.protocol != 'http:') {
      return null
    }
  })

  return children
}
