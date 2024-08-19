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
            <!-- First Section -->
      <section class="flex">
        <!-- Left Side -->
        <div class="w-1/3 p-4">
          <div class="flex flex-col items-center">
            <img
              src=${member.src}
              alt="Profile Image"
              class="w-64 h-96 object-cover mb-4"
            />
            <h1 class="text-xl font-bold">John Doe</h1>
          </div>
        </div>
        <!-- Right Side -->
        <div class="w-2/3 p-4 border-3 custom-border-orange">
          <h1 class="text-2xl font-bold">${member.name}</h1>
          <h3 class="text-xl font-semibold text-gray-700">
            ${member.designation}
          </h3>
          <h2 class="text-xl font-bold mt-4">About</h2>
          <p class="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet accumsan arcu. Donec in nisl urna. Proin et dictum magna, vel
            fermentum justo.
          </p>
          <a
            href="mailto:contact@example.com"
            class="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >Contact</a
          >
        </div>
      </section>

      <!-- Second Section -->
      <section class="p-4">
        <h1 class="text-2xl font-bold mb-4">Skills</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            class="flex flex-col items-center p-4 border border-gray-300 rounded-lg"
          >
            <img
              src="path_to_skill_image.jpg"
              alt="Skill Image"
              class="w-16 h-16 mb-2"
            />
            <p class="text-sm font-medium">Skill 1</p>
          </div>
          <!-- Repeat for other skills -->
        </div>
      </section>

      <!-- Third Section -->
      <section class="p-4">
        <h1 class="text-2xl font-bold mb-4">Works</h1>
        <div class="flex space-x-4">
          <img
            src="path_to_work_image1.jpg"
            alt="Work 1"
            class="w-1/3 rounded-lg shadow-md"
          />
          <img
            src="path_to_work_image2.jpg"
            alt="Work 2"
            class="w-1/3 rounded-lg shadow-md"
          />
          <img
            src="path_to_work_image3.jpg"
            alt="Work 3"
            class="w-1/3 rounded-lg shadow-md"
          />
        </div>
      </section>
        `;
        document.querySelector('#resume-content').innerHTML = resumeContent;
    } else {
        document.querySelector('#resume-content').innerHTML = '<p>Member not found.</p>';
    }
} else {
    document.querySelector('#resume-content').innerHTML = '<p>No member selected.</p>';
}
