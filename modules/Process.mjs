import AddGirlTime from './Task/AddGirlTime';
import AddDeviceTime from './Task/AddDeviceTime';
import AddFairyTime from './Task/AddFairyTime';

export default function process(){
    this.addGirlTime = AddGirlTime;
    this.addDeviceTime = AddDeviceTime;
    this.addFairyTime = AddFairyTime;
}