import AddGirlTime from './Task/AddGirlTime';
import AddDeviceTime from './Task/AddDeviceTime';
import AddFairyTime from './Task/AddFairyTime';
import AddImageList from './Task/AddImageList';
import AddBasePath from './Task/AddBasePath';

export default function process(){
    this.addGirlTime = AddGirlTime;
    this.addDeviceTime = AddDeviceTime;
    this.addFairyTime = AddFairyTime;
    this.addImageList = AddImageList;
    this.addBasePath = AddBasePath;
}
