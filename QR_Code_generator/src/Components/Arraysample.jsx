import PropTypes from "prop-types"

const Arraysample = (props) => {
    // destructuring
    const {studs} = props
  return (
    <div>
      <h2>List of students</h2>
      <ul>
        {studs.map((students)=>(<li key={students.id}>{students.name}</li>))}
      </ul>
    </div>
  )
}

// validation
Arraysample.propTypes={
    studs:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Arraysample
