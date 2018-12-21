import SitemapItem from '../sitemapItem'
import common from "../Common"

export default function AddImageList(urlList){
    let npcList = common.$Get.AllNpc;
    let girlList = common.$Get.AllGirl;
    let sangvisList = common.$Get.AllSangvis;

    for (let i = 0; i < npcList.length; i++) {
        urlList.push(new SitemapItem("/image/" + npcList[i].name +"/","daily").item);
    }

    for (let i = 0; i < girlList.length; i++) {
        urlList.push(new SitemapItem("/image/" + girlList[i].name +"/","daily").item);
    }

    for (let i = 0; i <  sangvisList.length; i++) {
        urlList.push(new SitemapItem("/image/" + sangvisList[i].name +"/","daily").item);
    }

}
