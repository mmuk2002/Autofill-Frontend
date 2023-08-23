import React, { useState } from 'react';
import Select from 'react-select';
const skills = [
    {
        "label": "Adobe After Effects",
        "value": "54567ef6-dc97-42dd-b6c4-b76187aac36a"
    },
    {
        "label": "Adobe Creative Suite",
        "value": "47dbd233-2d7e-4bb3-8711-be26ba42f4af"
    },
    {
        "label": "Adobe Illustrator",
        "value": "a08f179f-6c2b-49fb-a769-39dd41f4b82f"
    },
    {
        "label": "Adobe Lightroom",
        "value": "46729222-ef7c-4449-8c10-7f3482f0cc83"
    },
    {
        "label": "Adobe Photoshop",
        "value": "544970db-83a3-4d43-ba4f-da63d15050b6"
    },
    {
        "label": "Agile",
        "value": "3040b2e8-68c0-4501-8bdc-cc7cdfe25de9"
    },
    {
        "label": "Airflow",
        "value": "35af56be-471c-448e-931f-460b5a32b26d"
    },
    {
        "label": "Altium",
        "value": "2084fd01-da35-45f4-ba78-fb9820cdff55"
    },
    {
        "label": "Amplitude",
        "value": "32adb794-9e14-4429-8356-685027c34890"
    },
    {
        "label": "Android Development",
        "value": "d5d0afe6-c958-44cc-bbc4-14f27dfac719"
    },
    {
        "label": "AngularJS",
        "value": "e82b439f-d9c0-4336-ae3c-865a98ca4f55"
    },
    {
        "label": "Animation",
        "value": "990a0666-30f8-41e5-be77-d2fb59ae63f9"
    },
    {
        "label": "Ansible",
        "value": "c1f3668b-c2a6-46c8-8248-bedfa54a3cb6"
    },
    {
        "label": "Apache Beam",
        "value": "520d489b-5ad8-4938-b57f-0861ef0b0462"
    },
    {
        "label": "Apache Flink",
        "value": "4551d19c-aa30-4998-98a0-bb346be60eff"
    },
    {
        "label": "Apache Hive",
        "value": "be62f99a-2726-4c7e-8269-dc7b2b89cc1f"
    },
    {
        "label": "Apache Kafka",
        "value": "76f6d041-b983-4014-9d56-10457dba95bd"
    },
    {
        "label": "Apache Spark",
        "value": "70a036fe-fc84-4b7d-bed7-5ca156daf81e"
    },
    {
        "label": "Apache Thrift",
        "value": "bfbccde7-dbf4-456b-8f7a-654e5360c073"
    },
    {
        "label": "Applicant Tracking Software (ATS)",
        "value": "2d72934c-09f1-4d06-9db5-d8fee1bddf66"
    },
    {
        "label": "Asana",
        "value": "bc517c6c-bed3-4d6d-9725-ca4616ebd752"
    },
    {
        "label": "ASP.NET",
        "value": "6a025511-c55e-4e3c-a240-8a9543ed9870"
    },
    {
        "label": "Atlassian",
        "value": "5293f244-5e3c-4017-a645-0bf0aa1c603e"
    },
    {
        "label": "AutoCAD",
        "value": "6d9b5be6-d317-468a-9bb8-111c731b38f4"
    },
    {
        "label": "Autodesk CFD",
        "value": "dcbb9a99-7e4b-4fc1-9624-b0d113d94ea3"
    },
    {
        "label": "AUTOSAR",
        "value": "6b6386a6-ee82-4928-b9b1-c60a3d02883a"
    },
    {
        "label": "AWS",
        "value": "a0a0daf0-0db6-4d93-a778-b9d9a8998a6f"
    },
    {
        "label": "Babel",
        "value": "334b623c-c247-4d46-9cc2-27b4f6fbd5f6"
    },
    {
        "label": "Bash",
        "value": "1197c51a-8528-44a9-8f34-6fdfb6539a3d"
    },
    {
        "label": "BigQuery",
        "value": "6af19184-32c2-4997-9691-dd28af0e2490"
    },
    {
        "label": "Blender",
        "value": "44ea24fd-b585-4e88-8b85-123c4ce4a818"
    },
    {
        "label": "Blockchain",
        "value": "a090f64e-6321-45a9-80c0-c1a846bd2b51"
    },
    {
        "label": "Bootstrap",
        "value": "706099e1-2911-4169-b26e-30eaadfb1303"
    },
    {
        "label": "Branding/Brand Strategy",
        "value": "6448932e-396f-44df-86b1-155d1269840f"
    },
    {
        "label": "Business Analytics",
        "value": "cf3c7f50-a6bf-4aba-91f6-4bdfc15d6b48"
    },
    {
        "label": "Business Strategy",
        "value": "d6965fe2-5dc7-44cd-8d91-8e0c4f0dc0d6"
    },
    {
        "label": "CAD",
        "value": "2123ce71-ea02-460f-90f4-9887c5557e2d"
    },
    {
        "label": "Cadence Allegro",
        "value": "abf1e13e-6f37-4577-ac29-4f31b0c05227"
    },
    {
        "label": "Canva",
        "value": "907852fe-f5af-405a-9c05-cd5c24bbea9c"
    },
    {
        "label": "Cassandra",
        "value": "f533a13b-c09d-4c75-af9f-e2b80925212d"
    },
    {
        "label": "C/C++/C#",
        "value": "d59c89a4-0e7f-4fbf-aa5a-2a706242316a"
    },
    {
        "label": "Celery",
        "value": "f000294f-4ea9-4db3-b7b3-9bc99a3b15e4"
    },
    {
        "label": "Chef",
        "value": "11220c88-252e-438c-80ac-d18e7d3b94f8"
    },
    {
        "label": "CircleCI",
        "value": "df951b8f-f2e7-41cc-a582-3353396e22da"
    },
    {
        "label": "Citrix",
        "value": "2c76e712-0cdf-479a-a5bb-34a5af466a2e"
    },
    {
        "label": "CockroachDB",
        "value": "12f028f8-63e7-4d9b-91db-7dd201b6c0b3"
    },
    {
        "label": "Cold Calling",
        "value": "6469dfb1-7e57-427f-8580-dd7503b6fc1d"
    },
    {
        "label": "Communications",
        "value": "4237f60e-74d3-469e-99a8-3d89c3ffab78"
    },
    {
        "label": "Computer Networking",
        "value": "77978a8e-52aa-4264-8c80-172da1f25919"
    },
    {
        "label": "Computer Vision",
        "value": "e44b37fc-ea3b-4669-8007-818991ca07a4"
    },
    {
        "label": "Confluence",
        "value": "d15cc57e-a788-4f11-8304-83d46e5cf92a"
    },
    {
        "label": "Coupa",
        "value": "cdf35474-7c5d-477d-8909-e57712878e77"
    },
    {
        "label": "CUDA",
        "value": "55425d91-e93c-415d-9df1-508e9ae6c5cf"
    },
    {
        "label": "Customer Service",
        "value": "c44098b8-83d7-4e77-9969-9cc2f1dc0839"
    },
    {
        "label": "Data Analysis",
        "value": "f3585b70-0e33-4dc6-b69d-19a6b5ea736c"
    },
    {
        "label": "Datadog",
        "value": "092e5a1f-7a0f-4e3a-96c3-97e82aeab264"
    },
    {
        "label": "Dataiku",
        "value": "1bd8d346-061e-4363-bdd3-5b45a5ec703a"
    },
    {
        "label": "Data Science",
        "value": "51929e7c-62a7-4152-b494-47330892bd5d"
    },
    {
        "label": "Data Structures & Algorithms",
        "value": "5ac05318-8429-4af0-af23-e5a35c2b907c"
    },
    {
        "label": "Datorama",
        "value": "351138e2-d6ca-4c35-adab-6b95ccabca2e"
    },
    {
        "label": "Development Operations (DevOps)",
        "value": "de7b61d8-c1ac-4df9-8b01-91e3662f6fcf"
    },
    {
        "label": "Digital Ocean",
        "value": "6c4791d7-0c65-44a1-817f-70cf30f9c3d3"
    },
    {
        "label": "Django",
        "value": "f8557e0e-1ede-4739-9de5-35f087e4fe0e"
    },
    {
        "label": "Docker",
        "value": "8b52035b-b205-44c5-afe4-756a48038599"
    },
    {
        "label": "Elasticsearch",
        "value": "a9d70ee5-af73-4001-ba83-6a6b7d6b0b9d"
    },
    {
        "label": "Elixir",
        "value": "31bd034c-50a2-4cf6-ae79-c93c510586af"
    },
    {
        "label": "Erlang",
        "value": "a41e35c4-479b-4ba1-9507-2fdf84865c9c"
    },
    {
        "label": "Espresso",
        "value": "45e8b856-4a75-4dcf-aeef-e5bf1b9f788f"
    },
    {
        "label": "Ethereum Virtual Machine (EVM)",
        "value": "11c3116c-e47e-43a9-bfca-6c6279a88fc8"
    },
    {
        "label": "Excel/Numbers/Sheets",
        "value": "fe2da375-b10b-4a48-8695-5f46fbda8525"
    },
    {
        "label": "Express.js",
        "value": "21393138-acd3-43ea-9bc4-5f30ba1bdedf"
    },
    {
        "label": "Facebook Ads",
        "value": "4458ed2d-4da9-450e-bd96-a23758057a05"
    },
    {
        "label": "FastAPI",
        "value": "c4e654a1-08e1-41ea-846b-c90f82ba123c"
    },
    {
        "label": "FEM/FEA",
        "value": "f8bd7a57-3a06-4267-999b-7b3a92bb49ea"
    },
    {
        "label": "Figma",
        "value": "6401b3ba-e067-412e-8073-85cd509ecaa8"
    },
    {
        "label": "Financial analysis",
        "value": "8a0ccfdb-803c-4c0c-b82b-bebd29fcbcb1"
    },
    {
        "label": "Firebase",
        "value": "e9c13fac-d61b-4bd1-b720-8a45ede1135c"
    },
    {
        "label": "Flask",
        "value": "cc51eea9-2b4b-481f-b7e2-0a2129dfffa9"
    },
    {
        "label": "Flutter",
        "value": "0c869104-5bae-4db3-9e0f-15e2b479bb61"
    },
    {
        "label": "FPGA",
        "value": "e089eead-9c34-4d7c-a2fa-76f5efcafdb9"
    },
    {
        "label": "FreshBooks",
        "value": "a2034a76-b1a0-40da-8967-a472569780af"
    },
    {
        "label": "Git",
        "value": "55f81a94-6563-49f6-8d65-6c41d1c7e8eb"
    },
    {
        "label": "Go",
        "value": "a296343f-f97e-4a9b-9201-a4f303a67391"
    },
    {
        "label": "Google AdWords",
        "value": "b1749078-a829-40d5-9788-05ace054bea5"
    },
    {
        "label": "Google Analytics",
        "value": "ffeb74e6-e875-4301-9ac8-8ab00630acba"
    },
    {
        "label": "Google Cloud Platform",
        "value": "fcc200c4-2877-48a7-bc23-a0763ecdf9b4"
    },
    {
        "label": "Gradle",
        "value": "80955714-fbba-4a56-992f-d9dc4b181f82"
    },
    {
        "label": "Graphic Design",
        "value": "e00b7325-f36a-4a6a-aec8-f5a50c48b849"
    },
    {
        "label": "GraphQL",
        "value": "8036dd00-b091-4b89-9509-7537db2c149e"
    },
    {
        "label": "Greenhouse (ATS)",
        "value": "99be2188-2eb7-42d5-af96-2565aa8f7e00"
    },
    {
        "label": "Groovy",
        "value": "7135228a-4bfe-458c-a4ed-2e82fe080c04"
    },
    {
        "label": "gRPC",
        "value": "13e0bb4d-53a5-4e8f-bf69-857f924c4c40"
    },
    {
        "label": "Hadoop",
        "value": "c97ea8ef-46aa-44b4-ba64-824b3f295240"
    },
    {
        "label": "Haskell",
        "value": "a6170cce-fefd-48a3-9205-fad9242c81dc"
    },
    {
        "label": "Heroku",
        "value": "3393615d-b67f-4aa9-9dea-cac202364a86"
    },
    {
        "label": "Hotjar",
        "value": "b0d23c80-deec-43d4-a491-81e785d09e4d"
    },
    {
        "label": "HTML/CSS",
        "value": "f43e477a-5fac-408f-b25e-c2f8f724975f"
    },
    {
        "label": "Hubspot",
        "value": "7e01b380-3e45-4004-88f4-7333adb09951"
    },
    {
        "label": "Human Resources Information System (HRIS)",
        "value": "924cf0d1-e04f-4eb9-895f-b69db87d70e1"
    },
    {
        "label": "iOS/Swift",
        "value": "b3583e07-0cbc-4c5c-92d6-cc87d0206dfc"
    },
    {
        "label": "Java",
        "value": "7879b1c5-3b3f-4258-9a51-7473b42c1d2d"
    },
    {
        "label": "JavaScript",
        "value": "34661c26-b49a-4606-a56d-ac24756208d9"
    },
    {
        "label": "Jenkins",
        "value": "af0d0121-047d-4853-814a-6c1eb4300680"
    },
    {
        "label": "Jest",
        "value": "7158a84d-f23e-42ff-ab26-1fe32b8841e0"
    },
    {
        "label": "JIRA",
        "value": "a2c97a9d-2614-42a0-9f8a-5d7865182b2f"
    },
    {
        "label": "Journalism",
        "value": "9f19e317-362e-48d7-b234-5f88cc3626b1"
    },
    {
        "label": "jQuery",
        "value": "202f29d9-4780-41e8-b7fa-6bfe84fa919f"
    },
    {
        "label": "Jupyter",
        "value": "48f7b9ee-e4d5-4646-a7ae-1f16cc2c2b2f"
    },
    {
        "label": "Keras",
        "value": "5c78488f-0cbe-4249-aa13-b7e38c688b88"
    },
    {
        "label": "Kotlin",
        "value": "04d27644-456d-4de8-977c-e2e25d17af07"
    },
    {
        "label": "Kubernetes",
        "value": "196784f5-42b6-4a51-94ba-252c29af959a"
    },
    {
        "label": "Laravel",
        "value": "4ef8fc2e-65b0-48d1-b894-a342ff1b940b"
    },
    {
        "label": "Lead Generation",
        "value": "54dd9a3a-911c-4601-878a-8fb2d2b76374"
    },
    {
        "label": "Lever (ATS)",
        "value": "25bab213-225a-42da-919d-9c1e0179704d"
    },
    {
        "label": "Linux/Unix",
        "value": "e6aac5fa-159d-4857-8dae-7f9780472a1d"
    },
    {
        "label": "Looker",
        "value": "ee7b6c60-1877-46eb-8f03-69fa2177b9ca"
    },
    {
        "label": "Lottie",
        "value": "97a5fbf5-d7b7-4d6e-b0b5-1eb78c6f279a"
    },
    {
        "label": "Lua",
        "value": "c986fcdf-e2a0-4ce3-9166-316dc15fcd57"
    },
    {
        "label": "MailChimp",
        "value": "3c79f74d-72a0-46a1-ae68-753d897df0fa"
    },
    {
        "label": "Management",
        "value": "529fdf62-2379-4eba-a616-d19953975003"
    },
    {
        "label": "Marketing",
        "value": "bb011807-0f2a-4d73-b4fb-ffb9b0141b65"
    },
    {
        "label": "Market Research",
        "value": "309f0222-fa2b-421a-9dec-6c32fe1747c0"
    },
    {
        "label": "MATLAB",
        "value": "8b01c6e1-1097-411c-9572-7bc5445d01bc"
    },
    {
        "label": "Maven",
        "value": "afc9f18f-c54a-49cc-a086-9560e8a02f74"
    },
    {
        "label": "Mergers & Acquisitions (M&A)",
        "value": "b9a40ada-ad44-467c-89bc-cdb5cd911c87"
    },
    {
        "label": "MessageBird",
        "value": "db146256-0d81-432b-b6b6-378aaa646e18"
    },
    {
        "label": "Microsoft Azure",
        "value": "2ffaf25c-a5d9-4814-9f59-aac36c93434e"
    },
    {
        "label": "Mixpanel",
        "value": "2f78eedc-ea67-4b2d-a052-528f5abbed7b"
    },
    {
        "label": "Mocha",
        "value": "a2ee2729-a38e-4a90-9257-3aee81a3ecb2"
    },
    {
        "label": "MongoDB",
        "value": "c473da39-8abc-4cdd-9e85-e226ddfd931e"
    },
    {
        "label": "MySQL",
        "value": "43562c70-5afa-488a-a795-268833a93a20"
    },
    {
        "label": "Natural Language Processing (NLP)",
        "value": "c779acf9-a2d0-4b5d-921a-7c0da67c49f2"
    },
    {
        "label": "Nest.js",
        "value": "63b24ced-7e7b-424c-8d8a-cd6797b42bb6"
    },
    {
        "label": ".NET",
        "value": "91b2c503-1eeb-482f-a860-0574aec43fc1"
    },
    {
        "label": "Netlify",
        "value": "6c53ce49-0a43-4c2c-8731-f4c929af0184"
    },
    {
        "label": "NetSuite",
        "value": "055b6e9d-06f4-4b27-981f-2353d9e2998c"
    },
    {
        "label": "Next.js",
        "value": "be984ffc-ea59-499f-bde5-ce804417107c"
    },
    {
        "label": "Nginx",
        "value": "bd2a8de0-8083-4a38-b5cb-42b032d714a9"
    },
    {
        "label": "Node.js",
        "value": "5744ea16-fcec-4340-8274-fcb5d827ac07"
    },
    {
        "label": "NoSQL",
        "value": "4c8decd5-27d6-4498-a89c-26dbd6bdb175"
    },
    {
        "label": "NumPy",
        "value": "d51d60ae-709c-4a15-a3b2-3f82fe532dd1"
    },
    {
        "label": "Nuxt.js",
        "value": "1ef94a17-c764-47cb-a987-0b94eb3b4528"
    },
    {
        "label": "NVM-Express",
        "value": "fcd550bb-57d3-48ca-beab-078888777633"
    },
    {
        "label": "Objective-C",
        "value": "d300887e-2357-4fd6-aa25-cd0aa2da0c91"
    },
    {
        "label": "OCaml",
        "value": "9e308031-8bf8-4b0d-b351-56943ecfabee"
    },
    {
        "label": "OpenGL",
        "value": "a82b6d3b-e420-42d8-803c-54d8927cd0d0"
    },
    {
        "label": "Operating Systems",
        "value": "79de5f02-3f9f-4baa-abcb-140d745eb397"
    },
    {
        "label": "Operations Research",
        "value": "e6c09423-a85f-47db-89a9-e8e40cc93f4c"
    },
    {
        "label": "Oracle",
        "value": "e24e8f06-dc85-4ff8-8aba-844b6e908c37"
    },
    {
        "label": "OrCAD",
        "value": "4c1dfbe6-0487-4e71-b270-2829087799c3"
    },
    {
        "label": "Palladium",
        "value": "b57c4740-7aad-472d-86c8-62479f56ec06"
    },
    {
        "label": "Pandas",
        "value": "a279629a-2221-4335-b3c6-351cf64bd604"
    },
    {
        "label": "PCI-Express",
        "value": "7e41822c-d22d-410d-b29e-2264d0e5eaef"
    },
    {
        "label": "Perl",
        "value": "a0d630c9-22a7-4bee-8e82-671992d51efc"
    },
    {
        "label": "PHP",
        "value": "156b8d93-7d58-4746-bd96-8decb4731225"
    },
    {
        "label": "Political Science",
        "value": "bf1c4e38-6486-421b-8f2d-55101288450f"
    },
    {
        "label": "Postgres",
        "value": "7a2dc3ee-e846-46e1-9dab-14b7f83f6a67"
    },
    {
        "label": "Postman",
        "value": "4f4a58b3-74df-402f-8201-776f31ff276f"
    },
    {
        "label": "Power BI",
        "value": "0c787c29-6f54-4d21-85d2-0b4ff094247d"
    },
    {
        "label": "PowerPoint/Keynote/Slides",
        "value": "fff80b78-4cb0-4c00-b4d9-5583576920d2"
    },
    {
        "label": "Powershell",
        "value": "089f0f7f-6c00-4457-8819-d0ed5d9a044e"
    },
    {
        "label": "Printed Circuit Board (PCB) Design",
        "value": "0d63979f-83d5-42db-9ccb-4dad945f1b99"
    },
    {
        "label": "Product Design",
        "value": "ebf594db-e3af-412d-b807-1a9edbe85c80"
    },
    {
        "label": "Prometheus",
        "value": "acf65c86-ea69-4ee4-97a0-d3c99590616d"
    },
    {
        "label": "Public Policy",
        "value": "67de3b57-7b0a-4cd8-8b4c-74c36bd0faef"
    },
    {
        "label": "Public Speaking",
        "value": "6cf472ec-65c9-4805-9848-e4d6b41b59f6"
    },
    {
        "label": "Puppet",
        "value": "3da3bbd1-8e9f-4989-a624-33818d2d4ce2"
    },
    {
        "label": "PureScript",
        "value": "bd520597-c614-47d3-bae2-31f00c48dbe5"
    },
    {
        "label": "Python",
        "value": "338bf00e-d70d-4541-b1ff-30952db24716"
    },
    {
        "label": "Python NLTK",
        "value": "32748a53-e3f5-4b55-83a1-4fc7ee2c2fd8"
    },
    {
        "label": "Pytorch",
        "value": "639dd915-9891-450f-90d3-bbd14b13fed9"
    },
    {
        "label": "Quality Assurance (QA)",
        "value": "8d663127-e4d1-49d9-806c-9386e3dd9b8d"
    },
    {
        "label": "Quickbooks",
        "value": "52932a5b-3a3a-496a-b051-8087c72425c5"
    },
    {
        "label": "R",
        "value": "548c18f1-60c6-4848-b990-f0e754174cf5"
    },
    {
        "label": "RabbitMQ",
        "value": "0aff340d-7bcd-42e1-ab10-1342beba3044"
    },
    {
        "label": "React.js",
        "value": "3ee0694c-2189-47cb-b758-29109a9d2913"
    },
    {
        "label": "React Native",
        "value": "e054c476-1075-4cc6-a739-0d7be7fa67c2"
    },
    {
        "label": "Redis",
        "value": "bcb21bec-3ab2-452a-aed0-89e882c1e060"
    },
    {
        "label": "Redshift",
        "value": "31106fd9-a6ac-40e4-a071-4b4ea69af35d"
    },
    {
        "label": "Redux",
        "value": "59864247-09f1-4e77-aa58-859f9a96e864"
    },
    {
        "label": "REST APIs",
        "value": "c91db08f-be4e-4bbd-84ef-8d6525a9f615"
    },
    {
        "label": "Ruby",
        "value": "5ff0fee3-5c09-4fa9-895b-92072378fdde"
    },
    {
        "label": "Ruby on Rails",
        "value": "65b7d89d-7fde-44fe-8ff1-bd213b430847"
    },
    {
        "label": "Rust",
        "value": "28cb8a5c-8745-49bb-9984-31377e3739d3"
    },
    {
        "label": "RxJava",
        "value": "af3b30fa-522c-416f-9e13-662e4463070b"
    },
    {
        "label": "RxJavaScript",
        "value": "b71c4671-e899-4c72-b202-d44638c1c200"
    },
    {
        "label": "Sales",
        "value": "34643ec5-83a1-48e5-bb26-2874ad499222"
    },
    {
        "label": "Salesforce",
        "value": "9a2c73be-0595-4f13-938a-4c9eb0800a27"
    },
    {
        "label": "SAP Products",
        "value": "825bb027-afbb-4eaa-bbb3-84d8f1f35525"
    },
    {
        "label": "Scala",
        "value": "a9e920b3-7047-41bc-b724-44a7c408c6de"
    },
    {
        "label": "SCRUM",
        "value": "c6e217fd-b587-4a3c-b83f-c0f441ccec43"
    },
    {
        "label": "Search Ads 360",
        "value": "ce9b13f9-e840-40b0-8610-bd7bef68f0ca"
    },
    {
        "label": "Segment",
        "value": "8330134b-8db2-4fa4-88db-d7f78cb62860"
    },
    {
        "label": "Selenium",
        "value": "d7a3799f-3afa-45f2-b56b-b8218eaeeb7a"
    },
    {
        "label": "Sentry",
        "value": "0fa14763-25f9-4984-a79f-f3b6445845e3"
    },
    {
        "label": "SEO",
        "value": "81afb725-e07b-4503-826b-97a853041233"
    },
    {
        "label": "Sketch",
        "value": "b6bb46d0-b93a-4a94-a953-a6dab01053a3"
    },
    {
        "label": "Smartly",
        "value": "90cb36c8-663c-46b5-85e2-0943b644ea9a"
    },
    {
        "label": "Snowflake",
        "value": "f7c693a1-4aa0-4df0-aedd-6ed749e67057"
    },
    {
        "label": "Social Media",
        "value": "7d240f12-f89b-4a94-9f03-a864dacd259e"
    },
    {
        "label": "Socket.io",
        "value": "29091cb0-1ef1-476e-a826-f25ae2da9da5"
    },
    {
        "label": "Software Testing",
        "value": "4cf90438-af9a-4865-b565-2e1535800104"
    },
    {
        "label": "Solidity",
        "value": "b4da256e-8a1c-4feb-b5eb-ea3d1a62f02f"
    },
    {
        "label": "SolidWorks",
        "value": "f6777e84-1b30-4627-9b8d-2869ca4dcc71"
    },
    {
        "label": "SpaCy",
        "value": "e2cfea81-0458-4069-b121-67adc1957ca3"
    },
    {
        "label": "Splunk",
        "value": "e1d20f56-2536-4488-9f32-d2c8a499c93d"
    },
    {
        "label": "SQL",
        "value": "71e79b09-2ff7-413e-9022-59a63923388f"
    },
    {
        "label": "Tableau",
        "value": "96859ca4-c3a8-442e-8ffe-25be5b34ec6f"
    },
    {
        "label": "Talend",
        "value": "2ea1c9fb-803b-4372-b8fd-79de8bccb994"
    },
    {
        "label": "TCP/IP",
        "value": "01f81a23-099d-4a87-a120-78a66160ed82"
    },
    {
        "label": "Tensorflow",
        "value": "5297b037-9c52-48cd-828b-1c5c6dbbd00a"
    },
    {
        "label": "Terraform",
        "value": "b686a2e6-fec7-4b7b-bad9-7d5868387528"
    },
    {
        "label": "Theano",
        "value": "67cfd486-2ec9-438f-826e-71b6edc9d27e"
    },
    {
        "label": "Tomcat",
        "value": "2cb6e1d7-4b15-4068-b8f4-07375ba412fe"
    },
    {
        "label": "Tornado",
        "value": "e1bed7aa-6a79-4b63-b199-140220aea87b"
    },
    {
        "label": "TypeScript",
        "value": "8e4a3986-41d7-4d49-b1ab-a16cc3b18d2b"
    },
    {
        "label": "UI/UX Design",
        "value": "3812fc79-bd10-405e-91e7-e6c4f7b7c370"
    },
    {
        "label": "Unbabel",
        "value": "a15e12f2-2889-498d-9452-e84b4c91bfee"
    },
    {
        "label": "Unity",
        "value": "f35dff65-715b-461f-9518-be07a0e80af2"
    },
    {
        "label": "Unreal Engine",
        "value": "420172f4-ef34-46b7-8c93-026094a17b7e"
    },
    {
        "label": "U.S. Generally Accepted Accounting Principles (GAAP)",
        "value": "8b9eaa48-28df-449b-8d19-5aaf601293cb"
    },
    {
        "label": "Vercel",
        "value": "9d037346-590f-4a85-82bb-55d5f89159ae"
    },
    {
        "label": "Verilog",
        "value": "26467e0b-e204-47ad-95ff-5378104eb558"
    },
    {
        "label": "VHDL",
        "value": "ba63b59c-29e4-4305-ba5f-84b17871ae1b"
    },
    {
        "label": "Video Editing",
        "value": "ddb2757d-4e72-4831-a14f-07d8bd8ead1b"
    },
    {
        "label": "Vue.js",
        "value": "bc188b42-b6ed-46fa-b845-3b07de995a1c"
    },
    {
        "label": "Web Development",
        "value": "d55cdfe8-0e20-4559-92b0-09b16e326d90"
    },
    {
        "label": "Webflow",
        "value": "32fe658c-852d-4b8f-aeaa-951a0d241bb1"
    },
    {
        "label": "Webpack",
        "value": "e4c7ae97-f5c9-40c8-8395-f8950feb2986"
    },
    {
        "label": "Wireframe",
        "value": "5d8403ba-75ce-4386-ba8a-654fcfae9cd5"
    },
    {
        "label": "Word/Pages/Docs",
        "value": "8bc8124d-a94b-4bb9-aab7-7b106f0d88aa"
    },
    {
        "label": "Wordpress",
        "value": "6e65c6c6-ce25-4aa9-95d6-bbe1177c1a57"
    },
    {
        "label": "Workday HRIS",
        "value": "6658fd95-5a5d-462e-b139-da769d0d620b"
    },
    {
        "label": "Xamarin",
        "value": "6c445059-2373-46c7-bfa1-d3d18a1a7fc5"
    },
    {
        "label": "Yarn",
        "value": "dc15f56a-4e26-43b5-9576-c5066a9042f0"
    },
    {
        "label": "Zapier",
        "value": "fc321a32-8eb4-48e6-bd9f-da25f34141fe"
    },
    {
        "label": "Zbrush",
        "value": "91d080af-b6ff-44e4-9995-b4c4584817e8"
    },
    {
        "label": "Zendesk",
        "value": "905e6f54-2350-4289-890c-1a8346447793"
    }
];

const Skills = ({ setFormData, skillsData }) => {
    const handleSkillsChange = (selectedSkills) => {
        const formattedSkills = selectedSkills.map((skill) => ({
            skill: {
                name: skill.label
            },
        }));

        setFormData((prevState) => ({
            ...prevState,
            skill: formattedSkills,
        }));
    };

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ border: '0px solid #fff', padding: '10px', marginBottom: '15px' }}>
            <h2 style={{ textAlign: 'center' }}>Skills</h2>
            <Select
                name="skills"
                placeholder="Select your skills..."
                isMulti
                options={skills}
                onChange={handleSkillsChange}
                value={skillsData ? skillsData.map(skill => skills.find(option => option.label === skill.skill.name)) : []}
            />
        </div>
        </div>

    );
};

export default Skills;
