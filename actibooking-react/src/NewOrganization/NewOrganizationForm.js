import React, {useState} from "react";
import "./NewOrganizationForm.css";

const NewOrganizationForm = (props) => {


    const [userInput, setUserInput] = useState({
        enteredName:'',
        enteredCountry:'',
        enteredCity:'',
        enteredZipCode:'',
        enteredStreet:'',
        enteredStreetNumber:'',
        enteredFlatNumber:''
});

const NameChangeHandler = (event) =>{setUserInput((prevState) => {
    return {...prevState, enteredName: event.target.value};
})};
const CountryChangeHandler = (event) =>{setUserInput((prevState) => {
    return {...prevState, enteredCountry: event.target.value};
})};
const CityChangeHandler = (event) =>{setUserInput((prevState) => {
    return {...prevState, enteredCity: event.target.value};
})};
const ZipCodeChangeHandler = (event) =>{setUserInput((prevState) => {
    return {...prevState, enteredZipCode: event.target.value};
})};
const StreetChangeHandler = (event) =>{setUserInput((prevState) => {
    return {...prevState, enteredStreet: event.target.value};
})};
const StreetNumberChangeHandler = (event) =>{setUserInput((prevState) => {
    return {...prevState, enteredStreetNumber: event.target.value};
})};
const FlatNumberChangeHandler = (event) =>{setUserInput((prevState) => {
    return {...prevState, enteredFlatNumber: event.target.value};
})};

const submitHandler = (event) => {
    event.preventDefault();
    const organizationData = {
        "id":0,
        "name": userInput.enteredName,
        "courses":null,
        "adresses": [{
            "country": userInput.enteredCountry,
            "city": userInput.enteredCity,
            "zipCode": userInput.enteredZipCode,
            "street": userInput.enteredStreet,
            "streetNumber": userInput.enteredStreetNumber,
            "flatNumber": userInput.enteredFlatNumber
        }]
    }
    props.postOrganization(organizationData);
    setUserInput({
        name: '',
        country: '',
        city: '',
        zipCode: '',
        street: '',
        streetNumber: '',
        flatNumber: ''
    })
}



    return (
    <form onSubmit={submitHandler}>
        <div className="new-organization__controls">
            <div className="new-organization__control">
                <label>Name</label>
                <input type='text' maxLength={100} value={userInput.enteredName} onChange={NameChangeHandler} required="true"/>
            </div>
            <div className="new-organization__control">
                <label>Country</label>
                <input type='text' maxLength={100} value={userInput.enteredCountry} onChange={CountryChangeHandler} required="true"/>
            </div>
            <div className="new-organization__control">
                <label>City</label>
                <input type='text' maxLength={50} value={userInput.enteredCity} onChange={CityChangeHandler} required="true"/>
            </div>
            <div className="new-organization__control">
                <label>ZipCode</label>
                <input type='text' maxLength={10} value={userInput.enteredZipCode} onChange={ZipCodeChangeHandler} required="true"/>
            </div>
            <div className="new-organization__control">
                <label>Street</label>
                <input type='text' maxLength={50} value={userInput.enteredStreet} onChange={StreetChangeHandler} required="true"/>
            </div>
            <div className="new-organization__control">
                <label>StreetNumber</label>
                <input type='text' maxLength={10} value={userInput.enteredStreetNumber} onChange={StreetNumberChangeHandler} required="true"/>
            </div>
            <div className="new-organization__control">
                <label>FlatNumber*</label>
                <input type='text' maxLength={10} value={userInput.enteredFlatNumber} onChange={FlatNumberChangeHandler} placeholder="none"/>
            </div>
        </div>
        <div className="new-organization__actions">
            <button type="submit">Create</button>
        </div>
    </form>
    )
}
export default NewOrganizationForm;