const data = [
    {
        "gender": "male",
        "code": "7995626T",
        "age": 32,
        "name": "Jimmie May",
        "phone": "081-671-5530",
        "appt": "3-12-2012",
        "record": "16-8-1990",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "256-53-9423",
        "age": 22,
        "name": "Adrian Hudson",
        "phone": "(899) 791-4728",
        "appt": "15-9-2009",
        "record": "27-12-1999",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": null,
        "age": 24,
        "name": "Elizabeth Kumar",
        "phone": "(146)-886-3564",
        "appt": "20-1-2016",
        "record": "8-3-1998",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": null,
        "age": 53,
        "name": "Olivia Li",
        "phone": "(198)-434-5102",
        "appt": "27-4-2006",
        "record": "1-10-1969",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "1720002782669 78",
        "age": 50,
        "name": "Ezio Rodriguez",
        "phone": "06-66-45-24-73",
        "appt": "25-10-2016",
        "record": "26-1-1972",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "727834358",
        "age": 44,
        "name": "Andrew Gordon",
        "phone": "0495-911-692",
        "appt": "24-9-2009",
        "record": "26-1-1978",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "148-85-4777",
        "age": 22,
        "name": "April Sims",
        "phone": "(333) 470-5886",
        "appt": "15-9-2015",
        "record": "19-7-2000",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "2349127T",
        "age": 56,
        "name": "Alexandra Stone",
        "phone": "081-073-1305",
        "appt": "9-12-2017",
        "record": "3-1-1966",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "409140017",
        "age": 26,
        "name": "Claudia Wheeler",
        "phone": "0490-170-915",
        "appt": "4-1-2005",
        "record": "8-11-1995",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "1760400153412 18",
        "age": 46,
        "name": "Edgar Thomas",
        "phone": "06-71-21-65-69",
        "appt": "10-11-2006",
        "record": "15-5-1976",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": null,
        "age": 48,
        "name": "Agripina Gladilovich",
        "phone": "(097) P43-5227",
        "appt": "7-6-2012",
        "record": "15-3-1974",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "596950584",
        "age": 73,
        "name": "Jeremy Ma",
        "phone": "L66 Y94-3367",
        "appt": "4-9-2020",
        "record": "4-5-1949",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "080-64-3711",
        "age": 26,
        "name": "Jacqueline Grant",
        "phone": "(333) 203-3870",
        "appt": "23-10-2018",
        "record": "15-11-1995",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "19 160466 F 120",
        "age": 56,
        "name": "Andy Finkbeiner",
        "phone": "0177-5069414",
        "appt": "1-2-2003",
        "record": "16-4-1966",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "13421075-F",
        "age": 68,
        "name": "Albert Ibáñez",
        "phone": "616-617-224",
        "appt": "16-9-2009",
        "record": "1-5-1954",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "64 130269 T 968",
        "age": 53,
        "name": "Henri Teschner",
        "phone": "0174-2359643",
        "appt": "24-3-2019",
        "record": "13-2-1969",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "073-21-1204",
        "age": 28,
        "name": "Stacey Jones",
        "phone": "(933) 815-3643",
        "appt": "19-4-2014",
        "record": "7-9-1994",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "530199926",
        "age": 71,
        "name": "Ava Denys",
        "phone": "Y19 H93-0178",
        "appt": "14-1-2007",
        "record": "18-9-1951",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "756.7523.5178.27",
        "age": 51,
        "name": "Lilli Lemoine",
        "phone": "077 441 15 82",
        "appt": "2-10-2013",
        "record": "3-6-1971",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "2841047304048 57",
        "age": 37,
        "name": "Laly Lambert",
        "phone": "06-17-21-95-80",
        "appt": "20-2-2017",
        "record": "18-11-1984",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "37516302-B",
        "age": 26,
        "name": "Ismael Cano",
        "phone": "668-731-941",
        "appt": "12-9-2013",
        "record": "29-4-1996",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "0882182T",
        "age": 67,
        "name": "Benjamin West",
        "phone": "081-001-4478",
        "appt": "31-3-2012",
        "record": "3-6-1955",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "3624792T",
        "age": 24,
        "name": "Jenny Woods",
        "phone": "081-737-2876",
        "appt": "18-3-2011",
        "record": "7-2-1998",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "794.448.265-47",
        "age": 23,
        "name": "Lima Fogaça",
        "phone": "(25) 1537-9138",
        "appt": "6-4-2017",
        "record": "25-4-1999",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "6407413T",
        "age": 52,
        "name": "Jorge Shelton",
        "phone": "081-766-7191",
        "appt": "16-4-2004",
        "record": "8-7-1970",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "NaNNA223undefined",
        "age": 73,
        "name": "Matias Tervo",
        "phone": "042-031-83-91",
        "appt": "1-11-2014",
        "record": "26-6-1949",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "2441096301704 31",
        "age": 77,
        "name": "Cassandra Lacroix",
        "phone": "06-49-02-86-98",
        "appt": "20-1-2020",
        "record": "17-11-1944",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "348.433.034-44",
        "age": 65,
        "name": "Derci Novaes",
        "phone": "(75) 7626-6538",
        "appt": "25-3-2007",
        "record": "1-3-1957",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "05122774",
        "age": 42,
        "name": "Nanno Dijkshoorn",
        "phone": "(06) 21274425",
        "appt": "19-11-2006",
        "record": "7-11-1979",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": null,
        "age": 34,
        "name": "Carter Harris",
        "phone": "(543)-955-0590",
        "appt": "28-2-2010",
        "record": "8-11-1987",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "51 79 26 6155 2",
        "age": 49,
        "name": "Catalina de Jesús",
        "phone": "(642) 402 3518",
        "appt": "23-5-2004",
        "record": "14-3-1973",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "1730729965998 92",
        "age": 49,
        "name": "Enzo Rousseau",
        "phone": "06-41-52-98-16",
        "appt": "4-3-2019",
        "record": "14-8-1973",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "416675208529",
        "age": 45,
        "name": "Dev Saniel",
        "phone": "9835995755",
        "appt": "28-8-2005",
        "record": "19-1-1977",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "060791-3347",
        "age": 31,
        "name": "Gustav Christiansen",
        "phone": "44669845",
        "appt": "4-3-2011",
        "record": "7-7-1991",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "13 211275 H 022",
        "age": 46,
        "name": "Sascha Höfler",
        "phone": "0179-7383005",
        "appt": "1-2-2015",
        "record": "22-12-1975",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "718-25-3289",
        "age": 62,
        "name": "Joseph May",
        "phone": "(628) 852-0823",
        "appt": "18-2-2014",
        "record": "12-1-1960",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "12 210558 S 786",
        "age": 64,
        "name": "Caroline Schürer",
        "phone": "0172-5505774",
        "appt": "15-2-2005",
        "record": "22-5-1958",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "556577970",
        "age": 73,
        "name": "Mario Ramirez",
        "phone": "0480-509-491",
        "appt": "19-12-2011",
        "record": "10-3-1949",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "06127739135",
        "age": 44,
        "name": "Aras Khalid",
        "phone": "91629403",
        "appt": "15-3-2015",
        "record": "7-12-1977",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "388-03-3456",
        "age": 48,
        "name": "Joan Sanders",
        "phone": "(864) 485-7569",
        "appt": "11-1-2011",
        "record": "4-1-1974",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "417552932",
        "age": 37,
        "name": "Madison Gagné",
        "phone": "J62 T98-5797",
        "appt": "30-12-2013",
        "record": "9-1-1985",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "3803534T",
        "age": 49,
        "name": "Abbey Osullivan",
        "phone": "081-592-3958",
        "appt": "2-4-2014",
        "record": "23-10-1972",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "756.2091.6137.78",
        "age": 69,
        "name": "Marek Lopez",
        "phone": "075 754 00 25",
        "appt": "7-4-2002",
        "record": "15-6-1953",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": null,
        "age": 62,
        "name": "Aurora Wang",
        "phone": "(597)-893-4207",
        "appt": "28-6-2019",
        "record": "16-7-1960",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": null,
        "age": 38,
        "name": "Kenan Polat",
        "phone": "(056)-334-9065",
        "appt": "10-10-2008",
        "record": "3-10-1984",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "129859922",
        "age": 63,
        "name": "Lucas Ma",
        "phone": "T50 I48-7543",
        "appt": "11-6-2005",
        "record": "27-7-1959",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": null,
        "age": 43,
        "name": "Gonca Kulaksızoğlu",
        "phone": "(965)-711-0600",
        "appt": "5-8-2019",
        "record": "3-5-1979",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "33774122-X",
        "age": 36,
        "name": "Josefa Aguilar",
        "phone": "634-513-899",
        "appt": "12-1-2003",
        "record": "4-11-1985",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "0445852T",
        "age": 68,
        "name": "Lonnie Duncan",
        "phone": "081-224-7683",
        "appt": "12-4-2017",
        "record": "22-5-1954",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": null,
        "age": 65,
        "name": "آدرین زارعی",
        "phone": "0973-833-1061",
        "appt": "29-1-2012",
        "record": "28-1-1957",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "310150-2531",
        "age": 72,
        "name": "Elias Larsen",
        "phone": "12879539",
        "appt": "30-5-2005",
        "record": "31-1-1950",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "01046839699",
        "age": 54,
        "name": "Isabelle Apeland",
        "phone": "93712345",
        "appt": "2-10-2005",
        "record": "1-4-1968",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": null,
        "age": 73,
        "name": "آراد گلشن",
        "phone": "0985-142-2264",
        "appt": "6-7-2020",
        "record": "22-8-1949",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "01423839",
        "age": 61,
        "name": "Erhan Aras",
        "phone": "(06) 48894202",
        "appt": "10-8-2017",
        "record": "3-5-1961",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "555671064982",
        "age": 58,
        "name": "Mallika Andrade",
        "phone": "7540526955",
        "appt": "1-10-2020",
        "record": "3-3-1964",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "900572306",
        "age": 45,
        "name": "Melodie Lévesque",
        "phone": "K36 N27-0627",
        "appt": "4-10-2006",
        "record": "8-5-1977",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": null,
        "age": 26,
        "name": "Knyazhoslav Matviienko",
        "phone": "(098) E74-8095",
        "appt": "3-1-2009",
        "record": "16-3-1996",
        "status": "passed"
    },
    {
        "gender": "male",
        "code": "368722344",
        "age": 61,
        "name": "Simon Thompson",
        "phone": "L01 U38-2399",
        "appt": "5-9-2013",
        "record": "6-11-1960",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "NaNNA782undefined",
        "age": 76,
        "name": "Elli Jarvinen",
        "phone": "045-652-74-16",
        "appt": "28-7-2013",
        "record": "6-9-1946",
        "status": "missed"
    },
    {
        "gender": "male",
        "code": "RK 43 66 81 E",
        "age": 74,
        "name": "Mark Carpenter",
        "phone": "07431 600151",
        "appt": "21-2-2017",
        "record": "7-3-1948",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "756.7289.8269.89",
        "age": 37,
        "name": "Irène Louis",
        "phone": "078 032 06 16",
        "appt": "24-8-2017",
        "record": "30-6-1985",
        "status": "passed"
    },
    {
        "gender": "female",
        "code": "59934499",
        "age": 27,
        "name": "Rhodé Rorije",
        "phone": "(06) 02124743",
        "appt": "30-4-2015",
        "record": "6-5-1995",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": null,
        "age": 63,
        "name": "نيما کامروا",
        "phone": "0915-763-5710",
        "appt": "12-9-2004",
        "record": "23-2-1959",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "1710474718861 72",
        "age": 51,
        "name": "Sacha Gaillard",
        "phone": "06-44-17-74-39",
        "appt": "26-11-2019",
        "record": "8-5-1971",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": null,
        "age": 58,
        "name": "مرسانا کریمی",
        "phone": "0934-303-5857",
        "appt": "7-3-2009",
        "record": "14-6-1964",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "2630375537361 93",
        "age": 59,
        "name": "Anaëlle Lucas",
        "phone": "06-02-16-09-83",
        "appt": "17-7-2005",
        "record": "24-4-1963",
        "status": "rescheduled"
    },
    {
        "gender": "male",
        "code": "4522638T",
        "age": 48,
        "name": "Tony Howard",
        "phone": "081-524-0817",
        "appt": "24-8-2008",
        "record": "15-9-1974",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "009.891.278-29",
        "age": 59,
        "name": "Clotildes Sales",
        "phone": "(14) 5566-6242",
        "appt": "7-4-2016",
        "record": "30-11-1962",
        "status": "missed"
    },
    {
        "gender": "female",
        "code": "12942123-Z",
        "age": 40,
        "name": "Emilia Pastor",
        "phone": "683-651-039",
        "appt": "8-9-2016",
        "record": "22-6-1982",
        "status": "rescheduled"
    },
    {
        "gender": "female",
        "code": "89636245-B",
        "age": 41,
        "name": "Eva Sanz",
        "phone": "642-015-115",
        "appt": "4-4-2017",
        "record": "11-11-1980",
        "status": "missed"
    }
]

export default data;