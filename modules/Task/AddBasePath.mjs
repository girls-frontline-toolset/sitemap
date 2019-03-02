import SitemapItem from '../sitemapItem'

export default function AddBasePath(urlList){
   let path =  {
       "/":[],
       time:{girl:[],fairy:[],device:[],},
       list:{girl:[],fairy:[],wafer:[],support_unit:[],doc:["/","search","add"]},
       tool:{android:[],chrome:[]},
       bot:{line:["/","img"]},
       more:{line:[],about:[],link:[],feedback:[],privacy_policy:[],sitemap:[]},
       fb:{list:[]},
       log:{update:[]},
       like:{list:[]},
       make:{girl:[],device:[],hGirl:[],hDevice:[],wafer:[]},
       image:{add:[],all:[]},
       event:{schedule:[]},
       "magical-tool":{"so-appetizing":[]}
   };

    for (const key in path) {
        if (!Array.isArray(path[key])) {
            for (const key2 in path[key]) {
                if (path[key].hasOwnProperty(key2) && path[key][key2].length > 0) {
                    for (const key3 in path[key][key2]) {
                        if (path[key][key2].hasOwnProperty(key3) && path[key][key2][key3] === "/") {
                            urlList.push(new SitemapItem("/" + key + "/" + key2 +"/").item);

                        }else{
                            urlList.push(new SitemapItem("/" + key + "/" + key2 +"/" + path[key][key2][key3] + "/" , "daily",1).item);
                        }
                    }
                }else{
                    urlList.push(new SitemapItem("/" + key + "/" + key2 +"/", "daily",1).item);
                }
            }
        }else{
            urlList.push(new SitemapItem(key, "daily",1).item);
        }
    }
}
