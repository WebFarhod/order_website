import { IDataType } from "../types/dataType";

export const MainData: IDataType[] = [
  {
    _id: "item1",
    title: "Slider",
    isSelect: false,
    multeSelect: true,
    tabs: [
      {
        _id: "tab1",
        name: "O'zgarmaydigan slayder",
        isSelect: false,
        price: "47",
        image:
          "https://s3-alpha.figma.com/hub/file/4559784420/82de7af2-a064-4b9b-bf54-f2746d56fbb5-cover.png",
        include: ["rasm", "sarlavha", "slayder"],
      },
      {
        _id: "tab2",
        name: "O'zgaradigan slayder alohida",
        isSelect: false,
        price: "99",
        image:
          "https://static.wixstatic.com/media/bb1bd6_675b209fdea945bbb7428cb91186b4cd~mv2.gif",
      },
      {
        _id: "tab3",
        name: "O'zgaradigan slayder + yangilik yoki mavjud ma'lumotga bog'lash",
        isSelect: false,
        price: "125",
        image: "https://www.alecaddd.com/wp-content/uploads/2018/04/slides.png",
      },
    ],
  },
  {
    _id: "item2",
    title: "Bannerlar",
    isSelect: false,
    multeSelect: false,
    tabs: [
      {
        _id: "tab1",
        name: "O'zgarmaydigan rasm va linkli banner",
        isSelect: false,
        price: "47",
        image:
          "https://static.vecteezy.com/system/resources/previews/007/588/743/non_2x/web-banner-template-free-vector.jpg",
      },
      {
        _id: "tab2",
        name: "O'zgaradigan rasm va linkli banner",
        isSelect: false,
        price: "99",
        image:
          "https://static.vecteezy.com/system/resources/previews/005/003/957/non_2x/corporate-web-banner-template-business-agency-banner-design-online-ad-banner-website-banner-thumbnail-design-vector.jpg",
      },
    ],
  },
  {
    _id: "item3",
    title: "Yangiliklar",
    isSelect: false,
    multeSelect: false,
    tabs: [
      {
        _id: "tab2",
        name: "Nomi, rasmi, matni",
        isSelect: false,
        price: "65",
      },
      {
        _id: "tab2",
        name: "ko'rishlar soni hisoblash",
        isSelect: false,
        price: "29",
      },
      {
        _id: "tab2",
        name: "Matn ichiga ham rasm qo'shish, matn muharirini biriktirish",
        isSelect: false,
        price: "47",
      },
      {
        _id: "tab2",
        name: "Turlarga ajratish, biriktirish",
        isSelect: false,
        price: "47",
      },
    ],
  },
  {
    _id: "item4",
    title: "SEO - Qidiruv tizimlariga moslashtirish",
    isSelect: false,
    multeSelect: false,
    tabs: [
      {
        _id: "tab1",
        name: "Google va Yandex servislaridan qidiruv tizim bo'yicha ro'yhatdan o'tish saytni sozlash.",
        isSelect: false,
        price: "50",
        image:
          "https://media.licdn.com/dms/image/C4E12AQEMy4hIE0ZwAQ/article-cover_image-shrink_720_1280/0/1520114158511?e=1721865600&v=beta&t=HRflB_8SwFG9UkHRC7fTwr8JFpCtCEm2zyTJv9VHxfI",
      },
      {
        _id: "tab2",
        name: "Saytni qidiruv tizimi standartlariga mos darajada ishlab chiqish",
        isSelect: false,
        price: "47",
        image:
          "https://media.licdn.com/dms/image/D5612AQHFd_q5hpIRBw/article-cover_image-shrink_720_1280/0/1682083655795?e=1721865600&v=beta&t=8RH8wFC9hxTATtFuqDeDiHeIuvoaBpupbgN6Yk30TOE",
      },
      {
        _id: "tab3",
        name: "Yuborilgan linklarni live holatida ko'rinadigan qilish",
        isSelect: false,
        price: "47",
        image:
          "https://rockcontent.com/wp-content/uploads/2022/01/what-is-seo-1024x538.png.webp",
      },
    ],
  },
  {
    _id: "item5",
    title: "Mahsulotlar",
    isSelect: false,
    multeSelect: false,
    tabs: [
      {
        _id: "tab1",
        name: "Cheksiz mahsulotlar qo'shish. Rasmi, matni, narhi, nomi",
        isSelect: false,
        price: "75",
      },
      {
        _id: "tab2",
        price: "47",
        name: "omborhonada qolgan yo'qligi",
        isSelect: false,
      },
      {
        _id: "tab3",
        price: "47",
        name: "izoh va baholash tizimi",
        isSelect: false,
      },

      {
        _id: "tab4",
        price: "47",
        name: "kategoriyalarga ajratish: (elektronika, oziq ovqat, shu kabi)",
        isSelect: false,
      },

      {
        _id: "tab5",
        price: "47",
        name: "Saytda qidirish uchun mahsulotlarni filtrlash tizimi",
        isSelect: false,
      },

      {
        _id: "tab6",
        price: "47",
        name: "Brandlarga ajratish",
        isSelect: false,
      },
    ],
  },
  {
    _id: "item6",
    title: "Saytda kalkulyator",
    isSelect: false,
    multeSelect: false,
    tabs: [
      {
        _id: "tab1",
        name: "Kunlik kirgan foydalanuvchilar sonini hisoblash",
        isSelect: false,
        price: "75",
      },
      {
        _id: "tab2",
        name: "Haftalik kirgan obunachilarni hisoblash",
        isSelect: false,
        price: "25",
      },
      {
        _id: "tab3",
        name: "Oylik va yillik kirishlarni hisoblash",
        isSelect: false,
        price: "25",
      },
      {
        _id: "tab4",
        name: "Dinamik sahifalar",
        isSelect: false,
        price: "__",
      },
      {
        _id: "tab5",
        name: "Cheksiz sahifalar qo'shish. Rasmi, matni va matn muharriri",
        isSelect: false,
        price: "75",
      },
      {
        _id: "tab6",
        name: "izoh va baholash tizimi",
        isSelect: false,
        price: "25",
      },
    ],
  },
];
