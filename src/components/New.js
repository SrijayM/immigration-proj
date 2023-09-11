import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import api from '../api/axiosConfig'

const New = (immigrate) => {


    
        const [formData, setFormData] = useState({
            alien_reg_num: "", 
            apt: false ,
            arrive_dep_num: "",
            birth_country: "",
            birth_province: "",
            citizenship_country: "",
            city_town: "",
            consulate: false,
            curr_nonimmigrant_status: "",
            ead_num: "",
            entry_port: false,
            flr: false,
            foreign_apt: false,
            foreign_city_town: "",
            foreign_country: "",
            foreign_flr: false,
            foreign_num: "",
            foreign_postal_code: "",
            foreign_province: "",
            foreign_states: "",
            foreign_ste: false,
            foreign_street_num_name: "",
            last_arrival_date: "",
            num: "",
            office_address: "",
            passport_doc_num: "",
            passport_expiry_date: "",
            passport_issue_country: "",
            passport_issue_date: "",
            passport_valid_no: false,
            passport_valid_yes: false,
            pre_flight_inspec: false,
            sevis_num: "",
            state_foreign_country: "",
            states: "",
            status_exp_date: "",
            ste: false,
            street_num_name: "",
            zip_code: ""
        });
    

    const handleInputChange = (event) => {
        const { name, value, type, checked  } = event.target;

        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
          });

          
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        const basicAuthHeader = 'Basic ' + btoa("srijay" + ':' + "JVJp5w3vV522tYRV");
        try {
            // Send a POST request to your API endpoint
            const response = await api.post("api/v1/immigrates", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': basicAuthHeader
              },
              body: formData,
            });
      
            if (response.ok) {
              // Request was successful
              const data = await response.json();
              console.log('API Response:', data);
            } else {
              // Handle API errors here
              console.error('API Error:', response.statusText);
            }
          } catch (error) {
            console.error('Error:', error);
          }

      }
    
  return (
    <div>
        <div className='new-bg'>

            <p className='title2'>Create a New Form</p>

            <p className='big-heading-text'>Part 3: Beneficiary Information </p>
            <p className='heading-text'>(Information about the beneficiary/beneficiaries you are filing for. 
                Complete the blocks below.  Use the Attachment-1 sheet <br/> to name each beneficiary included in this petition.)</p>
            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>9 Digit Alien Registration Number</p>
                    <input id="alien_reg_num" name="alien_reg_num" type='text' placeholder='Alien Registration Number'  value={formData.alien_reg_num} onChange={handleInputChange} maxLength={9}/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Country of Birth</p>
                    <input id="birth_country" name="birth_country" type='text' value={formData.birth_country} onChange={handleInputChange} placeholder='Country'/>         
                </div>
               
            </div>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Province of Birth</p>
                    <input id="birth_province" name="birth_province" type='text' value={formData.birth_province} onChange={handleInputChange} placeholder='Province'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Country of Citizenship or Nationality</p>
                    <input id="citizenship_country" name="citizenship_country" type='text' value={formData.citizenship_country} onChange={handleInputChange} placeholder='Country'/>         
                </div>
            </div>
            
            <p className='heading-text'>If the beneficiary is in the United States, complete the following:</p>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Date of Last Arrival</p>
                    <input id="last_arrival_date" name="last_arrival_date" type='text' value={formData.last_arrival_date} onChange={handleInputChange} placeholder='mm/dd/yyyy'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>11 Digit I-94 Arrival-Departure Record Number</p>
                    <input id="arrive_dep_num" name="arrive_dep_num" type='text' value={formData.arrive_dep_num} onChange={handleInputChange} placeholder='Arrival-Departure Record Number'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Passport or Travel Document Number</p>
                    <input id="passport_doc_num" name="passport_doc_num" type='text' value={formData.passport_doc_num} onChange={handleInputChange} placeholder='Document Number'/>         
                </div>
            </div>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Date Passport or Travel Document Issued</p>
                    <input id="passport_issue_date" name="passport_issue_date" type='text' value={formData.passport_issue_date} onChange={handleInputChange} placeholder='mm/dd/yyyy'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Date Passport or Travel Document Expires</p>
                    <input id="passport_expiry_date" name="passport_expiry_date" type='text' value={formData.passport_expiry_date} onChange={handleInputChange} placeholder='mm/dd/yyyy'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Passport or Travel Document Country of Issuance</p>
                    <input id="passport_issue_country" name="passport_issue_country" type='text' value={formData.passport_issue_country} onChange={handleInputChange} placeholder='Country of Issuance'/>         
                </div>
            </div>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Current Nonimmigrant Status</p>
                    <input id="curr_nonimmigrant_status" name="curr_nonimmigrant_status" type='text' value={formData.curr_nonimmigrant_status} onChange={handleInputChange} placeholder='Nonimmigrant Status'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Date Status Expires or D/S</p>
                    <input id="status_exp_date" name="status_exp_date" type='text' value={formData.status_exp_date} onChange={handleInputChange} placeholder='mm/dd/yyyy'/>         
                </div>
            </div>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Student and Exchange Visitor Information System Number if (any)</p>
                    <input id="sevis_num" name="sevis_num" type='text' value={formData.sevis_num} onChange={handleInputChange} placeholder='SEVIS Number'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Employment Authorization Document Number (if any)</p>
                    <input id="ead_num" name="ead_num" type='text' value={formData.ead_num} onChange={handleInputChange} placeholder='EAD Number'/>         
                </div>
            </div>

            <p className='heading-text'>Current Residential U.S. Address (if applicable) (do not list a P.O. Box)</p>

            <div className='container-two'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Street Number and Name</p>
                    <input id="street_num_name" name="street_num_name" type='text' value={formData.street_num_name} onChange={handleInputChange} placeholder='Street Number and Name'/>         
                </div>
                <div className='formInput flex-child'>
                    <div className='checkbox-container'>
                    <p className='input-text check-box-text'>Apt.</p>
                        <input type="checkbox" className='check-box' checked={formData.apt} onChange={handleInputChange} name='apt' />
                        <p className='input-text check-box-text'>Ste.</p>
                        <input type="checkbox" className='check-box' checked={formData.ste} onChange={handleInputChange} name='ste'/>
                        <p className='input-text check-box-text'>Flr.</p>
                        <input type="checkbox" className='check-box' checked={formData.flr} onChange={handleInputChange} name='flr'/>
                    </div>
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Number</p>
                    <input id="num" name="num" type='text' value={formData.num} onChange={handleInputChange} placeholder='Number'/>         
                </div>
            </div>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>City or Town</p>
                    <input id="city_town" name="city_town" type='text' value={formData.city_town} onChange={handleInputChange} placeholder='City/Town'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>State</p>
                    <input id="states" name="states" type='text' value={formData.states} onChange={handleInputChange} placeholder='State'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>ZIP Code</p>
                    <input id="zip_code" name="zip_code" type='text' value={formData.zip_code} onChange={handleInputChange} placeholder='ZIP Code'/>         
                </div>
            </div>

            <p className='big-heading-text'>Part 4. Processing Information</p>

            <p className='heading-text'>If a beneficiary or beneficiaries named in Part 3. is/are outside the United States, or a requested extension
             of stay or change ofstatus cannot be granted, state the U.S. Consulate or inspection facility you want notified if this petition is approved</p>

             <div className='container-two'>
                
                <div className='formInput flex-child'>
                    <p className='input-text'>Type of Office (select only one box)</p>
                    <div className='checkbox-container'>
                    <p className='input-text check-box-text'>Consulate</p>
                        <input type="checkbox" className='check-box' checked={formData.consulate} onChange={handleInputChange} name='consulate'/>
                        <p className='input-text check-box-text'>Pre-flight Insepc.</p>
                        <input type="checkbox" className='check-box' checked={formData.pre_flight_inspec} onChange={handleInputChange} name='pre_flight_inspec'/>
                        <p className='input-text check-box-text'>Entry Port</p>
                        <input type="checkbox" className='check-box' checked={formData.entry_port} onChange={handleInputChange} name='entry_port'/>
                    </div>
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Office Address (City)</p>
                    <input id="office_address" name="office_address" type='text' value={formData.office_address} onChange={handleInputChange} placeholder='City Address'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>U.S. State or Foreign Country</p>
                    <input id="state_foreign_country" name="state_foreign_country" type='text' value={formData.state_foreign_country} onChange={handleInputChange} placeholder='State/Foreign Country'/>         
                </div>
            </div>

             <p className='heading-text'> Beneficiary's Foreign Address</p>
             <div className='container-two'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Street Number and Name</p>
                    <input id="foreign_street_num_name" name="foreign_street_num_name" type='text' value={formData.foreign_street_num_name} onChange={handleInputChange} placeholder='Street Number and Name'/>         
                </div>
                <div className='formInput flex-child'>
                    <div className='checkbox-container'>
                    <p className='input-text check-box-text'>Apt.</p>
                        <input type="checkbox" className='check-box' checked={formData.foreign_apt} onChange={handleInputChange} name='foreign_apt'/>
                        <p className='input-text check-box-text'>Ste.</p>
                        <input type="checkbox" className='check-box' checked={formData.foreign_ste} onChange={handleInputChange} name='foreign_ste'/>
                        <p className='input-text check-box-text'>Flr.</p>
                        <input type="checkbox" className='check-box' checked={formData.foreign_flr} onChange={handleInputChange} name='foreign_flr'/>
                    </div>
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Number</p>
                    <input id="foreign_num" name="foreign_num" type='text' value={formData.foreign_num} onChange={handleInputChange} placeholder='Number'/>         
                </div>
            </div>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>City or Town</p>
                    <input id="foreign_city_town" name="foreign_city_town" type='text' value={formData.foreign_city_town} onChange={handleInputChange} placeholder='City/Town'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>State</p>
                    <input id="foreign_states" name="foreign_states" type='text' value={formData.foreign_states} onChange={handleInputChange} placeholder='State'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Province</p>
                    <input id="foreign_province" name="foreign_province" type='text' value={formData.foreign_province} onChange={handleInputChange} placeholder='Province'/>         
                </div>
            </div>

            <div className='flex-container'>
                <div className='formInput flex-child'>
                    <p className='input-text'>Postal Code</p>
                    <input id="foreign_postal_code" name="foreign_postal_code" type='text' value={formData.foreign_postal_code} onChange={handleInputChange} placeholder='Postal Code'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Country</p>
                    <input id="foreign_country" name="foreign_country" type='text' value={formData.foreign_country} onChange={handleInputChange} placeholder='Country'/>         
                </div>
                <div className='formInput flex-child'>
                    <p className='input-text'>Does each person in this petition have a valid passport?</p>
                    <div className='checkbox-container'>
                        <p className='input-text check-box-text'>Yes</p>
                        <input type="checkbox" className='check-box' checked={formData.passport_valid_yes} onChange={handleInputChange} name='passport_valid_yes'/>
                        <p className='input-text check-box-text'>No </p>
                        <input type="checkbox" className='check-box' checked={formData.passport_valid_no} onChange={handleInputChange} name='passport_valid_no'/>
                    </div>
                </div>
            </div>

            <button className="new-button" type='submit' onClick={handleSubmit}>  
                Submit Form
            </button>
        </div>

    </div>
  )
}

export default New