import SitemapItem from '../sitemapItem'
import common from "../Common"

export default function AddGirlTime(urlList){
    let timeList = common.$Get.AllGirlTime;
    let girlList = common.$Get.AllGirl;
    let item = null;
    let time = {hh:"",mm:""};

    for (let i = 0; i < timeList.length; i++) {
        [time.hh , time.mm] = timeList[i].time.toString().split(":");
        time.hh = parseInt(time.hh);
        time.mm = parseInt(time.mm);

        if(time.hh === 0){
            item = new SitemapItem("/list/girl/" + time.mm +"/");
        }else{
            item = new SitemapItem("/list/girl/" + time.hh + "/" + time.mm + "/");
        }

        let imgList = [];
        for (let j = 5; j >= 2; j--) {
            let tmp = timeList[i]["star" + j];

            if(tmp !== ''){
                imgList = imgList.concat(tmp)
            }
        }

        for (let j = 0; j < imgList.length; j++) {
            item.addImage("/common/girl/girl_" + parseInt(imgList[j]) +".jpg" , girlList[parseInt(imgList[j]) - 1].name);
        }
        urlList.push(item.item);
    }
}



