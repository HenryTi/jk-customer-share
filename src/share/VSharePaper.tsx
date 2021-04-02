import { VPage } from "tonva-react";
import { Paper } from "uq-app/uqs/JkCustomer";
import { CShare } from "./CShare";

export class VSharePaper extends VPage<CShare> {
	header() {return '分享内容'}
	content() {
		let {paper} = this.controller;
		return <div className="">
			{this.renderPaper(paper)}

			<div>分享操作 ... </div>
		</div>;
	}

	private renderPaper = (paper: Paper): JSX.Element => {
		return <div className="px-3 py-2">
			{this.controller.uqs.JkCustomer.Paper.render(paper)}
		</div>;
	}
}
