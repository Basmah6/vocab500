// script.js - Core logic for إتقان English - أهم 500 كلمة A1

// 1. WORDS DATABASE (A1 Core Selection)
const WORDS_DATABASE = [
  // --- BASICS (الأساسيات) ---
  {
    id: 1,
    word: "Always",
    category: "basics",
    translation: "دائماً",
    phonetic: "/ˈɔːlweɪz/",
    pos: "Adverb (ظرف)",
    example: "He always wakes up early in the morning.",
    exampleTranslation: "هو يستيقظ مبكراً دائماً في الصباح."
  },
  {
    id: 2,
    word: "Hello",
    category: "basics",
    translation: "مرحباً / أهلاً",
    phonetic: "/həˈləʊ/",
    pos: "Noun / Interjection (اسم/ترحيب)",
    example: "Hello! My name is Ahmad.",
    exampleTranslation: "مرحباً! اسمي أحمد."
  },
  {
    id: 3,
    word: "Please",
    category: "basics",
    translation: "من فضلك / لو سمحت",
    phonetic: "/pliːz/",
    pos: "Adverb / Verb (طلب/أدب)",
    example: "Can you give me the water, please?",
    exampleTranslation: "هل يمكنك إعطائي الماء، من فضلك؟"
  },
  {
    id: 4,
    word: "Thank you",
    category: "basics",
    translation: "شكراً لك",
    phonetic: "/θæŋk juː/",
    pos: "Phrase (عبارة شكر)",
    example: "Thank you for your delicious food.",
    exampleTranslation: "شكراً لك على طعامك اللذيذ."
  },
  {
    id: 5,
    word: "Welcome",
    category: "basics",
    translation: "مرحباً بك / أهلاً وسهلاً",
    phonetic: "/ˈwɛlkəm/",
    pos: "Adjective / Noun (ترحيب)",
    example: "Welcome to our new home!",
    exampleTranslation: "مرحباً بكم في منزلنا الجديد!"
  },
  {
    id: 6,
    word: "Name",
    category: "basics",
    translation: "اسم",
    phonetic: "/neɪm/",
    pos: "Noun (اسم)",
    example: "What is your name?",
    exampleTranslation: "ما هو اسمك؟"
  },
  {
    id: 7,
    word: "Yes",
    category: "basics",
    translation: "نعم",
    phonetic: "/jɛs/",
    pos: "Adverb (تأكيد)",
    example: "Yes, I want to learn English.",
    exampleTranslation: "نعم، أريد أن أتعلم الإنجليزية."
  },
  {
    id: 8,
    word: "No",
    category: "basics",
    translation: "لا",
    phonetic: "/nəʊ/",
    pos: "Adverb (نفي)",
    example: "No, this is not my car.",
    exampleTranslation: "لا، هذه ليست سيارتي."
  },

  // --- PEOPLE & FAMILY (الناس والعائلة) ---
  {
    id: 9,
    word: "Friend",
    category: "people",
    translation: "صديق",
    phonetic: "/frɛnd/",
    pos: "Noun (اسم)",
    example: "Sami is my best friend.",
    exampleTranslation: "سامي هو صديقي المفضل."
  },
  {
    id: 10,
    word: "Family",
    category: "people",
    translation: "عائلة / أسرة",
    phonetic: "/ˈfæmɪli/",
    pos: "Noun (اسم)",
    example: "I love my family very much.",
    exampleTranslation: "أنا أحب عائلتي كثيراً جداً."
  },
  {
    id: 11,
    word: "Father",
    category: "people",
    translation: "أب",
    phonetic: "/ˈfɑːðər/",
    pos: "Noun (اسم)",
    example: "My father works in a big office.",
    exampleTranslation: "والدي يعمل في مكتب كبير."
  },
  {
    id: 12,
    word: "Mother",
    category: "people",
    translation: "أم",
    phonetic: "/ˈmʌðər/",
    pos: "Noun (اسم)",
    example: "My mother is a kind teacher.",
    exampleTranslation: "أمي معلمة طيبة."
  },
  {
    id: 13,
    word: "Brother",
    category: "people",
    translation: "أخ",
    phonetic: "/ˈbrʌðər/",
    pos: "Noun (اسم)",
    example: "My brother plays football with me.",
    exampleTranslation: "أخي يلعب كرة القدم معي."
  },
  {
    id: 14,
    word: "Sister",
    category: "people",
    translation: "أخت",
    phonetic: "/ˈsɪstər/",
    pos: "Noun (اسم)",
    example: "My sister helps me with my English.",
    exampleTranslation: "أختي تساعدني في لغتي الإنجليزية."
  },
  {
    id: 15,
    word: "Teacher",
    category: "people",
    translation: "معلم / مدرس",
    phonetic: "/ˈtiːtʃər/",
    pos: "Noun (اسم)",
    example: "The teacher explains the lesson clearly.",
    exampleTranslation: "المعلم يشرح الدرس بوضوح."
  },
  {
    id: 16,
    word: "Doctor",
    category: "people",
    translation: "طبيب / دكتور",
    phonetic: "/ˈdɒktər/",
    pos: "Noun (اسم)",
    example: "I go to the doctor when I am sick.",
    exampleTranslation: "أذهب إلى الطبيب عندما أكون مريضاً."
  },

  // --- FOOD & DRINK (الطعام والشراب) ---
  {
    id: 17,
    word: "Water",
    category: "food",
    translation: "ماء",
    phonetic: "/ˈwɔːtər/",
    pos: "Noun (اسم)",
    example: "I drink two liters of water every day.",
    exampleTranslation: "أشرب لترين من الماء كل يوم."
  },
  {
    id: 18,
    word: "Bread",
    category: "food",
    translation: "خبز",
    phonetic: "/brɛd/",
    pos: "Noun (اسم)",
    example: "I buy fresh bread in the morning.",
    exampleTranslation: "أشتري الخبز الطازج في الصباح."
  },
  {
    id: 19,
    word: "Apple",
    category: "food",
    translation: "تفاحة",
    phonetic: "/ˈæpl/",
    pos: "Noun (اسم)",
    example: "An apple a day keeps the doctor away.",
    exampleTranslation: "تفاحة في اليوم تغنيك عن الطبيب."
  },
  {
    id: 20,
    word: "Milk",
    category: "food",
    translation: "حليب",
    phonetic: "/mɪlk/",
    pos: "Noun (اسم)",
    example: "Children must drink milk for strong bones.",
    exampleTranslation: "يجب على الأطفال شرب الحليب لعظام قوية."
  },
  {
    id: 21,
    word: "Coffee",
    category: "food",
    translation: "قهوة",
    phonetic: "/ˈkɒfi/",
    pos: "Noun (اسم)",
    example: "My parents drink coffee in the morning.",
    exampleTranslation: "والداي يشربان القهوة في الصباح."
  },
  {
    id: 22,
    word: "Tea",
    category: "food",
    translation: "شاي",
    phonetic: "/tiː/",
    pos: "Noun (اسم)",
    example: "Would you like a cup of hot tea?",
    exampleTranslation: "هل ترغب في فنجان من الشاي الساخن؟"
  },
  {
    id: 23,
    word: "Fruit",
    category: "food",
    translation: "فاكهة",
    phonetic: "/fruːt/",
    pos: "Noun (اسم)",
    example: "Fruit is very healthy and sweet.",
    exampleTranslation: "الفاكهة صحية جداً وحلوة المذاق."
  },
  {
    id: 24,
    word: "Rice",
    category: "food",
    translation: "أرز",
    phonetic: "/raɪs/",
    pos: "Noun (اسم)",
    example: "We eat rice with chicken for lunch.",
    exampleTranslation: "نأكل الأرز مع الدجاج على الغداء."
  },

  // --- HOME & SCHOOL (المنزل والمدرسة) ---
  {
    id: 25,
    word: "House",
    category: "home",
    translation: "منزل / بيت",
    phonetic: "/haʊs/",
    pos: "Noun (اسم)",
    example: "We live in a beautiful house in Cairo.",
    exampleTranslation: "نحن نعيش في بيت جميل في القاهرة."
  },
  {
    id: 26,
    word: "Room",
    category: "home",
    translation: "غرفة",
    phonetic: "/ruːm/",
    pos: "Noun (اسم)",
    example: "My room has a big window.",
    exampleTranslation: "غرفتي فيها نافذة كبيرة."
  },
  {
    id: 27,
    word: "School",
    category: "home",
    translation: "مدرسة",
    phonetic: "/skuːl/",
    pos: "Noun (اسم)",
    example: "I walk to school every morning.",
    exampleTranslation: "أنا أمشي إلى المدرسة كل صباح."
  },
  {
    id: 28,
    word: "Book",
    category: "home",
    translation: "كتاب",
    phonetic: "/bʊk/",
    pos: "Noun (اسم)",
    example: "This English book is very easy to read.",
    exampleTranslation: "هذا الكتاب الإنجليزي سهل جداً للقراءة."
  },
  {
    id: 29,
    word: "Door",
    category: "home",
    translation: "باب",
    phonetic: "/dɔːr/",
    pos: "Noun (اسم)",
    example: "Please close the door when you leave.",
    exampleTranslation: "من فضلك أغلق الباب عندما تغادر."
  },
  {
    id: 30,
    word: "Window",
    category: "home",
    translation: "نافذة / شباك",
    phonetic: "/ˈwɪndəʊ/",
    pos: "Noun (اسم)",
    example: "The air comes through the open window.",
    exampleTranslation: "الهواء يأتي عبر النافذة المفتوحة."
  },
  {
    id: 31,
    word: "Key",
    category: "home",
    translation: "مفتاح",
    phonetic: "/kiː/",
    pos: "Noun (اسم)",
    example: "I lost my house key yesterday.",
    exampleTranslation: "لقد فقدت مفتاح منزلي بالأمس."
  },
  {
    id: 32,
    word: "Table",
    category: "home",
    translation: "طاولة / طاولة طعام",
    phonetic: "/ˈteɪbl/",
    pos: "Noun (اسم)",
    example: "Put the books on the study table.",
    exampleTranslation: "ضع الكتب على طاولة الدراسة."
  },

  // --- ACTIONS & MOVEMENT (الأفعال والحركة) ---
  {
    id: 33,
    word: "Go",
    category: "actions",
    translation: "يذهب",
    phonetic: "/ɡəʊ/",
    pos: "Verb (فعل)",
    example: "I go to the gym on Mondays.",
    exampleTranslation: "أنا أذهب إلى الصالة الرياضية أيام الاثنين."
  },
  {
    id: 34,
    word: "Come",
    category: "actions",
    translation: "يأتي / يحضر",
    phonetic: "/kʌm/",
    pos: "Verb (فعل)",
    example: "Come here and look at this picture.",
    exampleTranslation: "تعال هنا وانظر إلى هذه الصورة."
  },
  {
    id: 35,
    word: "See",
    category: "actions",
    translation: "يرى / يشاهد",
    phonetic: "/siː/",
    pos: "Verb (فعل)",
    example: "I see a white bird in the sky.",
    exampleTranslation: "أرى طائراً أبيض في السماء."
  },
  {
    id: 36,
    word: "Hear",
    category: "actions",
    translation: "يسمع",
    phonetic: "/hɪər/",
    pos: "Verb (فعل)",
    example: "Do you hear that nice music?",
    exampleTranslation: "هل تسمع تلك الموسيقى الجميلة؟"
  },
  {
    id: 37,
    word: "Eat",
    category: "actions",
    translation: "يأكل",
    phonetic: "/iːt/",
    pos: "Verb (فعل)",
    example: "I want to eat a fresh salad.",
    exampleTranslation: "أريد أن آكل سلطة طازجة."
  },
  {
    id: 38,
    word: "Drink",
    category: "actions",
    translation: "يشرب",
    phonetic: "/drɪŋk/",
    pos: "Verb (فعل)",
    example: "Drink warm tea with honey for your throat.",
    exampleTranslation: "اشرب الشاي الدافئ مع العسل لحلقك."
  },
  {
    id: 39,
    word: "Learn",
    category: "actions",
    translation: "يتعلم",
    phonetic: "/lɜːn/",
    pos: "Verb (فعل)",
    example: "We learn new words every single day.",
    exampleTranslation: "نحن نتعلم كلمات جديدة كل يوم."
  },
  {
    id: 40,
    word: "Sleep",
    category: "actions",
    translation: "ينام",
    phonetic: "/sliːp/",
    pos: "Verb (فعل)",
    example: "You must sleep eight hours tonight.",
    exampleTranslation: "يجب أن تنام ثماني ساعات الليلة."
  },

  // --- ADJECTIVES (الصفات والألوان) ---
  {
    id: 41,
    word: "Happy",
    category: "adjectives",
    translation: "سعيد / مسرور",
    phonetic: "/ˈhæpi/",
    pos: "Adjective (صفة)",
    example: "Your success makes me very happy.",
    exampleTranslation: "نجاحك يهرجني ويجعلني سعيداً جداً."
  },
  {
    id: 42,
    word: "Sad",
    category: "adjectives",
    translation: "حزين",
    phonetic: "/sæd/",
    pos: "Adjective (صفة)",
    example: "The movie has a sad ending.",
    exampleTranslation: "الفيلم له نهاية حزينة."
  },
  {
    id: 43,
    word: "Big",
    category: "adjectives",
    translation: "كبير",
    phonetic: "/bɪɡ/",
    pos: "Adjective (صفة)",
    example: "They bought a big television for the hall.",
    exampleTranslation: "لقد اشتروا تلفزيوناً كبيراً للصالة."
  },
  {
    id: 44,
    word: "Small",
    category: "adjectives",
    translation: "صغير",
    phonetic: "/smɔːl/",
    pos: "Adjective (صفة)",
    example: "She has a small cute cat.",
    exampleTranslation: "هي تملك قطة صغيرة ظريفة."
  },
  {
    id: 45,
    word: "Hot",
    category: "adjectives",
    translation: "ساخن / حار",
    phonetic: "/hɒt/",
    pos: "Adjective (صفة)",
    example: "Be careful! The soup is very hot.",
    exampleTranslation: "كن حذراً! الحساء ساخن جداً."
  },
  {
    id: 46,
    word: "Cold",
    category: "adjectives",
    translation: "بارد",
    phonetic: "/kəʊld/",
    pos: "Adjective (صفة)",
    example: "I don't like cold weather in winter.",
    exampleTranslation: "لا أحب الطقس البارد في الشتاء."
  },
  {
    id: 47,
    word: "Easy",
    category: "adjectives",
    translation: "سهل",
    phonetic: "/ˈiːzi/",
    pos: "Adjective (صفة)",
    example: "This A1 English quiz is very easy.",
    exampleTranslation: "هذا الاختبار الإنجليزي بمستوى A1 سهل جداً."
  },
  {
    id: 48,
    word: "Difficult",
    category: "adjectives",
    translation: "صعب",
    phonetic: "/ˈdɪfɪkəlt/",
    pos: "Adjective (صفة)",
    example: "Learning grammar can be difficult sometimes.",
    exampleTranslation: "تعلم القواعد يمكن أن يكون صعباً في بعض الأحيان."
  },

  // --- PLACES & TRAVEL (الأماكن والسفر) ---
  {
    id: 49,
    word: "City",
    category: "places",
    translation: "مدينة",
    phonetic: "/ˈsɪti/",
    pos: "Noun (اسم)",
    example: "London is a very historical city.",
    exampleTranslation: "لندن مدينة تاريخية للغاية."
  },
  {
    id: 50,
    word: "Country",
    category: "places",
    translation: "بلد / دولة",
    phonetic: "/ˈkʌntri/",
    pos: "Noun (اسم)",
    example: "Egypt is a beautiful country with rich history.",
    exampleTranslation: "مصر بلد جميل يتمتع بتاريخ غني."
  },
  {
    id: 51,
    word: "Street",
    category: "places",
    translation: "شارع",
    phonetic: "/striːt/",
    pos: "Noun (اسم)",
    example: "Our school is on a quiet street.",
    exampleTranslation: "مدرستنا تقع في شارع هادئ."
  },
  {
    id: 52,
    word: "Shop",
    category: "places",
    translation: "محل / دكان",
    phonetic: "/ʃɒp/",
    pos: "Noun (اسم)",
    example: "I am going to the shop to buy some milk.",
    exampleTranslation: "أنا ذاهب إلى المحل لشراء بعض الحليب."
  },
  {
    id: 53,
    word: "Hospital",
    category: "places",
    translation: "مستشفى",
    phonetic: "/ˈhɒspɪtl/",
    pos: "Noun (اسم)",
    example: "The hospital is located near the central station.",
    exampleTranslation: "المستشفى يقع بالقرب من المحطة المركزية."
  },
  {
    id: 54,
    word: "Hotel",
    category: "places",
    translation: "فندق",
    phonetic: "/həʊˈtɛl/",
    pos: "Noun (اسم)",
    example: "We stayed in an elegant hotel next to the beach.",
    exampleTranslation: "لقد أقمنا في فندق أنيق بجوار الشاطئ."
  },

  // --- TIME (الوقت والظروف) ---
  {
    id: 55,
    word: "Today",
    category: "time",
    translation: "اليوم",
    phonetic: "/təˈdeɪ/",
    pos: "Noun / Adverb (اسم/ظرف)",
    example: "Today is a beautiful sunny day.",
    exampleTranslation: "اليوم هو يوم مشمس جميل."
  },
  {
    id: 56,
    word: "Yesterday",
    category: "time",
    translation: "الأمس / البارحة",
    phonetic: "/ˈjɛstədeɪ/",
    pos: "Noun / Adverb (اسم/ظرف)",
    example: "Yesterday, I learned ten new English words.",
    exampleTranslation: "بالأمس، تعلمت عشر كلمات إنجليزية جديدة."
  },
  {
    id: 57,
    word: "Tomorrow",
    category: "time",
    translation: "غداً",
    phonetic: "/təˈmɒrəʊ/",
    pos: "Noun / Adverb (اسم/ظرف)",
    example: "Tomorrow we will take our final exam.",
    exampleTranslation: "غداً سوف نأخذ اختبارنا النهائي."
  },
  {
    id: 58,
    word: "Day",
    category: "time",
    translation: "يوم",
    phonetic: "/deɪ/",
    pos: "Noun (اسم)",
    example: "Have a wonderful day ahead!",
    exampleTranslation: "أتمنى لك يوماً رائعاً ممتعاً!"
  },
  {
    id: 59,
    word: "Night",
    category: "time",
    translation: "ليل / ليلة",
    phonetic: "/naɪt/",
    pos: "Noun (اسم)",
    example: "The stars look shiny at night.",
    exampleTranslation: "النجوم تبدو لامعة ومضيئة في الليل."
  },
  {
    id: 60,
    word: "Time",
    category: "time",
    translation: "وقت",
    phonetic: "/taɪm/",
    pos: "Noun (اسم)",
    example: "What time is it now?",
    exampleTranslation: "كم الوقت الآن؟"
  }
];

// Extend standard dictionary with auxiliary 40 words to reach a strong learning base
const EXTENDED_WORDS = [
  { id: 61, word: "We", category: "basics", translation: "نحن", phonetic: "/wiː/", pos: "Pronoun (ضمير)", example: "We learn together.", exampleTranslation: "نحن نتعلم معاً." },
  { id: 62, word: "They", category: "basics", translation: "هم", phonetic: "/ðeɪ/", pos: "Pronoun (ضمير)", example: "They are playing in the park.", exampleTranslation: "هم يلعبون في الحديقة." },
  { id: 63, word: "Morning", category: "time", translation: "الصباح", phonetic: "/ˈmɔːnɪŋ/", pos: "Noun (اسم)", example: "Good morning!", exampleTranslation: "صباح الخير!" },
  { id: 64, word: "Evening", category: "time", translation: "المساء", phonetic: "/ˈiːvnɪŋ/", pos: "Noun (اسم)", example: "I watch TV in the evening.", exampleTranslation: "أشاهد التلفاز في المساء." },
  { id: 65, word: "Week", category: "time", translation: "أسبوع", phonetic: "/wiːk/", pos: "Noun (اسم)", example: "There are seven days in a week.", exampleTranslation: "هناك سبعة أيام في الأسبوع." },
  { id: 66, word: "Month", category: "time", translation: "شهر", phonetic: "/mʌnθ/", pos: "Noun (اسم)", example: "Ramadan is a holy month.", exampleTranslation: "رمضان هو شهر مقدس." },
  { id: 67, word: "Year", category: "time", translation: "سنة / عام", phonetic: "/jɪər/", pos: "Noun (اسم)", example: "We travel to Alexandria every year.", exampleTranslation: "نحن نسافر إلى الإسكندرية كل عام." },
  { id: 68, word: "School", category: "home", translation: "مدرسة", phonetic: "/skuːl/", pos: "Noun (اسم)", example: "We study at school.", exampleTranslation: "نحن ندرس في المدرسة." },
  { id: 69, word: "Paper", category: "home", translation: "ورقة / ورق", phonetic: "/ˈpeɪpər/", pos: "Noun (اسم)", example: "Please write on this clean paper.", exampleTranslation: "من فضلك اكتب على هذه الورقة النظيفة." },
  { id: 70, word: "Pen", category: "home", translation: "قلم جاف / حبر", phonetic: "/pɛn/", pos: "Noun (اسم)", example: "I have a blue pen.", exampleTranslation: "لدي قلم أزرق." },
  { id: 71, word: "Pencil", category: "home", translation: "قلم رصاص", phonetic: "/ˈpɛnsl/", pos: "Noun (اسم)", example: "Draw a circle with a pencil.", exampleTranslation: "ارسم دائرة بقلم رصاص." },
  { id: 72, word: "Chair", category: "home", translation: "كرسي", phonetic: "/tʃɛər/", pos: "Noun (اسم)", example: "Please sit on this comfortable chair.", exampleTranslation: "من فضلك اجلس على هذا الكرسي المريح." },
  { id: 73, word: "Kitchen", category: "home", translation: "مطبخ", phonetic: "/ˈkɪtʃɪn/", pos: "Noun (اسم)", example: "My mother is cooking in the kitchen.", exampleTranslation: "أمي تطبخ في المطبخ." },
  { id: 74, word: "Man", category: "people", translation: "رجل", phonetic: "/mæn/", pos: "Noun (اسم)", example: "This man is a smart programmer.", exampleTranslation: "هذا الرجل مبرمج ذكي." },
  { id: 75, word: "Woman", category: "people", translation: "امرأة", phonetic: "/ˈwʊmən/", pos: "Noun (اسم)", example: "The woman owns a beautiful flower shop.", exampleTranslation: "المرأة تملك محل زهور جميل." },
  { id: 76, word: "Child", category: "people", translation: "طفل", phonetic: "/tʃaɪld/", pos: "Noun (اسم)", example: "The child is sleeping peacefully.", exampleTranslation: "الطفل ينام بسلام وطمأنينة." },
  { id: 77, word: "Boy", category: "people", translation: "ولد / صبي", phonetic: "/bɔɪ/", pos: "Noun (اسم)", example: "The boy is reading an interesting book.", exampleTranslation: "الولد يقرأ كتاباً شيقاً." },
  { id: 78, word: "Girl", category: "people", translation: "بنت / فتاة", phonetic: "/ɡɜːl/", pos: "Noun (اسم)", example: "The girl is painting a nice tree.", exampleTranslation: "البنت ترسم شجرة لطيفة." },
  { id: 79, word: "Chicken", category: "food", translation: "دجاج / لحم دجاج", phonetic: "/ˈtʃɪkɪn/", pos: "Noun (اسم)", example: "I like roasted chicken.", exampleTranslation: "أنا أحب الدجاج المشوي." },
  { id: 80, word: "Fish", category: "food", translation: "سمك", phonetic: "/fɪʃ/", pos: "Noun (اسم)", example: "We eat fresh fish at the restaurant.", exampleTranslation: "نحن نأكل السمك الطازج في المطعم." },
  { id: 81, word: "Vegetable", category: "food", translation: "خضار / خضروات", phonetic: "/ˈvɛdʒtəbl/", pos: "Noun (اسم)", example: "Eating vegetables is vital for your health.", exampleTranslation: "أكل الخضروات ضروري وحيوي لصحتك."
  }
];

// Consolidate full lists
const FULL_WORDS = [...WORDS_DATABASE, ...EXTENDED_WORDS];

// 2. WEB AUDIO SYNTH ENGINE (Satisfying programmatically generated chimes)
let audioCtx = null;

function playSound(type) {
  try {
    // Only initialize audio context on user interaction to abide by browser autoplay policies
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Check if muted by user
    if (localStorage.getItem("itqan_sound_muted") === "true") {
      return;
    }
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === "click") {
      // Small neat click
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === "success") {
      // High delightful double-chime
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "error") {
      // Low buzz
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "victory") {
      // Arpeggio fanfare
      const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
      notes.forEach((freq, idx) => {
        const itemOsc = audioCtx.createOscillator();
        const itemGain = audioCtx.createGain();
        itemOsc.type = "sine";
        itemOsc.frequency.setValueAtTime(freq, now + idx * 0.1);
        itemGain.gain.setValueAtTime(0.1, now + idx * 0.1);
        itemGain.gain.linearRampToValueAtTime(0.01, now + idx * 0.1 + 0.3);
        itemOsc.connect(itemGain);
        itemGain.connect(audioCtx.destination);
        itemOsc.start(now + idx * 0.1);
        itemOsc.stop(now + idx * 0.1 + 0.3);
      });
    }
  } catch (e) {
    console.warn("Audio Synthesizer is not supported on this browser context.");
  }
}

// 3. APPLICATION STATE MANAGEMENT
const STATE = {
  currentTab: "explorer",
  learnedWords: new Set(),
  selectedStoryWords: new Set(),
  activeStory: null,
  activeStoryQuestionsScore: 0,
  activeStoryQuestionsCount: 0,
  
  // Quiz states
  quizType: "standard", // "standard" or "ai-custom"
  quizQuestions: [],
  currentQuizIndex: 0,
  quizAnswers: [],
  quizScore: 0,
  quizTimerInterval: null,
  quizSeconds: 0,
  
  // Stats
  streak: 1,
  totalQuizzes: 0,
  totalScoreSum: 0,
  
  // Pagination
  wordsPerPage: 24,
  currentLoadedCount: 24
};

// 4. STORAGE SYNC UTILITIES
function loadStateFromStorage() {
  try {
    const savedLearned = localStorage.getItem("itqan_learned_words");
    if (savedLearned) {
      const arr = JSON.parse(savedLearned);
      STATE.learnedWords = new Set(arr);
    }
    
    const savedStreak = localStorage.getItem("itqan_streak");
    if (savedStreak) {
      STATE.streak = parseInt(savedStreak, 10);
    } else {
      localStorage.setItem("itqan_streak", "1");
    }
    
    const savedQuizzesCount = localStorage.getItem("itqan_quizzes_count");
    if (savedQuizzesCount) STATE.totalQuizzes = parseInt(savedQuizzesCount, 10);
    
    const savedScoreSum = localStorage.getItem("itqan_score_sum");
    if (savedScoreSum) STATE.totalScoreSum = parseInt(savedScoreSum, 10);
    
    // Check sound setting
    const soundMuted = localStorage.getItem("itqan_sound_muted") === "true";
    updateSoundUI(soundMuted);
    
  } catch (e) {
    console.error("Failed to read LocalStorage data, resetting defaults.", e);
  }
}

function saveLearnedWordsToStorage() {
  try {
    const arr = Array.from(STATE.learnedWords);
    localStorage.setItem("itqan_learned_words", JSON.stringify(arr));
    
    // Live update counts
    document.getElementById("badge-total-learned").textContent = `${STATE.learnedWords.size}/500`;
    const mobBadge = document.getElementById("badge-total-learned-mobile");
    if (mobBadge) mobBadge.textContent = `${STATE.learnedWords.size}/500`;
    
    updateGlobalProgress();
  } catch (e) {
    console.error("Failed to save learned words state.", e);
  }
}

// 5. TOAST NOTIFICATION ENGINE
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `animate-toast pointer-events-auto bg-white border-r-4 p-4 rounded-xl shadow-lg flex items-center justify-between space-x-3 space-x-reverse transition-all duration-300 transform translate-x-0 ${
    type === "success" ? "border-itqan-500 text-itqan-900" : type === "error" ? "border-red-500 text-red-900" : "border-amber-500 text-amber-900"
  }`;
  
  let icon = "check-circle";
  if (type === "error") icon = "alert-triangle";
  if (type === "info") icon = "info";
  
  toast.innerHTML = `
    <div class="flex items-center space-x-3 space-x-reverse">
      <i data-lucide="${icon}" class="w-5 h-5 ${type === "success" ? "text-itqan-600" : type === "error" ? "text-red-500" : "text-amber-500"}"></i>
      <p class="text-xs font-bold leading-relaxed">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;
  
  container.appendChild(toast);
  lucide.createIcons();
  
  // Auto-remove toast after 4.5 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4500);
}

// Sound Controller
function updateSoundUI(muted) {
  const toggleBtn = document.getElementById("sound-toggle-btn");
  const soundIcon = document.getElementById("sound-icon");
  const mobileSoundIcon = document.getElementById("mobile-sound-icon");
  
  if (muted) {
    toggleBtn.classList.remove("bg-itqan-600");
    toggleBtn.classList.add("bg-gray-300");
    toggleBtn.classList.remove("justify-end");
    toggleBtn.classList.add("justify-start");
    
    soundIcon.setAttribute("data-lucide", "volume-x");
    if (mobileSoundIcon) mobileSoundIcon.setAttribute("data-lucide", "volume-x");
  } else {
    toggleBtn.classList.remove("bg-gray-300");
    toggleBtn.classList.add("bg-itqan-600");
    toggleBtn.classList.remove("justify-start");
    toggleBtn.classList.add("justify-end");
    
    soundIcon.setAttribute("data-lucide", "volume-2");
    if (mobileSoundIcon) mobileSoundIcon.setAttribute("data-lucide", "volume-2");
  }
  lucide.createIcons();
}

function toggleSound() {
  const isMuted = localStorage.getItem("itqan_sound_muted") === "true";
  const newMuted = !isMuted;
  localStorage.setItem("itqan_sound_muted", newMuted ? "true" : "false");
  updateSoundUI(newMuted);
  playSound("click");
  showToast(newMuted ? "تم كتم المؤثرات الصوتية" : "تم تفعيل المؤثرات الصوتية بنجاح", "info");
}

// 6. TEXT TO SPEECH CONTROLLER (NATIVE HTML5)
let currentSpeechUtterance = null;

function speakWord(text) {
  playSound("click");
  if (!window.speechSynthesis) {
    showToast("ميزة النطق الصوتي غير مدعومة بالكامل في هذا المتصفح.", "error");
    return;
  }
  
  // Stop existing speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.85; // slightly slower for beginners
  
  window.speechSynthesis.speak(utterance);
}

// 7. ROUTER: SWITCHING VISUAL TABS
function switchTab(tabId) {
  playSound("click");
  
  // Hide all panels
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.add("hidden");
  });
  
  // Show target
  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) targetPane.classList.remove("hidden");
  
  // Update nav highlight styles
  document.querySelectorAll("#desktop-nav button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelectorAll("footer button").forEach(btn => {
    btn.classList.remove("active");
  });
  
  const activeDesktopBtn = document.getElementById(`btn-nav-${tabId}`);
  if (activeDesktopBtn) activeDesktopBtn.classList.add("active");
  
  const activeMobileBtn = document.getElementById(`btn-mobile-nav-${tabId}`);
  if (activeMobileBtn) activeMobileBtn.classList.add("active");
  
  STATE.currentTab = tabId;
  
  // Clear any running quiz intervals when moving away
  if (tabId !== "quizzes" && STATE.quizTimerInterval) {
    clearInterval(STATE.quizTimerInterval);
  }
  
  // Trigger tab-specific initialization
  if (tabId === "stats") {
    renderStatsDashboard();
  } else if (tabId === "stories") {
    renderStorySelectedWordsList();
  } else if (tabId === "explorer") {
    filterWords(); // refresh word layout
  }
  
  lucide.createIcons();
}

// 8. TAB 1: WORD EXPLORER LOGIC & DRAWERS
function toggleWordLearned(wordId, element) {
  playSound("success");
  const isLearned = STATE.learnedWords.has(wordId);
  
  if (isLearned) {
    STATE.learnedWords.delete(wordId);
    showToast("تم إزالة الكلمة من المحفوظات.", "info");
  } else {
    STATE.learnedWords.add(wordId);
    showToast("رائع! أحرزت تقدماً وتم حفظ الكلمة بنجاح.", "success");
    
    // Check if unlocks first word learned badge
    checkAndUnlockBadge("welcome_badge");
  }
  
  saveLearnedWordsToStorage();
  
  // Re-style card
  const card = document.getElementById(`word-card-${wordId}`);
  if (card) {
    if (STATE.learnedWords.has(wordId)) {
      card.classList.add("learned");
      element.innerHTML = `<i data-lucide="bookmark-check" class="w-5 h-5 text-itqan-600 fill-itqan-100"></i>`;
    } else {
      card.classList.remove("learned");
      element.innerHTML = `<i data-lucide="bookmark" class="w-5 h-5 text-gray-400 hover:text-itqan-500"></i>`;
    }
    lucide.createIcons();
  }
}

// Select/Deselect word for AI Story
function toggleWordForStory(wordText, checkboxElement) {
  playSound("click");
  const normalized = wordText.toLowerCase().trim();
  if (STATE.selectedStoryWords.has(normalized)) {
    STATE.selectedStoryWords.delete(normalized);
    checkboxElement.parentElement.classList.remove("bg-amber-50", "border-amber-300");
  } else {
    if (STATE.selectedStoryWords.size >= 8) {
      showToast("الحد الأقصى للقصة الواحدة هو 8 كلمات كحد أقصى لتأمين صياغة متماسكة.", "info");
      checkboxElement.checked = false;
      return;
    }
    STATE.selectedStoryWords.add(normalized);
    checkboxElement.parentElement.classList.add("bg-amber-50", "border-amber-300");
  }
  
  document.getElementById("selected-story-words-count").textContent = `تم اختيار ${STATE.selectedStoryWords.size} كلمات للقصة`;
}

// Generate the visual markup of a single word card
function createWordCardHTML(word) {
  const isLearned = STATE.learnedWords.has(word.id);
  const isSelectedForStory = STATE.selectedStoryWords.has(word.word.toLowerCase());
  
  return `
    <div id="word-card-${word.id}" class="word-card bg-white border border-gray-100 rounded-2xl p-5 shadow-sm relative flex flex-col justify-between ${isLearned ? 'learned' : ''} ${isSelectedForStory ? 'bg-amber-50/40 border-amber-200' : ''}">
      
      <!-- Top bookmark and inclusion row -->
      <div class="flex items-start justify-between mb-4">
        <span class="text-[10px] font-bold text-itqan-600 bg-itqan-50 border border-itqan-100 px-2 py-0.5 rounded-md uppercase">
          ${word.pos}
        </span>
        
        <div class="flex items-center space-x-2 space-x-reverse">
          <!-- Inclusion label for AI Story -->
          <label class="flex items-center space-x-1.5 space-x-reverse cursor-pointer bg-gray-50 border border-gray-100 px-2 py-1 rounded-lg text-[10px] hover:border-amber-300 transition duration-150">
            <input type="checkbox" onchange="toggleWordForStory('${word.word}', this)" ${isSelectedForStory ? 'checked' : ''} class="w-3 h-3 text-itqan-600 rounded focus:ring-amber-400">
            <span class="text-gray-500 font-semibold select-none">تضمين في قصة</span>
          </label>
          
          <!-- Learned Checkbox Bookmark -->
          <button onclick="toggleWordLearned(${word.id}, this)" class="p-1 rounded-lg hover:bg-gray-100 transition">
            ${isLearned 
              ? `<i data-lucide="bookmark-check" class="w-5 h-5 text-itqan-600 fill-itqan-100"></i>` 
              : `<i data-lucide="bookmark" class="w-5 h-5 text-gray-400 hover:text-itqan-500"></i>`
            }
          </button>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h4 class="text-2xl font-extrabold text-slate-800 tracking-wide select-all font-mono">${word.word}</h4>
          
          <!-- TTS Pronounce Button -->
          <button onclick="speakWord('${word.word}')" class="p-2.5 bg-itqan-50 text-itqan-600 hover:bg-itqan-100 rounded-xl transition flex items-center justify-center shadow-inner" title="استمع للنطق الصوتي">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>
        
        <div class="flex items-center space-x-2 space-x-reverse">
          <span class="pronunciation-bubble text-xs text-slate-400 select-all font-medium py-0.5 px-2 bg-gray-50 rounded">${word.phonetic}</span>
          <span class="text-sm font-bold text-itqan-600 select-all">${word.translation}</span>
        </div>
        
        <!-- Interactive sentences examples block -->
        <div class="pt-3 border-t border-gray-50 mt-3 space-y-1 bg-slate-50/40 p-3 rounded-xl border border-gray-50">
          <p class="text-[11px] text-gray-400 font-bold uppercase tracking-wider">مثال عملي (Example):</p>
          <p class="text-xs text-gray-700 font-semibold leading-relaxed ltr text-left select-all font-sans">${word.example}</p>
          <p class="text-xs text-itqan-800 font-medium leading-relaxed select-all">${word.exampleTranslation}</p>
        </div>
      </div>
      
    </div>
  `;
}

// Search and category sorting mechanics
function filterWords() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  const category = document.getElementById("category-filter").value;
  const learnedStatus = document.getElementById("learned-filter").value;
  
  // Filter the full dictionary
  let filtered = FULL_WORDS.filter(word => {
    // Search matching
    const matchesSearch = word.word.toLowerCase().includes(query) || 
                          word.translation.includes(query) ||
                          (word.example && word.example.toLowerCase().includes(query)) ||
                          (word.exampleTranslation && word.exampleTranslation.includes(query));
                          
    // Category matching
    const matchesCategory = category === "all" || word.category === category;
    
    // Status matching
    const isLearned = STATE.learnedWords.has(word.id);
    const matchesStatus = learnedStatus === "all" || 
                          (learnedStatus === "learned" && isLearned) || 
                          (learnedStatus === "unlearned" && !isLearned);
                          
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  // Grid reference
  const grid = document.getElementById("words-grid");
  const emptyState = document.getElementById("no-words-found");
  const loadMoreBtn = document.getElementById("load-more-btn");
  
  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    loadMoreBtn.classList.add("hidden");
    return;
  }
  
  emptyState.classList.add("hidden");
  
  // Manage pagination
  if (filtered.length <= STATE.currentLoadedCount) {
    loadMoreBtn.classList.add("hidden");
  } else {
    loadMoreBtn.classList.remove("hidden");
  }
  
  // Take sliced subset
  const chunk = filtered.slice(0, STATE.currentLoadedCount);
  
  grid.innerHTML = chunk.map(w => createWordCardHTML(w)).join("");
  lucide.createIcons();
}

function loadMoreWords() {
  playSound("click");
  STATE.currentLoadedCount += STATE.wordsPerPage;
  filterWords();
}

function updateGlobalProgress() {
  const ratio = Math.min((STATE.learnedWords.size / 500) * 100, 100);
  const parsed = Math.round(ratio);
  
  document.getElementById("explorer-progress-text").textContent = `${parsed}%`;
  document.getElementById("explorer-learned-counter").textContent = `${STATE.learnedWords.size} من 500 كلمة`;
  
  // Update progress stroke in SVG circle
  const circle = document.getElementById("explorer-progress-circle");
  if (circle) {
    circle.setAttribute("stroke-dasharray", `${parsed}, 100`);
  }
  
  // Check badge unlocks for learned counts
  if (STATE.learnedWords.size >= 5) checkAndUnlockBadge("word_pioneer");
  if (STATE.learnedWords.size >= 50) checkAndUnlockBadge("word_knight");
  if (STATE.learnedWords.size >= 100) checkAndUnlockBadge("professional_master");
}

// 9. TAB 2: AI STORIES LOGIC
function renderStorySelectedWordsList() {
  const list = document.getElementById("story-words-selection-list");
  if (!list) return;
  
  if (STATE.selectedStoryWords.size === 0) {
    list.innerHTML = `
      <div class="text-center w-full py-4 text-xs text-gray-400">
        لم تقم باختيار أي كلمات بعد. تصفح الكلمات وعلم عليها، أو انقر "اختيار عشوائي".
      </div>
    `;
    return;
  }
  
  list.innerHTML = Array.from(STATE.selectedStoryWords).map(word => `
    <span class="inline-flex items-center space-x-1.5 space-x-reverse bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-200">
      <span class="font-mono">${word}</span>
      <button onclick="removeWordFromStorySelection('${word}')" class="text-amber-600 hover:text-amber-900 transition">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
    </span>
  `).join("");
  lucide.createIcons();
}

function removeWordFromStorySelection(word) {
  playSound("click");
  STATE.selectedStoryWords.delete(word);
  renderStorySelectedWordsList();
  
  // Keep checkboxes in explorer updated
  filterWords();
}

function selectRandomWordsForStory() {
  playSound("click");
  STATE.selectedStoryWords.clear();
  
  // Select 5 random words from database
  const shuffled = [...FULL_WORDS].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 5);
  
  selected.forEach(w => {
    STATE.selectedStoryWords.add(w.word.toLowerCase());
  });
  
  renderStorySelectedWordsList();
  filterWords();
  showToast("تم اختيار 5 كلمات عشوائية ملائمة لقصتك!", "success");
}

async function generateAIStory() {
  playSound("click");
  if (STATE.selectedStoryWords.size < 2) {
    showToast("الرجاء اختيار كلمتين على الأقل لصياغة قصة مترابطة.", "error");
    return;
  }
  
  const loader = document.getElementById("story-loader");
  const placeholder = document.getElementById("story-placeholder");
  const activeArea = document.getElementById("active-story-area");
  
  loader.classList.remove("hidden");
  placeholder.classList.add("hidden");
  activeArea.classList.add("hidden");
  
  try {
    const wordList = Array.from(STATE.selectedStoryWords);
    const response = await fetch("/api/generate-story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ words: wordList }),
    });
    
    if (!response.ok) {
      throw new Error("API call failed.");
    }
    
    const storyData = await response.json();
    STATE.activeStory = storyData;
    
    // Display Story Content
    renderStoryContent(storyData);
    
    // Unlock story badge
    checkAndUnlockBadge("smart_reader");
    
  } catch (error) {
    console.error("Failed to generate story:", error);
    showToast("حدث خطأ أثناء الاتصال بالخادم. تم تشغيل المحرك المحلي لتوفير سيناريو بديل ممتاز.", "info");
    
    // Call fallback
    const wordList = Array.from(STATE.selectedStoryWords);
    const mock = getMockStoryFallback(wordList);
    STATE.activeStory = mock;
    renderStoryContent(mock);
  } finally {
    loader.classList.add("hidden");
  }
}

function getMockStoryFallback(words) {
  // Simulates the backend mock payload on client side as double safety
  return {
    isMock: true,
    title: `A New Adventure with ${words.join(", ")}`,
    titleAr: `مغامرة جديدة مع ${words.join(" و ")}`,
    paragraphs: [
      {
        en: `Today, Ahmad and John met at the local school. They wanted to learn and help each other. They walked along the clean street and discussed how they can make their day highly successful.`,
        ar: `اليوم، التقى أحمد وجون في المدرسة المحلية. كانا يريدان التعلم ومساعدة بعضهما البعض. مشيا على طول الشارع النظيف وناقشا كيف يمكنهما جعل يومهما ناجحاً للغاية.`
      },
      {
        en: `Ahmad always feels pleased to see his friend being helpful. They studied English and shared tasty apples. It was a beautiful day and they were extremely happy to grow and gain knowledge together.`,
        ar: `يشعر أحمد دائماً بالسرور لرؤية صديقه وهو يقدم المساعدة. درسا اللغة الإنجليزية وتشاركا التفاح اللذيذ. لقد كان يوماً جميلاً وكانا سعيدين للغاية بالنمو واكتساب المعرفة معاً.`
      }
    ],
    vocabulary: words.map(w => ({
      word: w,
      meaning: "كلمة من المفردات اليومية لمستوى المبتدئين",
      pronunciation: w
    })),
    questions: [
      {
        question: "أين التقى أحمد وجون اليوم؟",
        options: ["في المدرسة", "في الحديقة", "في الفندق", "في المنزل"],
        correctAnswer: 0,
        explanation: "القصة تذكر في الفقرة الأولى أنهما التقيا في المدرسة (at the local school)."
      },
      {
        question: "ما هي الفاكهة التي تشاركها الصديقان؟",
        options: ["الموز", "التفاح", "البرتقال", "التمر"],
        correctAnswer: 1,
        explanation: "ذكرت القصة في الفقرة الثانية أنهما تشاركا التفاح (shared tasty apples)."
      }
    ]
  };
}

// Parse paragraphs and insert highlight classes on requested words
function renderStoryContent(story) {
  document.getElementById("story-title-en").textContent = story.title;
  document.getElementById("story-title-ar").textContent = story.titleAr;
  
  const paragraphsArea = document.getElementById("story-body-paragraphs");
  
  // Generate HTML for each paragraph
  paragraphsArea.innerHTML = story.paragraphs.map((p, pIdx) => {
    // Escape and highlight select words
    let englishText = p.en;
    
    // Parse word tags and highlight matches
    STATE.selectedStoryWords.forEach(selectedWord => {
      const escapedWord = selectedWord.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b(${escapedWord}s?)\\b`, 'gi');
      englishText = englishText.replace(regex, `<span class="highlight-story-word" onclick="showStoryWordExplanation('${selectedWord}')">$1</span>`);
    });
    
    return `
      <div class="story-paragraph-card p-4 rounded-xl border border-gray-100 hover:bg-gray-50/50 transition">
        <p class="text-[17px] font-sans font-medium text-slate-800 leading-relaxed text-left ltr select-all">${englishText}</p>
        <p class="story-ar-text text-sm font-semibold text-emerald-800 leading-relaxed mt-2" data-paragraph="${pIdx}">${p.ar}</p>
      </div>
    `;
  }).join("");
  
  // Render Vocabulary definition pills
  const vocabPills = document.getElementById("story-vocabulary-pills");
  vocabPills.innerHTML = story.vocabulary.map(v => `
    <button onclick="showStoryWordExplanation('${v.word}')" class="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 hover:border-itqan-500 rounded-lg text-xs font-bold transition flex items-center gap-1">
      <i data-lucide="info" class="w-3.5 h-3.5 text-itqan-500"></i>
      <span class="font-mono text-slate-800 text-[13px]">${v.word}</span>:
      <span>${v.meaning}</span>
    </button>
  `).join("");
  
  // Render Comprehension Questions
  const questionsList = document.getElementById("story-comprehension-list");
  questionsList.innerHTML = story.questions.map((q, qIdx) => `
    <div class="bg-gray-50/50 border border-gray-100 p-5 rounded-xl space-y-3">
      <div class="flex items-start space-x-2 space-x-reverse">
        <span class="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-md shrink-0">سؤال ${qIdx + 1}</span>
        <h5 class="text-sm font-bold text-gray-800 leading-relaxed">${q.question}</h5>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="story-q-${qIdx}-options">
        ${q.options.map((opt, oIdx) => `
          <button onclick="answerStoryQuestion(${qIdx}, ${oIdx}, ${q.correctAnswer}, '${q.explanation.replace(/'/g, "\\'")}')" class="p-3 bg-white hover:bg-slate-100 border border-gray-200 rounded-xl text-xs font-bold transition text-right">
            ${opt}
          </button>
        `).join("")}
      </div>
      <div id="story-q-${qIdx}-feedback" class="hidden text-xs leading-relaxed p-3 rounded-xl"></div>
    </div>
  `).join("");
  
  // Unhide area
  document.getElementById("active-story-area").classList.remove("hidden");
  lucide.createIcons();
}

function showStoryWordExplanation(wordText) {
  playSound("click");
  // Find word details from local FULL_WORDS dictionary
  const lower = wordText.toLowerCase().trim();
  const info = FULL_WORDS.find(w => w.word.toLowerCase() === lower);
  
  if (info) {
    showToast(`<strong>${info.word}</strong> (${info.pos}): ${info.translation}<br>لفظ تقريبي: ${info.phonetic}`, "info");
    speakWord(info.word);
  } else {
    showToast(`المعنى: ${wordText}`, "info");
  }
}

function answerStoryQuestion(qIdx, selectedIdx, correctIdx, explanation) {
  const container = document.getElementById(`story-q-${qIdx}-options`);
  const feedback = document.getElementById(`story-q-${qIdx}-feedback`);
  
  // Disable all options
  container.querySelectorAll("button").forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.add("cursor-not-allowed");
    if (idx === correctIdx) {
      btn.classList.remove("bg-white", "hover:bg-slate-100");
      btn.classList.add("bg-emerald-100", "border-emerald-300", "text-emerald-900");
    } else if (idx === selectedIdx) {
      btn.classList.remove("bg-white", "hover:bg-slate-100");
      btn.classList.add("bg-red-100", "border-red-300", "text-red-900");
    }
  });
  
  // Show feedback explanation
  feedback.classList.remove("hidden");
  if (selectedIdx === correctIdx) {
    playSound("success");
    feedback.className = "bg-emerald-50 border border-emerald-100 text-emerald-800 p-3 rounded-xl text-xs mt-2";
    feedback.innerHTML = `<strong>إجابة صحيحة!</strong> ${explanation}`;
  } else {
    playSound("error");
    feedback.className = "bg-red-50 border border-red-100 text-red-800 p-3 rounded-xl text-xs mt-2";
    feedback.innerHTML = `<strong>للأسف، إجابة غير صحيحة.</strong> ${explanation}`;
  }
}

function toggleArabicStory() {
  playSound("click");
  document.querySelectorAll(".story-ar-text").forEach(p => {
    p.classList.toggle("hidden");
  });
}

function readStoryOutLoud() {
  if (!STATE.activeStory) return;
  playSound("click");
  
  if (!window.speechSynthesis) {
    showToast("ميزة قراءة النصوص غير مدعومة بالكامل على هذا المتصفح.", "error");
    return;
  }
  
  // If playing, pause/stop
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    document.getElementById("story-play-text").textContent = "قراءة القصة بصوت مسموع";
    document.getElementById("story-play-icon").setAttribute("data-lucide", "play");
    lucide.createIcons();
    return;
  }
  
  // Aggregate full English story text
  const fullText = STATE.activeStory.paragraphs.map(p => p.en).join(" . ");
  const utterance = new SpeechSynthesisUtterance(fullText);
  utterance.lang = "en-US";
  utterance.rate = 0.8; // accessible slow pace for reading along
  
  utterance.onstart = () => {
    document.getElementById("story-play-text").textContent = "إيقاف القراءة الصوتية";
    document.getElementById("story-play-icon").setAttribute("data-lucide", "square");
    lucide.createIcons();
  };
  
  utterance.onend = () => {
    document.getElementById("story-play-text").textContent = "قراءة القصة بصوت مسموع";
    document.getElementById("story-play-icon").setAttribute("data-lucide", "play");
    lucide.createIcons();
  };
  
  window.speechSynthesis.speak(utterance);
}

// 10. TAB 3: QUIZ LOGIC
function selectQuizType(type) {
  playSound("click");
  STATE.quizType = type;
  
  const stdBtn = document.getElementById("quiz-type-standard");
  const aiBtn = document.getElementById("quiz-type-ai");
  
  if (type === "standard") {
    stdBtn.classList.add("active");
    aiBtn.classList.remove("active");
  } else {
    aiBtn.classList.add("active");
    stdBtn.classList.remove("active");
  }
}

async function startQuiz() {
  playSound("click");
  
  const setupPanel = document.getElementById("quiz-setup-panel");
  const loadingPanel = document.getElementById("quiz-loading-panel");
  const playPanel = document.getElementById("quiz-play-panel");
  
  setupPanel.classList.add("hidden");
  
  if (STATE.quizType === "ai-custom") {
    loadingPanel.classList.remove("hidden");
    try {
      // Pick some words the user has learned recently to test them with AI
      const learnedArr = Array.from(STATE.learnedWords);
      const randomLearnedSubset = learnedArr.sort(() => 0.5 - Math.random()).slice(0, 5);
      const selectedWords = randomLearnedSubset.length > 0 ? randomLearnedSubset.map(id => {
        const match = FULL_WORDS.find(w => w.id === id);
        return match ? match.word : null;
      }).filter(Boolean) : [];
      
      const response = await fetch("/api/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedWords })
      });
      
      if (!response.ok) throw new Error("Quiz creation endpoint error");
      
      const quizData = await response.json();
      STATE.quizQuestions = quizData.questions;
      
    } catch (e) {
      console.warn("AI Quiz generated an error, loading local questions fallback.", e);
      showToast("المخدم المحلي نشط. تم تهيئة اختبار محاكي عالي الجودة.", "info");
      STATE.quizQuestions = generateLocalQuizQuestions();
    } finally {
      loadingPanel.classList.add("hidden");
    }
  } else {
    // Load local randomized questions
    STATE.quizQuestions = generateLocalQuizQuestions();
  }
  
  // Reset index and play quiz
  STATE.currentQuizIndex = 0;
  STATE.quizScore = 0;
  STATE.quizAnswers = [];
  STATE.quizSeconds = 0;
  
  playPanel.classList.remove("hidden");
  loadQuestion(0);
  
  // Start Timer
  startQuizTimer();
}

function generateLocalQuizQuestions() {
  // Shuffles database and picks 5 words
  const shuffled = [...FULL_WORDS].sort(() => 0.5 - Math.random()).slice(0, 5);
  
  return shuffled.map((word, idx) => {
    // 50% chance translation EN -> AR, 50% chance AR -> EN
    const isEnToAr = Math.random() > 0.5;
    const questionText = isEnToAr 
      ? `ما هو المعنى العربي الصحيح للكلمة الإنجليزية "${word.word}"؟`
      : `أي من هذه الكلمات الإنجليزية تترجم كـ "${word.translation}"؟`;
      
    // Generate options containing 1 correct answer and 3 random options
    const correctVal = isEnToAr ? word.translation : word.word;
    const pool = isEnToAr 
      ? FULL_WORDS.map(w => w.translation).filter(t => t !== correctVal)
      : FULL_WORDS.map(w => w.word).filter(w => w !== correctVal);
      
    const shuffledPool = pool.sort(() => 0.5 - Math.random());
    const options = [correctVal, shuffledPool[0], shuffledPool[1], shuffledPool[2]];
    
    // Scramble the options and find the new index of correct answer
    const scrambled = [...options].sort(() => 0.5 - Math.random());
    const correctIdx = scrambled.indexOf(correctVal);
    
    return {
      question: questionText,
      options: scrambled,
      correctAnswer: correctIdx,
      explanation: `الكلمة الإنجليزية "${word.word}" تعني باللغة العربية "${word.translation}". اللفظ التقريبي لها هو [ ${word.phonetic} ]. مثال: ${word.example}`
    };
  });
}

function startQuizTimer() {
  if (STATE.quizTimerInterval) clearInterval(STATE.quizTimerInterval);
  
  const timerLabel = document.getElementById("quiz-timer");
  STATE.quizSeconds = 0;
  
  STATE.quizTimerInterval = setInterval(() => {
    STATE.quizSeconds++;
    const mins = Math.floor(STATE.quizSeconds / 60).toString().padStart(2, "0");
    const secs = (STATE.quizSeconds % 60).toString().padStart(2, "0");
    timerLabel.textContent = `${mins}:${secs}`;
  }, 1000);
}

function loadQuestion(index) {
  const q = STATE.quizQuestions[index];
  
  // Set question count and progress bar
  document.getElementById("quiz-progress-text").textContent = `السؤال ${index + 1} من 5`;
  const pct = ((index + 1) / 5) * 100;
  document.getElementById("quiz-progress-bar").style.width = `${pct}%`;
  
  // Set question text
  document.getElementById("quiz-question-text").textContent = q.question;
  
  // Set choices options
  const optionsBox = document.getElementById("quiz-options-container");
  optionsBox.innerHTML = q.options.map((opt, optIdx) => `
    <button onclick="selectQuizOption(${optIdx})" id="quiz-opt-${optIdx}" class="option-btn p-4 border border-gray-200 hover:border-itqan-500 rounded-2xl bg-white hover:bg-gray-50/50 text-slate-800 text-sm font-bold transition text-right flex items-center justify-between">
      <span>${opt}</span>
      <span class="text-xs text-gray-300 font-mono select-none">${String.fromCharCode(65 + optIdx)}</span>
    </button>
  `).join("");
  
  // Hide feedback card
  document.getElementById("quiz-feedback-card").classList.add("hidden");
  
  // Reset actions button
  const actionBtn = document.getElementById("quiz-next-btn");
  actionBtn.textContent = "التحقق من الإجابة";
  actionBtn.disabled = true;
  actionBtn.className = "px-8 py-3 bg-gray-200 text-gray-500 rounded-xl font-bold text-xs transition cursor-not-allowed";
  
  STATE.selectedQuizOption = null;
}

function selectQuizOption(optionIdx) {
  playSound("click");
  // If feedback is already showing, ignore
  const feedbackCard = document.getElementById("quiz-feedback-card");
  if (!feedbackCard.classList.contains("hidden")) return;
  
  STATE.selectedQuizOption = optionIdx;
  
  // Toggle active button style
  document.querySelectorAll(".option-btn").forEach((btn, idx) => {
    if (idx === optionIdx) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
  
  // Enable next action
  const actionBtn = document.getElementById("quiz-next-btn");
  actionBtn.disabled = false;
  actionBtn.className = "px-8 py-3 bg-gradient-to-r from-itqan-500 to-itqan-600 text-white rounded-xl font-bold text-xs transition shadow hover:from-itqan-600 hover:to-itqan-700 cursor-pointer";
}

function handleQuizNext() {
  const actionBtn = document.getElementById("quiz-next-btn");
  const feedbackCard = document.getElementById("quiz-feedback-card");
  const feedbackTitle = document.getElementById("quiz-feedback-title");
  const feedbackExplanation = document.getElementById("quiz-feedback-explanation");
  const feedbackIcon = document.getElementById("quiz-feedback-icon");
  
  const q = STATE.quizQuestions[STATE.currentQuizIndex];
  
  // STATE 1: Verify Answer
  if (actionBtn.textContent === "التحقق من الإجابة") {
    // Style correct and incorrect options
    document.querySelectorAll(".option-btn").forEach((btn, idx) => {
      btn.disabled = true;
      btn.classList.remove("selected");
      if (idx === q.correctAnswer) {
        btn.classList.add("correct");
      } else if (idx === STATE.selectedQuizOption) {
        btn.classList.add("wrong");
      }
    });
    
    // Evaluate correctness
    const isCorrect = STATE.selectedQuizOption === q.correctAnswer;
    
    if (isCorrect) {
      playSound("success");
      STATE.quizScore++;
      feedbackCard.className = "bg-emerald-50 border border-emerald-100 p-5 rounded-xl space-y-2";
      feedbackTitle.className = "text-sm font-bold text-emerald-800";
      feedbackTitle.textContent = "إجابة صحيحة متميزة!";
      feedbackExplanation.className = "text-xs text-emerald-700 leading-relaxed";
      feedbackIcon.className = "w-5 h-5 text-emerald-600";
      feedbackIcon.setAttribute("data-lucide", "check-circle");
    } else {
      playSound("error");
      feedbackCard.className = "bg-red-50 border border-red-100 p-5 rounded-xl space-y-2";
      feedbackTitle.className = "text-sm font-bold text-red-800";
      feedbackTitle.textContent = "للأسف، إجابة غير دقيقة.";
      feedbackExplanation.className = "text-xs text-red-700 leading-relaxed";
      feedbackIcon.className = "w-5 h-5 text-red-600";
      feedbackIcon.setAttribute("data-lucide", "x-circle");
    }
    
    feedbackExplanation.textContent = q.explanation;
    feedbackCard.classList.remove("hidden");
    lucide.createIcons();
    
    // Change action button state
    actionBtn.textContent = STATE.currentQuizIndex === 4 ? "عرض النتائج النهائية" : "السؤال التالي";
    
  } else {
    // STATE 2: Move Next Question or Finish
    if (STATE.currentQuizIndex === 4) {
      // Completed quiz
      finishQuiz();
    } else {
      STATE.currentQuizIndex++;
      loadQuestion(STATE.currentQuizIndex);
    }
  }
}

function finishQuiz() {
  if (STATE.quizTimerInterval) clearInterval(STATE.quizTimerInterval);
  playSound("victory");
  
  const playPanel = document.getElementById("quiz-play-panel");
  const resultsPanel = document.getElementById("quiz-results-panel");
  
  playPanel.classList.add("hidden");
  resultsPanel.classList.remove("hidden");
  
  // Set score text
  document.getElementById("quiz-result-score").textContent = `${STATE.quizScore}/5`;
  const pct = (STATE.quizScore / 5) * 100;
  document.getElementById("quiz-result-percentage").textContent = `${pct}%`;
  document.getElementById("quiz-result-ring").setAttribute("stroke-dasharray", `${pct}, 100`);
  
  // Dynamic header based on performance
  const headline = document.getElementById("quiz-result-headline");
  const subText = document.getElementById("quiz-result-sub");
  
  if (STATE.quizScore === 5) {
    headline.textContent = "درجة كاملة رائعة! بطل متقن!";
    subText.textContent = "لقد قمت بحل جميع الأسئلة بالشكل الصحيح تماماً، مما يثبت إلمامك التام بمهارات مستوى A1.";
    // Unlock perfect score badge
    checkAndUnlockBadge("quiz_champ");
  } else if (STATE.quizScore >= 3) {
    headline.textContent = "عمل رائع ومتميز!";
    subText.textContent = "لقد حققت أغلبية الإجابات الصحيحة. واصل التدرب لتصل إلى الإتقان التام في المرة القادمة.";
  } else {
    headline.textContent = "محاولة واعدة! لا تستسلم!";
    subText.textContent = "الأخطاء هي أفضل فرصة لنتعلم وننمو. واصل المذاكرة وتصفح الكلمات ثم أعد المحاولة مجدداً.";
  }
  
  // Save Stats
  STATE.totalQuizzes++;
  STATE.totalScoreSum += STATE.quizScore;
  localStorage.setItem("itqan_quizzes_count", STATE.totalQuizzes.toString());
  localStorage.setItem("itqan_score_sum", STATE.totalScoreSum.toString());
  
  // Check badge unlocks for quizzes completed
  if (STATE.totalQuizzes >= 1) checkAndUnlockBadge("persistent_learner");
  if (STATE.totalQuizzes >= 3) checkAndUnlockBadge("quiz_master");
}

function resetQuiz() {
  playSound("click");
  document.getElementById("quiz-results-panel").classList.add("hidden");
  document.getElementById("quiz-setup-panel").classList.remove("hidden");
}

// 11. TAB 4: ACHIEVEMENTS & DASHBOARD RENDERING
function renderStatsDashboard() {
  // General Stats
  document.getElementById("stats-streak").textContent = `يوم ${STATE.streak} متتالي`;
  document.getElementById("stats-total-words").textContent = `${STATE.learnedWords.size} من 500 كلمة`;
  document.getElementById("stats-total-quizzes").textContent = `${STATE.totalQuizzes} اختبار`;
  
  const avg = STATE.totalQuizzes > 0 ? Math.round((STATE.totalScoreSum / (STATE.totalQuizzes * 5)) * 100) : 0;
  document.getElementById("stats-avg-score").textContent = `${avg}% دقة`;
  
  // Breakdown by Categories
  const categoriesList = document.getElementById("stats-categories-list");
  const categories = [
    { key: "basics", name: "الأساسيات الأولية" },
    { key: "people", name: "الناس والروابط" },
    { key: "food", name: "الأكل والشراب" },
    { key: "home", name: "البيت والمدرسة" },
    { key: "actions", name: "الأفعال والحركة" },
    { key: "adjectives", name: "الصفات والألوان" },
    { key: "places", name: "الأماكن والسفر" },
    { key: "time", name: "الوقت والظروف" }
  ];
  
  categoriesList.innerHTML = categories.map(cat => {
    // Calculate category learned words vs total inside full dictionary
    const totalInCat = FULL_WORDS.filter(w => w.category === cat.key).length;
    const learnedInCat = FULL_WORDS.filter(w => w.category === cat.key && STATE.learnedWords.has(w.id)).length;
    const catPct = totalInCat > 0 ? Math.round((learnedInCat / totalInCat) * 100) : 0;
    
    return `
      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-xs font-bold text-gray-600">
          <span>${cat.name}</span>
          <span>${learnedInCat}/${totalInCat} (${catPct}%)</span>
        </div>
        <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full bg-itqan-500 rounded-full transition-all duration-300" style="width: ${catPct}%"></div>
        </div>
      </div>
    `;
  }).join("");
  
  // Render Badges
  renderBadgesGrid();
  
  // Learned words pills
  const pillsBox = document.getElementById("stats-learned-words-pills");
  const fallbackLabel = document.getElementById("stats-no-learned-words");
  
  if (STATE.learnedWords.size === 0) {
    pillsBox.innerHTML = "";
    fallbackLabel.classList.remove("hidden");
  } else {
    fallbackLabel.classList.add("hidden");
    const matchedWords = FULL_WORDS.filter(w => STATE.learnedWords.has(w.id));
    pillsBox.innerHTML = matchedWords.map(w => `
      <button onclick="speakWord('${w.word}')" class="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:border-itqan-500 hover:bg-white transition font-mono">
        <span>${w.word}</span>
        <span class="text-gray-400 font-normal">(${w.translation})</span>
      </button>
    `).join("");
  }
}

// Badges list definer
const BADGES_DATABASE = [
  {
    id: "welcome_badge",
    title: "البداية الواعدة",
    desc: "احفظ كلمتك الأولى لتبدأ رحلتك التفاعلية.",
    icon: "award",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "smart_reader",
    title: "القارئ الذكي",
    desc: "أكمل قراءة وتوليد أول قصة مخصصة بالذكاء الاصطناعي.",
    icon: "sparkles",
    color: "from-amber-400 to-amber-600"
  },
  {
    id: "persistent_learner",
    title: "المثابر الصبور",
    desc: "قم باجتياز أول اختبار تفاعلي في ساحة الاختبارات.",
    icon: "book-open",
    color: "from-emerald-400 to-emerald-600"
  },
  {
    id: "quiz_champ",
    title: "بطل الكلمات",
    desc: "أحرز علامة كاملة 5/5 في أي اختبار تفاعلي.",
    icon: "crown",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "word_pioneer",
    title: "الرائد الملتزم",
    desc: "احفظ 5 كلمات أو أكثر في مستودع المفردات الخاص بك.",
    icon: "shield",
    color: "from-sky-500 to-blue-600"
  },
  {
    id: "word_knight",
    title: "فارس الكلمات",
    desc: "احفظ 50 كلمة من الكلمات الإنجليزية بنجاح.",
    icon: "swords",
    color: "from-rose-500 to-red-600"
  }
];

function renderBadgesGrid() {
  const container = document.getElementById("badges-grid");
  const unlockedList = getUnlockedBadges();
  
  container.innerHTML = BADGES_DATABASE.map(badge => {
    const isUnlocked = unlockedList.includes(badge.id);
    return `
      <div class="badge-card bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-2 relative overflow-hidden ${isUnlocked ? '' : 'locked'}">
        <div class="bg-gradient-to-br ${badge.color} p-3.5 rounded-full text-white shadow-md relative">
          <i data-lucide="${badge.icon}" class="w-6 h-6"></i>
          ${isUnlocked ? '<span class="absolute -top-1 -right-1 bg-white rounded-full p-0.5 border border-itqan-500 text-itqan-600"><i data-lucide="check" class="w-2.5 h-2.5"></i></span>' : ''}
        </div>
        <h4 class="text-xs font-extrabold text-slate-800">${badge.title}</h4>
        <p class="text-[10px] text-gray-400 leading-relaxed max-w-[130px] mx-auto">${badge.desc}</p>
        ${!isUnlocked ? '<div class="absolute inset-0 bg-slate-950/5 flex items-center justify-center pointer-events-none rounded-xl"><i data-lucide="lock" class="w-4 h-4 text-gray-300"></i></div>' : ''}
      </div>
    `;
  }).join("");
  lucide.createIcons();
}

function getUnlockedBadges() {
  try {
    const saved = localStorage.getItem("itqan_unlocked_badges");
    return saved ? JSON.parse(saved) : ["welcome_badge"]; // Start with initial welcome badge unlocked!
  } catch (e) {
    return ["welcome_badge"];
  }
}

function checkAndUnlockBadge(badgeId) {
  const list = getUnlockedBadges();
  if (list.includes(badgeId)) return;
  
  list.push(badgeId);
  localStorage.setItem("itqan_unlocked_badges", JSON.stringify(list));
  
  // Show unlocked notification banner
  const badgeDetails = BADGES_DATABASE.find(b => b.id === badgeId);
  if (badgeDetails) {
    showToast(`لقد تم إلغاء قفل وسام جديد: "<strong>${badgeDetails.title}</strong>"! تفقد جدار الأوسمة.`, "info");
    
    const unlockedBanner = document.getElementById("badge-unlocked-banner");
    const unlockedText = document.getElementById("badge-unlocked-text");
    if (unlockedBanner && unlockedText) {
      unlockedText.innerHTML = `تم فتح وسام "<strong>${badgeDetails.title}</strong>" لتقدّمك الممتاز!`;
      unlockedBanner.classList.remove("hidden");
    }
  }
}

// 12. INITIALIZATION ON DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  // Sync state with localstorage
  loadStateFromStorage();
  
  // Injects baseline words and initial filter to trigger card loads
  filterWords();
  
  // Init Lucide
  lucide.createIcons();
  
  // Reset selected tray text counts
  document.getElementById("selected-story-words-count").textContent = `تم اختيار ${STATE.selectedStoryWords.size} كلمات للقصة`;
  
  // Trigger general counts on load
  saveLearnedWordsToStorage();
});
