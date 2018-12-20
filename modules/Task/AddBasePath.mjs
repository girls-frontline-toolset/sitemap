import SitemapItem from '../sitemapItem'
import common from "../Common"

export default function AddBasePath(urlList){
   let path =  {
       "/":[],
       time:{girl:[],fairy:[],device:[],},
       list:{girl:[],fairy:[],wafer:[],support_unit:[],doc:["/","search","add"]},
       tool:{android:[],chrome:[]},
       bot:{line:["/","img"]},
       more:{line:[],about:[],link:[],feedback:[],privacy_policy:[]},
       fb:{list:[]},
       log:{update:[]},
       like:{list:[]},
       make:{girl:[],device:[],hGirl:[],hDevice:[],wafer:[]},
       image:{add:[],all:[]},
       event:{schedule:[]},
       "magical-tool":{"so-appetizing":[]}
   };


    let fairyList = common.$Get.AllFairy;
    let fairyTime = common.$Get.AllFairyTime;
    let timeList = [];

    for (let i = 0; i <fairyTime.length; i++) {
        if (!timeList[fairyTime[i].time]){
            timeList[fairyTime[i].time] = [];
        }

        timeList[fairyTime[i].time] = {name:fairyList[parseInt(fairyTime[i].data) - 1 ].name,img:fairyList[parseInt(fairyTime[i].data) - 1].fairy_no};
    }
    console.log(timeList);

    for (let timeItem in timeList){
        let time = timeItem.split(":");
        let item = new SitemapItem("/time/fairy/" + time[0] +"/" + time[1] +"/");
        item.addImage("/common/fairy/fairy_" + timeList[timeItem].img  + ".jpg", timeList[timeItem].name)
        urlList.push(item.item);
    }
}
