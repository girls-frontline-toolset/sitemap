import SitemapItem from '../sitemapItem'
import common from "../Common"

export default function Task01(urlList){
    //console.log(urlList);

    let item = new SitemapItem("a");
    //console.log(item.item);

    item.addImage("a","1231");
    //console.log(item.item);
    urlList.push(item.item);
    console.log(common.$Get.list1);
}



