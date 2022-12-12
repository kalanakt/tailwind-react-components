import { myLoader } from "@utils/all";
import Image from "next/image";
import ReactStars from 'react-stars'

export default function Rater(rate) {
    rate = rate.rate
    const rates = {
        size: 26,
        value: rate,
        edit: false
      }
	return (
		<div className=" -ml-0.5 flex">
            <ReactStars
                {...rates}
            />
		</div>
	);
}
