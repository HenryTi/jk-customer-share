//=== UqApp builder created on Thu Apr 08 2021 18:56:58 GMT-0400 (GMT-04:00) ===//
import * as JkCustomer from './JkCustomer';

export interface UQs {
	JkCustomer: JkCustomer.UqExt;
}

export * as JkCustomer from './JkCustomer';

export function setUI(uqs:UQs) {
	JkCustomer.setUI(uqs.JkCustomer);
}
