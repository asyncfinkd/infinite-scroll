import React from 'react'
import PropTypes from 'prop-types'

export const Image = (props) => {
  return <img {...props} />
}

Image.propTypes = {
  props: PropTypes.any,
}
