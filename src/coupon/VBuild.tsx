import { VPage } from "tonva-react";
import { CCoupon } from "./CCoupon";

abstract class VBuild extends VPage<CCoupon> {
	content() {
		return <div className="p-3">
			<button className="btn btn-primary" onClick={this.onBuild}>新建</button>
		</div>
	}

	protected abstract doBuild(): Promise<void>;

	protected onBuild = async () => {
		await this.doBuild();
		this.closePage();
	}
}

export class VBuildPoint extends VBuild {
	header() {return '积分券'}
	protected async doBuild(): Promise<void> {
		this.controller.buildPoint();
	}
}

export class VBuildDiscount extends VBuild {
	header() {return '优惠券'}
	protected async doBuild(): Promise<void> {
		this.controller.buildDiscount();
	}
}
