import React from 'react';
import { stylesCustomMaps } from './stylesMaps';
import GoogleMapReact from 'google-map-react';
import MyMarket from './MyMarket';
import MarketPin from './MarketPin';
import NotesMap from './NotesMap';

const MapLocation = (props) => {
    const { markets, isLast } = props;
    return (
        <>
            <div className="section">
                <section className="location-map" id="locationMap">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAiQX1yfcvHCeM98e6asi-Wi-Y_H4-V1Qw' }}
                        defaultCenter={{
                            lat: 16.071804859689813,
                            lng: 108.14859628194488
                        }}
                        defaultZoom={15}
                        options={{
                            styles: stylesCustomMaps,
                            gestureHandling: "cooperative",
                            fullscreenControl: false,
                            zoomControl: false
                        }}
                        onClick={(e) => { }}
                    >
                        <MyMarket lat={16.071804859689813} lng={108.14859628194488} text="Home's Dev" />
                        {
                            markets && markets.map((market, index) => (
                                (market.lat && market.lng) ? <MarketPin key={index} lat={market.lat} lng={market.lng} text={index} color={market.color} isLast={isLast || false} /> : null
                            ))
                        }

                    </GoogleMapReact>
                    <NotesMap />
                </section>
            </div>
        </>
    );
}

export default MapLocation;
