import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
export const expTypeToInt = expType => ["Internship", "Full Time", "Part Time"].indexOf(expType) + 1;
const emptyExperience = () => (
    {
        title: "",
        type: 0,
        type2: 0,
        start_month: 0,
        start_year: 0,
        currently_working: false,
        end_month: 0,
        end_year: 0,
        description: "",
        company: {
            name: ""
        }
    }
);

function WorkExperience({ formData, setFormData }) {
    const experience = formData.experience;
    const handleInputChange = (index, event) => {
        const name = event.target.name;
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const newWorkExperience = [...experience];
        if (name === 'companyName') {
            newWorkExperience[index].company.name = value;
        }
        else {
            newWorkExperience[index][name] = value;
        }
        setFormData({ ...formData, experience: newWorkExperience });
    };

    const handleAddClick = () => {
        setFormData(prevState => ({
            ...prevState,
            experience: [...prevState.experience, emptyExperience()]
        }));
    };
    const handleRemoveClick = (index) => {
        const newExperience = [...experience];
        newExperience.splice(index, 1);
        setFormData({ ...formData, experience: newExperience });
    };
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 40 }, (_, index) => currentYear - index);
    return (
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div>
            <h2 style={{ textAlign: 'center' }}>Work Experience</h2>
            {experience.map((x, i) => {
                return (
                <div className="work-experience" key={i} style={{ border: '1px solid #fff', padding: '10px', marginBottom: '15px' }}>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Company Name"
                                name="companyName"
                                value={x.company.name}
                                onChange={(e) => handleInputChange(i, e)}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Position"
                                name="title"
                                value={x.title}
                                onChange={(e) => handleInputChange(i, e)}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Type</InputLabel>
                            <Select
                                name="type2"
                                value={x.type2}
                                onChange={(e) => handleInputChange(i, e)}
                            >
                                <MenuItem value="Internship">Internship</MenuItem>
                                <MenuItem value="Full Time">Full Time</MenuItem>
                                <MenuItem value="Part Time">Part Time</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Start Month</InputLabel>
                            <Select
                                label="Start Month"
                                name="start_month"
                                value={x.start_month}
                                onChange={(e) => handleInputChange(i, e)}
                            >
                                <MenuItem value="">Select Month</MenuItem>
                                {months.map((month) => (
                                    <MenuItem key={month} value={month}>
                                        {month}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Start Year</InputLabel>
                            <Select
                                label={"Start Year"}
                                name="start_year"
                                value={x.start_year}
                                onChange={(e) => handleInputChange(i, e)}
                            >
                                <MenuItem value="">Select Year</MenuItem>
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>End Month</InputLabel>
                            <Select
                                label={"End Month"}
                                name="end_month"
                                value={x.end_month}
                                onChange={(e) => handleInputChange(i, e)}
                                disabled={x.currentlyWorking}
                            >
                                <MenuItem value="">Select Month</MenuItem>
                                {months.map((month) => (
                                    <MenuItem key={month} value={month}>
                                        {month}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>End Year</InputLabel>
                            <Select
                                label={"End Year"}
                                name="end_year"
                                value={x.end_year}
                                onChange={(e) => handleInputChange(i, e)}
                                disabled={x.currentlyWorking}
                            >
                                <MenuItem value="">Select Year</MenuItem>
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="currently_working"
                                        checked={x.currently_working}
                                        onChange={(e) => handleInputChange(i, e)}
                                    />
                                }
                                label="Current job"
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Description"
                                name="description"
                                value={x.description}
                                onChange={(e) => handleInputChange(i, e)}
                                multiline
                            />
                        </FormControl>
                    <Button variant="contained" color="secondary" onClick={() => handleRemoveClick(i)}>
                        Delete
                    </Button>

                    </div>
                );
            })}
            <Button
                variant="contained"
                color="primary"
                style={{ width: "553px", height: "40px" }}
                onClick={handleAddClick}
            >
                Add
            </Button>
        </div>
        </div>
    );
}

export default WorkExperience;

