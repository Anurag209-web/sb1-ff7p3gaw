import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Vermicompost - Garden Pack',
    shortDescription: 'Nutrient-rich organic fertilizer for all plants',
    description: 'Our premium vermicompost is made from organic waste processed by earthworms. It\'s rich in nutrients, beneficial microorganisms, and natural growth hormones that improve soil structure and fertility. Perfect for gardens, potted plants, and agricultural use.',
    price: 399,
    stock: 50,
    imageUrl: 'https://images.pexels.com/photos/9706654/pexels-photo-9706654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'fertilizer',
    featured: true,
    weight: '5 kg',
    benefits: [
      'Improves soil structure and aeration',
      'Enhances water retention',
      'Promotes root growth and plant health',
      'Contains essential nutrients like nitrogen, phosphorus, and potassium',
      '100% organic and eco-friendly'
    ]
  },
  {
    id: '2',
    name: 'Vermicompost Tea - Liquid Fertilizer',
    shortDescription: 'Concentrated liquid fertilizer for quick results',
    description: 'Vermicompost tea is a liquid extract of vermicompost that provides an immediate boost to plants. It\'s packed with beneficial microbes and soluble nutrients that can be directly absorbed by plants. Ideal for foliar spray or soil drench applications.',
    price: 299,
    discountPrice: 249,
    stock: 30,
    imageUrl: 'https://images.pexels.com/photos/7728094/pexels-photo-7728094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'liquid',
    featured: true,
    weight: '1 liter',
    benefits: [
      'Fast-acting nutrient delivery',
      'Boosts plant immunity against diseases',
      'Improves yield and quality of produce',
      'Can be used for both indoor and outdoor plants',
      'Easy to apply'
    ]
  },
  {
    id: '3',
    name: 'Worm Castings - Pure Organic',
    shortDescription: 'Pure worm castings for specialized applications',
    description: 'Our pure worm castings are the finest quality organic matter produced by earthworms. These castings are carefully harvested and screened to provide a clean, odorless product that\'s perfect for seed starting, houseplants, and sensitive applications where purity matters.',
    price: 599,
    stock: 25,
    imageUrl: 'https://images.pexels.com/photos/5503552/pexels-photo-5503552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'specialty',
    featured: false,
    weight: '2 kg',
    benefits: [
      'Highest concentration of beneficial microorganisms',
      'Perfect for seed starting and transplanting',
      'Ideal for indoor plants and container gardening',
      'Slow-release nutrients that last longer',
      'Free from pathogens and weed seeds'
    ]
  },
  {
    id: '4',
    name: 'Home Composting Kit',
    shortDescription: 'Start your own vermicomposting at home',
    description: 'Our home composting kit includes everything you need to start your own vermicomposting system: a specially designed composting bin, starter worms, bedding material, and a comprehensive guide. Turn your kitchen waste into valuable vermicompost and reduce your carbon footprint.',
    price: 1499,
    discountPrice: 1299,
    stock: 15,
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'equipment',
    featured: true,
    weight: 'Kit',
    benefits: [
      'Easy to set up and maintain',
      'Reduces household waste',
      'Produces continuous supply of vermicompost',
      'Educational for children and adults',
      'Space-efficient design'
    ]
  },
  {
    id: '5',
    name: 'Bulk Vermicompost - Farm Pack',
    shortDescription: 'Economical bulk packaging for larger areas',
    description: 'Our farm pack vermicompost is designed for larger applications like farms, orchards, and extensive garden projects. This economical bulk package provides all the benefits of our premium vermicompost at a lower cost per kilogram. Improve soil health across your entire growing area.',
    price: 1899,
    stock: 20,
    imageUrl: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'fertilizer',
    featured: false,
    weight: '25 kg',
    benefits: [
      'Economical solution for larger areas',
      'Improves overall soil ecosystem',
      'Reduces dependency on chemical fertilizers',
      'Long-lasting soil improvement',
      'Increases drought resistance in soil'
    ]
  },
  {
    id: '6',
    name: 'Organic Potting Mix with Vermicompost',
    shortDescription: 'Ready-to-use potting soil for container plants',
    description: 'Our organic potting mix combines high-quality vermicompost with coco peat, perlite, and other organic materials to create the perfect growing medium for container plants. This balanced mix provides excellent drainage, aeration, and nutrition for healthy plant growth.',
    price: 349,
    stock: 40,
    imageUrl: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'soil',
    featured: false,
    weight: '10 kg',
    benefits: [
      'Ready to use with no mixing required',
      'Perfect pH balance for most plants',
      'Excellent water retention and drainage',
      'Contains slow-release nutrients',
      'Suitable for indoor and outdoor container plants'
    ]
  }
];