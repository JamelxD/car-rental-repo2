import { usePlacesWidget } from "react-google-autocomplete";
import { connect } from 'react-redux';
import { storePickupLocation } from "../../redux/actions/locationActions";

const LocationService = (props) => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: 'AIzaSyCkeiEl0P1RTGE60itkTtpKTHme_hUTQhw',
        onPlaceSelected: (place) => {
            props.storePickupLocation(place)
            props.setPickupLocation(place)
            console.log(place);
        }
    });

    return <input ref={ref}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
    />
}

const mapDispatchToProps = (dispatch) => {
    return {
        storePickupLocation: (location) => { dispatch(storePickupLocation(location)) },
    }
}


export default connect(null, mapDispatchToProps)(LocationService)