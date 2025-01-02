import { useState } from "react"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';



function Education() {

    const [formValues, setFormValues] = useState({
        school: '',
        studyType: '',
        fieldOfStudy: '',
        fromYear: '',
        toYear: ''
    })

    const [details, setDetails] = useState(null)
    const [isEditing, setIsEditing] = useState(true)
    

    function handleChange(e) {
        const {name, value} = e.target
        
        setFormValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setDetails(formValues)
        setIsEditing(false)
    }

    function handleEdit() {
        setIsEditing(true)
    }

    return (
        <div className="educ-info">
            <div className="educ-info-form">
                <h2>Educational Information</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                    label="School Name"
                    type="text"
                    name="school"
                    values={formValues.school}
                    handleChange={handleChange}
                    isDisabled={!isEditing} />
                    <label>
                        Type of Study:
                        <br />
                        <select name="studyType" value={formValues.studyType} onChange={handleChange} disabled={!isEditing}>
                            <option value="Undergrad">Undergrad</option>
                            <option value="Bachelors Degree">Bachelors Degree</option>
                            <option value="Masters Degree">Masters Degree</option>
                            <option value="Doctorate Degree">Doctorate Degree</option>
                        </select>
                    </label>
                    <Input
                        label="Field of Study"
                        type="text"
                        name="fieldOfStudy"
                        values={formValues.fieldOfStudy}
                        handleChange={handleChange}
                        isDisabled={!isEditing} />
                      <Year
                        label="From year"
                        name="fromYear"
                        values={formValues.fromYear}
                        handleChange={handleChange}
                        isDisabled={!isEditing} />
                      <Year
                        label="To year"
                        name="toYear"
                        values={formValues.toYear}
                        handleChange={handleChange}
                        isDisabled={!isEditing} />
                        {isEditing ? (
                        <button className="submit" type="submit">Submit</button>
                    ) : ""}
                </form>
                {!isEditing ? (
                    <button className="edit" onClick={handleEdit}>Edit</button>
                 ) : ""}
            </div>
            {details ? (
                    <div className="educ-info-field">
                        <SchoolOutlinedIcon />
                        <h2>Educational Details</h2>
                        <h3>{details.school}</h3>
                        <Contact info={details.studyType} />
                        <Contact info={details.fieldOfStudy} />
                        <Contact info={`From: ${details.fromYear}`} />
                        <Contact info={`To: ${details.toYear}`} />
                    </div>
                ) : (
                    ""
                )}
        </div>
    )
}


function Input( {label, type, name, values, handleChange, isDisabled} ) {
    return (
        <label>
            {label}:
            <br /> 
            <input 
            type={type}
            name={name}
            value={values}
            onChange={handleChange}
            disabled={isDisabled}
             />
        </label>
    )
}


function Year({label, name, value, handleChange,isDisabled}) {
    return(
        <label>
            {label}: 
            <br />
            <input
            type="number"
            name={name}
            value={value}
            onChange={handleChange}
            disabled={isDisabled}
            min="1970"
            max="2099"
            step="1"
        />
        </label>
        
    )
}

function Contact ({info}) {
    return (
        <p>{info}</p>
    )
}

export default Education