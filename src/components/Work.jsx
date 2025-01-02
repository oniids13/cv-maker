import { useState } from "react"
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';



function Experience() {

    const [formValues, setFormValues] = useState([
        {
        company: '',
        position: '',
        description: '',
        fromYear: '',
        toYear: '',
        submitted: false,
        },
    ])  

    const [details, setDetails] = useState([])
    const [editingIndex, setEditingIndex] = useState(null)


    function handleChange(e, index) {
        const {name, value} = e.target
        
        setFormValues((prev) => 
            prev.map((form, i) =>
                i === index ? { ...form, [name]: value} : form
            )
        )
    }

    function handleSubmit(e, index) {
        e.preventDefault()
        

        setFormValues((prev) =>
            prev.map((form, i) => 
              i === index ? {...form, submitted: true} : form
            )
          )

       if (editingIndex === null) {
            setDetails((prevDetails) => [
                ...prevDetails,
                { ...formValues[index] },
            ]);
        } else {
            setDetails((prev) =>
                prev.map((detail, i) =>
                i === editingIndex ? formValues[index] : detail
                )
            );

            setEditingIndex(null)
        }
    }

    function handleEdit(index) {
        setEditingIndex(index)
    }

    function addNewForm() {
        setFormValues((prev) => [
            ...prev,
            {
                school: "",
                studyType: "",
                fieldOfStudy: "",
                fromYear: "",
                toYear: "",
            }
        ])
    }

    function handleDelete(index) {
        setFormValues((prev) => prev.filter((_, i) => i !== index))
        setDetails((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="work-info">
            <div className="work-info-container">
                <h2>Work Experience</h2>
                {formValues.map((form, index) => (
                     <div key={index} className="work-info-form">
                     <form onSubmit={(e) => handleSubmit(e, index)}>
                         <Input
                         label="Company Name"
                         type="text"
                         name="company"
                         values={form.company}
                         handleChange={(e) => handleChange(e, index)}
                         isDisabled={form.submitted && editingIndex !== index} />
                         <Input
                             label="Position"
                             type="text"
                             name='position'
                             values={form.position}
                             handleChange={(e) => handleChange(e, index)}
                             isDisabled={form.submitted && editingIndex !== index}
                         />
                         <Input
                             label="Description"
                             type="text"
                             name="description"
                             values={form.description}
                             handleChange={(e) => handleChange(e, index)}
                             isDisabled={form.submitted && editingIndex !== index} />
                           <Year
                             label="From year"
                             name="fromYear"
                             values={form.fromYear}
                             handleChange={(e) => handleChange(e, index)}
                             isDisabled={form.submitted && editingIndex !== index} />
                           <Year
                             label="To year" 
                             name="toYear"
                             values={form.toYear}
                             handleChange={(e) => handleChange(e, index)}
                             isDisabled={form.submitted && editingIndex !== index} />
                            {!form.submitted ? (
                                <button className="submit" type="submit">
                                    Submit
                                </button>
                                ) : (
                                editingIndex === index && (
                                    <button className="submit" type="submit">
                                    Save
                                    </button>
                                )
                                )}
                            </form>
                            {form.submitted && editingIndex !== index && (
                                <>
                                    <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                                    <br />
                                    {details.length > 1 && <button className="delete" onClick={() => handleDelete(index)}>Delete</button> }
                                </>
                                )}
                            </div>
                        ))}
                        {details.length > 0 ? (
                            <button className="add" onClick={addNewForm}>
                            Add Work
                        </button>
                        ) : ''}
            </div>
           
            {details.length > 0 && (
                    <div className="work-info-field">
                        <WorkOutlineOutlinedIcon />
                        <h2>Work Experience</h2>

                        <div className="work-field-container">
                            {details.map((detail, index) => (
                                <div key={index} className="work-info-sec">
                                    <h3>{detail.position}</h3>
                                    <Contact info={detail.company} />
                                    <Contact info={detail.description} />
                                    <Contact info={`From: ${detail.fromYear}`} />
                                    <Contact info={`To: ${detail.toYear}`} />
                                </div>
                            ))}
                        </div>
                    </div>
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