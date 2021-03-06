import { List, VPage } from "tonva-react";
import { Paper } from "uq-app/uqs/JkCustomer";
import { CShare } from "./CShare";

export class VShare extends VPage<CShare> {
	header() {return '分享'}
	content() {
		let {paperItems, onPaper} = this.controller;
		return <div className="">
			<List items={paperItems} item={{render: this.renderPaper, onClick: onPaper}}/>
		</div>;
	}

	private renderPaper = (paper: Paper, index: number): JSX.Element => {
		return <div className="px-3 py-2">
			{this.controller.uqs.JkCustomer.Paper.render(paper)}
		</div>;
	}
}
