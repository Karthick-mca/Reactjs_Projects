import propTypes from "prop-types"

const Childprops = (props) => {
  return <div>{props.children}</div>
}

export default Childprops

Childprops.propTypes={
    children: propTypes.array,
}