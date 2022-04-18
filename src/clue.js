
 let suspectsArray=[    
    mrGreen={
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image:"./src/img/p1.png",
        color: "green",
    },
     drOrchid={
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "./src/img/p2.png",
        color: "white",
      }, 
      profPlum={
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "./src/img/p3.png",
        color: "purple",
      },   
      missScarlet={
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "./src/img/p4.png",
        color: "red",
      },
      mrsPeacock={
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "./src/img/p5.png",
        color: "blue",  
      },
      mrMustard={
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: "62",
        description: "He is a former football player who tries to get by on his former glory",
        image: "./src/img/p6.png",
        color: "yellow",
      }
    ]
  weaponsArray=[
     weapon1={
        name:"rope",
        weight:10,
      },
       weapon2={
        name:"knife",
        weight: 8,
      },
      weapon3={
       name:"candlestick",
       weight: 2,
     },
       weapon4={
        name:"dumbbell",
        weight: 30,
      },
       weapon5={
        name:"poison",
        weight:2,
      },
       weapon6={
        name:"axe",
        weight: 15,
      },   
       weapon7={
        name:"bat",
        weight: 15,  
      },  
       weapon8={
        name:"trphy",
        weight: 25,      
      },
       weapon9={
        name:"pistol",
        weight: 2.0, 
      }       
  ]
  roomsArray=[
    room1={     
       name: "Dining Room",
    },
    room2={
        name: "Conservatory",
    },
    room3={
        name: "Kitchen", 
    },
    romo4={
        name: "Study",
    },
    room5={
        name: "Library",
    },
    room6={
        name: "Billiard Room",
    },
    room7={
       name: "Lounge",
    },
    room8={
       name: "Ballroom",
    },
    room9={
        name: "Hall",
    },
    room10={
        name: "Spa",
    },
    room11={
        name: "Living Room",
    },
    room12={
        name: "Observatory",
    },
    room13={
        name: "Theater",
    },
    room14={
        name: "Guest House",      
    },
    room15={
        name: "Patio",
    },
  ]    
let object={} 
 function functionClue(){    
     for(let add=0;add<=2;add++){        
        const selectRandom=(valores)=> {    
        let ramdom=Math.floor(Math.random(1)*valores.length)  
          valores[ramdom]
        const pickMystery=()=>{     
        if(add===0){
            object.suspect=valores[ramdom]
            object.suspect2=valores[ramdom]   
            object.suspect.imge=valores[ramdom]       
        }else if(add===1){
          object.weapon=valores[ramdom]       
        }else if(add===2){
          object.room=valores[ramdom]    
        }          
      }
      pickMystery()
      }
      let llamadas=[suspectsArray,weaponsArray,roomsArray] 
      selectRandom(llamadas[add])    
  }     
   const revealMystery=(object)=>{  
    let firstNameSuspect=object.suspect.firstName
    let lastNameSuspect=object.suspect.lastName  
    let suspectImage=object.suspect.image  
    let weapon=object.weapon.name
    let room=object.room.name
    let resolve=`${firstNameSuspect} ${lastNameSuspect} killed Mr. Boddy using the ${weapon} in the ${room}`
    document.getElementById("img").src=suspectImage
    document.querySelector("h1").innerHTML=resolve
  }
  revealMystery(object)
}  
