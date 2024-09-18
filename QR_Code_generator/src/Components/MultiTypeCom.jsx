import PropTypes from 'prop-types'

const MultiTypeCom = (props) => {
  return (
    <div>
      <p>This value is:{props.value}</p>
    </div>
  )
}

MultiTypeCom.propTypes={
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
}

export default MultiTypeCom
