


export const media = (file) => `/images/${encodeURIComponent(file)}`

export const school = {
  name: 'Tulas International School',
  short: 'TIS',
  logo: media('schoolLogo.95f6e121.png'),
  footerLogo: media('footer-logo.230b79ff.png'),
  helpline: '+91-9837983791',
  helplineHref: 'tel:+919837983791',
  email: 'info@tis.edu.in',
  landlines: ['0135-2699444', '0135-2699666'],
  address: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  applyUrl: 'https://admission.tis.edu.in',
  virtualTourUrl: 'https://tis.edu.in/virtual-tour/',
  erpUrl: 'https://tis.fedena.com/',
  mapEmbed:
    'https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand&t=m&z=12&output=embed',
}

export const navLinks = [
  { label: 'About TIS', href: '#about' },
  { label: 'Boarding Life', href: '#life' },
  { label: 'Beyond Academics', href: '#sports' },
  { label: 'Achievers', href: '#achievers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Admission', href: '#enquire' },
]

export const hero = {
  title: 'Welcome to Tulas International School (TIS)',
  lead: 'TIS is one of India’s top boarding and day schools in Dehradun, India.',
  body: 'Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.',
  extra:
    'Explore our programs, campus life, achievements, and why TIS is the preferred choice for parents across India.',
  excellenceTitle: 'Boarding and Day School Excellence',
  excellence: [
    'We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.',
    'Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.',
  ],
}

export const gallery = [
  { file: 'Image 2.0c5295c9.webp', label: 'Basketball' },
  { file: 'polo.973ddbae.webp', label: 'Classical Dance' },
  { file: 'Image 3.21dc9e69.webp', label: 'Cricket' },
  { file: 'karate.4020fba5.webp', label: 'Karate' },
  { file: 'swimming.6fc81e65.webp', label: 'Science Lab' },
  { file: 'Image 1.0a814859.webp', label: 'Target Shooting' },
  { file: 'pot.6f7c2ee3.webp', label: 'Pottery' },
  { file: 'dance.88843edb.webp', label: 'Art Class' },
]

export const about = {
  title: 'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.',
}

export const stories = [
  {
    quote: 'We feel supported in what we do and nudged further to do more',
    text: 'At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.',
    image: media('ladyInPink.c358aa8f.png'),
    alt: 'A TIS student in a pink outfit',
  },
  {
    quote: 'Tulas helped me thrive and become the best version of myself',
    text: 'When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.',
    image: media('manInBlue.46316cbf.png'),
    alt: 'A TIS student in a blue outfit',
  },
]

export const classOptions = [
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
  'Class IX',
  'Class X',
  'Class XI',
  'Class XII',
]

export const countryCodes = ['+91', '+971', '+1', '+44', '+61', '+65', '+975', '+977', '+880', '+94']

export const stateOptions = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Pondicherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Other',
]

export const consentText =
  'I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun'

export const sports = {
  title: 'Sports ?',
  lead: 'It’s not just a facility. At Tulas it’s the foundation!',
  sub: '16+ sports curated to bring joy and discipline to your life.',
  list: [
    { name: 'Archery', icon: '🏹' },
    { name: 'Cycling', icon: '🚴' },
    { name: 'Hockey', icon: '🏑' },
    { name: 'Swimming', icon: '🏊' },
    { name: 'Taekwondo', icon: '🥋' },
    { name: 'Football', icon: '⚽' },
    { name: 'Shooting Range', icon: '🎯' },
    { name: 'Horse Riding', icon: '🐎' },
    { name: 'Billiards', icon: '🎱' },
    { name: 'Squash', icon: '🥎' },
    { name: 'Volleyball', icon: '🏐' },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Cricket', icon: '🏏' },
    { name: 'Lawn Tennis', icon: '🎾' },
    { name: 'Badminton', icon: '🏸' },
    { name: 'Table Tennis', icon: '🏓' },
  ],
}

export const secret = {
  question: 'At Tulas, we always ask, “What’s the secret to making school awesome?”',
  answer:
    'The secret to making one’s school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.',
  punchline: 'There, we cracked it!',
}

export const stats = [
  { value: 22, suffix: '', label: 'Acre Pollution-Free Campus' },
  { value: 16, suffix: '+', label: 'Olympic Sports' },
  { value: 24, suffix: '×7', label: 'Medical Assistance' },
  { value: 6, suffix: ':1', label: 'Student Teacher Ratio' },
]

export const rankings = [
  { rank: '#1', place: 'In Dehradun', text: 'Co-Educational Boarding School in Dehradun by Education Today' },
  { rank: '#2', place: 'In Uttarakhand', text: 'Co-Educational Boarding School in North India by Education Today' },
  { rank: '#1', place: 'In North India', text: 'Co-Educational Boarding School in North India by Outlook' },
  { rank: '#4', place: 'In India', text: 'Co-Educational Boarding School in India by Education Today' },
]

export const achievers = {
  title: 'Influential Personalities On Campus',
  tabs: [
    {
      id: 'sports',
      label: 'Sports Person / Social Media Influencers',
      people: [
        {
          name: 'Sakshi Malik',
          role: 'First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014. Commonwealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shri Awardee 2017',
          photo: 'SakshiMalik.91174bf4.webp',
        },
        {
          name: 'Vishesh Bhriguvanshi',
          role: 'Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008',
          photo: 'VisheshBhriguvanshi.52af8bfd.webp',
        },
        {
          name: 'Prakashi Tomar & Late Ms Chandro Tomar',
          role: 'Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner',
          photo: 'PrakashiTomar.339dbb95.webp',
        },
        {
          name: 'Abhishek Verma',
          role: '6th Highest World Ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013',
          photo: 'AbhishekVerma.18f9d349.webp',
        },
        {
          name: 'Aditi Gopichand Swami',
          role: '7th Highest World Ranking, Arjuna Awardee, World Champion in Archery 2024',
          photo: 'AditiGopichandSwami.b7afa246.webp',
        },
        {
          name: 'Jeevan Jyot Singh Teja',
          role: 'Dronacharya Awardee in Archery 2022',
          photo: 'JeevanJyotSinghTeja.9a07711c.webp',
        },
        {
          name: 'Ojas Deotale',
          role: '9th Highest World Ranking, Arjuna Awardee 2023 and current world champion in Archery',
          photo: 'OjasPravinDeotale.1d2e01cc.webp',
        },
        {
          name: 'Rajat Chauhan',
          role: '5th Highest World Ranking Arjuna Awardee 2016 in Archery',
          photo: 'RajatChauhan.bcb1fbf2.webp',
        },
        {
          name: 'Devendra Singh Bisht',
          role: 'Under 18 School Indian Football Team Selector',
          photo: 'DevendraSinghBisht.09635f71.webp',
        },
        {
          name: 'Manish Metani',
          role: 'Indian Football Player',
          photo: 'ManishMetani.ca55bf71.webp',
        },
        {
          name: 'Saurabh Joshi',
          role: 'Influencer with 30 Million Subscribers on Youtube',
          photo: 'SaurabhJoshi.450ff5df.webp',
        },
        {
          name: 'Arushi Nishank',
          role: 'Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga',
          photo: 'ArushiNishank.f3341404.webp',
        },
        {
          name: 'Laxmi Agarwal',
          role: 'International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims. Deepika Padukone acted in the Biopic movie “Chhapaak” based on her',
          photo: 'LakshmiAgarwal.7405df5d.webp',
        },
      ],
    },
    {
      id: 'leaders',
      label: 'Leaders of India',
      people: [
        { name: 'Shri Dhan Singh Rawat Ji', role: 'Minister of Higher Education, Uttarakhand', photo: 'DhanSinghRawat.f504bd14.webp' },
        { name: 'Shri Trivendra Singh Rawat Ji', role: 'Member of Parliament & Former Chief Minister, Uttarakhand', photo: 'TrivendraSinghRawat.c2e8d88b.webp' },
        { name: 'Shri Subodh Uniyal Ji', role: 'Technical Education and Forest Minister, Uttarakhand', photo: 'SubodhUniyal.25533860.webp' },
        { name: 'Dr Ramesh Pokhriyal Nishank Ji', role: 'Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand', photo: 'RameshPokhriyalNishank.5f11fd77.webp' },
        { name: 'Shri Bhagat Singh Koshyari Ji', role: 'Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand', photo: 'BhagatSinghKoshyari.f996a329.webp' },
        { name: 'Shri Dharmendra Pradhan Ji', role: 'Union Minister of Education for India', photo: 'DharmendraPradhan.cae1e9ae.webp' },
        { name: 'Shri Anurag Tripathi Ji', role: 'CBSE Secretary Uttarakhand', photo: 'AnuragTripathi.a8e203b4.webp' },
        { name: 'Shri Arvind Pandey Ji', role: 'MLA, Former Education Minister', photo: 'ArvindPandey.3f959220.webp' },
        { name: 'Shri Namami Bansal Ji', role: 'I.A.S Municipal Commissioner Uttarakhand', photo: 'NamamiBansal.97f4f1f0.webp' },
        { name: 'Shri Abhinav Kumar Ji', role: 'ADG and former DGP of Uttarakhand Police', photo: 'AbhinavKumar.8cbdb15a.webp' },
        { name: 'Shri Janmejaya Khanduri Ji', role: 'IG Dehradun - Government of India', photo: 'JanmejayaKhanduri.18ae0527.webp' },
        { name: 'Shri Ashok Kumar Ji', role: 'Former DGP, Uttarakhand', photo: 'AshokKumar.b9a984fa.webp' },
        { name: 'Shri Amit Kumar Sinha Ji', role: 'ADG, Principal Secretary Sports, Uttarakhand', photo: 'AmitKumarSinha.5e245cdc.webp' },
        { name: 'Shri Sunil Uniyal Gama Ji', role: 'Former Mayor Municipal Corporation, Dehradun', photo: 'SunilUniyalGama.55361603.webp' },
        { name: 'Shri Sahdev Singh Pundir Ji', role: 'MLA Sahaspur, Uttarakhand', photo: 'SahdevSinghPundir.7aa9859f.webp' },
      ],
    },
  ],
}

export const awards = {
  title: 'Awards',
  text: 'We believe in celebrating the hard work and perseverance of the best!',
  items: [
    { file: 'TopBoarding.e5405c1a.jpg', alt: 'Top Boarding School award' },
    { file: 'BestResidential.5173db8d.jpg', alt: 'Best Residential School award' },
    { file: 'UTTARAKHAND.652376d5.jpg', alt: 'Uttarakhand school award' },
  ],
}

export const tour = {
  eyebrow: 'Dive into our...',
  title: 'Virtual Tour',
}

export const parents = {
  title: 'From The Parents',
  quote:
    'We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.',
  videos: [
    'https://assets.tulas.edu.in/tis/1VIDEO-compressed.mp4',
    'https://assets.tulas.edu.in/tis/2VIDEO-compressed.mp4',
    'https://assets.tulas.edu.in/tis/3VIDEO-compressed.mp4',
  ],
}

export const reviews = [
  { name: 'Tashi Tsering', relation: 'F/O Jigmet Skaldon', text: 'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.' },
  { name: 'Namita Agarwal', relation: 'M/O Krishna Agarwal', text: 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.' },
  { name: 'Sandeep Kumar', relation: 'F/O Aryan', text: 'Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.' },
  { name: 'Pinky Sharma', relation: 'M/O Swastik Sharma', text: 'I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.' },
  { name: 'Suresh Kumar', relation: 'F/O Aditya Kumar', text: 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.' },
  { name: 'Mrs Urja Bhayani', relation: 'M/O Shikha & Samarth Bhayani', text: 'Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.' },
  { name: 'Amit Agrawal', relation: 'F/O Samruddhi Agrawal', text: 'Being a parent it’s a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.' },
  { name: 'Ashu Arora', relation: 'M/O Manisha Changrani', text: 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.' },
  { name: 'Gulabdas Gupta', relation: 'F/O Annika Gulabdas Gupta', text: 'We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.' },
  { name: 'Selendra K. Ajmera', relation: 'F/O Aman Ajmera', text: 'Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.' },
]

export const collaborations = {
  title: 'Collaborations',
  count: '12+',
  logos: [
    { file: 'Universidad.935e33e1.png', alt: 'Universidad' },
    { file: 'yhnbepcntet.3b80eac6.jpg', alt: 'Partner institution' },
    { file: 'Universitat.f7fac869.jpg', alt: 'Universitat' },
    { file: 'Cpi6.106c6037.jpg', alt: 'CPI' },
    { file: 'inseec.780a3115.png', alt: 'INSEEC' },
    { file: 'Trinty.31016999.png', alt: 'Trinity' },
    { file: 'University.6c89dc70.png', alt: 'University partner' },
    { file: 'International_Award_for_Young_People_logo.a0d1c4fa.jpg', alt: 'International Award for Young People' },
    { file: 'lions.bf493cc1.png', alt: 'Lions' },
    { file: 'inseecU.1e5c929a.png', alt: 'INSEEC U' },
    { file: 'Universitas.d9db402c.png', alt: 'Universitas' },
    { file: 'universityLogo.6e446aad.jpg', alt: 'University partner logo' },
  ],
}

const SITE = 'https://tis.edu.in'

export const footerLinks = [
  { label: 'FAQ', href: `${SITE}/faq/` },
  { label: 'Calendar', href: `${SITE}/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf` },
  { label: 'Brochure', href: `${SITE}/MandatoryPDF/TIS_BROCHURE.pdf` },
  { label: 'Privacy Policy', href: `${SITE}/privacy-policy/` },
  { label: 'Terms & Conditions', href: `${SITE}/terms-conditions/` },
  { label: 'Disclaimer', href: `${SITE}/disclaimer/` },
  { label: 'Disciplinary Policy', href: `${SITE}/MandatoryPDF/DisciplinaryPolicy.pdf` },
  { label: 'Mobile Phone Policy', href: `${SITE}/MandatoryPDF/MobilePhonePolicy.pdf` },
  { label: 'Child Welfare & Safety Policy', href: `${SITE}/MandatoryPDF/childWelfarePolicy.pdf` },
]

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
  { label: 'Twitter', href: 'https://twitter.com/tulas_intschool?lang=en' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
  { label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
]
