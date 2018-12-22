import common from './modules/Common'
import fs from 'fs';
import sm from "sitemap";
import Process from './modules/Process';


let process = new Process();
/**
 * @typedef {array} url
 * @property {string} url
 * @property {'daily' | 'monthly' | 'weekly'} changefreq
 * @property {number} priority
 * @property {boolean} lastmodrealtime
 * @property {string} lastmod
 * @property {array} links
 * @property {array} img
 */

/** @type {url[]} */
let urlsList = [];

process.addBasePath(urlsList);
process.addGirlTime(urlsList);
process.addDeviceTime(urlsList);
process.addFairyTime(urlsList);
process.addImageList(urlsList);
process.saveLinkToFile(urlsList);

// noinspection SpellCheckingInspection
let sitemap = sm.createSitemap({
    hostname: common.HOST_NAME,
    cacheTime: 600000,  //600 sec (10 min) cache purge period
    urls: urlsList
    // [
    //     {url: '/', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true, lastmod: today},
    //     {url: '/page1&=1', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true, lastmod: today},
    //     {
    //         url: '/page2', changefreq: 'weekly', priority: 0.8, lastmodrealtime: true, lastmod: today,
    //         img: [{
    //             url: '/img1.jpg',
    //             caption: 'An image',
    //             title: 'The Title of Image One'
    //         },],
    //         links: [
    //             {lang: 'en', url: 'http://test.com/page-1/',},
    //             {lang: 'ja', url: 'http://test.com/page-1/ja/',},
    //             {lang: 'zh-Hans', url: 'http://test.com/page-1/ja/',},
    //             {lang: 'zh-Hant', url: 'http://test.com/page-1/ja/',},
    //
    //
    //         ]
    //     }
    // ]
});
// console.log(sitemap);
fs.writeFileSync("./sitemap.xml", sitemap.toString());
