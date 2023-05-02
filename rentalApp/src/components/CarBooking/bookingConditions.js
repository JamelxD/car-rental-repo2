import { Link } from "react-router-dom"
export const bookingConditions = () => {
    return (
        <div>
            <p>You can view the full terms and conditions at the vendor's site <Link to={"https://www.sixt.com/ride/bookingconditions/"}> here</Link></p>
        </div>
    )
}
