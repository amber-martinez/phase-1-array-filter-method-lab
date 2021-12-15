const driversExt = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(group, name) {
    const result = group.filter(word => word.toUpperCase() === name.toUpperCase())
    return result
}

function fuzzyMatch(group, letters) {
    const result = group.filter(letter => letter.substring(0,2) === letters.substring(0,2))
    return result
}



function matchName(group, name) {
    return group.filter(nameMatch => nameMatch.name === name)
}