import React, {useEffect, useState} from 'react';
import PersonalInformationForm from './components/PersonalInfo';
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import EqualEmployment from "./components/EqualEmployment";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import localForage from 'localforage';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {expTypeToInt} from "./components/WorkExperience";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";


function App() {
    const [showBottomBar, setShowBottomBar] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight =
                window.innerHeight || document.documentElement.clientHeight;

            // Calculate the scroll position
            const scrollPosition =
                document.documentElement.scrollHeight - windowHeight;

            // Compare the scroll position with a threshold value
            if (window.scrollY >= scrollPosition - 50) {
                setShowBottomBar(true); // Show the bottom bar
            } else {
                setShowBottomBar(false); // Hide the bottom bar
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [formData, setFormData] = useState({
        onboarding_completed: true,
        resume: true,
        experience: [{
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
        }],
        education: [{
            education: {
                name: '',
                lever: '',
                greenhouse: '',
            },
            degree: 0,
            gpa: 0.0,
            start_month: 0,
            start_year: 0,
            grad_month: 0,
            grad_year: 0,
            major: {
                name: '',
                greenhouse: ''
            }
        }],
        skill: [],
        ethnicity: [],
        work_auth: false,
        sponsorship: '',
        disability: '',
        veteran: '',
        gender: '',
        lgbt: false
    });

    const transformEducationData = (formData) => {
        const transformedData = {...formData};
        transformedData.education = transformedData.education.map((education) => {
            const transformedEducation = {...education};

            if (transformedEducation.education) {
                transformedEducation.education.name = transformedEducation.education.name.label || transformedEducation.education.name;
                transformedEducation.education.lever = transformedEducation.education.lever.label || transformedEducation.education.lever;
                transformedEducation.education.greenhouse = transformedEducation.education.greenhouse.label || transformedEducation.education.greenhouse;
            }
            if (transformedEducation.major) {
                transformedEducation.major.name = transformedEducation.major.name.label || transformedEducation.major.name;
                transformedEducation.major.greenhouse = transformedEducation.major.greenhouse.label || transformedEducation.major.greenhouse;
            }
            transformedEducation.start_month = +transformedEducation.start_month
            transformedEducation.start_year = +transformedEducation.start_year
            transformedEducation.grad_month = +transformedEducation.grad_month
            transformedEducation.grad_year = +transformedEducation.grad_year
            if (transformedEducation.degree) {
                transformedEducation.degree = transformedEducation.degree.value || transformedEducation.degree;
            }
            return transformedEducation;
        });
        // console.log(transformedData);
        return transformedData;
    };

    const transformExperienceData = (formData) => {
        let transformedData = {...formData};
        transformedData.experience = transformedData.experience.map((experience) => {
            const transformedExperience = {...experience};
            transformedExperience.start_month = +transformedExperience.start_month
            transformedExperience.start_year = +transformedExperience.start_year
            transformedExperience.end_month = +transformedExperience.end_month
            transformedExperience.end_year = +transformedExperience.end_year
            transformedExperience.type = expTypeToInt(transformedExperience.type2)
            return transformedExperience;
        });
        // console.log("Transformed data", transformedData)
        return transformedData;
    };

    const handleSubmit = () => {
        let transformedFormData;
        transformedFormData = transformEducationData(formData);
        transformedFormData = transformExperienceData(transformedFormData);
        localForage.setItem('formData', transformedFormData)
            .then(() => {
                toast.success('Form submitted successfully!');
                // console.log('Data saved to localForage successfully!', formData);
            })
            .catch(error => {
                // console.error('Error saving data to localForage:', error);
            });
    };

    const theme = createTheme({
        typography: {
            fontFamily: ['Comic-Sans'].join(','),
        },
    });

    useEffect(() => {
        localForage.getItem('formData')
            .then(savedData => {
                if (savedData) {
                    // console.log(savedData)
                    setFormData(savedData);
                }
            })
            .catch(error => {
                console.error('Error loading data from localForage:', error);
            });
    }, []);

    const [open2, setOpen2] = useState(true);
    const StickyBannerContent = () => {
        const [open, setOpen] = useState(false);
        const [bannerTop, setBannerTop] = useState(0);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        const handleClose2 = () => {
            setOpen2(false);
        };
        // useEffect(() => {
        //     const handleScroll = () => {
        //         const scrollPosition = window.pageYOffset;
        //         setBannerTop(-scrollPosition);
        //     };
        //     window.addEventListener('scroll', handleScroll);
        //     return () => {
        //         window.removeEventListener('scroll', handleScroll);
        //     };
        // }, []);
        return (
            <>
                {open2 && (<Box
                    bgcolor="#72c6ed"
                    color="#fff"
                    p={2}
                    position="fixed"
                    top={bannerTop}
                    width="100vw"
                    height="1.4vw"
                    textAlign="center"
                    left={0}
                    transition="top 0.3s"
                    style={{
                        transitionTimingFunction: 'ease-in-out',
                        transform: 'translateY(0)',
                    }}
                >

                    <Typography variant="body1">
                        By using our Extension you agree to our{' '}
                        <a href="#" onClick={handleOpen} style={{textDecoration: "none"}}>
                            Terms of Service / Privacy Policy
                        </a>
                    </Typography>
                    <div style={{position: 'relative'}}>
                        <IconButton
                            onClick={handleClose2}
                            style={{position: 'relative', top: -33, right: -700}}
                            // size="small"
                        >
                            <Close/>
                        </IconButton>
                    </div>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogContent>
                            <Typography variant="body1">
                                <h1>Terms of Service</h1>

                                <h2>1. Agreement to Terms</h2>
                                <p>These Terms of Service ("Terms") constitute a legally binding agreement made between
                                    you, the user ("you," "your"), and Fillit Jobs, a service provided by Fillit Jobs
                                    ("Fillit Jobs," "we," "us," or "our"), regarding your use of the Fillit Jobs
                                    extension ("Extension") and the website included (collectively, the "Platform"). By
                                    accessing the Platform, you acknowledge that you have read, understood, and agree to
                                    be bound by all of these Terms. If you do not agree with any part of these Terms,
                                    you are expressly prohibited from using the Platform.</p>

                                <p>Supplemental terms and conditions or documents that may be posted on the Platform
                                    from time to time are hereby expressly incorporated herein by reference. We reserve
                                    the right, in our sole discretion, to make changes or modifications to these Terms
                                    at any time and for any reason. We will notify you about any changes by updating the
                                    "Last Updated" date of these Terms, and you waive any right to receive specific
                                    notice of each such change. It is your responsibility to periodically review these
                                    Terms to stay informed of updates. You will be subject to, and deemed to have
                                    accepted, the changes in any revised Terms by your continued use of the Platform
                                    after the date such revised Terms are posted.</p>

                                <p>The information provided on the Platform is not intended for distribution to or use
                                    by any person or entity in any jurisdiction or country where such distribution or
                                    use would be contrary to law or regulation or which would subject us to any
                                    registration requirement within such jurisdiction or country. Accordingly, those who
                                    choose to access the Platform from other locations do so on their own initiative and
                                    are solely responsible for compliance with local laws, if applicable.</p>

                                <p>The Platform is not tailored to comply with industry-specific regulations (such as
                                    Health Insurance Portability and Accountability Act (HIPAA), Federal Information
                                    Security Management Act (FISMA), etc.). If your interactions would be subject to
                                    such laws, you may not use this Platform. You may not use the Platform in a way that
                                    would violate any relevant laws or regulations.</p>

                                <p>The Platform is intended for users who are at least 18 years old. Persons under the
                                    age of 18 are not permitted to use or register for the Platform.</p>

                                <h2>2. Description of Service</h2>
                                <p>The Fillit Jobs Extension automates the task of filling out job applications. It uses
                                    locally stored data for manipulation, and we do not collect or store any user
                                    data.</p>

                                <h2>3. Intellectual Property</h2>
                                <p>Unless otherwise indicated, the Fillit Jobs Platform, including the Extension and the
                                    website, is our proprietary property. All source code, databases, functionality,
                                    software, designs, audio, video, text, photographs, and graphics on the Platform
                                    (collectively, the "Content"), as well as the trademarks, service marks, and logos
                                    contained therein (the "Marks"), are owned or controlled by Fillit Jobs or licensed
                                    to us. They are protected by copyright, trademark laws, and other intellectual
                                    property rights and unfair competition laws of the United States, international
                                    copyright laws, and international conventions.</p>

                                <p>The Content and the Marks are provided on the Platform "AS IS" for your information
                                    and personal use only. Except as expressly provided in these Terms of Service, no
                                    part of the Platform and no Content or Marks may be copied, reproduced, aggregated,
                                    republished, uploaded, posted, publicly displayed, encoded, translated, transmitted,
                                    distributed, sold, licensed, or otherwise exploited for any commercial purpose
                                    whatsoever, without our express prior written permission. Provided that you are
                                    eligible to use the Platform, you are granted a limited license to access and use
                                    the Platform and to download or print a copy of any portion of the Content to which
                                    you have properly gained access solely for your personal, non-commercial use. We
                                    reserve all rights not expressly granted to you in and to the Platform, the Content,
                                    and the Marks.</p>

                                <h2>4. Prohibited Activities</h2>
                                <p>As a user of the Fillit Jobs Platform, you agree not to engage in the following
                                    prohibited activities:</p>

                                <ol>
                                    <li>Systematically retrieve data or other content from the Platform to create or
                                        compile, directly or indirectly, a collection, compilation, database, or
                                        directory without written permission from Fillit Jobs.
                                    </li>
                                    <li>Trick, defraud, or mislead us and other users, especially in any attempt to
                                        learn sensitive account information such as user passwords.
                                    </li>
                                    <li>Circumvent, disable, or otherwise interfere with security-related features of
                                        the Platform, including features that prevent or restrict the use or copying of
                                        any Content or enforce limitations on the use of the Platform and/or the Content
                                        contained therein.
                                    </li>
                                    <li>Disparage, tarnish, or otherwise harm, in our opinion, Fillit Jobs and/or the
                                        Platform.
                                    </li>
                                    <li>Use any information obtained from the Platform to harass, abuse, or harm another
                                        person.
                                    </li>
                                    <li>Make improper use of our support services or submit false reports of abuse or
                                        misconduct.
                                    </li>
                                    <li>Use the Platform in a manner inconsistent with any applicable laws or
                                        regulations.
                                    </li>
                                    <li>Use the Platform to advertise or offer to sell goods and services.</li>
                                    <li>Engage in unauthorized framing of or linking to the Platform.</li>
                                    <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses,
                                        or other material that interferes with any party’s uninterrupted use and
                                        enjoyment of the Platform or modifies, impairs, disrupts, alters, or interferes
                                        with the use, features, functions, operation, or maintenance of the Platform.
                                    </li>
                                    <li>Engage in any automated use of the system, such as using scripts to send
                                        comments or messages, or using any data mining, robots, or similar data
                                        gathering and extraction tools.
                                    </li>
                                    <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                                    <li>Attempt to impersonate another user or person or use the username of another
                                        user.
                                    </li>
                                    <li>Sell or otherwise transfer your profile.</li>
                                    <li>Upload or transmit (or attempt to upload or to transmit) any material that acts
                                        as a passive or active information collection or transmission mechanism,
                                        including without limitation, clear graphics interchange formats (“gifs”), 1×1
                                        pixels, web bugs, cookies, or other similar devices (sometimes referred to as
                                        “spyware” or “passive collection mechanisms” or “pcms”).
                                    </li>
                                    <li>Interfere with, disrupt, or create an undue burden on the Platform or the
                                        networks or services connected to the Platform.
                                    </li>
                                    <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
                                        providing any portion of the Platform to you.
                                    </li>
                                    <li>Attempt to bypass any measures of the Platform designed to prevent or restrict
                                        access to the Platform, or any portion of the Platform.
                                    </li>
                                    <li>Copy or adapt the Platform’s software, including but not limited to Flash, PHP,
                                        HTML, JavaScript, or other code.
                                    </li>
                                    <li>Decipher, decompile, disassemble, or reverse engineer any of the software
                                        comprising or in any way making up a part of the Platform.
                                    </li>
                                    <li>Except as may be the result of standard search engine or Internet browser usage,
                                        use, launch, develop, or distribute any automated system, including without
                                        limitation, any spider, robot, cheat utility, scraper, or offline reader that
                                        accesses the Platform, or using or launching any unauthorized script or other
                                        software.
                                    </li>
                                    <li>Use a buying agent or purchasing agent to make purchases on the Platform.</li>
                                    <li>Make any unauthorized use of the Platform, including collecting usernames and/or
                                        email addresses of users by electronic or other means for the purpose of sending
                                        unsolicited email, or creating user accounts by automated means or under false
                                        pretenses.
                                    </li>
                                    <li>Use the Platform as part of any effort to compete with us or otherwise use the
                                        Platform and/or the Content for any revenue-generating endeavor or commercial
                                        enterprise.
                                    </li>
                                </ol>

                                <h2>5. Changes to the Terms of Service</h2>
                                <p>We reserve the right to modify these Terms of Service at any point in time at our
                                    discretion. Users will be notified of such changes through an update to the date of
                                    these Terms and their posting on our platform or website. Continued use of the
                                    Extension after changes constitutes acceptance of the modified terms.</p>

                                <h2>6. Limitation of Liability</h2>
                                <p>Fillit Jobs and its affiliates shall not be liable for any direct, indirect,
                                    incidental, consequential, or punitive damages arising from the use of the
                                    Extension, even if we have been advised of the possibility of such damages.</p>

                                <h2>7. Indemnification</h2>
                                <p>You agree to indemnify and hold harmless Fillit Jobs and its affiliates from any
                                    claims, damages, liabilities, or expenses arising out of your use of the Extension
                                    or any violation of these Terms of Service.</p>

                                <h2>8. Privacy Policy</h2>
                                <p>Your privacy is important to us. This section explains how we handle your data when
                                    you use the Fillit Jobs Platform.</p>

                                <p><strong>Collection of User Data:</strong> We want to assure you that we do not
                                    collect any personal user data through the Platform. The Fillit Jobs Extension
                                    automates the process of filling out job applications, and any data you input or
                                    manipulate using the Extension remains stored locally on your device. We do not
                                    access, collect, or store this data on our servers.</p>

                                <p><strong>Use of Locally Stored Data:</strong> The data you input or manipulate using
                                    the Extension is processed and used only locally on your device. We do not transmit
                                    or share this data with any external servers or third parties. Your data remains
                                    within your control at all times.</p>

                                <p><strong>Information Security:</strong> We take your data security seriously. The
                                    locally stored data is subject to the security measures provided by your device's
                                    operating system. We do not have access to your data, and we do not track your
                                    activities on the Platform.</p>

                                <p><strong>Third-Party Services:</strong> While using the Platform, you may encounter
                                    links to third-party websites or services. Our Privacy Policy does not apply to
                                    these third-party services. We recommend reviewing the privacy policies of these
                                    third parties to understand how they handle your data.</p>

                                <p><strong>Changes to Privacy Policy:</strong> We may update our Privacy Policy from
                                    time to time. Any changes will be reflected in the "Last Updated" date at the
                                    beginning of this section. It's advisable to review this section periodically for
                                    any updates.</p>

                                <p>If you have any concerns or questions about your data privacy while using the Fillit
                                    Jobs Platform, please contact us at fillitjobs@gmail.com.</p>

                                <p>This Privacy Policy was last updated on 8-16-2023.</p>

                                <h2>9. Dispute Resolution</h2>
                                <p><strong>Informal Negotiations:</strong> To promote efficient dispute resolution and
                                    manage costs, both you and Fillit Jobs ("Parties") agree to first attempt informal
                                    negotiations to resolve any dispute, controversy, or claim arising from these Terms
                                    of Service ("Terms") for a period of at least sixty (60) days before initiating any
                                    legal proceedings. This informal negotiation period begins when one Party provides
                                    written notice to the other Party.</p>

                                <p><strong>Binding Arbitration:</strong> If informal negotiations do not result in
                                    resolution, any unresolved Dispute (except those excluded below) will be settled
                                    through binding arbitration. You acknowledge that this provision waives your right
                                    to file a lawsuit or have a jury trial for such Disputes. The arbitration will be
                                    conducted according to the Commercial Arbitration Rules of the American Arbitration
                                    Association ("AAA") and the AAA's Supplementary Procedures for Consumer-Related
                                    Disputes ("AAA Consumer Rules"), accessible at www.adr.org. Arbitration may take
                                    place in person, by submission of documents, via telephone, or online. The
                                    arbitrator will issue a written decision, but is not required to provide a statement
                                    of reasons unless requested by either Party. The arbitrator must adhere to
                                    applicable law, and any award may be challenged if the arbitrator fails to do so.
                                    The arbitration shall be held in accordance with the applicable AAA rules.</p>

                                <p><strong>Exceptions:</strong> Certain Disputes are excluded from the informal
                                    negotiation and arbitration requirements. These exceptions include (a) Disputes
                                    relating to the protection or enforcement of intellectual property rights; (b)
                                    Disputes arising from allegations of theft, piracy, privacy invasion, or
                                    unauthorized use; and (c) claims seeking injunctive relief. If any part of this
                                    provision is found to be unenforceable, the Parties agree that such Disputes will be
                                    resolved in a court of competent jurisdiction.</p>

                                <p>If you have inquiries about the Dispute Resolution process, please contact us at
                                    fillitjobs@gmail.com.</p>

                                <h2>10. Contact Information</h2>
                                <p>For any inquiries regarding these Terms of Service, please reach out to us at
                                    fillitjobs@gmail.com.</p>

                                <p>These Terms of Service were last updated on 8-16-2023.</p>
                            </Typography>
                        </DialogContent>
                    </Dialog>
                </Box>)}
            </>
        );
    };

    return (
        <Container maxWidth="sm" className="App-form">
            <ThemeProvider theme={theme}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    flexDirection="column"
                    bgcolor="#eef6fc"
                    p={3}
                    borderRadius={8}
                    fontFamily="Sans"
                    marginBottom={'15px'}
                    boxShadow={'0px 10px 10px rgba(0, 0, 0, 0.1)'}
                >
                    <img src={process.env.PUBLIC_URL + '/welcomeimage.png'} alt="Image"/>
                    <Typography variant="h2" style={{fontFamily: 'Trebuchet MS'}} gutterBottom>
                        Welcome to Fillit
                    </Typography>
                    <Typography variant="h4" align="center" style={{fontFamily: 'Trebuchet MS'}} gutterBottom>
                        Ready for One Click Applications?
                    </Typography>
                    <Typography variant="1" align="center" style={{fontFamily: 'Trebuchet MS'}} gutterBottom>
                        Fill in your information below to get started
                    </Typography>
                    <Typography variant="1" align="center" style={{fontFamily: 'Trebuchet MS'}} gutterBottom>
                        Click the blue button on supported websites to autofill
                    </Typography>
                    {/* Insert the GIF using the img tag */}
                    {/*<img
          src=""
          alt="GIF"
          style={{ width: '400px', height: '400px', cursor: 'pointer' }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            });
          }}
        />*/}
                </Box>

            </ThemeProvider>
            <PersonalInformationForm setFormData={setFormData} formData={formData}/>
            <WorkExperience setFormData={setFormData} formData={formData}/>
            <Education setFormData={setFormData} educationData={formData.education}/>
            <Skills setFormData={setFormData} skillsData={formData.skill}/>
            <EqualEmployment setFormData={setFormData} formData={formData}/>

            <Box textAlign="center">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "200px", height: "40px" }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>


            <div style={{minHeight: "100px"}}></div>
            {showBottomBar && (
                <div style={{position: "fixed", bottom: 0, left: 0, width: "100%", backgroundColor: "#eef6fc"}}>
                    <nav style={{display: "flex", justifyContent: "center", alignItems: "center", height: "60px"}}>
                        <a href="#" style={{marginRight: "10px", textDecoration: "none"}}>Home</a>
                        <a href="https://forms.gle/uEkEfXid1MP71dj26" style={{textDecoration: "none"}}>Feedback</a>
                    </nav>
                </div>
            )}
            <ToastContainer/>
            <StickyBannerContent/>
        </Container>
    );
}

export default App;

