import SitemapItem from '../sitemapItem'
import common from "../Common"

export default function Task01(urlList){


     // *  @namespace timeList.star4
     // *  @type {array}
     // *
     // *  @namespace timeList.star3
     // *  @type {array}
     // *  @namespace timeList.star2
     // *  @type {array}
     // *  @namespace timeList.time
     // *  @type {string}
     // *
     // *
     // *  */
    let timeList = common.$Get.AllGirlTime;
    let item = null;
    let time = {hh:"",mm:""};

    for (let i = 0; i < timeList.length; i++) {
        [time.hh , time.mm] = timeList[i].time.toString().split(":");
        time.hh = parseInt(time.hh);
        time.mm = parseInt(time.mm);

        if(time.hh === 0){
            console.log("/list/girl/" + time.mm);
            item = new SitemapItem("/list/girl/" + time.mm);
        }else{
            item = new SitemapItem("/list/girl/" + time.hh + "/" + time.mm);
        }



        let imgList = timeList[0].star5;

        console.log(timeList);
        let a = ["1","2","3"];
        let b = ["4","5","6"];
        let c = ["7","8","9"];
        let d = "";

        a.concat(b);
        a.concat(c);
        a.concat(d);
        console.log(a.concat(d.concat(d)));
        urlList.push(item.item);
    }

    //console.log(urlList);

    //
    //console.log(item.item);

    //item.addImage("a","1231");
    //console.log(item.item);
    //urlList.push(item.item);
    //console.log(common.$Get.list1);
}



