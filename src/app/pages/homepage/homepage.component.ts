import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  isAuth: boolean = !!localStorage.getItem('accessToken');

  cardData = [
    {
      serviceName: "Inventory Management",
      serviceTagLine: "Efficiently manage ingredients",
      serviceDescription: "Keep track of ingredient counts, automate ordering, and utilize a vendor marketplace.",
      serviceImage: "https://res.cloudinary.com/dpevaxuko/image/upload/v1707731977/xpnyyhlbddaj58olhgmk.jpg" // reduce image
    },
    {
      serviceName: "Menu Builder",
      serviceTagLine: "Craft enticing menus with ease",
      serviceDescription: "Create detailed menus using inventory items, displaying costs and nutritional information.",
      serviceImage: "https://images.ctfassets.net/sv4wepqk8nm7/53furOspiTjXcLkW50lLvn/6ff8f14036f67f6d24ae8a6bd51ac36f/Deliverect-Menu-Builder-OV.jpg?w=360&h=312&q=80&fm=webp"
    },
    {
      serviceName: "POS System",
      serviceTagLine: "Streamline in-house dining operations",
      serviceDescription: "Manage orders, payments, and tables seamlessly, integrated with Kitchen Display System.",
      serviceImage: "https://res.cloudinary.com/dpevaxuko/image/upload/v1707722385/ivbcjmo16li17xxb6ojt.png"
    },
    {
      serviceName: "Kitchen Display System",
      serviceTagLine: "Efficient order processing for chefs",
      serviceDescription: "Prioritize orders based on rules, ensuring efficient kitchen operations.",
      serviceImage: "https://res.cloudinary.com/dpevaxuko/image/upload/v1707722858/en6dmanlajcfkrh2jjvi.jpg"
    },
    {
      serviceName: "Marketplace",
      serviceTagLine: "Expand your restaurant's reach",
      serviceDescription: "Automatically list your restaurant on our online food marketplace, increasing your visibility and orders.",
      serviceImage: "https://res.cloudinary.com/dpevaxuko/image/upload/v1707723247/ptaeycixomw3yrouc7gz.jpg"
    },
    {
      serviceName: "Review and Reservation Platform",
      serviceTagLine: "Empower customers and streamline reservations",
      serviceDescription: "Enable customers to leave reviews and book reservations effortlessly.",
      serviceImage: "https://res.cloudinary.com/dpevaxuko/image/upload/v1707723404/ooy7eqdmygtihdvo8ldf.jpg"
    },
    {
      serviceName: "HR Management System",
      serviceTagLine: "Optimize workforce management",
      serviceDescription: "Efficiency tracking, payroll management, hiring platform, and more for restaurant staff.",
      serviceImage: "https://res.cloudinary.com/dpevaxuko/image/upload/v1707729204/lfqdd6zcftutkpcew99h.jpg"
    }
  ];


}
