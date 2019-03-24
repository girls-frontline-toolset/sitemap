/** @typedef {'5','4','3','2'} DollStar */
/** @typedef {'HG'|'SMG'|'RF'|'AR'|'MG'|'SG'} DollType */
/** @typedef {'common'|'armor'|'unusual'|'boss'} SangvisType */

/**
 * @typedef  {array} GirlTimeList
 * @property {string} time
 * @property {array} star5
 * @property {array} star4
 * @property {array} star3
 * @property {array} star2
 */

/**
 * @typedef {array} GirlList
 * @property {number} no
 * @property {string} name
 * @property {string} ja_name
 * @property {string} en_name
 * @property {string} cn_name
 * @property {DollStar} star
 * @property {DollType} type
 * @property {null|'0'|'1'} heavy
 * @property {string} src
 */

/** @typedef {array} DeviceList
 * @property {number} equipment_no
 * @property {string} name
 * @property {string} type
 * @property {DollStar} star
 * @property {string} time
 * @property {string} attribute
 * @property {string} img
 * */

/** @typedef {array} FairyList
 *  @property {string} fairy_no
 *  @property {string} name
 *  @property {string} type
 */

/**
 *  @typedef {array} FairyListTime
 *  @property {string} time
 *  @property {string} data
 */

/** @typedef {array} NpcList
 *  @property {string} no
 *  @property {string} name
 */

/** @typedef {array} SangvisList
 *  @property {string} no
 *  @property {string} name
 *  @property {SangvisType} type
 */
import $ from "./Request";

let HOST_NAME = "https://www.ntw-20.com";

let $Get = {
  /** @type {GirlList[]} */
  AllGirl: $.getJSON(HOST_NAME + '/api/inquiry/allGirl').data,
  /** @type {GirlTimeList[]} */
  AllGirlTime: $.getJSON(HOST_NAME + '/api/inquiry/allGirlTime').data,
  /** @type {DeviceList[]} */
  AllDevice: $.getJSON(HOST_NAME + '/api/inquiry/AllDevice').data,
  /** @type {FairyList[]} */
  AllFairy: $.getJSON(HOST_NAME + '/api/inquiry/AllFairy').data,
  /** @type {FairyListTime[]} */
  AllFairyTime: $.getJSON(HOST_NAME + '/api/inquiry/AllTimeFairy').data,
  /** @type {NpcList[]} */
  AllNpc: $.getJSON(HOST_NAME + '/api/inquiry/npc').data,
  /** @type {SangvisList[]} */
  AllSangvis: $.getJSON(HOST_NAME + '/api/inquiry/sangvisl').data,
};

export default  {HOST_NAME , $Get};
