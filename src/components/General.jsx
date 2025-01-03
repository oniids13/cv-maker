import { useState } from "react"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Avatar from '@mui/material/Avatar';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


function General() {

    const [formValues, setFormValues] = useState({
        fName: '',
        lName: '',
        jobtTitle: '',
        phone: '',
        email: '',
        address: '',
    })

    const [details, setDetails] = useState(null)
    const [isEditing, setIsEditing] = useState(true)



    function handleInput(e) {
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
        <div className="gen-info">
            <div className="gen-info-form">
                <h2 className="form-title">General Information</h2>
                     <form onSubmit={handleSubmit}>
                     <Input 
                     label="First Name"
                     type="text"
                     name="fName"
                     values={formValues.fName}
                     handleChange={handleInput}
                     isDisabled={!isEditing}
                     />
                    <Input 
                     label="Last Name"
                     type="text"
                     name="lName"
                     values={formValues.lName}
                     handleChange={handleInput}
                     isDisabled={!isEditing}
                     />
                     <Input 
                     label="Job Title"
                     type="text"
                     name="jobTitle"
                     values={formValues.jobTitle}
                     handleChange={handleInput}
                     isDisabled={!isEditing}
                     />
                     <Input 
                     label="Phone Number"
                     type="tel"
                     name="phone"
                     values={formValues.phone}
                     handleChange={handleInput}
                     isDisabled={!isEditing}
                     />
                     <Input 
                     label="Email Address"
                     type="email"
                     name="email"
                     values={formValues.email}
                     handleChange={handleInput}
                     isDisabled={!isEditing}
                     />
                     <Input 
                     label="Address"
                     type="text"
                     name="address"
                     values={formValues.address}
                     handleChange={handleInput}
                     isDisabled={!isEditing}
                     />
                    {isEditing ? (
                        <button className="submit" type="submit">Submit</button>
                    ) : ""}
                 </form>
                 {!isEditing ? (
                    <button className="edit"  onClick={handleEdit}>Edit</button>
                 ) : ""}
                    
                 </div>
                {details ? (
                    <div className="gen-info-field">
                            <Avatar sx={{width: 56, height: 56}}> {details.fName[0]}{details.lName[0]}</Avatar>
                            <h1>{details.fName} {details.lName}</h1>
                        <div className="details">
                            <WorkOutlineIcon />
                            <Contact info={details.jobTitle} />
                        </div>
                        <div className="details">
                            <LocalPhoneOutlinedIcon />
                            <Contact info={details.phone} />
                        </div>
                        <div className="details"> 
                            <EmailOutlinedIcon />
                            <Contact info={details.email} />
                        </div>
                        <div className="details">
                            <HomeOutlinedIcon />
                            <Contact info={details.address} />
                        </div>
                    </div>
                ) : (
                    ""
                )}
        </div>
    )
}


function Contact ({info}) {
    return (
        <h3>{info}</h3>
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
            required
             />
        </label>
    )
}


export default General