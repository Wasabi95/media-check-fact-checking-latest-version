/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";


export const categories = [
  {
    _id: uuid(),

    categoryName: 'Estados Unidos',
    description: '',
    img: "https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  {
    _id: uuid(),
    categoryName: 'Mexico',
    description: '',
    img: "https://images.pexels.com/photos/1618423/pexels-photo-1618423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
 
  },
  {
    _id: uuid(),
    categoryName: 'America Latina',
    description: '',
    img: "https://images.pexels.com/photos/52502/map-south-america-atlas-52502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  {
    _id: uuid(),
    categoryName: 'Covid-19',
    description: '',
    img: "https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  {
    _id: uuid(),
    categoryName: 'Salud',
    description: '',
    img: "https://images.pexels.com/photos/4047073/pexels-photo-4047073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  {
    _id: uuid(),
    categoryName: 'Medio Ambiente',
    description: '',
    img: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
  },
  
];
