import { VPage } from "tonva-react";
import { CCustomer } from "./CCustomer";

export class VCustomer extends VPage<CCustomer> {
	header() {return '客户'}
	content() {
		return <div className="p-3">
			{this.header()}
		</div>
	}
}
