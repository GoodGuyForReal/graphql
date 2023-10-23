const blogs = [
    {
      id: "b383c2e5-2c5d-4398-a0e3-4e22e779d198",
      timestamp: "2023-08-14 15:45:00+00",
      title: "Exploring Ancient Temples in Cambodia",
      desc: "Uncovering the rich history and architectural wonders of Angkor Wat.",
      category: "Travel",
      author_id: "5673c152-9242-4b3f-9739-c94364e7e693",
    },
    {
      id: "be5a0b71-a915-4cc8-8378-9e85dabdf472",
      timestamp: "2023-08-14 16:30:00+00",
      title: "Melodies that Touch the Soul",
      desc: "Diving into the creative process of composing emotionally resonant music.",
      category: "Music",
      author_id: "9ebc2c79-0249-4a9e-929b-317b66e44369",
    },
    {
      id: "47fa8b60-3f63-416f-a848-000f25c8b4d6",
      timestamp: "2023-08-14 17:20:00+00",
      title: "Embracing Minimalism: The Art of Decluttering",
      desc: "Discovering the benefits of living with less and finding peace in simplicity.",
      category: "Lifestyle",
      author_id: "86d09065-dd47-4b8a-b435-41f0b5962816",
    },
    {
      id: "69cba9f9-483c-4372-85d5-461683994f5f",
      timestamp: "2023-08-15 18:30:00+00",
      title: "Embracing Change: Lessons from Traveling Alone",
      desc: "Discovering personal growth and empowerment through solo travel experiences.",
      category: "Travel",
      author_id: "5673c152-9242-4b3f-9739-c94364e7e693",
    },
    {
      id: "c616c3a7-d769-4fcd-ad16-53e0bbf7e75b",
      timestamp: "2023-08-15 19:15:00+00",
      title: "Unveiling Ancient Wonders: Exploring Petra",
      desc: "Embarking on a journey through the historical treasures of the ancient city of Petra.",
      category: "History",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "61706d24-78b9-4f80-a63e-bad9f4b55082",
      timestamp: "2023-08-15 20:20:00+00",
      title: "The Art of Sustainable Fashion",
      desc: "Exploring the intersection of creativity and environmental consciousness in fashion.",
      category: "Fashion",
      author_id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
    },
    {
      id: "6cd95c0e-df6d-44a9-a6a5-6f3170c6180c",
      timestamp: "2023-08-15 21:05:00+00",
      title: "Wandering Through Ancient Ruins: Machu Picchu",
      desc: "Immersing in the mystique and history of the legendary Incan city of Machu Picchu.",
      category: "Travel",
      author_id: "5673c152-9242-4b3f-9739-c94364e7e693",
    },
    {
      id: "ad374fda-666f-4b6c-9cab-9ec597a41333",
      timestamp: "2023-08-15 22:00:00+00",
      title: "The Magic of Live Music: Concert Chronicles",
      desc: "Reliving the energy and emotion of unforgettable live music performances.",
      category: "Music",
      author_id: "9ebc2c79-0249-4a9e-929b-317b66e44369",
    },
    {
      id: "252e8a93-82b7-4ee9-9991-49fa726496f7",
      timestamp: "2023-08-16 10:30:00+00",
      title: "Eco-Friendly Adventures: Exploring National Parks",
      desc: "Diving into the wonders of nature and the importance of preserving national parks.",
      category: "Nature",
      author_id: "bff92fdc-ebab-45e8-b4a0-bd822f155370",
    },
    {
      id: "46ee41ce-183a-434c-b103-d04b09c8a408",
      timestamp: "2023-08-16 11:15:00+00",
      title: "The Power of Visual Storytelling",
      desc: "Exploring the impact of visual storytelling in conveying emotions and messages.",
      category: "Art",
      author_id: "445afbb2-ecd5-48c2-8a99-552e8883b947",
    },
    {
      id: "85f6023f-9e99-43d5-b5b4-ba84bc1098b4",
      timestamp: "2023-08-16 12:00:00+00",
      title: "Discovering Ancient Traditions: Japanese Tea Ceremony",
      desc: "Immersing in the beauty and philosophy of the traditional Japanese tea ceremony.",
      category: "Culture",
      author_id: "2f141eae-46d3-4cfc-b9a6-595d5a771dfc",
    },
    {
      id: "b06ca352-b1a6-45fd-890d-821e608b9457",
      timestamp: "2023-08-16 13:30:00+00",
      title: "The Thrill of Extreme Sports",
      desc: "Experiencing adrenaline-pumping moments in the world of extreme sports.",
      category: "Adventure",
      author_id: "d9653701-cc97-4e52-a0e8-7cc0ac536eb3",
    },
    {
      id: "4fc2aebb-e84f-4cfd-b807-4dc4f6245c9e",
      timestamp: "2023-08-16 14:45:00+00",
      title: "Culinary Adventures in the Heart of Paris",
      desc: "Savoring the exquisite flavors of French cuisine in the romantic city of Paris.",
      category: "Food",
      author_id: "34ae69f8-cb9f-4414-9aa7-beb6a0029d80",
    },
    {
      id: "f97aa6a1-48fa-42c9-88b5-4b12fec65abd",
      timestamp: "2023-08-16 15:30:00+00",
      title: "The Tranquility of Forest Bathing",
      desc: "Immersing in the healing and calming effects of spending time in the forest.",
      category: "Nature",
      author_id: "bff92fdc-ebab-45e8-b4a0-bd822f155370",
    },
    {
      id: "6dcb72fe-23a2-427b-8fb6-65206a0c1973",
      timestamp: "2023-08-16 16:15:00+00",
      title: "The Art of Storytelling in Cinema",
      desc: "Exploring the techniques and impact of narrative storytelling in filmmaking.",
      category: "Film",
      author_id: "182964a6-3dea-4d86-8603-926ee9a2194e",
    },
    {
      id: "77c89ea2-c5ee-4e91-b456-cfa6504c2a6d",
      timestamp: "2023-08-16 17:20:00+00",
      title: "Journeying Through Ancient Egyptian History",
      desc: "Unveiling the secrets and marvels of Egypt's ancient civilization.",
      category: "History",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "39dc93de-d8a4-4d95-b640-4e45c5325230",
      timestamp: "2023-08-16 18:10:00+00",
      title: "The World of Digital Art: Creativity in Pixels",
      desc: "Diving into the realm of digital art and the boundless possibilities it offers.",
      category: "Art",
      author_id: "82a9f4d2-25f8-498a-a476-29d8101af976",
    },
    {
      id: "3bedb49c-d4ed-4b3c-b1f9-808a611fc8c4",
      timestamp: "2023-08-16 19:05:00+00",
      title: "Cultural Insights from Around the Globe",
      desc: "Celebrating diversity through exploring customs, traditions, and lifestyles worldwide.",
      category: "Culture",
      author_id: "2f141eae-46d3-4cfc-b9a6-595d5a771dfc",
    },
    {
      id: "5b416c51-a460-40ba-84aa-502cd45d79b3",
      timestamp: "2023-08-16 20:30:00+00",
      title: "The Allure of Antique Collecting",
      desc: "Unearthing the charm and history behind collecting antique treasures.",
      category: "Collectibles",
      author_id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
    },
    {
      id: "52a91396-6993-45b2-a8bd-448b5534b6f5",
      timestamp: "2023-08-17 10:45:00+00",
      title: "Architectural Marvels: Spanish Gothic Cathedrals",
      desc: "Admiring the grandeur and intricacy of Spain's magnificent Gothic cathedrals.",
      category: "Architecture",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "ea63834a-b2ed-4a78-9688-750803924e25",
      timestamp: "2023-08-17 11:20:00+00",
      title: "Exploring the Art of Calligraphy",
      desc: "Diving into the beauty and cultural significance of the ancient art of calligraphy.",
      category: "Art",
      author_id: "86d09065-dd47-4b8a-b435-41f0b5962816",
    },
    {
      id: "c4f11475-0581-4764-861d-530a9d9bdbdf",
      timestamp: "2023-08-17 12:15:00+00",
      title: "The Evolution of Video Games",
      desc: "Tracing the journey of video games from their origins to the immersive experiences of today.",
      category: "Gaming",
      author_id: "8da2f638-8351-4847-b20b-51611ded2c47",
    },
    {
      id: "073398bb-ef16-49cb-9e4e-69d25fa21de6",
      timestamp: "2023-08-17 13:30:00+00",
      title: "Culinary Adventures: Exploring Thai Street Food",
      desc: "Savoring the vibrant flavors of Thai street food and its cultural significance.",
      category: "Food",
      author_id: "34ae69f8-cb9f-4414-9aa7-beb6a0029d80",
    },
    {
      id: "b8584a1f-44a2-49c9-8719-c7dfef1cb608",
      timestamp: "2023-08-17 14:45:00+00",
      title: "Embracing Mindfulness: Meditation Techniques",
      desc: "Exploring various meditation practices for cultivating mindfulness and inner peace.",
      category: "Wellness",
      author_id: "86d09065-dd47-4b8a-b435-41f0b5962816",
    },
    {
      id: "aacda96f-90ae-45a8-a381-d7285406b9d6",
      timestamp: "2023-08-17 15:30:00+00",
      title: "Lost in the Pages: Reading and Imagination",
      desc: "Celebrating the joy of reading and the world of imagination it unlocks.",
      category: "Books",
      author_id: "bcef2db5-ef7e-4e04-9f00-cc31b19c26e9",
    },
    {
      id: "d136005b-a3e9-432a-be76-90aa09596b33",
      timestamp: "2023-08-17 16:20:00+00",
      title: "Exploring Ancient Greek Philosophy",
      desc: "Delving into the timeless wisdom and philosophical inquiries of ancient Greece.",
      category: "Philosophy",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "33765135-7027-452c-b681-0be3817481a2",
      timestamp: "2023-08-17 17:15:00+00",
      title: "Adventures in Art Restoration",
      desc: "Uncovering the intricate process of restoring and preserving art masterpieces.",
      category: "Art",
      author_id: "82a9f4d2-25f8-498a-a476-29d8101af976",
    },
    {
      id: "2edf1384-7a25-42d6-93a9-48834b6d58c9",
      timestamp: "2023-08-17 18:30:00+00",
      title: "Navigating Cross-Cultural Communication",
      desc: "Understanding the nuances of effective communication across diverse cultural contexts.",
      category: "Culture",
      author_id: "2f141eae-46d3-4cfc-b9a6-595d5a771dfc",
    },
    {
      id: "ace8300a-a116-45c9-9c3b-50593bd1d4fa",
      timestamp: "2023-08-18 10:00:00+00",
      title: "The Art of Bonsai: Cultivating Miniature Trees",
      desc: "Exploring the ancient Japanese practice of cultivating and shaping bonsai trees.",
      category: "Gardening",
      author_id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
    },
    {
      id: "7c3483c5-16c5-4ac5-b366-089b8ca5d338",
      timestamp: "2023-08-18 11:15:00+00",
      title: "Venturing into Virtual Reality Art",
      desc: "Diving into the innovative world of creating art within virtual reality environments.",
      category: "Art",
      author_id: "82a9f4d2-25f8-498a-a476-29d8101af976",
    },
    {
      id: "78c4bc61-6751-44d9-b10b-9054b565a97d",
      timestamp: "2023-08-18 12:30:00+00",
      title: "The Poetry of Nature: Haiku and Beyond",
      desc: "Exploring the beauty and brevity of haiku poetry inspired by the natural world.",
      category: "Literature",
      author_id: "445afbb2-ecd5-48c2-8a99-552e8883b947",
    },
    {
      id: "4ee39fe0-88ec-48d5-972b-9cec4286eda2",
      timestamp: "2023-08-18 13:45:00+00",
      title: "The Magic of Classical Ballet",
      desc: "Immersing in the elegance and grace of classical ballet and its artistic expression.",
      category: "Art",
      author_id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
    },
    {
      id: "7f24fe05-18c9-478a-959b-e36274d44532",
      timestamp: "2023-08-18 14:30:00+00",
      title: "Exploring Mind-Bending Optical Illusions",
      desc: "Delving into the art of optical illusions and their fascinating effects on perception.",
      category: "Art",
      author_id: "86d09065-dd47-4b8a-b435-41f0b5962816",
    },
    {
      id: "a231ee2e-28f2-4b7d-9f8a-54de13bb9eb6",
      timestamp: "2023-08-18 15:15:00+00",
      title: "The Enchanting World of Watercolor Painting",
      desc: "Exploring the delicate beauty and expressive possibilities of watercolor art.",
      category: "Art",
      author_id: "445afbb2-ecd5-48c2-8a99-552e8883b947",
    },
    {
      id: "1101589c-c288-49c1-accf-8066e350acd3",
      timestamp: "2023-08-18 16:30:00+00",
      title: "The Journey to Mindful Eating",
      desc: "Exploring the concept of mindful eating and its positive impact on well-being.",
      category: "Wellness",
      author_id: "bcef2db5-ef7e-4e04-9f00-cc31b19c26e9",
    },
    {
      id: "1a346f5c-f410-4759-8fef-2e29708ad3e8",
      timestamp: "2023-08-18 17:45:00+00",
      title: "The Elegance of Traditional Japanese Kimono",
      desc: "Diving into the history and cultural significance of the iconic Japanese kimono.",
      category: "Fashion",
      author_id: "2f141eae-46d3-4cfc-b9a6-595d5a771dfc",
    },
    {
      id: "b3232730-6a08-48bd-8a01-7386dd94fa26",
      timestamp: "2023-08-18 18:20:00+00",
      title: "Exploring Exoplanets: Beyond Our Solar System",
      desc: "Unveiling the fascinating discoveries and potential of exoplanetary exploration.",
      category: "Science",
      author_id: "5673c152-9242-4b3f-9739-c94364e7e693",
    },
    {
      id: "6a15877d-dfed-4c0d-ae4c-73f04ecfcfc6",
      timestamp: "2023-08-19 10:30:00+00",
      title: "Art and Identity: Expression Through Portraiture",
      desc: "Analyzing the portrayal of identity and emotions in the art of portraiture.",
      category: "Art",
      author_id: "82a9f4d2-25f8-498a-a476-29d8101af976",
    },
    {
      id: "c5f67db4-3bc0-4b81-9d92-f3ee97172c7d",
      timestamp: "2023-08-19 11:45:00+00",
      title: "The Rich Heritage of Indigenous Folklore",
      desc: "Celebrating the diverse narratives and cultural significance of indigenous folklore.",
      category: "Culture",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "da6462be-9097-4839-ba6c-25007e953e78",
      timestamp: "2023-08-19 12:30:00+00",
      title: "Journey into Minimalist Living",
      desc: "Exploring the philosophy and practices of embracing a minimalist lifestyle.",
      category: "Lifestyle",
      author_id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
    },
    {
      id: "0f45c0fb-e9eb-45f3-86a8-2e53a0b12f30",
      timestamp: "2023-08-19 13:20:00+00",
      title: "The Mystique of Quantum Physics",
      desc: "Diving into the mind-bending theories and implications of quantum physics.",
      category: "Science",
      author_id: "8da2f638-8351-4847-b20b-51611ded2c47",
    },
    {
      id: "006165df-cc14-47fe-aff6-d2e4ed81e889",
      timestamp: "2023-08-19 14:15:00+00",
      title: "Eco-Friendly Home Design: Sustainability in Architecture",
      desc: "Exploring innovative approaches to sustainable and environmentally conscious home design.",
      category: "Architecture",
      author_id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
    },
    {
      id: "b6ef00fc-0108-49ed-bcc0-f286f85627f8",
      timestamp: "2023-08-19 15:30:00+00",
      title: "The Language of Flowers: Symbolism and Meaning",
      desc: "Uncovering the symbolism and cultural significance of flowers in various traditions.",
      category: "Nature",
      author_id: "bcef2db5-ef7e-4e04-9f00-cc31b19c26e9",
    },
    {
      id: "06e94b49-89ec-4158-a7e0-23efd5428a0d",
      timestamp: "2023-08-19 16:45:00+00",
      title: "The Fascinating World of Marine Biology",
      desc: "Diving into the mysteries of marine life and the wonders of ocean ecosystems.",
      category: "Science",
      author_id: "445afbb2-ecd5-48c2-8a99-552e8883b947",
    },
    {
      id: "02ada103-6ac4-47a1-8183-f6e44512aa02",
      timestamp: "2023-08-19 17:30:00+00",
      title: "Preserving Cultural Heritage: Museums and Conservation",
      desc: "Exploring the role of museums in preserving and showcasing cultural heritage.",
      category: "Culture",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "4cf08dbf-d28d-47fa-b36d-ca260a918809",
      timestamp: "2023-08-20 10:00:00+00",
      title: "The Craft of Handmade Pottery",
      desc: "Unveiling the artistry and skill behind creating unique and functional pottery pieces.",
      category: "Art",
      author_id: "82a9f4d2-25f8-498a-a476-29d8101af976",
    },
    {
      id: "834b199a-5c0a-4cdc-a131-b2e96e93ef97",
      timestamp: "2023-08-20 11:15:00+00",
      title: "The Essence of Mediterranean Cuisine",
      desc: "Savoring the flavors and traditions of Mediterranean cooking and its health benefits.",
      category: "Food",
      author_id: "34ae69f8-cb9f-4414-9aa7-beb6a0029d80",
    },
    {
      id: "53cde6c2-b320-4006-bfc3-abc5abd3129a",
      timestamp: "2023-08-20 12:30:00+00",
      title: "Exploring Digital Nomad Lifestyle",
      desc: "Diving into the world of digital nomads and the freedom of remote work and travel.",
      category: "Lifestyle",
      author_id: "2f141eae-46d3-4cfc-b9a6-595d5a771dfc",
    },
    {
      id: "c723f134-5215-4453-a3e6-324d2c6b4fe6",
      timestamp: "2023-08-20 13:45:00+00",
      title: "The Impact of Art on Mental Health",
      desc: "Analyzing the therapeutic and transformative power of art in promoting mental well-being.",
      category: "Wellness",
      author_id: "86d09065-dd47-4b8a-b435-41f0b5962816",
    },
    {
      id: "90c17b9e-7426-4173-93e7-55be3bccf178",
      timestamp: "2023-08-20 14:30:00+00",
      title: "The Intriguing World of Cryptography",
      desc: "Exploring the history and significance of cryptography in communication and security.",
      category: "Technology",
      author_id: "8da2f638-8351-4847-b20b-51611ded2c47",
    },
    {
      id: "167b9515-c57b-47ab-8837-473c85c0c9e5",
      timestamp: "2023-08-20 15:15:00+00",
      title: "The Renaissance Revival: Art, Science, and Humanism",
      desc: "Journeying through the Renaissance era and its profound impact on culture and knowledge.",
      category: "History",
      author_id: "182964a6-3dea-4d86-8603-926ee9a2194e",
    },
    {
      id: "23092225-6899-49c8-bd69-e1a7591e7f66",
      timestamp: "2023-08-20 16:30:00+00",
      title: "Exploring the Night Sky: Astronomy Adventures",
      desc: "Embarking on celestial journeys to explore stars, planets, and the universe beyond.",
      category: "Science",
      author_id: "5673c152-9242-4b3f-9739-c94364e7e693",
    },
    {
      id: "a587e4c0-2604-4168-b8f0-93ce7d408b9b",
      timestamp: "2023-08-20 17:45:00+00",
      title: "The Art of Storytelling: Crafting Compelling Narratives",
      desc: "Delving into the techniques of storytelling and its impact on captivating audiences.",
      category: "Writing",
      author_id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
    },
    {
      id: "33caee6e-3ebe-40e4-9922-23c983a6213b",
      timestamp: "2023-08-21 10:00:00+00",
      title: "The Mysteries of Deep Sea Exploration",
      desc: "Venturing into the depths of the ocean to uncover the mysteries of marine life.",
      category: "Science",
      author_id: "445afbb2-ecd5-48c2-8a99-552e8883b947",
    },
    {
      id: "12601982-632b-4285-9781-59a839de1256",
      timestamp: "2023-08-21 11:15:00+00",
      title: "The Captivating World of Street Photography",
      desc: "Exploring the art of capturing candid moments and stories on the streets.",
      category: "Photography",
      author_id: "82a9f4d2-25f8-498a-a476-29d8101af976",
    },
    {
      id: "9325fda9-53a3-4650-a1a7-bc9790a7d8f5",
      timestamp: "2023-08-21 12:30:00+00",
      title: "Culinary Adventures in Italy: Exploring Food Regions",
      desc: "Savoring the diverse and flavorful cuisines across different regions of Italy.",
      category: "Food",
      author_id: "34ae69f8-cb9f-4414-9aa7-beb6a0029d80",
    },
    {
      id: "976b4385-31f4-4a9d-93da-5bbeff329da4",
      timestamp: "2023-08-21 13:45:00+00",
      title: "The Art of Movie Score Composition",
      desc: "Diving into the world of crafting captivating musical scores for cinematic experiences.",
      category: "Music",
      author_id: "9ebc2c79-0249-4a9e-929b-317b66e44369",
    },
    {
      id: "ebcb0d23-6129-438a-bb0f-acdf7c58e36f",
      timestamp: "2023-08-21 14:30:00+00",
      title: "Exploring Ancient Ruins: Pompeii Revisited",
      desc: "Embarking on a virtual journey to the archaeological wonders of Pompeii.",
      category: "History",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "8bf8feeb-430a-45d3-b59f-659ac311ff48",
      timestamp: "2023-08-21 15:15:00+00",
      title: "The Art of Floral Arrangement: Ikebana",
      desc: "Unveiling the elegance and philosophy behind the Japanese art of flower arrangement.",
      category: "Art",
      author_id: "2f141eae-46d3-4cfc-b9a6-595d5a771dfc",
    },
    {
      id: "e30ba44f-c0c0-4745-a3f1-46f1bed32713",
      timestamp: "2023-08-21 16:30:00+00",
      title: "Journey into Abstract Art: Beyond the Obvious",
      desc: "Exploring the realm of abstract art and its open-ended interpretations.",
      category: "Art",
      author_id: "86d09065-dd47-4b8a-b435-41f0b5962816",
    },
    {
      id: "826a070b-6a27-4df6-b8dd-344a9edc5f69",
      timestamp: "2023-08-21 17:45:00+00",
      title: "Exploring Ancient Egyptian Hieroglyphics",
      desc: "Deciphering the symbolic language of ancient Egyptian hieroglyphs and their meanings.",
      category: "History",
      author_id: "32083cad-8506-4b93-97bd-2719c77497e3",
    },
    {
      id: "85e3591d-8612-41e5-9ff9-aa53f295dbf7",
      timestamp: "2023-08-21 18:30:00+00",
      title: "The Joys of Solo Travel: Personal Reflections",
      desc: "Reflecting on the transformative experiences and self-discovery through solo journeys.",
      category: "Travel",
      author_id: "5673c152-9242-4b3f-9739-c94364e7e693",
    },
    {
      id: "3e01dcf6-3437-40d9-9726-7e24a68418c9",
      timestamp: "2023-08-21 19:15:00+00",
      title: "The Essence of Poetry: Emotions in Words",
      desc: "Exploring the art of poetry and its ability to capture and convey complex emotions.",
      category: "Literature",
      author_id: "445afbb2-ecd5-48c2-8a99-552e8883b947",
    },
    {
      id: "fb898b58-c883-46ad-b775-ca210a990a69",
      timestamp: "2023-09-10 10:11:48.17847+00",
      title: "Which UI frontend framework is the best? among the 100 of them",
      desc: "I want to learn a new UI framework, but there are a lot of options. I am kind of confused. Which one do you guys think is the best?",
      category: "Programming",
      author_id: "c7859b86-ac22-43a5-9a11-629a32cc7d5a",
    },
  ];
  
  const users = [
    {
      id: "9c506193-f14b-469f-87fd-44267aa5a4d0",
      email: "user19@example.com",
      user_name: "SciFiFanatic",
      bio: "Venturing into futuristic realms of imagination.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "a4de7c3f-b25a-42eb-a2f8-b8d4004acebd",
      email: "user18@example.com",
      user_name: "FitnessEnthusiast",
      bio: "Chasing health and strength with passion.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "86d09065-dd47-4b8a-b435-41f0b5962816",
      email: "user17@example.com",
      user_name: "CreativeDreamer",
      bio: "Turning dreams into beautiful creations.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "dfea2e11-3988-4645-b2f8-1b9a30f3faaa",
      email: "user16@example.com",
      user_name: "GourmetGuru",
      bio: "Uncovering the secrets of exquisite cuisines.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "d9653701-cc97-4e52-a0e8-7cc0ac536eb3",
      email: "user2@example.com",
      user_name: "Adventurer123",
      bio: "Chasing adrenaline and making memories.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "9ebc2c79-0249-4a9e-929b-317b66e44369",
      email: "user9@example.com",
      user_name: "MusicMaestro",
      bio: "Creating melodies that touch the soul.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "2f141eae-46d3-4cfc-b9a6-595d5a771dfc",
      email: "user11@example.com",
      user_name: "CultureEnthusiast",
      bio: "Celebrating diversity and heritage.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "6f159499-5da4-40d9-8d72-fa7878485797",
      email: "user13@example.com",
      user_name: "CodingWizard",
      bio: "Turning ideas into lines of code.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "182964a6-3dea-4d86-8603-926ee9a2194e",
      email: "user15@example.com",
      user_name: "FilmBuff",
      bio: "Exploring the world through cinematic lenses.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "445afbb2-ecd5-48c2-8a99-552e8883b947",
      email: "user14@example.com",
      user_name: "NaturePhotographer",
      bio: "Freezing moments of natural beauty.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "2251ce48-7feb-4c05-8e00-c72734a1637f",
      email: "user1@example.com",
      user_name: "User1",
      bio: "Exploring the world one adventure at a time.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "34ae69f8-cb9f-4414-9aa7-beb6a0029d80",
      email: "user4@example.com",
      user_name: "FoodieExplorer",
      bio: "Savoring flavors from around the globe.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "82a9f4d2-25f8-498a-a476-29d8101af976",
      email: "user5@example.com",
      user_name: "ArtisticSoul",
      bio: "Expressing emotions through colors and shapes.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "bff92fdc-ebab-45e8-b4a0-bd822f155370",
      email: "user6@example.com",
      user_name: "NatureLover",
      bio: "Finding solace and wonder in the great outdoors.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "8da2f638-8351-4847-b20b-51611ded2c47",
      email: "user7@example.com",
      user_name: "TechGeek",
      bio: "Unraveling the mysteries of technology.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "a07cf5f2-b109-4816-8819-f107012e4af2",
      email: "user10@example.com",
      user_name: "FitnessJunkie",
      bio: "Pursuing a healthier and stronger self.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "5673c152-9242-4b3f-9739-c94364e7e693",
      email: "user8@example.com",
      user_name: "WanderlustDreamer",
      bio: "Dreaming of far-off lands and new horizons.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "bcef2db5-ef7e-4e04-9f00-cc31b19c26e9",
      email: "user3@example.com",
      user_name: "BookWorm22",
      bio: "Lost in the world of books and imagination.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "768b2293-3a45-48e1-96c2-d1ecdb2b1202",
      email: "user12@example.com",
      user_name: "Fashionista",
      bio: "Setting trends and embracing style.",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "32083cad-8506-4b93-97bd-2719c77497e3",
      email: "user20@example.com",
      user_name: "HistoryBuff",
      bio: "Hello, I'm HistoryBuff, let's connect and share our experiences and ideas!",
      avatar: "",
      timestamp: "2023-08-14",
      banner: "",
    },
    {
      id: "d4044f99-5890-4d81-b74b-8ab4f05e3c57",
      email: "dante@example.com",
      user_name: "Dante",
      bio: "new updatetest bio",
      avatar:
        "https://nbuiqkkhjnhefvqmnprr.supabase.co/storage/v1/object/public/avatars/d4044f99-5890-4d81-b74b-8ab4f05e3c57/avatar/2d313563-140b-4c34-8159-db28cccec5a6",
      timestamp: "2023-08-18",
      banner:
        "https://nbuiqkkhjnhefvqmnprr.supabase.co/storage/v1/object/public/avatars/d4044f99-5890-4d81-b74b-8ab4f05e3c57/banner/0762824f-5250-4aa9-bc14-5d5b9231b6ac",
    },
    {
      id: "c7859b86-ac22-43a5-9a11-629a32cc7d5a",
      email: "tarik@example.com",
      user_name: "Tarik",
      bio: "Frontend Developer | Next JS | JavaScript | Typescript | Zod | MVC | Tailwind CSS | Bootstrap | Figma | UI UX | Git | ** Looking new job opportunities **",
      avatar:
        "https://nbuiqkkhjnhefvqmnprr.supabase.co/storage/v1/object/public/avatars/c7859b86-ac22-43a5-9a11-629a32cc7d5a/avatar/655079d9-49c3-4cb5-bf3b-f23c8597ff4d",
      timestamp: "2012-04-06",
      banner:
        "https://nbuiqkkhjnhefvqmnprr.supabase.co/storage/v1/object/public/avatars/c7859b86-ac22-43a5-9a11-629a32cc7d5a/banner/a1ee4ccc-df89-42e3-bad1-662a23efa8e8",
    },
    {
      id: "d74d6340-eb84-4bb6-a662-25a441ec86be",
      email: "james@example.com",
      user_name: "James",
      bio: "enjoying the life",
      avatar:
        "https://nbuiqkkhjnhefvqmnprr.supabase.co/storage/v1/object/public/avatars/d74d6340-eb84-4bb6-a662-25a441ec86be/avatar/f3421a70-085e-48e0-a8d2-500261d81827",
      timestamp: "2023-10-09",
      banner: "",
    },
  ];
  
  export default { blogs, users };
  