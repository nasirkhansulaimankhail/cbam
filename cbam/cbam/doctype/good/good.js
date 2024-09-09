// Copyright (c) 2024, phamos GmbH and contributors
// For license information, please see license.txt

// // Not working
// frappe.ui.form.on('Good', {
//  refresh(frm) {
//      frm.set_query("employee", (doc) => {
//          return {
//              filters: {
//                  "supplier_company": doc.supplier
//              }
//          }
//      });
//  }
// })

frappe.ui.form.on("Good", {
	refresh(frm) {
		frm.add_custom_button(__("Sent Email"), function () {
			frappe.call({
				method: "cbam.cbam.doctype.good.good.create_new_supplier_user", 
				args: {
					good: cur_frm.doc,
				},
			});
			frappe.call({
				method: "cbam.detail_confirmation_email.send_email", 
				args: {
					goods_list: cur_frm.docname,
				},
			});
		}, __("⚠️ Look out! ⚠️"));
	},
});
