data = [
    {
      title: 'Hunger Games',
      isBorrowed: true,
    },
    {
      title: 'Harry Potter',
      isBorrowed: true,
    },
    {
      title: 'Assassins Creed',
      isBorrowed: true,
    },
    {
      title: 'Percy Jackson',
      isBorrowed: false,
    },
    {
      title: 'Fifty Shades of Grey',
      isBorrowed: false,
    },
  ];
  let search="Percy";
  for(let i=0;i<data.length;i++){
    for(key in data[i]){
          if(data[i][key].toString().indexOf(search)!=-1){
            console.log('A. '+(data[i]['isBorrowed']));
          }
      }
  }
  
  for(let i=0;i<data.length;i++){
    for(key in data[i]){
          if(data[i][key]==false){
            console.log('B. '+(data[i]['title']));
          }
      }
  }
  


// function bukuTersedia(data){
//   let ada = []
//   let no = 0
//   for(j = 0; j < data; j++){
//     if(data[j].isBorrowed === true){
//       ada[no] = data[j]
//       no++
//     } 
//     data.map(i =>i)
//     return console.log[ada]
//   }
// }
// bukuTersedia()