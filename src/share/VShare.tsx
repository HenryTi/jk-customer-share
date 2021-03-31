import { VPage } from "tonva-react";
import { CShare } from "./CShare";

export class VShare extends VPage<CShare> {
	header() {return '分享'}
	content() {
		return <div className="p-3">
			{this.header()}
		</div>
	}
}
