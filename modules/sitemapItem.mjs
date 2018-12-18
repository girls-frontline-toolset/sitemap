export default function sitemapItem(url,freq = "weekly", priority = 0.5 , data  = new Date().toISOString().substring(0, 10)){
  this.item = {url: url, changefreq: freq, priority: priority, lastmodrealtime: true, lastmod: data};
  //TODO add 本地化版本
  this.addImage = function(url , caption , title){
      if(!title){ title = caption }

      if(!this.item.img){
          this.item.img = [];
      }

      this.item.img.push( {url: url , caption: caption, title: title } )
  }
}

