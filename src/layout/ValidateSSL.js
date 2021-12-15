import { useEffect, useState } from 'react'

export const ValidateSSL = ({ children }) => {
  const [val, setVal] = useState(null)

  useEffect(() => {
    if (window.location.protocol != 'http:') {
      setVal(null)
    } else {
      setVal(children)
    }
  })

  return val
}
