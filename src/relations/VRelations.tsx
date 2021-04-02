import { FA, LMR, VPage } from "tonva-react";
import { CRelations } from "./CRelations";

export class VRelations extends VPage<CRelations> {
	header() {return '客户'}
	content() {		
		return <div className="">
			<LMR className="px-3 py-2 mb-1 cursor-pointer bg-white align-items-center" 
				left={<FA name="home" className="text-primary mr-3" />}
				onClick={this.controller.showUnits}>
				机构
			</LMR>
			<LMR className="px-3 py-2 mb-1 cursor-pointer bg-white align-items-center"
				left={<FA name="user" className="text-info mr-3" />}
				onClick={this.controller.showCostomers}>
				客户
			</LMR>
		</div>
	}
}
