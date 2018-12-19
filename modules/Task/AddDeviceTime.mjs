import SitemapItem from '../sitemapItem'
import common from "../Common"

export default function AddDeviceTime(urlList){
    let deviceList = common.$Get.AllDevice;
    let timeList = [];

    for (let i = 0; i < deviceList.length; i++) {

        if (!timeList[deviceList[i].time]){
            timeList[deviceList[i].time] = []
        }

        timeList[deviceList[i].time].push({name:deviceList[i].name,img:deviceList[i].img});
    }

    for (let i = 0; i < timeList.length; i++) {
        if(timeList[i]){

            let item = new SitemapItem("/time/device/" + i +"/");
            for (let j = 0; j < timeList[i].length; j++) {
                item.addImage("/common/device/" + timeList[i][j].img + ".png",timeList[i][j].name)
            }
            urlList.push(item.item);
        }

    }
}
