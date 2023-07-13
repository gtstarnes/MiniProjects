async function fetchData(url:string): Promise<string> {
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch API data');
    }
    const data = await response.json();
    return data.extract;
  }
  
  // Usage
const socratesData = await fetchData('https://en.wikipedia.org/api/rest_v1/page/summary/socrates')
    .then(extract => {
      return extract; // Use the extracted value as needed
    })
    .catch(error => {
      console.error(error);
    });

const platoData = await fetchData('https://en.wikipedia.org/api/rest_v1/page/summary/plato')
.then(extract => {
    return extract; // Use the extracted value as needed
})
.catch(error => {
    console.error(error);
});

const aristotleData = await fetchData('https://en.wikipedia.org/api/rest_v1/page/summary/aristotle')
.then(extract => {
    return extract; // Use the extracted value as needed
})
.catch(error => {
    console.error(error);
});



    

export const socrates = {
    name: "Socrates",
    date: "470 BCE- 399 BCE",
    summary: socratesData,
    life: [ 
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     "Convallis aenean et tortor at risus viverra adipiscing at.",
     "Facilisis volutpat est velit egestas dui id ornare.",
     "Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.",
     "Egestas dui id ornare arcu odio ut.",
     "Morbi tristique senectus et netus.",
     "Eu scelerisque felis imperdiet proin fermentum leo vel orci.",
     "Cursus euismod quis viverra nibh cras pulvinar.",
     "Elementum pulvinar etiam non quam lacus suspendisse faucibus.",
     "Turpis cursus in hac habitasse platea."
    ],
    ideas:  [ 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Convallis aenean et tortor at risus viverra adipiscing at.",
    "Facilisis volutpat est velit egestas dui id ornare.",
    "Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.",
    "Egestas dui id ornare arcu odio ut.",
    "Morbi tristique senectus et netus.",
    "Eu scelerisque felis imperdiet proin fermentum leo vel orci.",
    "Cursus euismod quis viverra nibh cras pulvinar.",
    "Elementum pulvinar etiam non quam lacus suspendisse faucibus.",
    "Turpis cursus in hac habitasse platea."
    ]
}

export const plato = {
    name: "Plato",
    date: "428 BCE- 348 BCE",
    summary: platoData,
    life: [ 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Convallis aenean et tortor at risus viverra adipiscing at.",
        "Facilisis volutpat est velit egestas dui id ornare.",
        "Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.",
        "Egestas dui id ornare arcu odio ut.",
        "Morbi tristique senectus et netus.",
        "Eu scelerisque felis imperdiet proin fermentum leo vel orci.",
        "Cursus euismod quis viverra nibh cras pulvinar.",
        "Elementum pulvinar etiam non quam lacus suspendisse faucibus.",
        "Turpis cursus in hac habitasse platea."
       ],
       ideas:  [ 
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       "Convallis aenean et tortor at risus viverra adipiscing at.",
       "Facilisis volutpat est velit egestas dui id ornare.",
       "Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.",
       "Egestas dui id ornare arcu odio ut.",
       "Morbi tristique senectus et netus.",
       "Eu scelerisque felis imperdiet proin fermentum leo vel orci.",
       "Cursus euismod quis viverra nibh cras pulvinar.",
       "Elementum pulvinar etiam non quam lacus suspendisse faucibus.",
       "Turpis cursus in hac habitasse platea."
       ]
}

export const aristotle = {
    name: "Aristotle",
    date: "384 BCE- 322 BCE",
    summary: aristotleData,
    life: [ 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Convallis aenean et tortor at risus viverra adipiscing at.",
        "Facilisis volutpat est velit egestas dui id ornare.",
        "Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.",
        "Egestas dui id ornare arcu odio ut.",
        "Morbi tristique senectus et netus.",
        "Eu scelerisque felis imperdiet proin fermentum leo vel orci.",
        "Cursus euismod quis viverra nibh cras pulvinar.",
        "Elementum pulvinar etiam non quam lacus suspendisse faucibus.",
        "Turpis cursus in hac habitasse platea."
       ],
       ideas:  [ 
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
       "Convallis aenean et tortor at risus viverra adipiscing at.",
       "Facilisis volutpat est velit egestas dui id ornare.",
       "Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.",
       "Egestas dui id ornare arcu odio ut.",
       "Morbi tristique senectus et netus.",
       "Eu scelerisque felis imperdiet proin fermentum leo vel orci.",
       "Cursus euismod quis viverra nibh cras pulvinar.",
       "Elementum pulvinar etiam non quam lacus suspendisse faucibus.",
       "Turpis cursus in hac habitasse platea."
       ]
}