import { JkCustomerPageItems } from "tools";
import { CUqBase } from "uq-app";
import { Paper } from "uq-app/uqs/JkCustomer";
import { VShare } from "./VShare";
import { VSharePaper } from "./VSharePaper";

export class CShare extends CUqBase {
	paperItems: PaperPageItems;
	paper: Paper;

	protected async internalStart() {
		this.paperItems = new PaperPageItems(this.uqs.JkCustomer);
		this.openVPage(VShare);
		await this.paperItems.first(undefined);
	}

	tab = () => {
		return this.renderView(VShare);
	}

	load = async() => {
		
	}

	onPaper = async(paper: Paper) => {
		this.paper = paper;
		this.openVPage(VSharePaper);
	}
}

class PaperPageItems extends JkCustomerPageItems<Paper> {
	async loadResults(param: any, pageStart:any, pageSize:number):Promise<{[name:string]:any[]}> {
		let ret = await this.jkCustomer.ID<Paper>({
			IDX: [this.jkCustomer.Paper],
			id: undefined,
			page: {
				start: pageStart,
				size: pageSize,
				end: 0,				// 这个做什么用的？
			}
		});
		return {
			$page: ret,
		};
	}
}
