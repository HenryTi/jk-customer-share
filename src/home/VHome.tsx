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
			<div className="pl-1 py-1 mt-1 bg-white d-flex">
				{this.controller.cApp.cCoupon.renderActions()}
				<div className="flex-grow-1 cursor-pointer d-flex justify-content-end align-items-center" onClick={this.controller.coupon}>
					详情 <FA className="mx-3" name="angle-right" />
				</div>
			</div>

			<div className="border-top p-3">
				客户成交反馈
				<br/>
				... <br/>
				设计中...
			</div>
		</div>
	}
}