import { Button } from "@mui/material";
import React from "react";
import TagInput from "../utils/TagInput";
import { commonInputClasses } from "../utils/Theme";
import LiveSearch from "../utils/LiveSearch";

export const ButtonStyles = {
  border: "2px solid #FFFFFF",
  color: "#FFFFFF",
  "&:hover": {
    border: "none",
    backgroundColor: "#FFFFFF",
    color: "#000000",
  },
};

export const results = [
  {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    maidenName: "Smitham",
    age: 50,
    gender: "male",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    username: "atuny0",
    password: "9uQFF1Lh",
    birthDate: "2000-12-25",
    image: "https://robohash.org/Terry.png?set=set4",
    bloodGroup: "A-",
    height: 189,
    weight: 75.4,
    eyeColor: "Green",
    hair: {
      color: "Black",
      type: "Strands",
    },
    domain: "slashdot.org",
    ip: "117.29.86.254",
    address: {
      address: "1745 T Street Southeast",
      city: "Washington",
      coordinates: {
        lat: 38.867033,
        lng: -76.979235,
      },
      postalCode: "20020",
      state: "DC",
    },
    macAddress: "13:69:BA:56:A3:74",
    university: "Capitol University",
    bank: {
      cardExpire: "06/22",
      cardNumber: "50380955204220685",
      cardType: "maestro",
      currency: "Peso",
      iban: "NO17 0695 2754 967",
    },
    company: {
      address: {
        address: "629 Debbie Drive",
        city: "Nashville",
        coordinates: {
          lat: 36.208114,
          lng: -86.586212,
        },
        postalCode: "37076",
        state: "TN",
      },
      department: "Marketing",
      name: "Blanda-O'Keefe",
      title: "Help Desk Operator",
    },
    ein: "20-9487066",
    ssn: "661-64-2976",
    userAgent:
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 2,
    firstName: "Sheldon",
    lastName: "Quigley",
    maidenName: "Cole",
    age: 28,
    gender: "male",
    email: "hbingley1@plala.or.jp",
    phone: "+7 813 117 7139",
    username: "hbingley1",
    password: "CQutx25i8r",
    birthDate: "2003-08-02",
    image: "https://robohash.org/Sheldon.png?set=set4",
    bloodGroup: "O+",
    height: 187,
    weight: 74,
    eyeColor: "Brown",
    hair: {
      color: "Blond",
      type: "Curly",
    },
    domain: "51.la",
    ip: "253.240.20.181",
    address: {
      address: "6007 Applegate Lane",
      city: "Louisville",
      coordinates: {
        lat: 38.1343013,
        lng: -85.6498512,
      },
      postalCode: "40219",
      state: "KY",
    },
    macAddress: "13:F1:00:DA:A4:12",
    university: "Stavropol State Technical University",
    bank: {
      cardExpire: "10/23",
      cardNumber: "5355920631952404",
      cardType: "mastercard",
      currency: "Ruble",
      iban: "MD63 L6YC 8YH4 QVQB XHIK MTML",
    },
    company: {
      address: {
        address: "8821 West Myrtle Avenue",
        city: "Glendale",
        coordinates: {
          lat: 33.5404296,
          lng: -112.2488391,
        },
        postalCode: "85305",
        state: "AZ",
      },
      department: "Services",
      name: "Aufderhar-Cronin",
      title: "Senior Cost Accountant",
    },
    ein: "52-5262907",
    ssn: "447-08-9217",
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 3,
    firstName: "Terrill",
    lastName: "Hills",
    maidenName: "Hoeger",
    age: 38,
    gender: "male",
    email: "rshawe2@51.la",
    phone: "+63 739 292 7942",
    username: "rshawe2",
    password: "OWsTbMUgFc",
    birthDate: "1992-12-30",
    image: "https://robohash.org/Terrill.png?set=set4",
    bloodGroup: "A-",
    height: 200,
    weight: 105.3,
    eyeColor: "Gray",
    hair: {
      color: "Blond",
      type: "Very curly",
    },
    domain: "earthlink.net",
    ip: "205.226.160.3",
    address: {
      address: "560 Penstock Drive",
      city: "Grass Valley",
      coordinates: {
        lat: 39.213076,
        lng: -121.077583,
      },
      postalCode: "95945",
      state: "CA",
    },
    macAddress: "F2:88:58:64:F7:76",
    university: "University of Cagayan Valley",
    bank: {
      cardExpire: "10/23",
      cardNumber: "3586082982526703",
      cardType: "jcb",
      currency: "Peso",
      iban: "AT24 1095 9625 1434 9703",
    },
    company: {
      address: {
        address: "18 Densmore Drive",
        city: "Essex",
        coordinates: {
          lat: 44.492953,
          lng: -73.101883,
        },
        postalCode: "05452",
        state: "VT",
      },
      department: "Marketing",
      name: "Lindgren LLC",
      title: "Mechanical Systems Engineer",
    },
    ein: "48-3951994",
    ssn: "633-89-1926",
    userAgent:
      "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 4,
    firstName: "Miles",
    lastName: "Cummerata",
    maidenName: "Maggio",
    age: 49,
    gender: "male",
    email: "yraigatt3@nature.com",
    phone: "+86 461 145 4186",
    username: "yraigatt3",
    password: "sRQxjPfdS",
    birthDate: "1969-01-16",
    image: "https://robohash.org/Miles.png?set=set4",
    bloodGroup: "B+",
    height: 157,
    weight: 95.9,
    eyeColor: "Gray",
    hair: {
      color: "Blond",
      type: "Very curly",
    },
    domain: "homestead.com",
    ip: "243.20.78.113",
    address: {
      address: "150 Carter Street",
      city: "Manchester",
      coordinates: {
        lat: 41.76556,
        lng: -72.473091,
      },
      postalCode: "06040",
      state: "CT",
    },
    macAddress: "03:45:58:59:5A:7B",
    university: "Shenyang Pharmaceutical University",
    bank: {
      cardExpire: "07/24",
      cardNumber: "3580047879369323",
      cardType: "jcb",
      currency: "Yuan Renminbi",
      iban: "KZ43 658B M6VS TZOU OXSO",
    },
    company: {
      address: {
        address: "210 Green Road",
        city: "Manchester",
        coordinates: {
          lat: 41.7909099,
          lng: -72.5119513,
        },
        postalCode: "06042",
        state: "CT",
      },
      department: "Business Development",
      name: "Wolff and Sons",
      title: "Paralegal",
    },
    ein: "71-3644334",
    ssn: "487-28-6642",
    userAgent:
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.17 Safari/537.11",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 5,
    firstName: "Mavis",
    lastName: "Schultz",
    maidenName: "Yundt",
    age: 38,
    gender: "male",
    email: "kmeus4@upenn.edu",
    phone: "+372 285 771 1911",
    username: "kmeus4",
    password: "aUTdmmmbH",
    birthDate: "1968-11-03",
    image: "https://robohash.org/Mavis.png?set=set4",
    bloodGroup: "O+",
    height: 188,
    weight: 106.3,
    eyeColor: "Brown",
    hair: {
      color: "Brown",
      type: "Curly",
    },
    domain: "columbia.edu",
    ip: "103.72.86.183",
    address: {
      address: "2721 Lindsay Avenue",
      city: "Louisville",
      coordinates: {
        lat: 38.263793,
        lng: -85.700243,
      },
      postalCode: "40206",
      state: "KY",
    },
    macAddress: "F8:04:9E:ED:C0:68",
    university: "Estonian University of Life Sciences",
    bank: {
      cardExpire: "01/24",
      cardNumber: "4917245076693618",
      cardType: "visa-electron",
      currency: "Euro",
      iban: "IT41 T114 5127 716J RGYB ZRUX DSJ",
    },
    company: {
      address: {
        address: "8398 West Denton Lane",
        city: "Glendale",
        coordinates: {
          lat: 33.515353,
          lng: -112.240812,
        },
        postalCode: "85305",
        state: "AZ",
      },
      department: "Support",
      name: "Adams Inc",
      title: "Web Developer I",
    },
    ein: "18-7178563",
    ssn: "667-98-5357",
    userAgent:
      "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.1 Safari/535.1",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 6,
    firstName: "Alison",
    lastName: "Reichert",
    maidenName: "Franecki",
    age: 21,
    gender: "female",
    email: "jtreleven5@nhs.uk",
    phone: "+351 527 735 3642",
    username: "jtreleven5",
    password: "zY1nE46Zm",
    birthDate: "1969-07-21",
    image: "https://robohash.org/Alison.png?set=set4",
    bloodGroup: "A+",
    height: 149,
    weight: 105.7,
    eyeColor: "Amber",
    hair: {
      color: "Blond",
      type: "Straight",
    },
    domain: "bandcamp.com",
    ip: "49.201.206.36",
    address: {
      address: "18 Densmore Drive",
      city: "Essex",
      coordinates: {
        lat: 44.492953,
        lng: -73.101883,
      },
      postalCode: "05452",
      state: "VT",
    },
    macAddress: "6C:34:D0:4B:4E:81",
    university: "Universidade da Beira Interior",
    bank: {
      cardExpire: "03/22",
      cardNumber: "345675888286047",
      cardType: "americanexpress",
      currency: "Euro",
      iban: "LB69 1062 QCY5 XS5T VOKU KJFG XP4S",
    },
    company: {
      address: {
        address: "6231 North 67th Avenue",
        city: "Glendale",
        coordinates: {
          lat: 33.5279666,
          lng: -112.2022551,
        },
        postalCode: "85301",
        state: "AZ",
      },
      department: "Accounting",
      name: "D'Amore and Sons",
      title: "Civil Engineer",
    },
    ein: "78-3192791",
    ssn: "158-68-0184",
    userAgent:
      "Mozilla/5.0 (Windows; U; Windows NT 6.0; nb-NO) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 7,
    firstName: "Oleta",
    lastName: "Abbott",
    maidenName: "Wyman",
    age: 31,
    gender: "female",
    email: "dpettegre6@columbia.edu",
    phone: "+62 640 802 7111",
    username: "dpettegre6",
    password: "YVmhktgYVS",
    birthDate: "1982-02-21",
    image: "https://robohash.org/Oleta.png?set=set4",
    bloodGroup: "B-",
    height: 172,
    weight: 78.1,
    eyeColor: "Blue",
    hair: {
      color: "Chestnut",
      type: "Wavy",
    },
    domain: "ovh.net",
    ip: "25.207.107.146",
    address: {
      address: "637 Britannia Drive",
      city: "Vallejo",
      coordinates: {
        lat: 38.10477,
        lng: -122.193849,
      },
      postalCode: "94591",
      state: "CA",
    },
    macAddress: "48:2D:A0:67:19:E0",
    university: "Institut Sains dan Teknologi Al Kamal",
    bank: {
      cardExpire: "10/23",
      cardNumber: "3589640949470047",
      cardType: "jcb",
      currency: "Rupiah",
      iban: "GI97 IKPF 9DUO X25M FG8D UXY",
    },
    company: {
      address: {
        address: "1407 Walden Court",
        city: "Crofton",
        coordinates: {
          lat: 39.019306,
          lng: -76.660653,
        },
        postalCode: "21114",
        state: "MD",
      },
      department: "Product Management",
      name: "Schimmel, Wilderman and Orn",
      title: "Sales Associate",
    },
    ein: "29-1568401",
    ssn: "478-11-2206",
    userAgent:
      "Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 8,
    firstName: "Ewell",
    lastName: "Mueller",
    maidenName: "Durgan",
    age: 29,
    gender: "male",
    email: "ggude7@chron.com",
    phone: "+86 946 297 2275",
    username: "ggude7",
    password: "MWwlaeWcOoF6",
    birthDate: "1964-08-24",
    image: "https://robohash.org/Ewell.png?set=set4",
    bloodGroup: "A-",
    height: 146,
    weight: 52.1,
    eyeColor: "Blue",
    hair: {
      color: "Chestnut",
      type: "Wavy",
    },
    domain: "homestead.com",
    ip: "91.200.56.127",
    address: {
      address: "5601 West Crocus Drive",
      city: "Glendale",
      coordinates: {
        lat: 33.6152469,
        lng: -112.179737,
      },
      postalCode: "85306",
      state: "AZ",
    },
    macAddress: "72:DA:1B:D7:30:E9",
    university: "Wenzhou Medical College",
    bank: {
      cardExpire: "09/23",
      cardNumber: "30549925358905",
      cardType: "diners-club-carte-blanche",
      currency: "Yuan Renminbi",
      iban: "CY02 9914 5346 0PMT G6XW TP0R AWRZ",
    },
    company: {
      address: {
        address: "81 Seaton Place Northwest",
        city: "Washington",
        coordinates: {
          lat: 38.9149499,
          lng: -77.0117026,
        },
        postalCode: "20001",
        state: "DC",
      },
      department: "Services",
      name: "Corkery, Reichert and Hodkiewicz",
      title: "Clinical Specialist",
    },
    ein: "88-4396827",
    ssn: "238-41-5528",
    userAgent:
      "Mozilla/5.0 (X11; Linux amd64) AppleWebKit/534.36 (KHTML, like Gecko) Chrome/13.0.766.0 Safari/534.36",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 9,
    firstName: "Demetrius",
    lastName: "Corkery",
    maidenName: "Gleason",
    age: 22,
    gender: "male",
    email: "nloiterton8@aol.com",
    phone: "+86 356 590 9727",
    username: "nloiterton8",
    password: "HTQxxXV9Bq4",
    birthDate: "1971-03-11",
    image: "https://robohash.org/Demetrius.png?set=set4",
    bloodGroup: "A+",
    height: 170,
    weight: 97.1,
    eyeColor: "Green",
    hair: {
      color: "Brown",
      type: "Strands",
    },
    domain: "goodreads.com",
    ip: "78.170.185.120",
    address: {
      address: "5403 Illinois Avenue",
      city: "Nashville",
      coordinates: {
        lat: 36.157077,
        lng: -86.853827,
      },
      postalCode: "37209",
      state: "TN",
    },
    macAddress: "98:EE:94:A2:91:C4",
    university: "Nanjing University of Economics",
    bank: {
      cardExpire: "02/24",
      cardNumber: "5372664789004621",
      cardType: "mastercard",
      currency: "Yuan Renminbi",
      iban: "BR68 9829 0581 3669 5088 5533 025N V",
    },
    company: {
      address: {
        address: "12245 West 71st Place",
        city: "Arvada",
        coordinates: {
          lat: 39.8267078,
          lng: -105.1366798,
        },
        postalCode: "80004",
        state: "CO",
      },
      department: "Human Resources",
      name: "Gorczany Group",
      title: "Community Outreach Specialist",
    },
    ein: "14-1066382",
    ssn: "717-26-3759",
    userAgent:
      "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; de) AppleWebKit/528.4+ (KHTML, like Gecko) Version/4.0dp1 Safari/526.11.2",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fc4b4b855bc44eb30d5e36fd18f491f44a15b7",
      network: "Ethereum (ERC20)",
    },
  },
  {
    id: 10,
    firstName: "Eleanora",
    lastName: "Price",
    maidenName: "Cummings",
    age: 37,
    gender: "female",
    email: "umcgourty9@jalbum.net",
    phone: "+60 184 408 0824",
    username: "umcgourty9",
    password: "i0xzpX",
    birthDate: "1958-08-11",
    image: "https://robohash.org/Eleanora.png?set=set4",
    bloodGroup: "O+",
    height: 198,
    weight: 48,
    eyeColor: "Blue",
    hair: {
      color: "Chestnut",
      type: "Wavy",
    },
    domain: "alibaba.com",
    ip: "73.15.179.178",
    address: {
      address: "8821 West Myrtle Avenue",
      city: "Glendale",
      coordinates: {
        lat: 33.5404296,
        lng: -112.2488391,
      },
      postalCode: "85305",
      state: "AZ",
    },
    macAddress: "BC:A9:D8:98:CB:0B",
    university: "Melaka City Polytechnic",
    bank: {
      cardExpire: "01/24",
      cardNumber: "3557806620295254",
      cardType: "jcb",
      currency: "Ringgit",
      iban: "GT40 DWAD 9UHA VEOZ ZF4J 2Y0F OOFD",
    },
    company: {
      address: {
        address: "1649 Timberridge Court",
        city: "Fayetteville",
        coordinates: {
          lat: 36.084563,
          lng: -94.206082,
        },
        postalCode: "72704",
        state: "AR",
      },
      department: "Marketing",
      name: "Bins Group",
      title: "Senior Sales Associate",
    },
    ein: "21-5278484",
    ssn: "544-66-0745",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.6 Safari/537.11",
    crypto: {
      coin: "Bitcoin",
      wallet: "0xb9fe6979a82fb43fdd9ba9f446846dc4dfca3deb",
      network: "Ethereum (ERC20)",
    },
  },
];

const BlogForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const renderItem = (results) => {
    return (
      <div key={results.id} className="flex">
        <img
          src={results.image}
          alt={results.firstName}
          className="w-10 h-10 rounded object-cover"
        />
        <p className="">{results.firstName}</p>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="text-[#FFFFFF] p-4">
      <div>
        <div></div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Title</label>
          <input type="text" name="title" className={commonInputClasses + ""} />
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Description</label>
          <textarea
            name="description"
            className={commonInputClasses + ""}
          ></textarea>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Author</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Writer</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Lead Author</label>
          <div className="flex justify-start items-center gap-2">
            <LiveSearch
              results={results}
              placeholder="Search Profile"
              renderItem={renderItem}
              onSelect={() => console.log(results)}
            />
            <p>As</p>
            <input
              type="text"
              name="title"
              className={commonInputClasses + ""}
            />
            <Button sx={ButtonStyles} type="button" variant="outlined">
              Add
            </Button>
          </div>
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Genres</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Type</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-1">
          <label>Tags</label>
          <TagInput />
        </div>
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Post Date</label>
            <input type="date" name="tag" className={commonInputClasses + ""} />
          </div>
          <div className="w-full flex flex-col gap-2 mb-1">
            <label>Status</label>
            <input type="text" name="tag" className={commonInputClasses + ""} />
          </div>
        </div>
        <div className="mt-4">
          <Button className="w-full" sx={ButtonStyles} variant="outlined">
            Upload
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BlogForm;
