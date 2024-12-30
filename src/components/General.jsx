import { useState, useEffect } from "react"



function General() {

    const [formValues, setFormValues] = useState({
        fName: '',
        lName: '',
        phone: '',
        email: '',
        address: '',
    })

    const [details, setDetails] = useState(null)
    const [isEditing, setIsEditing] = useState(true)

    useEffect(() => {
        console.log("isEditing state updated to:", isEditing);
      }, [isEditing]);


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
       console.log(isEditing)
       
    }


    return (
        <div className="gen-info">
            <div className="gen-info-form">
                <h2>General Information</h2>
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
                    <h1>{details.fName} {details.lName}</h1>
                    <Contact info={details.phone} />
                    <Contact info={details.email} />
                    <Contact info={details.address} />
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
             />
        </label>
    )
}


export default General