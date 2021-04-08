import { FA, LMR, VPage } from "tonva-react";
import { CHome } from "./CHome";

export class VHome extends VPage<CHome> {
	header() {return '首页'}
	content() {
		return <div>
			<LMR className="px-3 py-3 cursor-pointer bg-white" 
				right={<FA name="angle-right" className="align-self-center" />}
				onClick={this.controller.share}>
				分享内容 <span className="badge badge-pill badge-danger">6</span>
			</LMR>
			<LMR className="px-3 py-3 mt-1 cursor-pointer bg-white"
				onClick={this.controller.coupon}
				right={<FA name="angle-right" />}>
				发券
			</LMR>
		</div>
	}
}
/*
<div className="border-top p-3">
客户成交反馈
<br/>
... <br/>
设计中...
</div>
*/