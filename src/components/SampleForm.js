import {useState} from "react";
const SampleForm = (props) => {
    const [firstName, setFirstName] = useState("Megazoid");
    const [lastName, setLastName] = useState("Rosali");
    const submitForm = () => {
        props.callback({data1: firstName, data2: lastName});
    }
    return ( 
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label>First Name: </label>
                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button type="button" onClick={submitForm}> Submit</button>
            </form>
        </div>
     );
}
 
export default SampleForm;