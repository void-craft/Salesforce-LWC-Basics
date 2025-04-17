import { LightningElement, api } from 'lwc';
export default class BikeCard extends LightningElement {
    @api bike;
  name = 'Electra X4';
  description = 'A sweet bike built for comfort.';
  category = 'Mountain';
  material = 'Steel';
  price = '$2,700';
  pictureUrl = 'https://cdn.pixabay.com/photo/2016/11/18/12/49/bicycle-1834265_1280.jpg';
}