import styled from 'styled-components'
import { variant } from 'styled-system'
import PropTypes from 'prop-types'

const Button = styled.button`
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 38px;
  outline: none;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.2s ease 0s;
  user-select: none;
  white-space: nowrap;

  :hover {
    color: #000;
    border: 1px solid #000;
    background-color: #fff;
  }

  ${variant({
    prop: 'kind',
    scale: 'buttons',
  })}

  ${variant({
    prop: 'size',
    scale: 'sizes',
  })}
`

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  kind: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  kind: 'primary',
}

export default Button
