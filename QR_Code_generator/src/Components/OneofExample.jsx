import PropTypes from 'prop-types'

const OneofExample = (props) => {
    const {color} = props;
  return (
    <div style={{backgroundColor:color, padding:"20px", color:"white", textAlign:"center", fontFamily:'cursive'}}>
      <p>This is example of Oneof component {color}</p>
    </div>
  )
}
OneofExample.propTypes={
    color:PropTypes.oneOf(["red","green","blue"]).isRequired,
}

export default OneofExample
