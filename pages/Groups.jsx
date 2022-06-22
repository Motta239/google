import {
  EyeIcon,
  GlobeAltIcon,
  GlobeIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import {
  DiamondOutlined,
  Feed,
  LockSharp,
  PeopleOutlined,
  SearchOutlined,
  Settings,
} from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { BsAppIndicator, BsGlobe, BsThreeDots } from 'react-icons/bs'
import { ChevronDownIcon } from '@heroicons/react/outline'
import GroupInputBox from '../components/GroupInputBox'
import GroupPost from '../components/Posts/GroupPost'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'

function Groups() {
  const groups = [
    {
      id: 1,
      groupImg:
        'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/120760760_3368790483235617_5642444973059023723_n.jpg?stp=dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=XkuAX1yM7LgAX-l24SV&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT8hCqRv8kGjz3Nj5YN_iYdN0WfS9QNOShLyUOM1zScFXg&oe=62D3AE27',
      lastActive: 'last active 12 hours ago',
      groupName: `ממים של גברים`,
      classification: 'public',
      about: `
      הקבוצה מטרתה ללמוד לעזור לשתף ולהחליף דעות בנושא
      שוק ההון
      מסחר יומי
      הבורסה בארץ
      פלטפורמות מסחר בארץ ובחול
      אופציות מעוף
      אופציות בנאסדק
      אסטרטגיות מסחר
      ניתוח טכני
      ניתוח פונדומנטלי של השוק `,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 2,
      groupImg:
        'https://scontent.fhfa1-1.fna.fbcdn.net/v/t39.30808-6/273927907_2763027143840868_2069290103158092705_n.jpg?stp=dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=uuRM3VYcrKkAX83TY0T&tn=osZC3KjZEenLPwoO&_nc_ht=scontent.fhfa1-1.fna&oh=00_AT8Vm_9_IHEQNeMEZ-khh4-DeU5IHQVlBsmP3yu4oEO28w&oe=62B1D18D',
      lastActive: 'last active 23 days ago',
      groupName: `love and marrige`,
      classification: 'public',
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 3,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/280074859_565844661637129_5488603416162115401_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8631f5&_nc_ohc=pCGKDV1dvJQAX-0jBa6&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT9WJsVXgBge2Mpk-YO1pRG_Pu6hbrvsyH1gW-sIkGPIgg&oe=62B4ADB0',
      lastActive: 'last active 23 days ago',
      groupName: `TLV Confessions - וידויים תל אביב`,
      classification: 'public',
      about: `הקהילה הגדולה ביותר בארץ לוידויים אנונימיים!
      בעולם בו הכל חשוף והמידע נגיש,
      ת"א קונפשנס היא קהילה המאפשרת לפרוק, להתייעץ ולהתמך, באנונימיות מוחלטת.
      מוזמנים לשתף באמצעות הטופס האנונימי הבא:
      https://goo.gl/dYFkqo
      אנחנו גם באינסטגרם (שם אין צנזורה):
      https://instagram.com/tlv_confessions `,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 4,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.18169-9/12994461_1370825739609532_9097212880581627550_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=7BVG70BDCtwAX9XSA_t&_nc_oc=AQkkYyVPmkM8ZjRYSwKvj0vrl8F736Qbgi4FdRGz82Q1JVjOLVvLlcXHkfxiUKYSZ6ybqmtgaZ-A3ga_dU537bQK&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8lFQHye-7Z38T1a8Lbh1SIEMAd8nfgT5WS-M4-hDiGew&oe=62D3F07E',
      lastActive: 'last active 23 days ago',
      groupName: `חידות מתמטיות`,
      classification: 'public',
      about: `קבוצה שנועדה לבעיות מאתגרות שבדרך כלל איננן בחומר הלימוד הרגיל של התואר במתמטיקה , חידות ובעיות עם פתרון יצירתי . "מחוץ לקופסא״`,
      members: 5.2 * Math.random() * 42,
    },

    {
      id: 5,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/1167299_10151684808069902_205957464_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=UBsIh1By20QAX8ajlPW&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_R9GQtvsPyL8yUsuFK1xJJ2DjlNL6_OP6vwJYFkbiO9g&oe=62D73934',
      lastActive: 'last active 23 days ago',
      groupName: `משרות הייטק חמות - שבוע ודי!`,
      classification: 'public',
      about: ` אם שמעתם על משרה שמתפנה ו\או
      אתם מחפשים עבודה בתחום ההייטקו\או
      אתם מחפשים עובדים\יזממים בתחום
      הגעתם למקום הנכון! אנחנו הקבוצה הגדולה בארץ למשרות הייטק.`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 6,
      groupImg:
        'https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png',
      lastActive: 'last active 23 days ago',
      groupName: `באבאליין - BaBaLine`,
      classification: 'public',
      about: ` באבאליין - BaBaLine משנים את חוקי המשחק.
      שי רוט וחיים בבה מביאים לכם את הליין החדש בלופטים מדהימים, קהל איכותי! בר איכותי במחירי עלות.
      כל מה שהיה חסר לנו במועדונים ומסיבות אנחנו מביאים לכם כאן.
      הקבוצה נוצרה בשביל שתוכלו להישאר מעודכנים לפני ואחרי כל הפקה לקראת המסיבה הבאה. נעלה לכאן את התמונות שלכם. תרגישו חופשי לכתוב לנו הצעות, העדפות, בקשות, משוב וכמובן!! כמה שנהנתם איתנו :.`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 7,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/56296942_2149727411812074_2885264398438367232_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=H6RWMetrFCEAX-iWmFY&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-fKKOh1n0e2z_WafmE-vh4bpfYL-R3CStbBw6whu8UbQ&oe=62D566BD',
      lastActive: 'last active 23 days ago',
      groupName: `צרות בהייטק - הקבוצה`,
      classification: 'public',
      about: `צרות בהייטק זה לא רק מצחיק.
      יש דברים שמטרידים אותנו ההייטקיסטים שזר לא יבין.
      רוצים לשאול על תנאים בחברה מסויימת? איפה הכי טוב לאכול בהרצליה פיתוח? מה זה ESPP? למישהו יש המלצה לסדרה שאפשר לראות בטיסה לואלי? כדור פילאטיס טוב לשבת עליו? איזה אוזניות חוסמות רעש הכי מתאימות לאופן-ספייס? מה מועדון התעופה הכי טוב בשבילם?
      זה המקום לדבר על זה.`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 8,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/24068478_10155180146159021_5078033820912610054_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8631f5&_nc_ohc=vPAfE0Ma34cAX8-sg5Y&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-9AzsEuO_oLX-6TnR9ZA2PVC8GgBOTrZtkKQ2bvP1Kvg&oe=62D64C1A',
      lastActive: 'last active 23 days ago',
      groupName: `מחשבות מהמקלחת`,
      classification: 'public',
      about: `מה היא מחשבה מהמקלחת?
      בקצרה, מחשבה מהמקלחת היא התגלות קטנה שהופכת את השגרה לקצת יותר מעניינת. זו הארה שמציעה לאנשים הסתכלות חדשה על דברים שבדרך כלל נוטים להתעלם מהם. זו יכולה להיות מחשבה מצחיקה, מעוררת מחשבה ואפילו מטופשת, כל עוד היא גורמת לאנשים לומר: "היי, לא חשבתי על זה ככה!". מחשבה מהמקלחת *היא לא* משחק מילים, הלצה או שאלה פשוטה שאפשר למצוא לה תשובה בגוגל. אם זה הגיג שבדמיונכם אתם יכולים לראות את הדוד המביך שלכם מספר אותו סביב שולחן החג, זו בדיחת אבא, ולא מחשבה מהמקלחת...
      זו לא קבוצת בדיחות. נסו לאתגר עם זווית חדשה על משהו, פרספקטיבה שונה על תופעות או דברים שנוהגים להתעלם מהם.
      דוגמאות למחשבות מהמקלחת:
      * כלבים בטח חושבים שמעליות זה סוג של טלפורט.
      * הקיבה שלנו לא יודעת להבדיל בין תפוחי אדמה לפירה.
      דוגמאות שהן לא מחשבות מהמקלחת:
      * וואי, אני צריך לקנות עוד שמפו.
      * למה בני ישראל הלכו 40 שנה במדבר? מה, לא היה להם וויז?`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 9,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/121455135_10216827031420520_6116214682712124411_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_ohc=U9sYue4Mx0AAX90x4qH&tn=osZC3KjZEenLPwoO&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-OfFLk0Xd9TpaDCb4D8SiG0Nf5uJfydQmbiE-WXlGLRw&oe=62D63ECF',
      lastActive: 'last active 23 days ago',
      groupName: `בולסטריט Bullstreet | | כלכלה ושוק ההון | ניתוח טכני והשקעות
      `,
      classification: 'private',
      about: `הקבוצה מיועדת לכל אדם שמעוניין לדאוג לעתיד הכלכלי שלו. מבט מהיר בטבלאות הסטטיסטיקה מספר לנו את הדברים הבאים - רוב אזרחי ישראל נכנסים למינוס עמוק בשלב כזה או אחר בחייהם ונאלצים לקחת הלוואות או לשלם ריבית על המינוס מכיוון שמקור ההכנסה היחיד של רובנו הוא מקום העבודה. מי מאיתנו שהמזל או ההתנהלות הכלכלית האירה לו פנים, פשוט מניח חלק מהכסף בחסכון וצובר ריבית של 0.1 אחוז בשנה (על כל אלף ש״ח, מקבל שקל אחד מהבנק). בו בזמן, תוחלת החיים בקרב הציבור עולה וקרנות הפנסיה וביטוח המנהלים לא יוכלו לכלכל אותנו באופן מספק בעתיד. פה אנחנו נכנסים לתמונה. אנחנו לומדים להיות אקטיביים ולדאוג לעתיד הכלכלי שלנו באמצעות השקעות זהירות וחכמות בשווקים נזילים. כי אם לא אנחנו עצמנו, אף אחד לא ידאג לנו. הגיע הזמן שנלמד לגרום להון שאנחנו צוברים עם השנים לעבוד עבורנו ולא להפך - וזה יותר מפשוט ממה שאתם חושבים`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 10,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/25487329_10155257205066376_8205728682727132524_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_ohc=JagsNdS_dJgAX9gqhvc&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_jokyCbRSNvvquQOdFrocibWtVKquK4JpGHUeG7dFcGQ&oe=62D704BC',
      lastActive: 'last active 23 days ago',
      groupName: `מניות ומטבעות מתחת לרדאר`,
      classification: 'public',
      about: `הסקירות וההודעות להלן המידע המופץ בקבוצה אינם מהווים תחליף לייעוץ מקצועי. משקיע הקורא את המידע המופץ בקבוצה אינו יכול להניח כי הסתמכות על הדעות וההמלצות המובאות בה תיצור עבורו רווחים. מנהלי הקבוצה עשויים לסחור להחזיק למכור את המניהמובאות בסקירות/איתותים/הודעות או חלק מהן. מידע המופץ בקבוצה זו הינו אינפורמטיבי בלבד ולא נועד לשמש הצעה או שידול לקנות או למכור מניות כלשהן. אין המידע המופץ בקבוצה מתיימרת להיות ניתוח מלא של כל העובדות הנזכרות בה. דעות המובאות בסקירה עשויות להשתנות ללא שום הודעה נוספת. כמו כן אין במידע המופץ בקבוצה על מנת להטיל חבות כל שהיא על מנהלי הקבוצה או באים מטעמה. הכותבים בקבוצה אינם יועצי השקעות. ט.ל.ח`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 11,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t31.18172-8/27797910_1907417089269634_2115886999724406116_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=lClre16Hnv8AX9mGBD1&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT9dy-NlTkErKXNfRf1bTWtW2mjy7HESk6hheLdkf-W4CA&oe=62D4FFB9',
      lastActive: 'last active 23 days ago',
      groupName: `משרות הייטק ושיווק ללא ניסיון`,
      classification: 'private',
      about: `חיפוש עבודה בתחום ההיי-טק
      חיפוש מועמדים מוכשרים
      מפתחים ומתכנתים , בודקי תוכנה, תומכים, אבטחת מידע`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 12,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/137568093_10225506481795596_1268925796201171555_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=dfxBK8dwQuoAX_Zg3wf&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT96Zz1uYyjHudgTmoBYvxSOzpHusHgC8ImlLyqfVeXijA&oe=62D3E34A',
      lastActive: 'last active 23 days ago',
      groupName: `קהילת משקיעי פלנטיר Palantir [PLTR]`,
      classification: 'public',
      about: `
      ההקבוצה נוסדה במטרה להוות קהילה למשקיעים וסוחרים אשר מחזיקים במניית חברת פלנטיר [PLTR] ותעודד שיח ראוי ושיתוף מידע מהימן.`,
      members: 5.2 * Math.random() * 42,
    },
    {
      id: 13,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/38808573_2197943560441623_1437045067389861888_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=cn64MB2iSFYAX8bJ_CT&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT96mv0wclWWjq3KDQgtSeRJkzTd4T8xKlwG-qXzJaxgzg&oe=62D71250',
      lastActive: 'last active 23 days ago',
      groupName: `כל מה שספורטאי צריך`,
      classification: 'private',
      about: `מי אנחנו?
      אבירם שפיץ
      מייסד "שפיץ - אימון ויעוץ מנטלי" – הרצאות, קורסים דיגיטליים ואימונים אישיים לחיזוק מנטלי והתגברות על קשיים בדרך להצלחה - בספורט בחיים ובעסקים.
      המוטו שלו - “ השיא של היום הוא הנורמה של המחר...”
      רון מימון
      פיזיותרפיסט מוסמך ומאמן כדורסל המתמחה באורתופדיה ופציעות ספורט. עובד במכון השיקום אסותא REACTION רמת החייל, מטפל בספורטאים מקצוענים וחובבנים, מבוגרים וילדים.
      גל אורלביץ
      מאמן כושר גופני אישי וקבוצתי למשחקי כדור,
      בעל תואר ראשון בהצטיינות בחינוך הגופני במכללת וינגייט עם התמחות בטיפוח היציבה והתעמלות מונעת. בין היתר, שחקן כדורסל פעיל וסטודנט לפזיותרפיה `,
      members: 5.2 * Math.random() * 42,
    },

    {
      id: 14,
      groupImg:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/274874388_112948511325711_6623086249527088149_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=m4LLT6Yf2JUAX-HDguA&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_l5TtYqYtsHFAlgDnqErtHtpgISHX2JBFxcer2MIJScg&oe=62B500E0',
      lastActive: 'last active 23 days ago',
      groupName: `סודות המסחר בבורסה-לימוד שוק ההון, ניתוח טכני, מסחר בורסה עולמי.
      `,
      classification: 'public',
      about: `
      הקבוצה מטרתה ללמוד לעזור לשתף ולהחליף דעות בנושא
      שוק ההון
      מסחר יומי
      הבורסה בארץ
      פלטפורמות מסחר בארץ ובחול
      אופציות מעוף
      אופציות בנאסדק
      אסטרטגיות מסחר
      ניתוח טכני
      ניתוח פונדומנטלי של השוק `,
      members: 5.2 * Math.random() * 42,
    },
  ]
  const friends = [
    {
      name: 'Moti Yosef',
      src: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-789cd.appspot.com/o/posts%2F2ktTb9TJsN78IEsx2tod%2Fimage?alt=media&token=9fedd3ae-b8b6-435d-a08f-e6b8f668793e',
      profile: `https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/285482394_1959451914245096_1524281326485344193_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=A9VWMq1BRBIAX8IEJFv&_nc_oc=AQmEPrpFAnWfhXeW72pV89waqwUtUYcvSLJRVCw8KBXfWDyyJSv0Ns-g3YxH-ZLKk-Je2Rcwagt2gXoe6XFgLOhU&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8j31hTOue6q1thDdJBw5-foHS9aSRwCkHRE603gJeGSA&oe=62B0B1AB`,
    },

    {
      name: 'Lola Bardamn',
      src: 'https://i.pinimg.com/474x/fb/33/b9/fb33b94125d3ef63f22d536190a680a6.jpg',
      profile:
        'https://i.pinimg.com/474x/e9/c8/08/e9c808fdac222166d8b1d892e79fe25e.jpg',
    },

    {
      name: 'Emily Blunt',
      src: 'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
      profile:
        'https://i.pinimg.com/474x/b9/3d/d4/b93dd44ef0d0719d741a9c36802e6d82.jpg',
    },
    {
      name: 'Marina Kozslov',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://i.pinimg.com/474x/2a/05/7d/2a057d572e088070c4310edc0f0f4cd3.jpg',
    },

    {
      name: 'Emily Blunt',
      src: 'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
      profile:
        'https://i.pinimg.com/474x/b9/3d/d4/b93dd44ef0d0719d741a9c36802e6d82.jpg',
    },
    {
      name: 'Marina Kozslov',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-1/243208465_1296760044087508_1532072654743544381_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=307C3t-AGcgAX-qXnAP&_nc_oc=AQlOyqkkXtBacRDrf703se708ThurgppwyWZ_wmYlQP_uQW5EF3yq4thLRXgFD-7nJNsS6k8O4Ib3cYcJVdPd5cM&tn=osZC3KjZEenLPwoO&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT8Ln0hjdGj0pmysRUJYdpFxJLoKZI_6_CgwOSgprkqfnA&oe=62B0C9F8',
    },
    {
      name: 'Michael Edward',
      src: 'https://i.pinimg.com/474x/22/40/55/224055a72b9cc6ff63617bcb2c3ce8af.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-1/166691014_3101797520049657_7302852110410474700_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jObRnh33xJIAX_Ns4S3&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-QRxZl3gFrY4ZHZD5mMZL3ywqYc_9N4snjBkn7vlE-8A&oe=62D0B66B',
    },

    {
      name: 'Emily Blunt',
      src: 'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.18169-1/10361968_10155247499725093_491459168500375902_n.jpg?stp=c114.0.320.320a_dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=I_CJ6CQ-yPkAX90UHQ3&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT-4wd-fipXW4FmdTLAOfISttd9Otfa4GVgI1O9R-YJ8xA&oe=62CF7F67',
    },
    {
      name: 'Marina Kozslov',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.18169-1/1174819_562809033766279_302951945_n.jpg?stp=c30.30.376.376a_dst-jpg_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=gkaLpwEGTZoAX9wr3uD&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_2B4QUfbmYOcyrSb9coWMnqbdHU04bR_XGYLD0Z4jfZg&oe=62D1218B',
    },
  ]
  const groupMenuIcons = [
    { title: 'About' },
    { title: 'Discussion' },
    { title: 'Mentorship' },
    { title: 'Guides' },
    { title: 'Featured' },
    { title: 'Topics' },
    { title: 'Members' },
    { title: 'Events' },
    { title: 'Media' },
    { title: 'Files' },
  ]
  const myRef = useRef()
  const [isActive, setIsActive] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const [groupInfo, setGroupInfo] = useState([
    {
      groupImg: groups[0]?.groupImg,
      groupName: groups[0]?.groupName,
      id: groups[0]?.id,
    },
  ])
  const [search, setSearch] = useState('')
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!myRef.current?.contains(e.target)) {
        setIsActive(false)
      }
    })
  })
  const [posts, setPosts] = useState([])
  useEffect(
    () =>
      onSnapshot(query(collection(db, `groups`)), (snapshot) => {
        setPosts(snapshot.docs)
      }),

    [db]
  )

  return (
    <div className=" ">
      <Header />

      <div className=" relative flex h-screen p-3   ">
        <div className=" fixed flex-col bg-white">
          <div className="absolute h-[10px] w-[360px]  bg-white">
            <div className="flex items-center justify-between p-3 ">
              <p className="text-2xl font-semibold ">Groups</p>
              <Settings
                onClick={() => setIsActive(!isActive)}
                className={` ${
                  isActive && 'bg-blue-200 text-blue-500'
                } h-7 w-7 rounded-full bg-gray-200 p-1 hover:fill-neutral-500 `}
              />
            </div>
            <div className=" flex w-11/12 items-center justify-start rounded-full bg-gray-200">
              <SearchIcon
                className={` ml-2 h-6 cursor-pointer text-gray-400 hover:text-blue-500 `}
              />
              <input
                type="text"
                className="  flex-shrink  items-center  border-transparent bg-transparent outline-none transition-all duration-300 ease-in focus:border-transparent focus:ring-0  lg:inline-flex "
                placeholder="Search Groups"
                onChange={(e) => setSearch(e.target.value.trim())}
              />
            </div>

            {search && (
              <div className="mt-2 h-fit">
                {search ? (
                  <div className="">
                    <SearchResult className="mr-4 h-[60px]" search={search} />
                    <SearchResult className="mr-4 h-[60px]" search={search} />
                  </div>
                ) : (
                  <p className="it-c flex h-14  justify-center text-sm text-gray-400">
                    No Recent Results
                  </p>
                )}
              </div>
            )}
            {isActive && (
              <div
                ref={myRef}
                className=" fixed top-32 space-y-2 rounded-lg bg-white p-2 shadow-2xl "
              >
                <div className="pl-2">
                  <p className=" ">Notification Settings </p>
                  <p className="text-xs text-gray-400">
                    You can manage how you are notified about Watch updates.
                  </p>
                </div>
                <div className="mt-2 border-b-2"></div>
                <div className="icon-friends">
                  <BsAppIndicator className="logo-friends bg-blue-500 p-2 text-white" />
                  <p className="flex flex-1">Show notification dots</p>
                </div>
                <div className="icon-friends">
                  <Settings className="logo-friends" />
                  <p className="flex flex-1">Custom notifications</p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-32 h-[74vh]  w-[360px] flex-col overflow-y-scroll ">
            <div className="icon-friends">
              <Feed className="logo-friends bg-blue-500 text-white" />
              <p className="flex flex-1">Your Feed</p>
            </div>
            <div className="icon-friends">
              <DiamondOutlined className="logo-friends" />
              <p className="flex flex-1">Discover</p>
            </div>
            <div className="mr-2 justify-center  p-1 ">
              <button className="h-10 w-full rounded-lg  bg-blue-200 text-sm text-fbb hover:bg-gray-200">
                + Create new Group
              </button>
            </div>
            <div className="mt-2 border-b-2"></div>
            <p className="mt-3"> Groups you've Joined</p>
            <div className=" mt-2  ">
              {groups.map((group) => (
                <div
                  onClick={() =>
                    setGroupInfo([
                      {
                        groupImg: group.groupImg,
                        groupName: group.groupName,
                        about: group.about,
                        classification: group.classification,
                        members: group.members.toFixed(1).toString(),
                        id: group.id,
                      },
                    ])
                  }
                  className=""
                >
                  <GroupRow
                    img={group.groupImg}
                    name={group.groupName}
                    lastActive={group.lastActive}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" ml-[360px] flex flex-grow flex-col bg-white">
          <div className=" flex w-full flex-col  justify-between ">
            <img
              src={groupInfo[0]?.groupImg}
              alt=""
              className="h-[400px] w-full rounded-lg object-cover shadow-xl"
            />
            <div className="p-5">
              <div className="flex    pt-4">
                <div className="flex w-1/2 flex-col space-y-2 ">
                  <p className="justify-center text-2xl font-bold">
                    {groupInfo[0]?.groupName}
                  </p>
                  <div className=" it-c flex space-x-3  text-sm text-gray-500">
                    {groupInfo[0]?.classification == 'private' ? (
                      <LockSharp className="h-[15px] w-[15px]" />
                    ) : (
                      <GlobeAltIcon className="h-[15px] w-[15px]" />
                    )}
                    <p className="">
                      {groupInfo[0]?.classification == 'private'
                        ? `Private Group  `
                        : `Public Group `}
                    </p>
                    <p className="font-bold ">
                      {groupInfo[0]?.members}K members
                    </p>
                  </div>
                  <div className="flex -space-x-3 ">
                    {friends.map((image) => (
                      <img
                        className="h-10 w-10 rounded-full border-2 object-cover "
                        src={image.profile}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div className=" flex w-1/2 justify-end space-x-3 py-2 ">
                  <div className="flex h-10 w-fit items-center space-x-2 rounded-lg bg-gray-300 px-2 text-fbb hover:bg-gray-200">
                    <UsersIcon className="h-5 w-5" />
                    <button className="">Joined</button>
                    <ChevronDownIcon className="h-5 w-5" />
                  </div>
                  <div className="flex h-10 w-fit items-center space-x-2 rounded-lg bg-blue-500 px-2 text-white hover:brightness-110">
                    <button className="text-xl">+</button>
                    <button className="">Invite</button>
                  </div>

                  <div className="flex h-10 w-fit items-center space-x-2 rounded-lg bg-gray-300 px-2 text-fbb hover:bg-gray-200">
                    <ChevronDownIcon className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="border-[1px ] mt-[10px] rounded-full  "></div>
              <div className="mt-4 w-full px-5 ">
                <div className="it-c sticky inset-x-0 top-20 left-0 flex justify-between ">
                  <div className="flex space-x-3  ">
                    {groupMenuIcons.map((menuIcon) => (
                      <GroupMenuIcon title={menuIcon.title} />
                    ))}
                  </div>
                  <div className="it-c flex space-x-3">
                    <SearchOutlined className="icon-group h-10 w-10 rounded-lg bg-gray-300 text-black" />
                    <BsThreeDots className="icon-group h-10 w-10 rounded-lg bg-gray-300 text-black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="  relative">
              <div className="  flex justify-center space-x-10 bg-gray-100 p-5">
                <div className="  h-fit w-[800px] shadow-xl">
                  <GroupInputBox
                    group={groupInfo[0].id}
                    namez={groupInfo[0].groupName}
                  />
                  <div className="flex w-full flex-col">
                    {posts.map(
                      (post) =>
                        groupInfo[0].id === post.data().group && (
                          <GroupPost
                            username={post.data().username}
                            id={post.data().group}
                            docId={post.id}
                            userImg={post.data().profileImg}
                            caption={post.data().caption}
                            timestamp={post.data().timestamp}
                          />
                        )
                    )}
                  </div>
                </div>
                <div className="sticky  top-20 left-0 flex h-fit  w-[350px] flex-col space-y-2 rounded-lg bg-white p-4 shadow-2xl">
                  <p className="">About</p>
                  <p className="text-xs">
                    {!readMore
                      ? groupInfo[0]?.about?.slice(0, 90)
                      : groupInfo[0]?.about}
                  </p>
                  <p className="text-sm" onClick={() => setReadMore(!readMore)}>
                    {!readMore ? `Read More` : `Show Less`}
                  </p>
                  <AboutBoxItems
                    Icon={BsGlobe}
                    head={'Public'}
                    desc={
                      "Anyone can see who's in the group and what they post."
                    }
                  />
                  <AboutBoxItems
                    Icon={EyeIcon}
                    head={'  Visible'}
                    desc={'Anyone can find this group.'}
                  />
                  <AboutBoxItems
                    Icon={PeopleOutlined}
                    head={'General'}
                    desc={''}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Groups

function AboutBoxItems({ Icon, desc, head }) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="h-5 w-5" />
      <div className="">
        <p className="text-sm font-semibold ">{head}</p>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  )
}
function GroupRow({ img, name, lastActive }) {
  return (
    <div className=" mr-2 flex  space-x-2 rounded-lg p-2 hover:bg-gray-200 ">
      <img className="h-12 w-12 rounded-lg object-cover" src={img} alt="" />

      <div className="">
        <p className="">{name}</p>
        <p className="text-xs text-gray-400 ">{lastActive}</p>
      </div>
    </div>
  )
}
function GroupMenuIcon({ title }) {
  return (
    <button
      className={`${
        title == 'Discussion' && `rounded-none border-b-2 border-blue-500 `
      } icon-group`}
    >
      {title}
    </button>
  )
}

function SearchResult({ search }) {
  return (
    <div className="icon-friends">
      <SearchIcon
        className={
          search ? `logo-friends` : `logo-friends  bg-blue-500 text-white `
        }
      />
      <p className="flex flex-1">{search ? `${search}` : 'Discover'}</p>
    </div>
  )
}
