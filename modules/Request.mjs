import request from "sync-request";

/**
 * @param {string} url
 * @returns {Object}
 */
let getJSON = function(url){
    let res = request( 'GET',url);
    return JSON.parse(res.getBody('utf8'));
};

export default {getJSON};
