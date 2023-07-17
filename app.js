const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const comments = {
  1: [
    { name: 'Victoria', comment: 'Wonderful country! Very beautiful!', avatar: '2' },
    { name: 'Martin', comment: "And I didn't like it. It was boring.", avatar: '4' },
  ],
  2: [
    { name: 'Victoria', comment: 'Wonderful country! Very beautiful!', avatar: '2' },
    { name: 'Martin', comment: "And I didn't like it. It was boring.", avatar: '4' },
  ],
  3: [
    { name: 'Victoria', comment: 'Wonderful country! Very beautiful!', avatar: '2' },
    { name: 'Martin', comment: "And I didn't like it. It was boring.", avatar: '4' },
  ],
  4: [
    { name: 'Victoria', comment: 'Wonderful country! Very beautiful!', avatar: '2' },
    { name: 'Martin', comment: "And I didn't like it. It was boring.", avatar: '4' },
  ],
  5: [
    { name: 'Victoria', comment: 'Wonderful country! Very beautiful!', avatar: '2' },
    { name: 'Martin', comment: "And I didn't like it. It was boring.", avatar: '4' },
  ],
};

const countries = {
  1: {
    ru: {
      name: 'Австралия',
      nameEN: 'australia',
      langCode: 'en',
      capital: 'Канберра',
      animalName: 'Кенгуру',
      language: 'английский',
      cities: [
        { city: 'Сидней', coordinates: '-33.8688, 151.2093' },
        { city: 'Мельбурн', coordinates: '-37.8136, 144.9631' },
        { city: 'Брисбен', coordinates: '-27.4705, 153.0260' },
        { city: 'Перт', coordinates: '-31.9523, 115.8613' },
        { city: 'Аделаида', coordinates: '-34.9285, 138.6007' },
      ],
      places: [
        {
          name: 'Большой Барьерный риф',
          location: 'Коралловое море',
          description: `Одним из главных направлений для подводных исследователей и аквалангистов является крупнейшая в мире система барьерных рифов, известная как Большой Барьерный риф. Расположенный в Коралловом море Большой Барьерный риф охватывает огромную территорию, состоящую из более чем 2900 коралловых рифов и сотен островов и рифов. Лучший способ исследовать риф — отправиться в один из многочисленных лодочных круизов, курсирующих вдоль северного побережья Квинсленда. Город Кэрнс считается главными воротами на Риф, но и другие города также предлагают круизы.`,
        },
        {
          name: 'Сиднейский оперный театр',
          location: 'Сидней',
          description: `Сиднейский оперный театр, считающийся архитектурным шедевром 20-го века, был спроектирован и построен архитектором Йорном Утзоном, чтобы отразить образ огромного парусного корабля. В нем есть несколько площадок, на которых ежегодно проводится более 1500 представлений. Знаменитый Оперный театр в Сиднее, окруженный красивыми пейзажами Сиднейской гавани и Королевского ботанического сада, является одной из самых известных достопримечательностей Австралии.`,
        },
        {
          name: 'Острова Уитсанди',
          location: '75 островов у берегов Квинсленда',
          description: `Острова Уитсанди - группа из 75 островов у побережья Квинсленда. Посещая Большой Барьерный риф, вы должны провести здесь некоторое время. Эти острова расположены прямо в его сердце! Прекрасные белые песчаные пляжи, плавно переливающиеся бирюзовой водой.`,
        },
        {
          name: 'Мельбурнский музей',
          location: 'Мельбурн',
          description: `Мельбурнский музей - отличное место, чтобы узнать больше об истории Австралии и аборигенах. Есть множество экспонатов, посвященных социальным, научным и экологическим аспектам австралийской истории. Коллекция динозавров и насекомых является обязательной для посещения и любимой детьми.`,
        },
        {
          name: 'Голубые горы',
          location: 'Новый Южный Уэльс',
          description: `Расположенные всего в 50 км (32 милях) от Сиднея Голубые горы являются еще одним известным видом, привлекающим многочисленных посетителей. Три сестры — самый знаковый вид на Голубые горы. Со смотровой площадки Эхо-Пойнт открывается впечатляющий вид на трех сестер с видом на долину Джеймисон.`,
        },
      ],
      phrases: ['Привет! Как дела?', 'Подскажите, пожалуйста, как пройти на пляж?', 'Где можно посмотреть на кенгуру?', 'О мой Бог! Какой огромный паук!', 'Подскажите, я могу здесь искупаться?'],
    },
    en: {
      name: 'Australia',
      nameEN: 'australia',
      langCode: 'en',
      capital: 'Canberra',
      animalName: 'Kenguru',
      language: 'english',
      cities: [
        { city: 'Sydney', coordinates: '-33.8688, 151.2093' },
        { city: 'Melbourne', coordinates: '-37.8136, 144.9631' },
        { city: 'Brisbane', coordinates: '-27.4705, 153.0260' },
        { city: 'Perth', coordinates: '-31.9523, 115.8613' },
        { city: 'Adelaide', coordinates: '-34.9285, 138.6007' },
      ],
      places: [
        {
          name: 'Great Barrier Reef',
          location: 'Coral Sea',
          description: `One of the top destinations for underwater explorers and scuba divers is the world’s largest barrier reef system, famously known as the Great Barrier Reef. Located in the Coral Sea, the Great Barrier Reef encompasses a huge area of more than 2,900 coral reefs and hundreds of islands and cays. The best way to explore the Reef is by one of the numerous boat cruises that run along the northern coast of Queensland. The town of Cairns is regarded as the main gateway to the Reef, but other towns also offer cruise operations.`,
        },
        {
          name: 'Sydney Opera House',
          location: 'Sydney',
          description: `Regarded as a 20th century architectural masterpiece, the Sydney Opera House was designed and built by architect, Jorn Utzon, to reflect the image of a huge sailing ship. It houses multiple venues that together host more than 1,500 performances each year. Surrounded by the beautiful scenery of the Sydney Harbour and the Royal Botanic Gardens, the famous Opera House in Sydney is one of Australia’s most famous landmarks.`,
        },
        {
          name: 'Whitsundays Islands',
          location: '75 islands off the coast of Queensland',
          description: `The Whitsundays are a group of 75 islands off the coast of Queensland. When visiting the Great Barrier Reef, you must spend some time here. These islands are located right in the heart of it! Beautiful white sandy beaches, swirl effortlessly with the turquoise water.`,
        },
        {
          name: 'Melbourne Museum',
          location: 'Melbourne',
          description: `The Melbourne museum is a great place to learn more about Australian history and the Aboriginal people. There are plenty of exhibits on social, scientific, and environmental aspects of Australian history. The dinosaur and insect collection is a must-see here and a favorite among children.`,
        },
        {
          name: 'Blue Mountains',
          location: 'New South Wales',
          description: `Located just 50km (32 miles) from Sydney, the Blue Mountains are another famous view that attracts numerous visitors. The Three Sisters are the most iconic view of the Blue Mountains. Echo Point lookout offers an impressive view of the three sisters overlooking the Jamison Valley.`,
        },
      ],
      phrases: ['Hey! How are you?', 'Can you tell please how to go to the beach?', 'Where can i see kangaroos?', 'Oh my God! What a huge spider!', 'Tell me, can I swim here?'],
    },
    be: {
      name: 'Аўстралія',
      nameEN: 'australia',
      langCode: 'en',
      capital: 'Канбера',
      animalName: 'Кенгуру',
      language: 'англійская',
      cities: [
        { city: 'Сіднэй', coordinates: '-33.8688, 151.2093' },
        { city: 'Мэльбурн', coordinates: '-37.8136, 144.9631' },
        { city: 'Брысбэн', coordinates: '-27.4705, 153.0260' },
        { city: 'Пэрт', coordinates: '-31.9523, 115.8613' },
        { city: 'Аделаида', coordinates: '-34.9285, 138.6007' },
      ],
      places: [
        {
          name: "Вялікі Бар'ерны рыф",
          location: 'Каралавае мора',
          description: `Адным з галоўных напрамкаў для падводных даследчыкаў і аквалангістаў з'яўляецца найбуйнейшая ў свеце сістэма бар'ерных рыфаў, вядомая як Вялікі Бар'ерны рыф. Размешчаны ў Каралавым моры Вялікі Бар'ерны рыф ахоплівае велізарную тэрыторыю, якая складаецца з больш за 2900 каралавых рыфаў і сотняў выспаў і рыфаў. Лепшы спосаб даследаваць рыф - адправіцца ў адзін з шматлікіх лодачных круізаў, якія курсуюць уздоўж паўночнага ўзбярэжжа Квінсленда. Горад Кэрнс лічыцца галоўнымі варотамі на Рыф, але і іншыя гарады таксама прапануюць круізы.`,
        },
        {
          name: 'Сіднэйскі оперны тэатр',
          location: 'Сіднэй',
          description: `Сіднэйскі оперны тэатр, які лічыцца архітэктурным шэдэўрам 20-га стагоддзя, быў спраектаваны і пабудаваны архітэктарам Йорнам Утзонам, каб адлюстраваць вобраз вялізнага ветразнага карабля. У ім ёсць некалькі пляцовак, на якіх штогод праводзіцца больш за 1500 уяўленняў. Знакаміты Оперны тэатр у Сіднэі, акружаны прыгожымі краявідамі Сіднэйскай гавані і Каралеўскага батанічнага саду, з'яўляецца адной з самых вядомых славутасцяў Аўстраліі.`,
        },
        {
          name: 'Астравы Уітсандэйс',
          location: '75 астравоў ля берагоў Квінсленда',
          description: `Астравы Уітсандзі - група з 75 астравоў ля ўзбярэжжа Квінсленда. Наведваючы Вялікі Бар'ерны рыф, вы павінны правесці тут некаторы час. Гэтыя астравы размешчаны ў самым яго сэрцы! Выдатныя белыя пясчаныя пляжы, плыўна пераліваюцца бірузовай вадой.`,
        },
        {
          name: 'Мэльбурнскі музей',
          location: 'Мэльбурн',
          description: `Мэльбурнскі музей - выдатнае месца, каб даведацца больш пра гісторыю Аўстраліі і першабытнікаў. Ёсць мноства экспанатаў, прысвечаных сацыяльным, навуковым і экалагічным аспектам аўстралійскай гісторыі. Калекцыя дыназаўраў і казурак з'яўляецца абавязковай для наведвання і каханай дзецьмі.`,
        },
        {
          name: 'Блакітныя горы',
          location: 'Новы Паўднёвы Уэльс',
          description: `Размешчаныя ўсяго ў 50 км (32 мілях) ад Сіднэя Блакітныя горы з'яўляюцца яшчэ адным вядомым краявiдам, які прываблівае шматлікіх наведвальнікаў. Тры сястры - самы знакавы від на Блакітныя горы. З назіральнай пляцоўкі Рэха-Пойнт адкрываецца ўражлівы від на трох сясцёр з відам на даліну Джэймісан.`,
        },
      ],
      phrases: ['Прывітанне! Як справы?', 'Падкажыце, калі ласка, як прайсці на пляж?', 'Дзе можна паглядзець на кенгуру?', 'О мой Божа! Які вялізны павук!', 'Падкажыце, я магу тут выкупацца?'],
    },
  },
  2: {
    ru: {
      name: 'Бразилия',
      nameEN: 'brazil',
      langCode: 'pt',
      capital: 'Бразилиа',
      animalName: 'Пятнистый ягуар',
      language: 'португальский',
      cities: [
        { city: 'Сан-Паулу', coordinates: '-23.5558, -46.6396' },
        { city: 'Рио де Жанейро', coordinates: '-22.9068, -43.1729' },
        { city: 'Бразилиа', coordinates: '-15.7975, -47.8919' },
        { city: 'Сальвадор', coordinates: '-12.9777, -38.5016' },
        { city: 'Форталеза', coordinates: '-3.7327, -38.5270' },
      ],
      places: [
        {
          name: 'Христос Искупитель',
          location: 'Рио де Жанейро',
          description: `С раскинутыми на 28 метров руками, словно обнимая все человечество, колоссальная статуя Христа в стиле ар-деко, названная Cristo Redentor (Христос-Искупитель),
           смотрит на Рио-де-Жанейро и залив с вершины Корковадо.`,
        },
        {
          name: 'Водопады Игуасу',
          location: 'Лас-Катаратас-дель-Игуасу',
          description: `В месте, где встречаются Бразилия, Парагвай и Аргентина, река Игуасу эффектно обрывается полукругом из 247 водопадов,
           которые с грохотом низвергаются в ущелье внизу. Прямо над водопадом река сужается до одной четверти своей обычной ширины, что делает силу воды еще сильнее.`,
        },
        {
          name: 'Копакабана',
          location: 'Рио де Жанейро',
          description: `Самый модный и известный район Рио-де-Жанейро следует за Авенида Носа-Сеньора-де-Копакабана и с одной стороны окаймлен четырьмя километрами белого песка и волнами прибоя.
           Пляж отделен от зданий и движения широкой набережной, вымощенной черно-белой мозаикой волнистым узором, напоминающим улицы Лиссабона в Португалии.`,
        },
        {
          name: 'Карнавал',
          location: 'Рио де Жанейро',
          description: `Немногие шоу могут сравниться с феерией перед простыым карнавалом в Рио по цвету, звуку, действию и изобилию. Не заблуждайтесь, это не просто очередная шумная уличная вечеринка,
           а тщательно спланированное зрелище, где зрители могут наблюдать за парадами соревнующихся танцоров самбы со специально построенного стадиона, спроектированного не кем иным,
            как самым известным архитектором Бразилии Оскаром Нимейером.`,
        },
        {
          name: 'Музей Завтрашнего Дня',
          location: 'Рио де Жанейро',
          description: `Футуристическая архитектура Музея завтрашнего дня в Рио-де-Жанейро дает представление о его содержании.
           Наводящие на размышления экспонаты приглашают посетителей задуматься о том, каким может быть мир в будущем, исследуя сценарии того,
            как наша планета может измениться в следующие полвека.`,
        },
      ],
      phrases: ['Привет! Как дела?', 'Я обожаю карнавал!', 'Увидимся в следующий раз!', 'Могу я чего нибудь выпить?', 'Ты преувеличиваешь'],
    },
    en: {
      name: 'Brazil',
      nameEN: 'brazil',
      langCode: 'pt',
      capital: 'Brasília',
      animalName: 'Jaguar',
      language: 'portuguese',
      cities: [
        { city: 'São Paulo', coordinates: '-23.5558, -46.6396' },
        { city: 'Rio de Janeiro', coordinates: '-22.9068, -43.1729' },
        { city: 'Brasília', coordinates: '-15.7975, -47.8919' },
        { city: 'Salvador', coordinates: '-12.9777, -38.5016' },
        { city: 'Fortaleza', coordinates: '-3.7327, -38.5270' },
      ],
      places: [
        {
          name: 'Cristo Redentor',
          location: 'Rio de Janeiro',
          description: `With arms outstretched 28 meters, as if to encompass all of humanity, the colossal Art Deco statue of Christ, called Cristo Redentor (Christ the Redeemer), gazes out over Rio de Janeiro and the bay from the summit of Corcovado.`,
        },
        {
          name: 'Iguaçu Falls',
          location: 'Las Cataratas del Iguazú',
          description: `At the point where Brazil, Paraguay, and Argentina meet, the Iguaçu river drops spectacularly in a semicircle of 247 waterfalls that thunder down into the gorge below. Just above the falls, the river is constricted to one-fourth of its usual width, making the force of the water even stronger.`,
        },
        {
          name: 'Copacabana',
          location: 'Rio de Janeiro',
          description: `Downtown Rio's most fashionable and famous section follows Avenida Nossa Senhora de Copacabana and is bordered all along one side by four kilometers of white sand and breaking surf. The beach is separated from the buildings and traffic by a broad promenade paved in black and white mosaic in an undulating pattern reminiscent of streets in Lisbon, Portugal.`,
        },
        {
          name: 'Carnaval',
          location: 'Rio de Janeiro',
          description: `Few shows match Rio's pre-Lenten Carnaval (Carnival) extravaganza for color, sound, action, and exuberance. Make no mistake, this is not just another rowdy street party, but a carefully staged showpiece, where spectators can watch the parades of competing samba dancers from a purpose-built stadium designed by none other than Brazil's best-known architect, Oscar Niemeyer.`,
        },
        {
          name: 'Museu do Amanhã',
          location: 'Rio de Janeiro',
          description: `The futuristic architecture of the Museum of Tomorrow in Rio de Janeiro gives a clue about its contents. Thought-provoking exhibits invite visitors to think what the world might be like in the future, exploring scenarios of how our planet may change in the next half century.`,
        },
      ],
      phrases: ['Hey! How are you?', 'I love carnival!', 'See you next time! ', 'Can I have a drink?', ' You are just making a storm in a glass of water'],
    },
    be: {
      name: 'Бразілія',
      nameEN: 'brazil',
      langCode: 'pt',
      capital: 'Бразіліа',
      animalName: 'Ягуар',
      language: 'партугальская',
      cities: [
        { city: 'Сан-Паулу', coordinates: '-23.5558, -46.6396' },
        { city: 'Рыо дэ Жанэйра', coordinates: '-22.9068, -43.1729' },
        { city: 'Бразіліа', coordinates: '-15.7975, -47.8919' },
        { city: 'Сальвадор', coordinates: '-12.9777, -38.5016' },
        { city: 'Фарталёза', coordinates: '-3.7327, -38.5270' },
      ],
      places: [
        {
          name: 'Крыста Рэдэнтар',
          location: 'Рыо дэ Жанэйра',
          description: `З раскінутымі на 28 метраў рукамі, нібы абдымаючы ўсё чалавецтва, каласальная статуя Хрыста ў стылі ар-дэка, названая Cristo Redentor (Хрыстос-Збавіцель), глядзіць на Рыа-дэ-Жанейра і заліў з вяршыні Каркавада.`,
        },
        {
          name: 'Вадаспады Ігуасу',
          location: 'Лас-Катаратас-дэль-Ігуасу',
          description: `У месцы, дзе сустракаюцца Бразілія, Парагвай і Аргенціна, рака Ігуасу эфектна абрываецца паўкругам з 247 вадаспадаў, якія з грукатам падаюць у цясніну ўнізе. Прама над вадаспадам рака звужаецца да адной чвэрці сваёй звычайнай шырыні, што робіць сілу вады яшчэ мацнейшай.`,
        },
        {
          name: 'Капакабана',
          location: 'Рыо дэ Жанэйра',
          description: `Самы модны і вядомы раён Рыа-дэ-Жанейра ідзе за Авэніда Носа-Сеньёра-дэ-Капакабана і з аднаго боку абрамлены чатырма кіламетрамі белага пяску і хвалямі прыбоя. Пляж аддзелены ад будынкаў і рухі шырокай набярэжнай, выбрукаванай чорна-белай мазаікай хвалістым узорам, якія нагадваюць вуліцы Лісабона, Партугалія.`,
        },
        {
          name: 'Карнавал',
          location: 'Рыо дэ Жанэйра',
          description: `Нямногія шоу могуць параўнацца з феерыяй перад перадпостным Карнавалам (карнавалам) у Рыа па колеры, гуку, дзеянню і багаццю. Не памыляйцеся, гэта не проста чарговая шумная вулічная вечарынка, а старанна спланаванае відовішча, дзе гледачы могуць назіраць за парадамі танцораў самбы, якія спаборнічаюць, са спецыяльна пабудаванага стадыёна, спраектаванага не кім іншым, як самым вядомым архітэктарам Бразіліі Оскарам Німеерам.`,
        },
        {
          name: 'Музей заўтрашняга дня',
          location: 'Рио де Жанейро',
          description: `Футурыстычная архітэктура Музея заўтрашняга дня ў Рыа-дэ-Жанейра дае ўяўленне аб яго змесце. Навадныя на разважанні экспанаты запрашаюць наведвальнікаў задумацца аб тым, якім можа быць свет у будучыні, даследуючы сцэнары таго, як наша планета можа змяніцца ў наступныя паўстагоддзя.`,
        },
      ],
      phrases: ['Прывітанне! Як справы?', 'Я ўлюблёны ў Карнавал!', 'Ўбачымся ў наступны раз!', 'Магу я чаго-небудзь выпіць?', 'Ты робiш з камара каня'],
    },
  },
  3: {
    ru: {
      name: 'Китай',
      nameEN: 'china',
      langCode: 'zh',
      capital: 'Пекин',
      animalName: 'Панда',
      language: 'китайский традиционный',
      cities: [
        { city: 'Шанхай', coordinates: '31.2304, 121.4737' },
        { city: 'Пекин', coordinates: '39.9042, 116.4074' },
        { city: 'Гуанчжоу', coordinates: '23.1291, 113.2644' },
        { city: 'Шэньчжэнь', coordinates: '22.5429, 114.0596' },
        { city: 'Чэнду', coordinates: '30.656552, 104.071127' },
      ],
      places: [
        {
          name: 'Великая стена',
          location: 'Район Хуайжоу',
          description: `Великая Китайская стена - это серия укреплений, которые были построены на исторических северных границах
           древних китайских государств и Императорского Китая для защиты от различных кочевых групп из Евразийской степи.
            Несколько стен были построены еще в 7 веке до нашей эры, а отдельные участки позже были присоединены Цинь Шихуанди
             (220-206 до н.э.), первым императором Китая. От стены Цинь мало что осталось. Позже многие, сменявшие друг друга династии
             ,построили и поддерживали многочисленные участки пограничных стен. Наиболее известные участки стены были построены во времена
              династии Мин (1368-1644).`,
        },
        {
          name: 'Терракотовая армия',
          location: 'Шэньси',
          description: `Терракотовая армия представляет собой коллекцию терракотовых скульптур, изображающих армии Цинь Шихуанди,
          первого император Китая. Это форма погребального искусства, захороненная вместе с императором в 210–209 гг. До н.э. с целью
          защиты императора в его загробной жизни.`,
        },
        {
          name: 'Национальный парк Даочэнг Ядин',
          location: 'Сычуань, Тибетский автономный округ Гарзе, уезд Даочэн',
          description: `Заповедник Даочэн Ядин называют «последней чистой землей на земле» и «последней Шангри-Ла» из-за захватывающих дух природных пейзажей.`,
        },
        {
          name: 'Шанхайский музей науки и техники',
          location: 'Шанхай',
          description: `В соответствии со своим статусом города мирового класса, Шанхай не лишен своей доли первоклассных музеев.
            Помимо великолепного Шанхайского музея, в городе находится огромный Шанхайский музей науки и техники,
            крупнейший в своем роде в Китае и один из самых привлекательных в городе, который ежегодно посещают более двух миллионов человек.`,
        },
        {
          name: 'Монастырь Десяти тысяч Буддy',
          location: 'Гонконг',
          description: `Монастырь Десяти тысяч Будд содержит чуть менее 13 000 Будд в монастыре.
            Посетители, несомненно, будут впечатлены его богатством удивительных достопримечательностей.
            Путь к буддийскому храму, завершенный в 1957 году, просто потрясающий.
            На пути стоят 500 золотых Будд в натуральную величину. На вершине девятиярусная пагода и храм.
            Так же восхитительно бродить вокруг, так как куда ни глянь, можно найти еще больше Будд.`,
        },
      ],
      phrases: ['Привет! Как дела?', 'Приятно познакомиться!', 'Как я могу дойти до великой китайской стены?', 'Пожалуйста, повторите.', 'Извините, я могу это потрогать?'],
    },
    en: {
      name: 'China',
      nameEN: 'china',
      langCode: 'zh',
      capital: 'Beijing',
      animalName: 'Panda',
      language: 'chinese traditional',
      cities: [
        { city: 'Shanghai', coordinates: '31.2304, 121.4737' },
        { city: 'Beijing', coordinates: '39.9042, 116.4074' },
        { city: 'Guangzhou', coordinates: '23.1291, 113.2644' },
        { city: 'Shenzhen', coordinates: '22.5429, 114.0596' },
        { city: 'Chengdu', coordinates: '30.656552, 104.071127' },
      ],
      places: [
        {
          name: 'Great Wall',
          location: 'Huairou District',
          description: `The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty (1368–1644).`,
        },
        {
          name: 'Terracotta Army',
          location: 'Shaanxi',
          description: `The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, 
            the first emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE with the purpose 
            of protecting the emperor in his afterlife.`,
        },
        {
          name: 'Daocheng Yading Nature Reserve',
          location: 'Sichuan, Garzê Tibetan Autonomous Prefecture, Daocheng County',
          description: `Daocheng Yading Nature Reserve is called the "the last pure land on earth" and "the last Shangri-La" due to its breathtaking natural scenery.`,
        },
        {
          name: 'Shanghai Science and Technology Museum',
          location: 'Shanghai',
          description: `In keeping with its status as a world-class city, Shanghai is not without its fair share of top-notch museums. 
            In addition to the splendid Shanghai Museum, the city is home to the huge Shanghai Science and Technology Museum, 
            the largest of its kind in China and one of the city's top draws with more than two million visitors each year.`,
        },
        {
          name: 'Ten Thousand Buddhas Monastery',
          location: 'Hong Kong',
          description: `With just under 13,000 Buddha’s contained within the monastery, the Ten Thousand Buddhas Monastery sells itself slightly short, 
            although visitors will surely come away impressed with its wealth of amazing places.
            Completed in 1957, the path up to the Buddhist temple is absolutely stunning to walk along; 
            500 life-sized golden Buddha’s line the way. At the top, the nine-tier pagoda and temple 
            are just as delightful to wander around as even more Buddhas can be found everywhere you look.`,
        },
      ],
      phrases: ['Hey! How are you?', 'Nice to meet you!', 'How can I get to the Great Wall of China?', 'Please repeat that.', 'Excuse me, can I touch this?'],
    },
    be: {
      name: 'Кітай',
      nameEN: 'china',
      langCode: 'zh',
      capital: 'Пекін',
      animalName: 'Панда',
      language: 'кітайскі традыцыйны',
      cities: [
        { city: 'Шанхай', coordinates: '31.2304, 121.4737' },
        { city: 'Пекін', coordinates: '39.9042, 116.4074' },
        { city: 'Гуанчжоу', coordinates: '23.1291, 113.2644' },
        { city: 'Шэньчжэнь', coordinates: '22.5429, 114.0596' },
        { city: 'Чэнду', coordinates: '30.656552, 104.071127' },
      ],
      places: [
        {
          name: 'Вялікая сцяна',
          location: 'Раён Хуайжоў',
          description: `Вялікая Кітайская сцяна-гэта серыя ўмацаванняў, якія былі пабудаваны на гістарычных паўночных межах старажытных кітайскіх дзяржаў і імператарскага Кітая для абароны ад розных качавых груп з Еўразійскай стэпе. Некалькі сцен былі пабудаваныя яшчэ ў 7 стагоддзі да нашай эры, а асобныя ўчасткі пазней былі далучаны Цынь Шихуанди (220-206 да н.э.), першым імператарам Кітая. Ад сцяны Цынь мала што засталося. Пазней многія якія змянялі адзін аднаго дынастыі пабудавалі і падтрымлівалі шматлікія ўчасткі памежных сцен. Найбольш вядомыя ўчасткі сцены былі пабудаваныя ў часы дынастыі Мін (1368-1644).`,
        },
        {
          name: 'Тэракотавае войска',
          location: 'Шэньсі',
          description: `Тэракотавае войска ўяўляе сабой калекцыю тэракотавых скульптур, якія адлюстроўваюць арміі Цынь Шыхуандзі першага iмператара Кiтая. Гэта форма пахавальнага мастацтва, пахаваная разам з імператарам у 210–209 гг. Да н.э. з мэтай абароны імператара ў яго замагільнага жыцця.`,
        },
        {
          name: 'Нацыянальны парк Даачэнг Ядзін',
          location: 'Сычуань, Тыбецкая аўтаномная акруга Гарзэ, павет Даачэн',
          description: `Запаведнік Даочэн Ядзін называюць "апошняй чыстай зямлёй на зямлі" і "апошняй Шангры-Ла" з-за захапляльных дух прыродных пейзажаў.`,
        },
        {
          name: 'Шанхайскі музей навукі і тэхнікі',
          location: 'Шанхай',
          description: `У адпаведнасці са сваім статутам горада сусветнага класа, Шанхай не пазбаўлены сваёй дзелі першакласных музеяў. Акрамя цудоўнага Шанхайскага музея, у горадзе знаходзіцца вялізны Шанхайскі музей навукі і тэхнікі, найбуйнейшы ў сваім родзе ў Кітаі і адзін з самых прывабных у горадзе, які штогод наведваюць больш за два мільёны чалавек.`,
        },
        {
          name: 'Манастыр Дзесяці тысяч Буды',
          location: 'Ганконг',
          description: `Манастыр Дзесяці тысяч будаў змяшчае крыху менш за 13 000 статуй Буды, кошт манастыра дзесяці тысяч Буды трохі ніжэй хоць наведвальнікі, несумненна, будуць уражаныя яго багаццем дзіўных славутасцяў. Завершаная ў 1957 годзе сцяжынка, вядучая да будыйскага храма, зусім ўзрушаючая для прагулак;
          500 залатых Буды ў натуральную велічыню выстройваюцца ў лінію. На вяршыні знаходзіцца девятиярусная пагада і храм, па якіх гэтак жа прыемна блукаць, паколькі паўсюль, куды ні глянь, можна знайсці яшчэ больш Буды.`,
        },
      ],
      phrases: ['Прывітанне! Як справы?', 'Прыемна пазнаёміцца!', 'Як я магу дайсці да вялікай кітайскай сцяны?', 'Калі ласка, паспрабуйце.', 'Выбачыце, я магу гэта пакратаць?'],
    },
  },
  4: {
    ru: {
      name: 'Россия',
      nameEN: 'russia',
      langCode: 'ru',
      capital: 'Москва',
      animalName: 'Медведь',
      language: 'русский',
      cities: [
        { city: 'Москва', coordinates: '55.7522, 37.6156' },
        { city: 'Санкт-Петербург', coordinates: '59.923463, 30.343425' },
        { city: 'Новосибирск', coordinates: '54.989599, 82.892410' },
        { city: 'Екатеренбург', coordinates: '56.834953, 60.613010' },
        { city: 'Нижний Новгород', coordinates: '56.327991, 43.985904' },
      ],
      places: [
        {
          name: 'Озеро Байкал',
          location: 'Республика Бурятия',
          description: `Озеро тектонического происхождения в южной части Восточной Сибири,
          самое глубокое озеро на планете, крупнейший природный резервуар пресной воды и
          самое большое пресноводное озеро по площади на континенте.`,
        },
        {
          name: 'Эрмитаж',
          location: 'Санкт-Петербург',
          description: `Русский музейный комплекс мирового значения, первые здания которого были
          заложенны при императрице Елизавете в 1764 году. До сих пор элегантность и гениальность
          Эрмитажа восхищают многих современных специалистов.`,
        },
        {
          name: 'Эльбрус',
          location: 'Северный Кавказ',
          description: `5642 метра — это высота горы Эльбрус — самой высокой горы России.
            Эльбрус считается потухшим вулканом, но, согласно последним исследованиям, вполне возможно,
            что в ближайшие несколько тысяч лет он снова проснется и покажет миру свою силу. Сегодня Эльбрус один
            из самых популярных горнолыжных курортов России, Мекка для сноубордистов, фрирайдеров и альпинистов.`,
        },
        {
          name: 'Долина гейзеров',
          location: 'Полуостров Камчатка',
          description: `Долина гейзеров — одно из крупнейших гейзерных полей в мире. Долина была
          открыт в 1941 году и долгие годы была одной из самых популярных достопримечательностей Камчатки.
          Там вы найдете уникальные, захватывающие дух виды.`,
        },
        {
          name: 'Озеро Эльтон',
          location: 'Волгоградская область',
          description: `Соленое озеро Эльтон занимает первое место по величине среди минеральных озер Европы. Вода в
          озеро представляет собой насыщенный солевой раствор, и благодаря эльтонским водорослям имеет красноватый оттенок.
          Под солевыми отложениями скрыт слой минеральной сероводородной грязи, которая используется в лечебных целях.`,
        },
      ],
      phrases: ['Привет! Как дела?', 'Мне нравится Ваша страна! Здесь красиво!', 'Не могли бы вы мне помочь?', 'Я голоден.', 'Извините, я не пью водку.'],
    },
    en: {
      name: 'Russia',
      nameEN: 'russia',
      langCode: 'ru',
      capital: 'Moscow',
      animalName: 'Bear',
      language: 'russian',
      cities: [
        { city: 'Moscow', coordinates: '55.7522, 37.6156' },
        { city: 'St. Petersburg', coordinates: '59.923463, 30.343425' },
        { city: 'Novosibirsk', coordinates: '54.989599, 82.892410' },
        { city: 'Yekaterinburg', coordinates: '56.834953, 60.613010' },
        { city: 'Nizhny Novgorod', coordinates: '56.327991, 43.985904' },
      ],
      places: [
        {
          name: 'Lake Baikal',
          location: 'The Republic of Buryatia',
          description: `A lake of tectonic origin in the southern part of Eastern Siberia,
                    the deepest lake on the planet, the largest natural reservoir of fresh water and
                    the largest freshwater lake in terms of area on the continent.`,
        },
        {
          name: 'Hermitage Museum',
          location: 'St. Petersburg',
          description: `Russian museum complex of world importance, the first buildings of which were
                      laid under the Empress Elizabeth. Until now, the elegance and genius of the
                      Hermitage delight many modern experts.`,
        },
        {
          name: 'Elbrus',
          location: 'North Caucasus',
          description: `5642 meters is the height of Mount Elbrus, the highest mountain in Russia.
            Elbrus is considered an extinct volcano, but, according to recent studies, it is quite
            possible that in the next few thousand years it will wake up again and show its strength to the world.
              Today Elbrus is one of the most popular ski resorts in Russia, a Mecca for snowboarders, freeriders and climbers.`,
        },
        {
          name: 'Valley of Geysers',
          location: 'Peninsula Kamchatka',
          description: `The Valley of Geysers is one of the largest geyser fields in the world. The valley was 
                        discovered in 1941, and for many years it was one of the most popular attractions in Kamchatka.
                        There you will find unique breathtaking views.`,
        },
        {
          name: 'Lake Elton',
          location: 'Volgograd region',
          description: `Salt Lake Elton ranks first in size among mineral lakes in Europe. The water in the
                        lake is a saturated saline solution, and thanks to the Elton algae, it has a reddish tint.
                        Hidden under the salt deposits is a layer of mineral hydrogen sulfide mud, which is used for medicinal purposes.`,
        },
      ],
      phrases: ['Hey! How are you?', "I like your country, it's beautiful here!", 'Can you help me, please?', "I'm hungry.", "Sorry, I don't drink vodka."],
    },
    be: {
      name: 'Расія',
      nameEN: 'russia',
      langCode: 'ru',
      capital: 'Масква',
      animalName: 'Мядзведзь',
      language: 'руская',
      cities: [
        { city: 'Масква', coordinates: '55.7522, 37.6156' },
        { city: 'Санкт-Пецярбург', coordinates: '59.923463, 30.343425' },
        { city: 'Новасібірск', coordinates: '54.989599, 82.892410' },
        { city: 'Екацярынбург', coordinates: '56.834953, 60.613010' },
        { city: 'Ніжні Ноўгарад', coordinates: '56.327991, 43.985904' },
      ],
      places: [
        {
          name: 'Возера Байкал',
          location: 'Рэспубліка Буратыя',
          description: `Возера тэктанічнага паходжання ў паўднёвай частцы Усходняй Сібіры, самае глыбокае возера на планеце, найбуйнейшы прыродны рэзервуар прэснай вады і самае вялікае прэснаводнае возера па плошчы на кантыненце.`,
        },
        {
          name: 'Эрмітаж',
          location: 'Санкт-Пецярбург',
          description: `Рускі музейны комплекс сусветнага значэння, першыя будынкі якога былі закладзены пры імператрыцы Лізавеце ў 1764 годзе. Да гэтага часу элегантнасць і геніяльнасць Эрмітажа захапляюць шматлікіх сучасных адмыслоўцаў.`,
        },
        {
          name: 'Эльбрус',
          location: 'Паўночны Каўказ',
          description: `5642 метры - гэта вышыня гары Эльбрус - самай высокай гары Расіі. Эльбрус лічыцца патухлым вулканам, але, паводле апошніх даследаванняў, цалкам магчыма, што ў бліжэйшыя некалькі тысяч гадоў ён зноў прачнецца і пакажа свету сваю сілу. Сёння Эльбрус адзін з самых папулярных гарналыжных курортаў Расіі, Мека для сноўбардыстаў, фрырайдэраў і альпіністаў.`,
        },
        {
          name: 'Даліна гейзераў',
          location: 'Паўвостраў Камчатка',
          description: `Даліна гейзераў - адно з найбуйнейшых гейзерных палёў у свеце. Даліна была адкрыты ў 1941 годзе і доўгія гады была адной з самых папулярных славутасцяў Камчаткі. Там вы знойдзеце унікальныя, захапляльныя дух віды.`,
        },
        {
          name: 'Возера Эльтан',
          location: 'Валгаградская вобласць',
          description: `Салёнае возера Эльтан займае першае месца па велічыні сярод мінеральных азёр Еўропы. Вада ў возера ўяўляе сабой насычаны солевы раствор, і дзякуючы эльтанскім багавінню мае чырванаватае адценне. Пад солевымі адкладамі ўтоены пласт мінеральнага серавадароднага бруду, якая выкарыстоўваецца ў лячэбных мэтах.`,
        },
      ],
      phrases: ['Прывітанне! Як справы?', 'Мне падабаецца Вашая краіна! Тут прыгожа!', 'Не маглі б вы мне дапамагчы?', 'Я галодны.', "Выбачайце, я не п'ю гарэлку."],
    },
  },
  5: {
    ru: {
      name: 'США',
      nameEN: 'usa',
      langCode: 'en',
      capital: 'Вашингтон',
      animalName: 'Белоголовый орлан',
      language: 'английский',
      cities: [
        { city: 'Нью-Йорк', coordinates: '40.660000, -73.940000' },
        { city: 'Лос-Анджелес', coordinates: '34.020000, -118.410000' },
        { city: 'Чикаго', coordinates: '41.840000, -87.680000' },
        { city: 'Хьюстон', coordinates: '29.790000, -95.390000' },
        { city: 'Сан-Франциско', coordinates: '37.744560, -122.437098' },
      ],
      places: [
        {
          name: 'Статуя Свободы',
          location: 'Нью-Йорк, Остров Свободы',
          description: `Статуя Свободы (Liberty Enlightening the World; французский: La Liberté éclairant le monde) — колоссальная неоклассическая
          скульптура, расположенная на острове Свободы гавани Нью-Йорка, США. Это медная статуя, подарок от народа Франции, 
          созданная французским скульптором Фредериком Огюстом Бартольди, металлический каркас статуи был построен Гюставом Эйфелем.
          Статуя Свободы была установлена 28 октября 1886 года.`,
        },
        {
          name: 'Мост "Золотые ворота"',
          location: 'Сан-Франциско, Калифорния',
          description: `Висячий мост через пролив Золотые Ворота. 
            Он соединяет город Сан-Франциско на севере полуострова Сан-Франциско и южную часть округа Марин, 
            рядом с пригородом Саусалито. Это один из самых узнаваемых мостов в мире. 
            Был самым большим висячим мостом в мире с момента открытия в 1937 году и до 1964 года.`,
        },
        {
          name: 'Великий Каньон',
          location: 'Национальный парк Гранд-Каньон',
          description: `Гранд-Каньон является одним из тех обязательных к посещению мест, которые привлекают туристов на протяжении поколений.
            Вид, открывающийся с высоты стен каньона на бесконечный горизонт и непостижимую бездну внизу — одно из самых ярких событий любой поездки в Соединенные Штаты.
            Посетить Гранд-Каньон можно легко, для этого можно отправиться в однодневную поездку из Лас-Вегаса или Феникса.`,
        },
        {
          name: 'Белый Дом',
          location: 'Вашингтон, округ Колумбия',
          description: `Официальная резиденция президента США, расположенная в Вашингтоне (округ Колумбия) по почтовому адресу: 
            Пенсильвания-авеню, 1600 (англ. 1600 Pennsylvania Avenue, Washington, D.C. 20500), и был резиденцией каждого президента США, 
            начиная с Джона Адамса в 1800 году. Термин «Белый дом» часто используется как метоним для президента и его советников.`,
        },
        {
          name: 'Знак Голливуда',
          location: 'Агломерация Лос-Анджелеса',
          description: `Памятный знак на Голливудских холмах в Лос-Анджелесе, Калифорния. 
            Представляет собой слово «HOLLYWOOD» (название местности), написанное большими белыми буквами. 
            Знак был создан в качестве рекламы в 1923 году, но впоследствии приобрёл широкую известность, 
            став фирменным знаком киноиндустрии США. Расположен на южном склоне холма Маунт Ли на высоте 491 м над уровнем моря.`,
        },
      ],
      phrases: ['Привет! Как дела?', 'Мне здесь нравится, это замечательная страна!', 'До скорой встречи!', 'Как мне добраться до большого каньона?', 'Как дела, братишка?'],
    },
    en: {
      name: 'USA',
      nameEN: 'usa',
      langCode: 'en',
      capital: 'Washington',
      animalName: 'Bald Eagle',
      language: 'english',
      cities: [
        { city: 'New York City', coordinates: '40.660000, -73.940000' },
        { city: 'Los Angeles', coordinates: '34.020000, -118.410000' },
        { city: 'Chicago', coordinates: '41.840000, -87.680000' },
        { city: 'Houston', coordinates: '29.790000, -95.390000' },
        { city: 'San Francisco', coordinates: '37.744560, -122.437098' },
      ],
      places: [
        {
          name: 'Statue of Liberty',
          location: 'New York City, Liberty Island',
          description: `The Statue of Liberty (Liberty Enlightening the World; French: La Liberté éclairant le monde) is a colossal neoclassical 
            sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, 
            a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. 
            The statue was dedicated on October 28, 1886.`,
        },
        {
          name: 'Golden Gate Bridge',
          location: 'San Francisco, CA',
          description: `The Golden Gate Bridge is the second longest suspension bridge in the US and ninth longest in the world. 
            It has a 1,280m long bridge span and connects San Francisco and Marin County.
            The bridge was opened in 1937 and has a main span of approximately 4,200ft and total length of 8,980ft (2,737m).
            It stands 227m above water level and replaced the ferry service between San Francisco and Marin County.`,
        },
        {
          name: 'The Grand Canyon',
          location: 'Grand Canyon National Park',
          description: `The Grand Canyon is one of those must-see, bucket-list destinations that have been attracting visitors for generations. 
            Gazing out over the canyon walls to an endless horizon and an unfathomable depth below is one of the highlights of any trip in the United States.
            Visiting the Grand Canyon can easily be done on a day trip from Las Vegas or Phoenix`,
        },
        {
          name: 'White House',
          location: 'Washington, D.C.',
          description: `The White House is the official residence and workplace of the president of the United States. 
            It is located at 1600 Pennsylvania Avenue NW in Washington, D.C., and has been the residence of every U.S. president since John Adams in 1800. 
            The term "White House" is often used as a metonym for the president and his advisers.`,
        },
        {
          name: 'Hollywood Sign',
          location: 'Los Angeles Metropolitan Area',
          description: `The Hollywood Sign is an American landmark and cultural icon overlooking Hollywood, Los Angeles, California. 
            Originally the Hollywoodland Sign, it is situated on Mount Lee, in the Beachwood Canyon area of the Santa Monica Mountains. 
            Spelling out the word Hollywood in 45-foot-tall (13.7 m) white uppercase letters and 350 feet (106.7 m) long, 
            it was originally created in 1923 as a temporary advertisement for a local real estate development, 
            but due to increasing recognition the sign was left up, and replaced in 1978 with a more durable all-steel structure.`,
        },
      ],
      phrases: ['Hey! How are you?', 'I like being here, that is a wonderful country!', 'See you soon!', 'How do I get to the Grand Canyon?', "What's up bro?"],
    },
    be: {
      name: 'ЗША',
      nameEN: 'usa',
      langCode: 'en',
      capital: 'Вашынгтон',
      animalName: 'Белагаловы арлан',
      language: 'англійская',
      cities: [
        { city: 'Нью Ёрк', coordinates: '40.660000, -73.940000' },
        { city: 'Лос Анджэлес', coordinates: '34.020000, -118.410000' },
        { city: 'Чыкага', coordinates: '41.840000, -87.680000' },
        { city: "Х'юстан", coordinates: '29.790000, -95.390000' },
        { city: 'Сан-Францыска', coordinates: '37.744560, -122.437098' },
      ],
      places: [
        {
          name: 'Статуя Свабоды',
          location: 'Нью-Ёрк, Востраў Свабоды',
          description: `Статуя Свабоды (Liberty Enlightening the World; французская: La Liberté éclairant le monde) - каласальны неакласічны скульптура, размешчаная на востраве Свабоды гавані Нью-Ёрка, ЗША. Гэта медная статуя, падарунак ад народа Францыі, створаная французскім скульптарам Фрэдэрыкам Агюстам Бартольдзі, металічны каркас статуі быў пабудаваны Гюставам Эйфелем. Статуя Свабоды была ўсталявана 28 кастрычніка 1886 года.`,
        },
        {
          name: 'Мост "Залатыя вароты"',
          location: 'Сан-Францыска, Каліфорнія',
          description: `Вісячы мост праз праліў Залатыя Вароты. Ён злучае горад Сан-Францыска на поўначы паўвострава Сан-Францыска і паўднёвую частку акругі Марын, побач з прыгарадам Саўсаліта. Гэта адзін з самых вядомых мастоў у свеце. Быў самым вялікім вісячым мастом у свеце з моманту адкрыцця ў 1937 годзе і да 1964 года.`,
        },
        {
          name: 'Вялікі Каньён',
          location: 'Нацыянальны парк Гранд-Каньён',
          description: `Гранд-Каньён з'яўляецца адным з тых абавязковых да наведвання месцаў, якія прыцягваюць турыстаў на працягу пакаленняў. Выгляд, які адкрываецца з вышыні сцен каньёна на бясконцы гарызонт і неспасціжную бездань унізе - адна з самых яркіх падзей любой паездкі ў Злучаныя Штаты. Наведаць Гранд-Каньён можна лёгка, для гэтага можна адправіцца ў аднадзённую паездку з Лас-Вегаса ці Фенікса.`,
        },
        {
          name: 'Белы Дом',
          location: 'Вашынгтон, акруга Калумбія',
          description: `Афіцыйная рэзідэнцыя прэзідэнта ЗША, размешчаная ў Вашынгтоне (акруга Калумбія) па паштовым адрасе: Пэнсыльванія-авеню, 1600 (англ. 1600 Pennsylvania Avenue, Washington, D.C. 20500), і быў рэзідэнцыяй кожнага прэзідэнта ЗША, пачынаючы з Джона Адамса ў 1800 годзе. Тэрмін "Белы дом" часта выкарыстоўваецца як метонім для прэзідэнта і яго дарадцаў.`,
        },
        {
          name: 'Знак Галівуду',
          location: 'Агламерацыя Лос-Анджэлеса',
          description: `Памятны знак на Галівудскіх пагорках у Лос-Анджэлесе, Каліфорнія. Уяўляе сабой слова "HOLLYWOOD" (назва мясцовасці), напісанае вялікімі белымі літарамі. Знак быў створаны ў якасці рэкламы ў 1923 годзе, але пасля набыў шырокую вядомасць, стаўшы фірмовым знакам кінаіндустрыі ЗША. Размешчаны на паўднёвым схіле ўзгорка Маунт Лі на вышыні 491 м над узроўнем мора.`,
        },
      ],
      phrases: ['Прывет, як справы?', 'Мне тут падабаецца, гэта выдатная краіна!', 'Да сустрэчы!', 'Як мне дабрацца да вялікага каньёна?', 'Як справы, браценік?'],
    },
  },
};

const users = [
  {
    id: 0,
    name: 'John Smith',
    email: 'john99@yahoo.com',
    password: '123',
    avatar: '7',
    countryQuiz: {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
  },
  {
    id: 1,
    name: 'Sara Anna',
    email: 'sara21@yahoo.com',
    password: '2021',
    avatar: '7',
    countryQuiz: {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// получение страны по id
app.get('/countries/:countryId', (req, res) => {
  const { params, query } = req; // в params id страны в формате {id: 'значение'}, в query будут квери параметры, например {lang: 'ru'}, это получаем из req
  res.send(JSON.stringify(countries[params.countryId][query?.lang || 'en'])); // возвращаем на фронт результ, если язык пользователем не указан, вернется английская версия
});

// получение имен всех стран
app.get('/countries', (req, res) => {
  const { query } = req; // в query будут квери параметры, например {lang: 'ru'}, это получаем из req
  const idList = Object.keys(countries);
  const nameList = idList.reduce((acc, id) => {
    acc.push(countries[id][query?.lang || 'en'].name);
    return acc;
  }, []);

  res.send(JSON.stringify(nameList)); // возвращаем на фронт результ, если язык пользователем не указан, вернется английская версия
});

// добавление нового комментария
app.post('/comments/:countryId', (req, res) => {
  const { params, body } = req;
  const { countryId } = params;
  comments[countryId].push({ ...body });
  res.sendStatus(200);
});

// получение комментариев
app.get('/comments/:countryId', (req, res) => {
  const { params } = req;
  res.send(JSON.stringify(comments[params.countryId]));
});

// получить список пользователей
app.get('/users', (req, res) => {
  const usersWithoutPasswords = users.map(({ id, name, email, avatar, countryQuiz }) => ({ id, name, email, avatar, countryQuiz }));
  res.send(JSON.stringify(usersWithoutPasswords));
});

// регистрация пользователя
app.post('/users', (req, res) => {
  const userInfo = req.body;
  const newUserId = users.length;
  const newUser = {
    ...userInfo,
    countryQuiz: {
      1: '0',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
    },
    avatar: '7',
    id: newUserId,
  };
  users.push(newUser);
  res.send(JSON.stringify(newUser));
});

// получение пользователя по id
app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users[userId];
  if (!users[userId]) {
    res.status(404).send('User not found');
    return;
  }
  // delete user.password;
  res.send(JSON.stringify(user));
});

// вход с систему для зарегистрированного пользователя
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((item) => item.email === email && item.password === password);
  if (user) {
    res.status(200).json({ success: true, id: user.id, name: user.name, avatar: user.avatar, countryQuiz: user.countryQuiz });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

// обновление данных пользователя
app.patch('/users/:userId', (req, res) => {
  const { params, body } = req;
  const { userId } = params;
  if (!users[userId]) {
    res.status(404).send('User not found');
    return;
  }
  if (body.countryId) {
    users[userId].countryQuiz[body.countryId] = body.resultQuiz;
  } else {
    users[userId] = { ...users[userId], ...body };
  }
  const user = users[userId];
  delete user.password;
  res.send(JSON.stringify(user));
});

app.listen(process.env.PORT || port, () => {
  console.log(`The app listening on port ${port}`);
});
