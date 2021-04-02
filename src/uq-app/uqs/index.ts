//=== UqApp builder created on Thu Apr 01 2021 23:56:21 GMT-0400 (GMT-04:00) ===//
import * as JkCustomer from './JkCustomer';

export interface UQs {
	JkCustomer: JkCustomer.UqExt;
}

export * as JkCustomer from './JkCustomer';

export function setUI(uqs:UQs) {
	JkCustomer.setUI(uqs.JkCustomer);
}
