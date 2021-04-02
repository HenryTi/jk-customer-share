import { VPage } from "tonva-react";
import { CRelations } from "./CRelations";

export class VRelations extends VPage<CRelations> {
	header() {return '客户'}
	content() {
		return <div className="">
			<div className="px-3 py-2 mb-1 cursor-pointer bg-white" onClick={this.controller.showUnits}>机构</div>
			<div className="px-3 py-2 mb-1 cursor-pointer bg-white" onClick={this.controller.showCostomers}>客户</div>
		</div>
	}
}
