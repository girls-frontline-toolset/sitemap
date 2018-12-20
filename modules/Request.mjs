import request from "sync-request";

let getJSON = function(url){
    console.log(url);
    let res = request( 'GET',url);
    return JSON.parse(res.getBody('utf8'));
};

export default {getJSON};