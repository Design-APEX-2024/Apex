// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MEMBER'S SCRIPT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

let htmlContent = (item, index) => `
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
    <a href="resume.html?id=${index}"><button class="down">Resume</button></a>
  </div>
</div>
`;

let renderContent = (data) => {
    containerElement.innerHTML = data.map((item, index) => {
        let originalIndex = details.findIndex(detail => detail.name === item.name); 
        return htmlContent(item, originalIndex);
    }).join('');
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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LOADER SCRIPT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function loader(){
    const preloader = document.querySelector(".loader");
    const body = document.querySelector("body");
    preloader.style.display = "none";
    body.style.overflow = "visible";
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CORE TEAM SCRIPT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const carouselItems = [
    { title: "Aman Pandey", name: "President", image: "./components/images/core/aman.png" },
    { title: "Abhinav Singh", name: "Vice President", image: "./components/images/core/abhinav.jpg" },
    { title: "Sumit Kumar", name: "Vice President", image: "./components/images/core/sumit.jpg" },
    { title: "Priyanshu Sharma", name: "Secretory", image: "./components/images/core/priyanshu.jpg" },
    { title: "Prachi", name: "Joint Secretory", image: "./components/images/core/prachi.jpg" },
    { title: "Kashish Gupta", name: "Joint Secretory", image: "./components/images/core/kashish.jpg" },
    { title: "Jatin Chaurasia", name: "Executive Head", image: "./components/images/core/jatin.jpg" },
    { title: "Tanishk Kamra", name: "Executive Head", image: "./components/images/core/tanishk.jpg" },
    { title: "Dipanshu Kalita", name: "Eagle eye", image: "./components/images/core/dipanshu.jpg" },
    { title: "Lakshita Chawla", name: "Repository Head", image: "./components/images/core/lakshita.jpg" },
    { title: "Ayush Tanwar", name: "3D Head", image: "./components/images/core/ayush.jpg" },
    { title: "Sushil Kumar", name: "VFX Head", image: "./components/images/core/sushil.jpg" },
    { title: "Kannu Krishna Sharma", name: "AI Head", image: "./components/images/core/kannu.png" },
    { title: "Adhyan", name: "Music Prod. Head", image: "./components/images/core/adhyan.jpg" },
    { title: "Khushi Kathuria", name: "Content Head", image: "./components/images/core/khushi.jpg" },
    { title: "Mouli Sadana", name: "Insta Head", image: "./components/images/core/mouli.jpg" },
    { title: "Tamanna Mukherjee", name: "Pinterest Head", image: "./components/images/core/tamanna.jpg" },
    { title: "Pihu", name: "Pinterest Head", image: "./components/images/core/pihu.jpg" },
    { title: "Vansh Goyal", name: "LinkedIn Head", image: "./components/images/core/vansh.jpg" },
    { title: "Dhruv Pal", name: "Website Head", image: "./components/images/core/dhruv.png" }
  ];
  
  
  
  const carouselList = document.getElementById('carousel-list');
  
  carouselItems.forEach(item => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('item');
    carouselItem.style.backgroundImage = `url(${item.image})`;
  
    carouselItem.innerHTML = `
      <div class="content">
        <div class="title">${item.title}</div>
        <div class="name">${item.name}</div>
        <div class="btn">
          <a href="resume"><button class="down">Resume</button></a>
        </div>
      </div>
    `;
  
    carouselList.appendChild(carouselItem);
  });
  

var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item')

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()