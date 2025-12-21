import React from 'react';
import Cards from './components/Cards';

const App = () => {
  const birthdayCakes = [
    {
      cakeName: 'Vanilla Cream Cake',
      weight: '1 kg',
      price: 450,
      img: 'https://images.unsplash.com/photo-1634839582502-c5d12a99db7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFZhbmlsbGElMjBDcmVhbSUyMENha2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      cakeName: 'Chocolate Truffle Cake',
      weight: '1 kg',
      price: 600,
      img: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fENob2NvbGF0ZSUyMFRydWZmbGUlMjBDYWtlfGVufDB8fDB8fHww',
    },
    {
      cakeName: 'Butterscotch Crunch Cake',
      weight: '1 kg',
      price: 600,
      img: 'https://media.istockphoto.com/id/807762578/photo/happy-birthday-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=OQF9qvY1gPhiIgqKB74eGtnIA_a-pWTzQFTd2-t1rpc=',
    },
    {
      cakeName: 'Pineapple Fresh Cream Cake',
      weight: '500 gm',
      price: 500,
      img: 'https://media.istockphoto.com/id/1407969488/photo/top-view-of-pineapple-fresh-cream-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=q3mwFHtlfPj38U1wZifWqxK55T1USBLQB2V8yDdIPQc=',
    },
    {
      cakeName: 'Chocolate Fudge Cake',
      weight: '1 kg',
      price: 1050,
      img: 'https://media.istockphoto.com/id/1191458812/photo/chocolate-layer-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=Aj3RhWYxc7SrI7xl09X5cc9Me_8pMNYfTSEaw7GmWIA=',
    },
    {
      cakeName: 'Blueberry Cheesecake',
      weight: '500 gm',
      price: 850,
      img: 'https://plus.unsplash.com/premium_photo-1726718421314-91dcf88ca873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJsdWViZXJyeSUyMENoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      cakeName: 'Ferrero Rocher Cake',
      weight: '1 kg',
      price: 1400,
      img: 'https://images.unsplash.com/photo-1598963259362-63cdce446ae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZlcnJlcm8lMjBSb2NoZXIlMjBDYWtlfGVufDB8fDB8fHww',
    },
    {
      cakeName: 'Black Forest Cake',
      weight: '500 gm',
      price: 550,
      img: 'https://media.istockphoto.com/id/1045462598/photo/black-forest-cake-on-mahogany-wood-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=33rShsao_QLqX6KGx9oDH33q0vSj7oe4XjHDIDtX6h0=',
    },
    {
      cakeName: 'Red Velvet Cake',
      weight: '500 gm',
      price: 650,
      img: 'https://plus.unsplash.com/premium_photo-1713920189815-876dbdf5f56e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVkJTIwVmVsdmV0JTIwQ2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      cakeName: 'Rasmalai Cake',
      weight: '1 kg',
      price: 1200,
      img: 'https://assets.giftalove.com/resources/common/giftimages/productimage2/blissful-rasmalai-cake.jpg',
    },
  ];

  // For knowing what is happening...

  // birthdayCakes.map(function (ele) {
  //   console.log(ele);
  // });

  return (
    <div className="parent">
      {birthdayCakes.map(function (ele, index) {
        return (
          <div key={index}>
            <Cards
              cakeName={ele.cakeName}
              weight={ele.weight}
              image={ele.img}
              price={ele.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
