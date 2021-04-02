import { PropGrid, VPage } from "tonva-react";
import { CIDUnit } from "./CIDUnit";

export class VUnit extends VPage<CIDUnit> {
	header() {return '机构'}
	content() {
		let {item, midID} = this.controller;
		let {props, IDUI} = midID;
		return <div className="py-3">
			<PropGrid rows={props}
				values={item} />
			
		</div>;	
	}
}
