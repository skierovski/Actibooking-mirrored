import React from "react";
import "./NewOrganizationForm.css";

const NewOrganizationForm = () => {
    return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Name</label>
                <input type='text' maxLength={100}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Create</button>
        </div>
    </form>
    )
}
export default NewOrganizationForm;