//Images for car slides in the hero section
import car1 from "../images/vehicle-1.png";
import car2 from "../images/vehicle-5.png";
import car3 from "../images/vehicle-3.png";
import car4 from "../images/vehicle-2.png";
import car5 from "../images/vehicle-6.png";
import car6 from "../images/vehicle-4.png";

//images for the featured section
//first Slide row
import veh1 from "../images/car-1.png";
import veh2 from "../images/car-2.png";
import veh3 from "../images/car-3.png";
import veh4 from "../images/car-4.png";
import veh5 from "../images/car-5.png";
import veh6 from "../images/car-6.png";
// second slide row
import veh7 from "../images/car-7.png";
import veh8 from "../images/car-8.png";
import veh10 from "../images/car10.png";
import veh11 from "../images/car11.png";
import veh12 from "../images/car12.png"

//customers
import image1 from '../images/pic-1.png';
import image2 from '../images/pic-2.png';
import image3 from '../images/pic-3.png';
import image4 from '../images/pic-4.png';
import image5 from '../images/pic-5.png';
import image6 from '../images/pic-6.png';

export let companyInfo = [
    {
        id : 1,
        quantity : 150,
        desc : 'Branches',
        icon : 'FaHome'
    },
    {
        id : 2,
        quantity : 4770,
        desc : 'Cars Sold',
        icon : 'AiFillCar'
    },
    {
        id : 3,
        quantity : 320,
        desc : 'Happy Clients',
        icon : 'FaUsers'
    },
    {
        id : 4,
        quantity : 1500,
        desc : 'News Car',
        icon : 'AiFillCar'
    }
]

export let ourService = [
    {
        id : 1,
        title : 'Car Selling',
        desc : 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.',
        icon : 'AiFillCar'
    },
    {
        id : 2,
        title : 'Parts Repair',
        desc : 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.',
        icon : 'FaTools'
    },
    {
        id : 3,
        title : 'Car Insurance',
        desc : 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.',
        icon : 'FaCarCrash'
    },
    {
        id : 4,
        title : 'Battery Replacement',
        desc : 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.',
        icon : 'FaCarBattery'
    },
    {
        id : 5,
        title : 'Oil Change',
        desc : 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.',
        icon : 'FaGasPump'
    },
    {
        id : 6,
        title : '24/7 Support',
        desc : 'Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Corporis, Nisi.',
        icon : 'RiCustomerServiceFill'
    }
]

export let slideImage = [
    {
        id : 1,
        image : car1,
        description : ''
    },
    {
        id : 2,
        image : car2,
        description : ''
    },
    {
        id : 3,
        image : car3,
        description : ''
    },
    {
        id : 4,
        image : car4,
        description : ''
    },
    {
        id : 5,
        image : car5,
        description : ''
    },
    {
        id : 6,
        image : car6,
        description : ''
    }
]

export let carStock = [
    {
        id: 1,
        carName: 'Mercedes-Benz SL R231',
        image: veh1,
        price : 55000,
        stars : 5,
        category: 'New',
        make: '2021',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '250mph'
    },
    {
        id: 2,
        carName: 'MG ZS SUV',
        image: veh2,
        price : 65000,
        stars : 5,
        category: 'Used',
        make: '2019',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '180mph'
    },
    {
        id: 3,
        carName: 'Focus ST',
        image: veh3,
        price : 45000,
        stars : 5,
        category: 'New',
        make: '2021',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '220mph'
    },
    {
        id: 4,
        carName: 'Audi e-tron Quattro',
        image: veh4,
        price : 84000,
        stars : 5,
        category: 'Used',
        make: '2020',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '235mph'
    },
    {
        id: 5,
        carName: 'Kia Sportage',
        image: veh5,
        price : 75000,
        stars : 4,
        category: 'New',
        make: '2021',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '200mph'
    },
    {
        id: 6,
        carName: '2018 Honda Civic',
        image: veh6,
        price : 35000,
        stars : 5,
        category: 'Used',
        make: '2019',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '200mph'
    },
    {
        id: 7,
        carName: '2018 Ford Mustang GT',
        image: veh11,
        price : 156000,
        stars : 5,
        category: 'Used',
        make: '2020',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '180mph'
    },
    {
        id: 8,
        carName: 'Chrysler 300s',
        image: veh12,
        price : 256000,
        stars : 4,
        category: 'New',
        make: '2021',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '230mph'
    },
    {
        id: 9,
        carName: '2020 Ford Mustang',
        image: veh10,
        price : 176000,
        stars : 5,
        category: 'Used',
        make: '2020',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '200mph'
    },
    {
        id: 10,
        carName: '2020 Kia SUV',
        image: veh7,
        price : 46000,
        stars : 4,
        category: 'Used',
        make: '2019',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '200mph'
    },
    {
        id: 11,
        carName: 'MG ZV SUV',
        image: veh2,
        price : 67000,
        stars : 2,
        category: 'Used',
        make: '2019',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '200mph'
    },
    {
        id: 12,
        carName: 'Chevrolet Traverse',
        image: veh8,
        price : 44000,
        stars : 3,
        category: 'Used',
        make: '2019',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '200mph'
    },
    {
        id : 13,
        image : car1,
        price : 125000,
        description : '',
        carName: 'Porche 911 GT3',
        category: 'New',
        make: '2021',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '235mph',
        stars: 5
    },
    {
        id : 14,
        image : car2,
        price : 65000,
        description : '',
        carName: 'Porsche Cayman s',
        category: 'Used',
        make: '2019',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '200mph',
        stars: 4
    },
    {
        id : 15,
        image : car3,
        price : 105000,
        description : '',
        carName: 'Porsche 911 Carrera T',
        category: 'New',
        make: '2021',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '235mph',
        stars: 5
    },
    {
        id : 16,
        image : car4,
        price : 85000,
        description : '',
        carName: 'Porsche 911 Carrera 4S',
        category: 'Used',
        make: '2020',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '235mph',
        stars: 5
    },
    {
        id : 17,
        image : car5,
        price : 15000,
        description : '',
        carName: '2008 Porsche Cayenne Turbo',
        category: 'Used',
        make: '2008',
        drive: 'Manual',
        engine: 'Diesel',
        speed: '180mph',
        stars: 3
    },
    {
        id : 18,
        image : car6,
        price : 55000,
        description : '',
        carName: 'Porsche Cayman GT4',
        category: 'Used',
        make: '2016',
        drive: 'Automatic',
        engine: 'Petrol',
        speed: '205mph',
        stars: 5
    }
]
export let featuredCarsFirst = [];
export let featuredCarsSecond = [];
export let latestCars = [

]

export  let customerFeedBack = [
    {
        id: 1,
        fullName: 'John Parker',
        image: image1,
        stars: 5,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.'
    },
    {
        id: 2,
        fullName: 'Ivan Smith',
        image: image2,
        stars: 2,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.'
    },
    {
        id: 3,
        fullName: 'Dyron Walker',
        image: image3,
        stars: 4,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.'
    },
    {
        id: 4,
        fullName: 'Mary Lean',
        image: image4,
        stars: 3,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.'
    },
    {
        id: 5,
        fullName: 'Jesca Jones',
        image: image5,
        stars: 5,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.'
    },
    {
        id: 6,
        fullName: 'Chris Marrick',
        image: image6,
        stars: 4,
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.'
    }
];

export let users =[
    {
        id: 1,
        firstName: 'Ivan',
        lastName: 'Epou',
        email: 'admin@admin.com',
        password: 'admin1234'
    },
    {
        id: 2,
        firstName: 'Dyron',
        lastName: 'Epou',
        email: 'dyron@admin.com',
        password: 'dyron1234'
    },
    {
        id: 3,
        firstName: 'Smith',
        lastName: 'Epou',
        email: 'smith@admin.com',
        password: 'smith1234'
    }
]