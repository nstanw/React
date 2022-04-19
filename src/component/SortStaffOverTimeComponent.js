import { useState } from "react";
import {Card,CardImg,CardHeader,CardText} from 'reactstrap'

const SortStaffOverTime = ({staffs}) => {
   
return(
    <div id="sort-overtime">
        <h4>Thời gian làm over time nhiều nhất</h4>
    <div className="row cardovertime">
    {staffs.map(staff => (
        <div id='cardOverTime'    className="col-6 col-md-4 col-lg-3">
        <Card >
           <CardHeader>{staff.name}</CardHeader>
           <CardImg src={staff.image} alt={staff.name}/>
           <CardText>Số giờ làm thêm:{staff.overTime}</CardText>
        </Card>
        </div>
    ))}
    </div>
    </div>
)
}
export default SortStaffOverTime;