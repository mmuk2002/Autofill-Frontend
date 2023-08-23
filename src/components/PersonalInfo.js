import React, {useEffect, useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import localforage from 'localforage';
import {TextField, Button, Box, Grid, InputLabel} from '@mui/material';

const PersonalInformationForm = ({setFormData, formData}) => {
    const location = `${formData.city}, ${formData.state}, ${formData.country}`;
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }
    const handleDeleteResume = async () => {
        try {
            await localforage.removeItem('resume');
            const updatedFormData = {
                ...formData,
                resume: false, // Set to false when a resume is deleted
            };
            setFormData(updatedFormData);
            console.log('Resume deleted successfully.');
        } catch (error) {
            console.error('Error deleting resume:', error);
        }
    };
    const handleViewResume = () => {
        // Load resume data from localForage
        localforage.getItem('resume')
            .then(savedResumeData => {
                if (savedResumeData) {
                    // Create a Blob from the saved data
                    const blob = new Blob([savedResumeData], {type: 'application/pdf'});
                    // Create a URL for the Blob
                    const blobUrl = URL.createObjectURL(blob);
                    // Open the URL in a new tab
                    window.open(blobUrl, '_blank');
                } else {
                    console.error('No resume data found.');
                }
            })
            .catch(error => {
                console.error('Error loading resume from localForage:', error);
            });
    }

    const handleFileUpload = async () => {
        if (!selectedFile) {
            return;
        }
        try {
            const fileData = await readFileAsync(selectedFile);
            await localforage.setItem('resume', fileData);
            const updatedFormData = {
                ...formData,
                resume: true,
            };
            setFormData(updatedFormData);
            console.log('File uploaded successfully.');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    const readFileAsync = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
            fileReader.readAsArrayBuffer(file);
        });
    }

    const updateFormData = (field, value) => {
        const updatedFormData = {
            ...formData,
            [field]: value,
        };
        setFormData(updatedFormData);
    };

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.1)' }}>
        <Box style={{display: 'flex', flexDirection: 'column', gap: 20, border: '0px solid #f5f5f5', padding: '10px', marginBottom: '15px'}} >
            <h2 style={{ textAlign: 'center' }}>Personal Information</h2>
            <TextField
                label="First Name"
                type="text"
                placeholder="First Name"
                value={formData.first_name || ''}
                onChange={(e) => updateFormData('first_name', e.target.value)}
            />
            <TextField
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value={formData.last_name || ''}
                onChange={(e) => updateFormData('last_name', e.target.value)}
            />
            <TextField
                type="email"
                label="Email"
                placeholder="Email"
                value={formData.email || ''}
                onChange={(e) => updateFormData('email', e.target.value)}
            />
            <PhoneInput
                country={'us'}
                value={formData.phoneNumber || ''}
                onChange={(value) =>
                    updateFormData(
                        'phoneNumber',
                        value.charAt(0) !== '+' ? '+' + value : value
                    )
                }
            />
            <TextField
                type="date"
                label="Birthday"
                placeholder="Birthday"
                value={formData.birthday || ''}
                onChange={(e) => updateFormData('birthday', e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                type="text"
                label="City"
                placeholder="City"
                value={formData.city || ''}
                onChange={(e) => updateFormData('city', e.target.value)}
            />
            <TextField
                type="text"
                label="State"
                placeholder="State"
                value={formData.state || ''}
                onChange={(e) => updateFormData('state', e.target.value)}
            />
            <TextField
                type="text"
                label="Country"
                placeholder="Country"
                value={formData.country || ''}
                onChange={(e) => updateFormData('country', e.target.value)}
            />
            <TextField
                type="text"
                label="Portfolio Link"
                placeholder="Portfolio Link"
                value={formData.portfolio || ''}
                onChange={(e) => updateFormData('portfolio', e.target.value)}
            />

            <TextField
                type="text"
                label="Github"
                placeholder="Github"
                value={formData.github || ''}
                onChange={(e) => updateFormData('github', e.target.value)}
            />
            <TextField
                type="text"
                label="LinkedIn"
                placeholder="LinkedIn"
                value={formData.linkedin || ''}
                onChange={(e) => updateFormData('linkedin', e.target.value)}
            />
            {/*<TextField*/}
            {/*    type="text"*/}
            {/*    label="Other Link"*/}
            {/*    placeholder="Other Link"*/}
            {/*    value={formData.otherLink || ''}*/}
            {/*    onChange={(e) => updateFormData('otherLink', e.target.value)}*/}
            {/*/>*/}
            <input
                type="file"
                accept=".doc,.docx,.pdf"
                onChange={handleFileChange}
            />
            {selectedFile && (
                <Button variant="contained" onClick={handleFileUpload}>
                    Upload Resume
                </Button>
            )}
            {formData.resume && (
                <Button variant="contained" onClick={handleViewResume}>
                    View Resume
                </Button>
            )}
            {formData.resume && (
                <Button variant="outlined" color="secondary" onClick={handleDeleteResume}>
                    Delete Resume
                </Button>
            )}
        </Box>
        </div>



    );
};

export default PersonalInformationForm;