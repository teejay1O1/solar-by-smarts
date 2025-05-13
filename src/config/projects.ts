import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Mindspace Corporate Office",
    category: "Corporate",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "100 kW installation at the Rooftop of 18 Corporate Building, Imperia Mindspace, Gurugram. A state of the art smart building installation with integrated monitoring system.",
    metrics: {
      capacity: "100 kW",
      location: "Gurugram",
      type: "Smart Building",
      completion: "2023"
    }
  },
  {
    title: "R R Trends Corporate Office",
    category: "Corporate Innovation",
    image: "https://images.pexels.com/photos/9875374/pexels-photo-9875374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "A state-of-the-art plant with robotics and first of its kind in the Noida region. Executed with Microinverter technology, ensuring 50% more output than conventional Solar plant and 25% more efficient.",
    metrics: {
      capacity: "100 kW",
      efficiency: "+25%",
      technology: "Microinverter",
      innovation: "Robotics Integration"
    }
  },
  {
    title: "Mangalayatan University",
    category: "Educational Institution",
    image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "A string inverter installation installed at Mangalayatan University, Aligarh. This 200 kW system demonstrates our expertise in large-scale educational institution projects.",
    metrics: {
      capacity: "200 kW",
      location: "Aligarh",
      type: "String Inverter",
      sector: "Education"
    }
  },
  {
    title: "Commercial Building Installation",
    category: "Commercial",
    image: "https://images.pexels.com/photos/1335696/pexels-photo-1335696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    description: "40 kW Commercial Building installation with impressive financial benefits. The project demonstrates excellent ROI with significant cost savings.",
    metrics: {
      capacity: "40 kW",
      savings: "₹1.35 Crores",
      payback: "2.95 Years",
      type: "Commercial"
    }
  }
];