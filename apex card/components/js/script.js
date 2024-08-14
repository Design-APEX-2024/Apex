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

let searchMember = document.querySelector('#searchMember');
let containerElement = document.querySelector('#root');

let searchElement = (ele) => {
    return details.filter((item) => {
        return item.name.toLowerCase().includes(ele.toLowerCase());
    })    
}

let htmlContent = (item) => `
<div class="card xl:w-1/5 md:w-1/2 p-4">
  <div class="cardContent pb-2 rounded-lg">
    <img
      class="h-72 rounded w-full object-cover object-center mb-6"
      src="${item.src}"
    />
    <h3
      class="tracking-widest text-white text-xs font-medium title-font pl-4"
    >
      ${item.designation}
    </h3>
    <h2
      class="text-lg text-white font-medium title-font mb-4 pl-4"
    >
      ${item.name}
    </h2>
    <a href="#"><button class="down">Resume</button></a>
  </div>
</div>
`;

let renderContent = (data) => {
    containerElement.innerHTML = data.map(htmlContent).join('');
}

renderContent(details);

searchMember.addEventListener('input', (e) => {
    let result = searchElement(e.target.value);
    renderContent(result);
});


let viewBtn = document.querySelector('.viewBtn');
let memberContainer = document.querySelector('.memberContainer');
let bottomBlurs = document.querySelectorAll('.bottomBlur');

viewBtn.addEventListener('click', () => {
    if(viewBtn.innerText == 'View All'){
        memberContainer.style.height = 'auto';
        memberContainer.style.overflow = 'visible';
        bottomBlurs.forEach(bottomBlur => {
            bottomBlur.style.display = 'none';
        });
        viewBtn.style.bottom = '-1%';
        viewBtn.textContent = 'Hide';
    }else{
        memberContainer.style.height = '100vh';
        memberContainer.style.overflow = 'hidden';
        bottomBlurs.forEach(bottomBlur => {
            bottomBlur.style.display = 'block';
        });
        viewBtn.style.bottom = '2%';
        viewBtn.textContent = 'View All';
    }
})