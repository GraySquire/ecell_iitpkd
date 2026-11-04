// import Aashutosh from "../src/assets/team26/Aashutosh.jpeg";
// import Abhiraj from "../src/assets/team26/Abhiraj_raje.HEIC";
// import Aman from "../src/assets/team26/Aman_Meena.webp";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";
// import Aashutosh from "../src/assets/team26";

const imageModules = import.meta.glob('../src/assets/team26/*.webp', { eager: true });

// Convert to simpler key format like 'alice.webp'
const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const filename = path.split('/').pop(); // 'alice.webp'
    return [filename, mod.default];
  })
);

const teamData = [
    {
        name:'Thirunahari Milind ',
        role:'Head',
        image:images['Milind.webp'],
        mail:'102401035@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/milind-thirunahari-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Dr. Krishna Sesha Giri',
        role:'Faculty Advisor',
        image:images['Krishna_sir.png'],
        mail:'krishna.s@iitpkd.ac.in',
        linkedin:'https://in.linkedin.com/in/krishna-sesha-giri-490a90b4'
    },
    {
        name:'Tanay Vashist',
        role:'Deputy Head',
        image:images['Tanay.webp'],
        mail:'112201038@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/shreyas-vadthya-788928250/'
    },
    {
        name:'Aaditya Dinesh',
        role:'Deputy Head',
        image:images['Aaditya_Dinesh.webp'],
        mail:'132501001@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aadityadinesh/'
    },
    {
        name:'Emmanuel Johnson',
        role:'Mentor',
        image:images['Emmanuel_Johnson.webp'],
        mail:'122401015@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/emmanuel-johnson-618598332/'
    },
    {
        name:'Madhu Charan Chary',
        role:'Logistics Head & Media Mentor',
        image:images['MCC.webp'],
        mail:'132401010@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aashutosh-kr-ray-9b505b312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Apoorva Sai Kaushik',
        role:'Event Coordinator',
        image:images['Apoorva_Sai_Kaushik_Nampally.webp'],
        mail:'142501021@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/apoorva-sai-kaushik-nampally-4575863b8/'
    },
    {
        name:'Pamu Vedhanth Chandr',
        role:'Outreach and Internal Relations',
        image:images['Vedhanth_Chandr.webp'],
        mail:'112501022@smail.iitpkd.ac.in',
        linkedin:''
    },
    {
        name:'Sai Kiran',
        role:'Tech Mentor',
        image:images['Sai_Kiran.webp'],
        mail:'142401034@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/aashutosh-kr-ray-9b505b312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        name:'Mohnish Murugavel',
        role:'Outreach and Internal Relations & Tech',
        image:images['Mohnish_Murugavel.webp'],
        mail:'142501019@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/mohnish-murugavel-1b50a73b7/'
    },
    {
        name:'Ridhwiman Gayen',
        role:'Tech',
        image:images['Ridhwiman_Gayen.webp'],
        mail:'122601036@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/ridhwiman-gayen-ab0640425/'
    },
    {
        name:'Devidyuti K Pisharody',
        role:'Media',
        image:images['Devidyuti_K_Pisharody.webp'],
        mail:'122601013@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/in/devidyuti-k-pisharody-10b88341a/'
    },
    {
        name:'Ishaan Singh',
        role:'Media',
        image:images['Ishaan_Singh.webp'],
        mail:'142601017@smail.iitpkd.ac.in',
        linkedin:'https://www.linkedin.com/search/results/all/?keywords=Ishaan%20Singh&origin=HISTORY&position=0'
    }
]

export default teamData;