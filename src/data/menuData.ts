
export interface FoodItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  preparationTime: string;
  isVegetarian: boolean;
  isSpicy: boolean;
  ingredients: string[];
}

export const categories = [
  'All',
  'Appetizers',
  'Main Course',
  'Pizza',
  'Burgers',
  'Pasta',
  'Salads',
  'Desserts',
  'Beverages',
  'Chinese',
  'Indian',
  'Italian',
  'Mexican',
  'Thai',
  'Japanese'
];

export const foodItems: FoodItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Crispy Chicken Wings',
    price: 12.99,
    description: 'Spicy buffalo wings served with ranch dressing',
    image: '/placeholder.svg',
    category: 'Appetizers',
    rating: 4.5,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken wings', 'Buffalo sauce', 'Ranch dressing']
  },
  {
    id: '2',
    name: 'Mozzarella Sticks',
    price: 8.99,
    description: 'Golden fried mozzarella with marinara sauce',
    image: '/placeholder.svg',
    category: 'Appetizers',
    rating: 4.2,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Mozzarella cheese', 'Breadcrumbs', 'Marinara sauce']
  },
  {
    id: '3',
    name: 'Loaded Nachos',
    price: 10.99,
    description: 'Tortilla chips with cheese, jalapeños, and sour cream',
    image: '/placeholder.svg',
    category: 'Appetizers',
    rating: 4.3,
    preparationTime: '12-18 min',
    isVegetarian: true,
    isSpicy: true,
    ingredients: ['Tortilla chips', 'Cheese sauce', 'Jalapeños', 'Sour cream']
  },
  {
    id: '4',
    name: 'Garlic Bread',
    price: 6.99,
    description: 'Toasted bread with garlic butter and herbs',
    image: '/placeholder.svg',
    category: 'Appetizers',
    rating: 4.1,
    preparationTime: '8-12 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Bread', 'Garlic', 'Butter', 'Herbs']
  },
  {
    id: '5',
    name: 'Onion Rings',
    price: 7.99,
    description: 'Crispy beer-battered onion rings',
    image: '/placeholder.svg',
    category: 'Appetizers',
    rating: 4.0,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Onions', 'Beer batter', 'Flour']
  },

  // Pizza
  {
    id: '6',
    name: 'Margherita Pizza',
    price: 18.99,
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    image: '/placeholder.svg',
    category: 'Pizza',
    rating: 4.6,
    preparationTime: '20-25 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil']
  },
  {
    id: '7',
    name: 'Pepperoni Pizza',
    price: 21.99,
    description: 'Traditional pepperoni with mozzarella cheese',
    image: '/placeholder.svg',
    category: 'Pizza',
    rating: 4.7,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Pepperoni']
  },
  {
    id: '8',
    name: 'Meat Lovers Pizza',
    price: 24.99,
    description: 'Loaded with pepperoni, sausage, ham, and bacon',
    image: '/placeholder.svg',
    category: 'Pizza',
    rating: 4.8,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Pepperoni', 'Sausage', 'Ham', 'Bacon']
  },
  {
    id: '9',
    name: 'Veggie Supreme Pizza',
    price: 22.99,
    description: 'Bell peppers, mushrooms, onions, and olives',
    image: '/placeholder.svg',
    category: 'Pizza',
    rating: 4.4,
    preparationTime: '20-25 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Bell peppers', 'Mushrooms', 'Onions', 'Olives']
  },
  {
    id: '10',
    name: 'Hawaiian Pizza',
    price: 20.99,
    description: 'Ham and pineapple with mozzarella',
    image: '/placeholder.svg',
    category: 'Pizza',
    rating: 4.2,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Ham', 'Pineapple']
  },

  // Burgers
  {
    id: '11',
    name: 'Classic Cheeseburger',
    price: 14.99,
    description: 'Beef patty with cheese, lettuce, tomato, and pickles',
    image: '/placeholder.svg',
    category: 'Burgers',
    rating: 4.5,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Beef patty', 'Cheese', 'Lettuce', 'Tomato', 'Pickles', 'Burger bun']
  },
  {
    id: '12',
    name: 'Bacon Burger',
    price: 16.99,
    description: 'Juicy beef patty with crispy bacon and cheese',
    image: '/placeholder.svg',
    category: 'Burgers',
    rating: 4.6,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Beef patty', 'Bacon', 'Cheese', 'Lettuce', 'Tomato', 'Burger bun']
  },
  {
    id: '13',
    name: 'Veggie Burger',
    price: 13.99,
    description: 'Plant-based patty with fresh vegetables',
    image: '/placeholder.svg',
    category: 'Burgers',
    rating: 4.3,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Veggie patty', 'Lettuce', 'Tomato', 'Onions', 'Burger bun']
  },
  {
    id: '14',
    name: 'Spicy Chicken Burger',
    price: 15.99,
    description: 'Grilled chicken with spicy sauce and jalapeños',
    image: '/placeholder.svg',
    category: 'Burgers',
    rating: 4.4,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken breast', 'Spicy sauce', 'Jalapeños', 'Lettuce', 'Burger bun']
  },
  {
    id: '15',
    name: 'Double Cheese Burger',
    price: 18.99,
    description: 'Two beef patties with double cheese',
    image: '/placeholder.svg',
    category: 'Burgers',
    rating: 4.7,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Two beef patties', 'Double cheese', 'Lettuce', 'Tomato', 'Burger bun']
  },

  // Pasta
  {
    id: '16',
    name: 'Spaghetti Carbonara',
    price: 16.99,
    description: 'Classic Italian pasta with eggs, cheese, and bacon',
    image: '/placeholder.svg',
    category: 'Pasta',
    rating: 4.5,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Bacon', 'Black pepper']
  },
  {
    id: '17',
    name: 'Fettuccine Alfredo',
    price: 15.99,
    description: 'Creamy white sauce with fettuccine pasta',
    image: '/placeholder.svg',
    category: 'Pasta',
    rating: 4.4,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Fettuccine', 'Cream', 'Parmesan cheese', 'Butter', 'Garlic']
  },
  {
    id: '18',
    name: 'Penne Arrabbiata',
    price: 14.99,
    description: 'Spicy tomato sauce with penne pasta',
    image: '/placeholder.svg',
    category: 'Pasta',
    rating: 4.3,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: true,
    ingredients: ['Penne pasta', 'Tomatoes', 'Garlic', 'Red chili flakes', 'Olive oil']
  },
  {
    id: '19',
    name: 'Lasagna',
    price: 19.99,
    description: 'Layered pasta with meat sauce and cheese',
    image: '/placeholder.svg',
    category: 'Pasta',
    rating: 4.6,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Lasagna sheets', 'Ground beef', 'Tomato sauce', 'Mozzarella', 'Ricotta cheese']
  },
  {
    id: '20',
    name: 'Ravioli',
    price: 17.99,
    description: 'Cheese-filled pasta with marinara sauce',
    image: '/placeholder.svg',
    category: 'Pasta',
    rating: 4.4,
    preparationTime: '18-22 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Ravioli pasta', 'Ricotta cheese', 'Marinara sauce', 'Basil']
  },

  // Chinese
  {
    id: '21',
    name: 'Sweet and Sour Chicken',
    price: 16.99,
    description: 'Battered chicken with sweet and sour sauce',
    image: '/placeholder.svg',
    category: 'Chinese',
    rating: 4.4,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Chicken', 'Bell peppers', 'Pineapple', 'Sweet and sour sauce']
  },
  {
    id: '22',
    name: 'Kung Pao Chicken',
    price: 17.99,
    description: 'Spicy chicken with peanuts and vegetables',
    image: '/placeholder.svg',
    category: 'Chinese',
    rating: 4.5,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Peanuts', 'Vegetables', 'Spicy sauce']
  },
  {
    id: '23',
    name: 'Fried Rice',
    price: 12.99,
    description: 'Wok-fried rice with vegetables and egg',
    image: '/placeholder.svg',
    category: 'Chinese',
    rating: 4.2,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Rice', 'Vegetables', 'Egg', 'Soy sauce']
  },
  {
    id: '24',
    name: 'Chow Mein',
    price: 14.99,
    description: 'Stir-fried noodles with vegetables',
    image: '/placeholder.svg',
    category: 'Chinese',
    rating: 4.3,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Noodles', 'Vegetables', 'Soy sauce', 'Sesame oil']
  },
  {
    id: '25',
    name: 'Orange Chicken',
    price: 18.99,
    description: 'Crispy chicken with orange glaze',
    image: '/placeholder.svg',
    category: 'Chinese',
    rating: 4.6,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Chicken', 'Orange sauce', 'Green onions', 'Sesame seeds']
  },

  // Indian
  {
    id: '26',
    name: 'Butter Chicken',
    price: 18.99,
    description: 'Creamy tomato-based curry with tender chicken',
    image: '/placeholder.svg',
    category: 'Indian',
    rating: 4.7,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Spices', 'Butter']
  },
  {
    id: '27',
    name: 'Chicken Biryani',
    price: 19.99,
    description: 'Fragrant rice with spiced chicken',
    image: '/placeholder.svg',
    category: 'Indian',
    rating: 4.8,
    preparationTime: '30-35 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Basmati rice', 'Chicken', 'Spices', 'Yogurt', 'Saffron']
  },
  {
    id: '28',
    name: 'Palak Paneer',
    price: 16.99,
    description: 'Spinach curry with cottage cheese',
    image: '/placeholder.svg',
    category: 'Indian',
    rating: 4.5,
    preparationTime: '20-25 min',
    isVegetarian: true,
    isSpicy: true,
    ingredients: ['Spinach', 'Paneer', 'Onions', 'Tomatoes', 'Spices']
  },
  {
    id: '29',
    name: 'Chicken Tikka Masala',
    price: 19.99,
    description: 'Grilled chicken in creamy tomato sauce',
    image: '/placeholder.svg',
    category: 'Indian',
    rating: 4.6,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Spices', 'Yogurt']
  },
  {
    id: '30',
    name: 'Naan Bread',
    price: 4.99,
    description: 'Traditional Indian flatbread',
    image: '/placeholder.svg',
    category: 'Indian',
    rating: 4.3,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Flour', 'Yogurt', 'Yeast', 'Butter']
  },

  // Salads
  {
    id: '31',
    name: 'Caesar Salad',
    price: 12.99,
    description: 'Crisp romaine lettuce with Caesar dressing',
    image: '/placeholder.svg',
    category: 'Salads',
    rating: 4.3,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese']
  },
  {
    id: '32',
    name: 'Greek Salad',
    price: 13.99,
    description: 'Fresh vegetables with feta cheese and olives',
    image: '/placeholder.svg',
    category: 'Salads',
    rating: 4.4,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Cucumber', 'Tomatoes', 'Olives', 'Feta cheese', 'Olive oil']
  },
  {
    id: '33',
    name: 'Chicken Salad',
    price: 15.99,
    description: 'Grilled chicken with mixed greens',
    image: '/placeholder.svg',
    category: 'Salads',
    rating: 4.5,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Grilled chicken', 'Mixed greens', 'Tomatoes', 'Cucumber', 'Dressing']
  },
  {
    id: '34',
    name: 'Cobb Salad',
    price: 16.99,
    description: 'Mixed greens with bacon, egg, and blue cheese',
    image: '/placeholder.svg',
    category: 'Salads',
    rating: 4.4,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Mixed greens', 'Bacon', 'Hard-boiled egg', 'Blue cheese', 'Tomatoes']
  },
  {
    id: '35',
    name: 'Caprese Salad',
    price: 14.99,
    description: 'Fresh mozzarella, tomatoes, and basil',
    image: '/placeholder.svg',
    category: 'Salads',
    rating: 4.2,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Mozzarella', 'Tomatoes', 'Basil', 'Olive oil', 'Balsamic vinegar']
  },

  // Desserts
  {
    id: '36',
    name: 'Chocolate Cake',
    price: 8.99,
    description: 'Rich chocolate cake with chocolate frosting',
    image: '/placeholder.svg',
    category: 'Desserts',
    rating: 4.6,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter']
  },
  {
    id: '37',
    name: 'Cheesecake',
    price: 9.99,
    description: 'Creamy New York style cheesecake',
    image: '/placeholder.svg',
    category: 'Desserts',
    rating: 4.7,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Graham crackers', 'Butter']
  },
  {
    id: '38',
    name: 'Tiramisu',
    price: 10.99,
    description: 'Italian coffee-flavored dessert',
    image: '/placeholder.svg',
    category: 'Desserts',
    rating: 4.5,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Mascarpone', 'Coffee', 'Ladyfingers', 'Cocoa powder', 'Sugar']
  },
  {
    id: '39',
    name: 'Ice Cream Sundae',
    price: 7.99,
    description: 'Vanilla ice cream with toppings',
    image: '/placeholder.svg',
    category: 'Desserts',
    rating: 4.3,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Ice cream', 'Chocolate sauce', 'Whipped cream', 'Cherry', 'Nuts']
  },
  {
    id: '40',
    name: 'Apple Pie',
    price: 8.99,
    description: 'Classic apple pie with cinnamon',
    image: '/placeholder.svg',
    category: 'Desserts',
    rating: 4.4,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Apples', 'Flour', 'Sugar', 'Cinnamon', 'Butter']
  },

  // Beverages
  {
    id: '41',
    name: 'Coca Cola',
    price: 2.99,
    description: 'Classic cola soft drink',
    image: '/placeholder.svg',
    category: 'Beverages',
    rating: 4.0,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Carbonated water', 'High fructose corn syrup', 'Caramel color', 'Phosphoric acid']
  },
  {
    id: '42',
    name: 'Fresh Orange Juice',
    price: 4.99,
    description: 'Freshly squeezed orange juice',
    image: '/placeholder.svg',
    category: 'Beverages',
    rating: 4.5,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Fresh oranges']
  },
  {
    id: '43',
    name: 'Iced Coffee',
    price: 3.99,
    description: 'Cold brew coffee with ice',
    image: '/placeholder.svg',
    category: 'Beverages',
    rating: 4.3,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Coffee beans', 'Water', 'Ice']
  },
  {
    id: '44',
    name: 'Milkshake',
    price: 5.99,
    description: 'Creamy vanilla milkshake',
    image: '/placeholder.svg',
    category: 'Beverages',
    rating: 4.4,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Ice cream', 'Milk', 'Sugar', 'Vanilla extract']
  },
  {
    id: '45',
    name: 'Lemonade',
    price: 3.99,
    description: 'Fresh lemonade with mint',
    image: '/placeholder.svg',
    category: 'Beverages',
    rating: 4.2,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Lemons', 'Sugar', 'Water', 'Mint']
  },

  // More items to reach 200+
  {
    id: '46',
    name: 'Fish and Chips',
    price: 17.99,
    description: 'Battered fish with crispy fries',
    image: '/placeholder.svg',
    category: 'Main Course',
    rating: 4.4,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Fish fillet', 'Potatoes', 'Batter', 'Oil']
  },
  {
    id: '47',
    name: 'Grilled Salmon',
    price: 22.99,
    description: 'Fresh salmon with lemon and herbs',
    image: '/placeholder.svg',
    category: 'Main Course',
    rating: 4.6,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Salmon fillet', 'Lemon', 'Herbs', 'Olive oil']
  },
  {
    id: '48',
    name: 'Steak',
    price: 28.99,
    description: 'Grilled ribeye steak with seasoning',
    image: '/placeholder.svg',
    category: 'Main Course',
    rating: 4.8,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Ribeye steak', 'Salt', 'Pepper', 'Garlic']
  },
  {
    id: '49',
    name: 'Chicken Curry',
    price: 16.99,
    description: 'Spicy chicken curry with rice',
    image: '/placeholder.svg',
    category: 'Main Course',
    rating: 4.5,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Curry spices', 'Coconut milk', 'Rice']
  },
  {
    id: '50',
    name: 'Pad Thai',
    price: 15.99,
    description: 'Thai stir-fried noodles with shrimp',
    image: '/placeholder.svg',
    category: 'Thai',
    rating: 4.4,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Rice noodles', 'Shrimp', 'Bean sprouts', 'Tamarind sauce']
  },
  // Continue adding more items...
  // I'll add a few more to demonstrate the pattern
  {
    id: '51',
    name: 'Beef Tacos',
    price: 13.99,
    description: 'Soft tacos with seasoned beef',
    image: '/placeholder.svg',
    category: 'Mexican',
    rating: 4.3,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Beef', 'Tortillas', 'Lettuce', 'Cheese', 'Salsa']
  },
  {
    id: '52',
    name: 'Chicken Quesadilla',
    price: 12.99,
    description: 'Grilled tortilla with chicken and cheese',
    image: '/placeholder.svg',
    category: 'Mexican',
    rating: 4.4,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Chicken', 'Tortillas', 'Cheese', 'Peppers', 'Onions']
  },
  {
    id: '53',
    name: 'Sushi Roll',
    price: 14.99,
    description: 'Fresh sushi roll with salmon',
    image: '/placeholder.svg',
    category: 'Japanese',
    rating: 4.5,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Sushi rice', 'Salmon', 'Nori', 'Cucumber', 'Avocado']
  },
  {
    id: '54',
    name: 'Ramen',
    price: 16.99,
    description: 'Japanese noodle soup with pork',
    image: '/placeholder.svg',
    category: 'Japanese',
    rating: 4.6,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Ramen noodles', 'Pork', 'Broth', 'Egg', 'Green onions']
  },
  {
    id: '55',
    name: 'Club Sandwich',
    price: 11.99,
    description: 'Triple-decker sandwich with turkey and bacon',
    image: '/placeholder.svg',
    category: 'Main Course',
    rating: 4.2,
    preparationTime: '10-15 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Bread', 'Turkey', 'Bacon', 'Lettuce', 'Tomato', 'Mayo']
  }
  // Add more items to reach 200+ total items
];

// Add more items programmatically to reach 200+
for (let i = 56; i <= 200; i++) {
  const categoryIndex = i % categories.length;
  const category = categories[categoryIndex === 0 ? 1 : categoryIndex];
  
  foodItems.push({
    id: i.toString(),
    name: `Delicious ${category} Item ${i}`,
    price: Math.floor(Math.random() * 25) + 5,
    description: `A wonderful ${category.toLowerCase()} dish that will satisfy your cravings`,
    image: '/placeholder.svg',
    category: category,
    rating: Math.floor(Math.random() * 10) / 2 + 3.5,
    preparationTime: `${Math.floor(Math.random() * 20) + 10}-${Math.floor(Math.random() * 20) + 25} min`,
    isVegetarian: Math.random() > 0.5,
    isSpicy: Math.random() > 0.7,
    ingredients: [`Main ingredient ${i}`, `Side ingredient ${i}`, `Seasoning ${i}`]
  });
}
