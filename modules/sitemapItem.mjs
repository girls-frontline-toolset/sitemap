/**
 * @param {string} url
 * @param {'daily' | 'monthly' | 'weekly'} freq
 * @default 'weekly'
 * @param {number} priority
 * @default 0.5
 * @param {string} data
 * */
export default function sitemapItem(url,freq = "weekly", priority = 0.5 , data  = new Date().toISOString().substring(0, 10)){
  this.item = {url: url, changefreq: freq, priority: priority, lastmodrealtime: true, lastmod: data};


    //{lang: 'ja', url: 'http://test.com/page-1/ja/',},
    //             {lang: 'zh-Hans', url: 'http://test.com/page-1/ja/',},
    //             {lang: 'zh-Hant', url: 'http://test.com/page-1/ja/',},


  this.item.links = [];
  this.item.links.push({lang: 'en', url: 'http://test.com/page-1/',},);
  this.item.links = [];

  this.addImage = function(url , caption , title){
      if(!title){ title = caption }

      if(!this.item.img){
          this.item.img = [];
      }

      this.item.img.push( {url: url , caption: caption, title: title } )
  }
}

