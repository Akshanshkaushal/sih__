import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/Form.css"

export default function Form() {

    const [numbers, setNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      const value = parseInt(event.target.value, 10);
      setInputValue(value >= 0 ? value : '');
    };
  
    const handleAddNumber = () => {
      if (inputValue !== '') {
        const newNumbers = [...numbers, parseInt(inputValue)];
        setNumbers(newNumbers);
        setCurrentNumber(parseInt(inputValue));
        setInputValue('');
      }
    };
  
    const handleRemoveNumber = () => {
      if (numbers.length > 0) {
        const newNumbers = numbers.slice(0, -1);
        setNumbers(newNumbers);
        setCurrentNumber(newNumbers[newNumbers.length - 1]);
      }
    };
  
    const displayNumbers = numbers.join(', ');

    
  return (
    <div className="container ">
    <form>
      <div className="row jumbotron box8">
        <div className="col-sm-12 mx-t3 mb-4">
          <h2 className="text-center text-info">Register</h2>
        </div>
        <div className="col-sm-6 form-group">
          <label htmlFor="name-f">First Name</label>
          <input type="text" className="form-control" name="fname" id="name-f" placeholder="Enter your first name." required/>
        </div>
        <div className="col-sm-6 form-group">
          <label htmlFor="name-l">Last name</label>
          <input type="text" className="form-control" name="lname" id="name-l" placeholder="Enter your last name." required/>
        </div>
        <div className="col-sm-6 form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email."/>
        </div>
         
        <div className="col-sm-6 form-group">
          <label htmlFor="Date">Date Of Birth</label>
          <input type="Date" name="dob" className="form-control" id="Date" placeholder="" required/>
        </div>
        <div className="col-sm-6 form-group">
          <label htmlFor="sex">Gender</label>
          <select id="sex" className="form-control browser-default custom-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unspesified">Unspecified</option>
          </select>
        </div>
        <div className="col-sm-2 form-group">
          <label htmlFor="cod">Country code</label>
          <select className="form-control browser-default custom-select">
          <option data-countryCode="IN" value="91">India (+91)</option>
            <option data-countryCode="GB" value="44">UK (+44)</option>
  
            <option disabled="disabled">Other Countries</option>
            <option data-countryCode="DZ" value="213">Algeria (+213)</option>
            <option data-countryCode="AD" value="376">Andorra (+376)</option>
            <option data-countryCode="CA" value="1">Canada (+1)</option>
            <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
            <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
            <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
            <option data-countryCode="CL" value="56">Chile (+56)</option>
            <option data-countryCode="CN" value="86">China (+86)</option>
            <option data-countryCode="CO" value="57">Colombia (+57)</option>
            <option data-countryCode="KM" value="269">Comoros (+269)</option>
            <option data-countryCode="CG" value="242">Congo (+242)</option>
            <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
            <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
            <option data-countryCode="HR" value="385">Croatia (+385)</option>
            <option data-countryCode="CU" value="53">Cuba (+53)</option>
            <option data-countryCode="CY" value="90">Cyprus - North (+90)</option>
            <option data-countryCode="CY" value="357">Cyprus - South (+357)</option>
            <option data-countryCode="CZ" value="420">Czech Republic (+420)</option>
            <option data-countryCode="FR" value="33">France (+33)</option>
            <option data-countryCode="GF" value="594">French Guiana (+594)</option>
            <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
            <option data-countryCode="GA" value="241">Gabon (+241)</option>
            <option data-countryCode="GM" value="220">Gambia (+220)</option>
            <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
            <option data-countryCode="DE" value="49">Germany (+49)</option>
            <option data-countryCode="GH" value="233">Ghana (+233)</option>
            <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
            <option data-countryCode="GR" value="30">Greece (+30)</option>
            <option data-countryCode="GL" value="299">Greenland (+299)</option>
            <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
            <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
            <option data-countryCode="GU" value="671">Guam (+671)</option>
            <option data-countryCode="GT" value="502">Guatemala (+502)</option>
            <option data-countryCode="GN" value="224">Guinea (+224)</option>
            <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
            <option data-countryCode="GY" value="592">Guyana (+592)</option>
            <option data-countryCode="HT" value="509">Haiti (+509)</option>
            <option data-countryCode="HN" value="504">Honduras (+504)</option>
          </select>
        </div>
        <div className="col-sm-4 form-group">
          <label htmlFor="tel">Phone</label>
          <input type="tel" name="phone" className="form-control" id="tel" placeholder="Enter Your Contact Number." required/>
        </div>
        <div className="col-sm-6 form-group">
          <label htmlFor="pass">Password</label>
          <input type="Password" name="password" className="form-control" id="pass" placeholder="Enter your password." required/>
        </div>
        <div className="col-sm-6 form-group">
          <label htmlFor="pass2">Confirm Password</label>
          <input type="Password" name="cnf-password" className="form-control" id="pass2" placeholder="Re-enter your password." required/>
        </div>
        <div className="col-sm-6 form-group">
          <label htmlFor="sex">Appointment For</label>
          <select id="appointment" className="form-control browser-default custom-select">
            <option value="ENT">ENT</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
          </select>
        </div>

        <div className="col-sm-6 form-group">
        <label htmlFor="symptom-N0">Enter symptom No:</label>
        <input
          type="number"
          className="form-control"
          placeholder= {displayNumbers ? `  ${displayNumbers}` : 'Enter symptom number'}
          value={inputValue}
          onChange={handleInputChange}
        />
          <div className="input-group-append d-flex">
          <button className="btn btn-outline-primary" onClick={handleAddNumber}>+</button>
          <button className="btn btn-outline-danger" onClick={handleRemoveNumber}>-</button>
          <button className="btn btn-outline-primary sym ml-auto"  >symptoms list</button>
        </div>
        </div>

        <div className="col-sm-12">
          <input type="checkbox" className="form-check d-inline" id="chb"/><label htmlFor="chb" className="form-check-label">&nbsp;I accept all terms and conditions.
          </label>
        </div>
  
        <div className="col-sm-12 form-group mb-0">
          <button className="btn btn-primary float-right">Submit</button>
        </div>
  
      </div>
    </form>
  </div>
  )
}
