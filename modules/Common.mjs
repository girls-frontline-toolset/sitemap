import $ from "./Request";

let HOST_NAME = "https://www.ntw-20.com";

let $Get = {
  AllGirl : $.getJSON(HOST_NAME + '/api/inquiry/allGirl').data,

  /** @namespace AllGirlTime.star5
   *  @type {array}
   *  */
  AllGirlTime : $.getJSON(HOST_NAME + '/api/inquiry/allGirlTime').data
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