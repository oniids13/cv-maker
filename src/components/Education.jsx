import { useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

function Education() {
  const [formValues, setFormValues] = useState([
    {
      school: "",
      studyType: "",
      fieldOfStudy: "",
      fromYear: "",
      toYear: "",
      submitted: false,
    },
  ]);

  const [details, setDetails] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null)

  function handleChange(e, index) {
    const { name, value } = e.target;

    setFormValues((prev) =>
      prev.map((form, i) =>
        i === index ? { ...form, [name]: value } : form
      )
    );
  }

  function handleSubmit(e, index) {
    e.preventDefault();

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
      },
    ]);
  }

  function handleDelete(index) {
    setFormValues((prev) => prev.filter((_, i) => i !== index));
    setDetails((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="educ-info">
      <div className="educ-info-container">
         <h2>Educational Information</h2>
          {formValues.map((form, index) => (
            <div key={index} className="educ-info-form">
              <form onSubmit={(e) => handleSubmit(e, index)}>
                <Input
                  label="School Name"
                  type="text"
                  name="school"
                  values={form.school}
                  handleChange={(e) => handleChange(e, index)}
                  isDisabled={form.submitted && editingIndex !== index}
                />
                <label>
                  Type of Study:
                  <br />
                  <select
                    name="studyType"
                    value={form.studyType}
                    onChange={(e) => handleChange(e, index)}
                    disabled={form.submitted && editingIndex !== index}
                    required
                  >
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
                  values={form.fieldOfStudy}
                  handleChange={(e) => handleChange(e, index)}
                  isDisabled={form.submitted && editingIndex !== index}
                />
                <Year
                  label="From year"
                  name="fromYear"
                  value={form.fromYear}
                  handleChange={(e) => handleChange(e, index)}
                  isDisabled={form.submitted && editingIndex !== index}
                />
                <Year
                  label="To year"
                  name="toYear"
                  value={form.toYear}
                  handleChange={(e) => handleChange(e, index)}
                  isDisabled={form.submitted && editingIndex !== index}
                />
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
            Add Education
          </button>
          ) : ''}
          
  
      </div>

      

      {details.length > 0 && (
        <div className="educ-info-field">
          <SchoolOutlinedIcon />
          <h2>Educational Details</h2>

              <div className="educ-field-container">
                  {details.map((detail, index) => (
                    <div key={index} className="educ-info-sec">
                      <h3>{detail.school}</h3>
                      <Contact info={detail.studyType} />
                      <Contact info={detail.fieldOfStudy} />
                      <Contact info={`From: ${detail.fromYear}`} />
                      <Contact info={`To: ${detail.toYear}`} />
                    </div>
                  ))}
              </div>
        </div>
      )}
    </div>
  );
}

function Input({ label, type, name, values, handleChange, isDisabled }) {
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
  );
}

function Year({ label, name, value, handleChange, isDisabled }) {
  return (
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
        required
      />
    </label>
  );
}

function Contact({ info }) {
  return <p>{info}</p>;
}

export default Education;
