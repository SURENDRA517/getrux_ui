import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import '../../styles/common/style'

@connect( (store) => {
    return{
      test: "hello"
    }
})
export default class LandingPage extends Component {
  render(){
    return(
      <div className="row">
         <div className="col-md-offset-2 col-md-8">
             <div id="navtab" className="center-align">
               <ul className="nav nav-tabs" role="tablist">
                 <li role="presentation" className="active"><a href="#load" aria-controls="load" role="tab" data-toggle="tab" aria-expanded="false">Add Load</a></li>
                 <li role="presentation" className=""><a href="#truck" aria-controls="truck" role="tab" data-toggle="tab" aria-expanded="true">Post Truck</a></li>
                 <li role="presentation" className=""><a href="#searchtruck" aria-controls="searchtruck" role="tab" data-toggle="tab" aria-expanded="false">Search Truck</a></li>
               </ul>
               <div className="tab-content">
                 <div role="tabpanel" className="tab-pane active" id="load">
                     <form method="post" action="/">
                         <input type="hidden" name="_token" value="8vlKjsTKk5mcUH64rmgRiSvxMKw9faXQuiilVxjC" />
                         <div className="row form-top-margin"></div>
                         <div className="row form-top-margin">
                             <div className="col-md-4">
                                 <input className="form-control" placeholder="From: Source City" data-geo="formatted_address" id="location-from" name="from_address[formatted_address]" type="text"/>
                                 <div className="address-hidden-from">
                                     <input className="form-control" data-geo-from="place_id" name="from_address[place_id]" type="hidden" />
                                     <input className="form-control" data-geo-from="lat" name="from_address[lat]" type="hidden" />
                                     <input className="form-control" data-geo-from="lng" name="from_address[lng]" type="hidden" />
                                     <input className="form-control" data-geo-from="postal_code" name="from_address[postal_code]" type="hidden" />
                                     <input className="form-control" data-geo-from="street_address" name="from_address[street_address]" type="hidden" />
                                     <input className="form-control" data-geo-from="administrative_area_level_1" name="from_address[administrative_area_level_1]" type="hidden" />
                                     <input className="form-control" data-geo-from="administrative_area_level_2" name="from_address[administrative_area_level_2]" type="hidden" />
                                     <input className="form-control" data-geo-from="administrative_area_level_3" name="from_address[administrative_area_level_3]" type="hidden" />
                                     <input className="form-control" data-geo-from="administrative_area_level_4" name="from_address[administrative_area_level_4]" type="hidden" />
                                     <input className="form-control" data-geo-from="country" name="from_address[country]" type="hidden" />
                                     <input className="form-control" data-geo-from="locality" name="from_address[locality]" type="hidden" />
                                     <input className="form-control" data-geo-from="political" name="from_address[political]" type="hidden" />
                                     <input className="form-control" data-geo-from="sublocality" name="from_address[sublocality]" type="hidden" />
                                     <input className="form-control" data-geo-from="neighborhood" name="from_address[neighborhood]" type="hidden" />
                                     <input className="form-control" data-geo-from="street_number" name="from_address[street_number]" type="hidden" />
                                     <input className="form-control" data-geo-from="floor" name="from_address[floor]" type="hidden" />
                                     <input className="form-control" data-geo-from="room" name="from_address[room]" type="hidden" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <input className="form-control" placeholder="To: Destination City" data-geo="formatted_address" id="location-to" name="to_address[formatted_address]" type="text"  />
                                 <div className="address-hidden-to">
                                     <input className="form-control" data-geo-to="place_id" name="to_address[place_id]" type="hidden" />
                                     <input className="form-control" data-geo-to="lat" name="to_address[lat]" type="hidden" />
                                     <input className="form-control" data-geo-to="lng" name="to_address[lng]" type="hidden" />
                                     <input className="form-control" data-geo-to="postal_code" name="to_address[postal_code]" type="hidden" />
                                     <input className="form-control" data-geo-to="street_address" name="to_address[street_address]" type="hidden" />
                                     <input className="form-control" data-geo-to="administrative_area_level_1" name="to_address[administrative_area_level_1]" type="hidden" />
                                     <input className="form-control" data-geo-to="administrative_area_level_2" name="to_address[administrative_area_level_2]" type="hidden" />
                                     <input className="form-control" data-geo-to="administrative_area_level_3" name="to_address[administrative_area_level_3]" type="hidden" />
                                     <input className="form-control" data-geo-to="administrative_area_level_4" name="to_address[administrative_area_level_4]" type="hidden" />
                                     <input className="form-control" data-geo-to="country" name="to_address[country]" type="hidden" />
                                     <input className="form-control" data-geo-to="locality" name="to_address[locality]" type="hidden" />
                                     <input className="form-control" data-geo-to="political" name="to_address[political]" type="hidden" />
                                     <input className="form-control" data-geo-to="sublocality" name="to_address[sublocality]" type="hidden" />
                                     <input className="form-control" data-geo-to="neighborhood" name="to_address[neighborhood]" type="hidden" />
                                     <input className="form-control" data-geo-to="street_number" name="to_address[street_number]" type="hidden" />
                                     <input className="form-control" data-geo-to="floor" name="to_address[floor]" type="hidden" />
                                     <input className="form-control" data-geo-to="room" name="to_address[room]" type="hidden" />
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <select className="form-control" name="truck_type_id">
                                    <option value=""> truck type</option>
                                    <option value="1">Heavy</option>
                                    <option value="2">Mini</option>
                                 </select>
                             </div>
                         </div>
                         <div className="row form-top-margin">
                             <div className="col-md-4">
                                 <select className="form-control" name="material_type_id">
                                    <option value=""> material type</option>
                                    <option value="1">Brick</option><option value="2">Cement</option>
                                    <option value="3">Sand</option><option value="4">Leather</option>
                                 </select>
                             </div>
                             <div className="col-md-4">
                                 <input className="form-control" placeholder="Select Scheduled Date" data-provide="datepicker" name="scheduled_date" type="text" />
                             </div>
                             <div className="col-md-4">
                                 <input className="form-control" placeholder="Weight" name="weight" type="text" />
                             </div>
                         </div>
                         <div className="row form-top-margin">
                             <div className="text-center">
                                 <input className="btn btn-warning" type="submit" value="Add Load" />
                             </div>
                         </div>
                     </form>
                 </div>
                 <div role="tabpanel" className="tab-pane" id="truck">
                     <form method="post" action="/">
                         <input type="hidden" name="_token" value="8vlKjsTKk5mcUH64rmgRiSvxMKw9faXQuiilVxjC" />
                         <div className="row form-top-margin">
                             <div className="col-md-6">
                                 <input className="form-control" id="truck-number" placeholder="Truck Number" name="number" type="text" />
                             </div>
                             <div className="col-md-6">
                                 <input className="form-control" placeholder="Driver Mobile" name="mobile" type="text" />
                             </div>
                         </div>
                         <div className="row form-top-margin">
                             <div className="col-md-4">
                                 <input className="form-control" placeholder="From: Source City" data-geo="formatted_address" id="truck-location-from" name="from_address[formatted_address]" type="text"  />
                                 <div className="address-hidden-from">
                                     <input className="form-control" data-geo-from="place_id" name="from_address[place_id]" type="hidden" />
                                     <input className="form-control" data-geo-from="lat" name="from_address[lat]" type="hidden" />
                                     <input className="form-control" data-geo-from="lng" name="from_address[lng]" type="hidden" />
                                     <input className="form-control" data-geo-from="postal_code" name="from_address[postal_code]" type="hidden" />
                                     <input className="form-control" data-geo-from="street_address" name="from_address[street_address]" type="hidden"/>
                                     <input className="form-control" data-geo-from="administrative_area_level_1" name="from_address[administrative_area_level_1]" type="hidden"/>
                                     <input className="form-control" data-geo-from="administrative_area_level_2" name="from_address[administrative_area_level_2]" type="hidden"/>
                                     <input className="form-control" data-geo-from="administrative_area_level_3" name="from_address[administrative_area_level_3]" type="hidden"/>
                                     <input className="form-control" data-geo-from="administrative_area_level_4" name="from_address[administrative_area_level_4]" type="hidden"/>
                                     <input className="form-control" data-geo-from="country" name="from_address[country]" type="hidden"/>
                                     <input className="form-control" data-geo-from="locality" name="from_address[locality]" type="hidden"/>
                                     <input className="form-control" data-geo-from="political" name="from_address[political]" type="hidden"/>
                                     <input className="form-control" data-geo-from="sublocality" name="from_address[sublocality]" type="hidden"/>
                                     <input className="form-control" data-geo-from="neighborhood" name="from_address[neighborhood]" type="hidden"/>
                                     <input className="form-control" data-geo-from="street_number" name="from_address[street_number]" type="hidden"/>
                                     <input className="form-control" data-geo-from="floor" name="from_address[floor]" type="hidden"/>
                                     <input className="form-control" data-geo-from="room" name="from_address[room]" type="hidden"/>
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <input className="form-control" placeholder="To: Destination City" data-geo="formatted_address" id="truck-location-to" name="to_address[formatted_address]" type="text"  />
                                 <div className="address-hidden-to">
                                     <input className="form-control" data-geo-to="place_id" name="to_address[place_id]" type="hidden"/>
                                     <input className="form-control" data-geo-to="lat" name="to_address[lat]" type="hidden"/>
                                     <input className="form-control" data-geo-to="lng" name="to_address[lng]" type="hidden"/>
                                     <input className="form-control" data-geo-to="postal_code" name="to_address[postal_code]" type="hidden"/>
                                     <input className="form-control" data-geo-to="street_address" name="to_address[street_address]" type="hidden"/>
                                     <input className="form-control" data-geo-to="administrative_area_level_1" name="to_address[administrative_area_level_1]" type="hidden"/>
                                     <input className="form-control" data-geo-to="administrative_area_level_2" name="to_address[administrative_area_level_2]" type="hidden"/>
                                     <input className="form-control" data-geo-to="administrative_area_level_3" name="to_address[administrative_area_level_3]" type="hidden"/>
                                     <input className="form-control" data-geo-to="administrative_area_level_4" name="to_address[administrative_area_level_4]" type="hidden"/>
                                     <input className="form-control" data-geo-to="country" name="to_address[country]" type="hidden"/>
                                     <input className="form-control" data-geo-to="locality" name="to_address[locality]" type="hidden"/>
                                     <input className="form-control" data-geo-to="political" name="to_address[political]" type="hidden"/>
                                     <input className="form-control" data-geo-to="sublocality" name="to_address[sublocality]" type="hidden"/>
                                     <input className="form-control" data-geo-to="neighborhood" name="to_address[neighborhood]" type="hidden"/>
                                     <input className="form-control" data-geo-to="street_number" name="to_address[street_number]" type="hidden"/>
                                     <input className="form-control" data-geo-to="floor" name="to_address[floor]" type="hidden"/>
                                     <input className="form-control" data-geo-to="room" name="to_address[room]" type="hidden"/>
                                 </div>
                             </div>
                             <div className="col-md-4">
                                 <input className="form-control" placeholder="Select Availability Date" data-provide="datepicker" name="availability_date" type="text"/>
                             </div>
                         </div>
                         <div className="row form-top-margin">
                             <div className="text-center">
                                 <input className="btn btn-warning" type="submit" value="Post Truck" />
                             </div>
                         </div>
                     </form>
                 </div>
                 <div role="tabpanel" className="tab-pane" id="searchtruck">
                     <form>
                         <div className="row form-top-margin">
                             <div className="col-md-6">
                                 <input className="form-control" placeholder="From : Source City" name="weight" type="text"/>
                             </div>
                             <div className="col-md-6">
                                 <input className="form-control" placeholder="To : Destination" name="weight" type="text"/>
                             </div>
                         </div>
                         <div className="row form-top-margin">
                             <div className="col-md-6">
                                 <input className="form-control" placeholder="Available Date" name="weight" type="text"/>
                             </div>
                             <div className="col-md-6">
                                 <input className="form-control" placeholder="Truck Type" name="weight" type="text"/>
                             </div>
                         </div>
                         <div className="row form-top-margin">
                             <div className="text-center">
                                 <input className="btn btn-warning" type="submit" value="Search Truck"/>
                             </div>
                         </div>
                     </form>
                 </div>
               </div>
            </div>
         </div>
      </div>
    )
  }
}
