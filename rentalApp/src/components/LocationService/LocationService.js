import { usePlacesWidget } from "react-google-autocomplete";
import { connect } from 'react-redux';
import { storePickupLocation } from "../../redux/actions/locationActions";

const LocationService = (props) => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: 'AIzaSyCkeiEl0P1RTGE60itkTtpKTHme_hUTQhw',
        onPlaceSelected: (place) => {
            props.setLocation(place)
        },
        options: {
            types: ["geocode", "establishment"],
        },
    });

    return <input ref={ref}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
    />
}


export default LocationService