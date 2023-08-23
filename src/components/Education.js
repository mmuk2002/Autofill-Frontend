import React, {useState} from 'react';
import Select from 'react-select';
import Select2 from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const majors = [
    {
        "label": "Accounting",
        "value": "2ef0e302-a70d-4519-8fe3-f94baf3de2a4"
    },
    {
        "label": "Actuarial Science",
        "value": "93a30fc6-a4d6-4c4d-bca1-5204b2e15233"
    },
    {
        "label": "Aerospace Engineering",
        "value": "f9ae43fa-19df-43de-bbf3-a9334451196a"
    },
    {
        "label": "Anthropology",
        "value": "40b07c80-2ee0-4ff8-86b1-7ef8409e44c7"
    },
    {
        "label": "Applied Mathematics",
        "value": "2f036aa7-28b3-4c3e-bbc8-9f9d53498695"
    },
    {
        "label": "Architecture",
        "value": "b9910b74-d464-450f-abe6-d9ce093f4beb"
    },
    {
        "label": "Art",
        "value": "53d5dc9b-1ab8-4e13-a62a-700639a04f60"
    },
    {
        "label": "Art History",
        "value": "70a2fd00-add6-481e-9d4f-9a1100c3ce90"
    },
    {
        "label": "Astronomy",
        "value": "8f4fc799-663a-49e9-80ba-87d9a8131f47"
    },
    {
        "label": "Biochemistry",
        "value": "3a7df728-2517-48ac-a434-1179b4ddab18"
    },
    {
        "label": "Bioinformatics",
        "value": "09d82347-6594-4862-be1b-05027b468ea6"
    },
    {
        "label": "Biology",
        "value": "4886fc13-691c-4fbc-a837-10316fdefffd"
    },
    {
        "label": "Biomedical Engineering",
        "value": "01558511-c854-4c06-93fd-30ba55c45f96"
    },
    {
        "label": "Business",
        "value": "fa3764cb-f7ac-4078-bf7e-7702fce9ba10"
    },
    {
        "label": "Business Analytics",
        "value": "6fb174e8-6659-4396-97f5-2491454fdba9"
    },
    {
        "label": "Cell & Molecular Biology",
        "value": "391c66e8-aa19-4480-adc1-d4f25d85a415"
    },
    {
        "label": "Chemical Engineering",
        "value": "241ed940-194e-4d93-938f-3b58304bf813"
    },
    {
        "label": "Chemistry",
        "value": "f5c26044-f3f8-4e21-88dd-9b4739b440bd"
    },
    {
        "label": "Civil Engineering",
        "value": "1d0ed336-9efb-436b-9f89-30c9b7de79a2"
    },
    {
        "label": "Coding School",
        "value": "6a6dace6-9452-40b8-935d-75f2652fbaf7"
    },
    {
        "label": "Cognitive Science",
        "value": "124bad41-e877-4ebf-aa62-21ed29af1be8"
    },
    {
        "label": "Communications",
        "value": "3bae89c6-093a-4998-ae30-3afebdfe26ca"
    },
    {
        "label": "Computer Engineering",
        "value": "5a366639-05e8-4394-8f9e-1d2edc7678d8"
    },
    {
        "label": "Computer Science",
        "value": "a1d1b683-6d20-4fe1-99ee-e60b70957afa"
    },
    {
        "label": "Data Science",
        "value": "f738de58-ef0e-4003-8b14-6a69fd132257"
    },
    {
        "label": "Earth Science",
        "value": "a889e501-ddc2-4bec-b758-8f1cd8500319"
    },
    {
        "label": "Economics",
        "value": "7bf6f63f-7016-4b54-8175-17f78f7af629"
    },
    {
        "label": "Education",
        "value": "20f40beb-ddf7-4d0b-a6f8-6e48beef2271"
    },
    {
        "label": "Electrical Engineering",
        "value": "7cc34eb7-c8cf-4964-9450-e36e192a4ed7"
    },
    {
        "label": "English",
        "value": "0460ae14-aaf9-45ad-988c-9cb5f8780be7"
    },
    {
        "label": "Entrepreneurship",
        "value": "e2e1ed3a-33af-439d-972b-bbf4e7f7b100"
    },
    {
        "label": "Environmental Engineering",
        "value": "60ba3ad3-f5b9-4db5-a4ee-7e4e4fea6cb6"
    },
    {
        "label": "Environmental Science",
        "value": "536af10c-b5c0-432e-ba30-021da6b36ca9"
    },
    {
        "label": "Film",
        "value": "9d5f5e36-b7c8-49ca-a7c3-a4e66417b949"
    },
    {
        "label": "Finance",
        "value": "d836f998-47ce-453c-9449-92fb3015891d"
    },
    {
        "label": "Financial Engineering",
        "value": "7036e045-37c8-460c-a986-e73bd8fb8c44"
    },
    {
        "label": "Forensic Science",
        "value": "ab55f996-0b5b-447e-8dc3-7f2dddac014a"
    },
    {
        "label": "Gender Studies",
        "value": "0bb84315-0577-447e-88ce-4c58aa251212"
    },
    {
        "label": "Geophysics",
        "value": "4f2ed539-ba62-4970-a07a-a7fe4a7cc39f"
    },
    {
        "label": "Graphic Design",
        "value": "308129cb-7aee-4334-87dc-9b7b4542cc3a"
    },
    {
        "label": "History",
        "value": "afb67bb5-e429-465a-ac1c-8f6fba7a9a63"
    },
    {
        "label": "Hotel Administration",
        "value": "3027908a-c988-41c6-abbd-9320d44032c7"
    },
    {
        "label": "Human Computer Interaction",
        "value": "d6b634d3-aa63-4437-b443-c4c13f2f9faf"
    },
    {
        "label": "Human Resources",
        "value": "f45be7f3-29fd-4420-8762-5f582254e21e"
    },
    {
        "label": "Industrial Engineering",
        "value": "27551875-b98c-4072-8d2d-df48af8abea8"
    },
    {
        "label": "Informatics",
        "value": "10fd484f-9820-4128-a413-5ede9cf9afbc"
    },
    {
        "label": "Information Science",
        "value": "8348594a-fcb5-41f9-afca-e39abf643868"
    },
    {
        "label": "Information Systems",
        "value": "6a244b2c-ae9e-47dc-bfb2-76259404f818"
    },
    {
        "label": "International Relations",
        "value": "b0a44ba6-7bfe-447e-ac3d-a2a9d5dccc9d"
    },
    {
        "label": "Journalism",
        "value": "29134406-ab8a-4d5e-b0a4-d923608a4e51"
    },
    {
        "label": "Latin American Studies",
        "value": "6bc13e21-7ed6-40e7-8506-8b0ccd1de258"
    },
    {
        "label": "Linguistics",
        "value": "6ec5fc42-6b7d-4cc8-ac93-7026c510988d"
    },
    {
        "label": "Management Engineering",
        "value": "7a240c81-560a-4245-a6dc-313688773d86"
    },
    {
        "label": "Marketing",
        "value": "71cdb864-e2f5-456c-b123-f66af5a4b3a2"
    },
    {
        "label": "Materials Science",
        "value": "bc7e9206-c6b6-41d8-8401-43f86adf9476"
    },
    {
        "label": "Mathematics",
        "value": "7561bac8-fff6-4d24-bc9c-e1befa073982"
    },
    {
        "label": "Mechanical Engineering",
        "value": "6b31df99-c39a-4091-93a6-b80d8c840377"
    },
    {
        "label": "Music",
        "value": "2343c004-8f6e-4bcc-9004-9eeb433087d3"
    },
    {
        "label": "Neuroscience",
        "value": "56186387-0713-44ec-95ca-a63353735e1d"
    },
    {
        "label": "Nursing",
        "value": "91b88d1f-1513-4eff-b321-cb0e307b0c5c"
    },
    {
        "label": "Operations Research",
        "value": "d2342363-d77a-4766-9a07-458fcb016580"
    },
    {
        "label": "Other/Not Listed",
        "value": "8224dd02-8816-487d-aa73-382f6a6d463d"
    },
    {
        "label": "Petroleum Engineering",
        "value": "765cf1c8-bfc3-4ad0-8b84-48c39ce30713"
    },
    {
        "label": "Pharmacology",
        "value": "5c128086-3b74-4cf5-89a1-49ba259f4345"
    },
    {
        "label": "Pharmacy",
        "value": "277a9009-f171-43a5-a7f2-270cde39ed93"
    },
    {
        "label": "Philosophy",
        "value": "4a05d100-8ec1-46ef-bac3-6593c83d464f"
    },
    {
        "label": "Physics",
        "value": "c407ea33-5dee-4a7a-a72d-680231b63abc"
    },
    {
        "label": "Political Science",
        "value": "299f6437-1330-4b86-832c-8c2571035a47"
    },
    {
        "label": "Pre-dental",
        "value": "fcb449c3-1b8e-4b99-bbb4-5905073456cf"
    },
    {
        "label": "Pre-law",
        "value": "865493d9-94b4-409f-9e1d-9c8533ed8b89"
    },
    {
        "label": "Pre-medical",
        "value": "ef7364db-da52-4954-bb6c-8f6bc86b353f"
    },
    {
        "label": "Product Design",
        "value": "1cd9e086-ff24-4276-9a82-d69b44532fac"
    },
    {
        "label": "Psychology",
        "value": "ade70bb0-e102-4206-8b8f-56e38f1d1c18"
    },
    {
        "label": "Public Policy",
        "value": "6e216def-3b3a-4eb3-aa69-d1154bcc0c97"
    },
    {
        "label": "Public Relations",
        "value": "40f1781c-5a80-4104-ba32-d0d86161c077"
    },
    {
        "label": "Religious Studies",
        "value": "0e3a8e86-1dc7-4f2e-9768-769ab2b9252d"
    },
    {
        "label": "Robotics",
        "value": "1b4c93d8-604d-4ce0-895e-5fe4dd2687ee"
    },
    {
        "label": "Sociology",
        "value": "e1ab8f99-c91f-4718-8131-ad6a8acff637"
    },
    {
        "label": "Software Engineering",
        "value": "18455977-e981-4e18-b986-b6e2dfb88a6d"
    },
    {
        "label": "Sports Management",
        "value": "627b30d9-7e6c-4b7b-8406-2e40b6941738"
    },
    {
        "label": "Statistics",
        "value": "df1e4213-422e-46f5-9256-b76e515af0eb"
    },
    {
        "label": "Supply Chain Management",
        "value": "9015f888-779e-42f7-b824-17f8a1e351f0"
    },
    {
        "label": "Theatre",
        "value": "d2c43468-bada-4834-9935-740c1b57d505"
    },
    {
        "label": "Undeclared",
        "value": "e080888f-f7c7-4656-9b57-403072016c21"
    },
    {
        "label": "Urban Studies",
        "value": "a90c72bc-a281-4b0e-b912-63c2a0000737"
    },
    {
        "label": "Veterinary Medicine",
        "value": "a308f017-d1e6-4db8-9992-4e7a70d1cf26"
    }
];
const schools = [
    {
        "label": "Aalborg University",
        "value": "d0b27c65-d813-473b-ae03-61fabe3485c6"
    },
    {
        "label": "Aalto University",
        "value": "aec5d4e6-c9d7-4151-860c-9ee987faf58f"
    },
    {
        "label": "Aarhus University",
        "value": "d722a51e-8183-4484-a2cb-e861fd4158c9"
    },
    {
        "label": "Abertay University",
        "value": "16440b09-443f-4603-8a91-85a4d82f31b2"
    },
    {
        "label": "Aberystwyth University",
        "value": "ee00ab2e-968c-4a59-8864-1fcde31d4270"
    },
    {
        "label": "Abilene Christian University",
        "value": "dd74a498-5a95-4f9e-a15b-25757a51f9f2"
    },
    {
        "label": "Abo Akademi University",
        "value": "b737b38c-80de-41bb-9ac2-9287f92397b7"
    },
    {
        "label": "Abraham Baldwin Agricultural College",
        "value": "fbad6c0b-b1af-4c55-b6f3-a75d5fcd5d9b"
    },
    {
        "label": "Abu Dhabi University",
        "value": "e17929e9-c9e4-4f30-b017-6728bee8a9a6"
    },
    {
        "label": "Academy of Art University",
        "value": "b5f0c1e5-4ce9-4ed4-bcbc-acb09c8ba05b"
    },
    {
        "label": "Acadia University",
        "value": "58d9403a-a6ed-499b-b4f1-05f6604945af"
    },
    {
        "label": "Acharya Nagarjuna University",
        "value": "8cca5938-6a08-4cdc-8bce-64908ce85a82"
    },
    {
        "label": "Acupuncture and Integrative Medicine College - Berkeley",
        "value": "fb5ea4dd-528f-4719-9a47-0172575167f7"
    },
    {
        "label": "Adams State University",
        "value": "f760694d-ec7d-4128-b4f0-5dc2d252be79"
    },
    {
        "label": "Adelphi University",
        "value": "993d7967-dd57-43f5-b7c6-01a3584602bd"
    },
    {
        "label": "Adrian College",
        "value": "6d703141-cb6f-4bda-804b-681e33c0575c"
    },
    {
        "label": "Adventist University of Health Sciences",
        "value": "8f3828fd-9579-4767-b774-3c0453b5c792"
    },
    {
        "label": "Agnes Scott College",
        "value": "a8ac3e1b-bd72-4029-8fec-f0b52be8afca"
    },
    {
        "label": "AIB College of Business",
        "value": "0c4cf735-bffd-49b4-833a-7053b3e3e7ed"
    },
    {
        "label": "Ain Shams University",
        "value": "27673d47-43ea-471a-badc-84ac700e3122"
    },
    {
        "label": "Airlangga University",
        "value": "505bff13-2b3c-4b0e-afc8-d1daf37bdc73"
    },
    {
        "label": "Ajou University",
        "value": "fbe1299c-ef18-4bd3-8710-e19e05eabfcf"
    },
    {
        "label": "Alabama A&M University",
        "value": "f9e0d3a3-3baa-4fd5-8fb8-d23431ef01b6"
    },
    {
        "label": "Alabama State University",
        "value": "cc1b68f3-323d-4792-be21-f811a68946b9"
    },
    {
        "label": "Alaska Pacific University",
        "value": "3903a1f4-6db2-4922-a94f-a3962e94c914"
    },
    {
        "label": "Al Azhar University",
        "value": "3262b67c-8777-4380-9ee6-62ec843a1336"
    },
    {
        "label": "Albany College of Pharmacy and Health Sciences",
        "value": "6347ffcd-0c73-467d-970b-ac459c33b735"
    },
    {
        "label": "Albany State University",
        "value": "6d18e20f-65e2-4905-8706-f88b4f6a4112"
    },
    {
        "label": "Albertus Magnus College",
        "value": "35ace402-2b6c-4c28-abee-cc44ecbea746"
    },
    {
        "label": "Albion College",
        "value": "dc09c40a-eb37-4c5f-b642-ed24ea4039e3"
    },
    {
        "label": "Albright College",
        "value": "39faf099-a26a-4eb8-a739-b7feef90b61b"
    },
    {
        "label": "Alcorn State University",
        "value": "0402a886-2e1d-4e9a-81ec-09e72165f9ea"
    },
    {
        "label": "Alderson Broaddus University",
        "value": "f3460125-380a-43ee-bb65-f3095b97aa6a"
    },
    {
        "label": "Alexandria University",
        "value": "e1e2f62a-d5d8-4944-8450-d94f1444aa3a"
    },
    {
        "label": "Alexandru Ioan Cuza University",
        "value": "a8743921-dbd4-4bc9-8b83-fb9df87752c8"
    },
    {
        "label": "Al-Farabi Kazakh National University",
        "value": "0f5ef8f4-0d49-4c26-9582-1083ddc83d69"
    },
    {
        "label": "Alfred University",
        "value": "a48a6fcb-379e-493c-8b39-e93684985d12"
    },
    {
        "label": "Alice Lloyd College",
        "value": "a74b6705-9e2e-4259-92f6-82e68a890c77"
    },
    {
        "label": "Al-Imam Mohamed Ibn Saud Islamic University",
        "value": "1f6a2dc6-d821-4d7e-a9c5-17da2c3e2664"
    },
    {
        "label": "Allegheny College",
        "value": "7ff070cb-fb3c-4243-bd95-394bfdcc4cb1"
    },
    {
        "label": "Allen College",
        "value": "b38b0fd4-a5a5-4905-91f2-ecba6fd84499"
    },
    {
        "label": "Allen University",
        "value": "9d904046-cf3e-4bd3-a33b-80509014eca6"
    },
    {
        "label": "Alliant International University",
        "value": "f5bcd2eb-dc82-44e1-9537-29ebec30c478"
    },
    {
        "label": "Alma College",
        "value": "9ca8983e-3ca3-4e53-becf-5c30e7369ba1"
    },
    {
        "label": "Alpen-Adria-Universität Klagenfurt",
        "value": "5b6b8455-96ca-44ca-ad00-9808ed894e3e"
    },
    {
        "label": "Alvernia University",
        "value": "35cd2d04-8866-4534-b974-2d4ed0bd867e"
    },
    {
        "label": "Alverno College",
        "value": "1e13398f-20a5-4905-80c8-7112c6260111"
    },
    {
        "label": "Amberton University",
        "value": "048c67aa-6227-484d-8522-cc04e96c566c"
    },
    {
        "label": "American Academy of Art",
        "value": "dfb50ed9-4a9e-429e-a5ea-8327473ccf0a"
    },
    {
        "label": "American Indian College of the Assemblies of God",
        "value": "80c3216d-7ab1-4c41-b9b8-b808e35845b1"
    },
    {
        "label": "American InterContinental University",
        "value": "9368d39e-0a00-42ba-9746-73c0a122391d"
    },
    {
        "label": "American International College",
        "value": "963cc5cd-63f2-48f2-99f5-7b139a8c777d"
    },
    {
        "label": "American Jewish University",
        "value": "380175e1-f64f-4a55-8b20-38711cd93f17"
    },
    {
        "label": "American Public University System",
        "value": "43572174-1ef0-43e0-aa22-42a556e2d3cc"
    },
    {
        "label": "American River College",
        "value": "dab44b48-1167-4b43-a9e2-2ba69a0b192a"
    },
    {
        "label": "American University",
        "value": "41250109-fcfc-478f-9c35-b3ec743f32c3"
    },
    {
        "label": "American University in Bulgaria",
        "value": "d3d6e4ce-ebba-44cb-8517-2e21aeb795bf"
    },
    {
        "label": "American University in Cairo",
        "value": "d831ec26-aee4-40cf-abbd-55175d289a3d"
    },
    {
        "label": "American University of Beirut (AUB)",
        "value": "91e2e858-0e5d-4a8a-8800-42f98629d158"
    },
    {
        "label": "American University of Paris",
        "value": "bd960ffc-6bbc-4949-af42-7a2d4da54159"
    },
    {
        "label": "American University of Puerto Rico",
        "value": "9b11e7c7-e26d-4384-91f7-f0cfe68a5163"
    },
    {
        "label": "American University of Sharjah (AUS)",
        "value": "b8545268-23e1-46b0-9c72-49f5d1806e18"
    },
    {
        "label": "Amherst College",
        "value": "4a3cb9f4-99a0-4bb2-b395-a3cc84822edb"
    },
    {
        "label": "Amridge University",
        "value": "246e1646-90cf-4805-bb51-e042c1619513"
    },
    {
        "label": "Anderson University",
        "value": "3d901514-5315-4b92-a399-c6e9a3f47176"
    },
    {
        "label": "Andrews University",
        "value": "87323bf9-90c7-4e00-ac62-65cbaa4329de"
    },
    {
        "label": "Angelo State University",
        "value": "dac3d073-9154-483a-afc4-a2889a51536e"
    },
    {
        "label": "Anna Maria College",
        "value": "cdd884c1-313a-4c35-89f5-9c7208996dd5"
    },
    {
        "label": "Antioch University",
        "value": "e840384a-dc52-4ef2-bc1c-34ef434a89e5"
    },
    {
        "label": "Aoyama Gakuin University",
        "value": "36c4a7ca-e74b-4b40-812b-2f4fb1e1d08e"
    },
    {
        "label": "Appalachian Bible College",
        "value": "d7abc2af-c4b2-4246-a73e-aea58746296a"
    },
    {
        "label": "Appalachian State University",
        "value": "d7370652-2a58-4aa8-b4fd-316b4d4f1d7d"
    },
    {
        "label": "Aquinas College",
        "value": "71134a50-ef4e-4c4a-8fe4-6415517f7564"
    },
    {
        "label": "Arcadia University",
        "value": "ab0810ce-9aff-4bf7-98f6-2ce400c0294a"
    },
    {
        "label": "Argosy University",
        "value": "b7fcdfb3-dc7b-41ab-9875-05c6d7511d47"
    },
    {
        "label": "Aristotle University of Thessaloniki",
        "value": "3b26926a-63d5-4eb2-bc93-c68acb4133ec"
    },
    {
        "label": "Arizona Christian University",
        "value": "d4b82387-17c7-4068-b3bf-c66a273f6e00"
    },
    {
        "label": "Arizona State University",
        "value": "db626d4d-8271-406f-9b2a-c10a92d0aadf"
    },
    {
        "label": "Arizona State University - West",
        "value": "704df36a-6bb2-4290-a5a0-daf0553b2b4a"
    },
    {
        "label": "Arkansas Baptist College",
        "value": "a75c72b8-940c-4060-a6cf-edee23d0b5f1"
    },
    {
        "label": "Arkansas State University",
        "value": "303cc11a-af22-4e7c-a77d-fa1b5d585ce4"
    },
    {
        "label": "Arkansas Tech University",
        "value": "411fa33e-b842-460e-85c3-30d2c07dd4eb"
    },
    {
        "label": "Armstrong Atlantic State University",
        "value": "df1759eb-b2e7-49a9-b9c4-06d713d03ccc"
    },
    {
        "label": "Art Academy of Cincinnati",
        "value": "8f99f9e5-1f74-4469-adde-03578d556b35"
    },
    {
        "label": "Art Center College of Design",
        "value": "ae8bea4e-f205-46c9-845f-a853e5c61e58"
    },
    {
        "label": "Art Institute of Atlanta",
        "value": "35ab6bd4-ea64-4842-b419-a6b92a2aba60"
    },
    {
        "label": "Art Institute of Colorado",
        "value": "48cc2285-c2a5-4253-944f-7d167ddac040"
    },
    {
        "label": "Art Institute of Houston",
        "value": "e7312294-91a6-4696-8078-b84b8bdb4d36"
    },
    {
        "label": "Art Institute of Pittsburgh",
        "value": "db591504-a929-4064-9e12-48c538c3ebce"
    },
    {
        "label": "Art Institute of Portland",
        "value": "deda9078-2a6c-4f6c-92ea-5c795e6b160c"
    },
    {
        "label": "Art Institute of Seattle",
        "value": "cbf87380-dabf-44e8-a28e-1622a08b6b3c"
    },
    {
        "label": "Asbury University",
        "value": "c559cf79-28d9-4bf5-a0ba-59d4a2abc599"
    },
    {
        "label": "Ashford University",
        "value": "3c0a6c51-77b0-431b-92c8-f1eacd8d5d67"
    },
    {
        "label": "Ashland University",
        "value": "bd24338f-7af0-4497-b1ff-85d2c159370e"
    },
    {
        "label": "Assumption College",
        "value": "04d7aa89-1d83-47f0-abdd-ae87b5bc620a"
    },
    {
        "label": "Aston University",
        "value": "f92c781b-a6a5-425f-b1e2-8f9b92bdb3dc"
    },
    {
        "label": "Ateneo de Manila University",
        "value": "aee5f456-e020-49fc-a125-2cb5b3b2e9d8"
    },
    {
        "label": "Athens State University",
        "value": "93c730b9-be8a-4b33-ab62-e6b01d02d8e3"
    },
    {
        "label": "Athens University of Economy And Business",
        "value": "a704cd06-8213-464f-a574-93842d8bbe37"
    },
    {
        "label": "Atlanta College of Arts",
        "value": "f4ad7350-4888-4bec-8731-140db838e12d"
    },
    {
        "label": "Auburn University",
        "value": "703324b5-a1a9-4039-84f1-97969a7c23cb"
    },
    {
        "label": "Auburn University - Montgomery",
        "value": "ab11ca48-e5e1-4e83-ab48-54c33709baee"
    },
    {
        "label": "Auckland University of Technology",
        "value": "8f54f30c-4ac7-44b0-9f8b-a8ab3c6a73ba"
    },
    {
        "label": "Augsburg College",
        "value": "a542b955-2886-42fc-8865-fc24c6e1addc"
    },
    {
        "label": "Augustana College",
        "value": "1be377c1-bce4-4258-a6a8-0528edbcdcc7"
    },
    {
        "label": "Aurora University",
        "value": "1a18eabb-8445-45a3-ad84-8d7f8b678d2a"
    },
    {
        "label": "Austin College",
        "value": "83f47bea-f782-47a4-a62f-e5de68094972"
    },
    {
        "label": "Austin Community College",
        "value": "d3b9b533-6b1d-42cd-83e7-e8b4356cf4a1"
    },
    {
        "label": "Austin Peay State University",
        "value": "f2842ab9-6438-4bd7-b9e9-d044ddfefca1"
    },
    {
        "label": "Australian National University",
        "value": "e4a224a0-3700-4aa5-ab9d-c89a2e321bf6"
    },
    {
        "label": "Ave Maria University",
        "value": "ca78f775-6b91-4c2e-9fc9-72c6a17b0988"
    },
    {
        "label": "Averett University",
        "value": "2ec7b56d-ab9f-489a-9e60-c1d893f16fc2"
    },
    {
        "label": "Avila University",
        "value": "e39f4e8b-7abd-4eb8-9eaa-52f706a2b890"
    },
    {
        "label": "Azusa Pacific University",
        "value": "5b6bc98f-4716-4989-9d50-2bbb21b920b1"
    },
    {
        "label": "Babes-Bolyai University",
        "value": "7ace4e1a-f44d-4b52-b0b4-7fbb4990392e"
    },
    {
        "label": "Babson College",
        "value": "22420c7f-b462-49f9-aeb8-a0da01d78a12"
    },
    {
        "label": "Bacone College",
        "value": "482928de-4c66-4698-8d3e-b750023b938e"
    },
    {
        "label": "Baker College of Flint",
        "value": "de52db04-439b-47c0-bf35-d87fa9f30090"
    },
    {
        "label": "Baker University",
        "value": "bf28d92a-f3da-4b92-bf26-ef688dddb195"
    },
    {
        "label": "Baku State University",
        "value": "64850248-b6ea-42b0-b8aa-43885d33f98a"
    },
    {
        "label": "Baldwin Wallace University",
        "value": "4dca6458-a721-4aa8-a9ad-16aeb1369c87"
    },
    {
        "label": "Ball State University",
        "value": "79006ab5-1c02-434c-b74d-f53c721a5013"
    },
    {
        "label": "Bandung Institute of Technology (ITB)",
        "value": "9311abbc-a709-49cf-a8c6-9f5ac16aa139"
    },
    {
        "label": "Bangor University",
        "value": "7f869bd1-3050-4acb-9be2-c5a649ee9a20"
    },
    {
        "label": "Baptist Bible College",
        "value": "bee75170-c852-4bc5-a90d-7c35d3211957"
    },
    {
        "label": "Baptist Bible College and Seminary",
        "value": "29528088-50d0-47f9-9776-bfae024be995"
    },
    {
        "label": "Baptist College of Florida",
        "value": "13b60747-8b8e-4414-8358-04f3264c3ac0"
    },
    {
        "label": "Baptist Memorial College of Health Sciences",
        "value": "1f1d543e-0fa2-4b27-80ad-3fc2ab8a1418"
    },
    {
        "label": "Baptist Missionary Association Theological Seminary",
        "value": "d04b1c91-6026-4815-8aa1-e8bb40ae8e2a"
    },
    {
        "label": "Bard College",
        "value": "64be20e4-bc28-4d9d-a083-39b404ca5e6d"
    },
    {
        "label": "Bard College at Simon's Rock",
        "value": "1e656dc1-df82-432e-8f06-116799d191ec"
    },
    {
        "label": "Bar-Ilan University",
        "value": "ff00e7a0-f99e-4714-a45a-458537108d97"
    },
    {
        "label": "Barnard College",
        "value": "f123198f-0ad9-49ee-ad80-c4dff30ff2b6"
    },
    {
        "label": "Barry University",
        "value": "85fffd58-58af-4bfb-9328-215149618ac0"
    },
    {
        "label": "Barton College",
        "value": "5a9a2bbb-346a-427d-bf7f-aacae9688186"
    },
    {
        "label": "Bastyr University",
        "value": "381857e7-9616-4b62-94e0-e9ca757bbfcc"
    },
    {
        "label": "Bates College",
        "value": "fb1fc1ef-e843-4a85-b710-50f3f5231776"
    },
    {
        "label": "Bauder College",
        "value": "cb4e5c79-69d4-4c38-ba24-cbd3eba2f047"
    },
    {
        "label": "Bauman Moscow State Technical University",
        "value": "c22950d4-73b9-492f-81ce-8f80c15b2574"
    },
    {
        "label": "Bayamon Central University",
        "value": "3184021b-d2c6-45c3-afa5-b04e07251a48"
    },
    {
        "label": "Baylor University",
        "value": "30e6ea18-79f5-4977-9c69-acd2bc3d0323"
    },
    {
        "label": "Bay Path College",
        "value": "7d7c5b5a-287e-48b1-bda3-a44cb19aecb0"
    },
    {
        "label": "Bay State College",
        "value": "b1514abe-c3a1-4c93-9d18-4b116d8a11c7"
    },
    {
        "label": "Beacon College",
        "value": "edb4c4bf-aa8c-46ee-868e-534457e04552"
    },
    {
        "label": "Becker College",
        "value": "4be1642c-b495-428f-b98e-3415d442bbce"
    },
    {
        "label": "Beihang University (former BUAA)",
        "value": "ab93f0f7-d636-4300-b848-bcbe27e52534"
    },
    {
        "label": "Beijing Institute of Technology",
        "value": "510a402d-97a0-4827-aabb-c4a9d79a2998"
    },
    {
        "label": "Beijing Jiaotong University",
        "value": "ebcbf5a6-2b87-4ee0-a3f4-bdd88652cf60"
    },
    {
        "label": "Beijing Normal University",
        "value": "74b87ae8-d3db-4246-b542-414311c49541"
    },
    {
        "label": "Belarusian National Technical University",
        "value": "56d15079-7b50-48a5-bc5f-2e4e27b07895"
    },
    {
        "label": "Belarus State University",
        "value": "f02e8cf2-7e62-49bf-8327-5f7c896aaf66"
    },
    {
        "label": "Belhaven University",
        "value": "42f12c82-7b85-4a73-ac0a-4229918f1022"
    },
    {
        "label": "Bellarmine University",
        "value": "5a3330ff-98cc-4b5c-b80b-aa5e6acbe1da"
    },
    {
        "label": "Bellevue College",
        "value": "814c08c0-7771-4b54-ab5a-38eac4a8e318"
    },
    {
        "label": "Bellevue University",
        "value": "179aab20-75b4-4c58-8b38-f53669f92e14"
    },
    {
        "label": "Bellin College",
        "value": "b7db11a9-b14f-4a6d-8837-0ecddf6223c5"
    },
    {
        "label": "Belmont Abbey College",
        "value": "5b80e503-945d-4f32-8e05-8c08d9bb1fdc"
    },
    {
        "label": "Belmont University",
        "value": "8830181e-bdc9-4de8-9ece-013e63a948d7"
    },
    {
        "label": "Beloit College",
        "value": "c6a279af-0927-43dd-bd01-48183fb2d72b"
    },
    {
        "label": "Bemidji State University",
        "value": "3ad4d2be-3aff-4333-8e6d-a89ca925b125"
    },
    {
        "label": "Benedict College",
        "value": "b13ea05d-e307-4265-9146-a983be2afe91"
    },
    {
        "label": "Benedictine College",
        "value": "bde7267a-f81b-4496-bf3f-8d8bb73c4926"
    },
    {
        "label": "Benedictine University",
        "value": "fbefc88c-344b-4865-8d0f-7a02376b7a53"
    },
    {
        "label": "Benemérita Universidad Autónoma de Puebla",
        "value": "a024c16b-4991-4deb-a20f-9572c3418150"
    },
    {
        "label": "Ben Gurion University of The Negev",
        "value": "0bc318d2-d7cc-4c08-b4cf-fec6f9a4ee53"
    },
    {
        "label": "Benjamin Franklin Institute of Technology",
        "value": "a2b005c6-0862-47a7-b1f9-5718ba045a4b"
    },
    {
        "label": "Bennett College",
        "value": "76c34b86-7f53-4c95-8bb1-235b6a619c38"
    },
    {
        "label": "Bennington College",
        "value": "cbe4e000-cd4d-422f-91db-d28cdbd6167a"
    },
    {
        "label": "Bentley University",
        "value": "4188d805-5292-4ccb-9d05-28277f0329a6"
    },
    {
        "label": "Berea College",
        "value": "31111617-5dc6-4cc1-92ea-1f8763da063e"
    },
    {
        "label": "Berkeley College",
        "value": "00a63fb4-e14b-498d-9a2d-b98125a89e05"
    },
    {
        "label": "Berklee College of Music",
        "value": "d0aa1803-b59c-4b96-bb8c-8ab49e4205e2"
    },
    {
        "label": "Berry College",
        "value": "d13ce40c-143e-4edd-bf93-bd9830238f01"
    },
    {
        "label": "Bethany College",
        "value": "f24330e4-4a2a-49d0-bd21-f4f8a9c340c9"
    },
    {
        "label": "Bethany Lutheran College",
        "value": "d6ec7d48-78af-4416-8528-8703431197c8"
    },
    {
        "label": "Bethel College",
        "value": "f7ab7c40-4aa5-48b5-bb4b-c9e1830d9c42"
    },
    {
        "label": "Bethel University",
        "value": "00603f79-0fd2-4b34-8fcc-13cda8bb13d6"
    },
    {
        "label": "Bethune-Cookman University",
        "value": "30cfbb7d-4070-4b34-828c-a52b556e002a"
    },
    {
        "label": "Bilkent University",
        "value": "dff981df-28db-4a72-8f12-b359f5283383"
    },
    {
        "label": "Binghamton University - SUNY",
        "value": "b5ea48ad-4707-442a-9bfc-128b8aa3195b"
    },
    {
        "label": "BI Norwegian Business School",
        "value": "9b4867c6-bda9-49ef-b8e2-b4312a803376"
    },
    {
        "label": "Biola University",
        "value": "063a3071-1c34-43c6-805e-a6a8a76eac32"
    },
    {
        "label": "Birkbeck College, University of London",
        "value": "a56f5544-2ee4-4bde-bf65-2c1ad79bd488"
    },
    {
        "label": "Birmingham-Southern College",
        "value": "36cddc3f-fb62-47d0-8e06-a70c649e1603"
    },
    {
        "label": "Bismarck State College",
        "value": "01008e82-2353-4f46-88e5-9aa2198bc61d"
    },
    {
        "label": "Blackburn College",
        "value": "cbcd7799-5c66-4218-a20d-808b4e4d0a5c"
    },
    {
        "label": "Black Hills State University",
        "value": "23edb5a2-ed61-42a3-a1f1-94618d0aa07c"
    },
    {
        "label": "Blessing-Rieman College of Nursing",
        "value": "7f49b032-e785-450e-b428-151ddf956721"
    },
    {
        "label": "Blinn College, Brenham Campus",
        "value": "872fda47-f39c-4ffa-892e-9274ca4bcf0f"
    },
    {
        "label": "Blinn College, Bryan Campus",
        "value": "a3a8b511-7235-4cac-ab59-1991677660f0"
    },
    {
        "label": "Bloomfield College",
        "value": "81605821-c267-4300-b092-4f55ca85b5c5"
    },
    {
        "label": "Bloom Institute of Technology (prev. Lambda School)",
        "value": "de573f07-e393-41a7-bc47-2b6678a582e7"
    },
    {
        "label": "Bloomsburg University of Pennsylvania",
        "value": "c74e3b66-ad5f-4c4a-9ee9-e67fc74691dc"
    },
    {
        "label": "Bluefield College",
        "value": "b30148cc-6fbd-4209-92a9-29109da8e07b"
    },
    {
        "label": "Bluefield State College",
        "value": "51e4eadf-21d5-4d5c-ac43-11d8d68f97db"
    },
    {
        "label": "Blue Mountain College",
        "value": "5f407919-0d81-464f-bfed-c4c7c53f5c5f"
    },
    {
        "label": "Bluffton University",
        "value": "e3e2e060-2a35-4192-8371-6c6f39fd36fa"
    },
    {
        "label": "Bogazici University",
        "value": "95d6c0be-c1e6-4314-a9f7-5af8606762c6"
    },
    {
        "label": "Bogor Agricultural University",
        "value": "943c6172-e0b0-4978-825f-92ee68f5fedd"
    },
    {
        "label": "Boise State University",
        "value": "0031eaac-66c2-4daf-b679-9d1695619efa"
    },
    {
        "label": "Bond University",
        "value": "c74bcf82-c0c9-4db7-b60c-c2cf90a5eb6f"
    },
    {
        "label": "Boricua College",
        "value": "064a815e-c492-413c-8cc0-a6de8bbe9804"
    },
    {
        "label": "Boston Architectural College",
        "value": "e4806402-9bc7-4d7a-94f6-42c43cc92f1b"
    },
    {
        "label": "Boston College",
        "value": "7f775b68-0b63-41be-a657-98cef14d9e27"
    },
    {
        "label": "Boston Conservatory",
        "value": "2171a33d-04c6-4713-84fd-63f75e6f0107"
    },
    {
        "label": "Boston University",
        "value": "d44245f6-9511-472a-9bbb-9ba85b58673d"
    },
    {
        "label": "Bowdoin College",
        "value": "7e31f418-c589-4bb6-9219-a4db7bde4839"
    },
    {
        "label": "Bowie State University",
        "value": "884f05ec-302a-4f24-b372-6f1a22bda850"
    },
    {
        "label": "Bowling Green State University",
        "value": "36f9dac7-82c7-4ea9-8112-984822b3df29"
    },
    {
        "label": "Bradley University",
        "value": "88c7f5a4-170f-4a8f-9de2-4fa952dfc1b6"
    },
    {
        "label": "Brandeis University",
        "value": "08bcc74e-b952-4670-97a4-78eeee6bb9f0"
    },
    {
        "label": "Brandman University",
        "value": "c73d08d2-661c-44fe-b13a-70b5eca8dcf7"
    },
    {
        "label": "Brazosport College",
        "value": "26aac759-7f3e-4cd7-9cd3-6a0a7ac14a66"
    },
    {
        "label": "Brenau University",
        "value": "ca2327e3-5eb2-4321-ae87-e6e99f7d535f"
    },
    {
        "label": "Brescia University",
        "value": "4a0bb286-9cfa-4bd7-a503-52328f85504c"
    },
    {
        "label": "Brevard College",
        "value": "9c543f78-e1ae-4866-9d8b-0f902406aa98"
    },
    {
        "label": "Brewton-Parker College",
        "value": "1765a824-7253-49bd-aa6b-ac6c4b1dc674"
    },
    {
        "label": "Briarcliffe College",
        "value": "a5c5c0fe-b2b4-4e66-8870-a2f194493662"
    },
    {
        "label": "Briar Cliff University",
        "value": "b0558df4-48e0-46f9-b93e-31d97c8cd426"
    },
    {
        "label": "Bridgewater College",
        "value": "8261e5d5-6642-464c-98eb-e5721ac47fe4"
    },
    {
        "label": "Bridgewater State University",
        "value": "d8d3507c-4115-4420-97a6-46a7fa992416"
    },
    {
        "label": "Brigham Young University - Hawaii",
        "value": "b9dc4ee1-f88d-4d6e-bd02-475809658d3d"
    },
    {
        "label": "Brigham Young University - Idaho",
        "value": "4854b3c9-461a-47cd-809e-46390a7454f8"
    },
    {
        "label": "Brigham Young University - Provo",
        "value": "a3d5ecba-799a-4383-a31b-e5a57bef7ade"
    },
    {
        "label": "Brno University of Technology",
        "value": "fa9adddb-f1be-4ba1-b2da-17133131596b"
    },
    {
        "label": "Brock University",
        "value": "96c15244-d6f8-4081-bb47-ab06c63634d9"
    },
    {
        "label": "Brooks Institute of Photography",
        "value": "d053df76-a056-4489-a60f-e31c2ca2661a"
    },
    {
        "label": "Brown University",
        "value": "4ff15ae5-28b7-4809-bd75-09c90283e935"
    },
    {
        "label": "Brunel University",
        "value": "d04737a1-c469-41b9-8380-8e3566fb295c"
    },
    {
        "label": "Bryan College",
        "value": "f31bba06-00e3-4360-b136-db4584292a40"
    },
    {
        "label": "Bryant University",
        "value": "aef3eb1a-6588-4ce2-851b-bfaafb1ad833"
    },
    {
        "label": "Bryn Athyn College of the New Church",
        "value": "8c680437-ea23-45b2-a589-ee5d45163923"
    },
    {
        "label": "Bryn Mawr College",
        "value": "2042e503-c574-4eb0-99c2-3c8ba5bbb39e"
    },
    {
        "label": "Bucknell University",
        "value": "cb08d72e-65d6-44f1-be24-92a407847b8a"
    },
    {
        "label": "Buena Vista University",
        "value": "f304fa14-8505-404b-abb9-666911c98507"
    },
    {
        "label": "Burlington College",
        "value": "43a08114-7faa-4f7f-a65d-4f0fba1d4294"
    },
    {
        "label": "Butler University",
        "value": "6cb9d75b-4a28-4cea-94c9-d0c64e148ffa"
    },
    {
        "label": "Cabarrus College of Health Sciences",
        "value": "d6e65801-6d01-4826-949a-ca20e83add8e"
    },
    {
        "label": "Cabrini College",
        "value": "d846dfac-812c-4deb-8fb5-fe8c9df04689"
    },
    {
        "label": "Cairn University",
        "value": "06129bbb-f38c-4a17-8e62-9e6856ffe33d"
    },
    {
        "label": "Cairo University",
        "value": "5302db37-55cf-4b5a-9d07-35ccf0659500"
    },
    {
        "label": "Caldwell College",
        "value": "3d57d1e8-17a0-4d61-89c2-d5815b4f9f3d"
    },
    {
        "label": "California Baptist University",
        "value": "0bdbfca6-c2a2-4c31-8e21-ce0e234aa7b4"
    },
    {
        "label": "California College of the Arts",
        "value": "64bcb2c1-46cd-487b-8ff3-120aedd70d47"
    },
    {
        "label": "California Institute of Integral Studies",
        "value": "016ce970-4c0e-4116-9d32-5f370dac3010"
    },
    {
        "label": "California Institute of Technology",
        "value": "ba9a1b8d-ca3a-40cf-9a2f-4b42f0c8d84d"
    },
    {
        "label": "California Institute of the Arts",
        "value": "386531b0-40ca-4f10-b990-7d97f3f5c46f"
    },
    {
        "label": "California Lutheran University",
        "value": "f1079cab-7d9e-4978-9000-f02554d44966"
    },
    {
        "label": "California Maritime Academy",
        "value": "336e4251-08ea-4d77-a0fa-f0baa1c16119"
    },
    {
        "label": "California Polytechnic State University - San Luis Obispo",
        "value": "d05dda01-929d-4318-a3a9-57b5e01d1e46"
    },
    {
        "label": "California State Polytechnic University - Pomona",
        "value": "8433a1bb-29c7-4c59-9296-63a42bb483a3"
    },
    {
        "label": "California State University - Bakersfield",
        "value": "80930ea0-0314-49dd-a9f9-ede40f06d369"
    },
    {
        "label": "California State University - Channel Islands",
        "value": "6763eb37-d739-43a2-9bed-f9bce8d4ba53"
    },
    {
        "label": "California State University - Chico",
        "value": "1e990ca6-456c-404b-8406-899ceb87d0d5"
    },
    {
        "label": "California State University - Dominguez Hills",
        "value": "ab38c295-1046-4aeb-93b7-059c268720e1"
    },
    {
        "label": "California State University - East Bay",
        "value": "45b37232-7d50-4652-be2f-cb334fda3e6f"
    },
    {
        "label": "California State University - Fresno",
        "value": "18afd690-005d-4d14-8ece-8b7eb71bed51"
    },
    {
        "label": "California State University - Fullerton",
        "value": "d7217298-6708-4c15-9369-04bd0ac3e677"
    },
    {
        "label": "California State University - Long Beach",
        "value": "a7b734f8-2bfb-4d4c-ab24-da4cfb9c1eeb"
    },
    {
        "label": "California State University - Los Angeles",
        "value": "73f138d7-9d85-41d0-981d-7b9be7c25b68"
    },
    {
        "label": "California State University - Monterey Bay",
        "value": "4cf32df6-a843-452f-aaf2-79006615d4b5"
    },
    {
        "label": "California State University - Northridge",
        "value": "ba182fc5-6ae9-4194-bb0f-a94cf42c6f82"
    },
    {
        "label": "California State University - Sacramento",
        "value": "0da5a957-f8d2-4e4f-ac9a-ccf9319093d4"
    },
    {
        "label": "California State University - San Bernardino",
        "value": "065efaa5-c472-4442-81ce-d91539dd741c"
    },
    {
        "label": "California State University - San Marcos",
        "value": "4e4a73d1-2823-4389-8e26-9982f7046332"
    },
    {
        "label": "California State University - Stanislaus",
        "value": "2f12c9f9-967e-454a-9e3c-494c59504597"
    },
    {
        "label": "California University of Pennsylvania",
        "value": "5c8a6285-ee6a-40c8-b617-ccb2eb2caed1"
    },
    {
        "label": "Calumet College of St. Joseph",
        "value": "b2ccd3cb-e481-4b8f-a8db-aa7307bd52cd"
    },
    {
        "label": "Calvary Bible College and Theological Seminary",
        "value": "5acbe975-9be6-4fd2-9039-6b0f20a3363f"
    },
    {
        "label": "Calvin College",
        "value": "b6243acb-ab17-489d-9290-e66fbdcc5acc"
    },
    {
        "label": "Cambridge College",
        "value": "cdde230f-7a95-4a66-acca-f99701f616e5"
    },
    {
        "label": "Cameron University",
        "value": "d6006397-c4fe-4196-8566-8ce247966936"
    },
    {
        "label": "Campbellsville University",
        "value": "fce9b717-c76e-4cbd-9900-2dbfdef40d74"
    },
    {
        "label": "Campbell University",
        "value": "cd2aa61a-a921-4096-a325-6f8a8b35d007"
    },
    {
        "label": "Canisius College",
        "value": "73420efb-d6e3-4f46-bc0c-a81116b20376"
    },
    {
        "label": "Capella University",
        "value": "d98748ff-1674-4c18-8e8f-695647effb80"
    },
    {
        "label": "Capital University",
        "value": "70b14301-7655-4863-98ce-e2d6e14016b2"
    },
    {
        "label": "Capitol College",
        "value": "115bc752-1b33-49b6-b0f7-1a7d390e79a2"
    },
    {
        "label": "Cardiff University",
        "value": "f12e61b5-e463-43da-8ebd-c674f4600fab"
    },
    {
        "label": "Cardinal Stritch University",
        "value": "1d5e1b15-0a08-42e4-aaf7-91b388363646"
    },
    {
        "label": "Caribbean University",
        "value": "7ad53e32-1cc9-41ac-8c83-759e3f470ed3"
    },
    {
        "label": "Carleton College",
        "value": "770ae2be-6707-467f-96ed-26a638566062"
    },
    {
        "label": "Carleton University",
        "value": "934770ce-051c-421c-ab59-3f42f925692b"
    },
    {
        "label": "Carlos Albizu University",
        "value": "7c6407f4-8ed1-4f97-9740-ca2b8d0fc0b6"
    },
    {
        "label": "Carlow University",
        "value": "700443fd-8117-4b13-bf5c-bc2cc9cdae9d"
    },
    {
        "label": "Carnegie Mellon University",
        "value": "59bb84d6-e0ce-401d-9f94-474cc15176d4"
    },
    {
        "label": "Carroll College",
        "value": "7f934c3c-3a75-4e94-ad0e-3809cbfa7605"
    },
    {
        "label": "Carroll University",
        "value": "99f5bfd6-472a-49e5-8b06-e9fd1ab60e45"
    },
    {
        "label": "Carson-Newman University",
        "value": "81cd6d79-1988-4555-a367-d0fac93807c8"
    },
    {
        "label": "Carthage College",
        "value": "f2fbc731-ca63-417c-a059-d7e4549d82e9"
    },
    {
        "label": "Case Western Reserve University",
        "value": "9d34e65e-3f99-47bb-b02c-2c24a46677e7"
    },
    {
        "label": "Castleton State College",
        "value": "8f721ec2-fc89-48e3-a6cb-506bfeff1632"
    },
    {
        "label": "Catania University",
        "value": "3d850e40-cade-41a5-b75c-07557a2c1130"
    },
    {
        "label": "Catawba College",
        "value": "f18b970a-159b-4b30-a4f8-2f1d091f8486"
    },
    {
        "label": "Cazenovia College",
        "value": "82c92b72-a91f-4d30-8afd-eeb9213e7a84"
    },
    {
        "label": "Cedar Crest College",
        "value": "0ea10bdc-3c76-4195-a5bb-370a938ad7d6"
    },
    {
        "label": "Cedarville University",
        "value": "3c7f1117-eeff-40d6-8084-785741adc011"
    },
    {
        "label": "Centenary College",
        "value": "44b6ed2e-d784-4737-8854-ea8a2025ca9d"
    },
    {
        "label": "Centenary College of Louisiana",
        "value": "5a5efb59-b55d-4598-9541-78131127b5a6"
    },
    {
        "label": "Central Baptist College",
        "value": "550f2ee1-4ea3-45fd-9d88-97b92dd75114"
    },
    {
        "label": "Central Bible College",
        "value": "35ee2366-2b42-44b0-91da-e6d37e4d1cc2"
    },
    {
        "label": "Central Christian College",
        "value": "3cf77ff2-a15e-4bdd-b4c4-8c633714e1c6"
    },
    {
        "label": "Central College",
        "value": "2c8fa8d9-ab79-40ea-b259-823eaf2cce34"
    },
    {
        "label": "Central Connecticut State University",
        "value": "7b48e9ac-b673-424c-b0d6-893602ed08a0"
    },
    {
        "label": "Central Methodist University",
        "value": "7963e0de-b30f-4dab-9a54-ed48ca370ba5"
    },
    {
        "label": "Central Michigan University",
        "value": "f764f2c9-078c-42da-9e8c-9211f69bfd5d"
    },
    {
        "label": "Central Penn College",
        "value": "1c84b7b7-357c-482a-b863-6b54e0ea5e19"
    },
    {
        "label": "Central State University",
        "value": "3a325fa5-33d7-4325-9d82-66027ebeb651"
    },
    {
        "label": "Central Washington University",
        "value": "0e2d1d87-8798-45a4-a64d-b1c7b6d82946"
    },
    {
        "label": "Centre College",
        "value": "67131fc8-0270-4e45-8111-cec374658966"
    },
    {
        "label": "Chadron State College",
        "value": "81dce57b-c8db-4917-83b4-9cf9297f79f7"
    },
    {
        "label": "Chalmers University of Technology",
        "value": "dfcdc84d-c895-403e-8e08-a2acd0253b94"
    },
    {
        "label": "Chamberlain College of Nursing",
        "value": "904174ce-c25b-45f2-a746-b302f76d4712"
    },
    {
        "label": "Chaminade University of Honolulu",
        "value": "b442a2b9-f5a8-4016-b78e-23e85d838998"
    },
    {
        "label": "Champlain College",
        "value": "5faf50d4-65fc-4f9c-beb9-bcf33ea29281"
    },
    {
        "label": "Chancellor University",
        "value": "4a35120f-7ee9-4d0e-a9af-1dea47ac3860"
    },
    {
        "label": "Chang Gung University",
        "value": "67bf7ba8-61bf-4579-a658-1a5076dd8b4e"
    },
    {
        "label": "Chapman University",
        "value": "e5b92fda-ef99-4761-9bba-35665357206f"
    },
    {
        "label": "Charles Darwin University",
        "value": "f6694291-dc50-4445-9b02-061c202340f1"
    },
    {
        "label": "Charles R. Drew University of Medicine and Science",
        "value": "c8bf5b85-0ef9-4f7d-9701-cf4e8531b92a"
    },
    {
        "label": "Charleston Southern University",
        "value": "650a1f89-8aef-42ad-b418-1a9e54f15178"
    },
    {
        "label": "Charles University",
        "value": "942a3f42-f5ec-463a-befe-b298baf65981"
    },
    {
        "label": "Charter Oak State College",
        "value": "234c1a3e-642b-4b4f-81a3-e8f5c5029036"
    },
    {
        "label": "Chatham University",
        "value": "0480e0d4-6028-47af-88ca-fdc660c84381"
    },
    {
        "label": "Chestnut Hill College",
        "value": "153e96ef-af9b-49d2-a2ef-aa15efb75fba"
    },
    {
        "label": "Cheyney University of Pennsylvania",
        "value": "1a49be99-f985-4906-9a59-ab598c68ddda"
    },
    {
        "label": "Chiang Mai University",
        "value": "19b1f399-f992-4257-8937-8c0766f63a8f"
    },
    {
        "label": "Chiba University",
        "value": "20040672-8231-4c2a-b4fe-88ae957299ab"
    },
    {
        "label": "Chicago State University",
        "value": "d5e4d5d0-5e1c-478d-9f4c-fc4af7e30861"
    },
    {
        "label": "Chinese University of Hong Kong",
        "value": "7417f86e-edb4-401b-bfa3-fce4cc677f34"
    },
    {
        "label": "Chipola College",
        "value": "69c27210-dd18-43a3-9dd1-b85d6fa65b0f"
    },
    {
        "label": "Chonbuk National University",
        "value": "c5701fea-a658-4400-99e0-e6e40f12ce2b"
    },
    {
        "label": "Chonnam National University",
        "value": "60303d20-8aab-45f6-919e-78df486e40f7"
    },
    {
        "label": "Chowan University",
        "value": "2c602de0-b286-4abb-9c7d-13bfdb3de7f7"
    },
    {
        "label": "Christendom College",
        "value": "e0c1ae6e-99ec-4f20-ba76-1f65ec1935eb"
    },
    {
        "label": "Christian-Albrechts-Universität zu Kiel",
        "value": "616d340e-817c-4721-918b-15395a5a831c"
    },
    {
        "label": "Christian Brothers University",
        "value": "61bf9144-5121-481f-aa0d-4fa9a83b15d1"
    },
    {
        "label": "Christopher Newport University",
        "value": "1a92d898-b254-403c-85a6-25f65db4b4b5"
    },
    {
        "label": "Chulalongkorn University",
        "value": "df99deca-2de1-49fb-b083-019efc088e19"
    },
    {
        "label": "Chungnam National University",
        "value": "c071ca8a-b189-407f-b2b9-a2619923d4c9"
    },
    {
        "label": "Cincinnati Christian University",
        "value": "0f0c0a2a-e73d-4b37-95b2-2ce18b41d829"
    },
    {
        "label": "Cincinnati College of Mortuary Science",
        "value": "8700d986-8068-4054-96ed-e442b5ba203a"
    },
    {
        "label": "City University London",
        "value": "61b62d5d-eb46-466e-b916-8724c63f2e6a"
    },
    {
        "label": "City University of Hong Kong",
        "value": "74563b56-7409-41ac-bca6-48d784566ddf"
    },
    {
        "label": "City University of Seattle",
        "value": "3d4db6bf-6fbe-459e-b625-f617346fc573"
    },
    {
        "label": "Claflin University",
        "value": "46b444d8-1597-4f65-a101-8e29c1accb2e"
    },
    {
        "label": "Claremont McKenna College",
        "value": "18932708-b466-4426-9c09-e2ec02db702b"
    },
    {
        "label": "Clarion University of Pennsylvania",
        "value": "b73d55b5-2fbf-4806-80b4-d1d4c4e405ae"
    },
    {
        "label": "Clark Atlanta University",
        "value": "dea1bdbe-c8dc-49ec-926e-2aefe1e9d195"
    },
    {
        "label": "Clarke University",
        "value": "2bc87643-a54a-48f3-9719-0e812df29538"
    },
    {
        "label": "Clarkson College",
        "value": "79c6d8bf-2395-4035-913d-d191afa51916"
    },
    {
        "label": "Clarkson University",
        "value": "366de96f-635a-4339-881c-85f0167fba83"
    },
    {
        "label": "Clark University",
        "value": "4c3c3617-77a1-4979-a69b-04ff762151c8"
    },
    {
        "label": "Clayton State University",
        "value": "ec174b4b-5bc9-4d25-85ce-afe8c23d994b"
    },
    {
        "label": "Clear Creek Baptist Bible College",
        "value": "fb2d0d5b-eb0c-48f1-851e-28b2b42a2c96"
    },
    {
        "label": "Clearwater Christian College",
        "value": "c243771b-3098-4905-950e-ebd5530f2443"
    },
    {
        "label": "Cleary University",
        "value": "ea6567ea-edb6-4d10-9df2-c79038ae4fcb"
    },
    {
        "label": "Clemson University",
        "value": "4c8bb231-957e-4a29-aa26-6161358f679c"
    },
    {
        "label": "Cleveland Chiropractic College",
        "value": "a517f71e-9966-4502-be73-075382071914"
    },
    {
        "label": "Cleveland Institute of Art",
        "value": "df30494a-d66f-4dad-83de-8ed35b35e9c5"
    },
    {
        "label": "Cleveland Institute of Music",
        "value": "d059e7df-4853-4959-b3b0-d2083a0a5a81"
    },
    {
        "label": "Cleveland State University",
        "value": "7cbb292f-ac37-4e4a-b331-6af4c014da10"
    },
    {
        "label": "Coastal Carolina University",
        "value": "3751012c-a60f-4c90-855e-1e32de2029c2"
    },
    {
        "label": "Coe College",
        "value": "5b1cd3f0-3670-42a7-ab20-84f4e20b076b"
    },
    {
        "label": "Cogswell Polytechnical College",
        "value": "72c4cc50-586c-4fbb-a9eb-746f2734b0a0"
    },
    {
        "label": "Coker College",
        "value": "05970c96-6700-4d19-baee-d6db04f37849"
    },
    {
        "label": "Colby College",
        "value": "91476fc6-4c38-45a0-b9b5-f2de5c584250"
    },
    {
        "label": "Colby-Sawyer College",
        "value": "afe77c19-2f78-457a-ae31-2356b4345b36"
    },
    {
        "label": "Colgate University",
        "value": "bfc4b874-cb4f-4a99-96a8-52f1db2f6079"
    },
    {
        "label": "College at Brockport - SUNY",
        "value": "d87958fc-d840-444b-8cbc-f0466176da5c"
    },
    {
        "label": "College for Creative Studies",
        "value": "b4c34dfb-7563-4f0f-b52f-c94c14900253"
    },
    {
        "label": "College of Charleston",
        "value": "0ef74aed-8626-44ec-8f7e-08a0c57ee0e2"
    },
    {
        "label": "College of Idaho",
        "value": "ecbb7ef5-ff60-47a3-b65c-8ed89f0ed4a4"
    },
    {
        "label": "College of Mount St. Joseph",
        "value": "9c345b68-5253-43ff-ac9f-28849cc04f63"
    },
    {
        "label": "College of Mount St. Vincent",
        "value": "34fa6b72-4b66-40d2-b24c-d8145891ab7f"
    },
    {
        "label": "College of New Jersey",
        "value": "01d58e09-47fe-42bf-89a8-0c18d9c9f6f4"
    },
    {
        "label": "College of New Rochelle",
        "value": "4435d556-3a93-4011-a1ca-13a761baf75b"
    },
    {
        "label": "College of Our Lady of the Elms",
        "value": "7ba0004b-0484-4a9e-95eb-0ce1a3f909a2"
    },
    {
        "label": "College of Saints John Fisher & Thomas More",
        "value": "24e32515-61ce-4d77-93a6-6ac5eff79a01"
    },
    {
        "label": "College of Southern Nevada",
        "value": "0be6dae5-9318-497e-a2f4-5849d8850381"
    },
    {
        "label": "College of St. Benedict",
        "value": "8bcc1396-e646-4dde-86a8-72e886a543e0"
    },
    {
        "label": "College of St. Elizabeth",
        "value": "2928f536-7233-40c9-ac8f-a818cf3da900"
    },
    {
        "label": "College of St. Joseph",
        "value": "3eab4ab5-5328-4dd6-ad95-7b51ffc584e9"
    },
    {
        "label": "College of St. Mary",
        "value": "238cd8ef-836e-4c2a-a984-299f7c32c78a"
    },
    {
        "label": "College of St. Rose",
        "value": "dd66a337-7808-454e-b6f4-56d438eb5d6d"
    },
    {
        "label": "College of St. Scholastica",
        "value": "8b51642d-92c1-46f5-9fd9-d0bb748bf1ae"
    },
    {
        "label": "College of the Atlantic",
        "value": "708df2b1-3400-461a-a598-0ec217bbebca"
    },
    {
        "label": "College of the Holy Cross",
        "value": "7e4b381f-2ba6-4c49-b729-88927d2174cc"
    },
    {
        "label": "College of the Ozarks",
        "value": "401727e9-140d-4244-9bce-70cc492ff7db"
    },
    {
        "label": "College of William and Mary",
        "value": "5ab5ecdc-a811-4da2-aafb-60053b28e303"
    },
    {
        "label": "College of Wooster",
        "value": "923a05cf-d605-4b97-a2d3-2f07390ad41e"
    },
    {
        "label": "Colorado Christian University",
        "value": "5c0b9f4b-c171-430b-b570-1900fe5165d3"
    },
    {
        "label": "Colorado College",
        "value": "5243de8d-6840-4486-bcdc-686e051fa197"
    },
    {
        "label": "Colorado Mesa University",
        "value": "b1514f04-1300-44ac-91b9-d909cf921ca9"
    },
    {
        "label": "Colorado School of Mines",
        "value": "20ccb2df-6d87-4f19-972d-a01d776e2e2a"
    },
    {
        "label": "Colorado State University",
        "value": "865e2ba9-5961-401d-8fed-b5981dd801d5"
    },
    {
        "label": "Colorado State University - Pueblo",
        "value": "e0214fe1-5c42-40e3-990d-5f63566ef7a0"
    },
    {
        "label": "Colorado Technical University",
        "value": "26045920-2cbf-4fa9-bd0f-ab44a077aca5"
    },
    {
        "label": "Columbia College",
        "value": "2aa4520c-c99a-4a0d-8948-49a5211cbd4e"
    },
    {
        "label": "Columbia College Chicago",
        "value": "d54466c7-9c50-4057-81a6-f1793dfe4aff"
    },
    {
        "label": "Columbia College of Nursing",
        "value": "e0e412d4-d595-41d5-bf8a-c418d48df50a"
    },
    {
        "label": "Columbia International University",
        "value": "67d17e84-7f19-47f8-9243-aa1274645289"
    },
    {
        "label": "Columbia University",
        "value": "9dad0555-284d-4e78-a834-9a4507a9bbbd"
    },
    {
        "label": "Columbus College of Art and Design",
        "value": "5d311620-93e4-4ffc-b28a-8c04212bed6a"
    },
    {
        "label": "Columbus State University",
        "value": "e9a389a2-17cb-42b2-91a0-3b8b760a5997"
    },
    {
        "label": "Conception Seminary College",
        "value": "b93579b8-ba0b-419a-8f73-6b31bee4eb72"
    },
    {
        "label": "Concordia College",
        "value": "990fdf38-e4dd-4c60-9d77-bb89f08b6286"
    },
    {
        "label": "Concordia College - Moorhead",
        "value": "975ab158-a429-4b15-98dd-945f04227c35"
    },
    {
        "label": "Concordia University",
        "value": "c00c671f-72e6-4fbf-bbf0-433290e59572"
    },
    {
        "label": "Concordia University Chicago",
        "value": "42328689-0b33-492a-847f-1a5ba44a758e"
    },
    {
        "label": "Concordia University - St. Paul",
        "value": "ab438dad-6a76-45d6-adba-600b125b2727"
    },
    {
        "label": "Concordia University Texas",
        "value": "b35bfeba-a8b7-47c5-bb4f-5c8458b489c9"
    },
    {
        "label": "Concordia University Wisconsin",
        "value": "bf1d0df3-bdd4-4cd5-8c79-0bfcea9c95f0"
    },
    {
        "label": "Concord University",
        "value": "7bb6ff9e-7469-457e-985b-f57cf163edd5"
    },
    {
        "label": "Connecticut College",
        "value": "36a216b8-52c9-4d4c-bdfa-b999f213983c"
    },
    {
        "label": "Converse College",
        "value": "855efcca-3234-433b-b563-642baa94386a"
    },
    {
        "label": "Cooper Union",
        "value": "ca951ec2-3a2a-4ee6-8050-3ca25794b85a"
    },
    {
        "label": "Copenhagen Business School",
        "value": "bc28cdfb-5180-4ed9-bc6a-503df5272d22"
    },
    {
        "label": "Coppin State University",
        "value": "1e77d5ec-ea2b-4e9f-a05d-0f9991533b0e"
    },
    {
        "label": "Corban University",
        "value": "9f37345b-c03f-4bc4-a358-d143eba1b2bf"
    },
    {
        "label": "Corcoran College of Art and Design",
        "value": "5ece50b8-cfae-4544-9c93-1cc2130c2a5f"
    },
    {
        "label": "Cornell College",
        "value": "cc9e7ed6-9f2b-42f2-97a2-6478b7cb17fd"
    },
    {
        "label": "Cornell University",
        "value": "c43e2578-95df-48c0-a55b-fb68f7abb612"
    },
    {
        "label": "Cornerstone University",
        "value": "07208869-d57d-4d14-9cd6-30bc8fd6db4f"
    },
    {
        "label": "Cornish College of the Arts",
        "value": "1ff4b777-453f-4e72-a818-af2d8cb1375a"
    },
    {
        "label": "Corvinus University of Budapest",
        "value": "b9bddcfc-c835-414d-a0a9-7ac92cb22753"
    },
    {
        "label": "Covenant College",
        "value": "9958bae9-9b95-4f78-a6f4-0c37efcfcaaa"
    },
    {
        "label": "Coventry University",
        "value": "274c3fbb-0d90-4d2a-a908-f76e52ab0143"
    },
    {
        "label": "Cox College",
        "value": "1fffe571-8d89-4c66-926c-474447ccf5b2"
    },
    {
        "label": "Creighton University",
        "value": "dfdaaaff-f2e8-44a8-aa88-ceab83e83a34"
    },
    {
        "label": "Criswell College",
        "value": "a03a96a6-ec00-43c5-ab34-4c72aa29356b"
    },
    {
        "label": "Crown College",
        "value": "ccbed3b5-7155-41ea-96c2-83332dc5a271"
    },
    {
        "label": "Cukurova University",
        "value": "2d2e69c1-669d-437f-abe0-f5a52b2d19be"
    },
    {
        "label": "Culinary Institute of America",
        "value": "94dba696-18ab-4b11-9824-29146a724a2f"
    },
    {
        "label": "Culver-Stockton College",
        "value": "84f05d62-49b9-4075-8f2d-dd4c8579b425"
    },
    {
        "label": "Cumberland University",
        "value": "ec856afa-66d9-41cd-b7f0-7c486fe73f54"
    },
    {
        "label": "CUNY - Baruch College",
        "value": "c1d38545-e855-4ad5-b8e0-7fe04cf251b4"
    },
    {
        "label": "CUNY - Brooklyn College",
        "value": "ff957530-f112-4e12-9db9-64fca677ce81"
    },
    {
        "label": "CUNY - City College",
        "value": "36cb3a4c-61b0-4d1e-951f-778ed21f40b5"
    },
    {
        "label": "CUNY - College of Staten Island",
        "value": "365ce5ae-afdf-46f3-8631-8e2f9e089858"
    },
    {
        "label": "CUNY - Hunter College",
        "value": "7c413351-a9cd-41fd-9fe1-18cde63cd9f1"
    },
    {
        "label": "CUNY - John Jay College of Criminal Justice",
        "value": "9ec9ea89-fa4f-4cce-bc54-0ee6cfd73567"
    },
    {
        "label": "CUNY - Lehman College",
        "value": "b426820c-d001-4914-8a76-240adaca2fc3"
    },
    {
        "label": "CUNY - Medgar Evers College",
        "value": "b1d9b634-f791-4e5f-ab98-0e83163216cd"
    },
    {
        "label": "CUNY - New York City College of Technology",
        "value": "60f6941d-20b7-45f2-a8aa-1a43e39b38fb"
    },
    {
        "label": "CUNY - Queens College",
        "value": "b4c9d74b-60db-4fc5-984f-2ffe59cc82c8"
    },
    {
        "label": "CUNY - York College",
        "value": "4e18fd9c-216a-478e-aaf3-b6969f9557e6"
    },
    {
        "label": "Curry College",
        "value": "0ab05200-a22f-49ea-b24f-6c8bdef758d7"
    },
    {
        "label": "Curtin University",
        "value": "7633e68c-5f7a-4850-9030-5e13d263a757"
    },
    {
        "label": "Curtis Institute of Music",
        "value": "9572ed98-8452-4356-885e-71a03c5d180c"
    },
    {
        "label": "Czech Technical University In Prague",
        "value": "f49fd594-ea32-45cd-bc1b-fe6f4ef089bb"
    },
    {
        "label": "Daemen College",
        "value": "86ddf535-8a5d-4147-93d0-91898b8d2cc9"
    },
    {
        "label": "Dakota State University",
        "value": "8eb18f49-a239-4ce4-bce1-212bd552bb9d"
    },
    {
        "label": "Dakota Wesleyan University",
        "value": "47fa1932-0d2c-441d-ad6b-c91d52634212"
    },
    {
        "label": "Dalhousie University",
        "value": "f7b2187f-3609-4012-b4a9-3237c55958df"
    },
    {
        "label": "Dallas Baptist University",
        "value": "074652ff-6833-472b-aa8b-bea4c700695c"
    },
    {
        "label": "Dallas Christian College",
        "value": "a191cf9e-75c7-4d31-b9dd-e2771084df82"
    },
    {
        "label": "Dalton State College",
        "value": "92536093-bf59-4f55-9a76-aad2770513cd"
    },
    {
        "label": "Daniel Webster College",
        "value": "bd63268b-68ed-45e7-accf-f024cbf6d649"
    },
    {
        "label": "Dartmouth College",
        "value": "81464c1d-3471-4788-89e6-4e5de45e15e4"
    },
    {
        "label": "Davenport University",
        "value": "1b85c5c4-4710-41ab-8099-ed532449d9c8"
    },
    {
        "label": "Davidson College",
        "value": "f37119b9-ddba-4070-9923-55c8663070fc"
    },
    {
        "label": "Davis and Elkins College",
        "value": "57f37a1b-391b-46b4-9172-6740d83c41a9"
    },
    {
        "label": "Davis College",
        "value": "fc4c1505-3268-447a-a5c6-0ecc5e5954d5"
    },
    {
        "label": "Daytona State College",
        "value": "b671b7cb-8661-4c07-9d23-7259c1134fc2"
    },
    {
        "label": "Deakin University",
        "value": "6b113d12-4c00-4b30-9a8a-4ba768328a6e"
    },
    {
        "label": "Dean College",
        "value": "22adb2c3-7671-4f6b-893e-f1c6b56aeb94"
    },
    {
        "label": "De Anza College",
        "value": "b74f1bad-3a1a-44c2-b5d3-e5ab7f34e627"
    },
    {
        "label": "Defiance College",
        "value": "d0687684-fae8-4340-93c5-77df364c09b5"
    },
    {
        "label": "De La Salle University",
        "value": "87a2d2ed-6cfc-4024-bf39-7d0b6f588e02"
    },
    {
        "label": "Delaware State University",
        "value": "07940a2d-4d91-462a-8560-5c7ce1943a44"
    },
    {
        "label": "Delaware Valley College",
        "value": "ebe7fbd9-7c75-4d2e-95c2-ab41fbdd985f"
    },
    {
        "label": "Delft University of Technology",
        "value": "4f0c2e95-ec40-4ed6-9303-0a57ded79262"
    },
    {
        "label": "Delta State University",
        "value": "bc360c92-5373-473b-9167-90bd23d59389"
    },
    {
        "label": "Denison University",
        "value": "756b6103-72d5-4c11-87b9-081e92e420c2"
    },
    {
        "label": "DePaul University",
        "value": "af9157aa-ad56-494b-aa27-1bccf21dbe71"
    },
    {
        "label": "DePauw University",
        "value": "00386e7d-4a81-4f96-b640-5c867a3d1c3c"
    },
    {
        "label": "DEREE - The American College of Greece",
        "value": "cbe5e3da-5ab0-4c04-8897-b5e71a3d5d15"
    },
    {
        "label": "DeSales University",
        "value": "9ba30da1-4cea-4f24-b8ce-cabc0c8a5c97"
    },
    {
        "label": "DeVry University",
        "value": "5a01072a-bc34-4277-95d5-195aa107f7e5"
    },
    {
        "label": "Dickinson College",
        "value": "5be40ed4-82e2-44c7-b1c1-2e6767286020"
    },
    {
        "label": "Dickinson State University",
        "value": "6f436b00-42b1-480d-8691-a4e538debfe6"
    },
    {
        "label": "Dillard University",
        "value": "d4e5c1fc-c2d0-4bf1-9872-d41138a59e86"
    },
    {
        "label": "Diponegoro University",
        "value": "38cae33b-7fd2-49ce-8655-89529a61f056"
    },
    {
        "label": "Divine Word College",
        "value": "840980c3-a2e0-4323-8ce7-40140a249b0a"
    },
    {
        "label": "Dixie State College of Utah",
        "value": "c91a14dd-654a-4f34-bdd3-f55778ad5d72"
    },
    {
        "label": "Doane College",
        "value": "d0786568-28ea-44b2-9f06-a2131446262d"
    },
    {
        "label": "Dominican College",
        "value": "e47c2972-3592-44c5-8207-6818f089544e"
    },
    {
        "label": "Dominican University",
        "value": "a03ee3bb-ac86-4935-9869-8316fdf48a9e"
    },
    {
        "label": "Dominican University of California",
        "value": "de940255-ae55-4d82-8552-4b2b9a24ac6e"
    },
    {
        "label": "Donetsk National University",
        "value": "fec5a780-d438-4684-a631-eac20795dc2d"
    },
    {
        "label": "Dongguk University",
        "value": "56aeda32-839d-40ef-ad71-fc367d3bd9fc"
    },
    {
        "label": "Donnelly College",
        "value": "30662ba6-3b05-45bc-a3e8-379662fc3c00"
    },
    {
        "label": "Dordt College",
        "value": "e085b5e6-fcda-4272-839f-04ed1fdad0c7"
    },
    {
        "label": "Doshisha University",
        "value": "0d8f2131-345a-415b-a035-98e414fbfd0b"
    },
    {
        "label": "Dowling College",
        "value": "d5bfa8b4-2bca-4a0b-b31c-9d89ac5f2062"
    },
    {
        "label": "Drake University",
        "value": "0cd1a283-53b0-40d6-acf0-cced4d56763e"
    },
    {
        "label": "Drew University",
        "value": "a97f22a1-6fc6-4e04-95dd-f606e38b927d"
    },
    {
        "label": "Drexel University",
        "value": "2213a254-18f2-43f7-8685-ce690c6aae33"
    },
    {
        "label": "Drury University",
        "value": "0db7d929-ed8d-41c2-8bdb-9e8e7a190dd4"
    },
    {
        "label": "Dublin City University",
        "value": "d4ed4323-e9b9-4652-b850-7fea6a220b8e"
    },
    {
        "label": "Dublin Institute of Technology",
        "value": "6a8bd07c-52b3-4346-984d-9c327bdbcd6d"
    },
    {
        "label": "Duke University",
        "value": "4bf4d57c-1c3d-414b-8c6e-0ae9b5df194c"
    },
    {
        "label": "Dunwoody College of Technology",
        "value": "54b78854-98ed-4583-84d2-0f6c953762d9"
    },
    {
        "label": "Duquesne University",
        "value": "4cd85616-2049-4e41-a709-9b70dcfe31ef"
    },
    {
        "label": "Durham University",
        "value": "4f8b78ed-1d15-46f7-a8e0-1dcb99f9bdd8"
    },
    {
        "label": "D'Youville College",
        "value": "dde9fc5c-625a-4a57-9034-a4d830a02ec0"
    },
    {
        "label": "E.A.Buketov Karaganda State University",
        "value": "5d7e71e2-5c26-4f43-bf88-dc795e734cec"
    },
    {
        "label": "Earlham College",
        "value": "96fc36e1-7b33-4021-a19b-947edb765ab8"
    },
    {
        "label": "East Carolina University",
        "value": "d4f90ba4-2b17-4cb5-9764-524cfe9b970d"
    },
    {
        "label": "East Central University",
        "value": "081d5a6f-acf4-4817-8b56-9abcfd4658ec"
    },
    {
        "label": "Eastern Connecticut State University",
        "value": "165e62fe-ee38-4499-a103-c1723398b15c"
    },
    {
        "label": "Eastern Illinois University",
        "value": "28fe43ab-156a-45e1-a903-bb3bdcf8c957"
    },
    {
        "label": "Eastern Kentucky University",
        "value": "34b0d9ea-6f6b-431e-a628-61bb66299835"
    },
    {
        "label": "Eastern Mennonite University",
        "value": "3fc46c8b-c3a9-4a63-96b5-921316d9e812"
    },
    {
        "label": "Eastern Michigan University",
        "value": "3a4c8e59-8a31-44ad-982a-076195b72ace"
    },
    {
        "label": "Eastern Nazarene College",
        "value": "d0a1f1ae-b0d6-4585-9423-140fd129e4a6"
    },
    {
        "label": "Eastern New Mexico University",
        "value": "bd8c6ef5-9c49-463e-86de-5a344043c641"
    },
    {
        "label": "Eastern Oregon University",
        "value": "e21ac92e-70f8-4c2f-996a-0f85e595fdf2"
    },
    {
        "label": "Eastern University",
        "value": "029d0128-bdbf-41ca-bf7d-3437eae5fbca"
    },
    {
        "label": "Eastern Washington University",
        "value": "c3aca960-c41c-43bc-a723-10f3f70362db"
    },
    {
        "label": "East Stroudsburg University of Pennsylvania",
        "value": "402cd924-8a1b-44b4-a22a-1289a0c0940e"
    },
    {
        "label": "East Tennessee State University",
        "value": "e88e35fb-59bc-4c76-841c-8347887f7125"
    },
    {
        "label": "East Texas Baptist University",
        "value": "8b36a2a0-1ed7-4dda-a63c-011f22a0ce4a"
    },
    {
        "label": "East-West University",
        "value": "e20980e6-a396-44e2-939c-783dbf4fe855"
    },
    {
        "label": "Eberhard Karls Universität Tübingen",
        "value": "de262532-aced-4d01-be9b-e56b8fb051bd"
    },
    {
        "label": "Eckerd College",
        "value": "6289b430-1a51-4b15-be70-2e7c5a231d36"
    },
    {
        "label": "École des Ponts ParisTech",
        "value": "3227e2e7-4ce7-48e6-b6fc-bb9fcb896f03"
    },
    {
        "label": "Ecole Normale Supérieure de Cachan",
        "value": "92b3e4be-51e7-4426-aae0-1e4b1c090689"
    },
    {
        "label": "Ecole Normale Supérieure de Lyon",
        "value": "7c8a4016-4df5-45f6-98e3-abea0d366482"
    },
    {
        "label": "Ecole normale supérieure, Paris",
        "value": "33219099-d739-4640-b3d7-068578ce9ed5"
    },
    {
        "label": "Ecole Polytechnique",
        "value": "af865ba0-8090-4d2b-adef-7d34a808d0f6"
    },
    {
        "label": "Ecole Polytechnique Fédérale de Lausanne",
        "value": "9af98885-a94c-47aa-9e6a-47bdb6d21457"
    },
    {
        "label": "École supérieure de commerce de Dijon",
        "value": "de4d4087-a79c-40e1-8ce1-352a7e2a61a7"
    },
    {
        "label": "ECPI University",
        "value": "bf9f0c19-c7a9-4559-8bba-b7901d1329ca"
    },
    {
        "label": "Edgewood College",
        "value": "04dbe9a1-3055-4c37-ab6d-9f7c92ebc4ac"
    },
    {
        "label": "Edinboro University of Pennsylvania",
        "value": "8fbd3a9f-89b4-42c7-8cf6-4041de86940f"
    },
    {
        "label": "Edison State College",
        "value": "f19c340a-38bd-4142-a43c-02444c0bad88"
    },
    {
        "label": "Edward Waters College",
        "value": "b10ea1c5-7e8c-47ec-b397-c9c9acfefca9"
    },
    {
        "label": "Eindhoven University of Technology",
        "value": "ac06c2d4-be28-4ca6-ab51-56c1f7f800cc"
    },
    {
        "label": "Elizabeth City State University",
        "value": "a60634f9-02c0-4973-9729-f89e2fb5e467"
    },
    {
        "label": "Elizabethtown College",
        "value": "46e9a2c1-816c-48ed-a66b-5e17d49230ed"
    },
    {
        "label": "Elmhurst College",
        "value": "0c183b95-1d47-4580-9ff9-abf4e49d12d7"
    },
    {
        "label": "Elmira College",
        "value": "65130631-7f39-4567-a2d6-44a2f28cbb26"
    },
    {
        "label": "Elon University",
        "value": "655b1bef-9172-458e-b2d9-627260c7a8f8"
    },
    {
        "label": "Embry-Riddle Aeronautical University",
        "value": "b248ad68-d35b-4f05-9e3b-722d79043984"
    },
    {
        "label": "Embry-Riddle Aeronautical University - Prescott",
        "value": "dd4b74bb-6581-4afe-b3cf-7cd1dcea1b98"
    },
    {
        "label": "Emerson College",
        "value": "f35feeaa-8547-477a-b93f-bcb71bed5d8c"
    },
    {
        "label": "Emmanuel College",
        "value": "05351384-9afb-4fa8-a711-02e8b62079b4"
    },
    {
        "label": "Emmaus Bible College",
        "value": "ebfd9a1b-6e6d-4672-a765-e8854aa32604"
    },
    {
        "label": "Emory and Henry College",
        "value": "2d71577d-ecab-4e43-ba36-d3bd6c661595"
    },
    {
        "label": "Emory University",
        "value": "c6787223-8668-4a52-8349-ee464349898e"
    },
    {
        "label": "Emporia State University",
        "value": "d35ba738-51f0-4fe6-98aa-5893b5fdf0d1"
    },
    {
        "label": "Endicott College",
        "value": "06913452-72ef-48c0-925e-b5fe89a2d3bd"
    },
    {
        "label": "Eötvös Loránd University",
        "value": "d895735f-d652-4b3d-b1cb-4e6d61b561f7"
    },
    {
        "label": "Erasmus University Rotterdam",
        "value": "2391a330-a57a-41aa-b3c5-e9d79acbde36"
    },
    {
        "label": "Erskine College",
        "value": "826b5f58-ef1f-4ab0-9226-5853dd8dfc99"
    },
    {
        "label": "Escuela de Artes Plasticas de Puerto Rico",
        "value": "47ae1bdd-b9e3-41b3-a887-194e878685bb"
    },
    {
        "label": "ETH Zurich (Swiss Federal Institute of Technology)",
        "value": "11f43145-6b9d-488e-8bfb-2ed4638d5cdc"
    },
    {
        "label": "Eureka College",
        "value": "32c1c2e6-448b-4907-a75e-cd6bb7d79ed0"
    },
    {
        "label": "Evangel University",
        "value": "ae5fa9b1-6992-482a-93fa-d933b8c81ab0"
    },
    {
        "label": "Everest College - Phoenix",
        "value": "d13c0a71-5ad8-4ff9-b650-d1dd5a1b1ccc"
    },
    {
        "label": "Everglades University",
        "value": "617014c7-5d9d-4f90-9f5c-1fcfa3f328c1"
    },
    {
        "label": "Evergreen State College",
        "value": "a2762923-fee3-4f4f-8605-2cd4fc727351"
    },
    {
        "label": "Ewha Womans University",
        "value": "5dc2310b-7508-4f0a-baed-b04475d61611"
    },
    {
        "label": "Excelsior College",
        "value": "c2ec3919-0477-4db5-86ba-7a088237acc1"
    },
    {
        "label": "Fairfield University",
        "value": "b6d65b27-d260-4800-bd03-55b7e7e23685"
    },
    {
        "label": "Fairleigh Dickinson University",
        "value": "bd47e3d8-a8a4-40a9-9cad-6f8520ae409e"
    },
    {
        "label": "Fairmont State University",
        "value": "69928ece-adb7-4f89-8d02-bffb380643c6"
    },
    {
        "label": "Faith Baptist Bible College and Theological Seminary",
        "value": "2a197089-de43-46e9-a854-d9369acf967c"
    },
    {
        "label": "Far Eastern Federal University",
        "value": "0df82add-ae4a-4edd-89b2-d1edd812633c"
    },
    {
        "label": "Farmingdale State College - SUNY",
        "value": "7bf537c7-ac07-408c-8588-5a550292321c"
    },
    {
        "label": "Fashion Institute of Technology",
        "value": "1d40e22a-f531-4bb0-a05f-de5fb3df3733"
    },
    {
        "label": "Faulkner University",
        "value": "d6c26f9b-31f2-4f41-a4ba-82d2122b4c5d"
    },
    {
        "label": "Fayetteville State University",
        "value": "8b93924e-ced8-46ec-8677-94eca169f176"
    },
    {
        "label": "Felician College",
        "value": "418d6c2e-edd7-4393-8bf0-cc700c463611"
    },
    {
        "label": "Ferris State University",
        "value": "ed06c5f0-b12d-4b12-bdf8-39ea416bee4a"
    },
    {
        "label": "Ferrum College",
        "value": "86fcad56-e4e4-4afe-b65a-04c5bee75b51"
    },
    {
        "label": "Finlandia University",
        "value": "ff7bbec0-48f7-4562-a424-3a123f82a85c"
    },
    {
        "label": "Fisher College",
        "value": "a20bbc4c-53c2-45b2-b98b-19e275140056"
    },
    {
        "label": "Fisk University",
        "value": "97d9bcd9-f99d-4439-8e7e-5597534c433e"
    },
    {
        "label": "Fitchburg State University",
        "value": "fd7a1b85-9a14-4cae-8393-9bd69c99da7f"
    },
    {
        "label": "Five Towns College",
        "value": "4f421db2-19ab-4059-8a0f-100f9bce214f"
    },
    {
        "label": "Flagler College",
        "value": "acd02595-ad02-446a-a918-750ef51beca1"
    },
    {
        "label": "Flinders University",
        "value": "ddec8f3d-ce7d-4f6f-9128-92d46c2733cd"
    },
    {
        "label": "Florida A&M University",
        "value": "c0d2252e-7c90-432b-a57f-792c5de12aee"
    },
    {
        "label": "Florida Atlantic University",
        "value": "2851e1fb-dca5-4934-95e8-2d55bf915017"
    },
    {
        "label": "Florida Christian College",
        "value": "b0f368ea-1892-418c-bd58-fa0c27cbd9f5"
    },
    {
        "label": "Florida College",
        "value": "93d7f758-1a04-494e-9ed4-613fc4c46f56"
    },
    {
        "label": "Florida Gulf Coast University",
        "value": "dcc0dd5a-fff6-4a6c-954c-df28ae0dfbf6"
    },
    {
        "label": "Florida Institute of Technology",
        "value": "9ca23f04-6f4a-48aa-832c-0ed9c8695c48"
    },
    {
        "label": "Florida International University",
        "value": "3f4eab5d-1a0c-45ce-a2da-7da8986140cc"
    },
    {
        "label": "Florida Memorial University",
        "value": "23980c35-9930-4039-9a86-dcadc0acd9ef"
    },
    {
        "label": "Florida Southern College",
        "value": "b61a59d2-df3d-4114-a034-06cf12adc114"
    },
    {
        "label": "Florida State College - Jacksonville",
        "value": "d5262db9-2ad6-4804-88f6-7bd1072f029d"
    },
    {
        "label": "Florida State University",
        "value": "a59f7fdc-f30d-4809-b9c8-a08d4ea99371"
    },
    {
        "label": "Folsom Lake College",
        "value": "d63303d6-846e-48cd-aabf-e3f4e162c525"
    },
    {
        "label": "Fontbonne University",
        "value": "a4dbbeca-8e98-4f1f-b739-533a64bd8ac1"
    },
    {
        "label": "Foothill College",
        "value": "79c5b58e-10f8-4b78-a9b4-c51009f29ce8"
    },
    {
        "label": "Fordham University",
        "value": "6c82b41f-4153-4176-bc91-8b2743045f2e"
    },
    {
        "label": "Fort Hays State University",
        "value": "7288753d-f38e-4da1-ab65-d3aef38a17f5"
    },
    {
        "label": "Fort Lewis College",
        "value": "20a25923-2d62-4e0a-8fd8-6b98eceacbf4"
    },
    {
        "label": "Fort Valley State University",
        "value": "88792ea0-6ddc-4f75-b7e7-7c5ad0c2c404"
    },
    {
        "label": "Framingham State University",
        "value": "6354c592-7e56-4d8f-8e8e-030097343b6f"
    },
    {
        "label": "Franciscan University of Steubenville",
        "value": "f1176c8f-961b-41e4-b904-3c495beaaa9d"
    },
    {
        "label": "Francis Marion University",
        "value": "ff661c18-4ffc-4c1f-9240-2124f4c97190"
    },
    {
        "label": "Franklin and Marshall College",
        "value": "03a3a9de-d7af-4c77-b23c-d5f56d224787"
    },
    {
        "label": "Franklin College",
        "value": "a8f968fa-b4b9-426d-bd4b-1b89f0d3542b"
    },
    {
        "label": "Franklin College Switzerland",
        "value": "7bc3bf36-4a7a-410b-b361-78dfe50db79a"
    },
    {
        "label": "Franklin Pierce University",
        "value": "459b142c-2e58-48b6-9375-e32318e8f807"
    },
    {
        "label": "Franklin University",
        "value": "ce6aea3f-a777-4d10-988f-a385be716cd1"
    },
    {
        "label": "Franklin W. Olin College of Engineering",
        "value": "f59950ef-ad75-4146-b86d-e220bf259e45"
    },
    {
        "label": "Frank Lloyd Wright School of Architecture",
        "value": "2ecc7d72-b8e3-42bd-a5f7-49956d1c0c3e"
    },
    {
        "label": "Freed-Hardeman University",
        "value": "74e33c21-946b-4525-b733-b99794a48c42"
    },
    {
        "label": "Freie Universität Berlin",
        "value": "a05f32fe-fa3f-43db-b752-61ddecaa7f4d"
    },
    {
        "label": "Fresno Pacific University",
        "value": "36645372-e525-441d-bbf8-973153c64cec"
    },
    {
        "label": "Friends University",
        "value": "85558795-8143-417e-b9cd-88ab8f21fa33"
    },
    {
        "label": "Frostburg State University",
        "value": "6fde2704-c18a-49ef-9522-bd5d3f9164e6"
    },
    {
        "label": "Fudan University",
        "value": "82258d0b-c5ef-4e6f-880a-6d761357b4c0"
    },
    {
        "label": "Fu Jen Catholic University",
        "value": "79c8f353-90d0-4bb2-8976-fae1461b9eae"
    },
    {
        "label": "Full Sail University",
        "value": "8afb8f84-9aae-46fd-b87f-a129fa85719a"
    },
    {
        "label": "Fundação Getúlio Vargas",
        "value": "cce70fed-bf5e-4ac6-907d-14ea1b1a5b8c"
    },
    {
        "label": "Furman University",
        "value": "1f77e87c-2542-47da-b325-50cf29ef76e3"
    },
    {
        "label": "Gallaudet University",
        "value": "c0473f82-1a9d-4ae3-b623-ec0e61b3bd35"
    },
    {
        "label": "Gannon University",
        "value": "1018d199-009c-4caa-b67d-72614bf52467"
    },
    {
        "label": "Gardner-Webb University",
        "value": "3f0dc937-7da1-43f8-ae54-8994fca2906f"
    },
    {
        "label": "General Assembly",
        "value": "9dba1625-3b85-4104-901d-177c38867f04"
    },
    {
        "label": "Geneva College",
        "value": "6c4d3406-027e-404f-9b9f-104611df8ba7"
    },
    {
        "label": "Georg-August-Universität Göttingen",
        "value": "f046a50f-c454-41f4-8c10-9a8bd54d77fc"
    },
    {
        "label": "George Fox University",
        "value": "a4291f30-1f69-494b-869e-eece0ae2cee3"
    },
    {
        "label": "George Mason University",
        "value": "421ed3ac-7bd9-42d6-8ebb-07c0994db2e0"
    },
    {
        "label": "Georgetown College",
        "value": "cf15ceac-f175-4b43-a1ea-b8c672a67df6"
    },
    {
        "label": "Georgetown University",
        "value": "3624e5b9-3cd7-4261-a032-645c855759b3"
    },
    {
        "label": "George Washington University",
        "value": "39b1c353-e14d-4988-8bc4-ed8dfa46c45d"
    },
    {
        "label": "Georgia College & State University",
        "value": "7fdda575-d7ac-4646-b85c-0bba4536cad3"
    },
    {
        "label": "Georgia Gwinnett College",
        "value": "fab380f1-49ed-4558-90cd-76facb0c2e4a"
    },
    {
        "label": "Georgia Institute of Technology",
        "value": "40f6db9c-3127-4436-a4c6-abcf82264792"
    },
    {
        "label": "Georgian Court University",
        "value": "abe8a390-2f17-4b55-afd2-d9b8b99cd242"
    },
    {
        "label": "Georgia Regents University",
        "value": "89d4c7db-1778-48af-9e45-2317030bfc49"
    },
    {
        "label": "Georgia Southern University",
        "value": "46de3138-5420-4218-8def-df6e574a50d2"
    },
    {
        "label": "Georgia Southwestern State University",
        "value": "981597c4-d060-4345-bbac-b044a7200c0d"
    },
    {
        "label": "Georgia State University",
        "value": "d99ecb0b-1235-41ab-a8d2-933685ca4e58"
    },
    {
        "label": "Gettysburg College",
        "value": "7aed1cbf-115b-43ce-bb08-69070d33c3a2"
    },
    {
        "label": "Gifu University",
        "value": "3aa81027-6c24-41db-934e-e8a051a59f9d"
    },
    {
        "label": "Glenville State College",
        "value": "d3088e0a-03d7-4a77-a209-da392d906248"
    },
    {
        "label": "Goddard College",
        "value": "f5a231d0-f896-49da-9bbb-3a9c7f1308d9"
    },
    {
        "label": "God's Bible School and College",
        "value": "c63fd886-8cde-4ce1-b4d1-427831904010"
    },
    {
        "label": "Golden Gate University",
        "value": "5aee3442-46d2-45e3-8113-3e934586efea"
    },
    {
        "label": "Goldey-Beacom College",
        "value": "318a426f-80f8-46ca-9be1-402d8e590383"
    },
    {
        "label": "Goldfarb School of Nursing at Barnes-Jewish College",
        "value": "8fe832a3-b3a6-40c3-8b72-e35e78d2466d"
    },
    {
        "label": "Goldsmiths, University of London",
        "value": "ad6892cb-6588-4819-a66c-13ae7c73a3f3"
    },
    {
        "label": "Gonzaga University",
        "value": "ea89f5bc-3296-4190-bf09-52e026f0b156"
    },
    {
        "label": "Gordon College",
        "value": "06d70a7e-dd1a-40fd-b554-5b64b9fe28d0"
    },
    {
        "label": "Gordon State College",
        "value": "356f7b28-11da-46af-824b-a761fcd2b330"
    },
    {
        "label": "Goshen College",
        "value": "290c20b6-4560-4889-b648-ff8804b51f93"
    },
    {
        "label": "Goucher College",
        "value": "4da8ef42-1ac7-4172-a9da-602b55a711e5"
    },
    {
        "label": "Governors State University",
        "value": "31b603bb-078c-4470-bf4f-491d65bf5f9d"
    },
    {
        "label": "Grace Bible College",
        "value": "3ffbae57-d353-4366-81d6-b152412567dd"
    },
    {
        "label": "Grace College and Seminary",
        "value": "d391f594-9943-4729-aba6-298e26017271"
    },
    {
        "label": "Graceland University",
        "value": "7a3fa981-2d95-4a1d-96b5-ba27f7e48cda"
    },
    {
        "label": "Grace University",
        "value": "1c2687d4-645b-44fc-a99f-b5bba0b896f8"
    },
    {
        "label": "Grambling State University",
        "value": "b98fafe1-4b03-4e30-8a43-753a87ba2ccd"
    },
    {
        "label": "Grand Canyon University",
        "value": "6aa0bb75-2b6b-4fe7-9060-fbac410fd120"
    },
    {
        "label": "Grand Valley State University",
        "value": "91dd3188-da86-436b-95a9-e84b803b85ca"
    },
    {
        "label": "Grand View University",
        "value": "f5319e60-834b-45b3-b269-b20467e0ab65"
    },
    {
        "label": "Granite State College",
        "value": "3d84a3e7-f737-47ad-b4bb-2c1d5e3bdbd3"
    },
    {
        "label": "Gratz College",
        "value": "86b8d496-1e7a-49da-8aa9-c2e9dc836018"
    },
    {
        "label": "Great Basin College",
        "value": "f28d2864-f24c-4c28-8bcd-b4c658c3fdca"
    },
    {
        "label": "Great Lakes Christian College",
        "value": "a1980ccf-ceb7-4627-a21d-99c3cb71d2ba"
    },
    {
        "label": "Green Mountain College",
        "value": "f859fd9f-54ac-43e2-8ba8-5aa9a886b3f0"
    },
    {
        "label": "Greensboro College",
        "value": "5335a024-54a2-4e48-860b-5ba02ec1a321"
    },
    {
        "label": "Greenville College",
        "value": "6a1090db-403c-4c57-8628-d78d3062f222"
    },
    {
        "label": "Griffith University",
        "value": "f214f3ac-0fec-464d-9ad1-283cb108ade4"
    },
    {
        "label": "Grinnell College",
        "value": "91b06aa1-d54d-4d9e-9939-4d14d30da979"
    },
    {
        "label": "Grove City College",
        "value": "2bad8f6d-6760-49f7-ada7-576a4adffa80"
    },
    {
        "label": "Guilford College",
        "value": "a7b1e729-a0a6-40dd-8ca3-3c0c85572ce5"
    },
    {
        "label": "Gujarat Technological University",
        "value": "c4245889-0a08-4a98-9dad-ef354344a713"
    },
    {
        "label": "Gunma University",
        "value": "9525a780-a839-4618-aa9d-336eb4b641b7"
    },
    {
        "label": "Gustavus Adolphus College",
        "value": "75994d58-da98-4cfc-8dec-e82c7832af0a"
    },
    {
        "label": "Gwynedd-Mercy College",
        "value": "7fa67136-1dd8-47f0-bb77-1d39361bfe35"
    },
    {
        "label": "Hacettepe University",
        "value": "dca3245c-098c-4ae8-9ac5-7d692ea4f807"
    },
    {
        "label": "Hack Reactor",
        "value": "0c034dad-b44d-41a7-8798-43fcf478df89"
    },
    {
        "label": "Hallym University",
        "value": "d071cd9f-37ae-40b1-83e2-1296ff678837"
    },
    {
        "label": "Hamilton College",
        "value": "dcdac396-fa8c-467c-a2ac-591858022533"
    },
    {
        "label": "Hamline University",
        "value": "1cd0729c-fdd3-44bd-89e5-4c4f39c079a5"
    },
    {
        "label": "Hampden-Sydney College",
        "value": "f86c7224-f8e1-4ff7-ab83-4827f70402d3"
    },
    {
        "label": "Hampshire College",
        "value": "bfe9bdb1-3f43-47c1-a5e9-1cb54ef2fda7"
    },
    {
        "label": "Hampton University",
        "value": "cf652990-9dbf-4be2-a65a-98dd3b08b316"
    },
    {
        "label": "Hankuk (Korea) University of Foreign Studies",
        "value": "eb79e3eb-2c17-4e93-b431-1fa162f51969"
    },
    {
        "label": "Hannibal-LaGrange University",
        "value": "033df6b3-8d99-4f0f-bffd-30e2410d0aab"
    },
    {
        "label": "Hanover College",
        "value": "8dc51bc8-b363-476d-b433-a79635959431"
    },
    {
        "label": "Hanyang University",
        "value": "16b6fe38-a173-48ae-abbb-9fbc4ed99774"
    },
    {
        "label": "Harbin Institute of Technology",
        "value": "8568018e-34ed-4667-becc-dd63a0dfbe64"
    },
    {
        "label": "Harding University",
        "value": "5ccc08a8-609a-4c53-8124-59bf279c3565"
    },
    {
        "label": "Hardin-Simmons University",
        "value": "032f4ea1-d5d6-4c1c-a5de-3b4fa16560ad"
    },
    {
        "label": "Harold Washington College - City Colleges of Chicago",
        "value": "e05975ca-2613-4c59-afc3-db11de288282"
    },
    {
        "label": "Harrington College of Design",
        "value": "447e479a-0e30-4297-8ae0-3a143f9f7424"
    },
    {
        "label": "Harrisburg University of Science and Technology",
        "value": "97fac312-3a6f-494a-ae59-52ee70061ee1"
    },
    {
        "label": "Harris-Stowe State University",
        "value": "e5dc69eb-3629-4238-b1af-adae760568a7"
    },
    {
        "label": "Harry S Truman College - City Colleges of Chicago",
        "value": "8d70d4a9-b3a3-4900-a117-bac73ef10f69"
    },
    {
        "label": "Hartwick College",
        "value": "9cabe219-f827-482f-a0b3-a0216552cf30"
    },
    {
        "label": "Harvard University",
        "value": "5a2dfa79-c3d3-428f-8cdf-417cf502f6d5"
    },
    {
        "label": "Harvey Mudd College",
        "value": "a3cd251e-c957-4902-9539-ed44666ea63e"
    },
    {
        "label": "Haskell Indian Nations University",
        "value": "e0b5946a-4800-4cf7-8e23-b05b6af75945"
    },
    {
        "label": "Hastings College",
        "value": "11734a94-d8df-4f2d-9bf1-7620dfa9d49c"
    },
    {
        "label": "Haverford College",
        "value": "6a52db47-9a53-4bd2-9f9c-8cd3775f8ecf"
    },
    {
        "label": "Hawaii Pacific University",
        "value": "01da357d-da75-4205-84d1-8a4392070d7e"
    },
    {
        "label": "Hebrew Theological College",
        "value": "46426644-2a85-45d4-9e49-f4a6f7a4bbf4"
    },
    {
        "label": "Hebrew University of Jerusalem",
        "value": "de205464-0fa9-43a3-8117-5bec05197ee8"
    },
    {
        "label": "Heidelberg University",
        "value": "7d254962-a3f2-4e19-a209-b012986e1a63"
    },
    {
        "label": "Hellenic College",
        "value": "fb1ce5ce-4927-46aa-b5d8-0b5277cfea07"
    },
    {
        "label": "Henderson State University",
        "value": "09d044b3-8826-45bc-8dc1-9ca6c02a3b09"
    },
    {
        "label": "Hendrix College",
        "value": "faef8ba4-2e19-4cb7-b579-ac0fe3abdfab"
    },
    {
        "label": "Heriot-Watt University",
        "value": "4a781a6d-383a-4515-a5ab-0ebdd287ad30"
    },
    {
        "label": "Heritage University",
        "value": "c06f66f1-9bf6-4475-b9f4-2e3bd3e8514b"
    },
    {
        "label": "Herzing University",
        "value": "f6f980b5-b10f-4dc3-a277-5707b9ea4bde"
    },
    {
        "label": "Hesser College",
        "value": "2150278e-019f-40b9-a1b5-461f7609f958"
    },
    {
        "label": "High Point University",
        "value": "408df9ee-1581-4a30-bd9d-1026c478a716"
    },
    {
        "label": "Hilbert College",
        "value": "72e655f4-7030-4b7c-9824-f1e56fbc3df1"
    },
    {
        "label": "Hillsdale College",
        "value": "ddd458a5-3d1d-4fa8-8e3f-ec39c0eba271"
    },
    {
        "label": "Hiram College",
        "value": "ee0c9430-799b-4728-b406-8740059904aa"
    },
    {
        "label": "Hiroshima University",
        "value": "51648b0d-0202-4262-88b2-1398ddbd8378"
    },
    {
        "label": "Hobart and William Smith Colleges",
        "value": "b1783974-49fe-4da4-b055-3912d85813ed"
    },
    {
        "label": "Hodges University",
        "value": "5b51c46b-2cf2-4ff9-9e72-a1d1f0ef47c7"
    },
    {
        "label": "Hofstra University",
        "value": "a8e0d0e6-400c-4d13-a30a-a3c8860fd284"
    },
    {
        "label": "Hokkaido University",
        "value": "6dd45d94-8de0-4cff-b80e-1cce15a0dd8a"
    },
    {
        "label": "Hollins University",
        "value": "37d03aef-4b83-4d48-a376-72b2e5294480"
    },
    {
        "label": "Holy Apostles College and Seminary",
        "value": "12c9ff07-ca9c-455f-909d-81b78d0a5a02"
    },
    {
        "label": "Holy Cross College",
        "value": "5fecdcb5-dd55-4751-991d-b9e3e91c42a4"
    },
    {
        "label": "Holy Family University",
        "value": "94292b4d-9dcc-48ee-baee-6408d450d092"
    },
    {
        "label": "Holy Names University",
        "value": "bba3cce0-42c7-45cb-840f-646ad6501bbd"
    },
    {
        "label": "Hong Kong Baptist University",
        "value": "e1491fdb-5016-4b0b-820a-3754b0af1bcc"
    },
    {
        "label": "Hood College",
        "value": "d5448c98-7021-4bf9-a429-f4ada693b5ee"
    },
    {
        "label": "Hope College",
        "value": "7b73d52d-51d4-49c9-9c72-f301cf487906"
    },
    {
        "label": "Hope International University",
        "value": "0575ff86-f222-4dc9-8aaf-5f97c148aa61"
    },
    {
        "label": "Houghton College",
        "value": "3a2cfc7b-fee4-418b-8236-f5bef1b02a82"
    },
    {
        "label": "Houston Baptist University",
        "value": "88834f9b-19b3-4cce-82db-5386f5d547c4"
    },
    {
        "label": "Howard Payne University",
        "value": "8eaee631-c23b-4e45-bdea-499061fbead2"
    },
    {
        "label": "Howard University",
        "value": "213413d6-a9c6-42a8-b494-0882a2832616"
    },
    {
        "label": "Huazhong University of Science and Technology",
        "value": "e39890d0-62c4-4384-af7e-7d0001dd7a6a"
    },
    {
        "label": "Hult International Business School",
        "value": "daa386bb-79d4-450c-aa05-f1feb1ef922b"
    },
    {
        "label": "Humboldt State University",
        "value": "703008b8-6c64-427e-ba3e-38ec2371be3a"
    },
    {
        "label": "Humboldt-Universität zu Berlin",
        "value": "25cfd323-7890-4daf-8fd7-b25418abdb43"
    },
    {
        "label": "Humphreys College",
        "value": "0823031f-1a59-4d51-8b7a-5b66f19bd2e0"
    },
    {
        "label": "hung-Ang University",
        "value": "15dbfe6e-3030-4bcf-bbe7-3bcc2e0c2777"
    },
    {
        "label": "Huntingdon College",
        "value": "70036ace-5703-4fd2-b994-010375a4ec1d"
    },
    {
        "label": "Huntington University",
        "value": "3d7118f3-4fe3-40c2-94ac-f8cd5204facc"
    },
    {
        "label": "Husson University",
        "value": "b1bd5afb-f0b1-4f69-b06d-85da9aad5e9a"
    },
    {
        "label": "Huston-Tillotson University",
        "value": "9e372dda-7085-4b59-a6fb-fa5b358c81a7"
    },
    {
        "label": "Idaho State University",
        "value": "cbe82950-ae6f-4638-8435-723fe25fdda6"
    },
    {
        "label": "Illinois College",
        "value": "72526e71-23d5-451e-b9d1-1215f5705bcd"
    },
    {
        "label": "Illinois Institute of Art at Chicago",
        "value": "47bb0e4f-fe52-498f-bd71-15579b77d56d"
    },
    {
        "label": "Illinois Institute of Technology",
        "value": "2802bf13-f55b-4f60-bf29-b56f92bc23ab"
    },
    {
        "label": "Illinois State University",
        "value": "7ade40d1-82a3-4cc5-adfc-00cfa8c7b3cf"
    },
    {
        "label": "Illinois Wesleyan University",
        "value": "ca4a8c74-42a6-4b61-9bd3-e424124999f0"
    },
    {
        "label": "Immaculata University",
        "value": "9af654d8-97ba-4044-bf79-a7525d8a72ab"
    },
    {
        "label": "Imperial College London",
        "value": "7b83379c-9e73-4fb2-b936-6d51fa664e6f"
    },
    {
        "label": "Indiana Institute of Technology",
        "value": "628b65bb-c3aa-426d-9019-a9dd19e1b9eb"
    },
    {
        "label": "Indiana State University",
        "value": "a90ff72d-ae1b-4a78-98bb-96c0b085c45d"
    },
    {
        "label": "Indiana University - Bloomington",
        "value": "623b5173-da9c-4d3f-8524-667cc79aa24a"
    },
    {
        "label": "Indiana University East",
        "value": "24400cd6-a999-4db2-8d44-dac1e0183dc3"
    },
    {
        "label": "Indiana University - Kokomo",
        "value": "0b619301-2647-41c5-b978-ba6c735ea30d"
    },
    {
        "label": "Indiana University Northwest",
        "value": "0461c296-104e-476d-b2f8-df232528be8c"
    },
    {
        "label": "Indiana University of Pennsylvania",
        "value": "46992c58-517f-4555-89c8-212777a8e195"
    },
    {
        "label": "Indiana University-Purdue University - Fort Wayne",
        "value": "da609854-65f4-4337-b1cd-516cfdbee3ed"
    },
    {
        "label": "Indiana University-Purdue University - Indianapolis",
        "value": "c53ebeee-c7fe-428d-837d-837e0fe4b42d"
    },
    {
        "label": "Indiana University - South Bend",
        "value": "3c1d045f-2c0a-402b-9e8d-9b3eb51fbcf9"
    },
    {
        "label": "Indiana University Southeast",
        "value": "8e806c85-5916-4f0f-a8f9-65cf738ea13c"
    },
    {
        "label": "Indiana Wesleyan University",
        "value": "2797a437-1f87-43d8-96eb-10217fd294ae"
    },
    {
        "label": "Indian Institute of Technology Bombay (IITB)",
        "value": "f2fc41d3-7e88-4d85-a91c-b2e78a5f836e"
    },
    {
        "label": "Indian Institute of Technology Delhi (IITD)",
        "value": "6ce65eb0-8554-4af3-b41b-01280ea7106d"
    },
    {
        "label": "Indian Institute of Technology Guwahati (IITG)",
        "value": "54fc4c7d-a6d3-4d06-9a11-150643709dfc"
    },
    {
        "label": "Indian Institute of Technology Kanpur (IITK)",
        "value": "7a84212d-6012-410e-9ea9-8c4b77273316"
    },
    {
        "label": "Indian Institute of Technology Kharagpur (IITKGP)",
        "value": "e18e47ea-ddd1-4ddc-b621-77d73a167d1e"
    },
    {
        "label": "Indian Institute of Technology Madras (IITM)",
        "value": "d0a77d77-605a-428f-8dc1-0092b74dba91"
    },
    {
        "label": "Indian Institute of Technology Roorkee (IITR)",
        "value": "21f139aa-b132-4c7f-ac5e-0b44828b0622"
    },
    {
        "label": "Indian River State College",
        "value": "d28b75d8-fbb4-4402-8ad6-120687dac9d6"
    },
    {
        "label": "Inha University",
        "value": "d3f4a13b-0719-4770-bcac-0a96b1734a34"
    },
    {
        "label": "INSEAD",
        "value": "12ef02aa-5ad8-460f-b886-d63f1e6cb1a0"
    },
    {
        "label": "Institute of American Indian and Alaska Native Culture and Arts Development",
        "value": "cb80ce07-f20d-4889-ab46-a4f6cc02af38"
    },
    {
        "label": "Instituto Politécnico Nacional (IPN)",
        "value": "dddcd35d-dc89-4e63-92a3-2e7a5b289391"
    },
    {
        "label": "Instituto Tecnológico Autonomo de México (ITAM)",
        "value": "8bfbd5a7-b856-478a-883a-f8fe4f02a43b"
    },
    {
        "label": "Instituto Tecnológico de Buenos Aires (ITBA)",
        "value": "d169594f-b572-48ae-8a8d-82d3a0617a15"
    },
    {
        "label": "Inter American University of Puerto Rico - Aguadilla",
        "value": "68632b86-24d2-4bb0-8984-75cef13c939f"
    },
    {
        "label": "Inter American University of Puerto Rico - Arecibo",
        "value": "a68eca09-bcd3-438c-9b97-f41d1c2290f4"
    },
    {
        "label": "Inter American University of Puerto Rico - Barranquitas",
        "value": "a252f4bf-5e12-47a0-8010-8850cb1b7fe4"
    },
    {
        "label": "Inter American University of Puerto Rico - Bayamon",
        "value": "04c9ea75-da8f-4c23-ab47-1ccbe29dc2c7"
    },
    {
        "label": "Inter American University of Puerto Rico - Fajardo",
        "value": "49d3721b-91c0-44f4-bd69-5d47b6882e42"
    },
    {
        "label": "Inter American University of Puerto Rico - Guayama",
        "value": "ddebd91a-ec42-49a4-9d4b-a0ce387a14d0"
    },
    {
        "label": "Inter American University of Puerto Rico - Metropolitan Campus",
        "value": "8460303b-37f9-4c36-9456-5f550f6af549"
    },
    {
        "label": "Inter American University of Puerto Rico - Ponce",
        "value": "26d575f1-420d-441b-a657-774a999fc6be"
    },
    {
        "label": "Inter American University of Puerto Rico - San German",
        "value": "1f54d5c1-5dad-404f-897f-4ec7333a6325"
    },
    {
        "label": "International College of the Cayman Islands",
        "value": "c2c25e7b-e328-4af9-97d9-0b8f342d075f"
    },
    {
        "label": "International Islamic University Malaysia (IIUM)",
        "value": "f340f5fe-a549-4090-b871-c233dc5b14e1"
    },
    {
        "label": "Iona College",
        "value": "37f484d8-b824-4396-9b7f-421bdf6b2052"
    },
    {
        "label": "Iowa State University",
        "value": "e7b65d01-2096-456f-975d-db2bec8b165a"
    },
    {
        "label": "Iowa Wesleyan College",
        "value": "a658155e-0680-4931-9922-75adad8b8b22"
    },
    {
        "label": "Istanbul Technical University",
        "value": "c0dab341-265b-4146-a7f2-df602bc43936"
    },
    {
        "label": "Istanbul University",
        "value": "5f0af640-e687-4875-8f82-e212a320a4d1"
    },
    {
        "label": "Ithaca College",
        "value": "9d23f8ee-5182-44e2-9856-ec76799a7930"
    },
    {
        "label": "Jackson State University",
        "value": "96a8d692-e8e5-4ac8-9c5f-8b58eab67c46"
    },
    {
        "label": "Jacksonville State University",
        "value": "c719dbb4-6cda-4cf9-b1c2-1879c2684312"
    },
    {
        "label": "Jacksonville University",
        "value": "39d10bc8-13b1-4f64-b40f-fb83fb95b343"
    },
    {
        "label": "Jagiellonian University",
        "value": "7bd00985-0473-4b1c-8c6c-3911aa089c8d"
    },
    {
        "label": "James Cook University",
        "value": "bd6aafb3-163d-4115-9ac5-fb2212648d08"
    },
    {
        "label": "James Madison University",
        "value": "58d73609-9822-4c29-894a-682f10f3ee3e"
    },
    {
        "label": "Jarvis Christian College",
        "value": "b083f5e8-ca34-4a32-b37b-d23d61c3baa9"
    },
    {
        "label": "Jewish Theological Seminary of America",
        "value": "00996d91-7a2e-49dc-80bb-b8777b248234"
    },
    {
        "label": "Jilin University",
        "value": "c5a83e77-d257-48b5-a841-34902a777399"
    },
    {
        "label": "Johannes Gutenberg Universität Mainz",
        "value": "08d59867-c519-43ea-9579-375ee8b5a58c"
    },
    {
        "label": "Johannes Kepler University Linz",
        "value": "1fc4896c-8d27-47e2-809c-6bfd5c65e036"
    },
    {
        "label": "John Brown University",
        "value": "e70a20c6-0b5c-42c3-84b6-1364a53b42f9"
    },
    {
        "label": "John Carroll University",
        "value": "a9c9d90d-bcbd-4243-8602-cffd92cc8e22"
    },
    {
        "label": "John F. Kennedy University",
        "value": "00745d90-ef69-4fa4-821c-3366e120a717"
    },
    {
        "label": "Johns Hopkins University",
        "value": "aa41c63f-39d2-49b1-ab1b-9f05f5ca4afa"
    },
    {
        "label": "Johnson C. Smith University",
        "value": "6df1dbe6-a1aa-4d71-ad9f-8fc6202e9e10"
    },
    {
        "label": "Johnson State College",
        "value": "eddfe255-6f88-41c4-9ad0-0ab93fddf8be"
    },
    {
        "label": "Johnson University",
        "value": "e9af696a-12ca-4553-a3bd-9aab9f5fb83b"
    },
    {
        "label": "Johnson & Wales University",
        "value": "ae9be779-51fc-451e-aaff-dd4e021e85eb"
    },
    {
        "label": "Jones International University",
        "value": "ca40740f-8a69-4d04-9bdf-7743bdc3e7ad"
    },
    {
        "label": "Jordan University of Science & Technology",
        "value": "a473f800-f5c5-4aa7-b8a2-215e755a5ebd"
    },
    {
        "label": "Judson College",
        "value": "9f7fa796-e30a-48fe-ab7b-7448f88f8128"
    },
    {
        "label": "Judson University",
        "value": "4edcb8ee-8451-4e2a-bf6f-be10a3fdf007"
    },
    {
        "label": "Juilliard School",
        "value": "584d58c8-4259-4c37-9148-b32320ae5e7d"
    },
    {
        "label": "Julius-Maximilians-Universität Würzburg",
        "value": "5960ebcf-f32b-4e11-a1aa-aa1e21b32507"
    },
    {
        "label": "Juniata College",
        "value": "3280a5bd-1938-42c9-b6be-98cdc53b481d"
    },
    {
        "label": "Justus-Liebig-Universität Gießen",
        "value": "45b0df31-a974-4884-bc0e-046e8b1f5215"
    },
    {
        "label": "Kagoshima University",
        "value": "66422933-5ee8-4c5c-8ca0-68caae050906"
    },
    {
        "label": "KAIST - Korea Advanced Institute of Science & Technology",
        "value": "1e97ebc2-1a23-4b73-8cb7-8860ba700b22"
    },
    {
        "label": "Kalamazoo College",
        "value": "c3702524-f7f7-481f-91ba-1635358b3f3a"
    },
    {
        "label": "Kanazawa University",
        "value": "e0c57d27-b2b8-44db-a605-387ead66923c"
    },
    {
        "label": "Kansas City Art Institute",
        "value": "bb800052-bc63-4e20-8c8d-e1dcf42ac34e"
    },
    {
        "label": "Kansas State University",
        "value": "efda59f5-4053-488c-b374-7785ecd1721b"
    },
    {
        "label": "Kansas Wesleyan University",
        "value": "5d3e1eab-3ad7-4675-b2fb-c200225e6d59"
    },
    {
        "label": "Kaplan University",
        "value": "c0dfebb1-92e7-4d7c-87ae-180933215c6a"
    },
    {
        "label": "Karl-Franzens-Universität Graz",
        "value": "1334c29d-9a4f-4e3c-b3e0-a881d4b2c4df"
    },
    {
        "label": "Karlsruhe Institute of Technology (KIT)",
        "value": "9167eb0d-9789-4ec9-a205-6a331e38a916"
    },
    {
        "label": "Kasetsart University",
        "value": "42b1c796-1de3-4278-a835-f66d10e27ed8"
    },
    {
        "label": "Kaunas University of Technology",
        "value": "6c7d61b8-03cd-457d-a65c-e2c2949f31f8"
    },
    {
        "label": "Kazakh Ablai khan University of International Relations and World Languages",
        "value": "c9e0a396-2be2-4a9f-b620-46e602ee4230"
    },
    {
        "label": "Kazakh-British Technical University",
        "value": "22a9599e-f213-4e72-9616-37aa45c8c4dc"
    },
    {
        "label": "Kazakh National Pedagogical University Abai",
        "value": "b0c1902b-699e-4062-a6fd-113abfa8d3da"
    },
    {
        "label": "Kazakh National Technical University",
        "value": "370a6500-ac2a-4889-8eb2-7eee6838f867"
    },
    {
        "label": "Kazan Federal University",
        "value": "1f7caf4d-ce6f-4687-9d3d-38122088109d"
    },
    {
        "label": "Kean University",
        "value": "11ec0ced-f65a-432a-b753-c49291c994d6"
    },
    {
        "label": "Keele University",
        "value": "e1f1511b-bd4e-429f-a3f1-590f03d8dffe"
    },
    {
        "label": "Keene State College",
        "value": "b856233f-d699-48aa-99c5-b0a28691f047"
    },
    {
        "label": "Keio University",
        "value": "c6d6c10f-1de8-4ad5-9863-9b3b6e00728c"
    },
    {
        "label": "Keiser University",
        "value": "dbff1aa3-7ebb-4a57-bdce-40a94dbe0d0b"
    },
    {
        "label": "Kendall College",
        "value": "854c0e16-6dac-40a4-b87f-520be92b37e3"
    },
    {
        "label": "Kennedy-King College - City Colleges of Chicago",
        "value": "b652914d-9504-498d-80c0-c9cfae391d77"
    },
    {
        "label": "Kennesaw State University",
        "value": "1a00288e-3298-4858-974d-29d84d424f2e"
    },
    {
        "label": "Kent State University",
        "value": "d5f41238-1b1e-48a1-a2a6-985fe101ac1b"
    },
    {
        "label": "Kentucky Christian University",
        "value": "dfc4903f-affb-4777-be00-b5186ddc4b54"
    },
    {
        "label": "Kentucky State University",
        "value": "cd52ec87-f4b4-4aac-81cd-467af51c61f7"
    },
    {
        "label": "Kentucky Wesleyan College",
        "value": "53bc79e4-388d-451c-88b5-a86e39f0e37b"
    },
    {
        "label": "Kenyon College",
        "value": "388b1436-0462-4db1-afa6-ec8efd9e2baf"
    },
    {
        "label": "Kettering College",
        "value": "214423bf-3a9f-4a07-853e-c443a5f916d8"
    },
    {
        "label": "Kettering University",
        "value": "dbf5fbb9-3c21-4160-899a-f6eb46d6423f"
    },
    {
        "label": "Keuka College",
        "value": "cb4c5880-f547-43f9-9b0f-402e0511328c"
    },
    {
        "label": "Keystone College",
        "value": "3d5a3e32-58a7-4723-a559-f1e66dc6c6e6"
    },
    {
        "label": "Khazar University",
        "value": "65543c5d-938f-45ad-96c2-786c8299d956"
    },
    {
        "label": "Khon Kaen University",
        "value": "d4015b7e-4824-45c9-9b8a-cc20437fb18d"
    },
    {
        "label": "King Abdul Aziz University (KAU)",
        "value": "f76155d2-7454-4096-8b30-dcededbc5322"
    },
    {
        "label": "King Fahd University of Petroleum & Minerals",
        "value": "ae618821-4917-4589-88f6-5636d5b490a3"
    },
    {
        "label": "King Faisal University",
        "value": "a6744fce-1813-4014-9f30-09635ce7a131"
    },
    {
        "label": "King Khalid University",
        "value": "e6a3fa52-752f-4cba-b577-81158a7c84b1"
    },
    {
        "label": "King Mongkut''s University of Technology Thonburi",
        "value": "1db9e9f7-ff83-4ea3-a465-a6b1ce8096c3"
    },
    {
        "label": "King Saud University",
        "value": "5ad9515a-ba8c-42b8-90c0-716fb2ca91cd"
    },
    {
        "label": "King's College",
        "value": "43c757c9-2b7e-4851-a2f0-33c9f809f4a6"
    },
    {
        "label": "King's College London (KCL)",
        "value": "a4a7cb22-a9c9-41e2-b135-c4d09aed08e1"
    },
    {
        "label": "Kingston University, London",
        "value": "da5b1944-f862-41c0-9bbf-3d87e10787e7"
    },
    {
        "label": "King University",
        "value": "fff3f7e7-81cc-477e-9db1-64a6095b7da3"
    },
    {
        "label": "Knox College",
        "value": "3a08ba33-b8cc-4e53-a683-0d0ef3d4bcff"
    },
    {
        "label": "Kobe University",
        "value": "fa4daf2c-1f33-4048-a042-88a9c16b7a95"
    },
    {
        "label": "Koc University",
        "value": "13ee90eb-6a21-46e5-8477-692203a530cb"
    },
    {
        "label": "Korea University",
        "value": "09f2c548-a630-49c7-a5e2-0353164cdb2a"
    },
    {
        "label": "KTH, Royal Institute of Technology",
        "value": "e134cc5b-2263-4523-a4d2-b6d986b5aa3a"
    },
    {
        "label": "KU Leuven",
        "value": "ca498f81-0730-4eae-8d6c-026dccbab991"
    },
    {
        "label": "Kumamoto University",
        "value": "5a3c844f-87c8-4b63-975a-3f107d3166a7"
    },
    {
        "label": "Kutztown University of Pennsylvania",
        "value": "d027e3a6-bd27-4e19-aacc-4c446f53dcb1"
    },
    {
        "label": "Kuwait University",
        "value": "26bc724c-63a4-4b5d-8918-08dc82b8d94e"
    },
    {
        "label": "Kuyper College",
        "value": "67e11872-621c-4cdc-8a70-27a1c93c52ee"
    },
    {
        "label": "Kwantlen Polytechnic University",
        "value": "a29c636e-2915-457d-b3d8-66fd95ef0164"
    },
    {
        "label": "Kyoto University",
        "value": "3a71fa0f-bfe9-432b-b26c-50c87b8f85c7"
    },
    {
        "label": "Kyung Hee University",
        "value": "4c6e71ce-6f68-4c05-925a-4eb0c1545dda"
    },
    {
        "label": "Kyungpook National University",
        "value": "5bc615d3-4d6f-476d-bfd9-5a9f077be3fc"
    },
    {
        "label": "Kyushu University",
        "value": "c7dc10db-a2d5-4bb6-b367-a04d6984a74d"
    },
    {
        "label": "Lafayette College",
        "value": "3f50ae48-e658-4786-8cbc-ab3eb64b3801"
    },
    {
        "label": "LaGrange College",
        "value": "1bd047bd-dc8b-4bef-82a3-aa0ea8a92a6e"
    },
    {
        "label": "Laguna College of Art and Design",
        "value": "cb363821-405c-4777-96d2-fb1c74134bc0"
    },
    {
        "label": "Lake Erie College",
        "value": "aaaf7f68-40d5-4159-8130-7b5feeb1aea6"
    },
    {
        "label": "Lake Forest College",
        "value": "0a1f2966-19bf-4eda-9b3e-5e5894ef0dd0"
    },
    {
        "label": "Lakeland College",
        "value": "3343aaa7-4e86-4cea-b1fc-7e328b89e9e7"
    },
    {
        "label": "Lake Superior State University",
        "value": "14efb820-e68c-4df4-82bd-7eec81c43e37"
    },
    {
        "label": "Lakeview College of Nursing",
        "value": "37615225-f6cb-4e9b-8139-9f49aa53ddf8"
    },
    {
        "label": "Lamar University",
        "value": "e61280dc-e06b-41a3-8d82-56785b754ab5"
    },
    {
        "label": "Lancaster Bible College",
        "value": "84bbee02-5b00-4460-805e-41abb7c4a138"
    },
    {
        "label": "Lancaster University",
        "value": "42588df7-052f-4826-99ee-a28c6d152ffa"
    },
    {
        "label": "Lander University",
        "value": "fff05aa8-45ee-40eb-bbb9-cff61c27b2c9"
    },
    {
        "label": "Lane College",
        "value": "4b4b7c53-cc4c-4eb4-a847-4e5e1ff610f3"
    },
    {
        "label": "Langston University",
        "value": "7d8459f8-6ab7-4c8e-8822-c67b4263caf9"
    },
    {
        "label": "Lansing Community College",
        "value": "c71bda15-aa3d-40a6-9d6b-3f4be92a9ffb"
    },
    {
        "label": "La Roche College",
        "value": "d0b8ba23-c636-497f-bf7d-75b7ec93aee2"
    },
    {
        "label": "La Salle University",
        "value": "3e47a8eb-5c08-41fe-a6c0-7780d0b6b319"
    },
    {
        "label": "Lasell College",
        "value": "2454b6ec-8e18-4c57-bf3e-04ef62bb2ce6"
    },
    {
        "label": "La Sierra University",
        "value": "d836b365-2539-4b7c-ac9f-7b067fce126f"
    },
    {
        "label": "La Trobe University",
        "value": "5326319d-33f4-4dca-8443-65e3ad1d493f"
    },
    {
        "label": "Laval University",
        "value": "f233fd59-28cf-4130-9fb0-484e765ed249"
    },
    {
        "label": "Lawrence Technological University",
        "value": "561fbf14-101a-4a7b-82f0-807853f33e73"
    },
    {
        "label": "Lawrence University",
        "value": "734433b7-7d09-4001-80dc-60ddeac99604"
    },
    {
        "label": "Lebanon Valley College",
        "value": "e4461c01-6745-41b9-8bb2-bae5ba4143ee"
    },
    {
        "label": "Lees-McRae College",
        "value": "0f369cdd-e12a-48c7-ac8d-2af4bac27f79"
    },
    {
        "label": "Lee University",
        "value": "c1e4603f-3975-47b1-9277-09c7517c0487"
    },
    {
        "label": "Lehigh University",
        "value": "75c9ebec-424c-4322-a718-54f99919d469"
    },
    {
        "label": "Leibniz Universität Hannover",
        "value": "30ac0ee7-6b73-4ea1-b996-e8fc5feb38c3"
    },
    {
        "label": "Leiden University",
        "value": "f1c79669-56fa-4c37-bab7-6ffe37cd58e5"
    },
    {
        "label": "Le Moyne College",
        "value": "105eefb4-fe34-4ba2-9c4a-e9e5e3d7c0cc"
    },
    {
        "label": "LeMoyne-Owen College",
        "value": "b1910705-d93f-4b02-830a-cd207ccb2242"
    },
    {
        "label": "Lenoir-Rhyne University",
        "value": "a0b1ab1a-405d-4e69-af75-7839d0fdb675"
    },
    {
        "label": "Lesley University",
        "value": "7b88b783-16df-4269-b491-65031e908853"
    },
    {
        "label": "LeTourneau University",
        "value": "a7caa533-e666-4088-83dd-c09a46dfb340"
    },
    {
        "label": "Lewis & Clark College",
        "value": "6ec63214-43f5-4bbc-bd38-26a584ebbadc"
    },
    {
        "label": "Lewis-Clark State College",
        "value": "37497c59-65df-4d41-b91b-0e807d8495a1"
    },
    {
        "label": "Lewis University",
        "value": "b606ad88-6547-456e-9380-09a5218e4b1b"
    },
    {
        "label": "Lexington College",
        "value": "e1930674-33d9-4973-8a34-a994004d4417"
    },
    {
        "label": "Liberty University",
        "value": "9bdbb924-02dd-4323-8bed-a93cc95352ec"
    },
    {
        "label": "Life Pacific College",
        "value": "2f0f64da-6403-4f63-80a2-fd8169c4eef9"
    },
    {
        "label": "Life University",
        "value": "d6bbdbdc-2565-4402-8ef9-65fe9bf8aaba"
    },
    {
        "label": "LIM College",
        "value": "eaa4fe76-3f09-4e62-b332-56b0d00d0b8f"
    },
    {
        "label": "Limestone College",
        "value": "d6dfd788-5be5-497b-9e55-066876d1bf51"
    },
    {
        "label": "Lincoln Christian University",
        "value": "d359e8ac-a52c-4ee1-8172-5743da9a137e"
    },
    {
        "label": "Lincoln College",
        "value": "2d3b3ef8-9894-45a1-9864-055ad1f0ec4d"
    },
    {
        "label": "Lincoln Memorial University",
        "value": "52f5b4db-4458-402a-9dbf-2796d5488a9c"
    },
    {
        "label": "Lincoln University",
        "value": "9b0e93fc-c6ea-460a-850d-b43a4c3d9334"
    },
    {
        "label": "Lincoln University",
        "value": "4bdc2487-060b-4b74-80d4-ae8bc29c4c44"
    },
    {
        "label": "Lindenwood University",
        "value": "c20b4eb6-b627-4112-9225-529ad1fef8d7"
    },
    {
        "label": "Lindsey Wilson College",
        "value": "4462c8f8-2bb5-422a-9a81-c54a91ef863c"
    },
    {
        "label": "Linfield College",
        "value": "d4d71f1f-165b-45c9-9309-4d5e1028bb3a"
    },
    {
        "label": "Lingnan University (Hong Kong)",
        "value": "5efdc298-ecc5-441f-b311-8796197622e5"
    },
    {
        "label": "Linköping University",
        "value": "91bd4fc7-17e3-4381-a21b-c1c867781321"
    },
    {
        "label": "Lipscomb University",
        "value": "66cc6a87-1b82-4fe6-a0f7-075b1cb09655"
    },
    {
        "label": "LIU Post",
        "value": "a0cdf311-2154-47dd-bcf3-4fed189011ed"
    },
    {
        "label": "Livingstone College",
        "value": "727d5901-c4c7-41ac-9258-8e4c5294ea42"
    },
    {
        "label": "L.N. Gumilyov Eurasian National University",
        "value": "e6926352-80da-460c-9e49-646726166699"
    },
    {
        "label": "Lobachevsky State University of Nizhni Novgorod",
        "value": "1c73649f-120e-437f-a37d-1522d112625a"
    },
    {
        "label": "Lock Haven University of Pennsylvania",
        "value": "ef177723-5aa7-43c1-ba82-be46ddcca9cd"
    },
    {
        "label": "Lodz University",
        "value": "c950543e-259a-487a-ab21-14a58420a87b"
    },
    {
        "label": "Loma Linda University",
        "value": "9cfd55e7-bf9d-4536-ac87-3ceae277eaa2"
    },
    {
        "label": "Lomonosov Moscow State University",
        "value": "c755c585-12b0-4b94-80b5-0d297ccdc331"
    },
    {
        "label": "London Metropolitan University",
        "value": "2cde3216-ee0d-4dc1-a479-a19364834c39"
    },
    {
        "label": "London School of Economics and Political Science (LSE)",
        "value": "088c1b4f-1454-40a8-a582-4b76dfdabda5"
    },
    {
        "label": "Longwood University",
        "value": "d5daf79a-6450-43b5-b724-0a94a70f9c3c"
    },
    {
        "label": "Loras College",
        "value": "2f6d7fea-5f2c-494b-9667-a63be8dba250"
    },
    {
        "label": "Loughborough University",
        "value": "9a936b4b-b7db-48b5-bbd0-1c616c870957"
    },
    {
        "label": "Louisiana College",
        "value": "fa5f1a32-2b8e-48e0-9503-84294ab2da06"
    },
    {
        "label": "Louisiana State University - Alexandria",
        "value": "8cacdbb3-6e02-48c9-91a5-b1aace8e0513"
    },
    {
        "label": "Louisiana State University - Baton Rouge",
        "value": "7147fcb1-6568-48ee-8657-cd33c5122f2e"
    },
    {
        "label": "Louisiana State University Health Sciences Center",
        "value": "24b1608e-a841-4686-9fa1-a8430f3766b1"
    },
    {
        "label": "Louisiana State University - Shreveport",
        "value": "9b3d4984-3d0c-4e03-918d-591936e4dd5b"
    },
    {
        "label": "Louisiana Tech University",
        "value": "7357c365-cf28-4ec3-ab7e-6ea3fd894c05"
    },
    {
        "label": "Lourdes University",
        "value": "05efa97a-9f9d-4493-adb0-a01f674225f3"
    },
    {
        "label": "Loyola Marymount University",
        "value": "0a142ee9-c9fe-4fd0-8074-c60c62510451"
    },
    {
        "label": "Loyola University Chicago",
        "value": "2305dae6-410e-415c-923b-6a222a969088"
    },
    {
        "label": "Loyola University Maryland",
        "value": "2d6bf5c0-1e96-41de-b69d-7fd678ed4d00"
    },
    {
        "label": "Loyola University New Orleans",
        "value": "37875f91-35bd-449e-ac52-5f11c6ccf3c8"
    },
    {
        "label": "Lubbock Christian University",
        "value": "124706b0-631a-4928-812e-019763474268"
    },
    {
        "label": "Ludwig-Maximilians-Universität München",
        "value": "3b837d4a-b113-4518-a800-84c68f535d3b"
    },
    {
        "label": "Lund University",
        "value": "75f7c637-f528-400b-afd1-b1a5a8d0d924"
    },
    {
        "label": "Luther College",
        "value": "5cf8fe9a-4e07-4d64-807b-f4c6b72b530e"
    },
    {
        "label": "Lycoming College",
        "value": "1e33bba1-08a4-40e2-835c-67f4dc8fa5ce"
    },
    {
        "label": "Lyme Academy College of Fine Arts",
        "value": "e9f435b0-8dc4-422f-8f87-08790cdcaf02"
    },
    {
        "label": "Lynchburg College",
        "value": "d9e36a0a-16f7-49eb-b792-c5d0e538d4f0"
    },
    {
        "label": "Lyndon State College",
        "value": "427aa3e5-b88f-4e36-afa4-b713c368e0bd"
    },
    {
        "label": "Lynn University",
        "value": "51c11704-aef6-4670-bc72-223ab5cdcbab"
    },
    {
        "label": "Lyon College",
        "value": "f418696f-a33f-47ba-b26f-beeaf7f053be"
    },
    {
        "label": "Maastricht University",
        "value": "0c419421-8114-4062-a7fa-968d82a479fa"
    },
    {
        "label": "Macalester College",
        "value": "4c471bca-6897-4722-8fc4-2a9f1a3b5223"
    },
    {
        "label": "MacMurray College",
        "value": "080f173b-85bf-41d6-a558-9c44746cec54"
    },
    {
        "label": "Macquarie University",
        "value": "3eb42024-33cd-4b96-be40-0c4571aa4d68"
    },
    {
        "label": "Madonna University",
        "value": "49678603-84fe-4ae3-8c92-7b6b6d0e6eb2"
    },
    {
        "label": "Maharishi University of Management",
        "value": "8ef5df5b-0c97-42a1-a3a2-efb39c1a16df"
    },
    {
        "label": "Mahidol University",
        "value": "edbccafa-8636-4810-9e7d-78781e5549f0"
    },
    {
        "label": "Maine College of Art",
        "value": "f129ad42-bf35-4d21-8b3f-3c144d291232"
    },
    {
        "label": "Maine Maritime Academy",
        "value": "95eb7fad-ee60-42df-a6e2-ab7ce35415d9"
    },
    {
        "label": "Malcolm X College - City Colleges of Chicago",
        "value": "4b290ef2-8af8-4a47-9b55-80031cc9e043"
    },
    {
        "label": "Malone University",
        "value": "d6d0ba0a-717b-4381-8f3d-fe96d68637da"
    },
    {
        "label": "Manchester Metropolitan University",
        "value": "da8cd69a-ba4f-4afd-bb83-e7beda39feb9"
    },
    {
        "label": "Manchester University",
        "value": "bc327c10-1abc-402e-8818-b0ffd67605bf"
    },
    {
        "label": "Manhattan Christian College",
        "value": "79c935cd-4fdc-460d-a948-2e8d6eb05015"
    },
    {
        "label": "Manhattan College",
        "value": "24a9331c-1425-42c0-96bd-cedf77422c36"
    },
    {
        "label": "Manhattan School of Music",
        "value": "41625b7a-14ce-41ba-9dda-b09f52454130"
    },
    {
        "label": "Manhattanville College",
        "value": "61a31dfb-cc86-4340-b356-aa1aa6a773f2"
    },
    {
        "label": "Mansfield University of Pennsylvania",
        "value": "a09bd29a-7437-4152-aa33-fc868bf488c4"
    },
    {
        "label": "Maranatha Baptist Bible College",
        "value": "1cb5f4e0-5e3c-4b0a-8229-970eae15d714"
    },
    {
        "label": "Marian University",
        "value": "7c47d810-9431-43ad-a31f-92f3a1d139eb"
    },
    {
        "label": "Marietta College",
        "value": "7f4804d0-1607-47c1-b61c-bcb281eb7705"
    },
    {
        "label": "Marist College",
        "value": "7108bd27-e347-4466-834e-3d9da2e2eb78"
    },
    {
        "label": "Marlboro College",
        "value": "2e7f3d0d-367d-4d1f-96fd-dc72c757abc2"
    },
    {
        "label": "Marquette University",
        "value": "828a4aa8-ecf5-4b78-9fbb-87d364fcd88e"
    },
    {
        "label": "Marshall University",
        "value": "e37aa553-f965-4185-8324-97b6af6f25a8"
    },
    {
        "label": "Mars Hill University",
        "value": "9f4fc943-781f-4bfc-9d7a-0718b0aac144"
    },
    {
        "label": "Martin Luther College",
        "value": "4e7a3a77-f316-48f4-8994-494a96d7e057"
    },
    {
        "label": "Martin-Luther-Universität Halle-Wittenberg",
        "value": "f47533f8-9d06-4793-9cc7-23b68c500319"
    },
    {
        "label": "Martin Methodist College",
        "value": "638ea1e5-261e-46c6-a997-70be1d6ff056"
    },
    {
        "label": "Martin University",
        "value": "a658d18d-57ce-4923-9376-ef9f24ed44bb"
    },
    {
        "label": "Mary Baldwin College",
        "value": "13242b1f-f8a8-4626-bef6-0cfb5560335c"
    },
    {
        "label": "Marygrove College",
        "value": "79ae4021-33fd-4e81-b37c-bd09ee425ad2"
    },
    {
        "label": "Maryland Institute College of Art",
        "value": "5215da99-e9c5-44da-a368-01f38e65e9c8"
    },
    {
        "label": "Marylhurst University",
        "value": "b13db58c-60df-4e8e-a4a8-7693aa1f73ce"
    },
    {
        "label": "Marymount Manhattan College",
        "value": "e0724a5e-5e26-4277-885f-80ce69f717f7"
    },
    {
        "label": "Marymount University",
        "value": "b996456c-8e2f-497d-9766-d4d2300d5c44"
    },
    {
        "label": "Maryville College",
        "value": "978a5972-405b-4984-a3d2-a1e78dde1046"
    },
    {
        "label": "Maryville University of St. Louis",
        "value": "b2e76fe5-6e79-461e-93fc-ebb93796d8a8"
    },
    {
        "label": "Marywood University",
        "value": "d86c57b9-34f2-4ff8-bd06-67834e27a187"
    },
    {
        "label": "Masaryk University",
        "value": "947ddcc8-92eb-440f-b005-61072325ec94"
    },
    {
        "label": "Massachusetts College of Art and Design",
        "value": "449a37de-7a5d-47d7-86fe-a955b2055f2e"
    },
    {
        "label": "Massachusetts College of Liberal Arts",
        "value": "8a34d2f1-29df-413b-b73e-0e2ceef868f7"
    },
    {
        "label": "Massachusetts College of Pharmacy and Health Sciences",
        "value": "c45a337f-315f-49e1-bc61-4dd8e27d2752"
    },
    {
        "label": "Massachusetts Institute of Technology",
        "value": "2422b22e-e798-4cc3-9385-6dadf576cc06"
    },
    {
        "label": "Massachusetts Maritime Academy",
        "value": "69b6ebd2-1454-4206-a199-ec623d21471d"
    },
    {
        "label": "Massey University",
        "value": "7695bcbd-50d7-4a4d-b437-eb8ac3199bbb"
    },
    {
        "label": "Master's College and Seminary",
        "value": "42319bcb-dc97-4d08-aad6-f0c7c2b225dc"
    },
    {
        "label": "Mayville State University",
        "value": "20b1e636-62d1-4845-becf-24300046563a"
    },
    {
        "label": "McDaniel College",
        "value": "d186a6b7-0858-4ecc-9ff7-431cf54ac720"
    },
    {
        "label": "McGill University",
        "value": "cec0fccb-9dd3-4a7b-bf47-0a492e3c9401"
    },
    {
        "label": "McKendree University",
        "value": "41161829-e8b2-4020-be1d-7596d58f92e9"
    },
    {
        "label": "McMaster University",
        "value": "c7b4167d-c0d7-46f5-878a-a2d721e8da1e"
    },
    {
        "label": "McMurry University",
        "value": "041b530b-f27c-4162-a3b1-b5536fc71c1d"
    },
    {
        "label": "McNeese State University",
        "value": "eac4b8aa-4c44-4bc8-b835-d588e7fce8f1"
    },
    {
        "label": "McPherson College",
        "value": "c6f47d54-35ab-4fb9-b521-a68c9980c70d"
    },
    {
        "label": "Medaille College",
        "value": "fffdbf16-9ec2-40d6-893f-0ec6aeb425b7"
    },
    {
        "label": "Medical University of South Carolina",
        "value": "4b42a481-a8c5-4a61-9f48-2f1819e89764"
    },
    {
        "label": "Memorial University of Newfoundland",
        "value": "8d312631-ce40-4a80-bf95-257c519646f3"
    },
    {
        "label": "Memphis College of Art",
        "value": "6a10bba5-8b19-4cb6-aed5-38b1308346dd"
    },
    {
        "label": "Menlo College",
        "value": "fa9ac6aa-9f3f-4855-83a7-d35312e2e823"
    },
    {
        "label": "Mercer University",
        "value": "21dd08d2-fa40-4945-87f9-d50357948a6a"
    },
    {
        "label": "Mercy College",
        "value": "5fc432da-5875-483a-8763-de572cb864b3"
    },
    {
        "label": "Mercy College of Health Sciences",
        "value": "e775792b-e17e-4cf8-87de-36997c78696b"
    },
    {
        "label": "Mercy College of Ohio",
        "value": "ca48e86b-9ed2-4cb6-8671-22ee18904c9b"
    },
    {
        "label": "Mercyhurst University",
        "value": "3626d630-0024-4496-a52c-bbf74ea05fbc"
    },
    {
        "label": "Meredith College",
        "value": "d742717e-1eb2-48d1-aff6-ee5a17c81f47"
    },
    {
        "label": "Merrimack College",
        "value": "c1a6fbac-c5dc-4264-93e0-02bc8b05545b"
    },
    {
        "label": "Messiah College",
        "value": "c8aba18f-7124-4d55-8636-d92e16e61356"
    },
    {
        "label": "Methodist University",
        "value": "a8b1b8a7-6898-42c3-b00c-0573d4144e21"
    },
    {
        "label": "Metropolitan College of New York",
        "value": "05bf2297-9321-4341-bc8a-860119a3f972"
    },
    {
        "label": "Metropolitan State University",
        "value": "907f4cc3-1495-45b6-8fe0-85ca64587d86"
    },
    {
        "label": "Metropolitan State University of Denver",
        "value": "38fe528d-e53c-48ce-a6fe-dfe271216c0a"
    },
    {
        "label": "Miami Dade College",
        "value": "8e933179-db49-4a72-867d-14ea4cf03674"
    },
    {
        "label": "Miami International University of Art & Design",
        "value": "7e63d055-331a-434a-bf36-17edd1ef0566"
    },
    {
        "label": "Miami University - Oxford",
        "value": "410b6535-aa6d-4b7d-ae80-85e3198c4f5c"
    },
    {
        "label": "Michigan State University",
        "value": "444b0998-7e56-4208-9421-e27c89e5a7e8"
    },
    {
        "label": "Michigan Technological University",
        "value": "3898ce73-bd16-469d-93ad-aa52b0c95bd3"
    },
    {
        "label": "Mid-America Christian University",
        "value": "49f82af2-fdb0-4c50-a4f2-7768bc667d2d"
    },
    {
        "label": "MidAmerica Nazarene University",
        "value": "343882b5-c778-4171-a88b-3c4902f4fea8"
    },
    {
        "label": "Mid-Atlantic Christian University",
        "value": "9b856d2a-0079-47f7-843c-12f30d032282"
    },
    {
        "label": "Mid-Continent University",
        "value": "c4083558-a7ea-4186-abaf-6de859a066e0"
    },
    {
        "label": "Middlebury College",
        "value": "92b6cbde-6620-4b51-82bf-f545240817d1"
    },
    {
        "label": "Middle East Technical University",
        "value": "23563c7f-340c-4760-8b03-09995d5d33cc"
    },
    {
        "label": "Middle Georgia State College",
        "value": "fb8c630f-aeda-4c88-9e3a-f111343847f6"
    },
    {
        "label": "Middlesex University",
        "value": "870a1435-37c8-43d0-ba8a-390be02e62c5"
    },
    {
        "label": "Middle Tennessee State University",
        "value": "fd53967e-2230-47cb-be04-8c7d9be53e7b"
    },
    {
        "label": "Midland College",
        "value": "9667b491-54fc-465e-a58b-2396a57bf054"
    },
    {
        "label": "Midland University",
        "value": "ddc55deb-4a4e-461a-83a2-9a9eb775fa7e"
    },
    {
        "label": "Midstate College",
        "value": "e476f17e-2fc4-436f-bd9d-abcfa83adc67"
    },
    {
        "label": "Midway College",
        "value": "3ce9e8ae-79f8-4291-8814-83711e33ec91"
    },
    {
        "label": "Midwestern State University",
        "value": "63ce9589-4270-4447-8448-2f99929e5e0e"
    },
    {
        "label": "Miles College",
        "value": "04b2d1be-99cb-490c-a675-c44d3c9ba490"
    },
    {
        "label": "Millersville University of Pennsylvania",
        "value": "92d27697-fc0b-444a-b7a6-55f61d67f0c6"
    },
    {
        "label": "Milligan College",
        "value": "cde23a06-faaf-41d6-8089-e970fcaf24ba"
    },
    {
        "label": "Millikin University",
        "value": "5dc7eed5-48c1-4a0a-8e06-84186b80712c"
    },
    {
        "label": "Millsaps College",
        "value": "a3267cd5-2531-41be-9735-743095f2d02c"
    },
    {
        "label": "Mills College",
        "value": "d8f8b209-f9e9-440c-8977-08febbe0ac55"
    },
    {
        "label": "Milwaukee Area Technical College",
        "value": "4dd69623-893e-44c2-adb8-867ba2e0bed8"
    },
    {
        "label": "Milwaukee Institute of Art and Design",
        "value": "1b22fae1-913f-4d26-b4c6-5883042b9970"
    },
    {
        "label": "Milwaukee School of Engineering",
        "value": "b80640e0-eb45-4326-90ef-07d43231d2d9"
    },
    {
        "label": "Minneapolis College of Art and Design",
        "value": "26e854c4-8bbd-44fa-b829-982916c63bfe"
    },
    {
        "label": "Minnesota State University - Mankato",
        "value": "6a9be05f-1d0e-4d37-a489-2352f18bb48a"
    },
    {
        "label": "Minnesota State University - Moorhead",
        "value": "d29eaff6-1835-4bcf-978f-df6fd3f8274a"
    },
    {
        "label": "Minot State University",
        "value": "d6bb90a1-a948-47b8-9a22-533b6ddbecb5"
    },
    {
        "label": "Misericordia University",
        "value": "79c4e67d-d172-4c72-8728-df81af19ee8f"
    },
    {
        "label": "Mississippi College",
        "value": "a50416b4-84c3-4877-8b59-534a37aec7f1"
    },
    {
        "label": "Mississippi State University",
        "value": "4e1c387f-7523-4d6d-9c44-2afff3cd4489"
    },
    {
        "label": "Mississippi University for Women",
        "value": "1887ee35-02e5-4331-a9fd-877d656523fb"
    },
    {
        "label": "Mississippi Valley State University",
        "value": "3e43064c-81d6-4203-8fb7-61543b4a225a"
    },
    {
        "label": "Missouri Baptist University",
        "value": "b049f3e5-82a5-4558-bd94-36b4f67f97ae"
    },
    {
        "label": "Missouri Southern State University",
        "value": "fc68f8c1-d09c-4799-a136-079198fa0a00"
    },
    {
        "label": "Missouri State University",
        "value": "fca7af9e-b123-4b44-86f4-8caf184c819f"
    },
    {
        "label": "Missouri University of Science & Technology",
        "value": "3b015aa5-94bf-4f30-9d6d-34f374378468"
    },
    {
        "label": "Missouri Valley College",
        "value": "89e759b9-5eef-4612-99e5-2f85675af865"
    },
    {
        "label": "Missouri Western State University",
        "value": "67c39a2c-021e-4bde-a39e-21729c0819f4"
    },
    {
        "label": "Mitchell College",
        "value": "e30582ff-8cbb-4275-b533-cc7e12f43821"
    },
    {
        "label": "Molloy College",
        "value": "2fc538c5-238d-49a3-9d2e-206f20478587"
    },
    {
        "label": "Monash University",
        "value": "3567202f-0e23-456e-85f2-cd869bd2373e"
    },
    {
        "label": "Monmouth College",
        "value": "55cd7af4-4a59-46c3-b075-de1c02ba21e2"
    },
    {
        "label": "Monmouth University",
        "value": "61eeb857-d98e-4168-84d0-c0c8fae20269"
    },
    {
        "label": "Monroe College",
        "value": "cd1af93e-fd61-4acc-9a79-41a77da3ceb2"
    },
    {
        "label": "Montana State University",
        "value": "ac823fa0-6b6a-478d-9210-4e1142d2e577"
    },
    {
        "label": "Montana State University - Billings",
        "value": "b5dfd302-116f-46aa-bc33-35ef8cecf4e8"
    },
    {
        "label": "Montana State University - Northern",
        "value": "a02053d3-11c5-4a11-a6b6-45a5a4b91056"
    },
    {
        "label": "Montana Tech of the University of Montana",
        "value": "56e8765d-887e-4a18-a3db-0b6aba25e4fd"
    },
    {
        "label": "Montclair State University",
        "value": "2a5673a3-3010-4b21-8a1e-9a6e99bca670"
    },
    {
        "label": "Monterrey Institute of Technology and Higher Education - Monterrey",
        "value": "482d2e00-4210-4747-8382-4f60d45f9062"
    },
    {
        "label": "Montreat College",
        "value": "7467f1f8-161d-4482-9db1-3392ff6ff7ad"
    },
    {
        "label": "Montserrat College of Art",
        "value": "249d4ed7-e95b-4293-b0af-2b2eced9a968"
    },
    {
        "label": "Moody Bible Institute",
        "value": "741ab546-679b-48d9-b776-84d1330c9737"
    },
    {
        "label": "Moore College of Art & Design",
        "value": "0306620f-1afb-47bb-a2b1-30fa4f6cc332"
    },
    {
        "label": "Moravian College",
        "value": "438918e1-9d25-4fb5-87f5-ab29a2079516"
    },
    {
        "label": "Morehead State University",
        "value": "7dbfe878-c855-4c4d-8df5-dffac0e431cc"
    },
    {
        "label": "Morehouse College",
        "value": "90da3c90-0926-4929-986c-c9d9e7367bda"
    },
    {
        "label": "Morgan State University",
        "value": "dd364c4f-d7a2-4154-9883-5eab92b9b60a"
    },
    {
        "label": "Morningside College",
        "value": "60ddec83-a629-44c3-8e40-359474d49ed6"
    },
    {
        "label": "Morris College",
        "value": "3a84634f-70a1-4f6e-bd9a-94d20dcae7e0"
    },
    {
        "label": "Morrisville State College",
        "value": "7b16b5cf-21ff-4364-9e3c-b96eaf4eae5b"
    },
    {
        "label": "Moscow Institute of Physics and Technology State University",
        "value": "64b08c98-9ce1-4ff3-92e2-ea8c77357b8f"
    },
    {
        "label": "Moscow State Institute of International Relations (MGIMO-University)",
        "value": "1c4e306a-213e-4ffe-9c32-94c68011544c"
    },
    {
        "label": "Mount Aloysius College",
        "value": "f22528f2-38c9-4dd6-82f2-78f939a89997"
    },
    {
        "label": "Mount Angel Seminary",
        "value": "b3a06112-f7ef-445f-9b0b-c37773232683"
    },
    {
        "label": "Mount Carmel College of Nursing",
        "value": "bc8f8f43-d8d4-410d-a4f5-cc11ff933884"
    },
    {
        "label": "Mount Holyoke College",
        "value": "7f320ed2-bb62-41c7-964f-5c1fb580a7e9"
    },
    {
        "label": "Mount Ida College",
        "value": "ba93a7c5-b0e2-4e73-bfa5-f2dbdd8176fc"
    },
    {
        "label": "Mount Marty College",
        "value": "864ff027-a4da-4e30-8b3e-f79c244c322e"
    },
    {
        "label": "Mount Mary University",
        "value": "428270e0-85f0-46e8-a7ac-94bdafce98f7"
    },
    {
        "label": "Mount Mercy University",
        "value": "0df426e5-36b9-4c53-9140-7fb3a1be08e7"
    },
    {
        "label": "Mount Olive College",
        "value": "a996ce6a-3c5f-4423-8507-7eabe797f2ef"
    },
    {
        "label": "Mount St. Mary College",
        "value": "c5f40583-be13-457d-9153-684805bd7f2c"
    },
    {
        "label": "Mount St. Mary's College",
        "value": "953ce128-0404-4a7e-a311-24c220979b27"
    },
    {
        "label": "Mount St. Mary's University",
        "value": "73971ada-9d9f-45d5-9cba-ca75f789dd4d"
    },
    {
        "label": "Mount Vernon Nazarene University",
        "value": "25c6ae6e-fac2-4ba3-aead-39314a2f10d1"
    },
    {
        "label": "Muhlenberg College",
        "value": "ea4dfebd-1988-46d8-8033-514aaa3e5927"
    },
    {
        "label": "Multnomah University",
        "value": "67a059b9-d87c-4655-a920-23c26c4610f4"
    },
    {
        "label": "Murdoch University",
        "value": "29ff5bc9-1c9b-40b1-b93a-acb98cffc4bb"
    },
    {
        "label": "Murray State University",
        "value": "b0f571ff-ddf9-4e76-9488-b5d938a917b8"
    },
    {
        "label": "Muskingum University",
        "value": "42e3c892-56a6-4a70-93a4-7b8588ab4ce0"
    },
    {
        "label": "Nagasaki University",
        "value": "8803d810-5c7c-4df3-8f5b-bd9525d7f74c"
    },
    {
        "label": "Nagoya University",
        "value": "10a316a7-31ad-4001-bcb6-a227c2d6dc2c"
    },
    {
        "label": "Nanjing University",
        "value": "720597a6-e565-4e8d-b64a-67e77432150b"
    },
    {
        "label": "Nankai University",
        "value": "38bc04f1-f01f-4331-b880-3a5001ed31dc"
    },
    {
        "label": "Nanyang Polytechnic (NYP)",
        "value": "41912339-50d6-4d32-b461-8fb4e0828201"
    },
    {
        "label": "Nanyang Technological University (NTU)",
        "value": "db887637-e981-467c-aba8-3fd12b6abd85"
    },
    {
        "label": "Naropa University",
        "value": "47750736-54d0-4c38-ad4e-1515cdceb81a"
    },
    {
        "label": "National American University",
        "value": "68bcc0f4-a0e6-4971-b377-188503b1696b"
    },
    {
        "label": "National and Kapodistrian University of Athens",
        "value": "37689df7-2b98-42a4-bb9b-ba09460e315d"
    },
    {
        "label": "National Central University",
        "value": "7613fa07-7d17-4736-8e56-1f2f84e5f4b3"
    },
    {
        "label": "National Chengchi University",
        "value": "5e1e0622-8259-40fc-804f-6402e3def032"
    },
    {
        "label": "National Cheng Kung University",
        "value": "fd2fcff5-d889-4cbc-a8cd-ccd45c119892"
    },
    {
        "label": "National Chiao Tung University",
        "value": "7370ec46-c53e-4d71-bbbe-4188cce9ceff"
    },
    {
        "label": "National Chung Hsing University",
        "value": "e676670c-eff3-43fb-80e4-3ccfb1bcba14"
    },
    {
        "label": "National Graduate School of Quality Management",
        "value": "d4839f37-4dcb-4e4c-8fb7-fc8c7ac9ad9b"
    },
    {
        "label": "National Hispanic University",
        "value": "528fd8c6-ffc3-4ed9-ab49-fdcbb9820faa"
    },
    {
        "label": "National Labor College",
        "value": "27f022ba-28e0-420f-8203-c55642e94eb1"
    },
    {
        "label": "National-Louis University",
        "value": "6e0d23ed-02f3-4694-9ce8-452f0f69d1be"
    },
    {
        "label": "National Research University – Higher School of Economics (HSE)",
        "value": "d5be34a5-a492-4ea3-b77f-271e8e90a123"
    },
    {
        "label": "National Sun Yat-sen University",
        "value": "1ae47163-e57c-469b-aeff-b4add42b4f07"
    },
    {
        "label": "National Taipei University of Technology",
        "value": "feb14c9c-7351-4308-918e-f56582cc6165"
    },
    {
        "label": "National Taiwan Normal University",
        "value": "60f6af13-f3dd-4f13-ac47-43e4a82d77a4"
    },
    {
        "label": "National Taiwan University (NTU)",
        "value": "20063f8b-a5cd-4393-ad2a-f096615adebd"
    },
    {
        "label": "National Taiwan University of Science And Technology",
        "value": "48231e10-5f21-4027-ba94-6608b0677dc1"
    },
    {
        "label": "National Technical UniversityKharkiv Polytechnic Institute'",
        "value": "ee365af2-b6e1-44d6-83d3-a83d45cf7ef8"
    },
    {
        "label": "National Technical University of Athens",
        "value": "a3fc7587-b6cf-4116-83db-36dcaae2ba00"
    },
    {
        "label": "National Technical University of UkraineKyiv Polytechnic Institute'",
        "value": "a9d5ca0b-a891-43d2-a71b-1c079ed0f577"
    },
    {
        "label": "National Tsing Hua University",
        "value": "a78b3740-9843-43fc-9430-958f966d83f6"
    },
    {
        "label": "National University",
        "value": "0868dceb-23ca-4733-9867-48ed56bb1c07"
    },
    {
        "label": "National University of Ireland, Galway",
        "value": "796ea9ea-8d45-4e23-ad49-0fb283247d7e"
    },
    {
        "label": "National University of Ireland Maynooth",
        "value": "de3fe760-777d-49f2-bdec-9a4efe6b844b"
    },
    {
        "label": "National University of Sciences And Technology (NUST) Islamabad",
        "value": "757b63ea-b322-41d4-9987-2ae5eba1eee0"
    },
    {
        "label": "National University of Singapore (NUS)",
        "value": "787ff031-2832-459e-b644-ae22b7d98f76"
    },
    {
        "label": "National Yang Ming University",
        "value": "da538da8-44c9-4ff0-945c-0cd16633de3e"
    },
    {
        "label": "Nazarene Bible College",
        "value": "2e4a8f59-7882-49f5-b255-b2ada94cb66b"
    },
    {
        "label": "Nazareth College",
        "value": "397a4473-5a27-4790-bc62-c67d44a1577a"
    },
    {
        "label": "Nebraska Methodist College",
        "value": "236d9012-1af4-4197-8855-0e4f0b91c4da"
    },
    {
        "label": "Nebraska Wesleyan University",
        "value": "fe4a0777-65f7-430a-b30d-42ebe54ca681"
    },
    {
        "label": "Neumann University",
        "value": "4c828a02-a5e5-4dc6-80b9-a25b991c129d"
    },
    {
        "label": "Nevada State College",
        "value": "74a4f59f-92e7-461f-9379-d22d1296bfe7"
    },
    {
        "label": "Newberry College",
        "value": "5dffb9f5-2e8d-46ae-8245-f14b3c2a70dd"
    },
    {
        "label": "Newbury College",
        "value": "70c14fb2-5edc-4221-9d68-e1fa009d0275"
    },
    {
        "label": "Newcastle University",
        "value": "015a1310-ca01-4515-ba3f-05da537087b4"
    },
    {
        "label": "New College of Florida",
        "value": "4b2680bd-31ed-4108-a5c1-1dba77038711"
    },
    {
        "label": "New England College",
        "value": "639e48ea-1571-4086-991e-9678d5a15b0c"
    },
    {
        "label": "New England Conservatory of Music",
        "value": "7c1b47fc-32b6-4656-9491-5cc8e36d1f13"
    },
    {
        "label": "New England Institute of Art",
        "value": "1c879297-73f7-4179-92c2-52be614a8fd3"
    },
    {
        "label": "New England Institute of Technology",
        "value": "e4492867-35a3-4d82-a2b5-a52b561d937e"
    },
    {
        "label": "New England Law",
        "value": "7225c65d-bf06-4dd5-8796-3c9e60ba3d0e"
    },
    {
        "label": "New Jersey City University",
        "value": "9827a6fb-f11f-4502-aa7f-873a6f2fb7d0"
    },
    {
        "label": "New Jersey Institute of Technology",
        "value": "50ee73f3-87dc-4299-b137-82a206e531d1"
    },
    {
        "label": "Newman University",
        "value": "f7a580a4-44a6-4746-aa38-13f2f56fe2d8"
    },
    {
        "label": "New Mexico Highlands University",
        "value": "35d8f844-4ad1-489f-a2e9-41dd10b6331c"
    },
    {
        "label": "New Mexico Institute of Mining and Technology",
        "value": "f27d7808-755a-4a29-997e-68edf0a61bb6"
    },
    {
        "label": "New Mexico State University",
        "value": "586fd256-44a2-44d5-b134-f6941fbb5497"
    },
    {
        "label": "New Orleans Baptist Theological Seminary",
        "value": "8bb69051-0612-4f91-a52c-d7ca44f493b3"
    },
    {
        "label": "New York Institute of Technology",
        "value": "d596458c-3a11-437f-b6c4-81f593a4ef51"
    },
    {
        "label": "New York University",
        "value": "3253933f-b4c8-488a-8dfe-edaf4d2a962a"
    },
    {
        "label": "Ngee Ann Polytechnic (NP)",
        "value": "b6caf4f8-1e89-4775-b2ab-e42a48e30c91"
    },
    {
        "label": "Niagara University",
        "value": "23dbe4d8-e792-43e6-94b7-299f3b590c04"
    },
    {
        "label": "Nicholls State University",
        "value": "cf3111f6-0c4c-4466-b7cd-55cafdeecc19"
    },
    {
        "label": "Nichols College",
        "value": "2a082dac-fdaf-41f8-9633-e76a3f00a68d"
    },
    {
        "label": "Nicolaus Copernicus University",
        "value": "a309596f-4670-45ba-8773-f11794b4c3af"
    },
    {
        "label": "Niigata University",
        "value": "327303ca-99d3-43fa-92fd-d1b8fc3d964b"
    },
    {
        "label": "Norfolk State University",
        "value": "be7688d6-07ef-4dd5-a728-e074f334fa7c"
    },
    {
        "label": "North Carolina A&T State University",
        "value": "f083a42c-a96c-4695-9f3f-9d46cfe5262c"
    },
    {
        "label": "North Carolina Central University",
        "value": "5c7120fa-e8f0-4fa9-8f93-841d074952f7"
    },
    {
        "label": "North Carolina State University - Raleigh",
        "value": "8cdcb051-727f-465e-9d35-88beec6668cb"
    },
    {
        "label": "North Carolina Wesleyan College",
        "value": "197b7b44-b5ee-4ea1-b409-2a9643885488"
    },
    {
        "label": "North Central College",
        "value": "01143f32-ccfd-40ad-a791-c7d75315a014"
    },
    {
        "label": "Northcentral University",
        "value": "8d0202c7-865a-4d3c-9ffa-3f551f481fa6"
    },
    {
        "label": "North Central University",
        "value": "05011c0b-b9da-44e8-9dee-74332022e264"
    },
    {
        "label": "North Dakota State University",
        "value": "6029eb06-07ac-4e78-84ce-0a047cdb8e03"
    },
    {
        "label": "Northeastern Illinois University",
        "value": "6b898e9f-51ca-40dc-af66-f16faaab1095"
    },
    {
        "label": "Northeastern State University",
        "value": "860514ee-6c59-43f4-b1be-8c0efb8f0097"
    },
    {
        "label": "Northeastern University",
        "value": "2c09f3b8-d436-4ff1-bf8e-ab93137c3b00"
    },
    {
        "label": "Northern Arizona University",
        "value": "cd49955a-94b8-426f-a0bf-77ec5312cc46"
    },
    {
        "label": "Northern Illinois University",
        "value": "6c201825-9bb4-42b1-92ef-7db6eeff5387"
    },
    {
        "label": "Northern Kentucky University",
        "value": "6b6eba6c-23ef-4fa1-bc95-9ed723fba2cb"
    },
    {
        "label": "Northern Michigan University",
        "value": "4fceedc8-ca17-49eb-a133-75dc5d8a0a17"
    },
    {
        "label": "Northern New Mexico College",
        "value": "bef847f2-56f2-4442-b36b-0704c8d27c34"
    },
    {
        "label": "Northern State University",
        "value": "0e17955a-887c-4b64-aec7-fc3d20bf7bcf"
    },
    {
        "label": "North Greenville University",
        "value": "2d11eaa3-43b9-4059-9c0b-0de16972034e"
    },
    {
        "label": "Northland College",
        "value": "3b8b6903-01fd-4c7e-8f4a-77191ec9583c"
    },
    {
        "label": "North Park University",
        "value": "8fd22749-d21d-4d3d-ab77-a2378df438fb"
    },
    {
        "label": "Northumbria University at Newcastle",
        "value": "a8a58c0a-a551-488a-9ecd-2e01439bf81e"
    },
    {
        "label": "Northwest Christian University",
        "value": "2dcaf886-7304-4d52-8eb2-e0a1d94f19ba"
    },
    {
        "label": "Northwestern College",
        "value": "90da4ced-441c-411a-be68-9df7f6d29257"
    },
    {
        "label": "Northwestern Health Sciences University",
        "value": "3692c146-807e-4cac-83d6-753541f3133a"
    },
    {
        "label": "Northwestern Oklahoma State University",
        "value": "05d3f28f-9ffc-4c08-9ca5-59f8b2caca6d"
    },
    {
        "label": "Northwestern State University of Louisiana",
        "value": "e528b965-e48e-42cd-9b4e-ad3366fe4849"
    },
    {
        "label": "Northwestern University",
        "value": "5acc6e54-b23c-418b-a5a2-17853aa7c459"
    },
    {
        "label": "Northwest Florida State College",
        "value": "43bef16a-5f19-401f-a772-3f4e548edeff"
    },
    {
        "label": "Northwest Missouri State University",
        "value": "4f8b23c3-04f9-4da3-892f-813d10519bc7"
    },
    {
        "label": "Northwest Nazarene University",
        "value": "517ea1ed-4655-429c-8e5b-13544af2b320"
    },
    {
        "label": "Northwest University",
        "value": "58e154c6-3459-4d54-9525-c3ff1d859dae"
    },
    {
        "label": "Northwood University",
        "value": "80107747-a0cf-4f0d-8087-b11601f2444f"
    },
    {
        "label": "Norwegian University of Science And Technology",
        "value": "2fa122c8-4034-40b1-a487-fcad2ea71dab"
    },
    {
        "label": "Norwich University",
        "value": "0c5795ae-6b7b-44dd-9497-8812d5ecd10b"
    },
    {
        "label": "Notre Dame College of Ohio",
        "value": "9eae05ca-e946-4668-a719-f675e3ecf2ad"
    },
    {
        "label": "Notre Dame de Namur University",
        "value": "edf8b630-339e-47b6-8b4c-631c7d9ed7f4"
    },
    {
        "label": "Notre Dame of Maryland University",
        "value": "5698fc8d-0add-4446-8b65-9ae5d0c7b4ed"
    },
    {
        "label": "Nottingham Trent University",
        "value": "e3dc4704-64db-407b-8f95-9c53712c8751"
    },
    {
        "label": "Nova Scotia College of Art and Design",
        "value": "ee7dc3d1-b9cb-4585-8c03-0ed406eb870a"
    },
    {
        "label": "Nova Southeastern University",
        "value": "26f70993-8a8a-41e4-9134-05f0da9ea974"
    },
    {
        "label": "Novosibirsk State University",
        "value": "2612642c-a048-4252-86d6-26969350db46"
    },
    {
        "label": "Nyack College",
        "value": "38d21ab8-b4a7-419d-966a-624e86533b3f"
    },
    {
        "label": "Oakland City University",
        "value": "f8703a17-2a3b-4b77-8af4-3bca4c17b313"
    },
    {
        "label": "Oakland Community College",
        "value": "d158e4fd-6148-4c43-8834-efc3a710a1b5"
    },
    {
        "label": "Oakland University",
        "value": "e53bc049-2164-49d6-9d12-14bbad0f2ff1"
    },
    {
        "label": "Oakwood University",
        "value": "f1863bb1-0dd7-463d-a6e2-26d5307bc26e"
    },
    {
        "label": "Oberlin College",
        "value": "4b530c64-3904-4a80-9a3e-56cb3ad584f6"
    },
    {
        "label": "Occidental College",
        "value": "f9d69ae3-2e59-469f-8f5a-49110c7993e7"
    },
    {
        "label": "Ochanomizu University",
        "value": "0d4572d1-69c1-4213-9f30-a2f580b680b8"
    },
    {
        "label": "Oglala Lakota College",
        "value": "748aa809-367f-41c0-af29-2fe46a079325"
    },
    {
        "label": "Oglethorpe University",
        "value": "274bcca0-48e7-49b3-a71a-c933db499836"
    },
    {
        "label": "Ohio Christian University",
        "value": "3529350e-3539-4388-8165-962ec01733ec"
    },
    {
        "label": "Ohio Dominican University",
        "value": "e983d953-4bdd-4ee8-91a0-54961d645e9a"
    },
    {
        "label": "Ohio Northern University",
        "value": "789fc8c7-f43a-434d-a710-65416509b333"
    },
    {
        "label": "Ohio State University - Columbus",
        "value": "c01e2240-a48d-4444-aa19-989ba431a2cc"
    },
    {
        "label": "Ohio University",
        "value": "2701d0bc-2df3-4e0a-92ea-486688bb08c2"
    },
    {
        "label": "Ohio Valley University",
        "value": "e5e25272-1a1a-44d2-95e1-6299a9bd3ccf"
    },
    {
        "label": "Ohio Wesleyan University",
        "value": "8575d424-9147-43d8-8daa-5e24dff2be34"
    },
    {
        "label": "Okayama University",
        "value": "f1139108-a593-498e-8baf-c46e0ef40a65"
    },
    {
        "label": "Oklahoma Baptist University",
        "value": "d0997a4c-08d8-4096-baad-f31854bde016"
    },
    {
        "label": "Oklahoma Christian University",
        "value": "1a375fd8-24ae-485a-9abf-41c0fd343b50"
    },
    {
        "label": "Oklahoma City University",
        "value": "d1ac655b-fb7f-4eed-8dc5-d662eefa9b30"
    },
    {
        "label": "Oklahoma Panhandle State University",
        "value": "d1d788e9-6d65-4847-b5e0-f0d1f8098eb9"
    },
    {
        "label": "Oklahoma State University",
        "value": "f1c0e2fe-c0ea-4930-9029-51a7d8bab6d5"
    },
    {
        "label": "Oklahoma State University Institute of Technology - Okmulgee",
        "value": "cd772102-6bc8-48e1-8a4b-0bc05f6ff61f"
    },
    {
        "label": "Oklahoma State University - Oklahoma City",
        "value": "9f6ec95a-99a0-49b6-938f-ebe4af2c0ec8"
    },
    {
        "label": "Oklahoma Wesleyan University",
        "value": "6a3f64d9-6aea-4aac-85ca-456d3e6b1bdd"
    },
    {
        "label": "Old Dominion University",
        "value": "fe6a04ad-4892-49b3-b4a7-f5762566b115"
    },
    {
        "label": "Olive-Harvey College - City Colleges of Chicago",
        "value": "7c372bb9-0166-4035-8108-3a2aba9b6962"
    },
    {
        "label": "Olivet College",
        "value": "af27e55a-af22-4324-b004-c7a4f344a731"
    },
    {
        "label": "Olivet Nazarene University",
        "value": "3c2760e6-b233-4041-9c7c-41ff88ed6a18"
    },
    {
        "label": "Olympic College",
        "value": "fb91192a-b430-4508-b946-05dd2b542154"
    },
    {
        "label": "Ontario Tech University",
        "value": "f1b75cea-0957-4086-85cd-35b1c4930377"
    },
    {
        "label": "Oral Roberts University",
        "value": "eff05969-18e1-4558-bb0d-4d99a0d3ec8e"
    },
    {
        "label": "Oregon College of Art and Craft",
        "value": "736699b0-8cad-4b68-984a-fd51a4b124cb"
    },
    {
        "label": "Oregon Health and Science University",
        "value": "272fa690-1a6e-4aeb-9613-782368e4c77a"
    },
    {
        "label": "Oregon Institute of Technology",
        "value": "08ee682f-7d2d-41cf-aeae-e278f63c8178"
    },
    {
        "label": "Oregon State University",
        "value": "15210dce-aa30-45e6-abb5-9dc9b1bcde2f"
    },
    {
        "label": "Osaka City University",
        "value": "0b53e32e-a66d-41dd-8a8a-a86d7e007344"
    },
    {
        "label": "Osaka Prefecture University",
        "value": "928629d6-9169-46e8-89a0-b1105e65c6f1"
    },
    {
        "label": "Osaka University",
        "value": "80b4ea7d-dc75-4009-b210-9b609703e077"
    },
    {
        "label": "Other",
        "value": "4306cbab-006f-4376-8738-908d64cf0e21"
    },
    {
        "label": "Otis College of Art and Design",
        "value": "b03a4fc8-e723-405f-94f4-df763c297e0f"
    },
    {
        "label": "Ottawa University",
        "value": "7c0a6958-91b3-4c1d-88c8-2d9caac0b89d"
    },
    {
        "label": "Otterbein University",
        "value": "e716a80e-9643-4730-a057-055f7d8f7579"
    },
    {
        "label": "Ouachita Baptist University",
        "value": "02ed6aba-cb1e-495a-aaec-be15bf0224b0"
    },
    {
        "label": "Our Lady of Holy Cross College",
        "value": "d597d3fa-5ba8-4435-8ec9-99b285e12bdc"
    },
    {
        "label": "Our Lady of the Lake College",
        "value": "754b0432-83c2-437c-b541-5fbc1c33ba3c"
    },
    {
        "label": "Our Lady of the Lake University",
        "value": "d4056aab-db2c-4144-bb0c-e360d29a6326"
    },
    {
        "label": "Oxford Brookes University",
        "value": "fcb0e3cc-295b-4446-a773-c635cf9a4991"
    },
    {
        "label": "Pace University",
        "value": "5f0265df-28a3-4ea9-9de3-91812d685a34"
    },
    {
        "label": "Pacific Lutheran University",
        "value": "74b5a444-4ec0-46ea-9df1-82f03661d888"
    },
    {
        "label": "Pacific Northwest College of Art",
        "value": "8cb81219-8cf4-42ae-af20-50d0020891e4"
    },
    {
        "label": "Pacific Oaks College",
        "value": "0f3d5c90-0911-4f78-9044-9b899fdd8c97"
    },
    {
        "label": "Pacific Union College",
        "value": "350de5d9-0796-4cef-a80f-7ee7cc5b5c33"
    },
    {
        "label": "Pacific University",
        "value": "a03579ff-a49a-4572-af51-3261346f96d9"
    },
    {
        "label": "Paine College",
        "value": "5bcedd9c-4501-4774-bc91-e2b6dbdaa983"
    },
    {
        "label": "Palm Beach Atlantic University",
        "value": "332a605a-01c1-4da0-b9a5-c27e2f34121d"
    },
    {
        "label": "Palmer College of Chiropractic",
        "value": "f84c80ac-4aee-4efe-bb5b-2e12b1cf3373"
    },
    {
        "label": "Paris Lodron University of Salzburg",
        "value": "8a39e0c7-162f-486c-85b0-8616f5ff43f0"
    },
    {
        "label": "Parker University",
        "value": "ced77f3b-a595-445d-a5c3-f12dd7f0f298"
    },
    {
        "label": "Park University",
        "value": "cfe049a8-cbba-4f86-b4a8-a8c871aaa507"
    },
    {
        "label": "Patten University",
        "value": "e08412e7-18d9-42cd-8a68-6bc764e0d105"
    },
    {
        "label": "Paul Smith's College",
        "value": "af10f2c5-c4d7-46be-98df-4bbd9e1e2efd"
    },
    {
        "label": "Peirce College",
        "value": "162c8dd9-6937-4482-8030-79e00e948faa"
    },
    {
        "label": "Peking University",
        "value": "132e395e-7dea-4e9b-9e68-e165cce78e37"
    },
    {
        "label": "Peninsula College",
        "value": "2411965c-c606-4a48-ad49-9274a25f9804"
    },
    {
        "label": "Pennsylvania College of Art and Design",
        "value": "b4619c90-dabe-4ea9-a8b9-8f6bd48be777"
    },
    {
        "label": "Pennsylvania College of Technology",
        "value": "42b0d6c9-4741-446c-8424-a990b1abea5c"
    },
    {
        "label": "Pennsylvania State University - Erie, The Behrend College",
        "value": "6ff0eaad-04b4-4af0-afa7-c747e45b26bb"
    },
    {
        "label": "Pennsylvania State University - Harrisburg",
        "value": "3054d3af-ba73-49c1-9b3e-d16a4873b469"
    },
    {
        "label": "Pennsylvania State University - University Park",
        "value": "16c22312-c717-4db8-8095-036cb8463c25"
    },
    {
        "label": "People's Friendship University of Russia",
        "value": "2d22ba95-5e77-4ed4-94dc-a07ba73693e5"
    },
    {
        "label": "Pepperdine University",
        "value": "74c208bc-bd80-4df0-ba4a-b888ce832c78"
    },
    {
        "label": "Perugia University",
        "value": "31554ca3-f33f-40b9-9fcc-14fe3393c4fc"
    },
    {
        "label": "Peru State College",
        "value": "fcf143a5-c95b-4239-946e-dcbcbc74705f"
    },
    {
        "label": "Pfeiffer University",
        "value": "1d47c272-a3ad-4063-9194-aa86a32f2a84"
    },
    {
        "label": "Philadelphia University",
        "value": "d1bbb888-4496-464b-af9d-a6a78d7db362"
    },
    {
        "label": "Philander Smith College",
        "value": "3a81a1e7-c451-46c8-bc8c-2c6d835b06ba"
    },
    {
        "label": "Philipps-Universität Marburg",
        "value": "9fa8e2b0-9b5a-4e0a-b643-e547949e0051"
    },
    {
        "label": "Piedmont College",
        "value": "c016363c-97bb-4faa-85c5-609dbecfa213"
    },
    {
        "label": "Pine Manor College",
        "value": "77ef4665-95a4-44d8-9a57-90515154f60c"
    },
    {
        "label": "Pittsburg State University",
        "value": "bcd36a3f-c294-4a92-92e8-ed5fd589c6c3"
    },
    {
        "label": "Pitzer College",
        "value": "c35ccce5-6bfc-408c-867f-de7bd8a03a77"
    },
    {
        "label": "Plaza College",
        "value": "9e2c326d-07c2-4d5a-8b8d-756a9eb9de71"
    },
    {
        "label": "Plekhanov Russian University of Economics",
        "value": "a73ed79f-0387-40c9-b60d-ad25a293e824"
    },
    {
        "label": "Plymouth State University",
        "value": "7b9040d0-5d14-4aca-80b3-b1ada52d25ea"
    },
    {
        "label": "Pohang University of Science And Technology (POSTECH)",
        "value": "bbf3a29d-1cb1-4a0a-9ce7-a249b3306f79"
    },
    {
        "label": "Point Loma Nazarene University",
        "value": "2ba3c268-de51-489c-b5c0-8ae24092b868"
    },
    {
        "label": "Point Park University",
        "value": "1581ca0a-739e-4b47-8f5e-6602e24a39de"
    },
    {
        "label": "Point University",
        "value": "2117ced6-4be5-40f6-9779-8ecb9796d189"
    },
    {
        "label": "Politécnica de Madrid",
        "value": "8c88d2c6-d581-45ab-9a53-7b26a60903bd"
    },
    {
        "label": "Politecnico di Milano",
        "value": "647febc5-95f9-45a0-aa5b-626a77ddd373"
    },
    {
        "label": "Politecnico di Torino",
        "value": "42b15e6f-d2e8-466a-8050-3046edd91a91"
    },
    {
        "label": "Polytechnic Institute of New York University",
        "value": "b84637d8-27cd-4a48-975a-6d5fa4d9a1d7"
    },
    {
        "label": "Pomona College",
        "value": "593440ad-5fd5-48c9-8155-a5c8f76e80a2"
    },
    {
        "label": "Pontifical Catholic University of Puerto Rico",
        "value": "8001b3f1-7a4e-4934-bf53-5fd01f1980df"
    },
    {
        "label": "Pontifical College Josephinum",
        "value": "564e8718-ed6e-426e-afd2-d1098bfe825c"
    },
    {
        "label": "Pontificia Universidad Católica Argentina Santa María de los Buenos Aires",
        "value": "525f8e73-04b1-462d-abfc-2f8cd83f2f06"
    },
    {
        "label": "Pontificia Universidad Católica de Chile",
        "value": "b6caa0b3-0a3a-4962-bba2-0598b2b9f719"
    },
    {
        "label": "Pontificia Universidad Catolica del Ecuador",
        "value": "f623eb7e-a21c-4cdd-8a2a-6545fc6e5e24"
    },
    {
        "label": "Pontificia Universidad Católica del Perú",
        "value": "28baf397-d620-4643-91a9-114dac4f8506"
    },
    {
        "label": "Pontificia Universidad Católica de Valparaíso",
        "value": "f0d78350-3b0a-4fec-ad8d-080be6749bdc"
    },
    {
        "label": "Pontifícia Universidade Católica de Minas Gerais",
        "value": "f2770c22-7dd8-4c27-a818-ce7659358a72"
    },
    {
        "label": "Pontificia Universidade Católica de São Paulo (PUC -SP)",
        "value": "d3f56832-d352-4d85-b1cd-2f531f97a2da"
    },
    {
        "label": "Pontificia Universidade Católica do Rio de Janeiro (PUC - Rio)",
        "value": "e2460e25-bbaf-4548-b5bf-a6dcab9709a3"
    },
    {
        "label": "Pontificia Universidade Católica do Rio Grande do Sul",
        "value": "19237f89-ca98-41f7-ad46-3a207aff9abc"
    },
    {
        "label": "Pontificia Universidad Javeriana",
        "value": "0e18583b-e868-47af-8e53-3865643f04dd"
    },
    {
        "label": "Portland State University",
        "value": "78225f45-7f12-4784-9913-4825f939ba85"
    },
    {
        "label": "Post University",
        "value": "3d88650f-6649-4d1c-b964-cbd3a7fc5cc9"
    },
    {
        "label": "Potomac College",
        "value": "b4d172c8-eeda-47a5-ab10-32e9805b6031"
    },
    {
        "label": "Prairie View A&M University",
        "value": "52b4ddc2-0c53-4f51-8fca-87b4bee1d7d8"
    },
    {
        "label": "Pratt Institute",
        "value": "d1f0b6bd-0a9f-4503-934c-f3b5d057feee"
    },
    {
        "label": "Presbyterian College",
        "value": "8e71fbbf-3e24-4157-aa6d-97bf38324cc0"
    },
    {
        "label": "Prescott College",
        "value": "459d5778-4364-4831-aeee-9b76b00c343e"
    },
    {
        "label": "Presentation College",
        "value": "677b8ba1-9839-4467-a75e-a3de4999ce7b"
    },
    {
        "label": "Presidio Graduate School",
        "value": "b369d828-b313-4250-9d0e-e2ece3198466"
    },
    {
        "label": "Prince of Songkla University",
        "value": "8145bf05-f592-4443-9d37-95e1adf29ca7"
    },
    {
        "label": "Princeton University",
        "value": "8b1337af-af8b-43b6-b50a-9d939f8f73b2"
    },
    {
        "label": "Principia College",
        "value": "36422486-926d-4c48-8052-708ff7f7430b"
    },
    {
        "label": "Providence College",
        "value": "c1fff33a-60c5-45c6-b63d-8152d1c6ab8d"
    },
    {
        "label": "Puerto Rico Conservatory of Music",
        "value": "e8c234a5-3c18-4d63-b2df-4950a2efc367"
    },
    {
        "label": "Purchase College - SUNY",
        "value": "a5f4808e-6b6c-40b6-80af-85eee9cfd9bb"
    },
    {
        "label": "Purdue University - Calumet",
        "value": "1b56a6db-e65a-498a-952c-045ba14896fa"
    },
    {
        "label": "Purdue University - North Central",
        "value": "9f7088ea-efe5-45bd-a053-a126ed38450a"
    },
    {
        "label": "Purdue University - West Lafayette",
        "value": "242c83ac-7aba-494a-a313-7d91ac991f94"
    },
    {
        "label": "Pusan National University",
        "value": "45d1288f-17a9-41f2-a286-17526ad9d07e"
    },
    {
        "label": "Qafqaz University",
        "value": "1bd23318-846c-4703-8ca6-284089a659ad"
    },
    {
        "label": "Qatar University",
        "value": "699b40ef-518c-436f-8fe1-1df55f16e459"
    },
    {
        "label": "Queen Mary, University of London (QMUL)",
        "value": "4b751bac-05c7-4844-8867-e5221242f671"
    },
    {
        "label": "Queensland University of Technology",
        "value": "a0d1fb14-377b-4fd2-b86a-22a7eedec566"
    },
    {
        "label": "Queen's University of Belfast",
        "value": "539b8333-c1e8-460d-b7ff-088b0118ef32"
    },
    {
        "label": "Queens University of Charlotte",
        "value": "cceb21e0-5c13-4a97-ba20-af56c139cfd0"
    },
    {
        "label": "Queen's University, Ontario",
        "value": "bbaf6870-846f-41d4-83e9-50fcef875f13"
    },
    {
        "label": "Quincy University",
        "value": "f3638af3-708c-4e12-8bbd-d709cd9300e0"
    },
    {
        "label": "Quinnipiac University",
        "value": "a53adcea-b435-404b-b6d7-da285649a650"
    },
    {
        "label": "Radboud University Nijmegen",
        "value": "45aa2bac-a30c-4818-bb85-2c9d78096200"
    },
    {
        "label": "Radford University",
        "value": "2cdce9ae-c1b7-4dcc-b49d-a1cee39bf336"
    },
    {
        "label": "Ramapo College of New Jersey",
        "value": "b85e2388-ee15-4ba2-9595-14d5e8afebb2"
    },
    {
        "label": "Randolph College",
        "value": "f6b70e2c-1252-4f14-a32c-8041eb6f6fad"
    },
    {
        "label": "Randolph-Macon College",
        "value": "9d9af2fc-19a7-46d2-8425-debcd8520434"
    },
    {
        "label": "Ranken Technical College",
        "value": "86091d15-2cc8-4066-90aa-2e0fd33277c3"
    },
    {
        "label": "Reed College",
        "value": "14662a3f-eeac-4bb2-b524-dc5ae387cda6"
    },
    {
        "label": "Regent's American College London",
        "value": "874087d5-3e31-42b7-accd-75012627cf48"
    },
    {
        "label": "Regent University",
        "value": "1c67bbdf-6e7d-49cf-86d0-bda440e069a3"
    },
    {
        "label": "Regis College",
        "value": "e99767b1-eb01-4dfd-9995-70e5ba9330d1"
    },
    {
        "label": "Regis University",
        "value": "2ecac473-fffb-4c92-ad2b-7e45a6db3e3a"
    },
    {
        "label": "Reinhardt University",
        "value": "8d8a2d63-2134-4b3f-a5ff-a4a8a62bb05c"
    },
    {
        "label": "Renmin (People’s) University of China",
        "value": "56814b82-c8fd-4d5c-a49b-c293e52d0b9c"
    },
    {
        "label": "Rensselaer Polytechnic Institute",
        "value": "5f4a7d92-29d5-4f58-a9cb-dc89ce9da1a9"
    },
    {
        "label": "Republic Polytechnic (RP)",
        "value": "206d7705-bab8-4ae1-9eac-1b668f109667"
    },
    {
        "label": "Research College of Nursing",
        "value": "f0316f0c-63e3-4067-b9d9-1479c61de1a3"
    },
    {
        "label": "Resurrection University",
        "value": "03cd3c94-8016-4165-bea5-f1a3f0991138"
    },
    {
        "label": "Rheinische Friedrich-Wilhelms-Universität Bonn",
        "value": "b106ef56-a5ea-454f-a99f-119f1c8dea52"
    },
    {
        "label": "Rheinisch-Westfälische Technische Hochschule Aachen",
        "value": "238b344d-0c8a-451e-898b-210db709b7ad"
    },
    {
        "label": "Rhode Island College",
        "value": "7061bc46-75d7-4709-be3d-e1d9c32e0707"
    },
    {
        "label": "Rhode Island School of Design",
        "value": "72c9d0d3-6a90-4bea-8a94-a48d98cd5beb"
    },
    {
        "label": "Rhodes College",
        "value": "0cebf073-01f7-4c85-bf73-ba96428919e9"
    },
    {
        "label": "Rhodes University",
        "value": "d9816559-31df-40fb-a0ac-8a8c7ca51408"
    },
    {
        "label": "Rice University",
        "value": "60745b93-c2e2-46e5-a635-407404685b23"
    },
    {
        "label": "Richard J Daley College -  City Colleges of Chicago",
        "value": "10d7ec89-1fba-40f4-a2b4-562ba5fbf69f"
    },
    {
        "label": "Richard Stockton College of New Jersey",
        "value": "1a7a0f40-a9d9-4a98-b1ea-3ad2ba1e6fd4"
    },
    {
        "label": "Richmond - The American International University in London",
        "value": "38981aeb-a1d8-43bc-b4a9-206e756238b0"
    },
    {
        "label": "Rider University",
        "value": "b2c940ef-02a0-4541-a201-10f6bc12c600"
    },
    {
        "label": "Ringling College of Art and Design",
        "value": "de9357ea-4fd2-424d-af7f-f7a03099c49c"
    },
    {
        "label": "Ripon College",
        "value": "a987c4ed-0a62-4676-87fa-a62accdabf17"
    },
    {
        "label": "Ritsumeikan University",
        "value": "e2b35391-6ecd-49f6-951a-47bed37096ce"
    },
    {
        "label": "Rivier University",
        "value": "6d990194-fa0f-4fa5-b313-4125687c6a7a"
    },
    {
        "label": "RMIT University",
        "value": "7f2a82f2-7f18-45a8-88be-3960c9345cf0"
    },
    {
        "label": "Roanoke College",
        "value": "dad3d39d-8080-4b9c-b1d4-a40aca6c6a00"
    },
    {
        "label": "Robert B. Miller College",
        "value": "752b8985-a46f-4c18-be95-a76c962f5d29"
    },
    {
        "label": "Robert Morris University",
        "value": "404db354-3b0a-4778-ad9d-ffaa5bf0ceaf"
    },
    {
        "label": "Robert Morris University Illinois",
        "value": "efd7e831-0ccb-40d7-a308-9603ee9bf3c8"
    },
    {
        "label": "Roberts Wesleyan College",
        "value": "9e88adfb-3145-4f4d-8382-5892f3700b1e"
    },
    {
        "label": "Rochester College",
        "value": "35458f9e-2ae6-4e53-9cf0-abe81e95169b"
    },
    {
        "label": "Rochester Institute of Technology",
        "value": "96313b66-2c69-48c1-868c-751c322938b5"
    },
    {
        "label": "Rockford University",
        "value": "479e3802-98cd-44a6-967f-c75eadd8fe63"
    },
    {
        "label": "Rockhurst University",
        "value": "f9d33dfe-45f9-43c1-a7de-6e0ddaa517b2"
    },
    {
        "label": "Rocky Mountain College",
        "value": "5adbc972-640b-4d10-8c0c-3a2ca864b2a6"
    },
    {
        "label": "Rocky Mountain College of Art and Design",
        "value": "98432542-2584-4dbe-aa53-59b31c4c7213"
    },
    {
        "label": "Rogers State University",
        "value": "642efbe1-3648-4c69-9ef1-ea888f363a53"
    },
    {
        "label": "Roger Williams University",
        "value": "3ad4ab3d-cc43-4b02-8646-096e480530ab"
    },
    {
        "label": "Rollins College",
        "value": "29fb4007-47d3-48db-8c6f-a6f54bb35dc0"
    },
    {
        "label": "Roosevelt University",
        "value": "d4caa8e9-6ed7-4e57-96db-821998483e4a"
    },
    {
        "label": "Rosalind Franklin University of Medicine and Science",
        "value": "58e651af-c669-4b27-b7f1-28b2c70b06cc"
    },
    {
        "label": "Rose-Hulman Institute of Technology",
        "value": "0dd29de6-0739-455b-aadb-0671326227fd"
    },
    {
        "label": "Rosemont College",
        "value": "d6277ba5-6c52-44dc-b6d3-a4e7e6947eab"
    },
    {
        "label": "Rowan University",
        "value": "bd4d8fbf-c1fd-43bf-a092-d90b73adcda3"
    },
    {
        "label": "Royal Holloway, University of London",
        "value": "46a6e2a3-8fcc-4a42-9bbc-54c320716205"
    },
    {
        "label": "Ruhr-Universität Bochum",
        "value": "2b5e9f09-3107-4300-904f-2f0f319e2fd0"
    },
    {
        "label": "Ruprecht-Karls-Universität Heidelberg",
        "value": "76e91f5c-877b-4d84-8cef-4042fe2f2186"
    },
    {
        "label": "Rush University",
        "value": "536cba21-82fa-42b1-9e67-9966ed1169e5"
    },
    {
        "label": "Rust College",
        "value": "6d0b2965-f42d-4d7c-a09a-e70ead3a19f1"
    },
    {
        "label": "Rutgers, the State University of New Jersey - Camden",
        "value": "3add1fc6-1c00-4cfd-8bd2-7d669663bc56"
    },
    {
        "label": "Rutgers, the State University of New Jersey - Newark",
        "value": "43212aba-e919-48fd-968c-453fda3bd846"
    },
    {
        "label": "Rutgers, the State University of New Jersey - New Brunswick",
        "value": "ed8b3083-18fe-4259-a501-2fcc700f0eeb"
    },
    {
        "label": "Sabanci University",
        "value": "fd0de6a9-c556-411e-9264-1932d7da6325"
    },
    {
        "label": "Sacramento City College",
        "value": "645d63ad-cfc1-4ce0-8be9-cf1fcd394eb5"
    },
    {
        "label": "Sacred Heart Major Seminary",
        "value": "9db96afb-5197-4a2e-9cbe-809be6536b08"
    },
    {
        "label": "Sacred Heart University",
        "value": "17193131-702c-424d-8adf-1aa2b7e0c9c4"
    },
    {
        "label": "Saginaw Valley State University",
        "value": "1a10b51d-93be-42a0-ac8a-69ca0d2fb197"
    },
    {
        "label": "Saint-Petersburg State University",
        "value": "54e39069-5103-40d4-afd3-5a07027d01bd"
    },
    {
        "label": "Saitama University",
        "value": "e5892dd9-5324-4674-b3a8-819629c187b5"
    },
    {
        "label": "Salem College",
        "value": "8998ec41-ffec-4910-a28a-9b6eaa754447"
    },
    {
        "label": "Salem International University",
        "value": "2f5c3f6e-5ef8-4e3b-b03e-753139c4ec73"
    },
    {
        "label": "Salem State University",
        "value": "486472fd-7938-4dc5-8a36-dd5126d6dab8"
    },
    {
        "label": "Salisbury University",
        "value": "789b5aae-874c-4069-8a6a-ee625ffc6fba"
    },
    {
        "label": "Salish Kootenai College",
        "value": "c2a6680e-f635-4443-9a68-a5ef063f41a9"
    },
    {
        "label": "Salve Regina University",
        "value": "e84e28fa-a7f7-4c45-bd87-7b46ebc1a9af"
    },
    {
        "label": "Samford University",
        "value": "02abe92a-c209-4b3b-8e75-d1d63608fb5b"
    },
    {
        "label": "Sam Houston State University",
        "value": "5e288fb0-a3ab-4027-ba70-811c603454e2"
    },
    {
        "label": "Samuel Merritt University",
        "value": "e8dab3ca-6e8d-452c-9168-8e1df5acf383"
    },
    {
        "label": "San Diego Christian College",
        "value": "81150ae9-b6f4-482e-b39c-8fe8dcfaa519"
    },
    {
        "label": "San Diego State University",
        "value": "7b6686e9-1d58-4cc5-890e-b2a484995186"
    },
    {
        "label": "Sanford College of Nursing",
        "value": "945bf481-e509-4e51-b372-502049518e72"
    },
    {
        "label": "San Francisco Art Institute",
        "value": "84d8dd61-edc0-4960-9d7d-f2de6999a17a"
    },
    {
        "label": "San Francisco Conservatory of Music",
        "value": "a4e01817-5579-4961-866d-cd97acda2e8f"
    },
    {
        "label": "San Francisco State University",
        "value": "e0703de8-761a-4c7c-b8d8-95a5daaaaac2"
    },
    {
        "label": "San Jose State University",
        "value": "e7035773-43c3-4ee6-80b0-ed3524e67d36"
    },
    {
        "label": "Santa Barbara City College",
        "value": "2006b6b4-1b9e-48cf-9d3e-77594c08cbff"
    },
    {
        "label": "Santa Clara University",
        "value": "341c057b-614a-44ee-9a92-74f1daab5796"
    },
    {
        "label": "Santa Fe University of Art and Design",
        "value": "5e514ccd-6965-481e-970c-5006ea7543fd"
    },
    {
        "label": "Sapienza University of Rome",
        "value": "e2223e55-1551-48d9-9376-0ad798b91fa8"
    },
    {
        "label": "Sarah Lawrence College",
        "value": "5a075413-5715-4f31-8f0b-4961dec3972a"
    },
    {
        "label": "Savannah College of Art and Design",
        "value": "ca012fa6-4c96-4e26-8f5e-84e63ecc350f"
    },
    {
        "label": "Savannah State University",
        "value": "d9b5355d-ec7d-4347-90a5-a578a1d2ba1b"
    },
    {
        "label": "School of the Art Institute of Chicago",
        "value": "1ecb914a-3061-4f8c-8ce2-021cb0c13a01"
    },
    {
        "label": "School of Visual Arts",
        "value": "81ce68d3-73b1-484d-b44b-31245cb3641c"
    },
    {
        "label": "Schreiner University",
        "value": "71a5fb87-83a9-40a2-a0bd-40b0887e62d7"
    },
    {
        "label": "Sciences Po Paris",
        "value": "ae93f6d1-9c46-42e1-9457-41e6f1dba6b6"
    },
    {
        "label": "Scripps College",
        "value": "8a9579c4-07ef-4f1f-ad33-8c3aa9569c6e"
    },
    {
        "label": "Seattle Pacific University",
        "value": "fe2e2aae-4836-4206-94bb-f6aa491ee5e4"
    },
    {
        "label": "Seattle University",
        "value": "1b7016eb-76f8-4792-a2bd-540e46522b43"
    },
    {
        "label": "Seoul National University",
        "value": "06b1e09b-bef3-4eca-ad56-01d86e17a8e5"
    },
    {
        "label": "Sepuluh Nopember Institute of Technology",
        "value": "4c7f27c6-7c07-407c-8816-1cf01e1cbde7"
    },
    {
        "label": "Seton Hall University",
        "value": "439cd8d4-da3d-42ab-be9d-18cd1cbb73e5"
    },
    {
        "label": "Seton Hill University",
        "value": "787ceb5f-2c19-4f46-8b46-a6d985324416"
    },
    {
        "label": "Sewanee - University of the South",
        "value": "0bfd919a-9194-48ec-9016-0641265db004"
    },
    {
        "label": "Shandong University",
        "value": "83baf517-25e5-40c0-bc8f-f75d340c8589"
    },
    {
        "label": "Shanghai Jiao Tong University",
        "value": "6cfd06d4-4159-49c6-8aef-6819ae2403fb"
    },
    {
        "label": "Shanghai University",
        "value": "207ee251-23e4-4b89-8ee6-b8f3bfdf29b5"
    },
    {
        "label": "Shanghai University of Finance and Economics",
        "value": "0c7dbbdc-c211-4bbe-a501-3d25f76df92b"
    },
    {
        "label": "Sharif University of Technology",
        "value": "9156f563-55ec-49f0-9dcf-04ed1cd20dbe"
    },
    {
        "label": "Shawnee State University",
        "value": "d58f3433-ebe5-485f-a2e5-fbf5db51da10"
    },
    {
        "label": "Shaw University",
        "value": "b1406952-b1e6-48b8-805f-4179c5b362db"
    },
    {
        "label": "Shenandoah University",
        "value": "faa29883-eb1b-42b3-91c1-e542074cf4b8"
    },
    {
        "label": "Shepherd University",
        "value": "8540ea4a-79a2-40f9-8dc1-10351e36c5ab"
    },
    {
        "label": "Shimer College",
        "value": "ad871aac-61e0-4343-a655-7257d2058874"
    },
    {
        "label": "Shinshu University",
        "value": "7d466fec-d368-47d3-8f6e-5c157bbdad66"
    },
    {
        "label": "Shippensburg University of Pennsylvania",
        "value": "575df730-91a2-471a-8c8a-187da24929c0"
    },
    {
        "label": "Shorter University",
        "value": "df26f359-da08-4f7a-8607-ddfd2bf93fb5"
    },
    {
        "label": "Siena College",
        "value": "85c4e7b0-5481-438b-b51c-8da27375641c"
    },
    {
        "label": "Siena Heights University",
        "value": "ce17283b-e94e-458a-8209-19f02dbd2e27"
    },
    {
        "label": "Sierra Nevada College",
        "value": "c52c7f75-53a0-4317-b2ae-ac4b64d26dcd"
    },
    {
        "label": "Silver Lake College",
        "value": "cb6d25f3-a8a6-42dc-91d4-537f47575b29"
    },
    {
        "label": "Simmons College",
        "value": "d8476a24-c3b3-4178-a83f-8b58b33c6070"
    },
    {
        "label": "Simon Fraser University",
        "value": "42dddae9-afcc-4c67-b181-27ccdae2e1d3"
    },
    {
        "label": "Simpson College",
        "value": "87a9e554-da8a-4d78-a8a7-104858e0a1cb"
    },
    {
        "label": "Simpson University",
        "value": "29957889-2723-4330-959c-d8ee8fd2e2bc"
    },
    {
        "label": "SIM University (UniSIM)",
        "value": "7416a8be-e6af-4699-b043-5b6797318300"
    },
    {
        "label": "Singapore Institute of Technology (SIT)",
        "value": "9a4cdb53-42f0-43d8-ba4c-399c17a890db"
    },
    {
        "label": "Singapore Management University (SMU)",
        "value": "31450357-af2b-4b93-a13e-445f6ed30861"
    },
    {
        "label": "Singapore Polytechnic (SP)",
        "value": "1b716e22-3f76-43a4-adad-1e9c8fa80f35"
    },
    {
        "label": "Singapore University of Technology and Design (SUTD)",
        "value": "9d26c06f-0e12-4426-af0f-809e178e2a31"
    },
    {
        "label": "Sinte Gleska University",
        "value": "493d4890-d993-491e-b57b-de7ec3dad4d8"
    },
    {
        "label": "Sitting Bull College",
        "value": "94e1e34c-4205-4e98-bc85-a5dade31e8ce"
    },
    {
        "label": "Skidmore College",
        "value": "e03ae354-58b4-4c30-895a-aa4a7b6a19e0"
    },
    {
        "label": "Slippery Rock University of Pennsylvania",
        "value": "219fe139-cb90-45fc-9ea9-ac05ef6af6a2"
    },
    {
        "label": "Smith College",
        "value": "764f6dbf-f7f9-4a16-b26a-2019b50bf9be"
    },
    {
        "label": "SOAS - School of Oriental and African Studies, University of London",
        "value": "cba97661-7d08-43f2-8fff-98bc125aae06"
    },
    {
        "label": "Sogang University",
        "value": "6bfaf88e-52f3-48d2-8a58-22cb5ddc8d6f"
    },
    {
        "label": "Sojourner-Douglass College",
        "value": "54663bd2-66b3-4395-8b08-695f66f03e3b"
    },
    {
        "label": "Soka University of America",
        "value": "fab951fe-508c-4469-83b3-9c0910c3095d"
    },
    {
        "label": "Sonoma State University",
        "value": "5bd1e575-e0d7-4870-b3a7-3571ecfdc768"
    },
    {
        "label": "South Carolina State University",
        "value": "7c7739a1-2fc2-46a9-9b6c-3208c1accfd3"
    },
    {
        "label": "South College",
        "value": "cc0ace77-62f4-4c3a-93a5-f1b034b3c18c"
    },
    {
        "label": "South Dakota School of Mines and Technology",
        "value": "3da85852-1bc9-4bf1-bdb9-3ffe7183e832"
    },
    {
        "label": "South Dakota State University",
        "value": "b2f85a9b-9315-4976-8db8-7bc0d9f1e960"
    },
    {
        "label": "Southeastern Louisiana University",
        "value": "77b21e36-9f89-4f2c-a008-2789f4bb3027"
    },
    {
        "label": "Southeastern Oklahoma State University",
        "value": "26d717c1-4eca-454c-92c5-8921d4c335d0"
    },
    {
        "label": "Southeastern University",
        "value": "26296870-624e-48bd-9d5b-4e34fc2be872"
    },
    {
        "label": "Southeast Missouri State University",
        "value": "84ed2f70-e98a-4940-b752-2d75b1eced9d"
    },
    {
        "label": "Southeast University",
        "value": "43b0472a-a353-4831-8fc4-9a84cf928bff"
    },
    {
        "label": "Southern Adventist University",
        "value": "37f3b017-2d7d-407d-a41a-1a3a92504212"
    },
    {
        "label": "Southern Alberta Institute of Technology",
        "value": "8dbb21a0-60e8-4ee1-b6bc-d5250ebed3cf"
    },
    {
        "label": "Southern Arkansas University",
        "value": "28c336dc-86ed-42f4-8aa4-7ae111eb7bac"
    },
    {
        "label": "Southern Baptist Theological Seminary",
        "value": "3ca08f7d-49ae-45fb-b865-dafb3991f133"
    },
    {
        "label": "Southern California Institute of Architecture",
        "value": "9bb25dc1-3032-4cd8-a756-e6ed39e6d179"
    },
    {
        "label": "Southern Connecticut State University",
        "value": "2b02680d-f563-4e83-aa63-408a9e77e5fc"
    },
    {
        "label": "Southern Federal University",
        "value": "19bb44e3-3384-4134-a7dc-14eb4967cdc8"
    },
    {
        "label": "Southern Illinois University - Carbondale",
        "value": "0daaa7b5-fc91-48c6-893d-34fc784b1176"
    },
    {
        "label": "Southern Illinois University - Edwardsville",
        "value": "6c17a992-b99b-45a5-8125-05facc3e58d4"
    },
    {
        "label": "Southern Methodist University",
        "value": "e08b3eca-77b0-4acf-a508-5dc80346a60c"
    },
    {
        "label": "Southern Nazarene University",
        "value": "09589e0e-c824-4fd2-978f-94ddae07deb3"
    },
    {
        "label": "Southern New Hampshire University",
        "value": "944f3c21-6472-48f2-a7a9-1ee045cc3c75"
    },
    {
        "label": "Southern Oregon University",
        "value": "6d815a98-499e-415f-a40f-e47b34f49f2e"
    },
    {
        "label": "Southern Polytechnic State University",
        "value": "5333e831-c894-4dfb-b832-76cf410166e3"
    },
    {
        "label": "Southern University and A&M College",
        "value": "69c19130-8d26-41af-873c-0e2bc29bb121"
    },
    {
        "label": "Southern University - New Orleans",
        "value": "a78f5bc9-365f-47ee-8dbb-e3b37c4ce3b5"
    },
    {
        "label": "Southern Utah University",
        "value": "449ca439-ca88-4879-b70f-389ce0959da3"
    },
    {
        "label": "Southern Vermont College",
        "value": "c817d1d4-4069-4624-9e3a-03b58d166c96"
    },
    {
        "label": "Southern Wesleyan University",
        "value": "81975626-8e48-4487-b97a-81cad07f06d7"
    },
    {
        "label": "South Kazakhstan State University (SKSU)",
        "value": "ce48c841-298e-4d96-8439-536750842c24"
    },
    {
        "label": "South Seattle Community College",
        "value": "bd89ddbf-3f58-4d3a-b32e-d387f08c1582"
    },
    {
        "label": "South Texas College",
        "value": "7e89ca80-38f6-4c6a-85e1-4fb5e7818ebb"
    },
    {
        "label": "South University",
        "value": "0c225c39-edd6-4368-8dbf-f8a90f16a1f5"
    },
    {
        "label": "Southwest Baptist University",
        "value": "658b4b8a-17bf-4324-a021-6ea05ff84907"
    },
    {
        "label": "Southwestern Adventist University",
        "value": "f58a5e26-89a0-4f16-9ccc-52042c6f624c"
    },
    {
        "label": "Southwestern Assemblies of God University",
        "value": "699e2c03-b7ca-47c3-9a44-bb55996e431f"
    },
    {
        "label": "Southwestern Christian College",
        "value": "9d178a13-9052-4d33-83f7-6f8f21eaaf99"
    },
    {
        "label": "Southwestern Christian University",
        "value": "09928a1e-c592-4269-b997-2f786fdb89cd"
    },
    {
        "label": "Southwestern College",
        "value": "0428b8c7-15f2-456c-afc6-f4ce782b9543"
    },
    {
        "label": "Southwestern Oklahoma State University",
        "value": "ebd75541-4669-47d1-a636-e2c4aa0a83b6"
    },
    {
        "label": "Southwestern University",
        "value": "f7bb7db8-e3c3-4f1f-a95f-a9b8fb358de3"
    },
    {
        "label": "Southwest Minnesota State University",
        "value": "35677b20-a7a8-4fda-9132-8ab387cf1060"
    },
    {
        "label": "Southwest University of Visual Arts",
        "value": "130f81aa-769b-4068-a23b-77edef89a159"
    },
    {
        "label": "Spalding University",
        "value": "13cb1e92-94f3-4cf0-8fb7-146b70501d64"
    },
    {
        "label": "Spelman College",
        "value": "f2850696-bbba-46bf-8a28-52d8f18bf5eb"
    },
    {
        "label": "Spring Arbor University",
        "value": "2d95f07f-e42b-46da-9201-7c44309184d0"
    },
    {
        "label": "Springfield College",
        "value": "e2a74b27-789c-42dc-a45d-fc8d89006afa"
    },
    {
        "label": "Spring Hill College",
        "value": "4d4e1f21-5eeb-43a4-846b-0c6cd19a9c43"
    },
    {
        "label": "S.Seifullin Kazakh Agro Technical University",
        "value": "3ce47393-85a9-4d51-a3a0-52124a7f968f"
    },
    {
        "label": "St. Ambrose University",
        "value": "f4ad70ee-636d-4c15-835e-0f0cf14ab2a8"
    },
    {
        "label": "Stanford University",
        "value": "723f94e6-99b9-4d9d-87e6-3953b14a29e1"
    },
    {
        "label": "St. Anselm College",
        "value": "8c4a5f5c-361e-4f6b-8df9-6a8929b653db"
    },
    {
        "label": "St. Anthony College of Nursing",
        "value": "360ecd72-ee2d-45c5-bdb3-62a349e49a42"
    },
    {
        "label": "St. Augustine College",
        "value": "e520b28d-f78a-4e25-bab2-39a0a08b8e47"
    },
    {
        "label": "St. Augustine's University",
        "value": "8b6e3a97-7649-4b24-be20-619c9daf910e"
    },
    {
        "label": "St. Bonaventure University",
        "value": "65f85469-de29-47d7-9922-a3ccd49c7e8a"
    },
    {
        "label": "St. Catharine College",
        "value": "349b0504-d387-47ad-81ed-298d959a05b0"
    },
    {
        "label": "St. Catherine University",
        "value": "f78896da-3099-4632-8d71-f9e25b6563e8"
    },
    {
        "label": "St. Charles Borromeo Seminary",
        "value": "f120f0af-436e-48f0-8003-754fb8f7db41"
    },
    {
        "label": "St. Cloud State University",
        "value": "f58a932c-35d9-4548-9a5f-cb4a0cba0305"
    },
    {
        "label": "St. Edward's University",
        "value": "5f47d276-77b4-42f6-a558-23b85dc76d09"
    },
    {
        "label": "Stellenbosch University",
        "value": "ea1e5624-1854-48c8-afb2-5301ba848250"
    },
    {
        "label": "Stephen F. Austin State University",
        "value": "a69a19da-57e8-4d29-9d73-849f9d1d16fa"
    },
    {
        "label": "Stephens College",
        "value": "22c41aba-67ce-444c-9cf2-10b0ab6f0df3"
    },
    {
        "label": "Sterling College",
        "value": "8d2f9276-3ecd-4c1e-9628-dbfe4822f5d8"
    },
    {
        "label": "Stetson University",
        "value": "1a8f5bec-c60e-4963-9101-398b81be2bcd"
    },
    {
        "label": "Stevens Institute of Technology",
        "value": "85e78e7a-61ae-4628-b025-7156d52132d0"
    },
    {
        "label": "Stevenson University",
        "value": "acb2b3a3-8791-4de0-b2a4-ef6e881086af"
    },
    {
        "label": "St. Francis College",
        "value": "736f4df4-ef8c-4def-ba35-c24b61277a77"
    },
    {
        "label": "St. Francis Medical Center College of Nursing",
        "value": "7c125cbe-7943-4f98-b797-61ef9d33fc3d"
    },
    {
        "label": "St. Francis University",
        "value": "4620a046-7c18-4c28-9992-b1515bb3b1f1"
    },
    {
        "label": "St. Gregory's University",
        "value": "6afa0b63-5c46-473a-b9d8-0f850eee6508"
    },
    {
        "label": "Stillman College",
        "value": "8adfd119-d941-4fe6-9bc6-e4f6f4041e48"
    },
    {
        "label": "St. John Fisher College",
        "value": "6b37caee-feb7-492f-b9cc-6a4cdfc3cc09"
    },
    {
        "label": "St. John's College",
        "value": "806233bc-9e9d-4714-8cfe-3c33f193bc4a"
    },
    {
        "label": "St. John's University",
        "value": "d6a0b12f-2fdb-4f33-bbf6-ce36b2cbe9ee"
    },
    {
        "label": "St. John Vianney College Seminary",
        "value": "dbc011e3-cef0-4683-9add-b531a8516359"
    },
    {
        "label": "St. Joseph's College",
        "value": "016893c0-e5c1-4f91-a52e-dbf3f11f2af2"
    },
    {
        "label": "St. Joseph's College New York",
        "value": "c68386a3-6f5b-4f45-9edb-c301d8af9ca3"
    },
    {
        "label": "St. Joseph Seminary College",
        "value": "b847ca22-2aa5-45e5-a445-d9fdcc957188"
    },
    {
        "label": "St. Joseph's University",
        "value": "2374c893-6a39-412d-93d9-3939af85e78b"
    },
    {
        "label": "St. Lawrence University",
        "value": "f3ebf81b-1dc8-48bd-b4dd-de59f8927c93"
    },
    {
        "label": "St. Leo University",
        "value": "47bee9a8-85dd-4d23-a092-7467e0fdf298"
    },
    {
        "label": "St. Louis College of Pharmacy",
        "value": "2a14bc99-6142-4ca7-bb32-5d5c02a5800f"
    },
    {
        "label": "St. Louis University",
        "value": "38c23252-6950-4ce5-a907-1ef103c0b475"
    },
    {
        "label": "St. Luke's College of Health Sciences",
        "value": "95a144fd-3a18-4bef-8e58-a8f6a4cde2f0"
    },
    {
        "label": "St. Martin's University",
        "value": "85595a21-3b9c-45a5-8635-708a4e4d09d2"
    },
    {
        "label": "St. Mary-of-the-Woods College",
        "value": "5daa968a-3bb8-423d-9f6f-ac9ff0969e3b"
    },
    {
        "label": "St. Mary's College",
        "value": "b184cd82-5930-4bb4-b3d5-5c5d185b51f0"
    },
    {
        "label": "St. Mary''s College of California",
        "value": "d47a0b1f-86e3-4d56-b8ed-9ebea3e7b8d6"
    },
    {
        "label": "St. Mary's College of California",
        "value": "dea69b4b-d026-4a44-abce-7e8efcf61365"
    },
    {
        "label": "St. Mary's College of Maryland",
        "value": "3b22d811-15ee-473c-be46-7169b5d7b7d7"
    },
    {
        "label": "St. Mary's Seminary and University",
        "value": "ee83990a-2da9-4abe-98eb-e63323575ce7"
    },
    {
        "label": "St. Mary's University of Minnesota",
        "value": "f03f2dee-1a74-4ddb-892d-2355ba952c16"
    },
    {
        "label": "St. Mary's University of San Antonio",
        "value": "7de8bea7-4a10-417a-8310-7df1365845ee"
    },
    {
        "label": "St. Michael's College",
        "value": "ac30d87b-3623-414a-9439-6452ebf84417"
    },
    {
        "label": "St. Norbert College",
        "value": "9ee710c3-50ab-4806-9f32-aef8ba57d62e"
    },
    {
        "label": "Stockholm University",
        "value": "3279b50d-e69f-44b8-9077-a345fbe85233"
    },
    {
        "label": "St. Olaf College",
        "value": "c4ae7f8d-a7de-45aa-8e9a-7bd851d2dabe"
    },
    {
        "label": "Stonehill College",
        "value": "b0b9faf7-423f-4dff-99ad-b042b432ef49"
    },
    {
        "label": "Stony Brook University - SUNY",
        "value": "b46f6988-732e-431a-b88e-cc3c58cd7ba6"
    },
    {
        "label": "St. Paul's College",
        "value": "1ac22b71-476b-44ae-addb-ec3a4881ffa3"
    },
    {
        "label": "St. Petersburg College",
        "value": "f21159e9-9e1c-43b2-8b63-c590efd23312"
    },
    {
        "label": "St. Petersburg State Politechnical University",
        "value": "abd2e21c-8c31-4160-9f3a-b4e764846d27"
    },
    {
        "label": "St. Peter's University",
        "value": "92aeea10-04fb-438f-abf8-3445e2a8a79c"
    },
    {
        "label": "Strayer University",
        "value": "5fa84c88-aeb6-487c-86db-3976c8a91ac0"
    },
    {
        "label": "St. Thomas Aquinas College",
        "value": "54ea79e9-dfe2-4996-8d08-94bfe2b9473c"
    },
    {
        "label": "St. Thomas University",
        "value": "fa1b0d3a-1ab8-48d1-a3e3-e97c7b256894"
    },
    {
        "label": "St. Vincent College",
        "value": "afb2997c-4c23-4d29-968d-83f3390a8313"
    },
    {
        "label": "St. Xavier University",
        "value": "5232f0a2-26e9-4bb9-806a-1a958ab93e7f"
    },
    {
        "label": "Suffolk University",
        "value": "571a385f-49f4-4df2-b751-b3e45ad8f412"
    },
    {
        "label": "Sullivan University",
        "value": "824893f6-f1e3-4f6f-a3bc-1e66827f4372"
    },
    {
        "label": "Sul Ross State University",
        "value": "66c332b2-1d70-48ec-9322-526142dbe68a"
    },
    {
        "label": "Sultan Qaboos University",
        "value": "35c6a2fd-17a8-4095-b98a-d79fac2237a6"
    },
    {
        "label": "Sungkyunkwan University",
        "value": "ea0a6b9b-2b89-4947-9019-ef34b8281117"
    },
    {
        "label": "Sun Yat-sen University",
        "value": "c4c69b9c-e9d6-48f3-b5b2-84e12ae56877"
    },
    {
        "label": "SUNY Buffalo State",
        "value": "0cc07e0d-36fe-4443-a17f-db50d0f4aa26"
    },
    {
        "label": "SUNY College - Cortland",
        "value": "245e688f-c26b-4d3f-b94b-4e79bc8f9219"
    },
    {
        "label": "SUNY College of Agriculture and Technology - Cobleskill",
        "value": "1ae1052d-52a3-43cb-b04d-f7ab90a38ce4"
    },
    {
        "label": "SUNY College of Environmental Science and Forestry",
        "value": "6c118ed9-75cb-44a2-bbc8-507b11d62f9b"
    },
    {
        "label": "SUNY College of Technology - Alfred",
        "value": "063102b7-5563-45bf-9059-9234a33d54c1"
    },
    {
        "label": "SUNY College of Technology - Canton",
        "value": "7dda4fad-d94c-41c6-b124-97f7390be86e"
    },
    {
        "label": "SUNY College of Technology - Delhi",
        "value": "43bfbea4-e090-4874-9717-54fea4c3d650"
    },
    {
        "label": "SUNY College - Old Westbury",
        "value": "de4b41c1-0aa6-4022-9a53-22e6aae3c622"
    },
    {
        "label": "SUNY College - Oneonta",
        "value": "5e6618a9-3350-45e6-85a6-2646a873a5e2"
    },
    {
        "label": "SUNY College - Potsdam",
        "value": "aede56e4-5c4e-4cef-af96-648908e4bcde"
    },
    {
        "label": "SUNY Downstate Medical Center",
        "value": "3208481c-2e35-4be4-8ad1-779b4dc811b2"
    },
    {
        "label": "SUNY Empire State College",
        "value": "08071e22-e92e-4e98-98f3-4cba58cbed87"
    },
    {
        "label": "SUNY - Fredonia",
        "value": "0f490bfb-215d-49e5-8ef2-b81401765c1a"
    },
    {
        "label": "SUNY - Geneseo",
        "value": "677e4815-e879-432b-a359-32bf92e14924"
    },
    {
        "label": "SUNY Institute of Technology - Utica/Rome",
        "value": "162f0a5d-48f9-44a3-9cf5-f36794bb2bff"
    },
    {
        "label": "SUNY Maritime College",
        "value": "1bbcc4ad-4398-4e9c-8394-426424f11109"
    },
    {
        "label": "SUNY - New Paltz",
        "value": "fc261734-24e7-4f4c-bb43-adbcb0cd4b35"
    },
    {
        "label": "SUNY - Oswego",
        "value": "47c6297d-b3d1-4654-91c8-eeb4cfe997bd"
    },
    {
        "label": "SUNY - Plattsburgh",
        "value": "81a17f97-3a0d-4836-8221-0de8043a91d1"
    },
    {
        "label": "SUNY Upstate Medical University",
        "value": "267c6d5a-75a5-4c70-b12d-121872e01a6e"
    },
    {
        "label": "Susquehanna University",
        "value": "4b28802c-6f02-473e-882f-3c4681d22afc"
    },
    {
        "label": "Swansea University",
        "value": "d5cf295f-8736-4140-9de0-b4dd9fc80b30"
    },
    {
        "label": "Swarthmore College",
        "value": "7ab020fb-6002-4fd3-acad-590d171333bc"
    },
    {
        "label": "Sweet Briar College",
        "value": "15c2e4c7-39b7-48b8-9565-a279d2f25e35"
    },
    {
        "label": "Swinburne University of Technology",
        "value": "a435a842-c6b4-4587-abcd-85002f309a8e"
    },
    {
        "label": "Syracuse University",
        "value": "9c3e445c-cda4-418c-908b-52354665609c"
    },
    {
        "label": "Tabor College",
        "value": "0ee039ad-bea3-4115-a418-b72f2f05af2f"
    },
    {
        "label": "Taipei Medical University",
        "value": "20430b8f-d6f3-4a28-8e18-727e572526ff"
    },
    {
        "label": "Talladega College",
        "value": "6369c67b-27ff-43e8-923f-065fafeb3bbc"
    },
    {
        "label": "Tallinn University of Technology",
        "value": "f84b177b-1025-4b6f-859b-0ea503919f35"
    },
    {
        "label": "Tampere University of Technology",
        "value": "ef9164b8-555c-46a8-bece-f06e2d8475de"
    },
    {
        "label": "Taras Shevchenko National University of Kyiv",
        "value": "f1e0e352-d0f3-4009-a6f1-8fa1ac522938"
    },
    {
        "label": "Tarleton State University",
        "value": "8e6d8bd1-3542-4481-8c87-ac77cda9d0fd"
    },
    {
        "label": "Taylor University",
        "value": "81d67d7c-fe9e-4ff3-b078-3c7ada4356bf"
    },
    {
        "label": "Teachers College, Columbia University",
        "value": "33249714-1068-4eb6-9971-ae25baa9f429"
    },
    {
        "label": "Technical University of Denmark",
        "value": "279e2515-10a9-403e-b452-17d11c1160af"
    },
    {
        "label": "Technion - Israel Institute of Technology",
        "value": "c3e489dd-9f04-4150-a89a-914778078a46"
    },
    {
        "label": "Technische Universität Berlin",
        "value": "c5c9d8ad-14f0-4e61-b474-0f230aaf50a9"
    },
    {
        "label": "Technische Universität Braunschweig",
        "value": "78edbbaa-0f01-42af-b995-3c2f946f9df6"
    },
    {
        "label": "Technische Universität Darmstadt",
        "value": "dac23a36-9bfe-4770-8be5-3efe62ff6856"
    },
    {
        "label": "Technische Universität Dortmund",
        "value": "f116e60d-a9e1-4f8d-b1cc-31d3ffb3c956"
    },
    {
        "label": "Technische Universität Dresden",
        "value": "44358ced-8c38-48bc-896f-8f5c64037169"
    },
    {
        "label": "Technische Universität München",
        "value": "df69b0d0-98b3-49c4-8249-007983845e3e"
    },
    {
        "label": "Tecnológico de Monterrey (ITESM)",
        "value": "ca69a8ae-3f61-4fdd-8068-95d0b8e619fb"
    },
    {
        "label": "Tel Aviv University",
        "value": "4198bdc3-58bf-4641-8d1e-c3a454f638bb"
    },
    {
        "label": "Temasek Polytechnic (TP)",
        "value": "5f75e737-d4af-4533-9e29-adf20c3fbd0c"
    },
    {
        "label": "Temple University",
        "value": "ac7f8651-eb4b-4ace-94bd-6e8f5a614278"
    },
    {
        "label": "Tennessee State University",
        "value": "63a3a8a9-0e8a-4041-bd59-b596ff4efed4"
    },
    {
        "label": "Tennessee Technological University",
        "value": "c074e10f-8a20-4474-90ef-9bcf1d198b3b"
    },
    {
        "label": "Tennessee Wesleyan College",
        "value": "2667e22c-dec0-49d6-bda6-fe12690e7e35"
    },
    {
        "label": "Texas A&M International University",
        "value": "60c0c679-9326-4745-acbc-30aee9669b7e"
    },
    {
        "label": "Texas A&M University - College Station",
        "value": "7a223bff-7139-4fe7-8703-b3f9f830c3db"
    },
    {
        "label": "Texas A&M University - Commerce",
        "value": "f296b3ee-a9c3-411a-9331-b247a1838dae"
    },
    {
        "label": "Texas A&M University - Corpus Christi",
        "value": "6781d599-a170-4009-859f-0cacaa68fe6c"
    },
    {
        "label": "Texas A&M University - Galveston",
        "value": "f0a0edcb-8b4d-42e2-8031-b5cc1abad82a"
    },
    {
        "label": "Texas A&M University - Kingsville",
        "value": "398aa09c-48a8-4aca-8141-6b93af34439f"
    },
    {
        "label": "Texas A&M University - Texarkana",
        "value": "f46595e8-7393-480e-ab29-f240d47ba857"
    },
    {
        "label": "Texas Christian University",
        "value": "ea22a1ee-3148-455d-902c-f9a88501061c"
    },
    {
        "label": "Texas College",
        "value": "1f2f06dd-6763-48cd-b362-2bd62aaa35ca"
    },
    {
        "label": "Texas Lutheran University",
        "value": "55bf7382-1a29-4c6a-a420-5079de6c1656"
    },
    {
        "label": "Texas Southern University",
        "value": "d2e281c5-b0c3-4177-a6dd-045b716ad189"
    },
    {
        "label": "Texas State University",
        "value": "7d419fd9-3f64-4f9f-a656-1c0e21f1fd04"
    },
    {
        "label": "Texas Tech University",
        "value": "794da2cf-55f9-4770-bae0-ad0a7b3d5588"
    },
    {
        "label": "Texas Tech University Health Sciences Center",
        "value": "03c1b3e5-25c8-442c-99ef-5ef142a71541"
    },
    {
        "label": "Texas Wesleyan University",
        "value": "2ab58a47-b2be-4854-8bed-8125cc352848"
    },
    {
        "label": "Texas Woman's University",
        "value": "8593f284-f222-4793-9ece-ebca373f6965"
    },
    {
        "label": "Thammasat University",
        "value": "10960c7f-d356-4606-98b8-2a85513429b1"
    },
    {
        "label": "The Catholic University of America",
        "value": "cb70b116-1a3d-423a-bd3f-42733cc59b51"
    },
    {
        "label": "The Catholic University of Korea",
        "value": "0f081410-d306-4a17-bc65-c2a0dafb874d"
    },
    {
        "label": "The Citadel",
        "value": "0b157bc9-eb0e-4891-8ee4-e0456ec527f2"
    },
    {
        "label": "The Hong Kong Polytechnic University",
        "value": "41f31a3e-ab6f-47dc-b688-17c17f9bcb32"
    },
    {
        "label": "The Hong Kong University of Science and Technology",
        "value": "06756ce7-6bb5-4a56-8ba6-9edc401761e8"
    },
    {
        "label": "The New School",
        "value": "1e3766d7-11c2-455a-a216-9b4c9e1a89de"
    },
    {
        "label": "The Robert Gordon University",
        "value": "68045d5c-51e6-4c6f-a333-4ea29b502378"
    },
    {
        "label": "The Sage Colleges",
        "value": "23ccc381-20df-4a13-8ac6-1cfd921d2877"
    },
    {
        "label": "The University of Adelaide",
        "value": "62691a48-8f07-41e8-9fb2-bd0815a92440"
    },
    {
        "label": "The University of Manchester",
        "value": "bd36e971-3503-45ec-b61b-dd2957d27286"
    },
    {
        "label": "The University of Melbourne",
        "value": "ba03e601-7a93-4622-a5d9-6027de4a1339"
    },
    {
        "label": "The University of Newcastle",
        "value": "c7c90f9a-9491-44d4-8b62-1f5452db21a8"
    },
    {
        "label": "The University of Queensland",
        "value": "e1881119-f971-439c-915b-ea426ca4bea1"
    },
    {
        "label": "The University of Tokyo",
        "value": "80b11a13-8d58-4ee2-8f51-db62f9bc01ce"
    },
    {
        "label": "The University of Western Australia",
        "value": "571c3ad9-5559-4ca1-8f75-e1b1c396cb5e"
    },
    {
        "label": "Thiel College",
        "value": "0ac8075a-8ba9-4859-ad20-891b6a1f3eac"
    },
    {
        "label": "Thomas Aquinas College",
        "value": "14fd13dc-71c4-49e3-8b8a-aac90b0d3d76"
    },
    {
        "label": "Thomas College",
        "value": "f616018a-f67e-495d-9302-13a5bba72b80"
    },
    {
        "label": "Thomas Edison State College",
        "value": "b0fa6aed-96dd-462f-b649-33974646912e"
    },
    {
        "label": "Thomas Jefferson University",
        "value": "36a3e9e3-1744-40d6-abe8-23f1b6f9c048"
    },
    {
        "label": "Thomas More College",
        "value": "17415717-f9d2-4a52-b560-9143c9cf2fa6"
    },
    {
        "label": "Thomas More College of Liberal Arts",
        "value": "f61beb20-bd2a-4a9d-bc49-2509299a6736"
    },
    {
        "label": "Thomas University",
        "value": "ba113ad4-e2ef-42d3-ac4a-60ef3dd8bafd"
    },
    {
        "label": "Thunderbird School of Global Management",
        "value": "3a0b9a7d-02dc-40c4-a93b-9b103d5670cb"
    },
    {
        "label": "Tianjin University",
        "value": "32c2477f-2a1d-40af-a437-c72e19a7fdae"
    },
    {
        "label": "Tiffin University",
        "value": "e3830473-aa3c-40fb-828e-a67c6a951b86"
    },
    {
        "label": "Tilburg University",
        "value": "3aba52f7-0904-421b-8e8c-cf1680ad775f"
    },
    {
        "label": "Toccoa Falls College",
        "value": "0200d232-a079-4ebd-9cb3-7601bc61b95b"
    },
    {
        "label": "Tohoku University",
        "value": "f7cac24b-4a90-462e-a3ea-8358bc3f0095"
    },
    {
        "label": "Tokai University",
        "value": "61a9796f-80fd-430d-9171-5814dc16b44f"
    },
    {
        "label": "Tokyo Institute of Technology",
        "value": "511a3ed0-65ec-4030-9002-6cb2babcfadd"
    },
    {
        "label": "Tokyo Medical and Dental University",
        "value": "9d45b299-fe82-4fc3-b682-538afb2ba2b8"
    },
    {
        "label": "Tokyo Metropolitan University",
        "value": "8afcf59b-8ee6-411d-84dd-a4428f016024"
    },
    {
        "label": "Tokyo University of Agriculture and Technology",
        "value": "d5a576e7-36e3-4cc0-8765-45e4fbe8c302"
    },
    {
        "label": "Tokyo University of Science",
        "value": "df15dfdd-9ab8-447d-ba27-04853ebe9d94"
    },
    {
        "label": "Tomsk Polytechnic University",
        "value": "a086c107-9c59-4f07-ab32-88a693a1055f"
    },
    {
        "label": "Tomsk State University",
        "value": "994ffef9-a3c0-4037-872a-5d2d5f4f4863"
    },
    {
        "label": "Tongji University",
        "value": "8e211925-fde8-4e44-be08-455e9a0267b1"
    },
    {
        "label": "Toronto Metropolitan University",
        "value": "c8c55b80-236d-4fe9-bdcd-313ab601e130"
    },
    {
        "label": "Tougaloo College",
        "value": "772c4ba4-f3c6-4ec9-8eb2-c5f010ed713e"
    },
    {
        "label": "Touro College",
        "value": "3ed4e97b-871f-48f6-af90-6cffe167a79f"
    },
    {
        "label": "Towson University",
        "value": "8b4fe0f7-226d-4b04-a532-4373cf7ff23f"
    },
    {
        "label": "Transylvania University",
        "value": "a84e4550-c5e1-4086-ac7f-d1008c1ea156"
    },
    {
        "label": "Trent University",
        "value": "07422cc1-ef20-4471-a8ee-afc6495c6f89"
    },
    {
        "label": "Trevecca Nazarene University",
        "value": "1886c7c7-71f3-41cf-82a4-8bcc80c02528"
    },
    {
        "label": "Trident University International",
        "value": "52d6f537-2f05-4db0-b370-3348f38370c8"
    },
    {
        "label": "Trine University",
        "value": "4a9a338b-d2e3-4dcc-ac13-30d068d90243"
    },
    {
        "label": "Trinity Christian College",
        "value": "bad3eb80-f9c0-4528-80c8-3ba68226f73a"
    },
    {
        "label": "Trinity College",
        "value": "41e51487-ddc0-4e2b-92ee-e10bfdff2d0b"
    },
    {
        "label": "Trinity College Dublin",
        "value": "08ef500d-9dea-4ac3-8aad-8b6f7fd405f3"
    },
    {
        "label": "Trinity College of Nursing & Health Sciences",
        "value": "440d9e83-d93e-426d-bf31-1e00fa673598"
    },
    {
        "label": "Trinity International University",
        "value": "db354d43-6fb8-4783-9233-677a2ffdab9c"
    },
    {
        "label": "Trinity Lutheran College",
        "value": "b15bf0f0-2f18-4ecd-a000-feaf04189f40"
    },
    {
        "label": "Trinity University",
        "value": "0cc23e5d-7578-4e9d-a3f1-6a960d1e979a"
    },
    {
        "label": "Trinity Western University",
        "value": "46a472b9-5bcc-4560-8adf-03dd76939002"
    },
    {
        "label": "Troy University",
        "value": "85cf5e1e-812d-4564-80cf-7b7ab56c779e"
    },
    {
        "label": "Truett McConnell College",
        "value": "df656767-1085-47dd-82f5-5271bb4f37f3"
    },
    {
        "label": "Truman State University",
        "value": "eba4017a-baad-40ae-b604-656ab2b45f89"
    },
    {
        "label": "Tsinghua University",
        "value": "0fc5961c-8435-4f18-bbc5-c8d068ca6176"
    },
    {
        "label": "Tufts University",
        "value": "bf2c7fab-cfe3-428a-95d3-c9ed909470ac"
    },
    {
        "label": "Tulane University",
        "value": "aa27928e-6ce8-4ece-b2ab-366968a2d18a"
    },
    {
        "label": "Tusculum College",
        "value": "4389ea85-d67e-49c6-b1c8-4f55f30c4e12"
    },
    {
        "label": "Tuskegee University",
        "value": "a63f177a-42e5-42eb-81ba-ed96e1940b1c"
    },
    {
        "label": "UCA",
        "value": "7c4245dd-d7f1-42d2-b8eb-b5a124838cd3"
    },
    {
        "label": "UCL (University College London)",
        "value": "552b51d5-8df4-4118-8c2c-c4dc1a5e90f8"
    },
    {
        "label": "Umeå University",
        "value": "b0fc82e9-6a3d-42a1-a2f3-b973cd91185e"
    },
    {
        "label": "Umm Al-Qura University",
        "value": "9f8a0105-2478-4bf7-98d2-72cd62a1b995"
    },
    {
        "label": "Union College",
        "value": "5d816112-79d4-46f6-919a-27ee2789e3a8"
    },
    {
        "label": "Union Institute and University",
        "value": "cf0b6699-dd81-42b9-8eeb-4a69c1278ae7"
    },
    {
        "label": "Union University",
        "value": "21503513-de07-44c2-b516-f03813a89afd"
    },
    {
        "label": "United Arab Emirates University",
        "value": "48c8e5b4-1473-4aea-abe5-55cd861a714e"
    },
    {
        "label": "United States Air Force Academy",
        "value": "486c7ad1-ba4c-401f-9366-cbfb928914c5"
    },
    {
        "label": "United States Coast Guard Academy",
        "value": "4eaca7e3-e30e-42bd-9ad9-62e69e4012a7"
    },
    {
        "label": "United States International University - Kenya",
        "value": "6601a9fb-205b-4339-8165-7551005b35a0"
    },
    {
        "label": "United States Merchant Marine Academy",
        "value": "ae9411f3-fe35-45d5-b1d0-0d7b0c385195"
    },
    {
        "label": "United States Military Academy",
        "value": "ff6551e0-7edc-428c-867f-ceff0a981f22"
    },
    {
        "label": "United States Naval Academy",
        "value": "d762a81d-4e91-400b-9328-a33d82a47b30"
    },
    {
        "label": "United States Sports Academy",
        "value": "e839b83d-ed3d-47ea-944e-afbcd363ed35"
    },
    {
        "label": "Unity College",
        "value": "8fa672d6-ff1d-4810-a97b-2b318601335a"
    },
    {
        "label": "Universidad Adolfo Ibáñez",
        "value": "cfa3d31d-42f6-418b-aaab-3d176b676832"
    },
    {
        "label": "Universidad Adventista de las Antillas",
        "value": "80f939c3-eefd-4a6a-810d-86205d76db8d"
    },
    {
        "label": "Universidad ANAHUAC",
        "value": "58e90d08-cb27-435b-8807-30d3722e7386"
    },
    {
        "label": "Universidad Austral - Argentina",
        "value": "6dab15fd-7c66-4c83-9b9d-63235f9f4344"
    },
    {
        "label": "Universidad Austral de Chile",
        "value": "727b87f2-134b-4cd7-901a-54cde67aa6d3"
    },
    {
        "label": "Universidad Autónoma del Estado de México",
        "value": "9e769681-06e2-4dfc-b686-a01079b0b754"
    },
    {
        "label": "Universidad Autónoma de Madrid",
        "value": "4573186e-d5fd-4450-bdca-f7fc401755a8"
    },
    {
        "label": "Universidad Autónoma Metropolitana (UAM)",
        "value": "664d451d-3eef-4492-9dd2-5eaabe49d682"
    },
    {
        "label": "Universidad Carlos III de Madrid",
        "value": "c84aaef8-3a7b-495c-a44f-a2c62518c190"
    },
    {
        "label": "Universidad Católica Andrés Bello - UCAB",
        "value": "c885d6a6-d15a-439f-99a9-45c109d59860"
    },
    {
        "label": "Universidad Central de Venezuela - UCV",
        "value": "afcbf6ef-abab-48d2-9105-a1b65d9729f5"
    },
    {
        "label": "Universidad de Alcalá",
        "value": "beac2238-6e1d-4824-928b-f8f542128f9f"
    },
    {
        "label": "Universidad de Antioquia",
        "value": "5cffc634-cf0c-4df2-853f-f5305529254c"
    },
    {
        "label": "Universidad de Belgrano",
        "value": "495cd68a-882d-4df6-845d-835a0cd57b5a"
    },
    {
        "label": "Universidad de Buenos Aires",
        "value": "b0696a6c-104b-48bd-afe8-0be0b3c53eb3"
    },
    {
        "label": "Universidad de Chile",
        "value": "dc1299a1-a088-42df-a9c7-77d02eefe593"
    },
    {
        "label": "Universidad de Concepción",
        "value": "92b9efed-309f-4cce-8482-35cc500d50fc"
    },
    {
        "label": "Universidad de Costa Rica",
        "value": "292479ad-2581-49ed-ab88-32dec5addee3"
    },
    {
        "label": "Universidad de Guadalajara (UDG)",
        "value": "d34cfa6a-fe1d-4948-bb6e-4512a924fb72"
    },
    {
        "label": "Universidad de la Habana",
        "value": "19e0e2f5-0978-4f7d-8861-2ff52d4e1c36"
    },
    {
        "label": "Universidad de la República (UdelaR)",
        "value": "a003d83e-6bb5-4d81-a0fd-fae83ab51d17"
    },
    {
        "label": "Universidad de La Sabana",
        "value": "a4c9862e-2d55-47ef-8a06-fc066433848e"
    },
    {
        "label": "Universidad de las Américas Puebla (UDLAP)",
        "value": "6776c85d-5c57-43a7-a453-c3253ead5a45"
    },
    {
        "label": "Universidad del Este",
        "value": "ddd56718-f900-412d-b3fe-30415dc88612"
    },
    {
        "label": "Universidad del Norte",
        "value": "52a82bbf-c8d8-499e-8d39-4c0735fc98c5"
    },
    {
        "label": "Universidad de Los Andes Colombia",
        "value": "9c0c6177-92d7-4721-9c8a-87c70773911c"
    },
    {
        "label": "Universidad de los Andes Mérida",
        "value": "d2ded34b-4133-4bab-b68b-f4eda349b204"
    },
    {
        "label": "Universidad del Rosario",
        "value": "0b4da4a6-d6a8-457f-9d47-ce441f67938a"
    },
    {
        "label": "Universidad del Turabo",
        "value": "1a7372ea-fc8d-4cea-b116-8869004f75ee"
    },
    {
        "label": "Universidad del Valle",
        "value": "2415322c-c823-4e83-ae15-d8a110526e08"
    },
    {
        "label": "Universidad de Palermo",
        "value": "90a5d98e-cb85-4750-a4e0-674e6863afb9"
    },
    {
        "label": "Universidad de Puerto Rico",
        "value": "c2208d1c-b496-4768-b2d0-1169ee5b1078"
    },
    {
        "label": "Universidad de San AndrÃ©s",
        "value": "47c00c57-1fe8-4290-a316-04332ca4fdac"
    },
    {
        "label": "Universidad de San Francisco de Quito",
        "value": "53ca1aba-644b-44a8-90da-41476f47d083"
    },
    {
        "label": "Universidad de Santiago de Chile - USACH",
        "value": "a2d258ee-ecef-4385-a617-1f175d50e736"
    },
    {
        "label": "Universidad de Sevilla",
        "value": "ff186b3d-7c13-4cc3-b30f-89135d3819c2"
    },
    {
        "label": "Universidad de Talca",
        "value": "b8507d2a-245b-4f54-a963-1af34e7eed9b"
    },
    {
        "label": "Universidad de Zaragoza",
        "value": "a324b818-d30d-475a-a257-7493b44066f7"
    },
    {
        "label": "Universidade Catolica Portuguesa, Lisboa",
        "value": "c29d1d2b-f96c-45a0-ac04-4429198247ae"
    },
    {
        "label": "Universidade de Brasilia (UnB)",
        "value": "e25e1fc6-2ce7-4a2e-8de8-d212eb82813a"
    },
    {
        "label": "Universidade de Santiago de Compostela",
        "value": "4ab56e49-877b-41c3-969f-5f068f7c9e7b"
    },
    {
        "label": "Universidade de São Paulo (USP)",
        "value": "d7c505f9-8088-4b45-b37c-a66d2e246a0b"
    },
    {
        "label": "Universidade do Estado do Rio de Janeiro (UERJ)",
        "value": "7c777d7b-0457-4cec-871d-0b6eed323fab"
    },
    {
        "label": "Universidade Estadual de Campinas",
        "value": "ab377013-868a-47ef-8a2f-b34dc904de75"
    },
    {
        "label": "Universidade Estadual de Londrina (UEL)",
        "value": "e7c3340f-140d-4872-94ea-c56107116619"
    },
    {
        "label": "Universidade Estadual PaulistaJúlio de Mesquita Filho' (UNESP)",
        "value": "38905d6d-3091-40ea-8c75-e3fac42f8e96"
    },
    {
        "label": "Universidade Federal da Bahia",
        "value": "51f70a3f-dee8-4522-b71a-083c79f8200a"
    },
    {
        "label": "Universidade Federal de Minas Gerais",
        "value": "b1458baf-5c3e-4716-995e-c80bf5a281d3"
    },
    {
        "label": "Universidade Federal de Santa Catarina",
        "value": "455cd64f-1330-40c2-81cc-9b4622d7f051"
    },
    {
        "label": "Universidade Federal de Santa Maria",
        "value": "ff049447-8607-471a-b1e3-6abdd8993964"
    },
    {
        "label": "Universidade Federal de São Carlos",
        "value": "aa8c30bc-3556-43b4-9836-09c9bc4c7259"
    },
    {
        "label": "Universidade Federal de São Paulo (UNIFESP)",
        "value": "6d48c783-3a2f-4342-8a00-56e4959fb1ed"
    },
    {
        "label": "Universidade Federal de Viçosa",
        "value": "82b92347-45af-4b52-9ff4-9a3e6a51c628"
    },
    {
        "label": "Universidade Federal do Ceará (UFC)",
        "value": "dff8874b-85f9-46a9-887c-67669d046c52"
    },
    {
        "label": "Universidade Federal do Paraná (UFPR)",
        "value": "dc29bf0b-c579-48a3-9336-85092ea2d11a"
    },
    {
        "label": "Universidade Federal do Pernambuco",
        "value": "34de52ea-6416-4388-86ce-844b23d40063"
    },
    {
        "label": "Universidade Federal do Rio de Janeiro",
        "value": "2a51c16b-6086-49b9-9034-573c7f4c16f0"
    },
    {
        "label": "Universidade Federal do Rio Grande Do Sul",
        "value": "e771f15f-c947-4cbc-8b41-9b0716befde5"
    },
    {
        "label": "Universidade Federal Fluminense",
        "value": "7df271f5-d7d6-4980-b9b2-b1834c8c503a"
    },
    {
        "label": "Universidade Nova de Lisboa",
        "value": "3d1f9c1d-0301-4b17-be71-5b0e200b0549"
    },
    {
        "label": "Universidad Iberoamericana (UIA)",
        "value": "dbe235ca-8e4b-4d6a-82fc-af0dda2e0c62"
    },
    {
        "label": "Universidad Industrial de Santander",
        "value": "dc4e7dbc-8b40-4e74-9203-8eb12d2d9b75"
    },
    {
        "label": "Universidad Metropolitana",
        "value": "c427d8ea-0c6d-44f9-873a-16e8ad175f63"
    },
    {
        "label": "Universidad Nacional Autónoma de México (UNAM)",
        "value": "4b7f9ae2-f95d-46b1-8ab2-030c3a30a486"
    },
    {
        "label": "Universidad Nacional Costa Rica",
        "value": "f060c0a3-24d5-4267-a673-e634f50298b4"
    },
    {
        "label": "Universidad Nacional de Colombia",
        "value": "bdfa7c28-f347-43a9-9404-882642ca1155"
    },
    {
        "label": "Universidad Nacional de Córdoba",
        "value": "0e6fb504-4ecf-4711-a6d4-2e7c6721fb40"
    },
    {
        "label": "Universidad Nacional de Cuyo",
        "value": "9aa1b8d3-9b3f-486d-ba7f-05b2f722c1ee"
    },
    {
        "label": "Universidad Nacional de La Plata",
        "value": "40ef3409-f021-4307-8a7b-968989d2b66f"
    },
    {
        "label": "Universidad Nacional del Sur",
        "value": "3e44306a-59a3-4434-8485-ef86841c8119"
    },
    {
        "label": "Universidad Nacional de Mar del Plata",
        "value": "455f9bb7-e150-4331-a30a-6181a485f11f"
    },
    {
        "label": "Universidad Nacional de Rosario",
        "value": "79d21de6-4e03-41f9-9880-908a424f2318"
    },
    {
        "label": "Universidad Nacional de Tucumán",
        "value": "2a565fbf-4fe0-4212-bebe-61ede01cd2c9"
    },
    {
        "label": "Universidad Nacional Mayor de San Marcos",
        "value": "44d84a9c-71ce-4038-b433-c18aa645f797"
    },
    {
        "label": "Universidad Peruana Cayetano Heredia",
        "value": "654fa412-cf46-47e9-8096-3558f60e06c7"
    },
    {
        "label": "Universidad Politecnica De Puerto Rico",
        "value": "13a81884-062f-470c-8a6a-797de1fa1c33"
    },
    {
        "label": "Universidad Simón Bolívar Venezuela",
        "value": "93a6eddf-0a94-4979-bb36-f2c4912312d1"
    },
    {
        "label": "Universidad Técnica Federico Santa María",
        "value": "48629583-075c-4f61-abba-a35f9c1b36b7"
    },
    {
        "label": "Universidad Tecnológica Nacional (UTN)",
        "value": "189a90de-710a-4186-a545-40cf2fda3983"
    },
    {
        "label": "Universidad Torcuato Di Tella",
        "value": "2f4f64f6-48d0-4e75-aa76-81f5a8a74df9"
    },
    {
        "label": "Università  Ca'' Foscari Venezia",
        "value": "a1d0b5d6-1742-4103-aee0-fd07dc043b4f"
    },
    {
        "label": "Università  Cattolica del Sacro Cuore",
        "value": "1972692c-6671-4e31-830e-adc54d2d3c86"
    },
    {
        "label": "Università  degli Studi di Pavia",
        "value": "af806a85-ab1e-4a85-a361-79faec48a24e"
    },
    {
        "label": "Università¡ degli Studi di Roma - Tor Vergata",
        "value": "1ba51f6f-854e-4d79-abef-175d2326c941"
    },
    {
        "label": "Università degli Studi Roma Tre",
        "value": "fb3dd92b-2710-459e-a99e-af3e61da9486"
    },
    {
        "label": "Universitas Gadjah Mada",
        "value": "77bdfad2-c484-42bc-85ce-680f7514bc2f"
    },
    {
        "label": "Universitat Autónoma de Barcelona",
        "value": "7500f7fd-45ba-4f40-a5e9-6d97893f3039"
    },
    {
        "label": "Universität Bayreuth",
        "value": "95517bac-fba8-41b4-9600-d4d7761f0aea"
    },
    {
        "label": "Universität Bielefeld",
        "value": "cfde3186-e89b-44f4-b116-9ef02eddd605"
    },
    {
        "label": "Universität Bremen",
        "value": "13c2f6bf-9814-4ac7-8107-532daec00262"
    },
    {
        "label": "Universität des Saarlandes",
        "value": "22cc573c-2779-4f92-a6f8-aed882c6aee9"
    },
    {
        "label": "Universitat de Valencia",
        "value": "804d6f91-835d-42a4-a244-42d05845925c"
    },
    {
        "label": "Universität Duisburg-Essen",
        "value": "241299ee-d661-4ae9-b301-6eb1e7d1e0ec"
    },
    {
        "label": "Universität Düsseldorf",
        "value": "8130196b-c982-41d8-b8d3-ff21abe34895"
    },
    {
        "label": "Universität Erlangen-Nürnberg",
        "value": "09137fca-5773-42e2-b6e3-5733924d85d8"
    },
    {
        "label": "Universität Frankfurt am Main",
        "value": "236bb640-ae43-4c53-9ac6-12c1393235ef"
    },
    {
        "label": "Universität Freiburg",
        "value": "6f934223-abd9-4b4c-8102-84a590a3ad99"
    },
    {
        "label": "Universität Hamburg",
        "value": "2574614b-5516-4843-ad05-38ea80f0a912"
    },
    {
        "label": "Universität Innsbruck",
        "value": "c869cb1d-ed5c-4d62-b909-8a9a34ae52a7"
    },
    {
        "label": "Universität Jena",
        "value": "705d7a94-caed-4963-aed3-f7ff2cb9b793"
    },
    {
        "label": "Universität Konstanz",
        "value": "5b751cb8-458a-4c1f-9071-f7b54f7d3285"
    },
    {
        "label": "Universität Leipzig",
        "value": "268580bd-b5d7-4725-a354-4b3f8c3ba8a6"
    },
    {
        "label": "Universität Mannheim",
        "value": "3c72aacb-063e-489d-bf0c-212d3eb09b78"
    },
    {
        "label": "Universitat Politècnica de Catalunya",
        "value": "3959e0f9-c9f9-455c-a9f8-be19b190d230"
    },
    {
        "label": "Universitat Politècnica de València",
        "value": "724080c5-00a1-4c7a-93ca-4fd287c87bba"
    },
    {
        "label": "Universitat Pompeu Fabra",
        "value": "642cb75d-88e5-4dac-9c7d-4eec15e8589a"
    },
    {
        "label": "Universität Regensburg",
        "value": "0b4da217-36db-45df-a8fc-a23b596cb0bc"
    },
    {
        "label": "Universität Stuttgart",
        "value": "ba20017c-87fd-47fc-b9d4-887180ad61cc"
    },
    {
        "label": "Universität Ulm",
        "value": "160cecff-5233-45f2-88e3-60b0c69355b8"
    },
    {
        "label": "Universität zu Köln",
        "value": "8962b9b5-13d9-47f8-9738-3219ac4ea38f"
    },
    {
        "label": "Université Aix-Marseille",
        "value": "06dae9e1-eac1-4383-92f8-362f0d4767ae"
    },
    {
        "label": "Université Bordeaux 1, Sciences Technologies",
        "value": "96e8b898-44cd-4958-b4ab-ddcf53aad378"
    },
    {
        "label": "Université Catholique de Louvain (UCL)",
        "value": "94d0c5ee-e9f2-48df-a597-3baa98fc8e84"
    },
    {
        "label": "Université Charles-de-Gaulle Lille 3",
        "value": "baa75bd7-6316-4374-a3d7-c07a913dcf66"
    },
    {
        "label": "Université Claude Bernard Lyon 1",
        "value": "a49fff58-065f-4fb0-ab48-16569ddc74fb"
    },
    {
        "label": "Université de Caen Basse-Normandie",
        "value": "99a07930-ca70-4b7e-a75b-64ccd8901e9e"
    },
    {
        "label": "Université de Cergy-Pontoise",
        "value": "be09e2b9-0f6e-42f2-8e45-de392aac5405"
    },
    {
        "label": "Université de Lorraine",
        "value": "907faa20-bfcf-4e0c-bd1b-75e735365c72"
    },
    {
        "label": "Université de Montréal",
        "value": "697ef6f5-15af-43d7-b250-95e4fc4aeca8"
    },
    {
        "label": "Université de Nantes",
        "value": "80f2ea12-9292-4587-a4de-39a3144c3047"
    },
    {
        "label": "Université de Poitiers",
        "value": "e9d293ad-a756-4b81-afa4-a837766acd80"
    },
    {
        "label": "Université de Rennes 1",
        "value": "d7ec55f5-329f-43c7-ae28-c9cbdc4f7a3c"
    },
    {
        "label": "Université de Sherbrooke",
        "value": "ed2b7488-638b-427c-9369-8878def05344"
    },
    {
        "label": "Université de Strasbourg",
        "value": "3b40d866-ca8b-4878-8a48-5fa16fa53f3b"
    },
    {
        "label": "Université du Québec",
        "value": "92556a7d-4bf2-4f7d-9a05-a00aa9432faa"
    },
    {
        "label": "Université Jean Moulin Lyon 3",
        "value": "ccd4937a-dc85-4064-be9d-5e9b8c351af9"
    },
    {
        "label": "Université Joseph Fourier - Grenoble 1",
        "value": "ae39cd32-0fe0-4357-9518-75dbe87fec61"
    },
    {
        "label": "Université Libre de Bruxelles (ULB)",
        "value": "df34670b-e03d-4c1d-ab8a-ca44d66bab28"
    },
    {
        "label": "Université Lille 1, Sciences et Technologie",
        "value": "6952254e-042e-4d39-aff8-66a68f2b9e48"
    },
    {
        "label": "Université Lille 2 Droit et Santé",
        "value": "a63d3c72-92b0-4777-b9ba-cc3888b1d00d"
    },
    {
        "label": "Université Lumière Lyon 2",
        "value": "287263a3-3e50-4de2-abe9-cc5a96a36ef3"
    },
    {
        "label": "Université Montpellier 1",
        "value": "6a80a37e-7f8a-4a5a-b64c-662c632d83ad"
    },
    {
        "label": "Université Montpellier 2, Sciences et Techniques du Languedoc",
        "value": "88ed7c9e-9227-4899-a3e7-c3276a2c6147"
    },
    {
        "label": "Université Nice Sophia-Antipolis",
        "value": "613dba6f-0413-408c-9c0d-954ff878e0f9"
    },
    {
        "label": "Université Panthéon-Assas (Paris 2)",
        "value": "575cb13b-e2b3-4e5a-bfa4-c4d6d9789ee7"
    },
    {
        "label": "Université Paris 1 Panthéon-Sorbonne",
        "value": "82c1f59b-5291-4de8-af87-fd47dcccc093"
    },
    {
        "label": "Université Paris Dauphine",
        "value": "fb45646a-a95b-4ae9-9b89-b33878aba379"
    },
    {
        "label": "Université Paris Descartes",
        "value": "74d2683a-1dfe-4909-a72c-57dc0ef94571"
    },
    {
        "label": "Université Paris Diderot - Paris 7",
        "value": "6f85d8e4-7db2-4a52-b54c-924203dcb8ea"
    },
    {
        "label": "Université Paris Ouest Nanterre La Défense",
        "value": "c77884ab-3563-48fa-ab44-5dab68a1eef9"
    },
    {
        "label": "Université Paris-Sorbonne (Paris IV)",
        "value": "d0fee7d3-31ce-4cca-8ef9-fbcad0429563"
    },
    {
        "label": "Université Paris-Sud 11",
        "value": "a87b8861-4620-4432-bb45-d904c25eee12"
    },
    {
        "label": "Université Paul Sabatier Toulouse III",
        "value": "9684c54f-aced-49f1-b45c-df4345f090cd"
    },
    {
        "label": "Université Paul-Valéry Montpellier 3",
        "value": "a6a867c2-7c0e-4b60-80c4-2ae4a45d6cad"
    },
    {
        "label": "Université Pierre et Marie Curie (UPMC)",
        "value": "a4b745bf-c323-46b9-9a8f-066bb6b82f1c"
    },
    {
        "label": "Université Pierre Mendès France - Grenoble 2",
        "value": "13503b00-0880-4637-8dd4-bc372d4c155e"
    },
    {
        "label": "Université Saint-Joseph de Beyrouth",
        "value": "c71cb880-fb2a-4788-bace-e74bff2b5fe0"
    },
    {
        "label": "Université Stendhal Grenoble 3",
        "value": "acf082ab-f9da-4bce-90ac-4e048da240fc"
    },
    {
        "label": "Université Toulouse 1, Capitole",
        "value": "45ae8bf9-7f00-4ca4-82dd-28530c79712d"
    },
    {
        "label": "Université Toulouse II, Le Mirail",
        "value": "81d13904-bd31-4a26-9c9c-54572006f7e1"
    },
    {
        "label": "Universiti Kebangsaan Malaysia (UKM)",
        "value": "c11721b7-0afa-4ab3-9c18-c167be5bbf97"
    },
    {
        "label": "Universiti Malaya (UM)",
        "value": "df2b724f-ac4d-4129-9ccc-f5287fbe4be7"
    },
    {
        "label": "Universiti Putra Malaysia (UPM)",
        "value": "d7d996bd-e7ee-4304-8cd5-3ce28042a898"
    },
    {
        "label": "Universiti Sains Malaysia (USM)",
        "value": "3844b84a-8086-4571-9e8c-6cb2ca0835d8"
    },
    {
        "label": "Universiti Teknologi Malaysia (UTM)",
        "value": "8d836478-6275-4fb4-835f-345096237c1e"
    },
    {
        "label": "Universiti Teknologi MARA - UiTM",
        "value": "d47ccc24-81ba-40a5-a52f-3a3d0728b53b"
    },
    {
        "label": "University at Albany - SUNY",
        "value": "8f0ea224-0416-42e3-9827-d61f11f85b33"
    },
    {
        "label": "University at Buffalo - SUNY",
        "value": "766dfa89-b4bb-4faf-9b58-f8a4e467ede9"
    },
    {
        "label": "University Autónoma de Nuevo León (UANL)",
        "value": "a722942a-2190-483e-8d22-2da16910a46e"
    },
    {
        "label": "University College Cork",
        "value": "369406d0-2eeb-4338-ae41-fd0ecfa7c295"
    },
    {
        "label": "University College Dublin",
        "value": "4b4a0f3f-4df1-4c3e-8e8b-9ea467b2bdf3"
    },
    {
        "label": "University Complutense Madrid",
        "value": "1c598e97-cb94-4986-814e-7f094f7c2e24"
    },
    {
        "label": "University of Aberdeen",
        "value": "c3b9f3f1-fa3d-40ad-824c-0f03456083a4"
    },
    {
        "label": "University of Advancing Technology",
        "value": "0bbaef33-173a-44f1-9109-305e73f7b551"
    },
    {
        "label": "University of Akron",
        "value": "2d0ee83f-7454-4598-b765-261176d574fb"
    },
    {
        "label": "University of Alabama",
        "value": "c616854f-63c9-4b0e-90f7-5e23a5817c4c"
    },
    {
        "label": "University of Alabama - Birmingham",
        "value": "527095d0-825f-4403-913f-116475ad2b61"
    },
    {
        "label": "University of Alabama - Huntsville",
        "value": "fab2012a-0479-4c8d-9190-c4c08b55f673"
    },
    {
        "label": "University of Alaska - Anchorage",
        "value": "0ede6ae6-3836-4e6f-99ab-a35902e65b82"
    },
    {
        "label": "University of Alaska - Fairbanks",
        "value": "d01ca572-7181-44b3-ad46-2a35fa46b2e9"
    },
    {
        "label": "University of Alaska - Southeast",
        "value": "425283cb-9186-4984-a062-b6c38ff9fd7e"
    },
    {
        "label": "University of Alberta",
        "value": "69165cf3-0d76-4103-9307-6667260f0278"
    },
    {
        "label": "University of Amsterdam",
        "value": "1759ab32-48eb-45b1-b7af-64a40d94791d"
    },
    {
        "label": "University of Antwerp",
        "value": "693b1ba3-f6c2-487e-8348-f0b4704c0762"
    },
    {
        "label": "University of Arizona",
        "value": "a321916f-8d75-47bf-bfeb-ebdbad27366b"
    },
    {
        "label": "University of Arkansas",
        "value": "334c6676-73e4-49d7-8bf9-712e3671c00b"
    },
    {
        "label": "University of Arkansas for Medical Sciences",
        "value": "9b3095bf-e0cc-427c-89d4-2355f8f68295"
    },
    {
        "label": "University of Arkansas - Fort Smith",
        "value": "894ea233-52ad-4eac-b328-e96a364f42c8"
    },
    {
        "label": "University of Arkansas - Little Rock",
        "value": "36b9b563-76ab-4c4b-8955-e553b98487b7"
    },
    {
        "label": "University of Arkansas - Monticello",
        "value": "1807332f-9dbe-4e0f-a61f-409fd8ba983c"
    },
    {
        "label": "University of Arkansas - Pine Bluff",
        "value": "1c0ee64c-9ddc-473e-84f2-10303c2d0058"
    },
    {
        "label": "University of Auckland",
        "value": "6d333a3f-a364-434e-949f-dc5b75ee99ba"
    },
    {
        "label": "University of Baghdad",
        "value": "e26c344d-dc5b-46e3-86ad-f2e9bf348295"
    },
    {
        "label": "University of Bahrain",
        "value": "fe2b9699-c233-4c88-a2c4-d111dd8e9fea"
    },
    {
        "label": "University of Baltimore",
        "value": "5e1d1ee1-817c-4a57-8faf-21077cb6a574"
    },
    {
        "label": "University of Barcelona",
        "value": "94a4cc16-0b00-4614-b585-8fc0a0044e05"
    },
    {
        "label": "University of Bari",
        "value": "a69c1f65-f18c-4b6a-b841-6189f021b8d8"
    },
    {
        "label": "University of Basel",
        "value": "97f982a0-7d8d-478c-ad9a-aab83b3c8cec"
    },
    {
        "label": "University of Bath",
        "value": "42cc00b3-64b8-45a7-8eae-b244611798eb"
    },
    {
        "label": "University of Belgrade",
        "value": "f99a6eb9-7b2b-4880-af19-799efb6ef7bd"
    },
    {
        "label": "University of Bergen",
        "value": "40368003-6edd-4ab4-9c13-3a9074ebb6e8"
    },
    {
        "label": "University of Bern",
        "value": "19592fd3-89b8-41f2-b051-447623e983d4"
    },
    {
        "label": "University of Birmingham",
        "value": "3b7323b6-4bd8-43f1-ab24-260bf89628d9"
    },
    {
        "label": "University of Bologna",
        "value": "7d038023-84f2-4697-86a3-27cb67fbafe6"
    },
    {
        "label": "University of Bradford",
        "value": "cdd85532-0223-4a18-85f4-f0e737a48132"
    },
    {
        "label": "University of Brawijaya",
        "value": "f4d7801e-9439-40d5-bbfa-5e91d17e4054"
    },
    {
        "label": "University of Brescia",
        "value": "598df38a-0a02-4499-addd-cebae7319a5a"
    },
    {
        "label": "University of Bridgeport",
        "value": "993b1893-d269-4e56-8b43-6229cc221b60"
    },
    {
        "label": "University of Bristol",
        "value": "64df6db4-ed17-4778-890f-f86ade978886"
    },
    {
        "label": "University of British Columbia",
        "value": "e4921c46-2357-40e0-962c-898f2ec9e58f"
    },
    {
        "label": "University of Bucharest",
        "value": "850be51c-fe1a-48c0-9963-56e0a8c5bd4b"
    },
    {
        "label": "University of Calcutta",
        "value": "02b0ba96-b3de-4933-9a8b-5d5f86c30368"
    },
    {
        "label": "University of Calgary",
        "value": "d80f547d-2abf-4e87-8c94-fd6031fce2a4"
    },
    {
        "label": "University of California - Berkeley",
        "value": "11e82426-f70c-4e2f-8317-8f54e49efab6"
    },
    {
        "label": "University of California - Davis",
        "value": "ab76c969-ef43-4fa6-8aa4-312c57a48a0a"
    },
    {
        "label": "University of California, Hastings College of the Law",
        "value": "f87f9792-7484-46de-91f9-bc2763c85afb"
    },
    {
        "label": "University of California - Irvine",
        "value": "dbbc68c4-a2ab-4627-8f8a-f6f2a41c6bbd"
    },
    {
        "label": "University of California - Los Angeles",
        "value": "0db759a4-e9db-478d-83ee-0c5f9c2b38a9"
    },
    {
        "label": "University of California - Merced",
        "value": "67efd33d-604c-43b5-8b81-47bf7dcbb2f6"
    },
    {
        "label": "University of California - Riverside",
        "value": "91954e7c-0cdd-4a33-bcbf-eb7c79929b90"
    },
    {
        "label": "University of California - San Diego",
        "value": "40f3e2cd-bef2-456e-80d8-7961723ecd05"
    },
    {
        "label": "University of California - San Francisco",
        "value": "fa46a712-ce7d-49dc-a120-e50017ee6cd3"
    },
    {
        "label": "University of California - Santa Barbara",
        "value": "8c64c509-4179-44b8-9f5c-ae41a29d220d"
    },
    {
        "label": "University of California - Santa Cruz",
        "value": "6f29085a-0f7a-41cb-ae51-b1449cd8e231"
    },
    {
        "label": "University of Cambridge",
        "value": "85fed3e9-df82-461d-8b97-7565a38424e5"
    },
    {
        "label": "University of Canberra",
        "value": "12d7ec7e-3330-4788-b162-f3eb82bebab8"
    },
    {
        "label": "University of Canterbury",
        "value": "94882d60-6017-415c-90e9-2b99cc192ab9"
    },
    {
        "label": "University of Cape Town",
        "value": "83b7545d-c894-493f-9e0d-e212c5128e68"
    },
    {
        "label": "University of Central Arkansas",
        "value": "9e9b765a-edf6-46f0-b337-ad143751b6ee"
    },
    {
        "label": "University of Central Florida",
        "value": "73e53db4-dfe8-41f2-b8ad-b50cdb886438"
    },
    {
        "label": "University of Central Lancashire",
        "value": "30f922a5-9d2f-4479-a519-d87867ac5e8f"
    },
    {
        "label": "University of Central Missouri",
        "value": "8ccf1588-71d9-4473-bb6a-cead9bfa241e"
    },
    {
        "label": "University of Central Oklahoma",
        "value": "6125ea53-9f2e-44b2-ac62-d868cfa1a258"
    },
    {
        "label": "University of Charleston",
        "value": "6412d63c-8d81-4efe-9e02-c57d8e4e767c"
    },
    {
        "label": "University of Chicago",
        "value": "5dd993af-9705-4774-9324-a7a9c5238af2"
    },
    {
        "label": "University of Cincinnati",
        "value": "1835a68d-f181-48f3-8ff4-7995dcebcbfb"
    },
    {
        "label": "University of Cincinnati - UC Blue Ash College",
        "value": "56f2e794-b9ae-45e3-9308-f0d8230d9756"
    },
    {
        "label": "University of Coimbra",
        "value": "668f52f1-ee17-4015-a09c-a163372ad0c6"
    },
    {
        "label": "University of Colombo",
        "value": "eab9b8d7-9607-4195-9b38-8f2c19ef5709"
    },
    {
        "label": "University of Colorado - Boulder",
        "value": "80822a98-21ab-48d6-bfef-a9752c94887c"
    },
    {
        "label": "University of Colorado - Colorado Springs",
        "value": "e20890c9-024a-4196-9283-b003711c146d"
    },
    {
        "label": "University of Colorado - Denver",
        "value": "04e6fc9e-95a0-4393-b83b-c6d413342117"
    },
    {
        "label": "University of Connecticut",
        "value": "0cf51230-d640-4fc4-adee-ddf426d8904b"
    },
    {
        "label": "University of Copenhagen",
        "value": "27e20e84-5faa-4523-975f-9208830becaa"
    },
    {
        "label": "University of Crete",
        "value": "c2b681ad-a576-48c3-8bdb-c29348541ed1"
    },
    {
        "label": "University of Dallas",
        "value": "180407a5-c904-42a4-9b83-f1d955ec27c4"
    },
    {
        "label": "University of Dayton",
        "value": "2d2ea56a-7ed5-4fc7-9be3-d5a27c479b82"
    },
    {
        "label": "University of Debrecen",
        "value": "b6829568-9471-4f2f-a3cc-a0991d990d67"
    },
    {
        "label": "University of Delaware",
        "value": "11a7f9fc-5fff-4d90-877f-ca3d5944a03a"
    },
    {
        "label": "University of Delhi",
        "value": "cd51c35d-ecc4-44cf-a1c9-4ad156a825a9"
    },
    {
        "label": "University of Denver",
        "value": "05210791-e9f9-4f6e-b270-abf594bdc0c8"
    },
    {
        "label": "University of Detroit Mercy",
        "value": "dfb000ca-57fe-48d4-b3b4-a96fea5e0fa6"
    },
    {
        "label": "University of Dhaka",
        "value": "06d748c1-7673-4cbd-b329-085419c01d24"
    },
    {
        "label": "University of Dubuque",
        "value": "e0183d7a-f212-4d0d-b6be-7dd68f9c2d81"
    },
    {
        "label": "University of Dundee",
        "value": "06da767a-a9af-44d6-b036-f5a11315e00b"
    },
    {
        "label": "University of East Anglia (UEA)",
        "value": "b9442b61-9219-4abf-befa-ff5806b471f6"
    },
    {
        "label": "University of Eastern Finland",
        "value": "71ff7907-5078-46b6-9da4-40b996424aca"
    },
    {
        "label": "University of East London",
        "value": "278759b1-cb9d-4bdb-be3b-84eb2221e11f"
    },
    {
        "label": "University of Economics Prague",
        "value": "68db83db-7b0f-4756-a8b1-9c16e03c2b53"
    },
    {
        "label": "University of Edinburgh",
        "value": "7f0bd2bf-4e98-4b0f-9d8a-65827a5c834d"
    },
    {
        "label": "University of Engineering & Technology (UET) Lahore",
        "value": "1ea6f59d-60f6-422e-866f-8d87328616f0"
    },
    {
        "label": "University of Essex",
        "value": "4734079f-1fd3-4944-b8eb-17d6a0e7ef78"
    },
    {
        "label": "University of Evansville",
        "value": "55f6b248-520d-4344-a4f0-dd913f377258"
    },
    {
        "label": "University of Exeter",
        "value": "c53d00ed-3e73-4664-818b-e5a63e8a5889"
    },
    {
        "label": "University of Findlay",
        "value": "247d1dae-a340-4a95-bd09-cba3ddcf8319"
    },
    {
        "label": "University of Florence",
        "value": "ed7199d0-d0b8-47aa-86ea-ae6dd1d9a235"
    },
    {
        "label": "University of Florida",
        "value": "290fa695-4ab0-4d4b-aa5d-222b7c781013"
    },
    {
        "label": "University of Geneva",
        "value": "971044bf-2cba-4f39-8b81-35c8519a53a3"
    },
    {
        "label": "University of Genoa",
        "value": "1380e760-f9e5-4ecb-921f-f137f4364be1"
    },
    {
        "label": "University of Georgia",
        "value": "5c7296f3-ad94-4e16-a2b0-f97461ebc956"
    },
    {
        "label": "University of Ghent",
        "value": "de512d0c-e2e6-4ba2-aae0-37e27aef0d28"
    },
    {
        "label": "University of Glasgow",
        "value": "22503547-fbab-4979-8f80-5f3ca9a134f3"
    },
    {
        "label": "University of Gothenburg",
        "value": "09058a5c-0d81-46f7-814b-75c7dd2e730f"
    },
    {
        "label": "University of Granada",
        "value": "3ff98a52-c350-416b-a006-0f9e2b36fa95"
    },
    {
        "label": "University of Great Falls",
        "value": "60ecbd34-87d7-49eb-8da1-1bc58f0df8ff"
    },
    {
        "label": "University of Greenwich",
        "value": "63c7b42b-3ee5-4e29-ab1b-e2b231831483"
    },
    {
        "label": "University of Groningen",
        "value": "22d7e124-f09c-49a9-812b-cf78caba4ac5"
    },
    {
        "label": "University of Guam",
        "value": "0f67a1a3-fab6-4e70-9dc0-2f7d2512c13c"
    },
    {
        "label": "University of Guelph",
        "value": "c44092b4-dd35-4718-a126-95e82b52ba32"
    },
    {
        "label": "University of Hartford",
        "value": "c3a4bbee-7834-47d0-9619-99ab5aaada09"
    },
    {
        "label": "University of Hawaii - Hilo",
        "value": "17934558-c9af-4b5a-9ce0-17dd0b39f957"
    },
    {
        "label": "University of Hawaii - Manoa",
        "value": "b71a8457-6acf-434c-bad2-d052fb1eab03"
    },
    {
        "label": "University of Hawaii - Maui College",
        "value": "076ae9f3-3506-45a0-9fde-0541cfa3e826"
    },
    {
        "label": "University of Hawaii - West Oahu",
        "value": "94469874-3f00-4783-82a6-38547b6ffc8b"
    },
    {
        "label": "University of Helsinki",
        "value": "100eeaf6-b788-4304-b93e-69c794f7363d"
    },
    {
        "label": "University of Hertfordshire",
        "value": "83ecc41a-444c-4ada-a28e-d8910a6b3c3b"
    },
    {
        "label": "University of Hong Kong",
        "value": "5dc01d39-d02c-4ca6-9688-6073bbece5ef"
    },
    {
        "label": "University of Houston",
        "value": "a73cdb50-26e5-4912-9fff-0ec641cdc34b"
    },
    {
        "label": "University of Houston - Clear Lake",
        "value": "2f4ac20d-ddfc-44a9-b5c3-5221bbe77b94"
    },
    {
        "label": "University of Houston - Downtown",
        "value": "1de02777-63ea-447b-bfca-e01699f3271d"
    },
    {
        "label": "University of Houston - Victoria",
        "value": "5cbfc34e-3c74-49a1-844e-98c5c5fbc47c"
    },
    {
        "label": "University of Hull",
        "value": "2b8a5688-fa92-4972-b3b7-76137d8396bd"
    },
    {
        "label": "University of Idaho",
        "value": "d37abc71-e899-41e8-96c7-194535990069"
    },
    {
        "label": "University of Illinois - Chicago",
        "value": "895c7176-0851-462b-9e99-1f915e603c8a"
    },
    {
        "label": "University of Illinois - Springfield",
        "value": "b997c788-0cde-4e06-a707-e519f504c46b"
    },
    {
        "label": "University of Illinois - Urbana-Champaign",
        "value": "db3c8c60-5e27-4a05-af4d-546d46f5cfc1"
    },
    {
        "label": "University of Indianapolis",
        "value": "f8ce7dcd-2e20-4c5c-9842-27c48ac525c4"
    },
    {
        "label": "University of Indonesia",
        "value": "6ef30534-9017-4107-8eb7-53d334c3174c"
    },
    {
        "label": "University of Iowa",
        "value": "6c1c4eec-fd9b-4cf8-a02d-fd75fafb3108"
    },
    {
        "label": "University of Jamestown",
        "value": "9fc085ba-83ac-4822-81a9-e6e155fb59b0"
    },
    {
        "label": "University of Johannesburg",
        "value": "6fb32c0a-5a69-4d99-97b6-d7971161aaa3"
    },
    {
        "label": "University of Jordan",
        "value": "85e72b57-55dd-4ea6-98d6-bb19c389cf08"
    },
    {
        "label": "University of Jyväskylä",
        "value": "456a1ecf-f72e-465b-8f98-4eb495928de3"
    },
    {
        "label": "University of Kansas",
        "value": "c16657fa-cbb1-4033-a485-fe9d7fbc4126"
    },
    {
        "label": "University of Karachi",
        "value": "74380759-3498-40c1-b461-0fb323a66a95"
    },
    {
        "label": "University of Kent",
        "value": "05024df9-e1cf-40c8-affb-59f5d5f12902"
    },
    {
        "label": "University of Kentucky",
        "value": "7b347852-bebc-40da-b5b9-ed1920275af8"
    },
    {
        "label": "University of Kwazulu-Natal",
        "value": "b53d46bb-cfe0-4867-899d-4023a80b1d18"
    },
    {
        "label": "University of Lahore",
        "value": "461eae65-642c-49c0-8f6a-b704bdde595c"
    },
    {
        "label": "University of Latvia",
        "value": "35c67a78-243e-49fd-815d-24f7d17d90bc"
    },
    {
        "label": "University of Lausanne",
        "value": "d6facaed-5188-4e6a-b453-0bcc44fb6b58"
    },
    {
        "label": "University of La Verne",
        "value": "078d2ba1-cc23-408e-b445-cfffa6359bb0"
    },
    {
        "label": "University of Leeds",
        "value": "bc3713e9-e01f-4d66-b1bd-8b74d5d461c4"
    },
    {
        "label": "University of Leicester",
        "value": "073fe0f7-1f12-45f2-b110-f21190c5a507"
    },
    {
        "label": "University of Liege",
        "value": "d052c0e8-b414-4c23-a6fd-58191d944d7e"
    },
    {
        "label": "University of Limerick",
        "value": "392df247-959e-46f2-ae1c-9a3a0ee7dd4c"
    },
    {
        "label": "University of Lisbon",
        "value": "ecb0a84d-de46-4391-b2d2-7b8af6d1a3bb"
    },
    {
        "label": "University of Liverpool",
        "value": "9f2bc8c2-bec6-48b1-b0b3-4533b294e75a"
    },
    {
        "label": "University of Ljubljana",
        "value": "b9f5559c-0ecb-48ca-a940-eef50d5763e5"
    },
    {
        "label": "University of Louisiana - Lafayette",
        "value": "e1ce8e0d-8d33-4e23-8f73-f43a66139206"
    },
    {
        "label": "University of Louisiana - Monroe",
        "value": "ad5deb8c-fb4f-4775-b6ea-8573ca03c1ef"
    },
    {
        "label": "University of Louisville",
        "value": "bae5af66-2730-430b-ac47-8b6a71a69a91"
    },
    {
        "label": "University of Maine",
        "value": "600d36b9-6d92-4acc-845b-5babec66c839"
    },
    {
        "label": "University of Maine - Augusta",
        "value": "d4a762e1-1f9c-4164-9c21-625e3ceb8d39"
    },
    {
        "label": "University of Maine - Farmington",
        "value": "d26767bb-272a-4f31-82a0-c7659f214287"
    },
    {
        "label": "University of Maine - Fort Kent",
        "value": "65f0953a-de55-4a41-b451-dabe76de8154"
    },
    {
        "label": "University of Maine - Machias",
        "value": "0365d20d-a74d-4008-8090-83545a19d371"
    },
    {
        "label": "University of Maine - Presque Isle",
        "value": "4dd21c13-d940-436a-948d-6f39e61a2c20"
    },
    {
        "label": "University of Manitoba",
        "value": "421b109b-2662-4b05-8378-d96b0ed893bc"
    },
    {
        "label": "University of Mary",
        "value": "a9985239-c2e2-4ecb-9151-d3617b87263f"
    },
    {
        "label": "University of Mary Hardin-Baylor",
        "value": "8ec85adf-b217-48a7-b99f-950b8fed5f3c"
    },
    {
        "label": "University of Maryland - Baltimore",
        "value": "faf44a44-a917-4dc4-a76f-26a309bfdb9a"
    },
    {
        "label": "University of Maryland - Baltimore County",
        "value": "86d84d54-c2cb-4475-afa9-0a646331c808"
    },
    {
        "label": "University of Maryland - College Park",
        "value": "2d4b0665-7775-4f6d-9943-957a11142dfa"
    },
    {
        "label": "University of Maryland - Eastern Shore",
        "value": "81185204-3c46-4a61-b107-998b11cbb851"
    },
    {
        "label": "University of Maryland - University College",
        "value": "b5dbe14a-e7a3-4ee4-9d0b-d33f3c59ab63"
    },
    {
        "label": "University of Mary Washington",
        "value": "4def86fb-55da-413a-bddc-a7a523096de0"
    },
    {
        "label": "University of Massachusetts - Amherst",
        "value": "387d6313-da85-4f1d-836d-88b48e1c087e"
    },
    {
        "label": "University of Massachusetts - Boston",
        "value": "aa067176-06fc-4c77-8c5a-1ef3aae838a0"
    },
    {
        "label": "University of Massachusetts - Dartmouth",
        "value": "2da50f43-e40a-440d-a8ed-c666edddd569"
    },
    {
        "label": "University of Massachusetts - Lowell",
        "value": "124e7856-838b-4c36-bc31-d379bb0147ca"
    },
    {
        "label": "University of Medicine and Dentistry of New Jersey",
        "value": "7029eaca-044e-42cd-8639-0abe6f3818f6"
    },
    {
        "label": "University of Memphis",
        "value": "92b166a2-d721-45e1-98dd-862633225286"
    },
    {
        "label": "University of Miami",
        "value": "f966f38d-41c8-47a3-a3b3-31bc62464191"
    },
    {
        "label": "University of Michigan - Ann Arbor",
        "value": "85ad2eb3-a234-4a57-af09-4887ca9ea7e8"
    },
    {
        "label": "University of Michigan - Dearborn",
        "value": "114c2538-f50f-4636-b0b2-933d598327db"
    },
    {
        "label": "University of Michigan - Flint",
        "value": "580b16df-8d90-43b6-ad40-808509c7de8d"
    },
    {
        "label": "University of Milano",
        "value": "26b0afee-f48c-4a3d-a19e-bc1dd3f7613b"
    },
    {
        "label": "University of Milano-Bicocca",
        "value": "5c430ba4-b295-44a2-ba25-03057379dd0b"
    },
    {
        "label": "University of Minnesota - Crookston",
        "value": "962690c1-0cb0-4bdc-b06d-1e80202315c2"
    },
    {
        "label": "University of Minnesota - Duluth",
        "value": "84a51fe8-cb51-41ce-a846-11faa421389c"
    },
    {
        "label": "University of Minnesota - Morris",
        "value": "80e74742-3699-4f00-b757-a5b1a1335706"
    },
    {
        "label": "University of Minnesota - Twin Cities",
        "value": "8e4061b4-fcaa-4117-b976-3e27477274a5"
    },
    {
        "label": "University of Mississippi",
        "value": "00a793a0-e6cd-4575-97b4-f1504fb7237d"
    },
    {
        "label": "University of Mississippi Medical Center",
        "value": "f88dbdf9-4132-4510-9f3a-0f4255800742"
    },
    {
        "label": "University of Missouri",
        "value": "b8bcaa47-b39a-4820-a89f-51447d5b44f7"
    },
    {
        "label": "University of Missouri - Kansas City",
        "value": "ddf8ef70-8f9d-4d3f-9c21-ca836c9a2a92"
    },
    {
        "label": "University of Missouri - St. Louis",
        "value": "301e45ad-72b3-49b3-a0c6-dd7b77cd76f1"
    },
    {
        "label": "University of Mobile",
        "value": "6ca7ccd4-569b-4df3-856e-aa1dbec7d027"
    },
    {
        "label": "University of Modena",
        "value": "a506c634-a6e9-431d-ae5a-889987e1c198"
    },
    {
        "label": "University of Montana",
        "value": "8c9ab54a-6b6b-46f7-82b4-8603cd7589cb"
    },
    {
        "label": "University of Montana - Western",
        "value": "5e8b77b9-a5dd-4878-9ad8-aff460cf068a"
    },
    {
        "label": "University of Montevallo",
        "value": "1660e4fe-4189-40e5-82bc-81421517ecb0"
    },
    {
        "label": "University of Mount Union",
        "value": "1d18b09e-3141-41cd-bcc4-81c087efb29a"
    },
    {
        "label": "University of Mumbai",
        "value": "f0421fb5-b19b-45c6-b08a-df800d9a89d8"
    },
    {
        "label": "University Of Mumbai",
        "value": "959822de-d635-4b28-ba32-fb1ab1eecdbe"
    },
    {
        "label": "University of Murcia",
        "value": "3bf906a4-3151-4aa0-bf27-615fe56ba535"
    },
    {
        "label": "University of Naples - Federico Ii",
        "value": "a2f6fa79-550c-4d66-a6d1-b29f81de9a31"
    },
    {
        "label": "University of Navarra",
        "value": "c90cc678-0c82-4e20-94ce-2e604bce22f1"
    },
    {
        "label": "University of Nebraska - Kearney",
        "value": "eba7e7ec-6660-4c62-bc3b-2976f8e502a8"
    },
    {
        "label": "University of Nebraska - Lincoln",
        "value": "26c293e7-dd23-453e-8d0c-63aef4b3207e"
    },
    {
        "label": "University of Nebraska Medical Center",
        "value": "3b3dff30-6a72-4b86-97c4-b6ca0e009509"
    },
    {
        "label": "University of Nebraska - Omaha",
        "value": "2c64e8f3-040a-43d5-ae02-c18cee1be30c"
    },
    {
        "label": "University of Nevada - Las Vegas",
        "value": "a58e6e75-ac3c-4dcb-9be1-5b1c88dd49d9"
    },
    {
        "label": "University of Nevada - Reno",
        "value": "c1ac5f06-004e-420b-96fd-b0f5ddd7ecd5"
    },
    {
        "label": "University of New Brunswick",
        "value": "62560bda-6da2-496e-92c1-4ed06ca2e0f1"
    },
    {
        "label": "University of New England",
        "value": "3e2ce68c-5d5c-454e-a992-b418139a42bd"
    },
    {
        "label": "University of New England",
        "value": "f3430d2e-09f6-45e6-8d88-f388ff99157b"
    },
    {
        "label": "University of New Hampshire",
        "value": "887c0585-033c-4993-b030-71bb6362c1b7"
    },
    {
        "label": "University of New Haven",
        "value": "a770c59c-3bea-4075-888c-53397e30315c"
    },
    {
        "label": "University of New Mexico",
        "value": "1895bd60-394d-4511-a455-58088f700572"
    },
    {
        "label": "University of New Orleans",
        "value": "b1c8b2aa-ac18-4060-8215-1d395cb2ac75"
    },
    {
        "label": "University of New South Wales",
        "value": "491a6acf-d5ca-447f-be4f-a47de4714f57"
    },
    {
        "label": "University of North Alabama",
        "value": "aca2a29e-d794-4771-8675-09b6eb665965"
    },
    {
        "label": "University of North Carolina - Asheville",
        "value": "433327bf-dcce-4283-a434-3cddc1232af1"
    },
    {
        "label": "University of North Carolina - Chapel Hill",
        "value": "54596019-7617-41ae-af77-628c42dabc39"
    },
    {
        "label": "University of North Carolina - Charlotte",
        "value": "ee44c9fa-7a2c-471c-97c7-b2ea7e52a1b6"
    },
    {
        "label": "University of North Carolina - Greensboro",
        "value": "21411c4c-073c-4d91-91c0-8a4ff2846855"
    },
    {
        "label": "University of North Carolina - Pembroke",
        "value": "c35d6c33-fb7b-49b1-9696-c812b1020832"
    },
    {
        "label": "University of North Carolina School of the Arts",
        "value": "c05f8f61-a63a-4aaf-82fe-7954e7efb2de"
    },
    {
        "label": "University of North Carolina - Wilmington",
        "value": "5563a8c3-0718-466b-8603-a3186f9f5210"
    },
    {
        "label": "University of North Dakota",
        "value": "63d584ef-f81b-4c24-85c7-ffccc27f2a42"
    },
    {
        "label": "University of Northern Colorado",
        "value": "4785cd56-00e4-4826-90d0-c8ca33385bf1"
    },
    {
        "label": "University of Northern Iowa",
        "value": "89696038-1e18-43f7-bbf0-e274acdaff3a"
    },
    {
        "label": "University of North Florida",
        "value": "4ee57b5e-2fe8-4bfd-b050-4366fd597b7e"
    },
    {
        "label": "University of North Georgia",
        "value": "8b33e617-acf0-47d0-add5-63d0a9f919df"
    },
    {
        "label": "University of North Texas",
        "value": "9b3fcf20-fcef-4ef1-97cc-fe378da30c1e"
    },
    {
        "label": "University of Northwestern Ohio",
        "value": "31999e85-7e97-4045-883d-9d8448834e62"
    },
    {
        "label": "University of Northwestern - St. Paul",
        "value": "13a0e6e8-4396-4a1b-8231-3a40e4ffde6f"
    },
    {
        "label": "University of Notre Dame",
        "value": "f483f52d-6e4e-4eb6-8946-a43d2bdf409f"
    },
    {
        "label": "University of Nottingham",
        "value": "a6a91400-c99a-475f-81ac-187d7418753d"
    },
    {
        "label": "University of Oklahoma",
        "value": "854e32e3-d0a4-42c8-aa40-a979d9949851"
    },
    {
        "label": "University of Oregon",
        "value": "b8237e25-1283-4790-b725-f008614397b8"
    },
    {
        "label": "University of Oslo",
        "value": "6eb3d7d7-d54b-4df0-80ab-f3c10d138b1f"
    },
    {
        "label": "University of Otago",
        "value": "0ad426ce-ed90-4dc8-8eb5-504025ff999a"
    },
    {
        "label": "University of Ottawa",
        "value": "d4fe1300-811b-4bb3-a5ae-dfb3d2a609eb"
    },
    {
        "label": "University of Oulu",
        "value": "370877b8-d395-40f7-a053-e2fed2d6a58b"
    },
    {
        "label": "University of Oxford",
        "value": "7ad79f69-705a-46f4-83f9-9c67aa3f7d71"
    },
    {
        "label": "University of Padua",
        "value": "6d512b34-89c6-4518-ba4f-4d1ba904cf78"
    },
    {
        "label": "University of Patras",
        "value": "c153d5f4-0e61-474f-bc42-679c2b34a776"
    },
    {
        "label": "University of Pennsylvania",
        "value": "ef7fc6c1-dd39-412a-96c3-40ebaf7f2a6b"
    },
    {
        "label": "University of Phoenix",
        "value": "4be8b3be-ecda-4807-ab2b-cb0b606c33eb"
    },
    {
        "label": "University of Pikeville",
        "value": "ac8f38e4-204f-48db-8d50-b030afb6b904"
    },
    {
        "label": "University of Pisa",
        "value": "fe68c715-d9fc-4065-b8fd-17e6bce15217"
    },
    {
        "label": "University of Pittsburgh",
        "value": "a45730d0-0864-49de-9150-5c643cc5e134"
    },
    {
        "label": "University of Plymouth",
        "value": "fe4e7366-fb05-4578-9b30-68961b13a967"
    },
    {
        "label": "University of Portland",
        "value": "a5561ecd-e065-479a-85d3-19a5dc3c8d34"
    },
    {
        "label": "University of Porto",
        "value": "0d90b6d6-1079-4f38-b612-90ed6f74240b"
    },
    {
        "label": "University of Pretoria",
        "value": "f0e382b2-a57a-4221-ae44-7cf0a5693dd4"
    },
    {
        "label": "University of Prince Edward Island",
        "value": "a592aabb-265a-4955-b15b-a48d14c0d745"
    },
    {
        "label": "University of Puerto Rico - Aguadilla",
        "value": "c4b115d2-8cba-4bb0-bf67-a527e37d2bcd"
    },
    {
        "label": "University of Puerto Rico - Arecibo",
        "value": "c0af76ad-ba2d-42f0-9aac-f0bfca49a170"
    },
    {
        "label": "University of Puerto Rico - Bayamon",
        "value": "29ceab3d-da77-4dd6-9625-3521aaf4f79a"
    },
    {
        "label": "University of Puerto Rico - Cayey",
        "value": "e4b88494-40b1-41d6-b3a5-ad5e37434911"
    },
    {
        "label": "University of Puerto Rico - Humacao",
        "value": "05882362-0cd4-461b-9a38-08795f79f62e"
    },
    {
        "label": "University of Puerto Rico - Mayaguez",
        "value": "6902aafd-3067-4543-9a1e-4c04ec3969e0"
    },
    {
        "label": "University of Puerto Rico - Medical Sciences Campus",
        "value": "f9ecd367-ed3d-420a-ab32-d02019f25c29"
    },
    {
        "label": "University of Puerto Rico - Ponce",
        "value": "ae604d0a-1a1f-4a50-a36b-b11c53a45acb"
    },
    {
        "label": "University of Puerto Rico - Rio Piedras",
        "value": "32302015-ffe6-4f21-aa5e-96b46cf09ba4"
    },
    {
        "label": "University of Puget Sound",
        "value": "a817c798-42b8-41e3-bb67-f8ba53893f7a"
    },
    {
        "label": "University of Pune",
        "value": "1fee4eb6-5cb2-465a-bc2a-62d9d203a625"
    },
    {
        "label": "University of Reading",
        "value": "922e7b96-6344-463d-b08a-ff13be8beafd"
    },
    {
        "label": "University of Redlands",
        "value": "bedf4ab3-23e3-40d4-bc0a-d96331a7dfc8"
    },
    {
        "label": "University of Regina",
        "value": "7ee40d5d-8911-478e-ac13-b01f333418a6"
    },
    {
        "label": "University of Rhode Island",
        "value": "76d936a1-0c48-4594-b94d-56b700239445"
    },
    {
        "label": "University of Richmond",
        "value": "cefbf6c8-101e-4fa9-b868-3a5c24afdf42"
    },
    {
        "label": "University of Rio Grande",
        "value": "8df14682-b49e-4f9b-8672-92bacd8e88a7"
    },
    {
        "label": "University of Rochester",
        "value": "9e48edf2-e7b7-4585-ab6f-09394c01b30e"
    },
    {
        "label": "University of Salamanca",
        "value": "23bdc427-1845-4e7e-8f57-7c748ae194f9"
    },
    {
        "label": "University of Salford",
        "value": "55c78f91-3edb-4ee7-a1b6-a964c695a48a"
    },
    {
        "label": "University of San Diego",
        "value": "a923905d-8b44-45d9-81c9-83093e8cd319"
    },
    {
        "label": "University of San Francisco",
        "value": "bbd87c81-ce92-4143-82bc-737e0c75a44d"
    },
    {
        "label": "University of Santo Tomas",
        "value": "6ddcbc96-9d3c-4fa9-abc2-869de781008f"
    },
    {
        "label": "University of Saskatchewan",
        "value": "0519ef13-4d03-4dd8-abad-8636abf1b4b4"
    },
    {
        "label": "University of Science and Arts of Oklahoma",
        "value": "d7fad32d-b7e9-4796-8a0c-af960f8a08f2"
    },
    {
        "label": "University of Science and Technology Beijing",
        "value": "835309d5-e9af-4203-9388-e9503633aa07"
    },
    {
        "label": "University of Science and Technology of China",
        "value": "e56b7360-8aee-4746-8950-f13aafbd7726"
    },
    {
        "label": "University of Scranton",
        "value": "58d7b71c-48ee-4d08-a506-0e553f9c9181"
    },
    {
        "label": "University of Seoul",
        "value": "f1967f1a-a281-4b45-967c-ed3bff0d00ae"
    },
    {
        "label": "University of Sheffield",
        "value": "c3100b24-a279-4434-baa7-9ac1fa80e8a3"
    },
    {
        "label": "University of Siena",
        "value": "12d462b7-ffa2-4685-8481-816a84479007"
    },
    {
        "label": "University of Sioux Falls",
        "value": "c73ed465-afa2-4827-bef8-4bf3e52f8e95"
    },
    {
        "label": "University of South Alabama",
        "value": "de3164ad-c786-4fc0-bc76-99e75f309fb5"
    },
    {
        "label": "University of Southampton",
        "value": "ad9335c1-057f-4945-b32d-7680238a9af7"
    },
    {
        "label": "University of South Australia",
        "value": "923c546d-a39e-4b05-a860-a095b316d4ec"
    },
    {
        "label": "University of South Carolina",
        "value": "1e272e99-51c0-41f0-b5ad-89840563266f"
    },
    {
        "label": "University of South Carolina - Aiken",
        "value": "4434fab6-be05-4225-af94-d8147b820be4"
    },
    {
        "label": "University of South Carolina - Beaufort",
        "value": "912efbb3-a760-4769-8385-ae233189fe25"
    },
    {
        "label": "University of South Carolina - Upstate",
        "value": "5232fdbf-6ae6-41e6-90bb-3ecff5e99be4"
    },
    {
        "label": "University of South Dakota",
        "value": "0bb95868-8795-4f11-912a-6a2bcd3637fb"
    },
    {
        "label": "University of Southern California",
        "value": "53366102-50b2-4b52-8fde-697c7212e82f"
    },
    {
        "label": "University of Southern Denmark",
        "value": "7b8af91e-e518-4966-a81b-b8ed92d74fa0"
    },
    {
        "label": "University of Southern Indiana",
        "value": "4f330be9-1396-4712-a487-6878e7e3b33e"
    },
    {
        "label": "University of Southern Maine",
        "value": "0e7a5de7-fb0f-4d07-85fa-7482760cc40f"
    },
    {
        "label": "University of Southern Mississippi",
        "value": "9003575d-abd4-47f4-9e68-23a11bfbdd8f"
    },
    {
        "label": "University of Southern Queensland",
        "value": "f5abaa2b-45b2-420e-a717-d27269033fa6"
    },
    {
        "label": "University of South Florida",
        "value": "204cb8d4-b558-48ee-b750-0d6d3e81f299"
    },
    {
        "label": "University of South Florida - St. Petersburg",
        "value": "ac0b7a48-5c7d-44d8-a4c0-b68fd6091892"
    },
    {
        "label": "University of St Andrews",
        "value": "f9f9156a-deee-43ed-8a9e-e313e8115d05"
    },
    {
        "label": "University of St. Francis",
        "value": "c2b769c3-84f9-49af-845b-17344d28fd04"
    },
    {
        "label": "University of St Gallen (HSG)",
        "value": "cdccda04-77e9-4655-b404-c4c00430bed6"
    },
    {
        "label": "University of Stirling",
        "value": "11e173fc-d032-4d47-bb11-15c8e25d6274"
    },
    {
        "label": "University of St. Joseph",
        "value": "7f5c721a-4b82-42d0-bbdb-906cedc54f60"
    },
    {
        "label": "University of St. Kliment Ohridski",
        "value": "0a32a621-03af-4d90-b9f4-ffa6b0593141"
    },
    {
        "label": "University of St. Mary",
        "value": "8c9af6fa-2f9b-484c-bfbe-d9297bbb9562"
    },
    {
        "label": "University of Strathclyde",
        "value": "b93ee2cb-c475-49a8-b067-80b4c6ff6123"
    },
    {
        "label": "University of St. Thomas",
        "value": "71df90da-19b2-441f-9d9c-7f4b561486b1"
    },
    {
        "label": "University of Surrey",
        "value": "9b5fcd12-1116-458d-ba4b-4313a59af468"
    },
    {
        "label": "University of Sussex",
        "value": "10b5ca54-f6eb-425c-8b6c-c503172c4523"
    },
    {
        "label": "University of Sydney",
        "value": "2ce2d3c3-2608-48c6-9832-bbae6e19ef67"
    },
    {
        "label": "University of Szeged",
        "value": "f4e1cada-6884-410d-8bd4-731f4f60b9b6"
    },
    {
        "label": "University of Tampa",
        "value": "93a064f9-3a6b-4624-a2e1-e6dbd4cd0c12"
    },
    {
        "label": "University of Tampere",
        "value": "4fe3add2-80f4-46dd-a2bd-d6cb0251738b"
    },
    {
        "label": "University of Tartu",
        "value": "24daf1e5-4bd9-4b5c-a2f0-2087d39cf743"
    },
    {
        "label": "University of Tasmania",
        "value": "1a7d49b9-d820-4c9a-9094-2822476a7314"
    },
    {
        "label": "University of Technology, Sydney",
        "value": "7aa802bc-a2d6-4464-9464-0a06b2b1d5a7"
    },
    {
        "label": "University of Tehran",
        "value": "3846abea-c099-420d-b09b-bc95af4073b3"
    },
    {
        "label": "University of Tennessee",
        "value": "34e5be57-0040-4db2-8b47-8566bd0a050b"
    },
    {
        "label": "University of Tennessee - Chattanooga",
        "value": "6a7cf3c2-7ce0-4a20-8eea-cb686d0035a7"
    },
    {
        "label": "University of Tennessee - Martin",
        "value": "5894a7d8-1341-4ac8-a9a9-3af5ce4496d3"
    },
    {
        "label": "University of Texas - Arlington",
        "value": "2d6073a5-6a0c-494e-9856-6e1ba28c88f6"
    },
    {
        "label": "University of Texas - Austin",
        "value": "1373d683-aa7a-4f41-aa8c-9182405e4ab3"
    },
    {
        "label": "University of Texas - Brownsville",
        "value": "56fbce80-4ed5-4829-910b-d1883284ca66"
    },
    {
        "label": "University of Texas - Dallas",
        "value": "df6a9db2-8695-452b-8a02-f46bdebc3306"
    },
    {
        "label": "University of Texas - El Paso",
        "value": "7c8898e0-1491-423d-9f37-4a06c7a6637d"
    },
    {
        "label": "University of Texas Health Science Center - Houston",
        "value": "d7a5ed18-bf96-4bee-ad05-8e6b71cf82e3"
    },
    {
        "label": "University of Texas Health Science Center - San Antonio",
        "value": "f725b781-09bc-41b0-a348-853ede176bf6"
    },
    {
        "label": "University of Texas Medical Branch - Galveston",
        "value": "2bc04632-f567-4eb1-8c8d-e08013898116"
    },
    {
        "label": "University of Texas of the Permian Basin",
        "value": "bd4e33c6-869c-425d-ab78-cbd2cdc4137b"
    },
    {
        "label": "University of Texas - Pan American",
        "value": "7435ab7a-1bd3-4ccc-a3df-76691ed9a26b"
    },
    {
        "label": "University of Texas - San Antonio",
        "value": "a4ced7ed-3830-4a54-855f-cb0fac584f8b"
    },
    {
        "label": "University of Texas - Tyler",
        "value": "a166f4e3-447d-40e3-9390-281608fc99e0"
    },
    {
        "label": "University of the Arts",
        "value": "c249662e-1d23-4098-a92d-396db008edc0"
    },
    {
        "label": "University of the Cumberlands",
        "value": "b9f4e991-6a8d-4854-ace5-ef929630b7f1"
    },
    {
        "label": "University of the District of Columbia",
        "value": "52ed6583-dda7-41ae-9f04-2f085c32a81b"
    },
    {
        "label": "University of the Incarnate Word",
        "value": "24983b22-ccc9-42a4-a634-2d1bfba2863b"
    },
    {
        "label": "University of the Ozarks",
        "value": "b1fd42ff-8c7d-4c5f-ae0e-5eea8205d040"
    },
    {
        "label": "University of the Pacific",
        "value": "a037ecc2-6fa8-4330-8a0e-3b7a84dd5052"
    },
    {
        "label": "University of the Philippines",
        "value": "3faf35e4-6128-4dd4-890e-92618d482e53"
    },
    {
        "label": "University of the Sacred Heart",
        "value": "30298499-b44e-4c3d-bc1b-ad5a3fbe3dc0"
    },
    {
        "label": "University of the Sciences",
        "value": "7244984a-fd8c-43e0-a24b-8f3cd847855d"
    },
    {
        "label": "University of the Southwest",
        "value": "b2b74ff3-0b4a-4195-9d21-8b1c8bcec83e"
    },
    {
        "label": "University of the Virgin Islands",
        "value": "76352c12-2593-408e-8db9-e7ffb4a75f4b"
    },
    {
        "label": "University of the West",
        "value": "6844d541-747d-4b46-b8e0-fe930e3d8b0e"
    },
    {
        "label": "University of The Witwatersrand",
        "value": "dfd37189-b403-4985-899c-1c0e7d2c1a48"
    },
    {
        "label": "University of Toledo",
        "value": "b86aadda-f19a-425b-8fdd-6a46e0411dce"
    },
    {
        "label": "University of Toronto",
        "value": "5ccf3571-a036-4bb8-a053-0495c297084c"
    },
    {
        "label": "University of Trento",
        "value": "91e07f53-39b0-4db0-9d71-983101977743"
    },
    {
        "label": "University of Trieste",
        "value": "8ee45b21-55fe-4d75-8d43-4c345732b8ba"
    },
    {
        "label": "University of Tromso",
        "value": "4b11abad-71fb-4a76-9623-6ceb66aea01c"
    },
    {
        "label": "University of Tsukuba",
        "value": "63719799-2293-4fce-8385-dd3ca83d775d"
    },
    {
        "label": "University of Tulsa",
        "value": "fecb35cd-f1b4-4980-b6fe-92de6ae3c715"
    },
    {
        "label": "University of Turin",
        "value": "46896220-2807-4916-b2a8-f57f4e8b3f08"
    },
    {
        "label": "University of Turku",
        "value": "5ac7e30d-f8d3-4feb-b1e6-32a333436231"
    },
    {
        "label": "University of Twente",
        "value": "9d43adda-2741-426d-a441-948ebf87b71a"
    },
    {
        "label": "University of Ulsan",
        "value": "4ae8e6d0-fc07-4dc5-9852-6456f376002d"
    },
    {
        "label": "University of Ulster",
        "value": "d1ea742e-ca41-475e-9fd5-d8101512aeb1"
    },
    {
        "label": "University of Utah",
        "value": "8b090b1d-8a8b-43df-b8df-ba280a91f622"
    },
    {
        "label": "University of Vermont",
        "value": "c295af19-c6aa-4854-b5b9-48d91189486c"
    },
    {
        "label": "University of Victoria",
        "value": "53f5f6f2-53cb-4f63-83d4-823c07252062"
    },
    {
        "label": "University of Vienna",
        "value": "3a88bc9d-a647-4146-8351-ca0b4ad913a5"
    },
    {
        "label": "University of Virginia",
        "value": "670bbac6-cf94-46a1-b872-a5f2f18ff67e"
    },
    {
        "label": "University of Virginia - Wise",
        "value": "2bfed2e7-ecdb-4636-8e80-75be0d87239c"
    },
    {
        "label": "University of Waikato",
        "value": "f43e8284-ed83-42a7-90b4-bcf70eef7898"
    },
    {
        "label": "University of Warsaw",
        "value": "6bdba822-7c02-4579-9ad7-5f77add11ff3"
    },
    {
        "label": "University of Warwick",
        "value": "b2cccaa5-0802-4a96-83ee-7b95404b98cb"
    },
    {
        "label": "University of Washington",
        "value": "0edb617c-8170-4c96-a68e-3f84dbfbafaf"
    },
    {
        "label": "University of Waterloo",
        "value": "ca89ff63-788c-4a32-9067-8c91d246b22b"
    },
    {
        "label": "University of West Alabama",
        "value": "b6fcc943-8a6a-4da7-bc03-16da5c2652aa"
    },
    {
        "label": "University of Western Sydney",
        "value": "9dc3f526-dcc2-4aba-bbf1-036a44d7ea26"
    },
    {
        "label": "University of West Florida",
        "value": "8154fc41-9a03-41f8-8ba8-dc5cf271db95"
    },
    {
        "label": "University of West Georgia",
        "value": "7ed96b75-187f-47b8-b196-59053869b7f6"
    },
    {
        "label": "University of Windsor",
        "value": "31ac10ba-3373-4c6a-8ff8-1314cd27dc84"
    },
    {
        "label": "University of Winnipeg",
        "value": "62224cfa-9b8f-4be4-8558-77fec19bd05c"
    },
    {
        "label": "University of Wisconsin - Eau Claire",
        "value": "23186fe1-c2f9-4959-a3f5-c7e164e8ec6d"
    },
    {
        "label": "University of Wisconsin - Green Bay",
        "value": "a53ed8b2-c2cd-43bd-9769-ad49e7150029"
    },
    {
        "label": "University of Wisconsin - La Crosse",
        "value": "64f6aac5-3f58-4ddd-bc7b-ac430a15a8d3"
    },
    {
        "label": "University of Wisconsin - Madison",
        "value": "9cc149a6-633e-4a4b-bcf7-8770df1448a2"
    },
    {
        "label": "University of Wisconsin - Milwaukee",
        "value": "043bffa3-d523-442d-a952-2a144ffb9586"
    },
    {
        "label": "University of Wisconsin - Oshkosh",
        "value": "d3ec15ba-e7da-4396-88e7-094416027371"
    },
    {
        "label": "University of Wisconsin - Parkside",
        "value": "28c45ffd-d87d-44ee-ac58-852381bedb00"
    },
    {
        "label": "University of Wisconsin - Platteville",
        "value": "6e9e9546-df4c-4128-839e-16cce2401566"
    },
    {
        "label": "University of Wisconsin - River Falls",
        "value": "5d42f951-fa82-4889-81f1-e802eb7c1436"
    },
    {
        "label": "University of Wisconsin - Stevens Point",
        "value": "3381629f-5888-4478-87ae-fdd3d56365c2"
    },
    {
        "label": "University of Wisconsin - Stout",
        "value": "21dedb1f-7cf9-43f9-8f24-c90208e5a588"
    },
    {
        "label": "University of Wisconsin - Superior",
        "value": "edc89854-afc9-433c-8101-69d6b60a0662"
    },
    {
        "label": "University of Wisconsin - Whitewater",
        "value": "30ad4cb6-ad69-45a9-8a08-0fcd39b34ef8"
    },
    {
        "label": "University of Wollongong",
        "value": "5e3d8154-4069-48d6-abe1-d68204b773dd"
    },
    {
        "label": "University of Wroclaw",
        "value": "38b90334-22c4-464d-b2a2-b95302999e54"
    },
    {
        "label": "University of Wyoming",
        "value": "0ac24796-175c-4a1b-8a2b-4d2be032701a"
    },
    {
        "label": "University of York",
        "value": "b87fd173-56f0-4f52-8e89-da270faaadeb"
    },
    {
        "label": "University of Zagreb",
        "value": "19f11b56-f222-488d-b811-9a0ed24c5402"
    },
    {
        "label": "University of Zurich",
        "value": "82c1a314-7f6a-4886-bb14-46d4495229ac"
    },
    {
        "label": "Upper Iowa University",
        "value": "60c1ea24-12a6-4971-a18b-ccf60f3f8357"
    },
    {
        "label": "Uppsala University",
        "value": "167c0f6f-60d1-4765-a2a8-38f349d296b9"
    },
    {
        "label": "Ural Federal University",
        "value": "b116ce88-6a97-4c0d-b7f8-43abf9d12c2a"
    },
    {
        "label": "Urbana University",
        "value": "406d9a10-674c-4425-bd5d-a2113e44ab1c"
    },
    {
        "label": "Ursinus College",
        "value": "05e7659d-7b98-48e8-996a-a7f2859caef9"
    },
    {
        "label": "Ursuline College",
        "value": "989e7c3c-efc6-4bcc-aac7-a1ca02c5fddc"
    },
    {
        "label": "Utah State University",
        "value": "f7381bc9-504f-4ee3-90bf-c2e06e516779"
    },
    {
        "label": "Utah Valley University",
        "value": "ed9f0a66-9f44-4fe8-bf7e-851624bee021"
    },
    {
        "label": "Utica College",
        "value": "e62e6095-9370-434f-97ce-db1c1536b9e2"
    },
    {
        "label": "Utrecht University",
        "value": "574d4283-01e1-4545-8496-a49432cb264d"
    },
    {
        "label": "Valdosta State University",
        "value": "8ae57e31-87d8-44b5-b2e0-5627bcc0d00d"
    },
    {
        "label": "Valley City State University",
        "value": "42692540-6eae-4927-aa8e-b392ffa84694"
    },
    {
        "label": "Valley Forge Christian College",
        "value": "4840243a-e265-4d7d-b1d3-64856f971c22"
    },
    {
        "label": "Valparaiso University",
        "value": "fd929d1e-6d0c-472e-af58-3d376eb15581"
    },
    {
        "label": "Vanderbilt University",
        "value": "4f8bac87-adcc-47c2-86e7-6675befa9bbc"
    },
    {
        "label": "VanderCook College of Music",
        "value": "82be53e4-0898-4284-a7e4-9ad445d30765"
    },
    {
        "label": "Vanguard University of Southern California",
        "value": "b6c39f3e-6ab5-4f9e-a2b7-bdb2d77b3793"
    },
    {
        "label": "Vassar College",
        "value": "f8be6479-2f05-4c59-b076-eff32fd65bdc"
    },
    {
        "label": "Vaughn College of Aeronautics and Technology",
        "value": "01fd5ec3-fe6d-4e19-b99d-ff5a16106a8c"
    },
    {
        "label": "Vellore Institute of Technology",
        "value": "49471aad-b893-4b2c-be49-a899e3c00f1b"
    },
    {
        "label": "Vermont Technical College",
        "value": "e0150038-77e6-4842-89ff-2af6f42662e1"
    },
    {
        "label": "Verona University",
        "value": "5653faf2-4452-4e56-b2f9-7d03706f6afc"
    },
    {
        "label": "Victoria University",
        "value": "42b0d3dd-b992-4958-b286-a18741311dc7"
    },
    {
        "label": "Victoria University of Wellington",
        "value": "de173709-80dc-4093-b9bb-48889421db08"
    },
    {
        "label": "Victory University",
        "value": "c6756d5e-705a-46ee-be8c-8ff153c83545"
    },
    {
        "label": "Vienna University of Technology",
        "value": "303e828e-ccff-4a6e-80c8-a2cc6435c4eb"
    },
    {
        "label": "Villanova University",
        "value": "f1b556ee-3c57-4a07-a96d-c10fb28a18a4"
    },
    {
        "label": "Vilnius Gediminas Technical University",
        "value": "417ee09c-3e54-41f9-b1c4-66518d573866"
    },
    {
        "label": "Vilnius University",
        "value": "c2d19ee6-6a6a-463d-8be3-10c2bdb96e59"
    },
    {
        "label": "Vincennes University",
        "value": "74ab060a-b899-4044-abc6-a2be8d3638ad"
    },
    {
        "label": "Virginia Commonwealth University",
        "value": "ee9d6515-f1ff-4d49-b3c9-a3b283714300"
    },
    {
        "label": "Virginia Intermont College",
        "value": "d0a963c9-92f7-4db2-ba30-c61b4ad483c5"
    },
    {
        "label": "Virginia Military Institute",
        "value": "bfd6d454-4357-433f-a348-57c4c065b79f"
    },
    {
        "label": "Virginia State University",
        "value": "8b60c48a-3615-4d66-8117-609c5e438850"
    },
    {
        "label": "Virginia Tech",
        "value": "02a09877-7a80-4740-a3f8-373bfe7b6fb0"
    },
    {
        "label": "Virginia Union University",
        "value": "b7cb987d-ceae-4676-b214-a0158d6e3dec"
    },
    {
        "label": "Virginia Wesleyan College",
        "value": "07c2c6a5-eabb-4b40-b6f2-2f1c2587e2de"
    },
    {
        "label": "Viterbo University",
        "value": "072b1369-e0aa-4256-84c2-56b0b012944c"
    },
    {
        "label": "V.N. Karazin Kharkiv National University",
        "value": "844095b7-f659-4405-a747-595ee58c49f7"
    },
    {
        "label": "Voorhees College",
        "value": "de788bf9-306e-483f-a0b0-3338a8f3d114"
    },
    {
        "label": "Voronezh State University",
        "value": "ec637c31-02f8-4e8e-b220-00276dd4021b"
    },
    {
        "label": "Vrije Universiteit Brussel (VUB)",
        "value": "bfd9acf7-ef36-4a96-be33-30321b598928"
    },
    {
        "label": "VU University Amsterdam",
        "value": "ff8d2463-0c31-4ead-bd17-a9917aad09d8"
    },
    {
        "label": "Vytautas Magnus University",
        "value": "66878f43-c2d5-4cb0-9b81-2bbef9d286cb"
    },
    {
        "label": "Wabash College",
        "value": "ac0855ee-dfe1-42b9-a923-c70186e58b20"
    },
    {
        "label": "Wageningen University",
        "value": "b036f169-a45b-4ebb-8cf2-3cee5b8e9180"
    },
    {
        "label": "Wagner College",
        "value": "ed098811-c9e8-46af-8fd3-65cda103376d"
    },
    {
        "label": "Wake Forest University",
        "value": "058093a5-6288-485d-af7d-200ffec883e2"
    },
    {
        "label": "Walden University",
        "value": "1c6caa30-810e-4ea1-b885-f198841e5be6"
    },
    {
        "label": "Waldorf College",
        "value": "01dd7a62-86d0-4d54-ae46-f94979c8b4fa"
    },
    {
        "label": "Walla Walla University",
        "value": "27fa0853-ceca-4171-b0f5-6aefeaa04cbe"
    },
    {
        "label": "Walsh College of Accountancy and Business Administration",
        "value": "15c56aa4-dff2-4b92-a22d-32447c5f502a"
    },
    {
        "label": "Walsh University",
        "value": "656e6781-a12c-449f-9933-ed6144f5ea33"
    },
    {
        "label": "Warner Pacific College",
        "value": "2d3ef326-0778-4a3b-965c-c6337b611015"
    },
    {
        "label": "Warner University",
        "value": "bd28f62f-afee-402d-86d1-6d2a1fe9b7f7"
    },
    {
        "label": "Warren Wilson College",
        "value": "4eb6b76c-c790-4089-b47c-b41f25732677"
    },
    {
        "label": "Warsaw University of Technology",
        "value": "510663ab-92fb-48e2-a5d5-cd001b7677ab"
    },
    {
        "label": "Wartburg College",
        "value": "1cb47431-d71a-46cb-97ab-aacd8cfc59ec"
    },
    {
        "label": "Waseda University",
        "value": "f4e6ae66-90eb-4edc-bf79-8c39a717e21e"
    },
    {
        "label": "Washburn University",
        "value": "5c51cd44-82b5-4fac-ad5e-baa85f025e06"
    },
    {
        "label": "Washington Adventist University",
        "value": "b26e396c-f9ca-432e-9a0e-ab9e84aa55d8"
    },
    {
        "label": "Washington and Jefferson College",
        "value": "4b5c201a-ff16-4717-bb8e-631db6b6f7e4"
    },
    {
        "label": "Washington and Lee University",
        "value": "406b834e-0785-47fa-86e5-e45572701cad"
    },
    {
        "label": "Washington College",
        "value": "fe0dadce-8cc6-4f10-808f-58e7797495f1"
    },
    {
        "label": "Washington State University",
        "value": "369d9b7b-449f-4d89-a4ab-7141d12b2d44"
    },
    {
        "label": "Washington University in St. Louis",
        "value": "d9173bd6-67df-4ff9-a40f-681c9aae8e5f"
    },
    {
        "label": "Watkins College of Art, Design & Film",
        "value": "6ea11e11-f2d7-407b-86e3-5035a6b5346a"
    },
    {
        "label": "Wayland Baptist University",
        "value": "2adc916c-d182-4ed0-afb0-1d5827089e4f"
    },
    {
        "label": "Waynesburg University",
        "value": "3763d89c-1a7b-443b-91bb-fb94a29646a5"
    },
    {
        "label": "Wayne State College",
        "value": "35100c35-ebe3-423f-ab69-c17e83e82b1f"
    },
    {
        "label": "Wayne State University",
        "value": "5e30d486-61d4-4f31-a578-918d40c0b29a"
    },
    {
        "label": "Webber International University",
        "value": "94b84d39-c5fa-4ee8-9006-1b504386edef"
    },
    {
        "label": "Webb Institute",
        "value": "c5f73fd8-c153-4385-9742-424be9cd1d9d"
    },
    {
        "label": "Weber State University",
        "value": "9944b050-8008-41e1-b775-ecc22cdaad62"
    },
    {
        "label": "Webster University",
        "value": "a2f508ab-c98c-45df-87ca-c8985a7ebc7a"
    },
    {
        "label": "Welch College",
        "value": "5684e2c0-90ae-4aa2-8fc9-1b29952fc5f5"
    },
    {
        "label": "Wellesley College",
        "value": "3710e204-161b-484d-8e1e-329af3b9c4b8"
    },
    {
        "label": "Wells College",
        "value": "8d8eaaa4-9db3-4a12-9625-b05cc9c3dbe6"
    },
    {
        "label": "Wentworth Institute of Technology",
        "value": "a6faf78a-7320-4ea4-bd20-3dcf34eac30b"
    },
    {
        "label": "Wesleyan College",
        "value": "7a6a9c40-b6db-4774-af36-9f6ef8af67f7"
    },
    {
        "label": "Wesleyan University",
        "value": "17843bec-5de9-433d-974e-2264f42d03e8"
    },
    {
        "label": "Wesley College",
        "value": "cb975166-23ca-4904-9b39-93fbbd9e020a"
    },
    {
        "label": "West Chester University of Pennsylvania",
        "value": "857b7ac2-7ab0-499e-a70e-b8fb58495a48"
    },
    {
        "label": "Western Carolina University",
        "value": "3a9abd6d-6ba2-42d1-9a9e-14542744f239"
    },
    {
        "label": "Western Connecticut State University",
        "value": "189b16d0-6cff-490f-a466-3142d53da866"
    },
    {
        "label": "Western Governors University",
        "value": "073b6a78-9426-4801-8c89-87219ef224d7"
    },
    {
        "label": "Western Illinois University",
        "value": "8df24f45-db64-47e7-9635-774d4c777a4d"
    },
    {
        "label": "Western International University",
        "value": "c0ca2902-9a98-4d2f-97d9-bc965e645a38"
    },
    {
        "label": "Western Kentucky University",
        "value": "71e18eee-b83e-447d-855c-597308afc562"
    },
    {
        "label": "Western Michigan University",
        "value": "56b73b8d-a529-40cb-8c60-c484a9a5ad80"
    },
    {
        "label": "Western Nevada College",
        "value": "185b51e2-6cd0-4569-95bb-33625a406593"
    },
    {
        "label": "Western New England University",
        "value": "f66b0368-ffdb-4649-808d-a0d7ec889526"
    },
    {
        "label": "Western New Mexico University",
        "value": "9ec331c6-09c6-48f4-acbd-571ccc8e921d"
    },
    {
        "label": "Western Oregon University",
        "value": "caa0d631-b21b-42c0-8e21-05a37e1072c9"
    },
    {
        "label": "Western State Colorado University",
        "value": "4966fb99-4b51-4e40-a1cd-a4085c2b58ef"
    },
    {
        "label": "Western University",
        "value": "e0e4dc13-f9f8-494d-aa4b-c916a5a3ca3c"
    },
    {
        "label": "Western Washington University",
        "value": "74e1852a-d775-47c5-995d-55cfeb7b72cc"
    },
    {
        "label": "Westfälische Wilhelms-Universität Münster",
        "value": "4c09f143-7449-41df-b801-edd942598abc"
    },
    {
        "label": "Westfield State University",
        "value": "52add87c-f289-4131-9322-e8112eb42e2a"
    },
    {
        "label": "West Liberty University",
        "value": "f7093245-00a2-44c0-a83a-969c6f2a7048"
    },
    {
        "label": "Westminster College",
        "value": "6156123a-202f-4466-8dcd-4cdf07c72a0b"
    },
    {
        "label": "Westmont College",
        "value": "38703af6-8344-46f6-ada4-2f456dd396c6"
    },
    {
        "label": "West Texas A&M University",
        "value": "147eb6ec-f985-443f-8d5d-d2b107915aca"
    },
    {
        "label": "West University of Timisoara",
        "value": "d92865da-0ccc-44e1-ac91-e06052da8a93"
    },
    {
        "label": "West Virginia State University",
        "value": "44ee156b-96d2-4680-8dbc-73ce6013e5f7"
    },
    {
        "label": "West Virginia University",
        "value": "c6e326d4-fd3d-425a-9f75-3564ee26f228"
    },
    {
        "label": "West Virginia University Institute of Technology",
        "value": "580185a8-68f9-4c76-b7b3-cca5d7207d7b"
    },
    {
        "label": "West Virginia University - Parkersburg",
        "value": "7baa32ed-6e99-4efe-9ccb-160e3eec2e16"
    },
    {
        "label": "West Virginia Wesleyan College",
        "value": "076195bb-dac2-48e5-9db3-19e8ff1e30ac"
    },
    {
        "label": "Wheaton College",
        "value": "8205c64c-6c90-48d2-9037-0526afd59f3a"
    },
    {
        "label": "Wheeling Jesuit University",
        "value": "884f8722-6237-4ce2-b582-b7641152343f"
    },
    {
        "label": "Wheelock College",
        "value": "8bdd835e-f0c3-4a13-b82e-a56b469fba28"
    },
    {
        "label": "Whitman College",
        "value": "a82e2c49-439b-45a9-9b10-e5df0a6805cf"
    },
    {
        "label": "Whittier College",
        "value": "8df5b979-3f0b-4bca-9c3a-a4c505e3f120"
    },
    {
        "label": "Whitworth University",
        "value": "998ea725-041c-4f51-87c7-b2ece3f61a3a"
    },
    {
        "label": "WHU - Otto Beisheim School of Management",
        "value": "fe890682-341f-4250-9f34-9cb4f37d8ea6"
    },
    {
        "label": "Wichita State University",
        "value": "c0090645-4f00-46a3-b5a1-67a82518ede3"
    },
    {
        "label": "Widener University",
        "value": "676a4044-e215-4b39-bf46-e2e823bc88e7"
    },
    {
        "label": "Wilberforce University",
        "value": "c1ec064e-6aa1-40d7-ab79-4f25963cce0f"
    },
    {
        "label": "Wilbur Wright College - City Colleges of Chicago",
        "value": "356adb44-db97-418c-aa03-93f16168b4c9"
    },
    {
        "label": "Wiley College",
        "value": "37eb1ac0-ba09-4f22-ace5-33c94aa28275"
    },
    {
        "label": "Wilfrid Laurier University",
        "value": "ee1c6deb-dade-4a61-a823-97e96f489c6a"
    },
    {
        "label": "Wilkes University",
        "value": "4738ba9f-aca4-416e-96c5-bfc555f57c7d"
    },
    {
        "label": "Willamette University",
        "value": "9cf988b4-7ca0-481b-994a-dad215b0334b"
    },
    {
        "label": "William Carey University",
        "value": "0a51ed2e-0f71-47a3-9ea0-2e2b717ea7d5"
    },
    {
        "label": "William Jessup University",
        "value": "1257cbb2-d39c-4a7a-8da7-0e204b1a2a9a"
    },
    {
        "label": "William Jewell College",
        "value": "bdca9302-7cae-4963-b3a8-7657eefaf6af"
    },
    {
        "label": "William Paterson University of New Jersey",
        "value": "de6eda5f-3a3a-43f1-bbeb-d76aeb0e9af8"
    },
    {
        "label": "William Peace University",
        "value": "d80051bf-c7fd-408c-9c70-74070be8b12f"
    },
    {
        "label": "William Penn University",
        "value": "72b79817-e5a0-497d-84e6-d01558802f95"
    },
    {
        "label": "Williams Baptist College",
        "value": "88bf6ba1-22aa-4462-be2f-8a01577cf716"
    },
    {
        "label": "Williams College",
        "value": "25584bf9-4525-4c61-9203-a0f82b82571a"
    },
    {
        "label": "William Woods University",
        "value": "b7ed4550-ff61-4220-82ae-2871a20f07e4"
    },
    {
        "label": "Wilmington College",
        "value": "5d6d1e21-3609-42f9-b148-badf41649bbf"
    },
    {
        "label": "Wilmington University",
        "value": "8295b324-5e4d-4686-9f8e-7f4b81b1f393"
    },
    {
        "label": "Wilson College",
        "value": "0f44f87c-a0b1-4694-9d21-2c7680f9e44f"
    },
    {
        "label": "Wingate University",
        "value": "e766f373-c998-4dbb-b167-53f4606cb052"
    },
    {
        "label": "Winona State University",
        "value": "0d16fed3-4342-4491-8dfd-e039124ce928"
    },
    {
        "label": "Winston-Salem State University",
        "value": "81b76888-fe8b-49f9-a495-e30c8c8d34c5"
    },
    {
        "label": "Winthrop University",
        "value": "ba08449b-2960-4070-a620-7f8e93666cd3"
    },
    {
        "label": "Wisconsin Lutheran College",
        "value": "e5e67c61-a15b-405a-b7b0-75c3dea6f8de"
    },
    {
        "label": "Wittenberg University",
        "value": "306652c0-a5f5-4401-83b1-870e3a5e8a9b"
    },
    {
        "label": "Wofford College",
        "value": "66da45de-bda6-4302-a644-a8a97c964138"
    },
    {
        "label": "Woodbury University",
        "value": "39fb75cb-0b27-44d3-b034-d8d9741b5359"
    },
    {
        "label": "Worcester Polytechnic Institute",
        "value": "86ff854c-e494-4a31-a940-df3d1c8d204e"
    },
    {
        "label": "Worcester State University",
        "value": "71aca55a-822a-44d8-aa42-e31527b5bb8f"
    },
    {
        "label": "Wright State University",
        "value": "90965faf-c2d3-41af-9f69-a373dccd0802"
    },
    {
        "label": "Wuhan University",
        "value": "b25bcba5-c122-4644-ba38-04297da2647f"
    },
    {
        "label": "Xavier University",
        "value": "376c5814-6360-49ff-844a-d0219210686f"
    },
    {
        "label": "Xavier University of Louisiana",
        "value": "97b505f3-abc4-4f76-9a06-32d522b45dba"
    },
    {
        "label": "Xiamen University",
        "value": "56e922d5-f22d-43c7-ad26-9db2eb80c7ac"
    },
    {
        "label": "Xi'an Jiaotong University",
        "value": "8bd31aac-6d9c-4814-a7ec-f058e90d885d"
    },
    {
        "label": "Yale University",
        "value": "3c243516-a02e-47ef-bb57-b0257f65ed47"
    },
    {
        "label": "Yamaguchi University",
        "value": "a8b38329-2a6c-490e-9977-f9a6e0d1b4a3"
    },
    {
        "label": "Yeshiva University",
        "value": "973cac2a-99de-48b1-89bf-a72d4c593918"
    },
    {
        "label": "Yokohama City University",
        "value": "91498a2d-279c-4ab8-b73d-ff035ee632ff"
    },
    {
        "label": "Yokohama National University",
        "value": "1d57406c-159e-47f2-bdfe-da3bded6c03d"
    },
    {
        "label": "Yonsei University",
        "value": "bb9e14df-88c7-42ab-8287-a0ce4d902a68"
    },
    {
        "label": "York College",
        "value": "e39e815b-073f-4604-aeb8-4563f0caca2d"
    },
    {
        "label": "York College of Pennsylvania",
        "value": "d6b1c26e-78f9-496f-8b4a-1696c8a5d90a"
    },
    {
        "label": "York University",
        "value": "b40eaccd-9756-47f1-8f29-3397bf466d81"
    },
    {
        "label": "Youngstown State University",
        "value": "01952022-dfea-4db9-b3c8-80de09f11ca6"
    },
    {
        "label": "Zhejiang University",
        "value": "a956b094-92e8-42fe-911a-d578b5a5341f"
    }
];
const degreeToInt = degreeType =>
    ["Bachelor's", "Master's", "MBA", "PhD", "PharmD", "Associate's"].indexOf(degreeType) + 1;
const degreeTypes = [
    {"label": "PharMD", "value": 6},
    {"label": "PhD", "value": 5},
    {"label": "Associate's", "value": 1},
    {"label": "Bachelor's", "value": 2},
    {"label": "MBA", "value": 4},
    {"label": "Master's", "value": 3},
];

const emptyEducation = () => ({
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
});
const Education = ({educationData, setFormData}) => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 40}, (_, index) => currentYear + 10 - index);

    const handleAddEducation = () => {
        setFormData(prevState => ({
            ...prevState,
            education: [...prevState.education, emptyEducation()]
        }));
    };

    const handleChange = (event, index) => {
        const newEducation = [...educationData];
        // console.log(event)
        const {name, value} = event.target;
        if (name === 'degreeType') {
            newEducation[index].degree = value.value;
        }
        else {
            newEducation[index][name] = value;
        }
        setFormData(prevState => ({
            ...prevState,
            education: newEducation
        }));
    };

    const handleDegreeChange = (selectedOption, index) => {
        const newDegreeType = [...educationData];
        newDegreeType[index].degree = selectedOption;
        setFormData(prevState => ({
            ...prevState,
            education: newDegreeType
        }));
    };

    const handleSchoolChange = (selectedOption, index) => {
        const newEducation = [...educationData];
        newEducation[index].education.name = selectedOption;
        newEducation[index].education.lever = selectedOption;
        newEducation[index].education.greenhouse = selectedOption;
        setFormData(prevState => ({
            ...prevState,
            education: newEducation
        }));
    };

    const handleMajorChange = (selectedOption, index) => {
        const newEducation = [...educationData];
        newEducation[index].major.name = selectedOption;
        newEducation[index].major.greenhouse = selectedOption;
        setFormData(prevState => ({
            ...prevState,
            education: newEducation
        }));
    };

    const handleDeleteEducation = (index) => {
        const newEducation = [...educationData];
        newEducation.splice(index, 1);
        setFormData(prevState => ({
            ...prevState,
            education: newEducation
        }));
    };


    return (
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Education</h2>
            {educationData.map((block, index) => (
                <div key={index} style={{border: '1px solid #fff', padding: '10px', marginBottom: '15px'}}>
                    <label>
                        School Name:
                        <Select
                            name="schoolName"
                            value={block.education.name ? schools.find(option => option.label === block.education.name) : null}
                            onChange={(selectedOption) => handleSchoolChange(selectedOption, index)}
                            options={schools}
                        />
                    </label>
                    <label>
                        Major:
                        <Select
                            name="major"
                            value={block.major.name ? majors.find(option => option.label === block.major.name) : null}
                            onChange={(selectedOption) => handleMajorChange(selectedOption, index)}
                            options={majors}
                        />
                    </label>

                    <label>Type:
                        <Select
                            name="degreeType"
                            options={degreeTypes}
                            onChange={(selectedOption) => handleDegreeChange(selectedOption, index)}
                            value={block.degree ? degreeTypes.find(option => option.value === block.degree) : null}
                        />
                    </label>

                    <FormControl fullWidth margin="normal">
                        GPA:
                        <TextField
                            // label="GPA"
                            name="gpa"
                            value={block.gpa}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        Start Month:
                        <Select2
                            name="start_month"
                            value={block.start_month}
                            onChange={(e) => handleChange(e, index)}
                        >
                            <MenuItem value="">Select Month</MenuItem>
                            {months.map((month) => (
                                <MenuItem key={month} value={month}>
                                    {month}
                                </MenuItem>
                            ))}
                        </Select2>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        Start Year:
                        <Select2
                            name="start_year"
                            value={block.start_year}
                            onChange={(e) => handleChange(e, index)}
                        >
                            <MenuItem value="">Select Year</MenuItem>
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select2>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        End Month:
                        <Select2
                            name="grad_month"
                            value={block.grad_month}
                            onChange={(e) => handleChange(e, index)}
                        >
                            <MenuItem value="">Select Month</MenuItem>
                            {months.map((month) => (
                                <MenuItem key={month} value={month}>
                                    {month}
                                </MenuItem>
                            ))}
                        </Select2>
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        End Year:
                        <Select2
                            name="grad_year"
                            value={block.grad_year}
                            onChange={(e) => handleChange(e, index)}
                        >
                            <MenuItem value="">Select Year</MenuItem>
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select2>
                    </FormControl>

                    <Button variant="contained" color="secondary" onClick={() => handleDeleteEducation(index)}>
                        Delete
                    </Button>
                </div>
            ))}

            <Button
                variant="contained"
                color="primary"
                style={{ width: "553px", height: "40px" }}
                onClick={handleAddEducation}
            >
                Add
            </Button>
        </div>
    );
}

export default Education;
