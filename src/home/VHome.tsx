import { VPage } from "tonva-react";
import { CHome } from "./CHome";

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {
		return <div>
			<div className="px-3 py-2 cursor-pointer bg-white" onClick={this.controller.share}>分享内容</div>
			<div className="px-3 py-2 mt-1 cursor-pointer bg-white" onClick={this.controller.coupon}>发放卡券</div>
			<div className="mt-1 px-3 py-2 bg-white">
				{this.header()}
			</div>
		</div>
	}
}