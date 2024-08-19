let details = [
    {
        'name': 'Abhimanyu Tyagi',
        'designation': 'Member',
        'src': './components/images/abhimanyu.jpg'
    },
    {
        'name': 'Abhishek Tiwari',
        'designation': 'Member',
        'src': './components/images/abhishek.jpg'
    },
    {
        'name': 'Akshat',
        'designation': 'Member',
        'src': './components/images/akshat.jpg'
    },
    {
        'name': 'Alok',
        'designation': 'Member',
        'src': './components/images/alok.jpg'
    },
    {
        'name': 'Anchal',
        'designation': 'Member',
        'src': './components/images/anchal.jpg'
    },
    {
        'name': 'Ansh',
        'designation': 'Member',
        'src': './components/images/ansh.jpg'
    },
    {
        'name': 'Arv Oberoi',
        'designation': 'Member',
        'src': './components/images/arv.jpg'
    },
    {
        'name': 'Deepesh Negi',
        'designation': 'Member',
        'src': './components/images/deepesh.jpg'
    },
    {
        'name': 'Divay Chillar',
        'designation': 'Member',
        'src': './components/images/divay.jpg'
    },
    {
        'name': 'Krish Arora',
        'designation': 'Member',
        'src': './components/images/krish.jpg'
    },
    {
        'name': 'Kritika',
        'designation': 'Member',
        'src': './components/images/kritika.jpg'
    },
    {
        'name': 'Kushagra Rastogi',
        'designation': 'Member',
        'src': './components/images/kushagra.jpg'
    },
    {
        'name': 'Lakshay Singh',
        'designation': 'Member',
        'src': './components/images/lakshay.jpg'
    },
    {
        'name': 'Mahak Preet Kaur',
        'designation': 'Member',
        'src': './components/images/mahak.jpg'
    },
    {
        'name': 'Mahi',
        'designation': 'Member',
        'src': './components/images/mahi.jpg'
    },
    {
        'name': 'Megha Bhagat',
        'designation': 'Member',
        'src': './components/images/megha.png'
    },
    {
        'name': 'Nancy Kashyap',
        'designation': 'Member',
        'src': './components/images/nancy.jpg'
    },
    {
        'name': 'Paramjeet Singh',
        'designation': 'Member',
        'src': './components/images/paramjeet.jpg'
    },
    {
        'name': 'Pragati Pant',
        'designation': 'Member',
        'src': './components/images/pragati.jpg'
    },
    {
        'name': 'Pranav',
        'designation': 'Member',
        'src': './components/images/pranav.jpg'
    },
    {
        'name': 'Prashant',
        'designation': 'Member',
        'src': './components/images/prashant.jpg'
    },
    {
        'name': 'Pulkit Darp',
        'designation': 'Member',
        'src': './components/images/pulkit.jpg'
    },
    {
        'name': 'Rishabh',
        'designation': 'Member',
        'src': './components/images/rishabh.jpg'
    },
    {
        'name': 'Rohan Singh Negi',
        'designation': 'Member',
        'src': './components/images/rohan.png'
    },
    {
        'name': 'Rujul Varshney',
        'designation': 'Member',
        'src': './components/images/rujul.jpg'
    },
    {
        'name': 'Sachin Choudhary',
        'designation': 'Member',
        'src': './components/images/sachin.jpg'
    },
    {
        'name': 'Sameer Kapoor',
        'designation': 'Member',
        'src': './components/images/sameer.jpg'
    },
    {
        'name': 'Samriddhi',
        'designation': 'Member',
        'src': './components/images/samriddhi.jpg'
    },
    {
        'name': 'Shivam',
        'designation': 'Member',
        'src': './components/images/shivam.jpg'
    },
    {
        'name': 'Vishal Singh',
        'designation': 'Member',
        'src': './components/images/vishal.jpg'
    },
    {
        'name': 'Yug Dahiya',
        'designation': 'Member',
        'src': './components/images/yug.png'
    }
];
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id !== null) {
    const member = details[parseInt(id)];
    
    if (member) {
        const resumeContent = `
            <h1>${member.name}</h1>
            <h2>${member.designation}</h2>
            <img src="${member.src}" alt="${member.name}">
            <p>Here, you can add more details like experience, education, etc.</p>
        `;
        document.querySelector('#resume-content').innerHTML = resumeContent;
    } else {
        document.querySelector('#resume-content').innerHTML = '<p>Member not found.</p>';
    }
} else {
    document.querySelector('#resume-content').innerHTML = '<p>No member selected.</p>';
}
