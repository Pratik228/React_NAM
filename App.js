import React from "react";
import ReactDOM from "react-dom/client";

//Building Food App
const resList = [
  {
    restaurant_card: {
      id: "rest_001",
      name: "The Gourmet Kitchen",
      image_url:
        "https://bakewithzoha.com/wp-content/uploads/2024/03/chicken-biryani-featured-1.jpg",
      cuisines: ["Italian", "Continental", "Desserts"],
      description: "Delicious multi-cuisine dishes with a gourmet twist.",
      rating: {
        average: 4.5,
        votes: 1200,
      },
      delivery_time: "30 mins",
      cost_for_two: "$25",
      offers: [
        {
          offer_id: "offer_001",
          description: "20% off on orders above $50",
        },
        {
          offer_id: "offer_002",
          description: "Free dessert on orders above $30",
        },
      ],
      is_veg: true,
      distance: "1.5 km",
      is_favorite: false,
      tags: ["Pure Veg", "Contactless Delivery"],
      availability: {
        is_open: true,
        next_opening_time: "10:00 AM",
      },
    },
  },
  {
    restaurant_card: {
      id: "rest_002",
      name: "Spice Symphony",
      image_url:
        "https://media.istockphoto.com/photos/chicken-tikka-picture-id1281568743",
      cuisines: ["Indian", "Mughlai", "Biryani"],
      description: "Authentic Indian flavors with a symphony of spices.",
      rating: {
        average: 4.7,
        votes: 980,
      },
      delivery_time: "45 mins",
      cost_for_two: "$30",
      offers: [
        {
          offer_id: "offer_003",
          description: "15% off on your first order",
        },
        {
          offer_id: "offer_004",
          description: "Buy 1 Get 1 Free on selected dishes",
        },
      ],
      is_veg: false,
      distance: "2.0 km",
      is_favorite: true,
      tags: ["Popular", "Family Packs"],
      availability: {
        is_open: true,
        next_opening_time: "11:00 AM",
      },
    },
  },
  {
    restaurant_card: {
      id: "rest_003",
      name: "Green Garden Cafe",
      image_url: "https://images.unsplash.com/photo-1528680478912-1b4b7e0a555d",
      cuisines: ["Healthy", "Salads", "Smoothies"],
      description: "Fresh and healthy meals with organic ingredients.",
      rating: {
        average: 4.3,
        votes: 850,
      },
      delivery_time: "25 mins",
      cost_for_two: "$20",
      offers: [
        {
          offer_id: "offer_005",
          description: "10% off on orders above $40",
        },
        {
          offer_id: "offer_006",
          description: "Free smoothie with any salad order",
        },
      ],
      is_veg: true,
      distance: "1.0 km",
      is_favorite: false,
      tags: ["Organic", "Health Conscious"],
      availability: {
        is_open: false,
        next_opening_time: "9:00 AM",
      },
    },
  },
  {
    restaurant_card: {
      id: "rest_004",
      name: "Burger House",
      image_url:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
      cuisines: ["American", "Fast Food", "Burgers"],
      description: "Juicy burgers and crispy fries made to order.",
      rating: {
        average: 4.6,
        votes: 1500,
      },
      delivery_time: "20 mins",
      cost_for_two: "$15",
      offers: [
        {
          offer_id: "offer_007",
          description: "Free fries with any burger",
        },
        {
          offer_id: "offer_008",
          description: "Combo deals starting at $12",
        },
      ],
      is_veg: false,
      distance: "1.8 km",
      is_favorite: true,
      tags: ["Fast Delivery", "Combo Offers"],
      availability: {
        is_open: true,
        next_opening_time: "10:30 AM",
      },
    },
  },
  {
    restaurant_card: {
      id: "rest_005",
      name: "Sushi Express",
      image_url: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      cuisines: ["Japanese", "Sushi", "Seafood"],
      description: "Fresh sushi and seafood delivered right to your door.",
      rating: {
        average: 4.8,
        votes: 1100,
      },
      delivery_time: "35 mins",
      cost_for_two: "$40",
      offers: [
        {
          offer_id: "offer_009",
          description: "Free miso soup with sushi orders",
        },
        {
          offer_id: "offer_010",
          description: "20% off on all sushi platters",
        },
      ],
      is_veg: false,
      distance: "2.5 km",
      is_favorite: false,
      tags: ["Fresh Ingredients", "Chef's Special"],
      availability: {
        is_open: false,
        next_opening_time: "12:00 PM",
      },
    },
  },
];

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const styleCard = {
  backgroundColor: "gray",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFwIrrpQxo/1/0/1600w/canva-brown-flat-illustrative-chef-restaurant-logo-pRMi3FdE_Yc.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restraunt-container">
        {resList.map((res) => (
          <RestaurantCard key={res.restaurant_card.id} resList={res} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = ({ resList }) => {
  const { name, cuisines, rating, delivery_time, cost_for_two } =
    resList?.restaurant_card;
  return (
    <div className="cards" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="card-logo"
        src={resList.restaurant_card.image_url}
        alt="biryani"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating.average} stars</h4>
      <h4>{delivery_time} Minutes</h4>
      <h4>{cost_for_two} For two</h4>
    </div>
  );
};

const Footer = () => {
  return <div className="footer">{}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
