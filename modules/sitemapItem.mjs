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

  this.item.links = [];
  this.item.links.push({lang: 'zh-Hant', url: '/tw' + url}); //tw,
  this.item.links.push({lang: 'zh-Hans', url: '/cn' + url});  //cn
  this.item.links.push({lang: 'ja', url: '/ja' + url}); //ja
  this.item.links.push({lang: 'en', url: '/en' + url}); //en

  this.addImage = function(url , caption , title){
      if(!title){ title = caption }

      if(!this.item.img){
          this.item.img = [];
      }

      this.item.img.push( {url: url , caption: caption, title: title } )
  }
}

