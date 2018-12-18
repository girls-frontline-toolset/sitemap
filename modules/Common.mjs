import $ from "./Request";

let HOST_NAME = "https://api.myjson.com";

let $Get = {
  list1 : $.getJSON(HOST_NAME + '/bins/chizk') ,
  list2 : []
};





//
//
//     , function (error, response, body) {
//     if (!error && response.statusCode === 200) {
//         $Get.list1 = JSON.parse(body).data;
//          console.log($Get.list1);
//     }
// });

// request("https://api.myjson.com/bins/chizk",function(data){
//     console.log(data);
// });


export default  {HOST_NAME , $Get};