import { useState } from "react"
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';



function Experience() {

    const [formValues, setFormValues] = useState({
        company: '',
        position: '',
        description: '',
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
        <div className="work-info">
            <div className="work-info-form">
                <h2>Work Experience</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    values={formValues.company}
                    handleChange={handleChange}
                    isDisabled={!isEditing} />
                    <Input
                        label="Position"
                        type="text"
                        name='position'
                        values={formValues.position}
                        handleChange={handleChange}
                        isDisabled={!isEditing}
                    />
                    <Input
                        label="Description"
                        type="text"
                        name="description"
                        values={formValues.description}
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
                    <div className="work-info-field">
                        <WorkOutlineOutlinedIcon />
                        <h2>Work Experience</h2>
                        <h3>{details.position}</h3>
                        <Contact info={details.company} />
                        <Contact info={details.description} />
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

export default Experience