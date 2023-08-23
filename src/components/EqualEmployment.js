import React from 'react';
import Select from 'react-select';

const EqualEmployment = ({ formData, setFormData }) => {
    const handleInputChange = (name, selectedOption) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: Array.isArray(selectedOption)
                ? selectedOption.map(option => option.value)
                : selectedOption ? selectedOption.value : '',
        }));
    };

    const yesNoOptions = [
        { label: "Yes", value: true },
        { label: "No", value: false },
    ];

    const genderOptions = [
        { label: "Male", value: 1 },
        { label: "Female", value: 2 },
        { label: "Non-Binary", value: 3 },
    ];

    const ethnicities = [
        {
            "label": "Black/African American",
            "value": "African American"
        },
        {
            "label": "East Asian",
            "value": "East Asian"
        },
        {
            "label": "Hispanic/Latinx",
            "value": "Hispanic/Latinx"
        },
        {
            "label": "Middle Eastern",
            "value": "Middle Eastern"
        },
        {
            "label": "Southeast Asian",
            "value": "Southeast Asian"
        },
        {
            "label": "South Asian",
            "value": "South Asian"
        },
        {
            "label": "Native Hawaiian/Pacific Islander",
            "value": "Native Hawaiian/Pacific Islander"
        },
        {
            "label": "Native American/Alaskan",
            "value": "Native American/Alaskan"
        },
        {
            "label": "White",
            "value": "White"
        }
    ];

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ border: '0px solid #fff', padding: '10px', marginBottom: '15px'}}>
            <h2 style={{ textAlign: 'center' }}>Equal Employment</h2>


            <label>Are you legally eligible to work in the United States?
                <Select
                    name="work_auth"
                    options={yesNoOptions}
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={(value) => handleInputChange('work_auth', value)}
                    value={yesNoOptions.find(option => option.value === formData.work_auth)}
                />
            </label>

            <label>Do you anticipate needing assistance with sponsorship for your employment visa status, either now or in the future?
                <Select
                    name="sponsorship"
                    options={yesNoOptions}
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={(value) => handleInputChange('sponsorship', value)}
                    value={yesNoOptions.find(option => option.value === formData.sponsorship)}
                />
            </label>

            <label>Do you have a disability?
                <Select
                    name="disability"
                    options={yesNoOptions}
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={(value) => handleInputChange('disability', value)}
                    value={yesNoOptions.find(option => option.value === formData.disability)}
                />
            </label>

            <label>Are you a veteran?
                <Select
                    name="veteran"
                    options={yesNoOptions}
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={(value) => handleInputChange('veteran', value)}
                    value={yesNoOptions.find(option => option.value === formData.veteran)}
                />
            </label>

            <label>LGBTQ+
                <Select
                    name="lgbt"
                    options={yesNoOptions}
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={(value) => handleInputChange('lgbt', value)}
                    value={yesNoOptions.find(option => option.value === formData.lgbt)}
                />
            </label>

            <label>Gender
                <Select
                    name="gender"
                    options={genderOptions}
                    className="basic-single"
                    classNamePrefix="select"
                    onChange={(value) => handleInputChange('gender', value)}
                    value={genderOptions.find(option => option.value === formData.gender)}
                />
            </label>

            <label>Ethnicity
                <Select
                    name="ethnicity"
                    placeholder="Select your ethnicity..."
                    isMulti
                    options={ethnicities}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value) => handleInputChange('ethnicity', value)}
                    value={formData.ethnicity ? formData.ethnicity.map(ethnicity => ethnicities.find(label => label.value === ethnicity)) : []}
                />
            </label>
        </div>
        </div>
    );
};

export default EqualEmployment;