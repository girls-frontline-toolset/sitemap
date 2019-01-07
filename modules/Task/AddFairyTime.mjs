import SitemapItem from '../sitemapItem'
import common from "../Common"

export default function AddFairyTime(urlList){
    let fairyList = common.$Get.AllFairy;
    let fairyTime = common.$Get.AllFairyTime;
    let timeList = [];

    for (let i = 0; i <fairyTime.length; i++) {
        if (!timeList[fairyTime[i].time]){
            timeList[fairyTime[i].time] = [];
        }

        timeList[fairyTime[i].time] = {name:fairyList[parseInt(fairyTime[i].data) - 1 ].name,img:fairyList[parseInt(fairyTime[i].data) - 1].fairy_no};
    }
    for (let timeItem in timeList){
        let time = timeItem.split(":");
        let item = new SitemapItem("/time/fairy/" + time[0] +"/" + time[1] +"/");
        item.addImage("/common/fairy/fairy_" + timeList[timeItem].img  + ".jpg", timeList[timeItem].name);
        urlList.push(item.item);
    }
}
