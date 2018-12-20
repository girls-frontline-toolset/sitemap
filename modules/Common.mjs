/**
 * @typedef {'5','4','3','2'} dollStar
 */

/**
 * @typedef {'HG'|'SMG'|'RF'|'AR'|'MG'|'SG'} dollType
 */

/**
 * @typedef  {array} girlTimeList
 * @property {string} time
 * @property {array} star5
 * @property {array} star4
 * @property {array} star3
 * @property {array} star2
 */

/**
 * @namespace girlList
 * @typedef {array} girlList
 * @property {number} no - no_name
 * @property {string} name
 * @property {dollStar} star
 * @property {dollType} type
 * @property {null|'0'|'1'} heavy
 * @property {string} src
 * @property {null|'1'} heavy
 */

if (document.querySelectorAll === null){
  document.querySelectorAll = function(){

  }
}

/** @typedef {array} deviceList
 * @property {number} equipment_no
 * @property {string} name
 * @property {string} type
 * @property {dollStar} star
 * @property {string} time
 * @property {string} attribute
 * @property {string} img
 * */
import $ from "./Request";

let HOST_NAME = "https://www.ntw-20.com";

let $Get = {
  /** @type {girlList[]} */
  AllGirl : $.getJSON(HOST_NAME + '/api/inquiry/allGirl').data,
  /** @type {girlTimeList[]} */
  AllGirlTime : $.getJSON(HOST_NAME + '/api/inquiry/allGirlTime').data,
  /** @type {deviceList[]} */
  AllDevice : $.getJSON(HOST_NAME + '/api/inquiry/AllDevice').data,
  //{fairy_no: "1", name: "勇士妖精", type: "戰鬥妖精"}
  AllFairy : $.getJSON(HOST_NAME + '/api/inquiry/AllFairy').data,
  //{time: "03:00:00", data: "3"}
  AllFairyTime : $.getJSON(HOST_NAME + '/api/inquiry/AllTimeFairy').data,
};


export default  {HOST_NAME , $Get};