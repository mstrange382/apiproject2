let baseurl = 'https://calendarific.com/api/v2/holidays';
let key = '35f07ce234e69871a9d479b887caeb183e203d35';


function calApi() {
  console.log(baseurl + "?&api_key=" + key + "&country=US&year=2020" );
    fetch(baseurl + "?&api_key=" + key + "&country=US&year=2020")
      .then((Response) => Response.json())
      .then((result) => displayCal(result))
      .catch((error) => console.log(error));
      
  }

  calApi();

   function displayCal(response){
     console.log(response.response.holidays[0]);
     let days = response.response.holidays
     for (i = 0; i < days.length; i++){
        console.log(days[i].name);
         let dates = document.createElement('p');
         dates.innerText = days[i].name;
         let div = document.createElement('div');
        document.body.appendChild(div);
         div.appendChild(dates);
        
      }
 }









